import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import SourcingRouteGuide from '@/components/machinery/SourcingRouteGuide'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS, LANG_META } from '@/lib/seo'

const titles: Record<string, string> = {
  en: 'Automation & Integration | Conveying, Controls & Line Readiness',
  cn: '自动化与整合 | 输送、控制与整线准备', zh: '自動化與整合 | 輸送、控制與整線準備',
  fr: 'Syst\u00E8mes de convoyage et automatisation | Convoyeurs, palettiseurs, PLC',
  es: 'Sistemas de transporte y automatizaci\u00F3n | Transportadores, paletizadores, PLC',
  pt: 'Sistemas de Transporte e Automa\u00E7\u00E3o | Esteiras, Paletizadores, CLP',
  ko: '\uCEE8\uBCA0\uC774\uC5B4 \uBC0F \uC790\uB3D9\uD654 \uC2DC\uC2A4\uD15C | \uCEE8\uBCA0\uC774\uC5B4, \uD314\uB808\uD0C0\uC774\uC800, PLC',
  ja: '\u642C\u9001\u30FB\u81EA\u52D5\u5316\u30B7\u30B9\u30C6\u30E0 | \u30B3\u30F3\u30D9\u30A2\u3001\u30D1\u30EC\u30BF\u30A4\u30B6\u30FC\u3001PLC',
  ar: '\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0646\u0642\u0644 \u0648\u0627\u0644\u0623\u062A\u0645\u062A\u0629 | \u0646\u0627\u0642\u0644\u0627\u062A\u060C \u0645\u0639\u062F\u0627\u062A \u062A\u062D\u0645\u064A\u0644\u060C PLC',
  th: '\u0E23\u0E30\u0E1A\u0E1A\u0E25\u0E33\u0E40\u0E25\u0E35\u0E22\u0E07\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 | \u0E2A\u0E32\u0E22\u0E1E\u0E32\u0E19, \u0E1E\u0E32\u0E40\u0E25\u0E17\u0E44\u0E17\u0E40\u0E0B\u0E2D\u0E23\u0E4C, PLC',
  vi: 'H\u1EC7 Th\u1ED1ng B\u0103ng T\u1EA3i & T\u1EF1 \u0110\u1ED9ng H\u00F3a | B\u0103ng t\u1EA3i, Palletizer, PLC',
  de: 'F\u00F6rder- & Automatisierungssysteme | F\u00F6rderb\u00E4nder, Palettierer, SPS',
}

const descriptions: Record<string, string> = {
  en: 'Automation and integration sourcing support: map material flow, define IO ownership, lock electrical standards, and align safety/FAT scope before commissioning.',
  cn: '自动化与整合采购支持：梳理物流与节拍、明确 IO 对接责任、锁定电气标准，并在调试前对齐安全与 FAT 范围。',
  zh: '自動化與整合採購支援：梳理物流與節拍、明確 IO 對接責任、鎖定電氣標準，並在調試前對齊安全與 FAT 範圍。',
  fr: 'Systèmes de convoyage et automatisation : convoyeurs à bande, élévateurs à godets, convoyeurs à vis, alimentateurs vibrants, bras robotiques, palettiseurs et commandes PLC.',
  es: 'Sistemas de transporte y automatización: cintas transportadoras, elevadores de cangilones, tornillos, alimentadores vibratorios, brazos robóticos, paletizadores y controles PLC.',
  pt: 'Sistemas de transporte e automação: transportadores de correia, elevadores de caçamba, sem-fim, alimentadores vibratórios, braços robóticos, paletizadores e controles PLC.',
  ko: '컨베이어 및 자동화 시스템: 벨트, 버킷 엘리베이터, 스크류, 진동 피더, 로봇 암, 팔레타이저, PLC 제어 라인 시스템.',
  ja: 'コンベア・自動化システム：ベルト、バケットエレベーター、スクリュー、振動フィーダー、ロボットアーム、パレタイザー、PLC制御システム。',
  ar: 'أنظمة النقل والأتمتة: ناقلات سيرية، رافعات دلو، لولبية، مغذيات اهتزازية، أذرع روبوتية، مكدسات وأنظمة تحكم PLC.',
  th: 'ระบบลำเลียงและอัตโนมัติ: สายพาน ถังตัก สกรู เครื่องป้อนสั่น แขนหุ่นยนต์ พาเลทไทเซอร์ และระบบควบคุม PLC',
  vi: 'Hệ thống băng tải và tự động hóa: băng đai, gàu nâng, trục vít, cấp liệu rung, cánh tay robot, palletizer và điều khiển PLC.',
  de: 'Förder- und Automatisierungssysteme: Gurtförderer, Becherwerke, Schnecken, Schwingförderer, Roboterarme, Palettierer und SPS-Steuerung.',
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
    keywords: ['automation integration sourcing', 'line integration planning', 'PLC HMI standard', 'IO mapping ownership', 'safety interlocks', 'FAT checklist', 'documentation handoff'],
  })
}

export default async function ConveyingAutomationPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const metaTitle = titles[lang] || titles.en
  const metaDesc = descriptions[lang] || descriptions.en
  const btnLabels: Record<string, string> = {
    en: 'Get Assessment',
    cn: '获取评估建议',
    zh: '取得評估建議',
    fr: 'Demander évaluation',
    es: 'Solicitar evaluación',
    pt: 'Solicitar avaliação',
    ko: '평가 요청',
    ja: '評価依頼',
    ar: 'طلب تقييم',
    th: 'ขอการประเมิน',
    vi: 'Yêu cầu đánh giá',
    de: 'Bewertung anfordern',
  }
  const heroPhoto = PHOTO.machinery.subpageHeroes.conveyingAutomation

  const content: Record<string, any> = {
    en: {
      title: 'Conveying & Automation Systems',
      p1: 'We provide technical sourcing for complete conveying and automation solutions to connect your line system. Our scope includes belt conveyors, bucket elevators, screw conveyors, robotic arms, and PLC control systems designed to integrate with packaging and processing equipment.',
      p2: 'Every project includes technical vetting of industrial-grade components, CE compliance, and engineering evaluation of layout and workflow efficiency. We offer custom layout design and PLC programming support.',
      subTitle: 'Machine Types Available',
      cons: ['Belt Conveyors', 'Bucket Elevators', 'Screw Conveyors', 'Robotic Arms', 'Palletizers', 'PLC Controls', 'Metal Detectors', 'Check Weighers'],
      cta: 'Describe your line layout — we\'ll design the right conveying and automation system.',
      machines: ['Material Conveying', 'Line Automation', 'Quality Inspection', 'End-of-Line Palletizing']
    },
    cn: {
      title: '输送与自动化系统',
      p1: '我们为连接线体的完整输送和自动化方案提供技术采购。范围包括皮带输送机、斗式提升机、螺旋输送机、机械臂和 PLC 控制系统，旨在与包装、灌装和加工设备无缝集成。',
      p2: '每个项目均包含工业级组件的技术审核、CE 合规性检查以及对布局和工作流效率的工程评估。我们提供定制布局设计与 PLC 编程支持。',
      subTitle: '可用机型',
      cons: ['皮带输送机', '斗式提升机', '螺旋输送机', '机械臂', '码垛机', 'PLC控制系统', '金属检测器', '重量检测器'],
      cta: '描述您的线体布局——我们将设计合适的输送和自动化系统。',
      machines: ['物料输送', '线体自动化', '质量检测', '末端码垛']
    },
    zh: {
      title: '輸送與自動化系統',
      p1: '我們為連接線體的完整輸送和自動化方案提供技術採購。範圍包括皮帶輸送機、斗式提升機、螺旋輸送機、機械臂和 PLC 控制系統，旨在與包裝、灌裝和加工設備無縫整合。',
      p2: '每個項目均包含工業級元件的技術審核、CE 合規性檢查以及對佈局和工作流效率的工程評估。我們提供客製佈局設計與 PLC 程式設計支援。',
      subTitle: '可用機型',
      cons: ['皮帶輸送機', '斗式提升機', '螺旋輸送機', '機械臂', '碼垛機', 'PLC控制系統', '金屬檢測器', '重量檢測器'],
      cta: '描述您的線體佈局——我們將設計合適的輸送和自動化系統。',
      machines: ['物料輸送', '線體自動化', '品質檢測', '末端碼垛']
    },
    fr: {
      title: 'Syst\u00E8mes de convoyage et automatisation',
      p1: 'Nous fournissons des solutions compl\u00E8tes de convoyage et d\'automatisation pour connecter votre ligne du début à la fin. Nos syst\u00E8mes comprennent des convoyeurs \u00E0 bande, \u00E9l\u00E9vateurs \u00E0 godets, convoyeurs \u00E0 vis, bras robotiques, palettiseurs, commandes PLC, d\u00E9tecteurs de m\u00E9taux et trieuses pond\u00E9rales.',
      p2: 'Tous les syst\u00E8mes sont construits avec des composants de qualit\u00E9 industrielle et con\u00E7us pour un fonctionnement 24h/24. Documentation CE \u00E0 l\u2019export lorsque c\u2019est applicable. Nous proposons la conception de layouts personnalis\u00E9s, la programmation PLC et un support d\'installation cl\u00E9 en main.',
      subTitle: 'Types de machines disponibles',
      cons: ['Convoyeurs \u00E0 bande', '\u00C9l\u00E9vateurs \u00E0 godets', 'Convoyeurs \u00E0 vis', 'Bras robotiques', 'Palettiseurs', 'Commandes PLC', 'D\u00E9tecteurs de m\u00E9taux', 'Trieuses pond\u00E9rales'],
      cta: 'D\u00E9crivez la configuration de votre ligne \u2014 nous concevrons le syst\u00E8me de convoyage et d\'automatisation adapt\u00E9.',
      machines: ['Convoyage de mati\u00E8res', 'Automatisation de ligne', 'Inspection qualit\u00E9', 'Palettisation fin de ligne']
    },
    es: {
      title: 'Sistemas de transporte y automatizaci\u00F3n',
      p1: 'Proporcionamos soluciones completas de transporte y automatizaci\u00F3n para conectar su l\u00EDnea de producci\u00F3n de principio a fin. Nuestros sistemas incluyen transportadores de banda, elevadores de cangilones, transportadores de tornillo, brazos rob\u00F3ticos, paletizadores, controles PLC, detectores de metales y controladoras de peso.',
      p2: 'Todos los sistemas est\u00E1n construidos con componentes de grado industrial y dise\u00F1ados para operaci\u00F3n 24/7. Documentaci\u00F3n CE para exportaci\u00F3n cuando aplique. Ofrecemos dise\u00F1o de layout personalizado, programaci\u00F3n PLC y soporte de instalaci\u00F3n llave en mano.',
      subTitle: 'Tipos de m\u00E1quinas disponibles',
      cons: ['Transportadores de banda', 'Elevadores de cangilones', 'Transportadores de tornillo', 'Brazos rob\u00F3ticos', 'Paletizadores', 'Controles PLC', 'Detectores de metales', 'Controladoras de peso'],
      cta: 'Describa la configuraci\u00F3n de su l\u00EDnea de producci\u00F3n \u2014 dise\u00F1aremos el sistema de transporte y automatizaci\u00F3n adecuado.',
      machines: ['Transporte de materiales', 'Automatizaci\u00F3n de l\u00EDnea', 'Inspecci\u00F3n de calidad', 'Paletizado de final de l\u00EDnea']
    },
    pt: {
      title: 'Sistemas de Transporte e Automa\u00E7\u00E3o',
      p1: 'Fornecemos solu\u00E7\u00F5es completas de transporte e automa\u00E7\u00E3o para conectar sua linha de produ\u00E7\u00E3o do in\u00EDcio ao fim. Nossos sistemas incluem esteiras transportadoras, elevadores de canecas, transportadores helicoidais, bra\u00E7os rob\u00F3ticos, paletizadores, controles CLP, detectores de metais e balanças de verifica\u00E7\u00E3o.',
      p2: 'Todos os sistemas s\u00E3o constru\u00EDdos com componentes de grau industrial e projetados para opera\u00E7\u00E3o 24/7. Documenta\u00E7\u00E3o CE para exporta\u00E7\u00E3o quando aplic\u00E1vel. Oferecemos projeto de layout personalizado, programa\u00E7\u00E3o CLP e suporte de instala\u00E7\u00E3o turnkey.',
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
  const routeGuide = {
    notFit: ({
      en: ['Standalone equipment projects with no material flow bottleneck defined', 'Lines without layout, buffer, or operator handoff data', 'Buyers comparing only conveyor price without control and integration scope'],
      zh: ['沒有明確物流瓶頸的單機專案', '尚未提供佈局、緩衝區與人工作業交接資訊的產線', '只比輸送設備單價、不比較控制與整合範圍的採購'],
      cn: ['没有明确物流瓶颈的单机项目', '尚未提供布局、缓冲区与人工作业交接信息的产线', '只比输送设备单价、不比较控制与整合范围的采购'],
    } as Record<string, string[]>)[lang] || ['Standalone equipment projects with no material flow bottleneck defined', 'Lines without layout, buffer, or operator handoff data', 'Buyers comparing only conveyor price without control and integration scope'],
    compare: ({
      en: ['Actual line logic: buffer points, reject handling, inspection, and operator touchpoints', 'Motor, gearbox, sensor, PLC/HMI brand and electrical standard', 'Who owns integration, IO mapping, on-site tuning, and documentation handoff'],
      zh: ['實際線體邏輯：緩衝點、剔除機制、檢測點與人工接觸點', '馬達、減速機、感測器、PLC/HMI 品牌與電氣標準', '誰負責整合、IO 對接、現場調機與文件交付'],
      cn: ['实际线体逻辑：缓冲点、剔除机制、检测点与人工接触点', '马达、减速机、传感器、PLC/HMI 品牌与电气标准', '谁负责整合、IO 对接、现场调机与文件交付'],
    } as Record<string, string[]>)[lang] || ['Actual line logic: buffer points, reject handling, inspection, and operator touchpoints', 'Motor, gearbox, sensor, PLC/HMI brand and electrical standard', 'Who owns integration, IO mapping, on-site tuning, and documentation handoff'],
    acceptance: ({
      en: ['Confirm line speed, accumulation behavior, alarms, and safety interlocks at FAT', 'Test transition points and reject logic with actual package flow', 'Approve drawings, electrical list, spare parts, and parameter backup before shipment'],
      zh: ['在 FAT 確認線速、緩衝行為、警報與安全互鎖', '用實際包裝物流測試轉接點與剔除邏輯', '出貨前核准圖面、電氣清單、備件與參數備份'],
      cn: ['在 FAT 确认线速、缓冲行为、报警与安全互锁', '用实际包装物流测试转接点与剔除逻辑', '出货前核准图面、电气清单、备件与参数备份'],
    } as Record<string, string[]>)[lang] || ['Confirm line speed, accumulation behavior, alarms, and safety interlocks at FAT', 'Test transition points and reject logic with actual package flow', 'Approve drawings, electrical list, spare parts, and parameter backup before shipment'],
  }

  const pageUrl = `${SITE_URL}/${lang}/machinery/conveying-automation`
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
      { '@type': 'ListItem', position: 1, name: 'Conveyor System', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/conveyor-system`, url: `${SITE_URL}/${lang}/machines/conveyor-system`, name: 'Conveyor System' } },
      { '@type': 'ListItem', position: 2, name: 'Conveying & automation configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/conveying-automation`, url: `${SITE_URL}/${lang}/resources/route/conveying-automation`, name: 'Conveying & automation configuration guides' } },
    ],
  }

  return (
    <>
      <JsonLd data={[collectionSchema, itemListSchema]} />
      <PageHero
        kicker={({ en: 'CONVEYING & AUTOMATION', cn: '输送与自动化', zh: '輸送與自動化', fr: 'CONVOYAGE & AUTOMATISATION', es: 'TRANSPORTE Y AUTOMATIZACIÓN', pt: 'TRANSPORTE E AUTOMAÇÃO', ko: '컨베이어 및 자동화', ja: '搬送・自動化', ar: 'النقل والأتمتة', th: 'ลำเลียงและอัตโนมัติ', vi: 'BĂNG TẢI & TỰ ĐỘNG HÓA', de: 'FÖRDERUNG & AUTOMATISIERUNG' } as Record<string,string>)[lang] || 'CONVEYING & AUTOMATION'}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Conveying and automation sourcing support', priority: true, aspectClassName: 'aspect-[16/10]' }}
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

      <SourcingRouteGuide
        lang={lang}
        fitItems={t.machines}
        notFitItems={routeGuide.notFit}
        compareItems={routeGuide.compare}
        acceptanceItems={routeGuide.acceptance}
      />
    </>
  )
}
