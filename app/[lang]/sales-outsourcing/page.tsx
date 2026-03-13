import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'

const service: ServiceSeo = {
  slug: 'sales-outsourcing',
  title: { zh: '外銷業務外包（Sales Outsourcing）｜打造海外業務團隊', en: 'Sales Outsourcing | Build Your Export Sales Team' },
  description: { zh: '把名單、開發、跟進與流程標準化，讓你在不擴編的前提下建立可複製的海外客戶開發能力。', en: 'Standardize lists, outreach, follow-up, and processes to build replicable export sales capability without expanding headcount.' },
  h1: { zh: '外銷業務外包（Sales Outsourcing）服務', en: 'Sales Outsourcing Service' },
  whatIs: { zh: ['外銷業務外包是以專案形式提供「開發＋跟進＋交付」的流程支援，讓你的業務能把時間用在談單與成交。'], en: ['Sales outsourcing provides process support for outreach, follow-up, and delivery so your team can focus on closing.'] },
  howWorks: { zh: ['我們會先釐清 ICP、產品定位與成交條件，再依市場建立名單與開發節奏，並把可成交詢盤交付給你的團隊。'], en: ['We define ICP and positioning, build market lists and outreach cadence, and deliver qualified inquiries to your team.'] },
  process: {
    zh: ['建立買家畫像與市場優先順序。', '建置買家名單與資料驗證。', '撰寫開發信與多觸點節奏（Email/LinkedIn）。', '回覆分類與初步需求確認。', '將合格詢盤交付給你的團隊推進成交。'],
    en: ['Define ICP and market priorities.', 'Build and verify buyer lists.', 'Write outreach and multi-touch cadence.', 'Qualify replies and confirm requirements.', 'Hand off qualified inquiries for closing.'],
  },
  industries: { zh: ['機械設備', '電子零組件', '塑膠/材料', '工業設備'], en: ['Machinery', 'Electronics', 'Plastics/Materials', 'Industrial Equipment'] },
  caseStudy: { title: { zh: '把跟進流程做成 SOP，詢盤品質更穩', en: 'Stable inquiry quality with SOP-driven follow-up' }, desc: { zh: '以可複製的流程與話術，降低跟進成本，讓詢盤更快進入報價與成交階段。', en: 'Repeatable processes and scripts reduce follow-up cost and move inquiries toward quoting and closing.' }, link: '/zh/case-studies' },
  faq: [
    { q: { zh: '你們會幫忙回覆客戶嗎？', en: 'Do you reply to buyers for us?' }, a: { zh: '可以依合作模式調整：可做初步需求確認與篩選，也可只交付回覆由你們自行跟進。', en: 'Yes, depending on engagement: we can do initial qualification or simply deliver replies for your team to follow up.' } },
    { q: { zh: '如何確保詢盤品質？', en: 'How do you ensure lead quality?' }, a: { zh: '透過名單篩選規則、訊息框架與回覆分類流程，把不匹配的詢盤在前段就過濾掉。', en: 'Through list qualification rules, messaging frameworks, and reply triage to filter poor fits early.' } },
  ],
  ctaTitle: { zh: '想建立可複製的海外開發能力？', en: 'Want repeatable export sales growth?' },
  ctaDesc: { zh: '用流程＋內容＋節奏，把一次性開發變成穩定的增長系統。', en: 'Turn one-off outreach into a stable growth system with process, content, and cadence.' },
}

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: service.title[lang],
    description: service.description[lang],
    alternates: { canonical: `/${lang}/sales-outsourcing`, languages: { zh: '/zh/sales-outsourcing', en: '/en/sales-outsourcing' } },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const withCaseLink = { ...service, caseStudy: { ...service.caseStudy, link: `/${lang}/case-studies` } }
  return <ServiceSeoPage lang={lang} service={withCaseLink} />
}

