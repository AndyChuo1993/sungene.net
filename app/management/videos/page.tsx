'use client'
import { useEffect, useState, useCallback } from 'react'
import AdminGate from '@/components/management/AdminGate'
import { getSupabaseBrowser } from '@/lib/supabase'
import type { Video } from '@/lib/supabase.types'

const MACHINE_OPTIONS = [
  '', 'pouch-packing-machine', 'powder-filling-machine', 'liquid-filling-machine',
  'snack-processing-line', 'conveyor-system',
]

type EditState = Partial<Video> & { mode: 'new' | 'edit' }

/** Extract YouTube video ID from a URL or raw ID. */
function extractYouTubeId(input: string): string | null {
  if (!input) return null
  const trimmed = input.trim()
  // Raw 11-char ID
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed
  // watch?v= / youtu.be / shorts/
  const m = trimmed.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/)
  return m?.[1] || null
}

export default function VideosPage() {
  const [items, setItems] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<EditState | null>(null)

  const load = useCallback(async () => {
    const sb = getSupabaseBrowser()
    if (!sb) return
    setLoading(true)
    const { data } = await sb.from('videos').select('*').order('created_at', { ascending: false })
    setLoading(false)
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
    const videoId = extractYouTubeId(state.external_id || '')
    if (!videoId && state.platform === 'youtube') {
      alert('無效的 YouTube 網址或影片 ID')
      return
    }
    const payload = {
      title: state.title || '',
      description: state.description || null,
      machine_slug: state.machine_slug || null,
      industry_slug: state.industry_slug || null,
      platform: (state.platform || 'youtube') as 'youtube' | 'vimeo',
      external_id: videoId || state.external_id || '',
      thumbnail_url: state.thumbnail_url || (videoId ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` : null),
      duration_seconds: state.duration_seconds ?? null,
      upload_date: state.upload_date || null,
      position: state.position ?? 0,
      published: !!state.published,
    }
    if (state.mode === 'new') {
      const { error } = await sb.from('videos').insert(payload)
      if (error) { alert(error.message); return }
    } else {
      const { error } = await sb.from('videos').update(payload).eq('id', state.id!)
      if (error) { alert(error.message); return }
    }
    setEditing(null)
    load()
  }

  async function remove(id: string) {
    if (!confirm('確定要刪除此影片？')) return
    const sb = getSupabaseBrowser()
    if (!sb) return
    await sb.from('videos').delete().eq('id', id)
    load()
  }

  async function togglePublished(v: Video) {
    const sb = getSupabaseBrowser()
    if (!sb) return
    await sb.from('videos').update({ published: !v.published }).eq('id', v.id)
    load()
  }

  return (
    <AdminGate>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-950">影片管理</h1>
            <p className="mt-1 text-sm text-gray-500">
              已發布的影片會在對應機器頁面加入 VideoObject 結構化資料。
            </p>
          </div>
          <button
            type="button"
            onClick={() => setEditing({ mode: 'new', platform: 'youtube', published: false })}
            className="rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-500"
          >
            ＋ 新增影片
          </button>
        </div>

        {loading ? (
          <div className="mt-10 text-center text-sm text-gray-500">載入中…</div>
        ) : items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-sm text-gray-500">
            尚無影片。請先將供應商驗收影片上傳至 YouTube，再將網址貼到此處。
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((v) => (
              <div key={v.id} className={`overflow-hidden rounded-2xl border ${v.published ? 'border-green-300 bg-green-50/30' : 'border-gray-200 bg-white'}`}>
                {v.thumbnail_url ? (
                  <img src={v.thumbnail_url} alt={v.title} className="aspect-video w-full object-cover" />
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-gray-100 text-gray-400 text-xs">無縮圖</div>
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="line-clamp-2 text-sm font-semibold text-gray-950">{v.title}</h3>
                    <span className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${v.published ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                      {v.published ? '已上線' : '草稿'}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    {v.machine_slug || v.industry_slug || '未標記'} · {v.platform}:{v.external_id}
                  </div>
                  <div className="mt-3 flex gap-2 text-xs">
                    <button onClick={() => setEditing({ ...v, mode: 'edit' })} className="rounded-lg bg-gray-100 px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-200">編輯</button>
                    <button onClick={() => togglePublished(v)} className="rounded-lg bg-accent-100 px-3 py-1.5 font-semibold text-accent-700 hover:bg-accent-200">
                      {v.published ? '取消發布' : '發布'}
                    </button>
                    <button onClick={() => remove(v.id)} className="rounded-lg bg-red-50 px-3 py-1.5 font-semibold text-red-700 hover:bg-red-100">刪除</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {editing ? (
          <div className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/30">
            <div className="h-full w-full max-w-lg overflow-y-auto bg-white shadow-2xl">
              <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white p-5">
                <h2 className="text-base font-bold text-gray-950">{editing.mode === 'new' ? '新增影片' : '編輯影片'}</h2>
                <button onClick={() => setEditing(null)} className="rounded-full p-2 text-gray-500 hover:bg-gray-100">✕</button>
              </div>
              <div className="space-y-4 p-5">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">標題 *</span>
                  <input value={editing.title || ''} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">YouTube 網址或影片 ID *</span>
                  <input value={editing.external_id || ''} onChange={(e) => setEditing({ ...editing, external_id: e.target.value })} placeholder="https://youtube.com/watch?v=... 或 11 碼 ID" className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">說明</span>
                  <textarea value={editing.description || ''} onChange={(e) => setEditing({ ...editing, description: e.target.value })} rows={3} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">機器</span>
                  <select value={editing.machine_slug || ''} onChange={(e) => setEditing({ ...editing, machine_slug: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                    {MACHINE_OPTIONS.map((o) => <option key={o} value={o}>{o || '— 無 —'}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">時長（秒）</span>
                  <input type="number" value={editing.duration_seconds ?? ''} onChange={(e) => setEditing({ ...editing, duration_seconds: e.target.value ? Number(e.target.value) : null })} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">上傳日期</span>
                  <input type="date" value={editing.upload_date || ''} onChange={(e) => setEditing({ ...editing, upload_date: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={!!editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} className="h-4 w-4" />
                  <span className="text-sm font-semibold text-gray-800">已發布</span>
                </label>
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
