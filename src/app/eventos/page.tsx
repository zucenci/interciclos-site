import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { CabecalhoDePagina } from '@/components/secoes/CabecalhoDePagina';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { InstagramRecentes } from '@/components/secoes/InstagramRecentes';
import { Etiquetas } from '@/components/ui/Etiquetas';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { eventos as conteudo } from '@/content/paginas/eventos';
import estilos from './eventos.module.css';
import estilosPagina from '@/styles/pagina.module.css';

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Workshops, encontros científicos e experiências formativas promovidos pelo InterCiclos para profissionais, pesquisadores e estudantes de Psicologia.',
  alternates: { canonical: '/eventos' },
};

export default function PaginaEventos() {
  const temAgenda = conteudo.agenda.length > 0;

  return (
    <>
      <CabecalhoDePagina conteudo={conteudo.cabecalho} />

      <Secao fundo="suave">
        <Container>
          <Revelar>
            <TituloDeSecao
              rotulo="Agenda"
              titulo={temAgenda ? 'Próximos encontros' : 'Acompanhe os próximos encontros'}
              className={estilos.titulo}
            />
          </Revelar>

          {temAgenda ? (
            <ul className={estilos.agenda}>
              {conteudo.agenda.map((evento, indice) => (
                <Revelar key={evento.titulo} como="li" atraso={Math.min(indice, 3) * 80}>
                  <article className={estilos.evento}>
                    <time className={estilos.data} dateTime={evento.dataISO}>
                      {evento.data}
                    </time>
                    <div className={estilos.corpo}>
                      <h3 className={estilos.eventoTitulo}>{evento.titulo}</h3>
                      <p className={estilos.eventoDescricao}>{evento.descricao}</p>
                      <Etiquetas itens={[evento.local]} />
                    </div>
                  </article>
                </Revelar>
              ))}
            </ul>
          ) : (
            <Revelar atraso={80}>
              <div className={estilosPagina.estadoVazio}>
                <h3 className={estilosPagina.estadoVazioTitulo}>{conteudo.agendaVazia.titulo}</h3>
                <p className={estilosPagina.estadoVazioParagrafo}>{conteudo.agendaVazia.paragrafo}</p>
              </div>
            </Revelar>
          )}
        </Container>
      </Secao>

      <InstagramRecentes />

      <ChamadaDeContato
        titulo="Quer receber os próximos avisos?"
        paragrafo="Fale com a nossa equipe para acompanhar as datas dos eventos, workshops e encontros científicos do Instituto."
        acaoPrincipal={conteudo.acao}
      />
    </>
  );
}
