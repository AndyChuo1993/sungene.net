
import nodemailer from 'nodemailer'
import { rateLimit } from '@/lib/rateLimit'
import process from 'process'

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

  try {
    const { transporter, fromAddr, to } = getTransporter()
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

    return Response.json({ ok: true, id, ackOk: null, ackQueued: Boolean(item.email), reqId })
  } catch (err) {
    console.error('[inquiries] email send failed:', err)
    console.error('[inquiries]', { reqId, adminOk: false, ackOk: false, id })
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

  const to = process.env.INQUIRY_TO || 'contact@sungenelite.com'
  let transporter: any

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
    throw new Error('SMTP not configured')
  }

  const fromName = process.env.MAIL_FROM || 'SunGene 服務團隊'
  const fromAddr = user ? `"${fromName}" <${user}>` : 'no-reply@example.com'

  return { transporter, fromAddr, to }
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
  const subject = `新詢價#${id} ${item.type} - ${item.name}`
  const adminText =
`新詢價編號: ${id}
類別型: ${item.type}
姓名: ${item.name}
公司: ${item.company || '-'}
Email: ${item.email}
電話: ${item.phone || '-'}
訊息: ${item.message || '-'}
擴充: ${JSON.stringify(rawBody || {}, null, 2)}
來源: ${meta.ref}
語系: ${meta.lang}
UTM: ${JSON.stringify(meta.utm)}
IP: ${meta.ip}
時間: ${meta.time}
`
  try {
    await transporter.sendMail({
      to,
      from: fromAddr,
      subject,
      text: adminText,
      replyTo: item.email,
      headers: { 'X-Request-ID': reqId || '' },
    })
    return true
  } catch {
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

  // 自動回覆給客戶
  const ackSubj = `我們已收到您的詢價（編號 ${id}） | We received your inquiry (${id})`
  const contactEmail = 'contact@sungenelite.com'
  const contactPhone = '+886 4 3703 2705'
  const ackText =
`您好 ${item.name}：

我們已收到您的詢價（編號 ${id}），專員將在 1-2 個工作日內與您聯繫。
如需補充資訊，歡迎直接回覆此信，或聯繫我們：

Email: ${contactEmail}
Tel: ${contactPhone}

此致
SunGene 服務團隊

---

Hi ${item.name},

We've received your inquiry (Ref: ${id}). Our team will get back to you within 1-2 business days.
If you'd like to add more information, you can reply to this email or contact us:

Email: ${contactEmail}
Tel: ${contactPhone}

Best regards,
SunGene Service Team`

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
