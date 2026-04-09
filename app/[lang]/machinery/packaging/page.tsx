import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS, LANG_META } from '@/lib/seo'

const titles: Record<string, string> = {
  en: 'Packaging Machinery | VFFS, HFFS, Pouch & Carton Packing',
  cn: '包装机械 | 立式/卧式充填封口机', zh: '包裝機械 | 立式/臥式充填封口機',
  fr: 'Machines d\'emballage | VFFS, HFFS, sachets et cartons',
  es: 'Maquinaria de empaque | VFFS, HFFS, bolsas y cartones',
  pt: 'Máquinas de Embalagem | VFFS, HFFS, Sachês e Cartões',
  ko: '포장 기계 | VFFS, HFFS, 파우치 및 카톤 포장',
  ja: '包装機械 | VFFS、HFFS、パウチ＆カートン包装',
  ar: 'آلات التعبئة والتغليف | VFFS، HFFS، أكياس وكراتين',
  th: 'เครื่องบรรจุภัณฑ์ | VFFS, HFFS, ซองและกล่อง',
  vi: 'Máy đóng gói | VFFS, HFFS, Túi & Thùng carton',
  de: 'Verpackungsmaschinen | VFFS, HFFS, Beutel- & Kartonverpackung',
}

const descriptions: Record<string, string> = {
  en: 'Packaging machinery: VFFS, HFFS, premade pouch, vacuum, shrink wrap, and cartoning. For powder, granule, liquid, and solid products.',
  cn: '包装机械：VFFS、HFFS、预制袋、真空、热缩与装箱方案，适用于粉末、颗粒、液体与固体产品。',
  zh: '包裝機械：VFFS、HFFS、預製袋、真空、熱縮與裝箱方案，適用於粉末、顆粒、液體與固體產品。',
  fr: 'Machines d’emballage : VFFS, HFFS, sachets préformés, sous vide, rétraction et mise en carton. Pour poudres, granulés, liquides et solides.',
  es: 'Maquinaria de empaque: VFFS, HFFS, bolsa preformada, vacío, termoencogible y encajado. Para polvo, granulado, líquido y sólido.',
  pt: 'Máquinas de embalagem: VFFS, HFFS, pouch pré-formado, vácuo, termoencolhível e encaixotamento. Para pó, grânulos, líquidos e sólidos.',
  ko: '포장 설비: VFFS, HFFS, 프리메이드 파우치, 진공, 수축, 박스 포장. 분말/과립/액체/고체 제품용.',
  ja: '包装機械：VFFS、HFFS、プレメードパウチ、真空、シュリンク、カートン包装。粉末・顆粒・液体・固体向け。',
  ar: 'آلات التعبئة والتغليف: VFFS وHFFS والأكياس الجاهزة والتفريغ الحراري والتغليف بالشرنك ووضعها في الكراتين. للمساحيق والحبيبات والسوائل والمواد الصلبة.',
  th: 'เครื่องบรรจุภัณฑ์: VFFS, HFFS, ถุงสำเร็จรูป, สุญญากาศ, ฟิล์มหด และบรรจุกล่อง สำหรับผง เม็ด ของเหลว และของแข็ง',
  vi: 'Máy đóng gói: VFFS, HFFS, túi thành phẩm, chân không, co nhiệt và đóng thùng. Cho bột, hạt, lỏng và rắn.',
  de: 'Verpackungsmaschinen: VFFS, HFFS, Fertigbeutel, Vakuum, Schrumpffolie und Kartonierung. Für Pulver, Granulate, Flüssigkeiten und Feststoffe.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/machinery/packaging',
    type: 'website',
    keywords: ['VFFS machine', 'HFFS machine', 'pouch packing machine', 'vacuum packing machine', 'shrink wrap machine', 'carton packing machine', 'packaging machine Taiwan'],
  })
}

export default async function PackagingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const metaTitle = titles[lang] || titles.en
  const metaDesc = descriptions[lang] || descriptions.en
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 받기', ja: '見積もりを依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Nhận báo giá', de: 'Angebot anfordern' }
  const heroPhoto = PHOTO.machinery.subpageHeroes.packaging

  const content: Record<string, { title: string; p1: string; p2: string; subTitle: string; cons: string[]; cta: string; machines: string[] }> = {
    en: {
      title: 'Packaging Machinery',
      p1: 'We manufacture a complete range of packaging machines for powder, granule, liquid, solid, and mixed products. Our VFFS, HFFS, premade pouch, vacuum, shrink wrap, and carton packing machines serve food, pharmaceutical, chemical, and consumer goods industries worldwide.',
      p2: 'All machines are built with SUS304/316L stainless steel, CE certified, and available with custom voltage, output speed, and automation levels. We provide factory test videos before shipment.',
      subTitle: 'Machine Types Available',
      cons: ['Vertical Form-Fill-Seal (VFFS)', 'Horizontal Form-Fill-Seal (HFFS)', 'Premade Pouch Packing', 'Vacuum Packaging Machines', 'Shrink Wrapping Machines', 'Multi-Head Weighers', 'Carton/Case Packing', 'Labeling & Date Coding'],
      cta: 'Tell us your product and packaging format — we\'ll recommend the right machine.',
      machines: ['Powder Packaging', 'Granule Packaging', 'Liquid Packaging', 'Solid/Piece Packaging']
    },
    cn: {
      title: '包装机械',
      p1: '我们生产全系列包装机，适用于粉末、颗粒、液体、固体和混合产品。我们的立式充填封口机、卧式充填封口机、预制袋包装机、真空包装机、热缩包装机和装箱机服务于全球食品、制药、化工和消费品行业。',
      p2: '所有机器均采用SUS304/316L不锈钢制造，CE认证，可定制电压、产速和自动化水平。发货前提供工厂测试视频。',
      subTitle: '可用机型',
      cons: ['立式充填封口机 (VFFS)', '卧式充填封口机 (HFFS)', '预制袋包装机', '真空包装机', '热缩包装机', '多头秤', '装箱/纸箱包装', '贴标与打码'],
      cta: '告诉我们您的产品和包装形式——我们将推荐合适的机器。',
      machines: ['粉末包装', '颗粒包装', '液体包装', '固体/单件包装']
    },
    zh: {
      title: '包裝機械',
      p1: '我們生產全系列包裝機，適用於粉末、顆粒、液體、固體和混合產品。我們的立式充填封口機、臥式充填封口機、預製袋包裝機、真空包裝機、熱縮包裝機和裝箱機服務於全球食品、製藥、化工和消費品行業。',
      p2: '所有機器均採用SUS304/316L不鏽鋼製造，CE認證，可客製電壓、產速和自動化水平。發貨前提供工廠測試影片。',
      subTitle: '可用機型',
      cons: ['立式充填封口機 (VFFS)', '臥式充填封口機 (HFFS)', '預製袋包裝機', '真空包裝機', '熱縮包裝機', '多頭秤', '裝箱/紙箱包裝', '貼標與打碼'],
      cta: '告訴我們您的產品和包裝形式——我們將推薦合適的機器。',
      machines: ['粉末包裝', '顆粒包裝', '液體包裝', '固體/單件包裝']
    },
    fr: {
      title: 'Machines d\'emballage',
      p1: 'Nous fabriquons une gamme complète de machines de conditionnement pour produits en poudre, granulés, liquides, solides et mixtes. Nos machines VFFS, HFFS, sachets préformés, sous vide, rétractables et d\'encaissage servent les industries alimentaire, pharmaceutique, chimique et de biens de consommation dans le monde entier.',
      p2: 'Toutes les machines sont construites en acier inoxydable SUS304/316L, certifiées CE, avec tension, vitesse et niveau d\'automatisation personnalisables. Nous fournissons des vidéos de test usine avant expédition.',
      subTitle: 'Types de machines disponibles',
      cons: ['Ensacheuse verticale (VFFS)', 'Ensacheuse horizontale (HFFS)', 'Conditionnement en sachets préformés', 'Machines sous vide', 'Machines de rétraction', 'Peseuses multi-têtes', 'Encaissage/mise en carton', 'Étiquetage et datage'],
      cta: 'Décrivez-nous votre produit et format d\'emballage — nous vous recommanderons la machine adaptée.',
      machines: ['Conditionnement poudre', 'Conditionnement granulés', 'Conditionnement liquide', 'Conditionnement solide']
    },
    es: {
      title: 'Maquinaria de empaque',
      p1: 'Fabricamos una gama completa de máquinas de empaque para productos en polvo, granulados, líquidos, sólidos y mixtos. Nuestras máquinas VFFS, HFFS, bolsas premade, vacío, termoencogibles y encajadoras sirven a las industrias alimentaria, farmacéutica, química y de bienes de consumo en todo el mundo.',
      p2: 'Todas las máquinas están construidas con acero inoxidable SUS304/316L, certificadas CE, con voltaje, velocidad y nivel de automatización personalizables. Proporcionamos videos de prueba de fábrica antes del envío.',
      subTitle: 'Tipos de máquinas disponibles',
      cons: ['Empacadora vertical (VFFS)', 'Empacadora horizontal (HFFS)', 'Empaque en bolsas premade', 'Máquinas de vacío', 'Máquinas termoencogibles', 'Pesadoras multicabezal', 'Encajado/embalaje en cartón', 'Etiquetado y codificación'],
      cta: 'Cuéntenos sobre su producto y formato de empaque — le recomendaremos la máquina adecuada.',
      machines: ['Empaque de polvo', 'Empaque de granulados', 'Empaque de líquidos', 'Empaque de sólidos']
    },
    pt: {
      title: 'Máquinas de Embalagem',
      p1: 'Fabricamos uma linha completa de máquinas de embalagem para produtos em pó, grânulos, líquidos, sólidos e mistos. Nossas máquinas VFFS, HFFS, sachês pré-formados, vácuo, termocontráteis e encaixotadoras atendem as indústrias alimentícia, farmacêutica, química e de bens de consumo em todo o mundo.',
      p2: 'Todas as máquinas são construídas em aço inoxidável SUS304/316L, com certificação CE, e disponíveis com voltagem, velocidade e níveis de automação personalizados. Fornecemos vídeos de teste de fábrica antes do envio.',
      subTitle: 'Tipos de máquinas disponíveis',
      cons: ['Empacotadora Vertical (VFFS)', 'Empacotadora Horizontal (HFFS)', 'Embalagem em sachês pré-formados', 'Máquinas de vácuo', 'Máquinas de embalagem termocontrátil', 'Pesadoras multicabeçotes', 'Encaixotamento/embalagem em cartão', 'Rotulagem e codificação'],
      cta: 'Conte-nos sobre seu produto e formato de embalagem — recomendaremos a máquina ideal.',
      machines: ['Embalagem de pó', 'Embalagem de grânulos', 'Embalagem de líquidos', 'Embalagem de sólidos']
    },
    ko: {
      title: '포장 기계',
      p1: '분말, 과립, 액체, 고체 및 혼합 제품을 위한 포장 기계 전 제품군을 제조합니다. VFFS, HFFS, 프리메이드 파우치, 진공, 수축 포장, 카톤 포장기가 전 세계 식품, 제약, 화학 및 소비재 산업에 서비스를 제공합니다.',
      p2: '모든 기계는 SUS304/316L 스테인리스 스틸로 제작되며 CE 인증을 받았고, 맞춤 전압, 생산 속도 및 자동화 수준을 제공합니다. 출하 전 공장 테스트 영상을 제공합니다.',
      subTitle: '사용 가능한 기계 유형',
      cons: ['수직 성형 충전 밀봉기 (VFFS)', '수평 성형 충전 밀봉기 (HFFS)', '프리메이드 파우치 포장', '진공 포장기', '수축 포장기', '멀티헤드 계량기', '카톤/케이스 포장', '라벨링 및 날짜 인쇄'],
      cta: '제품과 포장 형태를 알려주세요 — 적합한 기계를 추천해 드립니다.',
      machines: ['분말 포장', '과립 포장', '액체 포장', '고체/단품 포장']
    },
    ja: {
      title: '包装機械',
      p1: '粉末、顆粒、液体、固体、混合製品向けの包装機を幅広く製造しています。VFFS、HFFS、既製パウチ、真空、シュリンクラップ、カートン包装機が世界中の食品、医薬品、化学、消費財業界にサービスを提供しています。',
      p2: 'すべての機械はSUS304/316Lステンレス鋼で製造され、CE認証済み。カスタム電圧、出力速度、自動化レベルに対応しています。出荷前に工場テスト動画を提供します。',
      subTitle: '対応機種',
      cons: ['縦型製袋充填シール機（VFFS）', '横型製袋充填シール機（HFFS）', '既製パウチ包装', '真空包装機', 'シュリンク包装機', 'マルチヘッド計量機', 'カートン/ケース包装', 'ラベリング＆日付印字'],
      cta: '製品と包装形態をお知らせください — 最適な機械をご提案します。',
      machines: ['粉末包装', '顆粒包装', '液体包装', '固体・個体包装']
    },
    ar: {
      title: 'آلات التعبئة والتغليف',
      p1: 'نصنع مجموعة كاملة من آلات التعبئة والتغليف للمنتجات المسحوقة والحبيبية والسائلة والصلبة والمختلطة. آلات VFFS وHFFS والأكياس الجاهزة والتغليف بالتفريغ والتغليف الحراري وتعبئة الكراتين تخدم صناعات الأغذية والأدوية والكيماويات والسلع الاستهلاكية حول العالم.',
      p2: 'جميع الآلات مصنوعة من الفولاذ المقاوم للصدأ SUS304/316L، حاصلة على شهادة CE، ومتوفرة بجهد كهربائي وسرعة إنتاج ومستويات أتمتة مخصصة. نقدم فيديوهات اختبار المصنع قبل الشحن.',
      subTitle: 'أنواع الآلات المتوفرة',
      cons: ['آلة التشكيل والتعبئة والختم العمودية (VFFS)', 'آلة التشكيل والتعبئة والختم الأفقية (HFFS)', 'تعبئة الأكياس الجاهزة', 'آلات التغليف بالتفريغ', 'آلات التغليف الحراري', 'ميزان متعدد الرؤوس', 'تعبئة الكراتين/الصناديق', 'الملصقات والترميز'],
      cta: 'أخبرنا عن منتجك وشكل التعبئة — سنوصي بالآلة المناسبة.',
      machines: ['تعبئة المساحيق', 'تعبئة الحبيبات', 'تعبئة السوائل', 'تعبئة المنتجات الصلبة']
    },
    th: {
      title: 'เครื่องบรรจุภัณฑ์',
      p1: 'เราผลิตเครื่องบรรจุภัณฑ์ครบวงจรสำหรับผลิตภัณฑ์ผง เม็ด ของเหลว ของแข็ง และผสม เครื่อง VFFS, HFFS, ซองสำเร็จรูป, สุญญากาศ, ห่อหด และบรรจุกล่องของเราให้บริการอุตสาหกรรมอาหาร ยา เคมี และสินค้าอุปโภคบริโภคทั่วโลก',
      p2: 'เครื่องทุกเครื่องผลิตจากสแตนเลส SUS304/316L ได้รับรอง CE และสามารถกำหนดแรงดันไฟฟ้า ความเร็วผลิต และระดับอัตโนมัติได้ เราจัดส่งวิดีโอทดสอบจากโรงงานก่อนจัดส่ง',
      subTitle: 'ประเภทเครื่องที่มี',
      cons: ['เครื่องบรรจุแนวตั้ง (VFFS)', 'เครื่องบรรจุแนวนอน (HFFS)', 'บรรจุซองสำเร็จรูป', 'เครื่องบรรจุสุญญากาศ', 'เครื่องห่อหด', 'เครื่องชั่งหลายหัว', 'บรรจุกล่อง/ลัง', 'ติดฉลากและพิมพ์วันที่'],
      cta: 'บอกเราเกี่ยวกับผลิตภัณฑ์และรูปแบบบรรจุภัณฑ์ของคุณ — เราจะแนะนำเครื่องที่เหมาะสม',
      machines: ['บรรจุผง', 'บรรจุเม็ด', 'บรรจุของเหลว', 'บรรจุของแข็ง/ชิ้น']
    },
    vi: {
      title: 'Máy đóng gói',
      p1: 'Chúng tôi sản xuất đầy đủ các loại máy đóng gói cho sản phẩm bột, hạt, lỏng, rắn và hỗn hợp. Máy VFFS, HFFS, túi làm sẵn, hút chân không, co màng và đóng thùng carton phục vụ ngành thực phẩm, dược phẩm, hóa chất và hàng tiêu dùng trên toàn thế giới.',
      p2: 'Tất cả máy được chế tạo bằng thép không gỉ SUS304/316L, đạt chứng nhận CE, có thể tùy chỉnh điện áp, tốc độ sản xuất và mức tự động hóa. Chúng tôi cung cấp video kiểm tra tại nhà máy trước khi giao hàng.',
      subTitle: 'Các loại máy có sẵn',
      cons: ['Máy đóng gói dọc (VFFS)', 'Máy đóng gói ngang (HFFS)', 'Đóng gói túi làm sẵn', 'Máy hút chân không', 'Máy co màng', 'Cân đa đầu', 'Đóng thùng/carton', 'Dán nhãn và in date'],
      cta: 'Cho chúng tôi biết sản phẩm và định dạng đóng gói — chúng tôi sẽ đề xuất máy phù hợp.',
      machines: ['Đóng gói bột', 'Đóng gói hạt', 'Đóng gói chất lỏng', 'Đóng gói rắn/miếng']
    },
    de: {
      title: 'Verpackungsmaschinen',
      p1: 'Wir fertigen eine vollständige Palette von Verpackungsmaschinen für Pulver-, Granulat-, Flüssig-, Fest- und Mischprodukte. Unsere VFFS-, HFFS-, Fertigbeutel-, Vakuum-, Schrumpffolien- und Kartonverpackungsmaschinen bedienen die Lebensmittel-, Pharma-, Chemie- und Konsumgüterindustrie weltweit.',
      p2: 'Alle Maschinen sind aus Edelstahl SUS304/316L gefertigt, CE-zertifiziert und mit kundenspezifischer Spannung, Ausbringung und Automatisierungsgrad erhältlich. Wir liefern Werkstestvideos vor dem Versand.',
      subTitle: 'Verfügbare Maschinentypen',
      cons: ['Vertikale Schlauchbeutelmaschine (VFFS)', 'Horizontale Schlauchbeutelmaschine (HFFS)', 'Fertigbeutelverpackung', 'Vakuumverpackungsmaschinen', 'Schrumpffolienmaschinen', 'Mehrkopfwaagen', 'Karton-/Kistenverpackung', 'Etikettierung und Datumskodierung'],
      cta: 'Teilen Sie uns Ihr Produkt und Verpackungsformat mit — wir empfehlen die passende Maschine.',
      machines: ['Pulververpackung', 'Granulatverpackung', 'Flüssigkeitsverpackung', 'Feststoffverpackung']
    }
  }
  const t = content[lang] || content['en']

  const pageUrl = `${SITE_URL}/${lang}/machinery/packaging`
  const itemListId = `${pageUrl}#itemlist`
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': pageUrl,
    url: pageUrl,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    description: metaDesc,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': itemListId },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': itemListId,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    isPartOf: { '@id': pageUrl },
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pouch Packing Machine', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/pouch-packing-machine`, url: `${SITE_URL}/${lang}/machines/pouch-packing-machine`, name: 'Pouch Packing Machine' } },
      { '@type': 'ListItem', position: 2, name: 'Powder Filling Machine', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/powder-filling-machine`, url: `${SITE_URL}/${lang}/machines/powder-filling-machine`, name: 'Powder Filling Machine' } },
      { '@type': 'ListItem', position: 3, name: 'Liquid Filling Machine', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/liquid-filling-machine`, url: `${SITE_URL}/${lang}/machines/liquid-filling-machine`, name: 'Liquid Filling Machine' } },
      { '@type': 'ListItem', position: 4, name: 'Pouch Packing Buying Guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/pouch-packing-machine`, url: `${SITE_URL}/${lang}/resources/topic/pouch-packing-machine`, name: 'Pouch Packing Buying Guides' } },
      { '@type': 'ListItem', position: 5, name: 'Powder Filling Buying Guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/powder-filling-machine`, url: `${SITE_URL}/${lang}/resources/topic/powder-filling-machine`, name: 'Powder Filling Buying Guides' } },
      { '@type': 'ListItem', position: 6, name: 'Liquid Filling Buying Guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/liquid-filling-machine`, url: `${SITE_URL}/${lang}/resources/topic/liquid-filling-machine`, name: 'Liquid Filling Buying Guides' } },
    ],
  }

  return (
    <>
      <JsonLd data={[collectionSchema, itemListSchema]} />
      <PageHero
        kicker={({ en: 'PACKAGING EQUIPMENT', cn: '包装设备', zh: '包裝設備', fr: 'ÉQUIPEMENT D\'EMBALLAGE', es: 'EQUIPO DE EMPAQUE', pt: 'EQUIPAMENTO DE EMBALAGEM', ko: '포장 장비', ja: '包装機器', ar: 'معدات التعبئة والتغليف', th: 'อุปกรณ์บรรจุภัณฑ์', vi: 'THIẾT BỊ ĐÓNG GÓI', de: 'VERPACKUNGSANLAGEN' } as Record<string,string>)[lang] || 'PACKAGING EQUIPMENT'}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Packaging machinery in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].machinery, href: `/${lang}/machinery` },
              { label: t.title, href: `/${lang}/machinery/packaging` },
            ]}
          />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>

              {/* Machine type tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {t.machines.map((m, i) => (
                  <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{m}</span>
                ))}
              </div>

            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-xl font-bold text-gray-950">{t.subTitle}</h2>
                <ul className="mt-6 space-y-3">
                  {t.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-sm leading-relaxed sm:text-base">{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="rounded-2xl bg-brand-950 p-8 text-white">
                <h2 className="text-xl font-bold">{t.cta}</h2>
                <div className="mt-6">
                  <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
