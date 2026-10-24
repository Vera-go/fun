import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Node 18 沒有 import.meta.dirname，用檔案網址換算
const dirname = import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "client", "src"),
      "@shared": path.resolve(dirname, "shared"),
      "@assets": path.resolve(dirname, "attached_assets"),
    },
  },
  root: path.resolve(dirname, "client"),
  // 相對路徑：放在 GitHub Pages 的子資料夾（/fun/wheel/）也找得到 js、css
  base: "./",
  build: {
    // 靜態版輸出到儲存庫根目錄的 wheel/，由 GitHub Pages 直接提供
    outDir: path.resolve(dirname, "../wheel"),
    emptyOutDir: true,
  },
});
