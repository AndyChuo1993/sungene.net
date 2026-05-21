import type { Metadata } from 'next'
import { Lang, t } from '@/lib/i18n'
import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import WhyUs from '@/components/home/WhyUs'
import WhoWeWorkWith from '@/components/home/WhoWeWorkWith'
import ProcessSection from '@/components/home/ProcessSection'
import Applications from '@/components/home/Applications'
import CTASection from '@/components/home/CTASection'
import FAQ from '@/components/home/FAQ'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META, langMeta} from '@/lib/seo'

export const dynamic = 'force-static'
export const revalidate = 86400

type PageParams = {
  params: Promise<{ lang?: string }>
}

const HOME_POSITIONING: Partial<Record<Lang, {
  sourceKicker: string
  sourceTitle: string
  sourceIntro: string
  sourceItems: string[]
  beyondKicker: string
  beyondTitle: string
  beyondBody: string[]
}>> = {
  en: {
    sourceKicker: 'What we supply',
    sourceTitle: 'Three product capability areas across Taiwan and China',
    sourceIntro: 'Selected products supplied through manufacturing coordination with our partners in Taiwan and China. One buyer-facing quote, one accountable counterparty, on-site AQL inspection by in-house SunGene staff.',
    sourceItems: [
      'Custom packaging — mooncake boxes, premium gift boxes, retail packaging, mailer cartons, paper bags and tubes',
      'Home & living — drinkware, ceramic gift sets, kitchen accessories, branded blankets and soft goods',
      'Outdoor products — picnic blankets, sunhats and caps, cooler bags, branded umbrellas, event swag',
      'Other corporate gifts — stationery, apparel, leather goods (case-by-case)',
    ],
    beyondKicker: 'How we work',
    beyondTitle: 'One accountable counterparty across both markets',
    beyondBody: [
      'You buy products from SunGene. The quote, the production schedule, the pre-shipment AQL inspection, the export documentation, and any post-shipment claim flow through one Taiwan-registered counterparty.',
      'Quality consistency is in our own commercial interest — backed by in-house SunGene QC staff who travel to partner factories for on-site AQL 2.5 inspection. Not subcontracted to third-party agents.',
    ],
  },
  zh: {
    sourceKicker: '我們供應什麼',
    sourceTitle: '跨台灣與中國的三大產品能力',
    sourceIntro: '透過台灣與中國的精選製造夥伴,SunGene 供應精選產品。一份買家報價、一個對口窗口、SunGene 自有員工出口前 AQL 品檢。',
    sourceItems: [
      '客製包裝——月餅禮盒、精裝品牌禮盒、零售包裝、mailer 紙箱、紙袋與紙管',
      '居家生活——馬克杯、保溫杯、陶瓷禮盒、廚房配件、品牌毛毯與軟織品',
      '戶外產品——印製毛毯、太陽帽與棒球帽、保冷袋、品牌雨傘、活動贈品',
      '其他企業禮贈品——文具、服飾、皮件(視案件處理)',
    ],
    beyondKicker: '我們怎麼合作',
    beyondTitle: '跨兩地市場一個對口',
    beyondBody: [
      '您跟 SunGene 買產品。報價、生產排程、出口前 AQL 品檢、出口文件、出貨後 claim,全部經過一家台灣登記公司這一個窗口。',
      '品質一致性是我們自己的商業利益 —— 背後有 SunGene 自有 QC 員工親自到合作工廠做 AQL 2.5 出口前品檢。不外包給第三方代理。',
    ],
  },
  cn: {
    sourceKicker: '我们供应什么',
    sourceTitle: '跨台湾与中国的三大产品能力',
    sourceIntro: '通过台湾与中国的精选制造伙伴,SunGene 供应精选产品。一份买家报价、一个对口窗口、SunGene 自有员工出口前 AQL 品检。',
    sourceItems: [
      '定制包装——月饼礼盒、精装品牌礼盒、零售包装、mailer 纸箱、纸袋与纸管',
      '居家生活——马克杯、保温杯、陶瓷礼盒、厨房配件、品牌毛毯与软织品',
      '户外产品——印制毛毯、太阳帽与棒球帽、保冷袋、品牌雨伞、活动赠品',
      '其他企业礼赠品——文具、服饰、皮件(视案件处理)',
    ],
    beyondKicker: '我们怎么合作',
    beyondTitle: '跨两地市场一个对口',
    beyondBody: [
      '您跟 SunGene 买产品。报价、生产排程、出口前 AQL 品检、出口文件、出货后 claim,全部经过一家台湾登记公司这一个窗口。',
      '品质一致性是我们自己的商业利益 —— 背后有 SunGene 自有 QC 员工亲自到合作工厂做 AQL 2.5 出口前品检。不外包给第三方代理。',
    ],
  },
  fr: {
    sourceKicker: 'Ce que nous fournissons',
    sourceTitle: "Trois domaines de produits entre Taïwan et la Chine",
    sourceIntro: "Produits sélectionnés fournis par coordination manufacturière avec nos partenaires à Taïwan et en Chine. Un seul devis, un seul interlocuteur, contrôle AQL pré-expédition par le personnel SunGene en interne.",
    sourceItems: [
      "Emballage personnalisé — boîtes mooncake, boîtes-cadeaux premium, emballage retail, mailer, sacs et tubes papier",
      "Maison & vie quotidienne — mugs, gourdes, sets céramiques, accessoires cuisine, plaids et textiles cadeaux",
      "Extérieur — plaids de pique-nique, casquettes et chapeaux, sacs isothermes, parapluies de marque, articles événementiels",
      "Autres cadeaux corporate — papeterie, vêtements, cuir (au cas par cas)",
    ],
    beyondKicker: 'Comment nous travaillons',
    beyondTitle: "Un seul interlocuteur responsable sur les deux marchés",
    beyondBody: [
      "Vous achetez des produits chez SunGene. Devis, planning de production, inspection AQL pré-expédition, documentation export et toute réclamation post-expédition passent par un seul interlocuteur enregistré à Taïwan.",
      "La cohérence qualité est dans notre propre intérêt commercial — soutenue par le personnel QC SunGene en interne qui se rend chez les usines partenaires pour l'inspection AQL 2.5 pré-expédition. Non sous-traité à des agents tiers.",
    ],
  },
  es: {
    sourceKicker: 'Lo que suministramos',
    sourceTitle: 'Tres áreas de productos entre Taiwán y China',
    sourceIntro: 'Productos seleccionados suministrados mediante coordinación de fabricación con nuestros socios en Taiwán y China. Una cotización para el comprador, un interlocutor responsable, inspección AQL pre-envío por personal interno de SunGene.',
    sourceItems: [
      'Embalaje personalizado — cajas mooncake, cajas regalo premium, embalaje retail, mailer, bolsas y tubos papel',
      'Hogar y vida cotidiana — tazas, termos, sets cerámicos, accesorios cocina, mantas y textiles de regalo',
      'Exterior — mantas de picnic, gorras y sombreros, bolsas térmicas, paraguas de marca, artículos para eventos',
      'Otros regalos corporativos — papelería, ropa, cuero (caso por caso)',
    ],
    beyondKicker: 'Cómo trabajamos',
    beyondTitle: 'Un solo interlocutor responsable en ambos mercados',
    beyondBody: [
      'Usted compra productos a SunGene. Cotización, programa de producción, inspección AQL pre-envío, documentación de exportación y cualquier reclamación post-envío pasan por un solo interlocutor registrado en Taiwán.',
      'La consistencia de calidad está en nuestro propio interés comercial — respaldada por personal QC interno de SunGene que viaja a fábricas asociadas para inspección AQL 2.5 pre-envío. No subcontratado a agentes terceros.',
    ],
  },
}

const HOME_KEYWORDS: Record<Lang, string[]> = {
  en: [
    'Taiwan-based trading company', 'reliable product supply from Asia', 'manufacturing coordination Taiwan China',
    'export management Taiwan China', 'custom packaging supply Taiwan', 'mooncake gift box supplier',
    'home and living products supply', 'outdoor products supply', 'branded blankets supplier',
    'paper bags and tubes supply', 'corrugated mailer box supplier', 'pre-shipment AQL inspection',
    'Alibaba.com supplier 3 years', 'Taiwan registered invoicing', 'MOQ 1000 USD',
  ],
  zh: [
    '台灣貿易公司', '亞洲產品供應', '製造協調 台灣 中國',
    '出口管理', '客製包裝供應', '月餅禮盒供應商',
    '居家生活產品', '戶外產品供應', '品牌毛毯供應商',
    '紙袋紙管供應', '瓦楞 mailer 紙箱供應', '出口前 AQL 品檢',
    'Alibaba.com 商家 三年', '台灣公司開發票', 'MOQ 1000 USD',
  ],
  cn: [
    '台湾贸易公司', '亚洲产品供应', '制造协调 台湾 中国',
    '出口管理', '定制包装供应', '月饼礼盒供应商',
    '居家生活产品', '户外产品供应', '品牌毛毯供应商',
    '纸袋纸管供应', '瓦楞 mailer 纸箱供应', '出口前 AQL 品检',
    'Alibaba.com 商家 三年', '台湾公司开发票', 'MOQ 1000 USD',
  ],
  fr: [
    'société de négoce Taïwan', 'approvisionnement fiable Asie', 'coordination manufacturière Taïwan Chine',
    'gestion des exports', 'fourniture emballage personnalisé', 'fournisseur boîtes mooncake',
    'produits maison vie quotidienne', 'fourniture produits extérieurs', 'fournisseur plaids personnalisés',
    'fourniture sacs tubes papier', 'fournisseur cartons mailer', 'inspection AQL pré-expédition',
  ],
  es: [
    'empresa comercial Taiwán', 'suministro fiable Asia', 'coordinación fabricación Taiwán China',
    'gestión exportación', 'suministro embalaje personalizado', 'proveedor cajas mooncake',
    'productos hogar vida cotidiana', 'suministro productos exterior', 'proveedor mantas personalizadas',
    'suministro bolsas tubos papel', 'proveedor cartones mailer', 'inspección AQL pre-exportación',
  ],
  pt: ['empresa comercial Taiwan', 'fornecedor produtos Ásia'],
  ko: ['타이완 무역회사', '아시아 제품 공급'],
  ja: ['台湾 商社', 'アジア 製品供給'],
  ar: ['شركة تجارية تايوان', 'توريد المنتجات من آسيا'],
  th: ['บริษัทการค้าไต้หวัน', 'ซัพพลายเออร์สินค้าเอเชีย'],
  vi: ['công ty thương mại Đài Loan', 'nhà cung cấp sản phẩm châu Á'],
  de: ['Handelsgesellschaft Taiwan', 'Produktlieferant Asien'],
}

const SCHEMA_TEXT: Partial<Record<Lang, {
  listName: string
  listDesc: string
  categories: { packaging: string; food: string; filling: string; conveying: string; custom: string }
  faq: { q: string; a: string }[]
}>> = {
  en: {
    listName: 'SunGene — Reliable Product Supply from Asia | Taiwan-based Trading Company',
    listDesc: 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Custom packaging, home & living, outdoor. Pre-shipment AQL by in-house staff. MOQ USD 1,000.',
    categories: { packaging: 'Packaging Sourcing', food: 'Home & Kitchen Sourcing', filling: 'Beauty & Container Sourcing', conveying: 'Garden & Outdoor Sourcing', custom: 'Custom Sourcing Requests' },
    faq: [
      { q: 'What products do you source?', a: 'Packaging products (bags, boxes, jars, pumps, closures), home goods (kitchenware, decor, organisation), and garden tools and accessories. For long-term partners we also take adjacent categories — cosmetics, candles, glass, light hardware.' },
      { q: 'What is your minimum order?', a: 'Orders start at USD 1,000 per shipment. This entry tier ensures every order receives dedicated sourcing, on-site QC, and full export documentation — whether you ship a pallet or a full container.' },
      { q: 'How is pricing structured?', a: 'Every quote breaks out the factory price (FOB or EXW), our margin, and the landed cost. The underlying factory invoice is available on request before order confirmation. One number on the quote, full breakdown when you want it.' },
      { q: 'How do you handle factory inspection?', a: 'We inspect personally. For factories in Taiwan, our team drives to the site. For factories in China, the goods ship to our forwarder’s warehouse where we inspect before export. We have walked away from factories that offered envelopes to pass goods we judged sub-spec. Inspection videos and photos are included with every shipment.' },
      { q: 'Where are you based?', a: 'Two registered companies — one in Taichung, Taiwan; one in mainland China. The Taiwan entity invoices and receives payment; the China entity handles factory relationships and pre-shipment logistics.' },
      { q: 'Can I see your Alibaba.com track record?', a: 'Yes — our storefront is at momas.en.alibaba.com. Our storefront has been publicly active there for 3+ years. Rating ranges from 3 to 5 over time depending on the period; check the live page for current standing.' },
      { q: 'How fast do you reply?', a: 'Same day during Taipei business hours (UTC+8, Mon–Fri 09:00–18:00). Outside hours, within 12 hours.' },
    ],
  },
  zh: {
    listName: 'SunGene｜亞洲產品供應與出口整合｜台灣貿易公司',
    listDesc: '台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。客製包裝、居家生活、戶外園藝三大類。自有員工出口前 AQL 品檢。最低訂單 USD 1,000。',
    categories: { packaging: '包裝產品採購', food: '家居廚房採購', filling: '美容容器採購', conveying: '園藝戶外採購', custom: '客製品採購' },
    faq: [
      { q: '你們採購哪些產品？', a: '主要是包裝產品（袋、盒、瓶、泵頭、封口）、家居用品（廚房、佈置、收納）、園藝工具與配件。長期合作客戶的相鄰品類——化妝品、蠟燭、玻璃、輕五金——也可以接。' },
      { q: '最低訂單是多少？', a: '訂單 USD 1,000 起接。這個起接金額能讓每一筆訂單都享有專屬的採購、現場驗貨與完整出口文件——不管你是出一個棧板還是一整個貨櫃。' },
      { q: '報價怎麼結構？', a: '每份報價單會把工廠價(FOB 或 EXW)、我方利潤、總到岸成本分行列出。下單前你可要求看到工廠發票。報價上一個數字,需要時隨時拆解。' },
      { q: '驗貨怎麼做？', a: '我們親自驗。台灣的工廠我們團隊直接開車去現場;中國的工廠出貨先進我們合作貨代的倉庫,由我們進場驗貨後才放行出口。每批出貨都附驗貨影片與照片,並依 AQL 抽樣。' },
      { q: '你們在哪？', a: '兩家公司——一家在台灣台中，一家在中國大陸。台灣公司開發票、收款；中國公司管工廠關係與出口前的物流。' },
      { q: '能查得到你們的 Alibaba.com 紀錄嗎？', a: '可以——店面是 momas.en.alibaba.com，已經是認證供應商三年。星等會隨期間在 3 到 5 星之間波動，建議直接點過去看當下狀態。' },
      { q: '回覆多快？', a: '台灣上班時間（UTC+8，週一至五 09:00–18:00）當日回。下班時段 12 小時內。' },
    ],
  },
  cn: {
    listName: 'SunGene｜亚洲产品供应与出口整合｜台湾贸易公司',
    listDesc: '台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。定制包装、居家生活、户外园艺三大类。自有员工出口前 AQL 品检。最低订单 USD 1,000。',
    categories: { packaging: '包装产品采购', food: '家居厨房采购', filling: '美容容器采购', conveying: '园艺户外采购', custom: '定制品采购' },
    faq: [
      { q: '你们采购哪些产品？', a: '主要是包装产品（袋、盒、瓶、泵头、封口）、家居用品（厨房、布置、收纳）、园艺工具与配件。长期合作客户的相邻品类——化妆品、蜡烛、玻璃、轻五金——也可以接。' },
      { q: '最低订单是多少？', a: '订单 USD 1,000 起接。这个起接金额能让每一笔订单都享有专属的采购、现场验货与完整出口文件——不管您是出一个棧板还是一整个货柜。' },
      { q: '报价怎么结构？', a: '每份报价单会把工厂价(FOB 或 EXW)、我方利润、总到岸成本分行列出。下单前您可要求看到工厂发票。报价上一个数字,需要时随时拆解。' },
      { q: '验货怎么做？', a: '我们亲自验。台湾的工厂我们团队直接开车去现场;中国的工厂出货先进我们合作货代的仓库,由我们进场验货后才放行出口。每批出货都附验货视频与照片,并依 AQL 抽样。' },
      { q: '你们在哪？', a: '两家公司——一家在台湾台中，一家在中国大陆。台湾公司开发票、收款；中国公司管工厂关系与出口前的物流。' },
      { q: '能查得到你们的 Alibaba.com 记录吗？', a: '可以——店面是 momas.en.alibaba.com，已经是认证供应商三年。星等会在 3 到 5 星之间波动，建议直接点过去看当下状态。' },
      { q: '回复多快？', a: '台北上班时间（UTC+8，周一至五 09:00–18:00）当日回复。下班时段 12 小时内。' },
    ],
  },
  fr: {
    listName: "SunGene | Approvisionnement fiable depuis l'Asie | Société de négoce Taïwan",
    listDesc: "Société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Emballage, maison & vie quotidienne, extérieur. AQL pré-export en interne. MOQ 1 000 USD.",
    categories: { packaging: 'Sourcing emballage', food: 'Sourcing maison & cuisine', filling: 'Sourcing beauté & flaconnage', conveying: 'Sourcing jardin & extérieur', custom: 'Demandes sur mesure' },
    faq: [
      { q: 'Quels produits sourcez-vous ?', a: "Principalement de l'emballage (sachets, boîtes, flacons, pompes, fermetures), des articles de maison (cuisine, décoration, rangement) et des outils et accessoires de jardin. Catégories voisines (cosmétiques, bougies, verre, petite quincaillerie) acceptées pour les partenariats de long terme." },
      { q: 'Quelle est la commande minimum ?', a: 'USD 1 000 par expédition. Nous refusons les très petites commandes éparpillées pour pouvoir donner aux commandes prises le suivi nécessaire.' },
      { q: 'Comment est calculé le prix ? Y a-t-il une commission ?', a: "Nous sommes une société de négoce, pas un agent à la commission. Nous achetons la marchandise à l'usine et vous la revendons. Le prix affiché est le coût final livré — pas de pourboire d'usine, pas de commission par expédition. Le prix FOB ou EXW usine est communiqué sur demande." },
      { q: "Comment se passe l'inspection en usine ?", a: "Nous inspectons en personne. Pour les usines à Taïwan, notre équipe se déplace sur site. Pour la Chine, la marchandise arrive d'abord à l'entrepôt de notre transitaire où nous inspectons avant export. Nous avons refusé des usines qui proposaient une enveloppe pour faire passer de la marchandise hors spécification. Vidéos et photos d'inspection sont fournies à chaque expédition." },
      { q: 'Où êtes-vous basés ?', a: "Deux sociétés enregistrées — une à Taichung, Taïwan ; une en Chine continentale. L'entité taïwanaise facture et reçoit les paiements ; l'entité chinoise gère les relations usines et la logistique pré-export." },
      { q: "Peut-on vérifier votre historique sur Alibaba.com ?", a: "Oui — notre boutique est sur momas.en.alibaba.com. Nous sommes fournisseur vérifié depuis trois ans. La note fluctue entre 3 et 5 étoiles selon la période ; vérifiez en direct." },
      { q: 'Délai de réponse ?', a: "Réponse le jour même pendant les heures de bureau de Taipei (UTC+8, lun.–ven. 09:00–18:00). Hors horaires, sous 12 heures." },
    ],
  },
  es: {
    listName: 'SunGene | Suministro fiable desde Asia | Empresa comercial Taiwán',
    listDesc: 'Empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Embalaje, hogar y vida cotidiana, exterior. AQL pre-exportación interno. MOQ USD 1.000.',
    categories: { packaging: 'Sourcing de empaque', food: 'Sourcing hogar y cocina', filling: 'Sourcing belleza y envase', conveying: 'Sourcing jardín y exterior', custom: 'Solicitudes a medida' },
    faq: [
      { q: '¿Qué productos abastecen?', a: 'Principalmente productos de empaque (bolsas, cajas, frascos, bombas, cierres), artículos del hogar (cocina, decoración, organización) y herramientas y accesorios de jardín. Para socios de largo plazo, también categorías cercanas: cosmética, velas, vidrio, ferretería ligera.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'USD 1 000 por envío. Rechazamos pedidos muy pequeños y dispersos para poder dar a los aceptados la atención que necesitan.' },
      { q: '¿Cómo se estructura el precio?', a: 'Actuamos como principal — compramos a la fábrica y revendemos. Cada cotización desglosa el precio de fábrica (FOB o EXW) y nuestra margen en líneas separadas. La factura de fábrica subyacente está disponible bajo solicitud antes de confirmar.' },
      { q: '¿Cómo realizan la inspección en fábrica?', a: 'Inspeccionamos en persona. Para fábricas en Taiwán, nuestro equipo se desplaza al sitio. Para China, la mercancía llega primero al almacén de nuestro agente de carga, donde inspeccionamos antes de exportar. Hemos rechazado fábricas que ofrecían sobres para aprobar mercancía fuera de especificación. Video y fotos de inspección con cada envío.' },
      { q: '¿Dónde están ubicados?', a: 'Dos empresas registradas — una en Taichung, Taiwán; otra en China continental. La entidad taiwanesa factura y recibe pagos; la entidad china gestiona relaciones con fábricas y logística pre-exportación.' },
      { q: '¿Puedo verificar su historial en Alibaba.com?', a: 'Sí — nuestra tienda está en momas.en.alibaba.com. Somos proveedor verificado desde hace tres años. La calificación fluctúa entre 3 y 5 estrellas según el período; verifique en vivo.' },
      { q: '¿Qué tan rápido responden?', a: 'Mismo día en horario laboral de Taipéi (UTC+8, lun–vie 09:00–18:00). Fuera de horario, en 12 horas.' },
    ],
  },
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  return buildPageMetadata({
    lang: safeLang,
    title: t(safeLang, 'meta_home_title'),
    description: t(safeLang, 'meta_home_desc'),
    pathname: '/',
    type: 'website',
    keywords: HOME_KEYWORDS[safeLang] ?? HOME_KEYWORDS.en,
  })
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const s = (SCHEMA_TEXT[safeLang] ?? SCHEMA_TEXT.en)!
  const positioning = HOME_POSITIONING[safeLang] ?? HOME_POSITIONING.en!

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: langMeta(safeLang).htmlLang,
    name: s.listName,
    description: s.listDesc,
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: s.categories.packaging, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing/packaging`, url: `${SITE_URL}/${safeLang}/sourcing/packaging`, name: s.categories.packaging } },
      { '@type': 'ListItem', position: 2, name: s.categories.food, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing/home`, url: `${SITE_URL}/${safeLang}/sourcing/home`, name: s.categories.food } },
      { '@type': 'ListItem', position: 3, name: s.categories.filling, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing/beauty`, url: `${SITE_URL}/${safeLang}/sourcing/beauty`, name: s.categories.filling } },
      { '@type': 'ListItem', position: 4, name: s.categories.conveying, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing/garden`, url: `${SITE_URL}/${safeLang}/sourcing/garden`, name: s.categories.conveying } },
      { '@type': 'ListItem', position: 5, name: s.categories.custom, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing`, url: `${SITE_URL}/${safeLang}/sourcing`, name: s.categories.custom } },
    ]
  }

  const topicHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: langMeta(safeLang).htmlLang,
    name: 'Sourcing scope by category',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Packaging sourcing', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing/packaging`, url: `${SITE_URL}/${safeLang}/sourcing/packaging`, name: 'Packaging sourcing' } },
      { '@type': 'ListItem', position: 2, name: 'Home goods sourcing', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing/home`, url: `${SITE_URL}/${safeLang}/sourcing/home`, name: 'Home goods sourcing' } },
      { '@type': 'ListItem', position: 3, name: 'Garden products sourcing', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing/garden`, url: `${SITE_URL}/${safeLang}/sourcing/garden`, name: 'Garden products sourcing' } },
      { '@type': 'ListItem', position: 4, name: 'Beauty packaging sourcing', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing/beauty`, url: `${SITE_URL}/${safeLang}/sourcing/beauty`, name: 'Beauty packaging sourcing' } },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: s.listName,
    url: `${SITE_URL}/${safeLang}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.lead', '.hero-desc'],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: langMeta(safeLang).htmlLang,
    mainEntity: s.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // Organization schema — gives Google + AI search engines a concise, structured
  // summary of who SunGene is. Important for GEO (ChatGPT / Perplexity citations).
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: 'SunGene Co., LTD.',
    alternateName: '上瑾錸有限公司',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/sungene.png`,
    description: 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging, home & living, outdoor. In-house SunGene staff conduct on-site pre-shipment AQL inspection at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922).',
    foundingDate: '2023',
    knowsAbout: ['Taiwan-based trading company', 'Asia product supply', 'Manufacturing coordination', 'Export management', 'Custom packaging supply', 'Home and living products', 'Outdoor products supply', 'Pre-shipment AQL inspection', 'Alibaba.com supplier'],
    sameAs: ['https://momas.en.alibaba.com/'],
    address: [
      {
        '@type': 'PostalAddress',
        '@id': `${SITE_URL}#tw-office`,
        streetAddress: '201 Guangfu Rd., Central District',
        addressLocality: 'Taichung',
        postalCode: '40041',
        addressCountry: 'TW',
      },
      {
        '@type': 'PostalAddress',
        '@id': `${SITE_URL}#cn-office`,
        streetAddress: "Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave., Tong'an District",
        addressLocality: 'Xiamen',
        addressCountry: 'CN',
      },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+886437032705', contactType: 'sales', areaServed: 'Worldwide', availableLanguage: ['English', 'Chinese', 'French', 'Spanish'], email: 'contact@sungene.net' },
      { '@type': 'ContactPoint', telephone: '+8618144132078', contactType: 'sales', areaServed: 'China', contactOption: 'WhatsApp, WeChat, LINE' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topicHubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <HeroSection lang={safeLang} />
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-accent-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                  {positioning.sourceKicker}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                {positioning.sourceTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                {positioning.sourceIntro}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {positioning.sourceItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-500" />
                    <p className="text-base font-semibold text-gray-900">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-brand-950 py-16 text-white sm:py-20">
        <Container className="max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-accent-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
                {positioning.beyondKicker}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {positioning.beyondTitle}
            </h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-brand-200 sm:text-lg">
              {positioning.beyondBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {/* Section "Configuration guides by route" removed — links pointed to
          machine-route resource pages, off-positioning. */}
      {false && (<section className="bg-white py-8">
        <Container className="max-w-7xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">
              {({
                en: 'Configuration guides by route',
                cn: '按配置路线浏览指南',
                zh: '依配置路線瀏覽指南',
                fr: 'Guides par parcours de configuration',
                es: 'Guías por ruta de configuración',
                pt: 'Guias por rota de configuração',
                ko: '구성 경로별 가이드',
                ja: '構成ルート別 ガイド',
                ar: 'أدلة حسب مسار التهيئة',
                th: 'คู่มือตามเส้นทางการกำหนดค่า',
                vi: 'Hướng dẫn theo lộ trình cấu hình',
                de: 'Leitfäden nach Konfigurationspfad',
              } as Record<string, string>)[safeLang] || 'Configuration guides by route'}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/pouch-packaging`}>
                {({ en: 'Pouch packing', cn: '袋装包装', zh: '袋裝包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치 포장', ja: 'パウチ包装', ar: 'تعبئة الأكياس', th: 'บรรจุถุง', vi: 'Đóng gói túi', de: 'Beutelverpackung' } as Record<string, string>)[safeLang] || 'Pouch packing'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/powder-dosing`}>
                {({ en: 'Powder filling', cn: '粉末灌装', zh: '粉末灌裝', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[safeLang] || 'Powder filling'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/liquid-filling`}>
                {({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[safeLang] || 'Liquid filling'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/food-processing-line`}>
                {({ en: 'Snack processing', cn: '休闲食品', zh: '休閒食品', fr: 'Snack', es: 'Snacks', pt: 'Snacks', ko: '스낵', ja: 'スナック', ar: 'سناكات', th: 'สแน็ค', vi: 'Snack', de: 'Snack' } as Record<string, string>)[safeLang] || 'Snack processing'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/conveying-automation`}>
                {({ en: 'Conveyors', cn: '输送', zh: '輸送', fr: 'Convoyeurs', es: 'Transporte', pt: 'Transporte', ko: '컨베이어', ja: '搬送', ar: 'نقل', th: 'ลำเลียง', vi: 'Băng tải', de: 'Fördertechnik' } as Record<string, string>)[safeLang] || 'Conveyors'}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${safeLang}/contact`} size="md">
                {({ en: 'Get Assessment', cn: '获取评估', zh: '取得評估', fr: 'Obtenir une évaluation', es: 'Obtener evaluación', pt: 'Obter avaliação', ko: '평가 받기', ja: '評価を受ける', ar: 'احصل على تقييم', th: 'รับการประเมิน', vi: 'Nhận đánh giá', de: 'Bewertung erhalten' } as Record<string, string>)[safeLang] || 'Get Assessment'}
              </ButtonLink>
              <ButtonLink href={`/${safeLang}/contact`} variant="secondary" size="md">
                {({ en: 'Request Assessment', cn: '获取采购评估', zh: '取得採購評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[safeLang] || 'Request Assessment'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>)}
      <WhyUs lang={safeLang} />
      <WhoWeWorkWith lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <Applications lang={safeLang} />
      <CTASection lang={safeLang} />
      <FAQ lang={safeLang} />
    </>
  )
}
