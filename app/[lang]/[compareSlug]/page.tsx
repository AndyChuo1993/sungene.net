import type { Metadata } from 'next'
import { ALL_LANGS, Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildPageMetadata, normalizeLang } from '@/lib/seo'
import { SITE_URL } from '@/lib/siteConfig'

export const dynamic = 'force-static'
export const revalidate = 86400

type CompareKey = 'vs-alibaba-direct' | 'vs-direct-factory'

const SLUGS: Record<CompareKey, true> = {
  'vs-alibaba-direct': true,
  'vs-direct-factory': true,
}

export async function generateStaticParams() {
  return Object.keys(SLUGS).map((compareSlug) => ({ compareSlug }))
}

const META: Record<CompareKey, Record<Lang, { title: string; desc: string }>> = {
  'vs-alibaba-direct': {
    en: { title: 'SunGene vs Alibaba direct — which suits your sourcing?', desc: 'Honest comparison: when DIY Alibaba sourcing makes sense, when a Taiwan-based trading company pays off, and the 8 criteria buyers should weigh first.' },
    zh: { title: 'SunGene vs Alibaba 直購 — 哪個適合你?', desc: '誠實對比:何時自己在 Alibaba 採購可以,何時找台灣貿易公司值得多付一點。' },
    cn: { title: 'SunGene vs Alibaba 直采 — 哪个适合您?', desc: '诚实对比:何时自己在 Alibaba 采购可以,何时找台湾贸易公司值得多付一点。' },
    fr: { title: 'SunGene vs Alibaba direct — lequel pour vous ?', desc: 'Comparaison honnête : quand acheter en DIY sur Alibaba marche, quand une société de négoce Taïwan vaut la marge.' },
    es: { title: 'SunGene vs Alibaba directo — ¿cuál te conviene?', desc: 'Comparación honesta: cuándo comprar en DIY en Alibaba funciona, cuándo una empresa comercial en Taiwán vale la margen.' },
    pt: { title: 'SunGene vs Alibaba direto', desc: 'Comparação honesta.' },
    ko: { title: 'SunGene vs Alibaba 직거래', desc: '솔직한 비교.' },
    ja: { title: 'SunGene vs Alibaba 直接購入', desc: '正直な比較。' },
    ar: { title: 'SunGene مقارنة الشراء المباشر', desc: 'مقارنة صادقة.' },
    th: { title: 'SunGene vs ซื้อตรง Alibaba', desc: 'เปรียบเทียบตรงไปตรงมา' },
    vi: { title: 'SunGene vs Mua trực tiếp Alibaba', desc: 'So sánh thẳng thắn.' },
    de: { title: 'SunGene vs Direktkauf Alibaba', desc: 'Ehrlicher Vergleich.' },
  },
  'vs-direct-factory': {
    en: { title: 'SunGene vs direct factory order — what changes?', desc: 'Going direct to a Chinese factory saves the trading-company margin but transfers QC, export documentation, dispute handling, and timeline risk to you. Comparison of who handles what.' },
    zh: { title: 'SunGene vs 直接向工廠下單 — 差別在哪?', desc: '直接向中國工廠下單可以省掉貿易公司的利潤,但 QC、出口文件、爭議處理、時程風險全部轉到您身上。逐項對比誰負責什麼。' },
    cn: { title: 'SunGene vs 直接向工厂下单 — 差别在哪?', desc: '直接向中国工厂下单可以省掉贸易公司的利润,但 QC、出口文件、争议处理、时程风险全部转到您身上。逐项对比谁负责什么。' },
    fr: { title: "SunGene vs commande directe usine — ce qui change", desc: "Aller directement chez une usine chinoise économise la marge de la société de négoce, mais transfère le contrôle qualité, les documents d'export, la gestion des litiges et le risque de délai à vous. Comparaison de qui gère quoi." },
    es: { title: 'SunGene vs pedido directo a fábrica — la diferencia', desc: 'Ir directo a una fábrica china ahorra la margen de la empresa comercial, pero transfiere el control de calidad, la documentación de exportación, la gestión de disputas y el riesgo de plazo a usted. Comparación de quién gestiona qué.' },
    pt: { title: 'SunGene vs pedido direto à fábrica', desc: 'Comparação honesta.' },
    ko: { title: 'SunGene vs 공장 직거래', desc: '솔직한 비교.' },
    ja: { title: 'SunGene vs 工場直接発注', desc: '正直な比較。' },
    ar: { title: 'SunGene مقابل الطلب المباشر من المصنع', desc: 'مقارنة صادقة.' },
    th: { title: 'SunGene vs สั่งซื้อตรงจากโรงงาน', desc: 'เปรียบเทียบตรงไปตรงมา' },
    vi: { title: 'SunGene vs Đặt hàng trực tiếp từ nhà máy', desc: 'So sánh thẳng thắn.' },
    de: { title: 'SunGene vs Direkter Werksauftrag', desc: 'Ehrlicher Vergleich.' },
  },
}

const CONTENT: Record<CompareKey, Record<Lang, {
  intro: string
  whenAlt: { title: string; bullets: string[] }
  whenUs: { title: string; bullets: string[] }
  tableRows: { criterion: string; alt: string; us: string }[]
  bottomLine: string
}>> = {
  'vs-alibaba-direct': {
    en: {
      intro: "Alibaba is the world's largest B2B marketplace. We are on it ourselves (verified storefront at momas.en.alibaba.com). We are not against buying direct on Alibaba — for some buyers, in some situations, it's the right call. Here is the honest version.",
      whenAlt: {
        title: 'Buying direct on Alibaba works when:',
        bullets: [
          'You have time to vet 8-15 factories yourself, request samples, and read review history carefully',
          'Your order is small (under USD 1,000) and you can absorb a bad batch as a learning cost',
          "You speak the supplier's language fluently OR are comfortable with Google Translate factory negotiations",
          'You will fly to China to inspect goods in person, OR you have an existing inspection agency contract',
          'You are buying a generic, well-defined SKU with no customization (color, size, branding)',
        ],
      },
      whenUs: {
        title: 'A Taiwan-based trading company makes sense when:',
        bullets: [
          'You want to mix 2-5 product categories in one consolidated container',
          'You need custom-print packaging, OEM/ODM branding, or Pantone color matching',
          'You want pre-shipment QC done by your representative, not the supplier or a third-party agency you have never met',
          'Your order, if it goes wrong, costs more than the typical 5-15% trading-house margin',
          'You want a single accountability point with a Taiwan-registered company',
          'Your supplier list will grow and you want one vetted relationship instead of 30 separate ones',
        ],
      },
      tableRows: [
        { criterion: 'Factory access', alt: 'Anyone with email', us: 'Pre-vetted relationship network' },
        { criterion: 'Price', alt: 'Factory price (risk of hidden surcharge)', us: 'Factory price + declared margin' },
        { criterion: 'QC', alt: 'Arrange yourself or pay third party', us: 'Included, by SunGene staff' },
        { criterion: 'Consolidation', alt: 'Per supplier, separate shipments', us: 'Multi-supplier in one container' },
        { criterion: 'Disputes', alt: 'Alibaba Trade Assurance, slow', us: 'Direct, Taiwan jurisdiction' },
        { criterion: 'Customization', alt: 'You negotiate', us: 'We negotiate + verify' },
        { criterion: 'Time invested', alt: 'High (40-80 h per project)', us: 'Low (3-8 h)' },
        { criterion: 'Ideal for', alt: 'Small generic orders, expert buyer', us: 'Multi-SKU, customized, recurring' },
      ],
      bottomLine: "If your time is worth less than the trader's margin, or you enjoy supplier management as a craft, buy direct. If your time is worth more, or you need consolidation + QC + accountability, work with us. Both can be the right answer.",
    },
    zh: {
      intro: 'Alibaba 是全球最大的 B2B 採購平台,我們自己就是上面的認證商家(momas.en.alibaba.com,3+ 年經營),所以這篇寫的不是「Alibaba 不好」。對某些買家、某些品類、某些訂單規模,直接在 Alibaba 採購就是對的選擇。這份對比寫給已經評估過 Alibaba、想知道「何時多付 5-15% 找台灣代理夥伴是划算的」的買家 —— 我們會把彼此各自的甜蜜點與盲點都攤開來。',
      whenAlt: {
        title: '直接在 Alibaba 採購適合你,當:',
        bullets: [
          '你有時間自己審核 8-15 家工廠、要求樣品、看完評價紀錄與爭議紀錄、跑完三輪 RFQ 比較',
          '你的訂單小(USD 1,000 以下),壞一批的損失你能當作學費吸收掉,不影響本業現金流',
          '你能流利使用供應商的中文(或常用語言),或習慣用 Google Translate 跟工廠交涉付款、規格、瑕疵處理',
          '你會親自飛到中國驗貨,或者已經跟在地驗貨代理機構簽好年約',
          '你買的是規格清楚的通用 SKU,不需要任何客製化(沒有顏色 / 尺寸 / 品牌 / 印刷 / 包裝結構的調整需求)',
          '你已經有自己的海運貨代,熟悉 FOB、CIF、DDP 之間的差異與成本影響,知道哪些是工廠該出哪些不是',
          '你有時間追蹤多家供應商的進度,並能在他們延遲時做出快速備援決策',
        ],
      },
      whenUs: {
        title: '找台灣貿易公司比較合理,當:',
        bullets: [
          '你想把 2-5 種品類混在同一個櫃裡寄出,需要有人在源頭幫忙整合多家工廠的出貨時序',
          '你需要客製印刷包裝、OEM/ODM 品牌標示、或精準 Pantone 對色 —— 這些細節在 Alibaba 自助流程裡常出錯',
          '你希望由「你的代理」做出貨前驗貨(由我們員工執行 AQL 抽樣),而不是工廠自己驗、或一家你從沒見過的第三方驗貨公司',
          '訂單一旦出錯,損失大於一般 5-15% 的貿易商利潤 —— 這時值得用利潤買來「有人負責」',
          '你想要單一窗口、單一台灣註冊公司負責 —— 出問題的對象是我們,不是某個工廠老闆的手機號',
          '你的供應商清單會持續成長,寧可一個審核過的關係持續加品項,也不要每換一個品項就 onboard 一家陌生工廠',
          '你需要報價單上「工廠價」與「我方利潤」分行列出,而不是一個總價沒有細節',
        ],
      },
      tableRows: [
        { criterion: '工廠接觸', alt: '任何有 email 的人都可以', us: '預先審核過的關係網絡' },
        { criterion: '價格', alt: '工廠報價(隱藏附加費用風險)', us: '工廠價 + 揭露的利潤' },
        { criterion: '驗貨', alt: '自己安排或另找第三方', us: '已含,由 SunGene 員工執行' },
        { criterion: '併櫃', alt: '每家供應商各自出貨', us: '多家供應商整合一個櫃' },
        { criterion: '爭議處理', alt: 'Alibaba Trade Assurance,流程慢', us: '直接對接,台灣司法管轄' },
        { criterion: '客製化', alt: '你自己跟工廠談', us: '我們幫你談 + 驗證細節' },
        { criterion: '時間投入', alt: '高(每案 40-80 小時)', us: '低(3-8 小時)' },
        { criterion: '適合', alt: '小單、通用品、老手買家', us: '多品項、客製、長期採購' },
      ],
      bottomLine: '如果你的時間成本低於貿易商利潤(5-15%),或者你享受供應商管理這門手藝、想累積自己的工廠網絡,就直接買吧 —— 這是合理的選擇。如果你的時間值更多、或者你的訂單一旦出錯成本高於 15%,或者你需要整合、驗貨、有人負責,那就找我們。兩個都可以是對的答案 —— 重點是知道自己付的錢買的是什麼,而不是用最便宜的方式買到最貴的教訓。',
    },
    cn: {
      intro: 'Alibaba 是全球最大的 B2B 采购平台,我们自己就是上面的认证商家(momas.en.alibaba.com,3+ 年经营),所以这篇写的不是「Alibaba 不好」。对某些买家、某些品类、某些订单规模,直接在 Alibaba 采购就是对的选择。这份对比写给已经评估过 Alibaba、想知道「何时多付 5-15% 找台湾代理伙伴是划算的」的买家 —— 我们会把彼此各自的甜蜜点与盲点都摊开来。',
      whenAlt: {
        title: '直接在 Alibaba 采购适合您,当:',
        bullets: [
          '您有时间自己审核 8-15 家工厂、要求样品、看完评价记录与争议记录、跑完三轮 RFQ 比较',
          '您的订单小(USD 1,000 以下),坏一批的损失您能当作学费吸收掉,不影响本业现金流',
          '您能流利使用供应商的中文(或常用语言),或习惯用 Google Translate 跟工厂交涉付款、规格、瑕疵处理',
          '您会亲自飞到中国验货,或者已经跟当地验货代理机构签好年约',
          '您买的是规格清楚的通用 SKU,不需要任何定制(没有颜色 / 尺寸 / 品牌 / 印刷 / 包装结构的调整需求)',
          '您已经有自己的海运货代,熟悉 FOB、CIF、DDP 之间的差异与成本影响,知道哪些是工厂该出哪些不是',
          '您有时间追踪多家供应商的进度,并能在他们延迟时做出快速备援决策',
        ],
      },
      whenUs: {
        title: '找台湾贸易公司比较合理,当:',
        bullets: [
          '您想把 2-5 种品类混在同一个柜里寄出,需要有人在源头帮忙整合多家工厂的出货时序',
          '您需要定制印刷包装、OEM/ODM 品牌标示、或精准 Pantone 对色 —— 这些细节在 Alibaba 自助流程里常出错',
          '您希望由「您的代理」做出货前验货(由我们员工执行 AQL 抽样),而不是工厂自己验、或一家您从没见过的第三方验货公司',
          '订单一旦出错,损失大于一般 5-15% 的贸易商利润 —— 这时值得用利润买来「有人负责」',
          '您想要单一窗口、单一台湾注册公司负责 —— 出问题的对象是我们,不是某个工厂老板的手机号',
          '您的供应商清单会持续成长,宁可一个审核过的关系持续加品项,也不要每换一个品项就 onboard 一家陌生工厂',
          '您需要报价单上「工厂价」与「我方利润」分行列出,而不是一个总价没有细节',
        ],
      },
      tableRows: [
        { criterion: '工厂接触', alt: '任何有 email 的人都可以', us: '预先审核过的关系网络' },
        { criterion: '价格', alt: '工厂报价(隐藏附加费用风险)', us: '工厂价 + 揭露的利润' },
        { criterion: '验货', alt: '自己安排或另找第三方', us: '已含,由 SunGene 员工执行' },
        { criterion: '并柜', alt: '每家供应商各自出货', us: '多家供应商整合一个柜' },
        { criterion: '争议处理', alt: 'Alibaba Trade Assurance,流程慢', us: '直接对接,台湾司法管辖' },
        { criterion: '定制化', alt: '您自己跟工厂谈', us: '我们帮您谈 + 验证细节' },
        { criterion: '时间投入', alt: '高(每案 40-80 小时)', us: '低(3-8 小时)' },
        { criterion: '适合', alt: '小单、通用品、老手买家', us: '多品项、定制、长期采购' },
      ],
      bottomLine: '如果您的时间成本低于贸易商利润(5-15%),或者您享受供应商管理这门手艺、想累积自己的工厂网络,就直接买吧 —— 这是合理的选择。如果您的时间值更多、或者您的订单一旦出错成本高于 15%,或者您需要整合、验货、有人负责,那就找我们。两个都可以是对的答案 —— 重点是知道自己付的钱买的是什么,而不是用最便宜的方式买到最贵的教训。',
    },
    fr: {
      intro: "Alibaba est la plus grande place de marché B2B au monde. Nous y sommes nous-mêmes (boutique vérifiée sur momas.en.alibaba.com). Nous ne sommes pas contre l'achat direct sur Alibaba — pour certains acheteurs, dans certaines situations, c'est le bon choix. Voici la version honnête.",
      whenAlt: { title: 'Acheter direct sur Alibaba fonctionne quand :', bullets: [
        'Vous avez le temps de vérifier 8-15 usines vous-même, demander des échantillons et lire historique des avis',
        'Votre commande est petite (moins de USD 1 000) et vous pouvez absorber un mauvais lot comme coût d\'apprentissage',
        'Vous parlez la langue du fournisseur OU êtes à l\'aise avec les négociations via Google Translate',
        'Vous irez en Chine inspecter en personne, OU vous avez déjà un contrat avec une agence d\'inspection',
        'Vous achetez un SKU générique, bien défini, sans personnalisation',
      ] },
      whenUs: { title: 'Une société de négoce basée à Taïwan a du sens quand :', bullets: [
        'Vous voulez combiner 2-5 catégories dans un conteneur consolidé',
        "Vous avez besoin d'emballage imprimé personnalisé, OEM/ODM, ou correspondance Pantone",
        'Vous voulez le CQ pré-expédition fait par votre représentant',
        'Votre commande, si elle tourne mal, coûte plus que la marge typique 5-15% du négociant',
        'Vous voulez un point de responsabilité unique avec une société taïwanaise enregistrée',
        'Votre liste de fournisseurs grandira et vous préférez une relation vérifiée',
      ] },
      tableRows: [
        { criterion: 'Accès usine', alt: 'Tout le monde avec email', us: 'Réseau de relations pré-vérifiées' },
        { criterion: 'Prix', alt: 'Prix usine (risque de surcoût caché)', us: 'Prix usine + marge déclarée' },
        { criterion: 'CQ', alt: 'À organiser ou tiers payant', us: 'Inclus, par personnel SunGene' },
        { criterion: 'Consolidation', alt: 'Par fournisseur, expéditions séparées', us: 'Multi-fournisseurs en un conteneur' },
        { criterion: 'Litiges', alt: 'Alibaba Trade Assurance, lent', us: 'Direct, juridiction Taïwan' },
        { criterion: 'Personnalisation', alt: 'Vous négociez', us: 'Nous négocions + vérifions' },
        { criterion: 'Temps investi', alt: 'Élevé (40-80 h par projet)', us: 'Faible (3-8 h)' },
        { criterion: 'Idéal pour', alt: 'Commandes génériques, acheteur expert', us: 'Multi-SKU, personnalisé, récurrent' },
      ],
      bottomLine: "Si votre temps vaut moins que la marge du négociant, ou si vous aimez la gestion fournisseurs comme métier, achetez direct. Si votre temps vaut plus, ou si vous avez besoin de consolidation + CQ + responsabilité, travaillez avec nous. Les deux peuvent être la bonne réponse.",
    },
    es: {
      intro: 'Alibaba es la plataforma B2B más grande del mundo. Estamos en ella nosotros mismos (tienda verificada en momas.en.alibaba.com). No estamos en contra de comprar directo en Alibaba — para algunos compradores, en algunas situaciones, es la decisión correcta. Aquí la versión honesta.',
      whenAlt: { title: 'Comprar directo en Alibaba funciona cuando:', bullets: [
        'Tiene tiempo para auditar 8-15 fábricas, pedir muestras y leer historial de reseñas con cuidado',
        'Su pedido es pequeño (menos de USD 1,000) y puede absorber un lote malo como costo de aprendizaje',
        'Habla el idioma del proveedor O está cómodo con negociaciones vía Google Translate',
        'Irá personalmente a China a inspeccionar O ya tiene contrato con agencia de inspección',
        'Compra un SKU genérico, bien definido, sin personalización',
      ] },
      whenUs: { title: 'Un socio de sourcing en Taiwán tiene sentido cuando:', bullets: [
        'Quiere combinar 2-5 categorías en un contenedor consolidado',
        'Necesita empaque impreso personalizado, OEM/ODM, o correspondencia Pantone',
        'Quiere QC pre-envío hecho por su representante, no el proveedor ni un tercero desconocido',
        'Su pedido, si sale mal, cuesta más que el margen típico 5-15% del comerciante',
        'Quiere un único punto de responsabilidad con una empresa registrada en Taiwán',
        'Su lista de proveedores crecerá y quiere una relación verificada en lugar de 30 separadas',
      ] },
      tableRows: [
        { criterion: 'Acceso a fábrica', alt: 'Cualquiera con email', us: 'Red de relaciones pre-verificadas' },
        { criterion: 'Precio', alt: 'Precio fábrica (riesgo de sobrecargo oculto)', us: 'Precio fábrica + margen declarado' },
        { criterion: 'QC', alt: 'Organizar usted o pagar tercero', us: 'Incluido, por personal SunGene' },
        { criterion: 'Consolidación', alt: 'Por proveedor, envíos separados', us: 'Multi-proveedor en un contenedor' },
        { criterion: 'Disputas', alt: 'Alibaba Trade Assurance, lento', us: 'Directo, jurisdicción Taiwán' },
        { criterion: 'Personalización', alt: 'Usted negocia', us: 'Nosotros negociamos + verificamos' },
        { criterion: 'Tiempo invertido', alt: 'Alto (40-80 h por proyecto)', us: 'Bajo (3-8 h)' },
        { criterion: 'Ideal para', alt: 'Pedidos genéricos pequeños, comprador experto', us: 'Multi-SKU, personalizado, recurrente' },
      ],
      bottomLine: 'Si su tiempo vale menos que el margen del comerciante, o disfruta la gestión de proveedores como oficio, compre directo. Si su tiempo vale más, o necesita consolidación + QC + responsabilidad, trabaje con nosotros. Ambos pueden ser la respuesta correcta.',
    },
    pt: { intro: 'Comparação honesta entre comprar direto na Alibaba e usar a SunGene.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    ko: { intro: 'Alibaba 직거래와 SunGene 비교.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    ja: { intro: 'Alibaba直接購入とSunGeneの比較。', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    ar: { intro: 'مقارنة شراء Alibaba المباشر و SunGene.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    th: { intro: 'เปรียบเทียบซื้อตรง Alibaba กับ SunGene', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    vi: { intro: 'So sánh mua trực tiếp Alibaba và SunGene.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    de: { intro: 'Vergleich Alibaba Direktkauf und SunGene.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
  },
  'vs-direct-factory': {
    en: {
      intro: "Going direct to a Chinese factory is the lowest-cost path on paper. We're not pretending our margin is invisible — SunGene is a Taiwan-based trading company and you do pay for what we add. The honest question is: what do you take on yourself when you go direct, and is it actually cheaper after that?",
      whenAlt: {
        title: 'Going direct to a factory works when:',
        bullets: [
          'You have an established relationship with a specific factory that already produces your SKU and have shipped from them multiple times without incident',
          'You have in-house QC capacity (a person who flies, or an inspection agency on retainer) to verify pre-shipment quality on every order',
          'You have an in-house export operations team handling Incoterms, packing lists, commercial invoices, country-of-origin docs, and customs broker coordination',
          'You can absorb a 4-6 week delay or a defective shipment as a learning cost without harming downstream production or commitments',
          'You only need one or two SKUs from one factory — no multi-supplier consolidation, no cross-supplier coordination',
          'Your home country has a clean bilateral payment and dispute resolution path to mainland China',
        ],
      },
      whenUs: {
        title: 'A Taiwan-based trading company makes sense when:',
        bullets: [
          'You want one accountable counterparty — quote, production schedule, QC, export documentation, and any post-shipment claim all flow through SunGene',
          'You want pre-shipment AQL inspection performed by SunGene staff in person, not the factory inspecting itself',
          'You want payment to flow through a Taiwan-registered entity for cleaner banking and Taiwan-jurisdiction dispute path',
          'You need to consolidate multiple suppliers (custom packaging from Factory A + drinkware from Factory B + blankets from Factory C) into one shipment',
          'You need export documentation handled (CE / FDA / FSC / country-of-origin / Incoterms) without building that operations capacity in-house',
          'Your supplier network is still being built — you want a vetted Taiwan + China relationships base rather than starting from scratch for each new SKU',
        ],
      },
      tableRows: [
        { criterion: 'Counterparty', alt: 'A specific Chinese factory you signed with', us: 'SunGene Co., LTD. (Taiwan-registered)' },
        { criterion: 'Pricing', alt: 'Direct factory price (lowest on paper)', us: 'Single buyer-facing price covering production, AQL, docs' },
        { criterion: 'QC', alt: 'You arrange (fly, agency, or trust the factory)', us: 'In-house SunGene staff, AQL 2.5 pre-shipment' },
        { criterion: 'Export docs', alt: 'You assemble (or pay forwarder extra)', us: 'Included by Taiwan + China teams' },
        { criterion: 'Payment', alt: 'Wire to a Chinese bank, China-side dispute path', us: 'Wire to Taiwan entity, Taiwan-jurisdiction recourse' },
        { criterion: 'Consolidation', alt: 'One factory per shipment, no cross-supplier coordination', us: 'Multi-supplier consolidated in one container' },
        { criterion: 'Lead time risk', alt: 'You manage delays and rework with the factory directly', us: 'We coordinate, escalate, and reroute when needed' },
        { criterion: 'Ideal for', alt: 'Stable single-SKU buyer with QC + export ops in-house', us: 'Multi-category buyer, growing supplier base, no in-house export ops' },
      ],
      bottomLine: "Direct factory order works for buyers with mature QC and export operations who only buy a known SKU from a known partner. SunGene works for buyers who want one accountable counterparty across both markets, in-house QC, consolidated shipping, and a Taiwan-jurisdiction dispute path. Both can be the right answer — the difference is what you take on yourself.",
    },
    zh: {
      intro: "直接向中國工廠下單,在帳面上是成本最低的路。我們不會假裝我們的利潤不存在 —— SunGene 是台灣登記貿易公司,您確實有付一份貿易公司的成本。誠實的問題是:直接走,有哪些東西轉到您身上、加上之後真的比較便宜嗎?",
      whenAlt: {
        title: '直接向工廠下單適合你,當:',
        bullets: [
          '你跟某家工廠已有穩定關係,他們已經為你生產過同樣 SKU、出過幾批沒出事',
          '你有自己的 QC 人力(自己飛、或包年驗貨代理),能在每批出貨前現場驗貨',
          '你有自己的出口營運團隊處理 Incoterms、裝箱單、商業發票、原產地證明、報關行協調',
          '一旦延遲 4-6 週或某批瑕疵,你能吸收 —— 不影響下游生產與客戶承諾',
          '你只需要 1-2 個 SKU、來自 1 家工廠 —— 沒有多廠整合、沒有跨供應商協調',
          '你的母國對中國大陸有清楚的雙邊付款與爭議解決路徑',
        ],
      },
      whenUs: {
        title: '台灣貿易公司比較合理,當:',
        bullets: [
          '你想要單一對口窗口 —— 報價、生產排程、QC、出口文件、出貨後 claim,全部經過 SunGene',
          '你希望出口前 AQL 品檢由 SunGene 員工親自執行,而不是工廠自己驗',
          '你希望付款匯入台灣登記公司,銀行紀錄與爭議路徑走台灣司法管轄',
          '你需要整合多家供應商(例如 A 廠客製包裝 + B 廠杯具 + C 廠毛毯)到同一個出貨櫃',
          '你需要出口文件處理(CE / FDA / FSC / 原產地證明 / Incoterms),而不想在內部建立這個營運能力',
          '你的工廠關係還在累積中 —— 你寧可用一個已審核過的台灣 + 中國供應商網絡,而不是每換一個 SKU 就從零 onboard 一家工廠',
        ],
      },
      tableRows: [
        { criterion: '對口方', alt: '你自己跟某家中國工廠簽約', us: 'SunGene Co., LTD.(台灣登記)' },
        { criterion: '價格', alt: '工廠直接報價(帳面最低)', us: '一份買家報價,涵蓋生產、AQL、文件' },
        { criterion: '驗貨', alt: '你自己安排(飛、代理、或相信工廠)', us: 'SunGene 自有員工執行 AQL 2.5 出口前品檢' },
        { criterion: '出口文件', alt: '你自己組(或請貨代另外收費)', us: '已含,由台灣與中國團隊處理' },
        { criterion: '付款', alt: '匯到中國銀行,中國司法處理爭議', us: '匯到台灣登記公司,台灣司法處理' },
        { criterion: '併櫃', alt: '一廠一櫃,沒有跨供應商協調', us: '多家供應商整合到同一個櫃' },
        { criterion: '時程風險', alt: '你直接跟工廠管理延遲與重做', us: '我們協調、升級、必要時轉廠' },
        { criterion: '適合', alt: '單一 SKU、有自己 QC + 出口營運的買家', us: '多品類、供應商還在擴張、沒有自己的出口營運' },
      ],
      bottomLine: '直接向工廠下單適合有成熟 QC 與出口營運能力、且只跟熟悉工廠買固定 SKU 的買家。SunGene 適合想要單一對口、自有 QC、合併出貨、台灣司法管轄爭議路徑的買家。兩個都可以是對的答案 —— 差別在於哪些東西你願意自己扛。',
    },
    cn: {
      intro: '直接向中国工厂下单,在帐面上是成本最低的路。我们不会假装我们的利润不存在 —— SunGene 是台湾登记贸易公司,您确实有付一份贸易公司的成本。诚实的问题是:直接走,有哪些东西转到您身上、加上之后真的比较便宜吗?',
      whenAlt: {
        title: '直接向工厂下单适合您,当:',
        bullets: [
          '您跟某家工厂已有稳定关系,他们已经为您生产过同样 SKU、出过几批没出事',
          '您有自己的 QC 人力(自己飞、或包年验货代理),能在每批出货前现场验货',
          '您有自己的出口营运团队处理 Incoterms、装箱单、商业发票、原产地证明、报关行协调',
          '一旦延迟 4-6 周或某批瑕疵,您能吸收 —— 不影响下游生产与客户承诺',
          '您只需要 1-2 个 SKU、来自 1 家工厂 —— 没有多厂整合、没有跨供应商协调',
          '您的母国对中国大陆有清楚的双边付款与争议解决路径',
        ],
      },
      whenUs: {
        title: '台湾贸易公司比较合理,当:',
        bullets: [
          '您想要单一对口窗口 —— 报价、生产排程、QC、出口文件、出货后 claim,全部经过 SunGene',
          '您希望出口前 AQL 品检由 SunGene 员工亲自执行,而不是工厂自己验',
          '您希望付款汇入台湾登记公司,银行记录与争议路径走台湾司法管辖',
          '您需要整合多家供应商(例如 A 厂定制包装 + B 厂杯具 + C 厂毛毯)到同一个出货柜',
          '您需要出口文件处理(CE / FDA / FSC / 原产地证明 / Incoterms),而不想在内部建立这个营运能力',
          '您的工厂关系还在累积中 —— 您宁可用一个已审核过的台湾 + 中国供应商网络,而不是每换一个 SKU 就从零 onboard 一家工厂',
        ],
      },
      tableRows: [
        { criterion: '对口方', alt: '您自己跟某家中国工厂签约', us: 'SunGene Co., LTD.(台湾登记)' },
        { criterion: '价格', alt: '工厂直接报价(帐面最低)', us: '一份买家报价,涵盖生产、AQL、文件' },
        { criterion: '验货', alt: '您自己安排(飞、代理、或相信工厂)', us: 'SunGene 自有员工执行 AQL 2.5 出口前品检' },
        { criterion: '出口文件', alt: '您自己组(或请货代另外收费)', us: '已含,由台湾与中国团队处理' },
        { criterion: '付款', alt: '汇到中国银行,中国司法处理争议', us: '汇到台湾登记公司,台湾司法处理' },
        { criterion: '并柜', alt: '一厂一柜,没有跨供应商协调', us: '多家供应商整合到同一个柜' },
        { criterion: '时程风险', alt: '您直接跟工厂管理延迟与重做', us: '我们协调、升级、必要时转厂' },
        { criterion: '适合', alt: '单一 SKU、有自己 QC + 出口营运的买家', us: '多品类、供应商还在扩张、没有自己的出口营运' },
      ],
      bottomLine: '直接向工厂下单适合有成熟 QC 与出口营运能力、且只跟熟悉工厂买固定 SKU 的买家。SunGene 适合想要单一对口、自有 QC、合并出货、台湾司法管辖争议路径的买家。两个都可以是对的答案 —— 差别在于哪些东西您愿意自己扛。',
    },
    fr: {
      intro: "Aller directement chez une usine chinoise est, sur le papier, le chemin au coût le plus bas. Nous ne prétendons pas que notre marge n'existe pas — SunGene est une société de négoce basée à Taïwan et vous payez bien un coût de société de négoce. La vraie question : qu'est-ce qui vous revient sur les épaules quand vous allez en direct, et au total est-ce moins cher après ?",
      whenAlt: {
        title: 'Commander directement à une usine fonctionne quand :',
        bullets: [
          "Vous avez une relation établie avec une usine spécifique qui produit déjà votre SKU et vous a expédié plusieurs fois sans incident",
          "Vous avez une capacité de contrôle qualité en interne (quelqu'un qui se déplace, ou une agence d'inspection au forfait) pour vérifier chaque expédition",
          "Vous avez une équipe d'opérations export en interne qui gère Incoterms, listes de colisage, factures commerciales, certificats d'origine et coordination transitaire",
          "Vous pouvez absorber un retard de 4-6 semaines ou un lot défectueux comme coût d'apprentissage sans nuire à votre production aval",
          "Vous n'avez besoin que d'un ou deux SKU d'une seule usine — pas de consolidation multi-fournisseurs",
          "Votre pays a un chemin clair pour les paiements et les litiges avec la Chine continentale",
        ],
      },
      whenUs: {
        title: 'Une société de négoce basée à Taïwan a du sens quand :',
        bullets: [
          "Vous voulez un seul interlocuteur responsable — devis, planning, QC, documentation export et réclamations post-expédition passent par SunGene",
          "Vous voulez un contrôle AQL pré-expédition réalisé par le personnel SunGene en personne, pas par l'usine qui s'inspecte elle-même",
          "Vous voulez que les paiements transitent par une entité enregistrée à Taïwan pour un parcours bancaire et juridique plus propre",
          "Vous devez consolider plusieurs fournisseurs (emballage personnalisé + arts de la table + plaids) dans une seule expédition",
          "Vous avez besoin de gérer la documentation export (CE / FDA / FSC / origine / Incoterms) sans construire cette capacité en interne",
          "Votre réseau d'usines est encore en construction — vous préférez un réseau Taïwan + Chine déjà vérifié",
        ],
      },
      tableRows: [
        { criterion: 'Interlocuteur', alt: 'Une usine chinoise spécifique avec laquelle vous avez signé', us: 'SunGene Co., LTD. (enregistrée à Taïwan)' },
        { criterion: 'Prix', alt: 'Prix usine direct (le plus bas sur le papier)', us: 'Un seul devis acheteur couvrant production, AQL, documents' },
        { criterion: 'Contrôle qualité', alt: "Vous l'organisez (déplacement, agence, ou confiance à l'usine)", us: 'Personnel SunGene en interne, AQL 2,5 pré-expédition' },
        { criterion: 'Documents export', alt: 'Vous les assemblez (ou payez le transitaire en plus)', us: 'Inclus, gérés par les équipes Taïwan + Chine' },
        { criterion: 'Paiement', alt: 'Virement vers une banque chinoise, juridiction Chine pour les litiges', us: 'Virement vers entité taïwanaise, juridiction Taïwan' },
        { criterion: 'Consolidation', alt: "Une usine par expédition, pas de coordination multi-fournisseurs", us: 'Multi-fournisseurs consolidés dans un même conteneur' },
        { criterion: 'Risque de délai', alt: "Vous gérez les retards et reprises directement avec l'usine", us: "Nous coordonnons, escaladons et redirigeons si besoin" },
        { criterion: 'Adapté à', alt: 'Acheteur SKU unique stable avec QC + ops export en interne', us: 'Acheteur multi-catégories, base fournisseurs en croissance, sans ops export en interne' },
      ],
      bottomLine: "La commande directe à l'usine fonctionne pour les acheteurs avec une opération QC + export mature, qui n'achètent qu'un SKU connu chez une usine connue. SunGene fonctionne pour les acheteurs qui veulent un seul interlocuteur responsable sur les deux marchés, QC en interne, expédition consolidée et un parcours de litige sous juridiction Taïwan. Les deux peuvent être la bonne réponse — la différence est ce que vous prenez en charge vous-même.",
    },
    es: {
      intro: 'Ir directo a una fábrica china es, sobre el papel, el camino al costo más bajo. No fingimos que nuestra margen no existe — SunGene es una empresa comercial con sede en Taiwán y usted sí paga un costo de empresa comercial. La pregunta honesta: ¿qué le toca a usted cuando va directo, y al sumar todo realmente sale más barato?',
      whenAlt: {
        title: 'Pedir directo a una fábrica funciona cuando:',
        bullets: [
          'Tiene una relación establecida con una fábrica específica que ya produce su SKU y ha enviado varias veces sin incidentes',
          'Tiene capacidad de control de calidad interna (alguien que viaja, o una agencia de inspección con contrato) para verificar cada pedido pre-envío',
          'Tiene un equipo de operaciones de exportación interno que maneja Incoterms, listas de empaque, facturas comerciales, certificados de origen y coordinación con agente de carga',
          'Puede absorber un retraso de 4-6 semanas o un lote defectuoso como costo de aprendizaje sin afectar producción downstream',
          'Solo necesita 1-2 SKU de una sola fábrica — sin consolidación multi-proveedor',
          'Su país tiene un camino claro de pagos y resolución de disputas con China continental',
        ],
      },
      whenUs: {
        title: 'Una empresa comercial con sede en Taiwán tiene sentido cuando:',
        bullets: [
          'Quiere un único interlocutor responsable — cotización, programa de producción, QC, documentación de exportación y reclamaciones post-envío pasan por SunGene',
          'Quiere inspección AQL pre-envío realizada por personal de SunGene en persona, no la fábrica inspeccionándose a sí misma',
          'Quiere que el pago fluya a una entidad registrada en Taiwán para un rastro bancario y jurídico más limpio',
          'Necesita consolidar múltiples proveedores (embalaje personalizado + sets cerámicos + mantas) en un solo envío',
          'Necesita manejar documentación de exportación (CE / FDA / FSC / origen / Incoterms) sin construir esa capacidad operativa internamente',
          'Su red de fábricas aún se está construyendo — prefiere una red Taiwán + China ya verificada en lugar de empezar de cero por cada SKU nuevo',
        ],
      },
      tableRows: [
        { criterion: 'Contraparte', alt: 'Una fábrica china específica con la que firmó', us: 'SunGene Co., LTD. (registrada en Taiwán)' },
        { criterion: 'Precio', alt: 'Precio directo de fábrica (el más bajo sobre el papel)', us: 'Una sola cotización para el comprador que cubre producción, AQL, documentos' },
        { criterion: 'Control de calidad', alt: 'Usted lo organiza (viaja, agencia o confía en la fábrica)', us: 'Personal interno de SunGene, AQL 2.5 pre-envío' },
        { criterion: 'Documentos de exportación', alt: 'Usted los arma (o paga al agente de carga extra)', us: 'Incluido, gestionado por equipos en Taiwán + China' },
        { criterion: 'Pago', alt: 'Transferencia a banco chino, jurisdicción China para disputas', us: 'Transferencia a entidad taiwanesa, jurisdicción Taiwán' },
        { criterion: 'Consolidación', alt: 'Una fábrica por envío, sin coordinación multi-proveedor', us: 'Multi-proveedores consolidados en un contenedor' },
        { criterion: 'Riesgo de plazo', alt: 'Usted gestiona retrasos y retrabajos directamente con la fábrica', us: 'Coordinamos, escalamos y redirigimos cuando es necesario' },
        { criterion: 'Ideal para', alt: 'Comprador de un solo SKU estable con QC + ops de exportación interno', us: 'Comprador multi-categoría, base de proveedores en crecimiento, sin ops de exportación interno' },
      ],
      bottomLine: 'El pedido directo a fábrica funciona para compradores con operación de QC + exportación madura, que solo compran un SKU conocido a una fábrica conocida. SunGene funciona para compradores que quieren un único interlocutor responsable en ambos mercados, QC interno, envío consolidado y un camino de disputa bajo jurisdicción de Taiwán. Ambos pueden ser la respuesta correcta — la diferencia es qué le toca asumir a usted mismo.',
    },
    pt: { intro: 'Comparação modelo comissão vs compra-reventa.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    ko: { intro: '커미션 vs 매입재판매 모델.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    ja: { intro: 'コミッション対買取再販モデル。', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    ar: { intro: 'مقارنة نموذجي العمولة والشراء وإعادة البيع.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    th: { intro: 'เปรียบเทียบโมเดลคอมมิชชั่นกับซื้อมาขายไป', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    vi: { intro: 'So sánh mô hình hoa hồng vs mua đi bán lại.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
    de: { intro: 'Vergleich Kommissions- vs Kauf-Wiederverkaufsmodell.', whenAlt: { title: '', bullets: [] }, whenUs: { title: '', bullets: [] }, tableRows: [], bottomLine: '' },
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; compareSlug: string }> }): Promise<Metadata> {
  const { lang, compareSlug: slug } = await params
  const l = normalizeLang(lang) as Lang
  if (!(slug in SLUGS)) return { title: 'Not found', robots: { index: false, follow: false } }
  const m = META[slug as CompareKey][l] ?? META[slug as CompareKey].en
  return buildPageMetadata({
    lang: l,
    title: m.title,
    description: m.desc,
    pathname: `/${slug}`,
    type: 'article',
  })
}

function buildArticleSchema(opts: {
  lang: Lang
  slug: string
  title: string
  desc: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.desc,
    inLanguage: opts.lang,
    datePublished: '2026-05-16',
    dateModified: '2026-05-16',
    author: { '@id': `${SITE_URL}/#org` },
    publisher: { '@id': `${SITE_URL}/#org` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${opts.lang}/${opts.slug}` },
  }
}

function buildItemListSchema(opts: {
  lang: Lang
  slug: string
  rows: { criterion: string; alt: string; us: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Comparison criteria for ${opts.slug}`,
    inLanguage: opts.lang,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: opts.rows.length,
    itemListElement: opts.rows.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.criterion,
      description: `Alternative: ${r.alt} / SunGene: ${r.us}`,
    })),
  }
}

export default async function ComparePage({ params }: { params: Promise<{ lang: Lang; compareSlug: string }> }) {
  const { lang, compareSlug: slug } = await params
  const l = normalizeLang(lang) as Lang
  if (!(slug in SLUGS)) {
    const { notFound } = await import('next/navigation')
    notFound()
  }
  const key = slug as CompareKey
  const m = META[key][l] ?? META[key].en
  const c = CONTENT[key][l] ?? CONTENT[key].en

  const articleSchema = buildArticleSchema({ lang: l, slug, title: m.title, desc: m.desc })
  const itemListSchema = c.tableRows.length > 0 ? buildItemListSchema({ lang: l, slug, rows: c.tableRows }) : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {itemListSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      )}

      <PageHero kicker={({ en: 'HONEST COMPARISON', zh: '誠實對比', cn: '诚实对比', fr: 'COMPARAISON HONNÊTE', es: 'COMPARACIÓN HONESTA' } as Record<string, string>)[l] || 'HONEST COMPARISON'} title={m.title} desc={c.intro} />

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-4xl">
          <Breadcrumbs lang={l} items={[{ label: m.title, href: `/${l}/${slug}` }]} />

          {c.whenAlt.bullets.length > 0 && (
            <>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h2 className="text-lg font-bold text-gray-950">{c.whenAlt.title}</h2>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {c.whenAlt.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" /><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-accent-200 bg-accent-50 p-6">
                  <h2 className="text-lg font-bold text-brand-950">{c.whenUs.title}</h2>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {c.whenUs.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" /><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-3 pr-4 text-left font-bold text-gray-950"></th>
                      <th className="py-3 px-4 text-left font-bold text-gray-700">{({ en: 'Alternative', zh: '對方', cn: '对方', fr: 'Alternative', es: 'Alternativa' } as Record<string, string>)[l] || 'Alternative'}</th>
                      <th className="py-3 pl-4 text-left font-bold text-brand-950">SunGene</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.tableRows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-semibold text-gray-950">{row.criterion}</td>
                        <td className="py-3 px-4 text-gray-700">{row.alt}</td>
                        <td className="py-3 pl-4 text-gray-950">{row.us}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12 rounded-2xl bg-brand-950 p-8 text-white">
                <h2 className="text-xl font-bold">{({ en: 'Bottom line', zh: '結論', cn: '结论', fr: 'En bref', es: 'En resumen' } as Record<string, string>)[l] || 'Bottom line'}</h2>
                <p className="mt-3 text-base leading-relaxed text-white/90">{c.bottomLine}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={`/${l}/contact`} variant="primary" size="md">
                    {({ en: 'Request a quotation', zh: '索取報價', cn: '索取报价', fr: 'Demander un devis', es: 'Solicitar una cotización' } as Record<string, string>)[l] || 'Request a quotation'}
                  </ButtonLink>
                  <ButtonLink href={`/${l}/sourcing`} variant="secondary" size="md" className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/20">
                    {({ en: 'See sourcing scope', zh: '看採購範圍', cn: '看采购范围', fr: 'Voir le scope', es: 'Ver alcance' } as Record<string, string>)[l] || 'See sourcing scope'}
                  </ButtonLink>
                </div>
              </div>

              {/* Cross-link to the other comparison page */}
              <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                {key === 'vs-alibaba-direct' ? (
                  <span>
                    {({ en: 'Also comparing models?', zh: '也在比模型?', cn: '也在比模型?', fr: 'Vous comparez aussi les modèles ?', es: '¿Comparando también los modelos?' } as Record<string, string>)[l] || 'Also comparing models?'}{' '}
                    <a href={`/${l}/vs-direct-factory`} className="font-semibold text-brand-950 underline hover:no-underline">
                      {({ en: 'SunGene vs direct factory order →', zh: 'SunGene vs 直接向工廠下單 →', cn: 'SunGene vs 直接向工厂下单 →', fr: 'SunGene vs commande directe usine →', es: 'SunGene vs pedido directo a fábrica →' } as Record<string, string>)[l] || 'SunGene vs direct factory order →'}
                    </a>
                  </span>
                ) : (
                  <span>
                    {({ en: 'Considering Alibaba?', zh: '在考慮 Alibaba?', cn: '在考虑 Alibaba?', fr: 'Vous envisagez Alibaba ?', es: '¿Considerando Alibaba?' } as Record<string, string>)[l] || 'Considering Alibaba?'}{' '}
                    <a href={`/${l}/vs-alibaba-direct`} className="font-semibold text-brand-950 underline hover:no-underline">
                      {({ en: 'SunGene vs Alibaba direct →', zh: 'SunGene vs Alibaba 直購 →', cn: 'SunGene vs Alibaba 直采 →', fr: 'SunGene vs Alibaba direct →', es: 'SunGene vs Alibaba directo →' } as Record<string, string>)[l] || 'SunGene vs Alibaba direct →'}
                    </a>
                  </span>
                )}
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  )
}
