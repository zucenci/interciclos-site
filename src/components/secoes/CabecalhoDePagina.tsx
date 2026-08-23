import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Grafismo } from '@/components/marca/Grafismo';
import { Etiquetas } from '@/components/ui/Etiquetas';
import type { CabecalhoDePagina as Conteudo } from '@/content/types';
import { cx } from '@/lib/utils';
import estilos from './CabecalhoDePagina.module.css';

type Props = {
  conteudo: Conteudo;
  /** Atributos objetivos exibidos abaixo do texto (duração, formato, cidade). */
  etiquetas?: readonly string[];
  /** 'destaque' usa fundo escuro — reservado à Especialização, produto âncora. */
  variante?: 'padrao' | 'destaque';
  /** Imagem opcional para o lado direito do cabeçalho. */
  imagem?: { src: string; alt: string };
  children?: React.ReactNode;
};

/** Cabeçalho editorial reutilizado por todas as páginas internas. */
export function CabecalhoDePagina({
  conteudo,
  etiquetas,
  variante = 'padrao',
  imagem,
  children,
}: Props) {
  const escuro = variante === 'destaque';

  return (
    <section
      className={cx(
        estilos.cabecalho,
        escuro && estilos.destaque,
        escuro && 'emFundoEscuro',
      )}
      aria-labelledby="titulo-da-pagina"
    >
      <Grafismo
        posicao="superiorDireita"
        tom={escuro ? 'escuro' : 'cor'}
        className={estilos.grafismo}
      />

      <Container className={estilos.conteudo}>
        <div className={cx(estilos.grade, imagem && estilos.comImagem)}>
          {/* Coluna de Conteúdo */}
          <div className={estilos.colunaTexto}>
            <p className={estilos.rotulo}>{conteudo.rotulo}</p>

            <h1 id="titulo-da-pagina" className={estilos.titulo}>
              {conteudo.titulo}
            </h1>

            {conteudo.chamada ? (
              <p className={estilos.chamada}>{conteudo.chamada}</p>
            ) : null}

            <div className={estilos.introducao}>
              {conteudo.introducao.map((paragrafo) => (
                <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
              ))}
            </div>

            {etiquetas && etiquetas.length > 0 ? (
              <Etiquetas
                itens={etiquetas}
                tom={escuro ? 'escuro' : 'claro'}
                className={estilos.etiquetas}
              />
            ) : null}

            {children ? <div className={estilos.extra}>{children}</div> : null}
          </div>

          {/* Coluna da Imagem (Opcional) */}
          {imagem ? (
            <div className={estilos.colunaImagem}>
              <div className={estilos.molduraImagem}>
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  priority
                  className={estilos.imagem}
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
