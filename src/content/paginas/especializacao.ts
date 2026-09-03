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
  /**
   * Grade curricular completa. Lista longa e sem descrição por item — a página
   * a apresenta em colunas, para que a leitura desça cada coluna na ordem em
   * que as disciplinas acontecem.
   */
  conteudoProgramatico: {
    rotulo: 'Conteúdo',
    titulo: 'Conteúdo programático',
    chamada:
      'As horas teóricas percorrem os fundamentos da abordagem sistêmica e os temas que atravessam a clínica de casais e famílias hoje.',
    disciplinas: [
      'Evolução do Pensamento Sistêmico',
      'Epistemologia',
      'Bioética',
      'Terapia Familiar no Brasil',
      'Escolas Base da Terapia Familiar',
      'Conceitos e Técnicas da abordagem Sistêmica',
      'Escolas Contemporâneas de Terapia Familiar I e II',
      'Ciclo Vital da Família — Rituais, Mitos e Ritos de Passagem',
      'Teoria do Apego (infantil e adulto)',
      'Suicídio, morte e doenças crônicas',
      'Famílias Contemporâneas: transgêneras, monoparentais, homoafetivas, monogâmicas e poligâmicas',
      'Intimidade conjugal',
      'Políticas Públicas',
      'Violência Familiar e Relacionamentos Abusivos',
      'Relação com o dinheiro',
      'Infidelidade',
      'Divórcio',
      'Trabalhos de Self do Terapeuta',
      'Atendimentos de casais e famílias em sala de espelho ou supervisão de casos',
    ],
  },
  /** As duas ênfases sob as quais acontecem as horas de prática. */
  enfases: {
    rotulo: 'Ênfases',
    titulo: 'Duas ênfases para a prática clínica',
    paragrafo:
      'As horas práticas acontecem em duas ênfases. Ambas partem do atendimento de casais e famílias reais — o que muda é o enquadre em que ele acontece e a forma como é acompanhado.',
    itens: [
      {
        id: 'enfase-1',
        rotulo: 'Ênfase 1',
        titulo: 'Sala de espelho com equipe terapêutica',
        descricao:
          'O aluno atende casais e famílias em sala de espelho, acompanhado por uma equipe terapêutica que observa o encontro e discute com ele as escolhas feitas em sessão.',
      },
      {
        id: 'enfase-2',
        rotulo: 'Ênfase 2',
        /* A quebra é intencional: mantém os dois títulos em duas linhas, e
           com isso os parágrafos dos cartões começam na mesma altura. */
        titulo: 'Supervisão de\natendimentos privados',
        descricao:
          'Os atendimentos privados de casal e família conduzidos pelo aluno são levados à supervisão, que acompanha de perto as decisões tomadas ao longo de cada caso.',
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
      { rotulo: 'Carga horária', valor: '360h/a' },
      { rotulo: 'Aulas', valor: 'Mensais, sextas e sábados' },
      { rotulo: 'Turmas', valor: 'Vagas limitadas' },
      { rotulo: 'Chapecó', valor: 'Presencial — 15 vagas' },
      { rotulo: 'Passo Fundo', valor: 'Formato híbrido — 10 vagas' },
    ] as DadoEstrutural[],
    /** Divisão das 360h/a entre teoria e prática. */
    cargaHoraria: {
      titulo: 'Como se dividem as 360h/a',
      partes: [
        { horas: '180h/a', descricao: 'Teóricas' },
        {
          horas: '180h/a',
          descricao: 'Atendimentos práticos e trabalho do self do terapeuta',
        },
      ],
    },
    /** Fora da lista: é a informação que move a decisão de inscrição. */
    novaTurma: { rotulo: 'Nova turma', valor: 'Março de 2027' },
    /**
     * O reconhecimento pelo MEC e a menção à ABRATEF foram confirmados pela
     * direção. PENDENTE: validar institucionalmente a redação sobre a parceria
     * com a Faculdade Mario Quintana antes da publicação.
     */
    certificacao:
      'Formação com reconhecimento pelo MEC, realizada em parceria com a Faculdade Mario Quintana, e que atende aos requisitos da ABRATEF.',
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
