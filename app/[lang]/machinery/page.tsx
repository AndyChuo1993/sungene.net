import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const titles = {
    en: 'Industrial Machinery Catalog | Packaging, Food Processing & Automation | SunGene',
    cn: '工业机械目录 | 包装、食品加工与自动化 | SunGene',
    zh: '工業機械目錄 | 包裝、食品加工與自動化 | SunGene',
    fr: 'Catalogue de machines industrielles | Emballage, Agroalimentaire & Automatisation | SunGene',
    es: 'Catálogo de maquinaria industrial | Empaque, Procesamiento de alimentos y Automatización | SunGene',
    pt: 'Catálogo de Máquinas Industriais | Embalagem, Processamento de Alimentos e Automação | SunGene',
    ko: '산업 기계 카탈로그 | 포장, 식품 가공 및 자동화 | SunGene',
    ja: '産業機械カタログ | 包装、食品加工、自動化 | SunGene',
    ar: 'كتالوج الآلات الصناعية | التعبئة والتغليف، تصنيع الأغذية والأتمتة | SunGene',
    th: 'แคตตาล็อกเครื่องจักรอุตสาหกรรม | บรรจุภัณฑ์, แปรรูปอาหาร และระบบอัตโนมัติ | SunGene',
    vi: 'Danh mục máy móc công nghiệp | Đóng gói, Chế biến thực phẩm & Tự động hóa | SunGene',
    de: 'Industriemaschinenkatolog | Verpackung, Lebensmittelverarbeitung & Automatisierung | SunGene',
  }
  const descriptions = {
    en: 'Browse our complete range of industrial machinery: packaging machines, food processing equipment, filling & sealing systems, conveyor automation, and custom-engineered solutions. CE certified, factory-direct from Taiwan.',
    cn: '浏览我们的全系列工业机械：包装机、食品加工设备、灌装封口系统、输送自动化和定制解决方案。CE认证，台湾工厂直销。',
    zh: '瀏覽我們的全系列工業機械：包裝機、食品加工設備、灌裝封口系統、輸送自動化和客製解決方案。CE認證，台灣工廠直銷。',
    fr: 'Parcourez notre gamme complète de machines industrielles : machines d\'emballage, équipements agroalimentaires, systèmes de remplissage et scellage, automatisation de convoyage et solutions sur mesure. Certifié CE, direct usine depuis Taïwan.',
    es: 'Explore nuestra gama completa de maquinaria industrial: máquinas de empaque, equipos de procesamiento de alimentos, sistemas de llenado y sellado, automatización de transporte y soluciones de ingeniería a medida. Certificado CE, directo de fábrica desde Taiwán.',
    pt: 'Navegue por nossa linha completa de máquinas industriais: máquinas de embalagem, equipamentos de processamento de alimentos, sistemas de envase e selagem, automação de transporte e soluções sob medida. Certificação CE, direto da fábrica em Taiwan.',
    ko: '포장기, 식품 가공 장비, 충전 및 밀봉 시스템, 컨베이어 자동화, 맞춤 설계 솔루션 등 전체 산업 기계를 둘러보세요. CE 인증, 대만 공장 직판.',
    ja: '包装機、食品加工装置、充填・シール装置、コンベア自動化、カスタムエンジニアリングソリューションなど、産業機械の全ラインナップをご覧ください。CE認証済み、台湾工場直販。',
    ar: 'تصفح مجموعتنا الكاملة من الآلات الصناعية: آلات التعبئة والتغليف، معدات تصنيع الأغذية، أنظمة التعبئة والختم، أتمتة النقل، وحلول هندسية مخصصة. حاصلة على شهادة CE، مباشرة من المصنع في تايوان.',
    th: 'เรียกดูเครื่องจักรอุตสาหกรรมทั้งหมดของเรา: เครื่องบรรจุภัณฑ์, อุปกรณ์แปรรูปอาหาร, ระบบบรรจุและซีล, ระบบสายพานอัตโนมัติ และโซลูชันวิศวกรรมเฉพาะ ได้รับรอง CE ส่งตรงจากโรงงานในไต้หวัน',
    vi: 'Khám phá toàn bộ dòng máy móc công nghiệp: máy đóng gói, thiết bị chế biến thực phẩm, hệ thống chiết rót và hàn kín, tự động hóa băng tải và giải pháp kỹ thuật tùy chỉnh. Chứng nhận CE, trực tiếp từ nhà máy Đài Loan.',
    de: 'Entdecken Sie unsere vollständige Palette an Industriemaschinen: Verpackungsmaschinen, Lebensmittelverarbeitungsanlagen, Abfüll- und Versiegelungssysteme, Förderautomatisierung und maßgeschneiderte Lösungen. CE-zertifiziert, direkt ab Werk aus Taiwan.',
  }
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  return {
    title: (titles as Record<string,string>)[l] || titles.en,
    description: (descriptions as Record<string,string>)[l] || descriptions.en,
    alternates: {
      canonical: `${SITE_URL}/${l}/machinery`,
      languages: {
        'en': `${SITE_URL}/en/machinery`,
        'zh-TW': `${SITE_URL}/zh/machinery`,
        'zh-CN': `${SITE_URL}/cn/machinery`,
        'fr': `${SITE_URL}/fr/machinery`,
        'es': `${SITE_URL}/es/machinery`,
        'pt': `${SITE_URL}/pt/machinery`,
        'ko': `${SITE_URL}/ko/machinery`,
        'ja': `${SITE_URL}/ja/machinery`,
        'ar': `${SITE_URL}/ar/machinery`,
        'th': `${SITE_URL}/th/machinery`,
        'vi': `${SITE_URL}/vi/machinery`,
        'de': `${SITE_URL}/de/machinery`,
        'x-default': `${SITE_URL}/en/machinery`,
      }
    },
    openGraph: {
      title: (titles as Record<string,string>)[l] || titles.en,
      description: (descriptions as Record<string,string>)[l] || descriptions.en,
      url: `${SITE_URL}/${l}/machinery`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: (titles as Record<string,string>)[l] || titles.en, description: (descriptions as Record<string,string>)[l] || descriptions.en, images: [`${SITE_URL}/og/og.png`] },
  }
}

const categoryIcons = [
  <svg key="0" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
  <svg key="1" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
  <svg key="2" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>,
  <svg key="3" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>,
  <svg key="4" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M4.26 19.72A9.96 9.96 0 0012 22a9.96 9.96 0 007.74-2.28" /></svg>,
]

const catalogHero = PHOTO.machinery.catalogHero

const categoryPhotos = PHOTO.machinery.categoryPhotos

export default async function MachineryPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'MACHINERY CATALOG',
      title: 'Our Industrial Machinery',
      desc: 'Browse our complete range of industrial equipment. From packaging and food processing to custom-engineered automation systems — all manufactured in Taiwan with CE certification.',
      cats: [
        { title: 'Packaging Machinery', desc: 'VFFS, HFFS, pouch packaging, vacuum sealers, shrink wrappers, carton packers, and multi-head weighers for powder, granule, liquid, and solid products.', badge: 'Most Popular' },
        { title: 'Food Processing Equipment', desc: 'Industrial mixers, meat grinders, vegetable slicers, cooking kettles, blanching systems, and complete food preparation lines.', badge: '' },
        { title: 'Filling & Sealing Systems', desc: 'Automatic liquid fillers, paste fillers, powder dosers, cup sealers, bottle cappers, induction sealers, and tube filling machines.', badge: '' },
        { title: 'Conveying & Automation', desc: 'Belt conveyors, bucket elevators, screw feeders, pick-and-place robots, palletizers, and PLC-integrated line control systems.', badge: '' },
        { title: 'Customized Machinery', desc: 'OEM machinery design, custom dimensions, special materials, modified output capacity, and application-specific engineering.', badge: 'Engineering Team' }
      ],
      cta: 'Need help choosing? Get a free consultation.',
      ctaBtn: 'Contact Our Engineers',
    },
    cn: {
      kicker: '机械目录',
      title: '我们的工业机械',
      desc: '浏览我们的全系列工业设备。从包装和食品加工到定制自动化系统——均在台湾制造，CE认证。',
      cats: [
        { title: '包装机械', desc: '立式/卧式充填封口机、袋装机、真空封口机、热缩包装机、装箱机和多头秤，适用于粉末、颗粒、液体和固体产品。', badge: '最受欢迎' },
        { title: '食品加工设备', desc: '工业搅拌机、绞肉机、切菜机、蒸煮锅、漂烫系统和完整食品备料产线。', badge: '' },
        { title: '灌装与封口系统', desc: '自动液体灌装机、膏体灌装机、粉末计量机、杯盖封口机、瓶盖旋盖机和管装充填机。', badge: '' },
        { title: '输送与自动化', desc: '皮带输送机、斗式提升机、螺旋给料机、机械手、码垛机和PLC集成控制系统。', badge: '' },
        { title: '定制机械', desc: 'OEM设计、定制尺寸、特殊材料、改装产能和应用专属工程。', badge: '工程团队' }
      ],
      cta: '需要选型帮助？获取免费咨询。',
      ctaBtn: '联系我们的工程师',
    },
    zh: {
      kicker: '機械目錄',
      title: '我們的工業機械',
      desc: '瀏覽我們的全系列工業設備。從包裝和食品加工到客製自動化系統——均在台灣製造，CE認證。',
      cats: [
        { title: '包裝機械', desc: '立式/臥式充填封口機、袋裝機、真空封口機、熱縮包裝機、裝箱機和多頭秤，適用於粉末、顆粒、液體和固體產品。', badge: '最受歡迎' },
        { title: '食品加工設備', desc: '工業攪拌機、絞肉機、切菜機、蒸煮鍋、漂燙系統和完整食品備料產線。', badge: '' },
        { title: '灌裝與封口系統', desc: '自動液體灌裝機、膏體灌裝機、粉末計量機、杯蓋封口機、瓶蓋旋蓋機和管裝充填機。', badge: '' },
        { title: '輸送與自動化', desc: '皮帶輸送機、斗式提升機、螺旋給料機、機械手、碼垛機和PLC整合控制系統。', badge: '' },
        { title: '客製機械', desc: 'OEM設計、客製尺寸、特殊材料、改裝產能和應用專屬工程。', badge: '工程團隊' }
      ],
      cta: '需要選型幫助？取得免費諮詢。',
      ctaBtn: '聯繫我們的工程師',
    },
    fr: {
      kicker: 'CATALOGUE MACHINES',
      title: 'Nos machines industrielles',
      desc: 'Parcourez notre gamme complète d\'équipements industriels. De l\'emballage et la transformation alimentaire aux systèmes d\'automatisation sur mesure — tous fabriqués à Taïwan avec certification CE.',
      cats: [
        { title: 'Machines d\'emballage', desc: 'Ensacheuses VFFS et HFFS, conditionneuses de sachets, scelleuses sous vide, machines de rétraction, encaisseuses et peseuses multi-têtes pour produits en poudre, granulés, liquides et solides.', badge: 'Les plus demandées' },
        { title: 'Équipements agroalimentaires', desc: 'Mélangeurs industriels, hachoirs à viande, trancheuses de légumes, marmites de cuisson, systèmes de blanchiment et lignes complètes de préparation alimentaire.', badge: '' },
        { title: 'Systèmes de remplissage et scellage', desc: 'Remplisseuses automatiques pour liquides et pâtes, doseuses de poudre, scelleuses de gobelets, boucheuses, scelleuses à induction et remplisseuses de tubes.', badge: '' },
        { title: 'Convoyage et automatisation', desc: 'Convoyeurs à bande, élévateurs à godets, alimentateurs à vis, robots pick-and-place, palettiseurs et systèmes de contrôle de ligne intégrés PLC.', badge: '' },
        { title: 'Machines sur mesure', desc: 'Conception OEM, dimensions personnalisées, matériaux spéciaux, capacité de production modifiée et ingénierie spécifique à l\'application.', badge: 'Équipe d\'ingénierie' }
      ],
      cta: 'Besoin d\'aide pour choisir ? Consultation gratuite.',
      ctaBtn: 'Contacter nos ingénieurs',
    },
    es: {
      kicker: 'CATÁLOGO DE MAQUINARIA',
      title: 'Nuestra maquinaria industrial',
      desc: 'Explore nuestra gama completa de equipos industriales. Desde empaque y procesamiento de alimentos hasta sistemas de automatización a medida — todos fabricados en Taiwán con certificación CE.',
      cats: [
        { title: 'Maquinaria de empaque', desc: 'Envasadoras VFFS y HFFS, empacadoras de bolsas, selladoras al vacío, termoencogibles, encajonadoras y pesadoras multicabezal para productos en polvo, granulados, líquidos y sólidos.', badge: 'Más popular' },
        { title: 'Equipos de procesamiento de alimentos', desc: 'Mezcladoras industriales, picadoras de carne, cortadoras de verduras, marmitas de cocción, sistemas de escaldado y líneas completas de preparación de alimentos.', badge: '' },
        { title: 'Sistemas de llenado y sellado', desc: 'Llenadoras automáticas de líquidos y pastas, dosificadoras de polvo, selladoras de vasos, taponadoras, selladoras por inducción y llenadoras de tubos.', badge: '' },
        { title: 'Transporte y automatización', desc: 'Transportadores de banda, elevadores de cangilones, alimentadores de tornillo, robots pick-and-place, paletizadores y sistemas de control de línea integrados con PLC.', badge: '' },
        { title: 'Maquinaria personalizada', desc: 'Diseño OEM, dimensiones personalizadas, materiales especiales, capacidad de producción modificada e ingeniería específica para cada aplicación.', badge: 'Equipo de ingeniería' }
      ],
      cta: '¿Necesita ayuda para elegir? Consulta gratuita.',
      ctaBtn: 'Contactar a nuestros ingenieros',
    },
    pt: {
      kicker: 'CATÁLOGO DE MÁQUINAS',
      title: 'Nossas Máquinas Industriais',
      desc: 'Navegue por nossa linha completa de equipamentos industriais. De embalagem e processamento de alimentos a sistemas de automação sob medida — todos fabricados em Taiwan com certificação CE.',
      cats: [
        { title: 'Máquinas de Embalagem', desc: 'VFFS, HFFS, embalagem em sachês, seladoras a vácuo, embalagem termocontrátil, encaixotadoras e pesadoras multicabeçotes para produtos em pó, grânulos, líquidos e sólidos.', badge: 'Mais Popular' },
        { title: 'Equipamentos de Processamento de Alimentos', desc: 'Misturadores industriais, moedores de carne, fatiadores de vegetais, caldeirões de cozimento, sistemas de branqueamento e linhas completas de preparo de alimentos.', badge: '' },
        { title: 'Sistemas de Envase e Selagem', desc: 'Envasadoras automáticas de líquidos, pastas e pós, seladoras de copos, tampadoras de garrafas, seladoras por indução e máquinas de envase de tubos.', badge: '' },
        { title: 'Transporte e Automação', desc: 'Transportadores de correia, elevadores de caçamba, alimentadores helicoidais, robôs pick-and-place, paletizadores e sistemas de controle de linha integrados com PLC.', badge: '' },
        { title: 'Máquinas Personalizadas', desc: 'Projeto OEM, dimensões personalizadas, materiais especiais, capacidade de produção modificada e engenharia específica para aplicação.', badge: 'Equipe de Engenharia' }
      ],
      cta: 'Precisa de ajuda para escolher? Consulta gratuita.',
      ctaBtn: 'Fale com nossos engenheiros',
    },
    ko: {
      kicker: '기계 카탈로그',
      title: '우리의 산업 기계',
      desc: '전체 산업 장비를 둘러보세요. 포장 및 식품 가공부터 맞춤 자동화 시스템까지 — 모두 대만에서 CE 인증으로 제조됩니다.',
      cats: [
        { title: '포장 기계', desc: 'VFFS, HFFS, 파우치 포장, 진공 포장기, 수축 포장기, 카톤 포장기, 멀티헤드 계량기 — 분말, 과립, 액체, 고체 제품용.', badge: '인기 제품' },
        { title: '식품 가공 장비', desc: '산업용 믹서, 육류 분쇄기, 채소 슬라이서, 조리 솥, 블랜칭 시스템, 완전 식품 준비 라인.', badge: '' },
        { title: '충전 및 밀봉 시스템', desc: '자동 액체/페이스트 충전기, 분말 계량기, 컵 실러, 캡핑기, 인덕션 실러, 튜브 충전기.', badge: '' },
        { title: '컨베이어 및 자동화', desc: '벨트 컨베이어, 버킷 엘리베이터, 스크류 피더, 픽앤플레이스 로봇, 팔레타이저, PLC 통합 라인 제어 시스템.', badge: '' },
        { title: '맞춤 기계', desc: 'OEM 설계, 맞춤 치수, 특수 소재, 생산 능력 변경, 용도별 엔지니어링.', badge: '엔지니어링 팀' }
      ],
      cta: '선택에 도움이 필요하신가요? 무료 상담을 받으세요.',
      ctaBtn: '엔지니어에게 문의',
    },
    ja: {
      kicker: '機械カタログ',
      title: '当社の産業機械',
      desc: '産業機器の全ラインナップをご覧ください。包装・食品加工からカスタム自動化システムまで — すべて台湾でCE認証取得のもと製造しています。',
      cats: [
        { title: '包装機械', desc: 'VFFS、HFFS、パウチ包装、真空シーラー、シュリンク包装、カートンパッカー、マルチヘッド計量機 — 粉末、顆粒、液体、固体製品に対応。', badge: '人気商品' },
        { title: '食品加工機器', desc: '産業用ミキサー、ミートグラインダー、野菜スライサー、調理釜、ブランチングシステム、完全な食品調理ライン。', badge: '' },
        { title: '充填・シールシステム', desc: '自動液体充填機、ペースト充填機、粉末計量機、カップシーラー、ボトルキャッパー、インダクションシーラー、チューブ充填機。', badge: '' },
        { title: 'コンベア・自動化', desc: 'ベルトコンベア、バケットエレベーター、スクリューフィーダー、ピック&プレースロボット、パレタイザー、PLC統合ライン制御システム。', badge: '' },
        { title: 'カスタム機械', desc: 'OEM設計、カスタム寸法、特殊素材、生産能力変更、用途別エンジニアリング。', badge: 'エンジニアリングチーム' }
      ],
      cta: '選定にお困りですか？無料相談をご利用ください。',
      ctaBtn: 'エンジニアに相談',
    },
    ar: {
      kicker: 'كتالوج الآلات',
      title: 'آلاتنا الصناعية',
      desc: 'تصفح مجموعتنا الكاملة من المعدات الصناعية. من التعبئة والتغليف وتصنيع الأغذية إلى أنظمة الأتمتة المخصصة — جميعها مصنعة في تايوان مع شهادة CE.',
      cats: [
        { title: 'آلات التعبئة والتغليف', desc: 'آلات VFFS وHFFS، تعبئة الأكياس، آلات التغليف بالتفريغ، التغليف الحراري، تعبئة الكراتين والميزان متعدد الرؤوس للمنتجات المسحوقة والحبيبية والسائلة والصلبة.', badge: 'الأكثر طلبًا' },
        { title: 'معدات تصنيع الأغذية', desc: 'خلاطات صناعية، مفارم لحوم، قطّاعات خضروات، أوعية طهي، أنظمة سلق وخطوط تحضير أغذية متكاملة.', badge: '' },
        { title: 'أنظمة التعبئة والختم', desc: 'آلات تعبئة السوائل والمعاجين الأوتوماتيكية، جرعات المساحيق، آلات ختم الأكواب، آلات التغطية، آلات الختم بالحث وآلات تعبئة الأنابيب.', badge: '' },
        { title: 'النقل والأتمتة', desc: 'ناقلات سير، رافعات دلو، مغذيات لولبية، روبوتات التقاط ووضع، آلات تكديس وأنظمة تحكم خطوط متكاملة مع PLC.', badge: '' },
        { title: 'آلات مخصصة', desc: 'تصميم OEM، أبعاد مخصصة، مواد خاصة، سعة إنتاج معدلة وهندسة خاصة بالتطبيق.', badge: 'فريق هندسي' }
      ],
      cta: 'هل تحتاج مساعدة في الاختيار؟ استشارة مجانية.',
      ctaBtn: 'تواصل مع مهندسينا',
    },
    th: {
      kicker: 'แคตตาล็อกเครื่องจักร',
      title: 'เครื่องจักรอุตสาหกรรมของเรา',
      desc: 'เรียกดูอุปกรณ์อุตสาหกรรมทั้งหมดของเรา ตั้งแต่บรรจุภัณฑ์และแปรรูปอาหาร ไปจนถึงระบบอัตโนมัติที่ออกแบบเฉพาะ — ผลิตในไต้หวันพร้อมการรับรอง CE',
      cats: [
        { title: 'เครื่องบรรจุภัณฑ์', desc: 'VFFS, HFFS, บรรจุซองสำเร็จรูป, เครื่องซีลสุญญากาศ, เครื่องห่อหด, เครื่องบรรจุกล่อง และเครื่องชั่งหลายหัว สำหรับผลิตภัณฑ์ผง, เม็ด, ของเหลว และของแข็ง', badge: 'ยอดนิยม' },
        { title: 'อุปกรณ์แปรรูปอาหาร', desc: 'เครื่องผสมอุตสาหกรรม, เครื่องบดเนื้อ, เครื่องหั่นผัก, กระทะตุ๋น, ระบบลวก และสายการเตรียมอาหารครบวงจร', badge: '' },
        { title: 'ระบบบรรจุและซีล', desc: 'เครื่องบรรจุของเหลว/ครีมอัตโนมัติ, เครื่องตวงผง, เครื่องซีลถ้วย, เครื่องปิดฝาขวด, เครื่องซีลแบบเหนี่ยวนำ และเครื่องบรรจุหลอด', badge: '' },
        { title: 'สายพานและระบบอัตโนมัติ', desc: 'สายพานลำเลียง, ลิฟต์ถัง, สกรูป้อน, หุ่นยนต์หยิบและวาง, เครื่องเรียงพาเลท และระบบควบคุมสายการผลิตแบบ PLC', badge: '' },
        { title: 'เครื่องจักรออกแบบเฉพาะ', desc: 'ออกแบบ OEM, ขนาดตามสั่ง, วัสดุพิเศษ, ปรับกำลังการผลิต และวิศวกรรมเฉพาะงาน', badge: 'ทีมวิศวกรรม' }
      ],
      cta: 'ต้องการความช่วยเหลือในการเลือก? ปรึกษาฟรี',
      ctaBtn: 'ติดต่อวิศวกรของเรา',
    },
    vi: {
      kicker: 'DANH MỤC MÁY MÓC',
      title: 'Máy móc công nghiệp của chúng tôi',
      desc: 'Khám phá toàn bộ dòng thiết bị công nghiệp. Từ đóng gói và chế biến thực phẩm đến hệ thống tự động hóa tùy chỉnh — tất cả được sản xuất tại Đài Loan với chứng nhận CE.',
      cats: [
        { title: 'Máy đóng gói', desc: 'VFFS, HFFS, đóng gói túi làm sẵn, máy hút chân không, máy co màng, máy đóng thùng carton và cân đa đầu cho sản phẩm bột, hạt, lỏng và rắn.', badge: 'Phổ biến nhất' },
        { title: 'Thiết bị chế biến thực phẩm', desc: 'Máy trộn công nghiệp, máy xay thịt, máy cắt rau, nồi nấu, hệ thống chần và dây chuyền chế biến thực phẩm hoàn chỉnh.', badge: '' },
        { title: 'Hệ thống chiết rót và hàn kín', desc: 'Máy chiết rót tự động cho chất lỏng, kem, bột, máy dán nắp cốc, máy đóng nắp chai, máy hàn kín cảm ứng và máy chiết rót tuýp.', badge: '' },
        { title: 'Băng tải và tự động hóa', desc: 'Băng tải, gàu tải, vít tải, robot gắp đặt, máy xếp pallet và hệ thống điều khiển dây chuyền tích hợp PLC.', badge: '' },
        { title: 'Máy móc tùy chỉnh', desc: 'Thiết kế OEM, kích thước tùy chỉnh, vật liệu đặc biệt, công suất điều chỉnh và kỹ thuật chuyên dụng.', badge: 'Đội ngũ kỹ thuật' }
      ],
      cta: 'Cần hỗ trợ lựa chọn? Tư vấn miễn phí.',
      ctaBtn: 'Liên hệ kỹ sư',
    },
    de: {
      kicker: 'MASCHINENKATALOG',
      title: 'Unsere Industriemaschinen',
      desc: 'Entdecken Sie unsere gesamte Palette an Industrieanlagen. Von Verpackung und Lebensmittelverarbeitung bis hin zu maßgeschneiderten Automatisierungssystemen — alle in Taiwan mit CE-Zertifizierung gefertigt.',
      cats: [
        { title: 'Verpackungsmaschinen', desc: 'VFFS, HFFS, Beutelverpackung, Vakuumversiegler, Schrumpffolienmaschinen, Kartonpacker und Mehrkopfwaagen für Pulver-, Granulat-, Flüssig- und Festprodukte.', badge: 'Beliebteste' },
        { title: 'Lebensmittelverarbeitungsanlagen', desc: 'Industriemischer, Fleischwölfe, Gemüseschneider, Kochkessel, Blanchieranlagen und komplette Zubereitungslinien.', badge: '' },
        { title: 'Abfüll- und Versiegelungssysteme', desc: 'Automatische Flüssigkeits-, Pasten- und Pulverabfüller, Becherversiegler, Flaschenverschließer, Induktionsversiegler und Tubenfüllmaschinen.', badge: '' },
        { title: 'Förder- und Automatisierungstechnik', desc: 'Bandförderer, Becherwerke, Schneckenförderer, Pick-and-Place-Roboter, Palettierer und PLC-integrierte Liniensteuerungen.', badge: '' },
        { title: 'Sondermaschinen', desc: 'OEM-Design, Sondermaße, Spezialmaterialien, angepasste Produktionskapazität und anwendungsspezifische Konstruktion.', badge: 'Ingenieurteam' }
      ],
      cta: 'Brauchen Sie Hilfe bei der Auswahl? Kostenlose Beratung.',
      ctaBtn: 'Unsere Ingenieure kontaktieren',
    }
  }

  const t = content[lang] || content['en']
  const categoryHrefs = [
    `/${lang}/machinery/packaging`,
    `/${lang}/machinery/food-processing`,
    `/${lang}/machinery/filling-sealing`,
    `/${lang}/machinery/conveying-automation`,
    `/${lang}/machinery/custom`,
  ]

  return (
    <>
      <PageHero
        kicker={t.kicker}
        title={t.title}
        desc={t.desc}
        image={{ src: catalogHero, alt: 'Industrial machinery catalog', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {t.cats.map((c: any, i: number) => (
              <Link
                key={i}
                href={categoryHrefs[i] || `/${lang}/machinery`}
                className="group relative rounded-2xl bg-white p-8 shadow-elev-1 ring-1 ring-gray-200/60 transition hover:shadow-elev-2 hover:ring-accent-200"
              >
                <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={categoryPhotos[i]}
                    alt={`${c.title} photo`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 92vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/10 via-transparent to-transparent" />
                </div>
                {c.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">{c.badge}</span>
                )}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-950 text-white">
                  {categoryIcons[i]}
                </div>
                <h2 className="mt-5 text-xl font-bold text-gray-950">{c.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{c.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent-600 group-hover:text-accent-700">
                  {({ en: 'View Details', cn: '查看详情', zh: '查看詳情', fr: 'Voir les détails', es: 'Ver detalles', pt: 'Ver detalhes', ko: '상세 보기', ja: '詳細を見る', ar: 'عرض التفاصيل', th: 'ดูรายละเอียด', vi: 'Xem chi tiết', de: 'Details ansehen' } as Record<string,string>)[lang] || 'View Details'}
                  <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-brand-950 p-8 text-center sm:p-12">
            <p className="text-xl font-bold text-white">{t.cta}</p>
            <div className="mt-6">
              <ButtonLink href={`/${lang}/contact`} size="lg">{t.ctaBtn}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
