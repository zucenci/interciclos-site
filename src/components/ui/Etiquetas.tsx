import { cx } from '@/lib/utils';
import estilos from './Etiquetas.module.css';

/** Lista de atributos objetivos: duração, formato, cidade, periodicidade. */
export function Etiquetas({
  itens,
  tom = 'claro',
  className,
}: {
  itens: readonly string[];
  tom?: 'claro' | 'escuro';
  className?: string;
}) {
  if (itens.length === 0) return null;

  return (
    <ul className={cx(estilos.lista, estilos[tom], className)}>
      {itens.map((item) => (
        <li key={item} className={estilos.etiqueta}>
          {item}
        </li>
      ))}
    </ul>
  );
}
