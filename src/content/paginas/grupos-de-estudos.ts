import type { Cta } from '../types';
import { whatsapp } from '../site';

export const gruposDeEstudos = {
  cabecalho: {
    rotulo: 'Grupos de Estudos',
    titulo: 'A clínica muda. O estudo precisa acompanhar.',
    chamada: 'Formação continuada para as demandas contemporâneas.',
    introducao: [
      'Os Grupos de Estudos do InterCiclos são espaços de formação continuada destinados ao aprofundamento de temas que fazem parte das demandas contemporâneas da prática clínica.',
      'Os encontros aproximam teoria, experiência profissional, discussão e troca entre psicólogos. Mais do que consumir conteúdo, a proposta é criar espaço para pensar a clínica.',
    ],
  },
  modalidades: {
    rotulo: 'Modalidades atuais',
    titulo: 'Temas em curso',
    itens: [
      {
        titulo: 'Infidelidade',
        descricao:
          'Discussões e estudos sobre os atravessamentos da infidelidade nas relações conjugais e seus impactos na prática clínica.',
      },
      {
        titulo: 'Terapia Infantil e Famílias',
        descricao:
          'Um olhar sistêmico para a infância, compreendendo a criança dentro das relações, vínculos e contextos familiares.',
      },
      {
        titulo: 'Teoria do Apego',
        descricao:
          'Estudo das relações de apego e suas repercussões na construção dos vínculos e na prática terapêutica.',
      },
    ],
  },
  formato: ['Encontros mensais', 'Formato online'],
  acao: {
    rotulo: 'Falar no WhatsApp',
    href: whatsapp('Olá! Vim pelo site do InterCiclos e gostaria de saber mais sobre os Grupos de Estudos.'),
    externo: true,
  } as Cta,
};
