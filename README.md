# Army: landing page

Site do [Army](https://army.expressers.ao), um produto [Expressers](https://expressers.ao). Código da app: [Army](https://github.com/expressers/army): partilha de ecrã instantânea
entre Mac e Windows na rede local.

React + TypeScript, gerido com [Bun](https://bun.sh) e compilado com Vite para HTML estático.

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # gera dist/
```

Downloads: `/download/mac` e `/download/windows` são páginas estáticas que redireccionam para a última
versão no repositório público [army-releases](https://github.com/expressers/army-releases), que só tem
instaladores. Nunca precisam de ser actualizadas.

Contagem de downloads: https://army.expressers.ao/downloads/ (lê a contagem do GitHub no browser).

Páginas de download e de contagem: geradas com `python3 scripts/static-pages.py`.

Build: `vite build` seguido de `scripts/prerender.tsx`, que gera o HTML completo (SEO e pré-visualizações
de links sem JavaScript); no browser o React faz *hydrate* por cima.

Ícones e imagem de partilha: fontes em `assets/*.svg`, gerados com `python3 scripts/generate-assets.py`
(requer `rsvg-convert`, `brew install librsvg`).

Deploy: Render (static site) a partir de `main`.
- Build command: `bun install && bun run build`
- Publish directory: `dist`
