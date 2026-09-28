// Renders the page to static HTML at build time so search engines and link previews
// see the full content without running JavaScript. The client then hydrates it.
import { renderToString } from "react-dom/server";
import { App } from "../src/App";

const file = "dist/index.html";
const html = await Bun.file(file).text();
const marker = "<!--app-->";
if (!html.includes(marker)) throw new Error(`${file}: missing ${marker} placeholder`);
await Bun.write(file, html.replace(marker, renderToString(<App />)));
console.log(`prerendered ${file}`);
