import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
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