import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import CompareBanner from '@/components/CompareBanner'
import { ButtonLink } from '@/components/ui/Button'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META, langMeta} from '@/lib/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import { COMPANY_FAQS } from '@/lib/companyFaq'

// About content changes rarely — force-static + 1-day ISR refresh window.
export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  const titles = {
    en: 'About SunGene — Taiwan-based Trading Company | Reliable Product Supply from Asia',
    cn: '关于 SunGene | 台湾贸易公司 | 亚洲产品供应与出口整合',
    zh: '關於 SunGene | 台灣貿易公司 | 亞洲產品供應與出口整合',
    fr: "À propos SunGene — Société de négoce Taïwan | Approvisionnement depuis l'Asie",
    es: 'Acerca de SunGene — Empresa comercial Taiwán | Suministro desde Asia',
    ko: 'SunGene 소개 | 산업 및 자동화 소싱 전문가',
    ja: 'SunGeneについて | 産業・自動化ソーシングのエキスパート',
    ar: 'عن SunGene | خبراء توريد المعدات الصناعية والأتمتة',
    th: 'เกี่ยวกับ SunGene | ผู้เชี่ยวชาญด้านการจัดหาอุปกรณ์อุตสาหกรรมและระบบอัตโนมัติ',
    vi: 'Về SunGene | Chuyên gia tìm nguồn cung ứng công nghiệp và tự động hóa',
    de: 'Über SunGene | Experten für industrielles Sourcing und Automatisierung',
  }
  const descriptions: Record<string, string> = {
    en: 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Custom packaging, home & living, outdoor. Pre-shipment AQL by in-house staff. MOQ USD 1,000.',
    cn: '台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。 三大类产品:定制包装、居家生活、户外。自有员工出口前 AQL 品检。最低订单 USD 1,000。',
    zh: '台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。 三大類產品:客製包裝、居家生活、戶外。自有員工出口前 AQL 品檢。最低訂單 USD 1,000。',
    fr: "Société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Trois domaines : emballage personnalisé, maison & vie quotidienne, extérieur. AQL pré-export en interne. MOQ 1 000 USD.",
    es: 'Empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Tres áreas: embalaje personalizado, hogar y vida cotidiana, exterior. AQL pre-exportación interno. MOQ USD 1.000.',
    ko: 'SunGene은 대만과 중국 전역에서 산업 장비, 포장 시스템 및 자동화 부품에 대한 전문적인 소싱 지원을 제공합니다.',
    ja: 'SunGeneは、台湾と中国全域で産業機器、包装システム、自動化コンポーネントの専門的なソーシング・サポートを提供しています。',
    ar: 'توفر SunGene دعماً مهنياً في توريد المعدات الصناعية وأنظمة التعبئة والتغليف ومكونات الأتمتة عبر تايوان والصين.',
    th: 'SunGene ให้การสนับสนุนการจัดหาอย่างมืออาชีพสำหรับอุปกรณ์อุตสาหกรรม ระบบบรรจุภัณฑ์ และส่วนประกอบระบบอัตโนมัติทั่วไต้หวันและจีน',
    vi: 'SunGene cung cấp hỗ trợ tìm nguồn cung ứng chuyên nghiệp cho thiết bị công nghiệp, hệ thống đóng gói và các bộ phận tự động hóa tại Đài Loan và Trung Quốc.',
    de: 'SunGene bietet professionelle Sourcing-Unterstützung für Industrieanlagen, Verpackungssysteme und Automatisierungskomponenten in Taiwan und China.',
  }

  return buildPageMetadata({
    lang: l,
    title: (titles as Record<string, string>)[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/about',
    type: 'website',
    keywords: ['SunGene', 'Taiwan-based trading company', 'Asia product supply', 'manufacturing coordination', 'export management', 'custom packaging supply', 'home and living products', 'outdoor products supply', 'pre-shipment AQL inspection', 'Alibaba.com supplier'],
  })
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'ABOUT SUNGENE',
      title: 'A Taiwan-based trading company built around delivery reliability',
      intro: 'SunGene is a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. We work with selected manufacturing partners in Taiwan and China to provide stable communication, production follow-up, and quality consistency for overseas customers.',
      mission: 'We hold the commercial relationship with our manufacturing partners. The quote, the production schedule, the AQL inspection, the export documentation, and any post-shipment claim — they all flow through SunGene. You work with one accountable counterparty across both markets, not a chain of factory introductions.',
      stats: [
        { value: 'TW + CN', label: 'Registered entities' },
        { value: '3 yr+', label: 'Alibaba.com storefront' },
        { value: 'USD 1,000', label: 'Starting order' },
        { value: 'In-house', label: 'Quality team' },
      ],
      strengthsTitle: 'What SunGene delivers',
      strengths: [
        { title: 'Product supply', desc: 'We supply selected products from Taiwan and China. You buy products from us, not introductions to factories. One buyer-facing quote, one accountable counterparty across both markets.' },
        { title: 'Manufacturing coordination', desc: 'We coordinate production schedules, material specifications, and lead times with selected manufacturing partners in Taiwan and China. Pantone matching, sample iteration, and tooling handled end-to-end.' },
        { title: 'Quality consistency', desc: 'SunGene staff visit partner factories for pre-shipment AQL 2.5 inspection. Photo and video documentation with every shipment. Not subcontracted to third-party agents.' },
        { title: 'Export management', desc: 'Documentation, Incoterms, voltage compliance, payment routing through the Taiwan entity, and forwarder coordination handled by our Taiwan and China teams.' },
      ],
      ctaTitle: 'Start the conversation',
      ctaDesc: 'Orders from USD 1,000 per shipment. Send us a reference image, target quantity, and destination market. Same-day reply with a buyer-facing quote.',
      ctaBtn: 'Request a quote',
    },
    cn: {
      kicker: '关于 SunGene',
      title: '一家以准时交货为核心的台湾贸易公司',
      intro: 'SunGene 是一家台湾贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。我们与台湾和中国的精选制造伙伴合作,为海外客户提供稳定的沟通、生产跟催与品质一致性。',
      mission: '我们承担与制造伙伴的商务关系。报价、生产排程、AQL 品检、出口文件、出货后的任何 claim,全部经过 SunGene 这一个窗口。您面对的是一个跨两地市场的对口,不是一连串工厂介绍。',
      stats: [
        { value: '台湾 + 中国', label: '双公司登记' },
        { value: '3 年+', label: 'Alibaba.com 商家' },
        { value: 'USD 1,000', label: '订单起接' },
        { value: '自有', label: '品质团队' },
      ],
      strengthsTitle: 'SunGene 能交付什么',
      strengths: [
        { title: '产品供应', desc: '我们供应台湾与中国的精选产品。您跟我们买产品,不是工厂介绍。一份买家报价,跨两地市场一个对口窗口。' },
        { title: '生产协调', desc: '我们与台湾与中国的精选制造伙伴协调生产排程、规格与交期。Pantone 色号、样品迭代、刀模制作全程处理。' },
        { title: '品质一致性', desc: 'SunGene 员工亲自到合作工厂执行 AQL 2.5 出口前品检。每批附验货影片与照片。不外包给第三方代理。' },
        { title: '出口管理', desc: '文件、Incoterms、电压相容、贷款汇入台湾公司、货代协调由我们台湾与中国团队处理。' },
      ],
      ctaTitle: '开始对话',
      ctaDesc: '订单 USD 1,000 起接。给我们一张参考图、目标数量、销往的市场。当个上班日回覆——附上买家报价。',
      ctaBtn: '索取报价',
    },
    zh: {
      kicker: '關於 SunGene',
      title: '一間以準時交貨為核心的台灣貿易公司',
      intro: 'SunGene 是一間台灣貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。我們與台灣和中國的精選製造夥伴合作,為海外客戶提供穩定的溝通、生產跟催與品質一致性。',
      mission: '我們承擔與製造夥伴的商務關係。報價、生產排程、AQL 品檢、出口文件、出貨後的任何 claim,全部經過 SunGene 這一個窗口。您面對的是一個跨兩地市場的對口,不是一連串工廠介紹。',
      stats: [
        { value: '台灣 + 中國', label: '雙公司登記' },
        { value: '3 年+', label: 'Alibaba.com 商家' },
        { value: 'USD 1,000', label: '訂單起接' },
        { value: '自有', label: '品質團隊' },
      ],
      strengthsTitle: 'SunGene 能交付什麼',
      strengths: [
        { title: '產品供應', desc: '我們供應台灣與中國的精選產品。您跟我們買產品,不是工廠介紹。一份買家報價,跨兩地市場一個對口窗口。' },
        { title: '生產協調', desc: '我們與台灣與中國的精選製造夥伴協調生產排程、規格與交期。Pantone 色號、樣品迭代、刀模製作全程處理。' },
        { title: '品質一致性', desc: 'SunGene 員工親自到合作工廠執行 AQL 2.5 出口前品檢。每批附驗貨影片與照片。不外包給第三方代理。' },
        { title: '出口管理', desc: '文件、Incoterms、電壓相容、貨款匯入台灣公司、貨代協調由我們台灣與中國團隊處理。' },
      ],
      ctaTitle: '開始對話',
      ctaDesc: '訂單 USD 1,000 起接。給我們一張參考圖、目標數量、銷往的市場。當個上班日回覆——附上買家報價。',
      ctaBtn: '索取報價',
    },
    fr: {
      kicker: 'À PROPOS DE SUNGENE',
      title: "Une société de négoce basée à Taïwan, conçue autour de la fiabilité des livraisons",
      intro: "SunGene est une société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Nous collaborons avec des partenaires manufacturiers sélectionnés à Taïwan et en Chine pour offrir une communication stable, un suivi de production et une cohérence qualité aux clients à l'étranger.",
      mission: "Nous portons la relation commerciale avec nos partenaires manufacturiers. Devis, planning de production, contrôle AQL, documentation export, et toute réclamation post-expédition passent par SunGene. Vous travaillez avec un seul interlocuteur responsable sur les deux marchés, pas une chaîne d'introductions d'usines.",
      stats: [
        { value: 'TW + CN', label: 'Entités enregistrées' },
        { value: '3 ans+', label: 'Boutique Alibaba.com' },
        { value: 'USD 1 000', label: 'Commande de départ' },
        { value: 'Interne', label: 'Équipe qualité' },
      ],
      strengthsTitle: 'Ce que livre SunGene',
      strengths: [
        { title: 'Fourniture de produits', desc: "Nous fournissons des produits sélectionnés depuis Taïwan et la Chine. Vous achetez des produits chez nous — pas un service d'introduction d'usines. Un seul devis, un seul interlocuteur responsable sur les deux marchés." },
        { title: 'Coordination de production', desc: "Nous coordonnons les plannings, les spécifications matières et les délais avec nos partenaires manufacturiers à Taïwan et en Chine. Pantone, itération d'échantillons et outillage gérés de bout en bout." },
        { title: 'Cohérence qualité', desc: "Le personnel SunGene se rend chez les usines partenaires pour le contrôle AQL 2.5 pré-expédition. Photos et vidéo à chaque expédition. Non sous-traité à des agents tiers." },
        { title: 'Gestion des exports', desc: "Documentation, Incoterms, conformité voltage, encaissement par l'entité taïwanaise et coordination du transitaire gérés par nos équipes à Taïwan et en Chine." },
      ],
      ctaTitle: 'Démarrer la conversation',
      ctaDesc: "Commandes à partir de USD 1 000 par expédition. Envoyez-nous une image de référence, la quantité cible et le marché de destination. Réponse le jour même avec un devis acheteur.",
      ctaBtn: 'Demander un devis',
    },
    es: {
      kicker: 'SOBRE SUNGENE',
      title: 'Una empresa comercial con sede en Taiwán, construida en torno a la fiabilidad de entrega',
      intro: 'SunGene es una empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Colaboramos con socios manufactureros seleccionados en Taiwán y China para ofrecer comunicación estable, seguimiento de producción y consistencia de calidad a clientes en el extranjero.',
      mission: 'Asumimos la relación comercial con nuestros socios manufactureros. Cotización, programa de producción, inspección AQL, documentación de exportación y cualquier reclamación post-envío pasan por SunGene. Usted trabaja con un único interlocutor responsable en ambos mercados, no con una cadena de introducciones a fábricas.',
      stats: [
        { value: 'TW + CN', label: 'Entidades registradas' },
        { value: '3 años+', label: 'Tienda Alibaba.com' },
        { value: 'USD 1 000', label: 'Pedido inicial' },
        { value: 'Interno', label: 'Equipo de calidad' },
      ],
      strengthsTitle: 'Lo que entrega SunGene',
      strengths: [
        { title: 'Suministro de producto', desc: 'Suministramos productos seleccionados desde Taiwán y China. Usted compra productos a nosotros — no un servicio de introducción a fábricas. Una sola cotización, un solo interlocutor responsable en ambos mercados.' },
        { title: 'Coordinación de producción', desc: 'Coordinamos calendarios, especificaciones de materiales y plazos con nuestros socios manufactureros en Taiwán y China. Pantone, iteración de muestras y herramientas gestionados de extremo a extremo.' },
        { title: 'Consistencia de calidad', desc: 'Personal de SunGene visita las fábricas asociadas para inspección AQL 2.5 pre-exportación. Fotos y video con cada envío. No se subcontrata a agentes terceros.' },
        { title: 'Gestión de exportación', desc: 'Documentación, Incoterms, cumplimiento de voltaje, cobro por la entidad taiwanesa y coordinación con agente de carga gestionados por nuestros equipos en Taiwán y China.' },
      ],
      ctaTitle: 'Iniciar la conversación',
      ctaDesc: 'Pedidos desde USD 1 000 por envío. Envíenos una imagen de referencia, cantidad objetivo y mercado de destino. Respuesta el mismo día con una cotización para el comprador.',
      ctaBtn: 'Solicitar cotización',
    },
    pt: {
      kicker: 'SOBRE A SUNGENE',
      title: 'Parceiro de sourcing industrial em Taiwan',
      intro: 'A SunGene apoia o sourcing de equipamentos industriais, sistemas de embalagem e componentes de automação. Fazemos a ponte entre requisitos técnicos e confiabilidade da cadeia de suprimentos antes de qualquer investimento.',
      mission: 'Fluxo típico: análise de requisitos → auditoria/avaliação de fornecedores → avaliação e proposta com comparação técnica → testes (FAT/SAT) → documentação export → coordenação logística.',
      stats: [
        { value: '15+', label: 'Anos de experiência' },
        { value: '500+', label: 'Projetos entregues' },
        { value: '50+', label: 'Países de exportação' },
        { value: 'Validado', label: 'Verificação técnica' },
      ],
      strengthsTitle: 'Nossos diferenciais',
      strengths: [
        { title: 'Auditoria técnica', desc: 'Validamos fornecedores, padrões de engenharia e componentes críticos. Evidências e vídeos de teste quando disponíveis.' },
        { title: 'Compatibilidade do sistema', desc: 'Seleção por produto, higiene, formato e velocidade, com verificação de interfaces e coerência de linha.' },
        { title: 'Gestão de risco export', desc: 'Suporte CE/UL, requisitos de tensão/frequência, documentação e coordenação logística para equipamentos técnicos.' },
      ],
      ctaTitle: 'Solicitar avaliação',
      ctaDesc: 'Informe produto, tipo de embalagem/recipiente, faixa de enchimento, velocidade-alvo e tensão/frequência do destino.',
      ctaBtn: 'Obter avaliação',
    },
    ko: {
      kicker: 'SUNGENE 소개',
      title: '대만 산업 소싱 파트너',
      intro: 'SunGene은 산업 장비·포장 시스템·자동화 구성품 소싱을 지원합니다. 기술 요구사항과 공급망 신뢰성을 연결해 CAPEX 결정 전 리스크를 줄입니다.',
      mission: '일반 흐름: 요구사항 분석 → 공급업체 심사/평가 → 기술 비교 기반 평가/제안 → 승인 테스트(FAT/SAT) → 수출 서류 → 물류 조율.',
      stats: [
        { value: '15+', label: '년 경험' },
        { value: '500+', label: '건 프로젝트' },
        { value: '50+', label: '개국 수출' },
        { value: '검증', label: '기술 심사' },
      ],
      strengthsTitle: '우리의 강점',
      strengths: [
        { title: '기술 심사', desc: '공급업체, 엔지니어링 기준, 핵심 부품을 검증합니다. 가능 시 테스트 근거와 영상을 제공합니다.' },
        { title: '시스템 호환성', desc: '제품 특성, 위생, 포장 형식, 목표 속도 기준으로 구성하며 인터페이스와 라인 일관성을 확인합니다.' },
        { title: '수출 리스크 관리', desc: 'CE/UL, 전압·주파수 요구사항, 문서 및 물류 조율을 지원합니다.' },
      ],
      ctaTitle: '소싱 평가 요청',
      ctaDesc: '제품, 포장/용기 형식, 충전 범위, 목표 속도, 목적지 전압·주파수를 보내주세요.',
      ctaBtn: '소싱 평가 받기',
    },
    ja: {
      kicker: 'SUNGENEについて',
      title: '台湾の産業ソーシングパートナー',
      intro: 'SunGeneは産業設備・包装システム・自動化部品のソーシングを支援します。技術要件とサプライチェーンの信頼性をつなぎ、投資前の意思決定をサポートします。',
      mission: '一般的な流れ：要件分析 → サプライヤー審査/評価 → 技術比較に基づく提案 → 受入/動作確認（FAT/SAT）→ 輸出書類 → 物流調整。',
      stats: [
        { value: '15+', label: '年の経験' },
        { value: '500+', label: '件の実績' },
        { value: '50+', label: 'カ国への輸出' },
        { value: '検証', label: '技術審査' },
      ],
      strengthsTitle: '私たちの強み',
      strengths: [
        { title: '技術審査', desc: 'サプライヤー、エンジニアリング基準、重要部品を検証。可能な範囲で試験根拠と動画を提供します。' },
        { title: 'システム互換性', desc: '製品特性、衛生レベル、包装形態、目標能力に基づき、インターフェースとライン整合を確認します。' },
        { title: '輸出リスク管理', desc: 'CE/UL、電圧/周波数要件、書類、物流調整を支援します。' },
      ],
      ctaTitle: 'ソーシング評価を依頼',
      ctaDesc: '製品、袋/容器の形式、充填範囲、目標能力、仕向地の電圧/周波数をご共有ください。',
      ctaBtn: '評価を依頼',
    },
    ar: {
      kicker: 'عن SUNGENE',
      title: 'شريك توريد صناعي في تايوان',
      intro: 'تدعم SunGene توريد المعدات الصناعية وأنظمة التعبئة والتغليف ومكونات الأتمتة. نربط المتطلبات التقنية بموثوقية سلسلة التوريد قبل الالتزام برأس المال.',
      mission: 'سير العمل المعتاد: تحليل المتطلبات → تدقيق/تقييم الموردين → توصية مع مقارنة تقنية → اختبارات قبول (FAT/SAT) → وثائق التصدير → تنسيق الخدمات اللوجستية.',
      stats: [
        { value: '15+', label: 'سنة خبرة' },
        { value: '500+', label: 'مشروع مُسلّم' },
        { value: '50+', label: 'دولة تصدير' },
        { value: 'مدقق', label: 'تدقيق تقني' },
      ],
      strengthsTitle: 'نقاط قوتنا',
      strengths: [
        { title: 'تدقيق تقني', desc: 'نتحقق من الموردين والمعايير الهندسية والمكونات الحرجة. نوفر أدلة اختبار وفيديوهات عندما تتوفر.' },
        { title: 'توافق النظام', desc: 'اختيار حسب خصائص المنتج والنظافة وشكل العبوة والقدرة المطلوبة مع التحقق من الواجهات وتكامل الخط.' },
        { title: 'إدارة مخاطر التصدير', desc: 'دعم CE/UL ومتطلبات الجهد/التردد والوثائق وتنسيق الشحن للمعدات التقنية.' },
      ],
      ctaTitle: 'طلب تقييم التوريد',
      ctaDesc: 'أرسل نوع المنتج وشكل العبوة ونطاق التعبئة والسرعة المطلوبة ومعيار الجهد/التردد في بلدك.',
      ctaBtn: 'طلب تقييم',
    },
    th: {
      kicker: 'เกี่ยวกับ SUNGENE',
      title: 'พันธมิตรด้านการจัดหาอุตสาหกรรมในไต้หวัน',
      intro: 'SunGene สนับสนุนการจัดหาอุปกรณ์อุตสาหกรรม ระบบบรรจุภัณฑ์ และชิ้นส่วนอัตโนมัติ เราเชื่อมความต้องการทางเทคนิคกับความน่าเชื่อถือของซัพพลายเออร์ก่อนลงทุน',
      mission: 'ขั้นตอนทั่วไป: วิเคราะห์ความต้องการ → ตรวจสอบ/ประเมินซัพพลายเออร์ → แนะนำพร้อมเปรียบเทียบเชิงเทคนิค → ทดสอบการยอมรับ (FAT/SAT) → เอกสารส่งออก → ประสานโลจิสติกส์',
      stats: [
        { value: '15+', label: 'ปีประสบการณ์' },
        { value: '500+', label: 'โครงการที่ส่งมอบ' },
        { value: '50+', label: 'ประเทศที่ส่งออก' },
        { value: 'ตรวจสอบแล้ว', label: 'ตรวจสอบเชิงเทคนิค' },
      ],
      strengthsTitle: 'จุดแข็งของเรา',
      strengths: [
        { title: 'ตรวจสอบเชิงเทคนิค', desc: 'ตรวจสอบซัพพลายเออร์ มาตรฐานวิศวกรรม และชิ้นส่วนสำคัญ มีหลักฐาน/วิดีโอทดสอบเมื่อมีให้' },
        { title: 'ความเข้ากันได้ของระบบ', desc: 'คัดเลือกตามสินค้า สุขอนามัย รูปแบบบรรจุ และกำลังการผลิต พร้อมตรวจสอบอินเทอร์เฟซและความสอดคล้องของไลน์' },
        { title: 'บริหารความเสี่ยงส่งออก', desc: 'สนับสนุน CE/UL ข้อกำหนดแรงดัน/ความถี่ เอกสาร และประสานการขนส่งสำหรับอุปกรณ์เชิงเทคนิค' },
      ],
      ctaTitle: 'ขอการประเมินการจัดซื้อ',
      ctaDesc: 'ส่งรายละเอียดสินค้า รูปแบบถุง/ภาชนะ ช่วงการบรรจุ ความเร็วเป้าหมาย และแรงดัน/ความถี่ปลายทาง',
      ctaBtn: 'ขอการประเมินการจัดซื้อ',
    },
    vi: {
      kicker: 'VỀ SUNGENE',
      title: 'Đối tác tìm nguồn cung ứng công nghiệp tại Đài Loan',
      intro: 'SunGene hỗ trợ tìm nguồn cung thiết bị công nghiệp, hệ thống đóng gói và linh kiện tự động hóa. Chúng tôi kết nối yêu cầu kỹ thuật với độ tin cậy chuỗi cung ứng trước khi đầu tư.',
      mission: 'Quy trình thường gặp: phân tích yêu cầu → thẩm định/đánh giá nhà cung cấp → khuyến nghị có so sánh kỹ thuật → kiểm tra nghiệm thu (FAT/SAT) → hồ sơ xuất khẩu → phối hợp logistics.',
      stats: [
        { value: '15+', label: 'Năm kinh nghiệm' },
        { value: '500+', label: 'Dự án đã giao' },
        { value: '50+', label: 'Quốc gia xuất khẩu' },
        { value: 'Đã thẩm định', label: 'Thẩm định kỹ thuật' },
      ],
      strengthsTitle: 'Thế mạnh của chúng tôi',
      strengths: [
        { title: 'Thẩm định kỹ thuật', desc: 'Thẩm định nhà cung cấp, tiêu chuẩn kỹ thuật và linh kiện quan trọng. Có bằng chứng/video test khi có.' },
        { title: 'Tương thích hệ thống', desc: 'Chọn theo sản phẩm, vệ sinh, kiểu bao bì và công suất, đồng thời kiểm tra giao diện và tính nhất quán của dây chuyền.' },
        { title: 'Quản trị rủi ro xuất khẩu', desc: 'Hỗ trợ CE/UL, yêu cầu điện áp/tần số, hồ sơ và phối hợp vận chuyển cho thiết bị kỹ thuật.' },
      ],
      ctaTitle: 'Nhận đánh giá nguồn cung',
      ctaDesc: 'Gửi sản phẩm, kiểu bao bì/bao túi, dải chiết rót, tốc độ mục tiêu và điện áp/tần số tại điểm đến.',
      ctaBtn: 'Nhận đánh giá nguồn cung',
    },
    de: {
      kicker: 'ÜBER SUNGENE',
      title: 'Industrie-Sourcing-Partner in Taiwan',
      intro: 'SunGene unterstützt das Sourcing von Industrieausrüstung, Verpackungssystemen und Automationskomponenten. Wir verbinden technische Anforderungen mit einer zuverlässigen Lieferkette vor der Investitionsentscheidung.',
      mission: 'Typischer Ablauf: Anforderungsanalyse → Lieferantenaudit/-bewertung → Bewertung und Vorschlag mit technischem Vergleich → Abnahmetests (FAT/SAT) → Exportdokumente → Logistikkoordination.',
      stats: [
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '500+', label: 'Projekte geliefert' },
        { value: '50+', label: 'Exportländer' },
        { value: 'Geprüft', label: 'Technische Prüfung' },
      ],
      strengthsTitle: 'Unsere Stärken',
      strengths: [
        { title: 'Technische Prüfung', desc: 'Prüfung von Lieferanten, Engineering-Standards und kritischen Komponenten. Nachweise/Videos, wenn verfügbar.' },
        { title: 'Systemkompatibilität', desc: 'Auslegung nach Produkt, Hygiene, Format und Leistung mit Prüfung von Schnittstellen und Linien-Konsistenz.' },
        { title: 'Export-Risikomanagement', desc: 'Unterstützung bei CE/UL, Spannung/Frequenz, Dokumenten und Logistik für technische Güter.' },
      ],
      ctaTitle: 'Bewertung anfordern',
      ctaDesc: 'Senden Sie Produkt, Beutel/Behältertyp, Füllbereich, Zielleistung sowie Spannung/Frequenz am Einsatzort.',
      ctaBtn: 'Bewertung anfordern',
    }
  }

  const t = content[lang] || content['en']

  const gallery = [
    { src: PHOTO.pages.about.gallery[0], alt: 'SunGene pre-shipment inspection at partner factory' },
    { src: PHOTO.pages.about.gallery[1], alt: 'Packaged products on pallet ready for export' },
    { src: PHOTO.pages.about.gallery[2], alt: 'SunGene team coordinating factory pre-shipment inspection' },
    { src: PHOTO.pages.about.gallery[3], alt: 'SunGene team reviewing supplier quality documentation' },
  ]
  const aboutLabel =
    ({
      en: 'About',
      cn: '关于',
      zh: '關於',
      fr: 'À propos',
      es: 'Acerca de',
      pt: 'Sobre',
      ko: '회사 소개',
      ja: '会社概要',
      ar: 'من نحن',
      th: 'เกี่ยวกับเรา',
      vi: 'Giới thiệu',
      de: 'Über uns',
    } as Record<string, string>)[lang] || 'About'

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: 'SunGene Co., LTD.',
    alternateName: '上瑾錸有限公司',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/sungene.png`,
    foundingDate: '2010',
    description: t.intro,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '201 Guangfu Rd., Central District',
      addressLocality: 'Taichung',
      postalCode: '40041',
      addressCountry: 'TW',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 24.1433, longitude: 120.6845 },
    telephone: '+886437032705',
    email: 'contact@sungene.net',
    knowsAbout: [
      'Packaging Sourcing', 'Home Goods Sourcing', 'Garden Products Sourcing',
      'Flexible Packaging', 'Rigid Packaging', 'Beauty & Personal Care Containers',
      'Taiwan Sourcing', 'China Sourcing', 'Factory Inspection', 'Direct Buy-and-Resell',
    ],
    sameAs: [
      'https://momas.en.alibaba.com/',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/${lang}/about#faq`,
    inLanguage: langMeta(lang).htmlLang,
    mainEntity: (COMPANY_FAQS[lang] || COMPANY_FAQS.en).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        image={{ src: PHOTO.pages.about.hero, alt: 'SunGene sourcing team', priority: true, aspectClassName: 'aspect-[4/3]' }}
        desc={(
          <>
            <p className="text-white/85">{t.intro}</p>
            <p className="mt-4 text-base text-white/70">{t.mission}</p>
          </>
        )}
        below={(
          <div className="pt-10 border-t border-white/10 grid grid-cols-2 gap-px md:grid-cols-4">
            {t.stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i} className="flex flex-col items-center py-6 px-4 first:pl-0 last:pr-0">
                <div className="text-4xl font-black text-accent-400">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-white/70 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        className="border-b-0"
      />

      {/* Strengths */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <Breadcrumbs lang={lang} items={[{ label: aboutLabel, href: `/${lang}/about` }]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500" />
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em]">{t.strengthsTitle}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl max-w-2xl">{t.strengthsTitle}</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((p) => (
              <div key={p.alt} className="overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-200/60">
                <div className="relative aspect-[4/3]">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw" className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.strengths.map((s: { title: string; desc: string }, i: number) => (
              <Card key={i} className="p-8 border-0 shadow-elev-1 hover:shadow-elev-2 transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 border border-accent-200">
                  <span className="text-base font-black text-accent-600">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-950">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{s.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Verifiable trust signals — every item has a direct check path */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-5xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-accent-500" />
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em]">
              {({ en: 'WHAT YOU CAN VERIFY', zh: '可驗證的資訊', cn: '可验证的信息', fr: 'À VÉRIFIER', es: 'QUÉ PUEDE VERIFICAR' } as Record<string, string>)[lang] || 'WHAT YOU CAN VERIFY'}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl max-w-2xl">
            {({ en: 'What you can verify', zh: '可驗證的事實', cn: '可验证的事实', fr: 'Ce que vous pouvez vérifier', es: 'Lo que usted puede verificar' } as Record<string, string>)[lang] || 'What you can verify'}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-white/85 max-w-3xl">
            {({ en: 'Trust is built by what you can check, not what we claim.', zh: '信任建立在你可以查證的事情上,不是我們的單方面說法。', cn: '信任建立在你可以查证的事情上,不是我们的单方面说法。', fr: 'La confiance se construit sur ce que vous pouvez vérifier, pas sur nos affirmations.', es: 'La confianza se construye sobre lo que usted puede verificar, no sobre lo que afirmamos.' } as Record<string, string>)[lang] || ''}
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/80 max-w-3xl">
            {({ en: "We are a young trading company (founded 2023). Instead of asking you to trust testimonials we wrote ourselves, here is everything about SunGene you can verify in 60 seconds — independently, before sharing any inquiry with us.", zh: '我們是 2023 年成立的年輕貿易公司。比起讀我們自己寫的客戶見證,以下是你可以在 60 秒內獨立查證 SunGene 的所有資訊 — 在分享任何詢盤之前。', cn: '我们是 2023 年成立的年轻贸易公司。比起读我们自己写的客户见证,以下是你可以在 60 秒内独立查证 SunGene 的所有信息 — 在分享任何询盘之前。', fr: 'Nous sommes une jeune société de négoce (fondée en 2023). Plutôt que des témoignages que nous aurions écrits nous-mêmes, voici tout ce que vous pouvez vérifier sur SunGene en 60 secondes — indépendamment, avant tout échange.', es: 'Somos una empresa comercial joven (fundada en 2023). En lugar de pedirle que confíe en testimonios que escribimos nosotros, aquí está todo sobre SunGene que puede verificar en 60 segundos — independientemente, antes de compartir cualquier consulta.' } as Record<string, string>)[lang] || ''}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="https://momas.en.alibaba.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:border-accent-400 hover:bg-white/10"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-accent-400">01</div>
              <div className="mt-2 text-base font-bold text-white">
                {({ en: 'Real buyer ratings on our Alibaba.com store', zh: 'Alibaba.com 店鋪的真實買家評價', cn: 'Alibaba.com 店铺的真实买家评价', fr: 'Avis acheteurs réels sur notre boutique Alibaba.com', es: 'Calificaciones reales de compradores en nuestra tienda Alibaba.com' } as Record<string, string>)[lang] || 'Real buyer ratings on our Alibaba.com store'}
              </div>
              <div className="mt-2 text-sm text-white/70">
                {({ en: 'momas.en.alibaba.com → check our public Alibaba storefront active 3+ years; star rating and verification badges visible directly on the page (we do not paraphrase Alibaba tiers in our own copy).', zh: 'momas.en.alibaba.com → 我們在 Alibaba 公開營運 3+ 年的店鋪;星等與 badge 直接在頁面可查(我們不在自己文案裡描述 Alibaba 等級)。', cn: 'momas.en.alibaba.com → 我们在 Alibaba 公开运营 3+ 年的店铺;星等与 badge 直接在页面可查(我们不在自己文案里描述 Alibaba 等级)。', fr: 'momas.en.alibaba.com → notre boutique Alibaba publique active 3+ ans ; note et badges directement consultables sur la page (nous ne paraphrasons pas les niveaux Alibaba dans notre copie).', es: 'momas.en.alibaba.com → nuestra tienda Alibaba pública activa 3+ años; calificación e insignias directamente visibles en la página (no parafraseamos los niveles Alibaba en nuestra copia).' } as Record<string, string>)[lang] || ''}
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-400 group-hover:underline">
                {({ en: 'Open store →', zh: '打開店鋪 →', cn: '打开店铺 →', fr: 'Ouvrir la boutique →', es: 'Abrir tienda →' } as Record<string, string>)[lang] || 'Open store →'}
              </div>
            </a>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-accent-400">02</div>
              <div className="mt-2 text-base font-bold text-white">
                {({ en: 'Registered Taiwan company', zh: '在台灣註冊的公司', cn: '在台湾注册的公司', fr: 'Société enregistrée à Taïwan', es: 'Empresa registrada en Taiwán' } as Record<string, string>)[lang] || 'Registered Taiwan company'}
              </div>
              <div className="mt-2 text-sm text-white/70">
                {({ en: 'SunGene Co., LTD. — Taichung, Taiwan. Tax ID, bank account, and customs export records available on inquiry. We invoice from a Taiwan bank account.', zh: 'SunGene Co., LTD.（上瑾錸有限公司)— 台灣台中。統一編號、銀行帳號、出口報關紀錄可應要求提供。我們由台灣銀行帳戶出帳。', cn: 'SunGene Co., LTD.（上瑾錸有限公司)— 台湾台中。统一编号、银行账号、出口报关记录可应要求提供。我们由台湾银行账户出账。', fr: 'SunGene Co., LTD. — Taichung, Taïwan. Numéro fiscal, compte bancaire et registres douaniers d\'export disponibles sur demande. Nous facturons depuis un compte bancaire taïwanais.', es: 'SunGene Co., LTD. — Taichung, Taiwán. NIF, cuenta bancaria y registros aduaneros de exportación disponibles bajo solicitud. Facturamos desde una cuenta bancaria taiwanesa.' } as Record<string, string>)[lang] || ''}
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-accent-400">03</div>
              <div className="mt-2 text-base font-bold text-white">
                {({ en: 'Direct contact, real channels', zh: '直接聯絡,真實管道', cn: '直接联系,真实渠道', fr: 'Contact direct, canaux réels', es: 'Contacto directo, canales reales' } as Record<string, string>)[lang] || 'Direct contact, real channels'}
              </div>
              <div className="mt-2 text-sm text-white/70">
                {({ en: 'WhatsApp +86 18144132078 · WeChat +86 18144132078 · Phone +886 4-3703-2705 · Email contact@sungene.net. Reply same-day during Taipei business hours.', zh: 'WhatsApp +86 18144132078 · 微信 +86 18144132078 · 電話 +886 4-3703-2705 · 信箱 contact@sungene.net。台北上班時間當日回覆。', cn: 'WhatsApp +86 18144132078 · 微信 +86 18144132078 · 电话 +886 4-3703-2705 · 邮箱 contact@sungene.net。台北上班时间当日回复。', fr: 'WhatsApp +86 18144132078 · WeChat +86 18144132078 · Téléphone +886 4-3703-2705 · Email contact@sungene.net. Réponse le jour même aux heures de bureau de Taipei.', es: 'WhatsApp +86 18144132078 · WeChat +86 18144132078 · Teléfono +886 4-3703-2705 · Email contact@sungene.net. Respuesta el mismo día en horario laboral de Taipei.' } as Record<string, string>)[lang] || ''}
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-accent-400">04</div>
              <div className="mt-2 text-base font-bold text-white">
                {({ en: 'Sample order before commitment', zh: '先打樣再下單', cn: '先打样再下单', fr: 'Échantillon avant engagement', es: 'Muestra antes de comprometerse' } as Record<string, string>)[lang] || 'Sample order before commitment'}
              </div>
              <div className="mt-2 text-sm text-white/70">
                {({ en: 'Your MOQ stays at USD 1,000 — but we suggest first-time buyers use the USD 1,000–3,000 range as a test order before scaling to a full container. You verify our QC, lead time, and communication on real money before any larger commitment.', zh: '你的 MOQ 仍然是 USD 1,000 —— 但我們建議首次合作的買家把 USD 1,000–3,000 當測試單跑一輪,再決定是否進整櫃。你用實際金額驗證我們的驗貨、交期與溝通,沒問題再放大。', cn: '您的 MOQ 仍然是 USD 1,000 —— 但我们建议首次合作的买家把 USD 1,000–3,000 当测试单跑一轮,再决定是否进整柜。您用实际金额验证我们的验货、交期与沟通,没问题再放大。', fr: 'Votre MOQ reste à 1 000 USD — mais nous recommandons aux premiers acheteurs de traiter 1 000–3 000 USD comme une commande test avant un conteneur complet. Vous vérifiez notre CQ, nos délais et notre communication avec un vrai budget avant tout engagement plus large.', es: 'Su MOQ permanece en USD 1 000 — pero recomendamos que los compradores nuevos usen el rango USD 1 000–3 000 como pedido de prueba antes de escalar a un contenedor completo. Verifica nuestro QC, plazo y comunicación con dinero real antes de cualquier compromiso mayor.' } as Record<string, string>)[lang] || ''}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-14 sm:pb-18">
        <Container>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">
              {({
                en: 'Explore by category',
                cn: '按品类浏览',
                zh: '依品類瀏覽',
                fr: 'Explorer par catégorie',
                es: 'Explorar por categoría',
                pt: 'Explorar por escopo de sourcing',
                ko: '소싱 범위별 보기',
                ja: '調達範囲別に見る',
                ar: 'استكشف حسب نطاق التوريد',
                th: 'สำรวจตามขอบเขตการจัดหา',
                vi: 'Khám phá theo phạm vi sourcing',
                de: 'Nach Sourcing-Bereich entdecken',
              } as Record<string, string>)[lang] || 'Explore by sourcing scope'}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="text-accent-600 hover:underline" href={`/${lang}/sourcing/packaging`}>{({ en: 'Packaging', cn: '包装', zh: '包裝', fr: 'Emballage', es: 'Empaque' } as Record<string, string>)[lang] || 'Packaging'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/sourcing/home`}>{({ en: 'Home goods', cn: '家居用品', zh: '家居用品', fr: 'Maison', es: 'Hogar' } as Record<string, string>)[lang] || 'Home goods'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/sourcing/garden`}>{({ en: 'Garden & outdoor', cn: '园艺户外', zh: '園藝戶外', fr: 'Jardin & extérieur', es: 'Jardín y exterior' } as Record<string, string>)[lang] || 'Garden & outdoor'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/sourcing/beauty`}>{({ en: 'Beauty packaging', cn: '美容包材', zh: '美容包材', fr: 'Flaconnage cosmétique', es: 'Envase cosmético' } as Record<string, string>)[lang] || 'Beauty packaging'}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/sourcing`} variant="secondary" size="md">
                {({ en: 'How we work', zh: '合作方式', cn: '合作方式', fr: 'Notre méthode', es: 'Cómo trabajamos', pt: 'Como trabalhamos', ko: '소싱 방식', ja: '進め方', ar: 'كيف نعمل', th: 'วิธีการทำงาน', vi: 'Cách chúng tôi làm việc', de: 'Unsere Methode' } as Record<string, string>)[lang] || 'How we work'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} size="md">
                {({ en: 'Get Assessment', cn: '获取评估', zh: '取得評估', fr: 'Obtenir une évaluation', es: 'Obtener evaluación', pt: 'Obter avaliação', ko: '평가 받기', ja: '評価を受ける', ar: 'احصل على تقييم', th: 'รับการประเมิน', vi: 'Nhận đánh giá', de: 'Bewertung erhalten' } as Record<string, string>)[lang] || 'Get Assessment'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="md">
                {({ en: 'Request Assessment', cn: '获取采购评估', zh: '取得採購評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[lang] || 'Request Assessment'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-950 bg-grid-pattern py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/80 to-brand-950/90 pointer-events-none" />
        <Container className="relative text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">{t.ctaDesc}</p>
          <div className="mt-10">
            <ButtonLink href={`/${lang}/contact`} size="lg" className="shadow-lg shadow-accent-700/30">{t.ctaBtn}</ButtonLink>
          </div>
        </Container>
      </section>
      <CompareBanner lang={lang} />
    </>
  )
}
