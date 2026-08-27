'use client';

import { useState, useRef, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { depoimentosHome as conteudo } from '@/content/home';
import { depoimentos } from '@/content/depoimentos';
import { cx } from '@/lib/utils';
import estilos from './CarrosselDepoimentos.module.css';

/** Gera as iniciais do nome para o avatar. */
function iniciais(nome: string): string {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('');
}

export function CarrosselDepoimentos() {
  const lista = depoimentos;
  const trilhoRef = useRef<HTMLDivElement>(null);
  const paradaRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animacaoRef = useRef<number | null>(null);

  const total = lista.length;

  /*
   * A rolagem é infinita: a lista é renderizada três vezes e o visitante
   * começa na cópia do meio. Quando a rolagem para dentro de uma cópia
   * lateral, a posição salta uma cópia inteira — como o conteúdo é idêntico,
   * o salto é invisível e nunca se chega a uma ponta.
   */
  const cards = total > 1 ? [...lista, ...lista, ...lista] : lista;
  const inicioDoMeio = total > 1 ? total : 0;
  /** Índice dentro do trilho triplicado. */
  const [indice, setIndice] = useState(inicioDoMeio);
  const ativo = ((indice % total) + total) % total;

  /*
   * Posição de rolagem que centraliza cada card, lida do próprio DOM. Um passo
   * fixo (largura + vão) não serve: as larguras mudam a cada quebra de layout,
   * e a conta duplicada em CSS e JavaScript sairia de sincronia em silêncio.
   */
  function posicoes(): number[] {
    const trilho = trilhoRef.current;
    if (!trilho) return [];
    const base = (trilho.children[0] as HTMLElement | undefined)?.offsetLeft ?? 0;
    return Array.from(trilho.children).map(
      (filho) => (filho as HTMLElement).offsetLeft - base,
    );
  }

  useEffect(() => {
    const trilho = trilhoRef.current;
    const primeiro = trilho?.children[0] as HTMLElement | undefined;
    const doMeio = trilho?.children[inicioDoMeio] as HTMLElement | undefined;
    if (trilho && primeiro && doMeio) trilho.scrollLeft = doMeio.offsetLeft - primeiro.offsetLeft;
    return () => {
      if (paradaRef.current) clearTimeout(paradaRef.current);
      if (animacaoRef.current) cancelAnimationFrame(animacaoRef.current);
    };
  }, [inicioDoMeio]);

  /*
   * Rolagem animada quadro a quadro. O `behavior: 'smooth'` do navegador tem
   * duração e curva fixas, curtas demais para a distância de um card inteiro —
   * daí a sensação de movimento duro. Aqui a curva desacelera até parar.
   */
  function rolarAte(destino: number, duracao = 700) {
    const trilho = trilhoRef.current;
    if (!trilho) return;
    if (animacaoRef.current) cancelAnimationFrame(animacaoRef.current);

    const partida = trilho.scrollLeft;
    const distancia = destino - partida;
    if (Math.abs(distancia) < 1) return;

    // O encaixe disputaria com a animação a cada quadro; volta ao fim dela.
    const encaixe = trilho.style.scrollSnapType;
    trilho.style.scrollSnapType = 'none';

    /*
     * O marco zero vem do primeiro quadro, e não de um relógio lido aqui: entre
     * a leitura e o quadro inicial passa tempo, e a animação começaria com um
     * pedaço do percurso já vencido — um salto visível a cada troca de card.
     */
    let inicio: number | null = null;

    const quadro = (agora: number) => {
      inicio ??= agora;
      const t = Math.min((agora - inicio) / duracao, 1);
      // easeOutQuint: parte com energia e chega quase parando.
      const suave = 1 - (1 - t) ** 5;
      trilho.scrollLeft = partida + distancia * suave;

      if (t < 1) {
        animacaoRef.current = requestAnimationFrame(quadro);
        return;
      }
      animacaoRef.current = null;
      trilho.style.scrollSnapType = encaixe;
      normalizar();
    };

    animacaoRef.current = requestAnimationFrame(quadro);
  }

  /*
   * Navegar só rola. Quem está em destaque é decidido pela posição (aoRolar),
   * nunca pelo clique.
   */
  function navegarPara(novoIndice: number) {
    rolarAte(posicoes()[novoIndice] ?? 0);
  }

  /*
   * Recentraliza a rolagem na cópia do meio. Só roda quando o movimento para:
   * mexer em scrollLeft no meio da inércia trava a rolagem no iOS.
   */
  function normalizar() {
    const trilho = trilhoRef.current;
    const alvos = posicoes();
    if (!trilho || total < 2 || alvos.length < total * 2) return;
    if (animacaoRef.current) return;
    const umaCopia = alvos[total] - alvos[0];
    // Só a posição muda: o índice é recalculado pelo onScroll que este salto
    // dispara, e assim nunca sai de sincronia com o que está na tela.
    if (trilho.scrollLeft < alvos[total] - 1) {
      trilho.scrollLeft += umaCopia;
    } else if (trilho.scrollLeft >= alvos[total * 2] - 1) {
      trilho.scrollLeft -= umaCopia;
    }
  }

  /*
   * Fonte única do destaque: o card em foco é sempre o que está mais perto do
   * centro, seja o movimento um arraste, uma seta ou um clique.
   */
  function aoRolar() {
    const trilho = trilhoRef.current;
    const alvos = posicoes();
    if (!trilho || alvos.length === 0) return;

    if (paradaRef.current) clearTimeout(paradaRef.current);
    paradaRef.current = setTimeout(normalizar, 140);

    let maisPerto = 0;
    for (let i = 1; i < alvos.length; i += 1) {
      const distancia = Math.abs(alvos[i] - trilho.scrollLeft);
      if (distancia < Math.abs(alvos[maisPerto] - trilho.scrollLeft)) maisPerto = i;
    }
    setIndice(maisPerto);
  }

  function anterior() {
    navegarPara(indice - 1);
  }

  function proximo() {
    navegarPara(indice + 1);
  }

  // Sem depoimentos não há seção: as contas de índice dividem por `total` e
  // sairiam NaN/Infinity num bloco que não teria o que mostrar de todo jeito.
  if (total === 0) return null;

  /* Porcentagem de progresso para a linha */
  const pct = Math.round(((ativo + 1) / total) * 100);

  return (
    <Secao fundo="suave" id="depoimentos">
      <Container>
        <Revelar>
          <TituloDeSecao
            rotulo={conteudo.rotulo}
            titulo={conteudo.titulo}
            className={estilos.cabecalho}
          />
        </Revelar>
      </Container>

      {/* Fora do Container: a fileira atravessa as margens do site */}
      <Revelar atraso={120}>
        <div className={estilos.carrossel}>
          <div className={estilos.janelaContainer}>
              <div
                ref={trilhoRef}
                className={estilos.trilho}
                onScroll={aoRolar}
                role="group"
                aria-roledescription="carrossel"
                aria-label="Depoimentos de alunos"
              >
                {cards.map((dep, i) => {
                  const eAtivo = i === indice;
                  // Cópias laterais do trilho infinito: existem só para a
                  // ilusão de continuidade. Ficam fora da árvore de
                  // acessibilidade e, por isso, também fora da ordem de foco.
                  const eCopia = total > 1 && (i < total || i >= total * 2);
                  const eNavegavel = !eAtivo && !eCopia;
                  return (
                    <div
                      key={i}
                      aria-hidden={eCopia}
                      className={cx(estilos.itemCard, !eAtivo && estilos.itemVazando)}
                      onClick={() => !eAtivo && navegarPara(i)}
                      // Sem isto o navegador rola sozinho para trazer o card
                      // focado à vista, atropelando a animação.
                      onMouseDown={(evento) => !eAtivo && evento.preventDefault()}
                      role={eNavegavel ? 'button' : undefined}
                      tabIndex={eNavegavel ? 0 : undefined}
                      aria-label={
                        eNavegavel ? `Ver depoimento de ${dep.autor}` : undefined
                      }
                      onKeyDown={(e) => {
                        if (!eAtivo && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          navegarPara(i);
                        }
                      }}
                    >
                      <figure
                        className={`${estilos.card} ${eAtivo ? estilos.cardDestacado : estilos.cardVazando}`}
                      >
                        <blockquote className={estilos.textoCard}>
                          <p>
                            <span
                              className={estilos.aspasInline}
                              aria-hidden="true"
                            >
                              &#8220;
                            </span>
                            {dep.texto}
                          </p>
                        </blockquote>

                        <figcaption className={estilos.autoria}>
                          <div className={estilos.avatar} aria-hidden="true">
                            {iniciais(dep.autor)}
                          </div>
                          <div className={estilos.autorInfo}>
                            <span className={estilos.autorNome}>
                              {dep.autor}
                            </span>
                            {dep.contexto && (
                              <span className={estilos.autorContexto}>
                                {dep.contexto}
                              </span>
                            )}
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  );
                })}
              </div>
            </div>

          {/* Barra inferior: progresso + setas — de volta à coluna do texto */}
          {total > 1 && (
            <Container>
              <div className={estilos.barra}>
                {/* Linha de progresso */}
                <div className={estilos.progresso} aria-hidden="true">
                  <div className={estilos.progressoLinha}>
                    <div
                      className={estilos.progressoPreenchimento}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className={estilos.progressoTexto}>
                    {ativo + 1}/{total}
                  </span>
                </div>

                {/* Setas de navegação */}
                <nav
                  className={estilos.setas}
                  aria-label="Navegar entre depoimentos"
                >
                  <button
                    type="button"
                    className={estilos.seta}
                    onClick={anterior}
                    aria-label="Depoimento anterior"
                  >
                    <svg
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 14L6 9l5-5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={estilos.seta}
                    onClick={proximo}
                    aria-label="Próximo depoimento"
                  >
                    <svg
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 4l5 5-5 5" />
                    </svg>
                  </button>
                </nav>
              </div>
            </Container>
          )}
        </div>
      </Revelar>
    </Secao>
  );
}
