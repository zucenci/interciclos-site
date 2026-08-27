import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { CabecalhoDePagina } from '@/components/secoes/CabecalhoDePagina';
import { ListaDeItens } from '@/components/secoes/ListaDeItens';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { Botao } from '@/components/ui/Botao';
import { CardDeDiretora } from '@/components/ui/CardDeDiretora';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { sobre as conteudo, diretoras, docentes } from '@/content/paginas/sobre';
import estilos from './sobre.module.css';
import estilosPagina from '@/styles/pagina.module.css';

export const metadata: Metadata = {
  title: 'Sobre o InterCiclos',
  description:
    'Instituto de Formação e Centro de Pesquisa e Terapia dedicado à formação de psicólogos tecnicamente preparados, eticamente comprometidos e sensíveis à complexidade das relações humanas.',
  alternates: { canonical: '/sobre' },
};

export default function PaginaSobre() {
  return (
    <>
      <CabecalhoDePagina
        conteudo={conteudo.cabecalho}
        imagem={{
          src: '/images/diretoras-sobre.jpg',
          alt: 'Cristiane Batista e Danielle Doss Damo, diretoras do InterCiclos',
        }}
      />

      <ListaDeItens
        id="compromissos"
        itens={conteudo.compromissos.itens}
        rotulo={conteudo.compromissos.rotulo}
        titulo={conteudo.compromissos.titulo}
        fundo="suave"
        colunas="bento"
        numerado
      />

      <Secao id="diretoras" fundo="papel">
        <Container>
          <Revelar>
            <TituloDeSecao
              rotulo={conteudo.diretoras.rotulo}
              titulo={conteudo.diretoras.titulo}
              chamada={conteudo.diretoras.chamada}
              className={estilos.titulo}
            />
          </Revelar>

          <ul className={estilos.diretoras}>
            {diretoras.map((diretora, indice) => (
              <Revelar key={diretora.nome} como="li" atraso={indice * 100} className={estilos.itemDiretora}>
                <CardDeDiretora diretora={diretora} />
              </Revelar>
            ))}
          </ul>
        </Container>
      </Secao>

      <Secao id="corpo-docente" fundo="media">
        <Container className={estilosPagina.duasColunas}>
          <Revelar>
            <TituloDeSecao
              rotulo={conteudo.corpoDocente.rotulo}
              titulo={conteudo.corpoDocente.titulo}
            />
          </Revelar>

          <Revelar atraso={120}>
            {conteudo.corpoDocente.paragrafos.map((paragrafo) => (
              <p key={paragrafo.slice(0, 40)} className={estilosPagina.paragrafo}>
                {paragrafo}
              </p>
            ))}

            {docentes.length > 0 ? (
              <ul className={estilos.docentes}>
                {docentes.map((docente) => (
                  <li key={docente.nome} className={estilos.docente}>
                    <span className={estilos.docenteNome}>{docente.nome}</span>
                    <span className={estilos.docenteTitulacao}>{docente.titulacao}</span>
                    <span className={estilos.docenteAtuacao}>{docente.atuacao}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={estilosPagina.acaoDaSecao}>
                <Botao href={conteudo.corpoDocente.acao.href} variante="secundario">
                  {conteudo.corpoDocente.acao.rotulo}
                </Botao>
              </div>
            )}
          </Revelar>
        </Container>
      </Secao>

      <ChamadaDeContato />
    </>
  );
}
