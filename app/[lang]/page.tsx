import type { Metadata } from 'next'
import { Lang, t } from '@/lib/i18n'
import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import MachineByProduct from '@/components/home/MachineByProduct'
import ServicesPreview from '@/components/home/ServicesPreview'
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

const HOME_KEYWORDS: Record<Lang, string[]> = {
  en: [
    'packaging machinery manufacturer', 'food processing equipment supplier', 'filling machine Taiwan',
    'sealing machine exporter', 'VFFS packaging machine', 'powder packaging machine',
    'liquid filling machine', 'automated production line', 'industrial machinery Taiwan',
    'packaging equipment factory', 'food machinery supplier', 'custom machinery manufacturer',
    'conveyor system supplier', 'granule packaging machine',
  ],
  zh: ['包裝機械製造商', '食品加工設備', '灌裝機', '封口機', '自動化生產線', '台灣機械出口'],
  cn: ['包装机械制造商', '食品加工设备', '灌装机', '封口机', '自动化生产线', '台湾机械出口'],
  fr: ['fabricant machines emballage', 'équipement transformation alimentaire', 'machine remplissage Taïwan', 'machine VFFS', 'ligne production automatisée', 'exportateur machines industrielles'],
  es: ['fabricante maquinaria empaque', 'equipo procesamiento alimentos', 'máquina llenado Taiwán', 'máquina VFFS', 'línea producción automatizada', 'exportador maquinaria industrial'],
  pt: ['fabricante máquinas embalagem', 'equipamento processamento alimentos', 'máquina envase Taiwan', 'máquina VFFS', 'linha produção automatizada', 'exportador maquinário industrial'],
  ko: ['포장기계 제조업체', '식품가공장비', '충진기 대만', 'VFFS 포장기', '자동화 생산라인', '산업용 기계 대만'],
  ja: ['包装機械メーカー', '食品加工機器', '充填機 台湾', 'VFFS包装機', '自動化生産ライン', '産業機械 台湾'],
  ar: ['آلات التعبئة والتغليف', 'معدات تجهيز الأغذية', 'آلة تعبئة تايوان', 'آلة VFFS', 'خط إنتاج مؤتمت', 'آلات صناعية'],
  th: ['เครื่องจักรบรรจุภัณฑ์', 'อุปกรณ์แปรรูปอาหาร', 'เครื่องบรรจุ ไต้หวัน', 'เครื่อง VFFS', 'สายการผลิตอัตโนมัติ', 'เครื่องจักรอุตสาหกรรม'],
  vi: ['máy đóng gói', 'thiết bị chế biến thực phẩm', 'máy chiết rót Đài Loan', 'máy VFFS', 'dây chuyền tự động', 'máy công nghiệp'],
  de: ['Verpackungsmaschinen Hersteller', 'Lebensmittelverarbeitungsanlagen', 'Abfüllmaschine Taiwan', 'VFFS Verpackungsmaschine', 'automatisierte Produktionslinie', 'Industriemaschinen Exporteur'],
}

const SCHEMA_TEXT: Record<Lang, {
  listName: string
  listDesc: string
  categories: { packaging: string; food: string; filling: string; conveying: string; custom: string }
  faq: { q: string; a: string }[]
}> = {
  en: {
    listName: 'SunGene Industrial Machinery',
    listDesc: 'Packaging machinery, food processing equipment, filling & sealing systems, and conveying/automation.',
    categories: { packaging: 'Packaging Machinery', food: 'Food Processing Equipment', filling: 'Filling & Sealing Systems', conveying: 'Conveying & Automation', custom: 'Customized Machinery' },
    faq: [
      { q: 'What is the minimum order quantity?', a: 'MOQ is 1 unit. Machines are configured to your product, packaging format, and target output.' },
      { q: 'Can you customize machines?', a: 'Yes. Materials, dimensions, capacity, voltage/frequency, and automation modules can be configured to your requirements.' },
      { q: 'What countries do you export to?', a: 'We export to 50+ countries across Southeast Asia, Middle East, Europe, Americas, and Africa. Voltage and frequency are configured to your local standard.' },
      { q: 'What is the production lead time?', a: 'Lead time depends on configuration. Typical ranges: 15–30 days for single machines, 45–90 days for full lines.' },
      { q: 'Do you provide factory acceptance tests (FAT)?', a: 'Yes. Every machine goes through a full factory test before shipment. We provide test videos and results as part of the handover.' },
      { q: 'What certifications do your machines have?', a: 'All machines are CE certified and built with food-grade SUS304/316L stainless steel on contact surfaces.' },
      { q: 'What after-sales support do you offer?', a: 'Remote video installation guidance, operator training, spare parts shipped within 48 hours, and lifetime technical support by phone or video call.' },
    ],
  },
  zh: {
    listName: 'SunGene 工業機械',
    listDesc: '包裝機械、食品加工設備、灌裝封口系統與輸送/自動化整線。',
    categories: { packaging: '包裝機械', food: '食品加工設備', filling: '灌裝與封口系統', conveying: '輸送與自動化', custom: '客製機械' },
    faq: [
      { q: '最小訂購量是多少？', a: '最小訂購量為 1 台。可依產品、包材形式與目標產速進行配置。' },
      { q: '可以客製化嗎？', a: '可以。材質、尺寸、產能、電壓/頻率與自動化模組皆可依需求調整。' },
      { q: '出口到哪些國家？', a: '已出口 50+ 國家，涵蓋東南亞、中東、歐洲、美洲與非洲。電壓與頻率可依目的地標準配置。' },
      { q: '交期大約多久？', a: '交期取決於配置與整線範圍。常見區間：單機 15–30 天、整線 45–90 天。' },
      { q: '出貨前會做出廠測試嗎？', a: '會。每台機器出貨前都會做完整出廠測試（FAT），並提供測試影片與結果作為交付文件。' },
      { q: '機器有哪些認證？', a: '所有機器均通過 CE 認證，接觸面採用食品級 SUS304/316L 不鏽鋼。' },
      { q: '售後支援包含哪些？', a: '遠端視訊安裝指導、操作培訓、備件 48 小時內出貨，以及終身電話或視訊技術支援。' },
    ],
  },
  cn: {
    listName: 'SunGene 工业机械',
    listDesc: '包装机械、食品加工设备、灌装封口系统与输送/自动化整线。',
    categories: { packaging: '包装机械', food: '食品加工设备', filling: '灌装与封口系统', conveying: '输送与自动化', custom: '定制机械' },
    faq: [
      { q: '最小订购量是多少？', a: '最小订购量为 1 台。可按产品、包装形式与目标产速进行配置。' },
      { q: '可以定制吗？', a: '可以。材质、尺寸、产能、电压/频率与自动化模块都可按需求调整。' },
      { q: '出口到哪些国家？', a: '已出口 50+ 国家，涵盖东南亚、中东、欧洲、美洲与非洲。电压与频率可按目的地标准配置。' },
      { q: '交期大约多久？', a: '交期取决于配置与整线范围。常见区间：单机 15–30 天、整线 45–90 天。' },
      { q: '出货前会做出厂测试吗？', a: '会。每台机器出货前都会做完整出厂测试（FAT），并提供测试视频与结果作为交付文件。' },
      { q: '机器有哪些认证？', a: '所有机器均通过 CE 认证，接触面采用食品级 SUS304/316L 不锈钢。' },
      { q: '售后支持包含哪些？', a: '远程视频安装指导、操作培训、备件 48 小时内发货，以及终身电话或视频技术支持。' },
    ],
  },
  fr: {
    listName: 'SunGene — Machines industrielles',
    listDesc: 'Machines d’emballage, équipements agroalimentaires, remplissage/scellage et convoyage/automatisation.',
    categories: { packaging: 'Machines d’emballage', food: 'Équipements agroalimentaires', filling: 'Remplissage & scellage', conveying: 'Convoyage & automatisation', custom: 'Machines sur mesure' },
    faq: [
      { q: 'Quelle est la quantité minimum de commande ?', a: 'MOQ : 1 machine. Configuration selon produit, format et cadence cible.' },
      { q: 'Faites-vous du sur-mesure ?', a: 'Oui. Matériaux, dimensions, capacité, tension/fréquence et modules d’automatisation sont configurables.' },
      { q: 'Vers quels pays exportez-vous ?', a: 'Export vers 50+ pays en Asie du Sud-Est, Moyen-Orient, Europe, Amériques et Afrique. Tension et fréquence adaptées.' },
      { q: 'Quel est le délai de production ?', a: 'Selon configuration : en général 15–30 jours (machine) et 45–90 jours (ligne complète).' },
      { q: 'Faites-vous un test en usine avant expédition ?', a: 'Oui. Chaque machine passe un test complet (FAT) avant expédition. Vidéo et résultats fournis.' },
      { q: 'Quelles certifications avez-vous ?', a: 'Toutes les machines sont certifiées CE avec acier inoxydable alimentaire SUS304/316L sur les surfaces de contact.' },
      { q: 'Quel SAV proposez-vous ?', a: 'Assistance vidéo à distance, formation opérateur, pièces détachées expédiées sous 48h et support technique à vie.' },
    ],
  },
  es: {
    listName: 'SunGene — Maquinaria industrial',
    listDesc: 'Maquinaria de empaque, equipos de alimentos, llenado/sellado y transporte/automatización.',
    categories: { packaging: 'Maquinaria de empaque', food: 'Equipos de alimentos', filling: 'Llenado y sellado', conveying: 'Transporte y automatización', custom: 'Maquinaria a medida' },
    faq: [
      { q: '¿Cuál es el pedido mínimo?', a: 'MOQ: 1 unidad. Se configura según producto, formato y velocidad objetivo.' },
      { q: '¿Pueden personalizar máquinas?', a: 'Sí. Materiales, dimensiones, capacidad, voltaje/frecuencia y módulos de automatización son configurables.' },
      { q: '¿A qué países exportan?', a: 'Exportamos a 50+ países en Asia, Medio Oriente, Europa, América y África. Voltaje y frecuencia se ajustan al estándar local.' },
      { q: '¿Cuál es el plazo de producción?', a: 'Depende de la configuración: típico 15–30 días (máquina) y 45–90 días (línea completa).' },
      { q: '¿Realizan pruebas en fábrica antes del envío?', a: 'Sí. Cada máquina pasa una prueba completa (FAT) antes del envío. Se proporcionan video y resultados.' },
      { q: '¿Qué certificaciones tienen?', a: 'Todas las máquinas cuentan con certificación CE y acero inoxidable alimentario SUS304/316L en superficies de contacto.' },
      { q: '¿Qué soporte posventa ofrecen?', a: 'Asistencia remota por video, capacitación, repuestos enviados en 48 horas y soporte técnico de por vida.' },
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
      { q: 'Qual é o prazo de produção?', a: 'Depende da configuração: típico 15–30 dias (máquina) e 45–90 dias (linha completa).' },
      { q: 'Vocês fazem teste de fábrica antes do envio?', a: 'Sim. Cada máquina passa por teste completo (FAT) antes do envio. Vídeo e resultados são fornecidos.' },
      { q: 'Quais certificações vocês possuem?', a: 'Todas as máquinas possuem certificação CE com aço inoxidável alimentar SUS304/316L nas superfícies de contato.' },
      { q: 'Que suporte pós-venda vocês oferecem?', a: 'Assistência remota por vídeo, treinamento, peças enviadas em 48 horas e suporte técnico vitalício.' },
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
      { q: '출하 전 공장 테스트를 하나요?', a: '네. 모든 장비는 출하 전 FAT(공장 인수시험)를 거치며, 테스트 영상과 결과를 제공합니다.' },
      { q: '어떤 인증을 보유하고 있나요?', a: '모든 장비는 CE 인증을 받았으며, 접촉면에 식품급 SUS304/316L 스테인리스강을 사용합니다.' },
      { q: '애프터서비스는 어떻게 되나요?', a: '원격 영상 설치 안내, 운전자 교육, 48시간 이내 부품 발송, 평생 기술 지원을 제공합니다.' },
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
      { q: '出荷前に工場テストは実施しますか？', a: 'はい。すべての機械は出荷前にFAT（工場受入試験）を行い、テスト動画と結果をお渡しします。' },
      { q: 'どのような認証を取得していますか？', a: '全機種CE認証取得済み。接触面には食品グレードSUS304/316Lステンレス鋼を使用しています。' },
      { q: 'アフターサポートの内容は？', a: 'リモートビデオでの設置支援、オペレーター研修、48時間以内の部品発送、生涯技術サポートをご提供します。' },
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
      { q: 'كم يستغرق وقت الإنتاج؟', a: 'يعتمد على التكوين: غالبًا 15–30 يومًا للآلة و45–90 يومًا للخط الكامل.' },
      { q: 'هل تجرون اختبار قبول في المصنع قبل الشحن؟', a: 'نعم. كل آلة تخضع لاختبار كامل (FAT) قبل الشحن مع فيديو ونتائج الاختبار.' },
      { q: 'ما هي الشهادات المتوفرة؟', a: 'جميع الآلات حاصلة على شهادة CE مع استخدام ستانلس ستيل غذائي SUS304/316L على الأسطح الملامسة.' },
      { q: 'ما هو دعم ما بعد البيع؟', a: 'دعم تركيب عن بُعد عبر الفيديو، تدريب المشغلين، قطع غيار خلال 48 ساعة، ودعم فني مدى الحياة.' },
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
      { q: 'ระยะเวลาผลิตนานไหม?', a: 'ขึ้นอยู่กับสเปก โดยทั่วไปเครื่องเดี่ยว 15–30 วัน และไลน์ 45–90 วัน' },
      { q: 'มีการทดสอบก่อนส่งมอบไหม?', a: 'มี ทุกเครื่องผ่านการทดสอบเต็มรูปแบบ (FAT) ก่อนส่ง พร้อมวิดีโอและรายงานผล' },
      { q: 'มีใบรับรองอะไรบ้าง?', a: 'เครื่องทุกรุ่นผ่าน CE พร้อมสแตนเลสเกรดอาหาร SUS304/316L บนพื้นผิวสัมผัส' },
      { q: 'บริการหลังการขายมีอะไรบ้าง?', a: 'แนะนำติดตั้งผ่านวิดีโอ ฝึกอบรมผู้ปฏิบัติงาน อะไหล่ส่งภายใน 48 ชม. และสนับสนุนเทคนิคตลอดชีพ' },
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
      { q: 'Thời gian sản xuất?', a: 'Tùy cấu hình: thường 15–30 ngày (máy đơn) và 45–90 ngày (dây chuyền).' },
      { q: 'Có kiểm tra tại nhà máy trước khi giao không?', a: 'Có. Mỗi máy đều qua kiểm tra đầy đủ (FAT) trước khi giao, kèm video và kết quả kiểm tra.' },
      { q: 'Máy có chứng nhận gì?', a: 'Tất cả máy đều đạt chứng nhận CE, bề mặt tiếp xúc bằng inox thực phẩm SUS304/316L.' },
      { q: 'Hỗ trợ sau bán hàng gồm những gì?', a: 'Hướng dẫn lắp đặt qua video, đào tạo vận hành, phụ tùng giao trong 48 giờ và hỗ trợ kỹ thuật trọn đời.' },
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
      { q: 'Wird vor der Lieferung ein Werkstest durchgeführt?', a: 'Ja. Jede Maschine durchläuft einen vollständigen FAT (Factory Acceptance Test) vor dem Versand, inkl. Testvideo und Ergebnissen.' },
      { q: 'Welche Zertifizierungen haben Ihre Maschinen?', a: 'Alle Maschinen sind CE-zertifiziert mit lebensmittelechtem Edelstahl SUS304/316L an Kontaktflächen.' },
      { q: 'Welchen After-Sales-Support bieten Sie?', a: 'Ferninstallation per Video, Schulung, Ersatzteile innerhalb von 48 Stunden und lebenslanger technischer Support.' },
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

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LANG_META[safeLang].htmlLang,
    name: s.listName,
    description: s.listDesc,
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: s.categories.packaging, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/packaging`, url: `${SITE_URL}/${safeLang}/machinery/packaging`, name: s.categories.packaging } },
      { '@type': 'ListItem', position: 2, name: s.categories.food, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/food-processing`, url: `${SITE_URL}/${safeLang}/machinery/food-processing`, name: s.categories.food } },
      { '@type': 'ListItem', position: 3, name: s.categories.filling, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/filling-sealing`, url: `${SITE_URL}/${safeLang}/machinery/filling-sealing`, name: s.categories.filling } },
      { '@type': 'ListItem', position: 4, name: s.categories.conveying, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/conveying-automation`, url: `${SITE_URL}/${safeLang}/machinery/conveying-automation`, name: s.categories.conveying } },
      { '@type': 'ListItem', position: 5, name: s.categories.custom, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/custom`, url: `${SITE_URL}/${safeLang}/machinery/custom`, name: s.categories.custom } },
    ]
  }

  const topicHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LANG_META[safeLang].htmlLang,
    name: 'Buying guides by machine',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pouch packing buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/topic/pouch-packing-machine`, url: `${SITE_URL}/${safeLang}/resources/topic/pouch-packing-machine`, name: 'Pouch packing buying guides' } },
      { '@type': 'ListItem', position: 2, name: 'Powder filling buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/topic/powder-filling-machine`, url: `${SITE_URL}/${safeLang}/resources/topic/powder-filling-machine`, name: 'Powder filling buying guides' } },
      { '@type': 'ListItem', position: 3, name: 'Liquid filling buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/topic/liquid-filling-machine`, url: `${SITE_URL}/${safeLang}/resources/topic/liquid-filling-machine`, name: 'Liquid filling buying guides' } },
      { '@type': 'ListItem', position: 4, name: 'Snack processing buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/topic/snack-processing-line`, url: `${SITE_URL}/${safeLang}/resources/topic/snack-processing-line`, name: 'Snack processing buying guides' } },
      { '@type': 'ListItem', position: 5, name: 'Conveyor buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/topic/conveyor-system`, url: `${SITE_URL}/${safeLang}/resources/topic/conveyor-system`, name: 'Conveyor buying guides' } },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topicHubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <HeroSection lang={safeLang} />
      <MachineByProduct lang={safeLang} />
      <ServicesPreview lang={safeLang} />
      <section className="bg-white py-8">
        <Container className="max-w-7xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">
              {({
                en: 'Buying guides by machine',
                cn: '按机型浏览采购指南',
                zh: '依機型瀏覽採購指南',
                fr: 'Guides d’achat par machine',
                es: 'Guías de compra por máquina',
                pt: 'Guias de compra por máquina',
                ko: '기계별 구매 가이드',
                ja: '機種別 購入ガイド',
                ar: 'أدلة الشراء حسب الماكينة',
                th: 'คู่มือการเลือกซื้อตามเครื่อง',
                vi: 'Hướng dẫn mua theo máy',
                de: 'Kaufratgeber nach Maschine',
              } as Record<string, string>)[safeLang] || 'Buying guides by machine'}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/topic/pouch-packing-machine`}>
                {({ en: 'Pouch packing', cn: '袋装包装', zh: '袋裝包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치 포장', ja: 'パウチ包装', ar: 'تعبئة الأكياس', th: 'บรรจุถุง', vi: 'Đóng gói túi', de: 'Beutelverpackung' } as Record<string, string>)[safeLang] || 'Pouch packing'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/topic/powder-filling-machine`}>
                {({ en: 'Powder filling', cn: '粉末灌装', zh: '粉末灌裝', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[safeLang] || 'Powder filling'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/topic/liquid-filling-machine`}>
                {({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[safeLang] || 'Liquid filling'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/topic/snack-processing-line`}>
                {({ en: 'Snack processing', cn: '休闲食品', zh: '休閒食品', fr: 'Snack', es: 'Snacks', pt: 'Snacks', ko: '스낵', ja: 'スナック', ar: 'سناكات', th: 'สแน็ค', vi: 'Snack', de: 'Snack' } as Record<string, string>)[safeLang] || 'Snack processing'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/topic/conveyor-system`}>
                {({ en: 'Conveyors', cn: '输送', zh: '輸送', fr: 'Convoyeurs', es: 'Transporte', pt: 'Transporte', ko: '컨베이어', ja: '搬送', ar: 'نقل', th: 'ลำเลียง', vi: 'Băng tải', de: 'Fördertechnik' } as Record<string, string>)[safeLang] || 'Conveyors'}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${safeLang}/recommend`} size="md">
                {({ en: 'Get a Recommendation', cn: '获取推荐', zh: '取得推薦', fr: 'Obtenir une recommandation', es: 'Obtener recomendación', pt: 'Obter recomendação', ko: '추천 받기', ja: '推薦を受ける', ar: 'احصل على توصية', th: 'รับคำแนะนำ', vi: 'Nhận đề xuất', de: 'Empfehlung erhalten' } as Record<string, string>)[safeLang] || 'Get a Recommendation'}
              </ButtonLink>
              <ButtonLink href={`/${safeLang}/contact`} variant="secondary" size="md">
                {({ en: 'Request a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 요청', ja: '見積依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Yêu cầu báo giá', de: 'Angebot anfordern' } as Record<string, string>)[safeLang] || 'Request a Quote'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
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
