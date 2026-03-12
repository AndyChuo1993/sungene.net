export type Lang = 'zh' | 'en'

type CaseSection = { heading: string; items?: string[]; paragraphs?: string[] }
export type CaseContent = {
  slug: string
  title: string
  industry: string
  cover?: string
  summary?: string
  result?: string
  sections: CaseSection[]
  highlights?: { num: string; label: string }[]
  before?: string[]
  after?: string[]
}

const baseCovers: Record<string, string> = {
  chemie: '/cases/chemie/cover.png',
  skyworth: '/cases/skyworth/cover.png',
  dzics: '/cases/dzics/cover.png',
  erkang: '/cases/erkang/cover.png',
  // New Taiwan-specific cases placeholders (can be replaced with real images later)
  hardware: '/cases/chemie/cover.png', // Reusing for now
  electronics: '/cases/skyworth/cover.png',
  packaging: '/cases/erkang/cover.png',
  industrial: '/cases/dzics/cover.png',
}

const zh: Record<string, CaseContent> = {
  hardware: {
    slug: 'hardware',
    title: '台灣五金工具製造商',
    industry: '五金工具',
    cover: baseCovers.hardware,
    summary: '三個月獲得 50–60 有效詢盤、成功進入歐洲市場',
    result: '詢盤增長、市場拓展',
    highlights: [
      { num: '50-60', label: '有效詢盤' },
      { num: '3個月', label: '建立穩定來源' },
      { num: '10+', label: '進入報價階段' },
    ],
    before: ['依賴舊客戶', '缺乏外貿團隊', '展會效果遞減'],
    after: ['建立精準名單', '自動化開發信', '穩定詢盤來源'],
    sections: [
      { heading: '背景', paragraphs: ['該客戶為台灣資深五金工具製造商，擁有高品質生產能力，但長期依賴貿易商與舊客戶，缺乏主動開發歐洲市場的能力與團隊。'] },
      { heading: '市場困境', items: ['過度依賴傳統展會，獲客成本高且效果遞減', '內部無專職外貿業務，無法處理複雜的開發流程', '對歐洲進口商結構不熟悉，難以找到對口人'] },
      { heading: '我們的策略', paragraphs: ['SunGene 為其量身打造「外貿外包」方案，從零建立歐洲開發體系：'], items: ['鎖定德國、荷蘭中大型五金進口商與批發商', '建立採購經理 (Purchasing Manager) 精準名單', '設計強調「台灣製造品質」與「OEM彈性」的英文開發信'] },
      { heading: '執行方式', items: ['首月：建立 500+ 目標客戶名單，進行首輪測試', '次月：優化開發信主旨與內容，提升開信率至 40%+', '第三月：全面自動化跟進，並由 SunGene 團隊協助初步詢盤過濾'] },
      { heading: '成果數據', items: ['3個月內累計獲得 50-60 個有效詢盤', '多個詢盤來自德國知名工具品牌', '超過 10 個潛在客戶進入樣品與報價階段'] },
      { heading: '關鍵價值', items: ['無需自建團隊即可啟動海外開發', '快速驗證歐洲市場對產品的接受度', '建立可複製的 B2B 開發SOP'] },
    ],
  },
  electronics: {
    slug: 'electronics',
    title: '電子零組件供應商',
    industry: '電子零組件',
    cover: baseCovers.electronics,
    summary: '成功打入北美供應鏈、獲得樣品單',
    result: '供應鏈進入、決策人觸達',
    highlights: [
      { num: '100%', label: '決策人觸達' },
      { num: '2週', label: '獲得樣品單' },
      { num: '北美', label: '成功落地' },
    ],
    before: ['無法接觸決策人', '信件石沉大海', '競爭激烈'],
    after: ['精準鎖定主管', '多點觸達', '進入審核流程'],
    sections: [
      { heading: '背景', paragraphs: ['客戶為台灣電子零組件廠，目標是切入北美高科技與車用電子供應鏈，但受限於大廠採購流程封閉，難以接觸關鍵決策者。'] },
      { heading: '市場困境', items: ['一般 info 信箱回覆率極低', '採購決策鏈長，涉及工程、採購、品管多個部門', '競爭對手眾多，難以突顯技術優勢'] },
      { heading: '我們的策略', paragraphs: ['採用「多點觸達 (Account-Based Marketing)」策略：'], items: ['同時鎖定目標企業的採購經理、研發主管與供應鏈總監', '透過 LinkedIn 與 Email 進行多管道接觸', '撰寫技術導向的白皮書與案例作為鉤子'] },
      { heading: '執行方式', items: ['建立北美 Top 50 目標客戶的組織架構圖', '針對工程師與採購分別設計不同的溝通話術', '利用 LinkedIn 建立專業形象與信任感'] },
      { heading: '成果數據', items: ['成功繞過一般詢價信箱，直接與 20+ 位工程主管建立聯繫', '獲得多家大廠的樣品測試機會 (Sample Request)', '正式進入北美供應鏈商審核流程'] },
      { heading: '關鍵價值', items: ['突破大廠封閉採購圍牆', '縮短新供應商導入週期', '提升品牌在北美市場的專業能見度'] },
    ],
  },
  packaging: {
    slug: 'packaging',
    title: '包裝材料供應商',
    industry: '包裝材料',
    cover: baseCovers.packaging,
    summary: '日本市場開信率 45%、回覆率 8%',
    result: '在地化深耕、高回覆率',
    highlights: [
      { num: '45%', label: '開信率' },
      { num: '8%', label: '回覆率' },
      { num: '日本', label: '在地化開發' },
    ],
    before: ['語言隔閡', '市場封閉', '信任建立難'],
    after: ['日文在地化', '精準名單', '高互動率'],
    sections: [
      { heading: '背景', paragraphs: ['客戶為軟包裝材料供應商，希望拓展日本與東南亞市場。日本市場以封閉與重視信任著稱，過去使用英文開發效果不佳。'] },
      { heading: '市場困境', items: ['語言障礙導致溝通不順', '日本客戶對陌生海外供應商信任度低', '缺乏精準的終端品牌客戶名單（食品、化妝品廠）'] },
      { heading: '我們的策略', paragraphs: ['實施「極致在地化」開發策略：'], items: ['建立日本食品、美妝、日用品工廠的精準名單', '聘請日籍顧問潤飾開發信，確保商務禮儀與語氣道地', '強調「品質檢驗標準」與「現有日系客戶實績」以建立信任'] },
      { heading: '執行方式', items: ['分產業建立名單，優先鎖定中型品牌商', '使用日文進行所有書面溝通', '提供免費樣品寄送服務作為破冰誘因'] },
      { heading: '成果數據', items: ['開發信開信率高達 45%，遠高於業界平均', '回覆率達到 8%，成功建立多個持續對話', '成功與數家日本化妝品品牌展開代工洽談'] },
      { heading: '關鍵價值', items: ['克服文化與語言壁壘', '建立日系客戶信任感', '高效率切入封閉市場'] },
    ],
  },
  industrial: {
    slug: 'industrial',
    title: '工業材料企業',
    industry: '化工/工業材料',
    cover: baseCovers.industrial,
    summary: '觸達高層決策者、進入大型客戶評估流程',
    result: '技術銷售、大型專案',
    highlights: [
      { num: 'Top 20', label: '目標客戶觸達' },
      { num: '穩定', label: '詢盤節奏' },
      { num: '高層', label: '直接對話' },
    ],
    before: ['技術門檻高', '決策鏈長', '找不到對口'],
    after: ['技術決策人鎖定', '專業內容行銷', '進入評估流程'],
    sections: [
      { heading: '背景', paragraphs: ['客戶為特用化學品與工業材料製造商，產品技術門檻高，目標市場為中東與東南亞的工業客戶。'] },
      { heading: '市場困境', items: ['產品應用專業，一般採購無法判斷價值', '大型工業客戶決策流程極長', '難以接觸到真正的技術決策者 (Technical Decision Maker)'] },
      { heading: '我們的策略', paragraphs: ['採用「技術銷售 (Technical Sales)」導向開發：'], items: ['鎖定工廠廠長、製程工程師、研發總監等技術職位', '開發信內容強調「效能提升」與「成本優化」數據', '提供技術規格書 (TDS) 與測試報告作為核心素材'] },
      { heading: '執行方式', items: ['透過專案資料庫找出正在擴廠或升級的目標企業', '分層開發：先技術人員確認規格，後採購人員談商務', '定期發送產業應用案例，維持長期互動'] },
      { heading: '成果數據', items: ['短時間內觸達多位目標企業的高層決策者', '建立穩定的技術詢盤來源', '成功進入兩家大型石化集團的供應商評估清單'] },
      { heading: '關鍵價值', items: ['精準對接技術需求', '縮短冗長的技術審核時間', '建立高門檻的競爭護城河'] },
    ],
  },
  chemie: {
    slug: 'chemie',
    title: 'Chemie 熱載體科技',
    industry: '石油化工',
    cover: baseCovers.chemie,
    summary: '每週 10–20 詢盤、總詢盤額 3000 萬人民幣、3 天直達高層',
    result: '詢盤增長、決策鏈直達',
    highlights: [
      { num: '10–20', label: '每週詢盤' },
      { num: '¥3000萬+', label: '潛在金額' },
      { num: '3天', label: '直達決策層' },
    ],
    before: ['客戶名單分散', '展會轉化率低', '開發週期不可控'],
    after: ['AI 精準篩選', '每週穩定 20+ 詢盤', '3天直達決策層'],
    sections: [
      { heading: '背景', paragraphs: ['Chemie 為專注於高溫熱載體與工業流體解決方案的科技企業，產品主要應用於石油化工與高溫工業製程市場。企業具備技術優勢，但在海外市場拓展初期，缺乏穩定且精準的客戶開發機制。'] },
      { heading: '市場困境', items: ['高端工業客戶決策層級高，接觸門檻高', '傳統展會與平台流量轉化率低', '客戶名單分散，無法有效篩選潛在決策者', '開發週期長，成本不可控'] },
      { heading: '我們的策略', paragraphs: ['SunGene 導入 AI 名單分析與精準市場篩選系統，建立三層篩選機制：'], items: ['行業匹配與市場潛力分析', '決策層級識別與名單分級', '自動化開發節奏與跟進管理', '針對石油化工產業的專業溝通結構'] },
      { heading: '執行方式', items: ['建立目標國家與產業優先順序', 'AI 分析潛在合作企業並標記高匹配度名單', '自動化分批觸達 + 個性化內容生成', '追蹤回應數據並即時優化開發策略'] },
      { heading: '成果數據', items: ['每週穩定 10–20 筆高質量詢盤', '累計潛在詢盤金額超過 3000 萬人民幣', '3 天內成功直達阿聯酋石油化工企業高層', '成為該企業首個中國合作夥伴'] },
      { heading: '關鍵價值', items: ['縮短高端客戶觸達時間', '提升決策層溝通成功率', '建立可持續運行的客戶開發結構'] },
    ],
  },
  // Keep original cases as reference or additional content if needed
}

const en: Record<string, CaseContent> = {
  hardware: {
    slug: 'hardware',
    title: 'Taiwan Hardware Manufacturer',
    industry: 'Hardware & Tools',
    cover: baseCovers.hardware,
    summary: '50–60 qualified inquiries in 3 months; Successful entry into Europe',
    result: 'Inquiry Growth, Market Expansion',
    highlights: [
      { num: '50-60', label: 'Qualified Inquiries' },
      { num: '3 Months', label: 'To Stable Leads' },
      { num: '10+', label: 'Quoting Stage' },
    ],
    before: ['Relied on old clients', 'No export team', 'Declining exhibition ROI'],
    after: ['Targeted lists', 'Automated outreach', 'Stable inquiry flow'],
    sections: [
      { heading: 'Background', paragraphs: ['A veteran Taiwanese hardware manufacturer with high-quality production capabilities but heavily reliant on trading companies and existing clients. They lacked the internal team to proactively develop the European market.'] },
      { heading: 'Challenges', items: ['High cost and declining ROI from traditional exhibitions', 'No dedicated sales team to handle complex prospecting', 'Unfamiliar with European importer structures'] },
      { heading: 'Our Strategy', paragraphs: ['SunGene implemented a full "Export Outsourcing" solution:'], items: ['Targeted mid-to-large hardware importers and wholesalers in Germany and Netherlands', 'Built a precise list of Purchasing Managers', 'Crafted cold emails highlighting "Made in Taiwan Quality" and "OEM Flexibility"'] },
      { heading: 'Execution', items: ['Month 1: Built 500+ target list for initial testing', 'Month 2: Optimized subject lines and content, boosting open rates to 40%+', 'Month 3: Full automation with SunGene team filtering initial inquiries'] },
      { heading: 'Results', items: ['Generated 50-60 qualified inquiries within 3 months', 'Received inquiries from well-known German tool brands', 'Over 10 prospects advanced to sampling and quotation stages'] },
      { heading: 'Key Value', items: ['Launched overseas expansion without building a team', 'Rapidly validated European market acceptance', 'Established a replicable B2B sales SOP'] },
    ],
  },
  electronics: {
    slug: 'electronics',
    title: 'Electronics Component Supplier',
    industry: 'Electronics Components',
    cover: baseCovers.electronics,
    summary: 'Entered North American supply chain; Secured sample orders',
    result: 'Supply Chain Entry, Decision Maker Access',
    highlights: [
      { num: '100%', label: 'Decision Maker Reach' },
      { num: '2 Weeks', label: 'To Sample Order' },
      { num: 'USA', label: 'Market Entry' },
    ],
    before: ['No decision maker access', 'Ignored emails', 'High competition'],
    after: ['Targeted executives', 'Multi-channel touch', 'Audit process entry'],
    sections: [
      { heading: 'Background', paragraphs: ['A Taiwanese electronics component manufacturer aiming to enter the North American high-tech and automotive supply chains but blocked by closed procurement processes at major firms.'] },
      { heading: 'Challenges', items: ['Extremely low response rates from generic info emails', 'Long decision chains involving engineering, procurement, and QC', 'Hard to differentiate technical advantages in a crowded market'] },
      { heading: 'Our Strategy', paragraphs: ['Adopted an "Account-Based Marketing (ABM)" approach:'], items: ['Simultaneously targeted Purchasing Managers, R&D Heads, and Supply Chain Directors', 'Multi-channel outreach via LinkedIn and Email', 'Used technical whitepapers and case studies as hooks'] },
      { heading: 'Execution', items: ['Mapped organizational charts of Top 50 target clients', 'Tailored communication scripts for engineers vs. buyers', 'Leveraged LinkedIn to build professional credibility'] },
      { heading: 'Results', items: ['Bypassed generic inboxes to connect with 20+ Engineering Directors', 'Secured sample requests from multiple major firms', 'Formally entered the supplier audit process'] },
      { heading: 'Key Value', items: ['Breached closed procurement walls', 'Shortened new supplier onboarding cycles', 'Enhanced brand visibility in North America'] },
    ],
  },
  packaging: {
    slug: 'packaging',
    title: 'Packaging Material Supplier',
    industry: 'Packaging Materials',
    cover: baseCovers.packaging,
    summary: '45% Open Rate, 8% Reply Rate in Japan',
    result: 'Localization, High Engagement',
    highlights: [
      { num: '45%', label: 'Open Rate' },
      { num: '8%', label: 'Reply Rate' },
      { num: 'Japan', label: 'Localized Strategy' },
    ],
    before: ['Language barrier', 'Closed market', 'Trust issues'],
    after: ['Native Japanese', 'Precise targeting', 'High interaction'],
    sections: [
      { heading: 'Background', paragraphs: ['A flexible packaging supplier expanding into Japan and Southeast Asia. The Japanese market is known for being closed and trust-sensitive; previous English outreach had failed.'] },
      { heading: 'Challenges', items: ['Communication breakdowns due to language barriers', 'Low trust from Japanese clients towards unknown foreign suppliers', 'Lack of precise end-user brand lists (food, cosmetics)'] },
      { heading: 'Our Strategy', paragraphs: ['Implemented an "Extreme Localization" strategy:'], items: ['Built precise lists of Japanese food, beauty, and daily goods factories', 'Hired native Japanese consultants to polish emails for perfect etiquette', 'Emphasized "Quality Standards" and "Existing Japanese Track Record" to build trust'] },
      { heading: 'Execution', items: ['Segmented lists by industry, prioritizing mid-sized brands', 'Conducted all written communication in Japanese', 'Offered free sample shipping as a conversation starter'] },
      { heading: 'Results', items: ['Achieved a 45% open rate, far above industry average', 'Reached an 8% reply rate, establishing ongoing dialogues', 'Started OEM negotiations with several Japanese cosmetic brands'] },
      { heading: 'Key Value', items: ['Overcame cultural and language barriers', 'Built trust with Japanese clients', 'Efficient entry into a closed market'] },
    ],
  },
  industrial: {
    slug: 'industrial',
    title: 'Industrial Material Manufacturer',
    industry: 'Chemicals / Industrial Materials',
    cover: baseCovers.industrial,
    summary: 'Reached C-level executives; Entered evaluation at major firms',
    result: 'Technical Sales, Large Contracts',
    highlights: [
      { num: 'Top 20', label: 'Target Reach' },
      { num: 'Stable', label: 'Inquiry Flow' },
      { num: 'C-Level', label: 'Direct Access' },
    ],
    before: ['High tech barrier', 'Long decision chain', 'Wrong contacts'],
    after: ['Tech decision makers', 'Content marketing', 'Evaluation process'],
    sections: [
      { heading: 'Background', paragraphs: ['A manufacturer of specialty chemicals and industrial materials with high technical barriers, targeting industrial clients in the Middle East and SE Asia.'] },
      { heading: 'Challenges', items: ['General buyers cannot evaluate technical value', 'Extremely long decision processes at large industrial firms', 'Hard to reach the actual Technical Decision Makers'] },
      { heading: 'Our Strategy', paragraphs: ['Adopted a "Technical Sales" approach:'], items: ['Targeted Plant Managers, Process Engineers, and R&D Directors', 'Emails focused on "Efficiency Gains" and "Cost Optimization" data', 'Provided Technical Data Sheets (TDS) and test reports as core content'] },
      { heading: 'Execution', items: ['Identified companies expanding or upgrading via project databases', 'Layered outreach: Specs with techs first, commercial terms with buyers later', 'Sent regular industry application cases to maintain engagement'] },
      { heading: 'Results', items: ['Reached high-level decision makers at multiple target firms', 'Established a stable source of technical inquiries', 'Entered supplier evaluation lists at two major petrochemical groups'] },
      { heading: 'Key Value', items: ['Precise alignment with technical needs', 'Shortened technical review times', 'Built a high-barrier competitive moat'] },
    ],
  },
  chemie: {
    slug: 'chemie',
    title: 'Chemie — Heat Transfer Technology',
    industry: 'Petrochemical',
    cover: baseCovers.chemie,
    summary: '10–20 weekly inquiries; RMB 30M+ pipeline; executive access in 3 days',
    result: 'Scalable acquisition, executive reach',
    highlights: [
      { num: '10–20', label: 'weekly inquiries' },
      { num: '¥30M+', label: 'pipeline' },
      { num: '3 days', label: 'to executives' },
    ],
    before: ['Scattered lead data', 'Low exhibition ROI', 'Long sales cycles'],
    after: ['AI-filtered precision', 'Stable 20+ leads/wk', 'Executive access in 3 days'],
    sections: [
      { heading: 'Background', paragraphs: ['Chemie is a high‑temperature heat transfer fluid technology company serving the petrochemical and industrial processing markets. Despite strong technical capabilities, the company lacked a structured global client acquisition mechanism.'] },
      { heading: 'Market Challenges', items: ['Hard to reach decision makers', 'Low conversion from exhibitions/platforms', 'Scattered lists without filtering', 'Long cycles and high cost'] },
      { heading: 'Our Strategy', items: ['Industry & market‑potential filtering', 'Decision‑maker identification & ranking', 'Automated outreach rhythm with tracking'] },
      { heading: 'Execution', items: ['Target market prioritization', 'AI‑driven prospect identification', 'Automated yet personalized outreach', 'Optimization from engagement data'] },
      { heading: 'Results', items: ['10–20 qualified inquiries/week', 'RMB 30M+ pipeline', 'Reached senior executives in 3 days', 'First Chinese partner established'] },
      { heading: 'Value Created', items: ['Shortened executive access time', 'Higher high‑value response rate', 'Scalable acquisition structure'] },
    ],
  },
}

export function getCases(lang: Lang): CaseContent[] {
  const d = lang === 'en' ? en : zh
  // Return the new Taiwan-specific cases first, then others
  const order = ['hardware', 'electronics', 'packaging', 'industrial', 'chemie']
  return order.map(slug => d[slug]).filter(Boolean)
}

export function getCase(lang: Lang, slug: string): CaseContent | undefined {
  const d = lang === 'en' ? en : zh
  return d[slug]
}
