import Link from 'next/link';
import { cx } from '@/lib/utils';
import {
  ASSINATURA_CAMINHOS,
  ASSINATURA_VIEWBOX,
  NOME_CAMINHOS,
  NOME_VIEWBOX,
  SIMBOLO_CAMINHOS,
  SIMBOLO_VIEWBOX,
} from './caminhos';
import estilos from './Logo.module.css';

type Tom = 'cor' | 'branco' | 'tinta';
type Formato = 'horizontal' | 'vertical' | 'icone';

type Props = {
  formato?: Formato;
  tom?: Tom;
  /** Envolve a marca em um link para a home. */
  comLink?: boolean;
  /** Exibe a designação "Instituto de Formação e Centro de Pesquisa e Terapia". */
  comDesignacao?: boolean;
  className?: string;
};

/**
 * Marca InterCiclos — desenho oficial, vindo de `public/marca/principal-azul.svg`.
 *
 * O símbolo, o nome e a assinatura são renderizados como peças separadas do
 * mesmo arquivo; as proporções e o respiro entre elas seguem o lockup original
 * (ver `PROPORCOES` em `caminhos.ts`, usadas no CSS a partir de `--tam-simbolo`).
 */
export function Logo({
  formato = 'horizontal',
  tom = 'cor',
  comLink = false,
  comDesignacao = false,
  className,
}: Props) {
  const conteudo = (
    <span
      className={cx(estilos.marca, estilos[formato], estilos[tom], className)}
      role="img"
      aria-label={
        comDesignacao
          ? 'InterCiclos — Instituto de Formação e Centro de Pesquisa e Terapia'
          : 'InterCiclos'
      }
    >
      <SimboloInterCiclos className={estilos.simbolo} />
      {formato !== 'icone' && (
        <span className={estilos.textos}>
          <svg
            className={estilos.nome}
            viewBox={NOME_VIEWBOX}
            aria-hidden="true"
            focusable="false"
          >
            {NOME_CAMINHOS.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
          {comDesignacao && (
            <svg
              className={estilos.designacao}
              viewBox={ASSINATURA_VIEWBOX}
              aria-hidden="true"
              focusable="false"
            >
              {ASSINATURA_CAMINHOS.map((d) => (
                <path key={d} d={d} />
              ))}
            </svg>
          )}
        </span>
      )}
    </span>
  );

  if (!comLink) return conteudo;

  return (
    <Link href="/" className={estilos.link} aria-label="InterCiclos — ir para a página inicial">
      {conteudo}
    </Link>
  );
}

/** Símbolo isolado da marca — também usado como grafismo de apoio. */
export function SimboloInterCiclos({
  className,
  titulo,
}: {
  className?: string;
  titulo?: string;
}) {
  return (
    <svg
      className={className}
      viewBox={SIMBOLO_VIEWBOX}
      role={titulo ? 'img' : 'presentation'}
      aria-hidden={titulo ? undefined : true}
      aria-label={titulo}
      focusable="false"
    >
      {SIMBOLO_CAMINHOS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
