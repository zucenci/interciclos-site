'use client';

import { useCallback, useState, type ElementType, type ReactNode } from 'react';
import { cx } from '@/lib/utils';
import estilos from './Revelar.module.css';

type Props = {
  children: ReactNode;
  /** Atraso em ms para escalonar elementos de uma mesma lista. */
  atraso?: number;
  direcao?: 'cima' | 'esquerda' | 'nenhuma';
  como?: ElementType;
  className?: string;
};

/**
 * Animação sutil de entrada por rolagem.
 *
 * O conteúdo é sempre renderizado no HTML — a animação é apenas uma camada
 * sobre ele. Quem pede menos movimento nas preferências do sistema recebe o
 * conteúdo estático (regra em Revelar.module.css), sem depender do JavaScript.
 *
 * A observação é montada por callback ref, e não por efeito: o observador é
 * criado quando o nó entra no DOM e desfeito na limpeza do próprio ref.
 */
export function Revelar({
  children,
  atraso = 0,
  direcao = 'cima',
  como: Tag = 'div',
  className,
}: Props) {
  const [visivel, setVisivel] = useState(false);

  const observar = useCallback((no: HTMLElement | null) => {
    if (!no) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setVisivel(true);
            observador.unobserve(entrada.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    observador.observe(no);
    return () => observador.disconnect();
  }, []);

  return (
    <Tag
      ref={observar}
      className={cx(estilos.revelar, estilos[direcao], visivel && estilos.visivel, className)}
      style={atraso ? { transitionDelay: `${atraso}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
