export type Lang = 'zh' | 'en'

const dict: Record<Lang, Record<string, string>> = {
  'zh': {
    // Navigation
    nav_home: '首頁',
    nav_services: '服務',
    nav_process: '合作流程',
    nav_cases: '成功案例',
    nav_about: '關於我們',
    nav_contact: '聯絡我們',
    nav_free_analysis: '免費市場分析',
    cta_start: '開始開發海外客戶',
    cta_analysis: '免費市場分析',
    cta_consult: '預約諮詢',

    // Hero
    hero_title: '幫台灣企業開發海外買家',
    hero_subtitle: '從客戶名單建立、開發信，到詢盤跟進的外貿外包服務。',
    hero_cta_start: '開始開發海外客戶',
    hero_cta_analysis: '免費市場分析',

    // Home - Services
    home_service_1_title: '客戶名單開發',
    home_service_1_desc: 'Lead Generation',
    home_service_2_title: '海外客戶開發',
    home_service_2_desc: 'Cold Outreach',
    home_service_3_title: '外貿外包服務',
    home_service_3_desc: 'Sales Outsourcing',
    
    // Home - Why Us
    why_title: '為什麼選擇我們',
    why_1: '精準客戶搜尋',
    why_2: '主動市場開發',
    why_3: '完整外貿支援',

    // Home - Process
    process_title: '合作流程',
    process_1_title: '市場分析',
    process_1_desc: 'Market Research',
    process_2_title: '買家識別',
    process_2_desc: 'Buyer Identification',
    process_3_title: '開發活動',
    process_3_desc: 'Outreach Campaign',
    process_4_title: '詢盤交付',
    process_4_desc: 'Lead Delivery',

    // Home - Cases
    case_title: '成功案例',
    case_cta: '查看更多案例',
    
    // Services Page
    service_title: '我們的服務',
    service_lead_gen_title: '客戶名單開發',
    service_lead_gen_desc: '建立精準海外採購商名單',
    service_lead_gen_sub1: '進口商資料分析 (Importer Research)',
    service_lead_gen_sub2: '買家資料庫建立 (Buyer Database)',
    service_lead_gen_sub3: '市場情報 (Market Intelligence)',

    service_outreach_title: '海外客戶開發',
    service_outreach_desc: '主動開發海外採購商',
    service_outreach_sub1: '開發信行銷 (Cold Email Campaign)',
    service_outreach_sub2: 'LinkedIn 開發 (LinkedIn Outreach)',
    service_outreach_sub3: '回覆管理 (Response Management)',

    service_sales_title: '外貿業務外包',
    service_sales_desc: 'SunGene 成為你的海外業務團隊',
    service_sales_sub1: '詢盤管理 (Inquiry Management)',
    service_sales_sub2: '報價支援 (Quotation Support)',
    service_sales_sub3: '客戶跟進 (Customer Follow-up)',

    // Free Market Analysis Page
    analysis_title: '免費海外市場分析',
    analysis_subtitle: '提交產品資訊，我們將分析海外市場、潛在買家與市場機會。此服務適合初次接觸 SunGene 的企業。',
    form_company: '公司名稱',
    form_product: '主營產品',
    form_market: '目標市場',
    form_email: '企業信箱',
    form_submit: '獲取分析報告',
    form_submitting: '提交中...',
    form_success_title: '提交成功',
    form_success_desc: '我們已收到您的資訊，將在 48 小時內寄送分析報告至您的信箱。',
    form_error_title: '提交失敗',
    form_error_desc: '請稍後再試，或直接聯繫我們。',

    // About Page
    about_title: '關於 SunGene',
    about_desc: 'SunGene 是一家專注於外貿增長的服務公司，我們不賣軟體，而是直接幫製造商找到買家。透過精準的名單與專業的開發流程，我們協助台灣企業拓展全球市場。',

    // Contact Page
    contact_title: '聯絡我們',
    contact_subtitle: '有具體合作需求？歡迎直接與我們聯繫。',
    form_name: '聯絡人姓名',
    form_message: '諮詢內容',
    contact_email: 'Email',
    contact_whatsapp: 'WhatsApp',
    contact_submit: '發送訊息',

    // SEO
    meta_home_title: 'SunGene 外貿客戶開發與外貿外包服務 | 台灣外貿拓展專家',
    meta_home_desc: 'SunGene 幫助台灣企業開發海外客戶，提供從客戶名單建立、開發信撰寫到詢盤跟進的完整外貿外包服務。',
    meta_keywords: '外貿客戶開發, 外貿外包, 海外客戶開發, B2B業務外包',
    
    // Footer
    footer_copyright: '© 2026 SunGene. All rights reserved.',
  },
  'en': {
    // Navigation
    nav_home: 'Home',
    nav_services: 'Services',
    nav_process: 'How It Works',
    nav_cases: 'Case Studies',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_free_analysis: 'Free Market Analysis',
    cta_start: 'Start Export Growth',
    cta_analysis: 'Get Free Market Analysis',
    cta_consult: 'Book Consultation',

    // Hero
    hero_title: 'Your Outsourced Export Sales Team',
    hero_subtitle: 'We help manufacturers acquire overseas buyers through targeted lead generation, cold outreach, and professional sales support.',
    hero_cta_start: 'Start Export Growth',
    hero_cta_analysis: 'Get Free Market Analysis',

    // Home - Services
    home_service_1_title: 'Lead Generation',
    home_service_1_desc: 'Targeted Buyer Lists',
    home_service_2_title: 'Cold Outreach',
    home_service_2_desc: 'Proactive Development',
    home_service_3_title: 'Sales Outsourcing',
    home_service_3_desc: 'Export Support',
    
    // Home - Why Us
    why_title: 'Why Choose SunGene',
    why_1: 'Precision Buyer Targeting',
    why_2: 'Proactive Market Penetration',
    why_3: 'End-to-End Export Support',

    // Home - Process
    process_title: 'How It Works',
    process_1_title: 'Market Research',
    process_1_desc: 'Analyze target markets & competitors',
    process_2_title: 'Buyer Identification',
    process_2_desc: 'Build verified prospect lists',
    process_3_title: 'Outreach Campaign',
    process_3_desc: 'Execute cold email & LinkedIn campaigns',
    process_4_title: 'Lead Delivery',
    process_4_desc: 'Hand over qualified inquiries',

    // Home - Cases
    case_title: 'Success Stories',
    case_cta: 'View All Case Studies',
    
    // Services Page
    service_title: 'Our Services',
    service_lead_gen_title: 'Lead Generation',
    service_lead_gen_desc: 'Building targeted overseas buyer lists based on ideal customer profiles.',
    service_lead_gen_sub1: 'Importer Research & Verification',
    service_lead_gen_sub2: 'Custom Buyer Database Building',
    service_lead_gen_sub3: 'Market Intelligence & Competitor Analysis',

    service_outreach_title: 'Cold Outreach',
    service_outreach_desc: 'Proactively engaging potential buyers to generate qualified leads.',
    service_outreach_sub1: 'Cold Email Campaigns',
    service_outreach_sub2: 'LinkedIn Outreach Strategies',
    service_outreach_sub3: 'Response Handling & Qualification',

    service_sales_title: 'Sales Outsourcing',
    service_sales_desc: 'Acting as your dedicated export sales department.',
    service_sales_sub1: 'Inquiry Management & Screening',
    service_sales_sub2: 'Quotation & Negotiation Support',
    service_sales_sub3: 'Long-term Customer Follow-up',

    // Free Market Analysis Page
    analysis_title: 'Free Export Market Analysis',
    analysis_subtitle: 'Submit your product details to receive a complimentary market analysis report covering potential markets and buyer segments.',
    form_company: 'Company Name',
    form_product: 'Main Products',
    form_market: 'Target Market(s)',
    form_email: 'Business Email',
    form_submit: 'Request Analysis',
    form_submitting: 'Submitting...',
    form_success_title: 'Request Received',
    form_success_desc: 'We have received your request. Your market analysis report will be sent to your email within 48 hours.',
    form_error_title: 'Submission Failed',
    form_error_desc: 'Please try again later or contact us directly.',

    // About Page
    about_title: 'About SunGene',
    about_desc: 'SunGene is a specialized export growth partner. We don\'t sell software; we deliver buyers. By combining data-driven prospecting with professional outreach, we help manufacturers expand their global footprint efficiently.',

    // Contact Page
    contact_title: 'Contact Us',
    contact_subtitle: 'Ready to scale your export sales? Get in touch with our team.',
    form_name: 'Your Name',
    form_message: 'Message / Inquiry',
    contact_email: 'Email',
    contact_whatsapp: 'WhatsApp',
    contact_submit: 'Send Message',

    // SEO
    meta_home_title: 'SunGene | Outsourced Export Sales & B2B Lead Generation',
    meta_home_desc: 'SunGene helps manufacturers acquire overseas buyers through targeted lead generation, cold outreach, and professional sales support.',
    meta_keywords: 'export lead generation, export outsourcing, B2B sales outsourcing, overseas buyer finding',
    
    // Footer
    footer_copyright: '© 2026 SunGene. All rights reserved.',
  },
}

export function t(lang: Lang, key: string): string {
  return dict[lang]?.[key] ?? dict['en'][key] ?? key
}
