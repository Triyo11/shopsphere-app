import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
config();

const api_ongkir_url = process.env.VITE_API_ONGKIR_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/province": {
        target: `${api_ongkir_url}/province`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/province/, ""),
      },
      "/city": {
        target: `${api_ongkir_url}/city`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/city/, ""),
      },
      "/cost": {
        target: `${api_ongkir_url}/cost`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cost/, ""),
      },
    },
  },
});
