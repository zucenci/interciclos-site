import type { Cta } from './types';

/**
 * Seção "Faça parte do InterCiclos" — orienta o visitante pelo momento
 * profissional em que ele está, e não pelo formato do produto.
 */
export const facaParte = {
  rotulo: 'Faça parte',
  titulo: 'Existem diferentes momentos na trajetória de um psicólogo.',
  momentos: [
    'O momento de buscar uma especialização.',
    'De aprofundar um tema.',
    'De voltar a estudar.',
    'De pesquisar.',
    'De encontrar supervisão e prática.',
    'De conhecer outros profissionais.',
    'Ou simplesmente de perceber que é hora de olhar novamente para a própria forma de fazer clínica.',
  ],
  fechamento:
    'Para cada um desses momentos, o InterCiclos constrói espaços de formação, troca e desenvolvimento.',
  pergunta: 'Em qual ciclo profissional você está agora?',
  atalhos: [
    { rotulo: 'Especialização', href: '/especializacao' },
    { rotulo: 'Grupos de Estudos', href: '/grupos-de-estudos' },
    { rotulo: 'Clínica Social', href: '/clinica-social' },
    { rotulo: 'Círculo Acadêmico', href: '/circulo-academico' },
    { rotulo: 'Grupo de Pesquisa', href: '/grupo-de-pesquisa' },
    { rotulo: 'Oficinas e eventos', href: '/lado-de-dentro-do-terapeuta' },
  ] as Cta[],
};
