import type { ElementType, ReactNode } from 'react';
import { cx } from '@/lib/utils';
import estilos from './Container.module.css';

type Props = {
  children: ReactNode;
  /** 'estreito' concentra o conteúdo em coluna de leitura. */
  largura?: 'padrao' | 'estreito' | 'amplo';
  como?: ElementType;
  className?: string;
};

export function Container({ children, largura = 'padrao', como: Tag = 'div', className }: Props) {
  return <Tag className={cx(estilos.container, estilos[largura], className)}>{children}</Tag>;
}
