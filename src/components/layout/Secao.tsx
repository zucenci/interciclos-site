import type { ReactNode } from 'react';
import { cx } from '@/lib/utils';
import estilos from './Secao.module.css';

type Props = {
  children: ReactNode;
  /** Âncora usada pela navegação interna e pelos links do rodapé. */
  id?: string;
  fundo?: 'papel' | 'suave' | 'media' | 'escura' | 'gradiente';
  espacamento?: 'padrao' | 'curto' | 'nenhum';
  /** Rotula a seção para leitores de tela quando não há título visível. */
  rotuloAcessivel?: string;
  className?: string;
};

export function Secao({
  children,
  id,
  fundo = 'papel',
  espacamento = 'padrao',
  rotuloAcessivel,
  className,
}: Props) {
  return (
    <section
      id={id}
      aria-label={rotuloAcessivel}
      className={cx(
        estilos.secao,
        estilos[fundo],
        estilos[`espaco_${espacamento}`],
        (fundo === 'escura' || fundo === 'gradiente') && 'emFundoEscuro',
        className,
      )}
    >
      {children}
    </section>
  );
}
