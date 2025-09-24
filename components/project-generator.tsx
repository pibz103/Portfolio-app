'use client'
import { useState } from 'react'

export default function ProjectGenerator(){ 
  const [title, setTitle] = useState('')
  const [tech, setTech] = useState('')
  const [highlights, setHighlights] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  async function generate(){
    setLoading(true)
    try{
      const res = await fetch('/api/project', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ title, technologies: tech.split(','), highlights }) })
      const data = await res.json()
      setResult(data.description || data.error || 'No result')
      localStorage.setItem('generated_project', data.description || '')
    }catch(err){
      setResult('Error: '+String(err))
    }finally{ setLoading(false) }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Project Generator</h2>
      <input className="border w-full p-2 rounded mb-2" placeholder="Project title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input className="border w-full p-2 rounded mb-2" placeholder="Technologies (comma separated)" value={tech} onChange={e=>setTech(e.target.value)} />
      <textarea className="border w-full p-2 rounded mb-2" placeholder="Project highlights" value={highlights} onChange={e=>setHighlights(e.target.value)} />
      <button onClick={generate} className="bg-green-600 text-white px-4 py-2 rounded">{loading? 'Generating...' : 'Generate Project Description'}</button>
      {result && <div className="mt-4 p-3 bg-slate-50/5 rounded"><pre className="whitespace-pre-wrap">{result}</pre></div>}
    </div>
  )
}
