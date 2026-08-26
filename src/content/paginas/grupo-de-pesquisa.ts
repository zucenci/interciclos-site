import type { Cta } from '../types';
import { whatsapp } from '../site';

export const grupoDePesquisa = {
  cabecalho: {
    rotulo: 'Grupo de Pesquisa',
    titulo: 'A prática gera perguntas. A pesquisa ajuda a construir respostas.',
    chamada: 'Produção científica em Terapia Sistêmica.',
    introducao: [
      'O Grupo de Pesquisa do InterCiclos nasce do compromisso com a produção de conhecimento científico e com o desenvolvimento da Terapia Sistêmica no Brasil.',
      'O espaço aproxima prática clínica e pesquisa, incentivando psicólogos a investigar questões que surgem no cotidiano profissional e transformá-las em conhecimento.',
    ],
  },
  participacao: {
    titulo: 'Quem pode integrar',
    paragrafo:
      'Alunos vinculados às turmas de Especialização do InterCiclos podem integrar o grupo e participar da produção científica desenvolvida pelo Instituto.',
    acao: { rotulo: 'Conheça a Especialização', href: '/especializacao' } as Cta,
  },
  /**
   * PENDENTE: publicações, linhas de pesquisa e trabalhos apresentados.
   * Enquanto a lista estiver vazia, a seção não é renderizada.
   */
  producoes: [] as Array<{ titulo: string; autores: string; veiculo: string; ano: string; href?: string }>,
  acao: {
    rotulo: 'Falar no WhatsApp',
    href: whatsapp('Olá! Vim pelo site do InterCiclos e gostaria de saber mais sobre o Grupo de Pesquisa.'),
    externo: true,
  } as Cta,
};
