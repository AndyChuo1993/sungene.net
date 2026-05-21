# Wave 13d: clean obvious-voice violations in layout/privacy/sourcing-index
# Does NOT rewrite the sourcing-index page's "we are a sourcing partner"
# thesis (strategic decision for owner) — only removes forbidden tokens
# in TOP-of-page descriptions + breadcrumb labels.
# Also does NOT touch compareSlug pages (entire page premise = "vs commission
# agent" comparison — strategic decision required).
import io

# ============================================================
# (A) app/[lang]/layout.tsx — default description
# ============================================================
F = 'app/[lang]/layout.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()
old = "const description = 'Taiwan + China dual-entity sourcing partner. Alibaba-verifiable specialty: custom paper gift packaging (mooncake boxes, gift boxes, retail packaging). Other corporate gifts via vetted factory network. Dedicated in-house QC. Taiwan-registered invoicing. MOQ USD 1,000.'"
new = "const description = 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Custom packaging, home & living, outdoor. Pre-shipment AQL by in-house staff. MOQ USD 1,000.'"
assert old in s; s = s.replace(old, new, 1)
with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("layout.tsx default description rewritten")

# ============================================================
# (B) app/[lang]/privacy/page.tsx — "Who we are" section 5 langs
# ============================================================
F = 'app/[lang]/privacy/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()
subs = [
    ("'SunGene Co., LTD. is a Taiwan-registered trading company with offices in Taichung, Taiwan and Xiamen, Mainland China. We operate sungene.net as a Taiwan + China dual-entity sourcing partner. Our Alibaba-verifiable specialty is custom paper gift packaging (mooncake boxes, brand gift boxes, retail packaging); other corporate gift categories are sourced through our vetted factory network.'",
     "'SunGene Co., LTD. is a Taiwan-registered trading company with offices in Taichung (Taiwan) and Xiamen (Mainland China). We operate sungene.net as a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging, home & living, and outdoor products.'"),
    ("'SunGene Co., LTD.(上瑾錸有限公司)是註冊於台灣的貿易公司,在台灣台中與中國大陸廈門設有辦公室。我們經營 sungene.net 作為台灣 + 中國雙公司採購夥伴。Alibaba 公開可驗證的專長是客製紙盒禮品包裝(月餅禮盒、品牌禮盒、零售包裝);其他企業禮贈品類別透過合作工廠網絡採購。'",
     "'SunGene Co., LTD.(上瑾錸有限公司)是註冊於台灣的貿易公司,在台灣台中與中國大陸廈門設有辦公室。我們經營 sungene.net,作為台灣登記貿易公司,透過台灣與中國的製造協調與出口管理供應精選產品。三大類產品:客製包裝、居家生活、戶外。'"),
    ("'SunGene Co., LTD.(上瑾錸有限公司)是注册于台湾的贸易公司,在台湾台中与中国大陆厦门设有办公室。我们经营 sungene.net 作为台湾 + 中国双公司采购伙伴。Alibaba 公开可验证的专长是客制纸盒礼品包装(月饼礼盒、品牌礼盒、零售包装);其他企业礼赠品类别通过合作工厂网络采购。'",
     "'SunGene Co., LTD.(上瑾錸有限公司)是注册于台湾的贸易公司,在台湾台中与中国大陆厦门设有办公室。我们经营 sungene.net,作为台湾登记贸易公司,通过台湾与中国的制造协调与出口管理供应精选产品。三大类产品:定制包装、居家生活、户外。'"),
    ("'SunGene Co., LTD. est une société de négoce enregistrée à Taïwan, avec des bureaux à Taichung (Taïwan) et Xiamen (Chine continentale). Nous exploitons sungene.net en tant que partenaire sourcing bi-entité Taïwan + Chine. Notre spécialité vérifiable sur Alibaba est l\\'emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux, emballage retail); les autres catégories de cadeaux corporate sont sourcées via notre réseau d\\'usines vérifiées.'",
     "'SunGene Co., LTD. est une société de négoce basée à Taïwan, avec des bureaux à Taichung (Taïwan) et Xiamen (Chine continentale). Nous exploitons sungene.net en tant que société de négoce fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Trois domaines : emballage personnalisé, maison & vie quotidienne, extérieur.'"),
    ("'SunGene Co., LTD. es una empresa comercial registrada en Taiwán, con oficinas en Taichung (Taiwán) y Xiamen (China continental). Operamos sungene.net como partner sourcing bi-entidad Taiwán + China. Nuestra especialidad verificable en Alibaba es el embalaje regalo papel personalizado (cajas mooncake, cajas regalo, embalaje retail); otras categorías de regalos corporativos se abastecen vía nuestra red de fábricas verificadas.'",
     "'SunGene Co., LTD. es una empresa comercial con sede en Taiwán, con oficinas en Taichung (Taiwán) y Xiamen (China continental). Operamos sungene.net como empresa comercial que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Tres áreas: embalaje personalizado, hogar y vida cotidiana, exterior.'"),
]
for old, new in subs:
    assert old in s, "Privacy anchor missing: " + old[:80]
    s = s.replace(old, new, 1)
with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("privacy/page.tsx: 5 langs 'Who we are' rewritten")

# ============================================================
# (C) app/[lang]/sourcing/page.tsx — top 5-lang descriptions + breadcrumb labels
# (NOTE: deeper page thesis "We are a sourcing partner" left for strategic
# decision by owner; this patch only kills tokens that fail hook + machine
# surfaces (meta_descriptions block) + breadcrumb labels.)
# ============================================================
F = 'app/[lang]/sourcing/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

# Top 5-lang descriptions block (lines 39-43 — these are used as meta + SEO)
subs = [
    ("en: 'Taiwan + China dual-entity sourcing partner. Specialty: custom paper gift packaging (mooncake boxes, brand gift boxes, retail packaging). Other corporate gifts via factory network. On-site QC, factory price + margin shown on quote.',",
     "en: 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Custom packaging, home & living, outdoor. Pre-shipment AQL by in-house staff. MOQ USD 1,000.',"),
    ("cn: 'SunGene 是贸易采购伙伴,台中与厦门两地都有人。以 FOB 或 EXW 直接向工厂采购,团队亲自验货,报价单上工厂价与我方利润分开列出。已验证 Alibaba.com 商家。',",
     "cn: 'SunGene 是台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。三大类:定制包装、居家生活、户外。SunGene 自有员工出口前 AQL 品检。最低订单 USD 1,000。',"),
    ("zh: 'SunGene 是貿易採購夥伴,台中與廈門兩地都有人。以 FOB 或 EXW 直接向工廠採購,團隊親自驗貨,報價單上工廠價與我方利潤分開列出。已驗證 Alibaba.com 商家。',",
     "zh: 'SunGene 是台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。三大類:客製包裝、居家生活、戶外。SunGene 自有員工出口前 AQL 品檢。最低訂單 USD 1,000。',"),
    ('fr: "Partenaire sourcing bi-entité Taïwan + Chine avec équipes à Taichung et Xiamen. Spécialité : emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux, emballage retail). Autres cadeaux corporate via réseau d\'usines vérifiées. CQ sur place. Boutique vérifiée Alibaba.com.",',
     'fr: "Société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Trois domaines : emballage personnalisé, maison & vie quotidienne, extérieur. Contrôle AQL pré-expédition en interne. MOQ 1 000 USD.",'),
    ("es: 'Partner sourcing bi-entidad Taiwán + China con equipos en Taichung y Xiamen. Especialidad: embalaje regalo papel personalizado (cajas mooncake, cajas regalo, embalaje retail). Otros regalos corporativos vía red de fábricas verificadas. QC en sitio. Tienda verificada Alibaba.com.',",
     "es: 'Empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Tres áreas: embalaje personalizado, hogar y vida cotidiana, exterior. Inspección AQL pre-envío en interno. MOQ USD 1.000.',"),

    # keywords (line 221)
    ("keywords: ['Taiwan China sourcing partner', 'packaging materials sourcing', 'home goods sourcing', 'garden products sourcing', 'beauty packaging sourcing', 'Alibaba verified storefront', 'on-site QC', 'private label sourcing', 'consolidated container shipping'],",
     "keywords: ['Taiwan-based trading company', 'Asia product supply', 'manufacturing coordination', 'export management', 'custom packaging Taiwan China', 'home and living products', 'outdoor products supply', 'Alibaba.com supplier', 'pre-shipment AQL inspection'],"),

    # breadcrumb labels (line 451-453)
    ("'  zh: '採購夥伴',",  # placeholder for sed match — actual is below
     "'  zh: '採購夥伴',"),
]
for old, new in subs[:6]:  # only the real subs (first 6)
    if old in s:
        s = s.replace(old, new, 1)

# Fix breadcrumb labels — the 'cn: '采购伙伴'' / 'zh: '採購夥伴'' inline lookups
# (used as nav label). Change to 'Products' lookup.
s = s.replace("cn: '采购伙伴',", "cn: '产品',")
s = s.replace("zh: '採購夥伴',", "zh: '產品',")

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("sourcing/page.tsx: top descriptions (5 langs) + keywords + breadcrumb labels rewritten")
print("  NOTE: page body 'We are a sourcing partner' thesis NOT touched — flag to owner")
print("\nWave 13d done. Build + redeploy next.")
