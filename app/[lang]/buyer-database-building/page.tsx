import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'
import { cnText } from '@/lib/cnText'

const service: ServiceSeo = {
  slug: 'buyer-database-building',
  title: {
    cn: '買家資料資料庫建立｜海外買家名單與決策人資料',
    zh: '買家資料資料庫建立｜海外買家名單與決策人資料',
    en: 'Buyer Database Building | Overseas Buyer Lists for Manufacturers',
  },
  description: {
    cn: '建立可直接使用的海外買家名單（公司 + 決策人 + Email/LinkedIn），並以資料驗證降低跳退與無效開發。',
    zh: '建立可直接使用的海外買家名單（公司 + 決策人 + Email/LinkedIn），並以資料驗證降低跳退與無效開發。',
    en: 'Build ready-to-use overseas buyer lists (companies + decision-makers + email/LinkedIn) with validation to reduce bounces and wasted outreach.',
  },
  h1: { cn: '買家資料資料庫建立', zh: '買家資料資料庫建立', en: 'Buyer Database Building for Manufacturers' },
  problem: {
    cn: ['名單來自單一來源，品質不穩：Email 無效、職位不對、公司不匹配。', '缺少驗證流程，寄信跳退與垃圾信風險增加。', '沒有分層與標註，名單無法用於持續跟進。'],
    zh: ['名單來自單一來源，品質不穩：Email 無效、職位不對、公司不匹配。', '缺少驗證流程，寄信跳退與垃圾信風險增加。', '沒有分層與標註，名單無法用於持續跟進。'],
    en: ['Single-source lists are unreliable: wrong roles, bad emails, poor fit.', 'Without validation, bounces and deliverability risk increase.', 'No segmentation means the list can’t support consistent follow-ups.'],
  },
  solution: {
    cn: ['我們用多來源蒐集 + 人工/系統雙重驗證，建立可追蹤的海外買家資料資料庫。', '交付包含：寄信名單與開信名單（Excel），並依市場/角色/優先序分層。'],
    zh: ['我們用多來源蒐集 + 人工/系統雙重驗證，建立可追蹤的海外買家資料資料庫。', '交付包含：寄信名單與開信名單（Excel），並依市場/角色/優先序分層。'],
    en: ['We combine multi-source sourcing with human + system validation to build a trackable buyer database.', 'Deliverables include sent list + opens list (Excel) segmented by market, role, and priority.'],
  },
  whatIs: {
    cn: ['Buyer Database Building 是外銷開發的底層資產：把「公司 + 決策人 + 可投遞聯絡方式」做成可直接用於開發的資料資料庫。'],
    zh: ['Buyer Database Building 是外銷開發的底層資產：把「公司 + 決策人 + 可投遞聯絡方式」做成可直接用於開發的資料資料庫。'],
    en: ['Buyer database building is the core asset of export outreach: companies + decision-makers + deliverable contacts in a usable database.'],
  },
  howWorks: {
    cn: ['製造業要提高回覆率，第一步不是寫更華麗的信，而是先把名單做對：角色正確、資料可驗證、且能支援後續節奏式跟進。'],
    zh: ['製造業要提高回覆率，第一步不是寫更華麗的信，而是先把名單做對：角色正確、資料可驗證、且能支援後續節奏式跟進。'],
    en: ['For manufacturers, reply rates start with list quality: correct roles, verified data, and segmentation that supports cadence-based follow-ups.'],
  },
  process: {
    cn: ['定義 ICP 與買家角色（Importer/Distributor/Brand/Factory）。', '多來源蒐集公司名單（目錄/展會/搜尋/資料資料庫）。', '決策人識別（採購/工程/供應鏈）。', 'Email/LinkedIn 驗證與去重。', '分層標註與 Excel 交付（寄信名單 + 開信名單）。'],
    zh: ['定義 ICP 與買家角色（Importer/Distributor/Brand/Factory）。', '多來源蒐集公司名單（目錄/展會/搜尋/資料資料庫）。', '決策人識別（採購/工程/供應鏈）。', 'Email/LinkedIn 驗證與去重。', '分層標註與 Excel 交付（寄信名單 + 開信名單）。'],
    en: ['Define ICP and buyer roles.', 'Collect companies from multiple sources.', 'Identify decision-makers (procurement/engineering/supply chain).', 'Validate contacts and deduplicate.', 'Segment and deliver as Excel (sent list + opens list).'],
  },
  tools: {
    cn: ['Google/LinkedIn 搜尋與產業目錄。', '公司網站與職位驗證（避免找錯人）。', 'Email 驗證流程（降低跳退）。'],
    zh: ['Google/LinkedIn 搜尋與產業目錄。', '公司網站與職位驗證（避免找錯人）。', 'Email 驗證流程（降低跳退）。'],
    en: ['Google/LinkedIn and industry directories.', 'Website + role verification to avoid wrong contacts.', 'Email validation workflow to reduce bounces.'],
  },
  checklist: {
    cn: ['ICP 完成（市場/產業/角色/規模）。', '至少 2–3 個來源交叉驗證公司名單。', '決策人職位與部門標註。', 'Email 驗證與去重完成。'],
    zh: ['ICP 完成（市場/產業/角色/規模）。', '至少 2–3 個來源交叉驗證公司名單。', '決策人職位與部門標註。', 'Email 驗證與去重完成。'],
    en: ['ICP done (market/industry/role/size).', 'Cross-validate companies from 2–3 sources.', 'Tag titles and departments.', 'Email validation and dedupe done.'],
  },
  results: {
    cn: [
      { label: '資料資料庫交付', value: 'Excel', desc: '公司 + 決策人 + 職位 + Email + LinkedIn + 官網。' },
      { label: '降低跳退', value: '可驗證', desc: '以驗證流程降低無效聯絡方式。' },
      { label: '可持續跟進', value: '可分層', desc: '名單可支援後續節奏式跟進與回覆分類別。' },
    ],
    zh: [
      { label: '資料資料庫交付', value: 'Excel', desc: '公司 + 決策人 + 職位 + Email + LinkedIn + 官網。' },
      { label: '降低跳退', value: '可驗證', desc: '以驗證流程降低無效聯絡方式。' },
      { label: '可持續跟進', value: '可分層', desc: '名單可支援後續節奏式跟進與回覆分類別。' },
    ],
    en: [
      { label: 'Database delivered', value: 'Excel', desc: 'Company + decision-maker + title + email + LinkedIn + website.' },
      { label: 'Lower bounce risk', value: 'Validated', desc: 'Validation workflow reduces invalid contacts.' },
      { label: 'Supports cadence', value: 'Segmented', desc: 'List segmentation enables consistent follow-ups and triage.' },
    ],
  },
  funnel: {
    cn: [
      { label: '候選公司', value: '3000' },
      { label: '符合 ICP', value: '800' },
      { label: '決策人', value: '500' },
      { label: '可投遞 Email', value: '350' },
      { label: '優先名單', value: '200' },
    ],
    zh: [
      { label: '候選公司', value: '3000' },
      { label: '符合 ICP', value: '800' },
      { label: '決策人', value: '500' },
      { label: '可投遞 Email', value: '350' },
      { label: '優先名單', value: '200' },
    ],
    en: [
      { label: 'Candidates', value: '3000' },
      { label: 'ICP fit', value: '800' },
      { label: 'Decision makers', value: '500' },
      { label: 'Deliverable emails', value: '350' },
      { label: 'Priority list', value: '200' },
    ],
  },
  industries: {
    cn: ['機械設備', '電子零元件', '五金工具', '套件材/材料', '醫療耗材'],
    zh: ['機械設備', '電子零元件', '五金工具', '套件材/材料', '醫療耗材'],
    en: ['Machinery', 'Electronics', 'Hardware Tools', 'Packaging/Materials', 'Medical'],
  },
  caseStudy: {
    title: { cn: '五金工具：首月建立 500+ 目標名單並完成驗證', zh: '五金工具：首月建立 500+ 目標名單並完成驗證', en: 'Hardware: built and validated 500+ targets in month one' },
    desc: { cn: '以多來源名單與驗證流程，讓後續開發節奏能順利推進並降低跳退。', zh: '以多來源名單與驗證流程，讓後續開發節奏能順利推進並降低跳退。', en: 'Multi-source sourcing and validation enabled smooth cadences with fewer bounces.' },
    link: '/case-studies/hardware',
  },
  faq: [
    {
      q: { cn: '名單包含哪些欄位？', zh: '名單包含哪些欄位？', en: 'What fields are included?' },
      a: { cn: '公司名稱、決策人、職位、Email、LinkedIn、公司網站，並依市場/角色分層。', zh: '公司名稱、決策人、職位、Email、LinkedIn、公司網站，並依市場/角色分層。', en: 'Company, decision-maker, title, email, LinkedIn, website, segmented by market and role.' },
    },
    {
      q: { cn: '你們如何做資料驗證？', zh: '你們如何做資料驗證？', en: 'How do you validate data?' },
      a: { cn: '以多來源交叉比對、公司網站與職位確認、並完成 Email 驗證與去重。', zh: '以多來源交叉比對、公司網站與職位確認、並完成 Email 驗證與去重。', en: 'Cross-check sources, confirm roles via websites, then validate and dedupe emails.' },
    },
  ],
  ctaTitle: { cn: '取得你的買家資料資料庫規劃', zh: '取得你的買家資料資料庫規劃', en: 'Get Your Buyer Database Plan' },
  ctaDesc: { cn: '提交產品與市場，我們回覆名單來源、買家角色與建置方式。', zh: '提交產品與市場，我們回覆名單來源、買家角色與建置方式。', en: 'Submit your product and markets. We’ll reply with sources, buyer roles, and a database plan.' },
  relatedLinks: [
    { label: { cn: '外銷客戶開發（核心服務）', zh: '外銷客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
    { label: { cn: '方法：Cold Email Outreach', zh: '方法：Cold Email Outreach', en: 'Method: Cold Email Outreach' }, href: '/cold-email-outreach' },
    { label: { cn: '成果：Overseas Buyer Lists', zh: '成果：Overseas Buyer Lists', en: 'Outcome: Overseas Buyer Lists' }, href: '/overseas-buyer-lists' },
    { label: { cn: '免費出口市場分析（CTA）', zh: '免費出口市場分析（CTA）', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: cnText(lang, service.title[lang]),
    description: cnText(lang, service.description[lang]),
    alternates: { canonical: `/${lang}/buyer-database-building`, languages: { 'zh-CN': '/cn/buyer-database-building', zh: '/zh/buyer-database-building', en: '/en/buyer-database-building', 'x-default': '/en/buyer-database-building' } },
    
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const withLang = {
    ...service,
    caseStudy: { ...service.caseStudy, link: `/${lang}${service.caseStudy.link}` },
    relatedLinks: service.relatedLinks?.map((x) => ({ ...x, href: `/${lang}${x.href}` })),
  }
  return <ServiceSeoPage lang={lang} service={withLang} />
}
