import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'

const service: ServiceSeo = {
  slug: 'distributor-network',
  title: {
    zh: '海外經銷網絡（Distributor Network）｜建立可預期的通路覆蓋',
    en: 'Distributor Network | Build Predictable Overseas Channel Coverage',
  },
  description: {
    zh: '用市場分層與通路策略，建立海外經銷/代理網絡：名單、合作條件、跟進節奏與會議推進，讓通路開發變成可追蹤 pipeline。',
    en: 'Build a distributor/agent network with market tiers, partner lists, term frameworks, follow-up cadence, and meeting progression for a trackable pipeline.',
  },
  h1: { zh: '海外經銷網絡建立', en: 'Distributor Network Building' },
  problem: {
    zh: ['找不到有實力的經銷商：產品線不匹配、缺售後能力或沒有覆蓋。', '合作條件不清：MOQ、區域、價格層級與支援談不攏。', '沒有推進節奏：開發像散彈槍，無法預測何時能落地。'],
    en: ['Hard to find capable partners with the right product fit and service coverage.', 'Unclear terms: MOQ, territory, pricing tiers, and support get stuck.', 'No cadence-driven pipeline, so market entry timing is unpredictable.'],
  },
  solution: {
    zh: ['我們把經銷開發做成一套可執行的系統：市場分層 → 通路地圖 → 名單 → 合作 Offer → 多觸點跟進。', '交付可追蹤的候選名單與推進狀態，並以會議/試單作為里程碑。'],
    en: ['We systemize distributor development: market tiers → channel map → list → offer → multi-touch follow-ups.', 'We deliver a trackable shortlist and progression statuses, using meetings and trials as milestones.'],
  },
  whatIs: {
    zh: ['Distributor Network 是一組「可推進的通路夥伴關係」：不只是名單，而是能被驗證、能被談判、能被推進到試單與簽約的 pipeline。'],
    en: ['A distributor network is not just a list—it is a pipeline of partner relationships that can be validated, negotiated, and progressed to trials and agreements.'],
  },
  howWorks: {
    zh: ['經銷商是否願意合作，取決於你提供的合作條件是否可計算（利潤/風險/支援）。市場分層與角色拆解能大幅提高推進效率。'],
    en: ['Partnership depends on calculable economics (profit, risk, support). Market tiers and role clarity significantly improve progression efficiency.'],
  },
  process: {
    zh: ['市場分層與切入假設。', '通路角色拆解（Importer/Distributor/Agent/Integrator）。', '建立候選名單並驗證能力（客群/售後/倉儲）。', '設計合作 Offer（MOQ/區域/價格層級/支援）。', '多觸點跟進與會議邀約，推進試單與簽約。'],
    en: ['Market tiers and entry hypotheses.', 'Channel role decomposition.', 'Build and validate shortlist by capabilities.', 'Design partnership offers (MOQ/territory/tiers/support).', 'Multi-touch cadence to drive meetings, trials, and agreements.'],
  },
  tools: {
    zh: ['通路來源：協會/展會/目錄/Google/LinkedIn。', '驗證：公司網站、產品線互補、服務與覆蓋。', '追蹤：表格或 CRM 分層與狀態管理。'],
    en: ['Sourcing: associations, trade fairs, directories, Google, LinkedIn.', 'Validation: website, complementary lines, service and coverage.', 'Tracking: spreadsheet or CRM status management.'],
  },
  checklist: {
    zh: ['市場分層完成。', '合作條件草案完成。', '候選經銷清單 50–150 家完成並驗證。', '跟進節奏與會議邀約規則完成。'],
    en: ['Market tiers done.', 'Draft terms ready.', 'Shortlist of 50–150 partners verified.', 'Cadence and meeting-invite rules ready.'],
  },
  results: {
    zh: [
      { label: '覆蓋更可預期', value: '分層推進', desc: '用市場分層讓資源聚焦並提高落地機率。' },
      { label: '條件更清楚', value: '可談判', desc: '用可計算 Offer 加速合作決策。' },
      { label: '會議更有效', value: '更聚焦', desc: '候選名單驗證後再推進會議，降低無效溝通。' },
    ],
    en: [
      { label: 'Predictable coverage', value: 'Tiered', desc: 'Market tiers focus resources and improve entry likelihood.' },
      { label: 'Clear terms', value: 'Negotiable', desc: 'Calculable offers speed up decisions.' },
      { label: 'Efficient meetings', value: 'Focused', desc: 'Validate candidates before calls to reduce wasted time.' },
    ],
  },
  funnel: {
    zh: [
      { label: '候選通路', value: '500' },
      { label: '驗證名單', value: '150' },
      { label: '有效回覆', value: '40' },
      { label: '商務會議', value: '15' },
      { label: '簽約/試單', value: '3' },
    ],
    en: [
      { label: 'Candidates', value: '500' },
      { label: 'Verified', value: '150' },
      { label: 'Replies', value: '40' },
      { label: 'Meetings', value: '15' },
      { label: 'Signed/Trials', value: '3' },
    ],
  },
  industries: {
    zh: ['機械設備', '工業設備', '五金工具', '包材/材料'],
    en: ['Machinery', 'Industrial Equipment', 'Hardware Tools', 'Packaging/Materials'],
  },
  caseStudy: {
    title: { zh: '自動化設備：安排 15 場會議、簽約 3 家代理', en: 'Machinery: 15 meetings, 3 agents signed' },
    desc: { zh: '以通路名單與會議邀約推進，完成越南/泰國通路落地。', en: 'Channel lists and meeting-setting drove VN/TH distributor onboarding.' },
    link: '/case-studies/machinery',
  },
  faq: [
    { q: { zh: '要先給獨家嗎？', en: 'Should we offer exclusivity?' }, a: { zh: '通常不建議。可用里程碑換取區域保護，先以試單驗證能力。', en: 'Usually no. Use milestone-based protection and validate with trials first.' } },
    { q: { zh: '經銷商怎麼篩選？', en: 'How do you vet distributors?' }, a: { zh: '看產品線互補、客群匹配、是否有售後能力與在地倉儲，並驗證覆蓋與成交能力。', en: 'We check product fit, customer base, service capability, and local warehousing, then validate coverage and deal ability.' } },
  ],
  ctaTitle: { zh: '想建立你的海外通路網絡？', en: 'Want to build your distributor network?' },
  ctaDesc: { zh: '提交產品與市場，我們回覆通路角色、合作條件與可行的推進策略。', en: 'Submit your product and markets. We’ll reply with roles, terms, and a feasible progression plan.' },
  relatedLinks: [
    { label: { zh: '核心：經銷商開發', en: 'Core: Distributor Development' }, href: '/services/distributor-development' },
    { label: { zh: '方法：Market Entry Strategy', en: 'Method: Market Entry Strategy' }, href: '/market-entry-strategy' },
    { label: { zh: '指南：How to find distributors', en: 'Guide: How to find distributors' }, href: '/resources/blog/how-to-find-international-distributors' },
    { label: { zh: '免費出口市場分析', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
  ],
}

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: service.title[lang],
    description: service.description[lang],
    alternates: { canonical: `/${lang}/distributor-network`, languages: { zh: '/zh/distributor-network', en: '/en/distributor-network' } },
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
