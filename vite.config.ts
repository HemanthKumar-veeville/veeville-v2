import { defineConfig } from "vite";
import tailwind from "tailwindcss";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [tailwind()],
  publicDir: "public",
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
