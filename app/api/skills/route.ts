import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(req: Request) {
  try {
    const { skills } = await req.json()
    if (!skills || !Array.isArray(skills)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const prompt = `Create a professional skills paragraph using these skills: ${skills.join(', ')}.`
    const response = await client.chat.completions.create({
      model: 'gpt-5',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300
    })
    const text = response.choices?.[0]?.message?.content ?? ''
    return NextResponse.json({ description: text })
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
