export type Lang = 'zh' | 'en' | 'cn'

const dict = {
  'cn': {
    // Navigation
    nav_home: '首页',
    nav_machinery: '机械设备',
    nav_industries: '应用行业',
    nav_solutions: '解决方案',
    nav_resources: '资源中心',
    nav_about: '关于我们',
    nav_contact: '联系我们',
    nav_free_analysis: '获取报价',

    // Machinery Dropdown
    nav_machinery_packaging: '包装机械',
    nav_machinery_food: '食品加工设备',
    nav_machinery_filling: '灌装与封口系统',
    nav_machinery_conveying: '输送与自动化',
    nav_machinery_custom: '定制机械',

    // Industries Dropdown
    nav_ind_powder: '粉末产品',
    nav_ind_liquid: '液体产品',
    nav_ind_granule: '颗粒产品',
    nav_ind_food: '食品生产',
    nav_ind_consumer: '消费品',

    // Solutions Dropdown
    nav_sol_single: '单机设备',
    nav_sol_semi: '半自动方案',
    nav_sol_line: '生产线方案',
    nav_sol_custom: '定制机械',
    nav_sol_export: '出口服务',

    meta_home_title: 'SunGene | 包装机械、食品加工设备与工业自动化 | 台湾制造商',
    meta_home_desc: 'SunGene 制造并出口包装机、食品加工设备、灌装封口系统和自动化生产线。CE认证、工厂直销、出口50多个国家。',
    meta_keywords: '包装机械制造商, 食品加工设备, 灌装机供应商, 封口机, 自动化生产线, 台湾机械出口, 工业设备',
    form_submitting: '提交中...',
    form_success_title: '提交成功',
    form_success_desc: '我们已收到您的需求，将在24小时内与您联系。',
    form_error_title: '提交失败',
    form_error_desc: '请稍后再试，或直接发邮件至 contact@sungene.net。',
    footer_copyright: '© 2026 SunGene Co., LTD. 版权所有。台湾台中市。',
  },
  'zh': {
    // Navigation
    nav_home: '首頁',
    nav_machinery: '機械設備',
    nav_industries: '應用產業',
    nav_solutions: '解決方案',
    nav_resources: '資源中心',
    nav_about: '關於我們',
    nav_contact: '聯絡我們',
    nav_free_analysis: '取得報價',

    // Machinery Dropdown
    nav_machinery_packaging: '包裝機械',
    nav_machinery_food: '食品加工設備',
    nav_machinery_filling: '灌裝與封口系統',
    nav_machinery_conveying: '輸送與自動化',
    nav_machinery_custom: '客製機械',

    // Industries Dropdown
    nav_ind_powder: '粉末產品',
    nav_ind_liquid: '液體產品',
    nav_ind_granule: '顆粒產品',
    nav_ind_food: '食品生產',
    nav_ind_consumer: '消費品',

    // Solutions Dropdown
    nav_sol_single: '單機設備',
    nav_sol_semi: '半自動方案',
    nav_sol_line: '生產線方案',
    nav_sol_custom: '客製機械',
    nav_sol_export: '出口服務',

    meta_home_title: 'SunGene | 包裝機械、食品加工設備與工業自動化 | 台灣製造商',
    meta_home_desc: 'SunGene 製造並出口包裝機、食品加工設備、灌裝封口系統和自動化生產線。CE認證、工廠直銷、出口50多個國家。',
    meta_keywords: '包裝機械製造商, 食品加工設備, 灌裝機, 封口機, 自動化生產線, 台灣機械出口, 工業設備',
    form_submitting: '提交中...',
    form_success_title: '提交成功',
    form_success_desc: '我們已收到您的需求，將在24小時內與您聯繫。',
    form_error_title: '提交失敗',
    form_error_desc: '請稍後再試，或直接發郵件至 contact@sungene.net。',
    footer_copyright: '© 2026 SunGene Co., LTD. 版權所有。台灣台中市。',
  },
  'en': {
    // Navigation
    nav_home: 'Home',
    nav_machinery: 'Machinery',
    nav_industries: 'Industries',
    nav_solutions: 'Solutions',
    nav_resources: 'Resources',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    nav_free_analysis: 'Get a Quote',

    // Machinery Dropdown
    nav_machinery_packaging: 'Packaging Machinery',
    nav_machinery_food: 'Food Processing Equipment',
    nav_machinery_filling: 'Filling & Sealing Systems',
    nav_machinery_conveying: 'Conveying & Automation',
    nav_machinery_custom: 'Customized Machinery',

    // Industries Dropdown
    nav_ind_powder: 'Powder Products',
    nav_ind_liquid: 'Liquid Products',
    nav_ind_granule: 'Granule & Snacks',
    nav_ind_food: 'Food Production',
    nav_ind_consumer: 'Consumer Goods',

    // Solutions Dropdown
    nav_sol_single: 'Single Machine',
    nav_sol_semi: 'Semi-Automatic Setup',
    nav_sol_line: 'Production Line',
    nav_sol_custom: 'Custom Machinery',
    nav_sol_export: 'Export Service',

    meta_home_title: 'SunGene | Packaging Machinery, Food Processing Equipment & Industrial Automation | Taiwan Manufacturer',
    meta_home_desc: 'SunGene manufactures and exports packaging machines, food processing equipment, filling & sealing systems, and automated production lines. CE certified, factory-direct pricing, export to 50+ countries.',
    meta_keywords: 'packaging machinery manufacturer, food processing equipment, filling machine supplier, sealing machine, automated production line, Taiwan machinery exporter, industrial equipment',
    form_submitting: 'Submitting...',
    form_success_title: 'Request Received',
    form_success_desc: 'We have received your inquiry and will respond within 24 hours.',
    form_error_title: 'Submission Failed',
    form_error_desc: 'Please try again later or email us at contact@sungene.net.',
    footer_copyright: '© 2026 SunGene Co., LTD. All rights reserved. Taichung, Taiwan.',
  }
}

export function t(lang: Lang, key: string): string {
  // @ts-ignore
  return dict[lang]?.[key] ?? dict['en'][key] ?? key
}

export type Dictionary = typeof dict['en']

export const getDictionary = async (lang: Lang): Promise<Dictionary> => dict[lang]
