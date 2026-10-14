# NOSTRINGS 網站（MVP）

## 檔案

| 檔案 | 內容 |
| --- | --- |
| `index.html` | 網站本體：反骨人格測驗、換算器、泡泡紙、機密檔案、找人聊聊 |
| `content.js` | **全站文案**：16 型名稱、口號、菸商套路、題目、換算品項、專線。要改字只改這裡 |
| `favicon.ico`、`favicon-32.png`、`apple-touch-icon-180.png` | 網站小圖示（來自 `../brand`） |

使用者的資料（上次的測驗結果、換算金額、天數、泡泡紙紀錄）只存在使用者自己的瀏覽器，沒有任何資料送出去。

## 網址與部署

放在 `Vera-go/fun` 儲存庫的 `nostrings/` 資料夾，由 GitHub Pages 提供：https://vera-go.github.io/fun/nostrings/
不需要建置，改完 push 到 main 就會自動更新。分享卡片預覽工具在 `_dev/card-preview.html`（底線開頭的資料夾不會被 GitHub Pages 發布）。
Logo 的產生程式在私人儲存庫 `verachang-go/nostrings` 的 `brand/`。

本機預覽：在 `D:\AI tools` 啟動 launch.json 的 `fun` 伺服器，打開 http://localhost:8767/fun/nostrings/

## 上線前檢查清單

- [ ] 三支專線號碼向官方網站再確認一次（`content.js` 的 `help`）
- [ ] 機密檔案的內容（依托咪酯、喪屍煙彈）附上官方或新聞出處，或請毒防中心確認
- [ ] 換算器的品項和價格請青少年挑過
- [ ] 16 型的文案請 3～5 位目標年齡的青少年看過、改寫流行語
- [ ] 請學校輔導老師或反菸團體審閱
- [ ] 做連結預覽圖（1200×630），在 `index.html` 補上 `og:image`
- [ ] 查 NOSTRINGS 的商標、網域和社群帳號
- [ ] 刪掉 index.html 裡的 `noindex`，並把入口頁（fun/index.html）的「即將推出」改成連結
