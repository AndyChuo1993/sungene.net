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

// About content changes rarely — let Next cache the SSR result for 1 day.
export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  const titles = {
    en: 'About — Taiwan + China sourcing',
    cn: '关于我们｜台湾＋中国采购',
    zh: '關於我們｜台灣＋中國採購',
    fr: 'À propos — sourcing Taïwan + Chine',
    es: 'Acerca — sourcing Taiwán + China',
    ko: 'SunGene 소개 | 산업 및 자동화 소싱 전문가',
    ja: 'SunGeneについて | 産業・自動化ソーシングのエキスパート',
    ar: 'عن SunGene | خبراء توريد المعدات الصناعية والأتمتة',
    th: 'เกี่ยวกับ SunGene | ผู้เชี่ยวชาญด้านการจัดหาอุปกรณ์อุตสาหกรรมและระบบอัตโนมัติ',
    vi: 'Về SunGene | Chuyên gia tìm nguồn cung ứng công nghiệp và tự động hóa',
    de: 'Über SunGene | Experten für industrielles Sourcing und Automatisierung',
  }
  const descriptions: Record<string, string> = {
    en: 'Sourcing partner with teams in Taichung and Xiamen. Direct buying from vetted Taiwan + China factories for packaging, home, garden, beauty. On-site QC. Alibaba 5-star.',
    cn: 'SunGene 是贸易采购伙伴,团队分驻台中与厦门。我们直接向两地审核过的工厂采购、出货给海外买家——包装、家居、园艺、美容品类。亲自验货。Alibaba 5 星认证。',
    zh: 'SunGene 是貿易採購夥伴,團隊分駐台中與廈門。我們直接向兩地審核過的工廠採購、出貨給海外買家——包裝、家居、園藝、美容品類。親自驗貨。Alibaba 5 星認證。',
    fr: "Société de négoce Taïwan-Chine. Achat direct usine, CQ sur place, revente directe — emballage, maison, jardin, beauté. Alibaba 5-star vérifié.",
    es: 'Empresa comercial Taiwán-China. Compra directa de fábrica, QC en sitio, reventa directa — empaque, hogar, jardín, belleza. Alibaba 5-star verificado.',
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
    keywords: ['SunGene', 'Taiwan China sourcing agent', 'packaging supplier', 'home goods sourcing', 'garden products sourcing', 'beauty packaging sourcing', 'Alibaba 5-star supplier', 'on-site QC', 'Taichung Xiamen trading company'],
  })
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'ABOUT SUNGENE',
      title: 'A trading company built so quality is our problem, not yours',
      intro: 'SunGene is a sourcing partner with teams in Taichung (Taiwan) and Xiamen (Mainland China). We buy from vetted factories across both markets and ship to international buyers in packaging, home goods, garden and beauty categories. Our team combines B2B export sales, factory operations, and supply chain logistics experience across Greater China.',
      mission: 'We act as principal — we buy the goods, then resell — which puts the goods on our balance sheet. That single accounting fact means rejecting a sub-spec batch is our own financial decision, not a courtesy we extend to you. Quality moves from "we will try" to "we have to".',
      stats: [
        { value: 'TW + CN', label: 'Dual operations' },
        { value: 'Verified', label: 'Alibaba.com supplier' },
        { value: 'USD 1,000', label: 'Order entry' },
        { value: 'On every quote', label: 'Margin shown separately' },
      ],
      strengthsTitle: 'What sets SunGene apart',
      strengths: [
        { title: 'Factory price + our margin, shown separately', desc: 'Every quote lists the factory invoice line (FOB or EXW) and our margin on a second line. The underlying factory price is available on request before order confirmation. One number to compare, full breakdown when you need it.' },
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
      intro: 'SunGene 是贸易采购伙伴,台中与厦门两地都有团队。我们向两岸审核过的工厂采购、出货给海外买家,专精包装、家居、园艺、美容四大品类。团队结合 B2B 出口业务、工厂端运营、与大中华区供应链物流的实战经验。',
      mission: '我们以 principal 身分买断再转售,货走我们自己的帐。这一个会计事实就改变了诱因结构——挡下不合规的货,是我们自己的财务决定。品质从「我们尽量」变成「我们不得不」。',
      stats: [
        { value: '台湾＋中国', label: '两岸都有人' },
        { value: '已认证', label: 'Alibaba.com 供应商' },
        { value: 'USD 1,000', label: '订单起接' },
        { value: '報價內', label: '利润分行列出' },
      ],
      strengthsTitle: 'SunGene 与众不同之处',
      strengths: [
        { title: '工厂价与我方利润分开列', desc: '每份报价单会把工厂发票线(FOB 或 EXW)与我方利润分两行列出。下单前您可要求看到工厂发票。一个数字便于比较,需要时随时拆解。' },
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
      intro: 'SunGene 是貿易採購夥伴,台中與廈門兩地都有團隊。我們向兩岸審核過的工廠採購、出貨給海外買家,專精包裝、家居、園藝、美容四大品類。團隊結合 B2B 出口業務、工廠端運營、與大中華區供應鏈物流的實戰經驗。',
      mission: '我們以 principal 身分買斷再轉售,貨走我們自己的帳。這一個會計事實就改變了誘因結構——擋下不合規的貨,是我們自己的財務決定。品質從「我們盡量」變成「我們不得不」。',
      stats: [
        { value: '台灣＋中國', label: '兩岸都有人' },
        { value: '已認證', label: 'Alibaba.com 供應商' },
        { value: 'USD 1,000', label: '訂單起接' },
        { value: '報價內', label: '利潤分行列出' },
      ],
      strengthsTitle: 'SunGene 與眾不同之處',
      strengths: [
        { title: '工廠價與我方利潤分開列', desc: '每份報價單會把工廠發票線(FOB 或 EXW)與我方利潤分兩行列出。下單前你可要求看到工廠發票。一個數字便於比較,需要時隨時拆解。' },
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
      intro: "SunGene est un partenaire de sourcing avec des équipes à Taichung (Taïwan) et Xiamen (Chine continentale). Nous achetons auprès d'usines vérifiées des deux côtés et revendons aux acheteurs internationaux dans les catégories emballage, maison, jardin et beauté. Notre équipe combine vente export B2B, opérations usine et logistique chaîne d'approvisionnement à travers la Grande Chine.",
      mission: "Nous opérons en société de négoce — non en agent à la commission — pour une raison structurelle précise : la marchandise apparaît à notre bilan. Ce simple fait comptable change la structure des incitations. Refuser un lot hors spécification devient notre propre décision financière, pas une courtoisie que nous vous accordons. La qualité passe de « nous essaierons » à « nous devons ».",
      stats: [
        { value: 'TW + CN', label: 'Double opération' },
        { value: 'Vérifié', label: 'Fournisseur Alibaba.com' },
        { value: 'USD 1 000', label: 'Commande de départ' },
        { value: 'Zéro', label: "Pourboires d'usine" },
      ],
      strengthsTitle: 'Ce qui distingue SunGene',
      strengths: [
        { title: 'Prix usine + notre marge, affichés séparément', desc: 'Chaque devis présente le prix usine (FOB ou EXW) et notre marge sur deux lignes distinctes. Le prix usine sous-jacent est communiqué sur demande avant confirmation. Un seul chiffre à comparer, ventilation complète sur demande.' },
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
      intro: 'SunGene es un socio de sourcing con equipos en Taichung (Taiwán) y Xiamen (China continental). Compramos a fábricas verificadas de ambos lados y revendemos a compradores internacionales en categorías de empaque, hogar, jardín y belleza. Nuestro equipo combina ventas export B2B, operaciones de fábrica y logística de cadena de suministro en toda la Gran China.',
      mission: 'Operamos como empresa comercial — no como agente a comisión — por una razón estructural concreta: la mercancía aparece en nuestro balance. Ese único hecho contable cambia la estructura de incentivos. Rechazar un lote fuera de especificación pasa a ser nuestra propia decisión financiera, no una cortesía hacia usted. La calidad cambia de "lo intentaremos" a "tenemos que".',
      stats: [
        { value: 'TW + CN', label: 'Operación dual' },
        { value: 'Verificado', label: 'Proveedor Alibaba.com' },
        { value: 'USD 1 000', label: 'Pedido inicial' },
        { value: 'Cero', label: 'Sobres de fábrica' },
      ],
      strengthsTitle: 'Lo que distingue a SunGene',
      strengths: [
        { title: 'Precio de fábrica + nuestra margen, por separado', desc: 'Cada cotización muestra el precio de fábrica (FOB o EXW) y nuestra margen en líneas separadas. El precio de fábrica subyacente está disponible bajo solicitud antes de confirmar. Un número para comparar, desglose completo bajo demanda.' },
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
    { src: PHOTO.pages.about.gallery[2], alt: 'SunGene team coordinating factory pre-shipment inspection' },
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
            {({ en: 'Trust is built by what you can check, not what we claim.', zh: '信任建立在你可以查證的事情上,不是我們的單方面說法。', cn: '信任建立在你可以查证的事情上,不是我们的单方面说法。', fr: 'La confiance se construit sur ce que vous pouvez vérifier, pas sur nos affirmations.', es: 'La confianza se construye sobre lo que usted puede verificar, no sobre lo que afirmamos.' } as Record<string, string>)[lang] || 'Trust is built by what you can check, not what we claim.'}
          </h2>
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
                {({ en: 'momas.en.alibaba.com → check our 5-star service rating and verified-supplier status maintained by the platform.', zh: 'momas.en.alibaba.com → 查看由 Alibaba 平台維護的 5 星服務評等與認證供應商身分。', cn: 'momas.en.alibaba.com → 查看由 Alibaba 平台维护的 5 星服务评等与认证供应商身份。', fr: 'momas.en.alibaba.com → consultez notre note de service 5 étoiles et statut fournisseur vérifié, maintenus par la plateforme.', es: 'momas.en.alibaba.com → vea nuestra calificación de servicio 5 estrellas y estado de proveedor verificado, mantenidos por la plataforma.' } as Record<string, string>)[lang] || ''}
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
                {({ en: 'For first-time buyers we welcome a small sample order (USD 1,000–3,000) before any container commitment. You test our QC, lead time, and communication on real money before scaling.', zh: '首次合作的買家可先下小批量樣品單(USD 1,000–3,000)再決定是否進大貨。你用實際的金額測試我們的驗貨、交期與溝通。', cn: '首次合作的买家可先下小批量样品单(USD 1,000–3,000)再决定是否进大货。您用实际的金额测试我们的验货、交期与沟通。', fr: 'Pour les premiers acheteurs, nous acceptons une petite commande échantillon (1 000–3 000 USD) avant tout engagement conteneur. Vous testez notre CQ, nos délais et notre communication avec un vrai budget avant de passer à l\'échelle.', es: 'Para compradores nuevos aceptamos un pedido muestra pequeño (USD 1 000–3 000) antes de cualquier compromiso de contenedor. Usted prueba nuestro QC, plazo y comunicación con dinero real antes de escalar.' } as Record<string, string>)[lang] || ''}
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
    </>
  )
}
