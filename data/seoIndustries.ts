import { Lang } from '@/lib/i18n'

export type SeoFaq = { q: Record<Lang, string>; a: Record<Lang, string> }

export type SeoIndustry = {
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

export const seoIndustries: SeoIndustry[] = [
  {
    slug: 'machinery',
    title: {
      zh: '機械產業外貿開發｜工具機、自動化設備海外買家開發',
      en: 'Export Lead Generation for Machinery | Machine Tools & Automation Equipment',
    },
    description: {
      zh: '協助機械與自動化設備製造商開發海外買家，從名單到開發信、到詢盤轉化，建立穩定出口訂單來源。',
      en: 'Help machinery and automation equipment manufacturers generate overseas leads with a proven export outreach system.',
    },
    h1: { zh: '機械產業外貿客戶開發', en: 'Export Lead Generation for Machinery Companies' },
    introduction: {
      zh: [
        '機械設備買家通常具備明確規格需求與導入流程，從初次接觸到試機、驗收往往需要一段週期。',
        '要讓開發更有效，核心不是大量寄信，而是鎖定正確買家角色、正確的產品應用場景，並以可驗證的能力建立信任。',
      ],
      en: [
        'Machinery buyers usually have clear specs and structured sourcing processes, from first contact to trial and acceptance.',
        'High conversion comes from precise targeting, application-driven messaging, and trust-building proof points.',
      ],
    },
    challenges: {
      zh: ['規格繁多、買家評估週期長', '導入需要樣品/試機與工程對接', '競品多、比價與風險控管嚴格'],
      en: ['Complex specs and long evaluation cycles', 'Engineering validation and trials are required', 'Heavy competition and strict risk control'],
    },
    opportunities: {
      zh: ['全球製造回流與自動化需求上升', '能源效率與智慧製造升級帶動換機潮', '中小型工廠需要可靠的替代供應商'],
      en: ['Rising automation demand and reshoring trends', 'Upgrades driven by energy efficiency and Industry 4.0', 'SMEs seek reliable alternative suppliers'],
    },
    strategy: {
      zh: [
        '買家名單以「產線類型＋產能規模＋既有設備品牌」來篩選，避免無效開發。',
        '開發信聚焦「解決某個痛點」與「可提供的驗證資料」（案例、規格、測試方式）。',
        '設定 4–6 次節奏式跟進，並在第 2–3 封加入「應用情境與導入條件」以提高回覆率。',
      ],
      en: [
        'Build lists by production line type, capacity, and installed-base signals to avoid low-quality outreach.',
        'Position around one problem and provide verifiable proof (specs, tests, reference projects).',
        'Run 4–6 structured follow-ups and add application + requirements around follow-up #2–#3.',
      ],
    },
    ctaTitle: { zh: '想開發機械海外買家？', en: 'Want to generate machinery export leads?' },
    ctaDesc: {
      zh: '提交你的產品與目標市場，我們會回覆可行的買家輪廓與開發策略建議。',
      en: 'Share your product and target markets. We’ll reply with a buyer profile and outreach strategy recommendation.',
    },
    faq: [
      {
        q: { zh: '機械產業適合做 Cold Email 開發嗎？', en: 'Does cold email work for machinery?' },
        a: {
          zh: '可以，但必須以應用情境與規格匹配為核心，並搭配工程導入資訊與跟進節奏，才會有穩定回覆。',
          en: 'Yes, when messaging is application- and spec-matched, with engineering onboarding info and structured follow-ups.',
        },
      },
      {
        q: { zh: '需要準備哪些資料才適合開發？', en: 'What assets should we prepare before outreach?' },
        a: {
          zh: '建議至少準備：主打產品頁、規格表、應用案例、基本產能/交期資訊與可提供的驗證方式。',
          en: 'At minimum: product page, spec sheet, application cases, capacity/lead-time info, and validation approach.',
        },
      },
    ],
  },
  {
    slug: 'electronics',
    title: { zh: '電子產業外貿開發｜零組件、模組與工控買家開發', en: 'Export Lead Generation for Electronics | Components & Industrial Electronics' },
    description: { zh: '協助電子零組件與工控相關製造商開發海外買家，提升詢盤量與設計導入機會。', en: 'Generate overseas leads for electronic components and industrial electronics manufacturers.' },
    h1: { zh: '電子產業外貿客戶開發', en: 'Export Lead Generation for Electronics Companies' },
    introduction: {
      zh: ['電子產業的採購決策往往同時牽涉工程與採購兩條線。有效開發必須同時能說規格，也能說交期與供應穩定。'],
      en: ['Electronics sourcing often involves both engineering and procurement. Effective outreach needs spec clarity and supply reliability.'],
    },
    challenges: { zh: ['規格導向、導入週期長', '需要認證與可靠性資料', '替代料與價格競爭激烈'], en: ['Spec-driven and long design-in cycles', 'Requires certification and reliability data', 'Heavy competition for alternatives and price'] },
    opportunities: { zh: ['供應鏈分散帶來替代供應商需求', '工控與車用/醫療帶動高毛利應用', '缺料/EOL 讓 cross-reference 需求增加'], en: ['Supply chain diversification drives second-source demand', 'Industrial/auto/medical applications offer higher margin', 'Shortages and EOL increase cross-reference demand'] },
    strategy: {
      zh: ['名單分層：工程（規格）與採購（供應）分別溝通。', '主張聚焦：替代料、可靠性、交期與 MOQ 方案。', '以文件化證據提高回覆：Datasheet、認證、測試報告。'],
      en: ['Segment lists by engineering vs procurement stakeholders.', 'Position around alternatives, reliability, lead time and MOQ.', 'Improve replies with documentation: datasheets, certs, test reports.'],
    },
    ctaTitle: { zh: '想提升電子買家詢盤？', en: 'Need more electronics buyer inquiries?' },
    ctaDesc: { zh: '我們可協助你定義買家畫像、建立名單並啟動開發節奏。', en: 'We help define ICP, build lists, and run outreach sequences.' },
    faq: [
      { q: { zh: '要先有英文型錄嗎？', en: 'Do we need an English catalog first?' }, a: { zh: '不一定，但至少要有可讀的規格摘要與主打產品頁，能讓工程快速判斷是否匹配。', en: 'Not always, but a clear spec summary and product page are necessary for engineering evaluation.' } },
    ],
  },
  {
    slug: 'plastic',
    title: { zh: '塑膠產業外貿開發｜塑膠件、射出、模具與材料買家開發', en: 'Export Lead Generation for Plastics | Parts, Injection, Molds and Materials' },
    description: { zh: '協助塑膠射出與塑膠製品廠開發海外 OEM/ODM 買家、代理商與終端客戶。', en: 'Generate overseas leads for plastics manufacturers across OEM/ODM and distribution channels.' },
    h1: { zh: '塑膠產業外貿客戶開發', en: 'Export Lead Generation for Plastics Companies' },
    introduction: { zh: ['塑膠產業的核心競爭力在於製程穩定、交期與成本控制。有效開發需要用買家能理解的方式呈現品質與能力。'], en: ['Plastics sourcing is driven by process stability, lead time, and cost. Outreach should translate capabilities into buyer-friendly proof.'] },
    challenges: { zh: ['買家比價快、替代供應商多', '品質不良成本高，買家風險控管嚴格', '大量專案需要工程溝通與打樣'], en: ['Fast price comparisons with many alternatives', 'High quality risk and strict supplier validation', 'Engineering collaboration and sampling required'] },
    opportunities: { zh: ['環保材料與可回收方案需求增加', '醫療/工控/消費品等多元需求', '品牌商尋找穩定的長期代工夥伴'], en: ['Growing demand for sustainable materials and recyclable solutions', 'Diverse demand across medical, industrial and consumer', 'Brands seek stable long-term manufacturing partners'] },
    strategy: { zh: ['名單以產品應用分類（包裝/工業/醫療等），訊息聚焦應用痛點。', '強調品管體系與一致性：材料追溯、檢驗流程、良率。', '提供快速打樣流程與可預期的導入節奏。'], en: ['Segment by application and tailor messaging to pain points.', 'Emphasize QC and consistency: traceability, inspection, yield.', 'Offer fast sampling workflows and predictable onboarding.'] },
    ctaTitle: { zh: '想找到塑膠件海外買家？', en: 'Looking for overseas buyers for plastic parts?' },
    ctaDesc: { zh: '把產品與目標市場丟給我們，我們回你一個可執行的開發策略。', en: 'Send us your product and target markets. We’ll reply with an executable outreach plan.' },
    faq: [
      { q: { zh: '塑膠件開發要附報價嗎？', en: 'Should we include pricing in the first email?' }, a: { zh: '建議先以應用與能力建立興趣，初期提供價格區間或 MOQ 方向即可，避免過早進入比價。', en: 'Start with application and capabilities; provide ranges or MOQ direction to avoid premature price wars.' } },
    ],
  },
  {
    slug: 'chemical',
    title: { zh: '化工產業外貿開發｜化學品、助劑與原料買家開發', en: 'Export Lead Generation for Chemicals | Raw Materials and Additives' },
    description: { zh: '協助化工原料與助劑供應商開發海外工廠、經銷商與貿易商名單，提升詢盤品質。', en: 'Generate overseas leads for chemical suppliers with qualified factories, distributors, and traders.' },
    h1: { zh: '化工產業外貿客戶開發', en: 'Export Lead Generation for Chemical Companies' },
    introduction: { zh: ['化工產品涉及合規、運輸與安全資料，買家對供應商可靠性與文件完整度高度敏感。'], en: ['Chemical sourcing requires compliance, logistics, and safety documentation, making reliability and documentation critical.'] },
    challenges: { zh: ['合規與文件（MSDS/TDS）要求高', '物流、危險品運輸限制', '買家重視供貨穩定與風險控管'], en: ['High compliance documentation requirements', 'Logistics and hazardous shipping constraints', 'Buyers focus on stability and risk control'] },
    opportunities: { zh: ['區域供應鏈替代需求增加', '特用化學品具更高毛利', '在地經銷商可加速滲透'], en: ['Rising second-source demand regionally', 'Specialty chemicals offer higher margins', 'Local distributors accelerate penetration'] },
    strategy: { zh: ['先定義應用與產業，再找對應工廠與採購職位。', '在開發信中主動提供文件清單與合規聲明。', '以小量試用與樣品策略降低導入門檻。'], en: ['Define application and industry first, then target relevant factories and roles.', 'Include documentation list and compliance statements in outreach.', 'Lower adoption barrier with trial quantities and samples.'] },
    ctaTitle: { zh: '想開發化工海外客戶？', en: 'Need more chemical export inquiries?' },
    ctaDesc: { zh: '我們可協助你建立名單並用合規導向的說法提高回覆率。', en: 'We help build lists and improve reply rates with compliance-led messaging.' },
    faq: [
      { q: { zh: '需要先準備哪些文件？', en: 'What documents should we prepare?' }, a: { zh: '建議準備 MSDS、TDS、COA 範例、包裝規格與危險品運輸條件說明。', en: 'Prepare MSDS, TDS, sample COA, packaging specs, and hazmat shipping terms.' } },
    ],
  },
  {
    slug: 'medical',
    title: { zh: '醫療產業外貿開發｜醫療器材與耗材海外買家開發', en: 'Export Lead Generation for Medical | Devices and Consumables' },
    description: { zh: '協助醫療器材與耗材製造商開發海外經銷與品牌客戶，聚焦合規、品質與長期合作。', en: 'Generate overseas medical device leads with compliance and trust-focused positioning.' },
    h1: { zh: '醫療產業外貿客戶開發', en: 'Export Lead Generation for Medical Device Companies' },
    introduction: { zh: ['醫療產業重視認證與風險管理。開發的關鍵是把品質與合規說清楚，並讓買家知道你能穩定供貨。'], en: ['Medical sourcing is compliance- and risk-driven. Outreach should clarify quality, certification, and supply stability.'] },
    challenges: { zh: ['認證門檻高（ISO13485 等）', '供應商審核嚴格、決策周期長', '買家重視臨床風險與一致性'], en: ['High certification barriers', 'Strict supplier audits and long cycles', 'High emphasis on clinical risk and consistency'] },
    opportunities: { zh: ['全球醫療需求成長與老齡化', '品牌商尋找可靠的 OEM/ODM 夥伴', '特定耗材具穩定復購'], en: ['Growing global demand and aging population', 'Brands seek reliable OEM/ODM partners', 'Consumables create recurring orders'] },
    strategy: { zh: ['用案例與文件建立信任：認證、測試、品質流程。', '分層開發：經銷商與品牌採購分開策略。', '以小量試單與合規資料包推進導入。'], en: ['Build trust with certifications, tests, and QC process.', 'Segment distributors vs brands with different sequences.', 'Use trial orders and compliance packs to move onboarding forward.'] },
    ctaTitle: { zh: '想開發醫療海外買家？', en: 'Need medical export leads?' },
    ctaDesc: { zh: '提交你的產品與目標市場，我們回覆可行的開發方向與切入策略。', en: 'Submit your product and markets. We’ll reply with a feasible entry and outreach strategy.' },
    faq: [
      { q: { zh: '沒有 FDA 也能先開發嗎？', en: 'Can we start outreach without FDA?' }, a: { zh: '可以先開發經銷商/品牌端的需求與導入條件，但在報價與導入前仍需明確合規路徑。', en: 'Yes, you can validate demand and onboarding requirements first, but compliance path must be clear before closing.' } },
    ],
  },
  {
    slug: 'automotive',
    title: { zh: '汽車產業外貿開發｜車用零件與供應鏈買家開發', en: 'Export Lead Generation for Automotive | Parts and Supply Chain' },
    description: { zh: '協助車用零件與材料供應商開發海外 Tier 1/Tier 2 與經銷通路，提高高品質詢盤。', en: 'Generate overseas automotive leads for parts suppliers with quality and compliance-led outreach.' },
    h1: { zh: '汽車產業外貿客戶開發', en: 'Export Lead Generation for Automotive Suppliers' },
    introduction: { zh: ['車用供應鏈重視驗證、品質與交期。有效開發要把你的製程能力與品質系統具體化。'], en: ['Automotive supply chains require validation, quality and delivery performance. Outreach must quantify your capabilities and systems.'] },
    challenges: { zh: ['IATF 等體系要求', '導入周期長且審核多', '價格壓力與穩定供貨要求'], en: ['Quality system requirements', 'Long onboarding with many audits', 'Price pressure and stable supply expectations'] },
    opportunities: { zh: ['新能源車帶動零組件替代與新需求', '區域供應鏈重組增加 Second Source', '售後市場與維修通路需求穩定'], en: ['EV growth drives new parts demand', 'Regional reshoring increases second-source needs', 'Aftermarket demand remains stable'] },
    strategy: { zh: ['用產品族群與應用場景切名單（如底盤、電系、內裝）。', '在開發信中提供品質體系與檢驗能力摘要。', '以專案式跟進節奏推進：需求確認→樣品→測試→試單。'], en: ['Segment lists by product family and application.', 'Include QC system and inspection capability summary.', 'Use project-style follow-ups: requirement → sample → test → trial order.'] },
    ctaTitle: { zh: '想切入車用海外客戶？', en: 'Want to enter automotive supply chains?' },
    ctaDesc: { zh: '我們可協助你找到對應的採購角色與導入切點。', en: 'We help identify the right stakeholders and entry points for onboarding.' },
    faq: [
      { q: { zh: '你們會協助找 Tier 1 嗎？', en: 'Can you target Tier 1 buyers?' }, a: { zh: '可以，我們會依產品定位同時開發 Tier 1、Tier 2 與經銷通路，建立多管道機會。', en: 'Yes. We can target Tier 1, Tier 2 and distribution channels based on your positioning to build multiple pipelines.' } },
    ],
  },
  {
    slug: 'industrial-equipment',
    title: { zh: '工業設備外貿開發｜工業設備與系統整合買家開發', en: 'Export Lead Generation for Industrial Equipment | OEMs and Integrators' },
    description: { zh: '協助工業設備與系統供應商開發海外 OEM 與系統整合商，提升詢盤品質與成交率。', en: 'Generate overseas leads for industrial equipment suppliers targeting OEMs and integrators.' },
    h1: { zh: '工業設備外貿客戶開發', en: 'Export Lead Generation for Industrial Equipment' },
    introduction: { zh: ['工業設備的成交關鍵是「適配」與「導入」。開發要讓買家快速理解你能解決什麼、如何導入、導入成本是多少。'], en: ['Industrial equipment deals are won on fit and onboarding. Outreach should clarify use cases, integration steps, and total cost.'] },
    challenges: { zh: ['買家需求差異大、客製化多', '需要技術對接與導入支援', '跨國售後與備品供應要求'], en: ['Diverse requirements and customization', 'Technical integration support needed', 'After-sales and spare parts expectations'] },
    opportunities: { zh: ['製造數位化與節能需求上升', '系統整合商與代理可快速擴張', '海外中小工廠升級潮'], en: ['Rising digitization and energy saving demand', 'Integrators and agents accelerate expansion', 'SME upgrade wave globally'] },
    strategy: { zh: ['把設備分成可複製的解決方案包（Use Case）來寫內容與開發。', '在文案中加入導入條件與資料需求，降低來回溝通。', '建立「案例＋規格＋導入流程」三件套，提高信任與回覆率。'], en: ['Package messaging by repeatable use cases.', 'Include integration requirements to reduce back-and-forth.', 'Use a trio: case + specs + onboarding steps to build trust and replies.'] },
    ctaTitle: { zh: '想增加工業設備海外詢盤？', en: 'Want more industrial equipment inquiries?' },
    ctaDesc: { zh: '我們可協助你規劃內容架構與開發節奏，建立穩定 inbound + outbound 的成長飛輪。', en: 'We help structure content and outreach cadence to build a stable inbound + outbound growth flywheel.' },
    faq: [
      { q: { zh: '我們產品很客製，適合做 SEO 嗎？', en: 'Our solutions are customized. Is SEO still worth it?' }, a: { zh: '適合。用「應用情境」與「產業問題」做內容結構，比用規格堆砌更能帶來高品質詢盤。', en: 'Yes. Organizing content by use cases and industry problems attracts higher-quality leads than spec-heavy pages.' } },
    ],
  },
]

export function getSeoIndustry(slug: string) {
  return seoIndustries.find(i => i.slug === slug)
}

