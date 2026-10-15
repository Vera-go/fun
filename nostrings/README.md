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

## 上線檢查清單

2026-10-15 已正式推出（已刪 noindex、入口頁改成連結）。下面沒打勾的項目改成上線後持續處理。

- [x] 三支專線號碼向官方網站再確認一次（`content.js` 的 `help`，2026-10-15 確認）
  - 戒菸專線 0800-636363，週一到週六 9:00–21:00：[衛福部](https://www.mohw.gov.tw/cp-6557-76938-1.html)
  - 安心專線 1925，全年無休 24 小時：[衛福部](https://mohw.gov.tw/cp-16-50587-1.html)
  - 毒品危害防制諮詢專線 0800-770-885，24 小時：[衛福部](https://mohw.gov.tw/cp-16-86990-1.html)
- [x] 機密檔案的內容（依托咪酯、喪屍煙彈）附上官方出處（2026-10-15 確認）
  - 俗稱、醫療用途、濫用症狀：[法務部反毒大本營](https://antidrug.moj.gov.tw/cp-1212-9648-2.html)
  - 2026-06-27 起為第一級毒品：[法務部](https://www.moj.gov.tw/2204/2795/2796/279619/post)、[警政署](https://www.npa.gov.tw/ch/app/news/view?module=news&id=2139&serno=cb212c20-f31b-4844-9943-541fefd25bb4)、[高檢署案例簡介](https://www.tph.moj.gov.tw/4421/4475/632364/1207371/post)
  - 香港 2025-02-14 起列為危險藥物（舊稱「太空油」）：[香港政府新聞公報](https://www.info.gov.hk/gia/general/202502/12/P2025021100143.htm)、[保安局禁毒處](https://www.nd.gov.hk/tc/spaceoil_drug.html)
- [ ] 換算器的品項和價格請青少年挑過
- [ ] 16 型的文案請 3～5 位目標年齡的青少年看過、改寫流行語
- [ ] 請學校輔導老師或反菸團體審閱
- [x] 做連結預覽圖（1200×630），在 `index.html` 補上 `og:image`（2026-10-15；`og-image.png` 由 `_dev/og.html` 用 Edge 無頭模式截圖產生，改文案或角色後要重新截圖）
- [ ] 查 NOSTRINGS 的商標、網域和社群帳號
- [x] 刪掉 index.html 裡的 `noindex`，並把入口頁（fun/index.html）的「即將推出」改成連結（2026-10-15）
