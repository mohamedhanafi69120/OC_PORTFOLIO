import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ command }) => ({
  base: "/OC_PORTFOLIO/", // ✅ FIX : Même base pour build et preview

  plugins: [
    react(),
    ...(command === "build"
      ? [
          viteCompression({
            algorithm: "gzip",
            ext: ".gz",
            threshold: 1024,
            deleteOriginFile: false,
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
    middlewareMode: false, //  Pour éviter des conflits en mode dev
  },

  preview: {
    port: 4173, //  Assure que le preview utilise le bon port
    open: true, // Ouvre automatiquement le navigateur
    strictPort: true, //  Empêche le changement de port
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
}));
