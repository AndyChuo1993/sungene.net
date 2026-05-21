import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ALL_LANGS, Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import QuickAssessment from '@/components/QuickAssessment'
import { PHOTO } from '@/lib/photoLibrary'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildPageMetadata, normalizeLang, LANG_META, langMeta} from '@/lib/seo'

export const dynamic = 'force-static'
export const revalidate = 86400

type Category = 'packaging' | 'home' | 'garden' | 'beauty'
const CATEGORIES: Category[] = ['packaging', 'home', 'garden', 'beauty']

export async function generateStaticParams() {
  return ALL_LANGS.flatMap((lang) => CATEGORIES.map((category) => ({ lang, category })))
}

type CategoryContent = {
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string
  productGroupTitle: string
  productGroups: { title: string; items: string[] }[]
  termsTitle: string
  terms: { label: string; value: string }[]
  qcTitle: string
  qc: string[]
  faqTitle: string
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaDesc: string
  ctaBtn: string
}

const CONTENT: Record<Category, Partial<Record<Lang, CategoryContent>>> = {
  packaging: {
    en: {
      metaTitle: 'Packaging Solutions — Custom Gift Boxes, Mooncake Boxes, Retail Packaging | SunGene',
      metaDescription: 'Custom mooncake boxes, premium gift boxes, retail packaging, corrugated mailer cartons, paper bags and tubes — supplied from Taiwan and China with coordinated production, pre-shipment AQL inspection, and export-ready documentation. MOQ USD 1,000.',
      kicker: 'PACKAGING SOLUTIONS',
      h1: 'Packaging Solutions',
      intro: 'SunGene supplies custom packaging from Taiwan and China — mooncake boxes, premium gift boxes, retail packaging, corrugated mailer cartons, paper bags and tubes. Coordinated production with our selected manufacturing partners, pre-shipment AQL 2.5 inspection by in-house SunGene staff, and export-ready documentation. Public Alibaba.com storefront catalog: momas.en.alibaba.com.',
      productGroupTitle: 'Packaging product groups',
      productGroups: [
        { title: 'Premium gift boxes', items: ['Mooncake gift boxes (two-piece, magnetic closure, flocked insert)', 'Brand gift boxes (rigid, foil/UV/emboss finishes)', 'Drawer-style rigid boxes', 'Window-cutout food gift boxes (cake, cookie)', 'Custom Pantone color match', 'Tamper-evident closure options'] },
        { title: 'Corrugated mailer & retail cartons', items: ['E-commerce mailer boxes (corrugated)', 'Custom-print retail outer cartons', 'Shipping cartons (single/double-wall, B/E/EB-flute)', 'Subscription-box mailer formats', 'Mooncake outer boxes for export', 'GS1 barcode-ready batch labeling'] },
        { title: 'Paper bags & tubes', items: ['Kraft shopping bags (handle-mounted)', 'Custom-print gift bags', 'Poster / wine / cosmetic paper tubes', 'Spiral and parallel-wound construction', 'Inner / outer printed surface options'] },
        { title: 'Book & lookbook printing', items: ['Brand lookbook printing & binding', 'Catalog printing (saddle-stitch / perfect-bound)', 'Premium softcover / hardcover finishes', 'Foil-stamped covers, dust jackets'] },
        { title: 'Custom decoration (paper)', items: ['Hot foil stamping', 'UV spot coating', 'Embossing / debossing', 'Soft-touch / matte / gloss film lamination', 'Pantone-spec offset and digital printing'] },
      ],
      termsTitle: 'Commercial terms — packaging',
      terms: [
        { label: 'Minimum order', value: 'USD 1,000 per shipment' },
        { label: 'Typical MOQ per SKU', value: '500–5,000 units (lower for stock items)' },
        { label: 'Lead time', value: 'Stock items: 7–15 days · Custom print: 25–40 days · Custom mould: 45–75 days' },
        { label: 'Sample policy', value: 'Stock samples free + freight collect · Custom samples charged at production cost + waived against bulk PO' },
        { label: 'Payment', value: '30% deposit / 70% before shipment is the default; flexible for repeat buyers' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW or CIF available' },
      ],
      qcTitle: 'Quality control on packaging orders',
      qc: [
        'Dimensional check against approved drawings (every 50–100 units, AQL 2.5 cosmetic / 1.0 critical)',
        'Print colour check against Pantone reference under D65 light',
        'Seal integrity test for pouches (vacuum chamber method)',
        'Drop test on rigid containers (1m onto concrete)',
        'Material certification (FDA / EU food contact / REACH where applicable)',
        'Final inspection report + ≥30 photos + 1–2 min walkthrough video',
      ],
      faqTitle: 'Common questions on packaging sourcing',
      faq: [
        { q: 'Can you do custom shapes or fully bespoke moulds?', a: 'Yes. Custom-mould projects start from approximately USD 3,000–8,000 in tooling depending on geometry and material. Mould tooling is paid by the buyer, with the tool either retained at the factory under exclusive use or shipped to the buyer.' },
        { q: 'What is the lowest MOQ you have seen on custom-printed pouches?', a: 'Around 3,000 pieces for stand-up pouches with custom print and zipper closure. Below that, expect to use stock pouches with overprinted labels.' },
        { q: 'Do your factories meet EU / US food contact requirements?', a: 'Yes — our food-contact suppliers carry FDA 21 CFR / EU 10/2011 documentation. Available on request before sample shipment.' },
        { q: 'Can you handle private-label cosmetic packaging?', a: 'Yes. Including hot stamp, silk-screen, UV print, label application, frosting, and matte finishing. We frequently coordinate fill-line compatibility checks for cosmetic brands.' },
      ],
      ctaTitle: 'Quote on your packaging project',
      ctaDesc: 'Send a reference image (or competitor link), target quantity, target country, and any decoration spec. Same-day reply with a buyer-facing quote and lead time.',
      ctaBtn: 'Request a quote',
    },
    zh: {
      metaTitle: '包裝解決方案 — 客製月餅禮盒、品牌禮盒、零售包裝 | SunGene',
      metaDescription: '客製月餅禮盒、磁吸品牌禮盒、零售包裝、瓦楞 mailer 紙箱、牛皮紙袋與紙管 — 從台灣與中國供應,生產協調、出口前 AQL 品檢、出口文件齊備。最低訂單 USD 1,000。',
      kicker: '包裝解決方案',
      h1: '包裝解決方案',
      intro: 'SunGene 從台灣與中國供應客製包裝 — 月餅禮盒、精裝品牌禮盒、零售包裝、瓦楞 mailer 紙箱、紙袋與紙管。與精選製造夥伴協調生產、SunGene 自有員工出口前 AQL 2.5 品檢、出口文件齊備。Alibaba.com 公開店面:momas.en.alibaba.com。',
      productGroupTitle: '包裝產品群',
      productGroups: [
        { title: '精品禮盒', items: ['月餅禮盒(兩件式、磁吸扣、植絨內襯)', '品牌禮盒(硬盒、燙金/UV/凹凸)', '抽屜式硬盒', '開窗食品禮盒(月餅、餅乾、糕點)', '客製 Pantone 色號對應', '防偽封口設計'] },
        { title: '瓦楞 mailer 與零售紙箱', items: ['電商 mailer 紙箱(瓦楞)', '客製印製零售外箱', '出貨紙箱(單/雙瓦楞、B/E/EB 楞)', '訂閱盒 mailer 格式', '月餅外箱(出口用)', '附 GS1 條碼與批號標籤'] },
        { title: '紙袋與紙管', items: ['牛皮購物袋(附提手)', '客製印製禮品袋', '海報/紅酒/化妝品紙管', '螺旋與平捲結構', '內/外面印刷選項'] },
        { title: '精裝書與品牌型錄', items: ['品牌 lookbook 印製裝訂', '型錄印製(騎馬釘/膠裝)', '高端軟皮/硬皮裝幀', '燙金封面、防塵書套'] },
        { title: '客製加工(紙)', items: ['燙金', 'UV 局部上光', '凹凸壓花', '觸感膜/霧面/亮面覆膜', 'Pantone 規格膠印與數位印刷'] },
      ],
      termsTitle: '包裝產品商業條件',
      terms: [
        { label: '最低訂單', value: 'USD 1,000 每批出貨' },
        { label: '每 SKU 起訂量', value: '500–5,000 件（現貨品較低）' },
        { label: '交期', value: '現貨：7–15 天 · 客製印刷：25–40 天 · 客製開模：45–75 天' },
        { label: '樣品政策', value: '現貨樣品免費＋運費到付 · 客製樣品依生產成本收費，整單下單後折抵' },
        { label: '付款條件', value: '30% 訂金 / 70% 出貨前；老客戶彈性' },
        { label: '貿易條件', value: 'FOB 廈門 / FOB 基隆 · 可接 EXW 或 CIF' },
      ],
      qcTitle: '包裝訂單的品質管制',
      qc: [
        '依核准圖面進行尺寸抽檢（每 50–100 件，AQL 2.5 外觀／1.0 關鍵）',
        '印刷顏色在 D65 光源下對照 Pantone 標準',
        '袋類封口完整性檢測（真空腔體法）',
        '硬包裝跌落測試（1 公尺到水泥地）',
        '材質證明（食品接觸 FDA / EU、REACH 視適用提供）',
        '驗貨報告 ＋ ≥30 張照片 ＋ 1–2 分鐘走線影片',
      ],
      faqTitle: '包裝採購常見問題',
      faq: [
        { q: '可以做客製形狀或完全訂製開模嗎？', a: '可以。客製開模專案視幾何與材質，模具成本約 USD 3,000–8,000。模具由買方支付，可選擇留在工廠專用或寄回給買方。' },
        { q: '客製印刷立袋的最低 MOQ 可以做到多少？', a: '附拉鏈與客製印刷的立袋，常見落在 3,000 件起。低於這個數量，建議使用現貨袋＋貼標方式處理。' },
        { q: '工廠符合歐盟／美國食品接觸法規嗎？', a: '是。我們的食品接觸供應商備有 FDA 21 CFR / EU 10/2011 文件，樣品出貨前可提供。' },
        { q: '可以承接私品牌（Private Label）化妝品包材嗎？', a: '可以。包含燙金、網印、UV 印刷、貼標、霧面與磨砂處理。我們也常協助化妝品品牌做填充線相容性確認。' },
      ],
      ctaTitle: '為你的包裝專案報價',
      ctaDesc: '提供一張參考圖(或競品連結)、目標數量、銷往國家、加工需求。當日回覆——附上買家報價與交期。',
      ctaBtn: '索取報價',
    },
    cn: {
      metaTitle: '包装解决方案 — 定制月饼礼盒、品牌礼盒、零售包装 | SunGene',
      metaDescription: '定制月饼礼盒、磁吸品牌礼盒、零售包装、瓦楞 mailer 纸箱、牛皮纸袋与纸管 — 从台湾与中国供应,生产协调、出口前 AQL 品检、出口文件齐备。最低订单 USD 1,000。',
      kicker: '包装解决方案',
      h1: '包装解决方案',
      intro: 'SunGene 从台湾与中国供应定制包装 — 月饼礼盒、精装品牌礼盒、零售包装、瓦楞 mailer 纸箱、纸袋与纸管。与精选制造伙伴协调生产、SunGene 自有员工出口前 AQL 2.5 品检、出口文件齐备。Alibaba.com 公开店面:momas.en.alibaba.com。',
      productGroupTitle: '包装产品群',
      productGroups: [
        { title: '精品礼盒', items: ['月饼礼盒(两件式、磁吸扣、植绒内衬)', '品牌礼盒(硬盒、烫金/UV/凹凸)', '抽屉式硬盒', '开窗食品礼盒(月饼、饼干、糕点)', '定制 Pantone 色号对应', '防伪封口设计'] },
        { title: '瓦楞 mailer 与零售纸箱', items: ['电商 mailer 纸箱(瓦楞)', '定制印制零售外箱', '出货纸箱(单/双瓦楞、B/E/EB 楞)', '订阅盒 mailer 格式', '月饼外箱(出口用)', '附 GS1 条码与批号标签'] },
        { title: '纸袋与纸管', items: ['牛皮购物袋(附提手)', '定制印制礼品袋', '海报/红酒/化妆品纸管', '螺旋与平卷结构', '内/外面印刷选项'] },
        { title: '精装书与品牌目录', items: ['品牌 lookbook 印制装订', '目录印制(骑马钉/胶装)', '高端软皮/硬皮装帧', '烫金封面、防尘书套'] },
        { title: '定制加工(纸)', items: ['烫金', 'UV 局部上光', '凹凸压花', '触感膜/雾面/亮面覆膜', 'Pantone 规格胶印与数字印刷'] },
      ],
      termsTitle: '包装产品商业条件',
      terms: [
        { label: '最低订单', value: 'USD 1,000 每批出货' },
        { label: '每 SKU 起订量', value: '500–5,000 件（现货品较低）' },
        { label: '交期', value: '现货：7–15 天 · 定制印刷：25–40 天 · 定制开模：45–75 天' },
        { label: '样品政策', value: '现货样品免费＋运费到付 · 定制样品依生产成本收费，整单下单后折抵' },
        { label: '付款条件', value: '30% 订金 / 70% 出货前；老客户灵活' },
        { label: '贸易条件', value: 'FOB 厦门 / FOB 基隆 · 可接 EXW 或 CIF' },
      ],
      qcTitle: '包装订单的质量管制',
      qc: [
        '依核准图面进行尺寸抽检（每 50–100 件，AQL 2.5 外观／1.0 关键）',
        '印刷颜色在 D65 光源下对照 Pantone 标准',
        '袋类封口完整性检测（真空腔体法）',
        '硬包装跌落测试（1 公尺到水泥地）',
        '材质证明（食品接触 FDA / EU、REACH 视适用提供）',
        '验货报告 ＋ ≥30 张照片 ＋ 1–2 分钟走线视频',
      ],
      faqTitle: '包装采购常见问题',
      faq: [
        { q: '可以做定制形状或完全定制开模吗？', a: '可以。定制开模项目视几何与材质，模具成本约 USD 3,000–8,000。模具由买方支付，可选择留在工厂专用或寄回给买方。' },
        { q: '定制印刷立袋的最低 MOQ 可以做到多少？', a: '附拉链与定制印刷的立袋，常见落在 3,000 件起。低于这个数量，建议使用现货袋＋贴标方式处理。' },
        { q: '工厂符合欧盟／美国食品接触法规吗？', a: '是。我们的食品接触供应商备有 FDA 21 CFR / EU 10/2011 文件，样品出货前可提供。' },
        { q: '可以承接私品牌（Private Label）化妆品包材吗？', a: '可以。包含烫金、丝印、UV 印刷、贴标、雾面与磨砂处理。我们也常协助化妆品品牌做填充线兼容性确认。' },
      ],
      ctaTitle: '为您的包装项目报价',
      ctaDesc: '提供一张参考图(或竞品链接)、目标数量、销往国家、加工需求。当日回覆——附上买家报价与交期。',
      ctaBtn: '索取报价',
    },
    fr: {
      metaTitle: "Solutions d'emballage — Boîtes mooncake, boîtes-cadeaux, emballage retail | SunGene",
      metaDescription: "Boîtes mooncake personnalisées, boîtes-cadeaux premium, emballage retail, cartons mailer ondulés, sacs et tubes papier — fournis depuis Taïwan et la Chine avec coordination de production, contrôle AQL pré-expédition et documentation export prête. MOQ 1 000 USD.",
      kicker: "SOLUTIONS D'EMBALLAGE",
      h1: "Solutions d'emballage",
      intro: "SunGene fournit de l'emballage personnalisé depuis Taïwan et la Chine — boîtes mooncake, boîtes-cadeaux premium, emballage retail, cartons mailer ondulés, sacs et tubes papier. Coordination de production avec nos partenaires manufacturiers sélectionnés, contrôle AQL 2,5 pré-expédition par le personnel SunGene en interne, documentation export prête. Boutique publique Alibaba.com : momas.en.alibaba.com.",
      productGroupTitle: "Groupes de produits emballage",
      productGroups: [
        { title: 'Boîtes-cadeaux premium', items: ['Boîtes mooncake (deux pièces, fermeture magnétique, insert floqué)', 'Boîtes-cadeaux de marque (rigide, dorure/UV/gaufrage)', 'Boîtes rigides type tiroir', 'Boîtes-cadeaux alimentaire à fenêtre (gâteaux, biscuits)', 'Correspondance couleur Pantone sur mesure', 'Fermetures avec preuve de manipulation'] },
        { title: 'Cartons mailer & retail ondulés', items: ['Cartons mailer e-commerce (ondulés)', 'Cartons retail extérieurs personnalisés', 'Cartons expédition (simple/double cannelure, B/E/EB)', 'Formats mailer abonnement', 'Cartons extérieurs mooncake (export)', 'Étiquetage GS1 code-barres + numéro de lot'] },
        { title: 'Sacs et tubes papier', items: ['Sacs kraft shopping (poignées posées)', 'Sacs-cadeaux imprimés sur mesure', 'Tubes papier poster / vin / cosmétique', 'Construction spiralée et parallèle', 'Options impression intérieure / extérieure'] },
        { title: 'Impression livre et lookbook marque', items: ["Impression et reliure lookbook de marque", 'Impression catalogue (piqûre cheval / dos collé)', 'Couvertures premium souple / cartonnée', 'Couvertures dorées, jaquettes anti-poussière'] },
        { title: 'Décoration sur mesure (papier)', items: ['Dorure à chaud', 'Vernis UV spot', 'Gaufrage / débossage', 'Pelliculage soft-touch / mat / brillant', 'Impression offset et numérique selon Pantone'] },
      ],
      termsTitle: 'Conditions commerciales — emballage',
      terms: [
        { label: 'Commande minimum', value: 'USD 1 000 par expédition' },
        { label: 'MOQ typique par SKU', value: '500–5 000 unités (inférieur pour produits stock)' },
        { label: 'Délai', value: 'Stock : 7–15 j · Impression custom : 25–40 j · Moule custom : 45–75 j' },
        { label: 'Politique échantillon', value: 'Échantillons stock gratuits + port dû · Échantillons custom au coût de production, remboursés sur commande globale' },
        { label: 'Paiement', value: '30 % acompte / 70 % avant expédition par défaut ; flexible pour clients récurrents' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW ou CIF disponibles' },
      ],
      qcTitle: "Contrôle qualité sur commandes emballage",
      qc: [
        "Contrôle dimensionnel selon plans approuvés (50–100 unités, AQL 2,5 cosmétique / 1,0 critique)",
        "Vérification couleur impression sous lumière D65 contre référence Pantone",
        "Test étanchéité scellage pour pochettes (méthode chambre vide)",
        "Test de chute sur contenants rigides (1 m sur béton)",
        "Certification matière (FDA / EU contact alimentaire / REACH si applicable)",
        "Rapport d'inspection final + ≥30 photos + vidéo de 1–2 min",
      ],
      faqTitle: 'Questions fréquentes — emballage',
      faq: [
        { q: 'Pouvez-vous faire des formes sur mesure ou des moules entièrement dédiés ?', a: "Oui. Les projets à moule custom démarrent autour de USD 3 000–8 000 en outillage selon la géométrie et le matériau. L'outillage est payé par l'acheteur ; le moule peut rester à l'usine en usage exclusif ou être expédié à l'acheteur." },
        { q: 'Quel est le MOQ minimum constaté sur pochettes imprimées custom ?', a: 'Environ 3 000 pièces pour pochettes stand-up imprimées avec zipper. En dessous, utilisez des pochettes stock avec étiquettes imprimées par-dessus.' },
        { q: 'Vos usines sont-elles conformes contact alimentaire UE / US ?', a: "Oui — nos fournisseurs contact alimentaire disposent de la documentation FDA 21 CFR / EU 10/2011, disponible sur demande avant expédition d'échantillon." },
        { q: 'Pouvez-vous gérer le packaging cosmétique en marque blanche ?', a: 'Oui. Incluant marquage à chaud, sérigraphie, impression UV, étiquetage, givré et finition mate. Nous coordonnons régulièrement les contrôles de compatibilité ligne de remplissage pour les marques cosmétiques.' },
      ],
      ctaTitle: 'Devis sur votre projet emballage',
      ctaDesc: "Envoyez une image de référence (ou lien concurrent), quantité cible, pays de destination et spécification de décoration. Réponse le jour même avec un devis acheteur et délai.",
      ctaBtn: 'Demander un devis',
    },
    es: {
      metaTitle: 'Soluciones de embalaje — Cajas mooncake, cajas regalo, embalaje retail | SunGene',
      metaDescription: 'Cajas mooncake personalizadas, cajas regalo premium, embalaje retail, cartones mailer corrugados, bolsas y tubos de papel — suministrados desde Taiwán y China con coordinación de producción, inspección AQL pre-exportación y documentación de exportación lista. MOQ USD 1.000.',
      kicker: 'SOLUCIONES DE EMBALAJE',
      h1: 'Soluciones de embalaje',
      intro: 'SunGene suministra embalaje personalizado desde Taiwán y China — cajas mooncake, cajas regalo premium, embalaje retail, cartones mailer corrugados, bolsas y tubos de papel. Coordinación de producción con nuestros socios manufactureros seleccionados, inspección AQL 2.5 pre-exportación por personal interno de SunGene, documentación de exportación lista. Tienda pública Alibaba.com: momas.en.alibaba.com.',
      productGroupTitle: 'Grupos de productos embalaje',
      productGroups: [
        { title: 'Cajas regalo premium', items: ['Cajas mooncake (dos piezas, cierre magnético, inserto flocado)', 'Cajas regalo de marca (rígidas, dorado/UV/repujado)', 'Cajas rígidas tipo cajón', 'Cajas regalo alimento con ventana (pasteles, galletas)', 'Coincidencia color Pantone personalizada', 'Cierres a prueba de manipulación'] },
        { title: 'Cartones mailer y retail corrugados', items: ['Cartones mailer e-commerce (corrugados)', 'Cartones retail exteriores personalizados', 'Cartones envío (simple/doble onda, B/E/EB)', 'Formatos mailer suscripción', 'Cartones exteriores mooncake (exportación)', 'Etiquetado GS1 código de barras + número de lote'] },
        { title: 'Bolsas y tubos papel', items: ['Bolsas kraft compra (asas montadas)', 'Bolsas regalo impresas personalizadas', 'Tubos papel póster / vino / cosmética', 'Construcción espiral y paralela', 'Opciones impresión interior / exterior'] },
        { title: 'Impresión libro y lookbook de marca', items: ['Impresión y encuadernación lookbook de marca', 'Impresión catálogo (grapado / lomo cuadrado)', 'Cubiertas premium blanda / dura', 'Cubiertas doradas, sobrecubiertas anti-polvo'] },
        { title: 'Decoración personalizada (papel)', items: ['Estampado oro caliente', 'Barniz UV puntual', 'Repujado / hueco', 'Laminado soft-touch / mate / brillo', 'Impresión offset y digital según Pantone'] },
      ],
      termsTitle: 'Términos comerciales — empaque',
      terms: [
        { label: 'Pedido mínimo', value: 'USD 1 000 por envío' },
        { label: 'MOQ típico por SKU', value: '500–5 000 unidades (menor para productos stock)' },
        { label: 'Plazo de entrega', value: 'Stock: 7–15 días · Impresión a medida: 25–40 días · Molde a medida: 45–75 días' },
        { label: 'Política de muestras', value: 'Muestras stock gratis + flete por cobrar · Muestras a medida con costo de producción, reembolsables contra OC global' },
        { label: 'Pago', value: '30% anticipo / 70% antes del envío por defecto; flexible para clientes recurrentes' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW o CIF disponibles' },
      ],
      qcTitle: 'Control de calidad en pedidos de empaque',
      qc: [
        'Verificación dimensional contra planos aprobados (50–100 unidades, AQL 2.5 cosmético / 1.0 crítico)',
        'Verificación de color de impresión bajo luz D65 contra referencia Pantone',
        'Prueba de integridad de sellado para bolsas (método cámara de vacío)',
        'Prueba de caída sobre contenedores rígidos (1m sobre concreto)',
        'Certificación de material (FDA / EU contacto alimentario / REACH cuando aplique)',
        'Informe final de inspección + ≥30 fotos + video de 1–2 min',
      ],
      faqTitle: 'Preguntas frecuentes — empaque',
      faq: [
        { q: '¿Pueden hacer formas a medida o moldes totalmente personalizados?', a: 'Sí. Proyectos de molde a medida parten de aproximadamente USD 3 000–8 000 en herramental según geometría y material. El molde lo paga el comprador, y puede quedar en la fábrica de uso exclusivo o enviarse al comprador.' },
        { q: '¿Cuál es el MOQ más bajo en bolsas impresas a medida?', a: 'Alrededor de 3 000 piezas para bolsas stand-up impresas con cierre. Por debajo, recomendamos bolsas stock con etiquetas sobreimpresas.' },
        { q: '¿Cumplen sus fábricas con requisitos de contacto alimentario UE / EE.UU.?', a: 'Sí — nuestros proveedores de contacto alimentario tienen documentación FDA 21 CFR / EU 10/2011. Disponible bajo petición antes del envío de muestras.' },
        { q: '¿Pueden manejar empaque cosmético en private label?', a: 'Sí. Incluyendo hot stamp, serigrafía, impresión UV, aplicación de etiqueta, esmerilado y acabado mate. Frecuentemente coordinamos verificaciones de compatibilidad con la línea de llenado para marcas cosméticas.' },
      ],
      ctaTitle: 'Cotice su proyecto de empaque',
      ctaDesc: 'Envíe imagen de referencia (o enlace de competidor), cantidad objetivo, país de destino y especificación de decoración. Respuesta el mismo día con una cotización para el comprador y plazo.',
      ctaBtn: 'Solicitar cotización',
    },
  },
  home: {
    en: {
      metaTitle: 'Home & Living Products — Drinkware, Ceramics, Blankets | SunGene',
      metaDescription: 'Mugs, tumblers, ceramic gift sets, kitchen accessories, branded blankets and soft goods — supplied from Taiwan and China through selected manufacturing partners. Pre-shipment AQL inspection. MOQ USD 1,000.',
      kicker: 'HOME & LIVING PRODUCTS',
      h1: 'Home & Living Products',
      intro: 'SunGene supplies home and living products from Taiwan and China — mugs, tumblers, ceramic gift sets, kitchen accessories, branded blankets and soft goods. Coordinated production with our selected manufacturing partners across both markets, pre-shipment AQL inspection by in-house SunGene staff, and export-ready documentation.',
      productGroupTitle: 'Home & living product groups',
      productGroups: [
        { title: 'Kitchen & cookware', items: ['Stainless steel pots, pans, woks (304 / 316L)', 'Cast iron cookware', 'Non-stick pans (PFOA-free coatings)', 'Bakeware (silicone, carbon steel, stoneware)', 'Knives and cutting boards', 'Kitchen utensils (silicone, bamboo, stainless)'] },
        { title: 'Food storage', items: ['Glass storage jars and containers (boroaluminate)', 'Plastic storage boxes (BPA-free PP / Tritan)', 'Vacuum sealing containers', 'Lunch boxes (insulated, bento, stainless)', 'Spice racks and organisers'] },
        { title: 'Tableware & dining', items: ['Stoneware and porcelain plates / bowls', 'Glassware (drinking, serving, decorative)', 'Cutlery sets (stainless, gold-coated, black)', 'Place mats and runners', 'Serving trays and platters'] },
        { title: 'Home decor & small living', items: ['Storage baskets (rattan, fabric, plastic)', 'Storage bins and stackable boxes', 'Candles and fragrance diffusers', 'Photo frames and wall decor', 'Bathroom accessories sets', 'Small appliance covers and aprons'] },
      ],
      termsTitle: 'Commercial terms — home goods',
      terms: [
        { label: 'Minimum order', value: 'USD 1,000 per shipment' },
        { label: 'Typical MOQ per SKU', value: '200–2,000 units depending on category and decoration' },
        { label: 'Lead time', value: 'Stock items: 10–20 days · Custom print / colour: 30–50 days · Tooling required: 60–90 days' },
        { label: 'Sample policy', value: 'Stock samples free + freight collect · Custom samples charged at production cost' },
        { label: 'Payment', value: '30% deposit / 70% before shipment is the default' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW or CIF available' },
      ],
      qcTitle: 'Quality control on home goods',
      qc: [
        'Functional check (sealing, locking mechanisms, handles, hinges)',
        'Food-contact compliance verification (FDA / EU 10/2011)',
        'Coating adhesion and scratch resistance check on non-stick cookware',
        'Visual inspection against AQL 2.5 (cosmetic) / 1.0 (functional)',
        'Carton drop test and freight protection check',
        'Inspection report + ≥30 photos + walkthrough video',
      ],
      faqTitle: 'Common questions on home goods sourcing',
      faq: [
        { q: 'Do you handle private-label kitchenware?', a: 'Yes. Including silk-screen, pad printing, laser engraving, custom packaging, and barcoded carton labels for retail.' },
        { q: 'What is your stance on PFOA / PFAS non-stick coatings?', a: 'Our non-stick suppliers carry PFOA-free certifications by default. PFAS-free coatings are available on request and may extend lead time by 2–3 weeks.' },
        { q: 'Can you source seasonal / holiday product runs?', a: 'Yes — Christmas, Lunar New Year, Easter, etc. We recommend confirming order 4–5 months ahead of intended delivery to account for factory peak season.' },
        { q: 'Can you arrange retail-ready packaging (printed colour box + barcode)?', a: 'Yes. Our packaging supplier network coordinates with the goods factory directly, so retail-ready packaging is included in the single SunGene quote.' },
      ],
      ctaTitle: 'Quote on your home goods project',
      ctaDesc: 'Send a reference image, target quantity, retail or wholesale channel, and packaging needs. Same-day reply with a buyer-facing quote and lead time.',
      ctaBtn: 'Request a quote',
    },
    zh: {
      metaTitle: '居家生活產品 — 馬克杯、陶瓷、品牌毛毯 | SunGene',
      metaDescription: '馬克杯、保溫杯、陶瓷禮盒、廚房配件、品牌毛毯與軟織品 — 從台灣與中國透過精選製造夥伴供應。出口前 AQL 品檢。最低訂單 USD 1,000。',
      kicker: '居家生活產品',
      h1: '居家生活產品',
      intro: 'SunGene 從台灣與中國供應居家生活產品 — 馬克杯、保溫杯、陶瓷禮盒、廚房配件、品牌毛毯與軟織品。與精選製造夥伴在兩地協調生產,SunGene 自有員工出口前 AQL 品檢,出口文件齊備。',
      productGroupTitle: '居家生活產品群',
      productGroups: [
        { title: '廚房與廚具', items: ['不鏽鋼鍋具（304 / 316L）', '鑄鐵鍋具', '不沾鍋（PFOA-free 塗層）', '烤盤（矽膠、碳鋼、陶瓷）', '刀具與砧板', '廚房工具（矽膠、竹、不鏽鋼）'] },
        { title: '食物收納', items: ['玻璃保鮮罐與容器（硼鋁矽）', '塑膠收納盒（無 BPA PP / Tritan）', '真空保鮮罐', '便當盒（保溫、便當、不鏽鋼）', '調料架與整理盒'] },
        { title: '餐桌與餐具', items: ['陶瓷與骨瓷盤碗', '玻璃器皿（飲用、上菜、裝飾）', '餐具組（不鏽鋼、鍍金、黑色）', '餐墊與桌旗', '托盤與大盤'] },
        { title: '家飾與生活小物', items: ['收納籃（藤、布、塑膠）', '可堆疊收納箱', '蠟燭與擴香', '相框與壁掛裝飾', '浴室配件套組', '小家電防塵套與圍裙'] },
      ],
      termsTitle: '家居產品商業條件',
      terms: [
        { label: '最低訂單', value: 'USD 1,000 每批出貨' },
        { label: '每 SKU 起訂量', value: '200–2,000 件（依品類與加工方式）' },
        { label: '交期', value: '現貨：10–20 天 · 客製印刷／顏色：30–50 天 · 需開模：60–90 天' },
        { label: '樣品政策', value: '現貨樣品免費＋運費到付 · 客製樣品依生產成本收費' },
        { label: '付款條件', value: '預設 30% 訂金 / 70% 出貨前' },
        { label: '貿易條件', value: 'FOB 廈門 / FOB 基隆 · 可接 EXW 或 CIF' },
      ],
      qcTitle: '家居產品品質管制',
      qc: [
        '功能檢測（封口、上鎖機構、把手、鉸鏈）',
        '食品接觸合規驗證（FDA / EU 10/2011）',
        '不沾鍋塗層附著力與抗刮測試',
        '依 AQL 2.5（外觀）/ 1.0（功能）抽檢',
        '紙箱跌落測試與運送防護檢查',
        '驗貨報告 ＋ ≥30 張照片 ＋ 走線影片',
      ],
      faqTitle: '家居採購常見問題',
      faq: [
        { q: '可以做廚具的私品牌嗎？', a: '可以。包含網印、移印、雷雕、客製包裝與帶條碼的零售紙箱標籤。' },
        { q: '不沾鍋的 PFOA / PFAS 立場？', a: '我們的不沾鍋供應商標配 PFOA-free 認證。PFAS-free 塗層可依需求安排，交期可能延後 2–3 週。' },
        { q: '可以協助節慶／節日商品的小批量採購嗎？', a: '可以——聖誕、農曆新年、復活節等。建議在預計交貨前 4–5 個月確認訂單，以避開工廠淡旺季。' },
        { q: '可以安排零售即出包裝（彩盒＋條碼）嗎？', a: '可以。我們的包裝供應商與商品工廠直接協調，零售包裝已含在 SunGene 同一張報價內。' },
      ],
      ctaTitle: '為你的家居專案報價',
      ctaDesc: '提供參考圖、目標數量、銷售通路、包裝需求。當日回覆,附上買家報價與交期。',
      ctaBtn: '索取報價',
    },
    cn: {
      metaTitle: '居家生活产品 — 马克杯、陶瓷、品牌毛毯 | SunGene',
      metaDescription: '马克杯、保温杯、陶瓷礼盒、厨房配件、品牌毛毯与软织品 — 从台湾与中国通过精选制造伙伴供应。出口前 AQL 品检。最低订单 USD 1,000。',
      kicker: '居家生活产品',
      h1: '居家生活产品',
      intro: 'SunGene 从台湾与中国供应居家生活产品 — 马克杯、保温杯、陶瓷礼盒、厨房配件、品牌毛毯与软织品。与精选制造伙伴在两地协调生产,SunGene 自有员工出口前 AQL 品检,出口文件齐备。',
      productGroupTitle: '居家生活产品群',
      productGroups: [
        { title: '厨房与厨具', items: ['不锈钢锅具（304 / 316L）', '铸铁锅具', '不粘锅（PFOA-free 涂层）', '烤盘（硅胶、碳钢、陶瓷）', '刀具与砧板', '厨房工具（硅胶、竹、不锈钢）'] },
        { title: '食物收纳', items: ['玻璃保鲜罐与容器（硼铝硅）', '塑料收纳盒（无 BPA PP / Tritan）', '真空保鲜罐', '便当盒（保温、便当、不锈钢）', '调料架与整理盒'] },
        { title: '餐桌与餐具', items: ['陶瓷与骨瓷盘碗', '玻璃器皿（饮用、上菜、装饰）', '餐具组（不锈钢、镀金、黑色）', '餐垫与桌旗', '托盘与大盘'] },
        { title: '家饰与生活小物', items: ['收纳篮（藤、布、塑料）', '可堆叠收纳箱', '蜡烛与扩香', '相框与壁挂装饰', '浴室配件套组', '小家电防尘套与围裙'] },
      ],
      termsTitle: '家居产品商业条件',
      terms: [
        { label: '最低订单', value: 'USD 1,000 每批出货' },
        { label: '每 SKU 起订量', value: '200–2,000 件（依品类与加工方式）' },
        { label: '交期', value: '现货：10–20 天 · 定制印刷／颜色：30–50 天 · 需开模：60–90 天' },
        { label: '样品政策', value: '现货样品免费＋运费到付 · 定制样品依生产成本收费' },
        { label: '付款条件', value: '预设 30% 订金 / 70% 出货前' },
        { label: '贸易条件', value: 'FOB 厦门 / FOB 基隆 · 可接 EXW 或 CIF' },
      ],
      qcTitle: '家居产品质量管制',
      qc: [
        '功能检测（封口、上锁机构、把手、铰链）',
        '食品接触合规验证（FDA / EU 10/2011）',
        '不粘锅涂层附着力与抗刮测试',
        '依 AQL 2.5（外观）/ 1.0（功能）抽检',
        '纸箱跌落测试与运送防护检查',
        '验货报告 ＋ ≥30 张照片 ＋ 走线视频',
      ],
      faqTitle: '家居采购常见问题',
      faq: [
        { q: '可以做厨具的私品牌吗？', a: '可以。包含丝印、移印、激光雕刻、定制包装与带条码的零售纸箱标签。' },
        { q: '不粘锅的 PFOA / PFAS 立场？', a: '我们的不粘锅供应商标配 PFOA-free 认证。PFAS-free 涂层可按需求安排，交期可能延后 2–3 周。' },
        { q: '可以协助节庆／节日商品的小批量采购吗？', a: '可以——圣诞、农历新年、复活节等。建议在预计交货前 4–5 个月确认订单，以避开工厂淡旺季。' },
        { q: '可以安排零售即出包装（彩盒＋条码）吗？', a: '可以。我们的包装供应商与商品工厂直接协调，零售包装已含在 SunGene 同一张报价内。' },
      ],
      ctaTitle: '为您的家居项目报价',
      ctaDesc: '提供参考图、目标数量、销售渠道、包装需求。当日回覆,附上买家报价与交期。',
      ctaBtn: '索取报价',
    },
    fr: {
      metaTitle: "Produits maison & vie quotidienne — Mugs, céramique, plaids | SunGene",
      metaDescription: "Mugs, gourdes, sets en céramique, accessoires cuisine, plaids et textiles personnalisés — fournis depuis Taïwan et la Chine via nos partenaires manufacturiers sélectionnés. Contrôle AQL pré-expédition. MOQ 1 000 USD.",
      kicker: "PRODUITS MAISON & VIE QUOTIDIENNE",
      h1: "Produits maison & vie quotidienne",
      intro: "SunGene fournit des produits maison et vie quotidienne depuis Taïwan et la Chine — mugs, gourdes, sets céramiques, accessoires cuisine, plaids et textiles. Production coordonnée avec nos partenaires manufacturiers sélectionnés, contrôle AQL pré-expédition par le personnel SunGene en interne et documentation export prête.",
      productGroupTitle: "Groupes de produits maison & vie quotidienne",
      productGroups: [
        { title: 'Cuisine & batterie de cuisine', items: ['Casseroles, poêles, woks inox (304 / 316L)', 'Cocottes en fonte', 'Poêles antiadhésives (revêtements sans PFOA)', 'Moules à pâtisserie (silicone, acier carbone, grès)', 'Couteaux et planches', 'Ustensiles (silicone, bambou, inox)'] },
        { title: 'Conservation alimentaire', items: ['Bocaux et boîtes de conservation en verre (borosilicate)', 'Boîtes plastique (PP sans BPA / Tritan)', 'Boîtes sous vide', 'Boîtes repas (isothermes, bento, inox)', 'Étagères à épices et organiseurs'] },
        { title: 'Vaisselle & arts de la table', items: ['Assiettes et bols grès / porcelaine', 'Verrerie (verres, service, décorative)', 'Sets de couverts (inox, doré, noir)', 'Sets de table et chemins', 'Plateaux de service'] },
        { title: 'Déco & petite habitation', items: ['Paniers de rangement (rotin, tissu, plastique)', 'Bacs empilables', 'Bougies et diffuseurs', 'Cadres photo et déco murale', 'Sets accessoires salle de bain', 'Housses petit électroménager et tabliers'] },
      ],
      termsTitle: 'Conditions commerciales — articles maison',
      terms: [
        { label: 'Commande minimum', value: 'USD 1 000 par expédition' },
        { label: 'MOQ typique par SKU', value: '200–2 000 unités selon catégorie et décoration' },
        { label: 'Délai', value: 'Stock : 10–20 j · Impression/couleur custom : 30–50 j · Outillage requis : 60–90 j' },
        { label: 'Échantillons', value: 'Stock gratuits + port dû · Custom au coût de production' },
        { label: 'Paiement', value: '30 % acompte / 70 % avant expédition' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW ou CIF disponibles' },
      ],
      qcTitle: 'Contrôle qualité — articles maison',
      qc: [
        "Contrôle fonctionnel (fermetures, mécanismes, poignées, charnières)",
        'Conformité contact alimentaire (FDA / EU 10/2011)',
        "Adhérence et résistance aux rayures du revêtement antiadhésif",
        'Inspection visuelle AQL 2,5 (cosmétique) / 1,0 (fonctionnel)',
        'Test de chute carton et protection transport',
        'Rapport + ≥30 photos + vidéo',
      ],
      faqTitle: 'Questions fréquentes — articles maison',
      faq: [
        { q: 'Gérez-vous la marque blanche sur batterie de cuisine ?', a: 'Oui. Sérigraphie, tampographie, gravure laser, packaging custom et étiquettes carton code-barres pour le retail.' },
        { q: 'Quelle est votre position PFOA / PFAS sur antiadhésifs ?', a: "Nos fournisseurs antiadhésifs sont certifiés sans PFOA par défaut. Revêtements sans PFAS disponibles sur demande, allongeant le délai de 2–3 semaines." },
        { q: 'Pouvez-vous gérer des séries saisonnières / fêtes ?', a: 'Oui — Noël, Nouvel An lunaire, Pâques, etc. Confirmer la commande 4–5 mois avant la livraison souhaitée pour éviter la haute saison usine.' },
        { q: 'Pouvez-vous organiser packaging retail-ready (boîte couleur imprimée + code-barres) ?', a: 'Oui. Notre réseau emballage coordonne directement avec l\'usine produit, donc le packaging retail-ready est inclus dans un devis SunGene unique.' },
      ],
      ctaTitle: 'Devis sur votre projet articles maison',
      ctaDesc: "Envoyez une image de référence, quantité cible, canal retail ou wholesale et besoins packaging. Réponse le jour même avec un devis acheteur et délai.",
      ctaBtn: 'Demander un devis',
    },
    es: {
      metaTitle: 'Productos hogar y vida cotidiana — Tazas, cerámica, mantas | SunGene',
      metaDescription: 'Tazas, termos, sets cerámicos, accesorios cocina, mantas y textiles de marca — suministrados desde Taiwán y China a través de nuestros socios manufactureros seleccionados. Inspección AQL pre-exportación. MOQ USD 1.000.',
      kicker: 'PRODUCTOS HOGAR Y VIDA COTIDIANA',
      h1: 'Productos hogar y vida cotidiana',
      intro: 'SunGene suministra productos hogar y vida cotidiana desde Taiwán y China — tazas, termos, sets cerámicos, accesorios cocina, mantas y textiles. Producción coordinada con nuestros socios manufactureros seleccionados, inspección AQL pre-exportación por personal interno de SunGene y documentación de exportación lista.',
      productGroupTitle: 'Grupos de productos hogar y vida cotidiana',
      productGroups: [
        { title: 'Cocina y utensilios', items: ['Ollas, sartenes, woks inox (304 / 316L)', 'Hierro fundido', 'Sartenes antiadherentes (recubrimientos sin PFOA)', 'Moldes (silicona, acero al carbón, gres)', 'Cuchillos y tablas', 'Utensilios (silicona, bambú, inox)'] },
        { title: 'Conservación de alimentos', items: ['Frascos y recipientes de vidrio (borosilicato)', 'Recipientes plásticos (PP sin BPA / Tritan)', 'Recipientes al vacío', 'Loncheras (isotérmicas, bento, inox)', 'Especieros y organizadores'] },
        { title: 'Vajilla y mesa', items: ['Platos y boles de gres / porcelana', 'Cristalería (vasos, servicio, decorativa)', 'Sets de cubiertos (inox, dorados, negros)', 'Manteles individuales y caminos', 'Bandejas de servicio'] },
        { title: 'Decoración y pequeño hogar', items: ['Cestas (rattan, tela, plástico)', 'Cajas apilables', 'Velas y difusores', 'Marcos de fotos y decoración mural', 'Sets accesorios baño', 'Cubiertas pequeño electrodoméstico y delantales'] },
      ],
      termsTitle: 'Términos comerciales — hogar',
      terms: [
        { label: 'Pedido mínimo', value: 'USD 1 000 por envío' },
        { label: 'MOQ típico por SKU', value: '200–2 000 unidades según categoría y decoración' },
        { label: 'Plazo', value: 'Stock: 10–20 días · Impresión/color custom: 30–50 días · Herramental: 60–90 días' },
        { label: 'Muestras', value: 'Stock gratis + flete por cobrar · Custom al costo de producción' },
        { label: 'Pago', value: '30 % anticipo / 70 % antes del envío' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW o CIF disponibles' },
      ],
      qcTitle: 'Control de calidad — hogar',
      qc: [
        'Verificación funcional (sellado, mecanismos de cierre, mangos, bisagras)',
        'Cumplimiento contacto alimentario (FDA / EU 10/2011)',
        'Adherencia y resistencia al rasguño del recubrimiento antiadherente',
        'Inspección visual AQL 2.5 (cosmético) / 1.0 (funcional)',
        'Prueba de caída de cartón y protección de transporte',
        'Informe + ≥30 fotos + video',
      ],
      faqTitle: 'Preguntas frecuentes — hogar',
      faq: [
        { q: '¿Manejan private label de utensilios de cocina?', a: 'Sí. Serigrafía, tampografía, grabado láser, empaque a medida y etiquetas de cartón con código de barras para retail.' },
        { q: '¿Cuál es su postura sobre PFOA / PFAS en antiadherentes?', a: 'Nuestros proveedores antiadherentes están certificados sin PFOA por defecto. Recubrimientos sin PFAS disponibles bajo petición, ampliando el plazo en 2–3 semanas.' },
        { q: '¿Pueden manejar series estacionales / festivas?', a: 'Sí — Navidad, Año Nuevo Lunar, Pascua, etc. Recomendamos confirmar el pedido 4–5 meses antes de la entrega deseada para evitar la temporada alta de fábrica.' },
        { q: '¿Pueden organizar empaque retail-ready (caja a color impresa + código de barras)?', a: 'Sí. Nuestra red de empaque coordina directamente con la fábrica del producto, así que el empaque retail-ready va incluido en una sola cotización SunGene.' },
      ],
      ctaTitle: 'Cotice su proyecto de hogar',
      ctaDesc: 'Envíe imagen de referencia, cantidad objetivo, canal retail o mayorista y necesidades de empaque. Respuesta el mismo día con una cotización para el comprador y plazo.',
      ctaBtn: 'Solicitar cotización',
    },
  },
  garden: {
    en: {
      metaTitle: 'Outdoor & Garden Products — Picnic Blankets, Caps, Cooler Bags | SunGene',
      metaDescription: 'Branded picnic blankets, sunhats and caps, cooler bags, branded umbrellas, outdoor event swag and garden products — supplied from Taiwan and China through selected manufacturing partners. Pre-shipment AQL inspection. MOQ USD 1,000.',
      kicker: 'OUTDOOR & GARDEN PRODUCTS',
      h1: 'Outdoor & Garden Products',
      intro: 'SunGene supplies outdoor and garden products from Taiwan and China — branded picnic blankets, sunhats and caps, cooler bags, branded umbrellas, outdoor event swag for trade shows and corporate retreats. Coordinated production with our selected manufacturing partners across both markets, pre-shipment AQL inspection by in-house SunGene staff, and export-ready documentation.',
      productGroupTitle: 'Outdoor & garden product groups',
      productGroups: [
        { title: 'Garden tools', items: ['Pruning shears (bypass, anvil, ratchet)', 'Loppers and long-reach pruners', 'Hand trowels and cultivators', 'Garden gloves (latex, nitrile, leather)', 'Weeders and hand cultivators', 'Garden knives and harvesting tools'] },
        { title: 'Planters & containers', items: ['Ceramic planters (matte, glazed, hand-painted)', 'Plastic planters (recycled, lightweight, fibreglass-look)', 'Terracotta pots', 'Self-watering planters', 'Hanging baskets', 'Window boxes and railing planters'] },
        { title: 'Watering & irrigation', items: ['Metal watering cans (galvanised, copper-plated, powder-coated)', 'Plastic watering cans', 'Hose nozzles and spray guns', 'Garden hose reels', 'Drip irrigation kits', 'Mist sprayers and pump sprayers'] },
        { title: 'Outdoor accessories', items: ['Patio cushions and outdoor textiles', 'Storage benches and deck boxes', 'Outdoor lanterns and string lights', 'Plant stakes and supports', 'Compost bins', 'Bird feeders and outdoor decor'] },
      ],
      termsTitle: 'Commercial terms — garden & outdoor',
      terms: [
        { label: 'Minimum order', value: 'USD 1,000 per shipment' },
        { label: 'Typical MOQ per SKU', value: '300–2,000 units' },
        { label: 'Lead time', value: 'Stock: 10–20 days · Custom: 30–50 days · Tooling: 60–90 days' },
        { label: 'Sample policy', value: 'Stock free + freight collect · Custom at production cost' },
        { label: 'Payment', value: '30% deposit / 70% before shipment' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW or CIF available' },
      ],
      qcTitle: 'Quality control on garden goods',
      qc: [
        'Functional check on cutting tools (blade hardness, spring tension, locking)',
        'UV resistance and colour fastness check on outdoor textiles and plastics',
        'Drop and freeze test on planters (ceramic crack risk)',
        'Powder-coat adhesion on metal items',
        'Visual inspection against AQL 2.5 (cosmetic) / 1.0 (functional)',
        'Inspection report + ≥30 photos + walkthrough video',
      ],
      faqTitle: 'Common questions on garden sourcing',
      faq: [
        { q: 'Do you handle private-label garden tools with custom packaging?', a: 'Yes. We coordinate hot-stamped handles, laser-engraved blades, printed colour boxes, and hangtags for retail-ready garden tools.' },
        { q: 'Are your ceramic planters frost-resistant?', a: 'Standard ceramic planters tolerate light frost; frost-proof stoneware lines are available for European / North American climates — typically 15–25% premium over standard.' },
        { q: 'Can you do FSC-certified wood for planters and outdoor furniture?', a: 'Yes — FSC chain-of-custody certification available on request. Adds approximately 2 weeks for documentation.' },
        { q: 'Best season to import garden products?', a: 'Order placement Sep–Nov for Northern Hemisphere spring (Mar–May) retail. Factory peak season is Jan–Mar, so lead times stretch then.' },
      ],
      ctaTitle: 'Quote on your garden goods project',
      ctaDesc: 'Send a reference image, target quantity, destination climate zone, and any required certifications. Same-day reply.',
      ctaBtn: 'Request a quote',
    },
    zh: {
      metaTitle: '戶外與園藝產品 — 野餐墊、棒球帽、保冷袋 | SunGene',
      metaDescription: '品牌野餐墊、太陽帽與棒球帽、保冷袋、品牌雨傘、戶外活動贈品與園藝產品 — 從台灣與中國透過精選製造夥伴供應。出口前 AQL 品檢。最低訂單 USD 1,000。',
      kicker: '戶外與園藝產品',
      h1: '戶外與園藝產品',
      intro: 'SunGene 從台灣與中國供應戶外與園藝產品 — 品牌野餐墊、太陽帽與棒球帽、保冷袋、品牌雨傘、戶外活動贈品(展覽、企業活動)。與精選製造夥伴在兩地協調生產,SunGene 自有員工出口前 AQL 品檢,出口文件齊備。',
      productGroupTitle: '戶外與園藝產品群',
      productGroups: [
        { title: '園藝工具', items: ['修剪剪（旁路、平砧、棘輪）', '長柄修枝剪', '手鏟與培土器', '園藝手套（乳膠、丁腈、皮革）', '除草工具與小耙', '園藝刀與採收工具'] },
        { title: '花盆與容器', items: ['陶瓷花盆（霧面、上釉、手繪）', '塑膠花盆（再生、輕量、仿玻纖）', '陶土盆', '自動澆水盆', '吊籃', '窗台箱與欄杆花盆'] },
        { title: '澆灌與灌溉', items: ['金屬灑水壺（鍍鋅、鍍銅、烤漆）', '塑膠灑水壺', '水管噴嘴與噴水槍', '水管收納架', '滴灌套組', '霧化噴霧器與加壓噴霧器'] },
        { title: '戶外配件', items: ['露台坐墊與戶外織品', '收納長凳與露台箱', '戶外燈籠與串燈', '植物支架', '堆肥桶', '鳥食器與戶外裝飾'] },
      ],
      termsTitle: '園藝商業條件',
      terms: [
        { label: '最低訂單', value: 'USD 1,000 每批出貨' },
        { label: '每 SKU 起訂量', value: '300–2,000 件' },
        { label: '交期', value: '現貨：10–20 天 · 客製：30–50 天 · 需開模：60–90 天' },
        { label: '樣品', value: '現貨樣品免費＋運費到付 · 客製依生產成本收費' },
        { label: '付款', value: '30% 訂金 / 70% 出貨前' },
        { label: '貿易條件', value: 'FOB 廈門 / FOB 基隆 · 可接 EXW 或 CIF' },
      ],
      qcTitle: '園藝產品品質管制',
      qc: [
        '剪具功能測試（刀刃硬度、彈簧張力、上鎖機構）',
        '戶外織品與塑膠抗 UV 與色牢度測試',
        '花盆抗摔與抗凍測試（陶瓷裂損風險）',
        '金屬件烤漆附著力測試',
        '依 AQL 2.5（外觀）/ 1.0（功能）抽檢',
        '驗貨報告 ＋ ≥30 張照片 ＋ 走線影片',
      ],
      faqTitle: '園藝採購常見問題',
      faq: [
        { q: '可以做園藝工具的私品牌與客製包裝嗎？', a: '可以。我們協調燙金把手、雷雕刀刃、客製彩盒與吊牌，做出零售即上架的成品。' },
        { q: '陶瓷花盆是否抗凍？', a: '標準陶瓷可耐輕度結凍；針對歐洲／北美氣候有抗凍石陶系列，價格通常較標準款高 15–25%。' },
        { q: '木製花盆與戶外家具可以做 FSC 認證嗎？', a: '可以——FSC 監管鏈認證可依需求安排，需多約 2 週備齊文件。' },
        { q: '進口園藝產品的最佳節奏？', a: '為北半球春季（3–5 月）零售下單，建議在 9–11 月確認訂單。工廠旺季為 1–3 月，期間交期會延長。' },
      ],
      ctaTitle: '為你的園藝專案報價',
      ctaDesc: '提供參考圖、目標數量、目的地氣候帶、所需認證。當日回覆。',
      ctaBtn: '索取報價',
    },
    cn: {
      metaTitle: '户外与园艺产品 — 野餐垫、棒球帽、保冷袋 | SunGene',
      metaDescription: '品牌野餐垫、太阳帽与棒球帽、保冷袋、品牌雨伞、户外活动赠品与园艺产品 — 从台湾与中国通过精选制造伙伴供应。出口前 AQL 品检。最低订单 USD 1,000。',
      kicker: '户外与园艺产品',
      h1: '户外与园艺产品',
      intro: 'SunGene 从台湾与中国供应户外与园艺产品 — 品牌野餐垫、太阳帽与棒球帽、保冷袋、品牌雨伞、户外活动赠品(展览、企业活动)。与精选制造伙伴在两地协调生产,SunGene 自有员工出口前 AQL 品检,出口文件齐备。',
      productGroupTitle: '户外与园艺产品群',
      productGroups: [
        { title: '园艺工具', items: ['修剪剪（旁路、平砧、棘轮）', '长柄修枝剪', '手铲与培土器', '园艺手套（乳胶、丁腈、皮革）', '除草工具与小耙', '园艺刀与采收工具'] },
        { title: '花盆与容器', items: ['陶瓷花盆（雾面、上釉、手绘）', '塑料花盆（再生、轻量、仿玻纤）', '陶土盆', '自动浇水盆', '吊篮', '窗台箱与栏杆花盆'] },
        { title: '浇灌与灌溉', items: ['金属洒水壶（镀锌、镀铜、烤漆）', '塑料洒水壶', '水管喷嘴与喷水枪', '水管收纳架', '滴灌套组', '雾化喷雾器与加压喷雾器'] },
        { title: '户外配件', items: ['露台坐垫与户外织品', '收纳长凳与露台箱', '户外灯笼与串灯', '植物支架', '堆肥桶', '鸟食器与户外装饰'] },
      ],
      termsTitle: '园艺商业条件',
      terms: [
        { label: '最低订单', value: 'USD 1,000 每批出货' },
        { label: '每 SKU 起订量', value: '300–2,000 件' },
        { label: '交期', value: '现货：10–20 天 · 定制：30–50 天 · 需开模：60–90 天' },
        { label: '样品', value: '现货样品免费＋运费到付 · 定制依生产成本收费' },
        { label: '付款', value: '30% 订金 / 70% 出货前' },
        { label: '贸易条件', value: 'FOB 厦门 / FOB 基隆 · 可接 EXW 或 CIF' },
      ],
      qcTitle: '园艺产品质量管制',
      qc: [
        '剪具功能测试（刀刃硬度、弹簧张力、上锁机构）',
        '户外织品与塑料抗 UV 与色牢度测试',
        '花盆抗摔与抗冻测试（陶瓷裂损风险）',
        '金属件烤漆附着力测试',
        '依 AQL 2.5（外观）/ 1.0（功能）抽检',
        '验货报告 ＋ ≥30 张照片 ＋ 走线视频',
      ],
      faqTitle: '园艺采购常见问题',
      faq: [
        { q: '可以做园艺工具的私品牌与定制包装吗？', a: '可以。我们协调烫金把手、激光雕刻刀刃、定制彩盒与吊牌，做出零售即上架的成品。' },
        { q: '陶瓷花盆是否抗冻？', a: '标准陶瓷可耐轻度结冻；针对欧洲／北美气候有抗冻石陶系列，价格通常较标准款高 15–25%。' },
        { q: '木制花盆与户外家具可以做 FSC 认证吗？', a: '可以——FSC 监管链认证可按需求安排，需多约 2 周备齐文件。' },
        { q: '进口园艺产品的最佳节奏？', a: '为北半球春季（3–5 月）零售下单，建议在 9–11 月确认订单。工厂旺季为 1–3 月，期间交期会延长。' },
      ],
      ctaTitle: '为您的园艺项目报价',
      ctaDesc: '提供参考图、目标数量、目的地气候带、所需认证。当日回覆。',
      ctaBtn: '索取报价',
    },
    fr: {
      metaTitle: "Produits extérieur & jardin — Plaids de pique-nique, casquettes, sacs isothermes | SunGene",
      metaDescription: "Plaids de pique-nique personnalisés, casquettes et chapeaux, sacs isothermes, parapluies de marque, articles événementiels et produits jardin — fournis depuis Taïwan et la Chine via nos partenaires manufacturiers sélectionnés. Contrôle AQL pré-expédition. MOQ 1 000 USD.",
      kicker: "PRODUITS EXTÉRIEUR & JARDIN",
      h1: "Produits extérieur & jardin",
      intro: "SunGene fournit des produits extérieur et jardin depuis Taïwan et la Chine — plaids de pique-nique de marque, casquettes et chapeaux, sacs isothermes, parapluies de marque, articles événementiels pour salons et événements d'entreprise. Production coordonnée avec nos partenaires manufacturiers sélectionnés, contrôle AQL pré-expédition par le personnel SunGene en interne et documentation export prête.",
      productGroupTitle: "Groupes de produits extérieur & jardin",
      productGroups: [
        { title: 'Outils de jardin', items: ['Sécateurs (bypass, enclume, à crémaillère)', 'Élagueurs et coupe-branches longs', 'Truelles et cultivateurs main', 'Gants jardin (latex, nitrile, cuir)', 'Désherbeurs et binettes', 'Couteaux de jardin et outils de récolte'] },
        { title: 'Jardinières et contenants', items: ['Jardinières céramique (mat, vernissé, peint main)', 'Jardinières plastique (recyclé, léger, effet fibreglass)', 'Pots en terre cuite', 'Jardinières à réserve d\'eau', 'Suspensions', 'Bacs fenêtre et balcon'] },
        { title: 'Arrosage et irrigation', items: ['Arrosoirs métal (galvanisés, cuivrés, époxy)', 'Arrosoirs plastique', 'Pistolets et embouts tuyau', 'Enrouleurs', 'Kits irrigation goutte-à-goutte', 'Pulvérisateurs brume et à pompe'] },
        { title: 'Accessoires extérieur', items: ['Coussins patio et textiles extérieurs', 'Bancs et coffres', 'Lanternes et guirlandes lumineuses', 'Tuteurs et supports plantes', 'Composteurs', 'Mangeoires et déco extérieure'] },
      ],
      termsTitle: 'Conditions commerciales — jardin',
      terms: [
        { label: 'Commande minimum', value: 'USD 1 000 par expédition' },
        { label: 'MOQ typique par SKU', value: '300–2 000 unités' },
        { label: 'Délai', value: 'Stock : 10–20 j · Custom : 30–50 j · Outillage : 60–90 j' },
        { label: 'Échantillons', value: 'Stock gratuits + port dû · Custom au coût de production' },
        { label: 'Paiement', value: '30 % acompte / 70 % avant expédition' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW ou CIF disponibles' },
      ],
      qcTitle: 'Contrôle qualité — jardin',
      qc: [
        "Contrôle fonctionnel sur outils tranchants (dureté lame, tension ressort, verrouillage)",
        'Tests résistance UV et solidité couleur sur textiles et plastiques extérieurs',
        'Test chute et gel sur jardinières (risque fissure céramique)',
        'Adhérence époxy sur articles métalliques',
        'Inspection visuelle AQL 2,5 (cosmétique) / 1,0 (fonctionnel)',
        'Rapport + ≥30 photos + vidéo',
      ],
      faqTitle: 'Questions fréquentes — jardin',
      faq: [
        { q: 'Gérez-vous outils jardin marque blanche avec packaging custom ?', a: 'Oui. Poignées marquées à chaud, lames gravées laser, boîtes couleur imprimées et hangtags pour outils jardin retail-ready.' },
        { q: 'Vos jardinières céramique résistent-elles au gel ?', a: 'Céramique standard tolère léger gel ; gammes grès anti-gel disponibles pour climats européen / nord-américain — généralement 15–25 % au-dessus du standard.' },
        { q: 'Bois certifié FSC pour jardinières et mobilier extérieur ?', a: 'Oui — certification chaîne de contrôle FSC sur demande. Ajoute environ 2 semaines pour la documentation.' },
        { q: 'Meilleure saison pour importer du jardin ?', a: 'Commande Sep–Nov pour retail printemps Hémisphère Nord (mars–mai). Haute saison usine Jan–Mar, délais étirés alors.' },
      ],
      ctaTitle: 'Devis sur votre projet jardin',
      ctaDesc: "Envoyez image de référence, quantité, zone climatique de destination et certifications requises. Réponse jour même.",
      ctaBtn: 'Demander un devis',
    },
    es: {
      metaTitle: 'Productos exterior y jardín — Mantas de picnic, gorras, bolsas térmicas | SunGene',
      metaDescription: 'Mantas de picnic de marca, gorras y sombreros, bolsas térmicas, paraguas de marca, artículos para eventos y productos de jardín — suministrados desde Taiwán y China a través de nuestros socios manufactureros seleccionados. Inspección AQL pre-exportación. MOQ USD 1.000.',
      kicker: 'PRODUCTOS EXTERIOR Y JARDÍN',
      h1: 'Productos exterior y jardín',
      intro: 'SunGene suministra productos exterior y jardín desde Taiwán y China — mantas de picnic de marca, gorras y sombreros, bolsas térmicas, paraguas de marca, artículos para eventos corporativos y ferias. Producción coordinada con nuestros socios manufactureros seleccionados, inspección AQL pre-exportación por personal interno de SunGene y documentación de exportación lista.',
      productGroupTitle: 'Grupos de productos exterior y jardín',
      productGroups: [
        { title: 'Herramientas de jardín', items: ['Tijeras de podar (bypass, yunque, trinquete)', 'Podadoras y telescópicas', 'Paletas y cultivadores de mano', 'Guantes (látex, nitrilo, cuero)', 'Desherbadores y rastrillos pequeños', 'Cuchillos de jardín y cosecha'] },
        { title: 'Macetas y contenedores', items: ['Macetas cerámica (mate, vidriada, pintada a mano)', 'Macetas plásticas (reciclado, ligero, símil fibra)', 'Macetas de terracota', 'Macetas con autorriego', 'Cestas colgantes', 'Jardineras de balcón y barandilla'] },
        { title: 'Riego e irrigación', items: ['Regaderas metal (galvanizadas, cobreadas, pintura electrostática)', 'Regaderas plásticas', 'Boquillas y pistolas para manguera', 'Enrolladores', 'Kits de riego por goteo', 'Pulverizadores de niebla y a presión'] },
        { title: 'Accesorios de exterior', items: ['Cojines de patio y textiles de exterior', 'Bancos con almacenamiento', 'Faroles y guirnaldas de luz', 'Tutores y soportes para plantas', 'Compostadores', 'Comederos y decoración exterior'] },
      ],
      termsTitle: 'Términos comerciales — jardín',
      terms: [
        { label: 'Pedido mínimo', value: 'USD 1 000 por envío' },
        { label: 'MOQ típico por SKU', value: '300–2 000 unidades' },
        { label: 'Plazo', value: 'Stock: 10–20 días · Custom: 30–50 días · Herramental: 60–90 días' },
        { label: 'Muestras', value: 'Stock gratis + flete por cobrar · Custom al costo de producción' },
        { label: 'Pago', value: '30% anticipo / 70% antes del envío' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW o CIF disponibles' },
      ],
      qcTitle: 'Control de calidad — jardín',
      qc: [
        'Verificación funcional en herramientas de corte (dureza de hoja, tensión de resorte, bloqueo)',
        'Resistencia UV y solidez de color en textiles y plásticos de exterior',
        'Prueba de caída y congelación en macetas (riesgo de fractura cerámica)',
        'Adherencia de pintura electrostática en piezas metálicas',
        'Inspección visual AQL 2.5 (cosmético) / 1.0 (funcional)',
        'Informe + ≥30 fotos + video',
      ],
      faqTitle: 'Preguntas frecuentes — jardín',
      faq: [
        { q: '¿Manejan herramientas de jardín en private label con empaque a medida?', a: 'Sí. Mangos con hot stamp, hojas grabadas con láser, cajas a color impresas y etiquetas colgantes para herramientas retail-ready.' },
        { q: '¿Sus macetas cerámicas resisten heladas?', a: 'La cerámica estándar tolera heladas leves; líneas de gres anti-heladas disponibles para climas europeo / norteamericano — típicamente 15–25% sobre el estándar.' },
        { q: '¿Pueden hacer madera certificada FSC para macetas y mobiliario de exterior?', a: 'Sí — certificación de cadena de custodia FSC bajo petición. Añade aproximadamente 2 semanas para documentación.' },
        { q: '¿Mejor temporada para importar productos de jardín?', a: 'Pedido Sep–Nov para retail de primavera (Mar–May) en Hemisferio Norte. Temporada alta de fábrica Ene–Mar, plazos extendidos entonces.' },
      ],
      ctaTitle: 'Cotice su proyecto de jardín',
      ctaDesc: 'Envíe imagen de referencia, cantidad objetivo, zona climática de destino y certificaciones requeridas. Respuesta el mismo día.',
      ctaBtn: 'Solicitar cotización',
    },
  },
  beauty: {
    en: {
      metaTitle: 'Beauty & Personal Care Products — Available Category | SunGene',
      metaDescription: 'Beauty and personal care gift sets, fragrance gift boxes, wellness kits, refillable beauty packaging — secondary product category, available on request. SunGene primarily supplies custom packaging, home & living, and outdoor products from Taiwan and China.',
      kicker: 'BEAUTY & PERSONAL CARE',
      h1: 'Beauty & Personal Care Products',
      intro: 'Beauty and personal care products are an additional category available on request. SunGene primarily supplies custom packaging, home & living, and outdoor products from Taiwan and China. Beauty items — gift sets, fragrance gift boxes, wellness kits, refillable beauty packaging — can be coordinated case-by-case alongside our core product supply when relevant to your corporate gifting program.',
      productGroupTitle: 'Beauty product groups (available on request)',
      productGroups: [
        { title: 'Jars and containers', items: ['Glass cosmetic jars (clear, frosted, amber, blue)', 'PETG jars (lightweight, shatterproof)', 'Acrylic jars (luxury feel)', 'Aluminium jars and tins (lip balm, ointment)', 'Refillable inner-cup jars', 'Double-wall PP jars'] },
        { title: 'Bottles', items: ['Glass dropper bottles (cosmetic-grade, with rubber bulb or graduated pipette)', 'Plastic bottles (HDPE, PET, PP)', 'Round, square, oval shapes', 'Eye-drop and serum bottles', 'Travel-size bottles', 'Foundation and treatment bottles'] },
        { title: 'Pumps & dispensers', items: ['Airless pumps (15–200 ml capacity)', 'Lotion / treatment pumps', 'Fine-mist sprayers', 'Foam pumps', 'Cream pumps with treatment tube', 'Eyedropper closures'] },
        { title: 'Tubes & sample vials', items: ['Plastic squeeze tubes (single, double-layer)', 'Aluminium tubes (collapsible, for ointments)', 'Lip-balm and gloss tubes', 'Sample vials (1–5 ml glass or plastic)', 'Sachets for samples', 'Roll-on bottles'] },
      ],
      termsTitle: 'Commercial terms — beauty packaging',
      terms: [
        { label: 'Minimum order', value: 'USD 1,000 per shipment' },
        { label: 'Typical MOQ per SKU', value: '1,000–10,000 units (lower for stock items)' },
        { label: 'Lead time', value: 'Stock: 7–15 days · Custom decoration: 25–40 days · Custom mould: 50–90 days' },
        { label: 'Sample policy', value: 'Stock samples free + freight collect · Decorated samples charged at production cost' },
        { label: 'Payment', value: '30% deposit / 70% before shipment' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW or CIF available' },
      ],
      qcTitle: 'Quality control on beauty packaging',
      qc: [
        'Dimensional accuracy against approved drawings (AQL 1.0 critical / 2.5 cosmetic)',
        'Print colour vs Pantone reference under D65 light',
        'Pump dispense accuracy (cycle test, dose volume)',
        'Glass clarity and inclusion check',
        'Material migration test against fill product (compatibility)',
        'Final inspection report + ≥30 photos + walkthrough video',
      ],
      faqTitle: 'Common questions on beauty packaging',
      faq: [
        { q: 'Can you source airless pumps compatible with our fill product?', a: 'Yes. We coordinate fill-line compatibility checks (viscosity, oil content, preservatives) before bulk PO. Many brands run preliminary compatibility testing during sample stage to avoid issues at scale.' },
        { q: 'What is the minimum for custom-coloured cosmetic glass?', a: 'Custom colour glass typically starts at MOQ 5,000–10,000 pieces depending on the colour and mould. Stock colours (clear, frosted, amber, blue) have lower MOQs.' },
        { q: 'Do you handle PCR (post-consumer recycled) and refillable packaging?', a: 'Yes. PCR PET and PCR PP available; refillable airless and refillable jars increasingly available as standard. We disclose PCR percentage and certifications upfront.' },
        { q: 'Can decoration be done on imported empty packaging?', a: 'Yes, but our default is to coordinate with the packaging factory directly for in-line decoration — faster, lower cost, more consistent than third-party decoration.' },
      ],
      ctaTitle: 'Quote on your beauty packaging project',
      ctaDesc: 'Beauty is a secondary category — request availability with your reference image, target quantity, and product info. Same-day reply.',
      ctaBtn: 'Request a quote',
    },
    zh: {
      metaTitle: '美妝與個人護理產品 — 可承接類別 | SunGene',
      metaDescription: '美妝與個人護理禮盒、香氛禮盒、養生禮品組、可填充美容包裝 — 次要產品類別,可依案件承接。SunGene 主要供應台灣與中國的客製包裝、居家生活與戶外產品。',
      kicker: '美妝與個人護理',
      h1: '美妝與個人護理產品',
      intro: '美妝與個人護理產品是可依案件承接的次要類別。SunGene 主要供應台灣與中國的客製包裝、居家生活產品、戶外產品。美妝相關品項——禮盒、香氛禮盒、養生禮品組、可填充美容包裝——若與您的企業禮贈品專案相關,可在主要產品線之外個案協調。',
      productGroupTitle: '美妝產品群(可依案件承接)',
      productGroups: [
        { title: '罐與容器', items: ['化妝品玻璃罐（透明、霧面、琥珀、藍色）', 'PETG 罐（輕量、抗摔）', '亞克力罐（高級感）', '鋁罐與小盒（潤唇膏、藥膏）', '可換內杯式罐', '雙層 PP 罐'] },
        { title: '瓶子', items: ['化妝品級玻璃滴管瓶（橡膠頭或刻度吸管）', '塑膠瓶（HDPE、PET、PP）', '圓、方、橢圓形', '眼藥水與精華瓶', '旅行小瓶', '粉底與保養瓶'] },
        { title: '泵頭與分配器', items: ['真空泵（15–200 ml）', '乳液／處方泵', '細霧噴頭', '泡沫泵', '帶處方管的乳霜泵', '滴管式封口'] },
        { title: '管子與試用小瓶', items: ['塑膠軟管（單層、雙層）', '鋁管（可摺式，用於藥膏）', '潤唇膏與唇蜜管', '試用小瓶（1–5 ml 玻璃或塑膠）', '試用小袋', '滾珠瓶'] },
      ],
      termsTitle: '美容包裝商業條件',
      terms: [
        { label: '最低訂單', value: 'USD 1,000 每批出貨' },
        { label: '每 SKU 起訂量', value: '1,000–10,000 件（現貨品較低）' },
        { label: '交期', value: '現貨：7–15 天 · 客製加工：25–40 天 · 客製開模：50–90 天' },
        { label: '樣品政策', value: '現貨樣品免費＋運費到付 · 加工過樣品依生產成本收費' },
        { label: '付款條件', value: '30% 訂金 / 70% 出貨前' },
        { label: '貿易條件', value: 'FOB 廈門 / FOB 基隆 · 可接 EXW 或 CIF' },
      ],
      qcTitle: '美容包裝品質管制',
      qc: [
        '依核准圖面尺寸抽檢（AQL 1.0 關鍵 / 2.5 外觀）',
        '印刷顏色在 D65 光源下對照 Pantone',
        '泵頭出料準確度（壓力循環測試、單次出量）',
        '玻璃清澈度與內含物檢查',
        '材質與灌裝產品相容性測試',
        '最終驗貨報告 ＋ ≥30 張照片 ＋ 走線影片',
      ],
      faqTitle: '美容包裝常見問題',
      faq: [
        { q: '真空泵可以做與我們灌裝產品相容性檢查嗎？', a: '可以。我們在量產前協調填充線相容性測試（黏度、油性、防腐劑）。多數品牌在打樣階段就先做相容性測試，避免量產時才發現問題。' },
        { q: '客製顏色化妝品玻璃的最低 MOQ？', a: '客製顏色玻璃通常 5,000–10,000 件起，依顏色與模具而定。現貨色（透明、霧面、琥珀、藍）MOQ 較低。' },
        { q: '可以做 PCR（消費後回收）與可重填包裝嗎？', a: '可以。PCR PET 與 PCR PP 可選；可重填真空泵與可重填罐越來越普及為標準品。PCR 百分比與認證會事先揭露。' },
        { q: '可以對進口的空包裝再做加工嗎？', a: '可以，但我們預設是與包裝工廠直接協調線上加工——比第三方加工更快、成本更低、一致性更好。' },
      ],
      ctaTitle: '為你的美容包裝專案報價',
      ctaDesc: '美妝為次要類別 — 提供參考圖、目標數量、產品資訊以詢問可承接性。當日回覆。',
      ctaBtn: '索取報價',
    },
    cn: {
      metaTitle: '美妆与个人护理产品 — 可承接类别 | SunGene',
      metaDescription: '美妆与个人护理礼盒、香氛礼盒、养生礼品组、可填充美容包装 — 次要产品类别,可依案件承接。SunGene 主要供应台湾与中国的定制包装、居家生活与户外产品。',
      kicker: '美妆与个人护理',
      h1: '美妆与个人护理产品',
      intro: '美妆与个人护理产品是可依案件承接的次要类别。SunGene 主要供应台湾与中国的定制包装、居家生活产品、户外产品。美妆相关品项——礼盒、香氛礼盒、养生礼品组、可填充美容包装——若与您的企业礼赠品专案相关,可在主要产品线之外个案协调。',
      productGroupTitle: '美妆产品群(可依案件承接)',
      productGroups: [
        { title: '罐与容器', items: ['化妆品玻璃罐（透明、雾面、琥珀、蓝色）', 'PETG 罐（轻量、抗摔）', '亚克力罐（高级感）', '铝罐与小盒（润唇膏、药膏）', '可换内杯式罐', '双层 PP 罐'] },
        { title: '瓶子', items: ['化妆品级玻璃滴管瓶（橡胶头或刻度吸管）', '塑料瓶（HDPE、PET、PP）', '圆、方、椭圆形', '眼药水与精华瓶', '旅行小瓶', '粉底与保养瓶'] },
        { title: '泵头与分配器', items: ['真空泵（15–200 ml）', '乳液／处方泵', '细雾喷头', '泡沫泵', '带处方管的乳霜泵', '滴管式封口'] },
        { title: '管子与试用小瓶', items: ['塑料软管（单层、双层）', '铝管（可折式，用于药膏）', '润唇膏与唇蜜管', '试用小瓶（1–5 ml 玻璃或塑料）', '试用小袋', '滚珠瓶'] },
      ],
      termsTitle: '美容包装商业条件',
      terms: [
        { label: '最低订单', value: 'USD 1,000 每批出货' },
        { label: '每 SKU 起订量', value: '1,000–10,000 件（现货品较低）' },
        { label: '交期', value: '现货：7–15 天 · 定制加工：25–40 天 · 定制开模：50–90 天' },
        { label: '样品政策', value: '现货样品免费＋运费到付 · 加工过样品依生产成本收费' },
        { label: '付款条件', value: '30% 订金 / 70% 出货前' },
        { label: '贸易条件', value: 'FOB 厦门 / FOB 基隆 · 可接 EXW 或 CIF' },
      ],
      qcTitle: '美容包装质量管制',
      qc: [
        '依核准图面尺寸抽检（AQL 1.0 关键 / 2.5 外观）',
        '印刷颜色在 D65 光源下对照 Pantone',
        '泵头出料准确度（压力循环测试、单次出量）',
        '玻璃清澈度与内含物检查',
        '材质与灌装产品兼容性测试',
        '最终验货报告 ＋ ≥30 张照片 ＋ 走线视频',
      ],
      faqTitle: '美容包装常见问题',
      faq: [
        { q: '真空泵可以做与我们灌装产品兼容性检查吗？', a: '可以。我们在量产前协调填充线兼容性测试（粘度、油性、防腐剂）。多数品牌在打样阶段就先做兼容性测试，避免量产时才发现问题。' },
        { q: '定制颜色化妆品玻璃的最低 MOQ？', a: '定制颜色玻璃通常 5,000–10,000 件起，依颜色与模具而定。现货色（透明、雾面、琥珀、蓝）MOQ 较低。' },
        { q: '可以做 PCR（消费后回收）与可重填包装吗？', a: '可以。PCR PET 与 PCR PP 可选；可重填真空泵与可重填罐越来越普及为标准品。PCR 百分比与认证会事先揭露。' },
        { q: '可以对进口的空包装再做加工吗？', a: '可以，但我们预设是与包装工厂直接协调线上加工——比第三方加工更快、成本更低、一致性更好。' },
      ],
      ctaTitle: '为您的美容包装项目报价',
      ctaDesc: '美妆为次要类别 — 提供参考图、目标数量、产品资讯以询问可承接性。当日回覆。',
      ctaBtn: '索取报价',
    },
    fr: {
      metaTitle: "Produits beauté & soins personnels — Catégorie disponible | SunGene",
      metaDescription: "Sets cadeaux beauté et soins personnels, coffrets parfums, kits bien-être, flaconnage beauté rechargeable — catégorie de produits secondaire, disponible sur demande. SunGene fournit principalement emballage personnalisé, maison & vie quotidienne et produits extérieur depuis Taïwan et la Chine.",
      kicker: "BEAUTÉ & SOINS PERSONNELS",
      h1: "Produits beauté & soins personnels",
      intro: "Les produits beauté et soins personnels sont une catégorie additionnelle disponible sur demande. SunGene fournit principalement emballage personnalisé, produits maison & vie quotidienne et produits extérieur depuis Taïwan et la Chine. Les articles beauté — sets cadeaux, coffrets parfums, kits bien-être, flaconnage rechargeable — peuvent être coordonnés au cas par cas en complément de notre offre principale lorsqu'ils sont pertinents pour votre programme de cadeaux corporate.",
      productGroupTitle: "Groupes de produits beauté (disponibles sur demande)",
      productGroups: [
        { title: 'Pots et contenants', items: ['Pots cosmétiques verre (transparent, givré, ambré, bleu)', 'Pots PETG (léger, incassable)', 'Pots acrylique (effet luxe)', 'Pots aluminium et boîtes (baume, pommade)', "Pots à godet intérieur amovible", 'Pots PP double paroi'] },
        { title: 'Flacons', items: ['Flacons verre compte-gouttes (qualité cosmétique, bouchon caoutchouc ou pipette graduée)', 'Flacons plastique (HDPE, PET, PP)', 'Formes ronde, carrée, ovale', 'Flacons collyres et sérums', 'Flacons format voyage', 'Flacons fond de teint et soin'] },
        { title: 'Pompes & distributeurs', items: ['Pompes airless (15–200 ml)', 'Pompes lotion / soin', 'Sprays fine brume', 'Pompes mousse', 'Pompes crème avec tube de traitement', 'Bouchons compte-gouttes'] },
        { title: 'Tubes et échantillons', items: ['Tubes souples plastique (mono, double couche)', 'Tubes aluminium (rétractables, pour pommades)', 'Étuis rouge à lèvres et gloss', 'Échantillons (1–5 ml verre ou plastique)', "Sachets d'échantillons", 'Flacons roll-on'] },
      ],
      termsTitle: 'Conditions commerciales — flaconnage beauté',
      terms: [
        { label: 'Commande minimum', value: 'USD 1 000 par expédition' },
        { label: 'MOQ typique par SKU', value: '1 000–10 000 unités (inférieur pour stock)' },
        { label: 'Délai', value: 'Stock : 7–15 j · Décoration custom : 25–40 j · Moule custom : 50–90 j' },
        { label: 'Échantillons', value: 'Stock gratuits + port dû · Décorés au coût de production' },
        { label: 'Paiement', value: '30 % acompte / 70 % avant expédition' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW ou CIF disponibles' },
      ],
      qcTitle: 'Contrôle qualité — flaconnage beauté',
      qc: [
        'Précision dimensionnelle vs plans approuvés (AQL 1,0 critique / 2,5 cosmétique)',
        'Couleur impression vs Pantone sous lumière D65',
        'Précision de dose pompe (test de cycle, volume par actionnement)',
        'Clarté verre et inclusions',
        'Test compatibilité matière vs produit de remplissage',
        'Rapport final + ≥30 photos + vidéo',
      ],
      faqTitle: 'Questions fréquentes — flaconnage beauté',
      faq: [
        { q: 'Pouvez-vous sourcer des pompes airless compatibles avec notre produit ?', a: 'Oui. Nous coordonnons des tests de compatibilité ligne de remplissage (viscosité, teneur en huile, conservateurs) avant la PO globale. Beaucoup de marques font ces tests en phase échantillon pour éviter les problèmes à grande échelle.' },
        { q: 'MOQ minimum pour verre cosmétique couleur custom ?', a: 'Verre couleur custom démarre généralement à 5 000–10 000 pièces selon la couleur et le moule. Couleurs stock (transparent, givré, ambré, bleu) ont des MOQ plus bas.' },
        { q: 'Gérez-vous PCR (post-consumer recycled) et flaconnage rechargeable ?', a: 'Oui. PCR PET et PCR PP disponibles ; pompes airless et pots rechargeables de plus en plus disponibles en standard. Pourcentage PCR et certifications annoncés en amont.' },
        { q: 'La décoration peut-elle être faite sur du flaconnage importé vide ?', a: "Oui, mais notre par défaut est de coordonner directement avec l'usine flaconnage pour décoration en ligne — plus rapide, moins coûteux, plus régulier que la décoration tiers." },
      ],
      ctaTitle: 'Devis sur votre projet flaconnage',
      ctaDesc: "Beauté est une catégorie secondaire — demandez la disponibilité avec votre image de référence, quantité cible et info produit. Réponse jour même.",
      ctaBtn: 'Demander un devis',
    },
    es: {
      metaTitle: 'Productos belleza y cuidado personal — Categoría disponible | SunGene',
      metaDescription: 'Sets de regalo belleza y cuidado personal, cajas de fragancias, kits de bienestar, envase belleza recargable — categoría de productos secundaria, disponible bajo solicitud. SunGene suministra principalmente embalaje personalizado, hogar y vida cotidiana y productos exterior desde Taiwán y China.',
      kicker: 'BELLEZA Y CUIDADO PERSONAL',
      h1: 'Productos belleza y cuidado personal',
      intro: 'Los productos belleza y cuidado personal son una categoría adicional disponible bajo solicitud. SunGene suministra principalmente embalaje personalizado, productos hogar y vida cotidiana y productos exterior desde Taiwán y China. Los artículos belleza — sets de regalo, cajas de fragancias, kits de bienestar, envase recargable — pueden coordinarse caso por caso como complemento de nuestra oferta principal cuando sean relevantes para su programa de regalos corporativos.',
      productGroupTitle: 'Grupos de productos belleza (disponibles bajo solicitud)',
      productGroups: [
        { title: 'Tarros y contenedores', items: ['Tarros cosméticos de vidrio (transparente, esmerilado, ámbar, azul)', 'Tarros PETG (ligero, irrompible)', 'Tarros acrílico (efecto lujo)', 'Tarros aluminio y latas (bálsamo labial, ungüento)', 'Tarros con vaso interior recargable', 'Tarros PP doble pared'] },
        { title: 'Frascos', items: ['Frascos cuentagotas de vidrio (calidad cosmética, con bulbo de goma o pipeta graduada)', 'Frascos plásticos (HDPE, PET, PP)', 'Formas redonda, cuadrada, oval', 'Frascos para colirio y sérum', 'Frascos tamaño viaje', 'Frascos base de maquillaje y tratamiento'] },
        { title: 'Bombas y dispensadores', items: ['Bombas airless (15–200 ml)', 'Bombas para loción / tratamiento', 'Atomizadores de fina niebla', 'Bombas de espuma', 'Bombas de crema con tubo de tratamiento', 'Cierres con cuentagotas'] },
        { title: 'Tubos y viales de muestra', items: ['Tubos plásticos blandos (mono, doble capa)', 'Tubos de aluminio (colapsables, para ungüentos)', 'Tubos de labial y gloss', 'Viales de muestra (1–5 ml vidrio o plástico)', 'Sobres para muestras', 'Frascos roll-on'] },
      ],
      termsTitle: 'Términos comerciales — envase cosmético',
      terms: [
        { label: 'Pedido mínimo', value: 'USD 1 000 por envío' },
        { label: 'MOQ típico por SKU', value: '1 000–10 000 unidades (menor para stock)' },
        { label: 'Plazo', value: 'Stock: 7–15 días · Decoración custom: 25–40 días · Molde custom: 50–90 días' },
        { label: 'Muestras', value: 'Stock gratis + flete por cobrar · Decoradas al costo de producción' },
        { label: 'Pago', value: '30% anticipo / 70% antes del envío' },
        { label: 'Incoterms', value: 'FOB Xiamen / FOB Keelung · EXW o CIF disponibles' },
      ],
      qcTitle: 'Control de calidad — envase cosmético',
      qc: [
        'Precisión dimensional contra planos aprobados (AQL 1.0 crítico / 2.5 cosmético)',
        'Color de impresión vs Pantone bajo luz D65',
        'Precisión de dosificación de bomba (prueba de ciclo, volumen por accionamiento)',
        'Claridad de vidrio e inclusiones',
        'Prueba de compatibilidad del material con el producto de llenado',
        'Informe final + ≥30 fotos + video',
      ],
      faqTitle: 'Preguntas frecuentes — envase cosmético',
      faq: [
        { q: '¿Pueden abastecer bombas airless compatibles con nuestro producto?', a: 'Sí. Coordinamos pruebas de compatibilidad con línea de llenado (viscosidad, contenido de aceite, conservantes) antes de la OC global. Muchas marcas realizan pruebas preliminares en fase de muestra para evitar problemas a escala.' },
        { q: '¿MOQ mínimo para vidrio cosmético de color a medida?', a: 'El vidrio de color a medida típicamente parte de 5 000–10 000 piezas según color y molde. Colores de stock (transparente, esmerilado, ámbar, azul) tienen MOQ más bajos.' },
        { q: '¿Manejan PCR (post-consumer recycled) y envases recargables?', a: 'Sí. PCR PET y PCR PP disponibles; bombas airless recargables y tarros recargables cada vez más disponibles como estándar. Porcentaje de PCR y certificaciones divulgados desde el inicio.' },
        { q: '¿La decoración se puede hacer en envases vacíos importados?', a: 'Sí, pero por defecto coordinamos directamente con la fábrica del envase para decoración en línea — más rápido, menor costo, más consistente que la decoración por terceros.' },
      ],
      ctaTitle: 'Cotice su proyecto de envase cosmético',
      ctaDesc: 'Belleza es una categoría secundaria — solicite disponibilidad con su imagen de referencia, cantidad objetivo e info del producto. Respuesta el mismo día.',
      ctaBtn: 'Solicitar cotización',
    },
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; category: string }> }): Promise<Metadata> {
  const { lang, category } = await params
  const l = normalizeLang(lang)
  const cat = category as Category
  if (!CATEGORIES.includes(cat)) {
    return { title: 'Not found', robots: { index: false, follow: false } }
  }
  const c = CONTENT[cat][l] ?? CONTENT[cat].en!
  return buildPageMetadata({
    lang: l,
    title: c.metaTitle,
    description: c.metaDescription,
    pathname: `/sourcing/${cat}`,
    type: 'website',
  })
}

export default async function SourcingCategoryPage({ params }: { params: Promise<{ lang: Lang; category: string }> }) {
  const { lang, category } = await params
  const l = normalizeLang(lang) as Lang
  const cat = category as Category
  if (!CATEGORIES.includes(cat)) notFound()
  const c = CONTENT[cat][l] ?? CONTENT[cat].en!

  const breadcrumbItems = [
    { label: ({ en: 'How we work', zh: '合作方式', cn: '合作方式', fr: 'Notre méthode', es: 'Cómo trabajamos' } as Record<string, string>)[l] || 'How we work', href: `/${l}/sourcing` },
    { label: c.kicker, href: `/${l}/sourcing/${cat}` },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${l}` },
      { '@type': 'ListItem', position: 2, name: ({ en: 'How we work', zh: '合作方式', cn: '合作方式', fr: 'Notre méthode', es: 'Cómo trabajamos' } as Record<string, string>)[l] || 'How we work', item: `${SITE_URL}/${l}/sourcing` },
      { '@type': 'ListItem', position: 3, name: c.kicker, item: `${SITE_URL}/${l}/sourcing/${cat}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    inLanguage: langMeta(l).htmlLang,
    name: c.h1,
    description: c.intro,
    provider: { '@type': 'Organization', '@id': `${SITE_URL}#organization`, name: 'SunGene Co., LTD.' },
    areaServed: ['Worldwide'],
    serviceType: 'B2B sourcing and trading',
    url: `${SITE_URL}/${l}/sourcing/${cat}`,
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1000', description: 'Minimum order per shipment' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: langMeta(l).htmlLang,
    mainEntity: c.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  let _position = 0
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: langMeta(l).htmlLang,
    name: c.h1,
    description: c.intro,
    url: `${SITE_URL}/${l}/sourcing/${cat}`,
    numberOfItems: c.productGroups.reduce((sum, g) => sum + g.items.length, 0),
    itemListElement: c.productGroups.flatMap((g) =>
      g.items.map((it) => ({
        '@type': 'ListItem',
        position: ++_position,
        item: {
          '@type': 'Product',
          name: it,
          category: g.title,
          brand: { '@type': 'Brand', '@id': `${SITE_URL}/#brand`, name: 'SunGene' },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: '1000',
            offerCount: c.productGroups.length,
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
          },
        },
      })),
    ),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <PageHero
        kicker={c.kicker}
        title={c.h1}
        desc={c.intro}
        image={{ src: PHOTO.categories[cat], alt: c.h1, priority: true, aspectClassName: 'aspect-[4/3]' }}
      />

      <section className="py-6 bg-white">
        <Container>
          <Breadcrumbs lang={l} items={breadcrumbItems} />
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">{c.productGroupTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {c.productGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-950">{g.title}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-950 py-12 text-white sm:py-16">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{c.termsTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {c.terms.map((t) => (
              <div key={t.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-400">{t.label}</div>
                <div className="mt-2 text-base font-medium text-white">{t.value}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">{c.qcTitle}</h2>
          <ul className="mt-6 space-y-3">
            {c.qc.map((q) => (
              <li key={q} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <svg className="mt-1 h-5 w-5 shrink-0 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">{q}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">{c.faqTitle}</h2>
          <div className="mt-8 space-y-4">
            {c.faq.map((f, i) => (
              <details key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
                <summary className="cursor-pointer text-base font-bold text-gray-950">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Inline Quick Request form — reduces friction vs navigating to /contact */}
      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <QuickAssessment lang={l} context={`sourcing-${cat}`} source="category-page-inline" />
        </Container>
      </section>

      <section className="bg-brand-950 py-16 text-white sm:py-20">
        <Container className="max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{c.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-200">{c.ctaDesc}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={`/${l}/contact`} size="lg" className="shadow-lg shadow-accent-700/30">
              {c.ctaBtn}
            </ButtonLink>
            <ButtonLink href={`/${l}/sourcing`} variant="secondary" size="lg" className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/20">
              {({ en: 'See how we work', zh: '了解合作方式', cn: '了解合作方式', fr: 'Voir notre méthode', es: 'Ver cómo trabajamos' } as Record<string, string>)[l] || 'See how we work'}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
