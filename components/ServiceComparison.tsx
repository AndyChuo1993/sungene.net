import { Lang } from '@/lib/i18n'
import { Check, Minus } from 'lucide-react'

interface ComparisonRow {
  feature: { zh: string; en: string }
  leadGen: { zh: string; en: string } | boolean
  distributor: { zh: string; en: string } | boolean
  outsourcing: { zh: string; en: string } | boolean
}

const rows: ComparisonRow[] = [
  {
    feature: { zh: '目標', en: 'Goal' },
    leadGen: { zh: '找到海外買家並產出合格詢價', en: 'Find overseas buyers and generate qualified inquiries' },
    distributor: { zh: '找到並簽下通路夥伴，建立覆蓋', en: 'Recruit channel partners and build market coverage' },
    outsourcing: { zh: '把外銷開發與跟進做成可交付系統', en: 'Run export sales operations as a deliverable system' },
  },
  {
    feature: { zh: '流程', en: 'Process' },
    leadGen: { zh: '理想客戶 → 名單 → 訊息 → 跟進節奏 → 回覆分類別', en: 'ICP → list → message → cadence → reply triage' },
    distributor: { zh: '市場分層 → 通路地圖 → 夥伴名單 → 合作方案 → 推進簽約', en: 'Market tiers → channel map → shortlist → offer → agreement' },
    outsourcing: { zh: '名單＋開發＋跟進＋初步資格審核＋詢價交付', en: 'Lists + outreach + follow-ups + qualification + inquiry hand-off' },
  },
  {
    feature: { zh: '交付內容', en: 'Output' },
    leadGen: { zh: '可用名單（Excel）＋詢價整理', en: 'Usable lists (Excel) + inquiry summaries' },
    distributor: { zh: '可追蹤通路名單＋合作條件框架＋會議', en: 'Trackable shortlist + term framework + meetings' },
    outsourcing: { zh: '合格詢價持續交付＋可追蹤 pipeline', en: 'Ongoing qualified inquiries + trackable pipeline' },
  },
  {
    feature: { zh: '時間安排', en: 'Timeframe' },
    leadGen: { zh: '2–8 週（視市場/產業）', en: '2–8 weeks (market/industry dependent)' },
    distributor: { zh: '4–12 週（找人＋談條件）', en: '4–12 weeks (shortlist + terms + meetings)' },
    outsourcing: { zh: '持續交付（常見 3–6 個月起）', en: 'Ongoing delivery (often 3–6 months+)' },
  },
]

export default function ServiceComparison({ lang }: { lang: Lang }) {
  const renderCell = (cell: { zh: string; en: string } | boolean) => {
    if (typeof cell === 'boolean') {
      return cell ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
      )
    }
    return lang === 'zh' ? cell.zh : cell.en
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 font-bold text-gray-900 w-1/4">
              {lang === 'zh' ? '比較專案' : 'Feature'}
            </th>
            <th className="p-4 font-bold text-blue-900 bg-blue-50 w-1/4 text-center border-t-4 border-t-blue-600">
              {lang === 'zh' ? '外銷客戶開發' : 'Export Lead Gen'}
            </th>
            <th className="p-4 font-bold text-green-900 bg-green-50 w-1/4 text-center border-t-4 border-t-green-600">
              {lang === 'zh' ? '經銷商開發' : 'Distributor Dev'}
            </th>
            <th className="p-4 font-bold text-indigo-900 bg-indigo-50 w-1/4 text-center border-t-4 border-t-indigo-600">
              {lang === 'zh' ? '外銷業務外套件' : 'Export Sales Outsourcing'}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 font-medium text-gray-900">
                {lang === 'zh' ? row.feature.zh : row.feature.en}
              </td>
              <td className="p-4 text-center text-gray-600 bg-blue-50/30">
                {renderCell(row.leadGen)}
              </td>
              <td className="p-4 text-center text-gray-600 bg-green-50/30">
                {renderCell(row.distributor)}
              </td>
              <td className="p-4 text-center text-gray-600 bg-indigo-50/30">
                {renderCell(row.outsourcing)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
