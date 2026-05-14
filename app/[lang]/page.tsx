import type { Metadata } from 'next'
import { Lang, t } from '@/lib/i18n'
import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import WhyUs from '@/components/home/WhyUs'
import WhoWeWorkWith from '@/components/home/WhoWeWorkWith'
import ProcessSection from '@/components/home/ProcessSection'
import Applications from '@/components/home/Applications'
import CTASection from '@/components/home/CTASection'
import FAQ from '@/components/home/FAQ'
import TrustGallery from '@/components/home/TrustGallery'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'

type PageParams = {
  params: Promise<{ lang?: string }>
}

const HOME_POSITIONING: Partial<Record<Lang, {
  sourceKicker: string
  sourceTitle: string
  sourceIntro: string
  sourceItems: string[]
  beyondKicker: string
  beyondTitle: string
  beyondBody: string[]
}>> = {
  en: {
    sourceKicker: 'What we source',
    sourceTitle: 'Packaging, home & garden — plus what your buyers ask for next',
    sourceIntro: 'Our daily work is packaging products, household goods, garden tools, and the related accessories. For long-term partners we also take adjacent categories — cosmetics, candles, glass, light hardware.',
    sourceItems: [
      'Packaging — bags, boxes, jars, pumps, closures',
      'Home goods — kitchenware, decor, organisation, small living',
      'Garden — tools, planters, watering, outdoor accessories',
      'Adjacent categories on a case-by-case basis',
    ],
    beyondKicker: 'How we sell',
    beyondTitle: 'Direct buy-and-resell — not a commission middleman',
    beyondBody: [
      'We are a trading company, not a sourcing agent. We buy the goods from the factory and resell to you. The price you see is the final price — no hidden factory kickback, no per-shipment commission.',
      'Because the goods are on our books, rejecting defects before shipment is our own interest, not a favour. Quality becomes our problem, not yours.',
    ],
  },
  zh: {
    sourceKicker: '採購範圍',
    sourceTitle: '包裝、家居、園藝——以及你客戶下一步會問的相關品類',
    sourceIntro: '我們每天處理的是包裝產品、家居用品、園藝工具與相關配件。長期合作客戶的相近延伸品類——化妝品、蠟燭、玻璃、輕五金——我們也接。',
    sourceItems: [
      '包裝產品——袋、盒、瓶、泵頭、封口',
      '家居用品——廚房、佈置、收納、生活小物',
      '園藝產品——工具、花盆、澆灌、戶外配件',
      '相鄰品類依個案合作評估',
    ],
    beyondKicker: '我們的角色',
    beyondTitle: '直接買進賣出——不是抽佣中間人',
    beyondBody: [
      '我們是貿易商，不是 sourcing agent。我們從工廠把貨買下、再轉賣給你。你看到的價格就是最終價，沒有躲在後面的工廠紅包，也沒有每筆出貨的抽成。',
      '因為貨在我們手上、用我們的資金壓著，瑕疵品擋下來是我們自己的事——驗貨有沒有放水，直接影響我們的庫存與利潤。',
    ],
  },
  cn: {
    sourceKicker: '采购范围',
    sourceTitle: '包装、家居、园艺——以及您客户下一步会问的相关品类',
    sourceIntro: '我们日常处理的是包装产品、家居用品、园艺工具与相关配件。长期合作客户的相邻延伸品类——化妆品、蜡烛、玻璃、轻五金——也可以接。',
    sourceItems: [
      '包装产品——袋、盒、瓶、泵头、封口',
      '家居用品——厨房、布置、收纳、生活小物',
      '园艺产品——工具、花盆、浇灌、户外配件',
      '相邻品类按个案合作评估',
    ],
    beyondKicker: '我们的角色',
    beyondTitle: '直接买进卖出——不是抽佣中间人',
    beyondBody: [
      '我们是贸易商，不是 sourcing agent。我们从工厂把货买下、再转卖给您。您看到的价格就是最终价，没有躲在后面的工厂红包，也没有每笔出货的抽成。',
      '因为货在我们手上、用我们的资金压着，瑕疵品挡下来是我们自己的事——验货有没有放水，直接影响我们的库存与利润。',
    ],
  },
  fr: {
    sourceKicker: 'Ce que nous sourçons',
    sourceTitle: 'Emballage, maison & jardin — et les catégories voisines que demanderont vos acheteurs',
    sourceIntro: "Notre quotidien : produits d'emballage, articles de maison, outils de jardin et accessoires associés. Pour les partenaires de long terme, catégories voisines acceptées (cosmétiques, bougies, verre, petite quincaillerie).",
    sourceItems: [
      'Emballage — sachets, boîtes, flacons, pompes, fermetures',
      'Maison — cuisine, déco, rangement, petit habitat',
      'Jardin — outils, jardinières, arrosage, accessoires extérieurs',
      'Catégories voisines au cas par cas',
    ],
    beyondKicker: 'Notre rôle',
    beyondTitle: "Achat-revente direct — pas d'intermédiaire à la commission",
    beyondBody: [
      "Nous sommes une société de négoce, pas un agent de sourcing. Nous achetons la marchandise à l'usine, puis nous vous la revendons. Le prix affiché est le prix final — pas de pourboire d'usine caché, pas de commission par expédition.",
      "Comme la marchandise est sur nos comptes, écarter les défauts avant l'expédition est notre intérêt direct, pas une faveur. La qualité devient notre problème, pas le vôtre.",
    ],
  },
  es: {
    sourceKicker: 'Lo que abastecemos',
    sourceTitle: 'Empaque, hogar y jardín — y las categorías vecinas que pedirán sus compradores',
    sourceIntro: 'Nuestro día a día son productos de empaque, artículos del hogar, herramientas de jardín y accesorios relacionados. Para socios de largo plazo aceptamos categorías cercanas: cosmética, velas, vidrio, ferretería ligera.',
    sourceItems: [
      'Empaque — bolsas, cajas, frascos, bombas, cierres',
      'Hogar — cocina, decoración, organización, pequeño hogar',
      'Jardín — herramientas, macetas, riego, accesorios de exterior',
      'Categorías vecinas caso por caso',
    ],
    beyondKicker: 'Nuestro rol',
    beyondTitle: 'Compra-reventa directa — no un intermediario a comisión',
    beyondBody: [
      'Somos una empresa comercial, no un agente de sourcing. Compramos la mercancía a la fábrica y se la revendemos. El precio mostrado es el final — sin comisión oculta de fábrica, sin pago por envío.',
      'Como la mercancía pasa por nuestras cuentas, rechazar defectos antes del envío es nuestro interés directo, no un favor. La calidad pasa a ser nuestro problema, no el suyo.',
    ],
  },
  pt: {
    sourceKicker: 'O que fornecemos',
    sourceTitle: 'Um ponto de entrada de sourcing mais amplo para projetos industriais e técnicos',
    sourceIntro: 'Apoiamos conversas de sourcing que começam com máquinas e se expandem para necessidades industriais e técnicas adjacentes.',
    sourceItems: [
      'Sistemas de embalagem',
      'Equipamentos industriais',
      'Componentes de automação',
      'Sourcing técnico selecionado',
    ],
    beyondKicker: 'Além das máquinas',
    beyondTitle: 'Um parceiro de sourcing para conversas mais avançadas',
    beyondBody: [
      'Hoje, o sourcing não se resume mais à compra de equipamentos.',
      'Trata-se de integração, compatibilidade e confiabilidade a longo prazo — especialmente em ambientes industriais avançados.',
    ],
  },
  ko: {
    sourceKicker: '조달 범위',
    sourceTitle: '산업 및 기술 프로젝트를 위한 더 넓은 소싱 입구',
    sourceIntro: '기계에서 시작해 인접한 산업 및 기술 요구사항으로 확장되는 소싱 대화를 지원합니다.',
    sourceItems: [
      '포장 시스템',
      '산업 장비',
      '자동화 부품',
      '선별 기술 관련 소싱',
    ],
    beyondKicker: '기계 그 이상',
    beyondTitle: '더 고도화된 소싱 대화를 위한 파트너',
    beyondBody: [
      '오늘날 소싱은 단순한 장비 구매가 아닙니다.',
      '통합성, 호환성, 장기 신뢰성이 핵심입니다 — 특히 고도화된 산업 환경에서.',
    ],
  },
  ja: {
    sourceKicker: '調達範囲',
    sourceTitle: '産業・技術プロジェクトのための幅広いソーシング入口',
    sourceIntro: '機械から始まり、隣接する産業・技術ニーズへと広がるソーシング相談を支援します。',
    sourceItems: [
      '包装システム',
      '産業機器',
      '自動化部品',
      '特定技術関連ソーシング',
    ],
    beyondKicker: '機械を超えて',
    beyondTitle: 'より高度な調達対話のためのパートナー',
    beyondBody: [
      '今日の調達は、設備購入だけではありません。',
      '統合性、互換性、長期的な信頼性が重要です — 特に高度な産業環境において。',
    ],
  },
  ar: {
    sourceKicker: 'نطاق التوريد',
    sourceTitle: 'نقطة دخول توريد أوسع للمشاريع الصناعية والتقنية',
    sourceIntro: 'ندعم محادثات التوريد التي تبدأ بالآلات وتمتد إلى المتطلبات الصناعية والتقنية المجاورة.',
    sourceItems: [
      'أنظمة التعبئة والتغليف',
      'المعدات الصناعية',
      'مكونات الأتمتة',
      'توريد تقني مختار',
    ],
    beyondKicker: 'أبعد من الآلات',
    beyondTitle: 'شريك توريد لمحادثات أكثر تقدماً',
    beyondBody: [
      'اليوم، التوريد لم يعد مجرد شراء معدات.',
      'يتعلق الأمر بالتكامل والتوافق والموثوقية على المدى البعيد — خاصة في البيئات الصناعية المتقدمة.',
    ],
  },
  th: {
    sourceKicker: 'ขอบเขตการจัดหา',
    sourceTitle: 'จุดเข้าการจัดหาที่กว้างขึ้นสำหรับโครงการอุตสาหกรรมและเทคนิค',
    sourceIntro: 'เราสนับสนุนการสนทนาด้านการจัดหาที่เริ่มต้นจากเครื่องจักรและขยายไปสู่ความต้องการทางอุตสาหกรรมและเทคนิคที่เกี่ยวข้อง',
    sourceItems: [
      'ระบบบรรจุภัณฑ์',
      'อุปกรณ์อุตสาหกรรม',
      'ชิ้นส่วนระบบอัตโนมัติ',
      'การจัดหาเชิงเทคนิคที่คัดสรร',
    ],
    beyondKicker: 'เกินกว่าแค่เครื่องจักร',
    beyondTitle: 'พาร์ทเนอร์การจัดหาสำหรับการสนทนาขั้นสูง',
    beyondBody: [
      'ปัจจุบัน การจัดหาไม่ใช่แค่การซื้ออุปกรณ์อีกต่อไป',
      'สิ่งสำคัญคือการบูรณาการ ความเข้ากันได้ และความน่าเชื่อถือในระยะยาว — โดยเฉพาะในสภาพแวดล้อมอุตสาหกรรมขั้นสูง',
    ],
  },
  vi: {
    sourceKicker: 'Phạm vi tìm nguồn cung',
    sourceTitle: 'Điểm vào tìm nguồn cung rộng hơn cho các dự án công nghiệp và kỹ thuật',
    sourceIntro: 'Chúng tôi hỗ trợ các cuộc thảo luận tìm nguồn cung bắt đầu từ máy móc và mở rộng sang các yêu cầu công nghiệp và kỹ thuật liên quan.',
    sourceItems: [
      'Hệ thống đóng gói',
      'Thiết bị công nghiệp',
      'Linh kiện tự động hóa',
      'Tìm nguồn cung kỹ thuật được chọn lọc',
    ],
    beyondKicker: 'Hơn cả máy móc',
    beyondTitle: 'Đối tác tìm nguồn cung cho các cuộc thảo luận nâng cao',
    beyondBody: [
      'Ngày nay, tìm nguồn cung không chỉ là mua thiết bị.',
      'Điều quan trọng là tích hợp, tương thích và độ tin cậy lâu dài — đặc biệt trong môi trường công nghiệp tiên tiến.',
    ],
  },
  de: {
    sourceKicker: 'Was wir beschaffen',
    sourceTitle: 'Ein breiterer Sourcing-Einstiegspunkt für industrielle und technische Projekte',
    sourceIntro: 'Wir begleiten Sourcing-Gespräche, die bei Maschinen beginnen und sich auf angrenzende industrielle und technische Anforderungen ausweiten.',
    sourceItems: [
      'Verpackungssysteme',
      'Industrieanlagen',
      'Automatisierungskomponenten',
      'Ausgewähltes technisches Sourcing',
    ],
    beyondKicker: 'Mehr als Maschinen',
    beyondTitle: 'Ein Sourcing-Partner für fortgeschrittene Beschaffungsgespräche',
    beyondBody: [
      'Heute geht es beim Sourcing nicht mehr nur um den Kauf von Anlagen.',
      'Es geht um Integration, Kompatibilität und langfristige Zuverlässigkeit — besonders in fortgeschrittenen industriellen Umgebungen.',
    ],
  },
}

const HOME_KEYWORDS: Record<Lang, string[]> = {
  en: [
    'industrial equipment sourcing', 'automation components sourcing', 'packaging systems supplier',
    'technical sourcing support', 'industrial sourcing partner China', 'industrial sourcing Taiwan China',
    'industrial equipment supplier', 'machinery sourcing partner', 'automation integration sourcing',
    'packaging equipment sourcing', 'technical procurement partner', 'selected tech sourcing',
    'industrial equipment Taiwan China sourcing',
  ],
  zh: ['工業設備採購', '自動化零組件', '包裝系統', '技術採購支援', '中國採購合作夥伴', '台灣中國供應鏈'],
  cn: ['工业设备采购', '自动化零组件', '包装系统', '技术采购支持', '中国采购合作伙伴', '台湾中国供应链'],
  fr: ['partenaire de sourcing', 'machines d’emballage', 'équipement agroalimentaire', 'machine de remplissage Taïwan', 'machine VFFS', 'ligne automatisée', 'exportateur taïwanais'],
  es: ['socio de abastecimiento', 'maquinaria de empaque', 'equipo de procesamiento de alimentos', 'máquina de llenado Taiwán', 'máquina VFFS', 'línea automatizada', 'exportador taiwanés'],
  pt: ['parceiro de sourcing', 'máquinas de embalagem', 'equipamento de processamento de alimentos', 'máquina de envase Taiwan', 'máquina VFFS', 'linha automatizada', 'exportador taiwanês'],
  ko: ['소싱 파트너', '포장기계', '식품가공장비', '충진기 대만', 'VFFS 포장기', '자동화 라인', '대만 수출'],
  ja: ['ソーシングパートナー', '包装機械', '食品加工機器', '充填機 台湾', 'VFFS包装機', '自動化ライン', '台湾 輸出'],
  ar: ['آلات التعبئة والتغليف', 'معدات تجهيز الأغذية', 'آلة تعبئة تايوان', 'آلة VFFS', 'خط إنتاج مؤتمت', 'آلات صناعية'],
  th: ['เครื่องจักรบรรจุภัณฑ์', 'อุปกรณ์แปรรูปอาหาร', 'เครื่องบรรจุ ไต้หวัน', 'เครื่อง VFFS', 'ไลน์อัตโนมัติ', 'เครื่องจักรอุตสาหกรรม'],
  vi: ['máy đóng gói', 'thiết bị chế biến thực phẩm', 'máy chiết rót Đài Loan', 'máy VFFS', 'dây chuyền tự động', 'máy công nghiệp'],
  de: ['Sourcing-Partner', 'Verpackungsmaschinen', 'Lebensmittelverarbeitungsanlagen', 'Abfüllmaschine Taiwan', 'VFFS Verpackungsmaschine', 'automatisierte Linie', 'Export aus Taiwan'],
}

const SCHEMA_TEXT: Record<Lang, {
  listName: string
  listDesc: string
  categories: { packaging: string; food: string; filling: string; conveying: string; custom: string }
  faq: { q: string; a: string }[]
}> = {
  en: {
    listName: 'SunGene — Taiwan & China sourcing for packaging, home & garden',
    listDesc: 'Direct buy-and-resell sourcing for packaging products, home goods, and garden products from vetted Taiwan and China factories. On-site QC, no kickbacks, transparent pricing.',
    categories: { packaging: 'Packaging Sourcing', food: 'Home & Kitchen Sourcing', filling: 'Beauty & Container Sourcing', conveying: 'Garden & Outdoor Sourcing', custom: 'Custom Sourcing Requests' },
    faq: [
      { q: 'What products do you source?', a: 'Packaging products (bags, boxes, jars, pumps, closures), home goods (kitchenware, decor, organisation), and garden tools and accessories. For long-term partners we also take adjacent categories — cosmetics, candles, glass, light hardware.' },
      { q: 'What is your minimum order?', a: 'USD 1,000 per shipment. We turn down very small mixed orders so we can give the orders we take the attention they need.' },
      { q: 'How does pricing work? Is there a commission on top?', a: 'We are a trading company, not a commission agent. We buy the goods from the factory and resell to you. The price you see is the final landed cost we quote — no hidden factory kickback, no per-shipment commission. We disclose the relevant FOB or EXW factory price on request.' },
      { q: 'How do you handle factory inspection?', a: 'We inspect personally. For factories in Taiwan, our team drives to the site. For factories in China, the goods ship to our forwarder’s warehouse where we inspect before export. We have walked away from factories that offered envelopes to pass goods we judged sub-spec. Inspection videos and photos are included with every shipment.' },
      { q: 'Where are you based?', a: 'Two registered companies — one in Taichung, Taiwan; one in mainland China. The Taiwan entity invoices and receives payment; the China entity handles factory relationships and pre-shipment logistics.' },
      { q: 'Can I see your Alibaba.com track record?', a: 'Yes — our storefront is at momas.en.alibaba.com. We have been a verified supplier there for three years. Star rating fluctuates between 3 and 5 stars depending on the period; check the live page for current standing.' },
      { q: 'How fast do you reply?', a: 'Same day during Taipei business hours (UTC+8, Mon–Fri 09:00–18:00). Outside hours, within 12 hours.' },
    ],
  },
  zh: {
    listName: 'SunGene｜台灣＋中國 採購夥伴｜包裝、家居、園藝',
    listDesc: '直接從台灣與中國審查過的工廠買進、轉手出貨給你——包裝產品、家居用品、園藝工具與相關配件。親自驗貨、不收紅包、報價透明。',
    categories: { packaging: '包裝產品採購', food: '家居廚房採購', filling: '美容容器採購', conveying: '園藝戶外採購', custom: '客製品採購' },
    faq: [
      { q: '你們採購哪些產品？', a: '主要是包裝產品（袋、盒、瓶、泵頭、封口）、家居用品（廚房、佈置、收納）、園藝工具與配件。長期合作客戶的相鄰品類——化妝品、蠟燭、玻璃、輕五金——也可以接。' },
      { q: '最低訂單是多少？', a: 'USD 1,000 起。一次很多項、雜小單我們會婉拒——這樣才有餘力把接下來的單做好。' },
      { q: '報價是怎麼算的？會在工廠價之外抽佣嗎？', a: '我們是貿易商，不是抽佣的代理。我們把貨從工廠買下、再轉賣給你。你看到的就是最終到岸價，沒有躲在後面的工廠紅包，也沒有每筆出貨的抽成。你要看 FOB 或 EXW 工廠價我們會直接揭露。' },
      { q: '驗貨怎麼做？', a: '我們親自驗。台灣的工廠我們團隊直接開車去；中國的工廠出貨先進我們合作貨代的倉庫，由我們進場驗貨後才放行出口。曾經遇過工廠塞紅包想讓我們放行不合規的貨，我們選擇不合作。每批出貨都附驗貨影片與照片。' },
      { q: '你們在哪？', a: '兩家公司——一家在台灣台中，一家在中國大陸。台灣公司開發票、收款；中國公司管工廠關係與出口前的物流。' },
      { q: '能查得到你們的 Alibaba.com 紀錄嗎？', a: '可以——店面是 momas.en.alibaba.com，已經是認證供應商三年。星等會隨期間在 3 到 5 星之間波動，建議直接點過去看當下狀態。' },
      { q: '回覆多快？', a: '台灣上班時間（UTC+8，週一至五 09:00–18:00）當日回。下班時段 12 小時內。' },
    ],
  },
  cn: {
    listName: 'SunGene｜台湾＋中国 采购伙伴｜包装、家居、园艺',
    listDesc: '直接从台湾与中国核查过的工厂买进、转手出货给您——包装产品、家居用品、园艺工具与相关配件。亲自验货、不收红包、报价透明。',
    categories: { packaging: '包装产品采购', food: '家居厨房采购', filling: '美容容器采购', conveying: '园艺户外采购', custom: '定制品采购' },
    faq: [
      { q: '你们采购哪些产品？', a: '主要是包装产品（袋、盒、瓶、泵头、封口）、家居用品（厨房、布置、收纳）、园艺工具与配件。长期合作客户的相邻品类——化妆品、蜡烛、玻璃、轻五金——也可以接。' },
      { q: '最低订单是多少？', a: 'USD 1,000 起。一次很多项、杂小单我们会婉拒——这样才有余力把接下来的单做好。' },
      { q: '报价是怎么算的？工厂价之外会抽佣吗？', a: '我们是贸易商，不是抽佣代理。我们把货从工厂买下，再转卖给您。您看到的就是最终到岸价，没有躲在后面的工厂红包，也没有每笔出货的抽成。您要看 FOB 或 EXW 工厂价我们会直接揭露。' },
      { q: '验货怎么做？', a: '我们亲自验。台湾的工厂我们团队直接开车去；中国的工厂出货先进我们合作货代的仓库，由我们进场验货后才放行出口。曾经遇过工厂递红包让我们放行不合规的货，我们选择不合作。每批出货都附验货视频与照片。' },
      { q: '你们在哪？', a: '两家公司——一家在台湾台中，一家在中国大陆。台湾公司开发票、收款；中国公司管工厂关系与出口前的物流。' },
      { q: '能查得到你们的 Alibaba.com 记录吗？', a: '可以——店面是 momas.en.alibaba.com，已经是认证供应商三年。星等会在 3 到 5 星之间波动，建议直接点过去看当下状态。' },
      { q: '回复多快？', a: '台北上班时间（UTC+8，周一至五 09:00–18:00）当日回复。下班时段 12 小时内。' },
    ],
  },
  fr: {
    listName: "SunGene | Sourcing Taïwan & Chine pour marques d'emballage, maison & jardin",
    listDesc: "Achat direct auprès d'usines vérifiées à Taïwan et en Chine, revente en direct — produits d'emballage, articles de maison, outils de jardin et accessoires. Contrôle qualité sur place, sans commission occulte, devis transparents.",
    categories: { packaging: 'Sourcing emballage', food: 'Sourcing maison & cuisine', filling: 'Sourcing beauté & flaconnage', conveying: 'Sourcing jardin & extérieur', custom: 'Demandes sur mesure' },
    faq: [
      { q: 'Quels produits sourcez-vous ?', a: "Principalement de l'emballage (sachets, boîtes, flacons, pompes, fermetures), des articles de maison (cuisine, décoration, rangement) et des outils et accessoires de jardin. Catégories voisines (cosmétiques, bougies, verre, petite quincaillerie) acceptées pour les partenariats de long terme." },
      { q: 'Quelle est la commande minimum ?', a: 'USD 1 000 par expédition. Nous refusons les très petites commandes éparpillées pour pouvoir donner aux commandes prises le suivi nécessaire.' },
      { q: 'Comment est calculé le prix ? Y a-t-il une commission ?', a: "Nous sommes une société de négoce, pas un agent à la commission. Nous achetons la marchandise à l'usine et vous la revendons. Le prix affiché est le coût final livré — pas de pourboire d'usine, pas de commission par expédition. Le prix FOB ou EXW usine est communiqué sur demande." },
      { q: "Comment se passe l'inspection en usine ?", a: "Nous inspectons en personne. Pour les usines à Taïwan, notre équipe se déplace sur site. Pour la Chine, la marchandise arrive d'abord à l'entrepôt de notre transitaire où nous inspectons avant export. Nous avons refusé des usines qui proposaient une enveloppe pour faire passer de la marchandise hors spécification. Vidéos et photos d'inspection sont fournies à chaque expédition." },
      { q: 'Où êtes-vous basés ?', a: "Deux sociétés enregistrées — une à Taichung, Taïwan ; une en Chine continentale. L'entité taïwanaise facture et reçoit les paiements ; l'entité chinoise gère les relations usines et la logistique pré-export." },
      { q: "Peut-on vérifier votre historique sur Alibaba.com ?", a: "Oui — notre boutique est sur momas.en.alibaba.com. Nous sommes fournisseur vérifié depuis trois ans. La note fluctue entre 3 et 5 étoiles selon la période ; vérifiez en direct." },
      { q: 'Délai de réponse ?', a: "Réponse le jour même pendant les heures de bureau de Taipei (UTC+8, lun.–ven. 09:00–18:00). Hors horaires, sous 12 heures." },
    ],
  },
  es: {
    listName: 'SunGene | Sourcing Taiwán & China para marcas de empaque, hogar y jardín',
    listDesc: 'Compra directa a fábricas verificadas en Taiwán y China, reventa directa — productos de empaque, artículos del hogar, herramientas de jardín y accesorios. Control de calidad en sitio, sin comisiones ocultas, presupuestos transparentes.',
    categories: { packaging: 'Sourcing de empaque', food: 'Sourcing hogar y cocina', filling: 'Sourcing belleza y envase', conveying: 'Sourcing jardín y exterior', custom: 'Solicitudes a medida' },
    faq: [
      { q: '¿Qué productos abastecen?', a: 'Principalmente productos de empaque (bolsas, cajas, frascos, bombas, cierres), artículos del hogar (cocina, decoración, organización) y herramientas y accesorios de jardín. Para socios de largo plazo, también categorías cercanas: cosmética, velas, vidrio, ferretería ligera.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'USD 1 000 por envío. Rechazamos pedidos muy pequeños y dispersos para poder dar a los aceptados la atención que necesitan.' },
      { q: '¿Cómo se calcula el precio? ¿Hay comisión sobre el precio de fábrica?', a: 'Somos una empresa comercial, no un agente a comisión. Compramos la mercancía a la fábrica y se la revendemos. El precio mostrado es el costo final entregado — sin comisión oculta de fábrica, sin pago por envío. El precio FOB o EXW de fábrica se comunica bajo petición.' },
      { q: '¿Cómo realizan la inspección en fábrica?', a: 'Inspeccionamos en persona. Para fábricas en Taiwán, nuestro equipo se desplaza al sitio. Para China, la mercancía llega primero al almacén de nuestro agente de carga, donde inspeccionamos antes de exportar. Hemos rechazado fábricas que ofrecían sobres para aprobar mercancía fuera de especificación. Video y fotos de inspección con cada envío.' },
      { q: '¿Dónde están ubicados?', a: 'Dos empresas registradas — una en Taichung, Taiwán; otra en China continental. La entidad taiwanesa factura y recibe pagos; la entidad china gestiona relaciones con fábricas y logística pre-exportación.' },
      { q: '¿Puedo verificar su historial en Alibaba.com?', a: 'Sí — nuestra tienda está en momas.en.alibaba.com. Somos proveedor verificado desde hace tres años. La calificación fluctúa entre 3 y 5 estrellas según el período; verifique en vivo.' },
      { q: '¿Qué tan rápido responden?', a: 'Mismo día en horario laboral de Taipéi (UTC+8, lun–vie 09:00–18:00). Fuera de horario, en 12 horas.' },
    ],
  },
  pt: {
    listName: 'SunGene — Máquinas industriais',
    listDesc: 'Máquinas de embalagem, equipamentos de alimentos, envase/selagem e transporte/automação.',
    categories: { packaging: 'Máquinas de embalagem', food: 'Equipamentos de alimentos', filling: 'Envase e selagem', conveying: 'Transporte e automação', custom: 'Máquinas sob medida' },
    faq: [
      { q: 'Qual é o pedido mínimo?', a: 'MOQ: 1 unidade. Configuração conforme produto, formato e velocidade-alvo.' },
      { q: 'Vocês fazem personalização?', a: 'Sim. Materiais, dimensões, capacidade, tensão/frequência e módulos de automação são configuráveis.' },
      { q: 'Para quais países vocês exportam?', a: 'Exportamos para 50+ países na Ásia, Oriente Médio, Europa, Américas e África. Tensão e frequência são ajustadas.' },
      { q: 'Qual é o prazo de entrega?', a: 'Depende da configuração: típico 15–30 dias (máquina) e 45–90 dias (linha completa).' },
      { q: 'Vocês realizam testes FAT/SAT antes do envio?', a: 'Conforme o equipamento e o fornecedor, coordenamos testes FAT/SAT e verificações funcionais antes do envio. Vídeo e resultados podem ser fornecidos.' },
      { q: 'Quais certificações estão disponíveis?', a: 'Apoiamos documentação CE para exportação quando aplicável. Superfícies de contato podem ser especificadas em aço inoxidável alimentar SUS304/316L.' },
      { q: 'Que suporte pós-venda vocês oferecem?', a: 'Assistência remota por vídeo, treinamento, peças normalmente enviadas em 48 horas (conforme estoque e destino) e suporte técnico de longo prazo.' },
    ],
  },
  ko: {
    listName: 'SunGene 산업용 기계',
    listDesc: '포장기계, 식품가공장비, 충전/밀봉, 컨베이어/자동화 라인.',
    categories: { packaging: '포장기계', food: '식품가공장비', filling: '충전 및 밀봉', conveying: '컨베이어 및 자동화', custom: '맞춤형 기계' },
    faq: [
      { q: '최소 주문 수량은?', a: 'MOQ는 1대입니다. 제품, 포장 형식, 목표 생산속도에 맞춰 구성합니다.' },
      { q: '맞춤 제작이 가능한가요?', a: '가능합니다. 재질, 치수, 생산능력, 전압/주파수, 자동화 모듈을 요구사항에 맞춰 구성합니다.' },
      { q: '어느 나라로 수출하나요?', a: '동남아, 중동, 유럽, 미주, 아프리카 등 50개국 이상 수출합니다. 전압과 주파수는 현지 표준에 맞춰 설정합니다.' },
      { q: '납기는 얼마나 걸리나요?', a: '구성에 따라 다릅니다. 일반적으로 단일 장비 15–30일, 라인 45–90일 범위입니다.' },
      { q: '출하 전 FAT/SAT 테스트를 하나요?', a: '장비와 공급사에 따라 FAT/SAT 및 기능 검사를 조율할 수 있으며, 테스트 영상과 결과를 제공할 수 있습니다.' },
      { q: '어떤 인증을 지원하나요?', a: '수출을 위한 CE 문서 지원이 가능하며(해당 시), 접촉면은 식품급 SUS304/316L 스테인리스강으로 지정할 수 있습니다.' },
      { q: '애프터서비스는 어떻게 되나요?', a: '원격 영상 설치 안내, 운전자 교육, 예비 부품은 보통 48시간 내 발송(재고 및 목적지에 따라), 장기 기술 지원을 제공합니다.' },
    ],
  },
  ja: {
    listName: 'SunGene 産業機械',
    listDesc: '包装機械、食品加工機器、充填/シール、搬送/自動化ライン。',
    categories: { packaging: '包装機械', food: '食品加工機器', filling: '充填・シール', conveying: '搬送・自動化', custom: 'カスタム機械' },
    faq: [
      { q: '最小注文数量は？', a: 'MOQは1台です。製品、包装形態、目標能力に合わせて構成します。' },
      { q: 'カスタマイズは可能？', a: '可能です。材質、寸法、能力、電圧/周波数、各種モジュールを要件に合わせて設定します。' },
      { q: 'どの国に輸出していますか？', a: '東南アジア、中東、欧州、米州、アフリカなど50か国以上に輸出しています。電圧・周波数は現地規格に合わせます。' },
      { q: '納期は？', a: '構成によります。目安：単体 15–30日、ライン 45–90日。' },
      { q: '出荷前にFAT/SATテストは実施しますか？', a: '設備とサプライヤーにより、FAT/SATおよび機能確認を出荷前に調整できます。テスト動画と結果を提供可能です。' },
      { q: 'どのような認証に対応していますか？', a: '該当する場合、輸出向けCE文書をサポートします。接触面は食品グレードSUS304/316Lステンレス鋼を指定可能です。' },
      { q: 'アフターサポートの内容は？', a: 'リモートビデオでの設置支援、オペレーター研修、部品は通常48時間以内に発送（在庫・仕向地により）、長期技術サポートをご提供します。' },
    ],
  },
  ar: {
    listName: 'SunGene — معدات صناعية',
    listDesc: 'آلات التعبئة والتغليف، معدات الأغذية، التعبئة/الإغلاق، وأنظمة النقل/الأتمتة.',
    categories: { packaging: 'آلات التعبئة والتغليف', food: 'معدات تصنيع الأغذية', filling: 'التعبئة والإغلاق', conveying: 'النقل والأتمتة', custom: 'آلات مخصصة' },
    faq: [
      { q: 'ما هو الحد الأدنى للطلب؟', a: 'الحد الأدنى: آلة واحدة. نضبط المواصفات حسب المنتج وشكل العبوة والسرعة المطلوبة.' },
      { q: 'هل يمكن التخصيص؟', a: 'نعم. المواد والأبعاد والقدرة والجهد/التردد ووحدات الأتمتة قابلة للتخصيص.' },
      { q: 'إلى أي دول تقومون بالتصدير؟', a: 'نصدر إلى أكثر من 50 دولة في جنوب شرق آسيا والشرق الأوسط وأوروبا والأمريكتين وأفريقيا.' },
      { q: 'كم يستغرق وقت التسليم؟', a: 'يعتمد على التكوين: غالبًا 15–30 يومًا للآلة و45–90 يومًا للخط الكامل.' },
      { q: 'هل تجرون اختبارات FAT/SAT قبل الشحن؟', a: 'حسب المعدة والمورد، نقوم بتنسيق اختبارات FAT/SAT وفحوصات الوظائف قبل الشحن. يمكن توفير فيديو ونتائج الاختبار.' },
      { q: 'ما هي الشهادات المتاحة؟', a: 'ندعم وثائق CE للتصدير عند توفرها. ويمكن تحديد الأسطح الملامسة للمنتج من ستانلس ستيل غذائي SUS304/316L.' },
      { q: 'ما هو دعم ما بعد البيع؟', a: 'دعم تركيب عن بُعد عبر الفيديو، تدريب المشغلين، قطع غيار تُشحن عادة خلال 48 ساعة (حسب المخزون والوجهة)، ودعم فني طويل الأجل.' },
    ],
  },
  th: {
    listName: 'SunGene เครื่องจักรอุตสาหกรรม',
    listDesc: 'เครื่องบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร ระบบบรรจุ/ซีล และสายพาน/อัตโนมัติ',
    categories: { packaging: 'เครื่องบรรจุภัณฑ์', food: 'อุปกรณ์แปรรูปอาหาร', filling: 'ระบบบรรจุและซีล', conveying: 'ลำเลียงและอัตโนมัติ', custom: 'เครื่องจักรสั่งทำ' },
    faq: [
      { q: 'สั่งขั้นต่ำกี่เครื่อง?', a: 'ขั้นต่ำ 1 เครื่อง สามารถปรับสเปกตามสินค้า รูปแบบบรรจุภัณฑ์ และความเร็วเป้าหมาย' },
      { q: 'สั่งทำ/ปรับแต่งได้ไหม?', a: 'ได้ ปรับวัสดุ ขนาด กำลังการผลิต แรงดัน/ความถี่ และโมดูลอัตโนมัติได้ตามความต้องการ' },
      { q: 'ส่งออกไปประเทศไหนบ้าง?', a: 'ส่งออกมากกว่า 50 ประเทศในเอเชียตะวันออกเฉียงใต้ ตะวันออกกลาง ยุโรป อเมริกา และแอฟริกา' },
      { q: 'ระยะเวลาจัดหาและส่งมอบนานไหม?', a: 'ขึ้นอยู่กับสเปก โดยทั่วไปเครื่องเดี่ยว 15–30 วัน และไลน์ 45–90 วัน' },
      { q: 'มีการทดสอบก่อนส่งมอบไหม?', a: 'ตามอุปกรณ์และซัพพลายเออร์ เราสามารถประสานการทดสอบ FAT/SAT และการตรวจสอบการทำงานก่อนส่ง พร้อมวิดีโอและรายงานผล' },
      { q: 'มีใบรับรองอะไรบ้าง?', a: 'เราสนับสนุนเอกสาร CE สำหรับการส่งออกเมื่อเหมาะสม และสามารถระบุพื้นผิวสัมผัสเป็นสแตนเลสเกรดอาหาร SUS304/316L ได้' },
      { q: 'บริการหลังการขายมีอะไรบ้าง?', a: 'แนะนำติดตั้งผ่านวิดีโอ ฝึกอบรมผู้ปฏิบัติงาน อะไหล่โดยทั่วไปส่งภายใน 48 ชม. (ขึ้นอยู่กับสต็อกและปลายทาง) และสนับสนุนเทคนิคระยะยาว' },
    ],
  },
  vi: {
    listName: 'SunGene — Máy móc công nghiệp',
    listDesc: 'Máy đóng gói, thiết bị thực phẩm, chiết rót/hàn kín và băng tải/tự động hóa.',
    categories: { packaging: 'Máy đóng gói', food: 'Thiết bị thực phẩm', filling: 'Chiết rót & hàn kín', conveying: 'Băng tải & tự động hóa', custom: 'Máy tùy chỉnh' },
    faq: [
      { q: 'MOQ là bao nhiêu?', a: 'MOQ: 1 máy. Cấu hình theo sản phẩm, kiểu bao bì và công suất mục tiêu.' },
      { q: 'Có thể tùy chỉnh không?', a: 'Có. Vật liệu, kích thước, công suất, điện áp/tần số và module tự động hóa đều có thể cấu hình.' },
      { q: 'Xuất khẩu đến những nước nào?', a: 'Xuất khẩu 50+ quốc gia tại Đông Nam Á, Trung Đông, Châu Âu, Châu Mỹ và Châu Phi.' },
      { q: 'Thời gian giao hàng?', a: 'Tùy cấu hình: thường 15–30 ngày (máy đơn) và 45–90 ngày (dây chuyền).' },
      { q: 'Có test FAT/SAT trước khi giao không?', a: 'Tùy theo thiết bị và nhà cung cấp, chúng tôi có thể điều phối FAT/SAT và kiểm tra chức năng trước khi giao. Có thể cung cấp video và kết quả.' },
      { q: 'Máy có chứng nhận gì?', a: 'Chúng tôi hỗ trợ tài liệu CE cho xuất khẩu khi phù hợp. Bề mặt tiếp xúc có thể chỉ định inox thực phẩm SUS304/316L.' },
      { q: 'Hỗ trợ sau bán hàng gồm những gì?', a: 'Hướng dẫn lắp đặt qua video, đào tạo vận hành, phụ tùng thường giao trong 48 giờ (tùy tồn kho và điểm đến) và hỗ trợ kỹ thuật dài hạn.' },
    ],
  },
  de: {
    listName: 'SunGene — Industriemaschinen',
    listDesc: 'Verpackungsmaschinen, Lebensmittelanlagen, Abfüll-/Verschließsysteme sowie Fördertechnik/Automatisierung.',
    categories: { packaging: 'Verpackungsmaschinen', food: 'Lebensmittelanlagen', filling: 'Abfüllen & Verschließen', conveying: 'Fördertechnik & Automatisierung', custom: 'Sondermaschinen' },
    faq: [
      { q: 'Wie hoch ist die Mindestbestellmenge?', a: 'MOQ: 1 Maschine. Konfiguration nach Produkt, Verpackungsformat und Zielleistung.' },
      { q: 'Ist kundenspezifische Ausführung möglich?', a: 'Ja. Material, Abmessungen, Leistung, Spannung/Frequenz und Automationsmodule sind konfigurierbar.' },
      { q: 'In welche Länder exportieren Sie?', a: 'Export in 50+ Länder in Südostasien, Nahost, Europa, Amerika und Afrika. Spannung und Frequenz werden angepasst.' },
      { q: 'Wie lange ist die Lieferzeit?', a: 'Abhängig von der Konfiguration: typ. 15–30 Tage (Einzelmaschine) und 45–90 Tage (Linie).' },
      { q: 'Gibt es FAT/SAT-Tests vor der Lieferung?', a: 'Je nach Maschine und Lieferant koordinieren wir FAT/SAT und Funktionsprüfungen vor dem Versand. Testvideo und Ergebnisse können bereitgestellt werden.' },
      { q: 'Welche Zertifizierungen sind verfügbar?', a: 'Wir unterstützen CE-Dokumentation für den Export, sofern zutreffend. Produktberührende Flächen können in lebensmittelechtem Edelstahl SUS304/316L spezifiziert werden.' },
      { q: 'Welchen After-Sales-Support bieten Sie?', a: 'Ferninstallation per Video, Schulung, Ersatzteile werden in der Regel innerhalb von 48 Stunden versandt (abhängig von Lagerbestand und Ziel) und langfristiger technischer Support.' },
    ],
  },
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  return buildPageMetadata({
    lang: safeLang,
    title: t(safeLang, 'meta_home_title'),
    description: t(safeLang, 'meta_home_desc'),
    pathname: '/',
    type: 'website',
    keywords: HOME_KEYWORDS[safeLang] ?? HOME_KEYWORDS.en,
  })
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const s = SCHEMA_TEXT[safeLang] ?? SCHEMA_TEXT.en
  const positioning = HOME_POSITIONING[safeLang] ?? HOME_POSITIONING.en!

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LANG_META[safeLang].htmlLang,
    name: s.listName,
    description: s.listDesc,
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: s.categories.packaging, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing#packaging`, url: `${SITE_URL}/${safeLang}/sourcing#packaging`, name: s.categories.packaging } },
      { '@type': 'ListItem', position: 2, name: s.categories.food, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing#home`, url: `${SITE_URL}/${safeLang}/sourcing#home`, name: s.categories.food } },
      { '@type': 'ListItem', position: 3, name: s.categories.filling, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing#beauty`, url: `${SITE_URL}/${safeLang}/sourcing#beauty`, name: s.categories.filling } },
      { '@type': 'ListItem', position: 4, name: s.categories.conveying, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing#garden`, url: `${SITE_URL}/${safeLang}/sourcing#garden`, name: s.categories.conveying } },
      { '@type': 'ListItem', position: 5, name: s.categories.custom, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/sourcing`, url: `${SITE_URL}/${safeLang}/sourcing`, name: s.categories.custom } },
    ]
  }

  const topicHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LANG_META[safeLang].htmlLang,
    name: 'Configuration guides by route',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pouch packaging configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/pouch-packaging`, url: `${SITE_URL}/${safeLang}/resources/route/pouch-packaging`, name: 'Pouch packaging configuration guides' } },
      { '@type': 'ListItem', position: 2, name: 'Powder dosing configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/powder-dosing`, url: `${SITE_URL}/${safeLang}/resources/route/powder-dosing`, name: 'Powder dosing configuration guides' } },
      { '@type': 'ListItem', position: 3, name: 'Liquid filling configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/liquid-filling`, url: `${SITE_URL}/${safeLang}/resources/route/liquid-filling`, name: 'Liquid filling configuration guides' } },
      { '@type': 'ListItem', position: 4, name: 'Food processing line configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/food-processing-line`, url: `${SITE_URL}/${safeLang}/resources/route/food-processing-line`, name: 'Food processing line configuration guides' } },
      { '@type': 'ListItem', position: 5, name: 'Conveying & automation configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/conveying-automation`, url: `${SITE_URL}/${safeLang}/resources/route/conveying-automation`, name: 'Conveying & automation configuration guides' } },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: s.listName,
    url: `${SITE_URL}/${safeLang}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.lead', '.hero-desc'],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[safeLang].htmlLang,
    mainEntity: s.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // Organization schema — gives Google + AI search engines a concise, structured
  // summary of who SunGene is. Important for GEO (ChatGPT / Perplexity citations).
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: 'SunGene Co., LTD.',
    alternateName: '上瑾錸有限公司',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/sungene.png`,
    description: 'Taiwan–China dual-office trading company. We buy from vetted factories and resell direct to international buyers — packaging products, home goods, garden tools and accessories. On-site QC by our own team. Verified Alibaba.com supplier since 2023.',
    foundingDate: '2023',
    knowsAbout: ['Packaging sourcing', 'Home goods sourcing', 'Garden products sourcing', 'Taiwan sourcing', 'China sourcing', 'Factory inspection', 'Direct buy-and-resell trading'],
    sameAs: ['https://momas.en.alibaba.com/'],
    address: [
      {
        '@type': 'PostalAddress',
        '@id': `${SITE_URL}#tw-office`,
        streetAddress: '201 Guangfu Rd., Central District',
        addressLocality: 'Taichung',
        postalCode: '40041',
        addressCountry: 'TW',
      },
      {
        '@type': 'PostalAddress',
        '@id': `${SITE_URL}#cn-office`,
        streetAddress: "Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave., Tong'an District",
        addressLocality: 'Xiamen',
        addressCountry: 'CN',
      },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+886-4-37032705', contactType: 'sales', areaServed: 'Worldwide', availableLanguage: ['English', 'Chinese', 'French', 'Spanish'], email: 'contact@sungene.net' },
      { '@type': 'ContactPoint', telephone: '+86-18144132078', contactType: 'sales', areaServed: 'China', contactOption: 'WhatsApp, WeChat, LINE' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topicHubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <HeroSection lang={safeLang} />
      {/* Removed MachineByProduct and ServicesPreview — these were machine-catalog
          sections that contradict the new packaging/home/garden sourcing positioning.
          Applications section below covers the same category-discovery purpose
          with content aligned to the new positioning. */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-accent-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                  {positioning.sourceKicker}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                {positioning.sourceTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                {positioning.sourceIntro}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {positioning.sourceItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-500" />
                    <p className="text-base font-semibold text-gray-900">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-brand-950 py-16 text-white sm:py-20">
        <Container className="max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-accent-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
                {positioning.beyondKicker}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {positioning.beyondTitle}
            </h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-brand-200 sm:text-lg">
              {positioning.beyondBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {/* Section "Configuration guides by route" removed — links pointed to
          machine-route resource pages, off-positioning. */}
      {false && (<section className="bg-white py-8">
        <Container className="max-w-7xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">
              {({
                en: 'Configuration guides by route',
                cn: '按配置路线浏览指南',
                zh: '依配置路線瀏覽指南',
                fr: 'Guides par parcours de configuration',
                es: 'Guías por ruta de configuración',
                pt: 'Guias por rota de configuração',
                ko: '구성 경로별 가이드',
                ja: '構成ルート別 ガイド',
                ar: 'أدلة حسب مسار التهيئة',
                th: 'คู่มือตามเส้นทางการกำหนดค่า',
                vi: 'Hướng dẫn theo lộ trình cấu hình',
                de: 'Leitfäden nach Konfigurationspfad',
              } as Record<string, string>)[safeLang] || 'Configuration guides by route'}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/pouch-packaging`}>
                {({ en: 'Pouch packing', cn: '袋装包装', zh: '袋裝包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치 포장', ja: 'パウチ包装', ar: 'تعبئة الأكياس', th: 'บรรจุถุง', vi: 'Đóng gói túi', de: 'Beutelverpackung' } as Record<string, string>)[safeLang] || 'Pouch packing'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/powder-dosing`}>
                {({ en: 'Powder filling', cn: '粉末灌装', zh: '粉末灌裝', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[safeLang] || 'Powder filling'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/liquid-filling`}>
                {({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[safeLang] || 'Liquid filling'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/food-processing-line`}>
                {({ en: 'Snack processing', cn: '休闲食品', zh: '休閒食品', fr: 'Snack', es: 'Snacks', pt: 'Snacks', ko: '스낵', ja: 'スナック', ar: 'سناكات', th: 'สแน็ค', vi: 'Snack', de: 'Snack' } as Record<string, string>)[safeLang] || 'Snack processing'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/conveying-automation`}>
                {({ en: 'Conveyors', cn: '输送', zh: '輸送', fr: 'Convoyeurs', es: 'Transporte', pt: 'Transporte', ko: '컨베이어', ja: '搬送', ar: 'نقل', th: 'ลำเลียง', vi: 'Băng tải', de: 'Fördertechnik' } as Record<string, string>)[safeLang] || 'Conveyors'}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${safeLang}/assessment`} size="md">
                {({ en: 'Get Assessment', cn: '获取评估', zh: '取得評估', fr: 'Obtenir une évaluation', es: 'Obtener evaluación', pt: 'Obter avaliação', ko: '평가 받기', ja: '評価を受ける', ar: 'احصل على تقييم', th: 'รับการประเมิน', vi: 'Nhận đánh giá', de: 'Bewertung erhalten' } as Record<string, string>)[safeLang] || 'Get Assessment'}
              </ButtonLink>
              <ButtonLink href={`/${safeLang}/contact`} variant="secondary" size="md">
                {({ en: 'Request Assessment', cn: '获取采购评估', zh: '取得採購評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[safeLang] || 'Request Assessment'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>)}
      <WhyUs lang={safeLang} />
      <WhoWeWorkWith lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <TrustGallery lang={safeLang} />
      <Applications lang={safeLang} />
      <CTASection lang={safeLang} />
      <FAQ lang={safeLang} />
    </>
  )
}
