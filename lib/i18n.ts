﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿export type Lang = 'zh' | 'en' | 'cn'

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
    nav_free_analysis: '获取设备推荐',
    
    // Machinery Dropdown
    nav_machinery_packaging: '包装机械',
    nav_machinery_food: '食品加工机械',
    nav_machinery_filling: '灌装与封口',
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
    nav_sol_line: '生产线支持',
    nav_sol_custom: '定制机械',
    nav_sol_export: '出口协调',

    meta_home_title: 'SunGene | 包装、食品加工与工业机械解决方案',
    meta_home_desc: 'SunGene 为全球买家提供包装、食品加工与工业应用机械解决方案，从设备匹配到出口交付，协助客户找到更合适的设备方案。',
    meta_keywords: '包装机械, 食品加工机械, 工业设备, 定制机械',
    form_submitting: '提交中...',
    form_success_title: '提交成功',
    form_success_desc: '我们已收到您的需求，将尽快与您联系。',
    form_error_title: '提交失败',
    form_error_desc: '请稍后再试，或直接联系我们。',
    footer_copyright: '© 2026 SunGene. 版权所有。',
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
    nav_free_analysis: '取得設備推薦',
    
    // Machinery Dropdown
    nav_machinery_packaging: '包裝機械',
    nav_machinery_food: '食品加工機械',
    nav_machinery_filling: '灌裝與封口',
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
    nav_sol_line: '生產線支援',
    nav_sol_custom: '客製機械',
    nav_sol_export: '出口協調',

    meta_home_title: 'SunGene | 包裝、食品加工與工業機械解決方案',
    meta_home_desc: 'SunGene 為全球買家提供包裝、食品加工與工業應用機械解決方案，從設備匹配到出口交付，協助客戶找到更合適的設備方案。',
    meta_keywords: '包裝機械, 食品加工機械, 工業設備, 客製機械',
    form_submitting: '提交中...',
    form_success_title: '提交成功',
    form_success_desc: '我們已收到您的需求，將儘快與您聯繫。',
    form_error_title: '提交失敗',
    form_error_desc: '請稍後再試，或直接聯繫我們。',
    footer_copyright: '© 2026 SunGene. 版權所有。',
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
    nav_free_analysis: 'Request Recommendation',

    // Machinery Dropdown
    nav_machinery_packaging: 'Packaging Machinery',
    nav_machinery_food: 'Food Processing Machinery',
    nav_machinery_filling: 'Filling & Sealing',
    nav_machinery_conveying: 'Conveying & Automation',
    nav_machinery_custom: 'Customized Machinery',

    // Industries Dropdown
    nav_ind_powder: 'Powder Products',
    nav_ind_liquid: 'Liquid Products',
    nav_ind_granule: 'Granule Products',
    nav_ind_food: 'Food Production',
    nav_ind_consumer: 'Consumer Goods',

    // Solutions Dropdown
    nav_sol_single: 'Single Machine',
    nav_sol_semi: 'Semi-Automatic Setup',
    nav_sol_line: 'Production Line Support',
    nav_sol_custom: 'Custom Machinery',
    nav_sol_export: 'Export Coordination',

    meta_home_title: 'SunGene | Packaging, Food Processing & Industrial Machinery',
    meta_home_desc: 'SunGene provides machinery solutions for packaging, food processing, and industrial applications — helping global buyers move from machine selection to export delivery.',
    meta_keywords: 'packaging machinery, food processing machinery, industrial equipment, custom machinery',
    form_submitting: 'Submitting...',
    form_success_title: 'Request Received',
    form_success_desc: 'We have received your inquiry and will get back to you shortly.',
    form_error_title: 'Submission Failed',
    form_error_desc: 'Please try again later or contact us directly.',
    footer_copyright: '© 2026 SunGene. All rights reserved.',
  }
}

export function t(lang: Lang, key: string): string {
  // @ts-ignore
  return dict[lang]?.[key] ?? dict['en'][key] ?? key
}

export type Dictionary = typeof dict['en']

export const getDictionary = async (lang: Lang): Promise<Dictionary> => dict[lang]
