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
    sourceKicker: 'What we source',
    sourceTitle: 'Custom paper gift packaging — plus all the corporate gifts your buyers ask for',
    sourceIntro: 'Our Alibaba-verifiable specialty is custom paper gift packaging — mooncake boxes, brand gift boxes, retail packaging, corrugated cartons, paper bags and tubes. For everything else corporate buyers need (blankets, apparel, drinkware, accessories, stationery, branded merchandise), we source through our vetted Taiwan + China factory network.',
    sourceItems: [
      'Custom paper packaging — mooncake boxes, gift boxes, mailer cartons, paper bags & tubes',
      'Branded soft goods — flannel and sherpa blankets, textile gift sets',
      'Drinkware & tabletop gifts — mugs, tumblers, ceramic gift sets, kitchen accessories',
      'Branded merchandise via factory network — apparel, accessories, stationery, leather',
    ],
    beyondKicker: 'Our model',
    beyondTitle: 'Trader/principal model, not commission agent',
    beyondBody: [
      'We buy from the factory at FOB or EXW, and resell with our margin shown separately on the quote. You see the factory line, our line, and the total. Underlying factory pricing is available on request before you confirm the order.',
      'Because the goods sit on our balance sheet, rejecting defects before shipment is in our own financial interest — backed by dedicated SunGene QC staff who travel to partner factories for on-site AQL inspection. Quality becomes our problem to solve, not yours to chase.',
    ],
  },
  zh: {
    sourceKicker: '採購範圍',
    sourceTitle: '客製紙盒禮品包裝——再加上你客戶會問的所有企業禮贈品',
    sourceIntro: '我們在 Alibaba 公開可驗證的專長是客製紙盒禮品包裝——月餅禮盒、品牌禮盒、零售包裝、瓦楞紙箱、紙袋與紙管。其他企業禮贈品買家會要的(毛毯、印製服飾、馬克杯、配件、文具、品牌商品),透過我們合作的台灣+中國工廠網絡採購。',
    sourceItems: [
      '客製紙盒禮品包裝——月餅禮盒、品牌禮盒、mailer 紙箱、紙袋與紙管',
      '品牌軟織品——法蘭絨與 sherpa 毛毯、紡織禮品組',
      '杯具與桌上禮品——馬克杯、保溫杯、陶瓷禮盒、廚房配件',
      '其他品牌商品透過工廠網絡——服飾、配件、文具、皮件',
    ],
    beyondKicker: '我們的模式',
    beyondTitle: 'Principal 採購模式——不是抽佣中間人',
    beyondBody: [
      '我們以本身名義(principal)從工廠買貨,加上我方利潤後轉賣給你。報價單上工廠價與我方利潤分兩行列出,下單前可索取工廠發票對照。',
      '因為貨在我們的資產負債表上,把瑕疵品擋下來是我們的財務利益——背後有 SunGene 自有 QC 員工親自到合作工廠做出貨前 AQL 抽檢。品質變成我們要解決的問題,而不是你要追的麻煩。',
    ],
  },
  cn: {
    sourceKicker: '采购范围',
    sourceTitle: '定制纸盒礼品包装——再加上您客户会问的所有企业礼赠品',
    sourceIntro: '我们在 Alibaba 公开可验证的专长是定制纸盒礼品包装——月饼礼盒、品牌礼盒、零售包装、瓦楞纸箱、纸袋与纸管。其他企业礼赠品买家会要的(毛毯、印制服饰、马克杯、配件、文具、品牌商品),通过我们合作的台湾+中国工厂网络采购。',
    sourceItems: [
      '定制纸盒礼品包装——月饼礼盒、品牌礼盒、mailer 纸箱、纸袋与纸管',
      '品牌软织品——法兰绒与 sherpa 毛毯、纺织礼品组',
      '杯具与桌上礼品——马克杯、保温杯、陶瓷礼盒、厨房配件',
      '其他品牌商品通过工厂网络——服饰、配件、文具、皮件',
    ],
    beyondKicker: '我们的模式',
    beyondTitle: 'Principal 采购模式——不是抽佣中间人',
    beyondBody: [
      '我们以本身名义(principal)从工厂买货,加上我方利润后转卖给您。报价单上工厂价与我方利润分两行列出,下单前可索取工厂发票对照。',
      '因为货在我们的资产负债表上,把瑕疵品挡下来是我们的财务利益——背后有 SunGene 自有 QC 员工亲自到合作工厂做出货前 AQL 抽检。品质变成我们要解决的问题,而不是您要追的麻烦。',
    ],
  },
  fr: {
    sourceKicker: 'Ce que nous sourçons',
    sourceTitle: "Emballage cadeau papier sur mesure — plus tous les cadeaux corporate dont vos acheteurs ont besoin",
    sourceIntro: "Notre spécialité vérifiable sur Alibaba.com est l'emballage cadeau papier sur mesure — boîtes mooncake, boîtes-cadeaux de marque, emballage retail, cartons ondulés, sacs et tubes papier. Pour tout ce dont les acheteurs corporate ont besoin (plaids, vêtements, mugs, accessoires, papeterie, merchandising), nous sourçons via notre réseau d'usines vérifiées Taïwan + Chine.",
    sourceItems: [
      "Emballage papier sur mesure — boîtes mooncake, boîtes-cadeaux, mailer, sacs et tubes",
      "Textiles de marque — plaids flanelle et sherpa, articles textiles cadeaux",
      "Mugs et arts de la table — tasses, gourdes, sets en céramique, accessoires cuisine",
      "Autres articles de marque via réseau d'usines — vêtements, accessoires, papeterie, cuir",
    ],
    beyondKicker: 'Notre modèle',
    beyondTitle: "Modèle principal/trader — pas agent à la commission",
    beyondBody: [
      "Nous achetons à l'usine en FOB ou EXW et revendons avec notre marge affichée séparément sur le devis. Vous voyez la ligne usine, notre ligne, et le total. Le prix usine sous-jacent est disponible sur demande avant confirmation de commande.",
      "Parce que la marchandise figure à notre bilan, écarter les défauts avant expédition est dans notre propre intérêt financier — soutenu par le personnel QC SunGene dédié qui se rend chez les usines partenaires pour inspection AQL sur site. La qualité devient notre problème à résoudre, pas le vôtre à poursuivre.",
    ],
  },
  es: {
    sourceKicker: 'Lo que abastecemos',
    sourceTitle: 'Embalaje regalo papel personalizado — más todos los regalos corporativos que pedirán sus compradores',
    sourceIntro: 'Nuestra especialidad verificable en Alibaba.com es embalaje regalo papel personalizado — cajas mooncake, cajas regalo de marca, embalaje retail, cartones corrugados, bolsas y tubos papel. Para todo lo demás que necesiten compradores corporativos (mantas, ropa, tazas, accesorios, papelería, merchandising), abastecemos vía nuestra red de fábricas verificadas Taiwán + China.',
    sourceItems: [
      'Embalaje papel personalizado — cajas mooncake, cajas regalo, mailer, bolsas y tubos',
      'Textiles de marca — mantas franela y sherpa, artículos textiles de regalo',
      'Tazas y artículos de mesa — tazas, termos, sets cerámicos, accesorios cocina',
      'Otros artículos de marca vía red de fábricas — ropa, accesorios, papelería, cuero',
    ],
    beyondKicker: 'Nuestro modelo',
    beyondTitle: 'Modelo principal/trader — no agente a comisión',
    beyondBody: [
      'Operamos como principal — compramos a la fábrica y revendemos. Cada cotización muestra el precio de fábrica (FOB o EXW) y nuestro margen en líneas separadas. El precio de fábrica subyacente está disponible bajo solicitud antes de confirmar.',
      'Como la mercancía figura en nuestro balance, rechazar defectos antes del envío está en nuestro propio interés financiero — respaldado por personal QC SunGene dedicado que viaja a fábricas partner para inspección AQL en sitio. La calidad pasa a ser nuestro problema a resolver, no el suyo a perseguir.',
    ],
  },
}

const HOME_KEYWORDS: Record<Lang, string[]> = {
  en: [
    'custom paper gift packaging Taiwan', 'mooncake gift box manufacturer', 'brand gift box OEM Asia',
    'corporate gifts sourcing partner', 'branded merchandise OEM China', 'retail packaging sourcing',
    'paper bag and tube manufacturer', 'corrugated mailer box manufacturer', 'branded blankets wholesale',
    'Taiwan China dual-entity sourcing', 'multi-factory partner network', 'on-site AQL inspection',
    'principal trader sourcing model', 'Alibaba verifiable supplier', 'MOQ 1000 corporate gifts',
  ],
  zh: [
    '客製紙盒禮品包裝', '月餅禮盒代工廠', '品牌禮盒 OEM', '高端零售包裝採購',
    '企業禮贈品採購夥伴', '台灣中國雙公司結構採購', '紙袋紙管代工',
    '瓦楞 mailer 紙箱', '客製品牌毛毯', '合作工廠網絡採購',
    '自有員工 AQL 品檢', 'Principal 採購模式', 'Alibaba 公開可驗證商家', 'MOQ 1000 企業禮品',
  ],
  cn: [
    '定制纸盒礼品包装', '月饼礼盒代工厂', '品牌礼盒 OEM', '高端零售包装采购',
    '企业礼赠品采购伙伴', '台湾中国双公司结构采购', '纸袋纸管代工',
    '瓦楞 mailer 纸箱', '定制品牌毛毯', '合作工厂网络采购',
    '自有员工 AQL 品检', 'Principal 采购模式', 'Alibaba 公开可验证商家', 'MOQ 1000 企业礼品',
  ],
  fr: [
    'emballage cadeau papier sur mesure', 'fabricant boîtes mooncake', 'OEM boîtes cadeaux marque',
    'partenaire sourcing cadeaux corporate', 'fabrication merchandising marque', 'sourcing emballage retail',
    'fabricant sacs et tubes papier', 'fabricant cartons mailer ondulés', 'plaids personnalisés gros',
    'sourcing bi-entité Taïwan Chine', 'réseau usines partenaires', 'inspection AQL sur site',
  ],
  es: [
    'embalaje regalo papel personalizado', 'fabricante cajas mooncake', 'OEM cajas regalo marca',
    'partner sourcing regalos corporativos', 'fabricación merchandising marca', 'sourcing embalaje retail',
    'fabricante bolsas tubos papel', 'fabricante cartones mailer corrugados', 'mantas personalizadas mayoreo',
    'sourcing bi-entidad Taiwán China', 'red fábricas partner', 'inspección AQL en sitio',
  ],
  pt: ['sourcing Taiwan China', 'parceiro de sourcing'],
  ko: ['소싱 파트너', '대만 중국 소싱'],
  ja: ['ソーシングパートナー', '台湾 中国 仕入れ'],
  ar: ['وكيل سورسينج تايوان الصين', 'مورد تعبئة وتغليف'],
  th: ['ตัวแทนจัดหาสินค้า', 'ผู้จัดหา Taiwan China'],
  vi: ['đại lý sourcing Đài Loan Trung Quốc', 'đối tác sourcing'],
  de: ['Sourcing-Partner Taiwan China', 'Beschaffungsagentur Asien'],
}

const SCHEMA_TEXT: Partial<Record<Lang, {
  listName: string
  listDesc: string
  categories: { packaging: string; food: string; filling: string; conveying: string; custom: string }
  faq: { q: string; a: string }[]
}>> = {
  en: {
    listName: 'SunGene — Taiwan & China sourcing for packaging, home & garden',
    listDesc: 'Sourcing for packaging, home goods, and garden products from vetted Taiwan and Mainland China factories. On-site QC, factory price + margin shown separately on every quote.',
    categories: { packaging: 'Packaging Sourcing', food: 'Home & Kitchen Sourcing', filling: 'Beauty & Container Sourcing', conveying: 'Garden & Outdoor Sourcing', custom: 'Custom Sourcing Requests' },
    faq: [
      { q: 'What products do you source?', a: 'Packaging products (bags, boxes, jars, pumps, closures), home goods (kitchenware, decor, organisation), and garden tools and accessories. For long-term partners we also take adjacent categories — cosmetics, candles, glass, light hardware.' },
      { q: 'What is your minimum order?', a: 'Orders start at USD 1,000 per shipment. This entry tier ensures every order receives dedicated sourcing, on-site QC, and full export documentation — whether you ship a pallet or a full container.' },
      { q: 'How is pricing structured?', a: 'Every quote breaks out the factory price (FOB or EXW), our margin, and the landed cost. The underlying factory invoice is available on request before order confirmation. One number on the quote, full breakdown when you want it.' },
      { q: 'How do you handle factory inspection?', a: 'We inspect personally. For factories in Taiwan, our team drives to the site. For factories in China, the goods ship to our forwarder’s warehouse where we inspect before export. We have walked away from factories that offered envelopes to pass goods we judged sub-spec. Inspection videos and photos are included with every shipment.' },
      { q: 'Where are you based?', a: 'Two registered companies — one in Taichung, Taiwan; one in mainland China. The Taiwan entity invoices and receives payment; the China entity handles factory relationships and pre-shipment logistics.' },
      { q: 'Can I see your Alibaba.com track record?', a: 'Yes — our storefront is at momas.en.alibaba.com. We have been a verified supplier there for three years. Star rating fluctuates between 3 and 5 stars depending on the period; check the live page for current standing.' },
      { q: 'How fast do you reply?', a: 'Same day during Taipei business hours (UTC+8, Mon–Fri 09:00–18:00). Outside hours, within 12 hours.' },
    ],
  },
  zh: {
    listName: 'SunGene｜台灣＋中國 採購夥伴｜包裝、家居、園藝',
    listDesc: '從台灣與中國大陸審查過的工廠採購包裝、家居、園藝品類。團隊親自驗貨,報價單上工廠價與我方利潤分開列出。',
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
    listName: 'SunGene｜台湾＋中国 采购伙伴｜包装、家居、园艺',
    listDesc: '从台湾与中国大陆核查过的工厂采购包装、家居、园艺品类。团队亲自验货,报价单上工厂价与我方利润分开列出。',
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
    listName: "SunGene | Sourcing Taïwan & Chine pour marques d'emballage, maison & jardin",
    listDesc: "Sourcing chez des usines vérifiées à Taïwan et en Chine continentale — emballage, maison, jardin. Contrôle qualité sur place, prix usine et marge affichés séparément sur chaque devis.",
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
    listName: 'SunGene | Sourcing Taiwán & China para marcas de empaque, hogar y jardín',
    listDesc: 'Sourcing en fábricas verificadas en Taiwán y China continental — empaque, hogar, jardín. QC en sitio, precio de fábrica y nuestra margen mostrados por separado en cada cotización.',
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
    description: 'Taiwan + China dual-entity sourcing partner. Alibaba-verifiable specialty: custom paper gift packaging (mooncake boxes, gift boxes, retail packaging, corrugated cartons, paper bags). For other corporate gift categories — blankets, apparel, drinkware, accessories, stationery — we source through our vetted factory network. Dedicated SunGene QC staff conduct on-site pre-shipment AQL inspection at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922).',
    foundingDate: '2023',
    knowsAbout: ['Custom paper gift packaging', 'Mooncake gift boxes', 'Premium rigid gift boxes', 'Corporate gifts sourcing', 'Branded blankets and soft goods', 'Taiwan + China dual-entity sourcing', 'Multi-factory partner network', 'On-site AQL inspection', 'Dedicated in-house QC', 'Principal trader model'],
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
