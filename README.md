# Army: landing page

Site do [Army](https://army.expressers.ao), um produto [Expressers](https://expressers.ao). Código da app: [Army](https://github.com/tchiinhemba/army): partilha de ecrã instantânea
entre Mac e Windows na rede local.

React + TypeScript, gerido com [Bun](https://bun.sh) e compilado com Vite para HTML estático.

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # gera dist/
```

Os links de download apontam para `releases/latest/download/Army-macOS.dmg` e
`Army-Windows-Setup.exe`, que cada release do Army publica, por isso nunca precisam de ser actualizados.

Build: `vite build` seguido de `scripts/prerender.tsx`, que gera o HTML completo (SEO e pré-visualizações
de links sem JavaScript); no browser o React faz *hydrate* por cima.

Ícones e imagem de partilha: fontes em `assets/*.svg`, gerados com `python3 scripts/generate-assets.py`
(requer `rsvg-convert`, `brew install librsvg`).

Deploy: Vercel, a partir de `main`.
