import { cx } from '@/lib/utils';
import { SELO_ANEL, SELO_ANOS, SELO_DISCO, SELO_NUMERO, SELO_VIEWBOX } from './caminhosSelo';
import estilos from './SeloDezAnos.module.css';

type Props = {
  className?: string;
};

/**
 * Selo comemorativo "10 anos", do arquivo oficial da marca.
 *
 * O fundo (disco em Azul Profundo + anel em Bronze Mate) gira devagar; o
 * letreiro "10 anos" fica parado, para permanecer legível. Como as formas são
 * orgânicas — não são círculos perfeitos —, a rotação é percebida como um
 * movimento sutil e contínuo.
 */
export function SeloDezAnos({ className }: Props) {
  return (
    <svg
      className={cx(estilos.selo, className)}
      viewBox={SELO_VIEWBOX}
      role="img"
      aria-label="InterCiclos, 10 anos"
      focusable="false"
    >
      <g className={estilos.fundo}>
        {SELO_DISCO.map((d) => (
          <path key={d} className={estilos.disco} d={d} />
        ))}
        {SELO_ANEL.map((d) => (
          <path key={d} className={estilos.anel} d={d} />
        ))}
      </g>
      <g>
        {SELO_NUMERO.map((d) => (
          <path key={d} className={estilos.numero} d={d} />
        ))}
        {SELO_ANOS.map((d) => (
          <path key={d} className={estilos.anos} d={d} />
        ))}
      </g>
    </svg>
  );
}
