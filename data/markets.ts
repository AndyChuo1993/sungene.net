import { Lang } from '@/lib/i18n'

export interface MarketData {
  slug: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  h1: Record<Lang, string>
  content: Record<Lang, string>
  challenges: Record<Lang, string[]>
  solutions: Record<Lang, string[]>
  buyerTypes: Record<Lang, string[]>
  strategy: Record<Lang, string[]>
  faq: {
    question: Record<Lang, string>
    answer: Record<Lang, string>
  }[]
}

export const markets: MarketData[] = [
  {
    slug: 'europe',
    title: {
      zh: '歐洲市場開發服務 | 德國、法國、義大利外銷客戶開發',
      en: 'European Market Development | Export to Germany, France, Italy'
    },
    description: {
      zh: '專為台灣製造商建立的歐洲市場開發服務。針對歐盟法規、GDPR 與商務文化，協助您開發德國、法國、義大利等地的優質買家。',
      en: 'Specialized European market development for manufacturers. Navigate EU regulations, GDPR, and business culture to find premium buyers in Germany, France, Italy.'
    },
    h1: {
      zh: '歐洲市場外銷客戶開發服務',
      en: 'European Market Export Development Service'
    },
    content: {
      zh: '歐洲市場重視品質、驗證與長期合作關係。我們協助您克服語言障礙與時差問題，直接與歐洲採購決策者建立聯繫。',
      en: 'The European market values quality, certification, and long-term relationships. We help you overcome language barriers and time zones to connect directly with European purchasing decision-makers.'
    },
    challenges: {
      zh: ['語言隔閡（德語、法語、義大利語）', '嚴格的環保與品質法規（RoHS, CE）', '決策週期長，重視信任感'],
      en: ['Language barriers (German, French, Italian)', 'Strict environmental and quality regulations (RoHS, CE)', 'Long decision cycles, trust-based business']
    },
    solutions: {
      zh: ['在地化開發信撰寫', '精準鎖定具備進口能力的買家', '協助建立符合歐規的品牌形象'],
      en: ['Localized outreach scripts', 'Targeting buyers with import capacity', 'Building EU-compliant brand image']
    },
    buyerTypes: {
      zh: ['大型進口商與分銷商 (Distributors)', '品牌商 (OEM/ODM)', '連鎖零售採購 (Retail Chains)', '製造業終端用戶 (End-users)'],
      en: ['Large Importers & Distributors', 'Brand Owners (OEM/ODM)', 'Retail Chains', 'Industrial End-users']
    },
    strategy: {
      zh: ['多語種開發：針對不同國家使用當地語言（德/法/西/義）進行溝通。', '強調合規性：在開發信中主動提及 CE/RoHS/ISO 驗證。', '展會結合：配合歐洲主要展會（如 Hannover Messe）進行展前邀約。'],
      en: ['Multilingual Outreach: Communicate in local languages (DE/FR/ES/IT).', 'Highlight Compliance: Mention CE/RoHS/ISO certifications upfront.', 'Trade Show Integration: Pre-show outreach for major events like Hannover Messe.']
    },
    faq: [
      {
        question: { zh: '你們有歐洲當地的買家名單嗎？', en: 'Do you have local buyer lists in Europe?' },
        answer: { zh: '有的，我們的資料函式庫覆蓋全歐洲主要工業國家，套件括德國、法國、義大利、西班牙、波蘭等。', en: 'Yes, our database covers major industrial countries including Germany, France, Italy, Spain, and Poland.' }
      },
      {
        question: { zh: '歐洲客戶開發需要多久？', en: 'How long does it take to develop European clients?' },
        answer: { zh: '歐洲客戶決策較嚴謹，通常需要 2-3 個月的持續跟進與建立信任，但一旦成交，訂單通常較為穩定。', en: 'European clients are rigorous. It typically takes 2-3 months of follow-up to build trust, but orders are usually stable once secured.' }
      },
      {
        question: { zh: '如何處理 GDPR 問題？', en: 'How do you handle GDPR?' },
        answer: { zh: '我們嚴格遵守 GDPR 規範，僅針對 B2B 商務目的進行合規的資料收集與聯繫，並提供明確的退訂選項。', en: 'We strictly adhere to GDPR, collecting data and contacting only for B2B purposes with clear opt-out options.' }
      }
    ]
  },
  {
    slug: 'north-america',
    title: {
      zh: '北美市場開發服務 | 美國、加拿大外銷客戶開發',
      en: 'North American Market Development | Export to USA & Canada'
    },
    description: {
      zh: '協助台灣企業進軍美國與加拿大市場。針對北美大型採購商與批發商，提供精準名單與高效開發服務。',
      en: 'Helping companies expand into USA & Canada. Providing precise lists and efficient outreach for North American large-scale buyers and wholesalers.'
    },
    h1: {
      zh: '北美市場外銷客戶開發服務',
      en: 'North American Market Export Development Service'
    },
    content: {
      zh: '北美是全球最大的消費市場，競爭激烈但機會巨大。我們協助您直接對接美國與加拿大的進口商、批發商與大型零售通路。',
      en: 'North America is the world\'s largest consumer market. We help you connect directly with importers, wholesalers, and large retail channels in the US and Canada.'
    },
    challenges: {
      zh: ['市場競爭激烈，價格敏感度兩極', '需要快速回應與高效率溝通', '物流與供應鏈要求高'],
      en: ['Intense competition, polarized price sensitivity', 'Demand for fast response and efficient communication', 'High logistics and supply chain requirements']
    },
    solutions: {
      zh: ['鎖定高潛力中小企業與大型批發商', '強調供應鏈優勢與交期承諾', '高效的 Email 與 LinkedIn 混合開發'],
      en: ['Targeting high-potential SMEs and large wholesalers', 'Emphasizing supply chain advantages and delivery promises', 'Efficient hybrid Email & LinkedIn outreach']
    },
    buyerTypes: {
      zh: ['全美性批發商 (National Wholesalers)', '區域經銷商 (Regional Distributors)', '大型連鎖零售商 (Big Box Retailers)', '品牌商 (Private Label)'],
      en: ['National Wholesalers', 'Regional Distributors', 'Big Box Retailers', 'Private Label Brands']
    },
    strategy: {
      zh: ['LinkedIn 精準開發：針對採購經理與產品經理進行直接聯繫。', '強調服務與物流：北美買家重視交期與售後服務。', '樣品策略：快速提供樣品以縮短評估週期。'],
      en: ['LinkedIn Targeting: Direct outreach to Purchasing and Product Managers.', 'Service & Logistics: Emphasize lead times and after-sales support.', 'Sampling Strategy: Rapid sample delivery to shorten evaluation cycles.']
    },
    faq: [
      {
        question: { zh: '美國市場主要開發哪些類別型的客戶？', en: 'What types of clients do you target in the US?' },
        answer: { zh: '主要套件括品牌商（OEM/ODM需求）、大型進口批發商、以及區域型經銷商。', en: 'Mainly brand owners (OEM/ODM needs), large import wholesalers, and regional distributors.' }
      },
      {
        question: { zh: '時差問題如何解決？', en: 'How do you handle the time difference?' },
        answer: { zh: '我們的系統會設定在北美上班時間寄送開發信，並協助您設定自動回覆或安排晚間會議。', en: 'Our system schedules emails during NA working hours and helps you set up auto-replies or arrange evening meetings.' }
      },
      {
        question: { zh: '美國買家看重什麼？', en: 'What do US buyers value most?' },
        answer: { zh: '除了價格，他們非常看重溝通效率、供應鏈透明度以及產品責任險等風險控管。', en: 'Besides price, they value communication efficiency, supply chain transparency, and risk management like product liability insurance.' }
      }
    ]
  },
  {
    slug: 'japan',
    title: {
      zh: '日本市場開發服務 | 日本外銷客戶開發',
      en: 'Japanese Market Development | Export to Japan'
    },
    description: {
      zh: '專為日本市場建立的 B2B 開發服務。克服語言與文化障礙，打入封閉但忠誠度極高的日本供應鏈。',
      en: 'B2B development service tailored for Japan. Overcome language and cultural barriers to enter the closed but highly loyal Japanese supply chain.'
    },
    h1: {
      zh: '日本市場外銷客戶開發服務',
      en: 'Japanese Market Export Development Service'
    },
    content: {
      zh: '日本市場以高品質要求與長期合作聞名。我們擁有日語開發團隊與在地資料函式庫，協助您展現專業度，贏得日本客戶的信任。',
      en: 'The Japanese market is known for high quality standards and long-term partnerships. Our Japanese-speaking team and local database help you demonstrate professionalism and win trust.'
    },
    challenges: {
      zh: ['語言障礙極高，英語通用度低', '商業文化封閉，重視引薦與信任', '對品質細節要求極致'],
      en: ['High language barrier, low English proficiency', 'Closed business culture, valuing referrals and trust', 'Extreme attention to quality details']
    },
    solutions: {
      zh: ['日文母語等級的開發信撰寫', '遵循日本商務禮儀的溝通流程', '強調品質控管與企業信譽'],
      en: ['Native-level Japanese outreach scripts', 'Communication following Japanese business etiquette', 'Emphasizing quality control and corporate reputation']
    },
    buyerTypes: {
      zh: ['商社 (Trading Companies)', '專門商社 (Specialized Traders)', '大型製造商採購部 (Manufacturers)', '批發問屋 (Wholesalers)'],
      en: ['Trading Companies (Sogo Shosha)', 'Specialized Traders (Senmon Shosha)', 'Manufacturing Procurement', 'Wholesalers']
    },
    strategy: {
      zh: ['日文開發信：絕對精準的敬語與商務格式。', '耐心跟進：配合日本企業的層層決策流程，保持禮貌的長線跟進。', '重視細節：提供詳盡的產品規格書與公司介紹資料。'],
      en: ['Japanese Outreach: Flawless keigo and business formatting.', 'Patient Follow-up: Align with hierarchical decision processes with polite persistence.', 'Detail Oriented: Provide exhaustive spec sheets and company profiles.']
    },
    faq: [
      {
        question: { zh: '你們能用日文進行開發嗎？', en: 'Can you conduct outreach in Japanese?' },
        answer: { zh: '可以，我們有專業的日文開發流程，確保用語精準得體，符合日本商務習慣。', en: 'Yes, we have professional Japanese outreach processes ensuring precise and polite language fitting business customs.' }
      },
      {
        question: { zh: '日本客戶通常多久會回覆？', en: 'How long do Japanese clients usually take to reply?' },
        answer: { zh: '日本客戶回覆較慢，通常需要經過內部層層討論。耐心與持續展現誠意是關鍵。', en: 'Japanese clients are slower to reply due to internal discussions. Patience and persistent sincerity are key.' }
      },
      {
        question: { zh: '需要去日本拜訪嗎？', en: 'Is visiting Japan necessary?' },
        answer: { zh: '在建立初步信任後，實地拜訪或視訊會議對於成交非常有幫助，我們能協助安排行程。', en: 'After initial trust is built, visiting or video calls are helpful for closing. We can assist with scheduling.' }
      }
    ]
  },
  {
    slug: 'southeast-asia',
    title: {
      zh: '東南亞市場開發服務 | 越南、泰國、印尼外銷開發',
      en: 'Southeast Asia Market Development | Export to Vietnam, Thailand, Indonesia'
    },
    description: {
      zh: '把握供應鏈轉移商機，開發東南亞新興市場。針對越南、泰國、印尼、馬來西亞等地，尋找製造商與大型代理商。',
      en: 'Seize supply chain shift opportunities. Develop emerging markets in Vietnam, Thailand, Indonesia, Malaysia, targeting manufacturers and large agents.'
    },
    h1: {
      zh: '東南亞市場外銷客戶開發服務',
      en: 'Southeast Asia Market Export Development Service'
    },
    content: {
      zh: '隨著全球供應鏈重組，東南亞成為新的世界工廠與消費市場。我們協助您在這些快速成長的經濟體中，搶先佈局並建立通路。',
      en: 'With global supply chain restructuring, Southeast Asia is the new world factory. We help you establish channels early in these fast-growing economies.'
    },
    challenges: {
      zh: ['市場分散，各國語言文化不同', '信用風險較高，需謹慎篩選', '價格競爭激烈'],
      en: ['Fragmented market with different languages/cultures', 'Higher credit risk, requiring careful screening', 'Intense price competition']
    },
    solutions: {
      zh: ['針對各國主要產業聚落進行開發', '結合 WhatsApp 與 Email 的靈活溝通', '鎖定具規模的正規工廠與代理商'],
      en: ['Targeting major industrial clusters in each country', 'Flexible communication via WhatsApp & Email', 'Focusing on established factories and agents']
    },
    buyerTypes: {
      zh: ['台商/外商設廠採購 (FDI Factories)', '在地大型代理商 (Local Agents)', '工程承套件商 (Contractors)', '政府標案供應商 (Govt Suppliers)'],
      en: ['FDI Factories', 'Local Agents', 'Contractors', 'Government Suppliers']
    },
    strategy: {
      zh: ['即時通訊工具：善用 WhatsApp / Zalo / Line 進行快速溝通。', '在地化資料：提供當地語言的型錄或網站版本。', '信用徵信：在正式交易前進行嚴格的背景調查。'],
      en: ['Instant Messaging: Utilize WhatsApp/Zalo/Line for quick comms.', 'Localized Assets: Provide catalogs/sites in local languages.', 'Credit Check: Strict background checks before formal transactions.']
    },
    faq: [
      {
        question: { zh: '東南亞市場是用英文開發嗎？', en: 'Is outreach in Southeast Asia done in English?' },
        answer: { zh: '大部分商業溝通可用英文，但在越南或泰國，若能提供當地語言的行銷資料會更有優勢。', en: 'Most business communication is in English, but localized marketing materials in Vietnam or Thailand add advantage.' }
      },
      {
        question: { zh: '你們如何確認買家真實性？', en: 'How do you verify buyer authenticity?' },
        answer: { zh: '我們會透過海關資料確認其進出口紀錄，並檢查其工廠登記與線上評價。', en: 'We verify import/export records via customs data and check factory registration and online reviews.' }
      },
      {
        question: { zh: '適合哪些產業？', en: 'Which industries are suitable?' },
        answer: { zh: '機械設備、工業材料、自動化零元件、電子元件等 B2B 產品在東南亞需求強勁。', en: 'Machinery, industrial materials, automation parts, and electronic components have strong demand.' }
      }
    ]
  }
]

export function getMarket(slug: string): MarketData | undefined {
  return markets.find(m => m.slug === slug)
}
