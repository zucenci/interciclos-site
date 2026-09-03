import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { CabecalhoDePagina } from '@/components/secoes/CabecalhoDePagina';
import { ListaDeItens } from '@/components/secoes/ListaDeItens';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { Botao } from '@/components/ui/Botao';
import { ListaDeDados } from '@/components/ui/ListaDeDados';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { especializacao as conteudo } from '@/content/paginas/especializacao';
import { cx } from '@/lib/utils';
import estilos from '@/styles/pagina.module.css';

export const metadata: Metadata = {
  title: 'Especialização/Formação em Terapia de Casal e Família',
  description:
    'Percurso teórico-prático de dois anos e 360h/a para psicólogos, com duas ênfases de prática clínica supervisionada, desenvolvimento do self do terapeuta e abordagem sistêmica contemporânea. Vagas limitadas em Chapecó e Passo Fundo.',
  alternates: { canonical: '/especializacao' },
};

export default function PaginaEspecializacao() {
  return (
    <>
      <CabecalhoDePagina
        conteudo={conteudo.cabecalho}
        variante="destaque"
        etiquetas={[
          '2 anos',
          '360h/a',
          'Aulas mensais',
          'Chapecó — presencial',
          'Passo Fundo — híbrido',
          'Vagas limitadas',
        ]}
      >
        <Botao href="#estrutura" variante="claro" tamanho="grande">
          Ver estrutura e próxima turma
        </Botao>
      </CabecalhoDePagina>

      <Secao fundo="papel" espacamento="curto">
        <Container>
          <Revelar className={estilos.blocoComImagem}>
            <div>
              <TituloDeSecao
                rotulo={conteudo.paraQuem.rotulo}
                titulo={conteudo.paraQuem.titulo}
                className={estilos.tituloEstreito}
              />
              {conteudo.paraQuem.paragrafos.map((paragrafo) => (
                <p key={paragrafo.slice(0, 40)} className={estilos.paragrafo}>
                  {paragrafo}
                </p>
              ))}
            </div>

            <div className={estilos.molduraImagem}>
              <Image
                src={conteudo.paraQuem.imagem.src}
                alt={conteudo.paraQuem.imagem.alt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={estilos.imagemBloco}
              />
            </div>
          </Revelar>
        </Container>
      </Secao>

      <ListaDeItens
        itens={conteudo.percurso.itens}
        rotulo={conteudo.percurso.rotulo}
        titulo={conteudo.percurso.titulo}
        fundo="suave"
        colunas="tresColunas"
        numerado
      />

      <Secao id="conteudo-programatico" fundo="papel">
        <Container>
          <Revelar>
            <TituloDeSecao
              rotulo={conteudo.conteudoProgramatico.rotulo}
              titulo={conteudo.conteudoProgramatico.titulo}
              chamada={conteudo.conteudoProgramatico.chamada}
              className={estilos.tituloEstrutura}
            />
          </Revelar>

          <Revelar atraso={100} como="ol" className={estilos.gradeDisciplinas}>
            {conteudo.conteudoProgramatico.disciplinas.map((disciplina, indice) => (
              <li key={disciplina} className={estilos.disciplina}>
                <span className={estilos.disciplinaNumero} aria-hidden="true">
                  {String(indice + 1).padStart(2, '0')}
                </span>
                {disciplina}
              </li>
            ))}
          </Revelar>
        </Container>
      </Secao>

      <Secao id="enfases" fundo="suave">
        <Container>
          <Revelar>
            <TituloDeSecao
              rotulo={conteudo.enfases.rotulo}
              titulo={conteudo.enfases.titulo}
              chamada={conteudo.enfases.paragrafo}
              className={estilos.tituloEstrutura}
            />
          </Revelar>

          <ul className={estilos.doisPublicos}>
            {conteudo.enfases.itens.map((enfase, indice) => (
              <Revelar key={enfase.id} como="li" atraso={indice * 100}>
                <article className={estilos.publico} id={enfase.id}>
                  <p className={estilos.publicoRotulo}>{enfase.rotulo}</p>
                  <h3 className={cx(estilos.publicoTitulo, estilos.tituloComQuebra)}>
                    {enfase.titulo}
                  </h3>
                  <p className={estilos.publicoParagrafo}>{enfase.descricao}</p>
                </article>
              </Revelar>
            ))}
          </ul>
        </Container>
      </Secao>

      <Secao fundo="papel">
        <Container>
          <Revelar className={estilos.faixaClinica}>
            <div>
              <h2 className={estilos.tituloFaixa}>{conteudo.clinicaSocial.titulo}</h2>
              <p className={estilos.paragrafoFaixa}>{conteudo.clinicaSocial.paragrafo}</p>
            </div>
            <Botao href={conteudo.clinicaSocial.acao.href} variante="secundario">
              {conteudo.clinicaSocial.acao.rotulo}
            </Botao>
          </Revelar>
        </Container>
      </Secao>

      <Secao id="estrutura" fundo="suave">
        <Container>
          <Revelar>
            <TituloDeSecao
              rotulo={conteudo.estrutura.rotulo}
              titulo={conteudo.estrutura.titulo}
              className={estilos.tituloEstrutura}
            />
          </Revelar>

          <Revelar atraso={100} className={estilos.cartaoEstrutura}>
            <ListaDeDados dados={conteudo.estrutura.dados} colunas="duas" />

            <div className={estilos.cargaHoraria}>
              <h3 className={estilos.cargaHorariaTitulo}>
                {conteudo.estrutura.cargaHoraria.titulo}
              </h3>
              <ul className={estilos.cargaHorariaPartes}>
                {conteudo.estrutura.cargaHoraria.partes.map((parte) => (
                  <li key={parte.descricao} className={estilos.cargaParte}>
                    <span className={estilos.cargaHoras}>{parte.horas}</span>
                    <span className={estilos.cargaDescricao}>{parte.descricao}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={estilos.rodapeEstrutura}>
              <p className={estilos.certificacao}>{conteudo.estrutura.certificacao}</p>
              <p className={estilos.destaqueTurma}>
                <span className={estilos.destaqueTurmaRotulo}>
                  {conteudo.estrutura.novaTurma.rotulo}
                </span>
                {conteudo.estrutura.novaTurma.valor}
              </p>
            </div>
          </Revelar>
        </Container>
      </Secao>

      <ChamadaDeContato
        fundo="suave"
        titulo={conteudo.chamadaFinal.titulo}
        paragrafo={conteudo.chamadaFinal.paragrafo}
        acaoPrincipal={conteudo.chamadaFinal.acao}
      />
    </>
  );
}
