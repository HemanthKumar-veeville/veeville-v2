import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Tailwind via PostCSS only, remove direct plugin call here
    viteStaticCopy({
      targets: [
        {
          src: 'public/robots.txt',
          dest: ''
        },
        {
          src: 'public/sitemap.xml',
          dest: ''
        }
      ]
    })
  ],
  publicDir: "./public", // This tells Vite to serve public files from "public/"
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
