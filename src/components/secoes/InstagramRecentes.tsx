import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Botao } from '@/components/ui/Botao';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { contato } from '@/content/site';
import { buscarPostsInstagram } from '@/lib/instagram';
import estilos from './InstagramRecentes.module.css';

type Props = {
  quantidade?: number;
  titulo?: string;
  chamada?: string;
};

/** Recorta a legenda para virar texto alternativo da imagem. */
function textoAlternativo(legenda: string) {
  if (!legenda) return `Publicação do InterCiclos no Instagram`;
  const limpa = legenda.replace(/\s+/g, ' ').trim();
  return limpa.length > 120 ? `${limpa.slice(0, 117)}…` : limpa;
}

/**
 * Últimos posts do Instagram do Instituto.
 *
 * Busca no servidor (com cache de uma hora) e, quando não há token
 * configurado ou a API falha, mostra apenas o convite para o perfil — a seção
 * nunca fica quebrada nem vazia.
 */
export async function InstagramRecentes({
  quantidade = 4,
  titulo = 'O que acontece no dia a dia',
  chamada = 'Encontros, bastidores e avisos aparecem primeiro no nosso Instagram.',
}: Props) {
  const posts = await buscarPostsInstagram(quantidade);

  return (
    <Secao fundo="papel">
      <Container>
        <Revelar>
          <TituloDeSecao
            rotulo="Instagram"
            titulo={titulo}
            chamada={chamada}
            className={estilos.titulo}
          />
        </Revelar>

        {posts.length > 0 ? (
          <Revelar atraso={80}>
            <ul className={estilos.grade}>
              {posts.map((post) => (
                <li key={post.id} className={estilos.item}>
                  <a
                    href={post.permalink}
                    className={estilos.post}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={post.imagem}
                      alt={textoAlternativo(post.legenda)}
                      fill
                      sizes="(max-width: 620px) 50vw, (max-width: 1000px) 33vw, 25vw"
                      className={estilos.imagem}
                    />
                    {post.ehVideo ? <span className={estilos.selo}>Vídeo</span> : null}
                    <span className="apenasLeitorDeTela"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Revelar>
        ) : null}

        <Revelar atraso={140} className={estilos.acoes}>
          <Botao href={contato.instagram} externo variante="secundario" tamanho="padrao">
            Seguir {contato.instagramUsuario}
          </Botao>
        </Revelar>
      </Container>
    </Secao>
  );
}
