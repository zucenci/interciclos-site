import type { DadoEstrutural } from '@/content/types';
import { cx } from '@/lib/utils';
import estilos from './ListaDeDados.module.css';

/**
 * Ficha técnica em <dl> — rótulo/valor semanticamente pareados.
 * `colunas`: `auto` distribui os pares em colunas, `duas` fixa duas por
 * linha, `unica` empilha e
 * `linha` põe rótulo e valor lado a lado, como uma ficha técnica.
 */
export function ListaDeDados({
  dados,
  tom = 'claro',
  colunas = 'auto',
  className,
}: {
  dados: readonly DadoEstrutural[];
  tom?: 'claro' | 'escuro';
  colunas?: 'auto' | 'duas' | 'unica' | 'linha';
  className?: string;
}) {
  if (dados.length === 0) return null;

  return (
    <dl className={cx(estilos.lista, estilos[tom], estilos[colunas], className)}>
      {dados.map((dado) => (
        <div key={dado.rotulo} className={estilos.par}>
          <dt className={estilos.rotulo}>{dado.rotulo}</dt>
          <dd className={estilos.valor}>{dado.valor}</dd>
        </div>
      ))}
    </dl>
  );
}
