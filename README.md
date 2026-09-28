# Army: landing page

Site do [Army](https://army.expressers.ao), um produto [Expressers](https://expressers.ao). Código da app: [Army](https://github.com/expressers/army): partilha de ecrã instantânea
entre Mac e Windows na rede local.

React + TypeScript, gerido com [Bun](https://bun.sh) e compilado com Vite para HTML estático.

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # gera dist/
```

Downloads: `/download/mac` e `/download/windows` redireccionam (vercel.json) para a última versão no
repositório público [army-releases](https://github.com/expressers/army-releases), que só tem instaladores.
Nunca precisam de ser actualizados.

Contagem de downloads: `GET /api/downloads` (função Vercel em `api/downloads.ts`) devolve os totais por
sistema e por versão, com base na contagem do GitHub. Actualiza a cada 5 minutos.

Build: `vite build` seguido de `scripts/prerender.tsx`, que gera o HTML completo (SEO e pré-visualizações
de links sem JavaScript); no browser o React faz *hydrate* por cima.

Ícones e imagem de partilha: fontes em `assets/*.svg`, gerados com `python3 scripts/generate-assets.py`
(requer `rsvg-convert`, `brew install librsvg`).

Deploy: Vercel, a partir de `main`.
