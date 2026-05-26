import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/auth": {
        target: "https://127.0.0.1:8000",
        changeOrigin: true,
        secure: true
      },
      "/api": {
        target: "https://127.0.0.1:8000",
        changeOrigin: true,
        secure: true
      },
    },
  },
});