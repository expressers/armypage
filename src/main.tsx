import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { LANG_KEY } from "./components/LanguageSwitch";
import { langFromPath } from "./i18n/context";
import { DICTS, type Lang } from "./i18n/dict";
import "./styles.css";

const lang = langFromPath(location.pathname);

// Honour a language the visitor picked before (never auto-detected, so crawlers and
// shared links always get the page they asked for).
let saved: string | null = null;
try {
  saved = localStorage.getItem(LANG_KEY);
} catch {
  // Storage unavailable.
}
if ((saved === "pt" || saved === "en") && saved !== lang && document.referrer.indexOf(location.host) === -1) {
  location.replace(DICTS[saved as Lang].meta.path + location.hash);
} else {
  const root = document.getElementById("root");
  const app = (
    <StrictMode>
      <App lang={lang} />
    </StrictMode>
  );
  if (root) {
    // Production HTML is prerendered (scripts/prerender.tsx): attach to it instead of re-rendering.
    if (root.firstElementChild) hydrateRoot(root, app);
    else createRoot(root).render(app);
  }
}
