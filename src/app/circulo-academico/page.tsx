import type { Metadata } from 'next';
import { CabecalhoDePagina } from '@/components/secoes/CabecalhoDePagina';
import { ListaDeItens } from '@/components/secoes/ListaDeItens';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { circuloAcademico as conteudo } from '@/content/paginas/circulo-academico';

export const metadata: Metadata = {
  title: 'Círculo Acadêmico de Estudos Sistêmicos',
  description:
    'Encontros bimestrais em Chapecó que aproximam estudantes de Psicologia da Terapia Sistêmica ainda durante a graduação.',
  alternates: { canonical: '/circulo-academico' },
};

export default function PaginaCirculoAcademico() {
  return (
    <>
      <CabecalhoDePagina conteudo={conteudo.cabecalho} etiquetas={conteudo.formato} />

      <ListaDeItens
        itens={conteudo.destaques}
        rotulo="O que acontece nos encontros"
        titulo="Um espaço para ampliar o olhar sobre a clínica"
        fundo="suave"
        colunas="tresColunas"
      />

      <ChamadaDeContato
        titulo="Estuda Psicologia e quer participar?"
        paragrafo="Entre em contato para saber as datas dos próximos encontros e como se inscrever."
        acaoPrincipal={conteudo.acao}
      />
    </>
  );
}
