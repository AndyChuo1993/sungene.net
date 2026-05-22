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
      kicker: 'WHO WE SERVE',
      title: 'Buyers we partner with',
      desc: 'We work across four buyer profiles. Each one gets the same supplier vetting up front, our own team handling QC, and a partner who answers same-day.',
      items: [
        { title: 'Online retailers & Amazon FBA sellers', desc: 'You need consistent, photo-faithful product from China and want someone in Asia to check the goods before they go in your container.' },
        { title: 'Private-label brand owners', desc: 'You sell home, kitchen, garden, or packaging products under your own brand and need quality control that survives more than two re-orders.' },
        { title: 'Importers & distributors', desc: 'You sell into your local market and want a partner who replies same-day, sends inspection videos, and disclosed FOB prices when you ask.' },
        { title: 'Boutique buyers & specialty stores', desc: 'You order small batches, you care about how the product actually looks in hand, and you would rather pay a fair markup than chase factories yourself.' },
      ]
    },
    cn: {
      kicker: '我们服务谁',
      title: '我们合作的买家类型',
      desc: '我们服务四类买家。每一类都享有相同的供应商审核、由我们自己团队亲自验货、以及当日回应的合作夥伴。',
      items: [
        { title: '电商卖家与亚马逊 FBA 卖家', desc: '您需要从中国稳定拿到与图片一致的产品，希望有人在亚洲帮您验货后再装柜。' },
        { title: '自有品牌商', desc: '您在家居、厨房、园艺或包装领域做自有品牌，需要的是补单两次以上还稳得住品质的供应商。' },
        { title: '进口商与经销商', desc: '您卖到本地市场，想要的是当天回讯、附验货视频、被问就告诉您 FOB 价的合作伙伴。' },
        { title: '精品采购与特色店家', desc: '您下小批次单，在意产品上手实际质感，宁愿付合理加价也不想自己天天追工厂。' },
      ]
    },
    zh: {
      kicker: '我們服務誰',
      title: '我們合作的買家類型',
      desc: '我們服務四類買家。每一類都享有相同的供應商審核、由我們自己團隊親自驗貨、以及當日回應的合作夥伴。',
      items: [
        { title: '電商賣家與亞馬遜 FBA 賣家', desc: '你需要從中國穩定拿到與圖片一致的產品，希望有人在亞洲幫你驗貨後再裝櫃。' },
        { title: '自有品牌商', desc: '你在家居、廚房、園藝或包裝領域做自有品牌，需要的是補單兩次以上還穩得住品質的供應商。' },
        { title: '進口商與經銷商', desc: '你賣到本地市場，想要的是當天回訊、附驗貨影片、被問就告訴你 FOB 價的合作夥伴。' },
        { title: '精品採購與特色店家', desc: '你下小批次單，在意產品上手實際質感，寧願付合理加價也不想自己天天追工廠。' },
      ]
    },
    fr: {
      kicker: 'À QUI NOUS NOUS ADRESSONS',
      title: 'Les acheteurs avec qui nous travaillons',
      desc: "Nous travaillons avec quatre profils d'acheteurs. Chacun bénéficie du même filtrage des fournisseurs, du contrôle qualité par notre propre équipe et d'un partenaire qui répond le jour même.",
      items: [
        { title: 'E-commerçants & vendeurs Amazon FBA', desc: 'Vous voulez des produits chinois conformes aux photos, et un partenaire en Asie qui inspecte avant la mise en conteneur.' },
        { title: 'Marques en private label', desc: 'Vous vendez maison, cuisine, jardin ou emballage sous votre marque et avez besoin d’une qualité qui tient plus de deux réassorts.' },
        { title: 'Importateurs & distributeurs', desc: 'Vous vendez sur votre marché local et cherchez un partenaire qui répond le jour même, fournit les vidéos d’inspection et divulgue les prix FOB sur demande.' },
        { title: 'Acheteurs boutique & magasins spécialisés', desc: "Vous commandez en petite série, vous tenez à l'aspect réel du produit en main, et vous préférez payer une marge correcte plutôt que poursuivre les usines vous-même." },
      ]
    },
    es: {
      kicker: 'A QUIÉN SERVIMOS',
      title: 'Compradores con quienes trabajamos',
      desc: 'Trabajamos con cuatro perfiles de comprador. Cada uno recibe la misma selección de proveedores, control de calidad por nuestro propio equipo, y un socio que responde el mismo día.',
      items: [
        { title: 'E-commerce y vendedores de Amazon FBA', desc: 'Necesita producto chino fiel a las fotos y quiere alguien en Asia que revise antes de cargar el contenedor.' },
        { title: 'Marcas de private label', desc: 'Vende hogar, cocina, jardín o empaque bajo su marca y necesita una calidad que aguante más de dos rondas de reabastecimiento.' },
        { title: 'Importadores y distribuidores', desc: 'Vende en su mercado local y busca un socio que responda el mismo día, envíe videos de inspección y revele precios FOB cuando pregunta.' },
        { title: 'Compradores boutique y tiendas especializadas', desc: 'Pide lotes pequeños, le importa cómo se ve el producto en la mano, y prefiere pagar un margen justo antes que perseguir fábricas usted mismo.' },
      ]
    },
    pt: {
      kicker: 'NOSSOS CLIENTES',
      title: 'Quem Atendemos',
      desc: 'Atendemos compradores de embalagem, casa, jardim e beleza em 40+ países.',
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
          <Link href={`/${lang}/sourcing`} className="text-sm font-semibold text-accent-600 hover:underline">
            {({ en: 'How we work with these buyers →', zh: '我們怎麼跟這些買家合作 →', cn: '我们怎么跟这些买家合作 →', fr: 'Comment nous travaillons avec eux →', es: 'Cómo trabajamos con ellos →' } as Record<string, string>)[lang] || 'How we work with these buyers →'}
          </Link>
          <Link href={`/${lang}/contact`} className="text-sm font-semibold text-accent-600 hover:underline">
            {({ en: 'Get sourcing assessment →', cn: '获取采购评估 →', zh: '取得採購評估 →', fr: 'Obtenir une évaluation →', es: 'Obtener evaluación →', pt: 'Obter avaliação →', ko: '소싱 평가 받기 →', ja: 'ソーシング評価を受ける →', ar: 'احصل على تقييم التوريد ←', th: 'รับการประเมินการจัดหา →', vi: 'Nhận đánh giá sourcing →', de: 'Sourcing-Bewertung erhalten →' } as Record<string, string>)[lang] || 'Get sourcing assessment →'}
          </Link>
        </div>
      </Container>
    </section>
  )
}
