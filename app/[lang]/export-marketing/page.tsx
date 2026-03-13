import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'

const service: ServiceSeo = {
  slug: 'export-marketing',
  title: {
    zh: '出口行銷（Export Marketing）｜內容與通路導向的海外買家成長',
    en: 'Export Marketing | Content-led Growth for Overseas Buyers',
  },
  description: {
    zh: '用 SEO + GEO 的內容架構，搭配高品質落地頁與內部連結，讓你的網站變成可持續獲客的 inbound 機器。',
    en: 'Turn your site into an inbound machine with SEO + AI-search (GEO) content architecture, landing pages, and internal links.',
  },
  h1: { zh: '出口行銷（Export Marketing）服務', en: 'Export Marketing Service' },
  whatIs: {
    zh: ['出口行銷是以海外買家搜尋意圖為核心，透過內容、落地頁、結構化資料與內部連結，把自然流量轉成可追蹤的詢盤。'],
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
  industries: {
    zh: ['機械設備', '電子零組件', '塑膠射出/製品', '化工材料', '醫療器材', '汽車零件', '工業設備'],
    en: ['Machinery', 'Electronics', 'Plastics', 'Chemicals', 'Medical', 'Automotive', 'Industrial Equipment'],
  },
  caseStudy: {
    title: { zh: '從內容架構切入，讓詢盤變穩定', en: 'From content architecture to stable inbound inquiries' },
    desc: {
      zh: '以服務頁＋市場頁＋文章群集建立權威，再用資源磁鐵提升轉化，逐步把搜尋流量變成可跟進的 leads。',
      en: 'Build authority via clustered service + market pages, then increase conversion with lead magnets to turn traffic into followable leads.',
    },
    link: '/zh/case-studies',
  },
  faq: [
    {
      q: { zh: 'GEO 是什麼？', en: 'What is GEO?' },
      a: { zh: 'GEO 是針對 AI 搜尋（ChatGPT/Perplexity/Google AI）偏好的結構化內容寫法，讓內容更容易被引用與摘要。', en: 'GEO optimizes content structure for AI search engines so pages are easier to cite and summarize.' },
    },
    {
      q: { zh: '多久能看到流量？', en: 'How soon will we see traffic?' },
      a: { zh: '通常 8–12 週會看到長尾曝光提升；6–12 個月在穩定更新節奏下，才會有明顯的流量與詢盤增長。', en: 'Expect long-tail impressions in 8–12 weeks; meaningful traffic and inquiries typically take 6–12 months with consistent shipping.' },
    },
  ],
  ctaTitle: { zh: '把網站做成 inbound 產生器', en: 'Turn your site into an inbound machine' },
  ctaDesc: { zh: '從頁面結構、文章群集到 schema 與內鏈，我們幫你把增長流程做成可持續的系統。', en: 'From architecture and clusters to schema and internal links, we turn growth into a repeatable system.' },
}

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: service.title[lang],
    description: service.description[lang],
    alternates: { canonical: `/${lang}/export-marketing`, languages: { zh: '/zh/export-marketing', en: '/en/export-marketing' } },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const withCaseLink = { ...service, caseStudy: { ...service.caseStudy, link: `/${lang}/case-studies` } }
  return <ServiceSeoPage lang={lang} service={withCaseLink} />
}

