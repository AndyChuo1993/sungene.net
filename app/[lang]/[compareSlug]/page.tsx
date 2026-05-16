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

type CompareKey = 'vs-alibaba-direct' | 'vs-sourcing-agent'

const SLUGS: Record<CompareKey, true> = {
  'vs-alibaba-direct': true,
  'vs-sourcing-agent': true,
}

export async function generateStaticParams() {
  return Object.keys(SLUGS).map((compareSlug) => ({ compareSlug }))
}

const META: Record<CompareKey, Record<Lang, { title: string; desc: string }>> = {
  'vs-alibaba-direct': {
    en: { title: 'SunGene vs Alibaba direct — which suits your sourcing?', desc: 'Honest comparison: when direct Alibaba purchasing makes sense, when a Taiwan-based sourcing partner pays off, and the 8 criteria buyers should weigh first.' },
    zh: { title: 'SunGene vs Alibaba 直購 — 哪個適合你?', desc: '誠實對比:何時直接在 Alibaba 採購可以,何時找台灣採購夥伴值得多付一點。' },
    cn: { title: 'SunGene vs Alibaba 直采 — 哪个适合您?', desc: '诚实对比:何时直接在 Alibaba 采购可以,何时找台湾采购伙伴值得多付一点。' },
    fr: { title: 'SunGene vs Alibaba direct — lequel pour vous ?', desc: 'Comparaison honnête : quand acheter direct sur Alibaba marche, quand un partenaire sourcing Taïwan vaut la marge.' },
    es: { title: 'SunGene vs Alibaba directo — ¿cuál te conviene?', desc: 'Comparación honesta: cuándo comprar directo en Alibaba funciona, cuándo un socio de sourcing en Taiwán vale la margen.' },
    pt: { title: 'SunGene vs Alibaba direto', desc: 'Comparação honesta.' },
    ko: { title: 'SunGene vs Alibaba 직거래', desc: '솔직한 비교.' },
    ja: { title: 'SunGene vs Alibaba 直接購入', desc: '正直な比較。' },
    ar: { title: 'SunGene مقارنة الشراء المباشر', desc: 'مقارنة صادقة.' },
    th: { title: 'SunGene vs ซื้อตรง Alibaba', desc: 'เปรียบเทียบตรงไปตรงมา' },
    vi: { title: 'SunGene vs Mua trực tiếp Alibaba', desc: 'So sánh thẳng thắn.' },
    de: { title: 'SunGene vs Direktkauf Alibaba', desc: 'Ehrlicher Vergleich.' },
  },
  'vs-sourcing-agent': {
    en: { title: 'SunGene vs commission sourcing agents — what changes?', desc: 'Commission agents earn % on factory prices you cannot see. SunGene buys then resells with margin disclosed. 8-row comparison of incentives & accountability.' },
    zh: { title: 'SunGene vs 抽佣採購代理 — 差別在哪?', desc: '抽佣代理按你看不到的工廠價抽成。SunGene 買斷後加上揭露利潤轉售。逐項對比。' },
    cn: { title: 'SunGene vs 抽佣采购代理 — 差别在哪?', desc: '抽佣代理按您看不到的工厂价抽成。SunGene 买断后加上揭露利润转售。逐项对比。' },
    fr: { title: 'SunGene vs agent à commission — la différence', desc: "L'agent à commission se rémunère sur un prix usine que vous ne voyez pas. SunGene achète puis revend avec marge déclarée." },
    es: { title: 'SunGene vs agente a comisión — la diferencia', desc: 'El agente a comisión gana sobre un precio de fábrica que usted no ve. SunGene compra y revende con margen declarado.' },
    pt: { title: 'SunGene vs agente comissão', desc: 'A diferença real.' },
    ko: { title: 'SunGene vs 커미션 에이전트', desc: '실제 차이.' },
    ja: { title: 'SunGene vs コミッション代理店', desc: '実際の違い。' },
    ar: { title: 'SunGene مقابل وكلاء العمولة', desc: 'الفرق الحقيقي.' },
    th: { title: 'SunGene vs ตัวแทนคอมมิชชั่น', desc: 'ความแตกต่างจริง' },
    vi: { title: 'SunGene vs Đại lý hoa hồng', desc: 'Sự khác biệt thực sự.' },
    de: { title: 'SunGene vs Provisionsagent', desc: 'Echter Unterschied.' },
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
      intro: "Alibaba is the world's largest B2B marketplace. We are on it ourselves (5-star verified supplier momas.en.alibaba.com). We are not against buying direct on Alibaba — for some buyers, in some situations, it's the right call. Here is the honest version.",
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
        title: 'A Taiwan-based sourcing partner makes sense when:',
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
      intro: 'Alibaba 是全球最大的 B2B 採購平台,我們自己就是上面的 5 星認證供應商(momas.en.alibaba.com),所以這篇寫的不是「Alibaba 不好」。對某些買家、某些品類、某些訂單規模,直接在 Alibaba 採購就是對的選擇。這份對比寫給已經評估過 Alibaba、想知道「何時多付 5-15% 找台灣代理夥伴是划算的」的買家 —— 我們會把彼此各自的甜蜜點與盲點都攤開來。',
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
        title: '找台灣採購夥伴比較合理,當:',
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
      intro: 'Alibaba 是全球最大的 B2B 采购平台,我们自己就是上面的 5 星认证供应商(momas.en.alibaba.com),所以这篇写的不是「Alibaba 不好」。对某些买家、某些品类、某些订单规模,直接在 Alibaba 采购就是对的选择。这份对比写给已经评估过 Alibaba、想知道「何时多付 5-15% 找台湾代理伙伴是划算的」的买家 —— 我们会把彼此各自的甜蜜点与盲点都摊开来。',
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
        title: '找台湾采购伙伴比较合理,当:',
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
      intro: "Alibaba est la plus grande place de marché B2B au monde. Nous y sommes nous-mêmes (fournisseur vérifié 5 étoiles momas.en.alibaba.com). Nous ne sommes pas contre l'achat direct sur Alibaba — pour certains acheteurs, dans certaines situations, c'est le bon choix. Voici la version honnête.",
      whenAlt: { title: 'Acheter direct sur Alibaba fonctionne quand :', bullets: [
        'Vous avez le temps de vérifier 8-15 usines vous-même, demander des échantillons et lire historique des avis',
        'Votre commande est petite (moins de USD 1 000) et vous pouvez absorber un mauvais lot comme coût d\'apprentissage',
        'Vous parlez la langue du fournisseur OU êtes à l\'aise avec les négociations via Google Translate',
        'Vous irez en Chine inspecter en personne, OU vous avez déjà un contrat avec une agence d\'inspection',
        'Vous achetez un SKU générique, bien défini, sans personnalisation',
      ] },
      whenUs: { title: 'Un partenaire de sourcing Taïwan a du sens quand :', bullets: [
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
      intro: 'Alibaba es la plataforma B2B más grande del mundo. Estamos en ella nosotros mismos (proveedor verificado 5 estrellas momas.en.alibaba.com). No estamos en contra de comprar directo en Alibaba — para algunos compradores, en algunas situaciones, es la decisión correcta. Aquí la versión honesta.',
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
  'vs-sourcing-agent': {
    en: {
      intro: 'There are two ways a Taiwan/China sourcing intermediary makes money: (1) commission on top of a factory price you do not see, or (2) buy-low resell-with-margin where the factory price and margin are both disclosed. The difference matters more than it sounds.',
      whenAlt: {
        title: 'Commission sourcing agents:',
        bullets: [
          'Earn a percentage (typically 5-12%) of whatever factory price they quote you',
          'Have an incentive to find a HIGHER factory price (their commission grows with it)',
          'You never see the underlying factory invoice — you take their word for the markup',
          'When a factory offers a kickback to use higher pricing, the agent is the financial beneficiary',
          'No legal title to the goods — if the order goes wrong, factory and buyer must resolve directly',
        ],
      },
      whenUs: {
        title: 'SunGene (buy-and-resell trading principal):',
        bullets: [
          'We buy the goods from the factory at FOB or EXW. SunGene Co., LTD. is on the invoice as buyer',
          'We resell to you with our margin shown on a separate line of your quote',
          'You can request the underlying factory invoice before order confirmation',
          'When goods fail QC, rejecting them is our financial decision (we are the buyer of record), not a courtesy to you',
          'Single accountability: your dispute is with a Taiwan-registered company',
        ],
      },
      tableRows: [
        { criterion: 'Revenue model', alt: 'Commission % of factory price', us: 'Buy-low resell-with-margin' },
        { criterion: 'Margin visibility', alt: 'Often hidden inside quoted price', us: 'Shown separately on quote' },
        { criterion: 'Kickback incentive', alt: 'Yes (higher price = bigger commission)', us: 'No (margin is fixed, factory price drives our cost)' },
        { criterion: 'Goods on whose balance sheet', alt: 'Factory keeps title until buyer pays', us: 'SunGene takes title at FOB/EXW' },
        { criterion: 'QC accountability', alt: 'Best-effort', us: 'Financial self-interest to reject defects' },
        { criterion: 'Legal recourse', alt: 'Buyer ↔ factory direct dispute', us: 'Buyer ↔ SunGene (Taiwan jurisdiction)' },
        { criterion: 'Invoice transparency', alt: 'Single line, total only', us: 'Factory invoice + our margin shown' },
        { criterion: 'Typical fee structure', alt: '5-12% commission, opaque', us: '5-15% margin, disclosed' },
      ],
      bottomLine: 'Both models can deliver good results. The structural difference is who has the financial incentive to reject sub-spec goods. With a commission agent, that incentive sits with you. With us, it sits with us. We think buyers should know the difference, which model they are working with, and demand the underlying factory invoice as evidence either way.',
    },
    zh: {
      intro: '台灣或中國的採購中介,賺錢方式只有兩種:(1)在你看不到的工廠價之上抽佣,或 (2)買斷後加上揭露利潤再轉售,工廠價與利潤兩條線都公開。差別比聽起來重要 —— 因為它決定了「誰有財務動機去擋下不合規的貨」。',
      whenAlt: {
        title: '抽佣型採購代理:',
        bullets: [
          '按工廠報價的百分比賺錢(典型 5-12%),賺多賺少跟你訂單金額直接綁定',
          '有動機讓工廠報「更高的價格」(他們的佣金隨價格成長,壓低工廠價對代理是反向誘因)',
          '你看不到底下的工廠發票 —— 真實成本多少、加價多少,完全憑代理單方面的話',
          '當工廠提供回扣換取代理推薦較高報價時,代理是直接受益人,你看不到這層交易',
          '貨物所有權不在代理身上 —— 出問題時,工廠與買家要直接處理,代理只是「介紹人」的角色',
          '一般沒有單獨開立的「代理利潤」這條線,費用藏在報價總額裡,你拆不出來',
          '當你問「能不能看工廠發票」時,常見回答是「不方便」或「對方不願意」—— 而你沒有籌碼追問',
        ],
      },
      whenUs: {
        title: 'SunGene(買斷再轉售的貿易主體):',
        bullets: [
          '我們以 FOB 或 EXW 從工廠買貨。SunGene Co., LTD. 作為買方出現在工廠發票上',
          '我們在給你的報價單上把利潤分行列出,加在工廠價之上',
          '下單前你可要求看到底下的工廠原始發票作為證據',
          '當貨物驗貨失敗,擋下它是我們的財務決定(我們已經是登記買方),不是對你的人情',
          '單一窗口:你的爭議對象是一家台灣註冊公司,適用台灣司法',
          '利潤固定的結構讓「越貴賺越多」這個動機消失 —— 工廠價是我們的成本,我們要的就是壓低它',
        ],
      },
      tableRows: [
        { criterion: '收入模型', alt: '工廠價的佣金 %', us: '買斷再轉售加利潤' },
        { criterion: '利潤透明度', alt: '通常藏在報價中', us: '報價單上分行列出' },
        { criterion: '回扣動機', alt: '有(價格越高佣金越大)', us: '無(利潤固定,工廠價是我們的成本)' },
        { criterion: '貨物所有權', alt: '工廠持有直到買家付款', us: 'SunGene 於 FOB/EXW 取得所有權' },
        { criterion: '驗貨責任', alt: '盡力而為', us: '財務自利驅動 — 必須擋下瑕疵品' },
        { criterion: '法律追訴', alt: '買家 ↔ 工廠 直接爭議', us: '買家 ↔ SunGene(台灣司法)' },
        { criterion: '發票透明度', alt: '單行,僅總價', us: '工廠發票 + 我方利潤分列' },
        { criterion: '典型費率', alt: '5-12% 佣金,不透明', us: '5-15% 利潤,揭露' },
      ],
      bottomLine: '兩個模型都可以做出好結果 —— 抽佣代理用得久了也能在小品類做出深度。但結構性的差異就在於:誰有財務動機去擋下不合規的貨。抽佣代理把這個動機放在你身上 —— 因為即使貨有問題,他們的佣金已經算完了;我們把它放在我們身上 —— 因為我們已經先付錢給工廠,瑕疵品出貨就是我們的損失。買家應該知道這個差別、知道自己在跟哪種模型合作,並且不論選哪一邊都該要求看到底下的工廠發票作為證據,而不是聽信「對方不方便給」。',
    },
    cn: {
      intro: '台湾或中国的采购中介,赚钱方式只有两种:(1)在您看不到的工厂价之上抽佣,或 (2)买断后加上揭露利润再转售,工厂价与利润两条线都公开。差别比听起来重要 —— 因为它决定了「谁有财务动机去挡下不合规的货」。',
      whenAlt: {
        title: '抽佣型采购代理:',
        bullets: [
          '按工厂报价的百分比赚钱(典型 5-12%),赚多赚少跟您订单金额直接绑定',
          '有动机让工厂报「更高的价格」(他们的佣金随价格成长,压低工厂价对代理是反向诱因)',
          '您看不到底下的工厂发票 —— 真实成本多少、加价多少,完全凭代理单方面的话',
          '当工厂提供回扣换取代理推荐较高报价时,代理是直接受益人,您看不到这层交易',
          '货物所有权不在代理身上 —— 出问题时,工厂与买家要直接处理,代理只是「介绍人」的角色',
          '一般没有单独开立的「代理利润」这条线,费用藏在报价总额里,您拆不出来',
          '当您问「能不能看工厂发票」时,常见回答是「不方便」或「对方不愿意」—— 而您没有筹码追问',
        ],
      },
      whenUs: {
        title: 'SunGene(买断再转售的贸易主体):',
        bullets: [
          '我们以 FOB 或 EXW 从工厂买货。SunGene Co., LTD. 作为买方出现在工厂发票上',
          '我们在给您的报价单上把利润分行列出,加在工厂价之上',
          '下单前您可要求看到底下的工厂原始发票作为证据',
          '当货物验货失败,挡下它是我们的财务决定(我们已经是登记买方),不是对您的人情',
          '单一窗口:您的争议对象是一家台湾注册公司,适用台湾司法',
          '利润固定的结构让「越贵赚越多」这个动机消失 —— 工厂价是我们的成本,我们要的就是压低它',
        ],
      },
      tableRows: [
        { criterion: '收入模型', alt: '工厂价的佣金 %', us: '买断再转售加利润' },
        { criterion: '利润透明度', alt: '通常藏在报价中', us: '报价单上分行列出' },
        { criterion: '回扣动机', alt: '有(价格越高佣金越大)', us: '无(利润固定,工厂价是我们的成本)' },
        { criterion: '货物所有权', alt: '工厂持有直到买家付款', us: 'SunGene 于 FOB/EXW 取得所有权' },
        { criterion: '验货责任', alt: '尽力而为', us: '财务自利驱动 — 必须挡下瑕疵品' },
        { criterion: '法律追诉', alt: '买家 ↔ 工厂 直接争议', us: '买家 ↔ SunGene(台湾司法)' },
        { criterion: '发票透明度', alt: '单行,仅总价', us: '工厂发票 + 我方利润分列' },
        { criterion: '典型费率', alt: '5-12% 佣金,不透明', us: '5-15% 利润,揭露' },
      ],
      bottomLine: '两个模型都可以做出好结果 —— 抽佣代理用得久了也能在小品类做出深度。但结构性的差异就在于:谁有财务动机去挡下不合规的货。抽佣代理把这个动机放在您身上 —— 因为即使货有问题,他们的佣金已经算完了;我们把它放在我们身上 —— 因为我们已经先付钱给工厂,瑕疵品出货就是我们的损失。买家应该知道这个差别、知道自己在跟哪种模型合作,并且不论选哪一边都该要求看到底下的工厂发票作为证据,而不是听信「对方不方便给」。',
    },
    fr: {
      intro: "Il y a deux façons pour un intermédiaire de sourcing Taïwan/Chine de gagner sa vie : (1) commission au-dessus d'un prix usine que vous ne voyez pas, ou (2) achat-revente avec marge déclarée. La différence compte plus qu'il n'y paraît.",
      whenAlt: { title: "Agents à commission :", bullets: [
        "Touchent un pourcentage (5-12%) du prix usine qu'ils vous facturent",
        "Ont intérêt à un prix usine plus ÉLEVÉ (leur commission grandit avec)",
        "Vous ne voyez jamais la facture usine sous-jacente",
        "Quand l'usine offre un kickback pour un prix plus haut, l'agent en bénéficie",
        "Pas de titre légal sur la marchandise — disputes directement entre usine et acheteur",
      ]},
      whenUs: { title: "SunGene (négociant achat-revente) :", bullets: [
        "Nous achetons la marchandise FOB ou EXW. SunGene Co., LTD. apparaît comme acheteur sur la facture",
        "Nous revendons avec notre marge affichée sur une ligne séparée du devis",
        "Vous pouvez demander la facture usine avant confirmation",
        "Refuser un lot défectueux est notre décision financière (nous sommes l'acheteur enregistré)",
        "Responsabilité unique : votre litige est avec une société taïwanaise enregistrée",
      ]},
      tableRows: [
        { criterion: 'Modèle de revenu', alt: '% du prix usine en commission', us: 'Achat-revente avec marge' },
        { criterion: 'Visibilité de la marge', alt: 'Cachée dans le prix', us: 'Affichée séparément' },
        { criterion: 'Incitation au kickback', alt: 'Oui (prix élevé = grosse commission)', us: 'Non' },
        { criterion: 'Titre des marchandises', alt: 'Usine garde le titre', us: 'SunGene prend le titre FOB/EXW' },
        { criterion: 'Responsabilité CQ', alt: 'Meilleurs efforts', us: 'Intérêt financier à refuser les défauts' },
        { criterion: 'Recours juridique', alt: 'Acheteur ↔ usine direct', us: 'Acheteur ↔ SunGene (Taïwan)' },
        { criterion: 'Transparence facture', alt: 'Une ligne, total seulement', us: 'Facture usine + marge affichées' },
        { criterion: 'Structure tarifaire typique', alt: '5-12% commission, opaque', us: '5-15% marge, déclarée' },
      ],
      bottomLine: "Les deux modèles peuvent livrer de bons résultats. La différence structurelle : qui a l'intérêt financier à refuser les marchandises non-conformes. Avec un agent à commission, c'est vous. Avec nous, c'est nous.",
    },
    es: {
      intro: 'Hay dos formas en que un intermediario de sourcing Taiwán/China gana dinero: (1) comisión sobre un precio de fábrica que usted no ve, o (2) compra-reventa con margen declarado. La diferencia importa más de lo que parece.',
      whenAlt: { title: 'Agentes a comisión:', bullets: [
        'Ganan un porcentaje (5-12%) del precio de fábrica que le cotizan',
        'Tienen incentivo para un precio de fábrica MÁS ALTO (su comisión crece)',
        'Usted nunca ve la factura de fábrica subyacente',
        'Cuando la fábrica ofrece kickback por usar precio más alto, el agente lo recibe',
        'No tienen título legal sobre la mercancía — disputas directas fábrica-comprador',
      ]},
      whenUs: { title: 'SunGene (comerciante compra-reventa):', bullets: [
        'Compramos FOB o EXW. SunGene Co., LTD. aparece como comprador en la factura',
        'Revendemos con margen mostrado en línea separada de la cotización',
        'Puede solicitar la factura de fábrica antes de confirmar',
        'Rechazar un lote defectuoso es nuestra decisión financiera (somos comprador registrado)',
        'Responsabilidad única: su disputa es con una empresa registrada en Taiwán',
      ]},
      tableRows: [
        { criterion: 'Modelo de ingresos', alt: '% del precio de fábrica en comisión', us: 'Compra-reventa con margen' },
        { criterion: 'Visibilidad de margen', alt: 'Oculta en el precio', us: 'Mostrada por separado' },
        { criterion: 'Incentivo de kickback', alt: 'Sí (precio alto = comisión grande)', us: 'No' },
        { criterion: 'Título de mercancía', alt: 'Fábrica mantiene título', us: 'SunGene toma título FOB/EXW' },
        { criterion: 'Responsabilidad QC', alt: 'Mejores esfuerzos', us: 'Interés financiero en rechazar defectos' },
        { criterion: 'Recurso legal', alt: 'Comprador ↔ fábrica directo', us: 'Comprador ↔ SunGene (Taiwán)' },
        { criterion: 'Transparencia factura', alt: 'Una línea, solo total', us: 'Factura fábrica + margen mostrados' },
        { criterion: 'Estructura típica', alt: '5-12% comisión, opaca', us: '5-15% margen, declarado' },
      ],
      bottomLine: 'Ambos modelos pueden dar buenos resultados. La diferencia estructural: quién tiene el incentivo financiero para rechazar mercancía no conforme. Con un agente a comisión, lo tiene usted. Con nosotros, lo tenemos nosotros.',
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
                    {({ en: 'Start a sourcing conversation', zh: '開始採購對話', cn: '开始采购对话', fr: 'Démarrer une conversation', es: 'Iniciar conversación' } as Record<string, string>)[l] || 'Start a sourcing conversation'}
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
                    <a href={`/${l}/vs-sourcing-agent`} className="font-semibold text-brand-950 underline hover:no-underline">
                      {({ en: 'SunGene vs commission sourcing agents →', zh: 'SunGene vs 抽佣代理 →', cn: 'SunGene vs 抽佣代理 →', fr: 'SunGene vs agents à commission →', es: 'SunGene vs agentes a comisión →' } as Record<string, string>)[l] || 'SunGene vs commission sourcing agents →'}
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
