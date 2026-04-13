'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import AdminGate from '@/components/management/AdminGate'
import { getSupabaseBrowser } from '@/lib/supabase'

type Stats = {
  totalInquiries: number
  newInquiries: number
  last7Days: number
  testimonialsPublished: number
  caseStudiesPublished: number
  videosPublished: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      const sb = getSupabaseBrowser()
      if (!sb) return
      try {
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        const [
          totalInq,
          newInq,
          recentInq,
          testP,
          caseP,
          videoP,
        ] = await Promise.all([
          sb.from('inquiries').select('id', { count: 'exact', head: true }),
          sb.from('inquiries').select('id', { count: 'exact', head: true }).eq('status', 'new'),
          sb.from('inquiries').select('id', { count: 'exact', head: true }).gte('created_at', sevenDaysAgo),
          sb.from('testimonials').select('id', { count: 'exact', head: true }).eq('published', true),
          sb.from('case_studies').select('id', { count: 'exact', head: true }).eq('published', true),
          sb.from('videos').select('id', { count: 'exact', head: true }).eq('published', true),
        ])
        setStats({
          totalInquiries: totalInq.count ?? 0,
          newInquiries: newInq.count ?? 0,
          last7Days: recentInq.count ?? 0,
          testimonialsPublished: testP.count ?? 0,
          caseStudiesPublished: caseP.count ?? 0,
          videosPublished: videoP.count ?? 0,
        })
      } catch (e: unknown) {
        setErr(e instanceof Error ? e.message : String(e))
      }
    })()
  }, [])

  return (
    <AdminGate>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-950">儀表板</h1>
        <p className="mt-1 text-sm text-gray-500">
          詢價與已發布內容的總覽。RLS 規則確保未發布的資料不會顯示在公開網站。
        </p>

        {err ? (
          <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            統計資料載入失敗：{err}
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="詢價總數" value={stats?.totalInquiries ?? '—'} href="/management/inquiries" />
          <StatCard label="新進（待處理）" value={stats?.newInquiries ?? '—'} href="/management/inquiries?status=new" highlight />
          <StatCard label="近 7 天詢價" value={stats?.last7Days ?? '—'} href="/management/inquiries" />
          <StatCard label="已發布客戶評價" value={stats?.testimonialsPublished ?? '—'} href="/management/testimonials" />
          <StatCard label="已發布案例研究" value={stats?.caseStudiesPublished ?? '—'} href="/management/case-studies" />
          <StatCard label="已發布影片" value={stats?.videosPublished ?? '—'} href="/management/videos" />
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">使用說明</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>
              • <strong>客戶評價</strong> 發布後會自動將 <code>Review</code> + <code>AggregateRating</code> 結構化資料加入對應的機器頁面，有助於 Google 顯示星評。
            </li>
            <li>
              • <strong>案例研究</strong> 發布後每篇都會成為獨立可索引頁面 <code>/case-studies/[slug]</code>，並帶有 <code>CaseStudy</code> 結構化資料。
            </li>
            <li>
              • <strong>影片</strong> 發布後會將 <code>VideoObject</code> 結構化資料加入機器頁面，並顯示於圖片 Sitemap 縮圖。
            </li>
            <li>
              • <strong>詢價</strong> 資料永久保存於 Supabase，Cloud Run 重新部署不會遺失資料。
            </li>
          </ul>
        </div>
      </div>
    </AdminGate>
  )
}

function StatCard({
  label,
  value,
  href,
  highlight,
}: {
  label: string
  value: number | string
  href: string
  highlight?: boolean
}) {
  return (
    <Link
      href={href}
      className={`block rounded-2xl border p-6 transition hover:shadow-md ${
        highlight ? 'border-accent-300 bg-accent-50' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</div>
      <div className={`mt-2 text-3xl font-extrabold ${highlight ? 'text-accent-700' : 'text-gray-950'}`}>
        {value}
      </div>
    </Link>
  )
}
