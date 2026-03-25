'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'

function ArticleItem({ index, title, body }: { index: number; title: string; body: string }) {
  const [open, setOpen] = useState(false)
  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left transition hover:bg-gray-50"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-sm font-bold text-accent-700">{index + 1}</span>
          <span className="min-w-0 text-base font-semibold text-gray-950">{title}</span>
        </div>
        <svg className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="px-6 text-base leading-relaxed text-gray-600">{body}</p>
      </div>
    </Card>
  )
}

export default function ResourceArticles({ articles }: { articles: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4">
      {articles.map((a, i) => (
        <ArticleItem key={i} index={i} title={a.title} body={a.body} />
      ))}
    </div>
  )
}
