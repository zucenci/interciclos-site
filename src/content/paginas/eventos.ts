import type { Cta } from '../types';
import { contato } from '../site';

export type Evento = {
  titulo: string;
  data: string;
  /** Formato ISO para o atributo dateTime — ex.: '2027-03-12'. */
  dataISO: string;
  local: string;
  descricao: string;
  href?: string;
};

export const eventos = {
  cabecalho: {
    rotulo: 'Eventos',
    titulo: 'Conhecimento também se constrói nos encontros.',
    chamada: 'Encontros científicos, workshops e experiências formativas.',
    introducao: [
      'Ao longo de sua trajetória, o InterCiclos promove eventos, workshops, encontros científicos e experiências formativas que aproximam profissionais, pesquisadores, estudantes e diferentes perspectivas sobre a Psicologia e as relações humanas.',
      'São espaços criados para provocar reflexão, atualizar conhecimentos e fortalecer uma comunidade profissional comprometida com uma prática clínica responsável.',
    ],
  },
  /**
   * PENDENTE: agenda real de eventos.
   * Enquanto a lista estiver vazia, a página exibe o aviso de agenda em
   * construção e o convite para acompanhar as novidades.
   */
  agenda: [] as Evento[],
  agendaVazia: {
    titulo: 'A próxima agenda está sendo construída.',
    paragrafo:
      'Assim que as datas dos próximos encontros forem confirmadas, elas aparecem aqui. Para receber os avisos em primeira mão, fale com a nossa equipe.',
  },
  acao: { rotulo: 'Falar no WhatsApp', href: contato.whatsappLink, externo: true } as Cta,
};
