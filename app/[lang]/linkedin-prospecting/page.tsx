import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'
import { cnText } from '@/lib/cnText'

const service: ServiceSeo = {
  slug: 'linkedin-prospecting',
  title: {
    cn: 'LinkedIn 開發（LinkedIn Prospecting）｜多點觸達決策人',
    zh: 'LinkedIn 開發（LinkedIn Prospecting）｜多點觸達決策人',
    en: 'LinkedIn Prospecting | Reach Decision Makers with Multi-touch',
  },
  description: {
    cn: '針對目標企業建立決策鏈地圖，結合 LinkedIn + Email 多點觸達，突破大廠封閉採購流程。',
    zh: '針對目標企業建立決策鏈地圖，結合 LinkedIn + Email 多點觸達，突破大廠封閉採購流程。',
    en: 'Map decision chains in target accounts and use LinkedIn + email multi-touch to break into closed procurement processes.',
  },
  h1: { cn: 'LinkedIn 開發服務', zh: 'LinkedIn 開發服務', en: 'LinkedIn Prospecting for Manufacturers' },
  problem: {
    cn: ['寄到 info@ 永遠不回，真正的決策人躲在組織裡。', '採購決策鏈長：工程、採購、品管多方參與，單點開發效率低。', '訊息沒有針對角色與痛點，連線後仍無法推進對話。'],
    zh: ['寄到 info@ 永遠不回，真正的決策人躲在組織裡。', '採購決策鏈長：工程、採購、品管多方參與，單點開發效率低。', '訊息沒有針對角色與痛點，連線後仍無法推進對話。'],
    en: ['Generic inboxes don’t reply; real decision-makers are inside org charts.', 'Long chains across engineering, procurement, and QC make single-touch outreach inefficient.', 'Without role-specific messaging, connections don’t turn into conversations.'],
  },
  solution: {
    cn: ['我們以 ABM（Account-Based）方式建立目標企業名單與決策鏈地圖，針對不同角色設計訊息，並用多點觸達推進回覆。', '回覆會被分類別並整理成下一步（會議/樣品/報價）的可交付詢價。'],
    zh: ['我們以 ABM（Account-Based）方式建立目標企業名單與決策鏈地圖，針對不同角色設計訊息，並用多點觸達推進回覆。', '回覆會被分類別並整理成下一步（會議/樣品/報價）的可交付詢價。'],
    en: ['We run an ABM-style workflow: target accounts + decision-chain mapping, role-specific messaging, and multi-touch outreach to drive replies.', 'Replies are triaged and delivered with next steps (meeting/sample/quote).'],
  },
  whatIs: {
    cn: ['LinkedIn Prospecting 是以「目標企業 → 組織角色 → 多點觸達」為核心的方法，特別適合決策鏈長、採購流程封閉的 B2B 製造業。'],
    zh: ['LinkedIn Prospecting 是以「目標企業 → 組織角色 → 多點觸達」為核心的方法，特別適合決策鏈長、採購流程封閉的 B2B 製造業。'],
    en: ['LinkedIn prospecting targets accounts, maps roles, and uses multi-touch outreach—ideal for manufacturers facing closed procurement and long decision chains.'],
  },
  howWorks: {
    cn: ['製造業要打進大廠，關鍵在於同時觸達多個角色：工程端看規格與導入風險，採購看交期與成本，供應鏈看穩定與合規。'],
    zh: ['製造業要打進大廠，關鍵在於同時觸達多個角色：工程端看規格與導入風險，採購看交期與成本，供應鏈看穩定與合規。'],
    en: ['To break into enterprise accounts, manufacturers must reach multiple roles: engineering cares about specs/onboarding risk, procurement about cost/lead time, supply chain about stability/compliance.'],
  },
  process: {
    cn: ['建立 Top 30–100 目標企業名單與優先序。', '拆解決策鏈：採購/工程/供應鏈/品管。', '設計角色訊息：每個角色一個痛點 + 一個證據 + 一個 CTA。', 'LinkedIn + Email 多點觸達與節奏式跟進。', '把有效回覆整理成會議/樣品/報價的下一步。'],
    zh: ['建立 Top 30–100 目標企業名單與優先序。', '拆解決策鏈：採購/工程/供應鏈/品管。', '設計角色訊息：每個角色一個痛點 + 一個證據 + 一個 CTA。', 'LinkedIn + Email 多點觸達與節奏式跟進。', '把有效回覆整理成會議/樣品/報價的下一步。'],
    en: ['Build a prioritized list of 30–100 target accounts.', 'Map the decision chain: procurement/engineering/supply chain/QC.', 'Write role-based messages: one pain + proof + CTA.', 'Run LinkedIn + email multi-touch cadence.', 'Convert replies into meetings, samples, or quotes.'],
  },
  tools: {
    cn: ['LinkedIn 搜尋與角色辨識。', '目標企業組織架構整理（Account map）。', '回覆分類別與追蹤（表格/CRM）。'],
    zh: ['LinkedIn 搜尋與角色辨識。', '目標企業組織架構整理（Account map）。', '回覆分類別與追蹤（表格/CRM）。'],
    en: ['LinkedIn role targeting and search.', 'Account maps for decision-chain visibility.', 'Reply triage and tracking in spreadsheet/CRM.'],
  },
  checklist: {
    cn: ['每個目標企業至少鎖定 3 個角色（採購/工程/供應鏈）。', '訊息針對角色改寫，不用同一段複製貼上。', '每個 CTA 只問一個可回覆問題。', '至少 4 次跟進節奏。'],
    zh: ['每個目標企業至少鎖定 3 個角色（採購/工程/供應鏈）。', '訊息針對角色改寫，不用同一段複製貼上。', '每個 CTA 只問一個可回覆問題。', '至少 4 次跟進節奏。'],
    en: ['Target at least 3 roles per account.', 'Rewrite messaging per role—no copy-paste blasts.', 'CTA asks one replyable question.', 'Run at least 4 follow-ups.'],
  },
  results: {
    cn: [
      { label: '決策人觸達', value: '多點觸達', desc: '突破一般信箱，直接建立對話。' },
      { label: '縮短導入週期', value: '更快推進', desc: '角色對齊後，下一步（樣品/會議）更清楚。' },
      { label: '提高詢價品質', value: '更匹配', desc: '回覆分類別與需求確認，降低不匹配詢價。' },
    ],
    zh: [
      { label: '決策人觸達', value: '多點觸達', desc: '突破一般信箱，直接建立對話。' },
      { label: '縮短導入週期', value: '更快推進', desc: '角色對齊後，下一步（樣品/會議）更清楚。' },
      { label: '提高詢價品質', value: '更匹配', desc: '回覆分類別與需求確認，降低不匹配詢價。' },
    ],
    en: [
      { label: 'Decision-maker access', value: 'Multi-touch', desc: 'Bypass generic inboxes and start real conversations.' },
      { label: 'Faster onboarding', value: 'Aligned', desc: 'Role alignment clarifies next steps (sample/call).'},
      { label: 'Higher lead quality', value: 'Qualified', desc: 'Triage and requirement confirmation reduce poor-fit leads.' },
    ],
  },
  funnel: {
    cn: [
      { label: '目標企業', value: '50' },
      { label: '決策鏈角色', value: '200' },
      { label: '建立連線', value: '80' },
      { label: '有效對話', value: '25' },
      { label: '樣品/會議', value: '10' },
    ],
    zh: [
      { label: '目標企業', value: '50' },
      { label: '決策鏈角色', value: '200' },
      { label: '建立連線', value: '80' },
      { label: '有效對話', value: '25' },
      { label: '樣品/會議', value: '10' },
    ],
    en: [
      { label: 'Accounts', value: '50' },
      { label: 'Roles mapped', value: '200' },
      { label: 'Connections', value: '80' },
      { label: 'Conversations', value: '25' },
      { label: 'Samples/Calls', value: '10' },
    ],
  },
  industries: {
    cn: ['電子零元件', '工業設備', '汽車零件', '醫療器材'],
    zh: ['電子零元件', '工業設備', '汽車零件', '醫療器材'],
    en: ['Electronics', 'Industrial Equipment', 'Automotive', 'Medical'],
  },
  caseStudy: {
    title: { cn: '電子零元件：成功與 20+ 位工程主管建立聯繫', zh: '電子零元件：成功與 20+ 位工程主管建立聯繫', en: 'Electronics: connected with 20+ engineering directors' },
    desc: { cn: '以 ABM 多點觸達繞過一般詢價信箱，取得樣品測試與商審機會。', zh: '以 ABM 多點觸達繞過一般詢價信箱，取得樣品測試與商審機會。', en: 'ABM multi-touch bypassed generic inboxes and secured sample and audit opportunities.' },
    link: '/case-studies/electronics',
  },
  faq: [
    {
      q: { cn: 'LinkedIn 適合哪些產業？', zh: 'LinkedIn 適合哪些產業？', en: 'Which industries fit LinkedIn?' },
      a: { cn: '特別適合決策鏈長、採購流程封閉、需要工程/技術評估的 B2B 製造業。', zh: '特別適合決策鏈長、採購流程封閉、需要工程/技術評估的 B2B 製造業。', en: 'Best for manufacturers with long decision chains and engineering-led evaluation.' },
    },
    {
      q: { cn: '只做 LinkedIn 不做 Email 可以嗎？', zh: '只做 LinkedIn 不做 Email 可以嗎？', en: 'Can we do LinkedIn only?' },
      a: { cn: '可以，但多管道通常更穩。LinkedIn 用於觸達與建立信任，Email 用於承載更完整資訊與節奏式跟進。', zh: '可以，但多管道通常更穩。LinkedIn 用於觸達與建立信任，Email 用於承載更完整資訊與節奏式跟進。', en: 'Possible, but multi-channel is more stable: LinkedIn for access/trust, email for structured cadence and detail.' },
    },
  ],
  ctaTitle: { cn: '取得你的目標企業與決策鏈策略', zh: '取得你的目標企業與決策鏈策略', en: 'Get Your Account Map Strategy' },
  ctaDesc: { cn: '提交產品與市場，我們回覆目標企業、決策鏈角色與可行的多點觸達策略。', zh: '提交產品與市場，我們回覆目標企業、決策鏈角色與可行的多點觸達策略。', en: 'Submit your product and markets. We’ll reply with target accounts, role maps, and a feasible multi-touch plan.' },
  relatedLinks: [
    { label: { cn: '外銷客戶開發（核心服務）', zh: '外銷客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
    { label: { cn: '方法：Cold Email Outreach', zh: '方法：Cold Email Outreach', en: 'Method: Cold Email Outreach' }, href: '/cold-email-outreach' },
    { label: { cn: '成果：Qualified B2B Leads', zh: '成果：Qualified B2B Leads', en: 'Outcome: Qualified B2B Leads' }, href: '/qualified-b2b-leads' },
    { label: { cn: '免費出口市場分析（CTA）', zh: '免費出口市場分析（CTA）', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: cnText(lang, service.title[lang]),
    description: cnText(lang, service.description[lang]),
    alternates: { canonical: `/${lang}/linkedin-prospecting`, languages: { 'zh-CN': '/cn/linkedin-prospecting', zh: '/zh/linkedin-prospecting', en: '/en/linkedin-prospecting', 'x-default': '/en/linkedin-prospecting' } },
    robots: { index: false, follow: true },
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
