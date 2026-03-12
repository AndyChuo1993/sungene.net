import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { rateLimit } from '@/lib/rateLimit'
import process from 'process'
import fs from 'node:fs'
import path from 'node:path'

type Inquiry = {
  type: 'Need Supplier' | 'Need Market' | 'Need AI' | 'Need Custom' | 'Free Analysis' | 'Contact' | 'Lead Gen Service' | 'Lead Generation' | 'Outreach Service' | 'Sales Outsourcing' | 'Partnership Inquiry'
  name: string
  company?: string
  email: string
  phone?: string
  message?: string
  productName?: string
  quantity?: string
  incoterms?: string
  targetCountry?: string
  targetMarket?: string
  currentChannels?: string
  goals?: string
  topic?: string
  integrationType?: string
  details?: string
  scope?: string
  budget?: string
  timeline?: string
}

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || 'unknown'
  const rl = rateLimit(ip, 10, 60_000)
  if (!rl.ok) return new Response('Too Many Requests', { status: 429 })
  const body = await req.json()
  if (process.env.RECAPTCHA_SECRET) {
    const token = body.recaptchaToken
    if (!token) return new Response('Captcha Required', { status: 400 })
    const vr = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET, response: token })
    }).then(r => r.json()).catch(() => null)
    if (!vr || !vr.success) return new Response('Captcha Failed', { status: 400 })
  }
  if (body.website) return Response.json({ ok: true })
  const type = body.type
  if (!['Need Supplier', 'Need Market', 'Need AI', 'Need Custom', 'Free Analysis', 'Contact', 'Lead Gen Service', 'Lead Generation', 'Outreach Service', 'Sales Outsourcing', 'Partnership Inquiry'].includes(type)) return new Response('Bad Request', { status: 400 })
  // Phone is optional to maximize conversion
  if (!body.name || !body.email) return new Response('Bad Request', { status: 400 })
  const item: Inquiry = {
    type: body.type,
    name: body.name,
    company: body.company,
    email: body.email,
    phone: body.phone,
    message: body.message,
    productName: body.productName,
    quantity: body.quantity,
    incoterms: body.incoterms,
    targetCountry: body.targetCountry,
    targetMarket: body.targetMarket,
    currentChannels: body.currentChannels,
    goals: body.goals,
    topic: body.topic,
    integrationType: body.integrationType,
    details: body.details,
    scope: body.scope,
    budget: body.budget,
    timeline: body.timeline
  }
  // 儘管後端持久化失敗，也要保證通知信寄出
  const reqId = `REQ-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
  const result = await persist(item)
  const meta = collectMeta(req)
  const id = result.id || `TMP-${Date.now()}`
  if (!result.ok) {
    console.error('[inquiries.persist]', reqId, 'persist failed, writing to local file')
    fallbackAppend(item, id, meta)
  }
  try {
    await notify(item, meta, id, reqId)
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "MAIL_SEND_FAILED" },
      { status: 500 }
    )
  }
  return Response.json({ ok: true, id })
}

export async function GET() {
  return Response.json({ ok: true })
}

async function persist(item: Inquiry): Promise<{ ok: boolean; id?: string }> {
  let cmsUrl = process.env.CMS_URL
  const cmsToken = process.env.CMS_REST_TOKEN
  if (!cmsUrl || !cmsToken) return { ok: false }
  cmsUrl = cmsUrl.replace(/\/$/, '')
  const extras: Record<string, any> = {}
  const extraKeys = [
    'productName','quantity','incoterms','targetCountry',
    'targetMarket','currentChannels','goals',
    'topic','integrationType','details',
    'scope','budget','timeline'
  ] as const
  for (const k of extraKeys) {
    const v = (item as any)[k]
    if (typeof v !== 'undefined' && v !== null && v !== '') extras[k] = v
  }
  try {
    const doPost = () => fetch(`${cmsUrl}/api/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cmsToken}`
      },
      body: JSON.stringify({
        type: item.type,
        name: item.name,
        company: item.company || null,
        email: item.email,
        phone: item.phone || null,
        message: item.message || null,
        status: 'new',
        payload: Object.keys(extras).length ? extras : null
      })
    })
    let r = await doPost()
    if (!r.ok) {
      // retry once
      r = await doPost()
    }
    if (!r.ok) {
      try {
        const t = await r.text()
        console.error('[inquiries.persist] CMS error:', t)
      } catch {}
      return { ok: false }
    }
    const json = await r.json().catch(() => null)
    const id = json?.id
    if (!id) return { ok: false }
    return { ok: true, id }
  } catch (e) {
    try {
      console.error('[inquiries.persist] Network error:', (e as any)?.message || e)
    } catch {}
    return { ok: false }
  }
}

function collectMeta(req: Request) {
  const ref = req.headers.get('referer') || ''
  const lang = req.headers.get('accept-language') || ''
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || 'unknown'
  const url = new URL(ref || 'http://localhost')
  const utm = Object.fromEntries([...url.searchParams.entries()].filter(([k]) => k.startsWith('utm_')))
  return { ref, lang, ip, utm, time: new Date().toISOString() }
}

async function notify(item: Inquiry, meta: any, id: string, reqId?: string) {
  // if (!process.env.RESEND_API_KEY) {
  //   throw new Error('RESEND_API_KEY not configured')
  // }
  const url = process.env.SMTP_URL
  const host = process.env.MAIL_HOST || process.env.SMTP_HOST
  const port = Number(process.env.MAIL_PORT || process.env.SMTP_PORT || 587)
  const user = process.env.MAIL_USER || process.env.SMTP_USER
  const rawPass = process.env.MAIL_PASS || process.env.SMTP_PASS
  const pass = rawPass ? rawPass.replace(/\s+/g, '') : undefined
  
  const to = 'andy@sungene.net'
  let transporter: any
  
  if (host && user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // 587 = STARTTLS
      auth: { user, pass }
    })
  } else if (url) {
    transporter = nodemailer.createTransport(url)
  } else {
    console.error('[inquiries.notify]', reqId || '', 'SMTP not configured')
    return
  }
  const subject = `新詢盤#${id} ${item.type} - ${item.name}`
  const adminText =
`新詢盤編號: ${id}
類型: ${item.type}
姓名: ${item.name}
公司: ${item.company || '-'}
Email: ${item.email}
電話: ${item.phone || '-'}
訊息: ${item.message || '-'}
擴充: ${JSON.stringify({
  productName: item.productName, quantity: item.quantity, incoterms: item.incoterms,
  targetCountry: item.targetCountry, targetMarket: item.targetMarket, currentChannels: item.currentChannels,
  goals: item.goals, topic: item.topic, integrationType: item.integrationType, details: item.details,
  scope: item.scope, budget: item.budget, timeline: item.timeline
}, null, 2)}
來源: ${meta.ref}
語系: ${meta.lang}
UTM: ${JSON.stringify(meta.utm)}
IP: ${meta.ip}
時間: ${meta.time}
`
  const fromName = process.env.MAIL_FROM || 'SunGene Team'
  const fromAddr = user ? `"${fromName}" <${user}>` : 'no-reply@example.com'
  try {
    await transporter.sendMail({ to, from: fromAddr, subject, text: adminText, headers: { 'X-Request-ID': reqId || '' } })
  } catch (err) {
    console.error("[inquiries][sendMail] failed:", err)
  }
  // 自動回覆給客戶
  if (item.email) {
    const ackSubj = `我們已收到您的詢盤（編號 ${id}）`
    const ackText =
`您好 ${item.name}：

我們已收到您的詢盤（編號 ${id}），專員將在 1–2 個工作日內與您聯繫。
如需補充資訊，直接回覆此信即可。

此致
SunGene 外貿顧問團隊`
    try {
      await transporter.sendMail({ to: item.email, from: fromAddr, subject: ackSubj, text: ackText, headers: { 'X-Request-ID': reqId || '' } })
    } catch {}
  }
}

// 本地備援：將詢盤落地至 data/inquiries.ndjson，避免掉單
function fallbackAppend(item: any, id: string, meta: any) {
  try {
    const dir = path.resolve(process.cwd(), 'data')
    const file = path.join(dir, 'inquiries.ndjson')
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    const record = { id, ...item, meta }
    fs.appendFileSync(file, JSON.stringify(record) + '\n', 'utf8')
    return true
  } catch {
    return false
  }
}
