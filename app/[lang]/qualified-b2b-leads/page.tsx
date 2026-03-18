import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'
import { cnText } from '@/lib/cnText'

const service: ServiceSeo = {
  slug: 'qualified-b2b-leads',
  title: {
    cn: '合格詢價｜可追蹤的海外客戶詢價交付',
    zh: '合格詢價｜可追蹤的海外客戶詢價交付',
    en: 'Qualified B2B Leads | Trackable Export Inquiries Delivered',
  },
  description: {
    cn: '我們持續進行海外客戶開發，將有效回覆整理成可交付詢價（公司/聯絡方式/需求/對話記錄），讓你的團隊專注成交。',
    zh: '我們持續進行海外客戶開發，將有效回覆整理成可交付詢價（公司/聯絡方式/需求/對話記錄），讓你的團隊專注成交。',
    en: 'We run ongoing outreach and deliver qualified inquiries with contact, needs, and conversation logs so your team can focus on closing.',
  },
  h1: { cn: '合格詢價交付', zh: '合格詢價交付', en: 'Qualified B2B Leads for Manufacturers' },
  problem: {
    cn: ['名單來自單一來源，品質不穩：Email 無效、職位不對、公司不匹配。', '缺少驗證流程，寄信跳退與垃圾信風險增加。', '詢價來源不穩、品質參差，業務時間被無效回覆消耗。', '沒有分類別與摘要，跟進時常常找不到上下文與下一步。'],
    zh: ['名單來自單一來源，品質不穩：Email 無效、職位不對、公司不匹配。', '缺少驗證流程，寄信跳退與垃圾信風險增加。', '詢價來源不穩、品質參差，業務時間被無效回覆消耗。', '沒有分類別與摘要，跟進時常常找不到上下文與下一步。'],
    en: ['Single-source lists are unreliable: wrong roles, bad emails, poor fit.', 'Without validation, bounces and deliverability risk increase.', 'Inquiry flow is unstable and quality varies; time is wasted on poor-fit leads.', 'Without triage and summaries, follow-ups lose context and next steps.'],
  },
  solution: {
    cn: ['我們把回覆做前段分類別（合格/待培育/不匹配）並完成初步需求確認，把可成交詢價交付給你。', '每個詢價包含公司、聯絡方式、需求資訊與對話紀錄，方便你快速進入報價/樣品/會議。', '同時，我們也提供完整的買家資料資料庫，作為開發的底層資產。'],
    zh: ['我們把回覆做前段分類別（合格/待培育/不匹配）並完成初步需求確認，把可成交詢價交付給你。', '每個詢價包含公司、聯絡方式、需求資訊與對話紀錄，方便你快速進入報價/樣品/會議。', '同時，我們也提供完整的買家資料資料庫，作為開發的底層資產。'],
    en: ['We triage replies (qualified/nurture/no-fit) and confirm initial requirements, then deliver sales-ready inquiries.', 'Each lead includes company, contacts, needs, and conversation logs to move quickly to quote/sample/call.', 'We also build and provide the complete buyer database as your core outreach asset.'],
  },
  whatIs: {
    cn: ['Qualified B2B Leads 是已完成初步篩選與需求確認的詢價交付成果，重點是「可追蹤、可跟進、可推進成交」。'],
    zh: ['Qualified B2B Leads 是已完成初步篩選與需求確認的詢價交付成果，重點是「可追蹤、可跟進、可推進成交」。'],
    en: ['Qualified B2B leads are inquiries that have been triaged and initially validated—trackable, followable, and close-ready.'],
  },
  howWorks: {
    cn: ['我們以精準名單與節奏式跟進獲取回覆，並把回覆整理成標準格式交付，降低你團隊的跟進成本。'],
    zh: ['我們以精準名單與節奏式跟進獲取回覆，並把回覆整理成標準格式交付，降低你團隊的跟進成本。'],
    en: ['We generate replies via verified lists and cadence, then deliver standardized lead packages that reduce follow-up cost.'],
  },
  process: {
    cn: ['精準名單建立與驗證。', '訊息框架與多觸點跟進。', '回覆分類別：合格/待培育/不匹配。', '初步需求確認：規格/數量/交期/用途。', '詢價交付：摘要 + 對話紀錄 + 下一步建議。'],
    zh: ['精準名單建立與驗證。', '訊息框架與多觸點跟進。', '回覆分類別：合格/待培育/不匹配。', '初步需求確認：規格/數量/交期/用途。', '詢價交付：摘要 + 對話紀錄 + 下一步建議。'],
    en: ['Build and validate lists.', 'Run message framework and multi-touch cadence.', 'Triage replies: qualified/nurture/no-fit.', 'Confirm initial requirements.', 'Deliver lead package with summary, logs, and next-step suggestion.'],
  },
  tools: {
    cn: ['回覆分類別規則與標準化表單。', '追蹤狀態（表格/CRM）。', '內容證據（案例/規格/驗證）支援需求確認。'],
    zh: ['回覆分類別規則與標準化表單。', '追蹤狀態（表格/CRM）。', '內容證據（案例/規格/驗證）支援需求確認。'],
    en: ['Reply triage rules and standardized lead format.', 'Status tracking (spreadsheet/CRM).', 'Proof assets (cases/specs/certs) for requirement confirmation.'],
  },
  checklist: {
    cn: ['每個詢價都有：公司/聯絡方式/需求/對話紀錄。', '標註買家角色與市場。', '明確下一步（會議/樣品/報價）。', '不匹配回覆在前段就過濾。'],
    zh: ['每個詢價都有：公司/聯絡方式/需求/對話紀錄。', '標註買家角色與市場。', '明確下一步（會議/樣品/報價）。', '不匹配回覆在前段就過濾。'],
    en: ['Each lead includes contact, needs, and logs.', 'Role and market tagged.', 'Next step defined (call/sample/quote).', 'Poor fits filtered early.'],
  },
  results: {
    cn: [
      { label: '更快進入報價', value: '更省時', desc: '前段需求確認讓報價更有效率。' },
      { label: '詢價更可追蹤', value: '有紀錄', desc: '對話紀錄與摘要降低跟進成本。' },
      { label: '成交更聚焦', value: '更匹配', desc: '回覆分類別讓團隊把時間花在高品質商機。' },
    ],
    zh: [
      { label: '更快進入報價', value: '更省時', desc: '前段需求確認讓報價更有效率。' },
      { label: '詢價更可追蹤', value: '有紀錄', desc: '對話紀錄與摘要降低跟進成本。' },
      { label: '成交更聚焦', value: '更匹配', desc: '回覆分類別讓團隊把時間花在高品質商機。' },
    ],
    en: [
      { label: 'Faster quoting', value: 'Efficient', desc: 'Initial qualification improves quoting speed.' },
      { label: 'Trackable leads', value: 'Logged', desc: 'Summaries and logs reduce follow-up cost.' },
      { label: 'Better focus', value: 'Matched', desc: 'Triage helps your team spend time on high-fit opportunities.' },
    ],
  },
  funnel: {
    cn: [
      { label: '寄送', value: '500' },
      { label: '回覆', value: '40' },
      { label: '合格', value: '15' },
      { label: '會議', value: '8' },
      { label: '報價', value: '6' },
    ],
    zh: [
      { label: '寄送', value: '500' },
      { label: '回覆', value: '40' },
      { label: '合格', value: '15' },
      { label: '會議', value: '8' },
      { label: '報價', value: '6' },
    ],
    en: [
      { label: 'Sent', value: '500' },
      { label: 'Replies', value: '40' },
      { label: 'Qualified', value: '15' },
      { label: 'Meetings', value: '8' },
      { label: 'Quotes', value: '6' },
    ],
  },
  industries: {
    cn: ['機械設備', '五金工具', '電子零元件', '套件材/材料'],
    zh: ['機械設備', '五金工具', '電子零元件', '套件材/材料'],
    en: ['Machinery', 'Hardware Tools', 'Electronics', 'Packaging/Materials'],
  },
  caseStudy: {
    title: { cn: '五金工具：3 個月 50–60 個有效詢價', zh: '五金工具：3 個月 50–60 個有效詢價', en: 'Hardware: 50–60 qualified inquiries in 3 months' },
    desc: { cn: '以節奏式跟進與回覆分類別把詢價推進到樣品與報價階段。', zh: '以節奏式跟進與回覆分類別把詢價推進到樣品與報價階段。', en: 'Cadence and triage moved inquiries into sampling and quoting.' },
    link: '/case-studies/hardware',
  },
  faq: [
    { q: { cn: '你們交付的詢價包含什麼？', zh: '你們交付的詢價包含什麼？', en: 'What is included in delivered leads?' }, a: { cn: '公司、聯絡方式、需求資訊、對話紀錄與下一步建議。', zh: '公司、聯絡方式、需求資訊、對話紀錄與下一步建議。', en: 'Company, contacts, requirements, conversation logs, and next-step suggestion.' } },
    { q: { cn: '你們會不會影響我們的報價與出貨？', zh: '你們會不會影響我們的報價與出貨？', en: 'Do you handle quoting and shipping?' }, a: { cn: '不會。你只需負責報價與出貨；其餘外銷開發與跟進流程由我們完成。', zh: '不會。你只需負責報價與出貨；其餘外銷開發與跟進流程由我們完成。', en: 'No. You handle quoting and shipping; we handle outreach and follow-up workflows.' } },
  ],
  ctaTitle: { cn: '想獲得更穩定的合格詢價？', zh: '想獲得更穩定的合格詢價？', en: 'Want more qualified export inquiries?' },
  ctaDesc: { cn: '提交產品與市場，我們回覆可行的開發策略與交付方式。', zh: '提交產品與市場，我們回覆可行的開發策略與交付方式。', en: 'Submit your product and markets. We’ll reply with a feasible plan and delivery approach.' },
  relatedLinks: [
    { label: { cn: '核心：外銷客戶開發', zh: '核心：外銷客戶開發', en: 'Core: Export Lead Generation' }, href: '/services/export-lead-generation' },
    { label: { cn: '方法：Cold Email Outreach', zh: '方法：Cold Email Outreach', en: 'Method: Cold Email Outreach' }, href: '/cold-email-outreach' },
    { label: { cn: '方法：LinkedIn Prospecting', zh: '方法：LinkedIn Prospecting', en: 'Method: LinkedIn Prospecting' }, href: '/linkedin-prospecting' },
    { label: { cn: '免費出口市場分析', zh: '免費出口市場分析', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const baseUrl = lang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'
  return {
    title: cnText(lang, service.title[lang]),
    description: cnText(lang, service.description[lang]),
    alternates: {
      canonical: `${baseUrl}/${lang}/qualified-b2b-leads`,
      languages: {
        'zh-CN': `https://sungene.net/cn/qualified-b2b-leads`,
        'zh-TW': `https://sungenelite.com/zh/qualified-b2b-leads`,
        'en': `https://sungene.net/en/qualified-b2b-leads`,
        'x-default': `https://sungene.net/cn/qualified-b2b-leads`,
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
