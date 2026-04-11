
import nodemailer from 'nodemailer'
import { rateLimit } from '@/lib/rateLimit'
import process from 'process'
import { promises as fs } from 'fs'
import path from 'path'
import { getSupabaseAdmin } from '@/lib/supabase'

const allowedTypes = [
  'Contact',
  'Free Analysis',
  'Export Lead Generation',
  'Distributor Development',
  'Export Sales Outsourcing',
  'Partnership Inquiry',
  'Lead Generation',
  'Outreach Service',
  'Sales Outsourcing',
  'Lead Magnet',
  'Product Recommendation',
] as const

type Inquiry = {
  id?: string
  date?: string
  type: (typeof allowedTypes)[number]
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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getText(value: unknown, max = 2000) {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (!trimmed) return undefined
  return trimmed.slice(0, max)
}

type SanitizeResult = { item: Inquiry } | { error: string }

function sanitizeBody(body: Record<string, unknown>): SanitizeResult {
  const type = getText(body.type, 80)
  const name = getText(body.name, 120)
  const email = getText(body.email, 200)?.toLowerCase()

  if (!type || !allowedTypes.includes(type as (typeof allowedTypes)[number])) {
    return { error: 'Invalid inquiry type' }
  }

  if (!name || !email || !emailRegex.test(email)) {
    return { error: 'Missing or invalid contact fields' }
  }

  const item: Inquiry = {
    type: type as Inquiry['type'],
    name,
    email,
    company: getText(body.company, 160),
    phone: getText(body.phone, 60),
    message: getText(body.message, 5000),
    productName: getText(body.productName, 240),
    quantity: getText(body.quantity, 120),
    incoterms: getText(body.incoterms, 120),
    targetCountry: getText(body.targetCountry, 160),
    targetMarket: getText(body.targetMarket, 160),
    currentChannels: getText(body.currentChannels, 500),
    goals: getText(body.goals, 1000),
    topic: getText(body.topic, 240),
    integrationType: getText(body.integrationType, 240),
    details: getText(body.details, 3000),
    scope: getText(body.scope, 1000),
    budget: getText(body.budget, 120),
    timeline: getText(body.timeline, 120),
  }

  return { item }
}

function jsonFail(status: number, error: string, extra?: Record<string, unknown>) {
  return Response.json({ ok: false, error, ...(extra || {}) }, { status })
}

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || 'unknown'
  const reqId = `REQ-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
  const rl = rateLimit(ip, 10, 60_000)
  if (!rl.ok) return jsonFail(429, 'Too Many Requests', { reqId })

  let body: any
  try {
    body = await req.json()
  } catch {
    return jsonFail(400, 'Invalid JSON body', { reqId })
  }

  if (process.env.RECAPTCHA_SECRET && body.recaptchaToken) {
    const token = body.recaptchaToken
    const vr = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET, response: token })
    }).then(r => r.json()).catch(() => null)
    if (!vr || !vr.success) return jsonFail(400, 'Captcha Failed', { reqId })
  }
  if (body.website) return Response.json({ ok: true, reqId })

  const sanitized = sanitizeBody(body)
  if ('error' in sanitized) {
    return jsonFail(400, sanitized.error, { reqId })
  }

  const item = sanitized.item

  const meta = collectMeta(req)
  const id = `REQ-${Date.now().toString(36)}`

  // Always persist to Supabase (or ndjson fallback) — runs in parallel with
  // email so neither one blocks the other. Supabase is the durable store;
  // email is the live notification.
  const persistPromise = persistInquiry({ id, reqId, item, rawBody: body, meta }).catch((err) => {
    console.error('[inquiries] persist failed:', err)
  })

  try {
    const { transporter, fromAddr, to, emailEnabled } = getTransporter()
    if (!emailEnabled) {
      await persistPromise
      return Response.json({ ok: true, id, ackOk: null, ackQueued: false, reqId, emailEnabled: false })
    }
    const adminOk = await sendAdminEmail({ transporter, fromAddr, to, item, rawBody: body, meta, id, reqId })

    if (!adminOk) {
      console.error('[inquiries]', { reqId, adminOk: false, ackOk: false, id })
      return jsonFail(500, 'Email Send Failed', { reqId })
    }

    if (item.email) {
      void sendAckEmail({ transporter, fromAddr, item, id, reqId })
        .then((ackOk) => {
          console.info('[inquiries]', { reqId, adminOk: true, ackOk, id })
        })
        .catch((err) => {
          console.error('[inquiries] ack send failed:', err)
          console.info('[inquiries]', { reqId, adminOk: true, ackOk: false, id })
        })
    } else {
      console.info('[inquiries]', { reqId, adminOk: true, ackOk: true, id })
    }

    // Let persist finish in the background — don't block the response.
    void persistPromise
    return Response.json({ ok: true, id, ackOk: null, ackQueued: Boolean(item.email), reqId })
  } catch (err) {
    console.error('[inquiries] email send failed:', err)
    console.error('[inquiries]', { reqId, adminOk: false, ackOk: false, id })
    // Still try to persist even if email failed.
    await persistPromise
    return jsonFail(500, 'Email Send Failed', { reqId })
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

function getTransporter() {
  const url = process.env.SMTP_URL
  const host = process.env.MAIL_HOST || process.env.SMTP_HOST
  const port = Number(process.env.MAIL_PORT || process.env.SMTP_PORT || 587)
  const user = process.env.MAIL_USER || process.env.SMTP_USER
  const rawPass = process.env.MAIL_PASS || process.env.SMTP_PASS
  const pass = rawPass ? rawPass.replace(/\s+/g, '') : undefined

  const to = process.env.INQUIRY_TO || 'contact@sungene.net'
  let transporter: any
  let emailEnabled = true

  if (host && user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // 587 = STARTTLS
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 10_000,
    })
  } else if (url) {
    transporter = nodemailer.createTransport(url)
  } else {
    emailEnabled = false
  }

  const fromName = process.env.MAIL_FROM || 'SunGene Service Team'
  const fromAddr = user ? `"${fromName}" <${user}>` : 'no-reply@example.com'

  return { transporter, fromAddr, to, emailEnabled }
}

async function persistInquiry(args: { id: string; reqId: string; item: Inquiry; rawBody: any; meta: any }) {
  const { id, reqId, item, rawBody, meta } = args
  const record = {
    id,
    reqId,
    date: new Date().toISOString(),
    item,
    rawBody,
    meta,
  }

  // Primary persistence: Supabase (durable across Cloud Run deploys).
  // Falls back to ndjson only if Supabase env vars aren't set.
  const supabaseAdmin = getSupabaseAdmin()
  if (supabaseAdmin) {
    try {
      // Parse source/context from the raw body — QuickQuote sends these as
      // explicit fields; full Contact form falls through with null.
      const source = typeof rawBody?.source === 'string' ? rawBody.source : null
      const context = typeof rawBody?.context === 'string' ? rawBody.context : null

      // Split out the "extra" payload — everything the sanitized schema
      // doesn't map to named columns.
      const extraKeys = ['productName', 'quantity', 'incoterms', 'targetCountry', 'targetMarket', 'currentChannels', 'goals', 'topic', 'integrationType', 'details', 'scope', 'budget', 'timeline']
      const extra: Record<string, unknown> = {}
      for (const k of extraKeys) {
        const v = (item as Record<string, unknown>)[k]
        if (v != null && v !== '') extra[k] = v
      }

      await supabaseAdmin.from('inquiries').insert({
        type: item.type,
        source: source || null,
        context: context || null,
        name: item.name,
        email: item.email,
        phone: item.phone || null,
        company: item.company || null,
        country: item.targetCountry || null,
        message: item.message || null,
        target_output: typeof rawBody?.output === 'string' ? rawBody.output : null,
        extra: Object.keys(extra).length > 0 ? extra : null,
        page_url: meta.ref || null,
        referer: meta.ref || null,
        utm: meta.utm || null,
        ip: meta.ip || null,
        language: meta.lang || null,
        status: 'new',
      })
    } catch (err) {
      console.error('[inquiries] supabase insert failed, falling back to ndjson:', err)
      const ndjsonPath = path.join(process.cwd(), 'data', 'inquiries.ndjson')
      await fs.mkdir(path.dirname(ndjsonPath), { recursive: true })
      await fs.appendFile(ndjsonPath, `${JSON.stringify(record)}\n`, 'utf8')
    }
    return
  }

  // Fallback: ephemeral ndjson (only if Supabase not configured)
  const ndjsonPath = path.join(process.cwd(), 'data', 'inquiries.ndjson')
  await fs.mkdir(path.dirname(ndjsonPath), { recursive: true })
  await fs.appendFile(ndjsonPath, `${JSON.stringify(record)}\n`, 'utf8')
}

async function sendAdminEmail(args: {
  transporter: any
  fromAddr: string
  to: string
  item: Inquiry
  rawBody: any
  meta: any
  id: string
  reqId?: string
}): Promise<boolean> {
  const { transporter, fromAddr, to, item, rawBody, meta, id, reqId } = args
  const subject = `New Inquiry #${id} ${item.type} - ${item.name}`
  const adminText =
`New Inquiry ID: ${id}
Type: ${item.type}
Name: ${item.name}
Company: ${item.company || '-'}
Email: ${item.email}
Phone: ${item.phone || '-'}
Message: ${item.message || '-'}
Extended: ${JSON.stringify(rawBody || {}, null, 2)}
Source: ${meta.ref}
Language: ${meta.lang}
UTM: ${JSON.stringify(meta.utm)}
IP: ${meta.ip}
Time: ${meta.time}`
  try {
    const info = await transporter.sendMail({
      to,
      from: fromAddr,
      subject,
      text: adminText,
      replyTo: item.email,
      headers: { 'X-Request-ID': reqId || '' },
    })
    console.log('[inquiries] admin email sent:', info.messageId)
    return true
  } catch (err) {
    console.error('[inquiries] admin email failed:', err)
    return false
  }
}

async function sendAckEmail(args: {
  transporter: any
  fromAddr: string
  item: Inquiry
  id: string
  reqId?: string
}): Promise<boolean> {
  const { transporter, fromAddr, item, id, reqId } = args

  const ackSubj = `We received your inquiry (Ref: ${id}) | 已收到您的詢價（${id}）`
  const contactEmail = 'contact@sungene.net'
  const contactPhone = '+886 4 3703 2705'
  const contactWhatsApp = '+86 18144132078'
  const contactLine = '@sungene'
  const ackText =
`Hi ${item.name},

We've received your inquiry (Ref: ${id}). Our team will get back to you within 1-2 business days.
If you'd like to add more information, you can reply to this email or contact us:

Email: ${contactEmail}
Tel: ${contactPhone}
WhatsApp: ${contactWhatsApp}
LINE: ${contactLine}

Best regards,
SunGene Service Team

---

您好 ${item.name}：

我們已收到您的詢價（編號 ${id}），專員將在 1-2 個工作日內與您聯繫。
如需補充資訊，歡迎直接回覆此信，或聯繫我們：

Email: ${contactEmail}
Tel: ${contactPhone}
WhatsApp: ${contactWhatsApp}
LINE: ${contactLine}

此致
SunGene 服務團隊`

  try {
    await transporter.sendMail({
      to: item.email,
      from: fromAddr,
      subject: ackSubj,
      text: ackText,
      headers: { 'X-Request-ID': reqId || '' },
    })
    return true
  } catch {
    return false
  }
}
