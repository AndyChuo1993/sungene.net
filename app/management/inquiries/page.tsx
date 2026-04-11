'use client'
import { useEffect, useState, useCallback } from 'react'
import AdminGate from '@/components/management/AdminGate'
import { getSupabaseBrowser } from '@/lib/supabase'
import type { Inquiry, InquiryStatus } from '@/lib/supabase.types'

const STATUS_LABELS: Record<InquiryStatus, { label: string; className: string }> = {
  new:        { label: 'New',        className: 'bg-accent-100 text-accent-800' },
  contacted:  { label: 'Contacted',  className: 'bg-blue-100 text-blue-800' },
  qualified:  { label: 'Qualified',  className: 'bg-purple-100 text-purple-800' },
  quoted:     { label: 'Quoted',     className: 'bg-amber-100 text-amber-800' },
  won:        { label: 'Won',        className: 'bg-green-100 text-green-800' },
  lost:       { label: 'Lost',       className: 'bg-gray-200 text-gray-700' },
  spam:       { label: 'Spam',       className: 'bg-red-100 text-red-700' },
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<InquiryStatus | 'all'>('all')
  const [selected, setSelected] = useState<Inquiry | null>(null)

  const load = useCallback(async () => {
    const sb = getSupabaseBrowser()
    if (!sb) return
    setLoading(true)
    let q = sb.from('inquiries').select('*').order('created_at', { ascending: false }).limit(200)
    if (filter !== 'all') q = q.eq('status', filter)
    const { data, error } = await q
    setLoading(false)
    if (error) {
      console.error(error)
      return
    }
    setInquiries(data || [])
  }, [filter])

  useEffect(() => {
    load()
  }, [load])

  async function updateStatus(id: string, status: InquiryStatus) {
    const sb = getSupabaseBrowser()
    if (!sb) return
    const { error } = await sb
      .from('inquiries')
      .update({ status, contacted_at: status === 'contacted' ? new Date().toISOString() : undefined })
      .eq('id', id)
    if (error) {
      alert(error.message)
      return
    }
    load()
    if (selected?.id === id) setSelected(null)
  }

  async function saveNotes(id: string, notes: string) {
    const sb = getSupabaseBrowser()
    if (!sb) return
    const { error } = await sb.from('inquiries').update({ notes }).eq('id', id)
    if (error) {
      alert(error.message)
      return
    }
    load()
  }

  return (
    <AdminGate>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-950">Inquiries</h1>
            <p className="mt-1 text-sm text-gray-500">
              {inquiries.length} inquiries {filter !== 'all' ? `(filtered: ${filter})` : ''}
            </p>
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as InquiryStatus | 'all')}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          >
            <option value="all">All statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="quoted">Quoted</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
            <option value="spam">Spam</option>
          </select>
        </div>

        {loading ? (
          <div className="mt-10 text-center text-sm text-gray-500">Loading…</div>
        ) : inquiries.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <div className="text-sm text-gray-500">No inquiries yet for this filter.</div>
          </div>
        ) : (
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <Th>Date</Th>
                  <Th>Name / Company</Th>
                  <Th>Contact</Th>
                  <Th>Source</Th>
                  <Th>Context</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inquiries.map((inq) => (
                  <tr
                    key={inq.id}
                    onClick={() => setSelected(inq)}
                    className="cursor-pointer hover:bg-gray-50"
                  >
                    <Td>
                      <div className="text-gray-900">{fmtDate(inq.created_at)}</div>
                      <div className="text-xs text-gray-500">{fmtTime(inq.created_at)}</div>
                    </Td>
                    <Td>
                      <div className="font-medium text-gray-900">{inq.name}</div>
                      {inq.company ? <div className="text-xs text-gray-500">{inq.company}</div> : null}
                    </Td>
                    <Td>
                      <div className="text-gray-700">{inq.email}</div>
                      {inq.phone ? <div className="text-xs text-gray-500">{inq.phone}</div> : null}
                    </Td>
                    <Td>
                      <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                        {inq.source || inq.type}
                      </span>
                    </Td>
                    <Td className="max-w-xs truncate">{inq.context || inq.country || '—'}</Td>
                    <Td>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          STATUS_LABELS[inq.status].className
                        }`}
                      >
                        {STATUS_LABELS[inq.status].label}
                      </span>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selected ? (
          <InquiryDrawer
            inquiry={selected}
            onClose={() => setSelected(null)}
            onUpdateStatus={(status) => updateStatus(selected.id, status)}
            onSaveNotes={(notes) => saveNotes(selected.id, notes)}
          />
        ) : null}
      </div>
    </AdminGate>
  )
}

function InquiryDrawer({
  inquiry,
  onClose,
  onUpdateStatus,
  onSaveNotes,
}: {
  inquiry: Inquiry
  onClose: () => void
  onUpdateStatus: (status: InquiryStatus) => void
  onSaveNotes: (notes: string) => void
}) {
  const [notes, setNotes] = useState(inquiry.notes || '')

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/30">
      <div className="h-full w-full max-w-lg overflow-y-auto bg-white shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white p-5">
          <div>
            <h2 className="text-base font-bold text-gray-950">{inquiry.name}</h2>
            <p className="text-xs text-gray-500">{fmtDate(inquiry.created_at)} {fmtTime(inquiry.created_at)}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-5 p-5">
          <Field label="Email" value={inquiry.email} link={`mailto:${inquiry.email}`} />
          {inquiry.phone ? <Field label="Phone / WhatsApp" value={inquiry.phone} link={`https://wa.me/${inquiry.phone.replace(/[^\d]/g, '')}`} /> : null}
          {inquiry.company ? <Field label="Company" value={inquiry.company} /> : null}
          {inquiry.country ? <Field label="Country" value={inquiry.country} /> : null}
          <Field label="Type" value={inquiry.type} />
          {inquiry.source ? <Field label="Source" value={inquiry.source} /> : null}
          {inquiry.context ? <Field label="Context" value={inquiry.context} /> : null}
          {inquiry.target_output ? <Field label="Target output" value={inquiry.target_output} /> : null}
          {inquiry.message ? <Field label="Message" value={inquiry.message} multiline /> : null}
          {inquiry.page_url ? <Field label="Page URL" value={inquiry.page_url} link={inquiry.page_url} /> : null}
          {inquiry.extra && Object.keys(inquiry.extra).length > 0 ? (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Additional</div>
              <pre className="mt-1 whitespace-pre-wrap rounded-lg bg-gray-50 p-3 text-xs text-gray-700">
                {JSON.stringify(inquiry.extra, null, 2)}
              </pre>
            </div>
          ) : null}

          <div className="border-t border-gray-200 pt-5">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Status</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {(Object.keys(STATUS_LABELS) as InquiryStatus[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => onUpdateStatus(s)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    inquiry.status === s
                      ? STATUS_LABELS[s].className + ' ring-2 ring-offset-1 ring-current'
                      : 'bg-white text-gray-600 ring-1 ring-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {STATUS_LABELS[s].label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Internal notes</div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              placeholder="Follow-up notes, deal size estimate, etc."
            />
            <button
              type="button"
              onClick={() => onSaveNotes(notes)}
              className="mt-2 rounded-lg bg-accent-600 px-4 py-2 text-xs font-semibold text-white hover:bg-accent-500"
            >
              Save notes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">{children}</th>
}
function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>
}
function Field({ label, value, link, multiline }: { label: string; value: string; link?: string; multiline?: boolean }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</div>
      {link ? (
        <a href={link} className="mt-0.5 block text-sm text-accent-600 hover:underline" target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <div className={`mt-0.5 text-sm text-gray-800 ${multiline ? 'whitespace-pre-wrap' : ''}`}>{value}</div>
      )}
    </div>
  )
}
function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}
