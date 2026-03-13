import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'

const service: ServiceSeo = {
  slug: 'overseas-buyer-lists',
  title: {
    zh: '海外買家名單（Overseas Buyer Lists）｜可直接使用的寄信名單與開信名單',
    en: 'Overseas Buyer Lists | Ready-to-use Prospect Lists for Export',
  },
  description: {
    zh: '交付可直接使用的海外買家名單：寄信名單與開信名單（Excel），包含公司、決策人、職位、Email、LinkedIn、公司網站。',
    en: 'Deliver ready-to-use overseas buyer lists: sent list + opens list (Excel) including company, decision-maker, title, email, LinkedIn, and website.',
  },
  h1: { zh: '海外買家名單交付', en: 'Overseas Buyer Lists (Deliverable)' },
  problem: {
    zh: ['名單品質不穩，寄了沒回還跳退。', '沒有決策人資料，只能寄到一般信箱。', '名單缺分層與標註，無法支援後續跟進。'],
    en: ['Unreliable lists cause bounces and low replies.', 'Without decision-makers, you end up emailing generic inboxes.', 'No segmentation makes follow-up inefficient.'],
  },
  solution: {
    zh: ['我們以 ICP 與買家角色為核心，建立可驗證的買家資料庫並以 Excel 交付。', '名單支援後續的 cold email/LinkedIn 節奏與回覆分類。'],
    en: ['We build validated buyer databases based on ICP and roles, delivered as Excel.', 'Lists are structured for cadence-based outreach and reply triage.'],
  },
  whatIs: {
    zh: ['Overseas Buyer Lists 是外貿開發的核心資產：可投遞、可追蹤、可分層的海外買家名單。'],
    en: ['Overseas buyer lists are the core asset of export development: deliverable, trackable, and segmented prospect lists.'],
  },
  howWorks: {
    zh: ['我們先定義你要找的買家角色與市場，接著用多來源蒐集與驗證建立資料庫，再把名單分層交付。'],
    en: ['We define buyer roles and markets, source from multiple channels, validate contacts, then deliver segmented lists.'],
  },
  process: {
    zh: ['定義 ICP 與買家角色。', '多來源蒐集公司與決策人。', '驗證 Email/LinkedIn 並去重。', '分層標註（市場/角色/優先序）。', 'Excel 交付（寄信名單 + 開信名單）。'],
    en: ['Define ICP and roles.', 'Source companies and decision-makers.', 'Validate and deduplicate.', 'Segment by market/role/priority.', 'Deliver as Excel (sent list + opens list).'],
  },
  tools: {
    zh: ['Google/LinkedIn/產業目錄/展會名單。', '公司網站與職位驗證。', 'Email 驗證流程與去重。'],
    en: ['Google/LinkedIn/directories/trade fairs.', 'Website and role verification.', 'Email validation and dedupe.'],
  },
  checklist: {
    zh: ['名單欄位齊全（公司/決策人/職位/Email/LinkedIn/官網）。', 'Email 驗證與去重完成。', '分層標註（市場/角色/優先序）。', '可直接用於後續節奏式跟進。'],
    en: ['Required fields included.', 'Validated and deduplicated.', 'Segmented by market/role/priority.', 'Ready for cadence-based follow-ups.'],
  },
  results: {
    zh: [
      { label: '交付格式', value: 'Excel', desc: '可直接交給業務使用。' },
      { label: '資料可用性', value: '可驗證', desc: '降低跳退與無效寄送。' },
      { label: '後續可追蹤', value: '可分層', desc: '支援跟進節奏與回覆分類。' },
    ],
    en: [
      { label: 'Delivery format', value: 'Excel', desc: 'Ready for your sales team.' },
      { label: 'Usability', value: 'Validated', desc: 'Lower bounces and wasted sends.' },
      { label: 'Trackable follow-ups', value: 'Segmented', desc: 'Supports cadence and triage.' },
    ],
  },
  funnel: {
    zh: [
      { label: '候選公司', value: '3000' },
      { label: '符合 ICP', value: '800' },
      { label: '決策人', value: '500' },
      { label: '可投遞', value: '350' },
      { label: '優先名單', value: '200' },
    ],
    en: [
      { label: 'Candidates', value: '3000' },
      { label: 'ICP fit', value: '800' },
      { label: 'Decision makers', value: '500' },
      { label: 'Deliverable', value: '350' },
      { label: 'Priority', value: '200' },
    ],
  },
  industries: {
    zh: ['機械設備', '電子零組件', '五金工具', '包材/材料'],
    en: ['Machinery', 'Electronics', 'Hardware Tools', 'Packaging/Materials'],
  },
  caseStudy: {
    title: { zh: '五金工具：首月建立 500+ 目標名單', en: 'Hardware: built 500+ targets in month one' },
    desc: { zh: '名單品質到位後，回覆與詢盤更容易穩定累積。', en: 'List quality enabled more stable replies and inquiries.' },
    link: '/case-studies/hardware',
  },
  faq: [
    { q: { zh: '名單能否指定市場與買家角色？', en: 'Can we specify markets and buyer roles?' }, a: { zh: '可以。名單會依你產品與目標市場定義 ICP 與角色後建置。', en: 'Yes. Lists are built based on your ICP by market and role.' } },
    { q: { zh: '名單交付後你們也能協助開發嗎？', en: 'Can you run outreach after list delivery?' }, a: { zh: '可以，後續可銜接 Cold Email/LinkedIn 或核心服務的外貿客戶開發。', en: 'Yes. You can continue with cold email/LinkedIn or the core export lead gen service.' } },
  ],
  ctaTitle: { zh: '取得你的海外買家名單', en: 'Get Your Overseas Buyer List' },
  ctaDesc: { zh: '提交產品與市場，我們回覆名單來源、建置方式與交付範圍。', en: 'Submit your product and markets. We’ll reply with sources, build plan, and scope.' },
  relatedLinks: [
    { label: { zh: '核心：外貿客戶開發', en: 'Core: Export Lead Generation' }, href: '/services/export-lead-generation' },
    { label: { zh: '方法：Buyer Database Building', en: 'Method: Buyer Database Building' }, href: '/buyer-database-building' },
    { label: { zh: '方法：Cold Email Outreach', en: 'Method: Cold Email Outreach' }, href: '/cold-email-outreach' },
    { label: { zh: '免費出口市場分析', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
  ],
}

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: service.title[lang],
    description: service.description[lang],
    alternates: { canonical: `/${lang}/overseas-buyer-lists`, languages: { zh: '/zh/overseas-buyer-lists', en: '/en/overseas-buyer-lists' } },
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
