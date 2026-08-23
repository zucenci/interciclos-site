import type { Cta } from './types';

export const heroHome = {
  rotulo: 'Instituto de Formação e Centro de Pesquisa e Terapia',
  titulo: 'Formação, prática clínica, pesquisa e desenvolvimento para psicólogos.',
  paragrafos: [
    'Formamos e conectamos psicólogos que desejam ampliar seu repertório teórico, desenvolver maior segurança clínica e compreender as relações humanas a partir de uma perspectiva sistêmica, ética e contemporânea.',
  ],
  pilares: ['Formação', 'Ciência', 'Prática', 'Relações'],
  acoes: [
    { rotulo: 'Conheça o InterCiclos', href: '/sobre' },
    { rotulo: 'Veja nossas formações e atividades', href: '/#frentes' },
  ] as Cta[],
};

export const manifestoHome = {
  rotulo: 'O Instituto',
  titulo: 'Um instituto em constante movimento',
  paragrafos: [
    'A formação de um terapeuta não termina com a graduação. Ela continua a cada atendimento, supervisão, estudo, encontro e questionamento que surge na prática clínica.',
    'O InterCiclos nasceu do desejo de criar um espaço onde psicólogos pudessem continuar esse desenvolvimento de maneira consistente, unindo conhecimento científico, experiência clínica, reflexão e transformação pessoal.',
  ],
  fechamento: [
    'Mais do que oferecer cursos, construímos espaços de aprendizagem, troca e desenvolvimento contínuo.',
    'Porque cuidar das relações também exige continuar olhando para quem cuida delas.',
  ],
};

export const destaqueEspecializacaoHome = {
  rotulo: 'Produto âncora',
  titulo: 'Especialização/Formação em Terapia de Casal e Família',
  chamada: 'Conhecimento que encontra a prática.',
  paragrafo:
    'Um percurso teórico-prático que integra conhecimento, prática clínica e desenvolvimento do self do terapeuta, aproximando desde cedo o conteúdo estudado da realidade encontrada no consultório.',
  dados: [
    { rotulo: 'Duração', valor: '2 anos' },
    { rotulo: 'Aulas', valor: 'Mensais, sextas e sábados' },
    { rotulo: 'Chapecó', valor: 'Presencial' },
    { rotulo: 'Passo Fundo', valor: 'Formato híbrido' },
    { rotulo: 'Nova turma', valor: 'Março de 2027' },
  ],
  acao: { rotulo: 'Quero conhecer a Especialização', href: '/especializacao' } as Cta,
};

export const frentesHome = {
  rotulo: 'Frentes de atuação',
  titulo: 'Diferentes caminhos para continuar se desenvolvendo',
  chamada:
    'Cada frente do Instituto responde a um momento distinto da trajetória profissional — e todas se sustentam na mesma compreensão sistêmica das relações.',
};

export const depoimentosHome = {
  rotulo: 'Depoimentos',
  titulo: 'Quem passa pelo InterCiclos também ajuda a contar essa história.',
  marcos: [
    'Mais segurança para atender.',
    'Novas perspectivas para a clínica.',
    'Trocas profissionais que continuam depois das aulas.',
    'Novas possibilidades de atuação.',
    'E, muitas vezes, transformações que ultrapassam o consultório.',
  ],
};
