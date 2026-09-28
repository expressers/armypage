import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base: works on GitHub Pages (/armypage/) and on a custom domain.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
