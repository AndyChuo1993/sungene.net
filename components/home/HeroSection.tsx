import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export default function HeroSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'FIND THE RIGHT MACHINE FOR YOUR PRODUCT',
      h1: 'Tell Us What You Produce — We\'ll Recommend the Machine',
      sub: 'Whether it\'s powder, liquid, granule, or snack — describe your product and production goals. Our engineering team will match you with the optimal machinery solution.',
      btnQuote: 'Send Your Product → Get Recommendation',
      btnCatalog: 'Browse All Machinery',
      stats: [
        { value: '500+', label: 'Machines Exported' },
        { value: '50+', label: 'Countries Served' },
        { value: '15+', label: 'Years Experience' },
        { value: '24/7', label: 'Technical Support' },
      ]
    },
    cn: {
      kicker: '为您的产品找到合适的机器',
      h1: '告诉我们您生产什么——我们来推荐机器',
      sub: '无论是粉末、液体、颗粒还是休闲食品——描述您的产品和生产目标，我们的工程团队将为您匹配最佳机械方案。',
      btnQuote: '发送产品信息 → 获取推荐',
      btnCatalog: '浏览所有机械',
      stats: [
        { value: '500+', label: '台设备出口' },
        { value: '50+', label: '个国家服务' },
        { value: '15+', label: '年行业经验' },
        { value: '24/7', label: '技术支持' },
      ]
    },
    zh: {
      kicker: '為您的產品找到合適的機器',
      h1: '告訴我們您生產什麼——我們來推薦機器',
      sub: '無論是粉末、液體、顆粒還是休閒食品——描述您的產品和生產目標，我們的工程團隊將為您匹配最佳機械方案。',
      btnQuote: '發送產品資訊 → 取得推薦',
      btnCatalog: '瀏覽所有機械',
      stats: [
        { value: '500+', label: '台設備出口' },
        { value: '50+', label: '個國家服務' },
        { value: '15+', label: '年行業經驗' },
        { value: '24/7', label: '技術支援' },
      ]
    },
    fr: {
      kicker: 'TROUVEZ LA BONNE MACHINE POUR VOTRE PRODUIT',
      h1: 'Dites-nous ce que vous produisez — Nous vous recommanderons la machine',
      sub: 'Qu\'il s\'agisse de poudre, liquide, granulé ou snack — décrivez votre produit et vos objectifs de production. Notre équipe d\'ingénierie vous proposera la solution de machines optimale.',
      btnQuote: 'Envoyez votre produit → Obtenez une recommandation',
      btnCatalog: 'Parcourir toutes les machines',
      stats: [
        { value: '500+', label: 'Machines exportées' },
        { value: '50+', label: 'Pays desservis' },
        { value: '15+', label: 'Années d\'expérience' },
        { value: '24/7', label: 'Support technique' },
      ]
    },
    es: {
      kicker: 'ENCUENTRE LA MÁQUINA ADECUADA PARA SU PRODUCTO',
      h1: 'Díganos qué produce — Le recomendaremos la máquina',
      sub: 'Ya sea polvo, líquido, granulado o snack — describa su producto y sus objetivos de producción. Nuestro equipo de ingeniería le encontrará la solución de maquinaria óptima.',
      btnQuote: 'Envíe su producto → Obtenga recomendación',
      btnCatalog: 'Ver toda la maquinaria',
      stats: [
        { value: '500+', label: 'Máquinas exportadas' },
        { value: '50+', label: 'Países atendidos' },
        { value: '15+', label: 'Años de experiencia' },
        { value: '24/7', label: 'Soporte técnico' },
      ]
    },
    pt: {
      kicker: 'ENCONTRE A MÁQUINA CERTA PARA O SEU PRODUTO',
      h1: 'Diga-nos o que você produz — Recomendaremos a máquina',
      sub: 'Seja pó, líquido, grânulo ou snack — descreva seu produto e metas de produção. Nossa equipe de engenharia encontrará a solução de maquinário ideal para você.',
      btnQuote: 'Envie seu produto → Receba recomendação',
      btnCatalog: 'Ver todas as máquinas',
      stats: [
        { value: '500+', label: 'Máquinas Exportadas' },
        { value: '50+', label: 'Países Atendidos' },
        { value: '15+', label: 'Anos de Experiência' },
        { value: '24/7', label: 'Suporte Técnico' },
      ]
    },
    ko: {
      kicker: '귀하의 제품에 맞는 기계를 찾아보세요',
      h1: '무엇을 생산하는지 알려주세요 — 기계를 추천해 드립니다',
      sub: '분말, 액체, 과립, 스낵 등 — 제품과 생산 목표를 설명해 주세요. 당사 엔지니어링 팀이 최적의 기계 솔루션을 매칭해 드립니다.',
      btnQuote: '제품 정보 보내기 → 추천 받기',
      btnCatalog: '전체 기계 보기',
      stats: [
        { value: '500+', label: '수출 기계' },
        { value: '50+', label: '서비스 국가' },
        { value: '15+', label: '년 경력' },
        { value: '24/7', label: '기술 지원' },
      ]
    },
    ja: {
      kicker: 'あなたの製品に最適な機械を見つけましょう',
      h1: '何を生産しているかお知らせください — 最適な機械をご提案します',
      sub: '粉末、液体、顆粒、スナック — 製品と生産目標をお伝えください。当社のエンジニアリングチームが最適な機械ソリューションをマッチングします。',
      btnQuote: '製品情報を送信 → 提案を受ける',
      btnCatalog: 'すべての機械を見る',
      stats: [
        { value: '500+', label: '輸出台数' },
        { value: '50+', label: 'カ国に対応' },
        { value: '15+', label: '年の実績' },
        { value: '24/7', label: '技術サポート' },
      ]
    },
    ar: {
      kicker: 'اعثر على الماكينة المناسبة لمنتجك',
      h1: 'أخبرنا بما تنتج — وسنوصي بالماكينة المناسبة',
      sub: 'سواء كان مسحوقًا أو سائلًا أو حبيبات أو وجبات خفيفة — صف منتجك وأهداف الإنتاج. سيطابق فريقنا الهندسي الحل الأمثل للماكينات.',
      btnQuote: 'أرسل معلومات منتجك → احصل على توصية',
      btnCatalog: 'تصفح جميع الآلات',
      stats: [
        { value: '500+', label: 'آلة مُصدَّرة' },
        { value: '50+', label: 'دولة مخدومة' },
        { value: '15+', label: 'سنة خبرة' },
        { value: '24/7', label: 'دعم فني' },
      ]
    },
    th: {
      kicker: 'ค้นหาเครื่องจักรที่เหมาะกับผลิตภัณฑ์ของคุณ',
      h1: 'บอกเราว่าคุณผลิตอะไร — เราจะแนะนำเครื่องจักรให้',
      sub: 'ไม่ว่าจะเป็นผง ของเหลว เม็ด หรือขนม — อธิบายผลิตภัณฑ์และเป้าหมายการผลิตของคุณ ทีมวิศวกรของเราจะจับคู่โซลูชันเครื่องจักรที่เหมาะสมที่สุด',
      btnQuote: 'ส่งข้อมูลผลิตภัณฑ์ → รับคำแนะนำ',
      btnCatalog: 'ดูเครื่องจักรทั้งหมด',
      stats: [
        { value: '500+', label: 'เครื่องจักรส่งออก' },
        { value: '50+', label: 'ประเทศที่ให้บริการ' },
        { value: '15+', label: 'ปีประสบการณ์' },
        { value: '24/7', label: 'สนับสนุนทางเทคนิค' },
      ]
    },
    vi: {
      kicker: 'TÌM ĐÚNG MÁY CHO SẢN PHẨM CỦA BẠN',
      h1: 'Cho chúng tôi biết bạn sản xuất gì — Chúng tôi sẽ đề xuất máy',
      sub: 'Dù là bột, chất lỏng, hạt hay đồ ăn nhẹ — mô tả sản phẩm và mục tiêu sản xuất của bạn. Đội ngũ kỹ thuật sẽ ghép nối giải pháp máy móc tối ưu cho bạn.',
      btnQuote: 'Gửi thông tin sản phẩm → Nhận đề xuất',
      btnCatalog: 'Xem tất cả máy móc',
      stats: [
        { value: '500+', label: 'Máy Đã Xuất Khẩu' },
        { value: '50+', label: 'Quốc Gia Phục Vụ' },
        { value: '15+', label: 'Năm Kinh Nghiệm' },
        { value: '24/7', label: 'Hỗ Trợ Kỹ Thuật' },
      ]
    },
    de: {
      kicker: 'FINDEN SIE DIE RICHTIGE MASCHINE FÜR IHR PRODUKT',
      h1: 'Sagen Sie uns, was Sie produzieren — Wir empfehlen die Maschine',
      sub: 'Ob Pulver, Flüssigkeit, Granulat oder Snack — beschreiben Sie Ihr Produkt und Ihre Produktionsziele. Unser Ingenieurteam wird die optimale Maschinenlösung für Sie finden.',
      btnQuote: 'Produkt senden → Empfehlung erhalten',
      btnCatalog: 'Alle Maschinen ansehen',
      stats: [
        { value: '500+', label: 'Exportierte Maschinen' },
        { value: '50+', label: 'Belieferte Länder' },
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '24/7', label: 'Technischer Support' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="relative overflow-hidden bg-brand-950 pb-0 pt-12 sm:pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/10 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text content */}
          <div className="py-8 lg:py-16">
            <span className="inline-block rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-400">
              {t.kicker}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/${lang}/recommend`} size="lg">
                {t.btnQuote}
              </ButtonLink>
              <ButtonLink href={`/${lang}/machinery`} variant="secondary" size="lg" className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/20">
                {t.btnCatalog}
              </ButtonLink>
            </div>
          </div>

          {/* Hero image - machinery illustration */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-t-2xl">
              <Image
                src="/machinery/hero-main.svg"
                alt="SunGene Industrial Production Line - Packaging Machinery, Conveyor Systems, and Palletizer"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative -mb-px grid grid-cols-2 gap-px rounded-t-2xl bg-white/10 md:grid-cols-4">
          {t.stats.map((stat: any, i: number) => (
            <div key={i} className="bg-brand-900/50 px-6 py-6 text-center backdrop-blur first:rounded-tl-2xl last:rounded-tr-2xl">
              <div className="text-3xl font-bold text-accent-400">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
