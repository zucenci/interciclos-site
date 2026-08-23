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
        href: '/eventos',
        descricao: 'Encontros científicos, workshops e experiências formativas',
      },
    ],
  },
  { rotulo: 'Sobre', href: '/sobre' },
];

export const ctaPrincipal: Cta = {
  rotulo: 'Contato',
  href: contato.whatsappLink,
  externo: true,
};

/** Blocos de link do rodapé. */
export const rodape = {
  institucional: [
    { rotulo: 'Sobre o InterCiclos', href: '/sobre' },
    { rotulo: 'Nossas diretoras', href: '/sobre#diretoras' },
    { rotulo: 'Corpo docente', href: '/sobre#corpo-docente' },
    { rotulo: 'Contato no WhatsApp', href: contato.whatsappLink, externo: true },
  ],
  formacoes: [
    { rotulo: 'Especialização/Formação', href: '/especializacao' },
    { rotulo: 'Clínica Social', href: '/clinica-social' },
    { rotulo: 'Grupos de Estudos', href: '/grupos-de-estudos' },
    { rotulo: 'Círculo Acadêmico', href: '/circulo-academico' },
    { rotulo: 'Grupo de Pesquisa', href: '/grupo-de-pesquisa' },
    { rotulo: 'O Lado de Dentro do Terapeuta', href: '/lado-de-dentro-do-terapeuta' },
    { rotulo: 'Eventos', href: '/eventos' },
  ],
  assinatura:
    'Formação, prática clínica, pesquisa e desenvolvimento para psicólogos.',
} as const;
