import type { Cta } from '../types';
import { contato } from '../site';

export const clinicaSocial = {
  cabecalho: {
    rotulo: 'Clínica Social',
    titulo: 'Formação clínica com responsabilidade',
    chamada: 'Acesso à psicoterapia com propósito social.',
    introducao: [
      'A Clínica Social conecta duas dimensões essenciais do trabalho do InterCiclos: formação profissional e compromisso com a comunidade.',
      'Para os alunos da Especialização, representa a possibilidade de ampliar a experiência clínica por meio de atendimentos acompanhados por supervisão. Para a comunidade, amplia o acesso a atendimentos psicológicos com valores sociais.',
    ],
  },
  publicos: [
    {
      id: 'psicologos',
      rotulo: 'Para psicólogos',
      titulo: 'Prática clínica com acompanhamento',
      paragrafos: [
        'Alunos vinculados à Especialização podem participar da Clínica Social e realizar atendimentos supervisionados, aproximando teoria e prática dentro de uma estrutura de acompanhamento clínico.',
      ],
      condicoes: ['Supervisão obrigatória mensal', 'Atendimentos online'],
      acao: { rotulo: 'Quero participar como terapeuta', href: contato.whatsappLink, externo: true } as Cta,
    },
    {
      id: 'pacientes',
      rotulo: 'Para pacientes',
      titulo: 'Psicoterapia com valores sociais',
      paragrafos: [
        'A Clínica Social possibilita acesso à psicoterapia por meio de atendimentos realizados por profissionais vinculados ao processo de formação do InterCiclos e acompanhados por supervisão.',
      ],
      condicoes: ['Atendimentos online', 'Valores sociais'],
      acao: { rotulo: 'Busco atendimento no WhatsApp', href: contato.whatsappLink, externo: true } as Cta,
    },
  ],
};
