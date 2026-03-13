import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'

const service: ServiceSeo = {
  slug: 'distributor-development',
  title: { zh: '經銷商開發（Distributor Development）｜建立海外通路網路', en: 'Distributor Development | Build Overseas Channels' },
  description: { zh: '用市場分層與通路策略，開發海外經銷/代理與批發通路，建立更可預期的出貨與覆蓋。', en: 'Develop distributors and agents with market segmentation and channel strategy to build predictable coverage and revenue.' },
  h1: { zh: '經銷商開發（Distributor Development）服務', en: 'Distributor Development Service' },
  whatIs: { zh: ['經銷商開發是以「市場－通路－合作模式」為骨架，找到具備銷售能力的通路夥伴，並用可落地的合作方案推進簽約。'], en: ['Distributor development finds capable channel partners and moves them toward agreement with a practical partnership offer.'] },
  howWorks: { zh: ['我們先定義適合通路合作的產品線與市場，再建立候選經銷名單、設計合作話術與條件，最後以多觸點跟進推進合作。'], en: ['We define products and markets suitable for channels, build a shortlist, design partnership messaging and terms, then drive multi-touch follow-ups.'] },
  process: {
    zh: ['市場分層：優先市場/次要市場與切入策略。', '通路地圖：Importer/Distributor/Agent/Integrator 角色拆解。', '名單建立：依產品線與地區建立可追蹤清單。', '合作 Offer 設計：MOQ、區域保護、價格層級與支援條件。', '跟進節奏：Email + LinkedIn + 會議邀約，推進簽約與試單。'],
    en: ['Market prioritization with entry tactics.', 'Channel mapping by role type.', 'Trackable distributor list building by product and region.', 'Partnership offer design: MOQ, territory, pricing tiers, support.', 'Multi-touch cadence to drive agreements and trial orders.'],
  },
  industries: { zh: ['工業設備', '五金工具', '電子零組件', '包材/材料', '醫療耗材'], en: ['Industrial Equipment', 'Hardware Tools', 'Electronics', 'Packaging/Materials', 'Medical Consumables'] },
  caseStudy: { title: { zh: '以通路策略建立穩定覆蓋', en: 'Building stable coverage with channel strategy' }, desc: { zh: '透過區域分層與合作模式設計，將經銷開發從「亂槍打鳥」變成可預測的 pipeline。', en: 'Turn distributor outreach from random outreach into a predictable pipeline with segmentation and offer design.' }, link: '/zh/case-studies' },
  faq: [
    { q: { zh: '經銷商會排斥新的供應商嗎？', en: 'Do distributors reject new suppliers?' }, a: { zh: '不一定。關鍵在於你能提供差異化、穩定交付與清晰合作條件，讓他們算得出利潤與風險。', en: 'Not always. Differentiation, stable delivery, and clear terms help them evaluate profit and risk.' } },
    { q: { zh: '要先給獨家嗎？', en: 'Should we offer exclusivity upfront?' }, a: { zh: '通常不建議。可以用階段性條件（達成量/覆蓋/推廣）來換取區域保護，降低風險。', en: 'Usually no. Use milestone-based terms to earn territory protection and reduce risk.' } },
  ],
  ctaTitle: { zh: '建立你的海外通路網路', en: 'Build your overseas channel network' },
  ctaDesc: { zh: '我們協助你用市場分層＋合作條件設計，把經銷開發做成可持續的系統。', en: 'We combine market segmentation and partnership terms to make channel development repeatable.' },
}

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: service.title[lang],
    description: service.description[lang],
    alternates: { canonical: `/${lang}/distributor-development`, languages: { zh: '/zh/distributor-development', en: '/en/distributor-development' } },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const withCaseLink = { ...service, caseStudy: { ...service.caseStudy, link: `/${lang}/case-studies` } }
  return <ServiceSeoPage lang={lang} service={withCaseLink} />
}

