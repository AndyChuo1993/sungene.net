# Wave 11b: page.tsx HOME_POSITIONING + HOME_KEYWORDS + inline org schema
# These were originally scoped for W13 but must be rewritten now since W11 SCHEMA_TEXT
# rewrite touched the same file — hook scans the file content, so any remaining
# forbidden token in untouched blocks blocks the commit. Pull forward the
# brand-positioning rewrites.
import io

with io.open('app/[lang]/page.tsx', 'r', encoding='utf-8') as f:
    p = f.read()

# ─── HOME_POSITIONING en ────────────────────────────────────────────
old_en = """  en: {
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
  },"""

new_en = """  en: {
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
  },"""
assert old_en in p, "HOME_POSITIONING en anchor missing"
p = p.replace(old_en, new_en, 1)

# ─── HOME_POSITIONING zh ────────────────────────────────────────────
old_zh = """  zh: {
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
  },"""

new_zh = """  zh: {
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
  },"""
assert old_zh in p, "HOME_POSITIONING zh anchor missing"
p = p.replace(old_zh, new_zh, 1)

# ─── HOME_POSITIONING cn ────────────────────────────────────────────
old_cn = """  cn: {
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
  },"""

new_cn = """  cn: {
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
  },"""
assert old_cn in p, "HOME_POSITIONING cn anchor missing"
p = p.replace(old_cn, new_cn, 1)

# ─── HOME_POSITIONING fr ────────────────────────────────────────────
old_fr = """  fr: {
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
  },"""

new_fr = """  fr: {
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
  },"""
assert old_fr in p, "HOME_POSITIONING fr anchor missing"
p = p.replace(old_fr, new_fr, 1)

# ─── HOME_POSITIONING es ────────────────────────────────────────────
old_es = """  es: {
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
  },"""

new_es = """  es: {
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
  },"""
assert old_es in p, "HOME_POSITIONING es anchor missing"
p = p.replace(old_es, new_es, 1)

# ─── HOME_KEYWORDS — kill all forbidden tokens across 5 langs ─────────
old_kw_en = """  en: [
    'custom paper gift packaging Taiwan', 'mooncake gift box manufacturer', 'brand gift box OEM Asia',
    'corporate gifts sourcing partner', 'branded merchandise OEM China', 'retail packaging sourcing',
    'paper bag and tube manufacturer', 'corrugated mailer box manufacturer', 'branded blankets wholesale',
    'Taiwan China dual-entity sourcing', 'multi-factory partner network', 'on-site AQL inspection',
    'principal trader sourcing model', 'Alibaba verifiable supplier', 'MOQ 1000 corporate gifts',
  ],"""
new_kw_en = """  en: [
    'Taiwan-based trading company', 'reliable product supply from Asia', 'manufacturing coordination Taiwan China',
    'export management Taiwan China', 'custom packaging supply Taiwan', 'mooncake gift box supplier',
    'home and living products supply', 'outdoor products supply', 'branded blankets supplier',
    'paper bags and tubes supply', 'corrugated mailer box supplier', 'pre-shipment AQL inspection',
    'Alibaba.com supplier 3 years', 'Taiwan registered invoicing', 'MOQ 1000 USD',
  ],"""
assert old_kw_en in p
p = p.replace(old_kw_en, new_kw_en, 1)

old_kw_zh = """  zh: [
    '客製紙盒禮品包裝', '月餅禮盒代工廠', '品牌禮盒 OEM', '高端零售包裝採購',
    '企業禮贈品採購夥伴', '台灣中國雙公司結構採購', '紙袋紙管代工',
    '瓦楞 mailer 紙箱', '客製品牌毛毯', '合作工廠網絡採購',
    '自有員工 AQL 品檢', 'Principal 採購模式', 'Alibaba 公開可驗證商家', 'MOQ 1000 企業禮品',
  ],"""
new_kw_zh = """  zh: [
    '台灣貿易公司', '亞洲產品供應', '製造協調 台灣 中國',
    '出口管理', '客製包裝供應', '月餅禮盒供應商',
    '居家生活產品', '戶外產品供應', '品牌毛毯供應商',
    '紙袋紙管供應', '瓦楞 mailer 紙箱供應', '出口前 AQL 品檢',
    'Alibaba.com 商家 三年', '台灣公司開發票', 'MOQ 1000 USD',
  ],"""
assert old_kw_zh in p
p = p.replace(old_kw_zh, new_kw_zh, 1)

old_kw_cn = """  cn: [
    '定制纸盒礼品包装', '月饼礼盒代工厂', '品牌礼盒 OEM', '高端零售包装采购',
    '企业礼赠品采购伙伴', '台湾中国双公司结构采购', '纸袋纸管代工',
    '瓦楞 mailer 纸箱', '定制品牌毛毯', '合作工厂网络采购',
    '自有员工 AQL 品检', 'Principal 采购模式', 'Alibaba 公开可验证商家', 'MOQ 1000 企业礼品',
  ],"""
new_kw_cn = """  cn: [
    '台湾贸易公司', '亚洲产品供应', '制造协调 台湾 中国',
    '出口管理', '定制包装供应', '月饼礼盒供应商',
    '居家生活产品', '户外产品供应', '品牌毛毯供应商',
    '纸袋纸管供应', '瓦楞 mailer 纸箱供应', '出口前 AQL 品检',
    'Alibaba.com 商家 三年', '台湾公司开发票', 'MOQ 1000 USD',
  ],"""
assert old_kw_cn in p
p = p.replace(old_kw_cn, new_kw_cn, 1)

old_kw_fr = """  fr: [
    'emballage cadeau papier sur mesure', 'fabricant boîtes mooncake', 'OEM boîtes cadeaux marque',
    'partenaire sourcing cadeaux corporate', 'fabrication merchandising marque', 'sourcing emballage retail',
    'fabricant sacs et tubes papier', 'fabricant cartons mailer ondulés', 'plaids personnalisés gros',
    'sourcing bi-entité Taïwan Chine', 'réseau usines partenaires', 'inspection AQL sur site',
  ],"""
new_kw_fr = """  fr: [
    'société de négoce Taïwan', 'approvisionnement fiable Asie', 'coordination manufacturière Taïwan Chine',
    'gestion des exports', 'fourniture emballage personnalisé', 'fournisseur boîtes mooncake',
    'produits maison vie quotidienne', 'fourniture produits extérieurs', 'fournisseur plaids personnalisés',
    'fourniture sacs tubes papier', 'fournisseur cartons mailer', 'inspection AQL pré-expédition',
  ],"""
assert old_kw_fr in p
p = p.replace(old_kw_fr, new_kw_fr, 1)

old_kw_es = """  es: [
    'embalaje regalo papel personalizado', 'fabricante cajas mooncake', 'OEM cajas regalo marca',
    'partner sourcing regalos corporativos', 'fabricación merchandising marca', 'sourcing embalaje retail',
    'fabricante bolsas tubos papel', 'fabricante cartones mailer corrugados', 'mantas personalizadas mayoreo',
    'sourcing bi-entidad Taiwán China', 'red fábricas partner', 'inspección AQL en sitio',
  ],"""
new_kw_es = """  es: [
    'empresa comercial Taiwán', 'suministro fiable Asia', 'coordinación fabricación Taiwán China',
    'gestión exportación', 'suministro embalaje personalizado', 'proveedor cajas mooncake',
    'productos hogar vida cotidiana', 'suministro productos exterior', 'proveedor mantas personalizadas',
    'suministro bolsas tubos papel', 'proveedor cartones mailer', 'inspección AQL pre-exportación',
  ],"""
assert old_kw_es in p
p = p.replace(old_kw_es, new_kw_es, 1)

# Dead-lang HOME_KEYWORDS also have `sourcing partner` etc — replace with neutral
old_dead = """  pt: ['sourcing Taiwan China', 'parceiro de sourcing'],
  ko: ['소싱 파트너', '대만 중국 소싱'],
  ja: ['ソーシングパートナー', '台湾 中国 仕入れ'],
  ar: ['وكيل سورسينج تايوان الصين', 'مورد تعبئة وتغليف'],
  th: ['ตัวแทนจัดหาสินค้า', 'ผู้จัดหา Taiwan China'],
  vi: ['đại lý sourcing Đài Loan Trung Quốc', 'đối tác sourcing'],
  de: ['Sourcing-Partner Taiwan China', 'Beschaffungsagentur Asien'],"""
new_dead = """  pt: ['empresa comercial Taiwan', 'fornecedor produtos Ásia'],
  ko: ['타이완 무역회사', '아시아 제품 공급'],
  ja: ['台湾 商社', 'アジア 製品供給'],
  ar: ['شركة تجارية تايوان', 'توريد المنتجات من آسيا'],
  th: ['บริษัทการค้าไต้หวัน', 'ซัพพลายเออร์สินค้าเอเชีย'],
  vi: ['công ty thương mại Đài Loan', 'nhà cung cấp sản phẩm châu Á'],
  de: ['Handelsgesellschaft Taiwan', 'Produktlieferant Asien'],"""
assert old_dead in p
p = p.replace(old_dead, new_dead, 1)

# ─── Inline organizationSchema description + knowsAbout ──────────────
old_org_desc = "description: 'Taiwan + China dual-entity sourcing partner. Alibaba-verifiable specialty: custom paper gift packaging (mooncake boxes, gift boxes, retail packaging, corrugated cartons, paper bags). For other corporate gift categories — blankets, apparel, drinkware, accessories, stationery — we source through our vetted factory network. Dedicated SunGene QC staff conduct on-site pre-shipment AQL inspection at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922).',"
new_org_desc = "description: 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging, home & living, outdoor. In-house SunGene staff conduct on-site pre-shipment AQL inspection at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922).',"
assert old_org_desc in p
p = p.replace(old_org_desc, new_org_desc, 1)

old_org_knows = "knowsAbout: ['Custom paper gift packaging', 'Mooncake gift boxes', 'Premium rigid gift boxes', 'Corporate gifts sourcing', 'Branded blankets and soft goods', 'Taiwan + China dual-entity sourcing', 'Multi-factory partner network', 'On-site AQL inspection', 'Dedicated in-house QC', 'Principal trader model'],"
new_org_knows = "knowsAbout: ['Taiwan-based trading company', 'Asia product supply', 'Manufacturing coordination', 'Export management', 'Custom packaging supply', 'Home and living products', 'Outdoor products supply', 'Pre-shipment AQL inspection', 'Alibaba.com supplier'],"
assert old_org_knows in p
p = p.replace(old_org_knows, new_org_knows, 1)

with io.open('app/[lang]/page.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(p)
print("page.tsx W11b complete: HOME_POSITIONING 5 langs + HOME_KEYWORDS 5+7 langs + inline org schema (16 blocks)")
