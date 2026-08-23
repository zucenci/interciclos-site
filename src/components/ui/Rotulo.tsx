import type { ReactNode } from 'react';
import { cx } from '@/lib/utils';
import estilos from './Rotulo.module.css';

/** Sobretítulo curto (eyebrow) que situa a seção. Não substitui o heading. */
export function Rotulo({
  children,
  tom = 'terracota',
  className,
}: {
  children: ReactNode;
  tom?: 'azul' | 'terracota' | 'claro';
  className?: string;
}) {
  return <p className={cx(estilos.rotulo, estilos[tom], className)}>{children}</p>;
}
