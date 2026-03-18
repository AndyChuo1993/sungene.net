import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'
import { cnText } from '@/lib/cnText'

const service: ServiceSeo = {
  slug: 'cold-email-outreach',
  title: {
    cn: 'Cold Email 開發（Cold Email Outreach）｜海外買家開發信與跟進節奏',
    zh: 'Cold Email 開發（Cold Email Outreach）｜海外買家開發信與跟進節奏',
    en: 'Cold Email Outreach | Generate Export Leads with Cadence',
  },
  description: {
    cn: '用可回覆的訊息框架與 4–6 次節奏式跟進，持續獲取海外買家回覆並整理成可交付的詢價。',
    zh: '用可回覆的訊息框架與 4–6 次節奏式跟進，持續獲取海外買家回覆並整理成可交付的詢價。',
    en: 'Use a replyable framework and 4–6 follow-ups to generate overseas buyer replies and deliver qualified inquiries.',
  },
  h1: { cn: 'Cold Email 開發', zh: 'Cold Email 開發', en: 'Cold Email Outreach for Manufacturers' },
  problem: {
    cn: ['寄了很多信但回覆很少，因為訊息太 generic、沒有證據、CTA 不可回覆。', '只寄 1 次就停，沒有節奏式跟進，錯過大多數回覆。', '開信率與跳退率不可控，寄送策略不當導致信譽受損。'],
    zh: ['寄了很多信但回覆很少，因為訊息太 generic、沒有證據、CTA 不可回覆。', '只寄 1 次就停，沒有節奏式跟進，錯過大多數回覆。', '開信率與跳退率不可控，寄送策略不當導致信譽受損。'],
    en: ['Low replies because messaging is generic, lacks proof, and CTA is not replyable.', 'One email is not enough; without follow-ups, most replies never happen.', 'Deliverability and bounce risk are unmanaged, hurting reputation.'],
  },
  solution: {
    cn: ['我們以「一封信一個痛點 + 一個證據 + 一個 CTA」建立訊息框架，並以 4–6 次節奏式跟進推進回覆。', '回覆會被分類別（合格/待培育/不匹配），並整理成可交付的詢價摘要。'],
    zh: ['我們以「一封信一個痛點 + 一個證據 + 一個 CTA」建立訊息框架，並以 4–6 次節奏式跟進推進回覆。', '回覆會被分類別（合格/待培育/不匹配），並整理成可交付的詢價摘要。'],
    en: ['We use a simple framework (one pain + one proof + one CTA) and run a 4–6 follow-up cadence.', 'Replies are triaged (qualified/nurture/no-fit) and delivered as organized inquiry summaries.'],
  },
  whatIs: {
    cn: ['Cold Email Outreach 是一種可量化的 B2B 開發方法：以精準名單為基礎，用節奏式跟進獲取回覆並推進會議或下一步。'],
    zh: ['Cold Email Outreach 是一種可量化的 B2B 開發方法：以精準名單為基礎，用節奏式跟進獲取回覆並推進會議或下一步。'],
    en: ['Cold email outreach is a measurable B2B method: start with a precise list, run cadence-based follow-ups, and convert replies into meetings or next steps.'],
  },
  howWorks: {
    cn: ['製造業的買家回覆率通常不是靠「更長的信」，而是靠更清楚的價值主張與更好的節奏。一次寄完就放棄，基本等於放棄大多數回覆。'],
    zh: ['製造業的買家回覆率通常不是靠「更長的信」，而是靠更清楚的價值主張與更好的節奏。一次寄完就放棄，基本等於放棄大多數回覆。'],
    en: ['Manufacturers increase replies by clearer value propositions and better cadence, not longer emails. Stopping after one send means losing most replies.'],
  },
  process: {
    cn: ['準備素材：1 頁產品摘要（規格/應用/交期/MOQ）與證據（案例/驗證）。', '建立訊息框架：主旨、開頭、證據、CTA。', '設定寄送規範與節奏：4–6 次跟進，間隔 3–7 天。', '回覆分類別：合格/待培育/不匹配，定義下一步。', '交付詢價：公司、聯絡方式、需求與對話紀錄。'],
    zh: ['準備素材：1 頁產品摘要（規格/應用/交期/MOQ）與證據（案例/驗證）。', '建立訊息框架：主旨、開頭、證據、CTA。', '設定寄送規範與節奏：4–6 次跟進，間隔 3–7 天。', '回覆分類別：合格/待培育/不匹配，定義下一步。', '交付詢價：公司、聯絡方式、需求與對話紀錄。'],
    en: ['Prepare assets: one-page product brief + proof (cases/certs).', 'Build message framework: subject, opener, proof, CTA.', 'Run deliverability-safe cadence: 4–6 follow-ups, 3–7 days apart.', 'Triage replies and define next steps.', 'Deliver inquiries with contact, needs, and conversation logs.'],
  },
  tools: {
    cn: ['名單驗證流程（降低跳退）。', '寄送規範與節奏（避免爆量）。', '回覆分類別與追蹤（表格/CRM）。'],
    zh: ['名單驗證流程（降低跳退）。', '寄送規範與節奏（避免爆量）。', '回覆分類別與追蹤（表格/CRM）。'],
    en: ['List validation to reduce bounces.', 'Sending discipline and cadence to avoid bulk blasting.', 'Reply triage and tracking in a spreadsheet/CRM.'],
  },
  checklist: {
    cn: ['一封信只講一件事，CTA 要可回覆。', '至少 4 次跟進，逐封加入不同證據。', '避免附件與過度行銷用語。', '用回覆分類別規則把詢價導入下一步。'],
    zh: ['一封信只講一件事，CTA 要可回覆。', '至少 4 次跟進，逐封加入不同證據。', '避免附件與過度行銷用語。', '用回覆分類別規則把詢價導入下一步。'],
    en: ['One email = one thing, CTA must be replyable.', 'At least 4 follow-ups, add different proof each time.', 'Avoid attachments and overly salesy language.', 'Use triage rules to drive next steps.'],
  },
  results: {
    cn: [
      { label: '回覆率提升', value: '靠節奏', desc: '4–6 次跟進通常比單封寄送更穩定。' },
      { label: '詢價可交付', value: '可追蹤', desc: '回覆分類別與對話紀錄整理成詢價。' },
      { label: '信譽可控', value: '可管理', desc: '寄送規範與名單驗證降低風險。' },
    ],
    zh: [
      { label: '回覆率提升', value: '靠節奏', desc: '4–6 次跟進通常比單封寄送更穩定。' },
      { label: '詢價可交付', value: '可追蹤', desc: '回覆分類別與對話紀錄整理成詢價。' },
      { label: '信譽可控', value: '可管理', desc: '寄送規範與名單驗證降低風險。' },
    ],
    en: [
      { label: 'Higher reply rates', value: 'Cadence', desc: '4–6 follow-ups outperform one-and-done sends.' },
      { label: 'Deliverable inquiries', value: 'Trackable', desc: 'Replies are triaged and organized into inquiries.' },
      { label: 'Deliverability control', value: 'Managed', desc: 'Validation and sending discipline reduce risk.' },
    ],
  },
  funnel: {
    cn: [
      { label: '寄送名單', value: '500' },
      { label: '開信', value: '200' },
      { label: '回覆', value: '40' },
      { label: '合格', value: '15' },
      { label: '會議', value: '8' },
    ],
    zh: [
      { label: '寄送名單', value: '500' },
      { label: '開信', value: '200' },
      { label: '回覆', value: '40' },
      { label: '合格', value: '15' },
      { label: '會議', value: '8' },
    ],
    en: [
      { label: 'Sent', value: '500' },
      { label: 'Opens', value: '200' },
      { label: 'Replies', value: '40' },
      { label: 'Qualified', value: '15' },
      { label: 'Meetings', value: '8' },
    ],
  },
  industries: {
    cn: ['五金工具', '套件材/材料', '機械設備', '工業設備'],
    zh: ['五金工具', '套件材/材料', '機械設備', '工業設備'],
    en: ['Hardware Tools', 'Packaging/Materials', 'Machinery', 'Industrial Equipment'],
  },
  caseStudy: {
    title: { cn: '日本市場：45% 開信率、8% 回覆率（在地化 + 跟進）', zh: '日本市場：45% 開信率、8% 回覆率（在地化 + 跟進）', en: 'Japan: 45% open rate, 8% reply rate (localization + cadence)' },
    desc: { cn: '以在地化寫法與節奏式跟進克服文化壁壘，建立持續對話。', zh: '以在地化寫法與節奏式跟進克服文化壁壘，建立持續對話。', en: 'Localized messaging and follow-ups overcame barriers and sustained dialogues.' },
    link: '/case-studies/packaging',
  },
  faq: [
    {
      q: { cn: '要跟進幾次？', zh: '要跟進幾次？', en: 'How many follow-ups?' },
      a: { cn: '建議 4–6 次，間隔 3–7 天，並逐封加入不同證據（案例/規格/應用）。', zh: '建議 4–6 次，間隔 3–7 天，並逐封加入不同證據（案例/規格/應用）。', en: '4–6 follow-ups, 3–7 days apart, adding different proof points each time.' },
    },
    {
      q: { cn: '你們會寫信嗎？', zh: '你們會寫信嗎？', en: 'Do you write the emails?' },
      a: { cn: '會。我們依產品定位與買家角色撰寫主旨與內容，並以測試迭代最佳化。', zh: '會。我們依產品定位與買家角色撰寫主旨與內容，並以測試迭代最佳化。', en: 'Yes. We write and iterate based on positioning and buyer roles.' },
    },
  ],
  ctaTitle: { cn: '取得你的開發信框架與節奏', zh: '取得你的開發信框架與節奏', en: 'Get Your Outreach Framework' },
  ctaDesc: { cn: '提交產品與市場，我們回覆可行的訊息框架與跟進節奏建議。', zh: '提交產品與市場，我們回覆可行的訊息框架與跟進節奏建議。', en: 'Submit your product and markets. We’ll reply with a feasible messaging and cadence plan.' },
  relatedLinks: [
    { label: { cn: '方法：Buyer Database Building', zh: '方法：Buyer Database Building', en: 'Method: Buyer Database Building' }, href: '/buyer-database-building' },
    { label: { cn: '外銷客戶開發（核心服務）', zh: '外銷客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
    { label: { cn: '成果：Qualified B2B Leads', zh: '成果：Qualified B2B Leads', en: 'Outcome: Qualified B2B Leads' }, href: '/qualified-b2b-leads' },
    { label: { cn: '外銷資源（指南文章）', zh: '外銷資源（指南文章）', en: 'Export Resources (Guides)' }, href: '/resources' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: cnText(lang, service.title[lang]),
    description: cnText(lang, service.description[lang]),
    alternates: { canonical: `/${lang}/cold-email-outreach`, languages: { 'zh-CN': '/cn/cold-email-outreach', zh: '/zh/cold-email-outreach', en: '/en/cold-email-outreach', 'x-default': '/en/cold-email-outreach' } },
    
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
