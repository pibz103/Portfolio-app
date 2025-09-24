'use client'
import { useState } from 'react'

export default function BioGenerator(){ 
  const [keywords, setKeywords] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  async function generate(){
    setLoading(true)
    try{
      const res = await fetch('/api/bio', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ keywords: keywords.split(',') }) })
      const data = await res.json()
      setResult(data.bio || data.error || 'No result')
      // write to localStorage for preview
      localStorage.setItem('generated_bio', data.bio || '')
    }catch(err){
      setResult('Error: '+String(err))
    }finally{ setLoading(false) }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Bio Generator</h2>
      <input className="border w-full p-2 rounded mb-2" placeholder="keywords, comma separated" value={keywords} onChange={e=>setKeywords(e.target.value)} />
      <button onClick={generate} className="bg-blue-600 text-white px-4 py-2 rounded">{loading? 'Generating...' : 'Generate Bio'}</button>
      {result && <div className="mt-4 p-3 bg-slate-50/5 rounded"><pre className="whitespace-pre-wrap">{result}</pre></div>}
    </div>
  )
}
