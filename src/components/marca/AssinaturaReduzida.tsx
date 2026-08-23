import { cx } from '@/lib/utils';
import {
  ASSINATURA_ANO,
  ASSINATURA_DESDE,
  ASSINATURA_REDUZIDA_NOME,
  ASSINATURA_REDUZIDA_VIEWBOX,
  ASSINATURA_SIMBOLO,
} from './caminhosAssinatura';
import estilos from './AssinaturaReduzida.module.css';

type Props = {
  className?: string;
};

/**
 * Assinatura reduzida da marca: "DESDE · Inter (símbolo) Ciclos · 2016".
 *
 * Desenhada para ocupar toda a largura de um bloco — no rodapé, é a peça que
 * fecha a página. O nome vem em Off-White e o símbolo com as datas em Bronze
 * Mate, como no arquivo oficial. O símbolo gira devagar sobre o próprio eixo,
 * sem sair do lugar; o resto da assinatura fica parado.
 */
export function AssinaturaReduzida({ className }: Props) {
  return (
    <svg
      className={cx(estilos.assinatura, className)}
      viewBox={ASSINATURA_REDUZIDA_VIEWBOX}
      role="img"
      aria-label="InterCiclos, desde 2016"
      focusable="false"
    >
      <g className={estilos.simbolo}>
        {ASSINATURA_SIMBOLO.map((d) => (
          <path key={d} className={estilos.bronze} d={d} />
        ))}
      </g>
      {[...ASSINATURA_DESDE, ...ASSINATURA_ANO].map((d) => (
        <path key={d} className={estilos.bronze} d={d} />
      ))}
      {ASSINATURA_REDUZIDA_NOME.map((d) => (
        <path key={d} className={estilos.nome} d={d} />
      ))}
    </svg>
  );
}
