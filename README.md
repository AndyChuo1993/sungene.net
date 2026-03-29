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
- `NEXT_PUBLIC_SITE_URL`（站點正式網域，用於 canonical/OG/robots/sitemap）
- `NEXT_PUBLIC_CMS_URL`（CMS 外部可訪域名，用於資料抓取）

## 可選環境變數
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`（如使用 InquiryForm reCAPTCHA）

## 部署（Cloud Run，Cloud Build）
- 設定檔：`web/cloudbuild.yaml`
- Substitutions（於 Trigger 設定）：
  - `_REGION`
  - `_NEXT_PUBLIC_SITE_URL`
  - `_NEXT_PUBLIC_CMS_URL`
  - `_NEXT_PUBLIC_RECAPTCHA_SITE_KEY`（可留空）

## 打包/交付注意
- 交付/部署請只包含原始碼與必要設定（app、components、data、lib、public、package.json/lock）。
- 請勿把敏感或雜項一起打包：`.env*`、`.git`、`.next`、`node_modules`、`reports`、`*.log`、`*.zip`。

## SEO 與 Sitemap/Robots
- `/sitemap.xml`：靜態手寫路由，涵蓋全部 12 語系（ALL_LANGS）× 各頁面，依優先度分組（homepage 1.0、machine pages 0.9、machinery 0.85、support 0.7）
- `/robots.txt`：含 sitemap 位置與允許爬取規則
- Metadata：
  - layout 設定 metadataBase/canonical/twitter
  - 詳細頁帶 description/OG images/canonical
