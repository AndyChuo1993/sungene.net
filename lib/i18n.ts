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
    meta_home_title: 'SunGene｜台湾＋中国采购｜包装・家居・园艺',
    meta_home_desc: '台中与厦门两地都有团队的采购伙伴。向两岸核查过的工厂直接下单,出货给海外买家——包装、家居、园艺、美容品类。亲自验货,Alibaba 5 星认证。MOQ USD 1,000。',
    meta_keywords: '台湾采购伙伴, 中国采购代理, 包装材料采购, 家居用品采购, 园艺产品采购, 美容包材采购, Alibaba 5 星供应商, 工厂验货, 自有品牌贴牌, 集货出口',
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
    meta_home_title: 'SunGene｜台灣＋中國採購｜包裝・家居・園藝',
    meta_home_desc: '台中與廈門兩地都有團隊的採購夥伴。向兩岸審查過的工廠直接下單,出貨給海外買家——包裝、家居、園藝、美容品類。親自驗貨,Alibaba 5 星認證。MOQ USD 1,000。',
    meta_keywords: '台灣採購夥伴, 中國採購代理, 包裝材料採購, 家居用品採購, 園藝產品採購, 美容包材採購, Alibaba 5 星供應商, 工廠驗貨, 自有品牌貼牌, 集貨出口',
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
    meta_home_title: 'SunGene | Taiwan + China sourcing — packaging, home, garden',
    meta_home_desc: 'Sourcing partner with teams in Taichung and Xiamen. We buy from vetted Taiwan + China factories for packaging, home, garden, beauty brands. On-site QC, Alibaba 5-star verified, MOQ USD 1,000.',
    meta_keywords: 'Taiwan sourcing partner, China sourcing agent, packaging sourcing, home goods sourcing, garden products sourcing, beauty packaging sourcing, Alibaba 5-star supplier, factory inspection, private label sourcing, consolidated shipping',
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
    meta_home_title: "SunGene | Sourcing Taïwan + Chine — emballage, maison, jardin",
    meta_home_desc: 'Partenaire de sourcing avec équipes à Taichung et Xiamen. Usines Taïwan + Chine pour emballage, maison, jardin, beauté. CQ sur place, Alibaba 5★. MOQ 1 000 USD.',
    meta_keywords: "sourcing Taïwan, sourcing Chine, agent d'achat, marques emballage, maison et jardin, fournisseur Alibaba, contrôle qualité usine, négoce taïwanais",
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
    meta_home_title: 'SunGene | Sourcing Taiwán + China — empaque, hogar, jardín',
    meta_home_desc: 'Socio de sourcing con equipos en Taichung y Xiamen. Compramos a fábricas verificadas Taiwán + China para empaque, hogar, jardín y belleza. QC en sitio, Alibaba 5★ verificado, MOQ USD 1 000.',
    meta_keywords: 'sourcing Taiwán, sourcing China, agente de compras, marcas de empaque, hogar y jardín, proveedor Alibaba, inspección de fábrica, comercial taiwanés',
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
