// Renders every language to static HTML at build time (dist/index.html = pt,
// dist/en/index.html = en) with localized SEO tags, hreflang alternates and JSON-LD,
// so search engines and link previews see full content without JavaScript.
import { mkdir } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import { App } from "../src/App";
import { DICTS, LANGS, type Lang } from "../src/i18n/dict";
import { DOWNLOADS, SITE, VERSION } from "../src/links";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const url = (lang: Lang) => SITE + DICTS[lang].meta.path;

function seo(lang: Lang): string {
  const m = DICTS[lang].meta;
  const image = `${SITE}/og-image.png`;
  const alternates = [
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${DICTS[l].meta.htmlLang}" href="${url(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${url("pt")}" />`,
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://expressers.ao/#organization", name: "Expressers", url: "https://expressers.ao/" },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/`,
        name: "Army",
        inLanguage: LANGS.map((l) => DICTS[l].meta.htmlLang),
        publisher: { "@id": "https://expressers.ao/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        name: "Army",
        description: m.appDescription,
        url: url(lang),
        inLanguage: m.htmlLang,
        image,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "macOS 12.3+, Windows 10, Windows 11",
        softwareVersion: VERSION,
        downloadUrl: [SITE + DOWNLOADS.macos, SITE + DOWNLOADS.windows],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@id": "https://expressers.ao/#organization" },
      },
    ],
  };
  return [
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${url(lang)}" />`,
    ...alternates,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Army by Expressers" />`,
    `<meta property="og:locale" content="${m.ogLocale}" />`,
    ...LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${DICTS[l].meta.ogLocale}" />`),
    `<meta property="og:url" content="${url(lang)}" />`,
    `<meta property="og:title" content="${esc(m.ogTitle)}" />`,
    `<meta property="og:description" content="${esc(m.ogDescription)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(m.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(m.twitterDescription)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

const template = await Bun.file("dist/index.html").text();
for (const marker of ["<!--app-->", "<!--seo-->", '<html lang="pt">', "<title>Army · Expressers</title>"]) {
  if (!template.includes(marker)) throw new Error(`dist/index.html: missing ${marker}`);
}

for (const lang of LANGS) {
  const m = DICTS[lang].meta;
  const html = template
    .replace('<html lang="pt">', `<html lang="${m.htmlLang}">`)
    .replace("<title>Army · Expressers</title>", `<title>${esc(m.title)}</title>`)
    .replace("<!--seo-->", seo(lang))
    .replace("<!--app-->", renderToString(<App lang={lang} />));
  const dir = lang === "pt" ? "dist" : `dist${m.path}`.replace(/\/$/, "");
  await mkdir(dir, { recursive: true });
  await Bun.write(`${dir}/index.html`, html);
  console.log(`prerendered ${dir}/index.html`);
}

