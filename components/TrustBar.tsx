import type { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

type Stat = {
  /** Large number or short phrase */
  value: string
  /** Short label under the number */
  label: Record<Lang, string>
}

const STATS: Stat[] = [
  {
    value: '2010',
    label: {
      en: 'Founded',
      zh: '創立於',
      cn: '创立于',
      fr: 'Fondée en',
      es: 'Fundada en',
      pt: 'Fundada em',
      ko: '설립',
      ja: '創業',
      ar: 'تأسست عام',
      th: 'ก่อตั้งปี',
      vi: 'Thành lập',
      de: 'Gegründet',
    },
  },
  {
    value: '40+',
    label: {
      en: 'Countries served',
      zh: '出口國家',
      cn: '出口国家',
      fr: 'Pays desservis',
      es: 'Países atendidos',
      pt: 'Países atendidos',
      ko: '수출 국가',
      ja: '輸出国',
      ar: 'دولة مُصدَّر إليها',
      th: 'ประเทศที่ส่งออก',
      vi: 'Quốc gia xuất khẩu',
      de: 'Exportländer',
    },
  },
  {
    value: 'CE',
    label: {
      en: 'CE support',
      zh: 'CE 文件支援',
      cn: 'CE 文件支持',
      fr: 'Support CE',
      es: 'Soporte CE',
      pt: 'Suporte CE',
      ko: 'CE 문서 지원',
      ja: 'CE文書サポート',
      ar: 'دعم وثائق CE',
      th: 'เอกสาร CE',
      vi: 'Hỗ trợ CE',
      de: 'CE-Unterstützung',
    },
  },
  {
    value: 'SUS304/316L',
    label: {
      en: 'Food-grade stainless',
      zh: '食品級不鏽鋼',
      cn: '食品级不锈钢',
      fr: 'Inox alimentaire',
      es: 'Inox alimentario',
      pt: 'Inox alimentar',
      ko: '식품용 스테인리스',
      ja: '食品グレード SUS',
      ar: 'فولاذ غذائي',
      th: 'สแตนเลสเกรดอาหาร',
      vi: 'Inox thực phẩm',
      de: 'Lebensmittel-Edelstahl',
    },
  },
  {
    value: '1yr + long-term',
    label: {
      en: 'Parts warranty + tech support',
      zh: '零件保固 + 長期技術支援',
      cn: '零件保固 + 长期技术支持',
      fr: 'Garantie pièces + support long terme',
      es: 'Garantía + soporte a largo plazo',
      pt: 'Garantia + suporte de longo prazo',
      ko: '부품 보증 + 장기 지원',
      ja: '部品保証 + 長期サポート',
      ar: 'ضمان + دعم طويل الأجل',
      th: 'อะไหล่ + บริการระยะยาว',
      vi: 'Bảo hành + hỗ trợ dài hạn',
      de: 'Garantie + langfristiger Support',
    },
  },
]

const heading: Record<Lang, string> = {
  en: 'Why 40+ countries trust SunGene',
  zh: '為什麼 40+ 國家選擇 SunGene',
  cn: '为什么 40+ 国家选择 SunGene',
  fr: 'Pourquoi plus de 40 pays font confiance à SunGene',
  es: 'Por qué más de 40 países confían en SunGene',
  pt: 'Por que mais de 40 países confiam na SunGene',
  ko: '40개국 이상이 SunGene을 선택하는 이유',
  ja: '40カ国以上がSunGeneを選ぶ理由',
  ar: 'لماذا تثق أكثر من 40 دولة بـ SunGene',
  th: 'ทำไมกว่า 40 ประเทศจึงเลือก SunGene',
  vi: 'Vì sao hơn 40 quốc gia tin chọn SunGene',
  de: 'Warum über 40 Länder SunGene vertrauen',
}

const responseTime: Record<Lang, string> = {
  en: 'Engineering team replies within 1 business day (Taichung, UTC+8)',
  zh: '工程團隊 1 個工作日內回覆（台中，UTC+8）',
  cn: '工程团队 1 个工作日内回复（台中，UTC+8）',
  fr: 'Réponse sous 1 jour ouvré (Taichung, UTC+8)',
  es: 'Respuesta en 1 día hábil (Taichung, UTC+8)',
  pt: 'Resposta em 1 dia útil (Taichung, UTC+8)',
  ko: '엔지니어링팀이 1영업일 내 답변 (타이중, UTC+8)',
  ja: 'エンジニアチームが1営業日以内に返信 (台中、UTC+8)',
  ar: 'يرد فريق الهندسة خلال يوم عمل واحد (تايتشونغ، UTC+8)',
  th: 'ทีมวิศวกรตอบกลับภายใน 1 วันทำการ (ไทจง UTC+8)',
  vi: 'Đội ngũ kỹ sư phản hồi trong 1 ngày làm việc (Đài Trung UTC+8)',
  de: 'Ingenieurteam antwortet innerhalb von 1 Werktag (Taichung, UTC+8)',
}

export default function TrustBar({ lang, showHeading = true }: { lang: Lang; showHeading?: boolean }) {
  return (
    <section className="border-y border-gray-200 bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12">
      <Container className="max-w-6xl">
        {showHeading ? (
          <h2 className="text-center text-lg font-bold tracking-tight text-gray-950 sm:text-xl">
            {heading[lang] || heading.en}
          </h2>
        ) : null}
        <div className="mt-6 grid grid-cols-2 gap-6 text-center sm:grid-cols-5">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-2xl font-extrabold text-brand-950 sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-gray-600 leading-tight sm:text-sm">
                {s.label[lang] || s.label.en}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-gray-500 sm:text-sm">
          <svg className="inline-block mr-1.5 -mt-0.5 h-4 w-4 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {responseTime[lang] || responseTime.en}
        </p>
      </Container>
    </section>
  )
}
