import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/arxiv-feed": {
        target: "https://arxiv.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/arxiv-feed/, "/a"),
      },
    },
  },
});