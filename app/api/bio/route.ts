import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(req: Request) {
  try {
    const { keywords } = await req.json()
    if (!keywords || !Array.isArray(keywords)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const prompt = `Create a professional bio paragraph based on these keywords: ${keywords.join(', ')}.`
    const response = await client.chat.completions.create({
      model: 'gpt-5',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200
    })
    const text = response.choices?.[0]?.message?.content ?? ''
    return NextResponse.json({ bio: text })
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
