import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'

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
    en: 'Browse the full machinery catalog: packaging machines, food processing equipment, filling & sealing systems, conveying automation, and custom builds.',
    cn: '浏览全系列机械目录：包装机、食品加工设备、灌装封口系统、输送自动化与定制方案。',
    zh: '瀏覽全系列機械目錄：包裝機、食品加工設備、灌裝封口系統、輸送自動化與客製方案。',
    fr: 'Parcourez le catalogue : machines d’emballage, équipements agroalimentaires, remplissage/scellage, convoyage/automatisation et solutions sur mesure.',
    es: 'Explore el catálogo: empaque, procesamiento de alimentos, llenado/sellado, automatización de transporte y soluciones a medida.',
    pt: 'Veja o catálogo: embalagem, processamento de alimentos, envase/selagem, automação de transporte e soluções sob medida.',
    ko: '전체 카탈로그: 포장, 식품가공, 충전/밀봉, 컨베이어 자동화, 맞춤 설계.',
    ja: '機械カタログ：包装、食品加工、充填・シール、搬送自動化、カスタム対応。',
    ar: 'استعرض الكتالوج: آلات التعبئة والتغليف، معدات الأغذية، التعبئة/الختم، الأتمتة والحلول المخصصة.',
    th: 'ดูแคตตาล็อก: บรรจุภัณฑ์ แปรรูปอาหาร บรรจุ/ซีล ลำเลียงอัตโนมัติ และงานสั่งทำ',
    vi: 'Danh mục máy: đóng gói, chế biến thực phẩm, chiết rót/hàn kín, tự động hóa băng tải và giải pháp tùy chỉnh.',
    de: 'Katalog: Verpackung, Lebensmitteltechnik, Abfüllen/Verschließen, Fördertechnik/Automatisierung und Sonderlösungen.',
  }
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: (titles as Record<string,string>)[l] || titles.en,
    description: (descriptions as Record<string,string>)[l] || descriptions.en,
    pathname: '/machinery',
    type: 'website',
  })
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
      desc: 'Browse machine families by application: packaging, food processing, filling/sealing, conveying/automation, and custom builds. Each category links to practical configurations and selection guides.',
      cats: [
        { title: 'Packaging Machinery', desc: 'VFFS, HFFS, pouch packaging, vacuum sealers, shrink wrappers, carton packers, and multi-head weighers for powder, granule, liquid, and solid products.', badge: 'Most Popular' },
        { title: 'Food Processing Equipment', desc: 'Industrial mixers, meat grinders, vegetable slicers, cooking kettles, blanching systems, and complete food preparation lines.', badge: '' },
        { title: 'Filling & Sealing Systems', desc: 'Automatic liquid fillers, paste fillers, powder dosers, cup sealers, bottle cappers, induction sealers, and tube filling machines.', badge: '' },
        { title: 'Conveying & Automation', desc: 'Belt conveyors, bucket elevators, screw feeders, pick-and-place robots, palletizers, and PLC-integrated line control systems.', badge: '' },
        { title: 'Customized Machinery', desc: 'OEM machinery design, custom dimensions, special materials, modified output capacity, and application-specific engineering.', badge: 'Engineering Team' }
      ],
      cta: 'Send your product, packaging format, and target output. We will shortlist the right machine types and options.',
      ctaBtn: 'Contact Our Engineers',
    },
    cn: {
      kicker: '机械目录',
      title: '我们的工业机械',
      desc: '按应用场景浏览设备目录：包装、食品加工、灌装封口、输送自动化与定制方案。每个分类都对应常见配置与选型要点。',
      cats: [
        { title: '包装机械', desc: '立式/卧式充填封口机、袋装机、真空封口机、热缩包装机、装箱机和多头秤，适用于粉末、颗粒、液体和固体产品。', badge: '最受欢迎' },
        { title: '食品加工设备', desc: '工业搅拌机、绞肉机、切菜机、蒸煮锅、漂烫系统和完整食品备料产线。', badge: '' },
        { title: '灌装与封口系统', desc: '自动液体灌装机、膏体灌装机、粉末计量机、杯盖封口机、瓶盖旋盖机和管装充填机。', badge: '' },
        { title: '输送与自动化', desc: '皮带输送机、斗式提升机、螺旋给料机、机械手、码垛机和PLC集成控制系统。', badge: '' },
        { title: '定制机械', desc: 'OEM设计、定制尺寸、特殊材料、改装产能和应用专属工程。', badge: '工程团队' }
      ],
      cta: '提供产品、包装形式与目标产能，我们将给出机型方向与可选配置清单。',
      ctaBtn: '联系我们的工程师',
    },
    zh: {
      kicker: '機械目錄',
      title: '我們的工業機械',
      desc: '依應用情境瀏覽設備目錄：包裝、食品加工、灌裝封口、輸送自動化與客製方案。每個分類都對應常見配置與選型重點。',
      cats: [
        { title: '包裝機械', desc: '立式/臥式充填封口機、袋裝機、真空封口機、熱縮包裝機、裝箱機和多頭秤，適用於粉末、顆粒、液體和固體產品。', badge: '最受歡迎' },
        { title: '食品加工設備', desc: '工業攪拌機、絞肉機、切菜機、蒸煮鍋、漂燙系統和完整食品備料產線。', badge: '' },
        { title: '灌裝與封口系統', desc: '自動液體灌裝機、膏體灌裝機、粉末計量機、杯蓋封口機、瓶蓋旋蓋機和管裝充填機。', badge: '' },
        { title: '輸送與自動化', desc: '皮帶輸送機、斗式提升機、螺旋給料機、機械手、碼垛機和PLC整合控制系統。', badge: '' },
        { title: '客製機械', desc: 'OEM設計、客製尺寸、特殊材料、改裝產能和應用專屬工程。', badge: '工程團隊' }
      ],
      cta: '提供產品、包材形式與目標產能，我們會整理機型方向與可選配置清單。',
      ctaBtn: '聯繫我們的工程師',
    },
    fr: {
      kicker: 'CATALOGUE MACHINES',
      title: 'Nos machines industrielles',
      desc: 'Parcourez les familles de machines par usage : emballage, agroalimentaire, remplissage/scellage, convoyage/automatisation et sur-mesure. Chaque catégorie regroupe des configurations et des points de sélection.',
      cats: [
        { title: 'Machines d\'emballage', desc: 'Ensacheuses VFFS et HFFS, conditionneuses de sachets, scelleuses sous vide, machines de rétraction, encaisseuses et peseuses multi-têtes pour produits en poudre, granulés, liquides et solides.', badge: 'Les plus demandées' },
        { title: 'Équipements agroalimentaires', desc: 'Mélangeurs industriels, hachoirs à viande, trancheuses de légumes, marmites de cuisson, systèmes de blanchiment et lignes complètes de préparation alimentaire.', badge: '' },
        { title: 'Systèmes de remplissage et scellage', desc: 'Remplisseuses automatiques pour liquides et pâtes, doseuses de poudre, scelleuses de gobelets, boucheuses, scelleuses à induction et remplisseuses de tubes.', badge: '' },
        { title: 'Convoyage et automatisation', desc: 'Convoyeurs à bande, élévateurs à godets, alimentateurs à vis, robots pick-and-place, palettiseurs et systèmes de contrôle de ligne intégrés PLC.', badge: '' },
        { title: 'Machines sur mesure', desc: 'Conception OEM, dimensions personnalisées, matériaux spéciaux, capacité de production modifiée et ingénierie spécifique à l\'application.', badge: 'Équipe d\'ingénierie' }
      ],
      cta: 'Indiquez produit, format d’emballage et cadence cible. Nous vous proposons une short-list de solutions et d’options.',
      ctaBtn: 'Contacter nos ingénieurs',
    },
    es: {
      kicker: 'CATÁLOGO DE MAQUINARIA',
      title: 'Nuestra maquinaria industrial',
      desc: 'Explore familias de máquinas por aplicación: empaque, procesamiento de alimentos, llenado/sellado, transporte/automatización y soluciones a medida. Cada categoría reúne configuraciones prácticas y criterios de selección.',
      cats: [
        { title: 'Maquinaria de empaque', desc: 'Envasadoras VFFS y HFFS, empacadoras de bolsas, selladoras al vacío, termoencogibles, encajonadoras y pesadoras multicabezal para productos en polvo, granulados, líquidos y sólidos.', badge: 'Más popular' },
        { title: 'Equipos de procesamiento de alimentos', desc: 'Mezcladoras industriales, picadoras de carne, cortadoras de verduras, marmitas de cocción, sistemas de escaldado y líneas completas de preparación de alimentos.', badge: '' },
        { title: 'Sistemas de llenado y sellado', desc: 'Llenadoras automáticas de líquidos y pastas, dosificadoras de polvo, selladoras de vasos, taponadoras, selladoras por inducción y llenadoras de tubos.', badge: '' },
        { title: 'Transporte y automatización', desc: 'Transportadores de banda, elevadores de cangilones, alimentadores de tornillo, robots pick-and-place, paletizadores y sistemas de control de línea integrados con PLC.', badge: '' },
        { title: 'Maquinaria personalizada', desc: 'Diseño OEM, dimensiones personalizadas, materiales especiales, capacidad de producción modificada e ingeniería específica para cada aplicación.', badge: 'Equipo de ingeniería' }
      ],
      cta: 'Comparta producto, formato de empaque y velocidad objetivo. Le proponemos una lista corta de soluciones y opciones.',
      ctaBtn: 'Contactar a nuestros ingenieros',
    },
    pt: {
      kicker: 'CATÁLOGO DE MÁQUINAS',
      title: 'Nossas Máquinas Industriais',
      desc: 'Navegue por famílias de máquinas por aplicação: embalagem, alimentos, envase/selagem, transporte/automação e sob medida. Cada categoria reúne configurações práticas e critérios de seleção.',
      cats: [
        { title: 'Máquinas de Embalagem', desc: 'VFFS, HFFS, embalagem em sachês, seladoras a vácuo, embalagem termocontrátil, encaixotadoras e pesadoras multicabeçotes para produtos em pó, grânulos, líquidos e sólidos.', badge: 'Mais Popular' },
        { title: 'Equipamentos de Processamento de Alimentos', desc: 'Misturadores industriais, moedores de carne, fatiadores de vegetais, caldeirões de cozimento, sistemas de branqueamento e linhas completas de preparo de alimentos.', badge: '' },
        { title: 'Sistemas de Envase e Selagem', desc: 'Envasadoras automáticas de líquidos, pastas e pós, seladoras de copos, tampadoras de garrafas, seladoras por indução e máquinas de envase de tubos.', badge: '' },
        { title: 'Transporte e Automação', desc: 'Transportadores de correia, elevadores de caçamba, alimentadores helicoidais, robôs pick-and-place, paletizadores e sistemas de controle de linha integrados com PLC.', badge: '' },
        { title: 'Máquinas Personalizadas', desc: 'Projeto OEM, dimensões personalizadas, materiais especiais, capacidade de produção modificada e engenharia específica para aplicação.', badge: 'Equipe de Engenharia' }
      ],
      cta: 'Informe produto, formato e produção-alvo. Enviamos uma lista curta de soluções e opções.',
      ctaBtn: 'Fale com nossos engenheiros',
    },
    ko: {
      kicker: '기계 카탈로그',
      title: '우리의 산업 기계',
      desc: '용도별 장비군을 확인하세요: 포장, 식품가공, 충전/밀봉, 컨베이어/자동화, 맞춤 제작. 각 카테고리에 실제 구성 예시와 선정 기준이 정리되어 있습니다.',
      cats: [
        { title: '포장 기계', desc: 'VFFS, HFFS, 파우치 포장, 진공 포장기, 수축 포장기, 카톤 포장기, 멀티헤드 계량기 — 분말, 과립, 액체, 고체 제품용.', badge: '인기 제품' },
        { title: '식품 가공 장비', desc: '산업용 믹서, 육류 분쇄기, 채소 슬라이서, 조리 솥, 블랜칭 시스템, 완전 식품 준비 라인.', badge: '' },
        { title: '충전 및 밀봉 시스템', desc: '자동 액체/페이스트 충전기, 분말 계량기, 컵 실러, 캡핑기, 인덕션 실러, 튜브 충전기.', badge: '' },
        { title: '컨베이어 및 자동화', desc: '벨트 컨베이어, 버킷 엘리베이터, 스크류 피더, 픽앤플레이스 로봇, 팔레타이저, PLC 통합 라인 제어 시스템.', badge: '' },
        { title: '맞춤 기계', desc: 'OEM 설계, 맞춤 치수, 특수 소재, 생산 능력 변경, 용도별 엔지니어링.', badge: '엔지니어링 팀' }
      ],
      cta: '제품, 포장 형식, 목표 생산량을 알려주시면 기종/옵션을 추려드립니다.',
      ctaBtn: '엔지니어에게 문의',
    },
    ja: {
      kicker: '機械カタログ',
      title: '当社の産業機械',
      desc: '用途別に機械カテゴリを確認できます：包装、食品加工、充填・シール、搬送・自動化、カスタム対応。各カテゴリに実用的な構成例と選定ポイントをまとめています。',
      cats: [
        { title: '包装機械', desc: 'VFFS、HFFS、パウチ包装、真空シーラー、シュリンク包装、カートンパッカー、マルチヘッド計量機 — 粉末、顆粒、液体、固体製品に対応。', badge: '人気商品' },
        { title: '食品加工機器', desc: '産業用ミキサー、ミートグラインダー、野菜スライサー、調理釜、ブランチングシステム、完全な食品調理ライン。', badge: '' },
        { title: '充填・シールシステム', desc: '自動液体充填機、ペースト充填機、粉末計量機、カップシーラー、ボトルキャッパー、インダクションシーラー、チューブ充填機。', badge: '' },
        { title: 'コンベア・自動化', desc: 'ベルトコンベア、バケットエレベーター、スクリューフィーダー、ピック&プレースロボット、パレタイザー、PLC統合ライン制御システム。', badge: '' },
        { title: 'カスタム機械', desc: 'OEM設計、カスタム寸法、特殊素材、生産能力変更、用途別エンジニアリング。', badge: 'エンジニアリングチーム' }
      ],
      cta: '製品、包装形態、目標能力をご共有ください。機種とオプションを絞り込みます。',
      ctaBtn: 'エンジニアに相談',
    },
    ar: {
      kicker: 'كتالوج الآلات',
      title: 'آلاتنا الصناعية',
      desc: 'تصفح فئات الماكينات حسب الاستخدام: التعبئة والتغليف، تصنيع الأغذية، التعبئة/الختم، النقل/الأتمتة، والحلول المخصصة. كل فئة تعرض تكوينات عملية ونقاط اختيار.',
      cats: [
        { title: 'آلات التعبئة والتغليف', desc: 'آلات VFFS وHFFS، تعبئة الأكياس، آلات التغليف بالتفريغ، التغليف الحراري، تعبئة الكراتين والميزان متعدد الرؤوس للمنتجات المسحوقة والحبيبية والسائلة والصلبة.', badge: 'الأكثر طلبًا' },
        { title: 'معدات تصنيع الأغذية', desc: 'خلاطات صناعية، مفارم لحوم، قطّاعات خضروات، أوعية طهي، أنظمة سلق وخطوط تحضير أغذية متكاملة.', badge: '' },
        { title: 'أنظمة التعبئة والختم', desc: 'آلات تعبئة السوائل والمعاجين الأوتوماتيكية، جرعات المساحيق، آلات ختم الأكواب، آلات التغطية، آلات الختم بالحث وآلات تعبئة الأنابيب.', badge: '' },
        { title: 'النقل والأتمتة', desc: 'ناقلات سير، رافعات دلو، مغذيات لولبية، روبوتات التقاط ووضع، آلات تكديس وأنظمة تحكم خطوط متكاملة مع PLC.', badge: '' },
        { title: 'آلات مخصصة', desc: 'تصميم OEM، أبعاد مخصصة، مواد خاصة، سعة إنتاج معدلة وهندسة خاصة بالتطبيق.', badge: 'فريق هندسي' }
      ],
      cta: 'شارك نوع المنتج وشكل العبوة والقدرة المطلوبة. سنرسل قائمة قصيرة بالحلول والخيارات المناسبة.',
      ctaBtn: 'تواصل مع مهندسينا',
    },
    th: {
      kicker: 'แคตตาล็อกเครื่องจักร',
      title: 'เครื่องจักรอุตสาหกรรมของเรา',
      desc: 'ดูหมวดเครื่องจักรตามการใช้งาน: บรรจุภัณฑ์ แปรรูปอาหาร บรรจุ/ซีล ลำเลียง/อัตโนมัติ และงานสั่งทำ แต่ละหมวดมีตัวอย่างการจัดสเปกและเกณฑ์เลือกเครื่อง',
      cats: [
        { title: 'เครื่องบรรจุภัณฑ์', desc: 'VFFS, HFFS, บรรจุซองสำเร็จรูป, เครื่องซีลสุญญากาศ, เครื่องห่อหด, เครื่องบรรจุกล่อง และเครื่องชั่งหลายหัว สำหรับผลิตภัณฑ์ผง, เม็ด, ของเหลว และของแข็ง', badge: 'ยอดนิยม' },
        { title: 'อุปกรณ์แปรรูปอาหาร', desc: 'เครื่องผสมอุตสาหกรรม, เครื่องบดเนื้อ, เครื่องหั่นผัก, กระทะตุ๋น, ระบบลวก และสายการเตรียมอาหารครบวงจร', badge: '' },
        { title: 'ระบบบรรจุและซีล', desc: 'เครื่องบรรจุของเหลว/ครีมอัตโนมัติ, เครื่องตวงผง, เครื่องซีลถ้วย, เครื่องปิดฝาขวด, เครื่องซีลแบบเหนี่ยวนำ และเครื่องบรรจุหลอด', badge: '' },
        { title: 'สายพานและระบบอัตโนมัติ', desc: 'สายพานลำเลียง, ลิฟต์ถัง, สกรูป้อน, หุ่นยนต์หยิบและวาง, เครื่องเรียงพาเลท และระบบควบคุมสายการผลิตแบบ PLC', badge: '' },
        { title: 'เครื่องจักรออกแบบเฉพาะ', desc: 'ออกแบบ OEM, ขนาดตามสั่ง, วัสดุพิเศษ, ปรับกำลังการผลิต และวิศวกรรมเฉพาะงาน', badge: 'ทีมวิศวกรรม' }
      ],
      cta: 'แจ้งสินค้า รูปแบบบรรจุภัณฑ์ และกำลังการผลิตเป้าหมาย เราจะคัดรุ่น/ออปชันที่เหมาะสมให้',
      ctaBtn: 'ติดต่อวิศวกรของเรา',
    },
    vi: {
      kicker: 'DANH MỤC MÁY MÓC',
      title: 'Máy móc công nghiệp của chúng tôi',
      desc: 'Xem các nhóm máy theo ứng dụng: đóng gói, chế biến thực phẩm, chiết rót/hàn kín, băng tải/tự động hóa và máy tùy chỉnh. Mỗi nhóm có cấu hình thực tế và tiêu chí chọn máy.',
      cats: [
        { title: 'Máy đóng gói', desc: 'VFFS, HFFS, đóng gói túi làm sẵn, máy hút chân không, máy co màng, máy đóng thùng carton và cân đa đầu cho sản phẩm bột, hạt, lỏng và rắn.', badge: 'Phổ biến nhất' },
        { title: 'Thiết bị chế biến thực phẩm', desc: 'Máy trộn công nghiệp, máy xay thịt, máy cắt rau, nồi nấu, hệ thống chần và dây chuyền chế biến thực phẩm hoàn chỉnh.', badge: '' },
        { title: 'Hệ thống chiết rót và hàn kín', desc: 'Máy chiết rót tự động cho chất lỏng, kem, bột, máy dán nắp cốc, máy đóng nắp chai, máy hàn kín cảm ứng và máy chiết rót tuýp.', badge: '' },
        { title: 'Băng tải và tự động hóa', desc: 'Băng tải, gàu tải, vít tải, robot gắp đặt, máy xếp pallet và hệ thống điều khiển dây chuyền tích hợp PLC.', badge: '' },
        { title: 'Máy móc tùy chỉnh', desc: 'Thiết kế OEM, kích thước tùy chỉnh, vật liệu đặc biệt, công suất điều chỉnh và kỹ thuật chuyên dụng.', badge: 'Đội ngũ kỹ thuật' }
      ],
      cta: 'Gửi sản phẩm, kiểu bao bì và mục tiêu công suất. Chúng tôi sẽ đề xuất danh sách giải pháp và tùy chọn phù hợp.',
      ctaBtn: 'Liên hệ kỹ sư',
    },
    de: {
      kicker: 'MASCHINENKATALOG',
      title: 'Unsere Industriemaschinen',
      desc: 'Überblick nach Anwendung: Verpackung, Lebensmitteltechnik, Abfüllen/Verschließen, Fördertechnik/Automatisierung und Sondermaschinen. Jede Kategorie enthält praxisnahe Konfigurationen und Auswahlkriterien.',
      cats: [
        { title: 'Verpackungsmaschinen', desc: 'VFFS, HFFS, Beutelverpackung, Vakuumversiegler, Schrumpffolienmaschinen, Kartonpacker und Mehrkopfwaagen für Pulver-, Granulat-, Flüssig- und Festprodukte.', badge: 'Beliebteste' },
        { title: 'Lebensmittelverarbeitungsanlagen', desc: 'Industriemischer, Fleischwölfe, Gemüseschneider, Kochkessel, Blanchieranlagen und komplette Zubereitungslinien.', badge: '' },
        { title: 'Abfüll- und Versiegelungssysteme', desc: 'Automatische Flüssigkeits-, Pasten- und Pulverabfüller, Becherversiegler, Flaschenverschließer, Induktionsversiegler und Tubenfüllmaschinen.', badge: '' },
        { title: 'Förder- und Automatisierungstechnik', desc: 'Bandförderer, Becherwerke, Schneckenförderer, Pick-and-Place-Roboter, Palettierer und PLC-integrierte Liniensteuerungen.', badge: '' },
        { title: 'Sondermaschinen', desc: 'OEM-Design, Sondermaße, Spezialmaterialien, angepasste Produktionskapazität und anwendungsspezifische Konstruktion.', badge: 'Ingenieurteam' }
      ],
      cta: 'Senden Sie Produkt, Verpackungsformat und Zielleistung. Wir erstellen eine Shortlist mit passenden Lösungen und Optionen.',
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
  const label =
    ({
      en: 'Machinery',
      cn: '机械目录',
      zh: '機械目錄',
      fr: 'Catalogue',
      es: 'Catálogo',
      pt: 'Catálogo',
      ko: '기계',
      ja: '機械',
      ar: 'الآلات',
      th: 'เครื่องจักร',
      vi: 'Danh mục máy',
      de: 'Katalog',
    } as Record<string, string>)[lang] || 'Machinery'

  const pageUrl = `${SITE_URL}/${lang}/machinery`
  const itemListId = `${pageUrl}#itemlist`
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': pageUrl,
    url: pageUrl,
    inLanguage: LANG_META[lang].htmlLang,
    name: t.title,
    description: t.desc,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': itemListId },
  }

  const categoryListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': itemListId,
    inLanguage: LANG_META[lang].htmlLang,
    name: t.title,
    isPartOf: { '@id': pageUrl },
    itemListElement: t.cats.map((c: any, i: number) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      item: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}${categoryHrefs[i] || `/${lang}/machinery`}`,
        url: `${SITE_URL}${categoryHrefs[i] || `/${lang}/machinery`}`,
        name: c.title,
        description: c.desc,
      },
    })),
  }

  return (
    <>
      <JsonLd data={[collectionSchema, categoryListSchema]} />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        desc={t.desc}
        image={{ src: catalogHero, alt: 'Industrial machinery catalog', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      {/* Intro sentence + top CTAs */}
      <section className="py-10 sm:py-12">
        <Container>
          <Breadcrumbs lang={lang} items={[{ label, href: `/${lang}/machinery` }]} />
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-lg font-medium text-gray-700">
              {({
                en: 'Share your product, packaging format, and target output. We will shortlist machine types and options that fit.',
                cn: '提供产品、包装形式与目标产能，我们会整理机型方向与选配建议。',
                zh: '提供產品、包材形式與目標產能，我們會整理機型方向與選配建議。',
                fr: 'Indiquez produit, format et cadence cible. Nous proposons une short-list de solutions et d’options.',
                es: 'Comparta producto, formato y velocidad objetivo. Proponemos una lista corta de soluciones y opciones.',
                pt: 'Informe produto, formato e produção-alvo. Enviamos uma lista curta de soluções e opções.',
                ko: '제품, 포장 형식, 목표 생산량을 알려주시면 기종/옵션을 추려드립니다.',
                ja: '製品・包装形態・目標能力をご共有いただければ、機種とオプションを絞り込みます。',
                ar: 'شارك نوع المنتج وشكل العبوة والقدرة المطلوبة. سنرسل قائمة قصيرة بالحلول والخيارات المناسبة.',
                th: 'แจ้งสินค้า รูปแบบบรรจุภัณฑ์ และกำลังการผลิตเป้าหมาย เราจะคัดรุ่น/ออปชันที่เหมาะสมให้',
                vi: 'Gửi sản phẩm, kiểu bao bì và mục tiêu công suất. Chúng tôi sẽ đề xuất danh sách phù hợp.',
                de: 'Senden Sie Produkt, Verpackungsformat und Zielleistung. Wir erstellen eine Shortlist mit Optionen.',
              } as Record<string, string>)[lang] || 'Share your product, packaging format, and target output. We will shortlist machine types and options that fit.'}
            </p>
            <div className="flex shrink-0 gap-3">
              <ButtonLink href={`/${lang}/recommend`} size="md">
                {({ en: 'Get a Recommendation', cn: '获取推荐', zh: '取得推薦', fr: 'Obtenir une recommandation', es: 'Obtener recomendación', pt: 'Obter recomendação', ko: '추천 받기', ja: '推薦を受ける', ar: 'احصل على توصية', th: 'รับคำแนะนำ', vi: 'Nhận đề xuất', de: 'Empfehlung erhalten' } as Record<string, string>)[lang] || 'Get a Recommendation'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="md">
                {({ en: 'Contact Us', cn: '联系我们', zh: '聯繫我們', fr: 'Contactez-nous', es: 'Contáctenos', pt: 'Contate-nos', ko: '문의하기', ja: 'お問い合わせ', ar: 'اتصل بنا', th: 'ติดต่อเรา', vi: 'Liên hệ', de: 'Kontakt' } as Record<string, string>)[lang] || 'Contact Us'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

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

      {/* How to Select */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            {({ en: 'How to Select the Right Machine', cn: '如何选择合适的机器', zh: '如何選擇合適的機器', fr: 'Comment sélectionner la bonne machine', es: 'Cómo seleccionar la máquina correcta', pt: 'Como selecionar a máquina certa', ko: '적합한 기계 선택 방법', ja: '適切な機械の選び方', ar: 'كيفية اختيار الآلة المناسبة', th: 'วิธีเลือกเครื่องจักรที่เหมาะสม', vi: 'Cách chọn máy phù hợp', de: 'So wählen Sie die richtige Maschine' } as Record<string, string>)[lang] || 'How to Select the Right Machine'}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" /></svg>
                ),
                title: ({ en: 'Product State', cn: '产品状态', zh: '產品狀態', fr: 'État du produit', es: 'Estado del producto', pt: 'Estado do produto', ko: '제품 상태', ja: '製品の状態', ar: 'حالة المنتج', th: 'สถานะผลิตภัณฑ์', vi: 'Trạng thái sản phẩm', de: 'Produktzustand' } as Record<string, string>)[lang] || 'Product State',
                body: ({ en: 'Powder, liquid, granule, or solid — each state calls for a different machine family. Identifying this first narrows your options immediately.', cn: '粉末、液体、颗粒或固体——每种状态需要不同的机器系列。首先确定这一点可以立即缩小您的选择范围。', zh: '粉末、液體、顆粒或固體——每種狀態需要不同的機器系列。首先確定這一點可以立即縮小您的選擇範圍。', fr: 'Poudre, liquide, granulé ou solide — chaque état nécessite une famille de machines différente. Identifier cela en premier réduit immédiatement vos options.', es: 'Polvo, líquido, granulado o sólido — cada estado requiere una familia de máquinas diferente. Identificar esto primero reduce inmediatamente sus opciones.', pt: 'Pó, líquido, grânulo ou sólido — cada estado requer uma família de máquinas diferente. Identificar isso primeiro reduz imediatamente suas opções.', ko: '분말, 액체, 과립, 고체 — 각 상태마다 다른 기계 계열이 필요합니다. 이것을 먼저 파악하면 선택지를 즉시 좁힐 수 있습니다.', ja: '粉末、液体、顆粒、固体 — 状態ごとに異なる機械ファミリーが必要です。まずこれを特定することで選択肢が絞られます。', ar: 'مسحوق أو سائل أو حبيبي أو صلب — لكل حالة عائلة آلات مختلفة. تحديد ذلك أولاً يضيق خياراتك فوراً.', th: 'ผง ของเหลว เม็ด หรือของแข็ง — แต่ละสถานะต้องการเครื่องจักรที่แตกต่างกัน การระบุสิ่งนี้ก่อนจะช่วยลดตัวเลือกได้ทันที', vi: 'Bột, lỏng, hạt, hay rắn — mỗi trạng thái cần một dòng máy khác nhau. Xác định điều này trước sẽ thu hẹp lựa chọn của bạn ngay lập tức.', de: 'Pulver, Flüssigkeit, Granulat oder Feststoff — jeder Zustand erfordert eine andere Maschinenfamilie. Dies zuerst zu identifizieren schränkt Ihre Optionen sofort ein.' } as Record<string, string>)[lang] || 'Powder, liquid, granule, or solid — each state calls for a different machine family.',
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
                ),
                title: ({ en: 'Output Target', cn: '产量目标', zh: '產量目標', fr: 'Objectif de production', es: 'Objetivo de producción', pt: 'Meta de produção', ko: '생산 목표', ja: '生産目標', ar: 'هدف الإنتاج', th: 'เป้าหมายการผลิต', vi: 'Mục tiêu sản lượng', de: 'Produktionsziel' } as Record<string, string>)[lang] || 'Output Target',
                body: ({ en: 'Bags per hour determines your automation level. Low volume (< 1,000/hr) suits semi-auto; medium to high volume (> 3,000/hr) calls for fully automatic lines.', cn: '每小时袋数决定了您的自动化水平。低产量（< 1,000/小时）适合半自动；中高产量（> 3,000/小时）需要全自动产线。', zh: '每小時袋數決定了您的自動化水準。低產量（< 1,000/小時）適合半自動；中高產量（> 3,000/小時）需要全自動產線。', fr: 'Les sacs par heure déterminent votre niveau d\'automatisation. Faible volume (< 1 000/h) : semi-auto ; volume moyen à élevé (> 3 000/h) : lignes entièrement automatiques.', es: 'Las bolsas por hora determinan su nivel de automatización. Bajo volumen (< 1,000/h): semi-auto; volumen medio-alto (> 3,000/h): líneas totalmente automáticas.', pt: 'Sacos por hora determina seu nível de automação. Baixo volume (< 1.000/h): semi-auto; volume médio a alto (> 3.000/h): linhas totalmente automáticas.', ko: '시간당 포대 수가 자동화 수준을 결정합니다. 저용량(< 1,000/시간)은 반자동, 중고용량(> 3,000/시간)은 완전 자동 라인이 필요합니다.', ja: '1時間あたりの袋数が自動化レベルを決定します。少量（< 1,000/時間）は半自動、中〜大量（> 3,000/時間）は全自動ラインが必要です。', ar: 'الأكياس في الساعة تحدد مستوى الأتمتة. الحجم المنخفض (< 1,000/ساعة) يناسب شبه الآلي؛ الحجم المتوسط إلى العالي (> 3,000/ساعة) يتطلب خطوطاً آلية بالكامل.', th: 'ถุงต่อชั่วโมงกำหนดระดับระบบอัตโนมัติของคุณ ปริมาณน้อย (< 1,000/ชม.) เหมาะกับกึ่งอัตโนมัติ ปริมาณปานกลางถึงสูง (> 3,000/ชม.) ต้องการสายการผลิตอัตโนมัติเต็มรูปแบบ', vi: 'Túi mỗi giờ quyết định mức độ tự động hóa. Sản lượng thấp (< 1.000/giờ) phù hợp bán tự động; sản lượng trung bình đến cao (> 3.000/giờ) cần dây chuyền hoàn toàn tự động.', de: 'Beutel pro Stunde bestimmt Ihren Automatisierungsgrad. Geringes Volumen (< 1.000/Std.): Halbautomatisch; mittleres bis hohes Volumen (> 3.000/Std.): Vollautomatische Linien.' } as Record<string, string>)[lang] || 'Bags per hour determines your automation level.',
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                ),
                title: ({ en: 'Packaging Format', cn: '包装形式', zh: '包裝形式', fr: 'Format d\'emballage', es: 'Formato de empaque', pt: 'Formato de embalagem', ko: '포장 형태', ja: '包装形態', ar: 'شكل التعبئة', th: 'รูปแบบบรรจุภัณฑ์', vi: 'Định dạng đóng gói', de: 'Verpackungsformat' } as Record<string, string>)[lang] || 'Packaging Format',
                body: ({ en: 'Pouch, bottle, sachet, or bulk bag — the container format dictates the machine type. VFFS for flexible pouches, filling systems for bottles, FFS for bulk bags.', cn: '袋、瓶、小袋或大袋——容器形式决定机器类型。柔性袋用VFFS，瓶装用灌装系统，大袋用FFS。', zh: '袋、瓶、小袋或大袋——容器形式決定機器類型。柔性袋用VFFS，瓶裝用灌裝系統，大袋用FFS。', fr: 'Sachet, bouteille, stick ou big bag — le format du contenant dicte le type de machine. VFFS pour sachets souples, systèmes de remplissage pour bouteilles, FFS pour grands sacs.', es: 'Bolsa, botella, sobre o big bag — el formato del contenedor dicta el tipo de máquina. VFFS para bolsas flexibles, sistemas de llenado para botellas, FFS para sacos grandes.', pt: 'Sachê, garrafa, saquinho ou bag — o formato do contêiner dita o tipo de máquina. VFFS para embalagens flexíveis, sistemas de envase para garrafas, FFS para bags grandes.', ko: '파우치, 병, 사셰, 벌크백 — 용기 형태가 기계 유형을 결정합니다. 유연성 파우치는 VFFS, 병은 충전 시스템, 벌크백은 FFS.', ja: 'パウチ、ボトル、サシェ、バルクバッグ — 容器の形態が機械タイプを決定します。フレキシブルパウチはVFFS、ボトルは充填システム、バルクバッグはFFS。', ar: 'كيس أو زجاجة أو غلاف أو كيس كبير — شكل الحاوية يحدد نوع الآلة. VFFS للأكياس المرنة وأنظمة التعبئة للزجاجات وFFS للأكياس الكبيرة.', th: 'ถุง ขวด ซอง หรือถุงใหญ่ — รูปแบบภาชนะกำหนดประเภทเครื่องจักร VFFS สำหรับถุงยืดหยุ่น ระบบบรรจุสำหรับขวด FFS สำหรับถุงใหญ่', vi: 'Túi, chai, gói, hay bao lớn — định dạng hộp đựng quyết định loại máy. VFFS cho túi mềm, hệ thống chiết rót cho chai, FFS cho bao lớn.', de: 'Beutel, Flasche, Sachet oder Big Bag — das Behälterformat bestimmt den Maschinentyp. VFFS für Flexibelbeutel, Abfüllsysteme für Flaschen, FFS für Großsäcke.' } as Record<string, string>)[lang] || 'Pouch, bottle, sachet, or bulk bag — the container format dictates the machine type.',
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: ({ en: 'Automation Budget', cn: '自动化预算', zh: '自動化預算', fr: 'Budget d\'automatisation', es: 'Presupuesto de automatización', pt: 'Orçamento de automação', ko: '자동화 예산', ja: '自動化予算', ar: 'ميزانية الأتمتة', th: 'งบประมาณระบบอัตโนมัติ', vi: 'Ngân sách tự động hóa', de: 'Automatisierungsbudget' } as Record<string, string>)[lang] || 'Automation Budget',
                body: ({ en: 'Semi-auto machines cost less upfront but require more labor. Fully automatic lines recover their cost through labor savings and consistency at scale. Consider total cost of ownership over 3–5 years.', cn: '半自动机器前期成本较低但需要更多人工。全自动产线通过人工节省和规模一致性来回收成本。考虑3-5年的总拥有成本。', zh: '半自動機器前期成本較低但需要更多人工。全自動產線通過人工節省和規模一致性來回收成本。考慮3-5年的總擁有成本。', fr: 'Les machines semi-automatiques coûtent moins cher au départ mais nécessitent plus de main-d\'œuvre. Les lignes automatiques récupèrent leur coût grâce aux économies de main-d\'œuvre. Considérez le coût total de possession sur 3 à 5 ans.', es: 'Las máquinas semi-automáticas cuestan menos por adelantado pero requieren más mano de obra. Las líneas totalmente automáticas recuperan su costo a través de ahorro laboral. Considere el costo total de propiedad a 3-5 años.', pt: 'Máquinas semi-automáticas custam menos inicialmente mas requerem mais mão de obra. Linhas automáticas recuperam seu custo através de economias trabalhistas. Considere o custo total de propriedade em 3–5 anos.', ko: '반자동 기계는 초기 비용이 낮지만 더 많은 인력이 필요합니다. 완전 자동 라인은 인건비 절감과 일관성으로 비용을 회수합니다. 3~5년 총 소유 비용을 고려하세요.', ja: '半自動機械は初期費用が低いですが、より多くの労働力が必要です。全自動ラインは人件費削減と安定性でコストを回収します。3〜5年の総所有コストを検討してください。', ar: 'الآلات شبه الآلية تكلف أقل مقدماً لكنها تتطلب عمالة أكثر. الخطوط الآلية بالكامل تستعيد تكلفتها من خلال توفير العمالة. ضع في اعتبارك التكلفة الإجمالية للملكية على مدى 3-5 سنوات.', th: 'เครื่องกึ่งอัตโนมัติมีต้นทุนเริ่มต้นต่ำกว่าแต่ต้องใช้แรงงานมากกว่า สายการผลิตอัตโนมัติเต็มรูปแบบชดเชยต้นทุนผ่านการประหยัดแรงงาน พิจารณาต้นทุนการเป็นเจ้าของรวมตลอด 3-5 ปี', vi: 'Máy bán tự động chi phí ban đầu thấp hơn nhưng cần nhiều lao động hơn. Dây chuyền tự động hoàn toàn thu hồi chi phí qua tiết kiệm nhân công. Xem xét tổng chi phí sở hữu trong 3–5 năm.', de: 'Halbautomatische Maschinen kosten weniger im Voraus, benötigen aber mehr Personal. Vollautomatische Linien amortisieren sich durch Lohnkosteneinsparungen. Betrachten Sie die Gesamtbetriebskosten über 3–5 Jahre.' } as Record<string, string>)[lang] || 'Semi-auto machines cost less upfront but require more labor.',
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                ),
                title: ({ en: 'Voltage & Certification', cn: '电压与认证', zh: '電壓與認證', fr: 'Tension et certification', es: 'Voltaje y certificación', pt: 'Tensão e certificação', ko: '전압 및 인증', ja: '電圧と認証', ar: 'الجهد والشهادات', th: 'แรงดันไฟฟ้าและการรับรอง', vi: 'Điện áp và chứng nhận', de: 'Spannung und Zertifizierung' } as Record<string, string>)[lang] || 'Voltage & Certification',
                body: ({ en: 'Confirm your local voltage (220V/380V 50Hz or 110V/480V 60Hz) and required certifications (CE for EU, others as applicable) before ordering. Errors here cause expensive delays.', cn: '订购前确认您当地的电压（220V/380V 50Hz或110V/480V 60Hz）和所需认证（欧盟CE等）。这里的错误会导致昂贵的延误。', zh: '訂購前確認您當地的電壓（220V/380V 50Hz或110V/480V 60Hz）和所需認證（歐盟CE等）。這裡的錯誤會導致昂貴的延誤。', fr: 'Confirmez votre tension locale (220V/380V 50Hz ou 110V/480V 60Hz) et les certifications requises (CE pour l\'UE) avant de commander. Les erreurs ici causent des retards coûteux.', es: 'Confirme su voltaje local (220V/380V 50Hz o 110V/480V 60Hz) y certificaciones requeridas (CE para UE) antes de ordenar. Los errores aquí causan demoras costosas.', pt: 'Confirme sua tensão local (220V/380V 50Hz ou 110V/480V 60Hz) e certificações necessárias (CE para UE) antes de encomendar. Erros aqui causam atrasos caros.', ko: '주문 전 현지 전압(220V/380V 50Hz 또는 110V/480V 60Hz)과 필요한 인증(EU의 경우 CE 등)을 확인하세요. 여기서의 오류는 비용이 많이 드는 지연을 초래합니다.', ja: '注文前に現地電圧（220V/380V 50Hzまたは110V/480V 60Hz）と必要な認証（EUの場合CE等）を確認してください。ここでのエラーは高額な遅延を引き起こします。', ar: 'قم بتأكيد جهدك المحلي (220V/380V 50Hz أو 110V/480V 60Hz) والشهادات المطلوبة (CE للاتحاد الأوروبي) قبل الطلب. الأخطاء هنا تسبب تأخيرات مكلفة.', th: 'ยืนยันแรงดันไฟฟ้าในท้องถิ่น (220V/380V 50Hz หรือ 110V/480V 60Hz) และใบรับรองที่ต้องการ (CE สำหรับ EU) ก่อนสั่งซื้อ ข้อผิดพลาดที่นี่ทำให้เกิดความล่าช้าที่มีค่าใช้จ่ายสูง', vi: 'Xác nhận điện áp địa phương (220V/380V 50Hz hoặc 110V/480V 60Hz) và chứng nhận cần thiết (CE cho EU) trước khi đặt hàng. Sai sót ở đây gây ra sự chậm trễ tốn kém.', de: 'Bestätigen Sie Ihre lokale Spannung (220V/380V 50Hz oder 110V/480V 60Hz) und erforderliche Zertifizierungen (CE für EU) vor der Bestellung. Fehler hier verursachen kostspielige Verzögerungen.' } as Record<string, string>)[lang] || 'Confirm your local voltage and required certifications before ordering.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-elev-1 ring-1 ring-gray-200/60">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-950 text-white">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Manufacturer credentials */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            {({ en: 'Why SunGene', cn: '为何选择SunGene', zh: '為何選擇SunGene', fr: 'Pourquoi SunGene', es: 'Por qué SunGene', pt: 'Por que SunGene', ko: 'SunGene를 선택하는 이유', ja: 'なぜSunGeneか', ar: 'لماذا SunGene', th: 'ทำไมต้องเลือก SunGene', vi: 'Tại sao chọn SunGene', de: 'Warum SunGene' } as Record<string, string>)[lang] || 'Why SunGene'}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: ({ en: 'Taiwan Manufacturer', cn: '台湾制造商', zh: '台灣製造商', fr: 'Fabricant taïwanais', es: 'Fabricante taiwanés', pt: 'Fabricante taiwanês', ko: '대만 제조사', ja: '台湾メーカー', ar: 'مصنّع تايواني', th: 'ผู้ผลิตไต้หวัน', vi: 'Nhà sản xuất Đài Loan', de: 'Taiwan-Hersteller' } as Record<string, string>)[lang] || 'Taiwan Manufacturer', detail: ({ en: 'Factory-direct pricing, no middlemen', cn: '工厂直销价格，无中间商', zh: '工廠直銷價格，無中間商', fr: 'Prix direct usine, pas d\'intermédiaires', es: 'Precio directo de fábrica, sin intermediarios', pt: 'Preço direto da fábrica, sem intermediários', ko: '공장 직판 가격, 중간 업체 없음', ja: '工場直販価格、仲介なし', ar: 'أسعار مباشرة من المصنع، بدون وسطاء', th: 'ราคาตรงจากโรงงาน ไม่มีตัวกลาง', vi: 'Giá trực tiếp từ nhà máy, không qua trung gian', de: 'Fabrikdirektpreise, keine Zwischenhändler' } as Record<string, string>)[lang] || 'Factory-direct pricing, no middlemen' },
              { label: ({ en: 'CE Certified', cn: 'CE认证', zh: 'CE認證', fr: 'Certifié CE', es: 'Certificado CE', pt: 'Certificado CE', ko: 'CE 인증', ja: 'CE認証済み', ar: 'معتمد CE', th: 'ได้รับรอง CE', vi: 'Chứng nhận CE', de: 'CE-zertifiziert' } as Record<string, string>)[lang] || 'CE Certified', detail: ({ en: 'Standard on all export machines', cn: '所有出口机器的标准配置', zh: '所有出口機器的標準配置', fr: 'Standard sur toutes les machines d\'exportation', es: 'Estándar en todas las máquinas de exportación', pt: 'Padrão em todas as máquinas de exportação', ko: '모든 수출 기계의 표준', ja: 'すべての輸出機械の標準', ar: 'معيار على جميع آلات التصدير', th: 'มาตรฐานสำหรับเครื่องจักรส่งออกทั้งหมด', vi: 'Tiêu chuẩn trên tất cả máy xuất khẩu', de: 'Standard bei allen Exportmaschinen' } as Record<string, string>)[lang] || 'Standard on all export machines' },
              { label: ({ en: 'SUS304 / SUS316L Stainless', cn: 'SUS304/316L不锈钢', zh: 'SUS304/316L不鏽鋼', fr: 'Inox SUS304 / SUS316L', es: 'Acero inoxidable SUS304/SUS316L', pt: 'Inox SUS304 / SUS316L', ko: 'SUS304/SUS316L 스테인리스', ja: 'SUS304/SUS316Lステンレス', ar: 'فولاذ مقاوم للصدأ SUS304/SUS316L', th: 'สแตนเลส SUS304/SUS316L', vi: 'Inox SUS304/SUS316L', de: 'Edelstahl SUS304 / SUS316L' } as Record<string, string>)[lang] || 'SUS304 / SUS316L Stainless', detail: ({ en: 'Food-contact parts meet hygiene standards', cn: '食品接触部件符合卫生标准', zh: '食品接觸部件符合衛生標準', fr: 'Les pièces en contact alimentaire respectent les normes d\'hygiène', es: 'Las piezas en contacto con alimentos cumplen normas de higiene', pt: 'Peças em contato com alimentos atendem normas de higiene', ko: '식품 접촉 부품이 위생 기준을 충족합니다', ja: '食品接触部品が衛生基準を満たす', ar: 'الأجزاء المتلامسة مع الغذاء تلبي معايير النظافة', th: 'ชิ้นส่วนที่สัมผัสอาหารตรงตามมาตรฐานสุขอนามัย', vi: 'Bộ phận tiếp xúc thực phẩm đáp ứng tiêu chuẩn vệ sinh', de: 'Lebensmittelberührende Teile erfüllen Hygienestandards' } as Record<string, string>)[lang] || 'Food-contact parts meet hygiene standards' },
              { label: ({ en: 'Voltage Customization', cn: '电压定制', zh: '電壓定制', fr: 'Personnalisation de tension', es: 'Personalización de voltaje', pt: 'Personalização de tensão', ko: '전압 맞춤 설정', ja: '電圧カスタマイズ', ar: 'تخصيص الجهد الكهربائي', th: 'การปรับแต่งแรงดันไฟฟ้า', vi: 'Tùy chỉnh điện áp', de: 'Spannungsanpassung' } as Record<string, string>)[lang] || 'Voltage Customization', detail: '220V/380V 50Hz · 110V/220V/480V 60Hz' },
              { label: ({ en: '15+ Years Export Experience', cn: '15年以上出口经验', zh: '15年以上出口經驗', fr: '15+ ans d\'expérience à l\'exportation', es: '15+ años de experiencia en exportación', pt: '15+ anos de experiência em exportação', ko: '15년 이상 수출 경험', ja: '15年以上の輸出経験', ar: '15+ سنة من الخبرة التصديرية', th: 'ประสบการณ์ส่งออก 15+ ปี', vi: '15+ năm kinh nghiệm xuất khẩu', de: '15+ Jahre Exporterfahrung' } as Record<string, string>)[lang] || '15+ Years Export Experience', detail: ({ en: 'Customers in 60+ countries', cn: '60多个国家的客户', zh: '60多個國家的客戶', fr: 'Clients dans 60+ pays', es: 'Clientes en más de 60 países', pt: 'Clientes em 60+ países', ko: '60개국 이상의 고객', ja: '60カ国以上の顧客', ar: 'عملاء في أكثر من 60 دولة', th: 'ลูกค้าในกว่า 60 ประเทศ', vi: 'Khách hàng tại 60+ quốc gia', de: 'Kunden in 60+ Ländern' } as Record<string, string>)[lang] || 'Customers in 60+ countries' },
              { label: ({ en: 'Custom Engineering', cn: '定制工程', zh: '定制工程', fr: 'Ingénierie sur mesure', es: 'Ingeniería personalizada', pt: 'Engenharia personalizada', ko: '맞춤 엔지니어링', ja: 'カスタムエンジニアリング', ar: 'هندسة مخصصة', th: 'วิศวกรรมออกแบบเฉพาะ', vi: 'Kỹ thuật tùy chỉnh', de: 'Individuelle Konstruktion' } as Record<string, string>)[lang] || 'Custom Engineering', detail: ({ en: 'Dimensions, output, materials all configurable', cn: '尺寸、产量、材料均可配置', zh: '尺寸、產量、材料均可配置', fr: 'Dimensions, débit, matériaux tous configurables', es: 'Dimensiones, producción, materiales todos configurables', pt: 'Dimensões, produção, materiais todos configuráveis', ko: '치수, 생산량, 재료 모두 구성 가능', ja: '寸法、生産量、材料すべて設定可能', ar: 'الأبعاد والإنتاج والمواد كلها قابلة للتهيئة', th: 'ขนาด กำลังการผลิต วัสดุ ทั้งหมดกำหนดค่าได้', vi: 'Kích thước, sản lượng, vật liệu đều có thể cấu hình', de: 'Abmessungen, Leistung, Materialien alle konfigurierbar' } as Record<string, string>)[lang] || 'Dimensions, output, materials all configurable' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl bg-gray-50 p-5 ring-1 ring-gray-200">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-950 text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-950">{item.label}</p>
                  <p className="mt-0.5 text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            {({ en: 'Frequently Asked Questions', cn: '常见问题', zh: '常見問題', fr: 'Questions fréquentes', es: 'Preguntas frecuentes', pt: 'Perguntas frequentes', ko: '자주 묻는 질문', ja: 'よくある質問', ar: 'الأسئلة الشائعة', th: 'คำถามที่พบบ่อย', vi: 'Câu hỏi thường gặp', de: 'Häufige Fragen' } as Record<string, string>)[lang] || 'Frequently Asked Questions'}
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: ({ en: 'Do you make custom machines?', cn: '你们制造定制机器吗？', zh: '你們製造定制機器嗎？', fr: 'Faites-vous des machines sur mesure ?', es: '¿Fabrican máquinas personalizadas?', pt: 'Vocês fabricam máquinas personalizadas?', ko: '맞춤 기계를 제조합니까?', ja: 'カスタム機械は製造できますか？', ar: 'هل تصنعون آلات مخصصة؟', th: 'คุณทำเครื่องจักรแบบกำหนดเองไหม?', vi: 'Bạn có làm máy tùy chỉnh không?', de: 'Stellen Sie Sondermaschinen her?' } as Record<string, string>)[lang] || 'Do you make custom machines?',
                a: ({ en: 'Yes — dimensions, output, automation level, voltage, and materials are all configurable. Our engineering team works with your specifications to deliver a machine built for your exact application.', cn: '是的——尺寸、产量、自动化程度、电压和材料均可配置。我们的工程团队根据您的规格为您的具体应用打造机器。', zh: '是的——尺寸、產量、自動化程度、電壓和材料均可配置。我們的工程團隊根據您的規格為您的具體應用打造機器。', fr: 'Oui — les dimensions, la production, le niveau d\'automatisation, la tension et les matériaux sont tous configurables. Notre équipe d\'ingénieurs travaille avec vos spécifications pour livrer une machine conçue pour votre application exacte.', es: 'Sí — dimensiones, producción, nivel de automatización, voltaje y materiales son todos configurables. Nuestro equipo de ingeniería trabaja con sus especificaciones para entregar una máquina construida para su aplicación exacta.', pt: 'Sim — dimensões, produção, nível de automação, tensão e materiais são todos configuráveis. Nossa equipe de engenharia trabalha com suas especificações para entregar uma máquina construída para sua aplicação exata.', ko: '예 — 치수, 생산량, 자동화 수준, 전압 및 재료 모두 구성 가능합니다. 엔지니어링 팀이 귀하의 사양으로 작업하여 정확한 용도에 맞는 기계를 제공합니다.', ja: 'はい — 寸法、生産量、自動化レベル、電圧、材料はすべて設定可能です。エンジニアリングチームがお客様の仕様に基づき、用途に合った機械を製造します。', ar: 'نعم — الأبعاد والإنتاج ومستوى الأتمتة والجهد والمواد كلها قابلة للتهيئة. يعمل فريق هندستنا مع مواصفاتك لتسليم آلة مبنية لتطبيقك بالضبط.', th: 'ใช่ — ขนาด กำลังการผลิต ระดับระบบอัตโนมัติ แรงดันไฟฟ้า และวัสดุทั้งหมดสามารถกำหนดค่าได้ ทีมวิศวกรรมของเราทำงานร่วมกับข้อกำหนดของคุณเพื่อส่งมอบเครื่องจักรที่สร้างสำหรับการใช้งานของคุณ', vi: 'Có — kích thước, sản lượng, mức độ tự động hóa, điện áp và vật liệu đều có thể cấu hình. Đội ngũ kỹ thuật của chúng tôi làm việc với thông số kỹ thuật của bạn để cung cấp máy được xây dựng cho ứng dụng chính xác của bạn.', de: 'Ja — Abmessungen, Leistung, Automatisierungsgrad, Spannung und Materialien sind alle konfigurierbar. Unser Ingenieurteam arbeitet mit Ihren Spezifikationen, um eine Maschine für Ihre genaue Anwendung zu liefern.' } as Record<string, string>)[lang] || 'Yes — dimensions, output, automation level, voltage, and materials are all configurable.',
              },
              {
                q: ({ en: 'What certifications do your machines carry?', cn: '你们的机器有哪些认证？', zh: '你們的機器有哪些認證？', fr: 'Quelles certifications vos machines portent-elles ?', es: '¿Qué certificaciones tienen sus máquinas?', pt: 'Quais certificações suas máquinas possuem?', ko: '기계에 어떤 인증이 있습니까?', ja: '機械にはどのような認証がありますか？', ar: 'ما هي الشهادات التي تحملها آلاتكم؟', th: 'เครื่องจักรของคุณมีใบรับรองอะไรบ้าง?', vi: 'Máy của bạn có những chứng nhận gì?', de: 'Welche Zertifizierungen haben Ihre Maschinen?' } as Record<string, string>)[lang] || 'What certifications do your machines carry?',
                a: ({ en: 'CE marking is standard on all export machines. ISO quality management. Food-contact parts in SUS304 or SUS316L stainless steel. Additional documentation can be arranged on request.', cn: 'CE标志是所有出口机器的标准配置。ISO质量管理。食品接触部件采用SUS304或SUS316L不锈钢。可根据要求提供附加文件。', zh: 'CE標誌是所有出口機器的標準配置。ISO質量管理。食品接觸部件採用SUS304或SUS316L不鏽鋼。可根據要求提供附加文件。', fr: 'Le marquage CE est standard sur toutes les machines d\'exportation. Gestion de la qualité ISO. Pièces en contact alimentaire en acier inoxydable SUS304 ou SUS316L. Documentation supplémentaire disponible sur demande.', es: 'El marcado CE es estándar en todas las máquinas de exportación. Gestión de calidad ISO. Piezas en contacto con alimentos en acero inoxidable SUS304 o SUS316L. Documentación adicional disponible bajo pedido.', pt: 'A marcação CE é padrão em todas as máquinas de exportação. Gestão de qualidade ISO. Peças em contato com alimentos em aço inoxidável SUS304 ou SUS316L. Documentação adicional disponível sob solicitação.', ko: 'CE 마크는 모든 수출 기계의 표준입니다. ISO 품질 관리. 식품 접촉 부품은 SUS304 또는 SUS316L 스테인리스 스틸. 요청 시 추가 문서 제공 가능합니다.', ja: 'CE マーキングはすべての輸出機械の標準です。ISO品質管理。食品接触部品はSUS304またはSUS316Lステンレス鋼。追加書類はご要望に応じて手配可能です。', ar: 'علامة CE هي معيار على جميع آلات التصدير. إدارة الجودة ISO. الأجزاء المتلامسة مع الغذاء من الفولاذ المقاوم للصدأ SUS304 أو SUS316L. يمكن ترتيب وثائق إضافية عند الطلب.', th: 'CE marking เป็นมาตรฐานสำหรับเครื่องจักรส่งออกทั้งหมด การจัดการคุณภาพ ISO ชิ้นส่วนที่สัมผัสอาหารทำจากสแตนเลส SUS304 หรือ SUS316L สามารถจัดเตรียมเอกสารเพิ่มเติมได้ตามคำขอ', vi: 'CE marking là tiêu chuẩn trên tất cả máy xuất khẩu. Quản lý chất lượng ISO. Bộ phận tiếp xúc thực phẩm bằng inox SUS304 hoặc SUS316L. Có thể cung cấp tài liệu bổ sung theo yêu cầu.', de: 'CE-Kennzeichnung ist Standard bei allen Exportmaschinen. ISO-Qualitätsmanagement. Lebensmittelberührende Teile aus Edelstahl SUS304 oder SUS316L. Zusätzliche Dokumentation auf Anfrage.' } as Record<string, string>)[lang] || 'CE marking is standard on all export machines.',
              },
              {
                q: ({ en: 'What voltage options are available?', cn: '有哪些电压选项？', zh: '有哪些電壓選項？', fr: 'Quelles options de tension sont disponibles ?', es: '¿Qué opciones de voltaje están disponibles?', pt: 'Quais opções de tensão estão disponíveis?', ko: '어떤 전압 옵션이 제공됩니까?', ja: 'どのような電圧オプションが利用可能ですか？', ar: 'ما هي خيارات الجهد المتاحة؟', th: 'มีตัวเลือกแรงดันไฟฟ้าอะไรบ้าง?', vi: 'Có những tùy chọn điện áp nào?', de: 'Welche Spannungsoptionen sind verfügbar?' } as Record<string, string>)[lang] || 'What voltage options are available?',
                a: ({ en: 'We configure to your local standard: 220V/380V 50Hz (EU, Asia), 110V/220V/480V 60Hz (Americas), or other as specified. Confirm voltage, phase, and frequency before placing your order.', cn: '我们根据您的当地标准配置：220V/380V 50Hz（欧盟、亚洲）、110V/220V/480V 60Hz（美洲）或其他规定。下单前确认电压、相位和频率。', zh: '我們根據您的當地標準配置：220V/380V 50Hz（歐盟、亞洲）、110V/220V/480V 60Hz（美洲）或其他規定。下單前確認電壓、相位和頻率。', fr: 'Nous configurons selon votre norme locale : 220V/380V 50Hz (UE, Asie), 110V/220V/480V 60Hz (Amériques), ou autre selon spécification. Confirmez la tension, la phase et la fréquence avant de passer commande.', es: 'Configuramos según su estándar local: 220V/380V 50Hz (UE, Asia), 110V/220V/480V 60Hz (Américas), u otro según especificación. Confirme voltaje, fase y frecuencia antes de hacer su pedido.', pt: 'Configuramos de acordo com seu padrão local: 220V/380V 50Hz (UE, Ásia), 110V/220V/480V 60Hz (Américas), ou outro conforme especificado. Confirme tensão, fase e frequência antes de fazer seu pedido.', ko: '현지 표준에 맞게 구성합니다: 220V/380V 50Hz(EU, 아시아), 110V/220V/480V 60Hz(미주), 또는 지정에 따라. 주문 전 전압, 위상 및 주파수를 확인하세요.', ja: 'お客様の現地標準に合わせて設定します: 220V/380V 50Hz（EU、アジア）、110V/220V/480V 60Hz（アメリカ大陸）、またはその他仕様通り。注文前に電圧、相、周波数をご確認ください。', ar: 'نهيئ وفق معيارك المحلي: 220V/380V 50Hz (الاتحاد الأوروبي، آسيا)، 110V/220V/480V 60Hz (الأمريكتان)، أو غير ذلك حسب التحديد. أكد الجهد والطور والتردد قبل تقديم طلبك.', th: 'เราตั้งค่าตามมาตรฐานในท้องถิ่นของคุณ: 220V/380V 50Hz (EU, เอเชีย), 110V/220V/480V 60Hz (อเมริกา), หรืออื่นๆ ตามที่ระบุ ยืนยันแรงดันไฟฟ้า เฟส และความถี่ก่อนสั่งซื้อ', vi: 'Chúng tôi cấu hình theo tiêu chuẩn địa phương của bạn: 220V/380V 50Hz (EU, Châu Á), 110V/220V/480V 60Hz (Châu Mỹ), hoặc khác theo yêu cầu. Xác nhận điện áp, pha và tần số trước khi đặt hàng.', de: 'Wir konfigurieren nach Ihrem lokalen Standard: 220V/380V 50Hz (EU, Asien), 110V/220V/480V 60Hz (Amerika), oder andere nach Spezifikation. Bestätigen Sie Spannung, Phase und Frequenz vor der Bestellung.' } as Record<string, string>)[lang] || 'We configure to your local standard.',
              },
              {
                q: ({ en: 'What is the minimum order quantity?', cn: '最低订购量是多少？', zh: '最低訂購量是多少？', fr: 'Quelle est la quantité minimale de commande ?', es: '¿Cuál es la cantidad mínima de pedido?', pt: 'Qual é a quantidade mínima de pedido?', ko: '최소 주문 수량은 얼마입니까?', ja: '最低発注数量はいくつですか？', ar: 'ما هو الحد الأدنى لكمية الطلب؟', th: 'ปริมาณการสั่งซื้อขั้นต่ำคือเท่าไร?', vi: 'Số lượng đặt hàng tối thiểu là bao nhiêu?', de: 'Was ist die Mindestbestellmenge?' } as Record<string, string>)[lang] || 'What is the minimum order quantity?',
                a: ({ en: 'MOQ is 1 unit for most machines. We serve both single-machine buyers and production line integrators. No minimum tonnage or volume commitment required.', cn: '大多数机器的最低订购量为1台。我们服务单机购买者和产线集成商。无需最低吨数或量承诺。', zh: '大多數機器的最低訂購量為1台。我們服務單機購買者和產線整合商。無需最低噸數或量承諾。', fr: 'La QMC est de 1 unité pour la plupart des machines. Nous servons aussi bien les acheteurs d\'une seule machine que les intégrateurs de lignes de production. Aucun engagement de tonnage minimum requis.', es: 'El MOQ es de 1 unidad para la mayoría de las máquinas. Atendemos tanto a compradores de una sola máquina como a integradores de líneas de producción. No se requiere compromiso mínimo de volumen.', pt: 'O MOQ é 1 unidade para a maioria das máquinas. Atendemos tanto compradores de uma única máquina quanto integradores de linhas de produção. Nenhum compromisso mínimo de volume necessário.', ko: '대부분의 기계에 대한 MOQ는 1대입니다. 단일 기계 구매자와 생산 라인 통합업체 모두에게 서비스를 제공합니다. 최소 물량 약정이 필요하지 않습니다.', ja: '最低発注数量はほとんどの機械で1台です。単機購入者と生産ライン統合業者の両方にサービスを提供します。最低数量コミットメントは不要です。', ar: 'الحد الأدنى للطلب هو وحدة واحدة لمعظم الآلات. نخدم كلاً من مشتري الآلة الواحدة ومتكاملي خطوط الإنتاج. لا يُشترط أدنى كمية.', th: 'MOQ คือ 1 หน่วยสำหรับเครื่องจักรส่วนใหญ่ เราให้บริการทั้งผู้ซื้อเครื่องจักรเดี่ยวและผู้รวมระบบสายการผลิต ไม่ต้องการข้อผูกมัดปริมาณขั้นต่ำ', vi: 'MOQ là 1 máy cho hầu hết các thiết bị. Chúng tôi phục vụ cả người mua máy đơn lẻ và đơn vị tích hợp dây chuyền sản xuất. Không yêu cầu cam kết số lượng tối thiểu.', de: 'Die Mindestbestellmenge beträgt 1 Einheit für die meisten Maschinen. Wir bedienen sowohl Einzelmaschinenkäufer als auch Produktionslinie-Integratoren. Kein Mindestvolumen erforderlich.' } as Record<string, string>)[lang] || 'MOQ is 1 unit for most machines.',
              },
              {
                q: ({ en: 'How long does production take?', cn: '生产需要多长时间？', zh: '生產需要多長時間？', fr: 'Combien de temps prend la production ?', es: '¿Cuánto tiempo tarda la producción?', pt: 'Quanto tempo leva a produção?', ko: '생산은 얼마나 걸립니까?', ja: '製造にはどのくらいかかりますか？', ar: 'كم يستغرق الإنتاج؟', th: 'การผลิตใช้เวลานานแค่ไหน?', vi: 'Sản xuất mất bao lâu?', de: 'Wie lange dauert die Produktion?' } as Record<string, string>)[lang] || 'How long does production take?',
                a: ({ en: 'Standard machines: 15–30 days from confirmed order. Custom-engineered lines: 45–90 days depending on complexity. Lead time is confirmed at order stage together with factory acceptance test scheduling.', cn: '标准机器：确认订单后15-30天。定制工程产线：视复杂程度45-90天。交货期在订单阶段与工厂验收测试安排一起确认。', zh: '標準機器：確認訂單後15-30天。定制工程產線：視複雜程度45-90天。交貨期在訂單階段與工廠驗收測試安排一起確認。', fr: 'Machines standard : 15–30 jours après confirmation de commande. Lignes sur mesure : 45–90 jours selon la complexité. Le délai est confirmé au stade de la commande avec la planification du test de réception en usine.', es: 'Máquinas estándar: 15–30 días desde pedido confirmado. Líneas de ingeniería personalizada: 45–90 días según complejidad. El plazo se confirma en la etapa de pedido junto con la programación de la prueba de aceptación en fábrica.', pt: 'Máquinas padrão: 15–30 dias após pedido confirmado. Linhas de engenharia personalizada: 45–90 dias dependendo da complexidade. O prazo é confirmado no estágio do pedido junto com o agendamento do teste de aceitação de fábrica.', ko: '표준 기계: 확정 주문 후 15~30일. 맞춤 엔지니어링 라인: 복잡도에 따라 45~90일. 납기는 공장 인수 테스트 일정과 함께 주문 단계에서 확인됩니다.', ja: '標準機械: 注文確定後15〜30日。カスタムエンジニアリングライン: 複雑さによって45〜90日。リードタイムは工場受入テストのスケジュールとともに注文段階で確認されます。', ar: 'الآلات القياسية: 15-30 يوماً من الطلب المؤكد. الخطوط المصممة حسب الطلب: 45-90 يوماً حسب التعقيد. يتم تأكيد وقت التسليم في مرحلة الطلب مع جدولة اختبار قبول المصنع.', th: 'เครื่องจักรมาตรฐาน: 15-30 วันจากคำสั่งซื้อที่ยืนยัน สายการผลิตที่ออกแบบเฉพาะ: 45-90 วันขึ้นอยู่กับความซับซ้อน เวลานำถูกยืนยันในขั้นตอนการสั่งซื้อพร้อมกับการจัดกำหนดการทดสอบการยอมรับโรงงาน', vi: 'Máy tiêu chuẩn: 15–30 ngày từ đơn đặt hàng được xác nhận. Dây chuyền kỹ thuật tùy chỉnh: 45–90 ngày tùy theo độ phức tạp. Thời gian giao hàng được xác nhận ở giai đoạn đặt hàng cùng với lịch kiểm tra chấp nhận nhà máy.', de: 'Standardmaschinen: 15–30 Tage nach Auftragsbestätigung. Sonderangefertigte Linien: 45–90 Tage je nach Komplexität. Die Lieferzeit wird in der Auftragsphase zusammen mit der Fabrikabnahmeprüfungsplanung bestätigt.' } as Record<string, string>)[lang] || 'Standard machines: 15–30 days; custom lines 45–90 days.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-elev-1 ring-1 ring-gray-200/60">
                <h3 className="font-bold text-gray-950">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTAs */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl bg-brand-950 px-8 py-12 text-center sm:px-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {({ en: 'Ready to find the right machine?', cn: '准备好找到合适的机器了吗？', zh: '準備好找到合適的機器了嗎？', fr: 'Prêt à trouver la bonne machine ?', es: '¿Listo para encontrar la máquina correcta?', pt: 'Pronto para encontrar a máquina certa?', ko: '적합한 기계를 찾을 준비가 되셨습니까?', ja: '適切な機械を見つける準備はできていますか？', ar: 'مستعد للعثور على الآلة المناسبة؟', th: 'พร้อมที่จะค้นหาเครื่องจักรที่เหมาะสมแล้วหรือยัง?', vi: 'Sẵn sàng tìm máy phù hợp?', de: 'Bereit, die richtige Maschine zu finden?' } as Record<string, string>)[lang] || 'Ready to find the right machine?'}
            </h2>
            <p className="mt-3 text-brand-200">
              {({ en: 'Tell us your product and production target — we\'ll match you with the right equipment.', cn: '告诉我们您的产品和生产目标——我们将为您匹配合适的设备。', zh: '告訴我們您的產品和生產目標——我們將為您匹配合適的設備。', fr: 'Dites-nous votre produit et votre objectif de production — nous vous associerons au bon équipement.', es: 'Cuéntenos su producto y objetivo de producción — le asociaremos con el equipo correcto.', pt: 'Diga-nos seu produto e meta de produção — combinaremos você com o equipamento certo.', ko: '제품과 생산 목표를 알려주시면 적합한 장비를 매칭해 드리겠습니다.', ja: '製品と生産目標をお知らせください — 最適な機器をマッチングします。', ar: 'أخبرنا بمنتجك وهدف الإنتاج — سنطابقك مع المعدات المناسبة.', th: 'บอกเราเกี่ยวกับผลิตภัณฑ์และเป้าหมายการผลิตของคุณ — เราจะจับคู่คุณกับอุปกรณ์ที่เหมาะสม', vi: 'Hãy cho chúng tôi biết sản phẩm và mục tiêu sản xuất của bạn — chúng tôi sẽ ghép bạn với thiết bị phù hợp.', de: 'Teilen Sie uns Ihr Produkt und Ihr Produktionsziel mit — wir finden das passende Equipment für Sie.' } as Record<string, string>)[lang] || 'Tell us your product and production target.'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href={`/${lang}/recommend`} size="lg">
                {({ en: 'Get a Recommendation', cn: '获取推荐', zh: '取得推薦', fr: 'Obtenir une recommandation', es: 'Obtener recomendación', pt: 'Obter recomendação', ko: '추천 받기', ja: '推薦を受ける', ar: 'احصل على توصية', th: 'รับคำแนะนำ', vi: 'Nhận đề xuất', de: 'Empfehlung erhalten' } as Record<string, string>)[lang] || 'Get a Recommendation'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="soft" size="lg">
                {({ en: 'Contact Us', cn: '联系我们', zh: '聯繫我們', fr: 'Contactez-nous', es: 'Contáctenos', pt: 'Contate-nos', ko: '문의하기', ja: 'お問い合わせ', ar: 'اتصل بنا', th: 'ติดต่อเรา', vi: 'Liên hệ', de: 'Kontakt' } as Record<string, string>)[lang] || 'Contact Us'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
