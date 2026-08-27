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
 * PENDENTE DE VALIDAÇÃO INSTITUCIONAL.
 *
 * As listas trazem as credenciais fornecidas. Os textos de trajetória são
 * redação editorial construída a partir dessas mesmas credenciais — não
 * acrescentam fatos novos, mas devem ser lidos e aprovados pelas diretoras
 * antes da publicação. Os componentes ignoram listas e strings vazias.
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
      'Cristiane Batista é psicóloga e atua com um olhar atento às relações humanas e à forma como os vínculos influenciam a vida pessoal e profissional. No consultório, trabalha com casais e famílias pela abordagem sistêmica, buscando compreender cada história em sua complexidade e singularidade. Também leva essa perspectiva para o trabalho com equipes, supervisões e palestras, contribuindo para relações mais conscientes e para o desenvolvimento de pessoas e profissionais.',
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
      'Autora dos livros: "Quando o Divórcio Acontece só no Papel" e "O Self do Terapeuta"',
    ],
    trajetoria:
      'Danielle Doss Damo é psicóloga e dedica seu trabalho à compreensão das relações, dos vínculos e das transformações que atravessam a vida familiar. Sua atuação combina a prática clínica com a reflexão e a produção de conhecimento sobre temas relacionados à psicoterapia, aos relacionamentos e à experiência de terapeutas e pacientes. Esse olhar também se expressa em seus livros, supervisões e palestras, nos quais compartilha sua experiência e seus estudos com outros profissionais.',
  },
];

/**
 * PENDENTE: relação nominal do corpo docente.
 * Enquanto vazia, a página apresenta somente o texto institucional.
 */
export const docentes: Array<{ nome: string; titulacao: string; atuacao: string }> = [];
