import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// import.meta.dirname 要 Node 20.11 以上；舊版 Node 改用 import.meta.url 算出資料夾
const dir = import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(dir, "client", "src"),
      "@shared": path.resolve(dir, "shared"),
      "@assets": path.resolve(dir, "attached_assets"),
    },
  },
  root: path.resolve(dir, "client"),
  // 相對路徑 + 輸出到儲存庫根目錄的 restaurant/，由 GitHub Pages 直接提供
  base: "./",
  build: {
    outDir: path.resolve(dir, "../restaurant"),
    emptyOutDir: true,
  },
});
