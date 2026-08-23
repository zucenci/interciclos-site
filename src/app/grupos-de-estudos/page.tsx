import type { Metadata } from 'next';
import { CabecalhoDePagina } from '@/components/secoes/CabecalhoDePagina';
import { ListaDeItens } from '@/components/secoes/ListaDeItens';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { gruposDeEstudos as conteudo } from '@/content/paginas/grupos-de-estudos';

export const metadata: Metadata = {
  title: 'Grupos de Estudos',
  description:
    'Formação continuada para psicólogos em temas contemporâneos da clínica: infidelidade, terapia infantil e famílias, e teoria do apego. Encontros mensais em formato online.',
  alternates: { canonical: '/grupos-de-estudos' },
};

export default function PaginaGruposDeEstudos() {
  return (
    <>
      <CabecalhoDePagina conteudo={conteudo.cabecalho} etiquetas={conteudo.formato} />

      <ListaDeItens
        itens={conteudo.modalidades.itens}
        rotulo={conteudo.modalidades.rotulo}
        titulo={conteudo.modalidades.titulo}
        fundo="suave"
        colunas="tresColunas"
      />

      <ChamadaDeContato
        titulo="Quer participar de um dos grupos?"
        paragrafo="Fale com a nossa equipe para saber sobre vagas, datas dos encontros e forma de participação."
        acaoPrincipal={conteudo.acao}
      />
    </>
  );
}
