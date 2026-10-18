# 暈頭轉向小豬轉盤

上線的是靜態網頁（`../wheel/`），原始碼在這個資料夾（React + Vite + TypeScript）。

## 改完程式後怎麼更新網站

```bash
cd RandomSpinWheel
npm ci          # 第一次或套件有變才需要
npx vite build  # 直接輸出到 ../wheel/（會先清空那個資料夾）
```

編譯後把 `wheel/` 一起 commit。檔名裡的雜湊碼每次內容有變就會換，舊檔會被自動清掉。

## 功能備註

- 「我的轉盤」存在使用者瀏覽器的 `localStorage`（key：`wheel_saved_sets_v1`），不登入、不上傳；最多 10 組。
- `server/` 是 Replit 時期留下來的後端，靜態網站用不到，也不會被編譯進 `wheel/`。
