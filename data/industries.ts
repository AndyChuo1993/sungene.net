import { Lang } from '@/lib/i18n'

export interface IndustryData {
  slug: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  h1: Record<Lang, string>
  content: Record<Lang, string>
  features: Record<Lang, string[]>
  buyerTypes: Record<Lang, string[]>
  strategy: Record<Lang, string[]>
  faq: {
    question: Record<Lang, string>
    answer: Record<Lang, string>
  }[]
}

export const industries: IndustryData[] = [
  {
    slug: 'hardware',
    title: {
      cn: '五金工具外贸開發 | 手工具、緊固件、建築五金',
    zh: '五金工具外銷開發 | 手工具、緊固件、建築五金',
      en: 'Hardware & Tools Export Development | Hand Tools, Fasteners'
    },
    description: {
      cn: '专注於五金工具行业的外贸客戶開發。協助手工具、緊固件、建築五金企业，對接全球品牌商與大型渠道。',
    zh: '專注於五金工具產業的外銷客戶開發。協助手工具、緊固件、建築五金企業，對接全球品牌商與大型通路。',
      en: 'Focused export development for hardware & tools. Helping companies of hand tools, fasteners, and hardware connect with global brands and channels.'
    },
    h1: {
      cn: '五金工具行业外贸客戶開發',
    zh: '五金工具產業外銷客戶開發',
      en: 'Hardware & Tools Industry Export Development'
    },
    content: {
      cn: '五金行业是台灣的優勢行业，但面臨中國與东南亚的價格竞争。我們協助您突顯质量與技術優勢，開發歐美高階 DIY 市场與專業級工具品牌。',
    zh: '五金產業是台灣的優勢產業，但面臨中國與東南亞的價格競爭。我們協助您突顯品質與技術優勢，開發歐美高階 DIY 市場與專業級工具品牌。',
      en: 'Hardware is Taiwan\'s strength but faces price competition. We help you highlight quality and tech to target high-end DIY markets and professional tool brands in the West.'
    },
    features: {
      cn: ['精准鎖定 DIY 連鎖渠道采购', '開發專業級工具品牌貼牌机会', '針對建築五金进口商進行推廣'],
    zh: ['精準鎖定 DIY 連鎖通路採購', '開發專業級工具品牌貼牌機會', '針對建築五金進口商進行推廣'],
      en: ['Targeting DIY chain buyers', 'Finding OEM opportunities for pro tool brands', 'Promoting to construction hardware importers']
    },
    buyerTypes: {
      cn: ['DIY 連鎖賣場 (Home Depot, Lowe\'s 等供应商)', '專業工具品牌商 (Private Label)', '建築五金批发商 (Builders Hardware)', '工业 MRO 供应商'],
    zh: ['DIY 連鎖賣場 (Home Depot, Lowe\'s 等供應商)', '專業工具品牌商 (Private Label)', '建築五金批發商 (Builders Hardware)', '工業 MRO 供應商'],
      en: ['DIY Chain Suppliers (Home Depot, Lowe\'s)', 'Professional Tool Brands (Private Label)', 'Builders Hardware Wholesalers', 'Industrial MRO Suppliers']
    },
    strategy: {
      cn: ['強調產品验证：ANSI, DIN, ISO 等标准是敲門磚。', '專利與創新：突出產品的獨特設計或專利功能。', '样品测试：提供样品供买家進行扭力、硬度等测试。'],
    zh: ['強調產品驗證：ANSI, DIN, ISO 等標準是敲門磚。', '專利與創新：突出產品的獨特設計或專利功能。', '樣品測試：提供樣品供買家進行扭力、硬度等測試。'],
      en: ['Highlight Certifications: ANSI, DIN, ISO standards are essential.', 'Patent & Innovation: Emphasize unique designs or patented features.', 'Sample Testing: Provide samples for torque, hardness testing.']
    },
    faq: [
      {
        question: { cn: '你們熟悉五金行业嗎？',
    zh: '你們熟悉五金產業嗎？', en: 'Are you familiar with the hardware industry?' },
        answer: { cn: '是的，我們有大量五金手工具行业的成功案例，了解該行业的供應鏈結構與买家偏好。',
    zh: '是的，我們有大量五金手工具產業的成功案例，了解該產業的供應鏈結構與買家偏好。', en: 'Yes, we have many success cases in hardware tools and understand the supply chain and buyer preferences.' }
      },
      {
        question: { cn: '如何應對低價竞争？',
    zh: '如何應對低價競爭？', en: 'How to deal with low-price competition?' },
        answer: { cn: '我們不建議與低價產品正面交鋒，而是鎖定重視质量稳定度與創新設計的中高階买家。',
    zh: '我們不建議與低價產品正面交鋒，而是鎖定重視品質穩定度與創新設計的中高階買家。', en: 'We advise against fighting on price alone. Instead, we target mid-to-high-end buyers valuing quality stability and innovation.' }
      },
      {
        question: { cn: '開發信要附上目錄嗎？',
    zh: '開發信要附上目錄嗎？', en: 'Should we attach a catalog in outreach?' },
        answer: { cn: '建議先以重点產品（Hero Product）引起興趣，待买家回复後再提供完整目錄，避免信件被攔截。',
    zh: '建議先以重點產品（Hero Product）引起興趣，待買家回覆後再提供完整目錄，避免信件被攔截。', en: 'We recommend starting with a Hero Product to spark interest, then sending the full catalog after a reply to avoid spam filters.' }
      }
    ]
  },
  {
    slug: 'electronics',
    title: {
      cn: '電子零部件外贸開發 | 連接器、線束、被动元件',
    zh: '電子零元件外銷開發 | 連接器、線束、被動元件',
      en: 'Electronics Components Export Development | Connectors, Wiring'
    },
    description: {
      cn: '電子零部件 B2B 開發服务。協助連接器、線束、PCB 企业，打入歐美車用、医疗與工控供應鏈。',
    zh: '電子零元件 B2B 開發服務。協助連接器、線束、PCB 企業，打入歐美車用、醫療與工控供應鏈。',
      en: 'B2B development for electronic components. Helping connector, wiring, and PCB companies enter automotive, medical, and industrial supply chains.'
    },
    h1: {
      cn: '電子零部件行业外贸客戶開發',
    zh: '電子零元件產業外銷客戶開發',
      en: 'Electronics Components Industry Export Development'
    },
    content: {
      cn: '電子零部件行业重視規格、验证與供應鏈稳定性。我們協助您找到正在尋找替代供应商的研發工程師與采购經理。',
    zh: '電子零元件產業重視規格、驗證與供應鏈穩定性。我們協助您找到正在尋找替代供應商的研發工程師與採購經理。',
      en: 'The electronics industry values specs, certification, and stability. We help you find R&D engineers and purchasing managers looking for alternative suppliers.'
    },
    features: {
      cn: ['鎖定 R&D 與采购雙軌開發', '針對車用、医疗等高毛利应用', '協助寄送样品與規格确认流程'],
    zh: ['鎖定 R&D 與採購雙軌開發', '針對車用、醫療等高毛利應用', '協助寄送樣品與規格確認流程'],
      en: ['Dual-track outreach to R&D and Purchasing', 'Targeting high-margin auto/medical applications', 'Assisting with sampling and spec verification']
    },
    buyerTypes: {
      cn: ['EMS/CEM 電子代工厂', '原廠设备企业 (OEMs)', '電子元件分銷商 (Distributors)', '系統整合商 (System Integrators)'],
    zh: ['EMS/CEM 電子代工廠', '原廠設備企業 (OEMs)', '電子元件分銷商 (Distributors)', '系統整合商 (System Integrators)'],
      en: ['EMS/CEM Providers', 'Original Equipment Companies (OEMs)', 'Electronic Component Distributors', 'System Integrators']
    },
    strategy: {
      cn: ['工程師對接：直接聯繫 R&D 部門，提供規格書 (Datasheet) 與样品。', '替代料策略：針對缺料或 EOL 產品提供 Cross Reference 替代方案。', '小批量試產：展現對 NPI (新產品導入) 階段的支援能力。'],
    zh: ['工程師對接：直接聯繫 R&D 部門，提供規格書 (Datasheet) 與樣品。', '替代料策略：針對缺料或 EOL 產品提供 Cross Reference 替代方案。', '小批量試產：展現對 NPI (新產品導入) 階段的支援能力。'],
      en: ['Engineer to Engineer: Contact R&D directly with datasheets and samples.', 'Cross Reference: Offer alternatives for shortages or EOL parts.', 'NPI Support: Show capability to support small batch pilot runs.']
    },
    faq: [
      {
        question: { cn: '電子業開發周期會很久嗎？',
    zh: '電子業開發週期會很久嗎？', en: 'Is the development cycle long for electronics?' },
        answer: { cn: '是的，因為牽涉到承認書 (Spec-in) 與試產，通常需要 6-12 個月，但一旦導入，訂單非常稳定。',
    zh: '是的，因為牽涉到承認書 (Spec-in) 與試產，通常需要 6-12 個月，但一旦導入，訂單非常穩定。', en: 'Yes, due to Spec-in and pilot runs, it takes 6-12 months, but orders are very stable once designed in.' }
      },
      {
        question: { cn: '需要通過哪些验证？',
    zh: '需要通過哪些驗證？', en: 'What certifications are needed?' },
        answer: { cn: '基本如 ISO9001, UL 是必須的，若針對車用則需 IATF16949，医疗則需 ISO13485。',
    zh: '基本如 ISO9001, UL 是必須的，若針對車用則需 IATF16949，醫療則需 ISO13485。', en: 'ISO9001 and UL are basics. IATF16949 for automotive and ISO13485 for medical are often required.' }
      },
      {
        question: { cn: '如何切入大廠供應鏈？',
    zh: '如何切入大廠供應鏈？', en: 'How to enter big supply chains?' },
        answer: { cn: '通常從非核心料件或 Second Source 開始切入，建立實績後再逐步扩大合作份額。',
    zh: '通常從非核心料件或 Second Source 開始切入，建立實績後再逐步擴大合作份額。', en: 'Usually start as a Second Source or with non-core parts, then expand share after proving performance.' }
      }
    ]
  },
  {
    slug: 'packaging',
    title: {
      cn: '套件裝材料外贸開發 | 食品套件裝、工业套件裝、化妝品包材',
    zh: '套件裝材料外銷開發 | 食品套件裝、工業套件裝、化妝品套件材',
      en: 'Packaging Materials Export Development | Food, Industrial, Cosmetic Packaging'
    },
    description: {
      cn: '套件裝材料行业外贸開發。協助食品、化妝品包材廠，開發全球品牌商與大型套件裝经销商。',
    zh: '套件裝材料產業外銷開發。協助食品、化妝品套件材廠，開發全球品牌商與大型套件裝經銷商。',
      en: 'Export development for packaging materials. Helping food and cosmetic packaging plants reach global brands and large distributors.'
    },
    h1: {
      cn: '套件裝材料行业外贸客戶開發',
    zh: '套件裝材料產業外銷客戶開發',
      en: 'Packaging Materials Industry Export Development'
    },
    content: {
      cn: '隨著全球限塑政策與環保趨勢，創新與環保包材需求大增。我們協助您將具竞争力的套件裝解決方案推向國際市场。',
    zh: '隨著全球限塑政策與環保趨勢，創新與環保套件材需求大增。我們協助您將具競爭力的套件裝解決方案推向國際市場。',
      en: 'With plastic bans and eco-trends, demand for innovative eco-packaging is rising. We help bring your competitive solutions to the global market.'
    },
    features: {
      cn: ['開發美妝與食品品牌直接客戶', '鎖定大型套件裝材料渠道商', '強調環保材質 (PCR, Bio-based) 優勢'],
    zh: ['開發美妝與食品品牌直接客戶', '鎖定大型套件裝材料通路商', '強調環保材質 (PCR, Bio-based) 優勢'],
      en: ['Developing direct beauty/food brand clients', 'Targeting large packaging distributors', 'Highlighting eco-material (PCR, Bio-based) advantages']
    },
    buyerTypes: {
      cn: ['美妝保養品牌 (Indie Brands)', '食品飲料工厂 (F&B)', '套件裝材料批发商 (Packaging Distributors)', '電商物流公司 (3PL)'],
    zh: ['美妝保養品牌 (Indie Brands)', '食品飲料工廠 (F&B)', '套件裝材料批發商 (Packaging Distributors)', '電商物流公司 (3PL)'],
      en: ['Beauty & Skincare Brands', 'Food & Beverage Companies', 'Packaging Distributors', 'E-commerce Logistics (3PL)']
    },
    strategy: {
      cn: ['視覺营销：套件裝是視覺產品，開發信需附上精美的產品应用圖。', '環保訴求：強調可回收、可降解或 PCR 材質，符合歐美法規。', 'MOQ 策略：針對新興品牌提供較彈性的起訂量方案。'],
    zh: ['視覺行銷：套件裝是視覺產品，開發信需附上精美的產品應用圖。', '環保訴求：強調可回收、可降解或 PCR 材質，符合歐美法規。', 'MOQ 策略：針對新興品牌提供較彈性的起訂量方案。'],
      en: ['Visual Marketing: Include high-quality application photos in outreach.', 'Eco-Appeal: Highlight recyclable/PCR materials to meet regulations.', 'MOQ Strategy: Offer flexible MOQs for emerging brands.']
    },
    faq: [
      {
        question: { cn: '套件裝業運費佔比高，如何做外贸？',
    zh: '套件裝業運費佔比高，如何做外銷？', en: 'Shipping is high for packaging, how to export?' },
        answer: { cn: '我們會協助鎖定采购量大、能接受整櫃出货的买家，或是針對高單價的化妝品包材進行開發。',
    zh: '我們會協助鎖定採購量大、能接受整櫃出貨的買家，或是針對高單價的化妝品套件材進行開發。', en: 'We target high-volume buyers for FCL shipments or high-value cosmetic packaging sectors.' }
      },
      {
        question: { cn: '需要寄送样品嗎？',
    zh: '需要寄送樣品嗎？', en: 'Is sampling required?' },
        answer: { cn: '絕對需要。套件裝的手感與質感無法通过圖片完全傳達，我們會協助安排样品寄送流程。',
    zh: '絕對需要。套件裝的手感與質感無法透過圖片完全傳達，我們會協助安排樣品寄送流程。', en: 'Absolutely. Touch and texture cannot be fully conveyed digitally. We assist with the sampling process.' }
      },
      {
        question: { cn: '客製化模具費怎麼收？',
    zh: '客製化模具費怎麼收？', en: 'How to charge for custom molds?' },
        answer: { cn: '通常建議在报价單中分列模具費，或依據訂單量提供模具費返還机制，以降低买家決策門檻。',
    zh: '通常建議在報價單中分列模具費，或依據訂單量提供模具費返還機制，以降低買家決策門檻。', en: 'We suggest listing mold fees separately or offering rebates based on volume to lower the barrier to entry.' }
      }
    ]
  },
  {
    slug: 'industrial-materials',
    title: {
      cn: '工业材料外贸開發 | 塑膠原料、金屬材料、化工原料',
    zh: '工業材料外銷開發 | 塑膠原料、金屬材料、化工原料',
      en: 'Industrial Materials Export Development | Plastics, Metals, Chemicals'
    },
    description: {
      cn: '工业材料 B2B 開發。協助塑膠、金屬、化工原料供应商，開發海外工厂與终端用户。',
    zh: '工業材料 B2B 開發。協助塑膠、金屬、化工原料供應商，開發海外工廠與終端使用者。',
      en: 'B2B development for industrial materials. Helping plastics, metals, and chemical suppliers reach overseas factories and end-users.'
    },
    h1: {
      cn: '工业材料行业外贸客戶開發',
    zh: '工業材料產業外銷客戶開發',
      en: 'Industrial Materials Industry Export Development'
    },
    content: {
      cn: '工业材料的买家通常是製造工厂。我們通過海關数据分析，找出有持续進口需求的海外工厂，協助您建立稳定的供貨關係。',
    zh: '工業材料的買家通常是製造工廠。我們通過海關資料分析，找出有持續進口需求的海外工廠，協助您建立穩定的供貨關係。',
      en: 'Industrial material buyers are usually factories. We use customs data to find factories with consistent import needs and help you build stable supply chains.'
    },
    features: {
      cn: ['利用海關数据鎖定進口工厂', '開發區域型材料经销商', '強調供貨稳定性與價格竞争力'],
    zh: ['利用海關資料鎖定進口工廠', '開發區域型材料經銷商', '強調供貨穩定性與價格競爭力'],
      en: ['Using customs data to target importing factories', 'Developing regional material distributors', 'Emphasizing supply stability and price competitiveness']
    },
    buyerTypes: {
      cn: ['塑膠/橡膠射出廠 (Injection Molding)', '金屬加工厂 (Metalworking)', '化工贸易商 (Chemical Traders)', '建材企业'],
    zh: ['塑膠/橡膠射出廠 (Injection Molding)', '金屬加工廠 (Metalworking)', '化工貿易商 (Chemical Traders)', '建材企業'],
      en: ['Injection Molding Factories', 'Metalworking Shops', 'Chemical Traders', 'Building Material Companies']
    },
    strategy: {
      cn: ['数据導向：分析买家的進口頻率與供应商来源，找出切入點。', '寄樣测试：材料特性需經测试验证，提供小量試用样品。', '供應鏈安全：強調多產地供貨能力，降低买家斷鏈风险。'],
    zh: ['資料導向：分析買家的進口頻率與供應商來源，找出切入點。', '寄樣測試：材料特性需經測試驗證，提供小量試用樣品。', '供應鏈安全：強調多產地供貨能力，降低買家斷鏈風險。'],
      en: ['Data-Driven: Analyze import frequency and current suppliers to find entry points.', 'Sampling: Provide trial samples for material testing verification.', 'Supply Chain Security: Highlight multi-origin supply to reduce risk.']
    },
    faq: [
      {
        question: { cn: '大宗原物料價格波動大，怎麼談？',
    zh: '大宗原物料價格波動大，怎麼談？', en: 'Commodity prices fluctuate, how to negotiate?' },
        answer: { cn: '我們主要負責建立聯繫窗口，價格谈判與报价策略會由貴司業務团队直接與买家對接。',
    zh: '我們主要負責建立聯繫窗口，價格談判與報價策略會由貴司業務團隊直接與買家對接。', en: 'We establish the connection; price negotiation and quoting are handled directly by your sales team.' }
      },
      {
        question: { cn: '如何證明材料质量？',
    zh: '如何證明材料品質？', en: 'How to prove material quality?' },
        answer: { cn: '提供 TDS (技術数据表)、MSDS (物質安全数据表) 以及第三方檢測報告 (SGS) 是建立信任的基礎。',
    zh: '提供 TDS (技術資料表)、MSDS (物質安全資料表) 以及第三方檢測報告 (SGS) 是建立信任的基礎。', en: 'Providing TDS, MSDS, and third-party reports (SGS) is fundamental to building trust.' }
      },
      {
        question: { cn: '適合開發哪些國家？',
    zh: '適合開發哪些國家？', en: 'Which countries are suitable?' },
        answer: { cn: '新興企業國家（如越南、墨西哥、印度）對於工业基礎材料的需求成长最快。',
    zh: '新興企業國家（如越南、墨西哥、印度）對於工業基礎材料的需求成長最快。', en: 'Emerging manufacturing hubs (Vietnam, Mexico, India) have the fastest growing demand for industrial materials.' }
      }
    ]
  }
]

export function getIndustry(slug: string): IndustryData | undefined {
  return industries.find(i => i.slug === slug)
}
