import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Grafismo } from '@/components/marca/Grafismo';
import { Botao } from '@/components/ui/Botao';
import { Etiquetas } from '@/components/ui/Etiquetas';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { eventosHome as conteudo } from '@/content/home';
import estilos from './EventosHome.module.css';

/** Quantos encontros da agenda cabem no bloco. */
const LIMITE = 3;

/**
 * Seção de eventos da home, logo abaixo das frentes de atuação. Segue a mesma
 * estrutura do bloco "O Instituto": título à esquerda, texto à direita — e,
 * quando há agenda, os próximos encontros abaixo dos dois.
 */
export function EventosHome() {
  const proximos = conteudo.agenda.slice(0, LIMITE);
  const temAgenda = proximos.length > 0;

  return (
    <Secao id="eventos" fundo="escura" className={estilos.secao}>
      <Grafismo posicao="inferiorEsquerda" tom="escuro" />

      <Container className={estilos.grade}>
        <Revelar className={estilos.colunaTitulo}>
          <TituloDeSecao rotulo={conteudo.rotulo} titulo={conteudo.titulo} tomRotulo="claro" />
        </Revelar>

        <Revelar atraso={120} className={estilos.colunaTexto}>
          {conteudo.introducao.map((paragrafo) => (
            <p key={paragrafo.slice(0, 40)} className={estilos.paragrafo}>
              {paragrafo}
            </p>
          ))}

          <Botao
            href={conteudo.acao.href}
            externo={conteudo.acao.externo}
            variante="claro"
            tamanho="padrao"
            className={estilos.acao}
          >
            {conteudo.acao.rotulo}
          </Botao>
        </Revelar>

        {temAgenda ? (
          <Revelar atraso={200} como="ul" className={estilos.agenda}>
            {proximos.map((evento) => (
              <li key={evento.titulo}>
                <article className={estilos.evento}>
                  <time className={estilos.data} dateTime={evento.dataISO}>
                    {evento.data}
                  </time>
                  <h3 className={estilos.eventoTitulo}>{evento.titulo}</h3>
                  <p className={estilos.eventoDescricao}>{evento.descricao}</p>
                  <Etiquetas itens={[evento.local]} tom="escuro" />
                </article>
              </li>
            ))}
          </Revelar>
        ) : null}
      </Container>
    </Secao>
  );
}
