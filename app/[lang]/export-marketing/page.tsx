import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'

const service: ServiceSeo = {
  slug: 'export-marketing',
  title: {
    zh: '出口行銷（Export Marketing）｜內容與通路導向的海外買家成長',
    en: 'Export Marketing | Content-led Growth for Overseas Buyers',
  },
  description: {
    zh: '用 SEO + 內容架構，搭配高品質落地頁與內部連結，讓你的網站變成可持續獲客的 inbound 機器。',
    en: 'Turn your site into an inbound machine with SEO-driven content architecture, landing pages, and internal links.',
  },
  h1: { zh: '出口行銷服務', en: 'Export Marketing for Manufacturers' },
  problem: {
    zh: ['你的服務頁太像銷售頁：缺清楚的說明、清單、指南與資料，買家看完不容易理解差異與下一步。', '關鍵字覆蓋太少：只吃到少數詞，缺乏長尾流量（how to / tools / checklist）。', '內部連結規則不清楚，文章與服務、案例、資源磁鐵之間沒有形成集群。'],
    en: ['Your pages read like sales pages: they lack clear explanations, lists, guides, and proof—buyers can’t decide fast.', 'Keyword coverage is too narrow: you miss long-tail “how-to”, tools, and checklist queries.', 'Internal linking is weak: blog, services, cases, and magnets are not clustered.'],
  },
  solution: {
    zh: ['我們用「頁型架構 + 內容模板 + Schema + 內鏈規則」把網站做成可持續獲客的系統，而不是一次性的文章堆疊。', '內容用清楚的結構（定義 / 方法 / 工具 / 步驟 / 清單 / FAQ）讓買家更快看懂、比較並採取行動。'],
    en: ['We build a sustainable acquisition system via architecture, templates, schema, and standardized internal linking.', 'We structure content with definitions, steps, tools, checklists, and FAQs so buyers can understand and act faster.'],
  },
  whatIs: {
    zh: ['出口行銷是以海外買家搜尋意圖為核心，透過內容、落地頁、結構化資料與內部連結，把自然流量轉成可追蹤的詢價。'],
    en: ['Export marketing converts buyer-intent searches into trackable inquiries via content, landing pages, schema, and internal linking.'],
  },
  howWorks: {
    zh: ['我們會先定義你要吸引的買家輪廓與關鍵字群，接著建立可擴展的頁面結構，最後用內容生產節奏持續擴大長尾流量。'],
    en: ['We define your ICP and keyword clusters, build scalable site architecture, then ship content on a steady cadence to grow long-tail traffic.'],
  },
  process: {
    zh: ['關鍵字與頁型規劃：服務/市場/產業/文章/資源磁鐵。', '建立可轉化的內容模板：TOC、FAQ、案例與 CTA。', '上線結構化資料：Article/FAQ/Breadcrumb/Organization。', '內部連結規則化：文章→服務→案例→資源磁鐵。', '每週迭代：2 篇文章/週，並回補舊文與內鏈。'],
    en: ['Plan keyword clusters and page types (services, markets, industries, blog, magnets).', 'Ship conversion-first templates: TOC, FAQ, proof, CTA.', 'Implement schema: Article, FAQ, Breadcrumb, Organization.', 'Standardize internal linking: blog → service → case → magnet.', 'Iterate weekly: 2 posts/week plus refreshes and internal links.'],
  },
  tools: {
    zh: ['關鍵字研究：以主旨群集（Topic Cluster）拆解成服務/方法/成果/產業/市場。', '內容模板：定義/方法/工具/步驟/清單/FAQ。', '技術 SEO：sitemap、canonical、hreflang、Schema（FAQ/Article/Breadcrumb）。'],
    en: ['Keyword research: topic clusters mapped into service/method/outcome/industry/market pages.', 'Templates: definitions, methods, tools, steps, checklists, and FAQs.', 'Technical SEO: sitemap, canonical, hreflang, schema (FAQ/Article/Breadcrumb).'],
  },
  checklist: {
    zh: ['完成 1 個核心服務頁（含 FAQ schema + 內鏈）。', '完成 1 篇權威文章（3000 字以上）並加 TOC 與 Checklist。', '每篇文章至少連到：服務 + 案例 + 資源磁鐵。', '每週固定產出與回補舊文，維持節奏。'],
    en: ['Ship 1 core service page with FAQ schema + internal links.', 'Ship 1 authority guide (3,000+ words) with TOC and checklist.', 'Each post links to: a service, a case study, and a lead magnet.', 'Maintain weekly cadence and refresh older posts.'],
  },
  results: {
    zh: [
      { label: '長尾曝光', value: '持續累積', desc: '以 how-to / tools / checklist 擴大關鍵字覆蓋。' },
      { label: '清楚的服務架構', value: '內容結構', desc: '讓買家更快理解差異、成本與下一步。' },
      { label: '轉換導流', value: '內鏈系統', desc: '文章→服務→案例→磁鐵，形成可追蹤路徑。' },
    ],
    en: [
      { label: 'Long-tail reach', value: 'Compounds', desc: 'Expand coverage via how-to, tools, and checklist queries.' },
      { label: 'Clear structure', value: 'Content architecture', desc: 'Help buyers understand options and decide faster.' },
      { label: 'Conversion paths', value: 'Linking', desc: 'Blog → service → case → magnet pathways become trackable.' },
    ],
  },
  funnel: {
    zh: [
      { label: '文章曝光', value: '10000' },
      { label: '點擊', value: '800' },
      { label: '閱讀', value: '400' },
      { label: '表單', value: '40' },
      { label: '詢價', value: '10' },
    ],
    en: [
      { label: 'Impressions', value: '10000' },
      { label: 'Clicks', value: '800' },
      { label: 'Readers', value: '400' },
      { label: 'Forms', value: '40' },
      { label: 'Inquiries', value: '10' },
    ],
  },
  industries: {
    zh: ['機械設備', '電子零元件', '塑膠射出/製品', '化工材料', '醫療器材', '汽車零件', '工業設備'],
    en: ['Machinery', 'Electronics', 'Plastics', 'Chemicals', 'Medical', 'Automotive', 'Industrial Equipment'],
  },
  caseStudy: {
    title: { zh: '從內容架構切入，讓詢價變穩定', en: 'From content architecture to stable inbound inquiries' },
    desc: {
      zh: '以服務頁＋市場頁＋文章群集建立權威，再用資源磁鐵提升轉化，逐步把搜尋流量變成可跟進的 leads。',
      en: 'Build authority via clustered service + market pages, then increase conversion with lead magnets to turn traffic into followable leads.',
    },
    link: '/zh/case-studies',
  },
  faq: [
    {
      q: { zh: '內容架構是什麼？', en: 'What is content architecture?' },
      a: { zh: '內容架構是把買家常問的問題，用一致的段落與順序說清楚（定義、適用情境、流程、交付、FAQ），讓人一眼看懂差異並知道下一步。', en: 'Content architecture organizes buyer questions into a consistent structure (definition, fit, process, deliverables, FAQ) so visitors can compare and take action faster.' },
    },
    {
      q: { zh: '多久能看到流量？', en: 'How soon will we see traffic?' },
      a: { zh: '通常 8–12 週會看到長尾曝光提升；6–12 個月在穩定更新節奏下，才會有明顯的流量與詢價增長。', en: 'Expect long-tail impressions in 8–12 weeks; meaningful traffic and inquiries typically take 6–12 months with consistent shipping.' },
    },
  ],
  ctaTitle: { zh: '把網站做成 inbound 產生器', en: 'Turn your site into an inbound machine' },
  ctaDesc: { zh: '從頁面結構、文章群集到 schema 與內鏈，我們幫你把增長流程做成可持續的系統。', en: 'From architecture and clusters to schema and internal links, we turn growth into a repeatable system.' },
  relatedLinks: [
    { label: { zh: '外銷資源：How to find overseas buyers', en: 'Guide: How to find overseas buyers' }, href: '/blog/how-to-find-overseas-buyers' },
    { label: { zh: '外銷客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
    { label: { zh: '成功案例（證據）', en: 'Case Studies (Proof)' }, href: '/case-studies' },
    { label: { zh: '免費出口市場分析（CTA）', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: service.title[lang],
    description: service.description[lang],
    alternates: { canonical: `/${lang}/export-marketing`, languages: { zh: '/zh/export-marketing', en: '/en/export-marketing', 'x-default': '/en/export-marketing' } },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const withCaseLink = {
    ...service,
    caseStudy: { ...service.caseStudy, link: `/${lang}${service.caseStudy.link}` },
    relatedLinks: service.relatedLinks?.map((x) => ({ ...x, href: `/${lang}${x.href}` })),
  }
  return <ServiceSeoPage lang={lang} service={withCaseLink} />
}
