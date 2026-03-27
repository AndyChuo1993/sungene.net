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
    <section className="relative overflow-hidden bg-brand-950 bg-industrial-grid min-h-[90vh] flex items-center">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/80 to-brand-950/90" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-600/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/20 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Text column */}
          <div>
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent-500" />
              <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em]">
                {t.kicker}
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.h1}
            </h1>

            {/* Sub */}
            <p className="mt-6 text-lg leading-relaxed text-brand-300 max-w-xl">
              {t.sub}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={`/${lang}/recommend`} size="lg" className="shadow-lg shadow-accent-700/30">
                {t.btnQuote}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </ButtonLink>
              <ButtonLink href={`/${lang}/machinery`} variant="secondary" size="lg" className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/20">
                {t.btnCatalog}
              </ButtonLink>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-8">
              {['CE Certified', 'ISO Quality', 'SUS304 Steel', 'Factory Direct'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-brand-300">
                  <svg className="h-4 w-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats column — industrial data panel */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat: any, i: number) => (
                <div key={i} className="relative bg-brand-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent-500/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent-500 rounded-l-xl" />
                  <div className="text-3xl font-black text-accent-400">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-brand-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Industrial certification bar */}
            <div className="mt-4 bg-brand-900/40 border border-white/10 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xs text-brand-400 uppercase tracking-wider">Certifications</span>
              <div className="flex gap-3">
                {['CE', 'ISO', 'SUS304'].map(c => (
                  <span key={c} className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
