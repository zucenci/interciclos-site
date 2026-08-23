import { contato } from '@/content/site';

/**
 * Últimos posts do Instagram do InterCiclos.
 *
 * Usa a Instagram API with Instagram Login (graph.instagram.com), que é a
 * sucessora da antiga Basic Display API. Ela exige uma conta profissional
 * (Business ou Creator) e um token de acesso de longa duração guardado em
 * `INSTAGRAM_TOKEN` — ver README, seção "Instagram".
 *
 * Sem token, ou se a API falhar, a função devolve uma lista vazia: a página
 * cai no bloco de convite para o perfil, em vez de quebrar.
 */

export type PostInstagram = {
  id: string;
  permalink: string;
  /** Imagem do post (ou capa, no caso de vídeo). */
  imagem: string;
  legenda: string;
  publicadoEm: string;
  ehVideo: boolean;
};

type MidiaDaApi = {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

const CAMPOS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';

/** Endereço do perfil, usado no bloco de convite quando não há posts. */
export const perfilInstagram = contato.instagram;

export async function buscarPostsInstagram(quantidade = 4): Promise<PostInstagram[]> {
  const token = process.env.INSTAGRAM_TOKEN;
  if (!token) return [];

  const endereco = new URL('https://graph.instagram.com/me/media');
  endereco.searchParams.set('fields', CAMPOS);
  endereco.searchParams.set('limit', String(quantidade));
  endereco.searchParams.set('access_token', token);

  try {
    // Uma hora de cache: o feed muda pouco e a API tem limite de chamadas.
    const resposta = await fetch(endereco, { next: { revalidate: 3600 } });

    if (!resposta.ok) {
      console.error(
        `[instagram] a API respondeu ${resposta.status}. Verifique se o INSTAGRAM_TOKEN ainda é válido.`,
      );
      return [];
    }

    const { data } = (await resposta.json()) as { data?: MidiaDaApi[] };

    return (data ?? [])
      .map((midia) => {
        const ehVideo = midia.media_type === 'VIDEO';
        const imagem = ehVideo ? midia.thumbnail_url : midia.media_url;
        if (!imagem) return null;

        return {
          id: midia.id,
          permalink: midia.permalink,
          imagem,
          legenda: midia.caption?.trim() ?? '',
          publicadoEm: midia.timestamp,
          ehVideo,
        } satisfies PostInstagram;
      })
      .filter((post): post is PostInstagram => post !== null)
      .slice(0, quantidade);
  } catch (erro) {
    console.error('[instagram] não foi possível buscar os posts:', erro);
    return [];
  }
}
