import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        alpine: path.resolve(__dirname, "src/alpine.js"),
        counter: "src/counter/main.jsx",
        message: "src/message/main.jsx",
        // addToCart: 'src/add-to-cart-button/main.jsx',
      },
      output: {
        dir: "assets",
        entryFileNames: "vite-[name].js",
        chunkFileNames: "vite-[name].js",
        assetFileNames: "vite-[name].[ext]",
      },
    },
    watch: {},
    emptyOutDir: false,
    server: {
      watch: {
        usePolling: true,
      },
      host: "0.0.0.0",
      port: 3000,
      https: false,
      open: true,
    },
  },
});
