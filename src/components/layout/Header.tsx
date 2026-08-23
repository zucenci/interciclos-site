'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { navegacao, ctaPrincipal } from '@/content/site';
import { Logo } from '@/components/marca/Logo';
import { Botao } from '@/components/ui/Botao';
import { cx, rotaAtiva } from '@/lib/utils';
import estilos from './Header.module.css';

export function Header() {
  const rota = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState<string | null>(null);
  const [compacto, setCompacto] = useState(false);
  const cabecalhoRef = useRef<HTMLElement>(null);
  const idMenu = useId();

  const fecharTudo = useCallback(() => {
    setMenuAberto(false);
    setSubmenuAberto(null);
  }, []);

  /*
   * Fecha a navegação a cada mudança de rota. Ajustar o estado durante a
   * renderização (em vez de num efeito) evita um quadro com o menu ainda
   * aberto sobre a página nova.
   */
  const [rotaAnterior, setRotaAnterior] = useState(rota);
  if (rota !== rotaAnterior) {
    setRotaAnterior(rota);
    setMenuAberto(false);
    setSubmenuAberto(null);
  }

  /* Bloqueia a rolagem do documento enquanto o menu mobile está aberto. */
  useEffect(() => {
    document.body.dataset.menuAberto = String(menuAberto);
    return () => {
      delete document.body.dataset.menuAberto;
    };
  }, [menuAberto]);

  /* Escape fecha a navegação; clique fora fecha apenas o submenu. */
  useEffect(() => {
    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === 'Escape') fecharTudo();
    }
    function aoClicarFora(evento: MouseEvent) {
      if (!cabecalhoRef.current?.contains(evento.target as Node)) setSubmenuAberto(null);
    }
    document.addEventListener('keydown', aoTeclar);
    document.addEventListener('pointerdown', aoClicarFora);
    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.removeEventListener('pointerdown', aoClicarFora);
    };
  }, [fecharTudo]);

  /* Header compacto após a primeira dobra. */
  useEffect(() => {
    function aoRolar() {
      setCompacto(window.scrollY > 24);
    }
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <header
      ref={cabecalhoRef}
      className={cx(estilos.cabecalho, compacto && estilos.compacto, menuAberto && estilos.aberto)}
    >
      <div className={estilos.barra}>
        <Logo comLink className={estilos.logo} />

        <nav className={estilos.navegacaoDesktop} aria-label="Navegação principal">
          <ul className={estilos.listaDesktop}>
            {navegacao.map((item) => {
              const ativo = rotaAtiva(rota, item.href);
              const filhos = item.filhos ?? [];
              const idSubmenu = idMenu + '-' + item.href.replace(/\W/g, '');

              if (filhos.length === 0) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cx(estilos.itemDesktop, ativo && estilos.itemAtivo)}
                      aria-current={ativo ? 'page' : undefined}
                      target={item.externo ? '_blank' : undefined}
                      rel={item.externo ? 'noopener noreferrer' : undefined}
                    >
                      {item.rotulo}
                    </Link>
                  </li>
                );
              }

              const filhoAtivo = filhos.some((filho) => rotaAtiva(rota, filho.href));
              const expandido = submenuAberto === item.href;

              return (
                <li
                  key={item.href}
                  className={estilos.itemComSubmenu}
                  onMouseEnter={() => setSubmenuAberto(item.href)}
                  onMouseLeave={() => setSubmenuAberto(null)}
                >
                  <button
                    type="button"
                    className={cx(
                      estilos.itemDesktop,
                      estilos.gatilhoSubmenu,
                      (filhoAtivo || expandido) && estilos.itemAtivo,
                    )}
                    aria-expanded={expandido}
                    aria-controls={idSubmenu}
                    onClick={() =>
                      setSubmenuAberto((atual) => (atual === item.href ? null : item.href))
                    }
                  >
                    {item.rotulo}
                    <Chevron className={estilos.chevron} />
                  </button>

                  <div
                    id={idSubmenu}
                    className={cx(estilos.submenu, expandido && estilos.submenuVisivel)}
                    hidden={!expandido}
                  >
                    <p className={estilos.submenuTitulo}>
                      <Link href={item.href} className={estilos.submenuTituloLink}>
                        Ver todas as formações e atividades
                      </Link>
                    </p>
                    <ul className={estilos.listaSubmenu}>
                      {filhos.map((filho) => (
                        <li key={filho.href}>
                          <Link
                            href={filho.href}
                            className={estilos.itemSubmenu}
                            aria-current={rotaAtiva(rota, filho.href) ? 'page' : undefined}
                          >
                            <span className={estilos.itemSubmenuRotulo}>{filho.rotulo}</span>
                            {filho.descricao ? (
                              <span className={estilos.itemSubmenuDescricao}>{filho.descricao}</span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={estilos.acoes}>
          <Botao href={ctaPrincipal.href} externo={ctaPrincipal.externo} tamanho="compacto">
            {ctaPrincipal.rotulo}
          </Botao>
        </div>

        <button
          type="button"
          className={estilos.gatilhoMobile}
          aria-expanded={menuAberto}
          aria-controls={idMenu + '-mobile'}
          onClick={() => setMenuAberto((atual) => !atual)}
        >
          <span className="apenasLeitorDeTela">
            {menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          </span>
          <span className={estilos.hamburguer} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id={idMenu + '-mobile'} className={estilos.painelMobile} hidden={!menuAberto}>
        <nav aria-label="Navegação principal em dispositivos móveis">
          <ul className={estilos.listaMobile}>
            {navegacao.map((item) => (
              <li key={item.href} className={estilos.grupoMobile}>
                <Link
                  href={item.href}
                  className={cx(estilos.itemMobile, rotaAtiva(rota, item.href) && estilos.itemAtivo)}
                  aria-current={rotaAtiva(rota, item.href) ? 'page' : undefined}
                  target={item.externo ? '_blank' : undefined}
                  rel={item.externo ? 'noopener noreferrer' : undefined}
                >
                  {item.rotulo}
                </Link>

                {item.filhos ? (
                  <ul className={estilos.listaMobileFilhos}>
                    {item.filhos.map((filho) => (
                      <li key={filho.href}>
                        <Link
                          href={filho.href}
                          className={cx(
                            estilos.itemMobileFilho,
                            rotaAtiva(rota, filho.href) && estilos.itemAtivo,
                          )}
                          aria-current={rotaAtiva(rota, filho.href) ? 'page' : undefined}
                        >
                          {filho.rotulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <Botao href={ctaPrincipal.href} externo={ctaPrincipal.externo} className={estilos.ctaMobile}>
          {ctaPrincipal.rotulo}
        </Botao>
      </div>
    </header>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="m4 6 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
