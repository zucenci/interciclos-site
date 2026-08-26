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
import estilos from '@/styles/pagina.module.css';

export const metadata: Metadata = {
  title: 'Especialização/Formação em Terapia de Casal e Família',
  description:
    'Percurso teórico-prático de dois anos para psicólogos, com prática clínica supervisionada, desenvolvimento do self do terapeuta e abordagem sistêmica contemporânea. Turmas em Chapecó e Passo Fundo.',
  alternates: { canonical: '/especializacao' },
};

export default function PaginaEspecializacao() {
  return (
    <>
      <CabecalhoDePagina
        conteudo={conteudo.cabecalho}
        variante="destaque"
        etiquetas={['2 anos', 'Aulas mensais', 'Chapecó — presencial', 'Passo Fundo — híbrido']}
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
