import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import HeroSection from '@/components/home/HeroSection'
import MachineByProduct from '@/components/home/MachineByProduct'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import WhoWeWorkWith from '@/components/home/WhoWeWorkWith'
import ProcessSection from '@/components/home/ProcessSection'
import Applications from '@/components/home/Applications'
import CTASection from '@/components/home/CTASection'
import FAQ from '@/components/home/FAQ'

type PageParams = {
  params: Promise<{ lang?: string }>
}

const HOME_SEO = {
  en: {
    title: 'SunGene | Packaging Machinery, Food Processing Equipment & Industrial Automation | Taiwan Manufacturer',
    description: 'SunGene manufactures and exports packaging machines, food processing equipment, filling & sealing systems, and automated production lines. CE certified, factory-direct pricing, export to 50+ countries. Get a free quote today.',
    keywords: [
      'packaging machinery manufacturer', 'food processing equipment supplier', 'filling machine Taiwan',
      'sealing machine exporter', 'VFFS packaging machine', 'powder packaging machine',
      'liquid filling machine', 'automated production line', 'industrial machinery Taiwan',
      'packaging equipment factory', 'food machinery supplier', 'custom machinery manufacturer',
      'CE certified packaging machine', 'conveyor system supplier', 'granule packaging machine',
    ],
  },
  zh: {
    title: 'SunGene | 包裝機械、食品加工設備與工業自動化 | 台灣製造商',
    description: 'SunGene 製造並出口包裝機、食品加工設備、灌裝封口系統和自動化生產線。CE認證、工廠直銷、出口50多個國家。立即取得免費報價。',
    keywords: ['包裝機械製造商', '食品加工設備', '灌裝機', '封口機', '自動化生產線', '台灣機械出口'],
  },
  cn: {
    title: 'SunGene | 包装机械、食品加工设备与工业自动化 | 台湾制造商',
    description: 'SunGene 制造并出口包装机、食品加工设备、灌装封口系统和自动化生产线。CE认证、工厂直销、出口50多个国家。立即获取免费报价。',
    keywords: ['包装机械制造商', '食品加工设备', '灌装机', '封口机', '自动化生产线', '台湾机械出口'],
  },
  fr: {
    title: 'SunGene | Machines d\'emballage, Équipements agroalimentaires & Automatisation industrielle | Fabricant taïwanais',
    description: 'SunGene fabrique et exporte des machines d\'emballage, des équipements de transformation alimentaire, des systèmes de remplissage et de scellage, et des lignes de production automatisées. Certifié CE, prix usine, exportation vers plus de 50 pays.',
    keywords: ['fabricant machines emballage', 'équipement transformation alimentaire', 'machine remplissage Taïwan', 'machine scellage', 'machine VFFS', 'ligne production automatisée', 'machine conditionnement poudre', 'remplisseuse liquide', 'exportateur machines industrielles'],
  },
  es: {
    title: 'SunGene | Maquinaria de empaque, Equipos de procesamiento de alimentos y Automatización industrial | Fabricante taiwanés',
    description: 'SunGene fabrica y exporta máquinas de empaque, equipos de procesamiento de alimentos, sistemas de llenado y sellado, y líneas de producción automatizadas. Certificado CE, precios de fábrica, exportación a más de 50 países.',
    keywords: ['fabricante maquinaria empaque', 'equipo procesamiento alimentos', 'máquina llenado Taiwán', 'máquina sellado', 'máquina VFFS', 'línea producción automatizada', 'envasadora polvo', 'llenadora líquidos', 'exportador maquinaria industrial'],
  },
  pt: {
    title: 'SunGene | Máquinas de Embalagem, Equipamentos de Processamento de Alimentos e Automação Industrial | Fabricante de Taiwan',
    description: 'A SunGene fabrica e exporta máquinas de embalagem, equipamentos de processamento de alimentos, sistemas de envase e selagem e linhas de produção automatizadas. Certificação CE, preços de fábrica, exportação para mais de 50 países.',
    keywords: ['fabricante máquinas embalagem', 'equipamento processamento alimentos', 'máquina envase Taiwan', 'máquina selagem', 'máquina VFFS', 'linha produção automatizada', 'embaladora pó', 'envasadora líquidos', 'exportador maquinário industrial'],
  },
  ko: {
    title: 'SunGene | 포장 기계, 식품 가공 장비 및 산업 자동화 | 대만 제조업체',
    description: 'SunGene은 포장 기계, 식품 가공 장비, 충진 및 밀봉 시스템, 자동화 생산 라인을 제조 및 수출합니다. CE 인증, 공장 직거래 가격, 50개국 이상 수출. 지금 무료 견적을 받으세요.',
    keywords: ['포장기계 제조업체', '식품가공장비 공급업체', '충진기 대만', '밀봉기 수출업체', 'VFFS 포장기', '분말 포장기', '액체 충진기', '자동화 생산라인', '산업용 기계 대만'],
  },
  ja: {
    title: 'SunGene | 包装機械・食品加工機器・産業オートメーション | 台湾メーカー',
    description: 'SunGeneは包装機、食品加工機器、充填・シール機、自動化生産ラインを製造・輸出しています。CE認証取得、工場直販価格、50ヶ国以上に輸出。今すぐ無料見積もりをご依頼ください。',
    keywords: ['包装機械メーカー', '食品加工機器サプライヤー', '充填機 台湾', 'シール機 輸出', 'VFFS包装機', '粉末包装機', '液体充填機', '自動化生産ライン', '産業機械 台湾'],
  },
  ar: {
    title: 'SunGene | آلات التعبئة والتغليف، معدات تجهيز الأغذية والأتمتة الصناعية | شركة تصنيع تايوانية',
    description: 'تقوم SunGene بتصنيع وتصدير آلات التعبئة والتغليف ومعدات تجهيز الأغذية وأنظمة التعبئة والإغلاق وخطوط الإنتاج المؤتمتة. حاصلة على شهادة CE، أسعار المصنع مباشرة، تصدير إلى أكثر من 50 دولة.',
    keywords: ['شركة تصنيع آلات تعبئة', 'مورد معدات تجهيز أغذية', 'آلة تعبئة تايوان', 'آلة إغلاق', 'آلة VFFS', 'خط إنتاج مؤتمت', 'آلة تعبئة مسحوق', 'آلة تعبئة سوائل', 'مصدر آلات صناعية'],
  },
  th: {
    title: 'SunGene | เครื่องจักรบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร และระบบอัตโนมัติทางอุตสาหกรรม | ผู้ผลิตจากไต้หวัน',
    description: 'SunGene ผลิตและส่งออกเครื่องจักรบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร ระบบบรรจุและปิดผนึก และสายการผลิตอัตโนมัติ ได้รับมาตรฐาน CE ราคาจากโรงงาน ส่งออกไปกว่า 50 ประเทศ',
    keywords: ['ผู้ผลิตเครื่องจักรบรรจุภัณฑ์', 'อุปกรณ์แปรรูปอาหาร', 'เครื่องบรรจุ ไต้หวัน', 'เครื่องปิดผนึก', 'เครื่อง VFFS', 'สายการผลิตอัตโนมัติ', 'เครื่องบรรจุผง', 'เครื่องบรรจุของเหลว', 'ผู้ส่งออกเครื่องจักรอุตสาหกรรม'],
  },
  vi: {
    title: 'SunGene | Máy Đóng Gói, Thiết Bị Chế Biến Thực Phẩm & Tự Động Hóa Công Nghiệp | Nhà Sản Xuất Đài Loan',
    description: 'SunGene sản xuất và xuất khẩu máy đóng gói, thiết bị chế biến thực phẩm, hệ thống chiết rót và hàn kín, và dây chuyền sản xuất tự động. Chứng nhận CE, giá trực tiếp từ nhà máy, xuất khẩu đến hơn 50 quốc gia.',
    keywords: ['nhà sản xuất máy đóng gói', 'thiết bị chế biến thực phẩm', 'máy chiết rót Đài Loan', 'máy hàn kín', 'máy VFFS', 'dây chuyền sản xuất tự động', 'máy đóng gói bột', 'máy chiết rót chất lỏng', 'nhà xuất khẩu máy công nghiệp'],
  },
  de: {
    title: 'SunGene | Verpackungsmaschinen, Lebensmittelverarbeitungsanlagen & Industrieautomation | Hersteller aus Taiwan',
    description: 'SunGene produziert und exportiert Verpackungsmaschinen, Lebensmittelverarbeitungsanlagen, Abfüll- und Versiegelungssysteme sowie automatisierte Produktionslinien. CE-zertifiziert, ab Werk, Export in über 50 Länder.',
    keywords: ['Verpackungsmaschinen Hersteller', 'Lebensmittelverarbeitungsanlagen Lieferant', 'Abfüllmaschine Taiwan', 'Versiegelungsmaschine', 'VFFS Verpackungsmaschine', 'automatisierte Produktionslinie', 'Pulververpackungsmaschine', 'Flüssigkeitsabfüllmaschine', 'Industriemaschinen Exporteur'],
  },
} as const

function normalizeLang(lang?: string): Lang {
  const valid = ['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de']
  if (lang && valid.includes(lang)) return lang as Lang
  return 'en'
}

function getHomeSeo(lang?: string) {
  const l = normalizeLang(lang)
  return (HOME_SEO as any)[l] || HOME_SEO['en']
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const data = getHomeSeo(safeLang)

  const baseUrl = 'https://sungene.net'

  return {
    title: data.title,
    description: data.description,
    keywords: [...data.keywords],
    alternates: {
      canonical: `${baseUrl}/${safeLang}`,
      languages: {
        'en': 'https://sungene.net/en', 'zh-TW': 'https://sungene.net/zh', 'zh-CN': 'https://sungene.net/cn',
        'fr': 'https://sungene.net/fr', 'es': 'https://sungene.net/es', 'pt': 'https://sungene.net/pt',
        'ko': 'https://sungene.net/ko', 'ja': 'https://sungene.net/ja', 'ar': 'https://sungene.net/ar',
        'th': 'https://sungene.net/th', 'vi': 'https://sungene.net/vi', 'de': 'https://sungene.net/de',
        'x-default': 'https://sungene.net/en',
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${baseUrl}/${safeLang}`,
      siteName: 'SunGene Industrial Machinery',
      type: 'website',
      locale: safeLang === 'zh' ? 'zh_TW' : safeLang === 'cn' ? 'zh_CN' : safeLang === 'fr' ? 'fr_FR' : safeLang === 'es' ? 'es_ES' : 'en_US',
      images: [
        {
          url: '/og/og.png',
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const safeLang = normalizeLang(lang)

  // Product schema for SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SunGene Industrial Machinery',
    description: 'Complete range of packaging machinery, food processing equipment, and industrial automation systems.',
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Packaging Machinery', url: `https://sungene.net/${safeLang}/machinery/packaging` },
      { '@type': 'ListItem', position: 2, name: 'Food Processing Equipment', url: `https://sungene.net/${safeLang}/machinery/food-processing` },
      { '@type': 'ListItem', position: 3, name: 'Filling & Sealing Systems', url: `https://sungene.net/${safeLang}/machinery/filling-sealing` },
      { '@type': 'ListItem', position: 4, name: 'Conveying & Automation', url: `https://sungene.net/${safeLang}/machinery/conveying-automation` },
      { '@type': 'ListItem', position: 5, name: 'Customized Machinery', url: `https://sungene.net/${safeLang}/machinery/custom` },
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the minimum order quantity?', acceptedAnswer: { '@type': 'Answer', text: 'Our MOQ is 1 unit for most standard machines.' } },
      { '@type': 'Question', name: 'Can you customize machines?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We customize dimensions, materials, output capacity, voltage, and automation level.' } },
      { '@type': 'Question', name: 'What countries do you export to?', acceptedAnswer: { '@type': 'Answer', text: 'We export to 50+ countries with CE certification and international shipping support.' } },
      { '@type': 'Question', name: 'What is the production lead time?', acceptedAnswer: { '@type': 'Answer', text: 'Standard machines: 15-30 days. Custom machines: 30-60 days.' } },
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeroSection lang={safeLang} />
      <MachineByProduct lang={safeLang} />
      <ServicesPreview lang={safeLang} />
      <WhyUs lang={safeLang} />
      <WhoWeWorkWith lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <Applications lang={safeLang} />
      <CTASection lang={safeLang} />
      <FAQ lang={safeLang} />
    </>
  )
}
