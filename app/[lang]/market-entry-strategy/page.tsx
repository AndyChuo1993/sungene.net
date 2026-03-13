import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'

const service: ServiceSeo = {
  slug: 'market-entry-strategy',
  title: {
    zh: '市場切入策略（Market Entry Strategy）｜出口市場分層與通路設計',
    en: 'Market Entry Strategy | Export Market Segmentation & Channel Plan',
  },
  description: {
    zh: '用市場分層、買家角色與通路地圖，把「要去哪裡、找誰、怎麼切入」做成可執行策略，降低試錯成本。',
    en: 'Reduce trial-and-error with market tiers, buyer roles, and channel maps that turn “where/whom/how” into an executable plan.',
  },
  h1: { zh: '市場切入策略', en: 'Market Entry Strategy for Manufacturers' },
  problem: {
    zh: ['市場選太大：不知道先做哪一國、哪一個買家角色，資源被分散。', '沒有通路結構理解：直銷、經銷、代理、整合商混在一起，訊息無法對準。', '沒有可驗證假設：開發一段時間後無法判斷是名單問題、訊息問題、或市場選錯。'],
    en: ['Markets are too broad, so resources scatter across too many countries and roles.', 'Without channel structure, messaging is misaligned across direct/channel partners.', 'No testable hypotheses: you can’t tell whether the issue is market, list, or messaging.'],
  },
  solution: {
    zh: ['我們用「市場分層 → 買家角色 → 通路地圖 → 切入假設 → 測試節奏」建立一份可執行的市場切入策略。', '策略會對應到後續的名單建置、訊息框架與跟進節奏，讓你能快速驗證與迭代。'],
    en: ['We build an executable entry plan via market tiers, buyer roles, channel maps, entry hypotheses, and test cadence.', 'The plan connects directly to list building, messaging, and follow-ups so you can validate and iterate quickly.'],
  },
  whatIs: {
    zh: ['Market Entry Strategy 是把「市場選擇」變成可測試、可迭代的假設：先選最有機會的市場與角色，再用最小成本的開發測試來驗證。'],
    en: ['Market entry strategy turns market selection into testable hypotheses: pick best-fit markets and roles, then validate with minimal-cost outreach tests.'],
  },
  howWorks: {
    zh: ['製造業常見問題不是沒有好產品，而是沒有優先序：先做哪個市場、先找哪種買家、用什麼通路切入。清楚的分層能大幅提高開發效率。'],
    en: ['Manufacturers often lack prioritization: which market first, which buyer roles first, and which channel path to use. Clear tiers increase efficiency.'],
  },
  process: {
    zh: ['蒐集產品與現況：規格、應用、差異點、交期、MOQ、現有客群。', '市場分層：優先/次要市場與競品對照。', '買家角色拆解：Importer/Distributor/Brand/Factory/Integrator。', '通路地圖與 Offer：合作條件、證據素材與 CTA。', '測試節奏：用小規模名單 + 訊息框架快速驗證。'],
    en: ['Collect inputs: specs, use cases, differentiation, lead time, MOQ, existing customers.', 'Market tiers with competitor context.', 'Buyer role decomposition.', 'Channel map and offer: terms, proof assets, CTA.', 'Test cadence with small lists and messaging to validate quickly.'],
  },
  tools: {
    zh: ['市場資料：進出口資料、產業報告、競品通路觀察。', '通路研究：協會/展會/目錄/LinkedIn。', '驗證方法：小規模測試（名單 + 訊息 + 跟進）。'],
    en: ['Market data: import/export data, reports, competitor channel observation.', 'Channel research: associations, trade fairs, directories, LinkedIn.', 'Validation: small test runs (list + message + cadence).'],
  },
  checklist: {
    zh: ['選出 1–2 個優先市場與明確的買家角色。', '寫出一個可計算的 Offer（差異點 + 證據 + CTA）。', '建立 100 家測試名單並完成驗證。', '跑 2 週測試並用數據決定下一步。'],
    en: ['Pick 1–2 priority markets with clear buyer roles.', 'Write a calculable offer (differentiation + proof + CTA).', 'Build and validate a 100-company test list.', 'Run a 2-week test and decide next steps by data.'],
  },
  results: {
    zh: [
      { label: '優先序清楚', value: '更聚焦', desc: '先做最有機會的市場與角色，避免資源分散。' },
      { label: '可驗證假設', value: '可迭代', desc: '用測試節奏判斷問題在哪裡並快速修正。' },
      { label: '通路更對準', value: '更有效', desc: '直銷/經銷/代理角色分清，訊息與 Offer 更精準。' },
    ],
    en: [
      { label: 'Clear prioritization', value: 'Focused', desc: 'Start with best-fit markets and roles to avoid scattering resources.' },
      { label: 'Testable hypotheses', value: 'Iterate', desc: 'Use test cadence to diagnose and fix issues quickly.' },
      { label: 'Aligned channels', value: 'Effective', desc: 'Role clarity improves messaging and offers across channel types.' },
    ],
  },
  funnel: {
    zh: [
      { label: '市場候選', value: '8' },
      { label: '優先市場', value: '2' },
      { label: '買家角色', value: '3' },
      { label: '測試名單', value: '100' },
      { label: '有效回覆', value: '10' },
    ],
    en: [
      { label: 'Market candidates', value: '8' },
      { label: 'Priority markets', value: '2' },
      { label: 'Buyer roles', value: '3' },
      { label: 'Test list', value: '100' },
      { label: 'Replies', value: '10' },
    ],
  },
  industries: {
    zh: ['機械設備', '電子零組件', '五金工具', '化工材料', '包材/材料'],
    en: ['Machinery', 'Electronics', 'Hardware Tools', 'Chemicals', 'Packaging/Materials'],
  },
  caseStudy: {
    title: { zh: '從市場分層到通路落地：安排 15 場會議、簽約 3 家代理', en: 'From segmentation to channel execution: 15 meetings, 3 agents signed' },
    desc: { zh: '以市場分層與通路角色拆解，讓會議邀約與條件談判更有效率。', en: 'Segmentation and role clarity made meeting-setting and terms negotiation more effective.' },
    link: '/case-studies/machinery',
  },
  faq: [
    {
      q: { zh: '怎麼知道市場選對了？', en: 'How do we know the market is right?' },
      a: { zh: '用小規模名單 + 訊息 + 跟進做 2 週測試，以回覆與需求訊號判斷是否放大。', en: 'Run a 2-week test with a small list and cadence, then decide by reply and demand signals.' },
    },
    {
      q: { zh: '要先做直銷還是通路？', en: 'Direct sales or channels first?' },
      a: { zh: '視產品與市場而定。策略會把買家角色與通路路徑拆開，先做最能驗證需求的路徑。', en: 'Depends on product and market. We separate roles and paths and start with the fastest validation route.' },
    },
  ],
  ctaTitle: { zh: '取得你的市場切入建議', en: 'Get Your Market Entry Plan' },
  ctaDesc: { zh: '提交產品與目標市場，我們回覆分層、通路角色與可行的切入策略。', en: 'Submit your product and markets. We’ll reply with tiers, roles, and a feasible entry plan.' },
  relatedLinks: [
    { label: { zh: '免費出口市場分析（CTA）', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
    { label: { zh: '外貿客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
    { label: { zh: '經銷商開發（核心服務）', en: 'Distributor Development (Core)' }, href: '/services/distributor-development' },
    { label: { zh: '外貿資源（指南文章）', en: 'Export Resources (Guides)' }, href: '/resources' },
  ],
}

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: service.title[lang],
    description: service.description[lang],
    alternates: { canonical: `/${lang}/market-entry-strategy`, languages: { zh: '/zh/market-entry-strategy', en: '/en/market-entry-strategy' } },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const withLang = {
    ...service,
    caseStudy: { ...service.caseStudy, link: `/${lang}${service.caseStudy.link}` },
    relatedLinks: service.relatedLinks?.map((x) => ({ ...x, href: `/${lang}${x.href}` })),
  }
  return <ServiceSeoPage lang={lang} service={withLang} />
}
