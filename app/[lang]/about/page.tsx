import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  const titles = {
    en: 'About SunGene | Industrial Machinery Manufacturer from Taiwan',
    cn: '关于 SunGene | 台湾工业机械制造商',
    zh: '關於 SunGene | 台灣工業機械製造商',
    fr: 'À propos de SunGene | Fabricant de machines industrielles de Taïwan',
    es: 'Acerca de SunGene | Fabricante de maquinaria industrial de Taiwán',
    pt: 'Sobre a SunGene | Fabricante de Máquinas Industriais de Taiwan',
    ko: 'SunGene 소개 | 대만 산업 기계 제조업체',
    ja: 'SunGeneについて | 台湾の産業機械メーカー',
    ar: 'عن SunGene | شركة تصنيع الآلات الصناعية من تايوان',
    th: 'เกี่ยวกับ SunGene | ผู้ผลิตเครื่องจักรอุตสาหกรรมจากไต้หวัน',
    vi: 'Về SunGene | Nhà sản xuất máy móc công nghiệp từ Đài Loan',
    de: 'Über SunGene | Industriemaschinenhersteller aus Taiwan',
  }
const descriptions: Record<string,string> = {
  en: 'SunGene is a Taiwan-based industrial machinery manufacturer with 15+ years experience, CE-certified machines, and exports to 50+ countries. Factory-direct packaging, filling & food processing equipment.',
  cn: 'SunGene是一家台湾工业机械制造商，拥有15年以上经验，CE认证机械，出口至50多个国家。工厂直销包装、灌装和食品加工设备。',
  zh: 'SunGene是一家台灣工業機械製造商，擁有15年以上經驗，CE認證機械，出口至50多個國家。工廠直銷包裝、灌裝和食品加工設備。',
  fr: 'SunGene est un fabricant taïwanais de machines industrielles avec 15+ ans d\'expérience, machines CE certifiées, exportations vers 50+ pays. Équipements usine directe.',
  es: 'SunGene es un fabricante taiwanés de maquinaria industrial con 15+ años de experiencia, máquinas CE certificadas y exportaciones a 50+ países. Equipos directo de fábrica.',
  pt: 'SunGene é um fabricante taiwanês de máquinas industriais com 15+ anos de experiência, máquinas CE certificadas e exportações para 50+ países. Equipamentos direto da fábrica.',
  ko: 'SunGene은 15년 이상의 경험을 가진 대만 산업 기계 제조업체로 CE 인증 기계를 50개국 이상에 수출합니다. 공장 직납 포장·충전·식품 가공 설비.',
  ja: 'SunGeneは台湾の産業機械メーカー。15年以上の実績、CE認証取得済み、50カ国以上への輸出実績。工場直送の包装・充填・食品加工機器。',
  ar: 'SunGene شركة تصنيع آلات صناعية تايوانية بخبرة 15+ عامًا، آلات معتمدة CE، تصدير إلى 50+ دولة. معدات تعبئة وتغليف ومعالجة مباشرة من المصنع.',
  th: 'SunGene ผู้ผลิตเครื่องจักรอุตสาหกรรมจากไต้หวัน ประสบการณ์กว่า 15 ปี ได้รับการรับรอง CE ส่งออกไปกว่า 50 ประเทศ อุปกรณ์ตรงจากโรงงาน',
  vi: 'SunGene là nhà sản xuất máy móc công nghiệp Đài Loan với 15+ năm kinh nghiệm, máy đạt chuẩn CE, xuất khẩu đến 50+ quốc gia. Thiết bị trực tiếp từ nhà máy.',
  de: 'SunGene ist ein taiwanesischer Industriemaschinenhersteller mit 15+ Jahren Erfahrung, CE-zertifizierten Maschinen und Export in 50+ Länder. Direktlieferung ab Werk.',
}
  return {
    title: (titles as Record<string,string>)[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    keywords: ['SunGene machinery', 'Taiwan machinery manufacturer', 'packaging machine manufacturer', 'food processing equipment Taiwan', 'industrial machinery Taiwan', 'CE certified machinery', 'factory direct machinery'],
    alternates: {
      canonical: `https://sungene.net/${l}/about`,
      languages: {
        'en': 'https://sungene.net/en/about',
        'zh-TW': 'https://sungene.net/zh/about',
        'zh-CN': 'https://sungene.net/cn/about',
        'fr': 'https://sungene.net/fr/about',
        'es': 'https://sungene.net/es/about',
        'pt': 'https://sungene.net/pt/about',
        'ko': 'https://sungene.net/ko/about',
        'ja': 'https://sungene.net/ja/about',
        'ar': 'https://sungene.net/ar/about',
        'th': 'https://sungene.net/th/about',
        'vi': 'https://sungene.net/vi/about',
        'de': 'https://sungene.net/de/about',
        'x-default': 'https://sungene.net/en/about',
      }
    },
    openGraph: {
      title: (titles as Record<string,string>)[l] || titles.en,
      description: descriptions[l] || descriptions.en,
      url: `https://sungene.net/${l}/about`,
      siteName: 'SunGene Machinery',
      images: [{ url: 'https://sungene.net/og/og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: (titles as Record<string,string>)[l] || titles.en, description: descriptions[l] || descriptions.en, images: ['https://sungene.net/og/og.png'] },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'ABOUT SUNGENE',
      title: 'Your Trusted Machinery Manufacturer in Taiwan',
      intro: 'SunGene is a Taiwan-based industrial machinery manufacturer specializing in packaging equipment, food processing machines, filling & sealing systems, and automated production lines. With over 15 years of experience and exports to 50+ countries, we are committed to delivering high-quality, CE-certified machinery at factory-direct prices.',
      mission: 'Our mission is to make industrial machinery accessible, reliable, and customizable for global buyers — from single machines to complete turnkey production lines.',
      stats: [
        { value: '15+', label: 'Years of Manufacturing' },
        { value: '500+', label: 'Machines Delivered' },
        { value: '50+', label: 'Export Countries' },
        { value: '100%', label: 'CE Certified' },
      ],
      strengthsTitle: 'Our Strengths',
      strengths: [
        { title: 'In-House Manufacturing', desc: 'Our own factory in Taichung, Taiwan ensures quality control from raw materials to final testing. No outsourcing, no middlemen.' },
        { title: 'Engineering-First Approach', desc: 'Every project starts with our engineering team understanding your application, product type, and production goals before recommending equipment.' },
        { title: 'Global Export Experience', desc: 'We handle international voltage standards, documentation, crating, and logistics for seamless delivery to any country.' },
      ],
      ctaTitle: 'Ready to Work with Us?',
      ctaDesc: 'Contact our sales team to discuss your machinery requirements.',
      ctaBtn: 'Get a Free Quote',
    },
    cn: {
      kicker: '关于我们',
      title: '您值得信赖的台湾机械制造商',
      intro: 'SunGene 是一家位于台湾的工业机械制造商，专注于包装设备、食品加工机械、灌装封口系统和自动化生产线。凭借超过15年的经验和出口至50多个国家的业绩，我们致力于以工厂直销价格提供高品质、CE认证的机械设备。',
      mission: '我们的使命是让全球买家更容易获得可靠、可定制的工业机械——从单机到完整的交钥匙生产线。',
      stats: [
        { value: '15+', label: '年制造经验' },
        { value: '500+', label: '台设备交付' },
        { value: '50+', label: '个出口国家' },
        { value: '100%', label: 'CE认证' },
      ],
      strengthsTitle: '我们的优势',
      strengths: [
        { title: '自有工厂生产', desc: '位于台湾台中的自有工厂确保从原材料到最终测试的全程品质管控。无外包，无中间商。' },
        { title: '工程优先方法', desc: '每个项目都从我们的工程团队了解您的应用、产品类型和生产目标开始，然后再推荐设备。' },
        { title: '全球出口经验', desc: '我们处理国际电压标准、文件、包装和物流，确保向任何国家无缝交付。' },
      ],
      ctaTitle: '准备好与我们合作了吗？',
      ctaDesc: '联系我们的销售团队讨论您的机械需求。',
      ctaBtn: '获取免费报价',
    },
    zh: {
      kicker: '關於我們',
      title: '您值得信賴的台灣機械製造商',
      intro: 'SunGene 是一家位於台灣的工業機械製造商，專注於包裝設備、食品加工機械、灌裝封口系統和自動化生產線。憑藉超過15年的經驗和出口至50多個國家的業績，我們致力於以工廠直銷價格提供高品質、CE認證的機械設備。',
      mission: '我們的使命是讓全球買家更容易獲得可靠、可客製的工業機械——從單機到完整的交鑰匙生產線。',
      stats: [
        { value: '15+', label: '年製造經驗' },
        { value: '500+', label: '台設備交付' },
        { value: '50+', label: '個出口國家' },
        { value: '100%', label: 'CE認證' },
      ],
      strengthsTitle: '我們的優勢',
      strengths: [
        { title: '自有工廠生產', desc: '位於台灣台中的自有工廠確保從原材料到最終測試的全程品質管控。無外包，無中間商。' },
        { title: '工程優先方法', desc: '每個專案都從我們的工程團隊了解您的應用、產品類型和生產目標開始，然後再推薦設備。' },
        { title: '全球出口經驗', desc: '我們處理國際電壓標準、文件、包裝和物流，確保向任何國家無縫交付。' },
      ],
      ctaTitle: '準備好與我們合作了嗎？',
      ctaDesc: '聯繫我們的銷售團隊討論您的機械需求。',
      ctaBtn: '取得免費報價',
    },
    fr: {
      kicker: 'À PROPOS DE SUNGENE',
      title: 'Votre fabricant de machines de confiance à Taïwan',
      intro: 'SunGene est un fabricant taïwanais de machines industrielles spécialisé dans les équipements d\'emballage, les machines de transformation alimentaire, les systèmes de remplissage et de scellage, et les lignes de production automatisées. Avec plus de 15 ans d\'expérience et des exportations vers plus de 50 pays, nous nous engageons à fournir des machines certifiées CE de haute qualité à des prix usine directs.',
      mission: 'Notre mission est de rendre les machines industrielles accessibles, fiables et personnalisables pour les acheteurs du monde entier — des machines individuelles aux lignes de production clé en main complètes.',
      stats: [
        { value: '15+', label: 'Années de fabrication' },
        { value: '500+', label: 'Machines livrées' },
        { value: '50+', label: 'Pays d\'exportation' },
        { value: '100%', label: 'Certifié CE' },
      ],
      strengthsTitle: 'Nos atouts',
      strengths: [
        { title: 'Fabrication en interne', desc: 'Notre propre usine à Taichung, Taïwan assure le contrôle qualité des matières premières aux tests finaux. Pas de sous-traitance, pas d\'intermédiaires.' },
        { title: 'Approche orientée ingénierie', desc: 'Chaque projet commence par la compréhension de votre application, type de produit et objectifs de production par notre équipe d\'ingénieurs.' },
        { title: 'Expérience export mondiale', desc: 'Nous gérons les normes de tension internationales, la documentation, la mise en caisse et la logistique pour une livraison sans faille dans tout pays.' },
      ],
      ctaTitle: 'Prêt à travailler avec nous ?',
      ctaDesc: 'Contactez notre équipe commerciale pour discuter de vos besoins en machines.',
      ctaBtn: 'Devis gratuit',
    },
    es: {
      kicker: 'SOBRE SUNGENE',
      title: 'Su fabricante de maquinaria de confianza en Taiwán',
      intro: 'SunGene es un fabricante taiwanés de maquinaria industrial especializado en equipos de empaque, máquinas de procesamiento de alimentos, sistemas de llenado y sellado, y líneas de producción automatizadas. Con más de 15 años de experiencia y exportaciones a más de 50 países, estamos comprometidos a entregar maquinaria certificada CE de alta calidad a precios directos de fábrica.',
      mission: 'Nuestra misión es hacer que la maquinaria industrial sea accesible, confiable y personalizable para compradores globales — desde máquinas individuales hasta líneas de producción llave en mano completas.',
      stats: [
        { value: '15+', label: 'Años de fabricación' },
        { value: '500+', label: 'Máquinas entregadas' },
        { value: '50+', label: 'Países de exportación' },
        { value: '100%', label: 'Certificado CE' },
      ],
      strengthsTitle: 'Nuestras fortalezas',
      strengths: [
        { title: 'Fabricación propia', desc: 'Nuestra fábrica en Taichung, Taiwán asegura el control de calidad desde las materias primas hasta las pruebas finales. Sin subcontratación, sin intermediarios.' },
        { title: 'Enfoque de ingeniería primero', desc: 'Cada proyecto comienza con nuestro equipo de ingenieros comprendiendo su aplicación, tipo de producto y objetivos de producción.' },
        { title: 'Experiencia en exportación global', desc: 'Manejamos estándares de voltaje internacionales, documentación, embalaje y logística para una entrega sin problemas a cualquier país.' },
      ],
      ctaTitle: '¿Listo para trabajar con nosotros?',
      ctaDesc: 'Contacte a nuestro equipo de ventas para discutir sus requisitos de maquinaria.',
      ctaBtn: 'Cotización gratuita',
    },
    pt: {
      kicker: 'SOBRE A SUNGENE',
      title: 'Seu Fabricante de Máquinas de Confiança em Taiwan',
      intro: 'A SunGene é uma fabricante taiwanesa de máquinas industriais especializada em equipamentos de embalagem, máquinas de processamento de alimentos, sistemas de envase e selagem, e linhas de produção automatizadas. Com mais de 15 anos de experiência e exportações para mais de 50 países, estamos comprometidos em fornecer máquinas de alta qualidade com certificação CE a preços diretos de fábrica.',
      mission: 'Nossa missão é tornar as máquinas industriais acessíveis, confiáveis e personalizáveis para compradores globais — desde máquinas individuais até linhas de produção turnkey completas.',
      stats: [
        { value: '15+', label: 'Anos de fabricação' },
        { value: '500+', label: 'Máquinas entregues' },
        { value: '50+', label: 'Países de exportação' },
        { value: '100%', label: 'Certificação CE' },
      ],
      strengthsTitle: 'Nossos diferenciais',
      strengths: [
        { title: 'Fabricação própria', desc: 'Nossa fábrica em Taichung, Taiwan garante controle de qualidade desde a matéria-prima até os testes finais. Sem terceirização, sem intermediários.' },
        { title: 'Abordagem de engenharia', desc: 'Cada projeto começa com nossa equipe de engenharia entendendo sua aplicação, tipo de produto e metas de produção antes de recomendar equipamentos.' },
        { title: 'Experiência em exportação global', desc: 'Cuidamos de padrões de voltagem internacionais, documentação, embalagem e logística para entrega perfeita em qualquer país.' },
      ],
      ctaTitle: 'Pronto para trabalhar conosco?',
      ctaDesc: 'Entre em contato com nossa equipe de vendas para discutir suas necessidades de máquinas.',
      ctaBtn: 'Solicitar orçamento grátis',
    },
    ko: {
      kicker: 'SUNGENE 소개',
      title: '대만의 신뢰할 수 있는 기계 제조업체',
      intro: 'SunGene은 포장 장비, 식품 가공 기계, 충전 및 밀봉 시스템, 자동화 생산 라인을 전문으로 하는 대만 소재 산업 기계 제조업체입니다. 15년 이상의 경험과 50개국 이상 수출 실적으로 CE 인증 고품질 기계를 공장 직판 가격으로 제공합니다.',
      mission: '우리의 사명은 단일 기계에서 완전한 턴키 생산 라인에 이르기까지 전 세계 바이어에게 접근 가능하고 신뢰할 수 있으며 맞춤화 가능한 산업 기계를 제공하는 것입니다.',
      stats: [
        { value: '15+', label: '년 제조 경험' },
        { value: '500+', label: '대 장비 납품' },
        { value: '50+', label: '개국 수출' },
        { value: '100%', label: 'CE 인증' },
      ],
      strengthsTitle: '우리의 강점',
      strengths: [
        { title: '자체 공장 생산', desc: '대만 타이중 자체 공장에서 원자재부터 최종 검사까지 품질을 관리합니다. 외주 없음, 중간 유통 없음.' },
        { title: '엔지니어링 우선 접근', desc: '모든 프로젝트는 고객의 응용 분야, 제품 유형 및 생산 목표를 파악한 후 장비를 추천합니다.' },
        { title: '글로벌 수출 경험', desc: '국제 전압 표준, 문서, 포장 및 물류를 처리하여 어느 나라든 원활하게 납품합니다.' },
      ],
      ctaTitle: '협력할 준비가 되셨나요?',
      ctaDesc: '기계 요구 사항을 상담하려면 영업팀에 문의하세요.',
      ctaBtn: '무료 견적 받기',
    },
    ja: {
      kicker: 'SUNGENEについて',
      title: '台湾の信頼できる機械メーカー',
      intro: 'SunGeneは包装機器、食品加工機械、充填・シール装置、自動化生産ラインを専門とする台湾の産業機械メーカーです。15年以上の経験と50カ国以上への輸出実績を持ち、CE認証済みの高品質機械を工場直販価格でご提供しています。',
      mission: '私たちの使命は、単体機械からターンキー生産ライン一式まで、世界中のバイヤーに使いやすく、信頼性が高く、カスタマイズ可能な産業機械を提供することです。',
      stats: [
        { value: '15+', label: '年の製造実績' },
        { value: '500+', label: '台の納入実績' },
        { value: '50+', label: 'カ国への輸出' },
        { value: '100%', label: 'CE認証取得' },
      ],
      strengthsTitle: '私たちの強み',
      strengths: [
        { title: '自社工場製造', desc: '台湾・台中の自社工場で原材料から最終検査まで品質を管理。外注なし、仲介業者なし。' },
        { title: 'エンジニアリング第一主義', desc: 'すべてのプロジェクトはエンジニアチームがお客様の用途、製品タイプ、生産目標を理解した上で機器をご提案します。' },
        { title: 'グローバル輸出経験', desc: '国際電圧規格、書類作成、梱包、物流を対応し、どの国へもシームレスに納品いたします。' },
      ],
      ctaTitle: 'ご協力の準備はできていますか？',
      ctaDesc: '機械のご要件についてはセールスチームにお問い合わせください。',
      ctaBtn: '無料見積もりを取得',
    },
    ar: {
      kicker: 'عن SUNGENE',
      title: 'الشركة المصنعة للآلات الموثوقة في تايوان',
      intro: 'SunGene هي شركة تصنيع آلات صناعية مقرها تايوان، متخصصة في معدات التعبئة والتغليف، وآلات تصنيع الأغذية، وأنظمة التعبئة والختم، وخطوط الإنتاج الآلية. مع أكثر من 15 عامًا من الخبرة والتصدير إلى أكثر من 50 دولة، نلتزم بتقديم آلات عالية الجودة حاصلة على شهادة CE بأسعار المصنع المباشرة.',
      mission: 'مهمتنا هي جعل الآلات الصناعية متاحة وموثوقة وقابلة للتخصيص للمشترين العالميين — من آلات فردية إلى خطوط إنتاج متكاملة جاهزة للتشغيل.',
      stats: [
        { value: '15+', label: 'سنة من التصنيع' },
        { value: '500+', label: 'آلة تم تسليمها' },
        { value: '50+', label: 'دولة تصدير' },
        { value: '100%', label: 'شهادة CE' },
      ],
      strengthsTitle: 'نقاط قوتنا',
      strengths: [
        { title: 'تصنيع داخلي', desc: 'مصنعنا الخاص في تايتشونغ، تايوان يضمن مراقبة الجودة من المواد الخام حتى الاختبار النهائي. بدون تعهيد، بدون وسطاء.' },
        { title: 'نهج هندسي أولاً', desc: 'يبدأ كل مشروع بفهم فريقنا الهندسي لتطبيقك ونوع المنتج وأهداف الإنتاج قبل التوصية بالمعدات.' },
        { title: 'خبرة تصدير عالمية', desc: 'نتعامل مع معايير الجهد الدولية والوثائق والتغليف والخدمات اللوجستية لتوصيل سلس إلى أي بلد.' },
      ],
      ctaTitle: 'هل أنت مستعد للعمل معنا؟',
      ctaDesc: 'اتصل بفريق المبيعات لدينا لمناقشة متطلباتك من الآلات.',
      ctaBtn: 'احصل على عرض سعر مجاني',
    },
    th: {
      kicker: 'เกี่ยวกับ SUNGENE',
      title: 'ผู้ผลิตเครื่องจักรที่เชื่อถือได้ในไต้หวัน',
      intro: 'SunGene เป็นผู้ผลิตเครื่องจักรอุตสาหกรรมในไต้หวัน เชี่ยวชาญด้านอุปกรณ์บรรจุภัณฑ์ เครื่องจักรแปรรูปอาหาร ระบบบรรจุและซีล และสายการผลิตอัตโนมัติ ด้วยประสบการณ์กว่า 15 ปี และส่งออกไปยังกว่า 50 ประเทศ เรามุ่งมั่นส่งมอบเครื่องจักรคุณภาพสูงที่ได้รับการรับรอง CE ในราคาโรงงาน',
      mission: 'ภารกิจของเราคือทำให้เครื่องจักรอุตสาหกรรมเข้าถึงง่าย เชื่อถือได้ และปรับแต่งได้สำหรับผู้ซื้อทั่วโลก — ตั้งแต่เครื่องจักรเดี่ยวไปจนถึงสายการผลิตแบบเทิร์นคีย์ครบวงจร',
      stats: [
        { value: '15+', label: 'ปีด้านการผลิต' },
        { value: '500+', label: 'เครื่องจักรที่ส่งมอบ' },
        { value: '50+', label: 'ประเทศที่ส่งออก' },
        { value: '100%', label: 'ได้รับรอง CE' },
      ],
      strengthsTitle: 'จุดแข็งของเรา',
      strengths: [
        { title: 'ผลิตในโรงงานตนเอง', desc: 'โรงงานของเราในไถจง ไต้หวัน ควบคุมคุณภาพตั้งแต่วัตถุดิบจนถึงการทดสอบขั้นสุดท้าย ไม่มีการจ้างช่วง ไม่มีคนกลาง' },
        { title: 'แนวทางวิศวกรรมเป็นหลัก', desc: 'ทุกโครงการเริ่มต้นด้วยทีมวิศวกรของเราทำความเข้าใจการใช้งาน ประเภทผลิตภัณฑ์ และเป้าหมายการผลิตของคุณก่อนแนะนำอุปกรณ์' },
        { title: 'ประสบการณ์ส่งออกทั่วโลก', desc: 'เราจัดการมาตรฐานแรงดันไฟฟ้าสากล เอกสาร การบรรจุ และโลจิสติกส์เพื่อการส่งมอบอย่างราบรื่นไปยังทุกประเทศ' },
      ],
      ctaTitle: 'พร้อมที่จะร่วมงานกับเราหรือยัง?',
      ctaDesc: 'ติดต่อทีมขายของเราเพื่อหารือเกี่ยวกับความต้องการเครื่องจักรของคุณ',
      ctaBtn: 'ขอใบเสนอราคาฟรี',
    },
    vi: {
      kicker: 'VỀ SUNGENE',
      title: 'Nhà sản xuất máy móc đáng tin cậy tại Đài Loan',
      intro: 'SunGene là nhà sản xuất máy móc công nghiệp tại Đài Loan, chuyên về thiết bị đóng gói, máy chế biến thực phẩm, hệ thống chiết rót và hàn kín, cùng dây chuyền sản xuất tự động. Với hơn 15 năm kinh nghiệm và xuất khẩu đến hơn 50 quốc gia, chúng tôi cam kết cung cấp máy móc chất lượng cao đạt chứng nhận CE với giá trực tiếp từ nhà máy.',
      mission: 'Sứ mệnh của chúng tôi là giúp máy móc công nghiệp trở nên dễ tiếp cận, đáng tin cậy và tùy chỉnh được cho người mua toàn cầu — từ máy đơn lẻ đến dây chuyền sản xuất trọn gói.',
      stats: [
        { value: '15+', label: 'Năm sản xuất' },
        { value: '500+', label: 'Máy đã giao' },
        { value: '50+', label: 'Quốc gia xuất khẩu' },
        { value: '100%', label: 'Chứng nhận CE' },
      ],
      strengthsTitle: 'Thế mạnh của chúng tôi',
      strengths: [
        { title: 'Tự sản xuất', desc: 'Nhà máy riêng tại Đài Trung, Đài Loan đảm bảo kiểm soát chất lượng từ nguyên liệu thô đến kiểm tra cuối cùng. Không thuê ngoài, không trung gian.' },
        { title: 'Tư duy kỹ thuật đi đầu', desc: 'Mỗi dự án bắt đầu bằng việc đội ngũ kỹ sư tìm hiểu ứng dụng, loại sản phẩm và mục tiêu sản xuất của bạn trước khi đề xuất thiết bị.' },
        { title: 'Kinh nghiệm xuất khẩu toàn cầu', desc: 'Chúng tôi xử lý tiêu chuẩn điện áp quốc tế, tài liệu, đóng gói và logistics để giao hàng liền mạch đến mọi quốc gia.' },
      ],
      ctaTitle: 'Sẵn sàng hợp tác với chúng tôi?',
      ctaDesc: 'Liên hệ đội ngũ bán hàng để thảo luận về yêu cầu máy móc của bạn.',
      ctaBtn: 'Nhận báo giá miễn phí',
    },
    de: {
      kicker: 'ÜBER SUNGENE',
      title: 'Ihr vertrauenswürdiger Maschinenhersteller in Taiwan',
      intro: 'SunGene ist ein taiwanesischer Industriemaschinenhersteller, spezialisiert auf Verpackungsanlagen, Lebensmittelverarbeitungsmaschinen, Abfüll- und Versiegelungssysteme sowie automatisierte Produktionslinien. Mit über 15 Jahren Erfahrung und Exporten in mehr als 50 Länder liefern wir CE-zertifizierte Qualitätsmaschinen zu Fabrikdirektpreisen.',
      mission: 'Unsere Mission ist es, Industriemaschinen für globale Käufer zugänglich, zuverlässig und individuell anpassbar zu machen — von Einzelmaschinen bis hin zu kompletten schlüsselfertigen Produktionslinien.',
      stats: [
        { value: '15+', label: 'Jahre Fertigung' },
        { value: '500+', label: 'Maschinen geliefert' },
        { value: '50+', label: 'Exportländer' },
        { value: '100%', label: 'CE-zertifiziert' },
      ],
      strengthsTitle: 'Unsere Stärken',
      strengths: [
        { title: 'Eigene Fertigung', desc: 'Unsere eigene Fabrik in Taichung, Taiwan gewährleistet Qualitätskontrolle vom Rohmaterial bis zur Endprüfung. Kein Outsourcing, keine Zwischenhändler.' },
        { title: 'Engineering-First-Ansatz', desc: 'Jedes Projekt beginnt damit, dass unser Ingenieurteam Ihre Anwendung, Ihren Produkttyp und Ihre Produktionsziele versteht, bevor Anlagen empfohlen werden.' },
        { title: 'Globale Exporterfahrung', desc: 'Wir kümmern uns um internationale Spannungsstandards, Dokumentation, Verpackung und Logistik für eine reibungslose Lieferung in jedes Land.' },
      ],
      ctaTitle: 'Bereit, mit uns zusammenzuarbeiten?',
      ctaDesc: 'Kontaktieren Sie unser Vertriebsteam, um Ihre Maschinenanforderungen zu besprechen.',
      ctaBtn: 'Kostenloses Angebot anfordern',
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      {/* Hero — stats integrated inside dark section, no floating */}
      <section className="relative overflow-hidden bg-brand-950 bg-industrial-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/80 to-brand-950/90" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative py-20 sm:py-28">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent-500" />
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em]">{t.kicker}</span>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{t.title}</h1>

          {/* Intro */}
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">{t.intro}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/65">{t.mission}</p>

          {/* Stats — inside dark hero, clean grid */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 gap-px md:grid-cols-4">
            {t.stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i} className="flex flex-col items-center py-6 px-4 first:pl-0 last:pr-0">
                <div className="text-4xl font-black text-accent-400">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-white/70 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Strengths */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500" />
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em]">{t.strengthsTitle}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl max-w-2xl">{t.strengthsTitle}</h2>
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
