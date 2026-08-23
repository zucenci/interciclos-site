# Arquivos de marca

Esta pasta guarda os ativos visuais oficiais do InterCiclos.

## Arquivos

- `principal-azul.svg` — assinatura principal (símbolo + InterCiclos +
  designação), na versão colorida. É a **fonte** de todos os outros ativos.
- `simbolo-interciclos.svg` — símbolo isolado, em terracota.
- `simbolo-branco.svg` — símbolo isolado para fundos escuros.
- `grafismo-fendi.svg` — grafismo de apoio (circunferências concêntricas),
  usado como textura de fundo dos banners.

## Como o site usa esses arquivos

Os desenhos vetoriais foram extraídos de `principal-azul.svg` para
`src/components/marca/caminhos.ts`, que guarda:

- os traçados do símbolo, do nome e da designação;
- os `viewBox` de cada peça;
- as proporções do lockup (respiro entre símbolo, nome e designação).

Quem consome esses dados:

- `src/components/marca/Logo.tsx` — a marca (`formato`, `tom`, `comLink`,
  `comDesignacao`).
- `src/components/marca/Grafismo.tsx` — o grafismo como textura dos banners
  (dados em `caminhosGrafismo.ts`, extraídos de `grafismo-fendi.svg`).
- `src/app/icon.svg` — favicon, o símbolo centrado em um quadrado.

Se a marca for atualizada, substitua `principal-azul.svg` e regenere
`caminhos.ts`, os símbolos soltos e o favicon a partir dele — não edite os
traçados à mão.

## Cores oficiais do arquivo

- Azul InterCiclos `#35536c` (token `--marca-azul`)
- Terracota `#b08067` (token `--marca-terracota`)

## Regras do Brand Book a preservar

- Versão preferencial: horizontal. A vertical só quando a área favorecer.
- Sobre fundos claros: versões escuras. Sobre fundos escuros ou cores
  contrastantes: versão branca (`tom="branco"`).
- Área de respiro mínima medida pelo "o" de "InterCiclos".
- Grafismos com opacidade menor ou igual a 50% sobre imagens e fundos.
