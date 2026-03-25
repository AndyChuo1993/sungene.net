import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'

const cardIcons = ['🏭', '💧', '🍿', '📦', '⚙️']

const cardHrefs = [
  'powder-filling-machine',
  'liquid-filling-machine',
  'snack-processing-line',
  'pouch-packing-machine',
  'conveyor-system',
]

export default function ServicesPreview({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      title: 'What Do You Need to Pack or Process?',
      items: [
        { title: 'Powder & Flour', desc: 'Spices, coffee, milk powder, detergent, pharmaceutical...' },
        { title: 'Liquid & Paste', desc: 'Sauces, beverages, cooking oil, cosmetics, chemicals...' },
        { title: 'Snack & Food', desc: 'Nuts, candy, frozen food, meat, bakery...' },
        { title: 'Pouch & Packaging', desc: 'Stand-up pouches, pillow bags, vacuum packs...' },
        { title: 'Production Line', desc: 'Complete automated lines, conveyors, palletizers...' },
      ],
      banner: 'Not sure which machine? → Send us your product details',
    },
    cn: {
      title: '您需要包装或加工什么？',
      items: [
        { title: '粉末与面粉', desc: '香料、咖啡、奶粉、洗涤剂、药品...' },
        { title: '液体与膏体', desc: '酱料、饮料、食用油、化妆品、化学品...' },
        { title: '休闲食品', desc: '坚果、糖果、冷冻食品、肉类、烘焙...' },
        { title: '袋装与包装', desc: '自立袋、枕形袋、真空包装...' },
        { title: '生产线', desc: '全自动产线、输送机、码垛机...' },
      ],
      banner: '不确定哪台机器？→ 发送您的产品信息给我们',
    },
    zh: {
      title: '您需要包裝或加工什麼？',
      items: [
        { title: '粉末與麵粉', desc: '香料、咖啡、奶粉、清潔劑、藥品...' },
        { title: '液體與膏體', desc: '醬料、飲料、食用油、化妝品、化學品...' },
        { title: '休閒食品', desc: '堅果、糖果、冷凍食品、肉類、烘焙...' },
        { title: '袋裝與包裝', desc: '自立袋、枕形袋、真空包裝...' },
        { title: '生產線', desc: '全自動產線、輸送機、碼垛機...' },
      ],
      banner: '不確定哪台機器？→ 發送您的產品資訊給我們',
    },
    fr: {
      title: 'Que devez-vous emballer ou transformer ?',
      items: [
        { title: 'Poudre et farine', desc: 'Épices, café, lait en poudre, détergent, pharmaceutique...' },
        { title: 'Liquide et pâte', desc: 'Sauces, boissons, huile de cuisson, cosmétiques, produits chimiques...' },
        { title: 'Snacks et alimentaire', desc: 'Noix, bonbons, surgelés, viande, boulangerie...' },
        { title: 'Sachets et emballage', desc: 'Sachets stand-up, sachets coussin, emballages sous vide...' },
        { title: 'Ligne de production', desc: 'Lignes automatisées complètes, convoyeurs, palettiseurs...' },
      ],
      banner: 'Pas sûr de la machine ? → Envoyez-nous les détails de votre produit',
    },
    es: {
      title: '¿Qué necesita empacar o procesar?',
      items: [
        { title: 'Polvo y harina', desc: 'Especias, café, leche en polvo, detergente, farmacéutico...' },
        { title: 'Líquido y pasta', desc: 'Salsas, bebidas, aceite de cocina, cosméticos, químicos...' },
        { title: 'Snacks y alimentos', desc: 'Nueces, dulces, alimentos congelados, carne, panadería...' },
        { title: 'Bolsas y empaque', desc: 'Bolsas stand-up, bolsas almohada, empaque al vacío...' },
        { title: 'Línea de producción', desc: 'Líneas automatizadas completas, transportadores, paletizadores...' },
      ],
      banner: '¿No sabe qué máquina necesita? → Envíenos los detalles de su producto',
    },
    pt: {
      title: 'O que você precisa embalar ou processar?',
      items: [
        { title: 'Pó e farinha', desc: 'Temperos, café, leite em pó, detergente, farmacêutico...' },
        { title: 'Líquido e pasta', desc: 'Molhos, bebidas, óleo de cozinha, cosméticos, químicos...' },
        { title: 'Snacks e alimentos', desc: 'Castanhas, doces, alimentos congelados, carne, padaria...' },
        { title: 'Sachês e embalagem', desc: 'Sachês stand-up, sachês almofada, embalagens a vácuo...' },
        { title: 'Linha de produção', desc: 'Linhas automatizadas completas, esteiras, paletizadores...' },
      ],
      banner: 'Não tem certeza de qual máquina? → Envie-nos os detalhes do seu produto',
    },
    ko: {
      title: '무엇을 포장하거나 가공해야 하나요?',
      items: [
        { title: '분말 및 밀가루', desc: '향신료, 커피, 분유, 세제, 의약품...' },
        { title: '액체 및 페이스트', desc: '소스, 음료, 식용유, 화장품, 화학제품...' },
        { title: '스낵 및 식품', desc: '견과류, 사탕, 냉동식품, 육류, 베이커리...' },
        { title: '파우치 및 포장', desc: '스탠드업 파우치, 필로우백, 진공포장...' },
        { title: '생산 라인', desc: '완전 자동화 라인, 컨베이어, 팔레타이저...' },
      ],
      banner: '어떤 기계가 필요한지 모르겠나요? → 제품 정보를 보내주세요',
    },
    ja: {
      title: '何を包装・加工する必要がありますか？',
      items: [
        { title: '粉末・小麦粉', desc: 'スパイス、コーヒー、粉ミルク、洗剤、医薬品...' },
        { title: '液体・ペースト', desc: 'ソース、飲料、食用油、化粧品、化学品...' },
        { title: 'スナック・食品', desc: 'ナッツ、キャンディ、冷凍食品、肉、ベーカリー...' },
        { title: 'パウチ・包装', desc: 'スタンドアップパウチ、ピロー袋、真空パック...' },
        { title: '生産ライン', desc: '完全自動化ライン、コンベア、パレタイザー...' },
      ],
      banner: 'どの機械が必要かわからない？→ 製品の詳細をお送りください',
    },
    ar: {
      title: 'ماذا تحتاج أن تعبئ أو تعالج؟',
      items: [
        { title: 'مسحوق ودقيق', desc: 'بهارات، قهوة، حليب بودرة، منظفات، أدوية...' },
        { title: 'سائل ومعجون', desc: 'صلصات، مشروبات، زيت طبخ، مستحضرات تجميل، كيماويات...' },
        { title: 'وجبات خفيفة وأغذية', desc: 'مكسرات، حلويات، أطعمة مجمدة، لحوم، مخبوزات...' },
        { title: 'أكياس وتغليف', desc: 'أكياس قائمة، أكياس وسادة، تغليف بالتفريغ...' },
        { title: 'خط إنتاج', desc: 'خطوط مؤتمتة كاملة، سيور ناقلة، آلات رص...' },
      ],
      banner: 'لست متأكدًا من الماكينة المناسبة؟ → أرسل لنا تفاصيل منتجك',
    },
    th: {
      title: 'คุณต้องการบรรจุหรือแปรรูปอะไร?',
      items: [
        { title: 'ผงและแป้ง', desc: 'เครื่องเทศ กาแฟ นมผง ผงซักฟอก ยา...' },
        { title: 'ของเหลวและครีม', desc: 'ซอส เครื่องดื่ม น้ำมันปรุงอาหาร เครื่องสำอาง สารเคมี...' },
        { title: 'ขนมและอาหาร', desc: 'ถั่ว ลูกอม อาหารแช่แข็ง เนื้อสัตว์ เบเกอรี่...' },
        { title: 'ซองและบรรจุภัณฑ์', desc: 'ซองตั้ง ซองหมอน บรรจุภัณฑ์สุญญากาศ...' },
        { title: 'สายการผลิต', desc: 'สายการผลิตอัตโนมัติครบวงจร สายพาน เครื่องจัดเรียงพาเลท...' },
      ],
      banner: 'ไม่แน่ใจว่าต้องใช้เครื่องจักรใด? → ส่งรายละเอียดผลิตภัณฑ์ของคุณมาให้เรา',
    },
    vi: {
      title: 'Bạn cần đóng gói hoặc chế biến gì?',
      items: [
        { title: 'Bột và tinh bột', desc: 'Gia vị, cà phê, sữa bột, bột giặt, dược phẩm...' },
        { title: 'Chất lỏng và kem', desc: 'Nước chấm, đồ uống, dầu ăn, mỹ phẩm, hóa chất...' },
        { title: 'Đồ ăn nhẹ và thực phẩm', desc: 'Hạt, kẹo, thực phẩm đông lạnh, thịt, bánh...' },
        { title: 'Túi và bao bì', desc: 'Túi đứng, túi gối, bao bì hút chân không...' },
        { title: 'Dây chuyền sản xuất', desc: 'Dây chuyền tự động hoàn chỉnh, băng tải, máy xếp pallet...' },
      ],
      banner: 'Không chắc cần máy nào? → Gửi thông tin sản phẩm cho chúng tôi',
    },
    de: {
      title: 'Was müssen Sie verpacken oder verarbeiten?',
      items: [
        { title: 'Pulver und Mehl', desc: 'Gewürze, Kaffee, Milchpulver, Waschmittel, Pharma...' },
        { title: 'Flüssigkeit und Paste', desc: 'Soßen, Getränke, Speiseöl, Kosmetik, Chemikalien...' },
        { title: 'Snacks und Lebensmittel', desc: 'Nüsse, Süßigkeiten, Tiefkühlkost, Fleisch, Backwaren...' },
        { title: 'Beutel und Verpackung', desc: 'Standbeutel, Kissenbeutel, Vakuumverpackungen...' },
        { title: 'Produktionslinie', desc: 'Komplett automatisierte Linien, Förderer, Palettierer...' },
      ],
      banner: 'Nicht sicher, welche Maschine? → Senden Sie uns Ihre Produktdetails',
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl lg:text-5xl">{t.title}</h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item: any, i: number) => (
            <Link key={i} href={`/${lang}/machines/${cardHrefs[i]}`} className="group">
              <Card className="relative overflow-hidden p-8 transition hover:shadow-elev-2 hover:ring-accent-200 h-full">
                <div className="text-4xl mb-4">{cardIcons[i]}</div>
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-accent-600 transition">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{item.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition group-hover:translate-x-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-12">
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
