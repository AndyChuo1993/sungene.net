import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import { COMPANY_FAQS } from '@/lib/companyFaq'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  const titles = {
    en: 'About SunGene | Taiwan + China trading company for packaging, home & garden',
    cn: '关于 SunGene｜台湾＋中国 包装・家居・园艺 贸易公司',
    zh: '關於 SunGene｜台灣＋中國 包裝・家居・園藝 貿易公司',
    fr: 'À propos de SunGene | Société de négoce Taïwan + Chine pour emballage, maison & jardin',
    es: 'Acerca de SunGene | Empresa comercial Taiwán + China para empaque, hogar y jardín',
    pt: 'Sobre a SunGene | Especialistas em Sourcing Industrial e Automação',
    ko: 'SunGene 소개 | 산업 및 자동화 소싱 전문가',
    ja: 'SunGeneについて | 産業・自動化ソーシングのエキスパート',
    ar: 'عن SunGene | خبراء توريد المعدات الصناعية والأتمتة',
    th: 'เกี่ยวกับ SunGene | ผู้เชี่ยวชาญด้านการจัดหาอุปกรณ์อุตสาหกรรมและระบบอัตโนมัติ',
    vi: 'Về SunGene | Chuyên gia tìm nguồn cung ứng công nghiệp và tự động hóa',
    de: 'Über SunGene | Experten für industrielles Sourcing und Automatisierung',
  }
  const descriptions: Record<string, string> = {
    en: 'SunGene is a Taiwan–China dual-entity trading company. We buy from vetted factories across both markets and resell direct to international buyers in packaging, home goods, and garden categories. On-site QC by our own team. Verified Alibaba.com supplier.',
    cn: 'SunGene 是一家台湾＋中国双主体的贸易公司。我们直接向两地审核过的工厂采购、转手出货给海外买家——包装、家居、园艺品类。亲自验货。Alibaba.com 认证供应商。',
    zh: 'SunGene 是一家台灣＋中國雙主體的貿易公司。我們直接向兩地審核過的工廠採購、轉手出貨給海外買家——包裝、家居、園藝品類。親自驗貨。Alibaba.com 認證供應商。',
    fr: "SunGene est une société de négoce à double entité Taïwan-Chine. Nous achetons auprès d'usines vérifiées dans les deux marchés et revendons en direct aux acheteurs internationaux — emballage, maison, jardin. Contrôle qualité par notre équipe. Fournisseur Alibaba.com vérifié.",
    es: 'SunGene es una empresa comercial con doble entidad Taiwán-China. Compramos a fábricas verificadas en ambos mercados y revendemos directamente a compradores internacionales — empaque, hogar, jardín. Control de calidad por nuestro equipo. Proveedor Alibaba.com verificado.',
    pt: 'A SunGene oferece suporte profissional de sourcing para equipamentos industriais, sistemas de embalagem e componentes de automação em Taiwan e na China.',
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
    keywords: ['SunGene', 'industrial sourcing partner', 'China equipment sourcing', 'Taiwan automation components', 'packaging system integration', 'technical procurement'],
  })
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'ABOUT SUNGENE',
      title: 'A trading company built so quality is our problem, not yours',
      intro: 'SunGene is a Taiwan-China dual-entity trading company. SunGene Co., LTD. is registered in Taichung, Taiwan; our mainland operation is registered in Xiamen. We buy from vetted factories across both markets and resell directly to international buyers in packaging, home goods, and garden categories. Our team combines B2B export sales, factory operations, and supply chain logistics experience across the Greater China region.',
      mission: 'We operate as a trading company — not a commission-based sourcing agent — for a specific structural reason: it puts the goods on our balance sheet. That single accounting fact changes the incentive structure. Rejecting a sub-spec batch becomes our own financial decision, not a courtesy we extend to you. Quality moves from "we will try" to "we have to".',
      stats: [
        { value: 'TW + CN', label: 'Dual operations' },
        { value: 'Verified', label: 'Alibaba.com supplier' },
        { value: 'USD 1,000', label: 'Order entry' },
        { value: 'Zero', label: 'Factory kickbacks' },
      ],
      strengthsTitle: 'What sets SunGene apart',
      strengths: [
        { title: 'Direct buy, not commission', desc: 'Commission agents earn on a factory price you never see. SunGene does not. We purchase at FOB or EXW from the factory and resell with our margin disclosed on top. The underlying factory price is available on request — full transparency, every quote.' },
        { title: 'On-site QC by our own team', desc: 'Inspection is performed by SunGene staff — not subcontracted to third-party agents who never set foot in the factory. We visit Taiwan factories directly and route China-origin goods through our forwarder warehouse for pre-export inspection. Photo and video documentation with every shipment.' },
        { title: 'Focused expertise across packaging, home and garden', desc: 'We invest depth into supplier relationships within packaging products, home goods, and garden categories rather than spreading thin across unrelated sectors. Adjacent categories are quoted on request when our supplier network reaches.' },
      ],
      ctaTitle: 'Start the conversation',
      ctaDesc: 'Orders from USD 1,000 per shipment. Send us a reference image, target quantity, and destination market. You\'ll get a same-day reply with two or three shortlisted factories and the price band to expect.',
      ctaBtn: 'Request a quote',
    },
    cn: {
      kicker: '关于 SunGene',
      title: '一家把品质当成自己问题、不让您操心的贸易公司',
      intro: 'SunGene 是一家台湾＋中国双主体的贸易公司。台湾公司 SunGene Co., LTD. 注册於台中；中国大陆事业体注册於厦门。我们直接向两地审核过的工厂采购，转手出货给海外买家，专精包装、家居与园艺三大品类。团队结合了 B2B 出口业务、工厂端运营、与大中华区供应链物流的实战经验。',
      mission: '我们采用「贸易商」模式而非「抽佣代理」模式，有一个具体的结构性理由：贸易商模式让货走我们自己的帐。这一个会计事实就改变了诱因结构——挡下不合规的货，是我们自己的财务决定，不是给您的人情。品质从「我们尽量」变成「我们不得不」。',
      stats: [
        { value: '台湾＋中国', label: '双公司运营' },
        { value: '已认证', label: 'Alibaba.com 供应商' },
        { value: 'USD 1,000', label: '订单起接' },
        { value: '零', label: '工厂红包' },
      ],
      strengthsTitle: 'SunGene 与众不同之处',
      strengths: [
        { title: '直接买进卖出，不抽佣', desc: '抽佣代理是按您看不到的工厂报价抽成。SunGene 不抽佣。我们在 FOB 或 EXW 把货买下，加上揭露在外面的转售利润后卖给您。底下的工厂报价您随时可以问——每一笔报价都完全透明。' },
        { title: '团队亲自验货', desc: '验货由 SunGene 团队亲自执行——不外包给从没踏进工厂的第三方代理。台湾工厂直接到场验货；中国工厂出货先进我们合作货代的仓库，由我们出口前验货放行。每批附验货影片与照片。' },
        { title: '聚焦包装、家居与园艺的深度', desc: '我们把资源投在包装、家居与园艺这三大品类的供应商关系深耕，而不是散在不相关的领域。相邻品类只要我们的供应商网络可及，欢迎询价。' },
      ],
      ctaTitle: '开始对话',
      ctaDesc: '订单 USD 1,000 起接。给我们一张参考图、目标数量、销往的市场。当个上班日回覆——附上 2–3 家筛选好的工厂，以及您可预期的价格区间。',
      ctaBtn: '索取报价',
    },
    zh: {
      kicker: '關於 SunGene',
      title: '一家把品質當成自己問題、不讓你操心的貿易公司',
      intro: 'SunGene 是一家台灣＋中國雙主體的貿易公司。台灣公司 SunGene Co., LTD. 註冊於台中；中國大陸事業體註冊於廈門。我們直接向兩地審核過的工廠採購，轉手出貨給海外買家，專精包裝、家居與園藝三大品類。團隊結合了 B2B 出口業務、工廠端運營、與大中華區供應鏈物流的實戰經驗。',
      mission: '我們採用「貿易商」模式而非「抽佣代理」模式，有一個具體的結構性理由：貿易商模式讓貨走我們自己的帳。這一個會計事實就改變了誘因結構——擋下不合規的貨，是我們自己的財務決定，不是給你的人情。品質從「我們盡量」變成「我們不得不」。',
      stats: [
        { value: '台灣＋中國', label: '雙公司運營' },
        { value: '已認證', label: 'Alibaba.com 供應商' },
        { value: 'USD 1,000', label: '訂單起接' },
        { value: '零', label: '工廠紅包' },
      ],
      strengthsTitle: 'SunGene 與眾不同之處',
      strengths: [
        { title: '直接買進賣出，不抽佣', desc: '抽佣代理是按你看不到的工廠報價抽成。SunGene 不抽佣。我們在 FOB 或 EXW 把貨買下，加上揭露在外面的轉售利潤後賣給你。底下的工廠報價你隨時可以問——每一筆報價都完全透明。' },
        { title: '團隊親自驗貨', desc: '驗貨由 SunGene 團隊親自執行——不外包給從沒踏進工廠的第三方代理。台灣工廠直接到場驗貨；中國工廠出貨先進我們合作貨代的倉庫，由我們出口前驗貨放行。每批附驗貨影片與照片。' },
        { title: '聚焦包裝、家居與園藝的深度', desc: '我們把資源投在包裝、家居與園藝這三大品類的供應商關係深耕，而不是散在不相關的領域。相鄰品類只要我們的供應商網絡可及，歡迎詢價。' },
      ],
      ctaTitle: '開始對話',
      ctaDesc: '訂單 USD 1,000 起接。給我們一張參考圖、目標數量、銷往的市場。當個上班日回覆——附上 2–3 家篩選好的工廠，以及你可預期的價格區間。',
      ctaBtn: '索取報價',
    },
    fr: {
      kicker: 'À PROPOS DE SUNGENE',
      title: "Une société de négoce conçue pour que la qualité soit notre problème, pas le vôtre",
      intro: "SunGene est une société de négoce à double entité Taïwan-Chine. SunGene Co., LTD. est enregistrée à Taichung (Taïwan) ; notre entité opérationnelle continentale est enregistrée à Xiamen. Nous achetons auprès d'usines vérifiées dans les deux marchés et revendons en direct aux acheteurs internationaux sur les catégories emballage, maison et jardin. Notre équipe combine une expérience en vente export B2B, en opérations usine et en logistique de la chaîne d'approvisionnement à travers la région du Grand Chine.",
      mission: "Nous opérons en société de négoce — non en agent à la commission — pour une raison structurelle précise : la marchandise apparaît à notre bilan. Ce simple fait comptable change la structure des incitations. Refuser un lot hors spécification devient notre propre décision financière, pas une courtoisie que nous vous accordons. La qualité passe de « nous essaierons » à « nous devons ».",
      stats: [
        { value: 'TW + CN', label: 'Double opération' },
        { value: 'Vérifié', label: 'Fournisseur Alibaba.com' },
        { value: 'USD 1 000', label: 'Commande de départ' },
        { value: 'Zéro', label: "Pourboires d'usine" },
      ],
      strengthsTitle: 'Ce qui distingue SunGene',
      strengths: [
        { title: "Achat-revente, pas de commission", desc: "Les agents à la commission gagnent sur un prix usine que vous ne voyez pas. SunGene non. Nous achetons en FOB ou EXW à l'usine et revendons avec notre marge clairement affichée. Le prix usine sous-jacent est communiqué sur simple demande — transparence complète à chaque devis." },
        { title: 'Contrôle qualité par notre propre équipe', desc: "L'inspection est réalisée par le personnel SunGene — non sous-traitée à des agents tiers qui ne mettent jamais les pieds à l'usine. Nous visitons les usines taïwanaises directement et faisons transiter la marchandise d'origine chinoise par notre entrepôt transitaire pour inspection pré-export. Documentation photo et vidéo à chaque expédition." },
        { title: 'Expertise concentrée sur emballage, maison et jardin', desc: "Nous investissons en profondeur dans les relations fournisseurs au sein des catégories emballage, maison et jardin plutôt que de nous disperser sur des secteurs sans lien. Les catégories voisines sont chiffrées sur demande, dans la limite de notre réseau fournisseur." },
      ],
      ctaTitle: 'Démarrer la conversation',
      ctaDesc: "Commandes à partir de USD 1 000 par expédition. Envoyez-nous une image de référence, la quantité cible et le marché de destination. Réponse le jour même avec 2–3 usines présélectionnées et la fourchette de prix attendue.",
      ctaBtn: 'Demander un devis',
    },
    es: {
      kicker: 'SOBRE SUNGENE',
      title: 'Una empresa comercial diseñada para que la calidad sea nuestro problema, no el suyo',
      intro: 'SunGene es una empresa comercial con doble entidad Taiwán-China. SunGene Co., LTD. está registrada en Taichung (Taiwán); nuestra entidad operativa continental está registrada en Xiamen. Compramos a fábricas verificadas en ambos mercados y revendemos directamente a compradores internacionales en categorías de empaque, hogar y jardín. Nuestro equipo combina experiencia en ventas de exportación B2B, operaciones de fábrica y logística de cadena de suministro en toda la región de la Gran China.',
      mission: 'Operamos como empresa comercial — no como agente a comisión — por una razón estructural concreta: la mercancía aparece en nuestro balance. Ese único hecho contable cambia la estructura de incentivos. Rechazar un lote fuera de especificación pasa a ser nuestra propia decisión financiera, no una cortesía hacia usted. La calidad cambia de "lo intentaremos" a "tenemos que".',
      stats: [
        { value: 'TW + CN', label: 'Operación dual' },
        { value: 'Verificado', label: 'Proveedor Alibaba.com' },
        { value: 'USD 1 000', label: 'Pedido inicial' },
        { value: 'Cero', label: 'Sobres de fábrica' },
      ],
      strengthsTitle: 'Lo que distingue a SunGene',
      strengths: [
        { title: 'Compra-reventa, no comisión', desc: 'Los agentes a comisión ganan sobre un precio de fábrica que usted no ve. SunGene no. Compramos FOB o EXW a la fábrica y revendemos con nuestro margen mostrado en la cotización. El precio de fábrica subyacente se comunica bajo petición — transparencia completa en cada cotización.' },
        { title: 'Control de calidad por nuestro propio equipo', desc: 'La inspección la realiza personal de SunGene — no se subcontrata a agentes terceros que nunca pisan la fábrica. Visitamos las fábricas en Taiwán directamente y enrutamos la mercancía de origen chino a través de nuestro almacén transitario para inspección previa a la exportación. Documentación fotográfica y de video con cada envío.' },
        { title: 'Experiencia concentrada en empaque, hogar y jardín', desc: 'Invertimos en profundidad en relaciones con proveedores dentro de las categorías de empaque, hogar y jardín, en lugar de dispersarnos en sectores no relacionados. Las categorías vecinas se cotizan bajo petición, dentro del alcance de nuestra red de proveedores.' },
      ],
      ctaTitle: 'Iniciar la conversación',
      ctaDesc: 'Pedidos desde USD 1 000 por envío. Envíenos una imagen de referencia, cantidad objetivo y mercado de destino. Respuesta el mismo día con 2–3 fábricas preseleccionadas y el rango de precios esperado.',
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
    { src: PHOTO.pages.about.gallery[0], alt: 'Workshop line' },
    { src: PHOTO.pages.about.gallery[1], alt: 'Bottling line in operation' },
    { src: PHOTO.pages.about.gallery[2], alt: 'Industrial filling system detail' },
    { src: PHOTO.pages.about.gallery[3], alt: 'Control system and automation' },
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
    telephone: '+886-4-3703-2705',
    email: 'contact@sungene.net',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
    knowsAbout: [
      'Packaging Systems Sourcing', 'VFFS Projects', 'HFFS Flow Wrappers',
      'Powder Dosing', 'Liquid Filling Projects', 'Food Processing Equipment',
      'Conveyor Systems', 'PLC Automation', 'CE Documentation',
    ],
    sameAs: [
      'https://www.linkedin.com/company/sungene-machinery',
      'https://sungene.en.alibaba.com',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/${lang}/about#faq`,
    inLanguage: LANG_META[lang].htmlLang,
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
        desc={(
          <>
            <p className="text-white/85">{t.intro}</p>
            <p className="mt-4 text-base text-white/70">{t.mission}</p>
          </>
        )}
        image={{ src: PHOTO.pages.about.hero, alt: 'SunGene sourcing and engineering team', priority: true, aspectClassName: 'aspect-[16/10]' }}
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

      <section className="bg-white pb-14 sm:pb-18">
        <Container>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">
              {({
                en: 'Explore by machine',
                cn: '按机型浏览',
                zh: '依採購範圍瀏覽',
                fr: 'Explorer par périmètre sourcing',
                es: 'Explorar por alcance de abastecimiento',
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
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/pouch-packaging`}>{({ en: 'Pouch packaging', cn: '袋包装', zh: '袋包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치', ja: 'パウチ', ar: 'أكياس', th: 'ถุง', vi: 'Túi', de: 'Beutel' } as Record<string, string>)[lang] || 'Pouch packaging'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/powder-dosing`}>{({ en: 'Powder dosing', cn: '粉体计量', zh: '粉體計量', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[lang] || 'Powder dosing'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/liquid-filling`}>{({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[lang] || 'Liquid filling'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/food-processing-line`}>{({ en: 'Food processing line', cn: '食品加工线', zh: '食品加工線', fr: 'Process', es: 'Proceso', pt: 'Processo', ko: '식품 라인', ja: '加工ライン', ar: 'معالجة', th: 'กระบวนการ', vi: 'Chế biến', de: 'Prozess' } as Record<string, string>)[lang] || 'Food processing line'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/conveying-automation`}>{({ en: 'Conveying & automation', cn: '输送与自动化', zh: '輸送與自動化', fr: 'Convoyage', es: 'Transporte', pt: 'Transporte', ko: '이송/자동화', ja: '搬送/自動化', ar: 'نقل/أتمتة', th: 'ลำเลียง/อัตโนมัติ', vi: 'Băng tải/TĐH', de: 'Fördertechnik/Automation' } as Record<string, string>)[lang] || 'Conveying & automation'}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/sourcing`} variant="secondary" size="md">
                {({ en: 'How we work', zh: '合作方式', cn: '合作方式', fr: 'Notre méthode', es: 'Cómo trabajamos', pt: 'Como trabalhamos', ko: '소싱 방식', ja: '進め方', ar: 'كيف نعمل', th: 'วิธีการทำงาน', vi: 'Cách chúng tôi làm việc', de: 'Unsere Methode' } as Record<string, string>)[lang] || 'How we work'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/assessment`} size="md">
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
      <section className="relative bg-brand-950 bg-industrial-grid py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/80 to-brand-950/90 pointer-events-none" />
        <Container className="relative text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">{t.ctaDesc}</p>
          <div className="mt-10">
            <ButtonLink href={`/${lang}/contact`} size="lg" className="shadow-lg shadow-accent-700/30">{t.ctaBtn}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
