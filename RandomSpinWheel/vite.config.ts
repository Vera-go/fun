import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  // 相對路徑：放在 GitHub Pages 的子資料夾（/fun/wheel/）也找得到 js、css
  base: "./",
  build: {
    // 靜態版輸出到儲存庫根目錄的 wheel/，由 GitHub Pages 直接提供
    outDir: path.resolve(import.meta.dirname, "../wheel"),
    emptyOutDir: true,
  },
});
