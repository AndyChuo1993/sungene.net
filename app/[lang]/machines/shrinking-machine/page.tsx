import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS } from '@/lib/seo'
import { buildWuushengProductSchema } from '@/lib/productSchema'
import Image from 'next/image'

const PRODUCT_IMAGE = 'https://img.mweb.com.tw/thumb/758/1000x1000/product/03_Shrinking_Tunnel/01_Shrinking_Machine/Shrinking_Machine.jpg'

const metaTitles: Record<string, string> = {
  en: 'Shrink Wrapping Machine | Heat Shrink Tunnel for POF, PVC, OPP Films',
  cn: '收缩包装机 | 热收缩隧道炉 POF/PVC/OPP薄膜',
  zh: '收縮包裝機 | 熱收縮隧道爐 POF/PVC/OPP薄膜',
  fr: 'Machine de rétraction | Tunnel de rétraction pour POF, PVC, OPP',
  es: 'Máquina de retracción | Túnel de retracción para POF, PVC, OPP',
  pt: 'Máquina de retração | Túnel de retração para POF, PVC, OPP',
  ko: '수축 포장기 | POF, PVC, OPP 필름 열수축 터널',
  ja: 'シュリンク包装機 | POF・PVC・OPP対応熱収縮トンネル',
  ar: 'آلة التغليف الحراري | نفق الانكماش لأغشية POF وPVC وOPP',
  th: 'เครื่องห่อหดฟิล์มความร้อน | อุโมงค์ฟิล์มหด POF/PVC/OPP',
  vi: 'Máy co màng nhiệt | Đường hầm co nhiệt cho màng POF, PVC, OPP',
  de: 'Schrumpfverpackungsmaschine | Schrumpftunnel für POF, PVC, OPP',
}

const metaDescs: Record<string, string> = {
  en: 'Heat shrink tunnel machines for food, electronics, hardware, and consumer goods. Conveyor-based shrink tunnels in RST, CST, EST, and PST series. Tunnel widths 350–600mm, speeds up to 18 m/min.',
  cn: '食品、电子、五金及消费品热收缩隧道炉，含RST/CST/EST/PST系列，通道宽度350-600mm，速度最高18m/min。',
  zh: '食品、電子、五金及消費品熱收縮隧道爐，含RST/CST/EST/PST系列，通道寬度350-600mm，速度最高18m/min。',
  fr: 'Tunnels de rétraction pour alimentaire, électronique, quincaillerie et biens de consommation. Séries RST, CST, EST et PST. Largeurs 350–600 mm, vitesses jusqu\'à 18 m/min.',
  es: 'Túneles de retracción para alimentos, electrónica, ferretería y bienes de consumo. Series RST, CST, EST y PST. Anchos 350–600 mm, velocidades hasta 18 m/min.',
  pt: 'Túneis de retração para alimentos, eletrônicos, ferragens e bens de consumo. Séries RST, CST, EST e PST. Larguras 350–600 mm, velocidades até 18 m/min.',
  ko: '식품, 전자제품, 철물, 소비재용 열수축 터널. RST, CST, EST, PST 시리즈. 터널 폭 350-600mm, 최대 속도 18m/min.',
  ja: '食品・電子部品・金物・消費財向け熱収縮トンネル。RST/CST/EST/PSTシリーズ。トンネル幅350〜600mm、速度最大18m/min。',
  ar: 'أنفاق انكماش حراري للأغذية والإلكترونيات والأدوات والسلع الاستهلاكية. سلاسل RST وCST وEST وPST. عروض 350–600 مم، سرعات تصل إلى 18 م/دقيقة.',
  th: 'อุโมงค์หดฟิล์มความร้อนสำหรับอาหาร อิเล็กทรอนิกส์ เครื่องมือ และสินค้าอุปโภคบริโภค ซีรีส์ RST, CST, EST, PST ความกว้างช่องทาง 350-600 มม. ความเร็วสูงสุด 18 ม./นาที',
  vi: 'Đường hầm co nhiệt cho thực phẩm, điện tử, phần cứng và hàng tiêu dùng. Dòng RST, CST, EST và PST. Chiều rộng hầm 350–600mm, tốc độ đến 18 m/phút.',
  de: 'Wärmeschrumpftunnel für Lebensmittel, Elektronik, Heimwerkerbedarf und Konsumgüter. RST-, CST-, EST- und PST-Serien. Tunnelbreiten 350–600 mm, Geschwindigkeiten bis 18 m/min.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/shrinking-machine',
    type: 'website',
    keywords: ['shrink wrapping machine', 'heat shrink tunnel', 'shrink tunnel', 'POF shrink machine', 'PVC shrink machine', 'Wuu Sheng', 'Taiwan shrink machine'],
  })
}

interface PageContent {
  kicker: string
  heroTitle: string
  heroSubtitle: string
  featuresTitle: string
  features: string[]
  specsTitle: string
  applicationsTitle: string
  applications: string[]
  ctaTitle: string
  ctaBtn: string
}

const content: Record<string, PageContent> = {
  en: {
    kicker: 'SHRINK PACKAGING',
    heroTitle: 'Shrink Wrapping Machine (Heat Shrink Tunnel)',
    heroSubtitle: 'Conveyor-based heat shrink tunnel machines for wrapping and sealing products in shrink film. Suitable for food, stationery, electronics, hardware, and daily necessities. Four series — RST, CST, EST, PST — cover small to high-volume production lines.',
    featuresTitle: 'Key Features',
    features: [
      'Conveyor-based design for continuous, inline shrink wrapping',
      'Multiple series: RST (compact), CST (mid-range), EST (high capacity), PST (high speed)',
      'Tunnel sizes from 350×200mm up to 600×300mm to accommodate various product sizes',
      'Conveyor speeds from 0–7 m/min (RST) up to 10–18 m/min (PST)',
      'Compatible with LLDPE, PVC, OPP, PP, and POF shrink films',
      'Single-phase and three-phase power options',
      'Energy-efficient heating elements with even temperature distribution',
      'Easy operating and low maintenance design',
    ],
    specsTitle: 'Technical Specifications',
    applicationsTitle: 'Applications',
    applications: ['Bottled beverages', 'Food & snack products', 'Cosmetics & personal care', 'Electronics packaging', 'Hardware & tools', 'Stationery & gifts', 'Industrial components', 'Multi-pack bundling'],
    ctaTitle: 'Need a shrink tunnel for your packaging line? Tell us your product dimensions and output target.',
    ctaBtn: 'Get a Quote',
  },
  cn: {
    kicker: '收缩包装',
    heroTitle: '收缩包装机（热收缩隧道炉）',
    heroSubtitle: '传送带式热收缩隧道炉，适用于食品、文具、电子、五金及日用品的收缩膜包装封口。RST、CST、EST、PST四个系列覆盖小型到大批量生产线。',
    featuresTitle: '主要特点',
    features: [
      '传送带连续在线收缩包装',
      '多系列：RST（紧凑型）、CST（中型）、EST（大容量）、PST（高速型）',
      '通道尺寸350×200mm至600×300mm，适应多种产品尺寸',
      '传送速度0-7m/min（RST）至10-18m/min（PST）',
      '适用于LLDPE、PVC、OPP、PP及POF收缩膜',
      '单相及三相电源可选',
      '节能加热元件，温度分布均匀',
      '操作简单，维护方便',
    ],
    specsTitle: '技术规格',
    applicationsTitle: '应用领域',
    applications: ['瓶装饮料', '食品与零食', '化妆品与个护', '电子产品包装', '五金工具', '文具与礼品', '工业零部件', '多件组合包装'],
    ctaTitle: '需要为包装线配备收缩隧道炉？告诉我们您的产品尺寸和产量目标。',
    ctaBtn: '获取报价',
  },
  zh: {
    kicker: '收縮包裝',
    heroTitle: '收縮包裝機（熱收縮隧道爐）',
    heroSubtitle: '輸送帶式熱收縮隧道爐，適用於食品、文具、電子、五金及日用品的收縮膜包裝封口。RST、CST、EST、PST四個系列覆蓋小型到大批量生產線。',
    featuresTitle: '主要特點',
    features: [
      '輸送帶連續在線收縮包裝',
      '多系列：RST（緊湊型）、CST（中型）、EST（大容量）、PST（高速型）',
      '通道尺寸350×200mm至600×300mm，適應多種產品尺寸',
      '傳送速度0-7m/min（RST）至10-18m/min（PST）',
      '適用於LLDPE、PVC、OPP、PP及POF收縮膜',
      '單相及三相電源可選',
      '節能加熱元件，溫度分佈均勻',
      '操作簡單，維護方便',
    ],
    specsTitle: '技術規格',
    applicationsTitle: '應用領域',
    applications: ['瓶裝飲料', '食品與零食', '化妝品與個護', '電子產品包裝', '五金工具', '文具與禮品', '工業零部件', '多件組合包裝'],
    ctaTitle: '需要為包裝線配備收縮隧道爐？告訴我們您的產品尺寸和產量目標。',
    ctaBtn: '取得報價',
  },
  fr: {
    kicker: 'EMBALLAGE RÉTRACTABLE',
    heroTitle: 'Machine de rétraction (tunnel de rétraction thermique)',
    heroSubtitle: 'Tunnels de rétraction à convoyeur pour l\'emballage et le scellage de produits sous film rétractable. Pour alimentaire, papeterie, électronique, quincaillerie et articles ménagers. Quatre séries — RST, CST, EST, PST.',
    featuresTitle: 'Caractéristiques principales',
    features: [
      'Conception à convoyeur pour un emballage rétractable continu en ligne',
      'Séries multiples : RST (compact), CST (milieu de gamme), EST (haute capacité), PST (haute vitesse)',
      'Tailles de tunnel de 350×200 à 600×300 mm',
      'Vitesses de convoyeur de 0–7 m/min (RST) à 10–18 m/min (PST)',
      'Compatible LLDPE, PVC, OPP, PP et POF',
      'Options monophasé et triphasé',
      'Éléments chauffants économes avec distribution uniforme de la température',
      'Conception simple à utiliser et à entretenir',
    ],
    specsTitle: 'Spécifications techniques',
    applicationsTitle: 'Applications',
    applications: ['Boissons en bouteille', 'Produits alimentaires et snacks', 'Cosmétiques et soins', 'Emballage électronique', 'Quincaillerie et outils', 'Papeterie et cadeaux', 'Composants industriels', 'Regroupement multi-packs'],
    ctaTitle: 'Besoin d\'un tunnel de rétraction pour votre ligne ? Indiquez-nous vos dimensions produit et cadence cible.',
    ctaBtn: 'Demander un devis',
  },
  es: {
    kicker: 'EMBALAJE RETRÁCTIL',
    heroTitle: 'Máquina de retracción (túnel de retracción térmica)',
    heroSubtitle: 'Túneles de retracción con transportador para envolver y sellar productos en film retráctil. Para alimentos, papelería, electrónica, ferretería y artículos del hogar. Cuatro series — RST, CST, EST, PST.',
    featuresTitle: 'Características principales',
    features: [
      'Diseño con transportador para empaque retráctil continuo en línea',
      'Múltiples series: RST (compacta), CST (media gama), EST (alta capacidad), PST (alta velocidad)',
      'Tamaños de túnel de 350×200 a 600×300 mm',
      'Velocidades de transportador de 0–7 m/min (RST) a 10–18 m/min (PST)',
      'Compatible con LLDPE, PVC, OPP, PP y POF',
      'Opciones monofásica y trifásica',
      'Elementos calefactores eficientes con distribución uniforme de temperatura',
      'Diseño fácil de operar y mantener',
    ],
    specsTitle: 'Especificaciones técnicas',
    applicationsTitle: 'Aplicaciones',
    applications: ['Bebidas embotelladas', 'Alimentos y snacks', 'Cosméticos y cuidado personal', 'Embalaje de electrónica', 'Ferretería y herramientas', 'Papelería y regalos', 'Componentes industriales', 'Agrupación de multipacks'],
    ctaTitle: '¿Necesita un túnel de retracción para su línea? Indíquenos las dimensiones del producto y la capacidad objetivo.',
    ctaBtn: 'Solicitar cotización',
  },
  pt: {
    kicker: 'EMBALAGEM RETRÁTIL',
    heroTitle: 'Máquina de retração (túnel de retração térmica)',
    heroSubtitle: 'Túneis de retração com esteira para envolver e selar produtos em filme retrátil. Para alimentos, papelaria, eletrônicos, ferragens e artigos domésticos. Quatro séries — RST, CST, EST, PST.',
    featuresTitle: 'Principais características',
    features: [
      'Design com esteira para embalagem retrátil contínua em linha',
      'Múltiplas séries: RST (compacta), CST (intermediária), EST (alta capacidade), PST (alta velocidade)',
      'Tamanhos de túnel de 350×200 a 600×300 mm',
      'Velocidades de 0–7 m/min (RST) a 10–18 m/min (PST)',
      'Compatível com LLDPE, PVC, OPP, PP e POF',
      'Opções monofásico e trifásico',
      'Elementos de aquecimento eficientes com distribuição uniforme de temperatura',
      'Design fácil de operar e manter',
    ],
    specsTitle: 'Especificações técnicas',
    applicationsTitle: 'Aplicações',
    applications: ['Bebidas engarrafadas', 'Alimentos e snacks', 'Cosméticos e cuidados pessoais', 'Embalagem eletrônica', 'Ferragens e ferramentas', 'Papelaria e presentes', 'Componentes industriais', 'Agrupamento de multipacks'],
    ctaTitle: 'Precisa de um túnel de retração para sua linha? Informe-nos as dimensões do produto e a capacidade desejada.',
    ctaBtn: 'Solicitar orçamento',
  },
  ko: {
    kicker: '수축 포장',
    heroTitle: '수축 포장기 (열수축 터널)',
    heroSubtitle: '식품, 문구류, 전자제품, 철물, 생활용품의 수축 필름 포장·밀봉을 위한 컨베이어식 열수축 터널. RST, CST, EST, PST 4개 시리즈로 소형부터 대량 생산 라인까지 커버합니다.',
    featuresTitle: '주요 특징',
    features: [
      '컨베이어 방식으로 연속 인라인 수축 포장 가능',
      '다양한 시리즈: RST(소형), CST(중형), EST(대용량), PST(고속)',
      '터널 크기 350×200mm ~ 600×300mm로 다양한 제품 크기 대응',
      '컨베이어 속도 0~7m/min(RST)에서 10~18m/min(PST)까지',
      'LLDPE, PVC, OPP, PP, POF 수축 필름 호환',
      '단상 및 삼상 전원 옵션',
      '균일한 온도 분포의 에너지 효율적인 히팅 요소',
      '조작이 쉽고 유지보수가 간편한 설계',
    ],
    specsTitle: '기술 사양',
    applicationsTitle: '적용 분야',
    applications: ['병음료 포장', '식품·스낵', '화장품·개인용품', '전자제품 포장', '철물·공구', '문구·선물용품', '산업 부품', '멀티팩 번들링'],
    ctaTitle: '포장 라인에 수축 터널이 필요하신가요? 제품 크기와 목표 생산량을 알려주세요.',
    ctaBtn: '견적 받기',
  },
  ja: {
    kicker: 'シュリンク包装',
    heroTitle: 'シュリンク包装機（熱収縮トンネル）',
    heroSubtitle: '食品・文具・電子部品・金物・日用品のシュリンクフィルム包装・封口に対応したコンベア式熱収縮トンネル。RST・CST・EST・PST 4シリーズで小ロットから大量生産ラインまでカバー。',
    featuresTitle: '主な特長',
    features: [
      'コンベア方式による連続インラインシュリンク包装',
      '多彩なシリーズ：RST（コンパクト）、CST（中型）、EST（大容量）、PST（高速）',
      'トンネルサイズ350×200mm〜600×300mm、多様な製品サイズに対応',
      'コンベア速度0〜7m/min（RST）〜10〜18m/min（PST）',
      'LLDPE・PVC・OPP・PP・POFフィルム対応',
      '単相・三相電源選択可',
      '均一な温度分布の省エネ加熱素子',
      '操作・メンテナンスが容易な設計',
    ],
    specsTitle: '技術仕様',
    applicationsTitle: '適用分野',
    applications: ['瓶入り飲料', '食品・スナック', '化粧品・パーソナルケア', '電子製品包装', '金物・工具', '文具・ギフト', '工業部品', 'マルチパックバンドル'],
    ctaTitle: '包装ラインにシュリンクトンネルが必要ですか？製品サイズと目標能力をお知らせください。',
    ctaBtn: '見積もりを依頼',
  },
  ar: {
    kicker: 'التغليف الحراري',
    heroTitle: 'آلة التغليف الحراري (نفق الانكماش الحراري)',
    heroSubtitle: 'أنفاق انكماش حراري بناقل لتغليف وختم المنتجات بغشاء الانكماش. للأغذية والقرطاسية والإلكترونيات والأدوات والمستلزمات اليومية. أربع سلاسل — RST وCST وEST وPST.',
    featuresTitle: 'الميزات الرئيسية',
    features: [
      'تصميم بناقل للتغليف الحراري المستمر',
      'سلاسل متعددة: RST (مضغوطة) وCST (متوسطة) وEST (عالية الطاقة) وPST (سريعة)',
      'أحجام نفق من 350×200 إلى 600×300 مم',
      'سرعات ناقل من 0–7 م/دقيقة (RST) إلى 10–18 م/دقيقة (PST)',
      'متوافق مع LLDPE وPVC وOPP وPP وPOF',
      'خيارات أحادية وثلاثية الطور',
      'عناصر تسخين موفرة للطاقة مع توزيع متجانس للحرارة',
      'تصميم سهل التشغيل والصيانة',
    ],
    specsTitle: 'المواصفات التقنية',
    applicationsTitle: 'التطبيقات',
    applications: ['المشروبات المعبأة', 'الأغذية والوجبات الخفيفة', 'مستحضرات التجميل', 'تغليف الإلكترونيات', 'الأدوات والعدد', 'القرطاسية والهدايا', 'المكونات الصناعية', 'تجميع العبوات المتعددة'],
    ctaTitle: 'هل تحتاج نفقًا حراريًا لخط تغليفك؟ أخبرنا بأبعاد منتجك وهدف الإنتاج.',
    ctaBtn: 'طلب عرض سعر',
  },
  th: {
    kicker: 'บรรจุภัณฑ์ฟิล์มหด',
    heroTitle: 'เครื่องห่อหดฟิล์มความร้อน (อุโมงค์หด)',
    heroSubtitle: 'เครื่องอุโมงค์หดระบบสายพานสำหรับห่อและซีลสินค้าด้วยฟิล์มหด เหมาะสำหรับอาหาร เครื่องเขียน อิเล็กทรอนิกส์ เครื่องมือ และของใช้ในชีวิตประจำวัน 4 ซีรีส์ RST, CST, EST, PST รองรับตั้งแต่สายการผลิตขนาดเล็กถึงขนาดใหญ่',
    featuresTitle: 'คุณสมบัติหลัก',
    features: [
      'ระบบสายพานสำหรับงานห่อหดต่อเนื่อง',
      'หลายซีรีส์: RST (ขนาดเล็ก) CST (กลาง) EST (กำลังสูง) PST (ความเร็วสูง)',
      'ขนาดอุโมงค์ตั้งแต่ 350×200 ถึง 600×300 มม.',
      'ความเร็วสายพาน 0-7 ม./นาที (RST) ถึง 10-18 ม./นาที (PST)',
      'รองรับฟิล์ม LLDPE, PVC, OPP, PP, POF',
      'รองรับไฟเฟสเดียวและสามเฟส',
      'ชิ้นส่วนทำความร้อนประหยัดพลังงาน กระจายความร้อนสม่ำเสมอ',
      'ใช้งานง่าย บำรุงรักษาไม่ยุ่งยาก',
    ],
    specsTitle: 'ข้อมูลจำเพาะทางเทคนิค',
    applicationsTitle: 'การใช้งาน',
    applications: ['เครื่องดื่มบรรจุขวด', 'อาหารและขนมขบเคี้ยว', 'เครื่องสำอางและของใช้ส่วนตัว', 'บรรจุภัณฑ์อิเล็กทรอนิกส์', 'เครื่องมือและอุปกรณ์', 'เครื่องเขียนและของขวัญ', 'ชิ้นส่วนอุตสาหกรรม', 'การรวมแพ็กหลายชิ้น'],
    ctaTitle: 'ต้องการอุโมงค์หดสำหรับสายการบรรจุ? บอกเราเรื่องขนาดสินค้าและกำลังการผลิตที่ต้องการ',
    ctaBtn: 'ขอใบเสนอราคา',
  },
  vi: {
    kicker: 'BAO BÌ CO NHIỆT',
    heroTitle: 'Máy co màng nhiệt (đường hầm co nhiệt)',
    heroSubtitle: 'Máy đường hầm co nhiệt dùng băng tải để bọc và hàn kín sản phẩm bằng màng co. Cho thực phẩm, văn phòng phẩm, điện tử, phần cứng và đồ dùng hàng ngày. Bốn dòng RST, CST, EST, PST từ quy mô nhỏ đến sản lượng cao.',
    featuresTitle: 'Tính năng chính',
    features: [
      'Thiết kế băng tải để co nhiệt liên tục trên dây chuyền',
      'Nhiều dòng sản phẩm: RST (nhỏ gọn), CST (trung bình), EST (công suất cao), PST (tốc độ cao)',
      'Kích thước hầm từ 350×200mm đến 600×300mm',
      'Tốc độ băng tải 0–7 m/phút (RST) đến 10–18 m/phút (PST)',
      'Tương thích LLDPE, PVC, OPP, PP, POF',
      'Tùy chọn điện 1 pha và 3 pha',
      'Bộ phận gia nhiệt tiết kiệm điện, phân phối nhiệt đều',
      'Dễ vận hành và bảo trì',
    ],
    specsTitle: 'Thông số kỹ thuật',
    applicationsTitle: 'Ứng dụng',
    applications: ['Đồ uống đóng chai', 'Thực phẩm và snack', 'Mỹ phẩm và chăm sóc cá nhân', 'Đóng gói điện tử', 'Phần cứng và công cụ', 'Văn phòng phẩm và quà tặng', 'Linh kiện công nghiệp', 'Đóng gói multi-pack'],
    ctaTitle: 'Cần đường hầm co nhiệt cho dây chuyền? Cho chúng tôi biết kích thước sản phẩm và năng suất mục tiêu.',
    ctaBtn: 'Nhận báo giá',
  },
  de: {
    kicker: 'SCHRUMPFVERPACKUNG',
    heroTitle: 'Schrumpfverpackungsmaschine (Wärmeschrumpftunnel)',
    heroSubtitle: 'Förderband-Wärmeschrumpftunnel zum Einwickeln und Versiegeln von Produkten in Schrumpffolie. Für Lebensmittel, Schreibwaren, Elektronik, Heimwerkerbedarf und Haushaltswaren. Vier Serien — RST, CST, EST, PST.',
    featuresTitle: 'Hauptmerkmale',
    features: [
      'Förderbandbasiertes Design für kontinuierliches Inline-Schrumpfverpacken',
      'Mehrere Serien: RST (kompakt), CST (mittlere Baureihe), EST (hohe Kapazität), PST (hohe Geschwindigkeit)',
      'Tunnelgrößen von 350×200 bis 600×300 mm',
      'Fördergeschwindigkeiten 0–7 m/min (RST) bis 10–18 m/min (PST)',
      'Kompatibel mit LLDPE, PVC, OPP, PP und POF',
      'Einphasige und dreiphasige Stromoptionen',
      'Energieeffiziente Heizelemente mit gleichmäßiger Temperaturverteilung',
      'Einfach zu bedienen und zu warten',
    ],
    specsTitle: 'Technische Daten',
    applicationsTitle: 'Anwendungen',
    applications: ['Abgefüllte Getränke', 'Lebensmittel und Snacks', 'Kosmetik und Körperpflege', 'Elektronikverpackung', 'Heimwerkerbedarf und Werkzeuge', 'Schreibwaren und Geschenke', 'Industriekomponenten', 'Multipacks bündeln'],
    ctaTitle: 'Benötigen Sie einen Schrumpftunnel für Ihre Verpackungslinie? Teilen Sie uns Produktmaße und Zieldurchsatz mit.',
    ctaBtn: 'Angebot anfordern',
  },
}

const SPEC_HEADERS = ['Model', 'Machine Size (L×W×H)', 'Tunnel Size (L×W×H)', 'Power', 'Electric Heating', 'Conveyor Speed', 'Roller Pitch']
const SPEC_ROWS = [
  ['RST-350/200', '1150×700×1050 mm', '600×350×200 mm', '220V, 1Ø', '5 KW', '0–7 M/min', '1"'],
  ['RST-400/200', '1350×700×1100 mm', '800×400×200 mm', '220V, 1Ø', '6 KW', '0–7 M/min', '1"'],
  ['CST-400/200', '1750×850×1350 mm', '1200×400×200 mm', '220V, 1Ø', '9 KW', '4–12 M/min', '2"'],
  ['CST-600/300', '1750×1050×1350 mm', '1200×600×300 mm', '220V, 3Ø', '13 KW', '4–12 M/min', '2"'],
  ['EST-400/200', '2500×850×1350 mm', '1400×400×200 mm', '220V, 3Ø', '18 KW', '4–12 M/min', '2"'],
  ['EST-600/300', '2500×1050×1350 mm', '1400×600×300 mm', '220V, 3Ø', '21 KW', '4–12 M/min', '2"'],
  ['PST-400/200', '2500×700×1100 mm', '1800×400×200 mm', '220V, 3Ø', '24 KW', '10–18 M/min', '1"'],
]

const packagingLabels: Record<string, string> = {
  en: 'Packaging', cn: '包装机械', zh: '包裝機械', fr: 'Emballage', es: 'Embalaje',
  pt: 'Embalagem', ko: '포장', ja: '包装', ar: 'التغليف', th: 'บรรจุภัณฑ์', vi: 'Đóng gói', de: 'Verpackung',
}

export default async function ShrinkingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const productSchema = buildWuushengProductSchema({
    lang,
    slug: 'shrinking-machine',
    name: metaTitles[lang] || metaTitles.en,
    description: metaDescs[lang] || metaDescs.en,
    image: PRODUCT_IMAGE,
    sku: 'WS-SHRINK-TUNNEL',
    priceLow: 800, priceHigh: 5000, offerCount: 4,
    category: 'Shrink Wrapping Machines',
  })

  return (
    <>
      <JsonLd data={[productSchema]} />
      <PageHero
        kicker={t.kicker}
        title={t.heroTitle}
        desc={t.heroSubtitle}
        image={{ src: PRODUCT_IMAGE, alt: t.heroTitle, priority: true, aspectClassName: 'aspect-[16/9]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs lang={lang} items={[
            { label: BREADCRUMB_LABELS[lang]?.machinery ?? 'Machinery', href: `/${lang}/machinery` },
            { label: packagingLabels[lang] ?? 'Packaging', href: `/${lang}/machinery/packaging` },
            { label: t.heroTitle, href: `/${lang}/machines/shrinking-machine` },
          ]} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100">
              <Image src={PRODUCT_IMAGE} alt={t.heroTitle} width={800} height={600} unoptimized className="h-full w-full object-contain p-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.featuresTitle}</h2>
              <ul className="mt-6 space-y-4">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm leading-relaxed sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.specsTitle}</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-brand-950 text-white">
                <tr>{SPEC_HEADERS.map((h, i) => <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SPEC_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                    {row.map((cell, j) => <td key={j} className="px-4 py-3 text-sm text-gray-700">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.applicationsTitle}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.applications.map((a, i) => (
              <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{a}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-950 py-16 sm:py-20">
        <Container className="max-w-4xl text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.ctaTitle}</h2>
          <div className="mt-8">
            <ButtonLink href={`/${lang}/contact`} size="lg">{t.ctaBtn}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
