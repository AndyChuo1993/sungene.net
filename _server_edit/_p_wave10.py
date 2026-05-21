# Wave 10 patcher: HeroSection.tsx + WhyUs.tsx Phase 2 supplier-voice rewrite
# 5 active langs (en/zh/cn/fr/es). Dead langs left as-is per Phase 1 #6 policy.
import io, os, shutil, sys

HERO = 'components/home/HeroSection.tsx'
WHYUS = 'components/home/WhyUs.tsx'

# ============================================================
# HeroSection.tsx replacements
# ============================================================

with io.open(HERO, 'r', encoding='utf-8') as f:
    hero = f.read()

# --- defaultExtras block (line 11-14) ---
hero_old_default = """const defaultExtras = {
  badges: ['Verified Alibaba storefront', 'Taichung + Xiamen', 'On-site QC', 'Transparent quotes'],
  certLabel: 'Verified',
  certChips: ['Alibaba.com', 'TW Co.', 'CN Co.'],
}"""
hero_new_default = """const defaultExtras = {
  badges: ['Taiwan-based trading company', 'Coordinated production', 'On-site QC', 'Export-ready documentation'],
  certLabel: 'Verified',
  certChips: ['Alibaba.com', 'TW Co.', 'CN Co.'],
}"""
assert hero_old_default in hero, "Hero defaultExtras anchor not found"
hero = hero.replace(hero_old_default, hero_new_default, 1)

# --- EN block ---
hero_old_en = """    en: {
      kicker: 'TAIWAN + CHINA SOURCING',
      h1: 'Custom paper gift packaging — Taiwan + China sourcing',
      sub: 'Mooncake boxes, brand gift boxes, retail packaging — sourced from vetted Taiwan + China factories. Other corporate gifts (blankets, drinkware, branded merchandise) sourced through our vetted factory network. Taiwan-registered invoicing entity.',
      subSecondary: 'Verified Alibaba.com storefront. Factory price and our margin shown separately on every quote. Same-day reply. MOQ USD 1,000.',
      btnQuote: 'Request a quote',
      btnCatalog: 'How we work',
      stats: [
        { value: 'TW + CN', label: 'Two offices on the ground' },
        { value: 'Verified', label: 'Alibaba.com supplier' },
        { value: 'Direct', label: 'Factory pricing' },
        { value: 'Same day', label: 'Quote turnaround' },
      ],
      badges: ['Verified Alibaba storefront', 'Taichung + Xiamen', 'On-site QC', 'Transparent quotes'],
      certLabel: 'Verified',
      certChips: ['Alibaba.com', 'TW Co.', 'CN Co.'],
    },"""

hero_new_en = """    en: {
      kicker: 'TAIWAN + CHINA SUPPLY',
      h1: 'Reliable Product Supply from Asia',
      sub: 'SunGene supplies custom packaging, home & living, and outdoor products from Taiwan and China with coordinated production and export support.',
      subSecondary: 'Taiwan-based trading company. Quotes the same day. Orders from USD 1,000 per shipment.',
      btnQuote: 'Request a quote',
      btnCatalog: 'How we work',
      stats: [
        { value: 'TW + CN', label: 'Registered entities' },
        { value: '3 yr+', label: 'Alibaba.com storefront' },
        { value: 'In-house', label: 'Quality coordination' },
        { value: 'Same day', label: 'Quote turnaround' },
      ],
      badges: ['Taiwan-based trading company', 'Coordinated production', 'On-site QC', 'Export-ready documentation'],
      certLabel: 'Verified',
      certChips: ['Alibaba.com', 'TW Co.', 'CN Co.'],
    },"""
assert hero_old_en in hero, "Hero EN block anchor not found"
hero = hero.replace(hero_old_en, hero_new_en, 1)

# --- ZH-Hant block ---
hero_old_zh = """    zh: {
      kicker: '台灣 ＋ 中國  採購',
      h1: '客製紙盒禮品包裝 — 台灣 + 中國採購',
      sub: '月餅禮盒、品牌禮盒、零售包裝 — 從審核過的台灣與中國工廠採購。其他企業禮贈品(毛毯、馬克杯、印製商品)透過合作工廠網絡採購。台灣公司開立發票。',
      subSecondary: '已驗證 Alibaba.com 商家。工廠價與我方利潤分開列在報價單上。當日回覆。最低訂單 USD 1,000。',
      btnQuote: '索取報價',
      btnCatalog: '我們怎麼合作',
      stats: [
        { value: '台灣＋中國', label: '兩岸都有人' },
        { value: '已認證', label: 'Alibaba.com 供應商' },
        { value: '直供', label: '工廠價格' },
        { value: '當日', label: '報價回覆' },
      ],
      badges: ['已驗證 Alibaba 商家', '台中＋廈門', '親自到場驗貨', '報價透明'],
      certLabel: '已驗證',
      certChips: ['Alibaba.com', '台灣公司', '中國公司'],
    },"""

hero_new_zh = """    zh: {
      kicker: '台灣 ＋ 中國  供應',
      h1: '亞洲產品供應與出口整合',
      sub: 'SunGene 整合中國與台灣供應鏈,專注於客製包裝、居家生活與戶外園藝產品供應,並提供生產協調與出口服務。',
      subSecondary: '台灣登記貿易公司。報價當日回覆。訂單 USD 1,000 起。',
      btnQuote: '索取報價',
      btnCatalog: '我們怎麼合作',
      stats: [
        { value: '台灣 + 中國', label: '雙公司登記' },
        { value: '3 年+', label: 'Alibaba.com 商家' },
        { value: '自有', label: '品質協調團隊' },
        { value: '當日', label: '報價回覆' },
      ],
      badges: ['台灣登記貿易公司', '生產協調整合', '親自到場驗貨', '出口文件齊備'],
      certLabel: '已驗證',
      certChips: ['Alibaba.com', '台灣公司', '中國公司'],
    },"""
assert hero_old_zh in hero, "Hero zh block anchor not found"
hero = hero.replace(hero_old_zh, hero_new_zh, 1)

# --- ZH-Hans block ---
hero_old_cn = """    cn: {
      kicker: '台湾 ＋ 中国  采购',
      h1: '定制纸盒礼品包装 — 台湾 + 中国采购',
      sub: '月饼礼盒、品牌礼盒、零售包装 — 从审核过的台湾与中国工厂采购。其他企业礼赠品(毛毯、马克杯、印制商品)通过合作工厂网络采购。台湾公司开立发票。',
      subSecondary: '已验证 Alibaba.com 商家。工厂价与我方利润分开列在报价单上。当日回复。最低订单 USD 1,000。',
      btnQuote: '索取报价',
      btnCatalog: '我们怎么合作',
      stats: [
        { value: '台湾＋中国', label: '台湾大陆都有人' },
        { value: '已认证', label: 'Alibaba.com 供应商' },
        { value: '直供', label: '工厂价格' },
        { value: '当日', label: '报价回复' },
      ],
      badges: ['已验证 Alibaba 商家', '台中＋厦门', '亲自到场验货', '报价透明'],
      certLabel: '已认证',
      certChips: ['Alibaba.com', '台湾公司', '中国公司'],
    },"""

hero_new_cn = """    cn: {
      kicker: '台湾 ＋ 中国  供应',
      h1: '亚洲产品供应与出口整合',
      sub: 'SunGene 整合中国与台湾供应链,专注于定制包装、居家生活与户外园艺产品供应,并提供生产协调与出口服务。',
      subSecondary: '台湾登记贸易公司。报价当日回复。订单 USD 1,000 起。',
      btnQuote: '索取报价',
      btnCatalog: '我们怎么合作',
      stats: [
        { value: '台湾 + 中国', label: '双公司登记' },
        { value: '3 年+', label: 'Alibaba.com 商家' },
        { value: '自有', label: '品质协调团队' },
        { value: '当日', label: '报价回复' },
      ],
      badges: ['台湾登记贸易公司', '生产协调整合', '亲自到场验货', '出口文件齐备'],
      certLabel: '已认证',
      certChips: ['Alibaba.com', '台湾公司', '中国公司'],
    },"""
assert hero_old_cn in hero, "Hero cn block anchor not found"
hero = hero.replace(hero_old_cn, hero_new_cn, 1)

# --- FR block (double-quoted strings due to apostrophes) ---
hero_old_fr = """    fr: {
      kicker: 'SOURCING TAÏWAN + CHINE',
      h1: "Sourcing emballage cadeau papier — Taïwan + Chine",
      sub: "Boîtes mooncake, boîtes-cadeaux de marque, emballage retail — sourcés directement chez des usines Taïwan + Chine vérifiées. Autres cadeaux corporate (plaids, mugs, articles brandés) via notre réseau d'usines partenaires. Facturation par l'entité Taïwan.",
      subSecondary: "Fournisseur vérifié Alibaba.com. Prix usine direct, logistique export de bout en bout, devis le jour même. Commandes à partir de USD 1 000.",
      btnQuote: 'Demander un devis',
      btnCatalog: 'Notre méthode',
      stats: [
        { value: 'TW + CN', label: 'Double opération' },
        { value: 'Vérifié', label: 'Fournisseur Alibaba.com' },
        { value: 'Direct', label: 'Prix usine' },
        { value: 'Jour même', label: 'Devis' },
      ],
      badges: ['Fournisseur Alibaba vérifié', 'Bureaux TW + CN', 'Contrôle qualité sur place', 'Sans commission occulte'],
      certLabel: 'Vérifié',
      certChips: ['Alibaba.com', 'Sté. TW', 'Sté. CN'],
    },"""

hero_new_fr = """    fr: {
      kicker: 'TAÏWAN + CHINE  APPROVISIONNEMENT',
      h1: "Approvisionnement fiable de produits depuis l'Asie",
      sub: "SunGene fournit des produits d'emballage personnalisé, maison & vie quotidienne, et d'extérieur depuis Taïwan et la Chine, avec coordination de production et support à l'export.",
      subSecondary: "Société de négoce basée à Taïwan. Devis le jour même. Commandes à partir de USD 1 000 par expédition.",
      btnQuote: 'Demander un devis',
      btnCatalog: 'Notre méthode',
      stats: [
        { value: 'TW + CN', label: 'Entités enregistrées' },
        { value: '3 ans+', label: 'Boutique Alibaba.com' },
        { value: 'Interne', label: 'Coordination qualité' },
        { value: 'Jour même', label: 'Devis' },
      ],
      badges: ['Société de négoce basée à Taïwan', 'Coordination de production', 'Contrôle qualité sur place', 'Documentation export prête'],
      certLabel: 'Vérifié',
      certChips: ['Alibaba.com', 'Sté. TW', 'Sté. CN'],
    },"""
assert hero_old_fr in hero, "Hero fr block anchor not found"
hero = hero.replace(hero_old_fr, hero_new_fr, 1)

# --- ES block ---
hero_old_es = """    es: {
      kicker: 'SOURCING TAIWÁN + CHINA',
      h1: 'Sourcing embalaje regalo papel — Taiwán + China',
      sub: 'Cajas mooncake, cajas regalo de marca, embalaje retail — abastecidos directamente de fábricas Taiwán + China verificadas. Otros regalos corporativos (mantas, tazas, mercancía marca) vía nuestra red de fábricas asociadas. Facturación por la entidad Taiwán.',
      subSecondary: 'Proveedor verificado Alibaba.com. Precio directo de fábrica, logística integral de exportación, cotizaciones el mismo día. Pedidos desde USD 1 000.',
      btnQuote: 'Solicitar cotización',
      btnCatalog: 'Cómo trabajamos',
      stats: [
        { value: 'TW + CN', label: 'Operación dual' },
        { value: 'Verificado', label: 'Proveedor Alibaba.com' },
        { value: 'Directo', label: 'Precio de fábrica' },
        { value: 'Mismo día', label: 'Cotización' },
      ],
      badges: ['Proveedor Alibaba verificado', 'Oficinas TW + CN', 'Control de calidad en sitio', 'Sin comisiones ocultas'],
      certLabel: 'Verificado',
      certChips: ['Alibaba.com', 'Cía. TW', 'Cía. CN'],
    },"""

hero_new_es = """    es: {
      kicker: 'TAIWÁN + CHINA  SUMINISTRO',
      h1: 'Suministro fiable de productos desde Asia',
      sub: 'SunGene suministra productos de embalaje personalizado, hogar y vida cotidiana, y de exterior desde Taiwán y China, con coordinación de producción y soporte de exportación.',
      subSecondary: 'Empresa comercial con sede en Taiwán. Cotización el mismo día. Pedidos desde USD 1 000 por envío.',
      btnQuote: 'Solicitar cotización',
      btnCatalog: 'Cómo trabajamos',
      stats: [
        { value: 'TW + CN', label: 'Entidades registradas' },
        { value: '3 años+', label: 'Tienda Alibaba.com' },
        { value: 'Interna', label: 'Coordinación de calidad' },
        { value: 'Mismo día', label: 'Cotización' },
      ],
      badges: ['Empresa comercial con sede en Taiwán', 'Coordinación de producción', 'Control de calidad en sitio', 'Documentación de exportación lista'],
      certLabel: 'Verificado',
      certChips: ['Alibaba.com', 'Cía. TW', 'Cía. CN'],
    },"""
assert hero_old_es in hero, "Hero es block anchor not found"
hero = hero.replace(hero_old_es, hero_new_es, 1)

with io.open(HERO, 'w', encoding='utf-8', newline='\n') as f:
    f.write(hero)
print("HeroSection.tsx: 6 blocks rewritten (defaultExtras + en/zh/cn/fr/es)")

# ============================================================
# WhyUs.tsx replacements
# ============================================================

with io.open(WHYUS, 'r', encoding='utf-8') as f:
    whyus = f.read()

# --- EN block ---
whyus_old_en = """    en: {
      kicker: 'WHY WORK WITH US',
      title: 'A trading company built so quality is our problem, not yours',
      desc: 'We act as principal: we buy the goods, then resell to you. Rejecting defective product before shipment is in our own financial interest — your protection is structural, not a favour.',
      items: [
        { icon: '01', title: 'We act as principal', desc: 'We take ownership of the goods at the factory. Our margin is on the resale, shown separately on every quote.' },
        { icon: '02', title: 'On-site QC by our team', desc: 'Taiwan factories: we drive to the site. China factories: goods enter our forwarder’s warehouse and we inspect before export. Photos and video with every shipment.' },
        { icon: '03', title: 'Transparent margin disclosure', desc: 'Every quote shows the factory price and our margin on separate lines. The underlying factory invoice is available on request before order confirmation.' },
        { icon: '04', title: 'Verified Alibaba.com supplier', desc: 'Three years operating momas.en.alibaba.com. Rating fluctuates between 3 and 5 stars by period. Storefront is public — verify it before you commit.' },
        { icon: '05', title: 'Teams in Taichung + Xiamen', desc: 'On-the-ground presence on both sides of the strait. Taiwan handles banking and contracts; Xiamen team handles factory relationships and pre-export inspection.' },
        { icon: '06', title: 'Built for serious buyers', desc: 'Orders from USD 1,000 per shipment. Every order gets dedicated sourcing, on-site QC, and pre-shipment documentation — the same level of care whether you ship one pallet or a full container.' },
      ]
    },"""

whyus_new_en = """    en: {
      kicker: 'WHY WORK WITH US',
      title: 'A Taiwan-based trading company built around delivery reliability',
      desc: 'We supply products from selected manufacturing partners in Taiwan and China. The quote, the shipment, the QC, and the documentation all come from us — one accountable counterparty across both markets.',
      items: [
        { icon: '01', title: 'Product supply', desc: 'You buy products from us — not a factory introduction service. We hold the commercial relationship; the quote you see is the price you pay.' },
        { icon: '02', title: 'Coordinated production', desc: 'We coordinate production schedules, material specifications, and lead times with selected manufacturing partners across Taiwan and China.' },
        { icon: '03', title: 'On-site quality consistency', desc: 'SunGene staff visit partner factories for pre-shipment AQL inspection. Photo and video documentation with every shipment.' },
        { icon: '04', title: 'Export management', desc: 'Documentation, Incoterms, voltage compliance, and forwarder coordination handled by our Taiwan and China teams.' },
        { icon: '05', title: 'Alibaba.com supplier', desc: 'Operating momas.en.alibaba.com for 3+ years. Star rating fluctuates 3-5 stars by period; storefront is public — verify it directly.' },
        { icon: '06', title: 'Built for serious buyers', desc: 'Orders from USD 1,000 per shipment. Every order gets dedicated coordination and pre-shipment documentation — one pallet or one full container, same level of care.' },
      ]
    },"""
assert whyus_old_en in whyus, "WhyUs EN block anchor not found"
whyus = whyus.replace(whyus_old_en, whyus_new_en, 1)

# --- ZH-Hans (cn) block ---
whyus_old_cn = """    cn: {
      kicker: '为什么找我们',
      title: '我们是把品质当成自己问题的贸易商',
      desc: '我们以 principal 身分买下货物,再转卖给您。挡下瑕疵品是我们自己的财务利益,您的保护是结构性的,不是人情。',
      items: [
        { icon: '01', title: '直接买进卖出', desc: '我们在工厂端把货买下，转手卖给您。利润来自转售差价，不是藏在工厂报价里的回扣。' },
        { icon: '02', title: '亲自到场验货', desc: '台湾工厂：团队直接开车到现场。中国工厂：货进我们合作货代的仓库由我们验货后才放行出口。每批附验货影片与照片。' },
        { icon: '03', title: '利润分行列出', desc: '每份报价单工厂价与我方利润分两行列出。下单前可索取工厂发票对照,完全透明。' },
        { icon: '04', title: 'Alibaba.com 认证供应商', desc: '经营 momas.en.alibaba.com 三年。星等会随期间在 3 到 5 星之间波动。店面公开——签约前可以先去查。' },
        { icon: '05', title: '台中＋厦门两地团队', desc: '台湾与大陆都有人。台湾团队负责银行往来与合约;厦门团队负责工厂关系与出口前验货。' },
        { icon: '06', title: '为认真的买家而设计', desc: '订单 USD 1,000 起。每一笔订单都享有专属的采购、现场验货与出口前文件准备——不管是一个棧板还是整个货柜，服务水准一致。' },
      ]
    },"""

whyus_new_cn = """    cn: {
      kicker: '为什么找我们',
      title: '一家以准时交货为核心的台湾贸易公司',
      desc: 'SunGene 与台湾及中国精选制造伙伴合作,把产品供应给海外买家。报价、出货、品质、文件全部由我们一个窗口负责 —— 跨两地市场,一个对口。',
      items: [
        { icon: '01', title: '产品直接供应', desc: '您跟我们买产品,不是付介绍费。商务关系由我们承担,您看到的是一份买家报价,不是工厂的拆账明细。' },
        { icon: '02', title: '生产协调', desc: '我们与台湾与中国精选制造伙伴协调生产排程、规格与交期。' },
        { icon: '03', title: '亲自到场品检', desc: 'SunGene 员工亲自到合作工厂执行 AQL 出口前品检。每批附验货影片与照片。' },
        { icon: '04', title: '出口管理', desc: '文件、Incoterms、电压相容、货代协调由我们台湾与中国团队处理。' },
        { icon: '05', title: 'Alibaba.com 商家', desc: '经营 momas.en.alibaba.com 三年以上。星等随期间在 3 到 5 星之间波动;店面公开——签约前可以先去看。' },
        { icon: '06', title: '为认真的买家而设计', desc: '订单 USD 1,000 起。每一笔订单都享有专属协调与出口前文件 —— 一个棧板或一整个货柜,服务一致。' },
      ]
    },"""
assert whyus_old_cn in whyus, "WhyUs cn block anchor not found"
whyus = whyus.replace(whyus_old_cn, whyus_new_cn, 1)

# --- ZH-Hant (zh) block ---
whyus_old_zh = """    zh: {
      kicker: '為什麼找我們',
      title: '我們是把品質當成自己問題的貿易商',
      desc: '我們以 principal 身分買下貨物,再轉賣給你。擋下瑕疵品是我們自己的財務利益,你的保護是結構性的,不是人情。',
      items: [
        { icon: '01', title: '直接買進賣出', desc: '我們在工廠端把貨買下，轉手賣給你。利潤來自轉售差價，不是藏在工廠報價裡的回扣。' },
        { icon: '02', title: '親自到場驗貨', desc: '台灣工廠：團隊直接開車到現場。中國工廠：貨進我們合作貨代的倉庫，由我們驗貨後才放行出口。每批附驗貨影片與照片。' },
        { icon: '03', title: '利潤分行列出', desc: '每份報價單工廠價與我方利潤分兩行列出。下單前可索取工廠發票對照,完全透明。' },
        { icon: '04', title: 'Alibaba.com 認證供應商', desc: '經營 momas.en.alibaba.com 三年。星等會隨期間在 3 到 5 星之間波動。店面公開——簽約前可以先去查。' },
        { icon: '05', title: '台中＋廈門兩地團隊', desc: '海峽兩岸都有人。台灣團隊負責銀行往來與合約;廈門團隊負責工廠關係與出口前驗貨。' },
        { icon: '06', title: '為認真的買家而設計', desc: '訂單 USD 1,000 起。每一筆訂單都享有專屬的採購、現場驗貨與出口前文件準備——不管是一個棧板還是整個貨櫃，服務水準一致。' },
      ]
    },"""

whyus_new_zh = """    zh: {
      kicker: '為什麼找我們',
      title: '一間以準時交貨為核心的台灣貿易公司',
      desc: 'SunGene 與台灣及中國精選製造夥伴合作,把產品供應給海外買家。報價、出貨、品質、文件全部由我們一個窗口負責 —— 跨兩地市場,一個對口。',
      items: [
        { icon: '01', title: '產品直接供應', desc: '您跟我們買產品,不是付介紹費。商務關係由我們承擔,您看到的是一份買家報價,不是工廠的拆帳明細。' },
        { icon: '02', title: '生產協調', desc: '我們與台灣與中國精選製造夥伴協調生產排程、規格與交期。' },
        { icon: '03', title: '親自到場品檢', desc: 'SunGene 員工親自到合作工廠執行 AQL 出口前品檢。每批附驗貨影片與照片。' },
        { icon: '04', title: '出口管理', desc: '文件、Incoterms、電壓相容、貨代協調由我們台灣與中國團隊處理。' },
        { icon: '05', title: 'Alibaba.com 商家', desc: '經營 momas.en.alibaba.com 三年以上。星等隨期間在 3 到 5 星之間波動;店面公開——簽約前可以先去看。' },
        { icon: '06', title: '為認真的買家而設計', desc: '訂單 USD 1,000 起。每一筆訂單都享有專屬協調與出口前文件 —— 一個棧板或一整個貨櫃,服務一致。' },
      ]
    },"""
assert whyus_old_zh in whyus, "WhyUs zh block anchor not found"
whyus = whyus.replace(whyus_old_zh, whyus_new_zh, 1)

# --- FR block ---
whyus_old_fr = """    fr: {
      kicker: 'POURQUOI TRAVAILLER AVEC NOUS',
      title: "Une société de négoce conçue pour que la qualité soit notre problème, pas le vôtre",
      desc: "Nous ne sommes pas un agent à la commission : nous achetons la marchandise, puis nous vous la revendons. Écarter les défauts avant expédition est donc dans notre propre intérêt financier — pas une faveur que nous vous faisons.",
      items: [
        { icon: '01', title: 'Achat-revente direct', desc: "Nous prenons possession de la marchandise à l'usine. Notre marge porte sur la revente, pas sur une commission cachée dans le prix usine." },
        { icon: '02', title: 'Contrôle qualité sur place', desc: "Usines à Taïwan : notre équipe se déplace. Usines en Chine : la marchandise entre à l'entrepôt de notre transitaire et nous l'inspectons avant export. Photos et vidéo à chaque expédition." },
        { icon: '03', title: "Pas de pourboire d'usine", desc: "Nous avons refusé des fournisseurs proposant une enveloppe pour faire passer de la marchandise hors spécification. Le résultat d'inspection est ce que nous avons vu — pas ce qui a été payé pour." },
        { icon: '04', title: 'Fournisseur Alibaba.com vérifié', desc: "Trois ans d'activité sur momas.en.alibaba.com. La note fluctue entre 3 et 5 étoiles selon la période. Boutique publique — à vérifier avant tout engagement." },
        { icon: '05', title: 'Entités Taïwan + Chine', desc: "Deux sociétés enregistrées. Paiement vers l'entité taïwanaise (relations bancaires et gestion des litiges plus claires) ; l'entité chinoise gère les relations usines et la logistique pré-export." },
        { icon: '06', title: 'Conçu pour des acheteurs sérieux', desc: "Commandes à partir de USD 1 000 par expédition. Chaque commande bénéficie d'un sourcing dédié, d'un contrôle qualité sur place et d'une préparation documentaire complète — qu'il s'agisse d'une palette ou d'un conteneur entier." },
      ]
    },"""

whyus_new_fr = """    fr: {
      kicker: 'POURQUOI TRAVAILLER AVEC NOUS',
      title: "Une société de négoce basée à Taïwan, conçue autour de la fiabilité des livraisons",
      desc: "SunGene fournit des produits depuis des partenaires manufacturiers sélectionnés à Taïwan et en Chine. Devis, expédition, contrôle qualité et documentation : un seul interlocuteur, deux marchés.",
      items: [
        { icon: '01', title: 'Fourniture de produits', desc: "Vous achetez des produits chez nous — pas un service d'introduction d'usines. Nous portons la relation commerciale ; le devis que vous voyez est le prix que vous payez." },
        { icon: '02', title: 'Coordination de production', desc: "Nous coordonnons les plannings, les spécifications matières et les délais avec nos partenaires manufacturiers à Taïwan et en Chine." },
        { icon: '03', title: 'Contrôle qualité sur place', desc: "Le personnel SunGene se rend chez les usines partenaires pour le contrôle AQL pré-expédition. Photos et vidéo à chaque expédition." },
        { icon: '04', title: 'Gestion des exports', desc: "Documentation, Incoterms, conformité voltage et coordination du transitaire gérés par nos équipes à Taïwan et en Chine." },
        { icon: '05', title: 'Boutique Alibaba.com', desc: "Trois ans d'activité sur momas.en.alibaba.com. La note fluctue entre 3 et 5 étoiles selon la période ; boutique publique — à vérifier avant tout engagement." },
        { icon: '06', title: 'Conçu pour acheteurs sérieux', desc: "Commandes à partir de USD 1 000 par expédition. Chaque commande bénéficie d'une coordination dédiée et d'une documentation complète — palette ou conteneur entier, même niveau de service." },
      ]
    },"""
assert whyus_old_fr in whyus, "WhyUs fr block anchor not found"
whyus = whyus.replace(whyus_old_fr, whyus_new_fr, 1)

# --- ES block ---
whyus_old_es = """    es: {
      kicker: 'POR QUÉ TRABAJAR CON NOSOTROS',
      title: 'Una empresa comercial diseñada para que la calidad sea nuestro problema, no el suyo',
      desc: 'No somos un agente a comisión: compramos la mercancía y se la revendemos. Rechazar defectos antes del envío está en nuestro propio interés financiero — no es un favor que le hacemos.',
      items: [
        { icon: '01', title: 'Compra-reventa directa', desc: 'Tomamos posesión de la mercancía en la fábrica. Nuestro margen está en la reventa, no en una comisión oculta dentro del precio de fábrica.' },
        { icon: '02', title: 'Control de calidad en sitio', desc: 'Fábricas en Taiwán: nuestro equipo se desplaza. Fábricas en China: la mercancía entra al almacén de nuestro agente de carga y la inspeccionamos antes de exportar. Fotos y video con cada envío.' },
        { icon: '03', title: 'Sin sobres a la fábrica', desc: 'Hemos rechazado proveedores que ofrecían sobres para aprobar mercancía fuera de especificación. El resultado de la inspección es lo que vimos — no lo que se pagó por aprobar.' },
        { icon: '04', title: 'Proveedor Alibaba.com verificado', desc: 'Tres años operando momas.en.alibaba.com. La calificación fluctúa entre 3 y 5 estrellas según el período. Tienda pública — verifíquela antes de comprometerse.' },
        { icon: '05', title: 'Entidades Taiwán + China', desc: 'Dos empresas registradas. Pago a la entidad taiwanesa (relaciones bancarias y manejo de disputas más claros); la entidad china gestiona relaciones con fábricas y logística pre-exportación.' },
        { icon: '06', title: 'Diseñado para compradores serios', desc: 'Pedidos desde USD 1 000 por envío. Cada pedido recibe sourcing dedicado, control de calidad en sitio y preparación documental completa — sea un pallet o un contenedor entero.' },
      ]
    },"""

whyus_new_es = """    es: {
      kicker: 'POR QUÉ TRABAJAR CON NOSOTROS',
      title: 'Una empresa comercial con sede en Taiwán, construida en torno a la fiabilidad de entrega',
      desc: 'SunGene suministra productos desde socios manufactureros seleccionados en Taiwán y China. Cotización, envío, control de calidad y documentación: un solo interlocutor, dos mercados.',
      items: [
        { icon: '01', title: 'Suministro de producto', desc: 'Usted compra productos a nosotros — no un servicio de introducción a fábricas. Asumimos la relación comercial; la cotización que ve es el precio que paga.' },
        { icon: '02', title: 'Coordinación de producción', desc: 'Coordinamos calendarios, especificaciones de materiales y plazos con nuestros socios manufactureros en Taiwán y China.' },
        { icon: '03', title: 'Control de calidad en sitio', desc: 'Personal de SunGene visita las fábricas asociadas para inspección AQL pre-exportación. Fotos y video con cada envío.' },
        { icon: '04', title: 'Gestión de exportación', desc: 'Documentación, Incoterms, cumplimiento de voltaje y coordinación con agente de carga gestionados por nuestros equipos en Taiwán y China.' },
        { icon: '05', title: 'Tienda Alibaba.com', desc: 'Tres años operando momas.en.alibaba.com. La calificación fluctúa entre 3 y 5 estrellas según el período; tienda pública — verifíquela antes de comprometerse.' },
        { icon: '06', title: 'Diseñado para compradores serios', desc: 'Pedidos desde USD 1 000 por envío. Cada pedido recibe coordinación dedicada y documentación completa — un pallet o un contenedor entero, mismo nivel de servicio.' },
      ]
    },"""
assert whyus_old_es in whyus, "WhyUs es block anchor not found"
whyus = whyus.replace(whyus_old_es, whyus_new_es, 1)

# Also update the JSX fallback for trustBadges (line 207 in original)
whyus_old_badge_fallback = "(t.trustBadges || ['Verified Alibaba storefront', 'Taichung + Xiamen', 'On-site QC'])"
whyus_new_badge_fallback = "(t.trustBadges || ['Taiwan-based trading company', 'Coordinated production', 'On-site QC'])"
assert whyus_old_badge_fallback in whyus, "WhyUs trustBadges fallback anchor not found"
whyus = whyus.replace(whyus_old_badge_fallback, whyus_new_badge_fallback, 1)

with io.open(WHYUS, 'w', encoding='utf-8', newline='\n') as f:
    f.write(whyus)
print("WhyUs.tsx: 5 lang blocks rewritten + trustBadges fallback updated")

print("\nWave 10 complete. Pre-commit forbidden token check expected to pass.")
