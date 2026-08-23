import type { Cta } from '../types';
import { contato } from '../site';

export const circuloAcademico = {
  cabecalho: {
    rotulo: 'Círculo Acadêmico de Estudos Sistêmicos',
    titulo: 'Um primeiro contato com o pensamento sistêmico',
    chamada: 'Ainda durante a graduação.',
    introducao: [
      'O Círculo Acadêmico aproxima estudantes de Psicologia da Terapia Sistêmica por meio de encontros de estudo, discussão e troca.',
      'Um espaço para ampliar o olhar sobre a clínica, conhecer diferentes possibilidades de atuação e começar a compreender indivíduos, casais e famílias a partir das relações e dos contextos nos quais estão inseridos.',
    ],
  },
  destaques: [
    {
      titulo: 'Estudo em grupo',
      descricao:
        'Leituras e discussões conduzidas de forma coletiva, com espaço para dúvidas e diferentes leituras do mesmo tema.',
    },
    {
      titulo: 'Olhar ampliado sobre a clínica',
      descricao:
        'Contato com possibilidades de atuação que raramente aparecem na grade da graduação.',
    },
    {
      titulo: 'Contexto e relações',
      descricao:
        'A compreensão de que indivíduos, casais e famílias não existem isolados dos contextos que habitam.',
    },
  ],
  formato: ['Encontros bimestrais', 'Presencial em Chapecó'],
  acao: { rotulo: 'Quero participar no WhatsApp', href: contato.whatsappLink, externo: true } as Cta,
};
