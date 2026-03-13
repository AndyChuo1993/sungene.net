# 頁面設計規格（桌面優先 / 雙語 ZH-EN）

## 全站設計（Global）
### Layout
- 桌面（>=1200px）：最大內容寬 1200px，左右留白自動；主要版面採「堆疊式 sections + 內容容器」。
- 平板（768–1199px）：容器寬度 100%，左右 padding 24px。
- 手機（<=767px）：單欄，padding 16px；導覽列改為抽屜式。
- 佈局技術：CSS Grid（卡片列表/多欄區塊）+ Flexbox（導覽/CTA/表單排列）。

### Meta Information（規則）
- Title：`{主要關鍵字/頁標題} | {品牌名}`（ZH/EN 各自獨立）。
- Description：每頁 140–160 字元內（雙語）。
- Open Graph：`og:title / og:description / og:url / og:image / og:locale`，並補上 alternate locales。
- Canonical：指向同語系的乾淨 URL。
- hreflang：每頁輸出 `zh` 與 `en` 對應 URL；同時提供 `x-default`（如採用）。

### Global Styles（Design Tokens）
- 背景：#FFFFFF；區塊底色：#F7F8FA
- 主色（Brand）：#0B5FFF；輔色：#111827；強調色：#F59E0B
- 字體：
  - ZH：Noto Sans TC（或系統字）
  - EN：Inter（或系統字）
- 字級：H1 40/48、H2 28/36、H3 20/28、Body 16/24、Small 14/20
- Button：
  - Primary：Brand 背景 + 白字；hover 亮度 -8%
  - Secondary：白底 + Brand 邊框；hover 底色 #EFF6FF
- Link：Brand 色 + hover underline
- 卡片：圓角 12px、陰影 0 6px 20px rgba(0,0,0,.08)、間距 16–24px

### 共用元件（全站）
- Header（固定頂部）：Logo、主導覽（落地頁/資源/部落格/聯絡）、語系切換、主 CTA（詢價）。
- Footer：聯絡資訊、快速連結、隱私權/條款、社群（如有）。
- Breadcrumb：落地頁/文章/資源詳情顯示。
- CTA Bar（可選 sticky）：在長內容頁（落地頁/文章）顯示「詢價/下載」雙 CTA。

---

## 1) 首頁（/zh、/en）
### Page Structure
1. Hero
2. 你能解決什麼問題（3–5 點）
3. 精選落地頁入口（卡片 Grid）
4. 精選資源（Lead Magnets）
5. 精選文章（最新/熱門）
6. 信任元素（指標/流程/客群）
7. 主要 CTA 區（表單或跳轉聯絡頁）

### Sections & Components
- Hero：H1 + 次標 + 2 個 CTA（Primary：聯絡/詢價；Secondary：下載資源）。
- 精選入口：每張卡包含標題、摘要、內文關鍵詞；點擊進入 /lp/[slug]。
- 精選資源：3 張卡 +「查看全部資源」；卡片顯示語系標籤。
- 精選文章：列表顯示日期/閱讀時間（可選）；提供內部連結。

---

## 2) 服務/產品落地頁（/[locale]/lp/[slug]）
### Layout
- 左側內容欄（文章式閱讀）+ 右側黏著側欄（桌面）：
  - 側欄含：快速 CTA、目錄（Anchor TOC）、相關資源。
- 平板/手機：側欄下移到內容上方的 CTA 區。

### Meta & Schema
- Meta：以該 slug 的主要出口關鍵字為核心。
- Schema（JSON-LD）：WebPage + BreadcrumbList + FAQPage（若有 FAQ 區塊）+ Organization。

### Sections
1. 標題區：H1、摘要、關鍵優勢 bullet。
2. 問題/情境：出口買家痛點與適用範圍。
3. 解決方案：流程/能力/規格（可用對照表）。
4. 案例/證據（若有）：簡短段落或指標。
5. FAQ：3–8 題。
6. 相關內容：
   - 相關落地頁（同主題）
   - 相關文章（解釋型）
   - 相關資源（可下載）
7. CTA：嵌入短表單（姓名/Email/公司/需求）或導到聯絡頁。

---

## 3) 資源列表（/[locale]/resources）
### Page Structure
- 頁首：H1 + 說明 +（可選）篩選（語系固定、分類/用途）。
- 資源 Grid：每張卡顯示標題、摘要、適合對象、更新日、CTA「查看/下載」。

### Interaction
- 點擊卡片進入資源詳情；列表支援分頁或無限載入（SEO 建議分頁）。

---

## 4) 資源詳情/解鎖下載（/[locale]/resources/[slug]）
### Layout
- 兩欄（桌面）：左側內容（介紹/大綱/你會得到什麼），右側解鎖表單卡片。
- 手機：先顯示價值與大綱，再顯示表單。

### States
- 初始：顯示表單（必填：姓名、Email、需求或角色）。
- 成功：顯示「下載按鈕」與注意事項（有效期限/一次性）。
- 失敗：顯示錯誤訊息與重試。

### Meta & Schema
- Schema：WebPage + BreadcrumbList（資源可用 CreativeWork 風格欄位；以 WebPage 為主即可）。

---

## 5) 部落格列表（/[locale]/blog）
### Page Structure
- H1 + 簡介
- 篩選列：分類/標籤（可選）
- 文章列表：卡片（標題、摘要、日期、閱讀時間可選）
- 分頁：上一頁/下一頁（可 indexable，並加 rel prev/next）

---

## 6) 部落格文章詳情（/[locale]/blog/[slug]）
### Layout
- 內容主欄 + 右側 TOC（桌面）
- 文首資訊：標題、描述、日期、作者（可選）

### 內容元件
- 內文：支援 H2/H3、引用、表格、圖片（含 alt）。
- 內部連結區：
  - 文中關鍵字連到對應落地頁（/lp/）
  - 文末「相關資源」與「推薦閱讀」
- CTA 區：文章中段或文末插入「下載資源」或「詢價」卡片。

### Meta & Schema
- Schema：Article（headline/datePublished/dateModified/author/image）+ BreadcrumbList。

---

## 7) 聯絡/詢價（/[locale]/contact）與感謝頁（/[locale]/thanks）
### Contact Layout
- 左側：說明文（預期回覆時間/適合聯絡的需求）
- 右側：表單卡片

### Form 欄位
- 必填：姓名、Email、需求描述
- 選填：公司、電話、國家/市場
- 隱私提示：提交即同意隱私權政策（連結）。

### Thanks Page
- 顯示送出成功訊息、下一步（檢查信箱/可下載資源/回到首頁）。

---

## 8) 後台（/admin/login、/admin）
### Admin Login
- 簡單表單（Email/Password）+ 錯誤提示。

### Admin Console（資訊架構）
- 側邊欄：落地頁、部落格、資源、名單
- 內容編輯：
  - 雙語欄位並列（ZH/EN tabs）
  - slug、狀態（draft/published）、SEO 欄位（title/description/OG image）
- 名單表格：搜尋/篩選/匯出 CSV

---

## 技術 SEO 呈現（UI/頁面輸出）
- 每頁 `<head>`：title/description/canonical/hreflang/OG/Twitter card。
- 產生 sitemap 與 robots；404 提供返回入口與站內搜尋（可選）。
- 圖片：統一使用 responsive image、lazy-load、明確 alt。
