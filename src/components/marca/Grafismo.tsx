import { cx } from '@/lib/utils';
import { GRAFISMO_CAMINHOS, GRAFISMO_VIEWBOX } from './caminhosGrafismo';
import estilos from './Grafismo.module.css';

type Props = {
  /** Posição do grafismo dentro do bloco pai (que precisa ser position: relative). */
  posicao?: 'fundo' | 'superiorDireita' | 'inferiorEsquerda' | 'centroDireita';
  tom?: 'cor' | 'claro' | 'escuro';
  className?: string;
};

/**
 * Grafismo de apoio da marca — as circunferências concêntricas do arquivo
 * oficial, usadas como textura de fundo dos banners. Puramente decorativo:
 * fica fora da árvore de acessibilidade e nunca carrega informação.
 */
export function Grafismo({ posicao = 'fundo', tom = 'cor', className }: Props) {
  return (
    <svg
      className={cx(estilos.grafismo, estilos[posicao], estilos[tom], className)}
      viewBox={GRAFISMO_VIEWBOX}
      aria-hidden="true"
      focusable="false"
    >
      {GRAFISMO_CAMINHOS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
