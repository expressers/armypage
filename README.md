# Army — landing page

Site de apresentação do [Army](https://github.com/tchiinhemba/army): partilha de ecrã instantânea
entre Mac e Windows na rede local.

React + TypeScript, gerido com [Bun](https://bun.sh) e compilado com Vite para HTML estático.

```sh
bun install
bun run dev      # http://localhost:5173
bun run build    # gera dist/
```

Os links de download apontam para `releases/latest/download/Army-macOS.dmg` e
`Army-Windows-Setup.exe`, que cada release do Army publica — nunca precisam de ser actualizados.

Deploy: cada push para `main` publica em GitHub Pages (`.github/workflows/pages.yml`).
