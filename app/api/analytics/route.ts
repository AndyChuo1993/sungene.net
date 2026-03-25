import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const record = {
      ...body,
      ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
      serverTime: new Date().toISOString(),
    }

    // Append to NDJSON file
    const ndjsonPath = path.join(process.cwd(), 'data', 'analytics.ndjson')
    await fs.mkdir(path.dirname(ndjsonPath), { recursive: true })
    await fs.appendFile(ndjsonPath, `${JSON.stringify(record)}\n`, 'utf8')

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
