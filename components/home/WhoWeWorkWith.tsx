import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

const customerIcons = [
  // Globe - importers
  <svg key="imp" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  // Factory - manufacturers
  <svg key="mfg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
  // Clipboard - project buyers
  <svg key="proj" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
  // Truck - OEM buyers
  <svg key="oem" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
]

export default function WhoWeWorkWith({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'OUR CLIENTS',
      title: 'Who We Serve',
      desc: 'Our industrial machinery serves a diverse range of global buyers across the supply chain.',
      items: [
        { title: 'Importers & Distributors', desc: 'Source machinery at factory-direct prices for your local market with full export documentation and packaging.' },
        { title: 'Food & Beverage Manufacturers', desc: 'Upgrade production capacity with efficient processing, packaging, and automation equipment.' },
        { title: 'Project Buyers & Engineers', desc: 'Plan new production lines or facility expansions with our engineering consultation and equipment selection support.' },
        { title: 'OEM & Brand Owners', desc: 'Custom-branded machinery and white-label equipment solutions for your product line expansion.' },
      ]
    },
    cn: {
      kicker: '我们的客户',
      title: '服务对象',
      desc: '我们的工业机械服务于供应链中多元化的全球买家。',
      items: [
        { title: '进口商与经销商', desc: '以工厂直销价格采购机械，提供完整出口文件和包装服务。' },
        { title: '食品饮料制造商', desc: '通过高效的加工、包装和自动化设备提升产能。' },
        { title: '项目采购与工程师', desc: '为新产线或工厂扩建提供工程咨询和设备选型支持。' },
        { title: 'OEM与品牌商', desc: '提供定制品牌机械和贴牌设备解决方案。' },
      ]
    },
    zh: {
      kicker: '我們的客戶',
      title: '服務對象',
      desc: '我們的工業機械服務於供應鏈中多元化的全球買家。',
      items: [
        { title: '進口商與經銷商', desc: '以工廠直銷價格採購機械，提供完整出口文件和包裝服務。' },
        { title: '食品飲料製造商', desc: '透過高效的加工、包裝和自動化設備提升產能。' },
        { title: '專案採購與工程師', desc: '為新產線或工廠擴建提供工程諮詢和設備選型支援。' },
        { title: 'OEM與品牌商', desc: '提供客製品牌機械和貼牌設備解決方案。' },
      ]
    },
    fr: {
      kicker: 'NOS CLIENTS',
      title: 'À qui nous nous adressons',
      desc: 'Nos machines industrielles sont au service d\'une clientèle mondiale diversifiée à travers toute la chaîne d\'approvisionnement.',
      items: [
        { title: 'Importateurs et distributeurs', desc: 'Approvisionnez-vous en machines à prix usine pour votre marché local avec documentation d\'exportation et emballage complets.' },
        { title: 'Fabricants agroalimentaires', desc: 'Augmentez votre capacité de production grâce à des équipements performants de transformation, d\'emballage et d\'automatisation.' },
        { title: 'Acheteurs de projets et ingénieurs', desc: 'Planifiez de nouvelles lignes de production ou des extensions d\'usine avec notre conseil en ingénierie et notre aide à la sélection d\'équipements.' },
        { title: 'OEM et propriétaires de marques', desc: 'Machines personnalisées à votre marque et solutions d\'équipements en marque blanche pour élargir votre gamme de produits.' },
      ]
    },
    es: {
      kicker: 'NUESTROS CLIENTES',
      title: 'A quién servimos',
      desc: 'Nuestra maquinaria industrial atiende a una amplia gama de compradores globales en toda la cadena de suministro.',
      items: [
        { title: 'Importadores y distribuidores', desc: 'Adquiera maquinaria a precios directos de fábrica para su mercado local con documentación de exportación y embalaje completos.' },
        { title: 'Fabricantes de alimentos y bebidas', desc: 'Aumente su capacidad de producción con equipos eficientes de procesamiento, empaque y automatización.' },
        { title: 'Compradores de proyectos e ingenieros', desc: 'Planifique nuevas líneas de producción o ampliaciones de planta con nuestra consultoría de ingeniería y soporte en selección de equipos.' },
        { title: 'OEM y propietarios de marcas', desc: 'Maquinaria personalizada con su marca y soluciones de equipos de marca blanca para ampliar su línea de productos.' },
      ]
    },
    pt: {
      kicker: 'NOSSOS CLIENTES',
      title: 'Quem Atendemos',
      desc: 'Nossas máquinas industriais atendem uma ampla variedade de compradores globais em toda a cadeia de suprimentos.',
      items: [
        { title: 'Importadores e Distribuidores', desc: 'Adquira máquinas a preços diretos de fábrica para o seu mercado local com documentação de exportação e embalagem completas.' },
        { title: 'Fabricantes de Alimentos e Bebidas', desc: 'Aumente a capacidade de produção com equipamentos eficientes de processamento, embalagem e automação.' },
        { title: 'Compradores de Projetos e Engenheiros', desc: 'Planeje novas linhas de produção ou expansões de fábrica com nossa consultoria de engenharia e suporte na seleção de equipamentos.' },
        { title: 'OEM e Proprietários de Marcas', desc: 'Máquinas com marca personalizada e soluções de equipamentos white-label para expandir sua linha de produtos.' },
      ]
    },
    ko: {
      kicker: '고객 안내',
      title: '서비스 대상',
      desc: '당사의 산업용 기계는 공급망 전반에 걸쳐 다양한 글로벌 바이어에게 서비스를 제공합니다.',
      items: [
        { title: '수입업체 및 유통업체', desc: '완전한 수출 서류 및 포장과 함께 현지 시장을 위한 기계를 공장 직판 가격으로 구매하세요.' },
        { title: '식품 및 음료 제조업체', desc: '효율적인 가공, 포장 및 자동화 장비로 생산 능력을 향상시키세요.' },
        { title: '프로젝트 바이어 및 엔지니어', desc: '당사의 엔지니어링 컨설팅과 장비 선정 지원으로 새로운 생산 라인 또는 시설 확장을 계획하세요.' },
        { title: 'OEM 및 브랜드 오너', desc: '제품 라인 확장을 위한 맞춤 브랜드 기계 및 화이트 라벨 장비 솔루션.' },
      ]
    },
    ja: {
      kicker: '当社の顧客',
      title: 'サービス対象',
      desc: '当社の産業機械は、サプライチェーン全体にわたる多様なグローバルバイヤーにサービスを提供しています。',
      items: [
        { title: '輸入業者・販売代理店', desc: '完全な輸出書類と梱包付きで、現地市場向けの機械を工場直販価格で調達できます。' },
        { title: '食品・飲料メーカー', desc: '効率的な加工、包装、自動化設備で生産能力を向上させましょう。' },
        { title: 'プロジェクトバイヤー・エンジニア', desc: '当社のエンジニアリングコンサルティングと設備選定サポートで、新しい生産ラインや施設拡張を計画しましょう。' },
        { title: 'OEM・ブランドオーナー', desc: '製品ラインの拡大に向けた、カスタムブランド機械とホワイトラベル設備ソリューション。' },
      ]
    },
    ar: {
      kicker: 'عملاؤنا',
      title: 'من نخدم',
      desc: 'تخدم آلاتنا الصناعية مجموعة متنوعة من المشترين العالميين عبر سلسلة التوريد.',
      items: [
        { title: 'المستوردون والموزعون', desc: 'احصل على الآلات بأسعار المصنع المباشرة لسوقك المحلي مع وثائق تصدير وتغليف كاملة.' },
        { title: 'مصنعو الأغذية والمشروبات', desc: 'قم بزيادة طاقتك الإنتاجية بمعدات معالجة وتعبئة وأتمتة فعالة.' },
        { title: 'مشترو المشاريع والمهندسون', desc: 'خطط لخطوط إنتاج جديدة أو توسعات المنشآت مع استشاراتنا الهندسية ودعم اختيار المعدات.' },
        { title: 'مصنعو المعدات الأصلية وأصحاب العلامات التجارية', desc: 'آلات مخصصة بعلامتك التجارية وحلول معدات بالعلامة البيضاء لتوسيع خط منتجاتك.' },
      ]
    },
    th: {
      kicker: 'ลูกค้าของเรา',
      title: 'เราให้บริการใคร',
      desc: 'เครื่องจักรอุตสาหกรรมของเราให้บริการผู้ซื้อทั่วโลกที่หลากหลายตลอดห่วงโซ่อุปทาน',
      items: [
        { title: 'ผู้นำเข้าและผู้จัดจำหน่าย', desc: 'จัดหาเครื่องจักรในราคาโรงงานโดยตรงสำหรับตลาดท้องถิ่นของคุณ พร้อมเอกสารส่งออกและบรรจุภัณฑ์ครบถ้วน' },
        { title: 'ผู้ผลิตอาหารและเครื่องดื่ม', desc: 'เพิ่มกำลังการผลิตด้วยอุปกรณ์แปรรูป บรรจุภัณฑ์ และระบบอัตโนมัติที่มีประสิทธิภาพ' },
        { title: 'ผู้ซื้อโครงการและวิศวกร', desc: 'วางแผนสายการผลิตใหม่หรือการขยายโรงงานด้วยคำปรึกษาทางวิศวกรรมและการสนับสนุนการเลือกอุปกรณ์จากเรา' },
        { title: 'OEM และเจ้าของแบรนด์', desc: 'เครื่องจักรติดแบรนด์ของคุณและโซลูชันอุปกรณ์ไวท์เลเบลสำหรับขยายสายผลิตภัณฑ์ของคุณ' },
      ]
    },
    vi: {
      kicker: 'KHÁCH HÀNG CỦA CHÚNG TÔI',
      title: 'Đối Tượng Phục Vụ',
      desc: 'Máy móc công nghiệp của chúng tôi phục vụ đa dạng khách hàng toàn cầu trong chuỗi cung ứng.',
      items: [
        { title: 'Nhà Nhập Khẩu và Phân Phối', desc: 'Mua máy móc với giá trực tiếp từ nhà máy cho thị trường địa phương của bạn với đầy đủ chứng từ xuất khẩu và đóng gói.' },
        { title: 'Nhà Sản Xuất Thực Phẩm và Đồ Uống', desc: 'Nâng cao năng lực sản xuất với thiết bị chế biến, đóng gói và tự động hóa hiệu quả.' },
        { title: 'Nhà Mua Dự Án và Kỹ Sư', desc: 'Lập kế hoạch dây chuyền sản xuất mới hoặc mở rộng nhà máy với tư vấn kỹ thuật và hỗ trợ lựa chọn thiết bị từ chúng tôi.' },
        { title: 'OEM và Chủ Sở Hữu Thương Hiệu', desc: 'Máy móc mang thương hiệu riêng và giải pháp thiết bị nhãn trắng để mở rộng dòng sản phẩm của bạn.' },
      ]
    },
    de: {
      kicker: 'UNSERE KUNDEN',
      title: 'Wen wir bedienen',
      desc: 'Unsere Industriemaschinen bedienen eine vielfältige Palette globaler Einkäufer entlang der gesamten Lieferkette.',
      items: [
        { title: 'Importeure und Händler', desc: 'Beziehen Sie Maschinen zu direkten Werkspreisen für Ihren lokalen Markt mit vollständiger Exportdokumentation und Verpackung.' },
        { title: 'Lebensmittel- und Getränkehersteller', desc: 'Steigern Sie Ihre Produktionskapazität mit effizienten Verarbeitungs-, Verpackungs- und Automatisierungsanlagen.' },
        { title: 'Projektkäufer und Ingenieure', desc: 'Planen Sie neue Produktionslinien oder Werkserweiterungen mit unserer Ingenieursberatung und Unterstützung bei der Geräteauswahl.' },
        { title: 'OEM und Markeninhaber', desc: 'Individuell gebrandete Maschinen und White-Label-Ausrüstungslösungen zur Erweiterung Ihrer Produktlinie.' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-600">{t.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{t.desc}</p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item: any, i: number) => (
            <Card key={i} className="p-8 text-center transition hover:shadow-elev-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-800">
                {customerIcons[i]}
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href={`/${lang}/industries`} className="text-sm font-semibold text-accent-600 hover:underline">
            {({ en: 'View industries we serve →', cn: '查看我们服务的行业 →', zh: '查看我們服務的產業 →', fr: 'Voir les industries desservies →', es: 'Ver industrias que atendemos →', pt: 'Ver setores que atendemos →', ko: '서비스 산업 보기 →', ja: '対応業界を見る →', ar: 'عرض الصناعات التي نخدمها ←', th: 'ดูอุตสาหกรรมที่เราให้บริการ →', vi: 'Xem ngành chúng tôi phục vụ →', de: 'Branchen ansehen →' } as Record<string, string>)[lang] || 'View industries we serve →'}
          </Link>
          <Link href={`/${lang}/recommend`} className="text-sm font-semibold text-accent-600 hover:underline">
            {({ en: 'Get a machine recommendation →', cn: '获取机械推荐 →', zh: '取得機械推薦 →', fr: 'Obtenir une recommandation →', es: 'Obtener recomendación →', pt: 'Obter recomendação →', ko: '기계 추천 받기 →', ja: '機械の提案を受ける →', ar: 'احصل على توصية ←', th: 'รับคำแนะนำเครื่องจักร →', vi: 'Nhận đề xuất máy →', de: 'Maschinenempfehlung erhalten →' } as Record<string, string>)[lang] || 'Get a machine recommendation →'}
          </Link>
        </div>
      </Container>
    </section>
  )
}
