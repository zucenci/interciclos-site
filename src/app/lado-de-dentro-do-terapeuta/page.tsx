import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { CabecalhoDePagina } from '@/components/secoes/CabecalhoDePagina';
import { ListaDeItens } from '@/components/secoes/ListaDeItens';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { ladoDeDentro as conteudo } from '@/content/paginas/lado-de-dentro';
import estilos from '@/styles/pagina.module.css';

export const metadata: Metadata = {
  title: 'O Lado de Dentro do Terapeuta',
  description:
    'Oficina de imersão do InterCiclos dedicada à pessoa do terapeuta: ressonâncias, limites, potencialidades e consciência sobre o próprio trabalho clínico. Presencial em Chapecó, uma vez ao ano.',
  alternates: { canonical: '/lado-de-dentro-do-terapeuta' },
};

export default function PaginaLadoDeDentro() {
  return (
    <>
      <CabecalhoDePagina conteudo={conteudo.cabecalho} etiquetas={conteudo.formato} />

      <Secao fundo="suave">
        <Container largura="estreito">
          <Revelar>
            <TituloDeSecao
              rotulo={conteudo.proposta.rotulo}
              titulo={conteudo.proposta.titulo}
              className={estilos.tituloEstreito}
            />

            {conteudo.proposta.paragrafos.map((paragrafo) => (
              <p key={paragrafo.slice(0, 40)} className={estilos.paragrafo}>
                {paragrafo}
              </p>
            ))}

            <div className={estilos.enfase}>
              {conteudo.proposta.enfase.map((frase) => (
                <p key={frase.slice(0, 40)}>{frase}</p>
              ))}
            </div>
          </Revelar>
        </Container>
      </Secao>

      <ListaDeItens
        itens={conteudo.eixos}
        rotulo="Eixos da imersão"
        titulo="O que é trabalhado na oficina"
        fundo="papel"
        colunas="duasColunas"
        numerado
      />

      <ChamadaDeContato
        titulo="Quer participar da próxima imersão?"
        paragrafo="A oficina acontece uma vez ao ano, presencialmente em Chapecó. Fale conosco para saber a data da próxima edição."
        acaoPrincipal={conteudo.acao}
      />
    </>
  );
}
