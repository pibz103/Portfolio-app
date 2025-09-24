import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(req: Request) {
  try {
    const { title, technologies, highlights } = await req.json()
    if (!title || !technologies) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const prompt = `Create a professional project description for "${title}" using these technologies: ${technologies.join(', ')}. Key highlights: ${highlights}`
    const response = await client.chat.completions.create({
      model: 'gpt-5',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 250
    })
    const text = response.choices?.[0]?.message?.content ?? ''
    return NextResponse.json({ description: text })
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
