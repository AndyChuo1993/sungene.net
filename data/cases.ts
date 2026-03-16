export type Lang = 'zh' | 'en'

type CaseSection = { heading: string; items?: string[]; paragraphs?: string[] }
export type CaseContent = {
  slug: string
  title: string
  industry: string
  market: string
  serviceType: string
  duration: string
  cover?: string
  proofImages?: string[]
  summary?: string
  result?: string
  sections: CaseSection[]
  highlights?: { num: string; label: string }[]
  before?: string[]
  after?: string[]
}

const baseCovers: Record<string, string> = {
  hardware: '/cases/hardware-cover.svg',
  electronics: '/cases/electronics-cover.svg',
  packaging: '/cases/packaging-cover.svg',
  industrial: '/cases/industrial-cover.svg',
  machinery: '/cases/machinery-cover.svg',
}

const proofImages = {
  chart: '/cases/kpi-chart.svg',
  map: '/cases/market-map.svg',
}

const zh: Record<string, CaseContent> = {
  hardware: {
    slug: 'hardware',
    title: '五金工具製造企業',
    industry: '五金工具',
    market: '歐洲',
    serviceType: '客戶開發與電子郵件開發',
    duration: '3個月',
    cover: baseCovers.hardware,
    proofImages: [proofImages.chart],
    summary: '協助企業建立海外買家名單並進行客戶開發，成功建立多個潛在客戶聯繫與合作機會。',
    result: '詢問成長與市場拓展',
    highlights: [
      { num: '50-60', label: '有效詢價' },
      { num: '3個月', label: '建立穩定來源' },
      { num: '10+', label: '進入報價階段' },
    ],
    before: ['依賴舊客戶', '缺乏外銷團隊', '展會效果遞減'],
    after: ['建立精準名單', '自動化開發信', '穩定詢問來源'],
    sections: [
      { heading: '背景', paragraphs: ['該客戶為台灣資深五金工具製造商，擁有高品質生產能力，但長期依賴貿易商與舊客戶，缺乏主動開發歐洲市場的能力與團隊。'] },
      { heading: '市場困境', items: ['過度依賴傳統展會，獲客成本高且效果遞減', '內部無專職外銷業務，無法處理複雜的開發流程', '對歐洲進口商結構不熟悉，難以找到對口人'] },
      { heading: '我們的策略', paragraphs: ['我們為其量身建立外銷外套件方案，從零建立歐洲開發體系：'], items: ['鎖定德國、荷蘭中大型五金進口商與批發商', '建立採購經理的精準名單', '設計強調台灣製造品質與代工彈性的英文開發信'] },
      { heading: '執行方式', items: ['首月：建立 500 家以上目標客戶名單，進行首輪測試', '次月：最佳化開發信主旨與內容，提升開啟率至 40% 以上', '第三個月：全面自動化跟進，並由團隊協助初步詢問篩選'] },
      { heading: '成果資料', items: ['3個月內累計獲得 50-60 個有效詢問', '多個詢問來自德國知名工具品牌', '超過 10 個潛在客戶進入樣品與報價階段'] },
      { heading: '關鍵價值', items: ['無需自建團隊即可啟動海外開發', '快速驗證歐洲市場對產品的接受度', '建立可複製的企業客戶開發標準作業流程'] },
    ],
  },
  electronics: {
    slug: 'electronics',
    title: '電子零元件供應商',
    industry: '電子零元件',
    market: '北美',
    serviceType: '商務社群接觸與重點客戶開發',
    duration: '2個月',
    cover: baseCovers.electronics,
    proofImages: [proofImages.map],
    summary: '透過海外客戶開發流程，協助企業接觸採購決策者並建立商務對話。',
    result: '切入供應鏈並接觸關鍵決策人',
    highlights: [
      { num: '100%', label: '決策人觸達' },
      { num: '2週', label: '獲得樣品單' },
      { num: '北美', label: '成功落地' },
    ],
    before: ['無法接觸決策人', '信件石沉大海', '競爭激烈'],
    after: ['精準鎖定主管', '多點觸達', '進入審核流程'],
    sections: [
      { heading: '背景', paragraphs: ['客戶為台灣電子零元件廠，目標是切入北美高科技與車用電子供應鏈，但受限於大廠採購流程封閉，難以接觸關鍵決策者。'] },
      { heading: '市場困境', items: ['一般 info 信箱回覆率極低', '採購決策鏈長，涉及工程、採購、品管多個部門', '競爭對手眾多，難以突顯技術優勢'] },
      { heading: '我們的策略', paragraphs: ['採用多角色接觸策略：'], items: ['同時鎖定目標企業的採購經理、研發主管與供應鏈總監', '透過商務社群與電子郵件進行多管道接觸', '撰寫技術導向的白皮書與案例作為切入素材'] },
      { heading: '執行方式', items: ['建立北美前 50 家目標客戶的組織架構圖', '針對工程與採購角色分別設計不同的溝通內容', '利用商務社群建立專業形象與信任感'] },
      { heading: '成果資料', items: ['成功繞過一般詢價信箱，直接與 20 多位工程主管建立聯繫', '獲得多家大廠的樣品測試機會', '正式進入北美供應鏈審核流程'] },
      { heading: '關鍵價值', items: ['成功接觸大廠採購與技術決策角色', '縮短新供應商導入週期', '提升品牌在北美市場的專業能見度'] },
    ],
  },
  packaging: {
    slug: 'packaging',
    title: '套件裝材料供應商',
    industry: '套件裝材料',
    market: '日本',
    serviceType: '在地化內容與主動開發',
    duration: '12個月以上',
    cover: baseCovers.packaging,
    proofImages: [proofImages.chart],
    summary: '日本市場開啟率 45%、回覆率 8%，成功克服語言與文化差異。',
    result: '在地化經營與穩定回覆',
    highlights: [
      { num: '45%', label: '開信率' },
      { num: '8%', label: '回覆率' },
      { num: '日本', label: '在地化開發' },
    ],
    before: ['語言隔閡', '市場封閉', '信任建立難'],
    after: ['日文在地化', '精準名單', '高互動率'],
    sections: [
      { heading: '背景', paragraphs: ['客戶為軟套件裝材料供應商，希望拓展日本與東南亞市場。日本市場以封閉與重視信任著稱，過去使用英文開發效果不佳。'] },
      { heading: '市場困境', items: ['語言障礙導致溝通不順', '日本客戶對陌生海外供應商信任度低', '缺乏精準的終端品牌客戶名單（食品、化妝品廠）'] },
      { heading: '我們的策略', paragraphs: ['實施深度在地化的開發策略：'], items: ['建立日本食品、美妝與日用品工廠的精準名單', '由日文顧問協助潤飾開發信，確保商務禮儀與語氣自然', '強調品質檢驗標準與既有日系客戶實績，以建立信任'] },
      { heading: '執行方式', items: ['分產業建立名單，優先鎖定中型品牌商', '使用日文進行所有書面溝通', '提供免費樣品寄送服務作為破冰誘因'] },
      { heading: '成果資料', items: ['開發信開啟率達 45%，高於常見平均水準', '回覆率達到 8%，成功建立多個持續對話', '成功與數家日本化妝品品牌展開代工洽談'] },
      { heading: '關鍵價值', items: ['克服文化與語言差異', '建立日系客戶的信任感', '更有效率地切入重視信任的市場'] },
    ],
  },
  industrial: {
    slug: 'industrial',
    title: '工業材料企業',
    industry: '化工/工業材料',
    market: '中東',
    serviceType: '技術型業務開發',
    duration: '6個月',
    cover: baseCovers.industrial,
    proofImages: [proofImages.map],
    summary: '觸達高層決策者、進入大型客戶評估流程，建立技術銷售管道。',
    result: '技術銷售、大型專案',
    highlights: [
      { num: 'Top 20', label: '目標客戶觸達' },
      { num: '穩定', label: '詢價節奏' },
      { num: '高層', label: '直接對話' },
    ],
    before: ['技術門檻高', '決策鏈長', '找不到對口'],
    after: ['技術決策人鎖定', '專業內容行銷', '進入評估流程'],
    sections: [
      { heading: '背景', paragraphs: ['客戶為特用化學品與工業材料製造商，產品技術門檻高，目標市場為中東與東南亞的工業客戶。'] },
      { heading: '市場困境', items: ['產品應用專業，一般採購無法快速判斷價值', '大型工業客戶決策流程極長', '難以接觸到真正的技術決策者'] },
      { heading: '我們的策略', paragraphs: ['採用技術型業務開發方式：'], items: ['鎖定工廠廠長、製程工程師、研發總監等技術職位', '開發信內容強調效能提升與成本最佳化資料', '提供技術規格書與測試報告作為核心素材'] },
      { heading: '執行方式', items: ['透過專案資料函式庫找出正在擴廠或升級的目標企業', '分層開發：先技術人員確認規格，後採購人員談商務', '定期寄送產業應用案例，維持長期互動'] },
      { heading: '成果資料', items: ['短時間內觸達多位目標企業的高層決策者', '建立穩定的技術詢價來源', '成功進入兩家大型石化集團的供應商評估清單'] },
      { heading: '關鍵價值', items: ['更精準地對應技術需求', '縮短冗長的技術審核時間', '建立較高門檻的技術競爭優勢'] },
    ],
  },
  machinery: {
    slug: 'machinery',
    title: '自動化設備製造商',
    industry: '機械設備',
    market: '東南亞',
    serviceType: '客戶開發與會議安排',
    duration: '5個月',
    cover: baseCovers.machinery,
    proofImages: [proofImages.chart],
    summary: '透過精準名單與電話開發，成功安排 15 場經銷商會議，簽約 3 家代理。',
    result: '通路佈局、代理簽約',
    highlights: [
      { num: '15', label: '商務會議' },
      { num: '3', label: '代理簽約' },
      { num: '越南/泰國', label: '市場落地' },
    ],
    before: ['找不到經銷商', '無當地人脈', '語言不通'],
    after: ['鎖定進口商', '電話與電子郵件開發', '安排視訊會議'],
    sections: [
      { heading: '背景', paragraphs: ['客戶為自動化套件裝設備製造商，欲拓展越南與泰國市場，尋找當地有售後服務能力的經銷代理商。'] },
      { heading: '市場困境', items: ['缺乏當地通路名單，難以辨識有實力的經銷商', '語言隔閡，僅靠英文開發信回覆率低', '需要深入溝通才能確認對方的技術服務能力'] },
      { heading: '我們的策略', paragraphs: ['結合名單開發與會議邀約：'], items: ['建立越南與泰國前 50 大套件裝機械進口商名單', '透過當地語言（越文與泰文）進行陌生開發電話', '目標是直接安排視訊會議，而非僅止於索取報價'] },
      { heading: '執行方式', items: ['篩選具備維修團隊的經銷商', '寄送產品演示影片作為開門磚', '由 SunGene 顧問協助初步篩選意願，再安排雙方會議'] },
      { heading: '成果資料', items: ['成功安排 15 場與潛在經銷商的視訊會議', '客戶親自飛往當地拜訪其中 5 家', '最終與 3 家簽署代理合約，完成通路佈局'] },
      { heading: '關鍵價值', items: ['快速篩選優質合作夥伴', '大幅降低差旅與溝通成本', '建立穩固的售後服務網路'] },
    ],
  },
}

const en: Record<string, CaseContent> = {
  hardware: {
    slug: 'hardware',
    title: 'Hardware Manufacturer',
    industry: 'Hardware & Tools',
    market: 'Europe',
    serviceType: 'Lead Gen + Cold Email',
    duration: '3 Months',
    cover: baseCovers.hardware,
    proofImages: [proofImages.chart],
    summary: 'Built precise buyer lists and executed outreach, successfully establishing multiple potential client connections.',
    result: 'Inquiry Growth, Market Expansion',
    highlights: [
      { num: '50-60', label: 'Qualified Inquiries' },
      { num: '3 Months', label: 'To Stable Leads' },
      { num: '10+', label: 'Quoting Stage' },
    ],
    before: ['Relied on old clients', 'No export team', 'Declining exhibition ROI'],
    after: ['Targeted lists', 'Automated outreach', 'Stable inquiry flow'],
    sections: [
      { heading: 'Background', paragraphs: ['A veteran hardware manufacturer with high-quality production capabilities but heavily reliant on trading companies and existing clients. They lacked the internal team to proactively develop the European market.'] },
      { heading: 'Challenges', items: ['High cost and declining ROI from traditional exhibitions', 'No dedicated sales team to handle complex prospecting', 'Unfamiliar with European importer structures'] },
      { heading: 'Our Strategy', paragraphs: ['SunGene implemented a full "Export Outsourcing" solution:'], items: ['Targeted mid-to-large hardware importers and wholesalers in Germany and Netherlands', 'Built a precise list of Purchasing Managers', 'Crafted cold emails highlighting "Quality Manufacturing" and "OEM Flexibility"'] },
      { heading: 'Execution', items: ['Month 1: Built 500+ target list for initial testing', 'Month 2: Optimized subject lines and content, boosting open rates to 40%+', 'Month 3: Full automation with SunGene team filtering initial inquiries'] },
      { heading: 'Results', items: ['Generated 50-60 qualified inquiries within 3 months', 'Received inquiries from well-known European tool brands', 'Over 10 prospects advanced to sampling and quotation stages'] },
      { heading: 'Key Value', items: ['Launched overseas expansion without building a team', 'Rapidly validated European market acceptance', 'Established a replicable B2B sales SOP'] },
    ],
  },
  electronics: {
    slug: 'electronics',
    title: 'Electronics Component Supplier',
    industry: 'Electronics Components',
    market: 'North America',
    serviceType: '商務社群接觸與重點客戶開發',
    duration: '2 Months',
    cover: baseCovers.electronics,
    proofImages: [proofImages.map],
    summary: 'Leveraged overseas client development workflows to help the company reach decision-makers and establish business dialogues.',
    result: 'Supply Chain Entry, Decision Maker Access',
    highlights: [
      { num: '100%', label: 'Decision Maker Reach' },
      { num: '2 Weeks', label: 'To Sample Order' },
      { num: 'USA', label: 'Market Entry' },
    ],
    before: ['No decision maker access', 'Ignored emails', 'High competition'],
    after: ['Targeted executives', 'Multi-channel touch', 'Audit process entry'],
    sections: [
      { heading: 'Background', paragraphs: ['An electronics component manufacturer aiming to enter the North American high-tech and automotive supply chains but blocked by closed procurement processes at major firms.'] },
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
    market: 'Japan',
    serviceType: 'Localization + Outreach',
    duration: '4 Months',
    cover: baseCovers.packaging,
    proofImages: [proofImages.chart],
    summary: 'Achieved 45% open rate and 8% reply rate in Japan, successfully overcoming language and cultural barriers.',
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
    market: 'Middle East',
    serviceType: 'Technical Sales',
    duration: '6 Months',
    cover: baseCovers.industrial,
    proofImages: [proofImages.map],
    summary: 'Reached C-level executives and entered evaluation processes at major firms, establishing a technical sales channel.',
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
  machinery: {
    slug: 'machinery',
    title: 'Automation Machinery Manufacturer',
    industry: 'Machinery & Equipment',
    market: 'Southeast Asia',
    serviceType: 'Lead Gen + Appointment',
    duration: '5 Months',
    cover: baseCovers.machinery,
    proofImages: [proofImages.chart],
    summary: 'Secured 15 meetings with distributors and signed 3 agents via precise targeting and cold calling.',
    result: 'Channel Expansion, Agent Signing',
    highlights: [
      { num: '15', label: 'Business Meetings' },
      { num: '3', label: 'Agents Signed' },
      { num: 'VN/TH', label: 'Market Entry' },
    ],
    before: ['No distributors', 'No local network', 'Language barrier'],
    after: ['Targeted importers', 'Phone+Email outreach', 'Video meetings'],
    sections: [
      { heading: 'Background', paragraphs: ['An automation packaging machinery manufacturer wanting to expand into Vietnam and Thailand to find distributors with after-sales service capabilities.'] },
      { heading: 'Challenges', items: ['Lack of local channel lists to identify capable distributors', 'Language barriers led to low response rates from English emails', 'Deep communication needed to verify technical service capabilities'] },
      { heading: 'Our Strategy', paragraphs: ['Combined "Lead Gen" with "Appointment Setting":'], items: ['Built a list of Top 50 packaging machinery importers in Vietnam and Thailand', 'Conducted cold calling in local languages (Vietnamese/Thai)', 'Goal was to set up video meetings, not just ask for quotes'] },
      { heading: 'Execution', items: ['Filtered distributors with maintenance teams', 'Sent product demo videos as openers', 'SunGene consultants pre-screened interest before scheduling meetings'] },
      { heading: 'Results', items: ['Successfully scheduled 15 video meetings with potential distributors', 'Client flew to visit 5 of them', 'Signed agency agreements with 3 partners'] },
      { heading: 'Key Value', items: ['Quickly filtered quality partners', 'Drastically reduced travel and communication costs', 'Built a solid after-sales service network'] },
    ],
  },
}

export function getCases(lang: Lang): CaseContent[] {
  const d = lang === 'en' ? en : zh
  const order = ['hardware', 'electronics', 'packaging', 'industrial', 'machinery']
  return order.map(slug => d[slug]).filter(Boolean)
}

export function getCase(lang: Lang, slug: string): CaseContent | undefined {
  const d = lang === 'en' ? en : zh
  return d[slug]
}
