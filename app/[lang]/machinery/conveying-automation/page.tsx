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
  en: 'Conveying & Automation Systems | Conveyors, Palletizers, PLC | SunGene',
  cn: '输送与自动化系统 | 输送机、码垛机、PLC控制 | SunGene', zh: '輸送與自動化系統 | 輸送機、碼垛機、PLC控制 | SunGene',
  fr: 'Syst\u00E8mes de convoyage et automatisation | Convoyeurs, palettiseurs, PLC | SunGene',
  es: 'Sistemas de transporte y automatizaci\u00F3n | Transportadores, paletizadores, PLC | SunGene',
  pt: 'Sistemas de Transporte e Automa\u00E7\u00E3o | Esteiras, Paletizadores, CLP | SunGene',
  ko: '\uCEE8\uBCA0\uC774\uC5B4 \uBC0F \uC790\uB3D9\uD654 \uC2DC\uC2A4\uD15C | \uCEE8\uBCA0\uC774\uC5B4, \uD314\uB808\uD0C0\uC774\uC800, PLC | SunGene',
  ja: '\u642C\u9001\u30FB\u81EA\u52D5\u5316\u30B7\u30B9\u30C6\u30E0 | \u30B3\u30F3\u30D9\u30A2\u3001\u30D1\u30EC\u30BF\u30A4\u30B6\u30FC\u3001PLC | SunGene',
  ar: '\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0646\u0642\u0644 \u0648\u0627\u0644\u0623\u062A\u0645\u062A\u0629 | \u0646\u0627\u0642\u0644\u0627\u062A\u060C \u0645\u0639\u062F\u0627\u062A \u062A\u062D\u0645\u064A\u0644\u060C PLC | SunGene',
  th: '\u0E23\u0E30\u0E1A\u0E1A\u0E25\u0E33\u0E40\u0E25\u0E35\u0E22\u0E07\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 | \u0E2A\u0E32\u0E22\u0E1E\u0E32\u0E19, \u0E1E\u0E32\u0E40\u0E25\u0E17\u0E44\u0E17\u0E40\u0E0B\u0E2D\u0E23\u0E4C, PLC | SunGene',
  vi: 'H\u1EC7 Th\u1ED1ng B\u0103ng T\u1EA3i & T\u1EF1 \u0110\u1ED9ng H\u00F3a | B\u0103ng t\u1EA3i, Palletizer, PLC | SunGene',
  de: 'F\u00F6rder- & Automatisierungssysteme | F\u00F6rderb\u00E4nder, Palettierer, SPS | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'Conveying and automation systems: belt conveyors, bucket elevators, screw conveyors, vibratory feeders, robotic arms, palletizers, and PLC-controlled production lines.',
  cn: '输送与自动化系统：皮带输送、斗式提升、螺旋输送、振动给料、机械臂、码垛与PLC控制产线。',
  zh: '輸送與自動化系統：皮帶輸送、斗式提升、螺旋輸送、振動給料、機械臂、碼垛與PLC控制產線。',
  fr: 'Systèmes de convoyage et automatisation SunGene : convoyeurs à bande, élévateurs à godets, convoyeurs à vis, alimentateurs vibrants, bras robotiques, palettiseurs, lignes PLC. Certifiés CE.',
  es: 'Sistemas de transporte y automatización SunGene: cintas transportadoras, elevadores de cangilones, tornillos, alimentadores vibratorios, brazos robóticos, paletizadores, líneas PLC. CE.',
  pt: 'Sistemas de transporte e automação SunGene: transportadores de correia, elevadores de caçamba, sem-fim, alimentadores vibratórios, braços robóticos, paletizadores, linhas PLC. CE.',
  ko: 'SunGene 컨베이어 및 자동화 시스템: 벨트, 버킷 엘리베이터, 스크류, 진동 피더, 로봇 암, 팔레타이저, PLC 생산 라인. CE 인증, 대만.',
  ja: 'SunGeneコンベア・自動化システム：ベルト、バケットエレベーター、スクリュー、振動フィーダー、ロボットアーム、パレタイザー、PLC制御ライン。CE認証、台湾。',
  ar: 'أنظمة النقل والأتمتة SunGene: ناقلات سيرية، رافعات دلو، لولبية، مغذيات اهتزازية، أذرع روبوتية، مكدسات وخطوط PLC. معتمدة CE، تايوان.',
  th: 'ระบบลำเลียงและอัตโนมัติ SunGene: สายพาน ถังตัก สกรู เครื่องป้อนสั่น แขนหุ่นยนต์ พาเลทไทเซอร์ สายการผลิต PLC รับรอง CE ไต้หวัน',
  vi: 'Hệ thống băng tải và tự động hóa SunGene: băng đai, gàu nâng, trục vít, cấp liệu rung, cánh tay robot, palletizer, dây chuyền PLC. CE, Đài Loan.',
  de: 'SunGene Förder- und Automatisierungssysteme: Gurtförderer, Becherwerke, Schnecken, Schwingförderer, Roboterarme, Palettierer, PLC-Linien. CE-zertifiziert, Taiwan.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/machinery/conveying-automation',
    type: 'website',
    keywords: ['belt conveyor Taiwan', 'bucket elevator', 'screw conveyor', 'production line automation', 'robotic palletizer', 'PLC control system', 'factory automation Taiwan'],
  })
}

export default async function ConveyingAutomationPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 받기', ja: '見積もりを依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Nhận báo giá', de: 'Angebot anfordern' }
  const heroPhoto = PHOTO.machinery.subpageHeroes.conveyingAutomation

  const content: Record<string, any> = {
    en: {
      title: 'Conveying & Automation Systems',
      p1: 'We provide complete conveying and automation solutions to connect your production line from start to finish. Our systems include belt conveyors, bucket elevators, screw conveyors, robotic arms, palletizers, PLC controls, metal detectors, and check weighers — designed to connect directly with packaging, filling, and processing equipment.',
      p2: 'All systems are built with industrial-grade components, CE certified, and engineered for 24/7 operation. We offer custom layout design, PLC programming, and turnkey installation support.',
      subTitle: 'Machine Types Available',
      cons: ['Belt Conveyors', 'Bucket Elevators', 'Screw Conveyors', 'Robotic Arms', 'Palletizers', 'PLC Controls', 'Metal Detectors', 'Check Weighers'],
      cta: 'Describe your production line layout — we\'ll design the right conveying and automation system.',
      machines: ['Material Conveying', 'Line Automation', 'Quality Inspection', 'End-of-Line Palletizing']
    },
    cn: {
      title: '输送与自动化系统',
      p1: '我们提供完整的输送和自动化解决方案，将您的生产线从头到尾连接起来。系统包括皮带输送机、斗式提升机、螺旋输送机、机械臂、码垛机、PLC控制系统、金属检测器和重量检测器——可直接与包装、灌装和加工设备整合搭配。',
      p2: '所有系统采用工业级组件，CE认证，为24/7运行而设计。我们提供定制布局设计、PLC编程和交钥匙安装支持。',
      subTitle: '可用机型',
      cons: ['皮带输送机', '斗式提升机', '螺旋输送机', '机械臂', '码垛机', 'PLC控制系统', '金属检测器', '重量检测器'],
      cta: '描述您的生产线布局——我们将设计合适的输送和自动化系统。',
      machines: ['物料输送', '产线自动化', '质量检测', '末端码垛']
    },
    zh: {
      title: '輸送與自動化系統',
      p1: '我們提供完整的輸送和自動化解決方案，將您的生產線從頭到尾連接起來。系統包括皮帶輸送機、斗式提升機、螺旋輸送機、機械臂、碼垛機、PLC控制系統、金屬檢測器和重量檢測器——可直接與包裝、灌裝和加工設備整合搭配。',
      p2: '所有系統採用工業級元件，CE認證，為24/7運行而設計。我們提供客製佈局設計、PLC程式設計和交鑰匙安裝支援。',
      subTitle: '可用機型',
      cons: ['皮帶輸送機', '斗式提升機', '螺旋輸送機', '機械臂', '碼垛機', 'PLC控制系統', '金屬檢測器', '重量檢測器'],
      cta: '描述您的生產線佈局——我們將設計合適的輸送和自動化系統。',
      machines: ['物料輸送', '產線自動化', '品質檢測', '末端碼垛']
    },
    fr: {
      title: 'Syst\u00E8mes de convoyage et automatisation',
      p1: 'Nous fournissons des solutions compl\u00E8tes de convoyage et d\'automatisation pour connecter votre ligne de production du début à la fin. Nos syst\u00E8mes comprennent des convoyeurs \u00E0 bande, \u00E9l\u00E9vateurs \u00E0 godets, convoyeurs \u00E0 vis, bras robotiques, palettiseurs, commandes PLC, d\u00E9tecteurs de m\u00E9taux et trieuses pond\u00E9rales.',
      p2: 'Tous les syst\u00E8mes sont construits avec des composants de qualit\u00E9 industrielle, certifi\u00E9s CE et con\u00E7us pour un fonctionnement 24h/24. Nous proposons la conception de layouts personnalis\u00E9s, la programmation PLC et un support d\'installation cl\u00E9 en main.',
      subTitle: 'Types de machines disponibles',
      cons: ['Convoyeurs \u00E0 bande', '\u00C9l\u00E9vateurs \u00E0 godets', 'Convoyeurs \u00E0 vis', 'Bras robotiques', 'Palettiseurs', 'Commandes PLC', 'D\u00E9tecteurs de m\u00E9taux', 'Trieuses pond\u00E9rales'],
      cta: 'D\u00E9crivez la configuration de votre ligne de production \u2014 nous concevrons le syst\u00E8me de convoyage et d\'automatisation adapt\u00E9.',
      machines: ['Convoyage de mati\u00E8res', 'Automatisation de ligne', 'Inspection qualit\u00E9', 'Palettisation fin de ligne']
    },
    es: {
      title: 'Sistemas de transporte y automatizaci\u00F3n',
      p1: 'Proporcionamos soluciones completas de transporte y automatizaci\u00F3n para conectar su l\u00EDnea de producci\u00F3n de principio a fin. Nuestros sistemas incluyen transportadores de banda, elevadores de cangilones, transportadores de tornillo, brazos rob\u00F3ticos, paletizadores, controles PLC, detectores de metales y controladoras de peso.',
      p2: 'Todos los sistemas est\u00E1n construidos con componentes de grado industrial, certificados CE y dise\u00F1ados para operaci\u00F3n 24/7. Ofrecemos dise\u00F1o de layout personalizado, programaci\u00F3n PLC y soporte de instalaci\u00F3n llave en mano.',
      subTitle: 'Tipos de m\u00E1quinas disponibles',
      cons: ['Transportadores de banda', 'Elevadores de cangilones', 'Transportadores de tornillo', 'Brazos rob\u00F3ticos', 'Paletizadores', 'Controles PLC', 'Detectores de metales', 'Controladoras de peso'],
      cta: 'Describa la configuraci\u00F3n de su l\u00EDnea de producci\u00F3n \u2014 dise\u00F1aremos el sistema de transporte y automatizaci\u00F3n adecuado.',
      machines: ['Transporte de materiales', 'Automatizaci\u00F3n de l\u00EDnea', 'Inspecci\u00F3n de calidad', 'Paletizado de final de l\u00EDnea']
    },
    pt: {
      title: 'Sistemas de Transporte e Automa\u00E7\u00E3o',
      p1: 'Fornecemos solu\u00E7\u00F5es completas de transporte e automa\u00E7\u00E3o para conectar sua linha de produ\u00E7\u00E3o do in\u00EDcio ao fim. Nossos sistemas incluem esteiras transportadoras, elevadores de canecas, transportadores helicoidais, bra\u00E7os rob\u00F3ticos, paletizadores, controles CLP, detectores de metais e balanças de verifica\u00E7\u00E3o.',
      p2: 'Todos os sistemas s\u00E3o constru\u00EDdos com componentes de grau industrial, certificados CE e projetados para opera\u00E7\u00E3o 24/7. Oferecemos projeto de layout personalizado, programa\u00E7\u00E3o CLP e suporte de instala\u00E7\u00E3o turnkey.',
      subTitle: 'Tipos de m\u00E1quinas dispon\u00EDveis',
      cons: ['Esteiras transportadoras', 'Elevadores de canecas', 'Transportadores helicoidais', 'Bra\u00E7os rob\u00F3ticos', 'Paletizadores', 'Controles CLP', 'Detectores de metais', 'Balan\u00E7as de verifica\u00E7\u00E3o'],
      cta: 'Descreva o layout da sua linha de produ\u00E7\u00E3o \u2014 projetaremos o sistema de transporte e automa\u00E7\u00E3o ideal.',
      machines: ['Transporte de materiais', 'Automa\u00E7\u00E3o de linha', 'Inspe\u00E7\u00E3o de qualidade', 'Paletiza\u00E7\u00E3o de final de linha']
    },
    ko: {
      title: '\uCEE8\uBCA0\uC774\uC5B4 \uBC0F \uC790\uB3D9\uD654 \uC2DC\uC2A4\uD15C',
      p1: '\uC0DD\uC0B0 \uB77C\uC778\uC744 \uCC98\uC74C\uBD80\uD130 \uB05D\uAE4C\uC9C0 \uC5F0\uACB0\uD558\uB294 \uC644\uC804\uD55C \uCEE8\uBCA0\uC774\uC5B4 \uBC0F \uC790\uB3D9\uD654 \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBCA8\uD2B8 \uCEE8\uBCA0\uC774\uC5B4, \uBC84\uD0B7 \uC5D8\uB9AC\uBCA0\uC774\uD130, \uC2A4\uD06C\uB958 \uCEE8\uBCA0\uC774\uC5B4, \uB85C\uBD07 \uC554, \uD314\uB808\uD0C0\uC774\uC800, PLC \uC81C\uC5B4, \uAE08\uC18D \uD0D0\uC9C0\uAE30, \uC911\uB7C9 \uAC80\uC0AC\uAE30\uB97C \uD3EC\uD568\uD569\uB2C8\uB2E4.',
      p2: '\uBAA8\uB4E0 \uC2DC\uC2A4\uD15C\uC740 \uC0B0\uC5C5\uC6A9 \uBD80\uD488\uC73C\uB85C \uC81C\uC791\uB418\uBA70 CE \uC778\uC99D\uC744 \uBC1B\uC558\uACE0 24/7 \uC6B4\uC601\uC744 \uC704\uD574 \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB9DE\uCDA4 \uB808\uC774\uC544\uC6C3 \uC124\uACC4, PLC \uD504\uB85C\uADF8\uB798\uBC0D, \uD134\uD0A4 \uC124\uCE58 \uC9C0\uC6D0\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.',
      subTitle: '\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAE30\uACC4 \uC720\uD615',
      cons: ['\uBCA8\uD2B8 \uCEE8\uBCA0\uC774\uC5B4', '\uBC84\uD0B7 \uC5D8\uB9AC\uBCA0\uC774\uD130', '\uC2A4\uD06C\uB958 \uCEE8\uBCA0\uC774\uC5B4', '\uB85C\uBD07 \uC554', '\uD314\uB808\uD0C0\uC774\uC800', 'PLC \uC81C\uC5B4', '\uAE08\uC18D \uD0D0\uC9C0\uAE30', '\uC911\uB7C9 \uAC80\uC0AC\uAE30'],
      cta: '\uC0DD\uC0B0 \uB77C\uC778 \uB808\uC774\uC544\uC6C3\uC744 \uC124\uBA85\uD574 \uC8FC\uC138\uC694 \u2014 \uC801\uD569\uD55C \uCEE8\uBCA0\uC774\uC5B4 \uBC0F \uC790\uB3D9\uD654 \uC2DC\uC2A4\uD15C\uC744 \uC124\uACC4\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.',
      machines: ['\uBB3C\uB8CC \uC774\uC1A1', '\uB77C\uC778 \uC790\uB3D9\uD654', '\uD488\uC9C8 \uAC80\uC0AC', '\uB9D0\uB2E8 \uD314\uB808\uD0C0\uC774\uC9D5']
    },
    ja: {
      title: '\u642C\u9001\u30FB\u81EA\u52D5\u5316\u30B7\u30B9\u30C6\u30E0',
      p1: '\u751F\u7523\u30E9\u30A4\u30F3\u3092\u59CB\u307E\u308A\u304B\u3089\u7D42\u308F\u308A\u307E\u3067\u3064\u306A\u3050\u5B8C\u5168\u306A\u642C\u9001\u30FB\u81EA\u52D5\u5316\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u30D9\u30EB\u30C8\u30B3\u30F3\u30D9\u30A2\u3001\u30D0\u30B1\u30C3\u30C8\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u3001\u30B9\u30AF\u30EA\u30E5\u30FC\u30B3\u30F3\u30D9\u30A2\u3001\u30ED\u30DC\u30C3\u30C8\u30A2\u30FC\u30E0\u3001\u30D1\u30EC\u30BF\u30A4\u30B6\u30FC\u3001PLC\u5236\u5FA1\u3001\u91D1\u5C5E\u691C\u51FA\u6A5F\u3001\u30C1\u30A7\u30C3\u30AF\u30A6\u30A7\u30A4\u30E4\u30FC\u3092\u542B\u307F\u307E\u3059\u3002',
      p2: '\u3059\u3079\u3066\u306E\u30B7\u30B9\u30C6\u30E0\u306F\u7523\u696D\u7528\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u88FD\u4F5C\u3001CE\u8A8D\u8A3C\u6E08\u307F\u300124/7\u904B\u8EE2\u5411\u3051\u306B\u8A2D\u8A08\u3002\u30AB\u30B9\u30BF\u30E0\u30EC\u30A4\u30A2\u30A6\u30C8\u8A2D\u8A08\u3001PLC\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3001\u30BF\u30FC\u30F3\u30AD\u30FC\u65BD\u5DE5\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002',
      subTitle: '\u5BFE\u5FDC\u6A5F\u7A2E',
      cons: ['\u30D9\u30EB\u30C8\u30B3\u30F3\u30D9\u30A2', '\u30D0\u30B1\u30C3\u30C8\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC', '\u30B9\u30AF\u30EA\u30E5\u30FC\u30B3\u30F3\u30D9\u30A2', '\u30ED\u30DC\u30C3\u30C8\u30A2\u30FC\u30E0', '\u30D1\u30EC\u30BF\u30A4\u30B6\u30FC', 'PLC\u5236\u5FA1', '\u91D1\u5C5E\u691C\u51FA\u6A5F', '\u30C1\u30A7\u30C3\u30AF\u30A6\u30A7\u30A4\u30E4\u30FC'],
      cta: '\u751F\u7523\u30E9\u30A4\u30F3\u306E\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044 \u2014 \u6700\u9069\u306A\u642C\u9001\u30FB\u81EA\u52D5\u5316\u30B7\u30B9\u30C6\u30E0\u3092\u8A2D\u8A08\u3057\u307E\u3059\u3002',
      machines: ['\u7D20\u6750\u642C\u9001', '\u30E9\u30A4\u30F3\u81EA\u52D5\u5316', '\u54C1\u8CEA\u691C\u67FB', '\u30A8\u30F3\u30C9\u30AA\u30D6\u30E9\u30A4\u30F3\u30D1\u30EC\u30BF\u30A4\u30B8\u30F3\u30B0']
    },
    ar: {
      title: '\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0646\u0642\u0644 \u0648\u0627\u0644\u0623\u062A\u0645\u062A\u0629',
      p1: '\u0646\u0642\u062F\u0645 \u062D\u0644\u0648\u0644 \u0646\u0642\u0644 \u0648\u0623\u062A\u0645\u062A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u0631\u0628\u0637 \u062E\u0637 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u0625\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u064A\u0629. \u062A\u0634\u0645\u0644 \u0623\u0646\u0638\u0645\u062A\u0646\u0627 \u0646\u0627\u0642\u0644\u0627\u062A \u0627\u0644\u062D\u0632\u0627\u0645 \u0648\u0631\u0627\u0641\u0639\u0627\u062A \u0627\u0644\u062F\u0644\u0627\u0621 \u0648\u0646\u0627\u0642\u0644\u0627\u062A \u0627\u0644\u0644\u0648\u0644\u0628 \u0648\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062A\u064A\u0629 \u0648\u0645\u0639\u062F\u0627\u062A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0648\u0623\u0646\u0638\u0645\u0629 PLC \u0648\u0643\u0627\u0634\u0641\u0627\u062A \u0627\u0644\u0645\u0639\u0627\u062F\u0646 \u0648\u0645\u0648\u0627\u0632\u064A\u0646 \u0627\u0644\u0641\u062D\u0635.',
      p2: '\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0645\u0635\u0646\u0648\u0639\u0629 \u0628\u0645\u0643\u0648\u0646\u0627\u062A \u0635\u0646\u0627\u0639\u064A\u0629\u060C \u062D\u0627\u0635\u0644\u0629 \u0639\u0644\u0649 \u0634\u0647\u0627\u062F\u0629 CE\u060C \u0648\u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629.',
      subTitle: '\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0622\u0644\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629',
      cons: ['\u0646\u0627\u0642\u0644\u0627\u062A \u0627\u0644\u062D\u0632\u0627\u0645', '\u0631\u0627\u0641\u0639\u0627\u062A \u0627\u0644\u062F\u0644\u0627\u0621', '\u0646\u0627\u0642\u0644\u0627\u062A \u0627\u0644\u0644\u0648\u0644\u0628', '\u0627\u0644\u0623\u0630\u0631\u0639 \u0627\u0644\u0631\u0648\u0628\u0648\u062A\u064A\u0629', '\u0645\u0639\u062F\u0627\u062A \u0627\u0644\u062A\u062D\u0645\u064A\u0644', '\u0623\u0646\u0638\u0645\u0629 PLC', '\u0643\u0627\u0634\u0641\u0627\u062A \u0627\u0644\u0645\u0639\u0627\u062F\u0646', '\u0645\u0648\u0627\u0632\u064A\u0646 \u0627\u0644\u0641\u062D\u0635'],
      cta: '\u0635\u0641 \u062A\u062E\u0637\u064A\u0637 \u062E\u0637 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u2014 \u0633\u0646\u0635\u0645\u0645 \u0646\u0638\u0627\u0645 \u0627\u0644\u0646\u0642\u0644 \u0648\u0627\u0644\u0623\u062A\u0645\u062A\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628.',
      machines: ['\u0646\u0642\u0644 \u0627\u0644\u0645\u0648\u0627\u062F', '\u0623\u062A\u0645\u062A\u0629 \u0627\u0644\u062E\u0637', '\u0641\u062D\u0635 \u0627\u0644\u062C\u0648\u062F\u0629', '\u062A\u062D\u0645\u064A\u0644 \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u062E\u0637']
    },
    th: {
      title: '\u0E23\u0E30\u0E1A\u0E1A\u0E25\u0E33\u0E40\u0E25\u0E35\u0E22\u0E07\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34',
      p1: '\u0E40\u0E23\u0E32\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19\u0E01\u0E32\u0E23\u0E25\u0E33\u0E40\u0E25\u0E35\u0E22\u0E07\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E34\u0E15\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E15\u0E49\u0E19\u0E08\u0E19\u0E08\u0E1A \u0E23\u0E30\u0E1A\u0E1A\u0E23\u0E27\u0E21\u0E16\u0E36\u0E07\u0E2A\u0E32\u0E22\u0E1E\u0E32\u0E19\u0E25\u0E33\u0E40\u0E25\u0E35\u0E22\u0E07 \u0E1A\u0E31\u0E04\u0E40\u0E01\u0E47\u0E15\u0E40\u0E2D\u0E25\u0E34\u0E40\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E2A\u0E01\u0E23\u0E39\u0E04\u0E2D\u0E19\u0E40\u0E27\u0E22\u0E40\u0E2D\u0E2D\u0E23\u0E4C \u0E41\u0E02\u0E19\u0E01\u0E25\u0E42\u0E23\u0E1A\u0E2D\u0E17 \u0E1E\u0E32\u0E40\u0E25\u0E17\u0E44\u0E17\u0E40\u0E0B\u0E2D\u0E23\u0E4C \u0E23\u0E30\u0E1A\u0E1A PLC \u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A\u0E42\u0E25\u0E2B\u0E30 \u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E0A\u0E31\u0E48\u0E07\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01',
      p2: '\u0E23\u0E30\u0E1A\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E1C\u0E25\u0E34\u0E15\u0E14\u0E49\u0E27\u0E22\u0E0A\u0E34\u0E49\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2D\u0E38\u0E15\u0E2A\u0E32\u0E2B\u0E01\u0E23\u0E23\u0E21 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07 CE \u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19 24/7',
      subTitle: '\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35',
      cons: ['\u0E2A\u0E32\u0E22\u0E1E\u0E32\u0E19\u0E25\u0E33\u0E40\u0E25\u0E35\u0E22\u0E07', '\u0E1A\u0E31\u0E04\u0E40\u0E01\u0E47\u0E15\u0E40\u0E2D\u0E25\u0E34\u0E40\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C', '\u0E2A\u0E01\u0E23\u0E39\u0E04\u0E2D\u0E19\u0E40\u0E27\u0E22\u0E40\u0E2D\u0E2D\u0E23\u0E4C', '\u0E41\u0E02\u0E19\u0E01\u0E25\u0E42\u0E23\u0E1A\u0E2D\u0E17', '\u0E1E\u0E32\u0E40\u0E25\u0E17\u0E44\u0E17\u0E40\u0E0B\u0E2D\u0E23\u0E4C', '\u0E23\u0E30\u0E1A\u0E1A PLC', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A\u0E42\u0E25\u0E2B\u0E30', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E0A\u0E31\u0E48\u0E07\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01'],
      cta: '\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E40\u0E25\u0E22\u0E4C\u0E40\u0E2D\u0E32\u0E17\u0E4C\u0E02\u0E2D\u0E07\u0E2A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u2014 \u0E40\u0E23\u0E32\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E23\u0E30\u0E1A\u0E1A\u0E25\u0E33\u0E40\u0E25\u0E35\u0E22\u0E07\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21',
      machines: ['\u0E25\u0E33\u0E40\u0E25\u0E35\u0E22\u0E07\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A', '\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E2A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E34\u0E15', '\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E', '\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E1E\u0E32\u0E40\u0E25\u0E17\u0E1B\u0E25\u0E32\u0E22\u0E2A\u0E32\u0E22']
    },
    vi: {
      title: 'H\u1EC7 Th\u1ED1ng B\u0103ng T\u1EA3i & T\u1EF1 \u0110\u1ED9ng H\u00F3a',
      p1: 'Ch\u00FAng t\u00F4i cung c\u1EA5p gi\u1EA3i ph\u00E1p b\u0103ng t\u1EA3i v\u00E0 t\u1EF1 \u0111\u1ED9ng h\u00F3a ho\u00E0n ch\u1EC9nh \u0111\u1EC3 k\u1EBFt n\u1ED1i d\u00E2y chuy\u1EC1n s\u1EA3n xu\u1EA5t t\u1EEB \u0111\u1EA7u \u0111\u1EBFn cu\u1ED1i. H\u1EC7 th\u1ED1ng bao g\u1ED3m b\u0103ng t\u1EA3i, g\u00E0u t\u1EA3i, v\u00EDt t\u1EA3i, c\u00E1nh tay robot, m\u00E1y x\u1EBFp pallet, \u0111i\u1EC1u khi\u1EC3n PLC, m\u00E1y d\u00F2 kim lo\u1EA1i v\u00E0 c\u00E2n ki\u1EC3m tra.',
      p2: 'T\u1EA5t c\u1EA3 h\u1EC7 th\u1ED1ng \u0111\u01B0\u1EE3c x\u00E2y d\u1EF1ng v\u1EDBi linh ki\u1EC7n c\u00F4ng nghi\u1EC7p, \u0111\u1EA1t ch\u1EE9ng nh\u1EADn CE, thi\u1EBFt k\u1EBF cho v\u1EADn h\u00E0nh 24/7. Ch\u00FAng t\u00F4i cung c\u1EA5p thi\u1EBFt k\u1EBF layout t\u00F9y ch\u1EC9nh, l\u1EADp tr\u00ECnh PLC v\u00E0 h\u1ED7 tr\u1EE3 l\u1EAFp \u0111\u1EB7t tr\u1ECDn g\u00F3i.',
      subTitle: 'C\u00E1c lo\u1EA1i m\u00E1y c\u00F3 s\u1EB5n',
      cons: ['B\u0103ng t\u1EA3i', 'G\u00E0u t\u1EA3i', 'V\u00EDt t\u1EA3i', 'C\u00E1nh tay robot', 'M\u00E1y x\u1EBFp pallet', '\u0110i\u1EC1u khi\u1EC3n PLC', 'M\u00E1y d\u00F2 kim lo\u1EA1i', 'C\u00E2n ki\u1EC3m tra'],
      cta: 'M\u00F4 t\u1EA3 b\u1ED1 tr\u00ED d\u00E2y chuy\u1EC1n s\u1EA3n xu\u1EA5t \u2014 ch\u00FAng t\u00F4i s\u1EBD thi\u1EBFt k\u1EBF h\u1EC7 th\u1ED1ng ph\u00F9 h\u1EE3p.',
      machines: ['V\u1EADn chuy\u1EC3n v\u1EADt li\u1EC7u', 'T\u1EF1 \u0111\u1ED9ng h\u00F3a d\u00E2y chuy\u1EC1n', 'Ki\u1EC3m tra ch\u1EA5t l\u01B0\u1EE3ng', 'X\u1EBFp pallet cu\u1ED1i d\u00E2y chuy\u1EC1n']
    },
    de: {
      title: 'F\u00F6rder- & Automatisierungssysteme',
      p1: 'Wir bieten komplette F\u00F6rder- und Automatisierungsl\u00F6sungen, um Ihre Produktionslinie von Anfang bis Ende zu verbinden. Unsere Systeme umfassen Bandförderern, Becherwerke, Schneckenf\u00F6rderer, Roboterarme, Palettierer, SPS-Steuerungen, Metalldetektoren und Kontrollwaagen.',
      p2: 'Alle Systeme sind mit industriellen Komponenten gebaut, CE-zertifiziert und f\u00FCr 24/7-Betrieb ausgelegt. Wir bieten kundenspezifisches Layout-Design, SPS-Programmierung und Turnkey-Installationssupport.',
      subTitle: 'Verf\u00FCgbare Maschinentypen',
      cons: ['Bandf\u00F6rderer', 'Becherwerke', 'Schneckenf\u00F6rderer', 'Roboterarme', 'Palettierer', 'SPS-Steuerungen', 'Metalldetektoren', 'Kontrollwaagen'],
      cta: 'Beschreiben Sie Ihr Produktionslinien-Layout \u2014 wir entwickeln das passende F\u00F6rder- und Automatisierungssystem.',
      machines: ['Materialf\u00F6rderung', 'Linienautomatisierung', 'Qualit\u00E4tskontrolle', 'End-of-Line-Palettierung']
    }
  }
  const t = content[lang] || content['en']

  const pageUrl = `${SITE_URL}/${lang}/machinery/conveying-automation`
  const itemListId = `${pageUrl}#itemlist`
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': pageUrl,
    url: pageUrl,
    inLanguage: LANG_META[lang].htmlLang,
    name: t.title,
    description: t.p1,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': itemListId },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': itemListId,
    inLanguage: LANG_META[lang].htmlLang,
    name: t.title,
    isPartOf: { '@id': pageUrl },
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Conveyor System', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/conveyor-system`, url: `${SITE_URL}/${lang}/machines/conveyor-system`, name: 'Conveyor System' } },
      { '@type': 'ListItem', position: 2, name: 'Conveyor Buying Guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/conveyor-system`, url: `${SITE_URL}/${lang}/resources/topic/conveyor-system`, name: 'Conveyor Buying Guides' } },
    ],
  }

  return (
    <>
      <JsonLd data={[collectionSchema, itemListSchema]} />
      <PageHero
        kicker={({ en: 'CONVEYING & AUTOMATION', cn: '输送与自动化', zh: '輸送與自動化', fr: 'CONVOYAGE & AUTOMATISATION', es: 'TRANSPORTE Y AUTOMATIZACIÓN', pt: 'TRANSPORTE E AUTOMAÇÃO', ko: '컨베이어 및 자동화', ja: '搬送・自動化', ar: 'النقل والأتمتة', th: 'ลำเลียงและอัตโนมัติ', vi: 'BĂNG TẢI & TỰ ĐỘNG HÓA', de: 'FÖRDERUNG & AUTOMATISIERUNG' } as Record<string,string>)[lang] || 'CONVEYING & AUTOMATION'}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Conveying automation system in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].machinery, href: `/${lang}/machinery` },
              { label: t.title, href: `/${lang}/machinery/conveying-automation` },
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
                {t.machines.map((m: string, i: number) => (
                  <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{m}</span>
                ))}
              </div>

            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-xl font-bold text-gray-950">{t.subTitle}</h2>
                <ul className="mt-6 space-y-3">
                  {t.cons.map((c: string, i: number) => (
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
