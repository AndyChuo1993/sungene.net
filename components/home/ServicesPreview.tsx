import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

const cardHrefs = [
  'powder-filling-machine',
  'liquid-filling-machine',
  'snack-processing-line',
  'pouch-packing-machine',
  'conveyor-system',
]

const cardSvgIcons = [
  // Powder/Box icon
  <svg key="powder" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>,
  // Liquid/Droplet icon
  <svg key="liquid" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-7.5 9-7.5 13.5a7.5 7.5 0 0015 0C19.5 11.25 12 2.25 12 2.25z" /></svg>,
  // Food/Settings icon
  <svg key="food" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  // Packaging/Archive icon
  <svg key="pack" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
  // Conveyor/Arrows icon
  <svg key="conv" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
]

export default function ServicesPreview({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      sectionLabel: 'EQUIPMENT & SOLUTIONS',
      title: 'What Do You Need to Pack or Process?',
      items: [
        { title: 'Powder & Flour', desc: 'Spices, coffee, milk powder, detergent, pharmaceutical...' },
        { title: 'Liquid & Paste', desc: 'Sauces, beverages, cooking oil, cosmetics, chemicals...' },
        { title: 'Snack & Food', desc: 'Nuts, candy, frozen food, meat, bakery...' },
        { title: 'Pouch & Packaging', desc: 'Stand-up pouches, pillow bags, vacuum packs...' },
        { title: 'Line Integration', desc: 'Conveyors, checkweighers, detectors, palletizers, and integration planning...' },
      ],
      banner: 'Not sure which machine? → Send us your product details',
    },
    cn: {
      sectionLabel: '设备与解决方案',
      title: '您需要包装或加工什么？',
      items: [
        { title: '粉末与面粉', desc: '香料、咖啡、奶粉、洗涤剂、药品...' },
        { title: '液体与膏体', desc: '酱料、饮料、食用油、化妆品、化学品...' },
        { title: '休闲食品', desc: '坚果、糖果、冷冻食品、肉类、烘焙...' },
        { title: '袋装与包装', desc: '自立袋、枕形袋、真空包装...' },
        { title: '产线整合', desc: '输送、检重、检测、码垛与整线整合规划...' },
      ],
      banner: '不确定哪台机器？→ 发送您的产品信息给我们',
    },
    zh: {
      sectionLabel: '設備與解決方案',
      title: '您需要包裝或加工什麼？',
      items: [
        { title: '粉末與麵粉', desc: '香料、咖啡、奶粉、清潔劑、藥品...' },
        { title: '液體與膏體', desc: '醬料、飲料、食用油、化妝品、化學品...' },
        { title: '休閒食品', desc: '堅果、糖果、冷凍食品、肉類、烘焙...' },
        { title: '袋裝與包裝', desc: '自立袋、枕形袋、真空包裝...' },
        { title: '產線整合', desc: '輸送、檢重、檢測、碼垛與整線整合規劃...' },
      ],
      banner: '不確定哪台機器？→ 發送您的產品資訊給我們',
    },
    fr: {
      sectionLabel: 'ÉQUIPEMENTS & SOLUTIONS',
      title: 'Que devez-vous emballer ou transformer ?',
      items: [
        { title: 'Poudre et farine', desc: 'Épices, café, lait en poudre, détergent, pharmaceutique...' },
        { title: 'Liquide et pâte', desc: 'Sauces, boissons, huile de cuisson, cosmétiques, produits chimiques...' },
        { title: 'Snacks et alimentaire', desc: 'Noix, bonbons, surgelés, viande, boulangerie...' },
        { title: 'Sachets et emballage', desc: 'Sachets stand-up, sachets coussin, emballages sous vide...' },
        { title: 'Intégration de ligne', desc: 'Convoyeurs, contrôle de poids, détection, palettiseurs et planification d’intégration...' },
      ],
      banner: 'Pas sûr de la machine ? → Envoyez-nous les détails de votre produit',
    },
    es: {
      sectionLabel: 'EQUIPOS & SOLUCIONES',
      title: '¿Qué necesita empacar o procesar?',
      items: [
        { title: 'Polvo y harina', desc: 'Especias, café, leche en polvo, detergente, farmacéutico...' },
        { title: 'Líquido y pasta', desc: 'Salsas, bebidas, aceite de cocina, cosméticos, químicos...' },
        { title: 'Snacks y alimentos', desc: 'Nueces, dulces, alimentos congelados, carne, panadería...' },
        { title: 'Bolsas y empaque', desc: 'Bolsas stand-up, bolsas almohada, empaque al vacío...' },
        { title: 'Integración de línea', desc: 'Transportadores, control de peso, detección, paletizadores y planificación de integración...' },
      ],
      banner: '¿No sabe qué máquina necesita? → Envíenos los detalles de su producto',
    },
    pt: {
      sectionLabel: 'EQUIPAMENTOS & SOLUÇÕES',
      title: 'O que você precisa embalar ou processar?',
      items: [
        { title: 'Pó e farinha', desc: 'Temperos, café, leite em pó, detergente, farmacêutico...' },
        { title: 'Líquido e pasta', desc: 'Molhos, bebidas, óleo de cozinha, cosméticos, químicos...' },
        { title: 'Snacks e alimentos', desc: 'Castanhas, doces, alimentos congelados, carne, padaria...' },
        { title: 'Sachês e embalagem', desc: 'Sachês stand-up, sachês almofada, embalagens a vácuo...' },
        { title: 'Integração de linha', desc: 'Esteiras, checkweigher, detectores, paletizadores e planejamento de integração...' },
      ],
      banner: 'Não tem certeza de qual máquina? → Envie-nos os detalhes do seu produto',
    },
    ko: {
      sectionLabel: '장비 & 솔루션',
      title: '무엇을 포장하거나 가공해야 하나요?',
      items: [
        { title: '분말 및 밀가루', desc: '향신료, 커피, 분유, 세제, 의약품...' },
        { title: '액체 및 페이스트', desc: '소스, 음료, 식용유, 화장품, 화학제품...' },
        { title: '스낵 및 식품', desc: '견과류, 사탕, 냉동식품, 육류, 베이커리...' },
        { title: '파우치 및 포장', desc: '스탠드업 파우치, 필로우백, 진공포장...' },
        { title: '라인 통합', desc: '컨베이어, 중량검사, 이물검출, 팔레타이저 및 라인 통합 계획...' },
      ],
      banner: '어떤 기계가 필요한지 모르겠나요? → 제품 정보를 보내주세요',
    },
    ja: {
      sectionLabel: '機器 & ソリューション',
      title: '何を包装・加工する必要がありますか？',
      items: [
        { title: '粉末・小麦粉', desc: 'スパイス、コーヒー、粉ミルク、洗剤、医薬品...' },
        { title: '液体・ペースト', desc: 'ソース、飲料、食用油、化粧品、化学品...' },
        { title: 'スナック・食品', desc: 'ナッツ、キャンディ、冷凍食品、肉、ベーカリー...' },
        { title: 'パウチ・包装', desc: 'スタンドアップパウチ、ピロー袋、真空パック...' },
        { title: 'ライン統合', desc: 'コンベア、チェッカー、検出機、パレタイザー、ライン統合計画...' },
      ],
      banner: 'どの機械が必要かわからない？→ 製品の詳細をお送りください',
    },
    ar: {
      sectionLabel: 'معدات وحلول',
      title: 'ماذا تحتاج أن تعبئ أو تعالج؟',
      items: [
        { title: 'مسحوق ودقيق', desc: 'بهارات، قهوة، حليب بودرة، منظفات، أدوية...' },
        { title: 'سائل ومعجون', desc: 'صلصات، مشروبات، زيت طبخ، مستحضرات تجميل، كيماويات...' },
        { title: 'وجبات خفيفة وأغذية', desc: 'مكسرات، حلويات، أطعمة مجمدة، لحوم، مخبوزات...' },
        { title: 'أكياس وتغليف', desc: 'أكياس قائمة، أكياس وسادة، تغليف بالتفريغ...' },
        { title: 'تكامل الخط', desc: 'سيور ناقلة، فحص وزن، كشف، رص على منصات، وتخطيط التكامل...' },
      ],
      banner: 'لست متأكدًا من الماكينة المناسبة؟ → أرسل لنا تفاصيل منتجك',
    },
    th: {
      sectionLabel: 'อุปกรณ์ & โซลูชัน',
      title: 'คุณต้องการบรรจุหรือแปรรูปอะไร?',
      items: [
        { title: 'ผงและแป้ง', desc: 'เครื่องเทศ กาแฟ นมผง ผงซักฟอก ยา...' },
        { title: 'ของเหลวและครีม', desc: 'ซอส เครื่องดื่ม น้ำมันปรุงอาหาร เครื่องสำอาง สารเคมี...' },
        { title: 'ขนมและอาหาร', desc: 'ถั่ว ลูกอม อาหารแช่แข็ง เนื้อสัตว์ เบเกอรี่...' },
        { title: 'ซองและบรรจุภัณฑ์', desc: 'ซองตั้ง ซองหมอน บรรจุภัณฑ์สุญญากาศ...' },
        { title: 'บูรณาการไลน์', desc: 'สายพาน เครื่องตรวจน้ำหนัก เครื่องตรวจจับ เครื่องจัดเรียงพาเลท และการวางแผนการบูรณาการ...' },
      ],
      banner: 'ไม่แน่ใจว่าต้องใช้เครื่องจักรใด? → ส่งรายละเอียดผลิตภัณฑ์ของคุณมาให้เรา',
    },
    vi: {
      sectionLabel: 'THIẾT BỊ & GIẢI PHÁP',
      title: 'Bạn cần đóng gói hoặc chế biến gì?',
      items: [
        { title: 'Bột và tinh bột', desc: 'Gia vị, cà phê, sữa bột, bột giặt, dược phẩm...' },
        { title: 'Chất lỏng và kem', desc: 'Nước chấm, đồ uống, dầu ăn, mỹ phẩm, hóa chất...' },
        { title: 'Đồ ăn nhẹ và thực phẩm', desc: 'Hạt, kẹo, thực phẩm đông lạnh, thịt, bánh...' },
        { title: 'Túi và bao bì', desc: 'Túi đứng, túi gối, bao bì hút chân không...' },
        { title: 'Tích hợp dây chuyền', desc: 'Băng tải, cân kiểm tra, thiết bị dò, xếp pallet và kế hoạch tích hợp...' },
      ],
      banner: 'Không chắc cần máy nào? → Gửi thông tin sản phẩm cho chúng tôi',
    },
    de: {
      sectionLabel: 'ANLAGEN & LÖSUNGEN',
      title: 'Was müssen Sie verpacken oder verarbeiten?',
      items: [
        { title: 'Pulver und Mehl', desc: 'Gewürze, Kaffee, Milchpulver, Waschmittel, Pharma...' },
        { title: 'Flüssigkeit und Paste', desc: 'Soßen, Getränke, Speiseöl, Kosmetik, Chemikalien...' },
        { title: 'Snacks und Lebensmittel', desc: 'Nüsse, Süßigkeiten, Tiefkühlkost, Fleisch, Backwaren...' },
        { title: 'Beutel und Verpackung', desc: 'Standbeutel, Kissenbeutel, Vakuumverpackungen...' },
        { title: 'Linienintegration', desc: 'Förderer, Kontrollwaagen, Detektoren, Palettierer und Integrationsplanung...' },
      ],
      banner: 'Nicht sicher, welche Maschine? → Senden Sie uns Ihre Produktdetails',
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container className="max-w-7xl">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-accent-500" />
              <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em]">{t.sectionLabel}</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">{t.title}</h2>
          </div>
          <Link href={`/${lang}/machinery`} className="hidden sm:flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700">
            View all machinery
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>

        {/* 5-card grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.items.map((item: any, i: number) => (
            <Link key={i} href={`/${lang}/machines/${cardHrefs[i]}`} className="group relative flex flex-col bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300">
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 group-hover:bg-accent-100 transition-colors">
                {cardSvgIcons[i]}
              </div>
              <h3 className="font-bold text-gray-900 text-base leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent-600 group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-10">
          <Link
            href={`/${lang}/recommend`}
            className="block rounded-2xl bg-brand-950 px-8 py-6 text-center text-lg font-semibold text-white transition hover:bg-brand-900 sm:text-xl"
          >
            {t.banner}
          </Link>
        </div>
      </Container>
    </section>
  )
}
