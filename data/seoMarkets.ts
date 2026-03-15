import { Lang } from '@/lib/i18n'
import { SeoFaq } from './seoIndustries'

export type SeoMarket = {
  slug: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  h1: Record<Lang, string>
  introduction: Record<Lang, string[]>
  challenges: Record<Lang, string[]>
  opportunities: Record<Lang, string[]>
  strategy: Record<Lang, string[]>
  ctaTitle: Record<Lang, string>
  ctaDesc: Record<Lang, string>
  faq: SeoFaq[]
}

export const seoMarkets: SeoMarket[] = [
  {
    slug: 'united-states',
    title: { zh: '美國市場開發｜出口到 USA 的買家開發與詢盤成長', en: 'Export to the United States | Lead Generation for Manufacturers' },
    description: { zh: '協助製造商開發美國進口商、經銷商與品牌客戶，提升高品質詢盤與合作機會。', en: 'Generate qualified US buyer inquiries by targeting importers, distributors, and brands.' },
    h1: { zh: '美國市場外貿客戶開發', en: 'US Market Export Lead Generation' },
    introduction: { zh: ['美國市場規模大、供應鏈分層明確。成功關鍵是精準鎖定買家類型、用清晰價值主張建立信任，並把跟進節奏做成流程。'], en: ['The US is large and channel-driven. Success comes from precise buyer targeting, clear positioning, and structured follow-ups.'] },
    challenges: { zh: ['競爭激烈、買家時間成本高', '需求快速、回覆期待速度快', '產品責任與合規要求'], en: ['Intense competition and low attention', 'Fast-paced buying cycles and response expectations', 'Compliance and product liability concerns'] },
    opportunities: { zh: ['大量區域經銷商與垂直通路', '品牌商對穩定供應商需求強', '中小企業可切入較快'], en: ['Many regional distributors and vertical channels', 'Brands need reliable suppliers', 'SMEs can move faster with the right pitch'] },
    strategy: { zh: ['名單以通路層級（Importer/Distributor/Brand）分層，訊息與 Offer 不同。', '在開發信中先給「能讓買家快速判斷」的資訊：核心產品、差異點、交期/最小訂購、案例。', '跟進節奏 4–6 次，並搭配 LinkedIn 或電話作為第二觸點。'], en: ['Segment by channel role and tailor offers.', 'Provide fast-evaluation info: hero product, differentiation, lead time/MOQ, proof.', 'Run 4–6 follow-ups and use LinkedIn/calls as a secondary touchpoint.'] },
    ctaTitle: { zh: '想開發美國買家？', en: 'Want US buyers for your products?' },
    ctaDesc: { zh: '提交產品與目標州/產業，我們回覆可行的買家輪廓與開發策略。', en: 'Share your product and target states/industries. We’ll reply with a buyer profile and strategy.' },
    faq: [
      { q: { zh: '美國買家最在意什麼？', en: 'What do US buyers care about most?' }, a: { zh: '除了價格，更在意供應穩定、交期、溝通效率與風險（保固、責任）。', en: 'Beyond price: stable supply, lead time, communication speed, and risk management.' } },
    ],
  },
  {
    slug: 'germany',
    title: { zh: '德國市場開發｜出口到 Germany 的工業買家開發', en: 'Export to Germany | Industrial Lead Generation' },
    description: { zh: '協助製造商切入德國工業市場，開發進口商、OEM 與系統整合商。', en: 'Enter the German industrial market by targeting importers, OEMs, and integrators.' },
    h1: { zh: '德國市場外貿客戶開發', en: 'Germany Market Export Lead Generation' },
    introduction: { zh: ['德國市場重視品質、合規與長期合作。有效開發要在內容與開發信中主動回答買家的風險疑慮。'], en: ['Germany values quality, compliance, and long-term partnerships. Outreach must proactively address buyer risk concerns.'] },
    challenges: { zh: ['合規與文件要求（CE/RoHS/REACH）', '決策嚴謹、周期較長', '語言與商務文化差異'], en: ['Compliance documentation requirements', 'Rigorous decision-making and longer cycles', 'Language and business culture differences'] },
    opportunities: { zh: ['德國工業聚落完整、採購專業', '替代供應商與第二來源需求', '展會與協會資源豐富'], en: ['Strong industrial clusters and professional sourcing', 'Second-source demand', 'Rich ecosystem of trade fairs and associations'] },
    strategy: { zh: ['針對產業聚落與應用場景建名單（機械、工控、汽車等）。', '內容呈現以合規、品質與導入流程為主軸。', '結合展會節奏（展前邀約/展後跟進），提升回覆與轉化。'], en: ['Build lists by clusters and use cases.', 'Emphasize compliance, quality, and onboarding process.', 'Align outreach with trade fair timelines to improve reply and conversion.'] },
    ctaTitle: { zh: '想切入德國工業客戶？', en: 'Want German industrial buyers?' },
    ctaDesc: { zh: '我們可協助你建立合規導向的內容與開發節奏。', en: 'We help build compliance-led content and outreach cadence.' },
    faq: [
      { q: { zh: '需要德文內容嗎？', en: 'Do we need German content?' }, a: { zh: '視產業而定。多數 B2B 採購可用英文，但若能提供關鍵頁面德文版會提高信任與回覆率。', en: 'It depends. English works for many B2B buyers, but key pages in German improve trust and replies.' } },
    ],
  },
  {
    slug: 'japan',
    title: { zh: '日本市場開發｜出口到 Japan 的買家開發', en: 'Export to Japan | Buyer Development for Manufacturers' },
    description: { zh: '協助製造商開發日本商社、經銷與製造端採購，提升高品質詢盤。', en: 'Generate Japanese buyer inquiries by targeting trading companies, distributors, and manufacturers.' },
    h1: { zh: '日本市場外貿客戶開發', en: 'Japan Market Export Lead Generation' },
    introduction: { zh: ['日本市場重視信任與細節。有效開發要用結構清晰、細節到位的內容與開發信，逐步建立專業形象。'], en: ['Japan is trust- and detail-driven. Clear structure and high-quality messaging help build credibility over time.'] },
    challenges: { zh: ['語言與文化門檻', '決策流程多層', '品質與交期要求高'], en: ['Language and cultural barriers', 'Layered decision processes', 'High standards for quality and lead time'] },
    opportunities: { zh: ['商社通路可放大市場覆蓋', '長期合作與穩定訂單', '高品質供應商具溢價空間'], en: ['Trading companies expand reach', 'Long-term partnerships and stable orders', 'Premium for trusted quality suppliers'] },
    strategy: { zh: ['以產業別先找商社/經銷，再切入終端工廠。', '內容強調品質流程、認證與交期穩定。', '跟進節奏更重視禮貌與長期性。'], en: ['Start with traders/distributors then expand to end factories.', 'Emphasize QC systems, certifications, and lead-time stability.', 'Use polite, long-term follow-up cadence.'] },
    ctaTitle: { zh: '想找到日本合作夥伴？', en: 'Need partners in Japan?' },
    ctaDesc: { zh: '提交產品與目標產業，我們回覆可行的切入路徑。', en: 'Share your product and target industries. We’ll reply with a feasible entry path.' },
    faq: [
      { q: { zh: '日本一定要日文嗎？', en: 'Is Japanese mandatory?' }, a: { zh: '不是一定，但有日文關鍵頁與更符合商務禮儀的信件格式，效果會更好。', en: 'Not always, but Japanese key pages and proper formatting improve effectiveness.' } },
    ],
  },
  {
    slug: 'middle-east',
    title: { zh: '中東市場開發｜出口到 Middle East 的買家與通路開發', en: 'Export to the Middle East | Buyer and Channel Development' },
    description: { zh: '協助製造商開發中東進口商、代理商與工程承包相關通路，提升詢盤與合作機會。', en: 'Generate Middle East inquiries by targeting importers, agents, and project channels.' },
    h1: { zh: '中東市場外貿客戶開發', en: 'Middle East Market Export Lead Generation' },
    introduction: { zh: ['中東市場常見以代理、專案與通路合作為主。有效開發要把適用場景、合作模式與交付能力說清楚。'], en: ['The Middle East often runs on agents, projects, and channels. Outreach should clarify use cases, partnership model, and delivery capability.'] },
    challenges: { zh: ['通路型態多元（代理/專案/貿易）', '決策受關係與信任影響大', '付款條件與交易風險控管'], en: ['Diverse channels (agents/projects/trading)', 'Trust and relationships matter', 'Payment terms and transaction risk management'] },
    opportunities: { zh: ['基礎建設與工業升級需求', '高溫/高強度場景帶動特規產品', '代理商可加速市場滲透'], en: ['Infrastructure and industrial upgrades', 'Demand for specialized products in harsh environments', 'Agents accelerate market penetration'] },
    strategy: { zh: ['以國家與產業聚落建名單，聚焦阿聯、沙烏地等關鍵市場。', '訊息框架聚焦：適用場景、供應能力與合作模式。', '增加第二觸點：WhatsApp、商務社群或電話，加速回覆。'], en: ['Build lists by country/cluster and focus on key markets.', 'Message framework: use case → capability → partnership model.', 'Add secondary touchpoints like WhatsApp/LinkedIn to speed replies.'] },
    ctaTitle: { zh: '想開發中東代理與買家？', en: 'Need Middle East agents and buyers?' },
    ctaDesc: { zh: '提交產品與目標國家，我們回覆可行的開發策略。', en: 'Share your product and target countries. We’ll reply with a strategy.' },
    faq: [
      { q: { zh: '中東適合哪種合作方式？', en: 'What collaboration model works best?' }, a: { zh: '多數品類以代理/經銷切入較快，若是工業設備則可搭配 EPC 與專案通路。', en: 'Agents/distributors work well for many categories; industrial equipment can also use EPC/project channels.' } },
    ],
  },
  {
    slug: 'southeast-asia',
    title: { zh: '東南亞市場開發｜出口到 Southeast Asia 的買家開發', en: 'Export to Southeast Asia | Buyer Development' },
    description: { zh: '協助製造商開發東南亞工廠、代理商與通路客戶，承接供應鏈轉移商機。', en: 'Generate SEA inquiries by targeting factories, agents, and channels amid supply chain shifts.' },
    h1: { zh: '東南亞市場外貿客戶開發', en: 'Southeast Asia Market Export Lead Generation' },
    introduction: { zh: ['供應鏈轉移讓東南亞成為新興製造與消費市場。有效開發需兼顧在地溝通方式與風險篩選。'], en: ['Supply chain shifts make SEA a growing hub. Effective outreach requires local communication habits and risk screening.'] },
    challenges: { zh: ['市場分散、語言文化差異', '信用與交易風險', '價格競爭'], en: ['Fragmented markets and language differences', 'Credit and transaction risks', 'Price competition'] },
    opportunities: { zh: ['工業升級與設備需求', '代理通路成長快', '台商與外商設廠帶動採購'], en: ['Industrial upgrades and equipment demand', 'Fast-growing distribution networks', 'FDI factories drive procurement'] },
    strategy: { zh: ['鎖定產業聚落與關鍵買家角色（採購/老闆）。', '使用 Email + 即時通訊輔助，提高回覆。', '先以小單建立信任，再逐步擴大合作。'], en: ['Target clusters and key roles.', 'Use Email plus IM channels to improve replies.', 'Start small to build trust then scale.'] },
    ctaTitle: { zh: '想抓住東南亞機會？', en: 'Want to capture SEA opportunities?' },
    ctaDesc: { zh: '提交產品與目標國家，我們回覆可行的切入方案。', en: 'Share your product and countries. We’ll reply with an entry plan.' },
    faq: [
      { q: { zh: '東南亞需要當地語言嗎？', en: 'Do we need local languages in SEA?' }, a: { zh: '多數可用英文，但提供關鍵資料的在地語言版本能提高信任與效率。', en: 'English often works, but localized key assets improve trust and speed.' } },
    ],
  },
  {
    slug: 'europe',
    title: { zh: '歐洲市場開發｜出口到 Europe 的買家開發與合規導向內容', en: 'Export to Europe | Compliance-led Lead Generation' },
    description: { zh: '協助製造商開發歐洲進口商、經銷與品牌客戶，以合規與品質建立信任。', en: 'Generate Europe inquiries by targeting importers, distributors, and brands with compliance-led messaging.' },
    h1: { zh: '歐洲市場外貿客戶開發', en: 'Europe Market Export Lead Generation' },
    introduction: { zh: ['歐洲市場看重合規、品質與長期合作。內容與開發信需要把證據放在買家最在意的位置。'], en: ['Europe values compliance, quality, and long-term partnership. Put proof where buyers care most.'] },
    challenges: { zh: ['合規法規多', '決策週期長', '多語與文化差異'], en: ['Many compliance regulations', 'Long decision cycles', 'Multi-language and cultural differences'] },
    opportunities: { zh: ['高品質產品有溢價空間', '替代供應商需求', '展會與協會資源多'], en: ['Premium for high-quality suppliers', 'Second-source needs', 'Strong trade fair ecosystem'] },
    strategy: { zh: ['針對國家/產業聚落建名單，並用合規與案例建立信任。', '跟進節奏更強調專業與持續性。', '把資源下載與案例放進內部連結，提升轉化。'], en: ['Build lists by clusters and use compliance + proof.', 'Follow-ups emphasize professionalism and consistency.', 'Use lead magnets and cases as internal links to improve conversions.'] },
    ctaTitle: { zh: '想開發歐洲買家？', en: 'Need European buyers?' },
    ctaDesc: { zh: '提交產品與目標國家，我們回覆可行的開發策略。', en: 'Share your product and countries. We’ll reply with a strategy.' },
    faq: [
      { q: { zh: '歐洲一定要多語嗎？', en: 'Do we need multiple languages in Europe?' }, a: { zh: '英文可先切入，但若能提供德/法等關鍵頁版本，會更容易提高信任與回覆率。', en: 'English can start, but localized key pages in DE/FR increase trust and replies.' } },
    ],
  },
]

export function getSeoMarket(slug: string) {
  return seoMarkets.find(m => m.slug === slug)
}

