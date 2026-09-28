import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the domain root (army.expressers.ao).
export default defineConfig({
  base: "/",
  plugins: [react()],
});
