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
      cn: '机械行业外贸開發｜工具机、自動化设备海外买家開發',
    zh: '機械產業外銷開發｜工具機、自動化設備海外買家開發',
      en: 'Export Lead Generation for Machinery | Machine Tools & Automation Equipment',
    },
    description: {
      cn: '協助机械與自動化设备企业開發海外买家，從名单到開發信、到询盘轉化，建立稳定出口訂單来源。',
    zh: '協助機械與自動化設備企業開發海外買家，從名單到開發信、到詢價轉化，建立穩定出口訂單來源。',
      en: 'Help machinery and automation equipment companies generate overseas leads with a proven export outreach system.',
    },
    h1: { cn: '机械行业外贸客戶開發',
    zh: '機械產業外銷客戶開發', en: 'Export Lead Generation for Machinery Companies' },
    introduction: {
      cn: [
        '机械设备买家通常具備明確規格需求與導入流程，從初次接觸到試机、驗收往往需要一段周期。',
        '要讓開發更有效，核心不是大量寄信，而是鎖定正确买家角色、正确的產品应用场景，並以可验证的能力建立信任。',
      ],
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
      cn: ['規格繁多、买家评估周期长', '導入需要样品/試机與工程對接', '竞品多、比價與风险控管嚴格'],
    zh: ['規格繁多、買家評估週期長', '導入需要樣品/試機與工程對接', '競品多、比價與風險控管嚴格'],
      en: ['Complex specs and long evaluation cycles', 'Engineering validation and trials are required', 'Heavy competition and strict risk control'],
    },
    opportunities: {
      cn: ['全球製造回流與自動化需求上升', '能源效率與智慧製造升級帶動換机潮', '中小型工厂需要可靠的替代供应商'],
    zh: ['全球製造回流與自動化需求上升', '能源效率與智慧製造升級帶動換機潮', '中小型工廠需要可靠的替代供應商'],
      en: ['Rising automation demand and reshoring trends', 'Upgrades driven by energy efficiency and Industry 4.0', 'SMEs seek reliable alternative suppliers'],
    },
    strategy: {
      cn: [
        '买家名单以「產線类别型＋產能规模＋既有设备品牌」來筛选，避免无效開發。',
        '開發信聚焦「解決某個痛点」與「可提供的验证数据」（案例、規格、测试方式）。',
        '設定 4–6 次節奏式跟进，並在第 2–3 封加入「应用场景與導入條件」以提高回复率。',
      ],
    zh: [
        '買家名單以「產線類別型＋產能規模＋既有設備品牌」來篩選，避免無效開發。',
        '開發信聚焦「解決某個痛點」與「可提供的驗證資料」（案例、規格、測試方式）。',
        '設定 4–6 次節奏式跟進，並在第 2–3 封加入「應用情境與導入條件」以提高回覆率。',
      ],
      en: [
        'Build lists by production line type, capacity, and installed-base signals to avoid low-quality outreach.',
        'Position around one problem and provide verifiable proof (specs, tests, reference projects).',
        'Run 4–6 structured follow-ups and add application + requirements around follow-up #2–#3.',
      ],
    },
    ctaTitle: { cn: '想開發机械海外买家？',
    zh: '想開發機械海外買家？', en: 'Want to generate machinery export leads?' },
    ctaDesc: {
      cn: '提交你的產品與目标市场，我們會回复可行的买家輪廓與開發策略建議。',
    zh: '提交你的產品與目標市場，我們會回覆可行的買家輪廓與開發策略建議。',
      en: 'Share your product and target markets. We’ll reply with a buyer profile and outreach strategy recommendation.',
    },
    faq: [
      {
        q: { cn: '机械行业適合做 Cold Email 開發嗎？',
    zh: '機械產業適合做 Cold Email 開發嗎？', en: 'Does cold email work for machinery?' },
        a: {
          cn: '可以，但必須以应用场景與規格匹配為核心，並搭配工程導入信息與跟进節奏，才會有稳定回复。',
    zh: '可以，但必須以應用情境與規格匹配為核心，並搭配工程導入資訊與跟進節奏，才會有穩定回覆。',
          en: 'Yes, when messaging is application- and spec-matched, with engineering onboarding info and structured follow-ups.',
        },
      },
      {
        q: { cn: '需要準備哪些数据才適合開發？',
    zh: '需要準備哪些資料才適合開發？', en: 'What assets should we prepare before outreach?' },
        a: {
          cn: '建議至少準備：主打產品頁、規格表、应用案例、基本產能/交期信息與可提供的验证方式。',
    zh: '建議至少準備：主打產品頁、規格表、應用案例、基本產能/交期資訊與可提供的驗證方式。',
          en: 'At minimum: product page, spec sheet, application cases, capacity/lead-time info, and validation approach.',
        },
      },
    ],
  },
  {
    slug: 'electronics',
    title: { cn: '電子行业外贸開發｜零部件、模組與工控买家開發',
    zh: '電子產業外銷開發｜零元件、模組與工控買家開發', en: 'Export Lead Generation for Electronics | Components & Industrial Electronics' },
    description: { cn: '協助電子零部件與工控相關企业開發海外买家，提升询盘量與設計導入机会。',
    zh: '協助電子零元件與工控相關企業開發海外買家，提升詢價量與設計導入機會。', en: 'Generate overseas leads for electronic components and industrial electronics companies.' },
    h1: { cn: '電子行业外贸客戶開發',
    zh: '電子產業外銷客戶開發', en: 'Export Lead Generation for Electronics Companies' },
    introduction: {
      cn: ['電子行业的采购決策往往同時牽涉工程與采购兩條線。有效開發必須同時能說規格，也能說交期與供應稳定。'],
    zh: ['電子產業的採購決策往往同時牽涉工程與採購兩條線。有效開發必須同時能說規格，也能說交期與供應穩定。'],
      en: ['Electronics sourcing often involves both engineering and procurement. Effective outreach needs spec clarity and supply reliability.'],
    },
    challenges: { cn: ['規格導向、導入周期长', '需要验证與可靠性数据', '替代料與價格竞争激烈'],
    zh: ['規格導向、導入週期長', '需要驗證與可靠性資料', '替代料與價格競爭激烈'], en: ['Spec-driven and long design-in cycles', 'Requires certification and reliability data', 'Heavy competition for alternatives and price'] },
    opportunities: { cn: ['供應鏈分散帶來替代供应商需求', '工控與車用/医疗帶動高毛利应用', '缺料/EOL 讓 cross-reference 需求增加'],
    zh: ['供應鏈分散帶來替代供應商需求', '工控與車用/醫療帶動高毛利應用', '缺料/EOL 讓 cross-reference 需求增加'], en: ['Supply chain diversification drives second-source demand', 'Industrial/auto/medical applications offer higher margin', 'Shortages and EOL increase cross-reference demand'] },
    strategy: {
      cn: ['名单分层：工程（規格）與采购（供應）分別溝通。', '主張聚焦：替代料、可靠性、交期與 MOQ 方案。', '以文件化证据提高回复：Datasheet、验证、测试報告。'],
    zh: ['名單分層：工程（規格）與採購（供應）分別溝通。', '主張聚焦：替代料、可靠性、交期與 MOQ 方案。', '以文件化證據提高回覆：Datasheet、驗證、測試報告。'],
      en: ['Segment lists by engineering vs procurement stakeholders.', 'Position around alternatives, reliability, lead time and MOQ.', 'Improve replies with documentation: datasheets, certs, test reports.'],
    },
    ctaTitle: { cn: '想提升電子买家询盘？',
    zh: '想提升電子買家詢價？', en: 'Need more electronics buyer inquiries?' },
    ctaDesc: { cn: '我們可協助你定义买家畫像、建立名单並启动開發節奏。',
    zh: '我們可協助你定義買家畫像、建立名單並啟動開發節奏。', en: 'We help define ICP, build lists, and run outreach sequences.' },
    faq: [
      { q: { cn: '要先有英文型錄嗎？',
    zh: '要先有英文型錄嗎？', en: 'Do we need an English catalog first?' }, a: { cn: '不一定，但至少要有可讀的規格摘要與主打產品頁，能讓工程快速判斷是否匹配。',
    zh: '不一定，但至少要有可讀的規格摘要與主打產品頁，能讓工程快速判斷是否匹配。', en: 'Not always, but a clear spec summary and product page are necessary for engineering evaluation.' } },
    ],
  },
  {
    slug: 'plastic',
    title: { cn: '塑膠行业外贸開發｜塑膠件、射出、模具與材料买家開發',
    zh: '塑膠產業外銷開發｜塑膠件、射出、模具與材料買家開發', en: 'Export Lead Generation for Plastics | Parts, Injection, Molds and Materials' },
    description: { cn: '協助塑膠射出與塑膠製品企业開發海外 OEM/ODM 买家、代理商與终端客戶。',
    zh: '協助塑膠射出與塑膠製品企業開發海外 OEM/ODM 買家、代理商與終端客戶。', en: 'Generate overseas leads for plastics companies across OEM/ODM and distribution channels.' },
    h1: { cn: '塑膠行业外贸客戶開發',
    zh: '塑膠產業外銷客戶開發', en: 'Export Lead Generation for Plastics Companies' },
    introduction: { cn: ['塑膠行业的核心竞争力在於製程稳定、交期與成本控制。有效開發需要用买家能理解的方式呈現质量與能力。'],
    zh: ['塑膠產業的核心競爭力在於製程穩定、交期與成本控制。有效開發需要用買家能理解的方式呈現品質與能力。'], en: ['Plastics sourcing is driven by process stability, lead time, and cost. Outreach should translate capabilities into buyer-friendly proof.'] },
    challenges: { cn: ['买家比價快、替代供应商多', '质量不良成本高，买家风险控管嚴格', '大量项目需要工程溝通與打樣'],
    zh: ['買家比價快、替代供應商多', '品質不良成本高，買家風險控管嚴格', '大量專案需要工程溝通與打樣'], en: ['Fast price comparisons with many alternatives', 'High quality risk and strict supplier validation', 'Engineering collaboration and sampling required'] },
    opportunities: { cn: ['環保材料與可回收方案需求增加', '医疗/工控/消費品等多元需求', '品牌商尋找稳定的长期代工夥伴'],
    zh: ['環保材料與可回收方案需求增加', '醫療/工控/消費品等多元需求', '品牌商尋找穩定的長期代工夥伴'], en: ['Growing demand for sustainable materials and recyclable solutions', 'Diverse demand across medical, industrial and consumer', 'Brands seek stable long-term manufacturing partners'] },
    strategy: { cn: ['名单以產品应用分类（套件裝/工业/医疗等），訊息聚焦应用痛点。', '強調品管體系與一致性：材料追溯、檢驗流程、良率。', '提供快速打樣流程與可预期的導入節奏。'],
    zh: ['名單以產品應用分類別（套件裝/工業/醫療等），訊息聚焦應用痛點。', '強調品管體系與一致性：材料追溯、檢驗流程、良率。', '提供快速打樣流程與可預期的導入節奏。'], en: ['Segment by application and tailor messaging to pain points.', 'Emphasize QC and consistency: traceability, inspection, yield.', 'Offer fast sampling workflows and predictable onboarding.'] },
    ctaTitle: { cn: '想找到塑膠件海外买家？',
    zh: '想找到塑膠件海外買家？', en: 'Looking for overseas buyers for plastic parts?' },
    ctaDesc: { cn: '把產品與目标市场丟給我們，我們回你一個可执行的開發策略。',
    zh: '把產品與目標市場丟給我們，我們回你一個可執行的開發策略。', en: 'Send us your product and target markets. We’ll reply with an executable outreach plan.' },
    faq: [
      { q: { cn: '塑膠件開發要附报价嗎？',
    zh: '塑膠件開發要附報價嗎？', en: 'Should we include pricing in the first email?' }, a: { cn: '建議先以应用與能力建立興趣，初期提供價格區間或 MOQ 方向即可，避免過早進入比價。',
    zh: '建議先以應用與能力建立興趣，初期提供價格區間或 MOQ 方向即可，避免過早進入比價。', en: 'Start with application and capabilities; provide ranges or MOQ direction to avoid premature price wars.' } },
    ],
  },
  {
    slug: 'chemical',
    title: { cn: '化工行业外贸開發｜化學品、助劑與原料买家開發',
    zh: '化工產業外銷開發｜化學品、助劑與原料買家開發', en: 'Export Lead Generation for Chemicals | Raw Materials and Additives' },
    description: { cn: '協助化工原料與助劑企业開發海外工厂、经销商與贸易商名单，提升询盘质量。',
    zh: '協助化工原料與助劑企業開發海外工廠、經銷商與貿易商名單，提升詢價品質。', en: 'Generate overseas leads for chemical companies with qualified factories, distributors, and traders.' },
    h1: { cn: '化工行业外贸客戶開發',
    zh: '化工產業外銷客戶開發', en: 'Export Lead Generation for Chemical Companies' },
    introduction: { cn: ['化工產品涉及合规、運輸與安全数据，买家對供应商可靠性與文件完整度高度敏感。'],
    zh: ['化工產品涉及合規、運輸與安全資料，買家對供應商可靠性與文件完整度高度敏感。'], en: ['Chemical sourcing requires compliance, logistics, and safety documentation, making reliability and documentation critical.'] },
    challenges: { cn: ['合规與文件（MSDS/TDS）要求高', '物流、危險品運輸限制', '买家重視供貨稳定與风险控管'],
    zh: ['合規與文件（MSDS/TDS）要求高', '物流、危險品運輸限制', '買家重視供貨穩定與風險控管'], en: ['High compliance documentation requirements', 'Logistics and hazardous shipping constraints', 'Buyers focus on stability and risk control'] },
    opportunities: { cn: ['區域供應鏈替代需求增加', '特用化學品具更高毛利', '在地经销商可加速滲透'],
    zh: ['區域供應鏈替代需求增加', '特用化學品具更高毛利', '在地經銷商可加速滲透'], en: ['Rising second-source demand regionally', 'Specialty chemicals offer higher margins', 'Local distributors accelerate penetration'] },
    strategy: { cn: ['先定义应用與行业，再找對應工厂與采购职位。', '在開發信中主动提供文件清单與合规聲明。', '以小量試用與样品策略降低導入門檻。'],
    zh: ['先定義應用與產業，再找對應工廠與採購職位。', '在開發信中主動提供文件清單與合規聲明。', '以小量試用與樣品策略降低導入門檻。'], en: ['Define application and industry first, then target relevant factories and roles.', 'Include documentation list and compliance statements in outreach.', 'Lower adoption barrier with trial quantities and samples.'] },
    ctaTitle: { cn: '想開發化工海外客戶？',
    zh: '想開發化工海外客戶？', en: 'Need more chemical export inquiries?' },
    ctaDesc: { cn: '我們可協助你建立名单並用合规導向的說法提高回复率。',
    zh: '我們可協助你建立名單並用合規導向的說法提高回覆率。', en: 'We help build lists and improve reply rates with compliance-led messaging.' },
    faq: [
      { q: { cn: '需要先準備哪些文件？',
    zh: '需要先準備哪些文件？', en: 'What documents should we prepare?' }, a: { cn: '建議準備 MSDS、TDS、COA 範例、套件裝規格與危險品運輸條件說明。',
    zh: '建議準備 MSDS、TDS、COA 範例、套件裝規格與危險品運輸條件說明。', en: 'Prepare MSDS, TDS, sample COA, packaging specs, and hazmat shipping terms.' } },
    ],
  },
  {
    slug: 'medical',
    title: { cn: '医疗行业外贸開發｜医疗器材與耗材海外买家開發',
    zh: '醫療產業外銷開發｜醫療器材與耗材海外買家開發', en: 'Export Lead Generation for Medical | Devices and Consumables' },
    description: { cn: '協助医疗器材與耗材企业開發海外經銷與品牌客戶，聚焦合规、质量與长期合作。',
    zh: '協助醫療器材與耗材企業開發海外經銷與品牌客戶，聚焦合規、品質與長期合作。', en: 'Generate overseas medical device leads for companies with compliance and trust-focused positioning.' },
    h1: { cn: '医疗行业外贸客戶開發',
    zh: '醫療產業外銷客戶開發', en: 'Export Lead Generation for Medical Device Companies' },
    introduction: { cn: ['医疗行业重視验证與风险管理。開發的关键是把质量與合规說清楚，並讓买家知道你能稳定供貨。'],
    zh: ['醫療產業重視驗證與風險管理。開發的關鍵是把品質與合規說清楚，並讓買家知道你能穩定供貨。'], en: ['Medical sourcing is compliance- and risk-driven. Outreach should clarify quality, certification, and supply stability.'] },
    challenges: { cn: ['验证門檻高（ISO13485 等）', '供应商审核嚴格、決策周期长', '买家重視臨床风险與一致性'],
    zh: ['驗證門檻高（ISO13485 等）', '供應商審核嚴格、決策周期長', '買家重視臨床風險與一致性'], en: ['High certification barriers', 'Strict supplier audits and long cycles', 'High emphasis on clinical risk and consistency'] },
    opportunities: { cn: ['全球医疗需求成长與老齡化', '品牌商尋找可靠的 OEM/ODM 夥伴', '特定耗材具稳定復購'],
    zh: ['全球醫療需求成長與老齡化', '品牌商尋找可靠的 OEM/ODM 夥伴', '特定耗材具穩定復購'], en: ['Growing global demand and aging population', 'Brands seek reliable OEM/ODM partners', 'Consumables create recurring orders'] },
    strategy: { cn: ['用案例與文件建立信任：验证、测试、质量流程。', '分层開發：经销商與品牌采购分開策略。', '以小量試單與合规数据套件推進導入。'],
    zh: ['用案例與文件建立信任：驗證、測試、品質流程。', '分層開發：經銷商與品牌採購分開策略。', '以小量試單與合規資料套件推進導入。'], en: ['Build trust with certifications, tests, and QC process.', 'Segment distributors vs brands with different sequences.', 'Use trial orders and compliance packs to move onboarding forward.'] },
    ctaTitle: { cn: '想開發医疗海外买家？',
    zh: '想開發醫療海外買家？', en: 'Need medical export leads?' },
    ctaDesc: { cn: '提交你的產品與目标市场，我們回复可行的開發方向與切入策略。',
    zh: '提交你的產品與目標市場，我們回覆可行的開發方向與切入策略。', en: 'Submit your product and markets. We’ll reply with a feasible entry and outreach strategy.' },
    faq: [
      { q: { cn: '沒有 FDA 也能先開發嗎？',
    zh: '沒有 FDA 也能先開發嗎？', en: 'Can we start outreach without FDA?' }, a: { cn: '可以先開發经销商/品牌端的需求與導入條件，但在报价與導入前仍需明確合规路徑。',
    zh: '可以先開發經銷商/品牌端的需求與導入條件，但在報價與導入前仍需明確合規路徑。', en: 'Yes, you can validate demand and onboarding requirements first, but compliance path must be clear before closing.' } },
    ],
  },
  {
    slug: 'automotive',
    title: { cn: '汽車行业外贸開發｜車用零件與供應鏈买家開發',
    zh: '汽車產業外銷開發｜車用零件與供應鏈買家開發', en: 'Export Lead Generation for Automotive | Parts and Supply Chain' },
    description: { cn: '協助車用零件與材料企业開發海外 Tier 1/Tier 2 與經銷渠道，提高高质量询盘。',
    zh: '協助車用零件與材料企業開發海外 Tier 1/Tier 2 與經銷通路，提高高品質詢價。', en: 'Generate overseas automotive leads for parts companies with quality and compliance-led outreach.' },
    h1: { cn: '汽車行业外贸客戶開發',
    zh: '汽車產業外銷客戶開發', en: 'Export Lead Generation for Automotive Suppliers' },
    introduction: { cn: ['車用供應鏈重視验证、质量與交期。有效開發要把你的製程能力與质量系統具體化。'],
    zh: ['車用供應鏈重視驗證、品質與交期。有效開發要把你的製程能力與品質系統具體化。'], en: ['Automotive supply chains require validation, quality and delivery performance. Outreach must quantify your capabilities and systems.'] },
    challenges: { cn: ['IATF 等體系要求', '導入周期长且审核多', '價格壓力與稳定供貨要求'],
    zh: ['IATF 等體系要求', '導入周期長且審核多', '價格壓力與穩定供貨要求'], en: ['Quality system requirements', 'Long onboarding with many audits', 'Price pressure and stable supply expectations'] },
    opportunities: { cn: ['新能源車帶動零部件替代與新需求', '區域供應鏈重組增加 Second Source', '售後市场與維修渠道需求稳定'],
    zh: ['新能源車帶動零元件替代與新需求', '區域供應鏈重組增加 Second Source', '售後市場與維修通路需求穩定'], en: ['EV growth drives new parts demand', 'Regional reshoring increases second-source needs', 'Aftermarket demand remains stable'] },
    strategy: { cn: ['用產品族群與应用场景切名单（如底盤、電系、內裝）。', '在開發信中提供质量體系與檢驗能力摘要。', '以项目式跟进節奏推進：需求确认→样品→测试→試單。'],
    zh: ['用產品族群與應用場景切名單（如底盤、電系、內裝）。', '在開發信中提供品質體系與檢驗能力摘要。', '以專案式跟進節奏推進：需求確認→樣品→測試→試單。'], en: ['Segment lists by product family and application.', 'Include QC system and inspection capability summary.', 'Use project-style follow-ups: requirement → sample → test → trial order.'] },
    ctaTitle: { cn: '想切入車用海外客戶？',
    zh: '想切入車用海外客戶？', en: 'Want to enter automotive supply chains?' },
    ctaDesc: { cn: '我們可協助你找到對應的采购角色與導入切點。',
    zh: '我們可協助你找到對應的採購角色與導入切點。', en: 'We help identify the right stakeholders and entry points for onboarding.' },
    faq: [
      { q: { cn: '你們會協助找 Tier 1 嗎？',
    zh: '你們會協助找 Tier 1 嗎？', en: 'Can you target Tier 1 buyers?' }, a: { cn: '可以，我們會依產品定位同時開發 Tier 1、Tier 2 與經銷渠道，建立多管道机会。',
    zh: '可以，我們會依產品定位同時開發 Tier 1、Tier 2 與經銷通路，建立多管道機會。', en: 'Yes. We can target Tier 1, Tier 2 and distribution channels based on your positioning to build multiple pipelines.' } },
    ],
  },
  {
    slug: 'industrial-equipment',
    title: { cn: '工业设备外贸開發｜工业设备與系統整合买家開發',
    zh: '工業設備外銷開發｜工業設備與系統整合買家開發', en: 'Export Lead Generation for Industrial Equipment | OEMs and Integrators' },
    description: { cn: '協助工业设备與系統企业開發海外 OEM 與系統整合商，提升询盘质量與成交率。',
    zh: '協助工業設備與系統企業開發海外 OEM 與系統整合商，提升詢價品質與成交率。', en: 'Generate overseas leads for industrial equipment companies targeting OEMs and integrators.' },
    h1: { cn: '工业设备外贸客戶開發',
    zh: '工業設備外銷客戶開發', en: 'Export Lead Generation for Industrial Equipment' },
    introduction: { cn: ['工业设备的成交关键是「適配」與「導入」。開發要讓买家快速理解你能解決什麼、如何導入、導入成本是多少。'],
    zh: ['工業設備的成交關鍵是「適配」與「導入」。開發要讓買家快速理解你能解決什麼、如何導入、導入成本是多少。'], en: ['Industrial equipment deals are won on fit and onboarding. Outreach should clarify use cases, integration steps, and total cost.'] },
    challenges: { cn: ['买家需求差異大、客製化多', '需要技術對接與導入支援', '跨國售後與備品供應要求'],
    zh: ['買家需求差異大、客製化多', '需要技術對接與導入支援', '跨國售後與備品供應要求'], en: ['Diverse requirements and customization', 'Technical integration support needed', 'After-sales and spare parts expectations'] },
    opportunities: { cn: ['製造數位化與節能需求上升', '系統整合商與代理可快速扩张', '海外中小工厂升級潮'],
    zh: ['製造數位化與節能需求上升', '系統整合商與代理可快速擴張', '海外中小工廠升級潮'], en: ['Rising digitization and energy saving demand', 'Integrators and agents accelerate expansion', 'SME upgrade wave globally'] },
    strategy: { cn: ['把设备分成可复制的解決方案套件（Use Case）來寫內容與開發。', '在文案中加入導入條件與数据需求，降低來回溝通。', '建立「案例＋規格＋導入流程」三件套，提高信任與回复率。'],
    zh: ['把設備分成可複製的解決方案套件（Use Case）來寫內容與開發。', '在文案中加入導入條件與資料需求，降低來回溝通。', '建立「案例＋規格＋導入流程」三件套，提高信任與回覆率。'], en: ['Package messaging by repeatable use cases.', 'Include integration requirements to reduce back-and-forth.', 'Use a trio: case + specs + onboarding steps to build trust and replies.'] },
    ctaTitle: { cn: '想增加工业设备海外询盘？',
    zh: '想增加工業設備海外詢價？', en: 'Want more industrial equipment inquiries?' },
    ctaDesc: { cn: '我們可協助你规划內容架構與開發節奏，建立稳定 inbound + outbound 的成长飛輪。',
    zh: '我們可協助你規劃內容架構與開發節奏，建立穩定 inbound + outbound 的成長飛輪。', en: 'We help structure content and outreach cadence to build a stable inbound + outbound growth flywheel.' },
    faq: [
      { q: { cn: '我們產品很客製，適合做 SEO 嗎？',
    zh: '我們產品很客製，適合做 SEO 嗎？', en: 'Our solutions are customized. Is SEO still worth it?' }, a: { cn: '適合。用「应用场景」與「行业問題」做內容結構，比用規格堆砌更能帶來高质量询盘。',
    zh: '適合。用「應用情境」與「產業問題」做內容結構，比用規格堆砌更能帶來高品質詢價。', en: 'Yes. Organizing content by use cases and industry problems attracts higher-quality leads than spec-heavy pages.' } },
    ],
  },
]

export function getSeoIndustry(slug: string) {
  return seoIndustries.find(i => i.slug === slug)
}

