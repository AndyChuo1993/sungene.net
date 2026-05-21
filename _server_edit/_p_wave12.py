# Wave 12 patcher: sourcing/[category]/page.tsx supplier-voice rewrite
# 4 cats × 5 langs = 20 block updates. URL kept as /sourcing/[category].
# Beauty deprioritized (short, neutral, "available category" voice).
# Each block: rewrite 6 top fields (metaTitle, metaDescription, kicker, h1,
# intro, productGroupTitle) + ctaDesc. Product groups + terms + qc + faq
# preserved (factual/operational content).
import io

FILE = 'app/[lang]/sourcing/[category]/page.tsx'
with io.open(FILE, 'r', encoding='utf-8') as f:
    src = f.read()

# Helper: do a strict block replacement that aborts if anchor missing
def replace_once(text, old, new):
    assert old in text, "Anchor missing (first 100 chars): " + old[:100]
    return text.replace(old, new, 1)

# ============================================================
# PACKAGING (strongest — hero product)
# ============================================================

src = replace_once(src,
"""      metaTitle: 'Gift Packaging & Boxes Sourcing — Mooncake Boxes, Brand Gift Boxes',
      metaDescription: 'Custom mooncake gift boxes, premium magnetic-closure gift boxes, retail packaging, corrugated mailer cartons, kraft paper bags and tubes from Taiwan + China factories. Our Alibaba-verifiable specialty. MOQ USD 1,000.',
      kicker: 'GIFT PACKAGING & BOXES',
      h1: 'Gift packaging & boxes from Taiwan + China factories',
      intro: 'Custom paper gift packaging is our Alibaba-verifiable specialty (momas.en.alibaba.com). SunGene sources premium gift boxes, mooncake boxes, retail packaging, corrugated mailer cartons, paper bags and tubes directly from our vetted Taiwan + China factory network. We are a trading/principal-model partner — we buy at FOB or EXW and resell with our margin disclosed on top. Dedicated SunGene QC staff conduct on-site AQL 2.5 inspection at partner factories. Every shipment ships under SunGene Co., LTD.',
      productGroupTitle: 'Paper gift packaging product groups we source',""",
"""      metaTitle: 'Packaging Solutions — Custom Gift Boxes, Mooncake Boxes, Retail Packaging | SunGene',
      metaDescription: 'Custom mooncake boxes, premium gift boxes, retail packaging, corrugated mailer cartons, paper bags and tubes — supplied from Taiwan and China with coordinated production, pre-shipment AQL inspection, and export-ready documentation. MOQ USD 1,000.',
      kicker: 'PACKAGING SOLUTIONS',
      h1: 'Packaging Solutions',
      intro: 'SunGene supplies custom packaging from Taiwan and China — mooncake boxes, premium gift boxes, retail packaging, corrugated mailer cartons, paper bags and tubes. Coordinated production with our selected manufacturing partners, pre-shipment AQL 2.5 inspection by in-house SunGene staff, and export-ready documentation. Public Alibaba.com storefront catalog: momas.en.alibaba.com.',
      productGroupTitle: 'Packaging product groups',""")

src = replace_once(src,
"""      metaTitle: '客製紙盒禮品包裝採購 | 月餅禮盒、品牌禮盒 — 台灣+中國工廠',
      metaDescription: '客製月餅禮盒、磁吸品牌禮盒、零售包裝、瓦楞 mailer 紙箱、牛皮紙袋與紙管,直接從台灣+中國合作工廠採購。Alibaba 公開可驗證的核心專長。MOQ USD 1,000。',
      kicker: '紙盒禮品包裝採購',
      h1: '台灣+中國的客製紙盒禮品包裝',
      intro: '客製紙盒禮品包裝是我們在 Alibaba 公開可驗證的核心專長(momas.en.alibaba.com)。SunGene 直接向合作的台灣+中國工廠網絡採購精品禮盒、月餅禮盒、零售包裝、瓦楞 mailer 紙箱、紙袋與紙管。我們是 trader/principal-model 採購夥伴——以 FOB 或 EXW 在工廠把貨買下,加上揭露在外面的轉售利潤後賣給你。自有員工親自到合作工廠做 AQL 2.5 抽檢。每批出貨皆由 SunGene Co., LTD. 開立發票。',
      productGroupTitle: '我們採購的紙盒禮品包裝產品群',""",
"""      metaTitle: '包裝解決方案 — 客製月餅禮盒、品牌禮盒、零售包裝 | SunGene',
      metaDescription: '客製月餅禮盒、磁吸品牌禮盒、零售包裝、瓦楞 mailer 紙箱、牛皮紙袋與紙管 — 從台灣與中國供應,生產協調、出口前 AQL 品檢、出口文件齊備。最低訂單 USD 1,000。',
      kicker: '包裝解決方案',
      h1: '包裝解決方案',
      intro: 'SunGene 從台灣與中國供應客製包裝 — 月餅禮盒、精裝品牌禮盒、零售包裝、瓦楞 mailer 紙箱、紙袋與紙管。與精選製造夥伴協調生產、SunGene 自有員工出口前 AQL 2.5 品檢、出口文件齊備。Alibaba.com 公開店面:momas.en.alibaba.com。',
      productGroupTitle: '包裝產品群',""")

src = replace_once(src,
"""      metaTitle: '定制纸盒礼品包装采购 | 月饼礼盒、品牌礼盒 — 台湾+中国工厂',
      metaDescription: '定制月饼礼盒、磁吸品牌礼盒、零售包装、瓦楞 mailer 纸箱、牛皮纸袋与纸管,直接从台湾+中国合作工厂采购。Alibaba 公开可验证的核心专长。MOQ USD 1,000。',""",
"""      metaTitle: '包装解决方案 — 定制月饼礼盒、品牌礼盒、零售包装 | SunGene',
      metaDescription: '定制月饼礼盒、磁吸品牌礼盒、零售包装、瓦楞 mailer 纸箱、牛皮纸袋与纸管 — 从台湾与中国供应,生产协调、出口前 AQL 品检、出口文件齐备。最低订单 USD 1,000。',""")

# packaging cn — finish the rest
src = replace_once(src,
"""      kicker: '纸盒礼品包装采购',
      h1: '台湾+中国的定制纸盒礼品包装',
      intro: '定制纸盒礼品包装是我们在 Alibaba 公开可验证的核心专长(momas.en.alibaba.com)。SunGene 直接向合作的台湾+中国工厂网络采购精品礼盒、月饼礼盒、零售包装、瓦楞 mailer 纸箱、纸袋与纸管。我们是 trader/principal-model 采购伙伴——以 FOB 或 EXW 在工厂把货买下,加上揭露在外面的转售利润后卖给您。自有员工亲自到合作工厂做 AQL 2.5 抽检。每批出货皆由 SunGene Co., LTD. 开立发票。',
      productGroupTitle: '我们采购的纸盒礼品包装产品群',""",
"""      kicker: '包装解决方案',
      h1: '包装解决方案',
      intro: 'SunGene 从台湾与中国供应定制包装 — 月饼礼盒、精装品牌礼盒、零售包装、瓦楞 mailer 纸箱、纸袋与纸管。与精选制造伙伴协调生产、SunGene 自有员工出口前 AQL 2.5 品检、出口文件齐备。Alibaba.com 公开店面:momas.en.alibaba.com。',
      productGroupTitle: '包装产品群',""")

# packaging fr
src = replace_once(src,
"""      metaTitle: "Sourcing emballage cadeau papier — boîtes mooncake, boîtes-cadeaux de marque",
      metaDescription: "Boîtes mooncake sur mesure, boîtes-cadeaux premium à fermeture magnétique, emballage retail, cartons mailer ondulés, sacs kraft et tubes papier depuis usines Taïwan + Chine. Notre spécialité vérifiable sur Alibaba. MOQ 1 000 USD.",
      kicker: "SOURCING EMBALLAGE CADEAU PAPIER",
      h1: "Emballage cadeau papier sur mesure depuis Taïwan + Chine",
      intro: "L'emballage cadeau papier sur mesure est notre spécialité vérifiable sur Alibaba (momas.en.alibaba.com). SunGene source boîtes-cadeaux premium, boîtes mooncake, emballage retail, cartons mailer ondulés, sacs et tubes papier directement auprès de notre réseau d'usines partenaires Taïwan + Chine. Nous opérons en modèle trader/principal — nous achetons en FOB ou EXW et revendons avec notre marge affichée séparément. Personnel QC SunGene dédié effectue inspection AQL 2,5 sur site chez les usines partenaires. Chaque expédition part au nom de SunGene Co., LTD.",
      productGroupTitle: "Groupes de produits emballage cadeau papier sourcés",""",
"""      metaTitle: "Solutions d'emballage — Boîtes mooncake, boîtes-cadeaux, emballage retail | SunGene",
      metaDescription: "Boîtes mooncake personnalisées, boîtes-cadeaux premium, emballage retail, cartons mailer ondulés, sacs et tubes papier — fournis depuis Taïwan et la Chine avec coordination de production, contrôle AQL pré-expédition et documentation export prête. MOQ 1 000 USD.",
      kicker: "SOLUTIONS D'EMBALLAGE",
      h1: "Solutions d'emballage",
      intro: "SunGene fournit de l'emballage personnalisé depuis Taïwan et la Chine — boîtes mooncake, boîtes-cadeaux premium, emballage retail, cartons mailer ondulés, sacs et tubes papier. Coordination de production avec nos partenaires manufacturiers sélectionnés, contrôle AQL 2,5 pré-expédition par le personnel SunGene en interne, documentation export prête. Boutique publique Alibaba.com : momas.en.alibaba.com.",
      productGroupTitle: "Groupes de produits emballage",""")

# packaging es
src = replace_once(src,
"""      metaTitle: 'Sourcing embalaje regalo papel — cajas mooncake, cajas regalo de marca',
      metaDescription: 'Cajas mooncake personalizadas, cajas regalo premium con cierre magnético, embalaje retail, cartones mailer corrugados, bolsas kraft y tubos papel desde fábricas Taiwán + China. Nuestra especialidad verificable en Alibaba. MOQ USD 1.000.',
      kicker: 'SOURCING EMBALAJE REGALO PAPEL',
      h1: 'Embalaje regalo papel personalizado desde Taiwán + China',
      intro: 'El embalaje regalo papel personalizado es nuestra especialidad verificable en Alibaba (momas.en.alibaba.com). SunGene abastece cajas regalo premium, cajas mooncake, embalaje retail, cartones mailer corrugados, bolsas y tubos papel directamente de nuestra red de fábricas partner Taiwán + China. Operamos como trader/principal — compramos FOB o EXW y revendemos con nuestro margen mostrado por separado. Personal QC SunGene dedicado realiza inspección AQL 2,5 en sitio en fábricas partner. Cada envío sale a nombre de SunGene Co., LTD.',
      productGroupTitle: 'Grupos de productos embalaje regalo papel que abastecemos',""",
"""      metaTitle: 'Soluciones de embalaje — Cajas mooncake, cajas regalo, embalaje retail | SunGene',
      metaDescription: 'Cajas mooncake personalizadas, cajas regalo premium, embalaje retail, cartones mailer corrugados, bolsas y tubos de papel — suministrados desde Taiwán y China con coordinación de producción, inspección AQL pre-exportación y documentación de exportación lista. MOQ USD 1.000.',
      kicker: 'SOLUCIONES DE EMBALAJE',
      h1: 'Soluciones de embalaje',
      intro: 'SunGene suministra embalaje personalizado desde Taiwán y China — cajas mooncake, cajas regalo premium, embalaje retail, cartones mailer corrugados, bolsas y tubos de papel. Coordinación de producción con nuestros socios manufactureros seleccionados, inspección AQL 2.5 pre-exportación por personal interno de SunGene, documentación de exportación lista. Tienda pública Alibaba.com: momas.en.alibaba.com.',
      productGroupTitle: 'Grupos de productos embalaje',""")

# ============================================================
# HOME → HOME & LIVING PRODUCTS
# ============================================================

src = replace_once(src,
"""      metaTitle: 'Drinkware & Tabletop Gifts Sourcing — Mugs, Tumblers, Ceramic Sets',
      metaDescription: 'Branded mugs, tumblers, water bottles, ceramic gift sets, kitchen accessories for corporate gifting and event swag — sourced through our vetted Taiwan + China factory network. MOQ USD 1,000.',
      kicker: 'DRINKWARE & TABLETOP GIFTS',
      h1: 'Drinkware & tabletop gifts from Taiwan + China',
      intro: 'Drinkware and tabletop gifts complement our paper gift packaging specialty for full corporate gift programs. SunGene sources branded mugs, tumblers, insulated bottles, ceramic gift sets, and kitchen accessories through our vetted Taiwan + China factory network — same trader/principal model, same dedicated SunGene QC staff conducting on-site AQL inspection at partner factories, same transparent quote (factory price + our margin separated). Every shipment ships under SunGene Co., LTD.',
      productGroupTitle: 'Home goods we source',""",
"""      metaTitle: 'Home & Living Products — Drinkware, Ceramics, Blankets | SunGene',
      metaDescription: 'Mugs, tumblers, ceramic gift sets, kitchen accessories, branded blankets and soft goods — supplied from Taiwan and China through selected manufacturing partners. Pre-shipment AQL inspection. MOQ USD 1,000.',
      kicker: 'HOME & LIVING PRODUCTS',
      h1: 'Home & Living Products',
      intro: 'SunGene supplies home and living products from Taiwan and China — mugs, tumblers, ceramic gift sets, kitchen accessories, branded blankets and soft goods. Coordinated production with our selected manufacturing partners across both markets, pre-shipment AQL inspection by in-house SunGene staff, and export-ready documentation.',
      productGroupTitle: 'Home & living product groups',""")

src = replace_once(src,
"""      metaTitle: '杯具與桌上禮品採購 | 馬克杯、保溫杯、陶瓷禮盒',
      metaDescription: '客製品牌馬克杯、保溫杯、保溫瓶、陶瓷禮盒、廚房配件作為企業禮品與活動 swag,透過我們合作的台灣+中國工廠網絡採購。MOQ USD 1,000。',
      kicker: '杯具與桌上禮品採購',
      h1: '台灣+中國的杯具與桌上禮品',
      intro: '杯具與桌上禮品搭配我們的紙盒禮品包裝專長,成為完整的企業禮品方案。SunGene 透過合作的台灣+中國工廠網絡採購客製品牌馬克杯、保溫杯、保溫瓶、陶瓷禮盒與廚房配件——同樣 trader/principal 模式,同樣由 SunGene 自有員工親自到合作工廠做 AQL 抽檢,同樣透明報價(工廠價與我方利潤分行列出)。每批出貨皆由 SunGene Co., LTD. 開立發票。',
      productGroupTitle: '我們採購的家居產品',""",
"""      metaTitle: '居家生活產品 — 馬克杯、陶瓷、品牌毛毯 | SunGene',
      metaDescription: '馬克杯、保溫杯、陶瓷禮盒、廚房配件、品牌毛毯與軟織品 — 從台灣與中國透過精選製造夥伴供應。出口前 AQL 品檢。最低訂單 USD 1,000。',
      kicker: '居家生活產品',
      h1: '居家生活產品',
      intro: 'SunGene 從台灣與中國供應居家生活產品 — 馬克杯、保溫杯、陶瓷禮盒、廚房配件、品牌毛毯與軟織品。與精選製造夥伴在兩地協調生產,SunGene 自有員工出口前 AQL 品檢,出口文件齊備。',
      productGroupTitle: '居家生活產品群',""")

src = replace_once(src,
"""      metaTitle: '杯具与桌上礼品采购 | 马克杯、保温杯、陶瓷礼盒',
      metaDescription: '定制品牌马克杯、保温杯、保温瓶、陶瓷礼盒、厨房配件作为企业礼品与活动 swag,通过我们合作的台湾+中国工厂网络采购。MOQ USD 1,000。',
      kicker: '杯具与桌上礼品采购',
      h1: '台湾+中国的杯具与桌上礼品',
      intro: '杯具与桌上礼品搭配我们的纸盒礼品包装专长,成为完整的企业礼品方案。SunGene 通过合作的台湾+中国工厂网络采购定制品牌马克杯、保温杯、保温瓶、陶瓷礼盒与厨房配件——同样 trader/principal 模式,同样由 SunGene 自有员工亲自到合作工厂做 AQL 抽检,同样透明报价(工厂价与我方利润分行列出)。每批出货皆由 SunGene Co., LTD. 开立发票。',
      productGroupTitle: '我们采购的家居产品',""",
"""      metaTitle: '居家生活产品 — 马克杯、陶瓷、品牌毛毯 | SunGene',
      metaDescription: '马克杯、保温杯、陶瓷礼盒、厨房配件、品牌毛毯与软织品 — 从台湾与中国通过精选制造伙伴供应。出口前 AQL 品检。最低订单 USD 1,000。',
      kicker: '居家生活产品',
      h1: '居家生活产品',
      intro: 'SunGene 从台湾与中国供应居家生活产品 — 马克杯、保温杯、陶瓷礼盒、厨房配件、品牌毛毯与软织品。与精选制造伙伴在两地协调生产,SunGene 自有员工出口前 AQL 品检,出口文件齐备。',
      productGroupTitle: '居家生活产品群',""")

# home fr
src = replace_once(src,
"""      metaTitle: 'Sourcing mugs et arts de la table — cadeaux corporate',
      metaDescription: "Mugs personnalisés, gourdes isothermes, sets céramique, accessoires cuisine pour cadeaux corporate et swag d'événement — sourcés via notre réseau d'usines vérifiées Taïwan + Chine. MOQ 1 000 USD.",
      kicker: 'SOURCING MUGS & ARTS DE LA TABLE',
      h1: 'Mugs et arts de la table — cadeaux corporate depuis Taïwan + Chine',
      intro: "Les mugs et arts de la table complètent notre spécialité emballage cadeau papier pour des programmes cadeaux corporate complets. SunGene source mugs personnalisés, gourdes isothermes, sets céramique-cadeaux et accessoires cuisine via notre réseau d'usines vérifiées Taïwan + Chine — même modèle trader/principal, même personnel QC SunGene dédié inspectant sur site chez les usines partenaires, même devis transparent (prix usine et marge séparés). Chaque expédition part au nom de SunGene Co., LTD.",
      productGroupTitle: 'Articles maison sourcés',""",
"""      metaTitle: "Produits maison & vie quotidienne — Mugs, céramique, plaids | SunGene",
      metaDescription: "Mugs, gourdes, sets en céramique, accessoires cuisine, plaids et textiles personnalisés — fournis depuis Taïwan et la Chine via nos partenaires manufacturiers sélectionnés. Contrôle AQL pré-expédition. MOQ 1 000 USD.",
      kicker: "PRODUITS MAISON & VIE QUOTIDIENNE",
      h1: "Produits maison & vie quotidienne",
      intro: "SunGene fournit des produits maison et vie quotidienne depuis Taïwan et la Chine — mugs, gourdes, sets céramiques, accessoires cuisine, plaids et textiles. Production coordonnée avec nos partenaires manufacturiers sélectionnés, contrôle AQL pré-expédition par le personnel SunGene en interne et documentation export prête.",
      productGroupTitle: "Groupes de produits maison & vie quotidienne",""")

# home es
src = replace_once(src,
"""      metaTitle: 'Sourcing tazas y artículos de mesa — regalos corporativos',
      metaDescription: 'Tazas personalizadas, termos, sets cerámicos, accesorios cocina para regalos corporativos y swag de eventos — abastecidos vía nuestra red de fábricas verificadas Taiwán + China. MOQ USD 1.000.',
      kicker: 'SOURCING TAZAS Y ARTÍCULOS DE MESA',
      h1: 'Tazas y artículos de mesa — regalos corporativos desde Taiwán + China',
      intro: 'Las tazas y artículos de mesa complementan nuestra especialidad embalaje regalo papel para programas completos de regalos corporativos. SunGene abastece tazas personalizadas, termos, sets cerámicos de regalo y accesorios cocina vía nuestra red de fábricas verificadas Taiwán + China — mismo modelo trader/principal, mismo personal QC SunGene dedicado inspeccionando en sitio en fábricas partner, mismas cotizaciones transparentes (precio fábrica y margen separados). Cada envío sale a nombre de SunGene Co., LTD.',
      productGroupTitle: 'Artículos del hogar que abastecemos',""",
"""      metaTitle: 'Productos hogar y vida cotidiana — Tazas, cerámica, mantas | SunGene',
      metaDescription: 'Tazas, termos, sets cerámicos, accesorios cocina, mantas y textiles de marca — suministrados desde Taiwán y China a través de nuestros socios manufactureros seleccionados. Inspección AQL pre-exportación. MOQ USD 1.000.',
      kicker: 'PRODUCTOS HOGAR Y VIDA COTIDIANA',
      h1: 'Productos hogar y vida cotidiana',
      intro: 'SunGene suministra productos hogar y vida cotidiana desde Taiwán y China — tazas, termos, sets cerámicos, accesorios cocina, mantas y textiles. Producción coordinada con nuestros socios manufactureros seleccionados, inspección AQL pre-exportación por personal interno de SunGene y documentación de exportación lista.',
      productGroupTitle: 'Grupos de productos hogar y vida cotidiana',""")

# ============================================================
# GARDEN → OUTDOOR & GARDEN PRODUCTS
# ============================================================

src = replace_once(src,
"""      metaTitle: 'Outdoor Event Swag Sourcing — Picnic Blankets, Sunhats, Cooler Bags',
      metaDescription: 'Branded picnic blankets, sunhats and caps, cooler bags, branded umbrellas for trade shows, corporate retreats, and outdoor brand activations — sourced through our vetted Taiwan + China factory network. MOQ USD 1,000.',
      kicker: 'OUTDOOR EVENT SWAG SOURCING',
      h1: 'Outdoor event gifts and branded outdoor swag from Taiwan + China',
      intro: 'Outdoor event swag complements our paper gift packaging specialty for corporate trade show, retreat, and brand activation programs. SunGene sources branded picnic blankets (flannel, sherpa, lamb-wool), sunhats and caps, cooler bags, branded umbrellas, and outdoor accessories through our vetted Taiwan + China factory network — same trader/principal model, same dedicated SunGene QC staff conducting on-site AQL inspection at partner factories, same transparent quote structure. Every shipment ships under SunGene Co., LTD.',
      productGroupTitle: 'Garden & outdoor product groups',""",
"""      metaTitle: 'Outdoor & Garden Products — Picnic Blankets, Caps, Cooler Bags | SunGene',
      metaDescription: 'Branded picnic blankets, sunhats and caps, cooler bags, branded umbrellas, outdoor event swag and garden products — supplied from Taiwan and China through selected manufacturing partners. Pre-shipment AQL inspection. MOQ USD 1,000.',
      kicker: 'OUTDOOR & GARDEN PRODUCTS',
      h1: 'Outdoor & Garden Products',
      intro: 'SunGene supplies outdoor and garden products from Taiwan and China — branded picnic blankets, sunhats and caps, cooler bags, branded umbrellas, outdoor event swag for trade shows and corporate retreats. Coordinated production with our selected manufacturing partners across both markets, pre-shipment AQL inspection by in-house SunGene staff, and export-ready documentation.',
      productGroupTitle: 'Outdoor & garden product groups',""")

src = replace_once(src,
"""      metaTitle: '戶外活動 swag 採購 | 印製毛毯、遮陽帽、保冷袋',
      metaDescription: '客製印製毛毯、遮陽帽與棒球帽、保冷袋、品牌雨傘,用於展會、企業旅遊、戶外品牌活動,透過我們合作的台灣+中國工廠網絡採購。MOQ USD 1,000。',
      kicker: '戶外活動 SWAG 採購',
      h1: '台灣+中國的戶外活動禮品與品牌 swag',
      intro: '戶外活動 swag 搭配我們的紙盒禮品包裝專長,成為企業展會、員工旅遊、品牌活動的完整禮品方案。SunGene 透過合作的台灣+中國工廠網絡採購客製印製毛毯(法蘭絨、sherpa、羊羔絨)、遮陽帽與棒球帽、保冷袋、品牌雨傘與戶外配件——同樣 trader/principal 模式,同樣由 SunGene 自有員工親自到合作工廠做 AQL 抽檢,同樣透明報價結構。每批出貨皆由 SunGene Co., LTD. 開立發票。',
      productGroupTitle: '園藝與戶外產品群',""",
"""      metaTitle: '戶外與園藝產品 — 野餐墊、棒球帽、保冷袋 | SunGene',
      metaDescription: '品牌野餐墊、太陽帽與棒球帽、保冷袋、品牌雨傘、戶外活動贈品與園藝產品 — 從台灣與中國透過精選製造夥伴供應。出口前 AQL 品檢。最低訂單 USD 1,000。',
      kicker: '戶外與園藝產品',
      h1: '戶外與園藝產品',
      intro: 'SunGene 從台灣與中國供應戶外與園藝產品 — 品牌野餐墊、太陽帽與棒球帽、保冷袋、品牌雨傘、戶外活動贈品(展覽、企業活動)。與精選製造夥伴在兩地協調生產,SunGene 自有員工出口前 AQL 品檢,出口文件齊備。',
      productGroupTitle: '戶外與園藝產品群',""")

src = replace_once(src,
"""      metaTitle: '户外活动 swag 采购 | 印制毛毯、遮阳帽、保冷袋',
      metaDescription: '定制印制毛毯、遮阳帽与棒球帽、保冷袋、品牌雨伞,用于展会、企业旅游、户外品牌活动,通过我们合作的台湾+中国工厂网络采购。MOQ USD 1,000。',
      kicker: '户外活动 SWAG 采购',
      h1: '台湾+中国的户外活动礼品与品牌 swag',
      intro: '户外活动 swag 搭配我们的纸盒礼品包装专长,成为企业展会、员工旅游、品牌活动的完整礼品方案。SunGene 通过合作的台湾+中国工厂网络采购定制印制毛毯(法兰绒、sherpa、羊羔绒)、遮阳帽与棒球帽、保冷袋、品牌雨伞与户外配件——同样 trader/principal 模式,同样由 SunGene 自有员工亲自到合作工厂做 AQL 抽检,同样透明报价结构。每批出货皆由 SunGene Co., LTD. 开立发票。',
      productGroupTitle: '园艺与户外产品群',""",
"""      metaTitle: '户外与园艺产品 — 野餐垫、棒球帽、保冷袋 | SunGene',
      metaDescription: '品牌野餐垫、太阳帽与棒球帽、保冷袋、品牌雨伞、户外活动赠品与园艺产品 — 从台湾与中国通过精选制造伙伴供应。出口前 AQL 品检。最低订单 USD 1,000。',
      kicker: '户外与园艺产品',
      h1: '户外与园艺产品',
      intro: 'SunGene 从台湾与中国供应户外与园艺产品 — 品牌野餐垫、太阳帽与棒球帽、保冷袋、品牌雨伞、户外活动赠品(展览、企业活动)。与精选制造伙伴在两地协调生产,SunGene 自有员工出口前 AQL 品检,出口文件齐备。',
      productGroupTitle: '户外与园艺产品群',""")

# garden fr
src = replace_once(src,
"""      metaTitle: "Sourcing swag événementiel extérieur — plaids, casquettes, sacs isothermes",
      metaDescription: "Plaids personnalisés, casquettes et chapeaux soleil, sacs isothermes, parapluies de marque pour salons, événements corporate et activations extérieures — sourcés via notre réseau d'usines vérifiées Taïwan + Chine. MOQ 1 000 USD.",
      kicker: "SOURCING SWAG ÉVÉNEMENTIEL EXTÉRIEUR",
      h1: 'Cadeaux événementiels extérieur et swag de marque depuis Taïwan + Chine',
      intro: "Le swag événementiel extérieur complète notre spécialité emballage cadeau papier pour les programmes de salons, séminaires et activations de marque. SunGene source plaids personnalisés (flanelle, sherpa, agneau), casquettes et chapeaux soleil, sacs isothermes, parapluies de marque et accessoires extérieurs via notre réseau d'usines vérifiées Taïwan + Chine — même modèle trader/principal, même personnel QC SunGene dédié inspectant sur site chez les usines partenaires, même structure de devis transparente. Chaque expédition part au nom de SunGene Co., LTD.",
      productGroupTitle: 'Groupes de produits jardin & extérieur',""",
"""      metaTitle: "Produits extérieur & jardin — Plaids de pique-nique, casquettes, sacs isothermes | SunGene",
      metaDescription: "Plaids de pique-nique personnalisés, casquettes et chapeaux, sacs isothermes, parapluies de marque, articles événementiels et produits jardin — fournis depuis Taïwan et la Chine via nos partenaires manufacturiers sélectionnés. Contrôle AQL pré-expédition. MOQ 1 000 USD.",
      kicker: "PRODUITS EXTÉRIEUR & JARDIN",
      h1: "Produits extérieur & jardin",
      intro: "SunGene fournit des produits extérieur et jardin depuis Taïwan et la Chine — plaids de pique-nique de marque, casquettes et chapeaux, sacs isothermes, parapluies de marque, articles événementiels pour salons et événements d'entreprise. Production coordonnée avec nos partenaires manufacturiers sélectionnés, contrôle AQL pré-expédition par le personnel SunGene en interne et documentation export prête.",
      productGroupTitle: "Groupes de produits extérieur & jardin",""")

# garden es
src = replace_once(src,
"""      metaTitle: 'Sourcing swag eventos exteriores — mantas, gorras, bolsos cooler',
      metaDescription: 'Mantas personalizadas, gorras y sombreros sol, bolsos cooler, paraguas de marca para ferias, eventos corporativos y activaciones de marca al aire libre — abastecidos vía nuestra red de fábricas verificadas Taiwán + China. MOQ USD 1.000.',
      kicker: 'SOURCING SWAG EVENTOS EXTERIORES',
      h1: 'Regalos eventos exteriores y swag de marca desde Taiwán + China',
      intro: 'El swag eventos exteriores complementa nuestra especialidad embalaje regalo papel para programas ferias, retiros corporativos y activaciones de marca. SunGene abastece mantas personalizadas (franela, sherpa, lana de cordero), gorras y sombreros sol, bolsos cooler, paraguas de marca y accesorios exteriores vía nuestra red de fábricas verificadas Taiwán + China — mismo modelo trader/principal, mismo personal QC SunGene dedicado inspeccionando en sitio en fábricas partner, misma estructura de cotización transparente. Cada envío sale a nombre de SunGene Co., LTD.',
      productGroupTitle: 'Grupos de productos jardín y exterior',""",
"""      metaTitle: 'Productos exterior y jardín — Mantas de picnic, gorras, bolsas térmicas | SunGene',
      metaDescription: 'Mantas de picnic de marca, gorras y sombreros, bolsas térmicas, paraguas de marca, artículos para eventos y productos de jardín — suministrados desde Taiwán y China a través de nuestros socios manufactureros seleccionados. Inspección AQL pre-exportación. MOQ USD 1.000.',
      kicker: 'PRODUCTOS EXTERIOR Y JARDÍN',
      h1: 'Productos exterior y jardín',
      intro: 'SunGene suministra productos exterior y jardín desde Taiwán y China — mantas de picnic de marca, gorras y sombreros, bolsas térmicas, paraguas de marca, artículos para eventos corporativos y ferias. Producción coordinada con nuestros socios manufactureros seleccionados, inspección AQL pre-exportación por personal interno de SunGene y documentación de exportación lista.',
      productGroupTitle: 'Grupos de productos exterior y jardín',""")

# ============================================================
# BEAUTY (deprioritized — short, neutral, "available category" voice)
# ============================================================

src = replace_once(src,
"""      metaTitle: 'Beauty & Wellness Gift Sets Sourcing — Sample Kits, Fragrance Boxes',
      metaDescription: 'Cosmetic sample kits, fragrance gift boxes, beauty gift sets, wellness kits, refillable beauty packaging for corporate self-care gift programs — sourced through our vetted Taiwan + China factory network. MOQ USD 1,000.',
      kicker: 'BEAUTY & WELLNESS GIFT SETS',
      h1: 'Beauty and wellness gift sets from Taiwan + China',
      intro: 'Beauty and wellness gift sets complement our paper gift packaging specialty for corporate self-care gift programs (executive holiday gifts, wellness retreats, premium customer appreciation). SunGene sources cosmetic sample kits, fragrance gift boxes, beauty gift sets, wellness kits, and refillable beauty packaging through our vetted Taiwan + China factory network — same trader/principal model, same dedicated SunGene QC staff conducting on-site AQL inspection at partner factories, same transparent quote (factory price + our margin separated). Every shipment ships under SunGene Co., LTD.',
      productGroupTitle: 'Beauty packaging groups',""",
"""      metaTitle: 'Beauty & Personal Care Products — Available Category | SunGene',
      metaDescription: 'Beauty and personal care gift sets, fragrance gift boxes, wellness kits, refillable beauty packaging — secondary product category, available on request. SunGene primarily supplies custom packaging, home & living, and outdoor products from Taiwan and China.',
      kicker: 'BEAUTY & PERSONAL CARE',
      h1: 'Beauty & Personal Care Products',
      intro: 'Beauty and personal care products are an additional category available on request. SunGene primarily supplies custom packaging, home & living, and outdoor products from Taiwan and China. Beauty items — gift sets, fragrance gift boxes, wellness kits, refillable beauty packaging — can be coordinated case-by-case alongside our core product supply when relevant to your corporate gifting program.',
      productGroupTitle: 'Beauty product groups (available on request)',""")

src = replace_once(src,
"""      metaTitle: '美容與健康禮盒採購 | 樣品禮盒、香氛禮盒',
      metaDescription: '美妝樣品禮盒、香氛禮盒、美容禮盒、健康禮盒、可填充美容包裝用於企業自我照護禮品方案,透過我們合作的台灣+中國工廠網絡採購。MOQ USD 1,000。',
      kicker: '美容與健康禮盒採購',
      h1: '台灣+中國的美容與健康禮盒',
      intro: '美容與健康禮盒搭配我們的紙盒禮品包裝專長,成為企業自我照護禮品方案(高階主管節慶禮、健康度假、高端客戶答謝)的完整選項。SunGene 透過合作的台灣+中國工廠網絡採購美妝樣品禮盒、香氛禮盒、美容禮盒、健康禮盒與可填充美容包裝——同樣 trader/principal 模式,同樣由 SunGene 自有員工親自到合作工廠做 AQL 抽檢,同樣透明報價(工廠價與我方利潤分行列出)。每批出貨皆由 SunGene Co., LTD. 開立發票。',
      productGroupTitle: '美容包裝產品群',""",
"""      metaTitle: '美妝與個人護理產品 — 可承接類別 | SunGene',
      metaDescription: '美妝與個人護理禮盒、香氛禮盒、養生禮品組、可填充美容包裝 — 次要產品類別,可依案件承接。SunGene 主要供應台灣與中國的客製包裝、居家生活與戶外產品。',
      kicker: '美妝與個人護理',
      h1: '美妝與個人護理產品',
      intro: '美妝與個人護理產品是可依案件承接的次要類別。SunGene 主要供應台灣與中國的客製包裝、居家生活產品、戶外產品。美妝相關品項——禮盒、香氛禮盒、養生禮品組、可填充美容包裝——若與您的企業禮贈品專案相關,可在主要產品線之外個案協調。',
      productGroupTitle: '美妝產品群(可依案件承接)',""")

src = replace_once(src,
"""      metaTitle: '美容与健康礼盒采购 | 样品礼盒、香氛礼盒',
      metaDescription: '美妆样品礼盒、香氛礼盒、美容礼盒、健康礼盒、可填充美容包装用于企业自我照护礼品方案,通过我们合作的台湾+中国工厂网络采购。MOQ USD 1,000。',
      kicker: '美容与健康礼盒采购',
      h1: '台湾+中国的美容与健康礼盒',
      intro: '美容与健康礼盒搭配我们的纸盒礼品包装专长,成为企业自我照护礼品方案(高阶主管节庆礼、健康度假、高端客户答谢)的完整选项。SunGene 通过合作的台湾+中国工厂网络采购美妆样品礼盒、香氛礼盒、美容礼盒、健康礼盒与可填充美容包装——同样 trader/principal 模式,同样由 SunGene 自有员工亲自到合作工厂做 AQL 抽检,同样透明报价(工厂价与我方利润分行列出)。每批出货皆由 SunGene Co., LTD. 开立发票。',
      productGroupTitle: '美容包装产品群',""",
"""      metaTitle: '美妆与个人护理产品 — 可承接类别 | SunGene',
      metaDescription: '美妆与个人护理礼盒、香氛礼盒、养生礼品组、可填充美容包装 — 次要产品类别,可依案件承接。SunGene 主要供应台湾与中国的定制包装、居家生活与户外产品。',
      kicker: '美妆与个人护理',
      h1: '美妆与个人护理产品',
      intro: '美妆与个人护理产品是可依案件承接的次要类别。SunGene 主要供应台湾与中国的定制包装、居家生活产品、户外产品。美妆相关品项——礼盒、香氛礼盒、养生礼品组、可填充美容包装——若与您的企业礼赠品专案相关,可在主要产品线之外个案协调。',
      productGroupTitle: '美妆产品群(可依案件承接)',""")

# beauty fr
src = replace_once(src,
"""      metaTitle: 'Sourcing sets cadeaux beauté & bien-être — kits échantillons, boîtes parfum',
      metaDescription: "Kits échantillons cosmétiques, boîtes-cadeaux parfum, sets cadeaux beauté, kits bien-être, flaconnage beauté rechargeable pour programmes cadeaux self-care corporate — sourcés via notre réseau d'usines vérifiées Taïwan + Chine. MOQ 1 000 USD.",
      kicker: "SOURCING SETS CADEAUX BEAUTÉ & BIEN-ÊTRE",
      h1: 'Sets cadeaux beauté et bien-être depuis Taïwan + Chine',
      intro: "Les sets cadeaux beauté et bien-être complètent notre spécialité emballage cadeau papier pour les programmes cadeaux self-care corporate (cadeaux dirigeants, séminaires bien-être, fidélisation client premium). SunGene source kits échantillons cosmétiques, boîtes-cadeaux parfum, sets cadeaux beauté, kits bien-être et flaconnage beauté rechargeable via notre réseau d'usines vérifiées Taïwan + Chine — même modèle trader/principal, même personnel QC SunGene dédié inspectant sur site chez les usines partenaires, même devis transparent (prix usine et marge séparés). Chaque expédition part au nom de SunGene Co., LTD.",
      productGroupTitle: 'Groupes flaconnage beauté',""",
"""      metaTitle: "Produits beauté & soins personnels — Catégorie disponible | SunGene",
      metaDescription: "Sets cadeaux beauté et soins personnels, coffrets parfums, kits bien-être, flaconnage beauté rechargeable — catégorie de produits secondaire, disponible sur demande. SunGene fournit principalement emballage personnalisé, maison & vie quotidienne et produits extérieur depuis Taïwan et la Chine.",
      kicker: "BEAUTÉ & SOINS PERSONNELS",
      h1: "Produits beauté & soins personnels",
      intro: "Les produits beauté et soins personnels sont une catégorie additionnelle disponible sur demande. SunGene fournit principalement emballage personnalisé, produits maison & vie quotidienne et produits extérieur depuis Taïwan et la Chine. Les articles beauté — sets cadeaux, coffrets parfums, kits bien-être, flaconnage rechargeable — peuvent être coordonnés au cas par cas en complément de notre offre principale lorsqu'ils sont pertinents pour votre programme de cadeaux corporate.",
      productGroupTitle: "Groupes de produits beauté (disponibles sur demande)",""")

# beauty es
src = replace_once(src,
"""      metaTitle: 'Sourcing sets regalo belleza y bienestar — kits muestra, cajas fragancia',
      metaDescription: 'Kits muestra cosmética, cajas regalo fragancia, sets regalo belleza, kits bienestar, envase belleza recargable para programas regalos self-care corporativos — abastecidos vía nuestra red de fábricas verificadas Taiwán + China. MOQ USD 1.000.',
      kicker: 'SOURCING SETS REGALO BELLEZA Y BIENESTAR',
      h1: 'Envase cosmético y cuidado personal desde Taiwán y China',
      intro: 'SunGene compra envase cosmético y de cuidado personal — tarros, frascos, bombas, dispensadores, tubos — directamente a fábricas verificadas en Taiwán y China. La decoración (serigrafía, hot stamping, impresión UV, esmerilado, acabado mate) se coordina a través de la misma red de proveedores en una cotización única SunGene.',
      productGroupTitle: 'Grupos de envase cosmético',""",
"""      metaTitle: 'Productos belleza y cuidado personal — Categoría disponible | SunGene',
      metaDescription: 'Sets de regalo belleza y cuidado personal, cajas de fragancias, kits de bienestar, envase belleza recargable — categoría de productos secundaria, disponible bajo solicitud. SunGene suministra principalmente embalaje personalizado, hogar y vida cotidiana y productos exterior desde Taiwán y China.',
      kicker: 'BELLEZA Y CUIDADO PERSONAL',
      h1: 'Productos belleza y cuidado personal',
      intro: 'Los productos belleza y cuidado personal son una categoría adicional disponible bajo solicitud. SunGene suministra principalmente embalaje personalizado, productos hogar y vida cotidiana y productos exterior desde Taiwán y China. Los artículos belleza — sets de regalo, cajas de fragancias, kits de bienestar, envase recargable — pueden coordinarse caso por caso como complemento de nuestra oferta principal cuando sean relevantes para su programa de regalos corporativos.',
      productGroupTitle: 'Grupos de productos belleza (disponibles bajo solicitud)',""")

# ============================================================
# Also kill remaining `2-3 factory directions` / `2–3 家工廠方向` / etc
# ctaDesc broker-y phrasings across 20 (cat, lang) blocks
# ============================================================

cta_subs = [
    # packaging
    ("ctaDesc: 'Send a reference image (or competitor link), target quantity, target country, and any decoration spec. You will get a same-day reply with 2–3 factory directions and the price band to expect.',",
     "ctaDesc: 'Send a reference image (or competitor link), target quantity, target country, and any decoration spec. Same-day reply with a buyer-facing quote and lead time.',"),
    ("ctaDesc: '提供一張參考圖（或競品連結）、目標數量、銷往國家、加工需求。當日回覆——附上 2–3 家工廠方向與你可預期的價格區間。',",
     "ctaDesc: '提供一張參考圖(或競品連結)、目標數量、銷往國家、加工需求。當日回覆——附上買家報價與交期。',"),
    ("ctaDesc: '提供一张参考图（或竞品链接）、目标数量、销往国家、加工需求。当日回覆——附上 2–3 家工厂方向与您可预期的价格区间。',",
     "ctaDesc: '提供一张参考图(或竞品链接)、目标数量、销往国家、加工需求。当日回覆——附上买家报价与交期。',"),
    ("ctaDesc: 'Envoyez une image de référence (ou un lien concurrent), quantité cible, pays de destination et toute spécification de décoration. Réponse jour même avec 2–3 pistes usine et fourchette de prix.',",
     "ctaDesc: \"Envoyez une image de référence (ou lien concurrent), quantité cible, pays de destination et spécification de décoration. Réponse jour même avec un devis acheteur et délai.\","),
    ("ctaDesc: 'Envíe imagen de referencia (o enlace de competidor), cantidad objetivo, país de destino y especificación de decoración. Respuesta el mismo día con 2–3 direcciones de fábrica y rango de precios.',",
     "ctaDesc: 'Envíe imagen de referencia (o enlace de competidor), cantidad objetivo, país de destino y especificación de decoración. Respuesta el mismo día con una cotización para el comprador y plazo.',"),
    # home en
    ("ctaDesc: 'Send a reference image, target quantity, your retail or wholesale channel, and packaging needs. Same-day reply with shortlisted factories and price band.',",
     "ctaDesc: 'Send a reference image, target quantity, retail or wholesale channel, and packaging needs. Same-day reply with a buyer-facing quote and lead time.',"),
    # home zh
    ("ctaDesc: '提供參考圖、目標數量、銷售通路、包裝需求。當日回覆，附篩選好的工廠與價格區間。',",
     "ctaDesc: '提供參考圖、目標數量、銷售通路、包裝需求。當日回覆,附上買家報價與交期。',"),
    # home cn
    ("ctaDesc: '提供参考图、目标数量、销售渠道、包装需求。当日回覆，附筛选好的工厂与价格区间。',",
     "ctaDesc: '提供参考图、目标数量、销售渠道、包装需求。当日回覆,附上买家报价与交期。',"),
    # home fr
    ("ctaDesc: \"Envoyez une image de référence, quantité cible, canal retail ou wholesale et besoins packaging. Réponse le jour même avec usines présélectionnées et fourchette de prix.\",",
     "ctaDesc: \"Envoyez une image de référence, quantité cible, canal retail ou wholesale et besoins packaging. Réponse le jour même avec un devis acheteur et délai.\","),
    # home es
    ("ctaDesc: 'Envíe imagen de referencia, cantidad objetivo, su canal retail o mayorista y necesidades de empaque. Respuesta el mismo día con fábricas preseleccionadas y rango de precios.',",
     "ctaDesc: 'Envíe imagen de referencia, cantidad objetivo, canal retail o mayorista y necesidades de empaque. Respuesta el mismo día con una cotización para el comprador y plazo.',"),
    # garden en — already says "Same-day reply" without factory directions, but check
    # actually garden en ctaDesc is: 'Send a reference image, target quantity, destination climate zone, and any required certifications. Same-day reply.'
    # this is fine — no broker phrasing. Leave alone.
    # garden zh '提供参考图、目标数量、目的地气候带、所需认证。当日回覆。' — fine
    # garden cn — fine
    # garden fr "Envoyez image de référence, quantité, zone climatique de destination et certifications requises. Réponse jour même." — fine
    # garden es 'Envíe imagen de referencia, cantidad objetivo, zona climática de destino y certificaciones requeridas. Respuesta el mismo día.' — fine
    # beauty en 'Send a reference image (or competitor packaging photo), target quantity, capacity / size needed, decoration spec, and your fill product info. Same-day reply.' — fine, but rewrite for beauty deprioritized voice
    ("ctaDesc: 'Send a reference image (or competitor packaging photo), target quantity, capacity / size needed, decoration spec, and your fill product info. Same-day reply.',",
     "ctaDesc: 'Beauty is a secondary category — request availability with your reference image, target quantity, and product info. Same-day reply.',"),
    ("ctaDesc: '提供參考圖（或競品包裝照片）、目標數量、需要的容量／尺寸、加工規格、灌裝產品資訊。當日回覆。',",
     "ctaDesc: '美妝為次要類別 — 提供參考圖、目標數量、產品資訊以詢問可承接性。當日回覆。',"),
    ("ctaDesc: '提供参考图（或竞品包装照片）、目标数量、需要的容量／尺寸、加工规格、灌装产品资讯。当日回覆。',",
     "ctaDesc: '美妆为次要类别 — 提供参考图、目标数量、产品资讯以询问可承接性。当日回覆。',"),
    ("ctaDesc: \"Envoyez une image de référence (ou photo packaging concurrent), quantité cible, capacité / taille nécessaire, spécification décoration et info sur votre produit de remplissage. Réponse jour même.\",",
     "ctaDesc: \"Beauté est une catégorie secondaire — demandez la disponibilité avec votre image de référence, quantité cible et info produit. Réponse jour même.\","),
    ("ctaDesc: 'Envíe una imagen de referencia (o foto del envase de la competencia), cantidad objetivo, capacidad / tamaño requerido, especificación de decoración e info del producto de llenado. Respuesta el mismo día.',",
     "ctaDesc: 'Belleza es una categoría secundaria — solicite disponibilidad con su imagen de referencia, cantidad objetivo e info del producto. Respuesta el mismo día.',"),
]

for old, new in cta_subs:
    if old in src:
        src = src.replace(old, new, 1)
    else:
        print("  ⚠ ctaDesc anchor missing (will skip): " + old[:80])

with io.open(FILE, 'w', encoding='utf-8', newline='\n') as f:
    f.write(src)

print("Wave 12 complete: 4 cats × 5 langs × 6 top fields rewritten + {} ctaDesc subs".format(len(cta_subs)))
