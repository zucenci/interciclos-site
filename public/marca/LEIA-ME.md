# Arquivos de marca

Esta pasta guarda os ativos visuais oficiais do InterCiclos.

## Arquivos

- `principal-azul.svg` — assinatura principal (símbolo + InterCiclos +
  designação), na versão colorida. É a **fonte** da designação e dos demais
  ativos derivados.
- `sem-tagline-azul.svg` — assinatura sem a designação (símbolo + InterCiclos).
  Nesta versão o letreiro é maior em relação ao símbolo do que na principal;
  é a **fonte** do símbolo e do nome usados no cabeçalho.
- `simbolo-interciclos.svg` — símbolo isolado, em terracota.
- `simbolo-branco.svg` — símbolo isolado para fundos escuros.
- `grafismo-fendi.svg` — grafismo de apoio (circunferências concêntricas),
  usado como textura de fundo dos banners.
- `monograma-azul.svg` — monograma: símbolo em Off-White sobre disco Azul
  InterCiclos. É a **fonte** do favicon (`src/app/icon.svg`).
- `monograma-bronze.svg` — o mesmo monograma na versão Bronze.

## Imagem de Open Graph

`src/app/opengraph-image.png` — o cartão que aparece quando um link do site é
compartilhado. Não é um arquivo desenhado à parte: sai de `scripts/gerar-og.mjs`,
que usa `principal-azul.svg` inteiro, o grafismo de `caminhosGrafismo.ts` e a
Merchant de `public/fonts`. Se a marca for regenerada, rode o script de novo em
vez de retocar o PNG — as instruções estão no cabeçalho dele.

A assinatura entra como o arquivo inteiro, e não remontada a partir de
`caminhos.ts`: aquele módulo tira o símbolo e o nome de `sem-tagline-azul.svg`,
onde o letreiro é maior em relação ao símbolo, e só a designação de
`principal-azul.svg`. Serve ao cabeçalho, que usa apenas as duas primeiras
peças, mas juntar as três desenha um lockup fora de proporção.

O texto alternativo fica em `src/app/opengraph-image.alt.txt`, lido pelo Next.

## Como o site usa esses arquivos

Os desenhos vetoriais foram extraídos para `src/components/marca/caminhos.ts`
— símbolo e nome de `sem-tagline-azul.svg`, designação de `principal-azul.svg` —
que guarda:

- os traçados do símbolo, do nome e da designação;
- os `viewBox` de cada peça, com uma unidade de folga em volta do traçado
  (sem ela o desenho encosta na borda da caixa e aparece cortado);
- as proporções do lockup (respiro entre símbolo, nome e designação).

Quem consome esses dados:

- `src/components/marca/Logo.tsx` — a marca (`formato`, `tom`, `comLink`,
  `comDesignacao`).
- `src/components/marca/Grafismo.tsx` — o grafismo como textura dos banners
  (dados em `caminhosGrafismo.ts`, extraídos de `grafismo-fendi.svg`).
- `src/app/icon.svg` — favicon, o monograma em um quadrado (o disco fica
  centrado na caixa, com 1,5% de folga).

Se a marca for atualizada, substitua os arquivos oficiais e regenere
`caminhos.ts`, os símbolos soltos e o favicon a partir deles — não edite os
traçados à mão. As caixas de cada peça são medidas rasterizando o SVG e
lendo os limites do traçado, e não copiadas do `viewBox` do arquivo.

## Cores oficiais do arquivo

- Azul InterCiclos `#35536c` (token `--marca-azul`)
- Terracota `#b08067` (token `--marca-terracota`)

## Regras do Brand Book a preservar

- Versão preferencial: horizontal. A vertical só quando a área favorecer.
- Sobre fundos claros: versões escuras. Sobre fundos escuros ou cores
  contrastantes: versão branca (`tom="branco"`).
- Área de respiro mínima medida pelo "o" de "InterCiclos".
- Grafismos com opacidade menor ou igual a 50% sobre imagens e fundos.
