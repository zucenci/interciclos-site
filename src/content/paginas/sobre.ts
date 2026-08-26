import type { Cta, Diretora } from '../types';
import { whatsapp } from '../site';

export const sobre = {
  cabecalho: {
    rotulo: 'Sobre o InterCiclos',
    titulo: 'Relações estão em constante transformação. A formação do terapeuta também.',
    introducao: [
      'O InterCiclos Instituto de Formação e Centro de Pesquisa e Terapia nasceu do desejo de construir um espaço dedicado à formação de profissionais tecnicamente preparados, eticamente comprometidos e sensíveis à complexidade das relações humanas.',
      'Nossa compreensão de formação ultrapassa a transmissão de técnicas. Formar um terapeuta envolve teoria, prática, ciência, supervisão, reflexão, responsabilidade clínica e desenvolvimento pessoal.',
      'Por isso, integramos ensino, pesquisa, prática clínica, trabalho do self do terapeuta e comunidade.',
    ],
  },
  compromissos: {
    rotulo: 'Compromissos',
    titulo: 'Nossa atuação é sustentada por cinco compromissos',
    itens: [
      {
        titulo: 'Excelência acadêmica',
        descricao: 'Conhecimento consistente e formação em constante atualização.',
      },
      {
        titulo: 'Prática clínica responsável',
        descricao: 'A teoria precisa encontrar a realidade do consultório.',
      },
      {
        titulo: 'Produção científica',
        descricao: 'Pesquisar também é uma forma de transformar a prática.',
      },
      {
        titulo: 'Cuidado com as relações',
        descricao:
          'Indivíduos não existem isoladamente. Relações, vínculos e contextos fazem parte da nossa compreensão clínica.',
      },
      {
        titulo: 'Desenvolvimento do terapeuta',
        descricao: 'A pessoa do profissional também faz parte do processo terapêutico.',
      },
    ],
  },
  diretoras: {
    rotulo: 'Nossas diretoras',
    titulo: 'Quem conduz o Instituto',
    chamada:
      'A direção do InterCiclos reúne trajetórias construídas entre a docência, a pesquisa e o consultório.',
  },
  corpoDocente: {
    rotulo: 'Corpo docente',
    titulo: 'Professores que ensinam aquilo que também vivenciam na clínica.',
    paragrafos: [
      'O corpo docente do InterCiclos reúne profissionais com experiência acadêmica e clínica, aproximando o conhecimento científico das situações encontradas diariamente no consultório.',
      'Essa conexão permite que conceitos sejam discutidos não apenas a partir dos livros, mas também a partir dos desafios, decisões e complexidades que fazem parte da prática terapêutica.',
    ],
    acao: {
      rotulo: 'Fale com a nossa equipe',
      href: whatsapp('Olá! Vim pelo site do InterCiclos e gostaria de falar com a equipe.'),
      externo: true,
    } as Cta,
  },
};

/**
 * PENDENTE DE CONTEÚDO INSTITUCIONAL.
 *
 * Inserir formação acadêmica, especializações, experiência clínica e docente
 * e o texto de trajetória de cada diretora. Os componentes ignoram listas
 * vazias e strings vazias — preencha na ordem que o material ficar pronto.
 */
export const diretoras: Diretora[] = [
  {
    nome: 'Cristiane Batista',
    cargo: 'Diretora do InterCiclos',
    foto: '/images/cristiane-batista.jpg',
    fotoPosicao: '50% 60%',
    fotoScale: 1.0,
    formacaoAcademica: [
      'Psicóloga',
      'Mestre em Administração',
      'Aluna da Accademia di Psicoterapia della Famiglia',
    ],
    especializacoes: [
      'Terapeuta de Casal e Família',
      'Supervisora Clínica',
      'Palestrante',
    ],
    atuacao: [
      'Diretora do InterCiclos',
      'Experiência em Desenvolvimento de Equipes',
    ],
    trajetoria:
      'Psicóloga, Mestre em Administração e Terapeuta de Casal e Família. Aluna da Accademia di Psicoterapia della Famiglia, supervisora, palestrante, diretora do InterCiclos e especialista em desenvolvimento de equipes.',
  },
  {
    nome: 'Danielle Doss Damo',
    cargo: 'Diretora do InterCiclos',
    foto: '/images/danielle-doss-damo.jpg',
    fotoPosicao: '22% 56%',
    fotoScale: 1.35,
    formacaoAcademica: [
      'Psicóloga',
      'Mestre em Psicologia',
      'Aluna da Accademia di Psicoterapia della Famiglia',
    ],
    especializacoes: [
      'Terapeuta de Casal e Família',
      'Supervisora Clínica',
      'Palestrante',
    ],
    atuacao: [
      'Diretora do InterCiclos',
      'Autora dos livros: "Quando o Divórcio Acontece só no Papel" e "O Self do Terapeuta: A cartografia dos tesouros escondidos no terapeuta"',
    ],
    trajetoria:
      'Psicóloga, Mestre em Psicologia e Terapeuta de Casal e Família. Aluna da Accademia di Psicoterapia della Famiglia, supervisora, palestrante, diretora do InterCiclos e autora das obras "Quando o Divórcio Acontece só no Papel" e "O Self do Terapeuta: A cartografia dos tesouros escondidos no terapeuta".',
  },
];

/**
 * PENDENTE: relação nominal do corpo docente.
 * Enquanto vazia, a página apresenta somente o texto institucional.
 */
export const docentes: Array<{ nome: string; titulacao: string; atuacao: string }> = [];
