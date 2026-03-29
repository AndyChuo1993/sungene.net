import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { t, Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(rawLang) ? rawLang : 'en') as Lang

  const baseUrl = SITE_URL

  const descriptions: Record<string, string> = {
    en: 'SunGene is a leading manufacturer and exporter of packaging machinery, food processing equipment, filling & sealing systems, and automated production lines from Taiwan. CE certified, serving 50+ countries worldwide. Get factory-direct pricing today.',
    cn: 'SunGene 是台湾领先的包装机械、食品加工设备、灌装封口系统和自动化生产线制造商与出口商。CE认证，服务全球50多个国家。立即获取工厂直销价格。',
    zh: 'SunGene 是台灣領先的包裝機械、食品加工設備、灌裝封口系統和自動化生產線製造商與出口商。CE認證，服務全球50多個國家。立即取得工廠直銷價格。',
    fr: 'SunGene est un fabricant et exportateur leader de machines d\'emballage, d\'équipements de transformation alimentaire, de systèmes de remplissage et de scellage, et de lignes de production automatisées depuis Taïwan. Certifié CE, desservant plus de 50 pays.',
    es: 'SunGene es un fabricante y exportador líder de maquinaria de empaque, equipos de procesamiento de alimentos, sistemas de llenado y sellado, y líneas de producción automatizadas desde Taiwán. Certificado CE, sirviendo a más de 50 países.',
    pt: 'SunGene é um fabricante e exportador líder de máquinas de embalagem, equipamentos de processamento de alimentos, sistemas de enchimento e selagem e linhas de produção automatizadas de Taiwan. Certificado CE, atendendo mais de 50 países.',
    ko: 'SunGene는 대만 최고의 포장기계, 식품가공장비, 충전·밀봉 시스템 및 자동화 생산라인 제조업체이자 수출업체입니다. CE 인증 취득, 전 세계 50개국 이상 서비스.',
    ja: 'SunGeneは台湾を拠点とする包装機械・食品加工機器・充填シーリングシステム・自動化生産ラインの大手メーカー兼輸出業者です。CE認証取得済み、50カ国以上にサービスを提供しています。',
    ar: 'SunGene شركة رائدة في تصنيع وتصدير آلات التعبئة والتغليف ومعدات معالجة الأغذية وأنظمة التعبئة والختم وخطوط الإنتاج الآلية من تايوان. معتمدة CE، تخدم أكثر من 50 دولة حول العالم.',
    th: 'SunGene เป็นผู้ผลิตและผู้ส่งออกชั้นนำด้านเครื่องจักรบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร ระบบบรรจุและปิดผนึก และสายการผลิตอัตโนมัติจากไต้หวัน ได้รับการรับรอง CE ให้บริการในกว่า 50 ประเทศ',
    vi: 'SunGene là nhà sản xuất và xuất khẩu hàng đầu về máy đóng gói, thiết bị chế biến thực phẩm, hệ thống chiết rót và hàn miệng, cùng dây chuyền sản xuất tự động từ Đài Loan. Chứng nhận CE, phục vụ hơn 50 quốc gia.',
    de: 'SunGene ist ein führender Hersteller und Exporteur von Verpackungsmaschinen, Lebensmittelverarbeitungsanlagen, Füll- und Siegelsystemen sowie automatisierten Produktionslinien aus Taiwan. CE-zertifiziert, mit Lieferungen in über 50 Länder.',
  }

  return {
    metadataBase: new URL(baseUrl),
    title: t(lang, 'meta_home_title'),
    description: descriptions[lang] || descriptions.en,
    openGraph: {
      title: t(lang, 'meta_home_title'),
      description: descriptions[lang] || descriptions.en,
      url: `${baseUrl}/${lang}`,
      type: 'website',
      images: [{ url: '/og/og.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/logo/sungene.png' },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
    },
  }
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(rawLang) ? rawLang : 'en') as Lang

  const baseUrl = SITE_URL
  const logoUrl = `${baseUrl}/logo/sungene.png`

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SunGene Co., LTD.',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/${lang}/machinery?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene Co., LTD.',
    description: 'Leading manufacturer and exporter of packaging machinery, food processing equipment, filling & sealing systems, and automated production lines from Taiwan.',
    url: baseUrl,
    logo: logoUrl,
    telephone: '+886-4-37032705',
    email: 'contact@sungene.net',
    foundingDate: '2010',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 201, Guangfu Rd., Central Dist.',
      addressLocality: 'Taichung City',
      addressRegion: 'Taichung',
      postalCode: '400',
      addressCountry: 'TW'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+886-4-37032705',
        contactType: 'sales',
        areaServed: ['TW', 'CN', 'VN', 'TH', 'MY', 'ID', 'PH', 'IN', 'US', 'CA', 'MX', 'BR', 'DE', 'FR', 'NL', 'GB', 'IT', 'ES', 'JP', 'KR', 'AU', 'SA', 'AE', 'NG', 'EG', 'ZA'],
        availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+886-4-37032705',
        contactType: 'technical support',
        availableLanguage: ['en', 'zh-Hant', 'fr', 'es', 'pt', 'ko', 'ja', 'de']
      }
    ],
    sameAs: [
      'https://momas.en.alibaba.com',
      'https://www.linkedin.com/company/sungene-co-ltd'
    ],
    knowsAbout: [
      'Packaging Machinery', 'Food Processing Equipment', 'Filling Machines',
      'Sealing Machines', 'Conveyor Systems', 'Industrial Automation',
      'VFFS Machines', 'HFFS Machines', 'Powder Packaging', 'Liquid Filling'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial Machinery Catalog',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Packaging Machinery' },
        { '@type': 'OfferCatalog', name: 'Food Processing Equipment' },
        { '@type': 'OfferCatalog', name: 'Filling & Sealing Systems' },
        { '@type': 'OfferCatalog', name: 'Conveying & Automation' },
        { '@type': 'OfferCatalog', name: 'Customized Machinery' },
      ]
    }
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'SunGene Co., LTD.',
    image: logoUrl,
    url: baseUrl,
    telephone: '+886-4-37032705',
    email: 'contact@sungene.net',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 201, Guangfu Rd., Central Dist.',
      addressLocality: 'Taichung City',
      postalCode: '400',
      addressCountry: 'TW'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.1433,
      longitude: 120.6845
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    areaServed: [
      { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 13.0, longitude: 105.0 }, geoRadius: '5000 km', name: 'Southeast Asia' },
      { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.0, longitude: 10.0 }, geoRadius: '3000 km', name: 'Europe' },
      { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 25.0, longitude: 45.0 }, geoRadius: '3000 km', name: 'Middle East' },
      { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 0.0, longitude: 25.0 }, geoRadius: '5000 km', name: 'Africa' },
      { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 40.0, longitude: -100.0 }, geoRadius: '4000 km', name: 'Americas' },
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD, EUR, TWD',
    paymentAccepted: 'Wire Transfer, L/C, T/T',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Header lang={lang} />
      <main id="page-content" className="break-words">{children}</main>
      <Footer lang={lang} />
    </>
  )
}
