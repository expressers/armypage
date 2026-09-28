import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (root) {
  // Production HTML is prerendered (scripts/prerender.tsx): attach to it instead of re-rendering.
  if (root.firstElementChild) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
