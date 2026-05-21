# Wave 13c: more surfaces caught by direct grep audit
# - app/[lang]/page.tsx SCHEMA_TEXT.faq items[2] / [3] / [5] × 5 langs
# - lib/companyFaq.ts "Why work with SunGene instead of buying direct on Alibaba?" × 5 langs
import io

# ============================================================
# (A) app/[lang]/page.tsx SCHEMA_TEXT.faq
# ============================================================
F = 'app/[lang]/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

# EN items[2] pricing
old = "{ q: 'How is pricing structured?', a: 'Every quote breaks out the factory price (FOB or EXW), our margin, and the landed cost. The underlying factory invoice is available on request before order confirmation. One number on the quote, full breakdown when you want it.' },"
new = "{ q: 'How is pricing structured?', a: 'Single buyer-facing price covering production, AQL inspection, and export documentation. Internal cost breakdown is handled case-by-case in commercial conversations.' },"
assert old in s; s = s.replace(old, new, 1)

# EN items[3] inspection
old = "{ q: 'How do you handle factory inspection?', a: 'We inspect personally. For factories in Taiwan, our team drives to the site. For factories in China, the goods ship to our forwarder’s warehouse where we inspect before export. We have walked away from factories that offered envelopes to pass goods we judged sub-spec. Inspection videos and photos are included with every shipment.' },"
new = "{ q: 'How do you handle factory inspection?', a: 'In-house SunGene staff inspect personally. For factories in Taiwan, our team drives to the site. For factories in China, the goods ship to our forwarder’s warehouse where we inspect before export. AQL 2.5 sampling, photo and video documentation with every shipment.' },"
assert old in s; s = s.replace(old, new, 1)

# EN items[5] is Alibaba — already OK after Wave 11 ("Our storefront has been publicly active...")

# ZH items[2]
old = "{ q: '報價怎麼結構？', a: '每份報價單會把工廠價(FOB 或 EXW)、我方利潤、總到岸成本分行列出。下單前你可要求看到工廠發票。報價上一個數字,需要時隨時拆解。' },"
new = "{ q: '報價怎麼結構？', a: '一份買家報價,涵蓋生產、AQL 品檢與出口文件。內部成本拆解視需要在商務對話中個案處理。' },"
assert old in s; s = s.replace(old, new, 1)

# ZH items[3]
old = "{ q: '驗貨怎麼做？', a: '我們親自驗。台灣的工廠我們團隊直接開車去現場;中國的工廠出貨先進我們合作貨代的倉庫,由我們進場驗貨後才放行出口。每批出貨都附驗貨影片與照片,並依 AQL 抽樣。' },"
new = "{ q: '驗貨怎麼做？', a: 'SunGene 自有員工親自到合作工廠執行 AQL 2.5 出口前品檢。台灣工廠直接到場;中國工廠出貨先進合作貨代倉庫,我們進場驗貨後才放行出口。每批附驗貨影片與照片。' },"
assert old in s; s = s.replace(old, new, 1)

# CN items[2]
old = "{ q: '报价怎么结构？', a: '每份报价单会把工厂价(FOB 或 EXW)、我方利润、总到岸成本分行列出。下单前您可要求看到工厂发票。报价上一个数字,需要时随时拆解。' },"
new = "{ q: '报价怎么结构？', a: '一份买家报价,涵盖生产、AQL 品检与出口文件。内部成本拆解视需要在商务对话中个案处理。' },"
assert old in s; s = s.replace(old, new, 1)

# CN items[3]
old = "{ q: '验货怎么做？', a: '我们亲自验。台湾的工厂我们团队直接开车去现场;中国的工厂出货先进我们合作货代的仓库,由我们进场验货后才放行出口。每批出货都附验货视频与照片,并依 AQL 抽样。' },"
new = "{ q: '验货怎么做？', a: 'SunGene 自有员工亲自到合作工厂执行 AQL 2.5 出口前品检。台湾工厂直接到场;中国工厂出货先进合作货代仓库,我们进场验货后才放行出口。每批附验货视频与照片。' },"
assert old in s; s = s.replace(old, new, 1)

# FR items[2] pricing — already named "Comment est calculé le prix ? Y a-t-il une commission ?"
old = "{ q: 'Comment est calculé le prix ? Y a-t-il une commission ?', a: \"Nous sommes une société de négoce, pas un agent à la commission. Nous achetons la marchandise à l'usine et vous la revendons. Le prix affiché est le coût final livré — pas de pourboire d'usine, pas de commission par expédition. Le prix FOB ou EXW usine est communiqué sur demande.\" },"
new = "{ q: 'Comment est calculé le prix ?', a: \"Un seul devis acheteur couvrant production, contrôle AQL et documentation export. La ventilation interne des coûts est traitée au cas par cas en conversation commerciale.\" },"
assert old in s; s = s.replace(old, new, 1)

# FR items[3] inspection
old = "{ q: \"Comment se passe l'inspection en usine ?\", a: \"Nous inspectons en personne. Pour les usines à Taïwan, notre équipe se déplace sur site. Pour la Chine, la marchandise arrive d'abord à l'entrepôt de notre transitaire où nous inspectons avant export. Nous avons refusé des usines qui proposaient une enveloppe pour faire passer de la marchandise hors spécification. Vidéos et photos d'inspection sont fournies à chaque expédition.\" },"
new = "{ q: \"Comment se passe l'inspection en usine ?\", a: \"Le personnel SunGene en interne inspecte en personne. Usines à Taïwan : notre équipe se déplace sur site. Usines en Chine : la marchandise arrive à l'entrepôt de notre transitaire où nous inspectons avant export. Échantillonnage AQL 2,5, photos et vidéo à chaque expédition.\" },"
assert old in s; s = s.replace(old, new, 1)

# FR items[5] Alibaba
old = "{ q: \"Peut-on vérifier votre historique sur Alibaba.com ?\", a: \"Oui — notre boutique est sur momas.en.alibaba.com. Nous sommes fournisseur vérifié depuis trois ans. La note fluctue entre 3 et 5 étoiles selon la période ; vérifiez en direct.\" },"
new = "{ q: \"Peut-on vérifier votre historique sur Alibaba.com ?\", a: \"Oui — boutique publique Alibaba.com sur momas.en.alibaba.com, active 3+ ans. La note et les badges de vérification sont visibles directement sur la page ; nous ne paraphrasons pas les niveaux Alibaba dans notre propre copie. Vérifiez avant tout engagement.\" },"
assert old in s; s = s.replace(old, new, 1)

# ES items[2]
old = "{ q: '¿Cómo se estructura el precio?', a: 'Actuamos como principal — compramos a la fábrica y revendemos. Cada cotización desglosa el precio de fábrica (FOB o EXW) y nuestra margen en líneas separadas. La factura de fábrica subyacente está disponible bajo solicitud antes de confirmar.' },"
new = "{ q: '¿Cómo se estructura el precio?', a: 'Una sola cotización para el comprador que cubre producción, inspección AQL y documentación de exportación. El desglose interno de costos se maneja caso por caso en la conversación comercial.' },"
assert old in s; s = s.replace(old, new, 1)

# ES items[3]
old = "{ q: '¿Cómo realizan la inspección en fábrica?', a: 'Inspeccionamos en persona. Para fábricas en Taiwán, nuestro equipo se desplaza al sitio. Para China, la mercancía llega primero al almacén de nuestro agente de carga, donde inspeccionamos antes de exportar. Hemos rechazado fábricas que ofrecían sobres para aprobar mercancía fuera de especificación. Video y fotos de inspección con cada envío.' },"
new = "{ q: '¿Cómo realizan la inspección en fábrica?', a: 'Personal interno de SunGene inspecciona en persona. Fábricas en Taiwán: nuestro equipo se desplaza al sitio. Fábricas en China: la mercancía entra al almacén de nuestro agente de carga, donde inspeccionamos antes de exportar. Muestreo AQL 2.5, fotos y video con cada envío.' },"
assert old in s; s = s.replace(old, new, 1)

# ES items[5] Alibaba
old = "{ q: '¿Puedo verificar su historial en Alibaba.com?', a: 'Sí — nuestra tienda está en momas.en.alibaba.com. Somos proveedor verificado desde hace tres años. La calificación fluctúa entre 3 y 5 estrellas según el período; verifique en vivo.' },"
new = "{ q: '¿Puedo verificar su historial en Alibaba.com?', a: 'Sí — tienda pública Alibaba.com en momas.en.alibaba.com, activa 3+ años. La calificación y los distintivos de verificación son visibles directamente en la página; no parafraseamos los niveles Alibaba en nuestra propia copia. Verifíquela antes de cualquier compromiso.' },"
assert old in s; s = s.replace(old, new, 1)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("page.tsx SCHEMA_TEXT.faq: 13 substitutions across en/zh/cn/fr/es")

# ============================================================
# (B) lib/companyFaq.ts — "Why work with SunGene vs Alibaba" Q in 5 langs
# ============================================================
F = 'lib/companyFaq.ts'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

# EN
old = "{ q: 'Why work with SunGene instead of buying direct on Alibaba?', a: 'We operate as a verified supplier on Alibaba ourselves (3+ years on momas.en.alibaba.com — current star rating is publicly visible on the storefront and fluctuates between 3 and 5 stars by period). We know how the platform works from the seller side. We negotiate factory prices directly, handle on-site QC, and consolidate multiple suppliers into one shipment. Factory price and our margin are shown separately on every quote. One contact who answers same-day in your timezone.' },"
new = "{ q: 'Why work with SunGene instead of buying direct on Alibaba?', a: 'SunGene is a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. We operate our own public Alibaba.com storefront (momas.en.alibaba.com, active 3+ years; star rating and badges visible on the storefront — we do not paraphrase tiers). You buy products from us, not introductions to factories: one buyer-facing quote, on-site AQL inspection by in-house staff, consolidated shipping, and same-day reply in your timezone.' },"
assert old in s; s = s.replace(old, new, 1)

# ZH-Hant
old = "{ q: '為什麼不自己上 Alibaba 採購就好？', a: '我們本身就是 Alibaba 平台上的認證商家——已在 momas.en.alibaba.com 經營 3+ 年,當下星等公開可見、會隨期間在 3 到 5 星之間波動。我們從賣方視角熟悉平台運作。直接議價、不收回扣、到廠驗貨、把多個供應商整併成一個貨櫃。客戶拿到的是工廠價,加上一位在你時區當日回覆的合作夥伴。' },"
new = "{ q: '為什麼不自己上 Alibaba 採購就好？', a: 'SunGene 是台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。我們也經營自己的 Alibaba.com 公開店面(momas.en.alibaba.com,已 3+ 年;星等與認證徽章直接顯示在頁面,我們不在自己文案裡描述等級)。您是跟我們買產品,不是工廠介紹:一份買家報價、自有員工出口前 AQL 品檢、合併出貨、在您時區當日回覆。' },"
assert old in s; s = s.replace(old, new, 1)

# ZH-Hans
old = "{ q: '为什么不自己上 Alibaba 采购？', a: '我们本身就是 Alibaba 平台上的认证商家——已在 momas.en.alibaba.com 经营 3+ 年,当下星等公开可见、会随期间在 3 到 5 星之间波动。从卖方视角熟悉平台运作。直接议价、不收回扣、到厂验货、把多个供应商合并成一个货柜。客户拿到的是工厂价,加上一位在你时区当日回复的合作伙伴。' },"
new = "{ q: '为什么不自己上 Alibaba 采购？', a: 'SunGene 是台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。我们也经营自己的 Alibaba.com 公开店面(momas.en.alibaba.com,已 3+ 年;星等与认证徽章直接显示在页面,我们不在自己文案里描述等级)。您是跟我们买产品,不是工厂介绍:一份买家报价、自有员工出口前 AQL 品检、合并出货、在您时区当日回复。' },"
assert old in s; s = s.replace(old, new, 1)

# FR
old = "{ q: 'Pourquoi passer par SunGene plutôt qu’Alibaba directement ?', a: 'Nous sommes nous-mêmes fournisseur vérifié sur Alibaba (3+ ans sur momas.en.alibaba.com — la note actuelle est publique sur la boutique et fluctue entre 3 et 5 étoiles selon la période). Nous connaissons la plateforme côté vendeur. Nous négocions le prix usine, refusons les commissions occultes, effectuons le CQ sur place et regroupons plusieurs fournisseurs en un conteneur. Vous obtenez le prix usine et un partenaire qui répond le jour même.' },"
new = "{ q: 'Pourquoi passer par SunGene plutôt qu’Alibaba directement ?', a: \"SunGene est une société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Nous opérons notre propre boutique publique Alibaba.com (momas.en.alibaba.com, active 3+ ans ; note et badges de vérification visibles directement sur la page — nous ne paraphrasons pas les niveaux Alibaba). Vous achetez des produits chez nous, pas des introductions d'usines : un seul devis acheteur, contrôle AQL pré-expédition par le personnel SunGene en interne, expédition consolidée, réponse le jour même dans votre fuseau.\" },"
assert old in s; s = s.replace(old, new, 1)

# ES
old = "{ q: '¿Por qué trabajar con SunGene en vez de comprar directo en Alibaba?', a: 'Somos proveedor verificado en Alibaba (3+ años en momas.en.alibaba.com — la calificación actual es pública en la tienda y fluctúa entre 3 y 5 estrellas según el período). Conocemos la plataforma desde el lado del vendedor. Negociamos precio de fábrica, hacemos QC en sitio y consolidamos múltiples proveedores en un contenedor. Precio de fábrica y nuestra margen mostrados por separado en cada cotización. Un contacto que responde el mismo día en su zona horaria.' },"
new = "{ q: '¿Por qué trabajar con SunGene en vez de comprar directo en Alibaba?', a: 'SunGene es una empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Operamos nuestra propia tienda pública Alibaba.com (momas.en.alibaba.com, activa 3+ años; calificación y distintivos visibles directamente en la página — no parafraseamos los niveles Alibaba). Usted compra productos a nosotros, no introducciones a fábricas: una sola cotización para el comprador, inspección AQL pre-envío por personal interno de SunGene, envío consolidado y respuesta el mismo día en su zona horaria.' },"
assert old in s; s = s.replace(old, new, 1)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("companyFaq.ts: 5 langs Alibaba-comparison Q rewritten")
print("\nWave 13c done. Build + redeploy next.")
