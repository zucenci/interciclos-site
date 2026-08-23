/* =========================================================================
   Tipos do conteúdo editorial do site.
   Toda a redação vive em /src/content — os componentes apenas apresentam.
   Para publicar conteúdo real, edite os arquivos desta pasta.
   ========================================================================= */

export type Cta = {
  rotulo: string;
  href: string;
  /** Abre em nova aba com rel="noopener noreferrer". */
  externo?: boolean;
};

export type ItemDeLista = {
  titulo: string;
  descricao?: string;
};

export type DadoEstrutural = {
  rotulo: string;
  valor: string;
};

/** Uma das frentes de atuação do Instituto. */
export type Frente = {
  slug: string;
  nome: string;
  /** Frase-conceito curta, usada como chamada nos cards. */
  chamada: string;
  resumo: string;
  href: string;
  /** Marca a Especialização como produto âncora de autoridade. */
  ancora?: boolean;
  /** Formato/periodicidade — ex.: "Encontros mensais", "Online". */
  formato?: string[];
};

export type Depoimento = {
  texto: string;
  autor: string;
  contexto?: string;
};

export type Diretora = {
  nome: string;
  cargo: string;
  /** Campos abaixo aguardam preenchimento institucional. Vazio = não renderiza. */
  formacaoAcademica: string[];
  especializacoes: string[];
  atuacao: string[];
  trajetoria: string;
  /** Caminho em /public/equipe. Vazio = exibe monograma. */
  foto?: string;
  /** Posição customizada da imagem (ex.: '22% 58%'). */
  fotoPosicao?: string;
  /** Fator de zoom/escala da foto (ex.: 1.55). */
  fotoScale?: number;
};

export type ItemDeNavegacao = {
  rotulo: string;
  href: string;
  descricao?: string;
  /** Abre em outra aba (links para fora do site). */
  externo?: boolean;
  filhos?: ItemDeNavegacao[];
};

export type CabecalhoDePagina = {
  rotulo: string;
  titulo: string;
  chamada: string;
  introducao: string[];
};
