import type { ReactNode } from 'react';
import { cx } from '@/lib/utils';
import { Rotulo } from './Rotulo';
import estilos from './TituloDeSecao.module.css';

type Props = {
  rotulo?: string;
  titulo: ReactNode;
  chamada?: ReactNode;
  /** Nível do heading — mantenha a hierarquia coerente na página. */
  nivel?: 2 | 3;
  alinhamento?: 'esquerda' | 'centro';
  tamanho?: 'padrao' | 'grande';
  tomRotulo?: 'azul' | 'terracota' | 'claro';
  className?: string;
};

export function TituloDeSecao({
  rotulo,
  titulo,
  chamada,
  nivel = 2,
  alinhamento = 'esquerda',
  tamanho = 'padrao',
  tomRotulo = 'terracota',
  className,
}: Props) {
  const Heading = nivel === 2 ? 'h2' : 'h3';

  return (
    <header className={cx(estilos.bloco, estilos[alinhamento], className)}>
      {rotulo && <Rotulo tom={tomRotulo}>{rotulo}</Rotulo>}
      <Heading className={cx(estilos.titulo, tamanho === 'grande' && estilos.grande)}>
        {titulo}
      </Heading>
      {chamada && <p className={estilos.chamada}>{chamada}</p>}
    </header>
  );
}
