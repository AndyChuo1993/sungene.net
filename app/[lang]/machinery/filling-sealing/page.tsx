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
  en: 'Filling & Sealing Projects | Dosing, Sealing & Acceptance Planning',
  cn: '灌装与封口项目 | 计量、封口与验收规划', zh: '灌裝與封口專案 | 計量、封口與驗收規劃',
  fr: 'Machines de remplissage et scellage | Liquide, p\u00E2te et poudre',
  es: 'Maquinaria de llenado y sellado | L\u00EDquidos, pastas y polvos',
  pt: 'M\u00E1quinas de Envase e Selagem | L\u00EDquidos, Pastas e P\u00F3s',
  ko: '\uCDA9\uC804 \uBC0F \uBC00\uBD09 \uAE30\uACC4 | \uC561\uCCB4, \uD398\uC774\uC2A4\uD2B8, \uBD84\uB9D0',
  ja: '\u5145\u586B\u30FB\u5C01\u53E3\u6A5F\u68B0 | \u6DB2\u4F53\u30FB\u30DA\u30FC\u30B9\u30C8\u30FB\u7C89\u672B',
  ar: '\u0622\u0644\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062E\u062A\u0645 | \u0633\u0648\u0627\u0626\u0644 \u0648\u0645\u0639\u0627\u062C\u064A\u0646 \u0648\u0645\u0633\u0627\u062D\u064A\u0642',
  th: '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E41\u0E25\u0E30\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01 | \u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27, \u0E40\u0E1E\u0E2A\u0E15\u0E4C, \u0E1C\u0E07',
  vi: 'M\u00E1y Chi\u1EBFt R\u00F3t & Seal | Ch\u1EA5t L\u1ECFng, Paste, B\u1ED9t',
  de: 'Abf\u00FCll- & Versiegelungsmaschinen | Fl\u00FCssigkeit, Paste, Pulver',
}

const descriptions: Record<string, string> = {
  en: 'Filling and sealing sourcing support: select the right dosing method, define acceptance criteria, plan cleaning/changeover, and align FAT scope before committing capital.',
  cn: '灌装与封口采购支持：选择合适计量方式、定义验收标准、规划清洗/换线，并在下单前对齐 FAT 范围。',
  zh: '灌裝與封口採購支援：選擇合適計量方式、定義驗收標準、規劃清洗/換線，並在下單前對齊 FAT 範圍。',
  fr: 'Machines de remplissage et scellage SunGene : doseuses pour liquides, pâtes et poudres, scelleuses de gobelets, capseuleuses, scelleuses par induction et machines pour tubes.',
  es: 'Maquinaria de llenado y sellado SunGene: dosificadoras de líquidos, pastas, polvos, selladoras de vasos, tapadores de botellas, selladoras por inducción y llenadoras de tubos.',
  pt: 'Maquinário de envase e selagem SunGene: dosadoras de líquidos, pastas e pós, seladoras de copos, tampadores de garrafas, seladoras por indução e enchedoras de tubos.',
  ko: 'SunGene 충전 및 밀봉 기계: 액체, 페이스트, 분말 도징기, 컵 실러, 병 캐퍼, 유도 실러, 튜브 충전기. 식품, 음료, 화장품, 제약용.',
  ja: 'SunGene充填・封口機械：液体・ペースト・粉末ドージング機、カップシーラー、瓶キャッパー、インダクションシーラー、チューブ充填機。食品・飲料・化粧品・製薬向け。',
  ar: 'آلات التعبئة والختم SunGene: دوازات للسوائل والمعاجين والمساحيق، سدادات أكواب، مقومات زجاجات، سدادات حثية، آلات تعبئة أنابيب. للأغذية والمشروبات ومستحضرات التجميل.',
  th: 'เครื่องบรรจุและปิดผนึก SunGene: เครื่องเติมของเหลว เพสต์ และผง เครื่องซีลถ้วย เครื่องปิดขวด เครื่องซีลอินดักชัน เครื่องบรรจุหลอด',
  vi: 'Máy chiết rót và seal SunGene: máy định lượng lỏng, paste, bột; máy seal cốc; máy vặn nắp chai; máy seal cảm ứng; máy bơm tube. Thực phẩm, đồ uống, mỹ phẩm, dược.',
  de: 'SunGene Abfüll- und Versiegelungsmaschinen: Dosierer für Flüssigkeiten, Pasten und Pulver, Becherverschließer, Flaschenverschließer, Induktionsversiegler, Tubenfüller.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/machinery/filling-sealing',
    type: 'website',
    keywords: ['filling project assessment', 'dosing method selection', 'sealing acceptance criteria', 'FAT checklist', 'washdown and cleaning planning', 'supplier vetting', 'export documentation'],
  })
}

export default async function FillingSealingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const metaTitle = titles[lang] || titles.en
  const metaDesc = descriptions[lang] || descriptions.en
  const btnLabels: Record<string, string> = {
    en: 'Get Assessment',
    cn: '获取评估',
    zh: '取得評估',
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
  const heroPhoto = PHOTO.machinery.subpageHeroes.fillingSealing

  const content: Record<string, any> = {
    en: {
      title: 'Filling & Sealing Systems',
      p1: 'We provide technical sourcing for filling and sealing machines tailored to liquid, paste, powder, and granule products. Our scope covers volumetric fillers, piston fillers, gravity fillers, cup sealers, bottle cappers, and tube filling systems.',
      p2: 'Every system includes technical vetting of SUS304/316L stainless steel options, CE-oriented documentation support where applicable, and engineering evaluation of filling accuracy and automation levels. Verification videos are provided before shipment.',
      subTitle: 'Machine Types Available',
      cons: ['Liquid Fillers', 'Paste Fillers', 'Powder Dosing Machines', 'Cup Sealers', 'Bottle Cappers', 'Induction Sealers', 'Tube Filling Machines'],
      cta: 'Tell us your product and container type — we\'ll provide an assessment and propose the right filling & sealing configuration.',
      machines: ['Liquid Filling', 'Paste Filling', 'Powder Dosing', 'Cup & Tray Sealing']
    },
    cn: {
      title: '灌装与封口系统',
      p1: '我们为液体、膏体、粉末和颗粒产品提供专业的灌装与封口机技术采购。采购范围涵盖容积式灌装机、活塞灌装机、重力灌装机、杯封机、瓶盖机、铝箔封口机和软管灌装系统。',
      p2: '每个系统均包含 SUS304/316L 不锈钢材质的技术审核、CE 合规性检查以及对灌装精度和自动化水平的工程评估。发货前提供验证视频。',
      subTitle: '可用机型',
      cons: ['液体灌装机', '膏体灌装机', '粉末计量机', '杯封机', '旋盖机', '铝箔封口机', '软管灌装机'],
      cta: '告诉我们您的产品和容器类型——我们将提供评估并给出合适的灌装封口配置建议。',
      machines: ['液体灌装', '膏体灌装', '粉末计量', '杯盒封口']
    },
    zh: {
      title: '灌裝與封口系統',
      p1: '我們為液體、膏體、粉末和顆粒產品提供專業的灌裝與封口機技術採購。採購範圍涵蓋容積式灌裝機、活塞灌裝機、重力灌裝機、杯封機、瓶蓋機、鋁箔封口機和軟管灌裝系統。',
      p2: '每個系統均包含 SUS304/316L 不鏽鋼材質的技術審核、CE 合規性檢查以及對灌裝精度和自動化水平的工程評估。出貨前提供驗證影片。',
      subTitle: '可用機型',
      cons: ['液體灌裝機', '膏體灌裝機', '粉末計量機', '杯封機', '旋蓋機', '鋁箔封口機', '軟管灌裝機'],
      cta: '告訴我們您的產品和容器類型——我們將提供評估並給出合適的灌裝封口配置建議。',
      machines: ['液體灌裝', '膏體灌裝', '粉末計量', '杯盒封口']
    },
    fr: {
      title: 'Syst\u00E8mes de remplissage et scellage',
      p1: 'Nous accompagnons le sourcing de machines de remplissage et de scellage pour produits liquides, p\u00E2teux, en poudre et granul\u00E9s. Notre p\u00E9rim\u00E8tre couvre remplisseuses volum\u00E9triques, \u00E0 piston, par gravit\u00E9, scelleuses de gobelets, capsuleuses, scellage par induction et remplisseuses de tubes.',
      p2: 'Chaque projet inclut la v\u00E9rification SUS304/316L, la conformit\u00E9 CE, et l\'\u00E9valuation de la pr\u00E9cision et de l\'automatisation. Des vid\u00E9os de v\u00E9rification sont fournies avant exp\u00E9dition.',
      subTitle: 'Types de machines disponibles',
      cons: ['Remplisseuses de liquides', 'Remplisseuses de p\u00E2tes', 'Doseuses de poudre', 'Scelleuses de gobelets', 'Capsuleuses', 'Scelleuses \u00E0 induction', 'Remplisseuses de tubes'],
      cta: 'D\u00E9crivez-nous votre produit et type de contenant \u2014 nous fournirons une \u00E9valuation et proposerons la configuration adapt\u00E9e.',
      machines: ['Remplissage liquide', 'Remplissage p\u00E2te', 'Dosage poudre', 'Scellage gobelet']
    },
    es: {
      title: 'Sistemas de llenado y sellado',
      p1: 'Acompa\u00F1amos el sourcing de m\u00E1quinas de llenado y sellado para productos l\u00EDquidos, pastosos, en polvo y granulados. Cubrimos llenadoras volum\u00E9tricas, de pist\u00F3n, por gravedad, selladoras de vasos, tapadoras de botellas, sellado por inducci\u00F3n y llenadoras de tubos.',
      p2: 'Cada proyecto incluye verificaci\u00F3n SUS304/316L, cumplimiento CE y evaluaci\u00F3n de precisi\u00F3n y automatizaci\u00F3n. Proporcionamos videos de verificaci\u00F3n antes del env\u00EDo.',
      subTitle: 'Tipos de m\u00E1quinas disponibles',
      cons: ['Llenadoras de l\u00EDquidos', 'Llenadoras de pastas', 'Dosificadoras de polvo', 'Selladoras de vasos', 'Tapadoras de botellas', 'Selladoras por inducci\u00F3n', 'Llenadoras de tubos'],
      cta: 'Cu\u00E9ntenos sobre su producto y tipo de envase \u2014 le daremos una evaluaci\u00F3n y propondremos la configuraci\u00F3n adecuada.',
      machines: ['Llenado de l\u00EDquidos', 'Llenado de pastas', 'Dosificaci\u00F3n de polvo', 'Sellado de vasos']
    },
    pt: {
      title: 'Sistemas de Envase e Selagem',
      p1: 'Apoiamos o sourcing de m\u00E1quinas de envase e selagem para produtos l\u00EDquidos, pastosos, em p\u00F3 e granulados. Cobrimos envasadoras volum\u00E9tricas, de pist\u00E3o, por gravidade, seladoras de copos, tampadoras, seladoras por indu\u00E7\u00E3o e envasadoras de tubos.',
      p2: 'Cada projeto inclui verifica\u00E7\u00E3o SUS304/316L, conformidade CE e avalia\u00E7\u00E3o de precis\u00E3o e automa\u00E7\u00E3o. Fornecemos v\u00EDdeos de verifica\u00E7\u00E3o antes do envio.',
      subTitle: 'Tipos de m\u00E1quinas dispon\u00EDveis',
      cons: ['Envasadoras de l\u00EDquidos', 'Envasadoras de pastas', 'Dosadoras de p\u00F3', 'Seladoras de copos', 'Tampadoras de garrafas', 'Seladoras por indu\u00E7\u00E3o', 'Envasadoras de tubos'],
      cta: 'Conte-nos sobre seu produto e tipo de recipiente \u2014 forneceremos uma avalia\u00E7\u00E3o e proporemos a configura\u00E7\u00E3o ideal.',
      machines: ['Envase de l\u00EDquidos', 'Envase de pastas', 'Dosagem de p\u00F3', 'Selagem de copos']
    },
    ko: {
      title: '\uCDA9\uC804 \uBC0F \uBC00\uBD09 \uC2DC\uC2A4\uD15C',
      p1: '\uC561\uCCB4, \uD398\uC774\uC2A4\uD2B8, \uBD84\uB9D0, \uACFC\uB9BD \uC81C\uD488\uC744 \uC704\uD55C \uCDA9\uC804 \uBC0F \uBC00\uBD09 \uC124\uBE44 \uC18C\uC2F1\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC6A9\uB7C9\uC2DD, \uD53C\uC2A4\uD1A4, \uC911\uB825\uC2DD \uCDA9\uC804\uAE30, \uCEF5 \uC2E4\uB7EC, \uBCD1 \uCE90\uD37C, \uC720\uB3C4\uAC00\uC5F4 \uC2E4\uB7EC, \uD29C\uBE0C \uCDA9\uC804\uAE30\uB97C \uD3EC\uD568\uD569\uB2C8\uB2E4.',
      p2: '\uAC01 \uD504\uB85C\uC81D\uD2B8\uC5D0\uB294 SUS304/316L \uC7AC\uC9C8 \uAC80\uC99D, CE \uBB38\uC11C \uD655\uC778, \uCDA9\uC804 \uC815\uBC00\uB3C4/\uC790\uB3D9\uD654 \uC218\uC900 \uD3C9\uAC00\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uCD9C\uD558 \uC804 \uAC80\uC99D \uC601\uC0C1\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.',
      subTitle: '\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAE30\uACC4 \uC720\uD615',
      cons: ['\uC561\uCCB4 \uCDA9\uC804\uAE30', '\uD398\uC774\uC2A4\uD2B8 \uCDA9\uC804\uAE30', '\uBD84\uB9D0 \uACC4\uB7C9\uAE30', '\uCEF5 \uC2E4\uB7EC', '\uBCD1 \uCE90\uD37C', '\uC720\uB3C4\uAC00\uC5F4 \uC2E4\uB7EC', '\uD29C\uBE0C \uCDA9\uC804\uAE30'],
      cta: '\uC81C\uD488\uACFC \uC6A9\uAE30 \uC720\uD615\uC744 \uC54C\uB824\uC8FC\uC138\uC694 \u2014 \uC801\uD569\uD55C \uCDA9\uC804 \uBC0F \uBC00\uBD09 \uC194\uB8E8\uC158\uC744 \uCD94\uCC9C\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.',
      machines: ['\uC561\uCCB4 \uCDA9\uC804', '\uD398\uC774\uC2A4\uD2B8 \uCDA9\uC804', '\uBD84\uB9D0 \uACC4\uB7C9', '\uCEF5/\uD2B8\uB808\uC774 \uC2E4\uB9C1']
    },
    ja: {
      title: '\u5145\u586B\u30FB\u5C01\u53E3\u30B7\u30B9\u30C6\u30E0',
      p1: '\u6DB2\u4F53\u3001\u30DA\u30FC\u30B9\u30C8\u3001\u7C89\u672B\u3001\u9854\u7C92\u88FD\u54C1\u5411\u3051\u306E\u5145\u586B\u30FB\u5C01\u53E3\u8A2D\u5099\u306E\u30BD\u30FC\u30B7\u30F3\u30B0\u3092\u652F\u63F4\u3057\u307E\u3059\u3002\u5BB9\u7A4D\u5F0F\u3001\u30D4\u30B9\u30C8\u30F3\u5F0F\u3001\u91CD\u529B\u5F0F\u5145\u586B\u6A5F\u3001\u30AB\u30C3\u30D7\u30B7\u30FC\u30E9\u30FC\u3001\u30DC\u30C8\u30EB\u30AD\u30E3\u30C3\u30D1\u30FC\u3001\u8A98\u5C0E\u52A0\u71B1\u30B7\u30FC\u30E9\u30FC\u3001\u30C1\u30E5\u30FC\u30D6\u5145\u586B\u6A5F\u306A\u3069\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002',
      p2: '\u5404\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306BSUS304/316L\u306E\u6750\u8CEA\u78BA\u8A8D\u3001CE\u66F8\u985E\u306E\u78BA\u8A8D\u3001\u5145\u586B\u7CBE\u5EA6\u3068\u81EA\u52D5\u5316\u30EC\u30D9\u30EB\u306E\u8A55\u4FA1\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u51FA\u8377\u524D\u306B\u691C\u8A3C\u52D5\u753B\u3092\u5171\u6709\u3057\u307E\u3059\u3002',
      subTitle: '\u5BFE\u5FDC\u6A5F\u7A2E',
      cons: ['\u6DB2\u4F53\u5145\u586B\u6A5F', '\u30DA\u30FC\u30B9\u30C8\u5145\u586B\u6A5F', '\u7C89\u672B\u8A08\u91CF\u6A5F', '\u30AB\u30C3\u30D7\u30B7\u30FC\u30E9\u30FC', '\u30DC\u30C8\u30EB\u30AD\u30E3\u30C3\u30D1\u30FC', '\u8A98\u5C0E\u52A0\u71B1\u30B7\u30FC\u30E9\u30FC', '\u30C1\u30E5\u30FC\u30D6\u5145\u586B\u6A5F'],
      cta: '\u88FD\u54C1\u3068\u5BB9\u5668\u30BF\u30A4\u30D7\u3092\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044 \u2014 \u6700\u9069\u306A\u5145\u586B\u30FB\u5C01\u53E3\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002',
      machines: ['\u6DB2\u4F53\u5145\u586B', '\u30DA\u30FC\u30B9\u30C8\u5145\u586B', '\u7C89\u672B\u8A08\u91CF', '\u30AB\u30C3\u30D7/\u30C8\u30EC\u30A4\u30B7\u30FC\u30EA\u30F3\u30B0']
    },
    ar: {
      title: '\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062E\u062A\u0645',
      p1: '\u0646\u062F\u0639\u0645 \u062A\u0648\u0631\u064A\u062F \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062E\u062A\u0645 \u0644\u0644\u0633\u0648\u0627\u0626\u0644 \u0648\u0627\u0644\u0645\u0639\u0627\u062C\u064A\u0646 \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u064A\u0642 \u0648\u0627\u0644\u062D\u0628\u064A\u0628\u0627\u062A. \u064A\u0634\u0645\u0644 \u0646\u0637\u0627\u0642\u0646\u0627 \u0622\u0644\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u062C\u0645\u064A\u0629 \u0648\u0627\u0644\u0645\u0643\u0628\u0633\u064A\u0629 \u0648\u0627\u0644\u062C\u0627\u0630\u0628\u064A\u0629\u060C \u0648\u062E\u062A\u0645 \u0627\u0644\u0623\u0643\u0648\u0627\u0628\u060C \u0648\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0632\u062C\u0627\u062C\u0627\u062A\u060C \u0648\u0627\u0644\u062E\u062A\u0645 \u0628\u0627\u0644\u062D\u062B\u060C \u0648\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0623\u0646\u0627\u0628\u064A\u0628.',
      p2: '\u064A\u0634\u0645\u0644 \u0643\u0644 \u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0645\u0648\u0627\u062F SUS304/316L \u0648\u062F\u0639\u0645 \u0648\u062B\u0627\u0626\u0642 CE \u0648\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062F\u0642\u0629 \u0648\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0623\u062A\u0645\u062A\u0629. \u0646\u0634\u0627\u0631\u0643 \u0641\u064A\u062F\u064A\u0648 \u062A\u062D\u0642\u0642 \u0642\u0628\u0644 \u0627\u0644\u0634\u062D\u0646.',
      subTitle: '\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0622\u0644\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629',
      cons: ['\u0622\u0644\u0627\u062A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0633\u0648\u0627\u0626\u0644', '\u0622\u0644\u0627\u062A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0645\u0639\u0627\u062C\u064A\u0646', '\u0622\u0644\u0627\u062A \u062C\u0631\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062D\u0648\u0642', '\u0622\u0644\u0627\u062A \u062E\u062A\u0645 \u0627\u0644\u0623\u0643\u0648\u0627\u0628', '\u0622\u0644\u0627\u062A \u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0632\u062C\u0627\u062C\u0627\u062A', '\u0622\u0644\u0627\u062A \u0627\u0644\u062E\u062A\u0645 \u0628\u0627\u0644\u062D\u062B', '\u0622\u0644\u0627\u062A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0623\u0646\u0627\u0628\u064A\u0628'],
      cta: '\u0623\u062E\u0628\u0631\u0646\u0627 \u0639\u0646 \u0645\u0646\u062A\u062C\u0643 \u0648\u0646\u0648\u0639 \u0627\u0644\u062D\u0627\u0648\u064A\u0629 \u2014 \u0633\u0646\u0648\u0635\u064A \u0628\u062D\u0644 \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062E\u062A\u0645 \u0627\u0644\u0645\u0646\u0627\u0633\u0628.',
      machines: ['\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0633\u0648\u0627\u0626\u0644', '\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0645\u0639\u0627\u062C\u064A\u0646', '\u062C\u0631\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062D\u0648\u0642', '\u062E\u062A\u0645 \u0627\u0644\u0623\u0643\u0648\u0627\u0628']
    },
    th: {
      title: '\u0E23\u0E30\u0E1A\u0E1A\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E41\u0E25\u0E30\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01',
      p1: '\u0E40\u0E23\u0E32\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2B\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E41\u0E25\u0E30\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27 \u0E40\u0E1E\u0E2A\u0E15\u0E4C \u0E1C\u0E07 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E47\u0E14 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13 \u0E25\u0E39\u0E01\u0E2A\u0E39\u0E1A \u0E41\u0E25\u0E30\u0E41\u0E23\u0E07\u0E42\u0E19\u0E49\u0E21\u0E16\u0E48\u0E27\u0E07 \u0E23\u0E27\u0E21\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E0B\u0E35\u0E25\u0E16\u0E49\u0E27\u0E22 \u0E01\u0E32\u0E23\u0E1B\u0E34\u0E14\u0E1D\u0E32 \u0E0B\u0E35\u0E25\u0E2D\u0E34\u0E19\u0E14\u0E31\u0E01\u0E0A\u0E31\u0E48\u0E19 \u0E41\u0E25\u0E30\u0E40\u0E15\u0E34\u0E21\u0E2B\u0E25\u0E2D\u0E14',
      p2: '\u0E41\u0E15\u0E48\u0E25\u0E30\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E21\u0E35\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E27\u0E31\u0E2A\u0E14\u0E38 SUS304/316L \u0E01\u0E32\u0E23\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 CE \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33/\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 \u0E40\u0E23\u0E32\u0E41\u0E0A\u0E23\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07',
      subTitle: '\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35',
      cons: ['\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E40\u0E1E\u0E2A\u0E15\u0E4C', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E15\u0E27\u0E07\u0E08\u0E48\u0E32\u0E22\u0E1C\u0E07', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01\u0E16\u0E49\u0E27\u0E22', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1B\u0E34\u0E14\u0E1D\u0E32\u0E02\u0E27\u0E14', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E0B\u0E35\u0E25\u0E2D\u0E34\u0E19\u0E14\u0E31\u0E01\u0E0A\u0E31\u0E48\u0E19', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E2B\u0E25\u0E2D\u0E14'],
      cta: '\u0E1A\u0E2D\u0E01\u0E40\u0E23\u0E32\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E20\u0E32\u0E0A\u0E19\u0E30\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u2014 \u0E40\u0E23\u0E32\u0E08\u0E30\u0E41\u0E19\u0E30\u0E19\u0E33\u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21',
      machines: ['\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27', '\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E40\u0E1E\u0E2A\u0E15\u0E4C', '\u0E15\u0E27\u0E07\u0E08\u0E48\u0E32\u0E22\u0E1C\u0E07', '\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01\u0E16\u0E49\u0E27\u0E22/\u0E16\u0E32\u0E14']
    },
    vi: {
      title: 'H\u1EC7 Th\u1ED1ng Chi\u1EBFt R\u00F3t & Seal',
      p1: 'Ch\u00FAng t\u00F4i h\u1ED7 tr\u1EE3 sourcing h\u1EC7 th\u1ED1ng chi\u1EBFt r\u00F3t v\u00E0 seal cho s\u1EA3n ph\u1EA9m l\u1ECFng, paste, b\u1ED9t v\u00E0 h\u1EA1t. Bao g\u1ED3m m\u00E1y chi\u1EBFt r\u00F3t th\u1EC3 t\u00EDch, piston, tr\u1ECDng l\u1EF1c, m\u00E1y seal c\u1ED1c, m\u00E1y \u0111\u00F3ng n\u1EAFp chai, m\u00E1y seal c\u1EA3m \u1EE9ng v\u00E0 m\u00E1y chi\u1EBFt tube.',
      p2: 'M\u1ED7i d\u1EF1 \u00E1n g\u1ED3m x\u00E1c minh v\u1EADt li\u1EC7u SUS304/316L, h\u1ED7 tr\u1EE3 t\u00E0i li\u1EC7u CE v\u00E0 \u0111\u00E1nh gi\u00E1 \u0111\u1ED9 ch\u00EDnh x\u00E1c/m\u1EE9c t\u1EF1 \u0111\u1ED9ng h\u00F3a. Ch\u00FAng t\u00F4i chia s\u1EBB video ki\u1EC3m ch\u1EE9ng tr\u01B0\u1EDBc khi giao.',
      subTitle: 'C\u00E1c lo\u1EA1i m\u00E1y c\u00F3 s\u1EB5n',
      cons: ['M\u00E1y chi\u1EBFt r\u00F3t ch\u1EA5t l\u1ECFng', 'M\u00E1y chi\u1EBFt r\u00F3t paste', 'M\u00E1y \u0111\u1ECBnh l\u01B0\u1EE3ng b\u1ED9t', 'M\u00E1y seal c\u1ED1c', 'M\u00E1y \u0111\u00F3ng n\u1EAFp chai', 'M\u00E1y seal c\u1EA3m \u1EE9ng', 'M\u00E1y chi\u1EBFt tube'],
      cta: 'Cho ch\u00FAng t\u00F4i bi\u1EBFt s\u1EA3n ph\u1EA9m v\u00E0 lo\u1EA1i bao b\u00EC \u2014 ch\u00FAng t\u00F4i s\u1EBD \u0111\u1EC1 xu\u1EA5t gi\u1EA3i ph\u00E1p ph\u00F9 h\u1EE3p.',
      machines: ['Chi\u1EBFt r\u00F3t ch\u1EA5t l\u1ECFng', 'Chi\u1EBFt r\u00F3t paste', '\u0110\u1ECBnh l\u01B0\u1EE3ng b\u1ED9t', 'Seal c\u1ED1c/khay']
    },
    de: {
      title: 'Abf\u00FCll- & Versiegelungssysteme',
      p1: 'Wir unterstützen das Sourcing von Abfüll- und Versiegelungssystemen für flüssige, pastöse, pulverförmige und granulierte Produkte. Dazu gehören volumetrische Füller, Kolbenfüller, Schwerkraftfüller, Becherversiegler, Flaschenverschließer, Induktionsversiegler und Tubenfüller.',
      p2: 'Jedes Projekt umfasst die Prüfung von SUS304/316L, CE-Unterstützung und die Bewertung von Genauigkeit und Automatisierungsgrad. Wir teilen Verifikationsvideos vor dem Versand.',
      subTitle: 'Verf\u00FCgbare Maschinentypen',
      cons: ['Fl\u00FCssigkeitsabf\u00FCller', 'Pastenf\u00FCller', 'Pulverdosierer', 'Becherversiegler', 'Flaschenverschlie\u00DFer', 'Induktionsversiegler', 'Tubenf\u00FCller'],
      cta: 'Teilen Sie uns Ihr Produkt und Beh\u00E4ltertyp mit \u2014 wir empfehlen die passende Abf\u00FCll- und Versiegelungsl\u00F6sung.',
      machines: ['Fl\u00FCssigkeitsabf\u00FCllung', 'Pastenabf\u00FCllung', 'Pulverdosierung', 'Becher-/Schalenversiegelung']
    }
  }
  const t = content[lang] || content['en']
  const routeGuide = {
    notFit: ({
      en: ['Projects without confirmed viscosity, particles, container, or dosage range', 'Lines that only need a basic capper or sealer but no filling validation', 'Operations without cleaning, hygiene, or product-loss targets defined'],
      zh: ['尚未確認黏度、顆粒、容器或計量範圍的專案', '只需要單純封蓋/封口、但沒有充填驗證需求的場景', '尚未定義清潔、衛生或耗損目標的作業'],
      cn: ['尚未确认黏度、颗粒、容器或计量范围的项目', '只需要单纯封盖/封口、但没有灌装验证需求的场景', '尚未定义清洁、卫生或耗损目标的作业'],
    } as Record<string, string[]>)[lang] || ['Projects without confirmed viscosity, particles, container, or dosage range', 'Lines that only need a basic capper or sealer but no filling validation', 'Operations without cleaning, hygiene, or product-loss targets defined'],
    compare: ({
      en: ['Real filling method fit: piston, pump, gravity, auger, cup, or counting', 'Accuracy range, CIP/manual cleaning path, and change parts for container sizes', 'What the quote includes for conveyor, cap sorting, foil sealing, and inspection'],
      zh: ['真正適合的充填方式：活塞、泵、重力、螺桿、量杯或計數', '精度範圍、CIP/人工清洗路徑，以及不同容器尺寸的換型件', '報價是否包含輸送、理蓋、鋁箔封口與檢測'],
      cn: ['真正适合的灌装方式：活塞、泵、重力、螺杆、量杯或计数', '精度范围、CIP/人工清洗路径，以及不同容器尺寸的换型件', '报价是否包含输送、理盖、铝箔封口与检测'],
    } as Record<string, string[]>)[lang] || ['Real filling method fit: piston, pump, gravity, auger, cup, or counting', 'Accuracy range, CIP/manual cleaning path, and change parts for container sizes', 'What the quote includes for conveyor, cap sorting, foil sealing, and inspection'],
    acceptance: ({
      en: ['Run FAT with your real product and packaging set, not water only', 'Confirm fill accuracy, dripping, foaming, seal integrity, and changeover time', 'Lock spare parts, electrical documents, manuals, and alarm list before shipment'],
      zh: ['FAT 請用你的實際產品與容器，不要只用清水測試', '確認充填精度、滴漏、起泡、封口完整性與換線時間', '出貨前鎖定備件、電氣文件、手冊與警報清單'],
      cn: ['FAT 请用你的实际产品与容器，不要只用清水测试', '确认灌装精度、滴漏、起泡、封口完整性与换线时间', '出货前锁定备件、电气文件、手册与报警清单'],
    } as Record<string, string[]>)[lang] || ['Run FAT with your real product and packaging set, not water only', 'Confirm fill accuracy, dripping, foaming, seal integrity, and changeover time', 'Lock spare parts, electrical documents, manuals, and alarm list before shipment'],
  }

  const pageUrl = `${SITE_URL}/${lang}/machinery/filling-sealing`
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
      { '@type': 'ListItem', position: 1, name: 'Liquid Filling Machine', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/liquid-filling-machine`, url: `${SITE_URL}/${lang}/machines/liquid-filling-machine`, name: 'Liquid Filling Machine' } },
      { '@type': 'ListItem', position: 2, name: 'Powder Filling Machine', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/powder-filling-machine`, url: `${SITE_URL}/${lang}/machines/powder-filling-machine`, name: 'Powder Filling Machine' } },
      { '@type': 'ListItem', position: 3, name: 'Liquid filling configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/liquid-filling`, url: `${SITE_URL}/${lang}/resources/route/liquid-filling`, name: 'Liquid filling configuration guides' } },
      { '@type': 'ListItem', position: 4, name: 'Powder dosing configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/powder-dosing`, url: `${SITE_URL}/${lang}/resources/route/powder-dosing`, name: 'Powder dosing configuration guides' } },
    ],
  }

  return (
    <>
      <JsonLd data={[collectionSchema, itemListSchema]} />
      <PageHero
        kicker={({ en: 'FILLING & SEALING', cn: '灌装与封口', zh: '灌裝與封口', fr: 'REMPLISSAGE & SCELLAGE', es: 'LLENADO Y SELLADO', pt: 'ENVASE E SELAGEM', ko: '충전 및 밀봉', ja: '充填・封口', ar: 'التعبئة والختم', th: 'บรรจุและปิดผนึก', vi: 'CHIẾT RÓT & SEAL', de: 'ABFÜLLUNG & VERSIEGELUNG' } as Record<string,string>)[lang] || 'FILLING & SEALING'}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Filling and sealing equipment sourcing support', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].machinery, href: `/${lang}/machinery` },
              { label: t.title, href: `/${lang}/machinery/filling-sealing` },
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
