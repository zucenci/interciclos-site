/*
 * Gera o HTML da imagem de Open Graph (src/app/opengraph-image.png).
 *
 * A marca entra como o arquivo oficial inteiro — `public/marca/principal-azul.svg`,
 * embutido como data URI num <img>. Nada de remontar símbolo, nome e designação
 * peça por peça: `caminhos.ts` mistura duas assinaturas diferentes (símbolo e
 * nome vêm de `sem-tagline-azul.svg`, onde o letreiro é maior em relação ao
 * símbolo), e reunir as três peças com aquelas proporções desenha um lockup que
 * não existe. Com o arquivo inteiro e `height: auto`, a proporção é a do
 * original por construção.
 *
 * O grafismo de fundo continua vindo de `caminhosGrafismo.ts`, que é peça única
 * e não tem esse problema.
 *
 * Como usar (a partir da raiz do projeto):
 *
 *   1. node --experimental-strip-types scripts/gerar-og.mjs .tmp/og.html
 *
 *   2. Rasterizar em 2x — o dobro da resolução final; reduzir depois suaviza
 *      os laços finos do símbolo, que em 1x saem serrilhados:
 *
 *      chrome --headless=new --disable-gpu --hide-scrollbars \
 *        --force-device-scale-factor=2 --window-size=1200,630 \
 *        --screenshot=.tmp/og-2x.png file:///CAMINHO/ABSOLUTO/.tmp/og.html
 *
 *   3. Reduzir os 2400x1260 para 1200x630 (formato pedido pelo Open Graph) e
 *      salvar em src/app/opengraph-image.png. Qualquer redimensionador com
 *      reamostragem bicúbica serve.
 *
 * O texto do `alt` fica em src/app/opengraph-image.alt.txt e é lido pelo Next.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const raiz = path.resolve(import.meta.dirname, '..');
const saida = path.resolve(process.argv[2] ?? '.tmp/og.html');

const daRaiz = (rel) => path.join(raiz, rel);
const base64 = (rel) => readFileSync(daRaiz(rel)).toString('base64');

const grafismo = await import(pathToFileURL(daRaiz('src/components/marca/caminhosGrafismo.ts')).href);

const logo = base64('public/marca/principal-azul.svg');
const merchant = base64('public/fonts/Merchant-Light.woff2');

const tracados = (lista) => lista.map((d) => `<path d="${d}"/>`).join('');

const html = `<meta charset="utf-8">
<title>InterCiclos — Open Graph</title>
<style>
  @font-face {
    font-family: 'Merchant';
    src: url(data:font/woff2;base64,${merchant}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    width: 1200px;
    height: 630px;
    overflow: hidden;
    position: relative;
    background-color: #ede9de;
    background-image: linear-gradient(150deg, #fbf9f4 0%, #ede9de 58%, #e5ddcd 100%);
  }

  /* Grafismo de apoio com o centro do desenho fora do quadro: só os arcos
     externos atravessam a arte, como nos banners do site. */
  .grafismo {
    position: absolute;
    width: 1740px;
    height: auto;
    left: 60%;
    top: -48%;
    opacity: 0.22;
    fill: #c1af95;
  }

  .conteudo {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Só a largura é fixada: a altura sai da proporção do próprio arquivo. */
  .logo {
    width: 680px;
    height: auto;
  }

  .regua {
    width: 96px;
    height: 1px;
    margin: 54px 0 36px;
    background-color: #b08067;
  }

  .chamada {
    max-width: 800px;
    font-family: 'Merchant', Georgia, serif;
    font-weight: 300;
    font-size: 35px;
    line-height: 1.34;
    letter-spacing: -0.01em;
    text-align: center;
    color: #4e4438;
  }
</style>

<svg class="grafismo" viewBox="${grafismo.GRAFISMO_VIEWBOX}">${tracados(grafismo.GRAFISMO_CAMINHOS)}</svg>

<div class="conteudo">
  <img class="logo" src="data:image/svg+xml;base64,${logo}" alt="">
  <div class="regua"></div>
  <p class="chamada">Formação, prática clínica, pesquisa e desenvolvimento para psicólogos.</p>
</div>
`;

mkdirSync(path.dirname(saida), { recursive: true });
writeFileSync(saida, html, 'utf8');
console.log(`${saida} (${Math.round(html.length / 1024)} KB)`);
