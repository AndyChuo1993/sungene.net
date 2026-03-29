import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import JsonLd from '@/components/JsonLd'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'

const titles: Record<string, string> = {
  en: 'Machinery Solutions | SunGene', cn: '解决方案｜SunGene', zh: '解決方案｜SunGene',
  fr: 'Solutions machines | SunGene', es: 'Soluciones de maquinaria | SunGene',
  pt: 'Soluções em Maquinário | SunGene', ko: '기계 솔루션 | SunGene', ja: '機械ソリューション | SunGene',
  ar: 'حلول الماكينات | SunGene', th: 'โซลูชันเครื่องจักร | SunGene', vi: 'Giải Pháp Máy Móc | SunGene',
  de: 'Maschinenlösungen | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'From single machines to complete turnkey production lines. SunGene offers semi-automatic, fully automatic, and custom machinery solutions for packaging, filling, processing, and assembly.',
  cn: '从单机到完整交钥匙生产线。SunGene提供半自动、全自动和定制机械解决方案，用于包装、灌装、加工和装配。',
  zh: '從單機到完整交鑰匙生產線。SunGene提供半自動、全自動和客製機械解決方案，用於包裝、灌裝、加工和組裝。',
  fr: 'Des machines individuelles aux lignes de production clé en main. SunGene propose des solutions semi-automatiques, entièrement automatiques et personnalisées.',
  es: 'Desde máquinas individuales hasta líneas de producción llave en mano. SunGene ofrece soluciones semi-automáticas, completamente automáticas y personalizadas.',
  pt: 'De máquinas individuais a linhas de produção turnkey completas. SunGene oferece soluções semi-automáticas, totalmente automáticas e personalizadas.',
  ko: '단일 기계부터 완전한 턴키 생산 라인까지. SunGene은 반자동, 완전 자동 및 맞춤형 기계 솔루션을 제공합니다.',
  ja: '単体機械から完全ターンキー生産ラインまで。SunGeneは半自動、全自動、カスタム機械ソリューションを提供します。',
  ar: 'من الآلات الفردية إلى خطوط الإنتاج الكاملة. SunGene تقدم حلول آلات شبه أوتوماتيكية وأوتوماتيكية بالكامل ومخصصة.',
  th: 'ตั้งแต่เครื่องจักรเดี่ยวจนถึงสายการผลิตแบบเบ็ดเสร็จ SunGene นำเสนอโซลูชันกึ่งอัตโนมัติ อัตโนมัติเต็มรูปแบบ และแบบกำหนดเอง',
  vi: 'Từ máy đơn lẻ đến dây chuyền sản xuất turnkey hoàn chỉnh. SunGene cung cấp giải pháp bán tự động, hoàn toàn tự động và tùy chỉnh.',
  de: 'Von Einzelmaschinen bis zu schlüsselfertigen Produktionslinien. SunGene bietet halb- und vollautomatische sowie individuelle Maschinenlösungen.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const langs = ['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de']
  const l = langs.includes(lang) ? lang : 'en'
  return {
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    keywords: ['turnkey production line', 'semi-automatic packaging', 'fully automatic packaging line', 'custom machinery solution', 'packaging line integration', 'production line setup', 'machinery solution Taiwan'],
    alternates: {
      canonical: `${SITE_URL}/${l}/solutions`,
      languages: {
        'en': `${SITE_URL}/en/solutions`,
        'zh-TW': `${SITE_URL}/zh/solutions`,
        'zh-CN': `${SITE_URL}/cn/solutions`,
        'fr': `${SITE_URL}/fr/solutions`,
        'es': `${SITE_URL}/es/solutions`,
        'pt': `${SITE_URL}/pt/solutions`,
        'ko': `${SITE_URL}/ko/solutions`,
        'ja': `${SITE_URL}/ja/solutions`,
        'ar': `${SITE_URL}/ar/solutions`,
        'th': `${SITE_URL}/th/solutions`,
        'vi': `${SITE_URL}/vi/solutions`,
        'de': `${SITE_URL}/de/solutions`,
        'x-default': `${SITE_URL}/en/solutions`,
      }
    },
    openGraph: {
      title: titles[l] || titles.en,
      description: descriptions[l] || descriptions.en,
      url: `${SITE_URL}/${l}/solutions`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: titles[l] || titles.en, description: descriptions[l] || descriptions.en, images: [`${SITE_URL}/og/og.png`] },
  }
}

export default async function SolutionsPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const heroPhoto = PHOTO.pages.solutions.hero

  const content: Record<string, { title: string; desc: string; cats: { id: string; title: string; desc: string }[] }> = {
    en: {
      title: 'Machinery Solutions',
      desc: 'From single machines to complete automated production lines — we offer solutions at every scale. Whether you need one machine or a turnkey factory setup, our engineering team will design the right configuration.',
      cats: [
        { id: 'single', title: 'Single Machine Solutions', desc: 'Individual packaging, filling, sealing, or processing machines configured for your specific product and output requirements.' },
        { id: 'semi', title: 'Semi-Automatic Setups', desc: 'Cost-effective combinations of manual and automated steps, ideal for growing businesses upgrading from manual production.' },
        { id: 'line', title: 'Production Line Solutions', desc: 'Integrated multi-machine lines with conveyors, feeders, and synchronized controls for high-volume continuous production.' },
        { id: 'custom', title: 'OEM & Custom Engineering', desc: 'Purpose-built machinery designed by our R&D team to match unique product characteristics, space constraints, or process requirements.' },
        { id: 'export', title: 'Export & Installation Support', desc: 'Complete export service including voltage customization, international shipping, documentation, and remote video-guided installation.' }
      ]
    },
    cn: {
      title: '机械解决方案',
      desc: '从单机到完整的自动化生产线——我们提供各种规模的解决方案。无论您需要一台机器还是交钥匙工厂配置，我们的工程团队都会设计合适的方案。',
      cats: [
        { id: 'single', title: '单机解决方案', desc: '根据您的特定产品和产能要求配置的单台包装、灌装、封口或加工机械。' },
        { id: 'semi', title: '半自动配置', desc: '手动与自动化步骤的经济型组合，适合从手工生产升级的成长型企业。' },
        { id: 'line', title: '生产线方案', desc: '集成多机产线，配备输送机、进料器和同步控制，适用于大批量连续生产。' },
        { id: 'custom', title: 'OEM与定制工程', desc: '由我们研发团队根据独特产品特性、空间限制或工艺需求专门设计的机械。' },
        { id: 'export', title: '出口与安装支持', desc: '包含电压定制、国际物流、文件及远程视频安装指导的完整出口服务。' }
      ]
    },
    zh: {
      title: '機械解決方案',
      desc: '從單機到完整的自動化生產線——我們提供各種規模的解決方案。無論您需要一台機器還是交鑰匙工廠配置，我們的工程團隊都會設計合適的方案。',
      cats: [
        { id: 'single', title: '單機解決方案', desc: '根據您的特定產品和產能要求配置的單台包裝、灌裝、封口或加工機械。' },
        { id: 'semi', title: '半自動配置', desc: '手動與自動化步驟的經濟型組合，適合從手工生產升級的成長型企業。' },
        { id: 'line', title: '生產線方案', desc: '整合多機產線，配備輸送機、進料器和同步控制，適用於大批量連續生產。' },
        { id: 'custom', title: 'OEM與客製工程', desc: '由我們研發團隊根據獨特產品特性、空間限制或工藝需求專門設計的機械。' },
        { id: 'export', title: '出口與安裝支援', desc: '包含電壓客製、國際物流、文件及遠端視訊安裝指導的完整出口服務。' }
      ]
    },
    fr: {
      title: 'Solutions machines',
      desc: 'De la machine individuelle aux lignes de production automatisées complètes — nous proposons des solutions à toutes les échelles. Notre équipe d\'ingénieurs conçoit la configuration adaptée à vos besoins.',
      cats: [
        { id: 'single', title: 'Solutions machine individuelle', desc: 'Machines d\'emballage, remplissage, scellage ou transformation configurées selon votre produit et vos exigences de production.' },
        { id: 'semi', title: 'Installations semi-automatiques', desc: 'Combinaisons rentables d\'étapes manuelles et automatisées, idéales pour les entreprises en croissance.' },
        { id: 'line', title: 'Solutions ligne de production', desc: 'Lignes multi-machines intégrées avec convoyeurs, alimentateurs et commandes synchronisées pour la production en continu.' },
        { id: 'custom', title: 'OEM et ingénierie sur mesure', desc: 'Machines conçues par notre équipe R&D pour répondre aux caractéristiques uniques de votre produit ou de votre processus.' },
        { id: 'export', title: 'Support export et installation', desc: 'Service export complet : personnalisation de la tension, expédition internationale, documentation et installation guidée par vidéo.' }
      ]
    },
    es: {
      title: 'Soluciones de maquinaria',
      desc: 'Desde máquinas individuales hasta líneas de producción automatizadas completas — ofrecemos soluciones a toda escala. Nuestro equipo de ingenieros diseña la configuración adecuada para sus necesidades.',
      cats: [
        { id: 'single', title: 'Soluciones de máquina individual', desc: 'Máquinas de empaque, llenado, sellado o procesamiento configuradas según su producto y requisitos de producción.' },
        { id: 'semi', title: 'Configuraciones semiautomáticas', desc: 'Combinaciones económicas de pasos manuales y automatizados, ideales para empresas en crecimiento.' },
        { id: 'line', title: 'Soluciones de línea de producción', desc: 'Líneas integradas multi-máquina con transportadores, alimentadores y controles sincronizados para producción continua.' },
        { id: 'custom', title: 'OEM e ingeniería personalizada', desc: 'Maquinaria diseñada por nuestro equipo de I+D para adaptarse a las características únicas de su producto o proceso.' },
        { id: 'export', title: 'Soporte de exportación e instalación', desc: 'Servicio de exportación completo: personalización de voltaje, envío internacional, documentación e instalación guiada por video.' }
      ]
    },
    pt: {
      title: 'Soluções em Maquinário',
      desc: 'De máquinas individuais a linhas de produção automatizadas completas — oferecemos soluções em todas as escalas. Nossa equipe de engenharia projetará a configuração ideal para suas necessidades.',
      cats: [
        { id: 'single', title: 'Soluções de Máquina Individual', desc: 'Máquinas individuais de embalagem, envase, selagem ou processamento configuradas para seu produto e requisitos de produção específicos.' },
        { id: 'semi', title: 'Configurações Semiautomáticas', desc: 'Combinações econômicas de etapas manuais e automatizadas, ideais para empresas em crescimento que estão se atualizando a partir da produção manual.' },
        { id: 'line', title: 'Soluções de Linha de Produção', desc: 'Linhas integradas multi-máquinas com esteiras, alimentadores e controles sincronizados para produção contínua de alto volume.' },
        { id: 'custom', title: 'OEM e Engenharia Personalizada', desc: 'Maquinário projetado sob medida pela nossa equipe de P&D para atender características únicas do produto, restrições de espaço ou requisitos de processo.' },
        { id: 'export', title: 'Suporte de Exportação e Instalação', desc: 'Serviço completo de exportação incluindo personalização de voltagem, envio internacional, documentação e instalação guiada por vídeo remoto.' }
      ]
    },
    ko: {
      title: '기계 솔루션',
      desc: '단일 기계부터 완전 자동화 생산 라인까지 — 모든 규모의 솔루션을 제공합니다. 한 대의 기계든 턴키 공장 설비든, 당사 엔지니어링 팀이 적합한 구성을 설계합니다.',
      cats: [
        { id: 'single', title: '단일 기계 솔루션', desc: '특정 제품 및 생산 요구사항에 맞게 구성된 개별 포장, 충전, 밀봉 또는 가공 기계.' },
        { id: 'semi', title: '반자동 설비', desc: '수동 및 자동화 공정의 경제적 조합으로, 수동 생산에서 업그레이드하는 성장 기업에 적합합니다.' },
        { id: 'line', title: '생산 라인 솔루션', desc: '컨베이어, 피더 및 동기화 제어가 장착된 통합 다중 기계 라인으로 대량 연속 생산에 적합합니다.' },
        { id: 'custom', title: 'OEM 및 맞춤 엔지니어링', desc: '독특한 제품 특성, 공간 제약 또는 공정 요구사항에 맞게 R&D 팀이 설계한 주문형 기계.' },
        { id: 'export', title: '수출 및 설치 지원', desc: '전압 맞춤, 국제 운송, 서류 및 원격 비디오 설치 가이드를 포함한 완전한 수출 서비스.' }
      ]
    },
    ja: {
      title: '機械ソリューション',
      desc: '単体機から完全自動化生産ラインまで — あらゆる規模のソリューションを提供します。1台の機械でもターンキー工場設備でも、当社のエンジニアリングチームが最適な構成を設計します。',
      cats: [
        { id: 'single', title: '単体機ソリューション', desc: 'お客様の特定の製品と生産要件に合わせて構成された、個別の包装、充填、シーリング、または加工機械。' },
        { id: 'semi', title: '半自動設備', desc: '手動と自動化ステップの費用対効果の高い組み合わせ。手動生産からアップグレードする成長企業に最適です。' },
        { id: 'line', title: '生産ラインソリューション', desc: 'コンベア、フィーダー、同期制御を備えた統合マルチマシンラインで、大量連続生産に対応します。' },
        { id: 'custom', title: 'OEM・カスタムエンジニアリング', desc: '独自の製品特性、スペース制約、プロセス要件に合わせてR&Dチームが設計するオーダーメイド機械。' },
        { id: 'export', title: '輸出・設置サポート', desc: '電圧カスタマイズ、国際配送、書類、リモートビデオによる設置ガイドを含む完全な輸出サービス。' }
      ]
    },
    ar: {
      title: 'حلول الماكينات',
      desc: 'من الماكينات الفردية إلى خطوط الإنتاج المؤتمتة الكاملة — نقدم حلولاً بكل المقاييس. سواء كنت بحاجة إلى ماكينة واحدة أو إعداد مصنع متكامل، فريقنا الهندسي سيصمم التكوين المناسب.',
      cats: [
        { id: 'single', title: 'حلول الماكينة الفردية', desc: 'ماكينات تعبئة أو تغليف أو ختم أو معالجة فردية مهيأة وفقاً لمنتجك ومتطلبات الإنتاج الخاصة بك.' },
        { id: 'semi', title: 'إعدادات شبه آلية', desc: 'مزيج اقتصادي من الخطوات اليدوية والآلية، مثالي للشركات النامية التي تنتقل من الإنتاج اليدوي.' },
        { id: 'line', title: 'حلول خطوط الإنتاج', desc: 'خطوط متعددة الماكينات متكاملة مع سيور ناقلة ومغذيات وأنظمة تحكم متزامنة للإنتاج المستمر بكميات كبيرة.' },
        { id: 'custom', title: 'OEM والهندسة المخصصة', desc: 'ماكينات مصممة خصيصاً بواسطة فريق البحث والتطوير لدينا لتناسب خصائص المنتج الفريدة أو قيود المساحة أو متطلبات العملية.' },
        { id: 'export', title: 'دعم التصدير والتركيب', desc: 'خدمة تصدير كاملة تشمل تخصيص الجهد الكهربائي والشحن الدولي والتوثيق والتركيب الموجه بالفيديو عن بُعد.' }
      ]
    },
    th: {
      title: 'โซลูชันเครื่องจักร',
      desc: 'ตั้งแต่เครื่องจักรเดี่ยวจนถึงสายการผลิตอัตโนมัติที่สมบูรณ์ — เรามีโซลูชันในทุกขนาด ทีมวิศวกรของเราจะออกแบบการกำหนดค่าที่เหมาะสมกับความต้องการของคุณ',
      cats: [
        { id: 'single', title: 'โซลูชันเครื่องจักรเดี่ยว', desc: 'เครื่องบรรจุ เติม ปิดผนึก หรือแปรรูปแต่ละเครื่องที่กำหนดค่าตามผลิตภัณฑ์และความต้องการในการผลิตของคุณ' },
        { id: 'semi', title: 'การตั้งค่ากึ่งอัตโนมัติ', desc: 'การรวมขั้นตอนแบบแมนนวลและอัตโนมัติอย่างคุ้มค่า เหมาะสำหรับธุรกิจที่กำลังเติบโตที่อัพเกรดจากการผลิตแบบแมนนวล' },
        { id: 'line', title: 'โซลูชันสายการผลิต', desc: 'สายการผลิตหลายเครื่องแบบบูรณาการพร้อมสายพานลำเลียง เครื่องป้อน และระบบควบคุมแบบซิงโครไนซ์สำหรับการผลิตต่อเนื่องปริมาณมาก' },
        { id: 'custom', title: 'OEM และวิศวกรรมสั่งทำ', desc: 'เครื่องจักรที่ออกแบบเฉพาะโดยทีม R&D ของเราเพื่อให้ตรงกับคุณสมบัติเฉพาะของผลิตภัณฑ์ ข้อจำกัดด้านพื้นที่ หรือข้อกำหนดของกระบวนการ' },
        { id: 'export', title: 'บริการส่งออกและติดตั้ง', desc: 'บริการส่งออกครบวงจร รวมถึงการปรับแรงดันไฟฟ้า การจัดส่งระหว่างประเทศ เอกสาร และการติดตั้งทางไกลผ่านวิดีโอ' }
      ]
    },
    vi: {
      title: 'Giải Pháp Máy Móc',
      desc: 'Từ máy đơn lẻ đến dây chuyền sản xuất tự động hoàn chỉnh — chúng tôi cung cấp giải pháp ở mọi quy mô. Đội ngũ kỹ sư sẽ thiết kế cấu hình phù hợp cho nhu cầu của bạn.',
      cats: [
        { id: 'single', title: 'Giải pháp Máy Đơn lẻ', desc: 'Máy đóng gói, chiết rót, seal hoặc chế biến đơn lẻ được cấu hình theo sản phẩm và yêu cầu sản xuất cụ thể.' },
        { id: 'semi', title: 'Thiết lập Bán Tự động', desc: 'Kết hợp tiết kiệm giữa các bước thủ công và tự động, lý tưởng cho doanh nghiệp đang phát triển nâng cấp từ sản xuất thủ công.' },
        { id: 'line', title: 'Giải pháp Dây chuyền Sản xuất', desc: 'Dây chuyền đa máy tích hợp với băng tải, bộ nạp và điều khiển đồng bộ cho sản xuất liên tục khối lượng lớn.' },
        { id: 'custom', title: 'OEM & Kỹ thuật Tùy chỉnh', desc: 'Máy móc được thiết kế riêng bởi đội ngũ R&D để phù hợp với đặc tính sản phẩm, hạn chế không gian hoặc yêu cầu quy trình.' },
        { id: 'export', title: 'Hỗ trợ Xuất khẩu & Lắp đặt', desc: 'Dịch vụ xuất khẩu trọn gói bao gồm tùy chỉnh điện áp, vận chuyển quốc tế, chứng từ và hướng dẫn lắp đặt từ xa qua video.' }
      ]
    },
    de: {
      title: 'Maschinenlösungen',
      desc: 'Von Einzelmaschinen bis hin zu komplett automatisierten Produktionslinien — wir bieten Lösungen in jeder Größenordnung. Unser Ingenieurteam entwirft die passende Konfiguration für Ihre Anforderungen.',
      cats: [
        { id: 'single', title: 'Einzelmaschinenlösungen', desc: 'Individuelle Verpackungs-, Abfüll-, Versiegelungs- oder Verarbeitungsmaschinen, konfiguriert für Ihr spezifisches Produkt und Ihre Produktionsanforderungen.' },
        { id: 'semi', title: 'Halbautomatische Anlagen', desc: 'Kosteneffiziente Kombinationen aus manuellen und automatisierten Schritten, ideal für wachsende Unternehmen, die von manueller Produktion aufrüsten.' },
        { id: 'line', title: 'Produktionslinienlösungen', desc: 'Integrierte Mehrmaschinenlinen mit Förderern, Zuführungen und synchronisierten Steuerungen für kontinuierliche Hochvolumenproduktion.' },
        { id: 'custom', title: 'OEM & Kundenspezifische Technik', desc: 'Zweckgebaut von unserem F&E-Team für einzigartige Produkteigenschaften, Platzbeschränkungen oder Prozessanforderungen.' },
        { id: 'export', title: 'Export- und Installationssupport', desc: 'Kompletter Exportservice einschließlich Spannungsanpassung, internationalem Versand, Dokumentation und ferngesteuerter Videoinstallationsanleitung.' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      <PageHero
        kicker={({ en: 'SOLUTIONS', cn: '解决方案', zh: '解決方案', fr: 'SOLUTIONS', es: 'SOLUCIONES', pt: 'SOLUÇÕES', ko: '솔루션', ja: 'ソリューション', ar: 'الحلول', th: 'โซลูชัน', vi: 'GIẢI PHÁP', de: 'LÖSUNGEN' } as Record<string, string>)[lang] || 'SOLUTIONS'}
        title={t.title}
        desc={t.desc}
        image={{ src: heroPhoto, alt: 'Turnkey production line in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6">
            {t.cats.map((c, i) => (
              <Card key={i} id={c.id} className="p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-700 font-bold text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">{c.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">{c.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: t.title,
        description: t.desc,
        itemListElement: t.cats.map((cat: any, i: number) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: cat.title,
          description: cat.desc,
          url: `${SITE_URL}/${lang}/solutions#${cat.id}`,
        })),
      }} />
    </>
  )
}
