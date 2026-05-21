# Wave 11 patcher: Phase 2 supplier-voice unification across machine + human surfaces
# Files: lib/i18n.ts, lib/business.ts, app/llms.txt/route.ts, app/ai.txt/route.ts,
#        app/[lang]/page.tsx (SCHEMA_TEXT), app/[lang]/about/page.tsx
import io, sys

# Core brand sentence (locked by owner Phase 2 brief):
# EN: "Taiwan-based trading company supplying selected products through
#      manufacturing coordination and export management across Taiwan and China."
CORE = {
    'en': "Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China.",
    'zh': "台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。",
    'cn': "台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。",
    'fr': "Société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine.",
    'es': "Empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China.",
}

# ============================================================
# (A) lib/i18n.ts
# ============================================================

with io.open('lib/i18n.ts', 'r', encoding='utf-8') as f:
    i18n = f.read()

# nav_sourcing 5 langs: drop "Sourcing partner" label, switch to product-led
i18n_subs = [
    # cn nav_sourcing
    ("nav_sourcing: '采购伙伴',", "nav_sourcing: '产品',"),
    # zh nav_sourcing
    ("nav_sourcing: '採購夥伴',", "nav_sourcing: '產品',"),
    # en nav_sourcing
    ("    nav_sourcing: 'Sourcing',\n    nav_resources: 'Resources', nav_recommend: 'Assessment', nav_about: 'About Us'",
     "    nav_sourcing: 'Products',\n    nav_resources: 'Resources', nav_recommend: 'Assessment', nav_about: 'About Us'"),
    # fr nav_sourcing
    ("    nav_sourcing: 'Sourcing',\n    nav_resources: 'Ressources'",
     "    nav_sourcing: 'Produits',\n    nav_resources: 'Ressources'"),
    # es nav_sourcing
    ("    nav_sourcing: 'Sourcing',\n    nav_resources: 'Recursos'",
     "    nav_sourcing: 'Productos',\n    nav_resources: 'Recursos'"),

    # meta_home_title 5 langs
    ("meta_home_title: 'SunGene | 台湾+中国采购 | 客制纸盒礼品包装专长 + 全品类企业礼赠品',",
     "meta_home_title: 'SunGene | 亚洲产品供应与出口整合 | 台湾贸易公司',"),
    ("meta_home_title: 'SunGene | 台灣+中國採購 | 客製紙盒禮品包裝專長 + 全品類企業禮贈品',",
     "meta_home_title: 'SunGene | 亞洲產品供應與出口整合 | 台灣貿易公司',"),
    ("meta_home_title: 'SunGene | Taiwan + China Paper Gift Packaging Sourcing — Mooncake Boxes, Corporate Gifts',",
     "meta_home_title: 'SunGene — Reliable Product Supply from Asia | Taiwan-based Trading Company',"),
    ('meta_home_title: "SunGene | Sourcing emballage cadeau papier Taïwan + Chine — boîtes mooncake, cadeaux corporate",',
     'meta_home_title: "SunGene — Approvisionnement fiable depuis l\'Asie | Société de négoce Taïwan",'),
    ("meta_home_title: 'SunGene | Sourcing embalaje regalo papel Taiwán + China — cajas mooncake, regalos corporativos',",
     "meta_home_title: 'SunGene — Suministro fiable desde Asia | Empresa comercial Taiwán',"),

    # meta_home_desc 5 langs
    ("meta_home_desc: 'SunGene 是台湾+中国双公司采购伙伴。Alibaba 公开可验证的专长是客制纸盒礼品包装(月饼礼盒、品牌礼盒、零售包装、瓦楞纸箱、纸袋)。其他企业礼赠品(毛毯、印制品、服饰、马克杯)通过合作工厂网络采购。自有员工现场 AQL 品检。台湾公司开发票。MOQ USD 1,000。',",
     "meta_home_desc: '台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。专注定制包装、居家生活、户外园艺三大类。自有员工出口前 AQL 品检。最低订单 USD 1,000。',"),
    ("meta_home_desc: 'SunGene 是台灣+中國雙公司採購夥伴。Alibaba 公開可驗證的專長是客製紙盒禮品包裝(月餅禮盒、品牌禮盒、零售包裝、瓦楞紙箱、紙袋)。其他企業禮贈品(毛毯、印製品、服飾、馬克杯)透過合作工廠網絡採購。自有員工現場 AQL 品檢。台灣公司開發票。MOQ USD 1,000。',",
     "meta_home_desc: '台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。專注客製包裝、居家生活、戶外園藝三大類。自有員工出口前 AQL 品檢。最低訂單 USD 1,000。',"),
    ("meta_home_desc: 'Taiwan + China dual-entity sourcing partner. Alibaba-verifiable specialty: custom paper gift packaging (mooncake boxes, gift boxes, retail packaging). Other corporate gifts via vetted factory network. Dedicated in-house QC. Taiwan-registered invoicing. MOQ USD 1,000.',",
     "meta_home_desc: 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Custom packaging, home & living, outdoor. In-house pre-shipment AQL. MOQ USD 1,000.',"),
    ('meta_home_desc: "Partenaire sourcing bi-entité Taïwan + Chine. Spécialité vérifiable sur Alibaba : emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux, emballage retail). Autres cadeaux corporate via réseau d\'usines vérifiées. Personnel QC dédié sur site. Facturation Taïwan. MOQ 1 000 USD.",',
     'meta_home_desc: "Société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Emballage, maison, extérieur. AQL pré-export en interne. MOQ 1 000 USD.",'),
    ("meta_home_desc: 'Partner sourcing bi-entidad Taiwán + China. Especialidad verificable en Alibaba: embalaje regalo papel personalizado (cajas mooncake, cajas regalo, embalaje retail). Otros regalos corporativos vía red de fábricas verificadas. Personal QC dedicado en sitio. Facturación Taiwán. MOQ USD 1.000.',",
     "meta_home_desc: 'Empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Embalaje, hogar, exterior. AQL pre-exportación interno. MOQ USD 1.000.',"),

    # meta_keywords 5 langs (drop forbidden tokens, switch to supplier voice)
    ("meta_keywords: '客制纸盒礼品包装, 月饼礼盒采购, 台湾中国采购伙伴, 双公司结构采购, 企业礼赠品采购, 品牌礼盒代工, 自有员工 AQL 品检, 合作工厂网络采购, Alibaba 高星商家, MOQ 1000 美金',",
     "meta_keywords: '台湾贸易公司, 亚洲产品供应, 制造协调, 出口管理, 定制包装, 居家生活产品, 户外用品采购, 企业礼赠品供应, Alibaba.com 商家, MOQ 1000 美金',"),
    ("meta_keywords: '客製紙盒禮品包裝, 月餅禮盒採購, 台灣中國採購夥伴, 雙公司結構採購, 企業禮贈品採購, 品牌禮盒代工, 自有員工 AQL 品檢, 合作工廠網絡採購, Alibaba 高星商家, MOQ 1000 美金',",
     "meta_keywords: '台灣貿易公司, 亞洲產品供應, 製造協調, 出口管理, 客製包裝, 居家生活產品, 戶外用品採購, 企業禮贈品供應, Alibaba.com 商家, MOQ 1000 美金',"),
    ("meta_keywords: 'custom paper gift packaging, mooncake gift box manufacturer, Taiwan China dual-entity sourcing, corporate gifts sourcing partner, branded merchandise OEM, brand gift box sourcing, retail packaging sourcing, on-site AQL inspection, MOQ 1000 corporate gifts',",
     "meta_keywords: 'Taiwan trading company, Asia product supply, manufacturing coordination, export management, custom packaging Taiwan China, home and living products, outdoor products supply, corporate gifts supplier, Alibaba.com supplier, MOQ 1000 USD',"),
    ('meta_keywords: "sourcing emballage cadeau papier, fabricant boîtes mooncake, sourcing bi-entité Taïwan Chine, partenaire sourcing cadeaux corporate, sourcing boîtes-cadeaux marque, sourcing emballage retail, fournisseur Alibaba emballage, inspection AQL sur site, MOQ 1000 cadeaux corporate",',
     'meta_keywords: "société de négoce Taïwan, approvisionnement Asie, coordination manufacturière, gestion des exports, emballage personnalisé Taïwan Chine, produits maison vie quotidienne, produits extérieurs, cadeaux corporate fournisseur, fournisseur Alibaba.com, MOQ 1000 USD",'),
    ("meta_keywords: 'sourcing embalaje regalo papel, fabricante cajas mooncake, sourcing bi-entidad Taiwán China, partner sourcing regalos corporativos, sourcing cajas regalo marca, sourcing embalaje retail, proveedor Alibaba embalaje, inspección AQL en sitio, MOQ 1000 regalos corporativos',",
     "meta_keywords: 'empresa comercial Taiwán, suministro productos Asia, coordinación fabricación, gestión exportación, embalaje personalizado Taiwán China, productos hogar vida cotidiana, productos exterior, regalos corporativos proveedor, proveedor Alibaba.com, MOQ 1000 USD',"),
]

for old, new in i18n_subs:
    assert old in i18n, "i18n.ts anchor missing: " + old[:80]
    i18n = i18n.replace(old, new, 1)

with io.open('lib/i18n.ts', 'w', encoding='utf-8', newline='\n') as f:
    f.write(i18n)
print("lib/i18n.ts: {} substitutions".format(len(i18n_subs)))

# ============================================================
# (B) app/ai.txt/route.ts — single-line notes block
# ============================================================

with io.open('app/ai.txt/route.ts', 'r', encoding='utf-8') as f:
    ai_txt = f.read()

ai_old = "`notes: SunGene is a Taiwan + China dual-entity sourcing partner. Our Alibaba-verifiable specialty is custom paper gift packaging (mooncake boxes, gift boxes, retail packaging, corrugated cartons, paper bags). For other corporate gifts (blankets, apparel, drinkware, accessories, stationery, branded merchandise), we source through our vetted factory network. Dedicated in-house QC staff conduct on-site pre-shipment AQL inspection at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922). MOQ USD 1,000. Public Alibaba.com supplier storefront 3+ years: momas.en.alibaba.com.`,"
ai_new = "`notes: SunGene is a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging, home & living, outdoor products. Pre-shipment AQL inspection by in-house SunGene staff at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922). MOQ USD 1,000. Public Alibaba.com supplier storefront 3+ years: momas.en.alibaba.com.`,"
assert ai_old in ai_txt, "ai.txt anchor not found"
ai_txt = ai_txt.replace(ai_old, ai_new, 1)
with io.open('app/ai.txt/route.ts', 'w', encoding='utf-8', newline='\n') as f:
    f.write(ai_txt)
print("app/ai.txt/route.ts: 1 substitution")

# ============================================================
# (C) app/llms.txt/route.ts — full body rewrite
# ============================================================

with io.open('app/llms.txt/route.ts', 'r', encoding='utf-8') as f:
    llms = f.read()

llms_old_header = "# SunGene Co., LTD. — Taiwan + China Paper Gift Packaging Sourcing Partner"
llms_new_header = "# SunGene Co., LTD. — Taiwan-based Trading Company | Reliable Product Supply from Asia"
assert llms_old_header in llms
llms = llms.replace(llms_old_header, llms_new_header, 1)

llms_old_oneline = """## What SunGene Is (one line)
SunGene is a Taiwan + China dual-entity sourcing partner. Our verified Alibaba.com storefront catalog focuses on custom paper gift packaging — mooncake boxes, gift boxes, retail packaging, corrugated cartons, paper bags and tubes. For everything else corporate buyers need — blankets, apparel, drinkware, accessories, stationery, branded merchandise, kitchenware — we source through our vetted factory network across Taiwan and Mainland China. Dedicated SunGene staff conduct on-site QC at partner factories. Taiwan-registered invoicing entity for clean banking trail and dispute resolution."""

llms_new_oneline = """## What SunGene Is (one line)
SunGene is a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging (mooncake boxes, premium gift boxes, retail packaging, corrugated cartons, paper bags); home & living (drinkware, ceramics, blankets, branded merchandise); outdoor (event swag, umbrellas, branded headwear, cooler bags). SunGene holds the commercial relationship: quote, production schedule, AQL inspection, export documentation, and post-shipment accountability all flow through one Taiwan-registered counterparty."""
assert llms_old_oneline in llms
llms = llms.replace(llms_old_oneline, llms_new_oneline, 1)

llms_old_model = """## Business Model: Trader/Principal, Not Commission Agent
- We purchase goods from the factory at FOB or EXW (we own the goods)
- We resell to the buyer with our margin disclosed on a separate line
- The underlying FOB or EXW factory price is communicated on request
- Transaction sits between buyer and one Taiwan-registered company
- Because goods sit on our balance sheet, rejecting sub-spec product before shipment is our own financial decision, not a courtesy"""

llms_new_model = """## Business Model: Taiwan-based Trading Company
- SunGene is the seller of record on the transaction. The buyer purchases products from SunGene, not from an introduced factory.
- Single buyer-facing quote. Internal cost structure is private (not paraphrased on public copy); cost breakdown handled case-by-case in commercial conversations.
- Transaction sits cleanly between buyer and one Taiwan-registered counterparty (clean banking trail, Taiwan jurisdiction for dispute resolution).
- Rejecting sub-spec product before shipment is SunGene's own decision — the buyer's protection is structural, not a favour."""
assert llms_old_model in llms
llms = llms.replace(llms_old_model, llms_new_model, 1)

llms_old_terms = """## Commercial Terms
- Minimum order: USD 1,000 per shipment
- Payment: 30% deposit / 70% before shipment (default)
- Payment recipient: Taiwan entity
- Quote structure: resale price + underlying FOB/EXW (on request) + SunGene margin disclosed
- Currency: USD primary
- Incoterms: typically FOB Xiamen / FOB Keelung; EXW or CIF available"""

llms_new_terms = """## Commercial Terms
- Minimum order: USD 1,000 per shipment
- Payment: 30% deposit / 70% before shipment (default)
- Payment recipient: Taiwan entity
- Quote: single buyer-facing price covering production, AQL inspection, and export documentation. Cost-breakdown questions handled case-by-case off the public site.
- Currency: USD primary
- Incoterms: typically FOB or EXW; CIF available"""
assert llms_old_terms in llms
llms = llms.replace(llms_old_terms, llms_new_terms, 1)

llms_old_workflow_step3 = "3. **Transparent quote** — single price including SunGene margin, with underlying factory price disclosed on request, plus lead time and payment terms"
llms_new_workflow_step3 = "3. **Quote** — single buyer-facing price, lead time, payment terms"
assert llms_old_workflow_step3 in llms
llms = llms.replace(llms_old_workflow_step3, llms_new_workflow_step3, 1)

# Update the category scope intro
llms_old_cat_intro = """### Sourced through our vetted factory network
6. **Branded soft goods** — flannel, sherpa, lamb-wool blankets, throws, textile gift sets
7. **Branded apparel & accessories** — caps, beanies, t-shirts, bags
8. **Drinkware & tabletop** — mugs, tumblers, bottles, ceramics
9. **Stationery & desk gifts** — notebooks, pens, leather goods
10. **Other branded merchandise on case-by-case basis** through our long-term factory relationships"""

llms_new_cat_intro = """### Home & Living / Outdoor (selected manufacturing partners)
6. **Drinkware & tabletop** — mugs, tumblers, bottles, ceramics, kitchen accessories
7. **Branded soft goods** — flannel, sherpa, lamb-wool blankets, throws, textile gift sets
8. **Branded apparel & accessories** — caps, beanies, t-shirts, bags
9. **Outdoor event swag** — picnic blankets, sunhats and caps, cooler bags, branded umbrellas
10. **Other corporate gifts** — stationery, notebooks, leather goods (case-by-case)"""
assert llms_old_cat_intro in llms
llms = llms.replace(llms_old_cat_intro, llms_new_cat_intro, 1)

# Update "Last Updated" tag
llms = llms.replace("## Last Updated\n2026-05-20 (Pinion Phase 1)",
                    "## Last Updated\n2026-05-21 (Pinion Phase 2 — Taiwan-based trading company voice)")

with io.open('app/llms.txt/route.ts', 'w', encoding='utf-8', newline='\n') as f:
    f.write(llms)
print("app/llms.txt/route.ts: 6 substitutions")

# ============================================================
# (D) lib/business.ts
# ============================================================

with io.open('lib/business.ts', 'r', encoding='utf-8') as f:
    biz = f.read()

biz_subs = [
    # BRAND.description
    ("description: 'SunGene is a Taiwan + China dual-entity sourcing partner. Our Alibaba-verifiable specialty is custom paper gift packaging — gift boxes, mooncake boxes, retail packaging, corrugated cartons, paper bags. For other corporate gift categories (blankets, apparel, drinkware, accessories), we source through our vetted factory network across both markets. Dedicated SunGene QC staff at the China office conduct on-site pre-shipment AQL inspection. Taiwan-registered invoicing entity (Tax ID 94111922).',",
     "description: 'SunGene is a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging (mooncake boxes, premium gift boxes, retail packaging, corrugated cartons, paper bags), home & living (drinkware, ceramics, blankets, branded merchandise), and outdoor products (event swag, branded headwear, cooler bags). Pre-shipment AQL inspection by in-house SunGene staff at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922).',"),

    # knowsAbout list — Phase 2 supplier voice
    ("""  knowsAbout: [
    'Custom Paper Gift Packaging',
    'Mooncake Gift Boxes', 'Premium Rigid Gift Boxes', 'Corrugated Mailer Boxes',
    'Paper Bags & Tubes', 'Book & Lookbook Printing',
    'Corporate Gift Sourcing', 'Branded Blankets & Soft Goods',
    'Promotional Products Sourcing', 'Branded Merchandise OEM',
    'Taiwan + China Dual-Entity Sourcing', 'Multi-Factory Partner Network',
    'On-site AQL Inspection', 'Dedicated In-house QC',
    'Taiwan-registered Invoicing', 'Principal Trader Model',
  ],""",
     """  knowsAbout: [
    'Custom Packaging Supply', 'Mooncake Gift Boxes', 'Premium Rigid Gift Boxes',
    'Corrugated Mailer Boxes', 'Paper Bags & Tubes', 'Book & Lookbook Printing',
    'Home & Living Products Supply', 'Drinkware & Ceramics',
    'Branded Blankets & Soft Goods',
    'Outdoor Products Supply', 'Branded Headwear & Caps',
    'Event Swag & Cooler Bags',
    'Manufacturing Coordination', 'Export Management',
    'Taiwan-based Trading Company', 'Pre-shipment AQL Inspection',
    'Taiwan-registered Invoicing',
  ],"""),

    # slogan
    ("slogan: 'Taiwan + China sourcing window — paper gift packaging specialist with full corporate gifts catalog through our vetted factory network.',",
     "slogan: 'Reliable Product Supply from Asia — Taiwan-based trading company across Taiwan and China.',"),

    # award (drop "Dedicated in-house QC staff" lead-in as award framing; rephrase)
    ("""    award: [
      '3+ years operating public Alibaba.com supplier storefront (momas.en.alibaba.com)',
      'Dual-entity Taiwan + China registration',
      'Dedicated in-house QC staff (not subcontracted)',
    ],""",
     """    award: [
      '3+ years operating public Alibaba.com supplier storefront (momas.en.alibaba.com)',
      'Taiwan + China dual-entity registration (Taiwan-registered invoicing)',
      'In-house pre-shipment AQL inspection (not subcontracted)',
    ],"""),

    # makesOffer — rename to Phase 2 capability names
    ("""    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gift Packaging & Boxes Sourcing', url: pageUrl(lang, '/sourcing/packaging') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drinkware & Tabletop Gift Sourcing', url: pageUrl(lang, '/sourcing/home') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Event Swag Sourcing', url: pageUrl(lang, '/sourcing/garden') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beauty & Wellness Gift Sets Sourcing', url: pageUrl(lang, '/sourcing/beauty') } },
    ],""",
     """    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Packaging Supply', url: pageUrl(lang, '/sourcing/packaging') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home & Living Products Supply', url: pageUrl(lang, '/sourcing/home') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Products Supply', url: pageUrl(lang, '/sourcing/garden') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beauty & Wellness Gift Sets', url: pageUrl(lang, '/sourcing/beauty') } },
    ],"""),

    # hasCredential[1] - drop "Dual-entity Taiwan + Mainland China registration" name keep but rephrase
    ("""        name: 'Dual-entity Taiwan + Mainland China registration',
        credentialCategory: 'Business Registration',
        about: 'Registered trading entities: SunGene Co., LTD. (Taiwan, Tax ID 94111922) and a Mainland China office in Xiamen (factory liaison + dedicated QC staff base; not a production facility).',""",
     """        name: 'Taiwan + China registered entities',
        credentialCategory: 'Business Registration',
        about: 'Registered trading entities: SunGene Co., LTD. (Taiwan, Tax ID 94111922) and a Mainland China office (factory liaison + dedicated QC staff base; not a production facility).',"""),

    # hasOfferCatalog name
    ("name: 'Sourcing Scope — Custom Paper Gift Packaging + Corporate Gifts via Factory Network',",
     "name: 'Product Supply Scope — Custom Packaging, Home & Living, Outdoor',"),

    # hasOfferCatalog item descriptions
    ("{ '@type': 'OfferCatalog', name: 'Gift Packaging & Boxes', url: pageUrl(lang, '/sourcing/packaging'), description: 'Custom mooncake gift boxes, premium rigid gift boxes with magnetic closure, retail packaging, corrugated mailer boxes, paper bags and tubes. Our verifiable specialty on Alibaba.com.' },",
     "{ '@type': 'OfferCatalog', name: 'Custom Packaging', url: pageUrl(lang, '/sourcing/packaging'), description: 'Custom mooncake gift boxes, premium rigid gift boxes, retail packaging, corrugated mailer boxes, paper bags and tubes. Coordinated production across Taiwan and China; public Alibaba.com storefront catalog.' },"),
    ("{ '@type': 'OfferCatalog', name: 'Drinkware & Tabletop Gifts', url: pageUrl(lang, '/sourcing/home'), description: 'Mugs, tumblers, water bottles, ceramic gift sets, kitchen accessories for corporate gifting and event swag — sourced through our vetted factory network.' },",
     "{ '@type': 'OfferCatalog', name: 'Home & Living', url: pageUrl(lang, '/sourcing/home'), description: 'Drinkware, ceramic gift sets, kitchen accessories, branded blankets and soft goods supplied through selected manufacturing partners across Taiwan and China.' },"),
    ("{ '@type': 'OfferCatalog', name: 'Outdoor Event Swag', url: pageUrl(lang, '/sourcing/garden'), description: 'Picnic blankets, sunhats and caps, cooler bags, branded umbrellas, outdoor accessories for trade shows and corporate retreats.' },",
     "{ '@type': 'OfferCatalog', name: 'Outdoor Products', url: pageUrl(lang, '/sourcing/garden'), description: 'Picnic blankets, sunhats and caps, cooler bags, branded umbrellas, outdoor event swag for trade shows and corporate retreats.' },"),
    ("{ '@type': 'OfferCatalog', name: 'Beauty & Wellness Gift Sets', url: pageUrl(lang, '/sourcing/beauty'), description: 'Cosmetic sample kits, fragrance gift boxes, beauty gift sets, wellness kits, refillable packaging for corporate self-care gift programs.' },",
     "{ '@type': 'OfferCatalog', name: 'Beauty & Wellness Gift Sets', url: pageUrl(lang, '/sourcing/beauty'), description: 'Beauty and wellness gift sets, fragrance gift boxes, sample kits — secondary category (Phase 2 deprioritization). Available on request.' },"),

    # nav schema names (siteNavigationElement)
    ("{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing'), name: 'Sourcing' },",
     "{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing'), name: 'Products' },"),
    ("{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing/packaging'), name: 'Packaging Sourcing' },",
     "{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing/packaging'), name: 'Custom Packaging' },"),
    ("{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing/home'), name: 'Home Goods Sourcing' },",
     "{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing/home'), name: 'Home & Living' },"),
    ("{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing/garden'), name: 'Garden Products Sourcing' },",
     "{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing/garden'), name: 'Outdoor Products' },"),
    ("{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing/beauty'), name: 'Beauty Products Sourcing' },",
     "{ '@type': 'WebPage', url: pageUrl(lang, '/sourcing/beauty'), name: 'Beauty & Wellness' },"),

    # buildServiceSchemas — 3 services
    ("""      id: 'gift-packaging',
      name: 'Custom Paper Gift Packaging Sourcing & OEM Coordination',
      description: 'Custom-spec gift packaging from our network of vetted paper factories: mooncake boxes, premium rigid gift boxes with magnetic closure, foil/UV/embossing finishes, corrugated mailer boxes, paper bags and tubes. Pantone color matching, structural sample iteration, and tooling coordination handled end-to-end.',
      serviceType: 'Paper Packaging Sourcing',""",
     """      id: 'gift-packaging',
      name: 'Custom Packaging Supply',
      description: 'Custom-spec packaging supplied through selected manufacturing partners across Taiwan and China: mooncake boxes, premium rigid gift boxes with magnetic closure, foil/UV/embossing finishes, corrugated mailer boxes, paper bags and tubes. Pantone color matching, structural sample iteration, and tooling coordination handled end-to-end by SunGene.',
      serviceType: 'Packaging Supply',"""),
    ("""      id: 'corporate-gifts',
      name: 'Multi-Category Corporate Gifts Sourcing via Factory Network',
      description: 'Corporate gift program sourcing across blankets, apparel and accessories, drinkware and tabletop, stationery, and branded merchandise — sourced through our vetted Taiwan + China factory network. End-to-end RFQ, sample, production, AQL inspection, and consolidated shipping. MOQ from USD 1,000.',
      serviceType: 'Corporate Gifts Sourcing',""",
     """      id: 'corporate-gifts',
      name: 'Home & Living + Outdoor Products Supply',
      description: 'Home & living products (drinkware, ceramics, blankets, branded merchandise) and outdoor products (event swag, branded headwear, cooler bags) supplied through selected manufacturing partners across Taiwan and China. End-to-end RFQ, sample, production, pre-shipment AQL inspection, and consolidated shipping. MOQ from USD 1,000.',
      serviceType: 'Product Supply',"""),
    ("""      id: 'aql-qc',
      name: 'On-site AQL 2.5 Inspection & Pre-shipment QC by In-house Staff',
      description: 'Dedicated SunGene QC personnel based at the China office travel to partner factories for on-site pre-shipment AQL 2.5 sampling — 200-unit sample per 5,000-unit order with photo + video documentation. Major defects worked back with the factory same-day before final payment release. Not subcontracted to third-party inspection firms.',
      serviceType: 'Quality Control',""",
     """      id: 'aql-qc',
      name: 'Pre-shipment AQL Inspection (In-house)',
      description: 'In-house SunGene staff travel to partner factories for on-site pre-shipment AQL 2.5 sampling — 200-unit sample per 5,000-unit order with photo + video documentation. Major defects worked back with the factory same-day before final payment release. Not subcontracted to third-party inspection firms. Quality consistency is part of every product supply, not a standalone service.',
      serviceType: 'Quality Coordination',"""),
]

for old, new in biz_subs:
    assert old in biz, "business.ts anchor missing: " + old[:80]
    biz = biz.replace(old, new, 1)

with io.open('lib/business.ts', 'w', encoding='utf-8', newline='\n') as f:
    f.write(biz)
print("lib/business.ts: {} substitutions".format(len(biz_subs)))

# ============================================================
# (E) app/[lang]/page.tsx — SCHEMA_TEXT 5 langs
# ============================================================

with io.open('app/[lang]/page.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

page_subs = [
    ("    listName: 'SunGene — Taiwan + China paper gift packaging sourcing, corporate gifts via factory network',",
     "    listName: 'SunGene — Reliable Product Supply from Asia | Taiwan-based Trading Company',"),
    ("    listDesc: 'Custom paper gift packaging (mooncake boxes, brand gift boxes, retail packaging) sourced direct from vetted Taiwan + Mainland China factories. Other corporate gifts via our vetted factory network. On-site QC, factory price + margin shown separately on every quote.',",
     "    listDesc: 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Custom packaging, home & living, outdoor. Pre-shipment AQL by in-house staff. MOQ USD 1,000.',"),

    ("    listName: 'SunGene｜台灣 + 中國 紙盒禮品包裝採購｜企業禮贈品透過合作工廠網絡',",
     "    listName: 'SunGene｜亞洲產品供應與出口整合｜台灣貿易公司',"),
    ("    listDesc: '客製紙盒禮品包裝(月餅禮盒、品牌禮盒、零售包裝)直接從台灣與中國大陸審查過的工廠採購。其他企業禮贈品透過合作工廠網絡採購。團隊親自驗貨,報價單上工廠價與我方利潤分開列出。',",
     "    listDesc: '台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。客製包裝、居家生活、戶外園藝三大類。自有員工出口前 AQL 品檢。最低訂單 USD 1,000。',"),

    ("    listName: 'SunGene｜台湾 + 中国 纸盒礼品包装采购｜企业礼赠品通过合作工厂网络',",
     "    listName: 'SunGene｜亚洲产品供应与出口整合｜台湾贸易公司',"),
    ("    listDesc: '定制纸盒礼品包装(月饼礼盒、品牌礼盒、零售包装)直接从台湾与中国大陆核查过的工厂采购。其他企业礼赠品通过合作工厂网络采购。团队亲自验货,报价单上工厂价与我方利润分开列出。',",
     "    listDesc: '台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。定制包装、居家生活、户外园艺三大类。自有员工出口前 AQL 品检。最低订单 USD 1,000。',"),

    ('    listName: "SunGene | Sourcing emballage cadeau papier Taïwan + Chine, cadeaux corporate via réseau d\'usines partenaires",',
     '    listName: "SunGene | Approvisionnement fiable depuis l\'Asie | Société de négoce Taïwan",'),
    ('    listDesc: "Emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux de marque, emballage retail) sourcé directement chez des usines Taïwan + Chine continentale vérifiées. Autres cadeaux corporate via notre réseau d\'usines partenaires. Contrôle qualité sur place, prix usine et marge affichés séparément sur chaque devis.",',
     '    listDesc: "Société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Emballage, maison & vie quotidienne, extérieur. AQL pré-export en interne. MOQ 1 000 USD.",'),

    ("    listName: 'SunGene | Sourcing embalaje regalo papel Taiwán + China, regalos corporativos vía red de fábricas asociadas',",
     "    listName: 'SunGene | Suministro fiable desde Asia | Empresa comercial Taiwán',"),
    ("    listDesc: 'Embalaje regalo papel personalizado (cajas mooncake, cajas regalo de marca, embalaje retail) abastecido directamente de fábricas Taiwán + China continental verificadas. Otros regalos corporativos vía nuestra red de fábricas asociadas. QC en sitio, precio de fábrica y nuestra margen mostrados por separado en cada cotización.',",
     "    listDesc: 'Empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Embalaje, hogar y vida cotidiana, exterior. AQL pre-exportación interno. MOQ USD 1.000.',"),
]

for old, new in page_subs:
    assert old in page, "page.tsx SCHEMA_TEXT anchor missing: " + old[:80]
    page = page.replace(old, new, 1)

with io.open('app/[lang]/page.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(page)
print("app/[lang]/page.tsx: {} substitutions (SCHEMA_TEXT 5 langs × 2 fields)".format(len(page_subs)))

# ============================================================
# (F) app/[lang]/about/page.tsx — 5 langs full content rewrite
# ============================================================

with io.open('app/[lang]/about/page.tsx', 'r', encoding='utf-8') as f:
    about = f.read()

# Metadata titles + descriptions + keywords (5 langs)
about_meta_subs = [
    ("    en: 'About SunGene — Taiwan + China paper gift packaging sourcing',",
     "    en: 'About SunGene — Taiwan-based Trading Company | Reliable Product Supply from Asia',"),
    ("    cn: '关于 SunGene | 台湾+中国客制纸盒礼品包装采购',",
     "    cn: '关于 SunGene | 台湾贸易公司 | 亚洲产品供应与出口整合',"),
    ("    zh: '關於 SunGene | 台灣+中國客製紙盒禮品包裝採購',",
     "    zh: '關於 SunGene | 台灣貿易公司 | 亞洲產品供應與出口整合',"),
    ("    fr: 'À propos SunGene — sourcing emballage cadeau papier Taïwan + Chine',",
     "    fr: \"À propos SunGene — Société de négoce Taïwan | Approvisionnement depuis l'Asie\","),
    ("    es: 'Acerca de SunGene — sourcing embalaje regalo papel Taiwán + China',",
     "    es: 'Acerca de SunGene — Empresa comercial Taiwán | Suministro desde Asia',"),

    # descriptions
    ("    en: 'Taiwan + China dual-entity sourcing partner. Alibaba-verifiable specialty: custom paper gift packaging (mooncake boxes, gift boxes, retail packaging). Other corporate gifts via vetted factory network. Dedicated in-house QC on-site at partner factories.',",
     "    en: '" + CORE['en'] + " Custom packaging, home & living, outdoor. Pre-shipment AQL by in-house staff. MOQ USD 1,000.',"),
    ("    cn: 'SunGene 是台湾+中国双公司采购伙伴。Alibaba 公开可验证的专长是定制纸盒礼品包装(月饼礼盒、品牌礼盒、零售包装)。其他企业礼赠品通过合作工厂网络采购。自有员工亲自到合作工厂做 AQL 品检。',",
     "    cn: '" + CORE['cn'] + " 三大类产品:定制包装、居家生活、户外。自有员工出口前 AQL 品检。最低订单 USD 1,000。',"),
    ("    zh: 'SunGene 是台灣+中國雙公司採購夥伴。Alibaba 公開可驗證的專長是客製紙盒禮品包裝(月餅禮盒、品牌禮盒、零售包裝)。其他企業禮贈品透過合作工廠網絡採購。自有員工親自到合作工廠做 AQL 品檢。',",
     "    zh: '" + CORE['zh'] + " 三大類產品:客製包裝、居家生活、戶外。自有員工出口前 AQL 品檢。最低訂單 USD 1,000。',"),
    ('    fr: "Partenaire sourcing bi-entité Taïwan + Chine. Spécialité vérifiable sur Alibaba : emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux, emballage retail). Autres cadeaux corporate via réseau d\'usines vérifiées. Personnel QC dédié sur site chez usines partenaires.",',
     '    fr: "' + CORE['fr'] + ' Trois domaines : emballage personnalisé, maison & vie quotidienne, extérieur. AQL pré-export en interne. MOQ 1 000 USD.",'),
    ("    es: 'Partner sourcing bi-entidad Taiwán + China. Especialidad verificable en Alibaba: embalaje regalo papel personalizado (cajas mooncake, cajas regalo, embalaje retail). Otros regalos corporativos vía red de fábricas verificadas. Personal QC dedicado en sitio en fábricas partner.',",
     "    es: '" + CORE['es'] + " Tres áreas: embalaje personalizado, hogar y vida cotidiana, exterior. AQL pre-exportación interno. MOQ USD 1.000.',"),

    # keywords
    ("    keywords: ['SunGene', 'Taiwan China dual-entity sourcing', 'custom paper gift packaging', 'mooncake gift box manufacturer', 'corporate gifts sourcing partner', 'branded merchandise OEM', 'Alibaba verifiable supplier', 'on-site AQL inspection', 'principal trader model', 'dedicated in-house QC'],",
     "    keywords: ['SunGene', 'Taiwan-based trading company', 'Asia product supply', 'manufacturing coordination', 'export management', 'custom packaging supply', 'home and living products', 'outdoor products supply', 'pre-shipment AQL inspection', 'Alibaba.com supplier'],"),
]
for old, new in about_meta_subs:
    assert old in about, "about.tsx metadata anchor missing: " + old[:80]
    about = about.replace(old, new, 1)

# Content blocks: 5 langs full rewrite (kicker preserved; title/intro/mission/stats/strengthsTitle/strengths/cta)

about_old_en = """    en: {
      kicker: 'ABOUT SUNGENE',
      title: 'Sourcing built for verifiable quality, not promises',
      intro: 'SunGene is a Taiwan + China dual-entity sourcing partner. Our Alibaba-verifiable specialty is custom paper gift packaging — mooncake boxes, brand gift boxes, retail packaging, corrugated cartons, paper bags and tubes. For everything else corporate buyers need (blankets, apparel, drinkware, accessories, stationery, branded merchandise), we source through our vetted Taiwan + China factory network. Our team combines B2B export sales, factory liaison, and dedicated in-house QC operations.',
      mission: 'We act as principal — we buy the goods, then resell — which puts the goods on our balance sheet. That single accounting fact means rejecting a sub-spec batch is our own financial decision, not a courtesy we extend to you. Quality moves from "we will try" to "we have to" — backed by dedicated SunGene QC staff on-site at partner factories.',
      stats: [
        { value: 'TW + CN', label: 'Dual-entity registration' },
        { value: '3+ years', label: 'Alibaba.com storefront' },
        { value: 'USD 1,000', label: 'Order entry' },
        { value: 'On every quote', label: 'Margin shown separately' },
      ],
      strengthsTitle: 'What sets SunGene apart',
      strengths: [
        { title: 'Factory price + our margin, shown separately', desc: 'Every quote lists the factory invoice line (FOB or EXW) and our margin on a second line. The underlying factory price is available on request before order confirmation. One number to compare, full breakdown when you need it.' },
        { title: 'Dedicated in-house QC, not subcontracted', desc: 'Inspection is performed by full-time SunGene QC staff based at our China office — not subcontracted to third-party agents (QIMA / Bureau Veritas / TÜV etc.) who never set foot in the factory. AQL 2.5 sampling pre-shipment with photo + video documentation for every order.' },
        { title: 'Paper gift packaging specialist + corporate gifts factory network', desc: 'Custom paper gift packaging (mooncake boxes, brand gift boxes, retail packaging, corrugated cartons, paper bags) is our Alibaba-verifiable specialty. For other corporate gifts categories — blankets, apparel, drinkware, stationery, branded merchandise — we source through long-term partner factories rather than re-discovering suppliers each order.' },
      ],
      ctaTitle: 'Start the conversation',
      ctaDesc: 'Orders from USD 1,000 per shipment. Send us a reference image, target quantity, and destination market. You\\'ll get a same-day reply with two or three shortlisted factories and the price band to expect.',
      ctaBtn: 'Request a quote',
    },"""

about_new_en = """    en: {
      kicker: 'ABOUT SUNGENE',
      title: 'A Taiwan-based trading company built around delivery reliability',
      intro: 'SunGene is a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. We work with selected manufacturing partners in Taiwan and China to provide stable communication, production follow-up, and quality consistency for overseas customers.',
      mission: 'We hold the commercial relationship with our manufacturing partners. The quote, the production schedule, the AQL inspection, the export documentation, and any post-shipment claim — they all flow through SunGene. You work with one accountable counterparty across both markets, not a chain of factory introductions.',
      stats: [
        { value: 'TW + CN', label: 'Registered entities' },
        { value: '3 yr+', label: 'Alibaba.com storefront' },
        { value: 'USD 1,000', label: 'Starting order' },
        { value: 'In-house', label: 'Quality team' },
      ],
      strengthsTitle: 'What SunGene delivers',
      strengths: [
        { title: 'Product supply', desc: 'We supply selected products from Taiwan and China. You buy products from us, not introductions to factories. One buyer-facing quote, one accountable counterparty across both markets.' },
        { title: 'Manufacturing coordination', desc: 'We coordinate production schedules, material specifications, and lead times with selected manufacturing partners in Taiwan and China. Pantone matching, sample iteration, and tooling handled end-to-end.' },
        { title: 'Quality consistency', desc: 'SunGene staff visit partner factories for pre-shipment AQL 2.5 inspection. Photo and video documentation with every shipment. Not subcontracted to third-party agents.' },
        { title: 'Export management', desc: 'Documentation, Incoterms, voltage compliance, payment routing through the Taiwan entity, and forwarder coordination handled by our Taiwan and China teams.' },
      ],
      ctaTitle: 'Start the conversation',
      ctaDesc: 'Orders from USD 1,000 per shipment. Send us a reference image, target quantity, and destination market. Same-day reply with a buyer-facing quote.',
      ctaBtn: 'Request a quote',
    },"""

assert about_old_en in about, "about EN block anchor missing"
about = about.replace(about_old_en, about_new_en, 1)

# zh-Hans (cn) block
about_old_cn = """    cn: {
      kicker: '关于 SunGene',
      title: '建立在可验证品质上的采购,不靠承诺',
      intro: 'SunGene 是台湾+中国双公司结构的采购伙伴。Alibaba 公开可验证的专长是定制纸盒礼品包装——月饼礼盒、品牌礼盒、零售包装、瓦楞纸箱、纸袋与纸管。其他企业礼赠品(毛毯、印制服饰、马克杯、配件、文具、品牌商品),通过我们合作的台湾+中国工厂网络采购。团队结合 B2B 出口业务、工厂联络、与自有员工品检的实战经验。',
      mission: '我们以 principal 身分买断再转售,货走我们自己的帐。这一个会计事实就改变了诱因结构——挡下不合规的货,是我们自己的财务决定。品质从「我们尽量」变成「我们不得不」——背后有 SunGene 自有员工亲自到合作工厂做出货前 AQL 品检。',
      stats: [
        { value: '台湾＋中国', label: '双公司登记' },
        { value: '已认证', label: 'Alibaba.com 供应商' },
        { value: 'USD 1,000', label: '订单起接' },
        { value: '報價內', label: '利润分行列出' },
      ],
      strengthsTitle: 'SunGene 与众不同之处',
      strengths: [
        { title: '工厂价与我方利润分开列', desc: '每份报价单会把工厂发票线(FOB 或 EXW)与我方利润分两行列出。下单前您可要求看到工厂发票。一个数字便于比较,需要时随时拆解。' },
        { title: '团队亲自验货', desc: '验货由 SunGene 团队亲自执行——不外包给从没踏进工厂的第三方代理。台湾工厂直接到场验货；中国工厂出货先进我们合作货代的仓库，由我们出口前验货放行。每批附验货影片与照片。' },
        { title: '纸盒礼品包装专家 + 企业礼赠品合作工厂网络', desc: '客制纸盒礼品包装(月饼礼盒、品牌礼盒、零售包装、瓦楞纸箱、纸袋)是我们 Alibaba 公开可验证的专长。其他企业礼赠品类别 —— 毛毯、服饰、马克杯、文具、印制商品 —— 通过长期合作工厂采购，而不是每次订单从零找供应商。' },
      ],
      ctaTitle: '开始对话',
      ctaDesc: '订单 USD 1,000 起接。给我们一张参考图、目标数量、销往的市场。当个上班日回覆——附上 2–3 家筛选好的工厂，以及您可预期的价格区间。',
      ctaBtn: '索取报价',
    },"""

about_new_cn = """    cn: {
      kicker: '关于 SunGene',
      title: '一家以准时交货为核心的台湾贸易公司',
      intro: 'SunGene 是一家台湾贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。我们与台湾和中国的精选制造伙伴合作,为海外客户提供稳定的沟通、生产跟催与品质一致性。',
      mission: '我们承担与制造伙伴的商务关系。报价、生产排程、AQL 品检、出口文件、出货后的任何 claim,全部经过 SunGene 这一个窗口。您面对的是一个跨两地市场的对口,不是一连串工厂介绍。',
      stats: [
        { value: '台湾 + 中国', label: '双公司登记' },
        { value: '3 年+', label: 'Alibaba.com 商家' },
        { value: 'USD 1,000', label: '订单起接' },
        { value: '自有', label: '品质团队' },
      ],
      strengthsTitle: 'SunGene 能交付什么',
      strengths: [
        { title: '产品供应', desc: '我们供应台湾与中国的精选产品。您跟我们买产品,不是工厂介绍。一份买家报价,跨两地市场一个对口窗口。' },
        { title: '生产协调', desc: '我们与台湾与中国的精选制造伙伴协调生产排程、规格与交期。Pantone 色号、样品迭代、刀模制作全程处理。' },
        { title: '品质一致性', desc: 'SunGene 员工亲自到合作工厂执行 AQL 2.5 出口前品检。每批附验货影片与照片。不外包给第三方代理。' },
        { title: '出口管理', desc: '文件、Incoterms、电压相容、贷款汇入台湾公司、货代协调由我们台湾与中国团队处理。' },
      ],
      ctaTitle: '开始对话',
      ctaDesc: '订单 USD 1,000 起接。给我们一张参考图、目标数量、销往的市场。当个上班日回覆——附上买家报价。',
      ctaBtn: '索取报价',
    },"""

assert about_old_cn in about, "about cn block anchor missing"
about = about.replace(about_old_cn, about_new_cn, 1)

# zh-Hant (zh) block
about_old_zh = """    zh: {
      kicker: '關於 SunGene',
      title: '建立在可驗證品質上的採購,不靠承諾',
      intro: 'SunGene 是台灣+中國雙公司結構的採購夥伴。Alibaba 公開可驗證的專長是客製紙盒禮品包裝——月餅禮盒、品牌禮盒、零售包裝、瓦楞紙箱、紙袋與紙管。其他企業禮贈品(毛毯、印製服飾、馬克杯、配件、文具、品牌商品),透過我們合作的台灣+中國工廠網絡採購。團隊結合 B2B 出口業務、工廠聯絡、與自有員工品檢的實戰經驗。',
      mission: '我們以 principal 身分買斷再轉售,貨走我們自己的帳。這一個會計事實就改變了誘因結構——擋下不合規的貨,是我們自己的財務決定。品質從「我們盡量」變成「我們不得不」——背後有 SunGene 自有員工親自到合作工廠做出貨前 AQL 品檢。',
      stats: [
        { value: '台灣＋中國', label: '雙公司登記' },
        { value: '已認證', label: 'Alibaba.com 供應商' },
        { value: 'USD 1,000', label: '訂單起接' },
        { value: '報價內', label: '利潤分行列出' },
      ],
      strengthsTitle: 'SunGene 與眾不同之處',
      strengths: [
        { title: '工廠價與我方利潤分開列', desc: '每份報價單會把工廠發票線(FOB 或 EXW)與我方利潤分兩行列出。下單前你可要求看到工廠發票。一個數字便於比較,需要時隨時拆解。' },
        { title: '團隊親自驗貨', desc: '驗貨由 SunGene 團隊親自執行——不外包給從沒踏進工廠的第三方代理。台灣工廠直接到場驗貨；中國工廠出貨先進我們合作貨代的倉庫，由我們出口前驗貨放行。每批附驗貨影片與照片。' },
        { title: '紙盒禮品包裝專家 + 企業禮贈品合作工廠網絡', desc: '客製紙盒禮品包裝(月餅禮盒、品牌禮盒、零售包裝、瓦楞紙箱、紙袋)是我們 Alibaba 公開可驗證的專長。其他企業禮贈品類別 —— 毛毯、服飾、馬克杯、文具、印製商品 —— 透過長期合作工廠採購，而不是每次訂單從零找供應商。' },
      ],
      ctaTitle: '開始對話',
      ctaDesc: '訂單 USD 1,000 起接。給我們一張參考圖、目標數量、銷往的市場。當個上班日回覆——附上 2–3 家篩選好的工廠，以及你可預期的價格區間。',
      ctaBtn: '索取報價',
    },"""

about_new_zh = """    zh: {
      kicker: '關於 SunGene',
      title: '一間以準時交貨為核心的台灣貿易公司',
      intro: 'SunGene 是一間台灣貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。我們與台灣和中國的精選製造夥伴合作,為海外客戶提供穩定的溝通、生產跟催與品質一致性。',
      mission: '我們承擔與製造夥伴的商務關係。報價、生產排程、AQL 品檢、出口文件、出貨後的任何 claim,全部經過 SunGene 這一個窗口。您面對的是一個跨兩地市場的對口,不是一連串工廠介紹。',
      stats: [
        { value: '台灣 + 中國', label: '雙公司登記' },
        { value: '3 年+', label: 'Alibaba.com 商家' },
        { value: 'USD 1,000', label: '訂單起接' },
        { value: '自有', label: '品質團隊' },
      ],
      strengthsTitle: 'SunGene 能交付什麼',
      strengths: [
        { title: '產品供應', desc: '我們供應台灣與中國的精選產品。您跟我們買產品,不是工廠介紹。一份買家報價,跨兩地市場一個對口窗口。' },
        { title: '生產協調', desc: '我們與台灣與中國的精選製造夥伴協調生產排程、規格與交期。Pantone 色號、樣品迭代、刀模製作全程處理。' },
        { title: '品質一致性', desc: 'SunGene 員工親自到合作工廠執行 AQL 2.5 出口前品檢。每批附驗貨影片與照片。不外包給第三方代理。' },
        { title: '出口管理', desc: '文件、Incoterms、電壓相容、貨款匯入台灣公司、貨代協調由我們台灣與中國團隊處理。' },
      ],
      ctaTitle: '開始對話',
      ctaDesc: '訂單 USD 1,000 起接。給我們一張參考圖、目標數量、銷往的市場。當個上班日回覆——附上買家報價。',
      ctaBtn: '索取報價',
    },"""

assert about_old_zh in about, "about zh block anchor missing"
about = about.replace(about_old_zh, about_new_zh, 1)

# FR block
about_old_fr = """    fr: {
      kicker: 'À PROPOS DE SUNGENE',
      title: 'Société de négoce Taïwan + Chine',
      intro: "SunGene est un partenaire de sourcing avec des équipes à Taichung (Taïwan) et Xiamen (Chine continentale). Notre spécialité vérifiable sur Alibaba est l'emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux, emballage retail). Pour les autres cadeaux corporate (plaids, mugs, articles brandés), nous sourçons via notre réseau d'usines partenaires. Notre équipe combine vente export B2B, opérations usine et logistique chaîne d'approvisionnement à travers la Grande Chine.",
      mission: "Nous opérons en société de négoce — non en agent à la commission — pour une raison structurelle précise : la marchandise apparaît à notre bilan. Ce simple fait comptable change la structure des incitations. Refuser un lot hors spécification devient notre propre décision financière, pas une courtoisie que nous vous accordons. La qualité passe de « nous essaierons » à « nous devons ».",
      stats: [
        { value: 'TW + CN', label: 'Double opération' },
        { value: 'Vérifié', label: 'Fournisseur Alibaba.com' },
        { value: 'USD 1 000', label: 'Commande de départ' },
        { value: 'Zéro', label: "Pourboires d'usine" },
      ],
      strengthsTitle: 'Ce qui distingue SunGene',
      strengths: [
        { title: 'Prix usine + notre marge, affichés séparément', desc: 'Chaque devis présente le prix usine (FOB ou EXW) et notre marge sur deux lignes distinctes. Le prix usine sous-jacent est communiqué sur demande avant confirmation. Un seul chiffre à comparer, ventilation complète sur demande.' },
        { title: 'Contrôle qualité par notre propre équipe', desc: "L'inspection est réalisée par le personnel SunGene — non sous-traitée à des agents tiers qui ne mettent jamais les pieds à l'usine. Nous visitons les usines taïwanaises directement et faisons transiter la marchandise d'origine chinoise par notre entrepôt transitaire pour inspection pré-export. Documentation photo et vidéo à chaque expédition." },
        { title: 'Spécialiste emballage cadeau papier + cadeaux corporate via usines partenaires', desc: "L'emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux de marque, emballage retail, cartons ondulés, sacs papier) est notre spécialité vérifiable sur Alibaba. Pour les autres catégories de cadeaux corporate — plaids, vêtements, mugs, papeterie, articles brandés — nous sourçons via des usines partenaires de longue date plutôt que de redécouvrir des fournisseurs à chaque commande." },
      ],
      ctaTitle: 'Démarrer la conversation',
      ctaDesc: "Commandes à partir de USD 1 000 par expédition. Envoyez-nous une image de référence, la quantité cible et le marché de destination. Réponse le jour même avec 2–3 usines présélectionnées et la fourchette de prix attendue.",
      ctaBtn: 'Demander un devis',
    },"""

about_new_fr = """    fr: {
      kicker: 'À PROPOS DE SUNGENE',
      title: "Une société de négoce basée à Taïwan, conçue autour de la fiabilité des livraisons",
      intro: "SunGene est une société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Nous collaborons avec des partenaires manufacturiers sélectionnés à Taïwan et en Chine pour offrir une communication stable, un suivi de production et une cohérence qualité aux clients à l'étranger.",
      mission: "Nous portons la relation commerciale avec nos partenaires manufacturiers. Devis, planning de production, contrôle AQL, documentation export, et toute réclamation post-expédition passent par SunGene. Vous travaillez avec un seul interlocuteur responsable sur les deux marchés, pas une chaîne d'introductions d'usines.",
      stats: [
        { value: 'TW + CN', label: 'Entités enregistrées' },
        { value: '3 ans+', label: 'Boutique Alibaba.com' },
        { value: 'USD 1 000', label: 'Commande de départ' },
        { value: 'Interne', label: 'Équipe qualité' },
      ],
      strengthsTitle: 'Ce que livre SunGene',
      strengths: [
        { title: 'Fourniture de produits', desc: "Nous fournissons des produits sélectionnés depuis Taïwan et la Chine. Vous achetez des produits chez nous — pas un service d'introduction d'usines. Un seul devis, un seul interlocuteur responsable sur les deux marchés." },
        { title: 'Coordination de production', desc: "Nous coordonnons les plannings, les spécifications matières et les délais avec nos partenaires manufacturiers à Taïwan et en Chine. Pantone, itération d'échantillons et outillage gérés de bout en bout." },
        { title: 'Cohérence qualité', desc: "Le personnel SunGene se rend chez les usines partenaires pour le contrôle AQL 2.5 pré-expédition. Photos et vidéo à chaque expédition. Non sous-traité à des agents tiers." },
        { title: 'Gestion des exports', desc: "Documentation, Incoterms, conformité voltage, encaissement par l'entité taïwanaise et coordination du transitaire gérés par nos équipes à Taïwan et en Chine." },
      ],
      ctaTitle: 'Démarrer la conversation',
      ctaDesc: "Commandes à partir de USD 1 000 par expédition. Envoyez-nous une image de référence, la quantité cible et le marché de destination. Réponse le jour même avec un devis acheteur.",
      ctaBtn: 'Demander un devis',
    },"""

assert about_old_fr in about, "about fr block anchor missing"
about = about.replace(about_old_fr, about_new_fr, 1)

# ES block
about_old_es = """    es: {
      kicker: 'SOBRE SUNGENE',
      title: 'Empresa comercial Taiwán + China',
      intro: 'SunGene es un socio de sourcing con equipos en Taichung (Taiwán) y Xiamen (China continental). Nuestra especialidad verificable en Alibaba es el embalaje regalo papel personalizado (cajas mooncake, cajas regalo, embalaje retail). Para otros regalos corporativos (mantas, tazas, mercancía marca), abastecemos vía nuestra red de fábricas asociadas. Nuestro equipo combina ventas export B2B, operaciones de fábrica y logística de cadena de suministro en toda la Gran China.',
      mission: 'Operamos como empresa comercial — no como agente a comisión — por una razón estructural concreta: la mercancía aparece en nuestro balance. Ese único hecho contable cambia la estructura de incentivos. Rechazar un lote fuera de especificación pasa a ser nuestra propia decisión financiera, no una cortesía hacia usted. La calidad cambia de "lo intentaremos" a "tenemos que".',
      stats: [
        { value: 'TW + CN', label: 'Operación dual' },
        { value: 'Verificado', label: 'Proveedor Alibaba.com' },
        { value: 'USD 1 000', label: 'Pedido inicial' },
        { value: 'Cero', label: 'Sobres de fábrica' },
      ],
      strengthsTitle: 'Lo que distingue a SunGene',
      strengths: [
        { title: 'Precio de fábrica + nuestra margen, por separado', desc: 'Cada cotización muestra el precio de fábrica (FOB o EXW) y nuestra margen en líneas separadas. El precio de fábrica subyacente está disponible bajo solicitud antes de confirmar. Un número para comparar, desglose completo bajo demanda.' },
        { title: 'Control de calidad por nuestro propio equipo', desc: 'La inspección la realiza personal de SunGene — no se subcontrata a agentes terceros que nunca pisan la fábrica. Visitamos las fábricas en Taiwán directamente y enrutamos la mercancía de origen chino a través de nuestro almacén transitario para inspección previa a la exportación. Documentación fotográfica y de video con cada envío.' },
        { title: 'Especialista embalaje regalo papel + regalos corporativos vía fábricas asociadas', desc: 'El embalaje regalo papel personalizado (cajas mooncake, cajas regalo de marca, embalaje retail, cartones corrugados, bolsas de papel) es nuestra especialidad verificable en Alibaba. Para otras categorías de regalos corporativos — mantas, ropa, tazas, papelería, mercancía marca — abastecemos vía fábricas asociadas de largo plazo en lugar de redescubrir proveedores en cada pedido.' },
      ],
      ctaTitle: 'Iniciar la conversación',
      ctaDesc: 'Pedidos desde USD 1 000 por envío. Envíenos una imagen de referencia, cantidad objetivo y mercado de destino. Respuesta el mismo día con 2–3 fábricas preseleccionadas y el rango de precios esperado.',
      ctaBtn: 'Solicitar cotización',
    },"""

about_new_es = """    es: {
      kicker: 'SOBRE SUNGENE',
      title: 'Una empresa comercial con sede en Taiwán, construida en torno a la fiabilidad de entrega',
      intro: 'SunGene es una empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Colaboramos con socios manufactureros seleccionados en Taiwán y China para ofrecer comunicación estable, seguimiento de producción y consistencia de calidad a clientes en el extranjero.',
      mission: 'Asumimos la relación comercial con nuestros socios manufactureros. Cotización, programa de producción, inspección AQL, documentación de exportación y cualquier reclamación post-envío pasan por SunGene. Usted trabaja con un único interlocutor responsable en ambos mercados, no con una cadena de introducciones a fábricas.',
      stats: [
        { value: 'TW + CN', label: 'Entidades registradas' },
        { value: '3 años+', label: 'Tienda Alibaba.com' },
        { value: 'USD 1 000', label: 'Pedido inicial' },
        { value: 'Interno', label: 'Equipo de calidad' },
      ],
      strengthsTitle: 'Lo que entrega SunGene',
      strengths: [
        { title: 'Suministro de producto', desc: 'Suministramos productos seleccionados desde Taiwán y China. Usted compra productos a nosotros — no un servicio de introducción a fábricas. Una sola cotización, un solo interlocutor responsable en ambos mercados.' },
        { title: 'Coordinación de producción', desc: 'Coordinamos calendarios, especificaciones de materiales y plazos con nuestros socios manufactureros en Taiwán y China. Pantone, iteración de muestras y herramientas gestionados de extremo a extremo.' },
        { title: 'Consistencia de calidad', desc: 'Personal de SunGene visita las fábricas asociadas para inspección AQL 2.5 pre-exportación. Fotos y video con cada envío. No se subcontrata a agentes terceros.' },
        { title: 'Gestión de exportación', desc: 'Documentación, Incoterms, cumplimiento de voltaje, cobro por la entidad taiwanesa y coordinación con agente de carga gestionados por nuestros equipos en Taiwán y China.' },
      ],
      ctaTitle: 'Iniciar la conversación',
      ctaDesc: 'Pedidos desde USD 1 000 por envío. Envíenos una imagen de referencia, cantidad objetivo y mercado de destino. Respuesta el mismo día con una cotización para el comprador.',
      ctaBtn: 'Solicitar cotización',
    },"""

assert about_old_es in about, "about es block anchor missing"
about = about.replace(about_old_es, about_new_es, 1)

with io.open('app/[lang]/about/page.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(about)
print("app/[lang]/about/page.tsx: 5 content blocks + 15 metadata strings rewritten")

print("\nWave 11 complete. Pre-commit hook will sweep all 6 modified files.")
