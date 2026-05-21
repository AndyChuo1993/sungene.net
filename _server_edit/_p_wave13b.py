# Wave 13b: post-deploy hot fix — 3 surfaces I missed in W10–W13
# (Footer.tsx, CTASection.tsx, FAQ.tsx all carry Phase 1 voice in
# user-visible spots — found via LIVE HTML grep after deploy.)
import io

# ============================================================
# (1) components/Footer.tsx — 5 langs description
# ============================================================
F = 'components/Footer.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

# Replace en + cn + zh + fr + es + final-fallback (one literal each)
subs = [
    ("'Taiwan + China dual-entity sourcing partner with teams in Taichung and Xiamen. Specialty: custom paper gift packaging (mooncake boxes, brand gift boxes). Other corporate gifts via factory network. On-site QC. Verified Alibaba.com storefront.'",
     "'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging, home & living, outdoor.'"),
    ("'SunGene 是台湾+中国双公司采购伙伴,台中与厦门两地都有团队。专长:客制纸盒礼品包装(月饼礼盒、品牌礼盒)。其他企业礼赠品通过合作工厂网络采购。亲自验货。已验证 Alibaba.com 商家。'",
     "'台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。三大类产品:定制包装、居家生活、户外。'"),
    ("'SunGene 是台灣+中國雙公司採購夥伴,台中與廈門兩地都有團隊。專長:客製紙盒禮品包裝(月餅禮盒、品牌禮盒)。其他企業禮贈品透過合作工廠網絡採購。親自驗貨。已驗證 Alibaba.com 商家。'",
     "'台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。三大類產品:客製包裝、居家生活、戶外。'"),
    ('"SunGene est un partenaire sourcing bi-entité Taïwan + Chine avec équipes à Taichung et Xiamen. Spécialité : emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux). Autres cadeaux corporate via réseau d\'usines vérifiées. CQ sur place. Boutique vérifiée Alibaba.com."',
     '"Société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Trois domaines : emballage personnalisé, maison & vie quotidienne, extérieur."'),
    ("'SunGene es un partner sourcing bi-entidad Taiwán + China con equipos en Taichung y Xiamen. Especialidad: embalaje regalo papel personalizado (cajas mooncake, cajas regalo). Otros regalos corporativos vía red de fábricas verificadas. QC en sitio. Tienda verificada Alibaba.com.'",
     "'Empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Tres áreas: embalaje personalizado, hogar y vida cotidiana, exterior.'"),
]
for old, new in subs:
    assert old in s, "Footer anchor missing: " + old[:80]
    s = s.replace(old, new)  # may appear once in dict + once in fallback default; replace_all=True OK

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("Footer.tsx: 5 lang descriptions rewritten")

# ============================================================
# (2) components/home/CTASection.tsx — 5 langs title/desc/features
# ============================================================
F = 'components/home/CTASection.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

# EN block (lines 7-12)
old_en = """    en: {
      title: 'Looking for a sourcing partner you can trust?',
      desc: 'Send us a reference image, your target quantity, and the market you sell into. You\\'ll get a same-day reply with two or three shortlisted factories and the price band you should expect.',
      btn: 'Request a quote',
      features: ['Same-day reply during Taipei business hours', 'Inspection video & photos with every shipment', 'FOB or EXW factory price disclosed on request', 'Invoiced and shipped by SunGene Co., LTD. (Taiwan)'],
    },"""
new_en = """    en: {
      title: 'Ready to discuss your product supply?',
      desc: 'Send us a reference image, your target quantity, and your destination market. Same-day reply during Taipei business hours with a buyer-facing quote and lead time.',
      btn: 'Request a quote',
      features: ['Same-day reply during Taipei business hours', 'Inspection video & photos with every shipment', 'AQL inspection by in-house SunGene staff', 'Invoiced and shipped by SunGene Co., LTD. (Taiwan)'],
    },"""
assert old_en in s
s = s.replace(old_en, new_en, 1)

# CN block
old_cn = """    cn: {
      title: '正在找一家值得信赖的采购合作伙伴？',
      desc: '给我们一张参考图、目标数量、销往的市场。台北上班时间当天回覆——附上 2–3 家筛选好的工厂，以及您可预期的价格区间。',
      btn: '索取报价',
      features: ['台北上班时间当天回覆', '每批附验货影片与照片', '问就给您 FOB 或 EXW 工厂价', '由 SunGene Co., LTD.（台湾）开发票出货'],
    },"""
new_cn = """    cn: {
      title: '准备好聊聊您的产品供应了吗？',
      desc: '给我们一张参考图、目标数量、销往的市场。台北上班时间当天回覆——附上买家报价与交期。',
      btn: '索取报价',
      features: ['台北上班时间当天回覆', '每批附验货影片与照片', 'SunGene 自有员工出口前 AQL 品检', '由 SunGene Co., LTD.（台湾）开发票出货'],
    },"""
assert old_cn in s
s = s.replace(old_cn, new_cn, 1)

# ZH block
old_zh = """    zh: {
      title: '正在找一家值得信賴的採購合作夥伴？',
      desc: '給我們一張參考圖、目標數量、銷往的市場。台北上班時間當天回覆——附上 2–3 家篩選好的工廠，以及你可預期的價格區間。',
      btn: '索取報價',
      features: ['台北上班時間當天回覆', '每批附驗貨影片與照片', '問就給你 FOB 或 EXW 工廠價', '由 SunGene Co., LTD.（台灣）開發票出貨'],
    },"""
new_zh = """    zh: {
      title: '準備好聊聊您的產品供應了嗎？',
      desc: '給我們一張參考圖、目標數量、銷往的市場。台北上班時間當天回覆——附上買家報價與交期。',
      btn: '索取報價',
      features: ['台北上班時間當天回覆', '每批附驗貨影片與照片', 'SunGene 自有員工出口前 AQL 品檢', '由 SunGene Co., LTD.(台灣)開發票出貨'],
    },"""
assert old_zh in s
s = s.replace(old_zh, new_zh, 1)

# FR block
old_fr = """    fr: {
      title: 'Vous cherchez un partenaire sourcing de confiance ?',
      desc: "Envoyez une photo de référence, votre quantité cible et le marché visé. Réponse le jour même pendant les heures de bureau de Taipei — avec 2–3 usines présélectionnées et la fourchette de prix attendue.",
      btn: 'Demander un devis',
      features: ['Réponse le jour même (heures Taipei)', "Vidéo et photos d'inspection à chaque expédition", 'Prix usine FOB ou EXW communiqué sur demande', 'Facturé et expédié par SunGene Co., LTD. (Taïwan)'],
    },"""
new_fr = """    fr: {
      title: "Prêt à parler de votre approvisionnement produits ?",
      desc: "Envoyez une photo de référence, votre quantité cible et votre marché de destination. Réponse le jour même pendant les heures de bureau de Taipei avec un devis acheteur et délai.",
      btn: 'Demander un devis',
      features: ['Réponse le jour même (heures Taipei)', "Vidéo et photos d'inspection à chaque expédition", 'Contrôle AQL pré-expédition par le personnel SunGene en interne', 'Facturé et expédié par SunGene Co., LTD. (Taïwan)'],
    },"""
assert old_fr in s
s = s.replace(old_fr, new_fr, 1)

# ES block
old_es = """    es: {
      title: '¿Busca un socio de sourcing confiable?',
      desc: 'Envíenos una foto de referencia, su cantidad objetivo y el mercado al que vende. Respondemos el mismo día en horario laboral de Taipéi — con 2–3 fábricas preseleccionadas y el rango de precios que debería esperar.',
      btn: 'Solicitar cotización',
      features: ['Respuesta el mismo día (horario Taipéi)', 'Video y fotos de inspección con cada envío', 'Precio FOB o EXW de fábrica bajo petición', 'Facturado y enviado por SunGene Co., LTD. (Taiwán)'],
    },"""
new_es = """    es: {
      title: '¿Listo para hablar de su suministro de productos?',
      desc: 'Envíenos una foto de referencia, su cantidad objetivo y su mercado de destino. Respuesta el mismo día en horario laboral de Taipéi con una cotización para el comprador y plazo.',
      btn: 'Solicitar cotización',
      features: ['Respuesta el mismo día (horario Taipéi)', 'Video y fotos de inspección con cada envío', 'Inspección AQL pre-envío por personal interno de SunGene', 'Facturado y enviado por SunGene Co., LTD. (Taiwán)'],
    },"""
assert old_es in s
s = s.replace(old_es, new_es, 1)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("CTASection.tsx: 5 lang blocks rewritten (title/desc/features)")

# ============================================================
# (3) components/home/FAQ.tsx — fix items[2] (pricing) and items[5] (Alibaba)
#     across 5 active langs
# ============================================================
F = 'components/home/FAQ.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

# EN items[2] pricing — drop principal/factory price-margin
old = "{ q: 'How is pricing structured?', a: 'We act as principal — we buy from the factory and resell. Every quote breaks out the factory price (FOB or EXW) and our margin on separate lines. The underlying factory invoice is available on request before order confirmation.' },"
new = "{ q: 'How is pricing structured?', a: 'We supply products from selected manufacturing partners in Taiwan and China. The quote you receive is a single buyer-facing price covering production, AQL inspection, and export documentation. Internal cost breakdown is handled case-by-case in commercial conversations.' },"
assert old in s; s = s.replace(old, new, 1)

# EN items[5] Alibaba record — fix "verified supplier storefront" to honest disclosure
old = "{ q: 'Can I see your Alibaba.com track record?', a: 'Yes — verified supplier storefront at momas.en.alibaba.com. Public, third-party-hosted, and updated in real time. We encourage every prospective partner to verify it before any commitment.' },"
new = "{ q: 'Can I see your Alibaba.com track record?', a: 'Yes — public Alibaba.com supplier storefront at momas.en.alibaba.com, active 3+ years. Star rating and verification badges are visible directly on the page; we do not paraphrase Alibaba tiers in our own copy. Verify it before any commitment.' },"
assert old in s; s = s.replace(old, new, 1)

# CN items[2]
old = "{ q: '报价怎么结构？', a: '我们以本身名义(principal)从工厂买货,加上我方利润后转卖给您。报价单上工厂价与我方利润分两行列出,下单前可索取工厂发票对照。' },"
new = "{ q: '报价怎么结构？', a: '我们从台湾与中国的精选制造伙伴供应产品。您看到的报价是一份买家报价,涵盖生产、AQL 品检与出口文件。内部成本拆解视需要在商务对话中个案处理。' },"
assert old in s; s = s.replace(old, new, 1)

# CN items[5]
old = "{ q: '能查得到你们的 Alibaba.com 记录吗？', a: '可以——momas.en.alibaba.com 认证店面。公开、由第三方维护、即时更新。建议任何潜在合作方在签约前先去查看。' },"
new = "{ q: '能查得到你们的 Alibaba.com 记录吗？', a: '可以——momas.en.alibaba.com 是 SunGene 公开的 Alibaba.com 商家店面,已经 3 年以上。星等与认证徽章直接显示在页面上;我们不在自己文案里描述 Alibaba 等级。签约前建议直接去查。' },"
assert old in s; s = s.replace(old, new, 1)

# ZH items[2]
old = "{ q: '報價怎麼結構？', a: '我們以本身名義(principal)從工廠買貨,加上我方利潤後轉賣給你。報價單上工廠價與我方利潤分兩行列出,下單前可索取工廠發票對照。' },"
new = "{ q: '報價怎麼結構？', a: '我們從台灣與中國的精選製造夥伴供應產品。您看到的報價是一份買家報價,涵蓋生產、AQL 品檢與出口文件。內部成本拆解視需要在商務對話中個案處理。' },"
assert old in s; s = s.replace(old, new, 1)

# ZH items[5]
old = "{ q: '能查得到你們的 Alibaba.com 紀錄嗎？', a: '可以——momas.en.alibaba.com 認證店面。公開、由第三方維護、即時更新。建議任何潛在合作方在簽約前先去查看。' },"
new = "{ q: '能查得到你們的 Alibaba.com 紀錄嗎？', a: '可以——momas.en.alibaba.com 是 SunGene 公開的 Alibaba.com 商家店面,已經 3 年以上。星等與認證徽章直接顯示在頁面上;我們不在自己文案裡描述 Alibaba 等級。簽約前建議直接去查。' },"
assert old in s; s = s.replace(old, new, 1)

# FR items[2] (pricing) — already mentions "société de négoce" so partially OK but has "Le prix FOB ou EXW usine est communiqué sur demande" — drop
old = "{ q: 'Comment est calculé le prix ? Y a-t-il une commission ?', a: \"Nous sommes une société de négoce, pas un agent à la commission. Nous achetons la marchandise à l'usine et vous la revendons. Le prix affiché est le coût final livré — pas de pourboire d'usine, pas de commission par expédition. Le prix FOB ou EXW usine est communiqué sur demande.\" },"
new = "{ q: 'Comment est calculé le prix ?', a: \"Nous fournissons des produits depuis nos partenaires manufacturiers sélectionnés à Taïwan et en Chine. Le devis que vous recevez est un prix unique pour l'acheteur couvrant production, contrôle AQL et documentation export. La ventilation interne des coûts est traitée au cas par cas en conversation commerciale.\" },"
assert old in s; s = s.replace(old, new, 1)

# FR items[5] Alibaba — rewrite
old = "{ q: \"Peut-on vérifier votre historique sur Alibaba.com ?\", a: \"Oui — boutique fournisseur vérifié sur momas.en.alibaba.com. Publique, hébergée par un tiers, mise à jour en temps réel. Nous encourageons toute vérification avant engagement.\" },"
new = "{ q: \"Peut-on vérifier votre historique sur Alibaba.com ?\", a: \"Oui — boutique publique Alibaba.com sur momas.en.alibaba.com, active 3+ ans. La note et les badges de vérification sont visibles directement sur la page ; nous ne paraphrasons pas les niveaux Alibaba dans notre propre copie. Vérifiez avant tout engagement.\" },"
assert old in s; s = s.replace(old, new, 1)

# ES items[2]
old = "{ q: '¿Cómo se estructura el precio?', a: 'Actuamos como principal — compramos a la fábrica y revendemos. Cada cotización desglosa el precio de fábrica (FOB o EXW) y nuestra margen en líneas separadas. La factura de fábrica subyacente está disponible bajo solicitud antes de confirmar.' },"
new = "{ q: '¿Cómo se estructura el precio?', a: 'Suministramos productos desde nuestros socios manufactureros seleccionados en Taiwán y China. La cotización que recibe es un precio único para el comprador que cubre producción, inspección AQL y documentación de exportación. El desglose interno de costos se maneja caso por caso en la conversación comercial.' },"
assert old in s; s = s.replace(old, new, 1)

# ES items[5]
old = "{ q: '¿Puedo verificar su historial en Alibaba.com?', a: 'Sí — tienda de proveedor verificado en momas.en.alibaba.com. Pública, alojada por terceros, actualizada en tiempo real. Recomendamos verificarla antes de cualquier compromiso.' },"
new = "{ q: '¿Puedo verificar su historial en Alibaba.com?', a: 'Sí — tienda pública Alibaba.com en momas.en.alibaba.com, activa 3+ años. La calificación y los distintivos de verificación están visibles directamente en la página; no parafraseamos los niveles Alibaba en nuestra propia copia. Verifíquela antes de cualquier compromiso.' },"
assert old in s; s = s.replace(old, new, 1)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("FAQ.tsx: 5 langs items[2] + items[5] rewritten (10 string subs)")

print("\nWave 13b: 3 components patched. Build + redeploy next.")
