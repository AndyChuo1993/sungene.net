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
      cn: '歐洲市场開發服务 | 德国、法國、義大利外贸客戶開發',
    zh: '歐洲市場開發服務 | 德國、法國、義大利外銷客戶開發',
      en: 'European Market Development | Export to Germany, France, Italy'
    },
    description: {
      cn: '專為外贸企业建立的歐洲市场開發服务。針對欧盟法規、GDPR 與商務文化，協助您開發德国、法國、義大利等地的優質买家。',
    zh: '專為外銷企業建立的歐洲市場開發服務。針對歐盟法規、GDPR 與商務文化，協助您開發德國、法國、義大利等地的優質買家。',
      en: 'Specialized European market development for companies. Navigate EU regulations, GDPR, and business culture to find premium buyers in Germany, France, Italy.'
    },
    h1: {
      cn: '歐洲市场外贸客戶開發服务',
    zh: '歐洲市場外銷客戶開發服務',
      en: 'European Market Export Development Service'
    },
    content: {
      cn: '歐洲市场重視质量、验证與长期合作關係。我們協助您克服語言障礙與時差問題，直接與歐洲采购決策者建立聯繫。',
    zh: '歐洲市場重視品質、驗證與長期合作關係。我們協助您克服語言障礙與時差問題，直接與歐洲採購決策者建立聯繫。',
      en: 'The European market values quality, certification, and long-term relationships. We help you overcome language barriers and time zones to connect directly with European purchasing decision-makers.'
    },
    challenges: {
      cn: ['語言隔閡（德語、法語、義大利語）', '嚴格的環保與质量法規（RoHS, CE）', '決策周期长，重視信任感'],
    zh: ['語言隔閡（德語、法語、義大利語）', '嚴格的環保與品質法規（RoHS, CE）', '決策週期長，重視信任感'],
      en: ['Language barriers (German, French, Italian)', 'Strict environmental and quality regulations (RoHS, CE)', 'Long decision cycles, trust-based business']
    },
    solutions: {
      cn: ['在地化開發信撰寫', '精准鎖定具備進口能力的买家', '協助建立符合歐規的品牌形象'],
    zh: ['在地化開發信撰寫', '精準鎖定具備進口能力的買家', '協助建立符合歐規的品牌形象'],
      en: ['Localized outreach scripts', 'Targeting buyers with import capacity', 'Building EU-compliant brand image']
    },
    buyerTypes: {
      cn: ['大型进口商與分銷商 (Distributors)', '品牌商 (OEM/ODM)', '連鎖零售采购 (Retail Chains)', '企業终端用戶 (End-users)'],
    zh: ['大型進口商與分銷商 (Distributors)', '品牌商 (OEM/ODM)', '連鎖零售採購 (Retail Chains)', '企業終端用戶 (End-users)'],
      en: ['Large Importers & Distributors', 'Brand Owners (OEM/ODM)', 'Retail Chains', 'Industrial End-users']
    },
    strategy: {
      cn: ['多語種開發：針對不同國家使用當地語言（德/法/西/義）進行溝通。', '強調合规性：在開發信中主动提及 CE/RoHS/ISO 验证。', '展会結合：配合歐洲主要展会（如 Hannover Messe）進行展前邀约。'],
    zh: ['多語種開發：針對不同國家使用當地語言（德/法/西/義）進行溝通。', '強調合規性：在開發信中主動提及 CE/RoHS/ISO 驗證。', '展會結合：配合歐洲主要展會（如 Hannover Messe）進行展前邀約。'],
      en: ['Multilingual Outreach: Communicate in local languages (DE/FR/ES/IT).', 'Highlight Compliance: Mention CE/RoHS/ISO certifications upfront.', 'Trade Show Integration: Pre-show outreach for major events like Hannover Messe.']
    },
    faq: [
      {
        question: { cn: '你們有歐洲當地的买家名单嗎？',
    zh: '你們有歐洲當地的買家名單嗎？', en: 'Do you have local buyer lists in Europe?' },
        answer: { cn: '有的，我們的数据数据库覆盖全歐洲主要工业國家，套件括德国、法國、義大利、西班牙、波蘭等。',
    zh: '有的，我們的資料函式庫覆蓋全歐洲主要工業國家，套件括德國、法國、義大利、西班牙、波蘭等。', en: 'Yes, our database covers major industrial countries including Germany, France, Italy, Spain, and Poland.' }
      },
      {
        question: { cn: '歐洲客戶開發需要多久？',
    zh: '歐洲客戶開發需要多久？', en: 'How long does it take to develop European clients?' },
        answer: { cn: '歐洲客戶決策較严谨，通常需要 2-3 個月的持续跟进與建立信任，但一旦成交，訂單通常較為稳定。',
    zh: '歐洲客戶決策較嚴謹，通常需要 2-3 個月的持續跟進與建立信任，但一旦成交，訂單通常較為穩定。', en: 'European clients are rigorous. It typically takes 2-3 months of follow-up to build trust, but orders are usually stable once secured.' }
      },
      {
        question: { cn: '如何處理 GDPR 問題？',
    zh: '如何處理 GDPR 問題？', en: 'How do you handle GDPR?' },
        answer: { cn: '我們嚴格遵守 GDPR 规范，僅針對 B2B 商務目的進行合规的数据收集與聯繫，並提供明確的退訂選項。',
    zh: '我們嚴格遵守 GDPR 規範，僅針對 B2B 商務目的進行合規的資料收集與聯繫，並提供明確的退訂選項。', en: 'We strictly adhere to GDPR, collecting data and contacting only for B2B purposes with clear opt-out options.' }
      }
    ]
  },
  {
    slug: 'north-america',
    title: {
      cn: '北美市场開發服务 | 美国、加拿大外贸客戶開發',
    zh: '北美市場開發服務 | 美國、加拿大外銷客戶開發',
      en: 'North American Market Development | Export to USA & Canada'
    },
    description: {
      cn: '協助外贸企业進軍美国與加拿大市场。針對北美大型采购商與批发商，提供精准名单與高效開發服务。',
    zh: '協助外銷企業進軍美國與加拿大市場。針對北美大型採購商與批發商，提供精準名單與高效開發服務。',
      en: 'Helping companies expand into USA & Canada. Providing precise lists and efficient outreach for North American large-scale buyers and wholesalers.'
    },
    h1: {
      cn: '北美市场外贸客戶開發服务',
    zh: '北美市場外銷客戶開發服務',
      en: 'North American Market Export Development Service'
    },
    content: {
      cn: '北美是全球最大的消費市场，竞争激烈但机会巨大。我們協助您直接對接美国與加拿大的进口商、批发商與大型零售渠道。',
    zh: '北美是全球最大的消費市場，競爭激烈但機會巨大。我們協助您直接對接美國與加拿大的進口商、批發商與大型零售通路。',
      en: 'North America is the world\'s largest consumer market. We help you connect directly with importers, wholesalers, and large retail channels in the US and Canada.'
    },
    challenges: {
      cn: ['市场竞争激烈，價格敏感度兩極', '需要快速回应與高效率溝通', '物流與供應鏈要求高'],
    zh: ['市場競爭激烈，價格敏感度兩極', '需要快速回應與高效率溝通', '物流與供應鏈要求高'],
      en: ['Intense competition, polarized price sensitivity', 'Demand for fast response and efficient communication', 'High logistics and supply chain requirements']
    },
    solutions: {
      cn: ['鎖定高潛力中小企业與大型批发商', '強調供應鏈優勢與交期承諾', '高效的 Email 與 LinkedIn 混合開發'],
    zh: ['鎖定高潛力中小企業與大型批發商', '強調供應鏈優勢與交期承諾', '高效的 Email 與 LinkedIn 混合開發'],
      en: ['Targeting high-potential SMEs and large wholesalers', 'Emphasizing supply chain advantages and delivery promises', 'Efficient hybrid Email & LinkedIn outreach']
    },
    buyerTypes: {
      cn: ['全美性批发商 (National Wholesalers)', '區域经销商 (Regional Distributors)', '大型連鎖零售商 (Big Box Retailers)', '品牌商 (Private Label)'],
    zh: ['全美性批發商 (National Wholesalers)', '區域經銷商 (Regional Distributors)', '大型連鎖零售商 (Big Box Retailers)', '品牌商 (Private Label)'],
      en: ['National Wholesalers', 'Regional Distributors', 'Big Box Retailers', 'Private Label Brands']
    },
    strategy: {
      cn: ['LinkedIn 精准開發：針對采购經理與產品經理進行直接聯繫。', '強調服务與物流：北美买家重視交期與售後服务。', '样品策略：快速提供样品以缩短评估周期。'],
    zh: ['LinkedIn 精準開發：針對採購經理與產品經理進行直接聯繫。', '強調服務與物流：北美買家重視交期與售後服務。', '樣品策略：快速提供樣品以縮短評估週期。'],
      en: ['LinkedIn Targeting: Direct outreach to Purchasing and Product Managers.', 'Service & Logistics: Emphasize lead times and after-sales support.', 'Sampling Strategy: Rapid sample delivery to shorten evaluation cycles.']
    },
    faq: [
      {
        question: { cn: '美国市场主要開發哪些类别型的客戶？',
    zh: '美國市場主要開發哪些類別型的客戶？', en: 'What types of clients do you target in the US?' },
        answer: { cn: '主要套件括品牌商（OEM/ODM需求）、大型進口批发商、以及區域型经销商。',
    zh: '主要套件括品牌商（OEM/ODM需求）、大型進口批發商、以及區域型經銷商。', en: 'Mainly brand owners (OEM/ODM needs), large import wholesalers, and regional distributors.' }
      },
      {
        question: { cn: '時差問題如何解決？',
    zh: '時差問題如何解決？', en: 'How do you handle the time difference?' },
        answer: { cn: '我們的系統會設定在北美上班時間寄送開發信，並協助您設定自動回复或安排晚間会议。',
    zh: '我們的系統會設定在北美上班時間寄送開發信，並協助您設定自動回覆或安排晚間會議。', en: 'Our system schedules emails during NA working hours and helps you set up auto-replies or arrange evening meetings.' }
      },
      {
        question: { cn: '美国买家看重什麼？',
    zh: '美國買家看重什麼？', en: 'What do US buyers value most?' },
        answer: { cn: '除了價格，他們非常看重溝通效率、供應鏈透明度以及產品責任險等风险控管。',
    zh: '除了價格，他們非常看重溝通效率、供應鏈透明度以及產品責任險等風險控管。', en: 'Besides price, they value communication efficiency, supply chain transparency, and risk management like product liability insurance.' }
      }
    ]
  },
  {
    slug: 'japan',
    title: {
      cn: '日本市场開發服务 | 日本外贸客戶開發',
    zh: '日本市場開發服務 | 日本外銷客戶開發',
      en: 'Japanese Market Development | Export to Japan'
    },
    description: {
      cn: '專為日本市场建立的 B2B 開發服务。克服語言與文化障礙，打入封閉但忠誠度極高的日本供應鏈。',
    zh: '專為日本市場建立的 B2B 開發服務。克服語言與文化障礙，打入封閉但忠誠度極高的日本供應鏈。',
      en: 'B2B development service tailored for Japan. Overcome language and cultural barriers to enter the closed but highly loyal Japanese supply chain.'
    },
    h1: {
      cn: '日本市场外贸客戶開發服务',
    zh: '日本市場外銷客戶開發服務',
      en: 'Japanese Market Export Development Service'
    },
    content: {
      cn: '日本市场以高质量要求與长期合作聞名。我們擁有日語開發团队與在地数据数据库，協助您展現專業度，贏得日本客戶的信任。',
    zh: '日本市場以高品質要求與長期合作聞名。我們擁有日語開發團隊與在地資料函式庫，協助您展現專業度，贏得日本客戶的信任。',
      en: 'The Japanese market is known for high quality standards and long-term partnerships. Our Japanese-speaking team and local database help you demonstrate professionalism and win trust.'
    },
    challenges: {
      cn: ['語言障礙極高，英語通用度低', '商業文化封閉，重視引薦與信任', '對质量细節要求極致'],
    zh: ['語言障礙極高，英語通用度低', '商業文化封閉，重視引薦與信任', '對品質細節要求極致'],
      en: ['High language barrier, low English proficiency', 'Closed business culture, valuing referrals and trust', 'Extreme attention to quality details']
    },
    solutions: {
      cn: ['日文母語等級的開發信撰寫', '遵循日本商務禮儀的溝通流程', '強調质量控管與企业信誉'],
    zh: ['日文母語等級的開發信撰寫', '遵循日本商務禮儀的溝通流程', '強調品質控管與企業信譽'],
      en: ['Native-level Japanese outreach scripts', 'Communication following Japanese business etiquette', 'Emphasizing quality control and corporate reputation']
    },
    buyerTypes: {
      cn: ['商社 (Trading Companies)', '專門商社 (Specialized Traders)', '大型企业采购部 (Companies)', '批发問屋 (Wholesalers)'],
    zh: ['商社 (Trading Companies)', '專門商社 (Specialized Traders)', '大型企業採購部 (Companies)', '批發問屋 (Wholesalers)'],
      en: ['Trading Companies (Sogo Shosha)', 'Specialized Traders (Senmon Shosha)', 'Manufacturing Procurement', 'Wholesalers']
    },
    strategy: {
      cn: ['日文開發信：絕對精准的敬語與商務格式。', '耐心跟进：配合日本企业的層層決策流程，保持禮貌的长線跟进。', '重視细節：提供詳盡的產品規格書與公司介紹数据。'],
    zh: ['日文開發信：絕對精準的敬語與商務格式。', '耐心跟進：配合日本企業的層層決策流程，保持禮貌的長線跟進。', '重視細節：提供詳盡的產品規格書與公司介紹資料。'],
      en: ['Japanese Outreach: Flawless keigo and business formatting.', 'Patient Follow-up: Align with hierarchical decision processes with polite persistence.', 'Detail Oriented: Provide exhaustive spec sheets and company profiles.']
    },
    faq: [
      {
        question: { cn: '你們能用日文進行開發嗎？',
    zh: '你們能用日文進行開發嗎？', en: 'Can you conduct outreach in Japanese?' },
        answer: { cn: '可以，我們有專業的日文開發流程，確保用語精准得體，符合日本商務習慣。',
    zh: '可以，我們有專業的日文開發流程，確保用語精準得體，符合日本商務習慣。', en: 'Yes, we have professional Japanese outreach processes ensuring precise and polite language fitting business customs.' }
      },
      {
        question: { cn: '日本客戶通常多久會回复？',
    zh: '日本客戶通常多久會回覆？', en: 'How long do Japanese clients usually take to reply?' },
        answer: { cn: '日本客戶回复較慢，通常需要經過內部層層討論。耐心與持续展現誠意是关键。',
    zh: '日本客戶回覆較慢，通常需要經過內部層層討論。耐心與持續展現誠意是關鍵。', en: 'Japanese clients are slower to reply due to internal discussions. Patience and persistent sincerity are key.' }
      },
      {
        question: { cn: '需要去日本拜訪嗎？',
    zh: '需要去日本拜訪嗎？', en: 'Is visiting Japan necessary?' },
        answer: { cn: '在建立初步信任後，實地拜訪或視訊会议對於成交非常有幫助，我們能協助安排行程。',
    zh: '在建立初步信任後，實地拜訪或視訊會議對於成交非常有幫助，我們能協助安排行程。', en: 'After initial trust is built, visiting or video calls are helpful for closing. We can assist with scheduling.' }
      }
    ]
  },
  {
    slug: 'southeast-asia',
    title: {
      cn: '东南亚市场開發服务 | 越南、泰國、印尼外贸開發',
    zh: '東南亞市場開發服務 | 越南、泰國、印尼外銷開發',
      en: 'Southeast Asia Market Development | Export to Vietnam, Thailand, Indonesia'
    },
    description: {
      cn: '把握供應鏈轉移商机，開發东南亚新興市场。針對越南、泰國、印尼、馬來西亞等地，尋找企业與大型代理商。',
    zh: '把握供應鏈轉移商機，開發東南亞新興市場。針對越南、泰國、印尼、馬來西亞等地，尋找企業與大型代理商。',
      en: 'Seize supply chain shift opportunities. Develop emerging markets in Vietnam, Thailand, Indonesia, Malaysia, targeting companies and large agents.'
    },
    h1: {
      cn: '东南亚市场外贸客戶開發服务',
    zh: '東南亞市場外銷客戶開發服務',
      en: 'Southeast Asia Market Export Development Service'
    },
    content: {
      cn: '隨著全球供應鏈重組，东南亚成為新的世界工厂與消費市场。我們協助您在這些快速成长的經濟體中，搶先佈局並建立渠道。',
    zh: '隨著全球供應鏈重組，東南亞成為新的世界工廠與消費市場。我們協助您在這些快速成長的經濟體中，搶先佈局並建立通路。',
      en: 'With global supply chain restructuring, Southeast Asia is the new world factory. We help you establish channels early in these fast-growing economies.'
    },
    challenges: {
      cn: ['市场分散，各國語言文化不同', '信用风险較高，需謹慎筛选', '價格竞争激烈'],
    zh: ['市場分散，各國語言文化不同', '信用風險較高，需謹慎篩選', '價格競爭激烈'],
      en: ['Fragmented market with different languages/cultures', 'Higher credit risk, requiring careful screening', 'Intense price competition']
    },
    solutions: {
      cn: ['針對各國主要行业聚落進行開發', '結合 WhatsApp 與 Email 的靈活溝通', '鎖定具规模的正規工厂與代理商'],
    zh: ['針對各國主要產業聚落進行開發', '結合 WhatsApp 與 Email 的靈活溝通', '鎖定具規模的正規工廠與代理商'],
      en: ['Targeting major industrial clusters in each country', 'Flexible communication via WhatsApp & Email', 'Focusing on established factories and agents']
    },
    buyerTypes: {
      cn: ['台商/外商設廠采购 (FDI Factories)', '在地大型代理商 (Local Agents)', '工程承套件商 (Contractors)', '政府標案供应商 (Govt Suppliers)'],
    zh: ['台商/外商設廠採購 (FDI Factories)', '在地大型代理商 (Local Agents)', '工程承套件商 (Contractors)', '政府標案供應商 (Govt Suppliers)'],
      en: ['FDI Factories', 'Local Agents', 'Contractors', 'Government Suppliers']
    },
    strategy: {
      cn: ['即時通訊工具：善用 WhatsApp / Zalo / Line 進行快速溝通。', '在地化数据：提供當地語言的型錄或網站版本。', '信用徵信：在正式交易前進行嚴格的背景調查。'],
    zh: ['即時通訊工具：善用 WhatsApp / Zalo / Line 進行快速溝通。', '在地化資料：提供當地語言的型錄或網站版本。', '信用徵信：在正式交易前進行嚴格的背景調查。'],
      en: ['Instant Messaging: Utilize WhatsApp/Zalo/Line for quick comms.', 'Localized Assets: Provide catalogs/sites in local languages.', 'Credit Check: Strict background checks before formal transactions.']
    },
    faq: [
      {
        question: { cn: '东南亚市场是用英文開發嗎？',
    zh: '東南亞市場是用英文開發嗎？', en: 'Is outreach in Southeast Asia done in English?' },
        answer: { cn: '大部分商業溝通可用英文，但在越南或泰國，若能提供當地語言的营销数据會更有優勢。',
    zh: '大部分商業溝通可用英文，但在越南或泰國，若能提供當地語言的行銷資料會更有優勢。', en: 'Most business communication is in English, but localized marketing materials in Vietnam or Thailand add advantage.' }
      },
      {
        question: { cn: '你們如何确认买家真實性？',
    zh: '你們如何確認買家真實性？', en: 'How do you verify buyer authenticity?' },
        answer: { cn: '我們會通过海關数据确认其進出口记录，並檢查其工厂登記與線上評價。',
    zh: '我們會透過海關資料確認其進出口紀錄，並檢查其工廠登記與線上評價。', en: 'We verify import/export records via customs data and check factory registration and online reviews.' }
      },
      {
        question: { cn: '適合哪些行业？',
    zh: '適合哪些產業？', en: 'Which industries are suitable?' },
        answer: { cn: '机械设备、工业材料、自動化零部件、電子元件等 B2B 產品在东南亚需求強勁。',
    zh: '機械設備、工業材料、自動化零元件、電子元件等 B2B 產品在東南亞需求強勁。', en: 'Machinery, industrial materials, automation parts, and electronic components have strong demand.' }
      }
    ]
  },
  {
    slug: 'middle-east',
    title: {
      cn: '中东市场開發服务 | 阿聯酋、沙烏地外贸客戶開發',
    zh: '中東市場開發服務 | 阿聯酋、沙烏地外銷客戶開發',
      en: 'Middle East Market Development | Export to UAE & Saudi Arabia'
    },
    description: {
      cn: '協助外贸企业切入中东供應鏈，鎖定代理商、项目商與進口批发。',
    zh: '協助外銷企業切入中東供應鏈，鎖定代理商、專案商與進口批發。',
      en: 'Access Middle East supply chains by targeting agents, project contractors, and importers.'
    },
    h1: {
      cn: '中东市场外贸客戶開發服务',
    zh: '中東市場外銷客戶開發服務',
      en: 'Middle East Market Export Development Service'
    },
    content: {
      cn: '中东市场正在經歷基礎建設與工业化的轉型期。我們協助您在阿聯酋、沙烏地阿拉伯等地，對接當地的代理商、大型工程承包商與政府標案供应商。',
    zh: '中東市場正在經歷基礎建設與工業化的轉型期。我們協助您在阿聯酋、沙烏地阿拉伯等地，對接當地的代理商、大型工程承包商與政府標案供應商。',
      en: 'The Middle East is undergoing infrastructure and industrial transformation. We help you connect with local agents, EPC contractors, and government suppliers in UAE and Saudi Arabia.'
    },
    challenges: {
      cn: ['商業文化獨特，高度依赖人際關係', '需要當地代理人才能參與許多项目', '付款條件與信用證較為复杂'],
    zh: ['商業文化獨特，高度依賴人際關係', '需要當地代理人才能參與許多專案', '付款條件與信用證較為複雜'],
      en: ['Unique business culture, relationship-driven', 'Local agents required for many projects', 'Complex payment terms and LC requirements']
    },
    solutions: {
      cn: ['開發當地具備政府關係的代理商', '針對项目承包商進行技術营销', '協助筛选具備支付能力的买家'],
    zh: ['開發當地具備政府關係的代理商', '針對專案承包商進行技術行銷', '協助篩選具備支付能力的買家'],
      en: ['Developing agents with government ties', 'Technical marketing to project contractors', 'Screening buyers for payment capability']
    },
    buyerTypes: {
      cn: ['项目代理商 (Project Agents)', '工程總包商 (EPC Contractors)', '建材/设备批发商 (Wholesalers)', '國營企业采购 (State-owned Enterprises)'],
    zh: ['專案代理商 (Project Agents)', '工程總包商 (EPC Contractors)', '建材/設備批發商 (Wholesalers)', '國營企業採購 (State-owned Enterprises)'],
      en: ['Project Agents', 'EPC Contractors', 'Building Material Wholesalers', 'State-owned Enterprises']
    },
    strategy: {
      cn: ['代理商策略：在中东，擁有一個強力的當地夥伴往往比直接銷售更有效。', '展会與拜訪：中东客戶重視見面三分情，我們協助安排展会期間的商務会议。', '認證準備：協助确认 SASO (沙烏地) 或 ESMA (阿聯酋) 等必要認證。'],
    zh: ['代理商策略：在中東，擁有一個強力的當地夥伴往往比直接銷售更有效。', '展會與拜訪：中東客戶重視見面三分情，我們協助安排展會期間的商務會議。', '認證準備：協助確認 SASO (沙烏地) 或 ESMA (阿聯酋) 等必要認證。'],
      en: ['Agent Strategy: Strong local partners are often better than direct sales.', 'Fairs & Visits: Face-to-face meetings are crucial; we help arrange them.', 'Certification: Ensure SASO (KSA) or ESMA (UAE) compliance.']
    },
    faq: [
      {
        question: { cn: '中东市场一定要找代理嗎？',
    zh: '中東市場一定要找代理嗎？', en: 'Is an agent mandatory in the Middle East?' },
        answer: { cn: '不一定，但對於參與大型標案或政府采购，當地代理商是必要的。一般貿易則可直接與进口商交易。',
    zh: '不一定，但對於參與大型標案或政府採購，當地代理商是必要的。一般貿易則可直接與進口商交易。', en: 'Not always, but local agents are essential for government tenders. General trade can go direct to importers.' }
      },
      {
        question: { cn: '主要机会在哪些國家？',
    zh: '主要機會在哪些國家？', en: 'Which countries offer the most opportunity?' },
        answer: { cn: '阿聯酋（杜拜）是轉口貿易中心，沙烏地阿拉伯則因「願景2030」擁有龐大的內需與建設商机。',
    zh: '阿聯酋（杜拜）是轉口貿易中心，沙烏地阿拉伯則因「願景2030」擁有龐大的內需與建設商機。', en: 'UAE (Dubai) is the re-export hub; Saudi Arabia offers massive domestic demand due to Vision 2030.' }
      },
      {
        question: { cn: '付款风险高嗎？',
    zh: '付款風險高嗎？', en: 'Is payment risk high?' },
        answer: { cn: '中东市场付款周期較长，建議初期使用信用證 (L/C) 或預付訂金來降低风险。',
    zh: '中東市場付款週期較長，建議初期使用信用證 (L/C) 或預付訂金來降低風險。', en: 'Payment cycles are longer. We recommend L/C or advance payments initially to mitigate risk.' }
      }
    ]
  }
]

export function getMarket(slug: string): MarketData | undefined {
  return markets.find(m => m.slug === slug)
}
