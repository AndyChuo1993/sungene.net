import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'
import { cnText } from '@/lib/cnText'

const service: ServiceSeo = {
  slug: 'overseas-buyer-lists',
  title: {
    cn: '海外采购名单与决策人资料建置｜SunGene',
    zh: '海外採購名單與決策人資料建置｜SunGene',
    en: 'Buyer Research & Decision-Maker Data Buildout | SunGene',
  },
  description: {
    cn: '建立可直接推进的客户开发资料库：包含公司、决策人、职位、Email、LinkedIn与公司网站，为主动开发打好基础。',
    zh: '建立可直接推進的客戶開發資料庫：包含公司、決策人、職位、Email、LinkedIn與公司網站，為主動開發打好基礎。',
    en: 'Build actionable prospect databases including company, decision-maker, title, email, LinkedIn, and website to prepare for outreach.',
  },
  h1: { cn: '海外采购名单与决策人资料建置', zh: '海外採購名單與決策人資料建置', en: 'Buyer Research & Decision-Maker Data Buildout' },
  problem: {
    cn: ['资料不准，寄了没回还跳退。', '没有决策人资料，只能寄到一般信箱。', '资料缺分层与标注，无法支援后续跟进。'],
    zh: ['資料不準，寄了沒回還跳退。', '沒有決策人資料，只能寄到一般信箱。', '資料缺分層與標註，無法支援後續跟進。'],
    en: ['Unreliable data causes bounces and low replies.', 'Without decision-makers, you end up emailing generic inboxes.', 'No segmentation makes follow-up inefficient.'],
  },
  solution: {
    cn: ['我们以 ICP 与买家角色为核心，建立可验证的买家资料库并以 Excel 交付。', '资料支援后续的 cold email/LinkedIn 节奏与回复分类别。'],
    zh: ['我們以 ICP 與買家角色為核心，建立可驗證的買家資料庫並以 Excel 交付。', '資料支援後續的 cold email/LinkedIn 節奏與回覆分類別。'],
    en: ['We build validated buyer databases based on ICP and roles, delivered as Excel.', 'Data is structured for cadence-based outreach and reply triage.'],
  },
  whatIs: {
    cn: ['海外目标客户资料建置是外贸开发的基础：可投递、可追踪、可分层的海外采购资料库。'],
    zh: ['海外目標客戶資料建置是外銷開發的基礎：可投遞、可追蹤、可分層的海外採購資料庫。'],
    en: ['Target prospect data buildout is the foundation of export development: deliverable, trackable, and segmented prospect databases.'],
  },
  howWorks: {
    cn: ['我们先定义你要找的买家角色与市场，接着用多来源搜集与验证建立资料库，再把资料分层交付。'],
    zh: ['我們先定義你要找的買家角色與市場，接著用多來源蒐集與驗證建立資料庫，再把資料分層交付。'],
    en: ['We define buyer roles and markets, source from multiple channels, validate contacts, then deliver segmented data.'],
  },
  process: {
    cn: ['定义 ICP 与买家角色。', '多来源搜集公司与决策人。', '验证 Email/LinkedIn 并去重。', '分层标注（市场/角色/优先序）。', 'Excel 交付。'],
    zh: ['定義 ICP 與買家角色。', '多來源蒐集公司與決策人。', '驗證 Email/LinkedIn 並去重。', '分層標註（市場/角色/優先序）。', 'Excel 交付。'],
    en: ['Define ICP and roles.', 'Source companies and decision-makers.', 'Validate and deduplicate.', 'Segment by market/role/priority.', 'Deliver as Excel.'],
  },
  tools: {
    cn: ['Google/LinkedIn/产业目录/展会资讯。', '公司网站与职位验证。', 'Email 验证流程与去重。'],
    zh: ['Google/LinkedIn/產業目錄/展會資訊。', '公司網站與職位驗證。', 'Email 驗證流程與去重。'],
    en: ['Google/LinkedIn/directories/trade fairs.', 'Website and role verification.', 'Email validation and dedupe.'],
  },
  checklist: {
    cn: ['资料栏位齐全（公司/决策人/职位/Email/LinkedIn/官网）。', 'Email 验证与去重完成。', '分层标注（市场/角色/优先序）。', '可直接用于后续节奏式跟进。'],
    zh: ['資料欄位齊全（公司/決策人/職位/Email/LinkedIn/官網）。', 'Email 驗證與去重完成。', '分層標註（市場/角色/優先序）。', '可直接用於後續節奏式跟進。'],
    en: ['Required fields included.', 'Validated and deduplicated.', 'Segmented by market/role/priority.', 'Ready for cadence-based follow-ups.'],
  },
  results: {
    cn: [
      { label: '交付格式', value: 'Excel', desc: '可直接交給業務使用。' },
      { label: '資料易用性', value: '可驗證', desc: '降低跳退與無效寄送。' },
      { label: '後續可追蹤', value: '可分層', desc: '支援跟進節奏與回覆分類別。' },
    ],
    zh: [
      { label: '交付格式', value: 'Excel', desc: '可直接交給業務使用。' },
      { label: '資料易用性', value: '可驗證', desc: '降低跳退與無效寄送。' },
      { label: '後續可追蹤', value: '可分層', desc: '支援跟進節奏與回覆分類別。' },
    ],
    en: [
      { label: 'Delivery format', value: 'Excel', desc: 'Ready for your sales team.' },
      { label: 'Usability', value: 'Validated', desc: 'Lower bounces and wasted sends.' },
      { label: 'Trackable follow-ups', value: 'Segmented', desc: 'Supports cadence and triage.' },
    ],
  },
  funnel: {
    cn: [
      { label: '候選公司', value: '3000' },
      { label: '符合 ICP', value: '800' },
      { label: '決策人', value: '500' },
      { label: '可投遞', value: '350' },
      { label: '優先名單', value: '200' },
    ],
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
    cn: ['機械設備', '電子零元件', '五金工具', '套件材/材料'],
    zh: ['機械設備', '電子零元件', '五金工具', '套件材/材料'],
    en: ['Machinery', 'Electronics', 'Hardware Tools', 'Packaging/Materials'],
  },
  caseStudy: {
    title: { cn: '五金工具：首月建立 500+ 决策人资料', zh: '五金工具：首月建立 500+ 決策人資料', en: 'Hardware: built 500+ decision-maker profiles in month one' },
    desc: { cn: '资料品质到位后，回复与询价更容易稳定累积。', zh: '資料品質到位後，回覆與詢價更容易穩定累積。', en: 'Data quality enabled more stable replies and inquiries.' },
    link: '/case-studies/hardware',
  },
  faq: [
    { q: { cn: '资料能否指定市场与买家角色？', zh: '資料能否指定市場與買家角色？', en: 'Can we specify markets and buyer roles?' }, a: { cn: '可以。资料会依你产品与目标市场定义 ICP 与角色后建置。', zh: '可以。資料會依你產品與目標市場定義 ICP 與角色後建置。', en: 'Yes. Data is built based on your ICP by market and role.' } },
    { q: { cn: '资料交付后你们也能协助开发吗？', zh: '資料交付後你們也能協助開發嗎？', en: 'Can you run outreach after data delivery?' }, a: { cn: '可以，后续可衔接 Cold Email/LinkedIn 或核心服务的外贸客户开发。', zh: '可以，後續可銜接 Cold Email/LinkedIn 或核心服務的外銷客戶開發。', en: 'Yes. You can continue with cold email/LinkedIn or the core export lead gen service.' } },
  ],
  ctaTitle: { cn: '取得你的客户开发资料库', zh: '取得你的客戶開發資料庫', en: 'Get Your Prospect Database' },
  ctaDesc: { cn: '提交产品与市场，我们回复资料来源、建置方式与交付范围。', zh: '提交產品與市場，我們回覆資料來源、建置方式與交付範圍。', en: 'Submit your product and markets. We’ll reply with sources, build plan, and scope.' },
  relatedLinks: [
    { label: { cn: '核心：外贸客户开发', zh: '核心：外銷客戶開發', en: 'Core: Export Lead Generation' }, href: '/services/export-lead-generation' },
    { label: { cn: '方法：Buyer Database Building', zh: '方法：Buyer Database Building', en: 'Method: Buyer Database Building' }, href: '/buyer-database-building' },
    { label: { cn: '方法：Cold Email Outreach', zh: '方法：Cold Email Outreach', en: 'Method: Cold Email Outreach' }, href: '/cold-email-outreach' },
    { label: { cn: '取得市场切入建议', zh: '取得市場切入建議', en: 'Get Market Entry Advice' }, href: '/export-market-analysis' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const baseUrl = 'https://sungene.net'
  return {
    title: cnText(lang, service.title[lang]),
    description: cnText(lang, service.description[lang]),
    alternates: {
      canonical: `${baseUrl}/${lang}/overseas-buyer-lists`,
      languages: {
        'zh-CN': `https://sungene.net/cn/overseas-buyer-lists`,
        'zh-TW': `https://sungene.net/zh/overseas-buyer-lists`,
        'en': `https://sungene.net/en/overseas-buyer-lists`,
        'x-default': `https://sungene.net/cn/overseas-buyer-lists`,
      }
    },
    
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
