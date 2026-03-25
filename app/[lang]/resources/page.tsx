import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const titles: Record<string, string> = {
  en: 'Machinery Buying Guides & Resources | SunGene', cn: '资源中心｜SunGene', zh: '資源中心｜SunGene',
  fr: 'Guides d\'achat et ressources | SunGene', es: 'Guías de compra y recursos | SunGene',
  pt: 'Guias de Compra e Recursos | SunGene', ko: '기계 구매 가이드 및 리소스 | SunGene', ja: '機械購入ガイド・リソース | SunGene',
  ar: 'أدلة شراء الماكينات والموارد | SunGene', th: 'คู่มือการซื้อเครื่องจักรและแหล่งข้อมูล | SunGene', vi: 'Hướng Dẫn Mua Máy & Tài Nguyên | SunGene',
  de: 'Maschinenkaufratgeber & Ressourcen | SunGene',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return { title: titles[lang] || titles.en }
}

export default async function ResourcesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, { title: string; desc: string; articles: string[] }> = {
    en: {
      title: 'Machinery Buying Guides',
      desc: 'Practical guides to help you choose the right machinery, plan your production line, and navigate the export process. Knowledge that saves you time and money.',
      articles: [
        'How to Choose the Right Packaging Machinery for Your Product',
        'VFFS vs HFFS: Which Packaging Machine Do You Need?',
        'Semi-Automatic vs Fully Automatic: Making the Right Investment',
        'Complete Guide to Importing Machinery from Taiwan',
        'Understanding Voltage Requirements for International Machinery',
        'How to Evaluate a Machinery Supplier Before Ordering',
      ]
    },
    cn: {
      title: '机械采购指南',
      desc: '帮助您选择合适机械、规划生产线和了解出口流程的实用指南。节省您的时间和成本的知识。',
      articles: [
        '如何为您的产品选择合适的包装机械',
        'VFFS与HFFS：您需要哪种包装机？',
        '半自动与全自动：做出正确的投资选择',
        '从台湾进口机械的完整指南',
        '了解国际机械的电压要求',
        '下单前如何评估机械供应商',
      ]
    },
    zh: {
      title: '機械採購指南',
      desc: '幫助您選擇合適機械、規劃生產線和了解出口流程的實用指南。節省您的時間和成本的知識。',
      articles: [
        '如何為您的產品選擇合適的包裝機械',
        'VFFS與HFFS：您需要哪種包裝機？',
        '半自動與全自動：做出正確的投資選擇',
        '從台灣進口機械的完整指南',
        '了解國際機械的電壓要求',
        '下單前如何評估機械供應商',
      ]
    },
    fr: {
      title: 'Guides d\'achat machines',
      desc: 'Guides pratiques pour vous aider à choisir la bonne machine, planifier votre ligne de production et naviguer le processus d\'exportation.',
      articles: [
        'Comment choisir la bonne machine d\'emballage pour votre produit',
        'VFFS vs HFFS : quelle machine de conditionnement vous faut-il ?',
        'Semi-automatique vs automatique : faire le bon investissement',
        'Guide complet pour importer des machines de Taïwan',
        'Comprendre les exigences de tension pour les machines internationales',
        'Comment évaluer un fournisseur de machines avant de commander',
      ]
    },
    es: {
      title: 'Guías de compra de maquinaria',
      desc: 'Guías prácticas para ayudarle a elegir la maquinaria adecuada, planificar su línea de producción y navegar el proceso de exportación.',
      articles: [
        'Cómo elegir la maquinaria de empaque adecuada para su producto',
        'VFFS vs HFFS: ¿Qué máquina de empaque necesita?',
        'Semiautomático vs totalmente automático: hacer la inversión correcta',
        'Guía completa para importar maquinaria de Taiwán',
        'Comprender los requisitos de voltaje para maquinaria internacional',
        'Cómo evaluar un proveedor de maquinaria antes de hacer un pedido',
      ]
    },
    pt: {
      title: 'Guias de Compra de Maquinário',
      desc: 'Guias práticos para ajudá-lo a escolher o maquinário certo, planejar sua linha de produção e navegar pelo processo de exportação. Conhecimento que economiza seu tempo e dinheiro.',
      articles: [
        'Como Escolher o Maquinário de Embalagem Certo para Seu Produto',
        'VFFS vs HFFS: Qual Máquina de Embalagem Você Precisa?',
        'Semiautomática vs Totalmente Automática: Fazendo o Investimento Certo',
        'Guia Completo para Importar Maquinário de Taiwan',
        'Entendendo os Requisitos de Voltagem para Maquinário Internacional',
        'Como Avaliar um Fornecedor de Maquinário Antes de Fazer o Pedido',
      ]
    },
    ko: {
      title: '기계 구매 가이드',
      desc: '적합한 기계를 선택하고, 생산 라인을 계획하며, 수출 프로세스를 이해하는 데 도움이 되는 실용적인 가이드입니다. 시간과 비용을 절약하는 지식.',
      articles: [
        '제품에 적합한 포장 기계를 선택하는 방법',
        'VFFS vs HFFS: 어떤 포장 기계가 필요한가?',
        '반자동 vs 완전 자동: 올바른 투자 결정',
        '대만에서 기계를 수입하는 완전 가이드',
        '국제 기계의 전압 요구사항 이해하기',
        '주문 전 기계 공급업체를 평가하는 방법',
      ]
    },
    ja: {
      title: '機械購入ガイド',
      desc: '適切な機械の選定、生産ラインの計画、輸出プロセスのナビゲーションに役立つ実用ガイドです。時間とコストを節約する知識を提供します。',
      articles: [
        '製品に最適な包装機械の選び方',
        'VFFS vs HFFS：どちらの包装機が必要か？',
        '半自動 vs 全自動：正しい投資判断',
        '台湾から機械を輸入するための完全ガイド',
        '国際機械の電圧要件を理解する',
        '注文前に機械サプライヤーを評価する方法',
      ]
    },
    ar: {
      title: 'أدلة شراء الماكينات',
      desc: 'أدلة عملية لمساعدتك في اختيار الماكينات المناسبة، وتخطيط خط الإنتاج، والتعامل مع عملية التصدير. معرفة توفر لك الوقت والمال.',
      articles: [
        'كيف تختار ماكينة التعبئة والتغليف المناسبة لمنتجك',
        'VFFS مقابل HFFS: أي ماكينة تعبئة تحتاج؟',
        'شبه آلي مقابل آلي بالكامل: اتخاذ الاستثمار الصحيح',
        'الدليل الشامل لاستيراد الماكينات من تايوان',
        'فهم متطلبات الجهد الكهربائي للماكينات الدولية',
        'كيف تقيّم مورد الماكينات قبل الطلب',
      ]
    },
    th: {
      title: 'คู่มือการซื้อเครื่องจักร',
      desc: 'คู่มือที่เป็นประโยชน์เพื่อช่วยคุณเลือกเครื่องจักรที่เหมาะสม วางแผนสายการผลิต และทำความเข้าใจกระบวนการส่งออก ความรู้ที่ช่วยประหยัดเวลาและค่าใช้จ่าย',
      articles: [
        'วิธีเลือกเครื่องจักรบรรจุภัณฑ์ที่เหมาะสมกับผลิตภัณฑ์ของคุณ',
        'VFFS กับ HFFS: คุณต้องการเครื่องบรรจุแบบไหน?',
        'กึ่งอัตโนมัติ vs อัตโนมัติเต็มรูปแบบ: การลงทุนที่ถูกต้อง',
        'คู่มือฉบับสมบูรณ์ในการนำเข้าเครื่องจักรจากไต้หวัน',
        'ทำความเข้าใจข้อกำหนดแรงดันไฟฟ้าสำหรับเครื่องจักรนานาชาติ',
        'วิธีประเมินซัพพลายเออร์เครื่องจักรก่อนสั่งซื้อ',
      ]
    },
    vi: {
      title: 'Hướng Dẫn Mua Máy',
      desc: 'Các hướng dẫn thực tế giúp bạn chọn máy móc phù hợp, lên kế hoạch dây chuyền sản xuất và tìm hiểu quy trình xuất khẩu. Kiến thức giúp bạn tiết kiệm thời gian và chi phí.',
      articles: [
        'Cách Chọn Máy Đóng Gói Phù Hợp Cho Sản Phẩm Của Bạn',
        'VFFS so với HFFS: Bạn Cần Máy Đóng Gói Nào?',
        'Bán Tự Động vs Hoàn Toàn Tự Động: Đầu Tư Đúng Đắn',
        'Hướng Dẫn Toàn Diện Nhập Khẩu Máy Móc Từ Đài Loan',
        'Hiểu Yêu Cầu Điện Áp Cho Máy Móc Quốc Tế',
        'Cách Đánh Giá Nhà Cung Cấp Máy Móc Trước Khi Đặt Hàng',
      ]
    },
    de: {
      title: 'Maschinenkaufratgeber',
      desc: 'Praktische Ratgeber, die Ihnen helfen, die richtige Maschine auszuwählen, Ihre Produktionslinie zu planen und den Exportprozess zu verstehen. Wissen, das Ihnen Zeit und Geld spart.',
      articles: [
        'So wählen Sie die richtige Verpackungsmaschine für Ihr Produkt',
        'VFFS vs. HFFS: Welche Verpackungsmaschine brauchen Sie?',
        'Halbautomatisch vs. Vollautomatisch: Die richtige Investitionsentscheidung',
        'Komplettanleitung zum Import von Maschinen aus Taiwan',
        'Spannungsanforderungen für internationale Maschinen verstehen',
        'So bewerten Sie einen Maschinenlieferanten vor der Bestellung',
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      <PageHeader title={t.title} desc={t.desc} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4">
            {t.articles.map((a, i) => (
              <Card key={i} className="flex items-center justify-between gap-6 p-6 transition hover:shadow-elev-2">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-sm font-bold text-accent-700">{i + 1}</span>
                  <span className="min-w-0 text-base font-semibold text-gray-950">{a}</span>
                </div>
                <svg className="h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
