'use client';

import { useState, useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Revelar } from '@/components/ui/Revelar';
import { depoimentosHome as conteudo } from '@/content/home';
import { depoimentos } from '@/content/depoimentos';
import type { Depoimento } from '@/content/types';
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

const PLACEHOLDER: Depoimento[] = [
  {
    texto:
      'A especialização mudou a forma como olho para as famílias. Comecei a perceber padrões que antes passavam despercebidos, e isso transformou minha prática clínica de maneira muito concreta.',
    autor: 'Ana Lima',
    contexto: 'Especialização — Turma 2023',
  },
  {
    texto:
      'Tive a chance de trabalhar casos reais com supervisão desde o primeiro módulo. A segurança que isso trouxe para o consultório é algo que não encontrei em nenhuma outra formação.',
    autor: 'Miguel Souza',
    contexto: 'Especialização — Turma 2022',
  },
  {
    texto:
      'Criatividade, escuta sistêmica e sempre uma lente muito cuidadosa sobre as relações. O InterCiclos ensina a olhar para o que move as pessoas.',
    autor: 'Jennifer Ramos',
    contexto: 'Formação Continuada',
  },
  {
    texto:
      'O trabalho de self integrado à formação foi o grande diferencial. Não aprendi apenas técnicas — aprendi a me conhecer como terapeuta.',
    autor: 'Carlos Mendes',
    contexto: 'Clínica Social',
  },
];

export function CarrosselDepoimentos() {
  const lista = depoimentos.length > 0 ? depoimentos : PLACEHOLDER;
  const [ativo, setAtivo] = useState(0);
  const [rotacionando, setRotacionando] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = lista.length;

  function navegarPara(novoIndice: number) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setRotacionando(true);
    setAtivo(novoIndice);

    // O esmaecimento à esquerda é ativado apenas durante o movimento (550ms)
    timerRef.current = setTimeout(() => {
      setRotacionando(false);
    }, 550);
  }

  function anterior() {
    navegarPara((ativo - 1 + total) % total);
  }

  function proximo() {
    navegarPara((ativo + 1) % total);
  }

  /* Porcentagem de progresso para a linha */
  const pct = Math.round(((ativo + 1) / total) * 100);

  return (
    <Secao fundo="suave" id="depoimentos">
      <Container>
        {/* Cabeçalho acima (Título à esquerda, Destaques à direita) */}
        <Revelar>
          <header className={estilos.cabecalho}>
            <div className={estilos.cabecalhoTitulo}>
              <span className={estilos.aspasDecorativas} aria-hidden="true">
                &#8220;
              </span>
              <h2 className={estilos.tituloSecao}>{conteudo.titulo}</h2>
            </div>
            <ul className={estilos.listaBeneficios} role="list">
              <li>Mais segurança para atender.</li>
              <li>Novas perspectivas para a clínica.</li>
              <li>Trocas profissionais que continuam depois das aulas.</li>
              <li>Novas possibilidades de atuação.</li>
              <li>E, muitas vezes, transformações que ultrapassam o consultório.</li>
            </ul>
          </header>
        </Revelar>

        {/* Carrossel com transição suave e esmaecimento temporário à esquerda durante a rotação */}
        <Revelar atraso={120}>
          <div className={estilos.carrossel}>
            {/* Janela de exibição: esmaecimento à esquerda ativado APENAS durante data-rotacionando */}
            <div
              className={estilos.janelaContainer}
              data-rotacionando={rotacionando}
            >
              <div
                className={estilos.trilho}
                style={{
                  transform: `translateX(calc(-1 * ${ativo} * (var(--largura-card) + var(--gap-trilho))))`,
                }}
                role="list"
                aria-label="Depoimentos de alunos"
              >
                {lista.map((dep, i) => {
                  const eAtivo = i === ativo;
                  return (
                    <div
                      key={i}
                      className={`${estilos.itemCard} ${eAtivo ? estilos.itemDestacado : estilos.itemVazando}`}
                      onClick={() => !eAtivo && navegarPara(i)}
                      role={!eAtivo ? 'button' : undefined}
                      tabIndex={!eAtivo ? 0 : undefined}
                      aria-label={
                        !eAtivo ? `Ver depoimento de ${dep.autor}` : undefined
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

            {/* Barra inferior: progresso + setas */}
            {total > 1 && (
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
            )}
          </div>
        </Revelar>
      </Container>
    </Secao>
  );
}
