'use client'
import { useEffect, useState, useCallback } from 'react'
import AdminGate from '@/components/management/AdminGate'
import { getSupabaseBrowser } from '@/lib/supabase'
import type { Testimonial } from '@/lib/supabase.types'

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

type EditState = Partial<Testimonial> & { mode: 'new' | 'edit' }

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<EditState | null>(null)

  const load = useCallback(async () => {
    const sb = getSupabaseBrowser()
    if (!sb) return
    setLoading(true)
    const { data, error } = await sb
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
    setLoading(false)
    if (error) {
      console.error(error)
      return
    }
    setItems(data || [])
  }, [])

  useEffect(() => {
    const id = setTimeout(() => {
      void load()
    }, 0)
    return () => clearTimeout(id)
  }, [load])

  async function save(state: EditState) {
    const sb = getSupabaseBrowser()
    if (!sb) return
    const payload = {
      author_name: state.author_name || '',
      author_role: state.author_role || null,
      author_company: state.author_company || null,
      author_country: state.author_country || null,
      author_photo_url: state.author_photo_url || null,
      body_en: state.body_en || '',
      body_native: state.body_native || null,
      body_native_lang: state.body_native_lang || null,
      rating: state.rating ?? null,
      machine_slug: state.machine_slug || null,
      industry_slug: state.industry_slug || null,
      market_slug: state.market_slug || null,
      purchase_year: state.purchase_year ?? null,
      machine_model: state.machine_model || null,
      position: state.position ?? 0,
      published: !!state.published,
      published_at: state.published ? new Date().toISOString() : null,
    }
    if (state.mode === 'new') {
      const { error } = await sb.from('testimonials').insert(payload)
      if (error) { alert(error.message); return }
    } else {
      const { error } = await sb.from('testimonials').update(payload).eq('id', state.id!)
      if (error) { alert(error.message); return }
    }
    setEditing(null)
    load()
  }

  async function remove(id: string) {
    if (!confirm('確定要刪除此客戶評價？')) return
    const sb = getSupabaseBrowser()
    if (!sb) return
    const { error } = await sb.from('testimonials').delete().eq('id', id)
    if (error) { alert(error.message); return }
    load()
  }

  async function togglePublished(t: Testimonial) {
    const sb = getSupabaseBrowser()
    if (!sb) return
    await sb.from('testimonials').update({
      published: !t.published,
      published_at: !t.published ? new Date().toISOString() : null,
    }).eq('id', t.id)
    load()
  }

  return (
    <AdminGate>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-950">客戶評價</h1>
            <p className="mt-1 text-sm text-gray-500">
              已發布的評價會自動在對應機器頁面加入 Review + AggregateRating 結構化資料。
            </p>
          </div>
          <button
            type="button"
            onClick={() => setEditing({ mode: 'new', published: false, rating: 5 })}
            className="rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-500"
          >
            ＋ 新增評價
          </button>
        </div>

        {loading ? (
          <div className="mt-10 text-center text-sm text-gray-500">載入中…</div>
        ) : items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-sm text-gray-500">
            尚無客戶評價。點擊「新增評價」來新增第一筆真實客戶評語。
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t) => (
              <div key={t.id} className={`rounded-2xl border p-5 ${t.published ? 'border-green-300 bg-green-50/30' : 'border-gray-200 bg-white'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-950">{t.author_name}</div>
                    <div className="text-xs text-gray-500">
                      {[t.author_role, t.author_company, t.author_country].filter(Boolean).join(' · ')}
                    </div>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${t.published ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                    {t.published ? '已發布' : '草稿'}
                  </span>
                </div>
                {t.rating ? <div className="mt-2 text-sm text-amber-500">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div> : null}
                <p className="mt-3 line-clamp-4 text-sm text-gray-700">{t.body_en}</p>
                <div className="mt-3 text-xs text-gray-500">
                  {[t.machine_slug, t.industry_slug, t.market_slug].filter(Boolean).join(' · ') || '無標籤'}
                </div>
                <div className="mt-4 flex gap-2 text-xs">
                  <button type="button" onClick={() => setEditing({ ...t, mode: 'edit' })} className="rounded-lg bg-gray-100 px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-200">編輯</button>
                  <button type="button" onClick={() => togglePublished(t)} className="rounded-lg bg-accent-100 px-3 py-1.5 font-semibold text-accent-700 hover:bg-accent-200">
                    {t.published ? '取消發布' : '發布'}
                  </button>
                  <button type="button" onClick={() => remove(t.id)} className="rounded-lg bg-red-50 px-3 py-1.5 font-semibold text-red-700 hover:bg-red-100">刪除</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {editing ? (
          <EditDrawer
            state={editing}
            onChange={setEditing}
            onClose={() => setEditing(null)}
            onSave={save}
          />
        ) : null}
      </div>
    </AdminGate>
  )
}

function EditDrawer({
  state,
  onChange,
  onClose,
  onSave,
}: {
  state: EditState
  onChange: (s: EditState) => void
  onClose: () => void
  onSave: (s: EditState) => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/30">
      <div className="h-full w-full max-w-lg overflow-y-auto bg-white shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white p-5">
          <h2 className="text-base font-bold text-gray-950">{state.mode === 'new' ? '新增客戶評價' : '編輯客戶評價'}</h2>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-gray-500 hover:bg-gray-100">✕</button>
        </div>

        <div className="space-y-4 p-5">
          <Input label="作者姓名 *" value={state.author_name} onChange={(v) => onChange({ ...state, author_name: v })} />
          <Input label="職稱／角色" value={state.author_role} onChange={(v) => onChange({ ...state, author_role: v })} />
          <Input label="公司名稱" value={state.author_company} onChange={(v) => onChange({ ...state, author_company: v })} />
          <Input label="國家" value={state.author_country} onChange={(v) => onChange({ ...state, author_country: v })} />
          <Input label="照片 URL（選填）" value={state.author_photo_url} onChange={(v) => onChange({ ...state, author_photo_url: v })} />

          <Textarea label="評價內容（英文）*" value={state.body_en} onChange={(v) => onChange({ ...state, body_en: v })} rows={5} />
          <Textarea label="母語版本（選填）" value={state.body_native} onChange={(v) => onChange({ ...state, body_native: v })} rows={3} />
          <Input label="母語語言代碼（如 vi、ar）" value={state.body_native_lang} onChange={(v) => onChange({ ...state, body_native_lang: v })} />

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-700">評分</div>
            <div className="mt-2 flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => onChange({ ...state, rating: n })}
                  className={`text-2xl ${state.rating && n <= state.rating ? 'text-amber-500' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <Select label="機器" options={MACHINE_OPTIONS} value={state.machine_slug} onChange={(v) => onChange({ ...state, machine_slug: v })} />
          <Select label="產業" options={INDUSTRY_OPTIONS} value={state.industry_slug} onChange={(v) => onChange({ ...state, industry_slug: v })} />
          <Input label="市場代碼（如 vietnam）" value={state.market_slug} onChange={(v) => onChange({ ...state, market_slug: v })} />
          <Input label="機器型號" value={state.machine_model} onChange={(v) => onChange({ ...state, machine_model: v })} />
          <Input label="購買年份" type="number" value={state.purchase_year?.toString()} onChange={(v) => onChange({ ...state, purchase_year: v ? Number(v) : null })} />

          <label className="flex items-center gap-2 pt-3">
            <input type="checkbox" checked={!!state.published} onChange={(e) => onChange({ ...state, published: e.target.checked })} className="h-4 w-4" />
            <span className="text-sm font-semibold text-gray-800">已發布（顯示於公開網站）</span>
          </label>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={() => onSave(state)} className="flex-1 rounded-lg bg-accent-600 px-4 py-3 text-sm font-semibold text-white hover:bg-accent-500">
              儲存
            </button>
            <button type="button" onClick={onClose} className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-200">
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Input({ label, value, onChange, type = 'text' }: { label: string; value: string | null | undefined; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">{label}</span>
      <input
        type={type}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
      />
    </label>
  )
}
function Textarea({ label, value, onChange, rows = 3 }: { label: string; value: string | null | undefined; onChange: (v: string) => void; rows?: number }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">{label}</span>
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
      />
    </label>
  )
}
function Select({ label, options, value, onChange }: { label: string; options: string[]; value: string | null | undefined; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">{label}</span>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
      >
        {options.map((o) => <option key={o} value={o}>{o || '— 無 —'}</option>)}
      </select>
    </label>
  )
}
