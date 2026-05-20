/**
 * Company-level FAQs surfaced as FAQPage schema on /about and /contact.
 * Questions that apply to the trading company as a whole — not product-specific.
 *
 * These appear as rich-result FAQ accordions in Google search when the page
 * ranks, increasing SERP real estate and lifting CTR.
 */

import type { Lang } from '@/lib/i18n'

type Faq = { q: string; a: string }

export const COMPANY_FAQS: Record<Lang, Faq[]> = {
  en: [
    { q: 'Where is SunGene located?', a: 'SunGene Co., LTD. is headquartered in Taichung, Taiwan, with a team on the ground in Xiamen, Mainland China. Two offices means we can buy direct from factories on either side of the strait and consolidate everything into a single container.' },
    { q: 'What does SunGene source?', a: 'Packaging materials (cartons, mailer boxes, pouches, custom-print packaging), home goods (kitchen, dining, storage, organization), garden products (planters, outdoor furniture, tools, decor), and beauty products (cosmetic packaging, beauty tools, private-label-ready SKUs).' },
    { q: 'What is the minimum order quantity?', a: 'MOQ is USD 1,000 per shipment. You can mix categories — paper gift packaging, blankets, drinkware, branded merchandise — within one consolidated order. Larger orders unlock lower factory pricing and dedicated container loading.' },
    { q: 'What is the typical lead time?', a: 'Stock SKUs: 7–14 days to ship. Custom-print packaging: 25–35 days. Private-label home/garden/beauty: 35–55 days. Sea freight to most ports: 18–35 days.' },
    { q: 'What payment and shipping terms do you offer?', a: 'Payment: T/T (30% deposit, 70% before shipment) or L/C at sight. Shipping: FOB Xiamen / Taichung, or CIF / DDP to any world port. Consolidated container loading available.' },
    { q: 'How fast does SunGene reply to inquiries?', a: 'Same-day reply during Taipei business hours (Mon–Fri, UTC+8). WhatsApp/WeChat at +86 18144132078 and email contact@sungene.net are the fastest channels.' },
    { q: 'Does SunGene offer customization?', a: 'Yes. Custom-print packaging, OEM/ODM branding, dimensional customization, material selection (eco-friendly, food-grade, premium retail), and Pantone color matching are supported. Tooling and sample lead times vary by category.' },
    { q: 'Which countries does SunGene export to?', a: 'SunGene exports to over 40 countries across North America, Europe, Latin America, Southeast Asia, Middle East, Africa, and Oceania. Export documentation (CE, FDA, REACH, RoHS, FSC, country-of-origin certificates) is coordinated per category and destination.' },
    { q: 'How is quality control handled?', a: 'Our own team in Taiwan and China visits the factory before shipment. We send photo and video inspection reports before container loading. AQL-based sampling on every order. No reliance on third-party inspection unless you request it.' },
    { q: 'Why work with SunGene instead of buying direct on Alibaba?', a: 'We operate as a verified supplier on Alibaba ourselves (3+ years on momas.en.alibaba.com — current star rating is publicly visible on the storefront and fluctuates between 3 and 5 stars by period). We know how the platform works from the seller side. We negotiate factory prices directly, handle on-site QC, and consolidate multiple suppliers into one shipment. Factory price and our margin are shown separately on every quote. One contact who answers same-day in your timezone.' },
  ],
  zh: [
    { q: 'SunGene 在哪裡？', a: 'SunGene Co., LTD.(上瑾錸有限公司)總部在台灣台中,中國大陸廈門設有團隊。兩地都有人可以直接到工廠採購,並把多個供應商合併到一個貨櫃出口。' },
    { q: 'SunGene 做什麼採購？', a: '包裝材料（紙箱、郵寄盒、軟包、客製印刷包裝）、家居用品（廚房、餐具、收納）、園藝戶外（盆器、戶外家具、工具、裝飾）、美容包材（化妝品包裝、美容工具、可貼牌成品）。' },
    { q: '最小訂購量是多少？', a: '單批訂單 MOQ USD 1,000。可在一次合併出貨中混搭品類——紙盒禮品包裝、毛毯、馬克杯、印製商品。訂單越大,工廠價格越優、貨櫃裝載也越專屬。' },
    { q: '一般交期多久？', a: '現貨 SKU:7–14 天可出。客製印刷包裝:25–35 天。家居/園藝/美容貼牌:35–55 天。海運到多數港口:18–35 天。' },
    { q: '付款與出貨條件？', a: '付款:T/T(30% 訂金、70% 出貨前)或即期 L/C。出貨:FOB 廈門/台中、CIF/DDP 至任一世界港口。提供合併貨櫃裝載。' },
    { q: 'SunGene 多久回覆詢盤？', a: '台北上班時間（一至五,UTC+8）當日回覆。WhatsApp/微信 +86 18144132078 與電郵 contact@sungene.net 為最快管道。' },
    { q: 'SunGene 接受客製嗎？', a: '接受。客製印刷包裝、OEM/ODM 品牌貼牌、尺寸客製、材質選擇（環保、食品級、零售高階）、Pantone 色號比對都可以。開模與打樣交期依品類而定。' },
    { q: 'SunGene 出口到哪些國家？', a: '出口超過 40 國,涵蓋北美、歐洲、拉美、東南亞、中東、非洲、大洋洲。出口文件（CE、FDA、REACH、RoHS、FSC、原產地證明等）依品類與目的地安排。' },
    { q: '品質管控怎麼做？', a: '由我們自己團隊在台灣與中國親自到廠驗貨。裝櫃前提供照片+影片驗貨報告,每筆訂單依 AQL 抽樣。除非客戶要求,不依賴第三方驗貨。' },
    { q: '為什麼不自己上 Alibaba 採購就好？', a: '我們本身就是 Alibaba 平台上的認證商家——已在 momas.en.alibaba.com 經營 3+ 年,當下星等公開可見、會隨期間在 3 到 5 星之間波動。我們從賣方視角熟悉平台運作。直接議價、不收回扣、到廠驗貨、把多個供應商整併成一個貨櫃。客戶拿到的是工廠價,加上一位在你時區當日回覆的合作夥伴。' },
  ],
  cn: [
    { q: 'SunGene 在哪里？', a: 'SunGene Co., LTD.(上瑾錸有限公司)总部在台湾台中,中国大陆厦门设有团队。两地都有人可以直接到工厂采购,并把多个供应商合并到一个货柜出口。' },
    { q: 'SunGene 做什么采购？', a: '包装材料（纸箱、邮寄盒、软包、定制印刷包装）、家居用品（厨房、餐具、收纳）、园艺户外（盆器、户外家具、工具、装饰）、美容包材（化妆品包装、美容工具、可贴牌成品）。' },
    { q: '最小订购量是多少？', a: '单批订单 MOQ USD 1,000。可在一次合并出货中混搭品类——纸盒礼品包装、毛毯、马克杯、印制商品。订单越大,工厂价格越优、货柜装载也越专属。' },
    { q: '一般交期多久？', a: '现货 SKU:7–14 天可出。定制印刷包装:25–35 天。家居/园艺/美容贴牌:35–55 天。海运到多数港口:18–35 天。' },
    { q: '付款与出货条件？', a: '付款:T/T（30% 订金、70% 出货前）或即期 L/C。出货:FOB 厦门/台中、CIF/DDP 至任一世界港口。提供合并货柜装载。' },
    { q: 'SunGene 多久回复询盘？', a: '台北上班时间（一至五,UTC+8）当日回复。WhatsApp/微信 +86 18144132078 与邮箱 contact@sungene.net 为最快渠道。' },
    { q: 'SunGene 接受定制吗？', a: '接受。定制印刷包装、OEM/ODM 品牌贴牌、尺寸定制、材质选择（环保、食品级、零售高端）、Pantone 色号比对都可以。开模与打样交期依品类而定。' },
    { q: 'SunGene 出口到哪些国家？', a: '出口超过 40 国,覆盖北美、欧洲、拉美、东南亚、中东、非洲、大洋洲。出口文件（CE、FDA、REACH、RoHS、FSC、原产地证明等）按品类与目的地安排。' },
    { q: '品质管控怎么做？', a: '由我们自己团队在台湾与中国亲自到厂验货。装柜前提供照片+视频验货报告,每笔订单按 AQL 抽样。除非客户要求,不依赖第三方验货。' },
    { q: '为什么不自己上 Alibaba 采购？', a: '我们本身就是 Alibaba 平台上的认证商家——已在 momas.en.alibaba.com 经营 3+ 年,当下星等公开可见、会随期间在 3 到 5 星之间波动。从卖方视角熟悉平台运作。直接议价、不收回扣、到厂验货、把多个供应商合并成一个货柜。客户拿到的是工厂价,加上一位在你时区当日回复的合作伙伴。' },
  ],
  fr: [
    { q: 'Où se trouve SunGene ?', a: 'SunGene Co., LTD. est une société de négoce à double entité — siège à Taichung (Taïwan) et bureau enregistré à Xiamen (Chine continentale). Ce dispositif nous permet d’acheter en direct des deux côtés du détroit et de regrouper en un seul conteneur.' },
    { q: 'Que source SunGene ?', a: 'Emballages (cartons, boîtes mailer, pochettes, impression personnalisée), articles maison (cuisine, table, rangement), jardin et plein air (jardinières, mobilier, outils, décoration), beauté (flaconnage cosmétique, accessoires, marque blanche).' },
    { q: 'Quel est le MOQ ?', a: 'MOQ : 1 000 USD par expédition. Vous pouvez combiner les catégories — emballage cadeau papier, plaids, mugs, articles brandés — dans une seule commande consolidée. Des volumes plus élevés débloquent de meilleurs prix usine.' },
    { q: 'Quels sont les délais ?', a: 'SKU en stock : 7–14 jours pour expédition. Emballage personnalisé : 25–35 jours. Marque blanche maison/jardin/beauté : 35–55 jours. Fret maritime : 18–35 jours selon le port.' },
    { q: 'Conditions de paiement et d’expédition ?', a: 'Paiement : T/T (30 % d’acompte, 70 % avant expédition) ou L/C à vue. Expédition : FOB Xiamen/Taichung, ou CIF/DDP vers tout port mondial. Conteneur consolidé disponible.' },
    { q: 'Quel est le délai de réponse ?', a: 'Réponse le jour même pendant les heures ouvrées de Taipei (lun–ven, UTC+8). WhatsApp/WeChat +86 18144132078 et email contact@sungene.net sont les canaux les plus rapides.' },
    { q: 'SunGene propose-t-il de la personnalisation ?', a: 'Oui. Emballage imprimé personnalisé, marque blanche OEM/ODM, dimensions sur mesure, choix de matières (éco, alimentaire, premium retail), correspondance Pantone. Délais d’outillage variables selon la catégorie.' },
    { q: 'Vers quels pays SunGene exporte-t-il ?', a: 'Exportation vers plus de 40 pays — Amérique du Nord, Europe, Amérique latine, Asie du Sud-Est, Moyen-Orient, Afrique, Océanie. Documents d’export (CE, FDA, REACH, RoHS, FSC, certificat d’origine) coordonnés par catégorie et destination.' },
    { q: 'Comment gérez-vous la qualité ?', a: 'Notre propre équipe à Taïwan et en Chine se rend à l’usine avant expédition. Rapports d’inspection photo + vidéo avant le chargement du conteneur. Échantillonnage AQL sur chaque commande. Tiers d’inspection uniquement à la demande.' },
    { q: 'Pourquoi passer par SunGene plutôt qu’Alibaba directement ?', a: 'Nous sommes nous-mêmes fournisseur vérifié sur Alibaba (3+ ans sur momas.en.alibaba.com — la note actuelle est publique sur la boutique et fluctue entre 3 et 5 étoiles selon la période). Nous connaissons la plateforme côté vendeur. Nous négocions le prix usine, refusons les commissions occultes, effectuons le CQ sur place et regroupons plusieurs fournisseurs en un conteneur. Vous obtenez le prix usine et un partenaire qui répond le jour même.' },
  ],
  es: [
    { q: '¿Dónde está SunGene?', a: 'SunGene Co., LTD. es una empresa comercial de doble entidad — sede en Taichung (Taiwán) y oficina registrada en Xiamen (China continental). Esto nos permite comprar directo en ambos lados del estrecho y consolidar en un solo contenedor.' },
    { q: '¿Qué hace sourcing SunGene?', a: 'Empaque (cajas, mailers, pouches, impresión personalizada), artículos del hogar (cocina, mesa, organización), jardín y exterior (macetas, mobiliario, herramientas, decoración), belleza (envases cosméticos, herramientas, marca blanca).' },
    { q: '¿Cuál es el MOQ?', a: 'MOQ: USD 1 000 por envío. Puede mezclar categorías — embalaje regalo papel, mantas, tazas, mercancía marca — en una orden consolidada. Volúmenes mayores desbloquean mejores precios de fábrica.' },
    { q: '¿Cuáles son los tiempos de entrega?', a: 'SKU en stock: 7–14 días para envío. Empaque impreso personalizado: 25–35 días. Marca blanca hogar/jardín/belleza: 35–55 días. Flete marítimo: 18–35 días según puerto.' },
    { q: '¿Condiciones de pago y envío?', a: 'Pago: T/T (30 % anticipo, 70 % antes del envío) o L/C a la vista. Envío: FOB Xiamen/Taichung, o CIF/DDP a cualquier puerto. Contenedor consolidado disponible.' },
    { q: '¿Tiempo de respuesta?', a: 'Respuesta el mismo día en horario laboral de Taipéi (lun–vie, UTC+8). WhatsApp/WeChat +86 18144132078 y email contact@sungene.net son los canales más rápidos.' },
    { q: '¿SunGene ofrece personalización?', a: 'Sí. Empaque impreso personalizado, marca blanca OEM/ODM, dimensiones a medida, selección de material (eco, grado alimentario, retail premium), correspondencia Pantone. Plazos de troquel/muestra varían por categoría.' },
    { q: '¿A qué países exporta SunGene?', a: 'Exportamos a más de 40 países — Norteamérica, Europa, Latinoamérica, Sudeste Asiático, Medio Oriente, África, Oceanía. Documentación de exportación (CE, FDA, REACH, RoHS, FSC, certificado de origen) coordinada por categoría y destino.' },
    { q: '¿Cómo se gestiona la calidad?', a: 'Nuestro propio equipo en Taiwán y China visita la fábrica antes del envío. Reportes de inspección foto + video antes de cargar el contenedor. Muestreo AQL en cada orden. Inspección externa solo a solicitud.' },
    { q: '¿Por qué trabajar con SunGene en vez de comprar directo en Alibaba?', a: 'Somos proveedor verificado en Alibaba (3+ años en momas.en.alibaba.com — la calificación actual es pública en la tienda y fluctúa entre 3 y 5 estrellas según el período). Conocemos la plataforma desde el lado del vendedor. Negociamos precio de fábrica, hacemos QC en sitio y consolidamos múltiples proveedores en un contenedor. Precio de fábrica y nuestra margen mostrados por separado en cada cotización. Un contacto que responde el mismo día en su zona horaria.' },
  ],
  pt: [
    { q: 'Onde fica a SunGene?', a: 'SunGene Co., LTD. é uma empresa comercial de dupla entidade — sede em Taichung (Taiwan) e escritório registrado em Xiamen (China continental).' },
    { q: 'O que a SunGene faz sourcing?', a: 'Embalagens, artigos para casa, jardim e exterior, e beleza — direto de fábricas verificadas em Taiwan e China continental.' },
    { q: 'Qual é o MOQ?', a: 'MOQ: USD 1.000 por embarque, com mistura de categorias permitida.' },
  ],
  ko: [
    { q: 'SunGene은 어디에 있나요?', a: 'SunGene Co., LTD.는 대만 타이중 본사와 중국 샤먼 사무소를 운영하는 이중 법인 무역 회사입니다.' },
    { q: 'SunGene은 무엇을 소싱하나요?', a: '포장재, 가정용품, 정원·아웃도어, 뷰티 — 검증된 대만·중국 공장에서 직접.' },
    { q: 'MOQ는 얼마인가요?', a: '배송당 USD 1,000 MOQ — 카테고리 혼합 주문 가능.' },
  ],
  ja: [
    { q: 'SunGeneの所在地は?', a: 'SunGene Co., LTD.は台湾・台中本社と中国・廈門オフィスを持つデュアルエンティティ商社です。' },
    { q: 'SunGeneは何を仕入れますか?', a: '包装資材、ホーム用品、ガーデン、ビューティ — 検証済みの台湾・中国工場から直接。' },
    { q: 'MOQはいくらですか?', a: '出荷あたりUSD 1,000のMOQ — カテゴリ混載可。' },
  ],
  ar: [
    { q: 'أين تقع SunGene؟', a: 'SunGene Co., LTD. شركة تجارية ثنائية الكيان — المقر في تايتشونغ (تايوان) ومكتب مسجل في شيامن (الصين القارية).' },
    { q: 'ماذا تورد SunGene؟', a: 'مواد التعبئة، أدوات المنزل، الحدائق والديكور الخارجي، منتجات التجميل — مباشرة من مصانع معتمدة في تايوان والصين.' },
    { q: 'ما الحد الأدنى للطلب؟', a: 'MOQ هو 1000 دولار أمريكي للشحنة، مع إمكانية مزج الفئات.' },
  ],
  th: [
    { q: 'SunGene อยู่ที่ไหน?', a: 'SunGene Co., LTD. เป็นบริษัทการค้าแบบสองนิติบุคคล — สำนักงานใหญ่ในไทเป (ไต้หวัน) และสำนักงานในเซียะเหมิน (จีนแผ่นดินใหญ่)' },
    { q: 'SunGene จัดหาอะไรบ้าง?', a: 'บรรจุภัณฑ์ ของใช้ในบ้าน สวนกลางแจ้ง ความงาม — ตรงจากโรงงานที่ผ่านการตรวจสอบในไต้หวันและจีน' },
    { q: 'MOQ คือเท่าไหร่?', a: 'MOQ USD 1,000 ต่อการจัดส่ง รวมหมวดหมู่ได้' },
  ],
  vi: [
    { q: 'SunGene ở đâu?', a: 'SunGene Co., LTD. là công ty thương mại hai pháp nhân — trụ sở tại Đài Trung (Đài Loan) và văn phòng đăng ký tại Hạ Môn (Trung Quốc đại lục).' },
    { q: 'SunGene cung cấp những gì?', a: 'Bao bì, đồ gia dụng, sân vườn ngoài trời, mỹ phẩm — trực tiếp từ các nhà máy đã được kiểm duyệt tại Đài Loan và Trung Quốc.' },
    { q: 'MOQ là bao nhiêu?', a: 'MOQ USD 1.000 mỗi lô hàng, có thể kết hợp các danh mục.' },
  ],
  de: [
    { q: 'Wo befindet sich SunGene?', a: 'SunGene Co., LTD. ist ein Handelsunternehmen mit Doppelstruktur — Hauptsitz in Taichung (Taiwan) und registrierter Niederlassung in Xiamen (Festlandchina).' },
    { q: 'Was sourct SunGene?', a: 'Verpackungsmaterialien, Haushaltswaren, Garten und Outdoor, Beauty — direkt von verifizierten Werken in Taiwan und Festlandchina.' },
    { q: 'Wie hoch ist die MOQ?', a: 'MOQ: 1 000 USD pro Sendung, Kategorien können in einer Bestellung gemischt werden.' },
  ],
}
