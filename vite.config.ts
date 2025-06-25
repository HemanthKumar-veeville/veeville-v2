import { defineConfig } from "vite";
import tailwind from "tailwindcss";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwind()],
  server: {
    historyApiFallback: true, // <--- important line
  },
  publicDir: "./static",
  base: mode === "development" ? "/" : "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'static': path.resolve(__dirname, './static')
    }
  }
}));
