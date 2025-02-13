// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    command === "build" // Active Gzip seulement en mode production
      ? viteCompression({
          algorithm: "gzip",
          ext: ".gz",
          threshold: 1024, // Ne compresse que les fichiers > 1 KB
          deleteOriginFile: false, // Garde les fichiers originaux
        })
      : null,
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
    middlewareMode: false, // IMPORTANT : Désactiver "html" en mode dev
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
}));
