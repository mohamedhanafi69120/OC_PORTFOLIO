import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/OC_PORTFOLIO/", // Fix chemin GitHub Pages

  plugins: [
    react(),
    ...(command === "build"
      ? [
          viteCompression({
            algorithm: "gzip",
            ext: ".gz",
            threshold: 1024, // Ne compresse que les fichiers > 1 KB
            deleteOriginFile: false, // Garde les fichiers originaux
          }),
        ]
      : []),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        comments: false,
      },
    },
  },

  server: {
    middlewareMode: false, // Garde false pour éviter les erreurs en mode dev
  },

  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
}));
