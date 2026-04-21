import { Lang } from '@/lib/i18n'

const labels: Record<Lang, {
  title: string
  fitTitle: string
  notFitTitle: string
  compareTitle: string
  acceptanceTitle: string
}> = {
  en: { title: 'Sourcing Route Guide', fitTitle: 'Best Fit Procurement Scenarios', notFitTitle: 'When This Route Is Usually Not Ideal', compareTitle: 'What To Compare Across Suppliers', acceptanceTitle: 'What To Lock Before Approval' },
  zh: { title: '採購路線指南', fitTitle: '較適合的採購情境', notFitTitle: '通常不建議走這條路線的情況', compareTitle: '供應商比對重點', acceptanceTitle: '核准前要鎖定的項目' },
  cn: { title: '采购路线指南', fitTitle: '较适合的采购情境', notFitTitle: '通常不建议走这条路线的情况', compareTitle: '供应商比对重点', acceptanceTitle: '核准前要锁定的项目' },
  fr: { title: 'Guide du Parcours Sourcing', fitTitle: 'Scénarios d’achat adaptés', notFitTitle: 'Quand cette voie n’est pas idéale', compareTitle: 'Points de comparaison fournisseurs', acceptanceTitle: 'Points à verrouiller avant approbation' },
  es: { title: 'Guía de Ruta de Abastecimiento', fitTitle: 'Escenarios adecuados', notFitTitle: 'Cuándo esta ruta no es ideal', compareTitle: 'Qué comparar entre proveedores', acceptanceTitle: 'Qué cerrar antes de aprobar' },
  pt: { title: 'Guia de Rota de Sourcing', fitTitle: 'Cenários mais adequados', notFitTitle: 'Quando esta rota não é ideal', compareTitle: 'O que comparar entre fornecedores', acceptanceTitle: 'O que travar antes da aprovação' },
  ko: { title: '소싱 경로 가이드', fitTitle: '적합한 조달 시나리오', notFitTitle: '이 경로가 적합하지 않은 경우', compareTitle: '공급업체 비교 포인트', acceptanceTitle: '승인 전 확정할 사항' },
  ja: { title: '調達ルートガイド', fitTitle: '適した調達シナリオ', notFitTitle: 'このルートが適さないケース', compareTitle: 'サプライヤー比較ポイント', acceptanceTitle: '承認前に固める項目' },
  ar: { title: 'دليل مسار التوريد', fitTitle: 'سيناريوهات الشراء المناسبة', notFitTitle: 'متى لا يكون هذا المسار مثاليًا', compareTitle: 'نقاط مقارنة الموردين', acceptanceTitle: 'ما يجب تثبيته قبل الموافقة' },
  th: { title: 'คู่มือเส้นทางการจัดหา', fitTitle: 'สถานการณ์ที่เหมาะสม', notFitTitle: 'กรณีที่เส้นทางนี้ไม่เหมาะ', compareTitle: 'จุดเปรียบเทียบซัพพลายเออร์', acceptanceTitle: 'สิ่งที่ต้องล็อกก่อนอนุมัติ' },
  vi: { title: 'Hướng Dẫn Lộ Trình Sourcing', fitTitle: 'Tình huống phù hợp', notFitTitle: 'Khi hướng này không phù hợp', compareTitle: 'Điểm so sánh nhà cung cấp', acceptanceTitle: 'Điều cần chốt trước khi duyệt' },
  de: { title: 'Sourcing-Routenleitfaden', fitTitle: 'Geeignete Beschaffungsszenarien', notFitTitle: 'Wann dieser Weg nicht ideal ist', compareTitle: 'Lieferanten-Vergleichspunkte', acceptanceTitle: 'Vor Freigabe festzulegen' },
}

function BulletList({ items, dotClassName }: { items: string[]; dotClassName: string }) {
  return (
    <ul className="mt-4 space-y-3 text-sm text-gray-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className={`mt-0.5 h-2 w-2 rounded-full ${dotClassName}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SourcingRouteGuide({
  lang,
  fitItems,
  notFitItems,
  compareItems,
  acceptanceItems,
}: {
  lang: Lang
  fitItems: string[]
  notFitItems: string[]
  compareItems: string[]
  acceptanceItems: string[]
}) {
  const t = labels[lang] || labels.en
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-950">{t.title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-950">{t.fitTitle}</h3>
            <BulletList items={fitItems} dotClassName="bg-accent-500" />
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-950">{t.notFitTitle}</h3>
            <BulletList items={notFitItems} dotClassName="bg-rose-500" />
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-950">{t.compareTitle}</h3>
            <BulletList items={compareItems} dotClassName="bg-brand-700" />
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-950">{t.acceptanceTitle}</h3>
            <BulletList items={acceptanceItems} dotClassName="bg-emerald-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
