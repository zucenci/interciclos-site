import type { Cta, DadoEstrutural } from '../types';
import { whatsapp } from '../site';

export const especializacao = {
  cabecalho: {
    rotulo: 'Especialização/Formação',
    titulo: 'Terapia de Casal e Família',
    chamada: 'Conhecimento que encontra a prática.',
    introducao: [
      'A Especialização/Formação em Terapia de Casal e Família do InterCiclos é um percurso teórico-prático para psicólogos que desejam desenvolver sua atuação a partir da abordagem sistêmica contemporânea.',
      'A formação integra conhecimento teórico, prática clínica e desenvolvimento do self do terapeuta, aproximando desde cedo o conteúdo estudado da realidade encontrada no consultório.',
    ],
  },
  paraQuem: {
    rotulo: 'Para quem é',
    titulo: 'Para psicólogos em diferentes pontos da trajetória',
    paragrafos: [
      'É destinada tanto a profissionais que desejam ampliar suas habilidades no atendimento de casais e famílias quanto a psicólogos que buscam uma especialização ou estão construindo uma nova direção para sua atuação profissional.',
    ],
    imagem: {
      src: '/images/para-quem-e.jpg',
      alt: 'Duas psicólogas sentadas lado a lado folheando livros de terapia de casal e família',
    },
  },
  percurso: {
    rotulo: 'O que você encontra',
    titulo: 'Ao longo da formação, o aluno encontra:',
    itens: [
      {
        titulo: 'Fundamentos e atualizações da abordagem sistêmica',
        descricao:
          'A base teórica do pensamento sistêmico revisitada à luz das discussões contemporâneas.',
      },
      {
        titulo: 'Conteúdos direcionados à clínica de casais e famílias',
        descricao:
          'Recursos, leituras e intervenções construídos para as demandas específicas do atendimento relacional.',
      },
      {
        titulo: 'Professores que também vivenciam a prática clínica',
        descricao:
          'Conceitos discutidos a partir de decisões e complexidades reais do consultório.',
      },
      {
        titulo: 'Discussões de situações e desafios do consultório',
        descricao:
          'Espaço permanente para trazer casos, impasses e perguntas surgidas na própria prática.',
      },
      {
        titulo: 'Desenvolvimento do self do terapeuta',
        descricao:
          'A pessoa do profissional compreendida como parte essencial do processo terapêutico.',
      },
      {
        titulo: 'Possibilidade de participação na Clínica Social',
        descricao:
          'A partir do primeiro ano, com atendimentos acompanhados por supervisão.',
      },
      {
        titulo: 'Atendimentos supervisionados',
        descricao:
          'Experiência prática construída com acompanhamento profissional contínuo.',
      },
      {
        titulo: 'Networking e troca entre profissionais',
        descricao:
          'Uma rede de psicólogos que continua ativa depois do término das aulas.',
      },
      {
        titulo: 'Integração a uma comunidade de formação contínua',
        descricao:
          'Acesso às demais frentes do Instituto: pesquisa, grupos de estudos, oficinas e eventos.',
      },
    ],
  },
  clinicaSocial: {
    titulo: 'Prática clínica desde o primeiro ano',
    paragrafo:
      'A partir do primeiro ano, os alunos podem integrar a Clínica Social do InterCiclos e iniciar atendimentos supervisionados, ampliando a experiência prática com acompanhamento profissional.',
    acao: { rotulo: 'Conheça a Clínica Social', href: '/clinica-social' } as Cta,
  },
  estrutura: {
    rotulo: 'Estrutura',
    titulo: 'Como a formação acontece',
    dados: [
      { rotulo: 'Duração', valor: '2 anos' },
      { rotulo: 'Aulas', valor: 'Mensais, sextas e sábados' },
      { rotulo: 'Chapecó', valor: 'Presencial' },
      { rotulo: 'Passo Fundo', valor: 'Formato híbrido' },
    ] as DadoEstrutural[],
    /** Fora da lista: é a informação que move a decisão de inscrição. */
    novaTurma: { rotulo: 'Nova turma', valor: 'Março de 2027' },
    /**
     * PENDENTE: validar institucionalmente a redação sobre a parceria com a
     * Faculdade Mario Quintana e a menção aos requisitos da ABRATEF antes
     * da publicação (conforme observações do documento de textos).
     */
    certificacao:
      'A formação é realizada em parceria com a Faculdade Mario Quintana e atende aos requisitos da ABRATEF.',
  },
  chamadaFinal: {
    titulo: 'Pronto para começar este ciclo?',
    paragrafo:
      'Converse com a equipe do InterCiclos para receber informações sobre investimento, processo de inscrição e datas da próxima turma.',
    acao: {
      rotulo: 'Falar no WhatsApp',
      href: whatsapp(
        'Olá! Vim pelo site do InterCiclos e gostaria de saber mais sobre a Especialização/Formação em Terapia de Casal e Família.',
      ),
      externo: true,
    } as Cta,
  },
};
