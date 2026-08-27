import Link from 'next/link';
import type { ReactNode } from 'react';
import { cx } from '@/lib/utils';
import estilos from './Botao.module.css';

type Variante = 'primario' | 'secundario' | 'fantasma' | 'claro' | 'texto';
type Tamanho = 'padrao' | 'grande' | 'compacto';

type PropsComuns = {
  children: ReactNode;
  variante?: Variante;
  tamanho?: Tamanho;
  className?: string;
};

type PropsLink = PropsComuns & {
  href: string;
  externo?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type PropsBotao = PropsComuns & {
  href?: never;
  externo?: never;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};

type Props = PropsLink | PropsBotao;

/**
 * Botão/CTA da marca. Renderiza <Link> quando recebe href e <button> quando
 * recebe type/onClick — nunca um <div> clicável, para preservar a semântica.
 */
export function Botao({
  children,
  variante = 'primario',
  tamanho = 'padrao',
  className,
  ...resto
}: Props) {
  const classes = cx(estilos.botao, estilos[variante], estilos[tamanho], className);

  if ('href' in resto && resto.href) {
    const { href } = resto;
    /*
     * Quem decide se o link sai do site é o próprio endereço, não a chamada.
     * Depender do `externo` que cada página repassa já deixou botões de
     * WhatsApp abrindo na mesma aba: o conteúdo declarava `externo: true` e a
     * página esquecia de encaminhar a prop. Todo endereço absoluto — wa.me,
     * Instagram — abre em aba nova por conta própria; `externo` continua
     * disponível como reforço.
     */
    const externo = resto.externo || /^https?:\/\//i.test(href);
    const propsExternas = externo ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    const interior = (
      <>
        <span className={estilos.rotulo}>{children}</span>
        {ehWhatsApp(href) ? <IconeWhatsApp /> : <Seta />}
        {externo && <span className="apenasLeitorDeTela"> (abre em nova aba)</span>}
      </>
    );

    // Âncora da própria página: o <a> nativo rola até o alvo (respeitando o
    // scroll-padding-top do header) sem passar pelo roteador, que trata um
    // href só de hash como navegação e não move a página.
    if (href.startsWith('#')) {
      return (
        <a href={href} className={classes} {...propsExternas}>
          {interior}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...propsExternas}>
        {interior}
      </Link>
    );
  }

  const { type = 'button', onClick, disabled } = resto as PropsBotao;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      <span className={estilos.rotulo}>{children}</span>
      <Seta />
    </button>
  );
}

/** Links de conversa no WhatsApp — wa.me e variantes de api.whatsapp.com. */
function ehWhatsApp(href: string) {
  const alvo = href.toLowerCase();
  return alvo.includes('wa.me') || alvo.includes('whatsapp.com');
}

/** Marca do WhatsApp, usada no lugar da seta nos botões que levam à conversa. */
function IconeWhatsApp() {
  return (
    <svg
      className={estilos.icone}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Seta() {
  return (
    <svg className={estilos.seta} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
