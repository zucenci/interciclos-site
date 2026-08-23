import Link from 'next/link';
import type { Frente } from '@/content/types';
import { cx } from '@/lib/utils';
import { Etiquetas } from './Etiquetas';
import estilos from './CardDeFrente.module.css';

/**
 * Card de uma frente de atuação. O card inteiro é clicável por um link que
 * cobre a área (::after), mantendo apenas um alvo focável por card.
 */
export function CardDeFrente({ frente, ordem }: { frente: Frente; ordem?: number }) {
  return (
    <article className={cx(estilos.card, frente.ancora && estilos.ancora)}>
      {typeof ordem === 'number' && (
        <span className={estilos.ordem} aria-hidden="true">
          {String(ordem).padStart(2, '0')}
        </span>
      )}

      <h3 className={estilos.nome}>
        <Link href={frente.href} className={estilos.link}>
          {frente.nome}
        </Link>
      </h3>

      <p className={estilos.chamada}>{frente.chamada}</p>
      <p className={estilos.resumo}>{frente.resumo}</p>

      {frente.formato && <Etiquetas itens={frente.formato} className={estilos.etiquetas} />}

      <span className={estilos.acao} aria-hidden="true">
        Saiba mais
        <svg viewBox="0 0 20 20" fill="none" focusable="false">
          <path
            d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </article>
  );
}
