import { Lang } from '@/lib/i18n'

export type FAQCategory = 'general' | 'service' | 'process' | 'pricing'

export interface FAQItem {
  question: { zh: string; en: string }
  answer: { zh: string; en: string }
  category: FAQCategory
}

export const faqs: FAQItem[] = [
  // General
  {
    category: 'general',
    question: { zh: '你們只服務特定國家企業嗎？', en: 'Do you only serve specific countries?' },
    answer: { zh: '不，我們服務全球客戶。團隊具備多語能力，也熟悉北美、歐洲、日本與東南亞等主要市場的商務環境。', en: 'No, we serve clients globally. Our team is multilingual and familiar with business cultures in major markets like NA, EU, Japan, and SEA.' },
  },
  {
    category: 'general',
    question: { zh: '是否適合我的產業？', en: 'Is it suitable for my industry?' },
    answer: { zh: '只要你的目標客戶是企業客戶，例如製造商、進口商、經銷商或品牌商，我們的服務通常都適用。我們已服務過機械、電子、紡織、化工、食品與醫療器材等多個領域。', en: 'As long as your target is B2B (manufacturers, importers, distributors), our service applies. We have served machinery, electronics, textile, chemical, food, medical devices, etc.' },
  },
  {
    category: 'general',
    question: { zh: '與聘請外銷業務有何差別？', en: 'Difference from hiring sales?' },
    answer: { zh: '自行聘請業務需要負擔人事、培訓與管理成本，通常也需要一段時間才能看到成果。SunGene 提供可立即上手的團隊與流程，能更快啟動海外開發，整體成本也通常低於自行建立完整團隊。', en: 'Hiring sales involves overhead, training costs, and management risks, taking months to yield results. SunGene provides an instant pro team, skipping training, often at a lower cost than one senior hire.' },
  },

  // Service
  {
    category: 'service',
    question: { zh: '多久可以看到詢問或回覆？', en: 'How long to see inquiries?' },
    answer: { zh: '若是外銷客戶開發服務，通常在專案啟動後 2 至 4 週內會開始累積穩定回覆與詢問，實際速度仍會受到產業與市場影響。若是外銷業務外包服務，通常第一週會先完成交接與流程設定，之後開始進入可追蹤的開發與跟進節奏。', en: 'For Export Lead Generation, you typically see stable replies and inquiry accumulation in 2–4 weeks depending on market and industry. For Export Sales Outsourcing, we usually complete handover and start a trackable outreach + follow-up workflow within the first week.' },
  },
  {
    category: 'service',
    question: { zh: '你們會簽署保密協定嗎？', en: 'Do you sign NDAs?' },
    answer: { zh: '會。我們重視客戶的商業機密，合作開始前可簽署保密協定，確保客戶資料、價格策略與技術文件受到妥善保護。', en: 'Yes, we value client confidentiality. We sign strict NDAs before starting to ensure your client data, pricing, and tech docs remain secure.' },
  },
  {
    category: 'service',
    question: { zh: '名單資料的準確度如何？', en: 'How accurate is the data?' },
    answer: { zh: '名單會經過系統驗證與人工檢查，以降低無效聯絡資料比例。若專案中發現無效資料比例明顯偏高，我們也會協助補齊與調整。', en: 'Our lists undergo machine verification and manual checks, guaranteeing 95%+ email validity. We promise to replace invalid leads for free if the bounce rate is high.' },
  },

  // Process
  {
    category: 'process',
    question: { zh: '合作流程是怎樣的？', en: 'What is the process?' },
    answer: { zh: '通常流程為：先確認需求與目標市場，接著簽署合作文件與保密協定，再進行產品與資料交接、名單建立、流程設定，最後正式啟動並定期回報成效。', en: '1. Consultation & Market Goal 2. Contract & NDA 3. Product/Data Handover 4. System Setup & List Building 5. Launch 6. Regular Reporting.' },
  },
  {
    category: 'process',
    question: { zh: '我需要提供什麼資料？', en: 'What do I need to provide?' },
    answer: { zh: '通常需要提供產品型錄、公司簡介、理想客戶輪廓，以及你目前可接受的報價策略或合作條件，讓我們能更準確規劃開發方向。', en: 'We need your Product Catalog, Company Profile, Ideal Customer Profile (ICP), and current Price List or quoting strategy.' },
  },

  // Pricing
  {
    category: 'pricing',
    question: { zh: '你們如何收費？', en: 'How do you charge?' },
    answer: { zh: '目前主要提供三種合作方式：名單專案、開發專案，以及外銷外包服務月費制。實際費用會依服務範圍、目標市場與執行深度而有所不同。', en: 'Three models: "List Purchase" per lead; "Project Outreach" per project; "Outsourcing" monthly retainer. See Pricing page for details.' },
  },
  {
    category: 'pricing',
    question: { zh: '是否有最低合作期限？', en: 'Minimum contract term?' },
    answer: { zh: '名單與主動開發通常可依專案規模安排為一次性或短期合作；若是外銷外包服務，通常會建議至少合作 6 個月，較能建立穩定的開發節奏與成果累積。', en: '"Lead Gen" and "Outreach" are one-time or short-term. "Outsourcing" recommends a 6-month minimum to build a stable sales funnel.' },
  },
]
