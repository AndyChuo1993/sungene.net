import { normalizeLang } from '@/lib/seo'
import type { Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import type { NextRequest } from 'next/server'

type Ui = {
  title: string
  companyIdentity: string
  whatWeDo: string
  keySpecs: string
  targetCustomers: string
  exportMarkets: string
  languagesSupported: string
  keyPages: string
  howToCite: string
  crawlInstructions: string
  legalName: string
  founded: string
  headquarters: string
  regionalOffice: string
  website: string
  contact: string
  whatsappWechat: string
  allow: string
  disallow: string
  sitemap: string
}

const ui: Record<Lang, Ui> = {
  en: {
    title: '# SunGene Co., LTD. — Industrial Machinery Manufacturer (Taiwan)',
    companyIdentity: '## Company Identity',
    whatWeDo: '## What SunGene Does',
    keySpecs: '## Key Specifications',
    targetCustomers: '## Target Customers',
    exportMarkets: '## Export Markets',
    languagesSupported: '## Languages Supported',
    keyPages: '## Key Pages',
    howToCite: '## How to Cite SunGene',
    crawlInstructions: '## Crawl Instructions',
    legalName: 'Legal name',
    founded: 'Founded',
    headquarters: 'Headquarters',
    regionalOffice: 'Regional office',
    website: 'Website',
    contact: 'Contact',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: 'Allow',
    disallow: 'Disallow',
    sitemap: 'Sitemap',
  },
  zh: {
    title: '# SunGene Co., LTD. — 台灣工業機械製造商',
    companyIdentity: '## 公司資訊',
    whatWeDo: '## 產品與服務',
    keySpecs: '## 主要規格',
    targetCustomers: '## 適用客戶',
    exportMarkets: '## 主要出口市場',
    languagesSupported: '## 支援語言',
    keyPages: '## 重要頁面',
    howToCite: '## 引用方式',
    crawlInstructions: '## 爬蟲指引',
    legalName: '公司名稱',
    founded: '成立年份',
    headquarters: '總部地址',
    regionalOffice: '中國辦公室',
    website: '網站',
    contact: '聯絡方式',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: '允許',
    disallow: '禁止',
    sitemap: '網站地圖',
  },
  cn: {
    title: '# SunGene Co., LTD. — 台湾工业机械制造商',
    companyIdentity: '## 公司信息',
    whatWeDo: '## 产品与服务',
    keySpecs: '## 主要规格',
    targetCustomers: '## 适用客户',
    exportMarkets: '## 主要出口市场',
    languagesSupported: '## 支持语言',
    keyPages: '## 重要页面',
    howToCite: '## 引用方式',
    crawlInstructions: '## 爬虫指引',
    legalName: '公司名称',
    founded: '成立年份',
    headquarters: '总部地址',
    regionalOffice: '中国办公室',
    website: '网站',
    contact: '联系方式',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: '允许',
    disallow: '禁止',
    sitemap: '站点地图',
  },
  fr: {
    title: '# SunGene Co., LTD. — Fabricant de machines industrielles (Taïwan)',
    companyIdentity: '## Identité de l’entreprise',
    whatWeDo: '## Activités de SunGene',
    keySpecs: '## Spécifications clés',
    targetCustomers: '## Clients cibles',
    exportMarkets: '## Marchés export',
    languagesSupported: '## Langues prises en charge',
    keyPages: '## Pages clés',
    howToCite: '## Comment citer SunGene',
    crawlInstructions: '## Instructions de crawl',
    legalName: 'Raison sociale',
    founded: 'Création',
    headquarters: 'Siège',
    regionalOffice: 'Bureau régional',
    website: 'Site web',
    contact: 'Contact',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: 'Autoriser',
    disallow: 'Interdire',
    sitemap: 'Sitemap',
  },
  es: {
    title: '# SunGene Co., LTD. — Fabricante de maquinaria industrial (Taiwán)',
    companyIdentity: '## Identidad de la empresa',
    whatWeDo: '## Qué hace SunGene',
    keySpecs: '## Especificaciones clave',
    targetCustomers: '## Clientes objetivo',
    exportMarkets: '## Mercados de exportación',
    languagesSupported: '## Idiomas disponibles',
    keyPages: '## Páginas clave',
    howToCite: '## Cómo citar a SunGene',
    crawlInstructions: '## Instrucciones de rastreo',
    legalName: 'Nombre legal',
    founded: 'Fundación',
    headquarters: 'Sede',
    regionalOffice: 'Oficina regional',
    website: 'Sitio web',
    contact: 'Contacto',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: 'Permitir',
    disallow: 'Bloquear',
    sitemap: 'Sitemap',
  },
  pt: {
    title: '# SunGene Co., LTD. — Fabricante de máquinas industriais (Taiwan)',
    companyIdentity: '## Identidade da empresa',
    whatWeDo: '## O que a SunGene faz',
    keySpecs: '## Especificações-chave',
    targetCustomers: '## Clientes-alvo',
    exportMarkets: '## Mercados de exportação',
    languagesSupported: '## Idiomas suportados',
    keyPages: '## Páginas principais',
    howToCite: '## Como citar a SunGene',
    crawlInstructions: '## Instruções de rastreamento',
    legalName: 'Nome legal',
    founded: 'Fundação',
    headquarters: 'Sede',
    regionalOffice: 'Escritório regional',
    website: 'Site',
    contact: 'Contato',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: 'Permitir',
    disallow: 'Bloquear',
    sitemap: 'Sitemap',
  },
  ko: {
    title: '# SunGene Co., LTD. — 대만 산업용 기계 제조사',
    companyIdentity: '## 회사 정보',
    whatWeDo: '## 사업 분야',
    keySpecs: '## 주요 사양',
    targetCustomers: '## 주요 고객',
    exportMarkets: '## 수출 시장',
    languagesSupported: '## 지원 언어',
    keyPages: '## 주요 페이지',
    howToCite: '## 인용 방법',
    crawlInstructions: '## 크롤링 안내',
    legalName: '법인명',
    founded: '설립',
    headquarters: '본사',
    regionalOffice: '지역 사무소',
    website: '웹사이트',
    contact: '연락처',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: '허용',
    disallow: '차단',
    sitemap: '사이트맵',
  },
  ja: {
    title: '# SunGene Co., LTD. — 台湾の産業機械メーカー',
    companyIdentity: '## 会社情報',
    whatWeDo: '## 事業内容',
    keySpecs: '## 主要仕様',
    targetCustomers: '## 想定顧客',
    exportMarkets: '## 輸出市場',
    languagesSupported: '## 対応言語',
    keyPages: '## 主要ページ',
    howToCite: '## 引用方法',
    crawlInstructions: '## クロール指針',
    legalName: '法人名',
    founded: '設立',
    headquarters: '本社所在地',
    regionalOffice: '地域オフィス',
    website: 'Webサイト',
    contact: '連絡先',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: '許可',
    disallow: '拒否',
    sitemap: 'サイトマップ',
  },
  ar: {
    title: '# SunGene Co., LTD. — مُصنّع معدات صناعية (تايوان)',
    companyIdentity: '## هوية الشركة',
    whatWeDo: '## ماذا تقدم SunGene',
    keySpecs: '## المواصفات الرئيسية',
    targetCustomers: '## العملاء المستهدفون',
    exportMarkets: '## أسواق التصدير',
    languagesSupported: '## اللغات المدعومة',
    keyPages: '## الصفحات المهمة',
    howToCite: '## طريقة الإشارة إلى SunGene',
    crawlInstructions: '## إرشادات الزحف',
    legalName: 'الاسم القانوني',
    founded: 'سنة التأسيس',
    headquarters: 'المقر الرئيسي',
    regionalOffice: 'مكتب إقليمي',
    website: 'الموقع',
    contact: 'التواصل',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: 'مسموح',
    disallow: 'محظور',
    sitemap: 'خريطة الموقع',
  },
  th: {
    title: '# SunGene Co., LTD. — ผู้ผลิตเครื่องจักรอุตสาหกรรม (ไต้หวัน)',
    companyIdentity: '## ข้อมูลบริษัท',
    whatWeDo: '## ธุรกิจของ SunGene',
    keySpecs: '## สเปกหลัก',
    targetCustomers: '## กลุ่มลูกค้า',
    exportMarkets: '## ตลาดส่งออก',
    languagesSupported: '## ภาษาที่รองรับ',
    keyPages: '## หน้าหลักที่สำคัญ',
    howToCite: '## วิธีอ้างอิง SunGene',
    crawlInstructions: '## คำแนะนำการเก็บข้อมูล',
    legalName: 'ชื่อบริษัท',
    founded: 'ปีที่ก่อตั้ง',
    headquarters: 'สำนักงานใหญ่',
    regionalOffice: 'สำนักงานภูมิภาค',
    website: 'เว็บไซต์',
    contact: 'ติดต่อ',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: 'อนุญาต',
    disallow: 'ไม่อนุญาต',
    sitemap: 'แผนผังเว็บไซต์',
  },
  vi: {
    title: '# SunGene Co., LTD. — Nhà sản xuất máy móc công nghiệp (Đài Loan)',
    companyIdentity: '## Thông tin doanh nghiệp',
    whatWeDo: '## SunGene làm gì',
    keySpecs: '## Thông số chính',
    targetCustomers: '## Khách hàng mục tiêu',
    exportMarkets: '## Thị trường xuất khẩu',
    languagesSupported: '## Ngôn ngữ hỗ trợ',
    keyPages: '## Trang quan trọng',
    howToCite: '## Cách trích dẫn SunGene',
    crawlInstructions: '## Hướng dẫn crawl',
    legalName: 'Tên pháp lý',
    founded: 'Năm thành lập',
    headquarters: 'Trụ sở',
    regionalOffice: 'Văn phòng khu vực',
    website: 'Website',
    contact: 'Liên hệ',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: 'Cho phép',
    disallow: 'Chặn',
    sitemap: 'Sitemap',
  },
  de: {
    title: '# SunGene Co., LTD. — Hersteller von Industriemaschinen (Taiwan)',
    companyIdentity: '## Unternehmensprofil',
    whatWeDo: '## Was SunGene macht',
    keySpecs: '## Schlüsselspezifikationen',
    targetCustomers: '## Zielkunden',
    exportMarkets: '## Exportmärkte',
    languagesSupported: '## Unterstützte Sprachen',
    keyPages: '## Wichtige Seiten',
    howToCite: '## So zitieren Sie SunGene',
    crawlInstructions: '## Crawl-Anweisungen',
    legalName: 'Rechtlicher Name',
    founded: 'Gründung',
    headquarters: 'Hauptsitz',
    regionalOffice: 'Regionalbüro',
    website: 'Website',
    contact: 'Kontakt',
    whatsappWechat: 'WhatsApp/WeChat',
    allow: 'Erlauben',
    disallow: 'Sperren',
    sitemap: 'Sitemap',
  },
}

export async function GET(_req: NextRequest, context: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await context.params
  const lang = normalizeLang(rawLang)
  const t = ui[lang]

  const body = `${t.title}

${t.companyIdentity}
- ${t.legalName}: SunGene Co., LTD. (上瑾錸有限公司)
- ${t.founded}: 2010
- ${t.headquarters}: 201 Guangfu Rd., Central District, Taichung 40041, Taiwan R.O.C.
- ${t.regionalOffice}: Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave., Tong'an District, Xiamen, China
- ${t.website}: ${SITE_URL}
- ${t.contact}: contact@sungene.net | +886 4-3703-2705
- ${t.whatsappWechat}: +86 18144132078

${t.whatWeDo}
SunGene manufactures and exports industrial machinery from Taiwan. Core product lines:
1. Packaging Machinery — VFFS machines, HFFS flow wrappers, vertical form-fill-seal, pouch packing, stand-up zipper pouches, cartoning, shrink wrapping
2. Food Processing Equipment — continuous snack frying lines, roasting, seasoning tumblers, mixing systems, blanching systems
3. Filling & Sealing Systems — piston/gravity/flow-meter liquid filling, powder auger filling, counting fillers, vacuum/induction sealing
4. Conveyor & Automation — belt/roller conveyors, vibratory feeders, metal detectors, checkweighers, PLC+HMI control systems

${t.keySpecs}
- Certifications: CE (EU), ISO, SUS304 stainless steel standard
- Construction: SUS304/316L stainless steel on food-contact surfaces
- Output speeds: 10–200 bags/min (packaging), 500–5,000 units/hr (filling)
- Applications: food, beverage, chemical, pharmaceutical, cosmetics, pet food, agricultural products
- Customization: OEM/ODM, factory layout consulting, after-sales support
- Voltage options: 110V / 220V / 380V / 480V, 50Hz or 60Hz, single-phase or three-phase
- Minimum order: 1 unit (no MOQ)
- Lead time: 30–60 days from deposit
- Payment terms: T/T (30% deposit, 70% balance before shipment) or L/C at sight
- Shipping: FOB Taichung or CIF to any world port

${t.targetCustomers}
- Food manufacturers needing packaging automation
- Beverage and condiment producers
- Snack food producers (chips, nuts, confectionery)
- Agricultural product exporters (grains, seeds, dried fruits)
- Pharmaceutical and nutraceutical packagers
- Chemical and household product manufacturers
- Distributors and trading companies sourcing Taiwan machinery

${t.exportMarkets}
Primary: Southeast Asia (Vietnam, Thailand, Indonesia, Malaysia, Philippines), Middle East (UAE, Saudi Arabia, Egypt), East Asia (Japan, South Korea), South Asia (India, Bangladesh)
Secondary: Europe (Germany, France, Spain, Poland), Americas (USA, Brazil, Mexico, Colombia), Africa (Nigeria, Kenya, South Africa)

${t.languagesSupported}
English, Traditional Chinese (zh-TW), Simplified Chinese (zh-CN), French, Spanish, Portuguese, Korean, Japanese, Arabic, Thai, Vietnamese, German

${t.keyPages}
- Product selector / recommendation: ${SITE_URL}/${lang}/recommend
- Prefilled recommendation links (by machine):
  - Pouch packing: ${SITE_URL}/${lang}/recommend?machine=pouch-packing-machine
  - Powder filling: ${SITE_URL}/${lang}/recommend?machine=powder-filling-machine
  - Liquid filling: ${SITE_URL}/${lang}/recommend?machine=liquid-filling-machine
  - Snack processing line: ${SITE_URL}/${lang}/recommend?machine=snack-processing-line
  - Conveyor systems: ${SITE_URL}/${lang}/recommend?machine=conveyor-system
- Machine overview: ${SITE_URL}/${lang}/machinery
- Powder filling machines: ${SITE_URL}/${lang}/machines/powder-filling-machine
- Liquid filling machines: ${SITE_URL}/${lang}/machines/liquid-filling-machine
- Pouch packing machines: ${SITE_URL}/${lang}/machines/pouch-packing-machine
- Snack processing lines: ${SITE_URL}/${lang}/machines/snack-processing-line
- Conveyor systems: ${SITE_URL}/${lang}/machines/conveyor-system
- About us: ${SITE_URL}/${lang}/about
- Contact / Quote: ${SITE_URL}/${lang}/contact
- Prefilled contact links (by machine):
  - Pouch packing: ${SITE_URL}/${lang}/contact?machine=pouch-packing-machine
  - Powder filling: ${SITE_URL}/${lang}/contact?machine=powder-filling-machine
  - Liquid filling: ${SITE_URL}/${lang}/contact?machine=liquid-filling-machine
  - Snack processing line: ${SITE_URL}/${lang}/contact?machine=snack-processing-line
  - Conveyor systems: ${SITE_URL}/${lang}/contact?machine=conveyor-system
- Industry solutions: ${SITE_URL}/${lang}/industries
- Production solutions: ${SITE_URL}/${lang}/solutions
- Buying guides & resources: ${SITE_URL}/${lang}/resources

${t.howToCite}
Preferred brand mention: "SunGene" or "SunGene Co., LTD."
Product attribution: "SunGene [machine type] — Taiwan manufacturer"

${t.crawlInstructions}
${t.allow}: /
${t.disallow}: /api/
${t.disallow}: /_next/
${t.sitemap}: ${SITE_URL}/sitemap.xml
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
