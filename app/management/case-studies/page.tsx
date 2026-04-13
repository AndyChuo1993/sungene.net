'use client'
import { useEffect, useState, useCallback } from 'react'
import AdminGate from '@/components/management/AdminGate'
import { getSupabaseBrowser } from '@/lib/supabase'
import type { CaseStudy } from '@/lib/supabase.types'

const MACHINE_OPTIONS = [
  '', 'pouch-packing-machine', 'powder-filling-machine', 'liquid-filling-machine',
  'snack-processing-line', 'conveyor-system',
]
const INDUSTRY_OPTIONS = [
  '', 'coffee', 'spice-seasoning', 'snack-chips', 'nuts-dried-fruit', 'sauce-condiment',
  'edible-oil', 'honey-syrup', 'dairy-yogurt', 'pet-food', 'protein-supplement',
  'detergent-household', 'cosmetic-personal-care', 'pharmaceutical', 'tea-herbal',
  'agricultural-seed',
]

type EditState = Partial<CaseStudy> & { mode: 'new' | 'edit' }

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function CaseStudiesPage() {
  const [items, setItems] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<EditState | null>(null)

  const load = useCallback(async () => {
    const sb = getSupabaseBrowser()
    if (!sb) return
    setLoading(true)
    const { data } = await sb.from('case_studies').select('*').order('created_at', { ascending: false })
    setLoading(false)
    setItems(data || [])
  }, [])

  useEffect(() => { load() }, [load])

  async function save(state: EditState) {
    const sb = getSupabaseBrowser()
    if (!sb) return
    if (!state.slug && state.title) state.slug = slugify(state.title)
    const payload = {
      slug: state.slug || '',
      title: state.title || '',
      summary: state.summary || null,
      client_type: state.client_type || null,
      country: state.country || null,
      industry_slug: state.industry_slug || null,
      machine_slug: state.machine_slug || null,
      year: state.year ?? null,
      problem: state.problem || null,
      solution: state.solution || null,
      results: state.results || null,
      hero_image_url: state.hero_image_url || null,
      images: state.images ?? [],
      video_id: state.video_id || null,
      featured: !!state.featured,
      published: !!state.published,
      published_at: state.published ? new Date().toISOString() : null,
      meta_title: state.meta_title || null,
      meta_description: state.meta_description || null,
    }
    if (state.mode === 'new') {
      const { error } = await sb.from('case_studies').insert(payload)
      if (error) { alert(error.message); return }
    } else {
      const { error } = await sb.from('case_studies').update(payload).eq('id', state.id!)
      if (error) { alert(error.message); return }
    }
    setEditing(null)
    load()
  }

  async function remove(id: string) {
    if (!confirm('確定要刪除此案例研究？')) return
    const sb = getSupabaseBrowser()
    if (!sb) return
    await sb.from('case_studies').delete().eq('id', id)
    load()
  }

  async function togglePublished(c: CaseStudy) {
    const sb = getSupabaseBrowser()
    if (!sb) return
    await sb.from('case_studies').update({
      published: !c.published,
      published_at: !c.published ? new Date().toISOString() : null,
    }).eq('id', c.id)
    load()
  }

  return (
    <AdminGate>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-950">案例研究</h1>
            <p className="mt-1 text-sm text-gray-500">
              每篇已發布的案例研究都會成為獨立可索引頁面 /case-studies/[slug]，並帶有 CaseStudy 結構化資料。
            </p>
          </div>
          <button
            type="button"
            onClick={() => setEditing({ mode: 'new', published: false, featured: false })}
            className="rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-500"
          >
            ＋ 新增案例研究
          </button>
        </div>

        {loading ? (
          <div className="mt-10 text-center text-sm text-gray-500">載入中…</div>
        ) : items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-sm text-gray-500">
            尚無案例研究。案例研究是三段式故事：問題 → 解決方案 → 成果。點擊「新增案例研究」開始。
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {items.map((c) => (
              <div key={c.id} className={`rounded-2xl border p-5 ${c.published ? 'border-green-300 bg-green-50/30' : 'border-gray-200 bg-white'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-950">{c.title}</h3>
                    <div className="mt-0.5 text-xs text-gray-500">
                      /case-studies/{c.slug}
                    </div>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${c.published ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                    {c.published ? '已上線' : '草稿'}
                  </span>
                </div>
                {c.summary ? <p className="mt-3 line-clamp-3 text-sm text-gray-700">{c.summary}</p> : null}
                <div className="mt-3 text-xs text-gray-500">
                  {[c.country, c.industry_slug, c.machine_slug, c.year].filter(Boolean).join(' · ') || '無標籤'}
                </div>
                <div className="mt-4 flex gap-2 text-xs">
                  <button onClick={() => setEditing({ ...c, mode: 'edit' })} className="rounded-lg bg-gray-100 px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-200">編輯</button>
                  <button onClick={() => togglePublished(c)} className="rounded-lg bg-accent-100 px-3 py-1.5 font-semibold text-accent-700 hover:bg-accent-200">
                    {c.published ? '取消發布' : '發布'}
                  </button>
                  <button onClick={() => remove(c.id)} className="rounded-lg bg-red-50 px-3 py-1.5 font-semibold text-red-700 hover:bg-red-100">刪除</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {editing ? (
          <div className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/30">
            <div className="h-full w-full max-w-2xl overflow-y-auto bg-white shadow-2xl">
              <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white p-5">
                <h2 className="text-base font-bold text-gray-950">{editing.mode === 'new' ? '新增案例研究' : '編輯案例研究'}</h2>
                <button onClick={() => setEditing(null)} className="rounded-full p-2 text-gray-500 hover:bg-gray-100">✕</button>
              </div>
              <div className="space-y-4 p-5">
                <Input label="標題 *" value={editing.title} onChange={(v) => setEditing({ ...editing, title: v, slug: editing.slug || slugify(v) })} />
                <Input label="Slug（URL）*" value={editing.slug} onChange={(v) => setEditing({ ...editing, slug: slugify(v) })} />
                <Textarea label="摘要" value={editing.summary} onChange={(v) => setEditing({ ...editing, summary: v })} rows={2} />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="客戶類型（如咖啡烘焙業）" value={editing.client_type} onChange={(v) => setEditing({ ...editing, client_type: v })} />
                  <Input label="國家" value={editing.country} onChange={(v) => setEditing({ ...editing, country: v })} />
                  <Select label="產業" options={INDUSTRY_OPTIONS} value={editing.industry_slug} onChange={(v) => setEditing({ ...editing, industry_slug: v })} />
                  <Select label="機器" options={MACHINE_OPTIONS} value={editing.machine_slug} onChange={(v) => setEditing({ ...editing, machine_slug: v })} />
                  <Input label="年份" type="number" value={editing.year?.toString()} onChange={(v) => setEditing({ ...editing, year: v ? Number(v) : null })} />
                  <Input label="主圖片 URL" value={editing.hero_image_url} onChange={(v) => setEditing({ ...editing, hero_image_url: v })} />
                </div>

                <Textarea label="問題 — 客戶的初始狀況" value={editing.problem} onChange={(v) => setEditing({ ...editing, problem: v })} rows={4} />
                <Textarea label="解決方案 — SunGene 提供的方案" value={editing.solution} onChange={(v) => setEditing({ ...editing, solution: v })} rows={4} />
                <Textarea label="成果 — 可量化的結果" value={editing.results} onChange={(v) => setEditing({ ...editing, results: v })} rows={4} />

                <div className="flex items-center gap-6 pt-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!editing.featured} onChange={(e) => setEditing({ ...editing, featured: e.target.checked })} className="h-4 w-4" />
                    <span className="text-sm font-semibold text-gray-800">精選</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} className="h-4 w-4" />
                    <span className="text-sm font-semibold text-gray-800">已發布</span>
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button onClick={() => save(editing)} className="flex-1 rounded-lg bg-accent-600 px-4 py-3 text-sm font-semibold text-white hover:bg-accent-500">儲存</button>
                  <button onClick={() => setEditing(null)} className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-200">取消</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </AdminGate>
  )
}

function Input({ label, value, onChange, type = 'text' }: { label: string; value: string | number | null | undefined; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">{label}</span>
      <input type={type} value={value ?? ''} onChange={(e) => onChange(e.target.value)} className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30" />
    </label>
  )
}
function Textarea({ label, value, onChange, rows = 3 }: { label: string; value: string | null | undefined; onChange: (v: string) => void; rows?: number }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">{label}</span>
      <textarea value={value || ''} onChange={(e) => onChange(e.target.value)} rows={rows} className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30" />
    </label>
  )
}
function Select({ label, options, value, onChange }: { label: string; options: string[]; value: string | null | undefined; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">{label}</span>
      <select value={value || ''} onChange={(e) => onChange(e.target.value)} className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30">
        {options.map((o) => <option key={o} value={o}>{o || '— 無 —'}</option>)}
      </select>
    </label>
  )
}
