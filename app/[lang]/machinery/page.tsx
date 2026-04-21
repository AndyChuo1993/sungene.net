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

const metaTitles: Record<string, string> = {
  en: 'Industrial Sourcing Scope | Packaging, Food Processing & Automation',
  cn: '工业采购范围 | 包装、食品加工与自动化',
  zh: '工業採購範圍 | 包裝、食品加工與自動化',
  fr: 'Périmètre de sourcing industriel | Emballage, Agroalimentaire & Automatisation',
  es: 'Alcance del abastecimiento industrial | Empaque, Procesamiento de alimentos y Automatización',
  pt: 'Escopo de Sourcing Industrial | Embalagem, Processamento de Alimentos e Automação',
  ko: '산업 소싱 범위 | 포장, 식품 가공 및 자동화',
  ja: '産業調達範囲 | 包装、食品加工、自動化',
  ar: 'نطاق التوريد الصناعي | التعبئة والتغليف، تصنيع الأغذية والأتمتة',
  th: 'ขอบเขตการจัดหาอุตสาหกรรม | บรรจุภัณฑ์ แปรรูปอาหาร และระบบอัตโนมัติ',
  vi: 'Phạm vi sourcing công nghiệp | Đóng gói, Chế biến thực phẩm & Tự động hóa',
  de: 'Industrie-Sourcing-Bereich | Verpackung, Lebensmittelverarbeitung & Automatisierung',
}

const metaDescs: Record<string, string> = {
  en: 'Technical sourcing for packaging machines, food processing equipment, filling & sealing systems, and automation lines. Engineering evaluation and supplier vetting included.',
  cn: '包装机、食品加工设备、灌装封口系统和自动化线体的技术采购。包含工程评估与供应商审核。',
  zh: '包裝機、食品加工設備、灌裝封口系統和自動化線體的技術採購。包含工程評估與供應商審核。',
  fr: 'Sourcing technique pour machines d’emballage, équipements agroalimentaires et lignes d’automatisation. Évaluation d’ingénierie et audit fournisseurs inclus.',
  es: 'Abastecimiento técnico para empaque, procesamiento de alimentos y líneas de automatización. Incluye evaluación de ingeniería y auditoría de proveedores.',
  pt: 'Sourcing técnico para embalagem, processamento de alimentos e linhas de automação. Inclui avaliação de engenharia e auditoria de fornecedores.',
  ko: '포장 기계, 식품 가공 장비 및 자동화 라인을 위한 기술 소싱. 엔지니어링 평가 및 공급업체 검증 포함.',
  ja: '包装機械、食品加工設備、自動化ラインの技術調達。エンジニアリング評価とサプライヤー審査を含みます。',
  ar: 'التوريد التقني لآلات التعبئة والتغليف ومعدات تصنيع الأغذية وخطوط الأتمتة. يشمل التقييم الهندسي وتدقيق الموردين.',
  th: 'การจัดหาทางเทคนิคสำหรับเครื่องจักรบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร และการบูรณาการไลน์อัตโนมัติ รวมถึงการประเมินทางวิศวกรรมและการตรวจสอบซัพพลายเออร์',
  vi: 'Nguồn cung kỹ thuật cho máy đóng gói, thiết bị chế biến thực phẩm và dây chuyền tự động hóa. Bao gồm đánh giá kỹ thuật và thẩm định nhà cung cấp.',
  de: 'Technisches Sourcing für Verpackungsmaschinen, Lebensmitteltechnik und Automatisierungslinien. Inklusive technischer Bewertung und Lieferantenaudit.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machinery',
    type: 'website',
    keywords: ['industrial sourcing partner', 'machinery procurement Taiwan', 'equipment supplier vetting', 'industrial automation sourcing', 'technical procurement services'],
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
  const metaTitle = metaTitles[lang] || metaTitles.en
  const metaDesc = metaDescs[lang] || metaDescs.en

  const content: Record<string, any> = {
    en: {
      kicker: 'SOURCING SCOPE',
      title: 'Industrial Sourcing Scope',
      desc: 'Technical sourcing by application: packaging, food processing, filling/sealing, and automation. We provide supplier vetting and engineering evaluation for every configuration.',
      cats: [
        { title: 'Packaging Systems', desc: 'VFFS, pouch packaging, vacuum sealers, and carton packers — sourcing for powder, granule, and solid packaging line setups.', badge: 'Top Service' },
        { title: 'Food Processing Equipment', desc: 'Industrial mixers, meat grinders, cooking kettles, and complete food preparation lines from verified technical suppliers.', badge: '' },
        { title: 'Filling & Sealing Lines', desc: 'Automatic liquid fillers, paste fillers, powder dosers, and bottle cappers — integrated for accuracy and reliability.', badge: '' },
        { title: 'Conveying & Automation', desc: 'Belt conveyors, bucket elevators, and pick-and-place robots — sourcing for facility-wide automation and integration.', badge: '' },
        { title: 'Customized Solutions', desc: 'Custom design, custom dimensions, and application-specific engineering — tailored to your unique site constraints.', badge: 'Engineering Team' }
      ],
      cta: 'Share your product, packaging format, and target output. We provide a technical sourcing assessment within 1 business day.',
      ctaBtn: 'Request Sourcing Assessment',
    },
    cn: {
      kicker: '采购范围',
      title: '工业采购范围',
      desc: '按应用场景的技术采购：包装、食品加工、灌装封口与自动化。我们为每种配置提供供应商审核与工程评估。',
      cats: [
        { title: '包装系统', desc: '立式包装、袋装机、真空机与装箱机——为粉末、颗粒与固体包装线体提供采购支持。', badge: '核心服务' },
        { title: '食品加工设备', desc: '工业搅拌机、绞肉机、蒸煮锅与完整食品备料线体，来自经技术验证的供应商。', badge: '' },
        { title: '灌装与封口线', desc: '自动液体灌装、膏体灌装、粉末计量与旋盖系统——整合精度与可靠性。', badge: '' },
        { title: '输送与自动化', desc: '皮带输送、斗式提升与机械手——为全厂自动化与集成提供采购方案。', badge: '' },
        { title: '定制化解决方案', desc: '定制设计、定制尺寸与应用专属工程——为您独特的现场条件量身定制。', badge: '工程团队' }
      ],
      cta: '提供产品、包装形式与目标产能，我们将在1个工作日内提供技术采购评估。',
      ctaBtn: '获取采购评估建议',
    },
    zh: {
      kicker: '採購範圍',
      title: '工業採購範圍',
      desc: '依應用情境的技術採購：包裝、食品加工、灌裝封口與自動化。我們為每種配置提供供應商審核與工程評估。',
      cats: [
        { title: '包裝系統', desc: '立式包裝、袋裝機、真空機與裝箱機——為粉末、顆粒與固體包裝線體提供採購支援。', badge: '核心服務' },
        { title: '食品加工設備', desc: '工業攪拌機、絞肉機、蒸煮鍋與完整食品備料線體，來自經技術驗證的供應商。', badge: '' },
        { title: '灌裝與封口線', desc: '自動液體灌裝、膏體灌裝、粉末計量與旋蓋系統——整合精度與可靠性。', badge: '' },
        { title: '輸送與自動化', desc: '皮帶輸送、斗式提升與機械手——為全廠自動化與整合提供採購方案。', badge: '' },
        { title: '客製化解決方案', desc: '定制設計、客製尺寸與應用專屬工程——為您獨特的現場條件量身定制。', badge: '工程團隊' }
      ],
      cta: '提供產品、包材形式與目標產能，我們將在1個工作日內提供技術採購評估。',
      ctaBtn: '獲取採購評估建議',
    },
    fr: {
      kicker: 'PÉRIMÈTRE SOURCING',
      title: 'Périmètre de sourcing industriel',
      desc: 'Sourcing technique par application : emballage, agroalimentaire, remplissage et automatisation. Nous assurons l\'audit fournisseurs et l\'évaluation technique.',
      cats: [
        { title: 'Systèmes d\'emballage', desc: 'VFFS, ensachage, mise sous vide et encaisseuses — sourcing pour lignes poudre, granulés et solides.', badge: 'Service Clé' },
        { title: 'Équipements agroalimentaires', desc: 'Mélangeurs, hachoirs, marmites et lignes complètes de préparation provenant de fournisseurs vérifiés.', badge: '' },
        { title: 'Lignes de remplissage', desc: 'Remplisseuses liquides, doseuses poudre et boucheuses — intégrées pour la précision et la fiabilité.', badge: '' },
        { title: 'Convoyage et automatisation', desc: 'Convoyeurs, élévateurs et robots pick-and-place — sourcing pour l\'automatisation globale du site.', badge: '' },
        { title: 'Solutions sur mesure', desc: 'Conception sur mesure, dimensions personnalisées et ingénierie spécifique adaptée aux contraintes de votre site.', badge: 'Équipe Ingénierie' }
      ],
      cta: 'Indiquez produit, format et cadence. Nous fournissons une évaluation de sourcing technique sous 1 jour ouvré.',
      ctaBtn: 'Demander une évaluation',
    },
    es: {
      kicker: 'ALCANCE DE ABASTECIMIENTO',
      title: 'Alcance del abastecimiento industrial',
      desc: 'Abastecimiento técnico por aplicación: empaque, alimentos, llenado y automatización. Brindamos auditoría de proveedores y evaluación técnica.',
      cats: [
        { title: 'Sistemas de empaque', desc: 'VFFS, embolsado, vacío y encajonado — abastecimiento para líneas de polvo, granos y sólidos.', badge: 'Servicio Principal' },
        { title: 'Equipos de alimentos', desc: 'Mezcladoras, molinos, marmitas y líneas completas de preparación de proveedores técnicos verificados.', badge: '' },
        { title: 'Líneas de llenado', desc: 'Llenadoras de líquidos, dosificadoras de polvo y taponadoras — integradas para precisión y confiabilidad.', badge: '' },
        { title: 'Transporte y automatización', desc: 'Transportadores, elevadores y robots — abastecimiento para automatización e integración de planta.', badge: '' },
        { title: 'Soluciones a medida', desc: 'Diseño a medida, dimensiones personalizadas e ingeniería específica adaptada a las condiciones de su sitio.', badge: 'Equipo Ingeniería' }
      ],
      cta: 'Comparta producto, formato y velocidad. Brindamos una evaluación técnica en 1 día hábil.',
      ctaBtn: 'Solicitar evaluación técnica',
    },
    pt: {
      kicker: 'ESCOPO DE SOURCING',
      title: 'Escopo de Sourcing Industrial',
      desc: 'Sourcing técnico por aplicação: embalagem, alimentos, envase e automação. Fornecemos auditoria de fornecedores e avaliação de engenharia.',
      cats: [
        { title: 'Sistemas de Embalagem', desc: 'VFFS, ensaque, vácuo e encaixotamento — sourcing para linhas de pó, grãos e sólidos.', badge: 'Serviço Principal' },
        { title: 'Equipamentos de Alimentos', desc: 'Misturadores, moedores, caldeirões e linhas completas de preparo de fornecedores verificados.', badge: '' },
        { title: 'Linhas de Envase', desc: 'Envasadoras de líquidos, dosadoras de pó e tampadoras — integradas para precisão e confiabilidade.', badge: '' },
        { title: 'Transporte e Automação', desc: 'Transportadores, elevadores e robôs — sourcing para automação e integração de fábrica.', badge: '' },
        { title: 'Soluções Sob Medida', desc: 'Projeto sob medida, dimensões personalizadas e engenharia específica para seu ambiente de operação.', badge: 'Equipe Engenharia' }
      ],
      cta: 'Informe produto, formato e produção. Fornecemos uma avaliação técnica em 1 dia útil.',
      ctaBtn: 'Solicitar avaliação técnica',
    },
    ko: {
      kicker: '소싱 범위',
      title: '산업 소싱 범위',
      desc: '용도별 기술 소싱: 포장, 식품 가공, 충전 및 자동화. 모든 구성에 대해 공급업체 검증 및 엔지니어링 평가를 제공합니다.',
      cats: [
        { title: '포장 시스템', desc: 'VFFS, 파우치 포장, 진공 포장 및 카톤 포장 — 분말, 과립 및 고체 라인 소싱.', badge: '핵심 서비스' },
        { title: '식품 가공 장비', desc: '산업용 믹서, 분쇄기, 조리 솥 및 검증된 공급업체의 식품 준비 라인.', badge: '' },
        { title: '충전 및 밀봉 라인', desc: '자동 액체 충전, 분말 계량 및 캡핑 시스템 — 정밀도와 신뢰성 통합.', badge: '' },
        { title: '컨베이어 및 자동화', desc: '벨트 컨베이어, 버킷 엘리베이터 및 로봇 — 시설 자동화 및 통합 소싱.', badge: '' },
        { title: '맞춤형 솔루션', desc: '맞춤 설계, 맞춤 치수 및 특정 용도 엔지니어링 — 귀하의 현장 조건에 최적화.', badge: '엔지니어링 팀' }
      ],
      cta: '제품, 포장 형태, 목표 생산량을 알려주시면 1영업일 내에 기술 소싱 평가를 제공합니다.',
      ctaBtn: '소싱 평가 요청하기',
    },
    ja: {
      kicker: '調達範囲',
      title: '産業調達の範囲',
      desc: '用途別の技術調達：包装、食品加工、充填、自動化。すべての構成においてサプライヤー審査と技術評価を提供します。',
      cats: [
        { title: '包装システム', desc: 'VFFS、パウチ包装、真空包装、ケースパッカー — 粉末・顆粒・固体ラインの調達。', badge: '主要サービス' },
        { title: '食品加工機器', desc: 'ミキサー、グラインダー、調理釜、および検証済みサプライヤーによる食品調理ライン。', badge: '' },
        { title: '充填・シールライン', desc: '自動液体充填、粉末計量、キャッピングシステム — 精度と信頼性を統合。', badge: '' },
        { title: '搬送・自動化', desc: 'ベルトコンベア、バケットエレベーター、ロボット — 工場全体の自動化と統合の調達。', badge: '' },
        { title: 'カスタムソリューション', desc: 'OEM設計、カスタム寸法、用途別エンジニアリング — お客様の生産環境に最適化。', badge: '技術チーム' }
      ],
      cta: '製品・包装形態・目標能力をご共有ください。1営業日以内に技術調達評価を回答します。',
      ctaBtn: '技術調達評価を依頼',
    },
    ar: {
      kicker: 'نطاق التوريد',
      title: 'نطاق التوريد الصناعي',
      desc: 'التوريد التقني حسب التطبيق: التعبئة والتغليف، تصنيع الأغذية، التعبئة والأتمتة. نقدم تدقيق الموردين والتقييم الهندسي.',
      cats: [
        { title: 'أنظمة التعبئة والتغليف', desc: 'آلات VFFS، تعبئة الأكياس، التفريغ وتعبئة الصناديق — توريد لخطوط المساحيق والحبيبات.', badge: 'خدمة رئيسية' },
        { title: 'معدات تصنيع الأغذية', desc: 'الخلاطات، المفارم، أوعية الطهي وخطوط التحضير المتكاملة من موردين معتمدين.', badge: '' },
        { title: 'خطوط التعبئة والختم', desc: 'تعبئة السوائل، جرعات المساحيق وأنظمة التغطية — متكاملة للدقة والموثوقية.', badge: '' },
        { title: 'النقل والأتمتة', desc: 'الناقلات، الرافعات والروبوتات — توريد لأتمتة وتكامل المصانع.', badge: '' },
        { title: 'حلول مخصصة', desc: 'تصميم مخصص، أبعاد مخصصة وهندسة خاصة بالتطبيق — مصممة لظروف موقعك.', badge: 'فريق هندسي' }
      ],
      cta: 'شارك نوع المنتج وشكل العبوة والقدرة المطلوبة. سنقدم تقييماً فنياً للتوريد خلال يوم عمل واحد.',
      ctaBtn: 'طلب تقييم توريد',
    },
    th: {
      kicker: 'แคตตา ล็อกการจัดหา',
      title: 'ขอบเขตการจัดหาอุตสาหกรรม',
      desc: 'การจัดหาทางเทคนิคตามการใช้งาน: บรรจุภัณฑ์ แปรรูปอาหาร การบรรจุ และระบบอัตโนมัติ เรามีการตรวจสอบซัพพลายเออร์และประเมินทางวิศวกรรม',
      cats: [
        { title: 'ระบบบรรจุภัณฑ์', desc: 'VFFS, การบรรจุซอง, สุญญากาศ และเครื่องบรรจุลัง — การจัดหาสำหรับไลน์ผงและเม็ด', badge: 'บริการหลัก' },
        { title: 'อุปกรณ์แปรรูปอาหาร', desc: 'เครื่องผสม, เครื่องบด, กระทะตุ๋น และสายการเตรียมอาหารจากซัพพลายเออร์ที่ผ่านการตรวจสอบ', badge: '' },
        { title: 'สายการบรรจุและซีล', desc: 'การบรรจุของเหลวอัตโนมัติ, การตวงผง และระบบปิดฝา — บูรณาการเพื่อความแม่นยำ', badge: '' },
        { title: 'สายพานและระบบอัตโนมัติ', desc: 'สายพานลำเลียง, ลิฟต์ถัง และหุ่นยนต์ — การจัดหาสำหรับระบบอัตโนมัติในโรงงาน', badge: '' },
        { title: 'โซลูชันออกแบบเฉพาะ', desc: 'ออกแบบเฉพาะ, ขนาดตามสั่ง และวิศวกรรมเฉพาะงาน — ปรับให้เหมาะกับเงื่อนไขหน้างานของคุณ', badge: 'ทีมวิศวกรรม' }
      ],
      cta: 'แจ้งสินค้า รูปแบบบรรจุภัณฑ์ และเป้าหมายการผลิต เราจะให้การประเมินการจัดหาทางเทคนิคภายใน 1 วันทำการ',
      ctaBtn: 'ขอรับการประเมินการจัดหา',
    },
    vi: {
      kicker: 'DANH MỤC NGUỒN CUNG',
      title: 'Phạm vi nguồn cung công nghiệp',
      desc: 'Nguồn cung kỹ thuật theo ứng dụng: đóng gói, chế biến thực phẩm, chiết rót và tự động hóa. Chúng tôi thực hiện thẩm định nhà cung cấp và đánh giá kỹ thuật.',
      cats: [
        { title: 'Hệ thống đóng gói', desc: 'VFFS, đóng gói túi, hút chân không và đóng thùng — nguồn cung cho dây chuyền bột và hạt.', badge: 'Dịch vụ chính' },
        { title: 'Thiết bị chế biến thực phẩm', desc: 'Máy trộn, máy xay, nồi nấu và dây chuyền chế biến hoàn chỉnh từ các nhà cung cấp đã được xác minh.', badge: '' },
        { title: 'Dây chuyền chiết rót', desc: 'Chiết rót lỏng, định lượng bột và đóng nắp — tích hợp độ chính xác và tin cậy.', badge: '' },
        { title: 'Băng tải và tự động hóa', desc: 'Băng tải, gàu tải và robot — nguồn cung cho tự động hóa và tích hợp nhà máy.', badge: '' },
        { title: 'Giải pháp tùy chỉnh', desc: 'Thiết kế theo yêu cầu, kích thước tùy chỉnh và kỹ thuật chuyên dụng — phù hợp với điều kiện lắp đặt của bạn.', badge: 'Đội kỹ thuật' }
      ],
      cta: 'Gửi sản phẩm, kiểu bao bì và mục tiêu công suất. Chúng tôi cung cấp đánh giá nguồn cung kỹ thuật trong 1 ngày làm việc.',
      ctaBtn: 'Yêu cầu đánh giá nguồn cung',
    },
    de: {
      kicker: 'SOURCING-KATALOG',
      title: 'Industrie-Sourcing-Spektrum',
      desc: 'Technisches Sourcing nach Anwendung: Verpackung, Lebensmitteltechnik, Abfüllung und Automatisierung. Wir bieten Lieferantenaudits und technische Bewertung.',
      cats: [
        { title: 'Verpackungssysteme', desc: 'VFFS, Beutelverpackung, Vakuum und Kartonierer — Sourcing für Pulver- und Granulatlinien.', badge: 'Kernservice' },
        { title: 'Lebensmitteltechnik', desc: 'Mischer, Fleischwölfe, Kochkessel und komplette Zubereitungslinien von geprüften technischen Lieferanten.', badge: '' },
        { title: 'Abfüll- und Siegelinien', desc: 'Automatische Flüssigkeitsabfüllung, Pulverdosierung und Verschließsysteme — integriert für Präzision.', badge: '' },
        { title: 'Fördertechnik & Automatisierung', desc: 'Bandförderer, Becherwerke und Roboter — Sourcing für Fabrikautomatisierung und Integration.', badge: '' },
        { title: 'Maßgeschneiderte Lösungen', desc: 'Sonderdesign, Sondermaße und anwendungsspezifische Konstruktion — angepasst an Ihre Einsatzbedingungen.', badge: 'Ingenieurteam' }
      ],
      cta: 'Senden Sie Produkt, Format und Zielleistung. Wir erstellen eine technische Sourcing-Bewertung innerhalb von 1 Werktag.',
      ctaBtn: 'Sourcing-Bewertung anfordern',
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
      en: 'Sourcing Scope',
      cn: '采购范围',
      zh: '採購範圍',
      fr: 'Périmètre sourcing',
      es: 'Alcance de abastecimiento',
      pt: 'Escopo de sourcing',
      ko: '소싱 범위',
      ja: '調達範囲',
      ar: 'نطاق التوريد',
      th: 'ขอบเขตการจัดหา',
      vi: 'Phạm vi sourcing',
      de: 'Sourcing-Bereich',
    } as Record<string, string>)[lang] || 'Sourcing Scope'

  const pageUrl = `${SITE_URL}/${lang}/machinery`
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

  const categoryListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': itemListId,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
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
        image={{ src: catalogHero, alt: 'Industrial sourcing catalog', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      {/* Intro sentence + top CTAs */}
      <section className="py-10 sm:py-12">
        <Container>
          <Breadcrumbs lang={lang} items={[{ label, href: `/${lang}/machinery` }]} />
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-lg font-medium text-gray-700">
              {({
                en: 'Share your product, packaging format, and target output. We provide a technical sourcing assessment and supplier shortlist.',
                cn: '提供产品、包装形式与目标产能，我们将提供技术采购评估与供应商候选名单。',
                zh: '提供產品、包材形式與目標產能，我們將提供技術採購評估與供應商候選名單。',
                fr: 'Indiquez produit, format et cadence. Nous fournissons une évaluation technique et une short-list de fournisseurs.',
                es: 'Comparta producto, formato y velocidad. Brindamos una evaluación técnica y una lista corta de proveedores.',
                pt: 'Informe produto, formato e produção. Fornecemos uma avaliação técnica e uma lista curta de fornecedores.',
                ko: '제품, 포장 형식, 목표 생산량을 알려주시면 기술 소싱 평가 및 공급업체 후보 목록을 제공합니다.',
                ja: '製品・包装形態・目標能力をご共有ください。技術調達評価とサプライヤー候補リストを提供します。',
                ar: 'شارك نوع المنتج وشكل العبوة والقدرة المطلوبة. سنقدم تقييماً فنياً للتوريد وقائمة مختصرة بالموردين.',
                th: 'แจ้งสินค้า รูปแบบบรรจุภัณฑ์ และเป้าหมายการผลิต เราจะให้การประเมินการจัดหาทางเทคนิคและรายชื่อซัพพลายเออร์ที่เหมาะสม',
                vi: 'Gửi sản phẩm, kiểu bao bì và mục tiêu công suất. Chúng tôi cung cấp đánh giá kỹ thuật và danh sách nhà cung cấp.',
                de: 'Senden Sie Produkt, Format und Zielleistung. Wir erstellen eine technische Bewertung und eine Lieferanten-Shortlist.',
              } as Record<string, string>)[lang] || 'Share your product, packaging format, and target output. We provide a technical sourcing assessment and supplier shortlist.'}
            </p>
            <div className="flex shrink-0 gap-3">
              <ButtonLink href={`/${lang}/assessment`} size="md">
                {({ en: 'Get Sourcing Advice', cn: '获取采购建议', zh: '取得採購建議', fr: 'Obtenir conseil', es: 'Obtener asesoría', pt: 'Obter assessoria', ko: '소싱 조언 받기', ja: '調達アドバイスを受ける', ar: 'احصل على نصيحة توريد', th: 'รับคำแนะนำการจัดหา', vi: 'Nhận tư vấn nguồn cung', de: 'Sourcing-Beratung erhalten' } as Record<string, string>)[lang] || 'Get Sourcing Advice'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="md">
                {({ en: 'Request Assessment', cn: '获取评估', zh: '取得評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[lang] || 'Request Assessment'}
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
                  {({ en: 'View Scope', cn: '查看范围', zh: '查看範圍', fr: 'Voir le périmètre', es: 'Ver alcance', pt: 'Ver escopo', ko: '범위 보기', ja: '範囲を見る', ar: 'عرض النطاق', th: 'ดูขอบเขต', vi: 'Xem phạm vi', de: 'Umfang ansehen' } as Record<string,string>)[lang] || 'View Scope'}
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
            {({ en: 'Sourcing Methodology', cn: '采购方法论', zh: '採購方法論', fr: 'Méthodologie de sourcing', es: 'Metodología de abastecimiento', pt: 'Metodologia de sourcing', ko: '소싱 방법론', ja: '調達手法', ar: 'منهجية التوريد', th: 'ระเบียบวิธีจัดหา', vi: 'Phương pháp nguồn cung', de: 'Sourcing-Methodik' } as Record<string, string>)[lang] || 'Sourcing Methodology'}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" /></svg>
                ),
                title: ({ en: 'Technical Vetting', cn: '技术审核', zh: '技術審核', fr: 'Vérification technique', es: 'Auditoría técnica', pt: 'Auditoria técnica', ko: '기술 검증', ja: '技術審査', ar: 'التدقيق التقني', th: 'การตรวจสอบทางเทคนิค', vi: 'Thẩm định kỹ thuật', de: 'Technische Prüfung' } as Record<string, string>)[lang] || 'Technical Vetting',
                body: ({ en: 'We analyze bulk density, particle size, and moisture content before recommending any equipment to ensure long-term reliability.', cn: '我们在推荐任何设备前都会分析堆积密度、粒径和含水量，以确保长期可靠性。', zh: '我們在推薦任何設備前都會分析堆積密度、粒徑和含水量，以確保長期可靠性。', fr: 'Nous analysons la densité, la granulométrie et l\'humidité avant toute recommandation pour garantir la fiabilité.', es: 'Analizamos densidad, tamaño de partícula y humedad antes de recomendar equipos para garantizar confiabilidad.', pt: 'Analisamos densidade, tamanho de partícula e umidade antes de recomendar equipamentos para garantir confiabilidade.', ko: '장비를 추천하기 전에 벌크 밀도, 입자 크기 및 수분 함량을 분석하여 장기적인 신뢰성을 보장합니다.', ja: '機器を提案する前に、嵩密度、粒子径、水分含有量を分析し、長期的な信頼性を確保します。', ar: 'نحلل الكثافة وحجم الجسيمات والرطوبة قبل التوصية بأي معدات لضمان الموثوقية طويلة الأمد.', th: 'เราวิเคราะห์ความหนาแน่น ขนาดอนุภาค และความชื้นก่อนแนะนำอุปกรณ์เพื่อให้มั่นใจในความทนทานระยะยาว', vi: 'Chúng tôi phân tích mật độ khối, kích thước hạt và độ ẩm trước khi đề xuất thiết bị để đảm bảo độ tin cậy lâu dài.', de: 'Wir analysieren Schüttdichte, Partikelgröße und Feuchtigkeit vor jeder Empfehlung, um langfristige Zuverlässigkeit zu garantieren.' } as Record<string, string>)[lang] || 'We analyze technical factors before recommending equipment.',
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
                ),
                title: ({ en: 'Output Alignment', cn: '产能匹配', zh: '產能匹配', fr: 'Alignement de cadence', es: 'Alineación de producción', pt: 'Alinhamento de produção', ko: '생산량 일치', ja: '能力の適合', ar: 'مواءمة الإنتاج', th: 'การปรับให้ตรงกับกำลังการผลิต', vi: 'Khớp sản lượng', de: 'Leistungsabstimmung' } as Record<string, string>)[lang] || 'Output Alignment',
                body: ({ en: 'We match machine automation levels with your target bags-per-hour to ensure you don\'t over-spend on capacity you don\'t need.', cn: '我们将机器自动化水平与您的目标产能相匹配，确保您不会在不必要的产能上过度投资。', zh: '我們將機器自動化水準與您的目標產能相匹配，確保您不會在不必要的產能上過度投資。', fr: 'Nous adaptons l\'automatisation à vos objectifs de cadence pour éviter tout investissement superflu.', es: 'Alineamos el nivel de automatización con su producción objetivo para evitar gastos excesivos en capacidad innecesaria.', pt: 'Alinhamos o nível de automação com sua meta de produção para evitar gastos excessivos em capacidade desnecessária.', ko: '자동화 수준을 목표 생산량에 맞춰 불필요한 용량에 과도한 지출을 하지 않도록 합니다.', ja: '自動化レベルを目標能力に合わせることで、不要な能力への過剰投資を防ぎます。', ar: 'نطابق مستويات الأتمتة مع إنتاجك المستهدف لضمان عدم الإنفاق الزائد على قدرة لا تحتاجها.', th: 'เราจับคู่ระดับระบบอัตโนมัติกับเป้าหมายกำลังการผลิตของคุณเพื่อให้มั่นใจว่าคุณไม่ต้องจ่ายแพงเกินความจำเป็น', vi: 'Chúng tôi khớp mức độ tự động hóa với sản lượng mục tiêu để đảm bảo bạn không chi tiêu quá mức cho công suất không cần thiết.', de: 'Wir stimmen den Automatisierungsgrad auf Ihre Zielleistung ab, um unnötige Investitionen in Überkapazitäten zu vermeiden.' } as Record<string, string>)[lang] || 'We match automation levels with your target output.',
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                ),
                title: ({ en: 'Supplier Vetting', cn: '供应商审核', zh: '供應商審核', fr: 'Audit fournisseurs', es: 'Auditoría de proveedores', pt: 'Auditoria de fornecedores', ko: '공급업체 검증', ja: 'サプライヤー審査', ar: 'تدقيق الموردين', th: 'การตรวจสอบซัพพลายเออร์', vi: 'Thẩm định nhà cung cấp', de: 'Lieferantenaudit' } as Record<string, string>)[lang] || 'Supplier Vetting',
                body: ({ en: 'We handle the verification of supplier credentials, materials, and technical compliance so you don\'t have to fly to Asia.', cn: '我们负责验证供应商资质、材料和技术合规性，您无需飞往亚洲即可完成采购。', zh: '我們負責驗證供應商資質、材料和技術合規性，您無需飛往亞洲即可完成採購。', fr: 'Nous vérifions les références des fournisseurs, les matériaux et la conformité pour vous éviter des déplacements coûteux.', es: 'Gestionamos la verificación de credenciales del proveedor, materiales y cumplimiento para que no tenga que viajar a Asia.', pt: 'Gerenciamos a verificação de credenciais do fornecedor, materiais e conformidade para que você não precise viajar à Ásia.', ko: '공급업체 자격, 자재 및 기술 준수 여부를 당사가 직접 확인하므로 귀하가 아시아로 비행할 필요가 없습니다.', ja: 'サプライヤーの資格、材質、技術要件の遵守を当社が代行して確認するため、アジアへ出張する必要はありません。', ar: 'نتولى التحقق من أوراق المورد والمواد والامتثال التقني حتى لا تضطر للسفر إلى آسيا.', th: 'เราจัดการการตรวจสอบประวัติซัพพลายเออร์ วัสดุ และความถูกต้องทางเทคนิค เพื่อให้คุณไม่ต้องบินมาที่เอเชียด้วยตัวเอง', vi: 'Chúng tôi xử lý việc xác minh chứng chỉ nhà cung cấp, vật liệu và tuân thủ kỹ thuật để bạn không cần phải bay sang Châu Á.', de: 'Wir übernehmen die Prüfung von Lieferantenreferenzen, Materialien und Konformität, damit Sie nicht nach Asien reisen müssen.' } as Record<string, string>)[lang] || 'We handle the verification of supplier credentials and materials.',
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

      {/* Sourcing Advantages */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            {({ en: 'Sourcing Advantages', cn: '采购优势', zh: '採購優勢', fr: 'Avantages sourcing', es: 'Ventajas de abastecimiento', pt: 'Vantagens de sourcing', ko: '소싱 장점', ja: '調達のメリット', ar: 'مزايا التوريد', th: 'ข้อดีของการจัดหา', vi: 'Ưu thế nguồn cung', de: 'Sourcing-Vorteile' } as Record<string, string>)[lang] || 'Sourcing Advantages'}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: ({ en: 'Taiwan/China Network', cn: '台海两岸网络', zh: '台海兩岸網絡', fr: 'Réseau Taïwan/Chine', es: 'Red Taiwán/China', pt: 'Rede Taiwan/China', ko: '대만/중국 네트워크', ja: '台湾・中国ネットワーク', ar: 'شبكة تايوان/الصين', th: 'เครือข่ายไต้หวัน/จีน', vi: 'Mạng lưới Đài Loan/Trung Quốc', de: 'Netzwerk Taiwan/China' } as Record<string, string>)[lang] || 'Taiwan/China Network', detail: ({ en: 'Engineering-led procurement across Asia', cn: '横跨亚洲的工程导向型采购', zh: '橫跨亞洲的工程導向型採購', fr: 'Approvisionnement technique à travers l\'Asie', es: 'Adquisiciones lideradas por ingeniería en Asia', pt: 'Suprimentos liderados por engenharia na Ásia', ko: '아시아 전역의 엔지니어링 주도 조달', ja: 'アジア全域における技術主導の調達', ar: 'مشتريات هندسية عبر آسيا', th: 'การจัดซื้อโดยวิศวกรทั่วเอเชีย', vi: 'Thu mua do kỹ thuật dẫn dắt khắp Châu Á', de: 'Technikorientierte Beschaffung in ganz Asien' } as Record<string, string>)[lang] || 'Engineering-led procurement' },
              { label: ({ en: 'Technical Vetting', cn: '技术审核', zh: '技術審核', fr: 'Vérification technique', es: 'Auditoría técnica', pt: 'Auditoria técnica', ko: '기술 검증', ja: '技術審査', ar: 'التدقيق التقني', th: 'การตรวจสอบทางเทคนิค', vi: 'Thẩm định kỹ thuật', de: 'Technische Prüfung' } as Record<string, string>)[lang] || 'Technical Vetting', detail: ({ en: 'Standard on all sourcing projects', cn: '所有采购项目的标准流程', zh: '所有採購項目的標準流程', fr: 'Standard sur tous les projets de sourcing', es: 'Estándar en todos los proyectos de abastecimiento', pt: 'Padrão em todos os projetos de sourcing', ko: '모든 소싱 프로젝트의 표준', ja: 'すべての調達プロジェクトの標準', ar: 'معيار في جميع مشاريع التوريد', th: 'มาตรฐานสำหรับทุกโปรเจกต์การจัดหา', vi: 'Tiêu chuẩn trên mọi dự án nguồn cung', de: 'Standard bei allen Sourcing-Projekten' } as Record<string, string>)[lang] || 'Standard on all projects' },
              { label: ({ en: 'Compliance Control', cn: '合规性控制', zh: '合規性控制', fr: 'Contrôle de conformité', es: 'Control de cumplimiento', pt: 'Controle de conformidade', ko: '준수 관리', ja: 'コンプライアンス管理', ar: 'ضبط الامتثال', th: 'การควบคุมความถูกต้อง', vi: 'Kiểm soát tuân thủ', de: 'Konformitätskontrolle' } as Record<string, string>)[lang] || 'Compliance Control', detail: ({ en: 'SUS304/316L & CE verification', cn: 'SUS304/316L与CE验证', zh: 'SUS304/316L與CE驗證', fr: 'Vérification SUS304/316L et CE', es: 'Verificación SUS304/316L y CE', pt: 'Verificação SUS304/316L e CE', ko: 'SUS304/316L 및 CE 검증', ja: 'SUS304/316LおよびCE検証', ar: 'تحقق SUS304/316L وCE', th: 'การตรวจสอบ SUS304/316L และ CE', vi: 'Xác minh SUS304/316L & CE', de: 'SUS304/316L & CE Prüfung' } as Record<string, string>)[lang] || 'SUS304/316L & CE verification' },
              { label: ({ en: 'Voltage & Frequency', cn: '电压与频率', zh: '電壓與頻率', fr: 'Tension et fréquence', es: 'Voltaje y frecuencia', pt: 'Tensão e frequência', ko: '전압 및 주파수', ja: '電圧と周波数', ar: 'الجهد والتردد', th: 'แรงดันไฟฟ้าและความถี่', vi: 'Điện áp và tần số', de: 'Spannung & Frequenz' } as Record<string, string>)[lang] || 'Voltage & Frequency', detail: '220V/380V 50Hz · 110V/220V/480V 60Hz' },
              { label: ({ en: 'Logistics Coordination', cn: '物流协调', zh: '物流協調', fr: 'Coordination logistique', es: 'Coordinación logística', pt: 'Coordenação logística', ko: '물류 조정', ja: '物流コーディネート', ar: 'التنسيق اللوجستي', th: 'การประสานงานโลจิสติกส์', vi: 'Điều phối hậu cần', de: 'Logistik-Koordination' } as Record<string, string>)[lang] || 'Logistics Coordination', detail: ({ en: 'Global export support to 60+ countries', cn: '面向60多个国家的全球出口支持', zh: '面向60多個國家的全球出口支援', fr: 'Support export mondial vers 60+ pays', es: 'Soporte de exportación a más de 60 países', pt: 'Suporte de exportação global para 60+ países', ko: '60개국 이상 글로벌 수출 지원', ja: '60カ国以上へのグローバル輸出支援', ar: 'دعم التصدير العالمي لأكثر من 60 دولة', th: 'สนับสนุนการส่งออกทั่วโลกไปยัง 60+ ประเทศ', vi: 'Hỗ trợ xuất khẩu toàn cầu tới 60+ quốc gia', de: 'Export-Support in über 60 Länder' } as Record<string, string>)[lang] || 'Export support to 60+ countries' },
              { label: ({ en: 'Integration Engineering', cn: '集成工程', zh: '整合工程', fr: 'Ingénierie d\'intégration', es: 'Ingeniería de integración', pt: 'Engenharia de integração', ko: '통합 엔지니어링', ja: '統合エンジニアリング', ar: 'هندسة التكامل', th: 'วิศวกรรมการรวมระบบ', vi: 'Kỹ thuật tích hợp', de: 'Integrations-Engineering' } as Record<string, string>)[lang] || 'Integration Engineering', detail: ({ en: 'End-to-end line integration and layout', cn: '端到端线体集成与布局', zh: '端到端線體整合與佈局', fr: 'Intégration de ligne et layout complet', es: 'Integración de línea y layout integral', pt: 'Integração de linha e layout completo', ko: '엔드투엔드 라인 통합 및 레이아웃', ja: 'エンドツーエンドのライン統合とレイアウト', ar: 'تكامل الخطوط والتخطيط الشامل', th: 'การบูรณาการไลน์และเลย์เอาต์ครบวงจร', vi: 'Tích hợp dây chuyền và layout trọn gói', de: 'End-to-End Linienintegration und Layout' } as Record<string, string>)[lang] || 'End-to-end line integration' },
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
                q: ({ en: 'How do you vet suppliers?', cn: '你们如何审核供应商？', zh: '你們如何審核供應商？', fr: 'Comment auditez-vous les fournisseurs ?', es: '¿Cómo auditan a los proveedores?', pt: 'Como vocês auditam os fornecedores?', ko: '공급업체를 어떻게 검증합니까?', ja: 'サプライヤーをどのように審査しますか？', ar: 'كيف تدققون الموردين؟', th: 'คุณตรวจสอบซัพพลายเออร์อย่างไร?', vi: 'Bạn thẩm định nhà cung cấp như thế nào?', de: 'Wie prüfen Sie Lieferanten?' } as Record<string, string>)[lang] || 'How do you vet suppliers?',
                a: ({ en: 'We perform on-site audits of supplier facilities, verify material certificates (SUS304/316L), and review technical engineering capacity. We only source from partners that meet international export standards.', cn: '我们对供应商设施进行现场审核，验证材料证书（SUS304/316L），并审查技术工程能力。我们只从符合国际出口标准的伙伴处采购。', zh: '我們對供應商設施進行現場審核，驗證材料證書（SUS304/316L），並審查技術工程能力。我們只從符合國際出口標準的夥伴處採購。', fr: 'Nous effectuons des audits sur site chez les fournisseurs, vérifions les certificats de matériaux et évaluons la capacité technique. Nous ne sourçons qu\'auprès de partenaires respectant les normes d\'exportation internationales.', es: 'Realizamos auditorías in situ en instalaciones del proveedor, verificamos certificados de materiales y revisamos la capacidad técnica. Solo abastecemos de socios que cumplen con estándares internacionales de exportación.', pt: 'Realizamos auditorias in loco nas instalações do fornecedor, verificamos certificados de materiais e revisamos a capacidade técnica. Só compramos de parceiros que atendem aos padrões internacionais de exportação.', ko: '공급업체 시설에 대한 현장 실사를 수행하고 자재 인증서(SUS304/316L)를 확인하며 기술 엔지니어링 능력을 검토합니다. 국제 수출 표준을 충족하는 파트너로부터만 소싱합니다.', ja: 'サプライヤー施設の現地監査、材質証明書（SUS304/316L）の確認、技術設計能力の審査を行います。国際的な輸出基準を満たすパートナーからのみ調達します。', ar: 'نقوم بعمليات تدقيق ميدانية لمواقع الموردين، ونتحقق من شهادات المواد (SUS304/316L)، ونراجع القدرة الهندسيّة التقنيّة. نحن نستورد فقط من الشركاء الذين يستوفون معايير التصدير الدولية.', th: 'เราทำการตรวจสอบซัพพลายเออร์ในสถานที่จริง ตรวจสอบใบรับรองวัสดุ (SUS304/316L) และทบทวนความสามารถทางวิศวกรรม เราจัดหาจากพันธมิตรที่ผ่านมาตรฐานการส่งออกสากลเท่านั้น', vi: 'Chúng tôi thực hiện kiểm tra tại cơ sở nhà cung cấp, xác minh chứng chỉ vật liệu (SUS304/316L) và xem xét năng lực kỹ thuật. Chúng tôi chỉ nhập hàng từ các đối tác đáp ứng tiêu chuẩn xuất khẩu quốc tế.', de: 'Wir führen Vor-Ort-Audits bei Lieferantenstandorten durch, prüfen Materialzertifikate und bewerten die technische Kapazität. Wir sourcen nur bei Partnern, die internationale Exportstandards erfüllen.' } as Record<string, string>)[lang] || 'We perform on-site audits and verify materials.',
              },
              {
                q: ({ en: 'What is the sourcing lead time?', cn: '采购周期是多久？', zh: '採購週期是多久？', fr: 'Quel est le délai de sourcing ?', es: '¿Cuál es el plazo de abastecimiento?', pt: 'Qual é o prazo de sourcing?', ko: '소싱 리드타임은 얼마나 걸립니까?', ja: '調達のリードタイムはどのくらいですか？', ar: 'ما هو الوقت المستغرق للتوريد؟', th: 'ระยะเวลาจัดหาคือเท่าไร?', vi: 'Thời gian nguồn cung là bao lâu?', de: 'Wie lange ist die Sourcing-Lieferzeit?' } as Record<string, string>)[lang] || 'What is the sourcing lead time?',
                a: ({ en: 'Technical evaluation and supplier selection take 3-7 days. Supplier delivery typically ranges from 20-60 days depending on customization. We provide a full timeline during the initial assessment stage.', cn: '技术评估与供应商选择需要3-7天。供应商交付通常需要20-60天，视定制程度而定。我们在初始评估阶段提供完整的项目时间表。', zh: '技術評估與供應商選擇需要3-7天。供應商交付通常需要20-60天，視客製程度而定。我們在初始評估階段提供完整的專案時間表。', fr: 'L\'évaluation et la sélection prennent 3 à 7 jours. La livraison varie de 20 à 60 jours selon la personnalisation. Un planning complet est fourni dès l\'évaluation initiale.', es: 'La evaluación y selección tardan 3-7 días. La entrega suele variar entre 20-60 días según la personalización. Se proporciona un cronograma completo en la etapa inicial.', pt: 'A avaliação e seleção levam 3-7 dias. A entrega varia de 20 a 60 dias dependendo da personalização. Fornecemos um cronograma completo na fase de avaliação inicial.', ko: '기술 평가 및 공급업체 선정에 3-7일이 소요됩니다. 납품은 맞춤화 정도에 따라 보통 20-60일이 걸립니다. 초기 평가 단계에서 전체 일정을 제공해 드립니다.', ja: '技術評価とサプライヤー選定に3〜7日かかります。納品はカスタム内容により通常20〜60日です。初期評価段階で詳細なタイムラインを提示します。', ar: 'يستغرق التقييم الفني واختيار الموردين من 3 إلى 7 أيام. يستغرق التسليم عادةً من 20 إلى 60 يوماً حسب التخصيص. نقدم جدولاً زمنياً كاملاً خلال مرحلة التقييم الأولية.', th: 'การประเมินทางเทคนิคและการเลือกซัพพลายเออร์ใช้เวลา 3-7 วัน การส่งมอบโดยปกติใช้เวลา 20-60 วันขึ้นอยู่กับการปรับแต่ง เราจะแจ้งกำหนดการทั้งหมดในช่วงการประเมินเบื้องต้น', vi: 'Đánh giá kỹ thuật và chọn nhà cung cấp mất 3-7 ngày. Giao hàng thường từ 20-60 ngày tùy theo tùy chỉnh. Chúng tôi cung cấp lộ trình chi tiết trong giai đoạn đánh giá ban đầu.', de: 'Die Bewertung und Auswahl dauert 3-7 Tage. Die Lieferung liegt je nach Anpassung meist zwischen 20-60 Tagen. Ein Zeitplan wird in der ersten Phase erstellt.' } as Record<string, string>)[lang] || 'Lead time is confirmed during assessment.',
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
              {({ en: 'Ready for a professional assessment?', cn: '准备好接受专业评估了吗？', zh: '準備好接受專業評估了嗎？', fr: 'Prêt pour une évaluation professionnelle ?', es: '¿Listo para una evaluación profesional?', pt: 'Pronto para uma avaliação profissional?', ko: '전문적인 평가를 받을 준비가 되셨습니까?', ja: '専門的な評価を依頼する準備はできましたか？', ar: 'هل أنت مستعد لتقييم مهني؟', th: 'พร้อมสำหรับการประเมินอย่างมืออาชีพแล้วหรือยัง?', vi: 'Sẵn sàng nhận đánh giá chuyên nghiệp?', de: 'Bereit für eine professionelle Bewertung?' } as Record<string, string>)[lang] || 'Ready for a professional assessment?'}
            </h2>
            <p className="mt-3 text-brand-200">
              {({ en: 'Tell us your technical requirements — we will provide a sourcing strategy that minimizes risk.', cn: '告诉我们您的技术需求——我们将提供一个降低风险的采购策略。', zh: '告訴我們您的技術需求——我們將提供一個降低風險的採購策略。', fr: 'Dites-nous vos besoins — nous vous proposerons une stratégie de sourcing minimisant les risques.', es: 'Cuéntenos sus requisitos técnicos — le brindaremos una estrategia de abastecimiento que minimice riesgos.', pt: 'Diga-nos seus requisitos técnicos — forneceremos uma estratégia de sourcing que minimize riscos.', ko: '기술 요구 사항을 알려주시면 위험을 최소화하는 소싱 전략을 제공해 드립니다.', ja: '技術要件をお知らせください — リスクを最小限に抑える調達戦略を提案します。', ar: 'أخبرنا بمتطلباتك التقنية — سنقدم لك استراتيجية توريد تقلل من المخاطر.', th: 'แจ้งความต้องการทางเทคนิคของคุณ — เราจะจัดทำกลยุทธ์การจัดหาที่ช่วยลดความเสี่ยงให้คุณ', vi: 'Hãy cho chúng tôi biết yêu cầu kỹ thuật của bạn — chúng tôi sẽ cung cấp chiến lược nguồn cung giúp giảm thiểu rủi ro.', de: 'Teilen Sie uns Ihre Anforderungen mit — wir erstellen eine Sourcing-Strategie, die Risiken minimiert.' } as Record<string, string>)[lang] || 'Tell us your requirements — we will provide a sourcing strategy.'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href={`/${lang}/assessment`} size="lg">
                {({ en: 'Get Sourcing Advice', cn: '获取采购建议', zh: '取得採購建議', fr: 'Obtenir conseil', es: 'Obtener asesoría', pt: 'Obter assessoria', ko: '소싱 조언 받기', ja: '調達アドバイスを受ける', ar: 'احصل على نصيحة توريد', th: 'รับคำแนะนำการจัดหา', vi: 'Nhận tư vấn nguồn cung', de: 'Sourcing-Beratung erhalten' } as Record<string, string>)[lang] || 'Get Sourcing Advice'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="soft" size="lg">
                {({ en: 'Request Assessment', cn: '获取评估', zh: '取得評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[lang] || 'Request Assessment'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
