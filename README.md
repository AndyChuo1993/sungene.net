# AI Trade Web (Next.js App Router)

## 啟動方式（本機）
1. 安裝依賴
   - `npm ci`
2. 建置
   - `npm run build`
3. 啟動
   - `npm run start`
   - 本機預設 Port: 3000
   - Cloud Run/Docker: 自動讀取 `PORT` 環境變數 (預設 8080)

## 必填環境變數（Production）
| 變數名稱 | 說明 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 站點正式網域（含 https://，不含結尾 /）。由 `lib/siteConfig.ts` 的 `SITE_URL` 統一讀取，套用至所有頁面 canonical / hreflang / OG / sitemap / robots。 |

## 可選環境變數
| 變數名稱 | 說明 |
|---|---|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 測量 ID（如 G-XXXXXXXX）。未設定則不載入 gtag。 |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 前端 Site Key，用於 InquiryForm。 |
| `RECAPTCHA_SECRET` | reCAPTCHA v3 伺服器端 Secret Key，用於 API 驗證。 |
| `MAIL_HOST` / `SMTP_HOST` | SMTP 伺服器主機名。 |
| `MAIL_PORT` / `SMTP_PORT` | SMTP 埠（預設 587）。 |
| `MAIL_USER` / `SMTP_USER` | SMTP 帳號。 |
| `MAIL_PASS` / `SMTP_PASS` | SMTP 密碼。 |
| `SMTP_URL` | 完整 SMTP URL（替代上方分開設定，如 `smtp://user:pass@host:587`）。 |
| `INQUIRY_TO` | 詢價 email 收件人（預設 `contact@sungene.net`）。 |
| `MAIL_FROM` | 寄件人顯示名稱（預設 `SunGene Service Team`）。 |

> **注意**：SMTP 相關變數若全部未設定，email 功能停用，詢價將改寫入 `data/inquiries.ndjson`（本機用，Cloud Run 上為暫存，不作為正式保存）。正式環境建議確保 SMTP 設定正確，或改接資料庫 / 物件儲存。

## 部署（Cloud Run，Cloud Build）
- 設定檔：`web/cloudbuild.yaml`
- Substitutions（於 Trigger 設定）：
  - `_REGION`
  - `_NEXT_PUBLIC_SITE_URL`
  - `_NEXT_PUBLIC_RECAPTCHA_SITE_KEY`（可留空）

## 打包/交付注意
- 交付/部署請只包含原始碼與必要設定（app、components、data、lib、public、package.json/lock）。
- 請勿把敏感或雜項一起打包：`.env*`、`.git`、`.next`、`node_modules`、`reports`、`*.log`、`*.zip`。
- 執行期產生的 `data/*.ndjson` / `data/*.json` 已在 `.gitignore`，不納入版本控制。

> **⚠️ 正式環境 SMTP 必確認**：SMTP 相關變數若全部未設定，email 停用，詢價 / 產品詢價 / analytics 會回落寫入本機 `data/` 目錄。Cloud Run 容器重啟後該目錄不保留，資料將消失。上線前請確認 `MAIL_HOST`、`MAIL_USER`、`MAIL_PASS`（或 `SMTP_URL`）已正確設定，並實測收信。

## SEO 與 Sitemap/Robots
- `/sitemap.xml`：靜態手寫路由，涵蓋全部 12 語系（ALL_LANGS）× 各頁面，依優先度分組（homepage 1.0、machine pages 0.9、machinery 0.85、support 0.7）
- `/robots.txt`：含 sitemap 位置與允許爬取規則
- Metadata：
  - layout 設定 metadataBase / canonical，所有 12 語系均有 description
  - 詳細頁帶 description / OG images / canonical / hreflang（12 語系）
  - 所有頁面站點 URL 統一由 `lib/siteConfig.ts` 的 `SITE_URL` 管理（canonical、hreflang、openGraph、JSON-LD、robots、sitemap 全部套用）
