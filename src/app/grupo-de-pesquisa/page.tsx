import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { CabecalhoDePagina } from '@/components/secoes/CabecalhoDePagina';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { Botao } from '@/components/ui/Botao';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { grupoDePesquisa as conteudo } from '@/content/paginas/grupo-de-pesquisa';
import estilos from '@/styles/pagina.module.css';

export const metadata: Metadata = {
  title: 'Grupo de Pesquisa',
  description:
    'O Grupo de Pesquisa do InterCiclos aproxima prática clínica e produção científica, incentivando psicólogos a investigar questões do cotidiano profissional.',
  alternates: { canonical: '/grupo-de-pesquisa' },
};

export default function PaginaGrupoDePesquisa() {
  return (
    <>
      <CabecalhoDePagina conteudo={conteudo.cabecalho} />

      <Secao fundo="suave">
        <Container largura="estreito">
          <Revelar>
            <TituloDeSecao
              rotulo="Participação"
              titulo={conteudo.participacao.titulo}
              className={estilos.tituloEstreito}
            />
            <p className={estilos.paragrafo}>{conteudo.participacao.paragrafo}</p>
            <div className={estilos.acaoDaSecao}>
              <Botao href={conteudo.participacao.acao.href} variante="secundario">
                {conteudo.participacao.acao.rotulo}
              </Botao>
            </div>
          </Revelar>
        </Container>
      </Secao>

      {conteudo.producoes.length > 0 ? (
        <Secao fundo="papel">
          <Container>
            <Revelar>
              <TituloDeSecao
                rotulo="Produção científica"
                titulo="Trabalhos e publicações"
                className={estilos.tituloEstrutura}
              />
            </Revelar>
            <ul>
              {conteudo.producoes.map((producao) => (
                <li key={producao.titulo}>
                  <h3>{producao.titulo}</h3>
                  <p>
                    {producao.autores} — {producao.veiculo}, {producao.ano}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Secao>
      ) : null}

      <ChamadaDeContato
        titulo="Quer saber mais sobre a pesquisa no InterCiclos?"
        paragrafo="Converse com a nossa equipe sobre linhas de investigação, encontros do grupo e formas de participação."
        acaoPrincipal={conteudo.acao}
      />
    </>
  );
}
