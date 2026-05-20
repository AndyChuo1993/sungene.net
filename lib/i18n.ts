// Languages reduced from 12 to 5 at runtime (2026-05-14). The 7 dropped
// locales (pt/ko/ja/ar/th/vi/de) were machine-translated duplicates of EN —
// Google flagged them as "Duplicate, Google chose different canonical".
// Old URLs are 308-redirected to /en by proxy.ts. The Lang *type* still
// includes all 12 so existing per-locale Records in components/pages compile,
// but only ALL_LANGS is iterated for sitemap, hreflang and static params.
export type Lang = 'en' | 'zh' | 'cn' | 'fr' | 'es' | 'pt' | 'ko' | 'ja' | 'ar' | 'th' | 'vi' | 'de'

export const ALL_LANGS: Lang[] = ['en', 'zh', 'cn', 'fr', 'es']

const dict: Record<string, Record<string, string>> = {
  'cn': {
    nav_home: '首页', nav_machinery: '机械设备', nav_industries: '应用行业', nav_solutions: '解决方案',
    nav_sourcing: '采购伙伴',
    nav_resources: '资源中心', nav_recommend: '采购评估', nav_about: '关于我们', nav_contact: '联系我们', nav_free_analysis: '免费采购评估',
    nav_machinery_packaging: '包装机械', nav_machinery_food: '食品加工设备',
    nav_machinery_filling: '灌装与封口系统', nav_machinery_conveying: '输送与自动化', nav_machinery_custom: '定制机械',
    nav_ind_powder: '粉末产品', nav_ind_liquid: '液体产品', nav_ind_granule: '颗粒产品',
    nav_ind_food: '食品采购', nav_ind_consumer: '消费品',
    nav_sol_single: '单机设备', nav_sol_semi: '半自动方案', nav_sol_line: '整线整合',
    nav_sol_custom: '定制机械',
    meta_home_title: 'SunGene | 台湾+中国采购 | 客制纸盒礼品包装专长 + 全品类企业礼赠品',
    meta_home_desc: 'SunGene 是台湾+中国双公司采购伙伴。Alibaba 公开可验证的专长是客制纸盒礼品包装(月饼礼盒、品牌礼盒、零售包装、瓦楞纸箱、纸袋)。其他企业礼赠品(毛毯、印制品、服饰、马克杯)通过合作工厂网络采购。自有员工现场 AQL 品检。台湾公司开发票。MOQ USD 1,000。',
    meta_keywords: '客制纸盒礼品包装, 月饼礼盒采购, 台湾中国采购伙伴, 双公司结构采购, 企业礼赠品采购, 品牌礼盒代工, 自有员工 AQL 品检, 合作工厂网络采购, Alibaba 高星商家, MOQ 1000 美金',
    form_submitting: '提交中...', form_success_title: '提交成功',
    form_success_desc: '我们已收到您的需求，将在24小时内与您联系。',
    form_error_title: '提交失败', form_error_desc: '请稍后再试，或直接发邮件至 contact@sungene.net。',
    footer_copyright: '© 2026 SunGene Co., LTD. 版权所有。台湾台中市。',
  },
  'zh': {
    nav_home: '首頁', nav_machinery: '機械設備', nav_industries: '應用產業', nav_solutions: '解決方案',
    nav_sourcing: '採購夥伴',
    nav_resources: '資源中心', nav_recommend: '採購評估', nav_about: '關於我們', nav_contact: '聯絡我們', nav_free_analysis: '免費採購評估',
    nav_machinery_packaging: '包裝機械', nav_machinery_food: '食品加工設備',
    nav_machinery_filling: '灌裝與封口系統', nav_machinery_conveying: '輸送與自動化', nav_machinery_custom: '客製機械',
    nav_ind_powder: '粉末產品', nav_ind_liquid: '液體產品', nav_ind_granule: '顆粒產品',
    nav_ind_food: '食品採購', nav_ind_consumer: '消費品',
    nav_sol_single: '單機設備', nav_sol_semi: '半自動方案', nav_sol_line: '整線整合',
    nav_sol_custom: '客製機械',
    meta_home_title: 'SunGene | 台灣+中國採購 | 客製紙盒禮品包裝專長 + 全品類企業禮贈品',
    meta_home_desc: 'SunGene 是台灣+中國雙公司採購夥伴。Alibaba 公開可驗證的專長是客製紙盒禮品包裝(月餅禮盒、品牌禮盒、零售包裝、瓦楞紙箱、紙袋)。其他企業禮贈品(毛毯、印製品、服飾、馬克杯)透過合作工廠網絡採購。自有員工現場 AQL 品檢。台灣公司開發票。MOQ USD 1,000。',
    meta_keywords: '客製紙盒禮品包裝, 月餅禮盒採購, 台灣中國採購夥伴, 雙公司結構採購, 企業禮贈品採購, 品牌禮盒代工, 自有員工 AQL 品檢, 合作工廠網絡採購, Alibaba 高星商家, MOQ 1000 美金',
    form_submitting: '提交中...', form_success_title: '提交成功',
    form_success_desc: '我們已收到您的需求，將在24小時內與您聯繫。',
    form_error_title: '提交失敗', form_error_desc: '請稍後再試，或直接發郵件至 contact@sungene.net。',
    footer_copyright: '© 2026 SunGene Co., LTD. 版權所有。台灣台中市。',
  },
  'en': {
    nav_home: 'Home', nav_machinery: 'Machinery', nav_industries: 'Industries', nav_solutions: 'Solutions',
    nav_sourcing: 'Sourcing',
    nav_resources: 'Resources', nav_recommend: 'Assessment', nav_about: 'About Us', nav_contact: 'Contact', nav_free_analysis: 'Get Assessment',
    nav_machinery_packaging: 'Packaging Machinery', nav_machinery_food: 'Food Processing Equipment',
    nav_machinery_filling: 'Filling & Sealing Systems', nav_machinery_conveying: 'Conveying & Automation',
    nav_machinery_custom: 'Customized Machinery',
    nav_ind_powder: 'Powder Products', nav_ind_liquid: 'Liquid Products', nav_ind_granule: 'Granule & Snacks',
    nav_ind_food: 'Food Processing', nav_ind_consumer: 'Consumer Goods',
    nav_sol_single: 'Single Machine', nav_sol_semi: 'Semi-Automatic Setup', nav_sol_line: 'Line Integration',
    nav_sol_custom: 'Custom Machinery',
    meta_home_title: 'SunGene | Taiwan + China Paper Gift Packaging Sourcing — Mooncake Boxes, Corporate Gifts',
    meta_home_desc: 'Taiwan + China dual-entity sourcing partner. Alibaba-verifiable specialty: custom paper gift packaging (mooncake boxes, gift boxes, retail packaging). Other corporate gifts via vetted factory network. Dedicated in-house QC. Taiwan-registered invoicing. MOQ USD 1,000.',
    meta_keywords: 'custom paper gift packaging, mooncake gift box manufacturer, Taiwan China dual-entity sourcing, corporate gifts sourcing partner, branded merchandise OEM, brand gift box sourcing, retail packaging sourcing, on-site AQL inspection, MOQ 1000 corporate gifts',
    form_submitting: 'Submitting...', form_success_title: 'Request Received',
    form_success_desc: 'We have received your inquiry and will respond within 24 hours.',
    form_error_title: 'Submission Failed', form_error_desc: 'Please try again later or email us at contact@sungene.net.',
    footer_copyright: '© 2026 SunGene Co., LTD. All rights reserved. Taichung, Taiwan.',
  },
  'fr': {
    nav_home: 'Accueil', nav_machinery: 'Machines', nav_industries: 'Industries', nav_solutions: 'Solutions',
    nav_sourcing: 'Sourcing',
    nav_resources: 'Ressources', nav_recommend: 'Évaluation', nav_about: 'À propos', nav_contact: 'Contact', nav_free_analysis: 'Évaluation gratuite',
    nav_machinery_packaging: 'Machines d\'emballage', nav_machinery_food: 'Équipements agroalimentaires',
    nav_machinery_filling: 'Remplissage et scellage', nav_machinery_conveying: 'Convoyage et automatisation',
    nav_machinery_custom: 'Machines sur mesure',
    nav_ind_powder: 'Produits en poudre', nav_ind_liquid: 'Produits liquides', nav_ind_granule: 'Granulés et snacks',
    nav_ind_food: 'Transformation alimentaire', nav_ind_consumer: 'Biens de consommation',
    nav_sol_single: 'Machine individuelle', nav_sol_semi: 'Semi-automatique', nav_sol_line: 'Intégration de ligne',
    nav_sol_custom: 'Machine sur mesure',
    meta_home_title: "SunGene | Sourcing emballage cadeau papier Taïwan + Chine — boîtes mooncake, cadeaux corporate",
    meta_home_desc: "Partenaire sourcing bi-entité Taïwan + Chine. Spécialité vérifiable sur Alibaba : emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux, emballage retail). Autres cadeaux corporate via réseau d'usines vérifiées. Personnel QC dédié sur site. Facturation Taïwan. MOQ 1 000 USD.",
    meta_keywords: "sourcing emballage cadeau papier, fabricant boîtes mooncake, sourcing bi-entité Taïwan Chine, partenaire sourcing cadeaux corporate, sourcing boîtes-cadeaux marque, sourcing emballage retail, fournisseur Alibaba emballage, inspection AQL sur site, MOQ 1000 cadeaux corporate",
    form_submitting: 'Envoi en cours...', form_success_title: 'Demande reçue',
    form_success_desc: 'Nous avons bien reçu votre demande et vous répondrons sous 24 heures.',
    form_error_title: 'Échec de l\'envoi', form_error_desc: 'Veuillez réessayer ou nous écrire à contact@sungene.net.',
    footer_copyright: '© 2026 SunGene Co., LTD. Tous droits réservés. Taichung, Taïwan.',
  },
  'es': {
    nav_home: 'Inicio', nav_machinery: 'Maquinaria', nav_industries: 'Industrias', nav_solutions: 'Soluciones',
    nav_sourcing: 'Sourcing',
    nav_resources: 'Recursos', nav_recommend: 'Evaluación', nav_about: 'Nosotros', nav_contact: 'Contacto', nav_free_analysis: 'Evaluación gratuita',
    nav_machinery_packaging: 'Maquinaria de empaque', nav_machinery_food: 'Equipos de procesamiento de alimentos',
    nav_machinery_filling: 'Llenado y sellado', nav_machinery_conveying: 'Transporte y automatización',
    nav_machinery_custom: 'Maquinaria personalizada',
    nav_ind_powder: 'Productos en polvo', nav_ind_liquid: 'Productos líquidos', nav_ind_granule: 'Granulados y snacks',
    nav_ind_food: 'Procesamiento de alimentos', nav_ind_consumer: 'Bienes de consumo',
    nav_sol_single: 'Máquina individual', nav_sol_semi: 'Semiautomático', nav_sol_line: 'Integración de línea',
    nav_sol_custom: 'Maquinaria a medida',
    meta_home_title: 'SunGene | Sourcing embalaje regalo papel Taiwán + China — cajas mooncake, regalos corporativos',
    meta_home_desc: 'Partner sourcing bi-entidad Taiwán + China. Especialidad verificable en Alibaba: embalaje regalo papel personalizado (cajas mooncake, cajas regalo, embalaje retail). Otros regalos corporativos vía red de fábricas verificadas. Personal QC dedicado en sitio. Facturación Taiwán. MOQ USD 1.000.',
    meta_keywords: 'sourcing embalaje regalo papel, fabricante cajas mooncake, sourcing bi-entidad Taiwán China, partner sourcing regalos corporativos, sourcing cajas regalo marca, sourcing embalaje retail, proveedor Alibaba embalaje, inspección AQL en sitio, MOQ 1000 regalos corporativos',
    form_submitting: 'Enviando...', form_success_title: 'Solicitud recibida',
    form_success_desc: 'Hemos recibido su consulta y le responderemos en 24 horas.',
    form_error_title: 'Error en el envío', form_error_desc: 'Intente de nuevo o escríbanos a contact@sungene.net.',
    footer_copyright: '© 2026 SunGene Co., LTD. Todos los derechos reservados. Taichung, Taiwán.',
  },
  // pt/ko/ja/ar/th/vi/de — kept as placeholder lookups for type safety.
  // ALL_LANGS no longer iterates these and proxy.ts 308-redirects their URLs
  // to /en before any page handler can run, so these dicts are dead weight at
  // runtime. Removed earlier and reinstated as English fallbacks so any
  // residual lookup doesn't crash.
  pt: {}, ko: {}, ja: {}, ar: {}, th: {}, vi: {}, de: {},
}

export function t(lang: Lang, key: string): string {
  return dict[lang]?.[key] ?? dict['en']?.[key] ?? key
}

export type Dictionary = typeof dict['en']

export const getDictionary = async (lang: Lang): Promise<Record<string, string>> => dict[lang] || dict['en']
