# Site institucional InterCiclos

Site do **InterCiclos — Instituto de Formação e Centro de Pesquisa e Terapia**.

Público-alvo: psicólogos formados. Estratégia editorial: equilibrar todas as
frentes do Instituto, usando a Especialização/Formação em Terapia de Casal e
Família como produto âncora de autoridade.

## Stack

| Item | Escolha |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19) |
| Linguagem | TypeScript em modo estrito |
| Estilos | CSS Modules + tokens em `src/app/globals.css` |
| Tipografia | Merchant (títulos) auto-hospedada + Raleway (textos) via `next/font` |
| Dependências extras | nenhuma — sem framework de CSS nem biblioteca de animação |

Todas as páginas são estáticas (SSG), sem JavaScript de terceiros.

## Comandos

```bash
npm install
npm run dev        # ambiente local em http://localhost:3000
npm run build      # build de produção
npm start          # serve o build
npm run lint       # ESLint
npm run typecheck  # TypeScript sem emitir
```

## Arquitetura

```
src/
├── app/                    Rotas (App Router) — uma pasta por página
│   ├── globals.css         Tokens da marca, reset, acessibilidade
│   ├── layout.tsx          Fontes, metadados, header, main, footer, JSON-LD
│   ├── page.tsx            Home
│   ├── icon.svg            Favicon (ícone da marca)
│   ├── sitemap.ts          Sitemap gerado a partir do conteúdo
│   └── robots.ts
├── components/
│   ├── marca/              Logo e Grafismo
│   ├── layout/             Header, Footer, Container, Secao, atalho de teclado
│   ├── ui/                 Botao, Rotulo, TituloDeSecao, Etiquetas, cards, Revelar
│   └── secoes/             Blocos compostos reutilizados entre páginas
├── content/                TODA a redação do site (ver abaixo)
├── styles/                 CSS compartilhado por páginas internas
└── lib/                    Fontes e utilidades
```

### Separação conteúdo × apresentação

Nenhum componente contém texto editorial. Tudo vive em `src/content`, tipado em
`src/content/types.ts`:

| Arquivo | Conteúdo |
| --- | --- |
| `site.ts` | Nome, URL, navegação, contatos, blocos do rodapé |
| `frentes.ts` | As seis frentes de atuação (a Especialização com `ancora: true`) |
| `home.ts` | Hero, manifesto, destaque da Especialização, depoimentos |
| `ciclos.ts` | Seção "Faça parte" / "Em qual ciclo profissional você está agora?" |
| `depoimentos.ts` | Depoimentos de alunos |
| `paginas/*.ts` | Um arquivo por página interna |

Para publicar conteúdo novo, edite esses arquivos — nenhum componente precisa
mudar.

## Pendências de conteúdo institucional

Os pontos abaixo vieram marcados como pendentes no documento de textos. Cada um
já tem lugar reservado na estrutura e **degrada sem quebrar**: listas vazias
simplesmente não renderizam suas seções.

| Pendência | Onde preencher |
| --- | --- |
| Formação, especializações, atuação e trajetória das diretoras | `content/paginas/sobre.ts` → `diretoras` |
| Relação nominal do corpo docente | `content/paginas/sobre.ts` → `docentes` |
| Depoimentos reais de alunos | `content/depoimentos.ts` |
| Agenda de eventos | `content/home.ts` → `eventosHome.agenda` |
| Produção científica do Grupo de Pesquisa | `content/paginas/grupo-de-pesquisa.ts` → `producoes` |
| Validar redação sobre a parceria com a Faculdade Mario Quintana e os requisitos da ABRATEF | `content/paginas/especializacao.ts` → `estrutura.certificacao` |
| E-mail institucional | `content/site.ts` → `contato.email` |
| Domínio definitivo (usado em metadados, sitemap e robots) | `content/site.ts` → `site.url` |
| Fotos das diretoras | `public/equipe/` + campo `foto` |
| Arquivos vetoriais oficiais da marca | `public/marca/` (ver `public/marca/LEIA-ME.md`) |

## Identidade visual

Tokens derivados do Brand Book InterCiclos:

- **Azul** `#203fbc` (sombra `#153496`, luz `#6485ed`)
- **Verde** `#22b573` (sombra `#149356`, luz `#74e2ae`)
- **Preto** `#1a1a1a`
- Cores de apoio frias (violeta, roxo, azul-água) declaradas em `globals.css`.
  Conforme o manual, as cores quentes ficam reservadas a materiais específicos e
  não são usadas na interface.
- Gradiente da marca: azul → verde, aplicado em rótulos, ícone e grafismos.
- Grafismos sempre com opacidade ≤ 50% sobre fundos e imagens.
- Para texto verde sobre fundo claro use `--cor-verde-texto` (`#0f7a46`,
  contraste 5,39:1 — WCAG AA). O verde da marca (2,65:1) e o verde-sombra
  (3,93:1) ficam reservados a elementos gráficos, onde o contraste de texto não
  se aplica.

A tipografia segue a direção do projeto: **Merchant** em títulos e destaques,
**Raleway** em textos. Os arquivos `.woff2` da Merchant estão em `public/fonts`
por ser uma família licenciada.

## Acessibilidade

- Atalho "Pular para o conteúdo principal" como primeiro elemento focável.
- Landmarks semânticos (`header`, `nav`, `main`, `footer`, `section` rotuladas).
- Um único `h1` por página e hierarquia de headings contínua.
- `aria-expanded` / `aria-controls` no menu e no submenu; `Escape` fecha ambos;
  clique fora fecha o submenu.
- `aria-current="page"` no item de navegação ativo.
- Foco visível em todos os alvos (`:focus-visible`), com cor alternativa sobre
  fundo escuro.
- Links que abrem nova aba avisam por texto exclusivo para leitores de tela.
- Formulário de contato com `label` associado, `aria-describedby` na ajuda e
  `role="status"` com `aria-live` no retorno do envio.
- `prefers-reduced-motion` desliga todas as animações; o conteúdo animado é
  renderizado no HTML e nunca depende de JavaScript para existir.

## Formulário de contato

Sem configuração, o formulário monta a mensagem e abre o WhatsApp do Instituto —
o site já funciona antes de haver integração de e-mail. Para enviar por HTTP,
defina o endpoint no `.env` (veja `.env.example`):

```
NEXT_PUBLIC_ENDPOINT_CONTATO=https://...
```

O envio é `POST` em JSON com os campos do formulário. Há um campo-armadilha
(`site`) para descartar envios automatizados.

## Instagram

A seção `InstagramRecentes` mostra os últimos 4 posts de [@inter.ciclos](https://www.instagram.com/inter.ciclos).
Ela ficou sem página desde que `/eventos` foi removida — o componente segue pronto para ser
colocado onde fizer sentido.
A busca acontece no servidor, com cache de uma hora, em `src/lib/instagram.ts`.

**Enquanto não houver token, a seção mostra apenas o convite para seguir o perfil** —
nada quebra, só não aparecem as imagens.

Para ligar a integração:

1. A conta `@inter.ciclos` precisa ser **profissional** (Business ou Creator).
   No app: Configurações → Tipo de conta.
2. Em [developers.facebook.com](https://developers.facebook.com/apps), crie um app
   e adicione o produto **Instagram** (API with Instagram Login).
3. Em *API setup with Instagram login*, conecte a conta e gere um
   **token de acesso de longa duração** (vale 60 dias).
4. Guarde o token em `.env.local` (não versionado):

   ```
   INSTAGRAM_TOKEN=IGQ...
   ```

   Em produção, cadastre a mesma variável no painel da hospedagem.

> **Atenção ao prazo:** o token expira em 60 dias e precisa ser renovado
> (`GET https://graph.instagram.com/refresh_access_token`). Vale agendar a
> renovação — ou trocar por um fluxo automático — antes do primeiro vencimento.
> Quando o token vence, a seção volta sozinha ao estado de convite e o erro é
> registrado no log do servidor.

## Mapa do site

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/especializacao` | Especialização/Formação em Terapia de Casal e Família |
| `/formacoes` | Todas as formações e atividades |
| `/clinica-social` | Clínica Social (psicólogos e pacientes) |
| `/grupos-de-estudos` | Grupos de Estudos |
| `/circulo-academico` | Círculo Acadêmico de Estudos Sistêmicos |
| `/grupo-de-pesquisa` | Grupo de Pesquisa |
| `/lado-de-dentro-do-terapeuta` | Oficina O Lado de Dentro do Terapeuta |
| `/sobre` | Sobre, compromissos, diretoras, corpo docente |
| `/contato` | Contato |
