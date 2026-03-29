import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'

const titles: Record<string, string> = {
  en: 'Filling & Sealing Machinery | Liquid, Paste & Powder Dosing | SunGene',
  cn: '灌装与封口机械 | 液体/膏体/粉末计量 | SunGene', zh: '灌裝與封口機械 | 液體/膏體/粉末計量 | SunGene',
  fr: 'Machines de remplissage et scellage | Liquide, p\u00E2te et poudre | SunGene',
  es: 'Maquinaria de llenado y sellado | L\u00EDquidos, pastas y polvos | SunGene',
  pt: 'M\u00E1quinas de Envase e Selagem | L\u00EDquidos, Pastas e P\u00F3s | SunGene',
  ko: '\uCDA9\uC804 \uBC0F \uBC00\uBD09 \uAE30\uACC4 | \uC561\uCCB4, \uD398\uC774\uC2A4\uD2B8, \uBD84\uB9D0 | SunGene',
  ja: '\u5145\u586B\u30FB\u5C01\u53E3\u6A5F\u68B0 | \u6DB2\u4F53\u30FB\u30DA\u30FC\u30B9\u30C8\u30FB\u7C89\u672B | SunGene',
  ar: '\u0622\u0644\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062E\u062A\u0645 | \u0633\u0648\u0627\u0626\u0644 \u0648\u0645\u0639\u0627\u062C\u064A\u0646 \u0648\u0645\u0633\u0627\u062D\u064A\u0642 | SunGene',
  th: '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E41\u0E25\u0E30\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01 | \u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27, \u0E40\u0E1E\u0E2A\u0E15\u0E4C, \u0E1C\u0E07 | SunGene',
  vi: 'M\u00E1y Chi\u1EBFt R\u00F3t & Seal | Ch\u1EA5t L\u1ECFng, Paste, B\u1ED9t | SunGene',
  de: 'Abf\u00FCll- & Versiegelungsmaschinen | Fl\u00FCssigkeit, Paste, Pulver | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene filling and sealing machinery: liquid fillers, paste fillers, powder dosing, cup sealers, bottle cappers, induction sealers and tube fillers for food, beverage, cosmetics and pharma. CE certified.',
  cn: 'SunGene灌装封口机械：液体灌装机、膏体灌装机、粉末计量机、杯封机、旋盖机、铝箔封口机和软管灌装机，适用于食品、饮料、化妆品和制药行业。CE认证。',
  zh: 'SunGene灌裝封口機械：液體灌裝機、膏體灌裝機、粉末計量機、杯封機、旋蓋機、鋁箔封口機和軟管灌裝機，適用於食品、飲料、化妝品和製藥行業。CE認證。',
  fr: 'Machines de remplissage et scellage SunGene : doseuses pour liquides, pâtes et poudres, scelleuses de gobelets, capseuleuses, scelleuses par induction et machines pour tubes. Certifiées CE.',
  es: 'Maquinaria de llenado y sellado SunGene: dosificadoras de líquidos, pastas, polvos, selladoras de vasos, tapadores de botellas, selladoras por inducción y llenadoras de tubos. CE.',
  pt: 'Maquinário de envase e selagem SunGene: dosadoras de líquidos, pastas e pós, seladoras de copos, tampadores de garrafas, seladoras por indução e enchedoras de tubos. CE.',
  ko: 'SunGene 충전 및 밀봉 기계: 액체, 페이스트, 분말 도징기, 컵 실러, 병 캐퍼, 유도 실러, 튜브 충전기. 식품, 음료, 화장품, 제약용. CE 인증.',
  ja: 'SunGene充填・封口機械：液体・ペースト・粉末ドージング機、カップシーラー、瓶キャッパー、インダクションシーラー、チューブ充填機。食品・飲料・化粧品・製薬向け。CE認証。',
  ar: 'آلات التعبئة والختم SunGene: دوازات للسوائل والمعاجين والمساحيق، سدادات أكواب، مقومات زجاجات، سدادات حثية، آلات تعبئة أنابيب. للأغذية والمشروبات ومستحضرات التجميل. CE.',
  th: 'เครื่องบรรจุและปิดผนึก SunGene: เครื่องเติมของเหลว เพสต์ และผง เครื่องซีลถ้วย เครื่องปิดขวด เครื่องซีลอินดักชัน เครื่องบรรจุหลอด CE',
  vi: 'Máy chiết rót và seal SunGene: máy định lượng lỏng, paste, bột; máy seal cốc; máy vặn nắp chai; máy seal cảm ứng; máy bơm tube. Thực phẩm, đồ uống, mỹ phẩm, dược. CE.',
  de: 'SunGene Abfüll- und Versiegelungsmaschinen: Dosierer für Flüssigkeiten, Pasten und Pulver, Becherverschließer, Flaschenverschließer, Induktionsversiegler, Tubenfüller. CE.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  return {
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    keywords: ['liquid filling machine', 'paste filling machine', 'cup sealer', 'bottle capper', 'induction sealer', 'tube filling machine', 'filling machine Taiwan'],
    alternates: {
      canonical: `${SITE_URL}/${l}/machinery/filling-sealing`,
      languages: {
        'en': `${SITE_URL}/en/machinery/filling-sealing`,
        'zh-TW': `${SITE_URL}/zh/machinery/filling-sealing`,
        'zh-CN': `${SITE_URL}/cn/machinery/filling-sealing`,
        'fr': `${SITE_URL}/fr/machinery/filling-sealing`,
        'es': `${SITE_URL}/es/machinery/filling-sealing`,
        'pt': `${SITE_URL}/pt/machinery/filling-sealing`,
        'ko': `${SITE_URL}/ko/machinery/filling-sealing`,
        'ja': `${SITE_URL}/ja/machinery/filling-sealing`,
        'ar': `${SITE_URL}/ar/machinery/filling-sealing`,
        'th': `${SITE_URL}/th/machinery/filling-sealing`,
        'vi': `${SITE_URL}/vi/machinery/filling-sealing`,
        'de': `${SITE_URL}/de/machinery/filling-sealing`,
        'x-default': `${SITE_URL}/en/machinery/filling-sealing`,
      }
    },
    openGraph: {
      title: titles[l] || titles.en,
      description: descriptions[l] || descriptions.en,
      url: `${SITE_URL}/${l}/machinery/filling-sealing`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: titles[l] || titles.en, description: descriptions[l] || descriptions.en, images: [`${SITE_URL}/og/og.png`] },
  }
}

export default async function FillingSeaingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 받기', ja: '見積もりを依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Nhận báo giá', de: 'Angebot anfordern' }
  const heroPhoto = PHOTO.machinery.subpageHeroes.fillingSealing

  const content: Record<string, any> = {
    en: {
      title: 'Filling & Sealing Systems',
      p1: 'We design and manufacture a comprehensive range of filling and sealing machines for liquid, paste, powder, and granule products. Our systems cover volumetric fillers, piston fillers, gravity fillers, cup sealers, bottle cappers, induction sealers, and tube filling machines — serving food, beverage, cosmetic, pharmaceutical, and chemical industries.',
      p2: 'All machines feature SUS304/316L stainless steel construction, CE certification, and can be configured for custom voltage, filling volume, sealing type, and automation level. Factory test videos are provided before shipment.',
      subTitle: 'Machine Types Available',
      cons: ['Liquid Fillers', 'Paste Fillers', 'Powder Dosing Machines', 'Cup Sealers', 'Bottle Cappers', 'Induction Sealers', 'Tube Filling Machines'],
      cta: 'Tell us your product and container type — we\'ll recommend the right filling & sealing solution.',
      machines: ['Liquid Filling', 'Paste Filling', 'Powder Dosing', 'Cup & Tray Sealing']
    },
    cn: {
      title: '灌装与封口系统',
      p1: '我们设计和制造全系列灌装和封口机，适用于液体、膏体、粉末和颗粒产品。系统涵盖容积式灌装机、活塞灌装机、重力灌装机、杯封机、瓶盖机、铝箔封口机和软管灌装机——服务于食品、饮料、化妆品、制药和化工行业。',
      p2: '所有机器采用SUS304/316L不锈钢结构，CE认证，可配置定制电压、灌装量、封口类型和自动化水平。发货前提供工厂测试视频。',
      subTitle: '可用机型',
      cons: ['液体灌装机', '膏体灌装机', '粉末计量机', '杯封机', '旋盖机', '铝箔封口机', '软管灌装机'],
      cta: '告诉我们您的产品和容器类型——我们将推荐合适的灌装封口方案。',
      machines: ['液体灌装', '膏体灌装', '粉末计量', '杯盒封口']
    },
    zh: {
      title: '灌裝與封口系統',
      p1: '我們設計和製造全系列灌裝和封口機，適用於液體、膏體、粉末和顆粒產品。系統涵蓋容積式灌裝機、活塞灌裝機、重力灌裝機、杯封機、瓶蓋機、鋁箔封口機和軟管灌裝機——服務於食品、飲料、化妝品、製藥和化工行業。',
      p2: '所有機器採用SUS304/316L不鏽鋼結構，CE認證，可配置客製電壓、灌裝量、封口類型和自動化水平。發貨前提供工廠測試影片。',
      subTitle: '可用機型',
      cons: ['液體灌裝機', '膏體灌裝機', '粉末計量機', '杯封機', '旋蓋機', '鋁箔封口機', '軟管灌裝機'],
      cta: '告訴我們您的產品和容器類型——我們將推薦合適的灌裝封口方案。',
      machines: ['液體灌裝', '膏體灌裝', '粉末計量', '杯盒封口']
    },
    fr: {
      title: 'Syst\u00E8mes de remplissage et scellage',
      p1: 'Nous concevons et fabriquons une gamme compl\u00E8te de machines de remplissage et de scellage pour produits liquides, p\u00E2teux, en poudre et granul\u00E9s. Nos syst\u00E8mes couvrent les remplisseuses volum\u00E9triques, \u00E0 piston, par gravit\u00E9, les scelleuses de gobelets, les capsuleuses, les scelleuses \u00E0 induction et les remplisseuses de tubes.',
      p2: 'Toutes les machines sont construites en acier inoxydable SUS304/316L, certifi\u00E9es CE, avec tension, volume de remplissage, type de scellage et niveau d\'automatisation personnalisables. Des vid\u00E9os de test usine sont fournies avant exp\u00E9dition.',
      subTitle: 'Types de machines disponibles',
      cons: ['Remplisseuses de liquides', 'Remplisseuses de p\u00E2tes', 'Doseuses de poudre', 'Scelleuses de gobelets', 'Capsuleuses', 'Scelleuses \u00E0 induction', 'Remplisseuses de tubes'],
      cta: 'D\u00E9crivez-nous votre produit et type de contenant \u2014 nous vous recommanderons la solution adapt\u00E9e.',
      machines: ['Remplissage liquide', 'Remplissage p\u00E2te', 'Dosage poudre', 'Scellage gobelet']
    },
    es: {
      title: 'Sistemas de llenado y sellado',
      p1: 'Dise\u00F1amos y fabricamos una gama completa de m\u00E1quinas de llenado y sellado para productos l\u00EDquidos, pastosos, en polvo y granulados. Nuestros sistemas cubren llenadoras volum\u00E9tricas, de pist\u00F3n, por gravedad, selladoras de vasos, tapadoras de botellas, selladoras por inducci\u00F3n y llenadoras de tubos.',
      p2: 'Todas las m\u00E1quinas cuentan con construcci\u00F3n en acero inoxidable SUS304/316L, certificaci\u00F3n CE, y se pueden configurar con voltaje, volumen de llenado, tipo de sellado y nivel de automatizaci\u00F3n personalizados.',
      subTitle: 'Tipos de m\u00E1quinas disponibles',
      cons: ['Llenadoras de l\u00EDquidos', 'Llenadoras de pastas', 'Dosificadoras de polvo', 'Selladoras de vasos', 'Tapadoras de botellas', 'Selladoras por inducci\u00F3n', 'Llenadoras de tubos'],
      cta: 'Cu\u00E9ntenos sobre su producto y tipo de envase \u2014 le recomendaremos la soluci\u00F3n adecuada.',
      machines: ['Llenado de l\u00EDquidos', 'Llenado de pastas', 'Dosificaci\u00F3n de polvo', 'Sellado de vasos']
    },
    pt: {
      title: 'Sistemas de Envase e Selagem',
      p1: 'Projetamos e fabricamos uma linha completa de m\u00E1quinas de envase e selagem para produtos l\u00EDquidos, pastosos, em p\u00F3 e granulados. Nossos sistemas cobrem envasadoras volum\u00E9tricas, de pist\u00E3o, por gravidade, seladoras de copos, tampadoras, seladoras por indu\u00E7\u00E3o e envasadoras de tubos.',
      p2: 'Todas as m\u00E1quinas possuem constru\u00E7\u00E3o em a\u00E7o inoxid\u00E1vel SUS304/316L, certifica\u00E7\u00E3o CE, e podem ser configuradas com voltagem, volume de envase, tipo de selagem e n\u00EDvel de automa\u00E7\u00E3o personalizados.',
      subTitle: 'Tipos de m\u00E1quinas dispon\u00EDveis',
      cons: ['Envasadoras de l\u00EDquidos', 'Envasadoras de pastas', 'Dosadoras de p\u00F3', 'Seladoras de copos', 'Tampadoras de garrafas', 'Seladoras por indu\u00E7\u00E3o', 'Envasadoras de tubos'],
      cta: 'Conte-nos sobre seu produto e tipo de recipiente \u2014 recomendaremos a solu\u00E7\u00E3o ideal.',
      machines: ['Envase de l\u00EDquidos', 'Envase de pastas', 'Dosagem de p\u00F3', 'Selagem de copos']
    },
    ko: {
      title: '\uCDA9\uC804 \uBC0F \uBC00\uBD09 \uC2DC\uC2A4\uD15C',
      p1: '\uC561\uCCB4, \uD398\uC774\uC2A4\uD2B8, \uBD84\uB9D0, \uACFC\uB9BD \uC81C\uD488\uC744 \uC704\uD55C \uCDA9\uC804 \uBC0F \uBC00\uBD09 \uAE30\uACC4 \uC804 \uC81C\uD488\uAD70\uC744 \uC124\uACC4\u00B7\uC81C\uC870\uD569\uB2C8\uB2E4. \uC6A9\uB7C9\uC2DD, \uD53C\uC2A4\uD1A4, \uC911\uB825\uC2DD \uCDA9\uC804\uAE30, \uCEF5 \uC2E4\uB7EC, \uBCD1 \uCE90\uD37C, \uC720\uB3C4\uAC00\uC5F4 \uC2E4\uB7EC, \uD29C\uBE0C \uCDA9\uC804\uAE30\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.',
      p2: '\uBAA8\uB4E0 \uAE30\uACC4\uB294 SUS304/316L \uC2A4\uD14C\uC778\uB9AC\uC2A4 \uC2A4\uD2F8\uB85C \uC81C\uC791\uB418\uBA70 CE \uC778\uC99D\uC744 \uBC1B\uC558\uC2B5\uB2C8\uB2E4. \uB9DE\uCDA4 \uC804\uC555, \uCDA9\uC804\uB7C9, \uBC00\uBD09 \uC720\uD615 \uBC0F \uC790\uB3D9\uD654 \uC218\uC900\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.',
      subTitle: '\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAE30\uACC4 \uC720\uD615',
      cons: ['\uC561\uCCB4 \uCDA9\uC804\uAE30', '\uD398\uC774\uC2A4\uD2B8 \uCDA9\uC804\uAE30', '\uBD84\uB9D0 \uACC4\uB7C9\uAE30', '\uCEF5 \uC2E4\uB7EC', '\uBCD1 \uCE90\uD37C', '\uC720\uB3C4\uAC00\uC5F4 \uC2E4\uB7EC', '\uD29C\uBE0C \uCDA9\uC804\uAE30'],
      cta: '\uC81C\uD488\uACFC \uC6A9\uAE30 \uC720\uD615\uC744 \uC54C\uB824\uC8FC\uC138\uC694 \u2014 \uC801\uD569\uD55C \uCDA9\uC804 \uBC0F \uBC00\uBD09 \uC194\uB8E8\uC158\uC744 \uCD94\uCC9C\uD574 \uB4DC\uB9BD\uB2C8\uB2E4.',
      machines: ['\uC561\uCCB4 \uCDA9\uC804', '\uD398\uC774\uC2A4\uD2B8 \uCDA9\uC804', '\uBD84\uB9D0 \uACC4\uB7C9', '\uCEF5/\uD2B8\uB808\uC774 \uC2E4\uB9C1']
    },
    ja: {
      title: '\u5145\u586B\u30FB\u5C01\u53E3\u30B7\u30B9\u30C6\u30E0',
      p1: '\u6DB2\u4F53\u3001\u30DA\u30FC\u30B9\u30C8\u3001\u7C89\u672B\u3001\u9854\u7C92\u88FD\u54C1\u5411\u3051\u306E\u5145\u586B\u30FB\u5C01\u53E3\u6A5F\u3092\u5E45\u5E83\u304F\u8A2D\u8A08\u30FB\u88FD\u9020\u3057\u3066\u3044\u307E\u3059\u3002\u5BB9\u7A4D\u5F0F\u3001\u30D4\u30B9\u30C8\u30F3\u5F0F\u3001\u91CD\u529B\u5F0F\u5145\u586B\u6A5F\u3001\u30AB\u30C3\u30D7\u30B7\u30FC\u30E9\u30FC\u3001\u30DC\u30C8\u30EB\u30AD\u30E3\u30C3\u30D1\u30FC\u3001\u8A98\u5C0E\u52A0\u71B1\u30B7\u30FC\u30E9\u30FC\u3001\u30C1\u30E5\u30FC\u30D6\u5145\u586B\u6A5F\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002',
      p2: '\u3059\u3079\u3066\u306E\u6A5F\u68B0\u306FSUS304/316L\u30B9\u30C6\u30F3\u30EC\u30B9\u88FD\u3001CE\u8A8D\u8A3C\u6E08\u307F\u3002\u30AB\u30B9\u30BF\u30E0\u96FB\u5727\u3001\u5145\u586B\u91CF\u3001\u5C01\u53E3\u30BF\u30A4\u30D7\u3001\u81EA\u52D5\u5316\u30EC\u30D9\u30EB\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002',
      subTitle: '\u5BFE\u5FDC\u6A5F\u7A2E',
      cons: ['\u6DB2\u4F53\u5145\u586B\u6A5F', '\u30DA\u30FC\u30B9\u30C8\u5145\u586B\u6A5F', '\u7C89\u672B\u8A08\u91CF\u6A5F', '\u30AB\u30C3\u30D7\u30B7\u30FC\u30E9\u30FC', '\u30DC\u30C8\u30EB\u30AD\u30E3\u30C3\u30D1\u30FC', '\u8A98\u5C0E\u52A0\u71B1\u30B7\u30FC\u30E9\u30FC', '\u30C1\u30E5\u30FC\u30D6\u5145\u586B\u6A5F'],
      cta: '\u88FD\u54C1\u3068\u5BB9\u5668\u30BF\u30A4\u30D7\u3092\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044 \u2014 \u6700\u9069\u306A\u5145\u586B\u30FB\u5C01\u53E3\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002',
      machines: ['\u6DB2\u4F53\u5145\u586B', '\u30DA\u30FC\u30B9\u30C8\u5145\u586B', '\u7C89\u672B\u8A08\u91CF', '\u30AB\u30C3\u30D7/\u30C8\u30EC\u30A4\u30B7\u30FC\u30EA\u30F3\u30B0']
    },
    ar: {
      title: '\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062E\u062A\u0645',
      p1: '\u0646\u0635\u0645\u0645 \u0648\u0646\u0635\u0646\u0639 \u0645\u062C\u0645\u0648\u0639\u0629 \u0634\u0627\u0645\u0644\u0629 \u0645\u0646 \u0622\u0644\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062E\u062A\u0645 \u0644\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0644\u0629 \u0648\u0627\u0644\u0645\u0639\u062C\u0646\u064A\u0629 \u0648\u0627\u0644\u0645\u0633\u062D\u0648\u0642\u0629 \u0648\u0627\u0644\u062D\u0628\u064A\u0628\u064A\u0629. \u062A\u063A\u0637\u064A \u0623\u0646\u0638\u0645\u062A\u0646\u0627 \u0622\u0644\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u062C\u0645\u064A\u0629 \u0648\u0627\u0644\u0645\u0643\u0628\u0633\u064A\u0629 \u0648\u0627\u0644\u062C\u0627\u0630\u0628\u064A\u0629 \u0648\u0622\u0644\u0627\u062A \u062E\u062A\u0645 \u0627\u0644\u0623\u0643\u0648\u0627\u0628 \u0648\u0622\u0644\u0627\u062A \u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0632\u062C\u0627\u062C\u0627\u062A \u0648\u0622\u0644\u0627\u062A \u0627\u0644\u062E\u062A\u0645 \u0628\u0627\u0644\u062D\u062B \u0648\u0622\u0644\u0627\u062A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0623\u0646\u0627\u0628\u064A\u0628.',
      p2: '\u062C\u0645\u064A\u0639 \u0627\u0644\u0622\u0644\u0627\u062A \u0645\u0635\u0646\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0641\u0648\u0644\u0627\u0630 \u0627\u0644\u0645\u0642\u0627\u0648\u0645 \u0644\u0644\u0635\u062F\u0623 SUS304/316L\u060C \u062D\u0627\u0635\u0644\u0629 \u0639\u0644\u0649 \u0634\u0647\u0627\u062F\u0629 CE.',
      subTitle: '\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0622\u0644\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629',
      cons: ['\u0622\u0644\u0627\u062A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0633\u0648\u0627\u0626\u0644', '\u0622\u0644\u0627\u062A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0645\u0639\u0627\u062C\u064A\u0646', '\u0622\u0644\u0627\u062A \u062C\u0631\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062D\u0648\u0642', '\u0622\u0644\u0627\u062A \u062E\u062A\u0645 \u0627\u0644\u0623\u0643\u0648\u0627\u0628', '\u0622\u0644\u0627\u062A \u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0632\u062C\u0627\u062C\u0627\u062A', '\u0622\u0644\u0627\u062A \u0627\u0644\u062E\u062A\u0645 \u0628\u0627\u0644\u062D\u062B', '\u0622\u0644\u0627\u062A \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0623\u0646\u0627\u0628\u064A\u0628'],
      cta: '\u0623\u062E\u0628\u0631\u0646\u0627 \u0639\u0646 \u0645\u0646\u062A\u062C\u0643 \u0648\u0646\u0648\u0639 \u0627\u0644\u062D\u0627\u0648\u064A\u0629 \u2014 \u0633\u0646\u0648\u0635\u064A \u0628\u062D\u0644 \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062E\u062A\u0645 \u0627\u0644\u0645\u0646\u0627\u0633\u0628.',
      machines: ['\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0633\u0648\u0627\u0626\u0644', '\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0645\u0639\u0627\u062C\u064A\u0646', '\u062C\u0631\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062D\u0648\u0642', '\u062E\u062A\u0645 \u0627\u0644\u0623\u0643\u0648\u0627\u0628']
    },
    th: {
      title: '\u0E23\u0E30\u0E1A\u0E1A\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E41\u0E25\u0E30\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01',
      p1: '\u0E40\u0E23\u0E32\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E1C\u0E25\u0E34\u0E15\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E41\u0E25\u0E30\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27 \u0E40\u0E1E\u0E2A\u0E15\u0E4C \u0E1C\u0E07 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E47\u0E14',
      p2: '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1C\u0E25\u0E34\u0E15\u0E08\u0E32\u0E01\u0E2A\u0E41\u0E15\u0E19\u0E40\u0E25\u0E2A SUS304/316L \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07 CE \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E44\u0E1F\u0E1F\u0E49\u0E32 \u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13\u0E1A\u0E23\u0E23\u0E08\u0E38 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01 \u0E41\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E44\u0E14\u0E49',
      subTitle: '\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35',
      cons: ['\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E40\u0E1E\u0E2A\u0E15\u0E4C', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E15\u0E27\u0E07\u0E08\u0E48\u0E32\u0E22\u0E1C\u0E07', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01\u0E16\u0E49\u0E27\u0E22', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1B\u0E34\u0E14\u0E1D\u0E32\u0E02\u0E27\u0E14', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E0B\u0E35\u0E25\u0E2D\u0E34\u0E19\u0E14\u0E31\u0E01\u0E0A\u0E31\u0E48\u0E19', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E2B\u0E25\u0E2D\u0E14'],
      cta: '\u0E1A\u0E2D\u0E01\u0E40\u0E23\u0E32\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E20\u0E32\u0E0A\u0E19\u0E30\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u2014 \u0E40\u0E23\u0E32\u0E08\u0E30\u0E41\u0E19\u0E30\u0E19\u0E33\u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21',
      machines: ['\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27', '\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E40\u0E1E\u0E2A\u0E15\u0E4C', '\u0E15\u0E27\u0E07\u0E08\u0E48\u0E32\u0E22\u0E1C\u0E07', '\u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01\u0E16\u0E49\u0E27\u0E22/\u0E16\u0E32\u0E14']
    },
    vi: {
      title: 'H\u1EC7 Th\u1ED1ng Chi\u1EBFt R\u00F3t & Seal',
      p1: 'Ch\u00FAng t\u00F4i thi\u1EBFt k\u1EBF v\u00E0 s\u1EA3n xu\u1EA5t \u0111\u1EA7y \u0111\u1EE7 c\u00E1c lo\u1EA1i m\u00E1y chi\u1EBFt r\u00F3t v\u00E0 seal cho s\u1EA3n ph\u1EA9m l\u1ECFng, paste, b\u1ED9t v\u00E0 h\u1EA1t. H\u1EC7 th\u1ED1ng bao g\u1ED3m m\u00E1y chi\u1EBFt r\u00F3t th\u1EC3 t\u00EDch, piston, tr\u1ECDng l\u1EF1c, m\u00E1y seal c\u1ED1c, m\u00E1y \u0111\u00F3ng n\u1EAFp chai, m\u00E1y seal c\u1EA3m \u1EE9ng v\u00E0 m\u00E1y chi\u1EBFt tube.',
      p2: 'T\u1EA5t c\u1EA3 m\u00E1y \u0111\u01B0\u1EE3c ch\u1EBF t\u1EA1o b\u1EB1ng th\u00E9p kh\u00F4ng g\u1EC9 SUS304/316L, \u0111\u1EA1t ch\u1EE9ng nh\u1EADn CE, c\u00F3 th\u1EC3 t\u00F9y ch\u1EC9nh \u0111i\u1EC7n \u00E1p, dung t\u00EDch chi\u1EBFt, lo\u1EA1i seal v\u00E0 m\u1EE9c t\u1EF1 \u0111\u1ED9ng h\u00F3a.',
      subTitle: 'C\u00E1c lo\u1EA1i m\u00E1y c\u00F3 s\u1EB5n',
      cons: ['M\u00E1y chi\u1EBFt r\u00F3t ch\u1EA5t l\u1ECFng', 'M\u00E1y chi\u1EBFt r\u00F3t paste', 'M\u00E1y \u0111\u1ECBnh l\u01B0\u1EE3ng b\u1ED9t', 'M\u00E1y seal c\u1ED1c', 'M\u00E1y \u0111\u00F3ng n\u1EAFp chai', 'M\u00E1y seal c\u1EA3m \u1EE9ng', 'M\u00E1y chi\u1EBFt tube'],
      cta: 'Cho ch\u00FAng t\u00F4i bi\u1EBFt s\u1EA3n ph\u1EA9m v\u00E0 lo\u1EA1i bao b\u00EC \u2014 ch\u00FAng t\u00F4i s\u1EBD \u0111\u1EC1 xu\u1EA5t gi\u1EA3i ph\u00E1p ph\u00F9 h\u1EE3p.',
      machines: ['Chi\u1EBFt r\u00F3t ch\u1EA5t l\u1ECFng', 'Chi\u1EBFt r\u00F3t paste', '\u0110\u1ECBnh l\u01B0\u1EE3ng b\u1ED9t', 'Seal c\u1ED1c/khay']
    },
    de: {
      title: 'Abf\u00FCll- & Versiegelungssysteme',
      p1: 'Wir entwickeln und fertigen eine umfassende Palette von Abf\u00FCll- und Versiegelungsmaschinen f\u00FCr fl\u00FCssige, pastöse, pulverf\u00F6rmige und granulierte Produkte. Unsere Systeme umfassen volumetrische F\u00FCller, Kolbenf\u00FCller, Schwerkraftf\u00FCller, Becherversiegler, Flaschenverschlie\u00DFer, Induktionsversiegler und Tubenf\u00FCller.',
      p2: 'Alle Maschinen sind aus Edelstahl SUS304/316L gefertigt, CE-zertifiziert und mit kundenspezifischer Spannung, F\u00FCllvolumen, Versiegelungstyp und Automatisierungsgrad konfigurierbar.',
      subTitle: 'Verf\u00FCgbare Maschinentypen',
      cons: ['Fl\u00FCssigkeitsabf\u00FCller', 'Pastenf\u00FCller', 'Pulverdosierer', 'Becherversiegler', 'Flaschenverschlie\u00DFer', 'Induktionsversiegler', 'Tubenf\u00FCller'],
      cta: 'Teilen Sie uns Ihr Produkt und Beh\u00E4ltertyp mit \u2014 wir empfehlen die passende Abf\u00FCll- und Versiegelungsl\u00F6sung.',
      machines: ['Fl\u00FCssigkeitsabf\u00FCllung', 'Pastenabf\u00FCllung', 'Pulverdosierung', 'Becher-/Schalenversiegelung']
    }
  }
  const t = content[lang] || content['en']

  return (
    <>
      <PageHero
        kicker={({ en: 'FILLING & SEALING', cn: '灌装与封口', zh: '灌裝與封口', fr: 'REMPLISSAGE & SCELLAGE', es: 'LLENADO Y SELLADO', pt: 'ENVASE E SELAGEM', ko: '충전 및 밀봉', ja: '充填・封口', ar: 'التعبئة والختم', th: 'บรรจุและปิดผนึก', vi: 'CHIẾT RÓT & SEAL', de: 'ABFÜLLUNG & VERSIEGELUNG' } as Record<string,string>)[lang] || 'FILLING & SEALING'}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Filling and sealing machinery in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
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
