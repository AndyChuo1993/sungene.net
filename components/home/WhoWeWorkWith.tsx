'use client'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

const customerIcons = [
  // Globe - importers
  <svg key="imp" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  // Plant - producers
  <svg key="mfg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
  // Clipboard - project buyers
  <svg key="proj" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
  // Truck - brand owners
  <svg key="oem" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
]

export default function WhoWeWorkWith({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'OUR CLIENTS',
      title: 'Who We Serve',
      desc: 'Our sourcing expertise serves a diverse range of global buyers across the industrial supply chain.',
      items: [
        { title: 'Importers & Distributors', desc: 'Source machinery with professional technical vetting for your local market, including full export documentation and logistics coordination.' },
        { title: 'Food & Beverage Producers', desc: 'Secure the right throughput with verified processing, packaging, and automation equipment.' },
        { title: 'Project Buyers & Engineers', desc: 'Plan new line integrations or facility expansions with our engineering consultation and supplier auditing support.' },
        { title: 'Brand Owners & Private Label', desc: 'Private-label equipment coordination and custom-branded machinery options for product line expansion.' },
      ]
    },
    cn: {
      kicker: '我们的客户',
      title: '服务对象',
      desc: '我们的采购专业知识服务于工业供应链中多元化的全球买家。',
      items: [
        { title: '进口商与经销商', desc: '为您的当地市场提供经过专业技术审核的机械采购，包含完整的出口文件与物流协调。' },
        { title: '食品饮料企业', desc: '通过经过验证的加工、包装与自动化设备，确保您的产能目标稳健达成。' },
        { title: '项目采购与工程师', desc: '为新线体整合或场地扩建提供工程咨询与供应商审核支持。' },
        { title: '品牌商与贴牌需求', desc: '为您的产品线扩张提供贴牌设备协调与定制品牌机械选项。' },
      ]
    },
    zh: {
      kicker: '傳統產業',
      title: '服務對象',
      desc: '我們的採購專業知識服務於工業供應鏈中多元化的全球買家。',
      items: [
        { title: '進口商與經銷商', desc: '為您的當地市場提供經過專業技術審核的機械採購，包含完整的出口文件與物流協調。' },
        { title: '食品飲料企業', desc: '透過經過驗證的加工、包裝與自動化設備，確保您的產能目標穩健達成。' },
        { title: '專案採購與工程師', desc: '為新線體整合或場地擴建提供工程諮詢與供應商審核支援。' },
        { title: '品牌商與貼牌需求', desc: '為您的產品線擴張提供貼牌設備協調與客製品牌機械選項。' },
      ]
    },
    fr: {
      kicker: 'NOS CLIENTS',
      title: 'À qui nous nous adressons',
      desc: 'Notre expertise en sourcing est au service d\'une clientèle mondiale diversifiée à travers la chaîne d\'approvisionnement industrielle.',
      items: [
        { title: 'Importateurs et distributeurs', desc: 'Approvisionnez-vous en machines avec un audit technique professionnel pour votre marché local, incluant la documentation complète.' },
        { title: 'Entreprises agroalimentaires', desc: 'Atteignez vos objectifs de débit avec des équipements de transformation, d\'emballage et d\'automatisation vérifiés.' },
        { title: 'Acheteurs de projets et ingénieurs', desc: 'Planifiez de nouvelles lignes ou des extensions d\'usine avec notre conseil en ingénierie et l\'audit des fournisseurs.' },
        { title: 'Marques & private label', desc: 'Coordination d’équipements en marque blanche et options de marquage pour l’expansion de votre gamme.' },
      ]
    },
    es: {
      kicker: 'NUESTROS CLIENTES',
      title: 'A quién servimos',
      desc: 'Nuestra experiencia en abastecimiento atiende a una amplia gama de compradores globales en toda la cadena de suministro industrial.',
      items: [
        { title: 'Importadores y distribuidores', desc: 'Adquiera maquinaria con auditoría técnica profesional para su mercado local, incluyendo documentación completa y logística.' },
        { title: 'Fabricantes de alimentos y bebidas', desc: 'Asegure su capacidad de producción con equipos verificados de procesamiento, empaque y automatización.' },
        { title: 'Compradores de proyectos e ingenieros', desc: 'Planifique nuevas líneas o ampliaciones con nuestra consultoría de ingeniería y soporte en auditoría de proveedores.' },
        { title: 'Marcas y private label', desc: 'Coordinación de equipos de marca blanca y opciones de marca para ampliar su línea de productos.' },
      ]
    },
    pt: {
      kicker: 'NOSSOS CLIENTES',
      title: 'Quem Atendemos',
      desc: 'Nossa expertise em sourcing atende uma ampla variedade de compradores globais em toda a cadeia de suprimentos industrial.',
      items: [
        { title: 'Importadores e Distribuidores', desc: 'Adquira máquinas com auditoria técnica profissional para o seu mercado local, incluindo documentação e logística completas.' },
        { title: 'Fabricantes de Alimentos e Bebidas', desc: 'Garanta sua capacidade de produção com equipamentos verificados de processamento, embalagem e automação.' },
        { title: 'Compradores de Projetos e Engenheiros', desc: 'Planeje novas linhas ou expansões com nossa consultoria de engenharia e suporte na auditoria de fornecedores.' },
        { title: 'Marcas e private label', desc: 'Coordenação de equipamentos white-label e opções de marca para expandir sua linha de produtos.' },
      ]
    },
    ko: {
      kicker: '고객 안내',
      title: '서비스 대상',
      desc: '당사의 소싱 전문 지식은 산업 공급망 전반에 걸쳐 다양한 글로벌 바이어에게 서비스를 제공합니다.',
      items: [
        { title: '수입업체 및 유통업체', desc: '완전한 수출 서류 및 물류 조정과 함께 현지 시장을 위한 전문적인 기술 검증을 거친 기계를 구매하세요.' },
        { title: '식품 및 음료 제조업체', desc: '검증된 가공, 포장 및 자동화 장비로 생산 능력을 안정적으로 확보하세요.' },
        { title: '프로젝트 바이어 및 엔지니어', desc: '당사의 엔지니어링 컨설팅과 공급업체 심사 지원으로 새로운 생산 라인 또는 시설 확장을 계획하세요.' },
        { title: '브랜드 오너 & 프라이빗 라벨', desc: '제품 라인 확장을 위한 프라이빗 라벨 장비 조율 및 커스텀 브랜딩 옵션.' },
      ]
    },
    ja: {
      kicker: '当社の顧客',
      title: 'サービス対象',
      desc: '当社のソーシングの専門知識は、産業サプライチェーン全体にわたる多様なグローバルバイヤーにサービスを提供しています。',
      items: [
        { title: '輸入業者・販売代理店', desc: '完全な輸出書類と物流調整付きで、現地市場向けの専門的な技術審査を経た機械を調達できます。' },
        { title: '食品・飲料メーカー', desc: '検証済みの加工、包装、自動化設備で、確実な生産能力を確保しましょう。' },
        { title: 'プロジェクトバイヤー・エンジニア', desc: '当社のエンジニアリングコンサルティングとサプライヤー監査サポートで、新しい生産ラインや施設拡張を計画しましょう。' },
        { title: 'ブランドオーナー／プライベートラベル', desc: '製品ライン拡大に向けたプライベートラベル設備の調整とカスタムブランディングの選択肢。' },
      ]
    },
    ar: {
      kicker: 'عملاؤنا',
      title: 'من نخدم',
      desc: 'تخدم خبرتنا في التوريد مجموعة متنوعة من المشترين العالميين عبر سلسلة التوريد الصناعية.',
      items: [
        { title: 'المستوردون والموزعون', desc: 'احصل على الآلات مع تدقيق تقني مهني لسوقك المحلي مع وثائق تصدير وتنسيق لوجستي كامل.' },
        { title: 'مصنعو الأغذية والمشروبات', desc: 'ضمن قدرتك الإنتاجية بمعدات معالجة وتعبئة وأتمتة تم التحقق منها.' },
        { title: 'مشترو المشاريع والمهندسون', desc: 'خطط لخطوط إنتاج جديدة أو توسعات مع استشاراتنا الهندسية ودعم تدقيق الموردين.' },
        { title: 'مصنعو المعدات الأصلية وأصحاب العلامات التجارية', desc: 'حلول معدات تم التحقق منها وآلات مخصصة بعلامتك التجارية لتوسيع خط منتجاتك.' },
      ]
    },
    th: {
      kicker: 'ลูกค้าของเรา',
      title: 'เราให้บริการใคร',
      desc: 'ความเชี่ยวชาญในการจัดหาของเราให้บริการผู้ซื้อทั่วโลกที่หลากหลายตลอดห่วงโซ่อุปทานอุตสาหกรรม',
      items: [
        { title: 'ผู้นำเข้าและผู้จัดจำหน่าย', desc: 'จัดหาเครื่องจักรด้วยการตรวจสอบทางเทคนิคอย่างมืออาชีพสำหรับตลาดท้องถิ่นของคุณ พร้อมเอกสารส่งออกและการประสานงานโลจิสติกส์' },
        { title: 'ธุรกิจอาหารและเครื่องดื่ม', desc: 'บรรลุเป้าหมาย throughput ด้วยอุปกรณ์แปรรูป บรรจุภัณฑ์ และระบบอัตโนมัติที่ผ่านการตรวจสอบแล้ว' },
        { title: 'ผู้ซื้อโครงการและวิศวกร', desc: 'วางแผนการบูรณาการไลน์ใหม่หรือการขยายพื้นที่ปฏิบัติงานด้วยคำปรึกษาทางวิศวกรรมและการสนับสนุนการตรวจสอบซัพพลายเออร์จากเรา' },
        { title: 'เจ้าของแบรนด์และไพรเวทเลเบล', desc: 'การประสานงานอุปกรณ์แบบไวท์เลเบลและตัวเลือกการติดแบรนด์ของคุณเอง' },
      ]
    },
    vi: {
      kicker: 'KHÁCH HÀNG CỦA CHÚNG TÔI',
      title: 'Đối Tượng Phục Vụ',
      desc: 'Chuyên môn tìm nguồn cung ứng của chúng tôi phục vụ đa dạng khách hàng toàn cầu trong chuỗi cung ứng công nghiệp.',
      items: [
        { title: 'Nhà Nhập Khẩu và Phân Phối', desc: 'Mua máy móc với thẩm định kỹ thuật chuyên nghiệp cho thị trường địa phương của bạn, bao gồm đầy đủ chứng từ và điều phối hậu cần.' },
        { title: 'Nhà Sản Xuất Thực Phẩm và Đồ Uống', desc: 'Đảm bảo năng lực sản xuất với thiết bị chế biến, đóng gói và tự động hóa đã được xác minh.' },
        { title: 'Nhà Mua Dự Án và Kỹ Sư', desc: 'Lập kế hoạch tích hợp dây chuyền mới hoặc mở rộng mặt bằng vận hành với tư vấn kỹ thuật và hỗ trợ thẩm định nhà cung cấp.' },
        { title: 'Chủ thương hiệu & private label', desc: 'Điều phối thiết bị nhãn trắng và tùy chọn gắn thương hiệu để mở rộng dòng sản phẩm.' },
      ]
    },
    de: {
      kicker: 'UNSERE KUNDEN',
      title: 'Wen wir bedienen',
      desc: 'Unsere Sourcing-Expertise bedient eine vielfältige Palette globaler Einkäufer entlang der industriellen Lieferkette.',
      items: [
        { title: 'Importeure und Händler', desc: 'Beziehen Sie Maschinen mit professioneller technischer Prüfung für Ihren lokalen Markt, inklusive vollständiger Exportdokumentation.' },
        { title: 'Lebensmittel- und Getränkehersteller', desc: 'Sichern Sie sich die richtige Produktionskapazität mit geprüften Verarbeitungs-, Verpackungs- und Automatisierungsanlagen.' },
        { title: 'Projektkäufer und Ingenieure', desc: 'Planen Sie neue Produktionslinien oder Werkserweiterungen mit unserer Ingenieursberatung und Lieferantenaudit-Unterstützung.' },
        { title: 'Markeninhaber & Private Label', desc: 'Koordination von White-Label-Ausrüstung und Branding-Optionen zur Erweiterung Ihrer Produktlinie.' },
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
          <Link href={`/${lang}/assessment`} className="text-sm font-semibold text-accent-600 hover:underline">
            {({ en: 'Get sourcing assessment →', cn: '获取采购评估 →', zh: '取得採購評估 →', fr: 'Obtenir une évaluation →', es: 'Obtener evaluación →', pt: 'Obter avaliação →', ko: '소싱 평가 받기 →', ja: 'ソーシング評価を受ける →', ar: 'احصل على تقييم التوريد ←', th: 'รับการประเมินการจัดหา →', vi: 'Nhận đánh giá sourcing →', de: 'Sourcing-Bewertung erhalten →' } as Record<string, string>)[lang] || 'Get sourcing assessment →'}
          </Link>
        </div>
      </Container>
    </section>
  )
}
