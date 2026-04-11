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
        <h1 className="text-2xl font-bold text-gray-950">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of inquiries and published content. RLS blocks unpublished data from the public site.
        </p>

        {err ? (
          <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            Error loading stats: {err}
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="Total inquiries" value={stats?.totalInquiries ?? '—'} href="/management/inquiries" />
          <StatCard label="New (unhandled)" value={stats?.newInquiries ?? '—'} href="/management/inquiries?status=new" highlight />
          <StatCard label="Last 7 days" value={stats?.last7Days ?? '—'} href="/management/inquiries" />
          <StatCard label="Published testimonials" value={stats?.testimonialsPublished ?? '—'} href="/management/testimonials" />
          <StatCard label="Published case studies" value={stats?.caseStudiesPublished ?? '—'} href="/management/case-studies" />
          <StatCard label="Published videos" value={stats?.videosPublished ?? '—'} href="/management/videos" />
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">Quick tips</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>
              • <strong>Testimonials</strong> automatically add <code>Review</code> + <code>AggregateRating</code> schema to the machine pages they&apos;re tagged with.
            </li>
            <li>
              • <strong>Case studies</strong> each become an indexable page at <code>/case-studies/[slug]</code> with <code>CaseStudy</code> schema.
            </li>
            <li>
              • <strong>Videos</strong> add <code>VideoObject</code> schema to machine pages and are exposed in the image sitemap thumbnail.
            </li>
            <li>
              • <strong>Inquiries</strong> are persistent — no data loss on Cloud Run redeploys.
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
