import type { Frente } from './types';

/**
 * As frentes de atuação do Instituto, na ordem em que devem aparecer.
 * A Especialização é o produto âncora (ancora: true) e recebe destaque
 * visual e hierárquico em toda a navegação do site.
 */
export const frentes: Frente[] = [
  {
    slug: 'especializacao',
    nome: 'Especialização/Formação',
    chamada: 'Conhecimento que encontra a prática.',
    resumo:
      'Percurso teórico-prático de dois anos para psicólogos que desejam desenvolver sua atuação a partir da abordagem sistêmica contemporânea.',
    href: '/especializacao',
    ancora: true,
    formato: ['2 anos', 'Aulas mensais', 'Chapecó e Passo Fundo'],
  },
  {
    slug: 'clinica-social',
    nome: 'Clínica Social',
    chamada: 'Formação clínica com responsabilidade.',
    resumo:
      'Atendimentos supervisionados para alunos da Especialização e acesso à psicoterapia com valores sociais para a comunidade.',
    href: '/clinica-social',
    formato: ['Atendimentos online', 'Supervisão mensal'],
  },
  {
    slug: 'grupos-de-estudos',
    nome: 'Grupos de Estudos',
    chamada: 'A clínica muda. O estudo precisa acompanhar.',
    resumo:
      'Formação continuada dedicada ao aprofundamento de temas que fazem parte das demandas contemporâneas da prática clínica.',
    href: '/grupos-de-estudos',
    formato: ['Encontros mensais', 'Formato online'],
  },
  {
    slug: 'circulo-academico',
    nome: 'Círculo Acadêmico de Estudos Sistêmicos',
    chamada: 'Um primeiro contato com o pensamento sistêmico.',
    resumo:
      'Encontros de estudo, discussão e troca que aproximam estudantes de Psicologia da Terapia Sistêmica ainda durante a graduação.',
    href: '/circulo-academico',
    formato: ['Encontros bimestrais', 'Presencial em Chapecó'],
  },
  {
    slug: 'grupo-de-pesquisa',
    nome: 'Grupo de Pesquisa',
    chamada: 'A prática gera perguntas. A pesquisa constrói respostas.',
    resumo:
      'Espaço que aproxima prática clínica e pesquisa, incentivando psicólogos a transformar questões do cotidiano profissional em conhecimento.',
    href: '/grupo-de-pesquisa',
    formato: ['Aberto a alunos da Especialização'],
  },
  {
    slug: 'lado-de-dentro-do-terapeuta',
    nome: 'O Lado de Dentro do Terapeuta',
    chamada: 'Antes da técnica, existe uma pessoa.',
    resumo:
      'Oficina de imersão dedicada à pessoa do terapeuta: ressonâncias, limites, potencialidades e consciência sobre o próprio trabalho clínico.',
    href: '/lado-de-dentro-do-terapeuta',
    formato: ['Imersão presencial', 'Uma vez ao ano'],
  },
];

export const frentePorSlug = (slug: string): Frente | undefined =>
  frentes.find((frente) => frente.slug === slug);

/** Todas as frentes exceto a âncora — usado em listagens complementares. */
export const frentesComplementares = frentes.filter((frente) => !frente.ancora);

/**
 * Frentes exibidas na grade da home. Os eventos não entram na lista: vivem
 * apenas no bloco dedicado logo abaixo da grade.
 */
export const frentesDeFormacao = frentes;
