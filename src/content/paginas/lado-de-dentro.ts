import type { Cta } from '../types';
import { whatsapp } from '../site';

export const ladoDeDentro = {
  cabecalho: {
    rotulo: 'O Lado de Dentro do Terapeuta',
    titulo: 'Antes da técnica, existe uma pessoa.',
    chamada: 'Uma oficina de imersão dedicada ao self do terapeuta.',
    introducao: [
      'O terapeuta também é atravessado pelas histórias que escuta. Experiências pessoais, crenças, limites, emoções e ressonâncias podem aparecer no encontro terapêutico e influenciar a forma como cada profissional percebe e conduz a clínica.',
      'Por isso, o InterCiclos compreende o trabalho do self do terapeuta como parte essencial da formação profissional.',
    ],
  },
  proposta: {
    rotulo: 'A oficina',
    titulo: 'Um espaço protegido para olhar para dentro',
    paragrafos: [
      'O Lado de Dentro do Terapeuta é uma oficina de imersão dedicada à pessoa do terapeuta. Um espaço protegido para olhar para suas próprias ressonâncias, reconhecer limites, compreender potencialidades e desenvolver maior consciência sobre aquilo que também acontece dentro de si durante o trabalho clínico.',
    ],
    enfase: [
      'Não é somente sobre aprender a atender.',
      'É também sobre compreender quem está presente quando você ocupa a cadeira de terapeuta.',
    ],
  },
  eixos: [
    { titulo: 'Ressonâncias', descricao: 'O que das histórias escutadas ecoa na própria história.' },
    { titulo: 'Limites', descricao: 'Reconhecer fronteiras pessoais e profissionais como parte do cuidado.' },
    { titulo: 'Potencialidades', descricao: 'Identificar recursos próprios que sustentam o trabalho clínico.' },
    { titulo: 'Consciência', descricao: 'Perceber o que acontece dentro de si durante o encontro terapêutico.' },
  ],
  formato: ['Imersão presencial em Chapecó', 'Realizada uma vez ao ano'],
  acao: {
    rotulo: 'Quero participar no WhatsApp',
    href: whatsapp(
      'Olá! Vim pelo site do InterCiclos e gostaria de participar da oficina O Lado de Dentro do Terapeuta.',
    ),
    externo: true,
  } as Cta,
};
