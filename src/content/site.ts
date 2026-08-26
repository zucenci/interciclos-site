import type { Cta, ItemDeNavegacao } from './types';

export const site = {
  nome: 'InterCiclos',
  nomeCompleto: 'InterCiclos — Instituto de Formação e Centro de Pesquisa e Terapia',
  descricao:
    'Instituto de formação e centro de pesquisa e terapia dedicado ao desenvolvimento da Terapia Sistêmica Integrativa Contemporânea. Formação, prática clínica, pesquisa e desenvolvimento para psicólogos.',
  /** Ajuste para o domínio definitivo antes de publicar. */
  url: 'https://www.interciclos.com.br',
  idioma: 'pt-BR',
  fundacao: '2016',
} as const;

export const contato = {
  whatsappExibicao: '(49) 99150-4646',
  whatsappLink: 'https://wa.me/5549991504646',
  telefoneLink: 'tel:+5549991504646',
  /** Preencher com o e-mail institucional. */
  email: '',
  cidade: 'Chapecó',
  estado: 'Santa Catarina',
  estadoSigla: 'SC',
  instagram: 'https://www.instagram.com/inter.ciclos',
  instagramUsuario: '@inter.ciclos',
} as const;

/**
 * Link do WhatsApp com mensagem já escrita na caixa de texto. Cada botão do
 * site manda a sua: quem recebe entende de onde a pessoa veio e o que procura
 * sem precisar perguntar.
 */
export const whatsapp = (mensagem: string): string =>
  `${contato.whatsappLink}?text=${encodeURIComponent(mensagem)}`;

/** Navegação principal. "Formações e atividades" abre submenu acessível. */
export const navegacao: ItemDeNavegacao[] = [
  {
    rotulo: 'Especialização',
    href: '/especializacao',
    descricao: 'Terapia de Casal e Família',
  },
  {
    rotulo: 'Formações e atividades',
    href: '/#frentes',
    filhos: [
      {
        rotulo: 'Clínica Social',
        href: '/clinica-social',
        descricao: 'Atendimentos supervisionados e acesso à psicoterapia',
      },
      {
        rotulo: 'Grupos de Estudos',
        href: '/grupos-de-estudos',
        descricao: 'Formação continuada em temas contemporâneos',
      },
      {
        rotulo: 'Círculo Acadêmico',
        href: '/circulo-academico',
        descricao: 'Pensamento sistêmico durante a graduação',
      },
      {
        rotulo: 'Grupo de Pesquisa',
        href: '/grupo-de-pesquisa',
        descricao: 'Produção científica em Terapia Sistêmica',
      },
      {
        rotulo: 'O Lado de Dentro do Terapeuta',
        href: '/lado-de-dentro-do-terapeuta',
        descricao: 'Oficina de imersão sobre o self do terapeuta',
      },
      {
        rotulo: 'Eventos',
        href: '/#eventos',
        descricao: 'Encontros científicos, workshops e experiências formativas',
      },
    ],
  },
  { rotulo: 'Sobre', href: '/sobre' },
];

export const ctaPrincipal: Cta = {
  rotulo: 'Contato',
  href: whatsapp('Olá! Vim pelo site do InterCiclos e gostaria de mais informações.'),
  externo: true,
};

export type LinkRodape = {
  rotulo: string;
  href: string;
  externo?: boolean;
};

/** Blocos de link do rodapé. */
export const rodape: {
  institucional: LinkRodape[];
  formacoes: LinkRodape[];
  assinatura: string;
} = {
  institucional: [
    { rotulo: 'Sobre o InterCiclos', href: '/sobre' },
    { rotulo: 'Nossas diretoras', href: '/sobre#diretoras' },
    { rotulo: 'Corpo docente', href: '/sobre#corpo-docente' },
    {
      rotulo: 'Contato no WhatsApp',
      href: whatsapp('Olá! Vim pelo site do InterCiclos e gostaria de falar com a equipe.'),
      externo: true,
    },
  ],
  formacoes: [
    { rotulo: 'Especialização/Formação', href: '/especializacao' },
    { rotulo: 'Clínica Social', href: '/clinica-social' },
    { rotulo: 'Grupos de Estudos', href: '/grupos-de-estudos' },
    { rotulo: 'Círculo Acadêmico', href: '/circulo-academico' },
    { rotulo: 'Grupo de Pesquisa', href: '/grupo-de-pesquisa' },
    { rotulo: 'O Lado de Dentro do Terapeuta', href: '/lado-de-dentro-do-terapeuta' },
    { rotulo: 'Eventos', href: '/#eventos' },
  ],
  assinatura:
    'Formação, prática clínica, pesquisa e desenvolvimento para psicólogos.',
};
