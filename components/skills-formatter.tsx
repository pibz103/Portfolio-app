'use client'
import { useState } from 'react'

export default function SkillsFormatter(){ 
  const [skills, setSkills] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  async function generate(){
    setLoading(true)
    try{
      const res = await fetch('/api/skills', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ skills: skills.split(',') }) })
      const data = await res.json()
      setResult(data.description || data.error || 'No result')
      localStorage.setItem('generated_skills', data.description || '')
    }catch(err){
      setResult('Error: '+String(err))
    }finally{ setLoading(false) }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Skills Formatter</h2>
      <input className="border w-full p-2 rounded mb-2" placeholder="skills, comma separated" value={skills} onChange={e=>setSkills(e.target.value)} />
      <button onClick={generate} className="bg-purple-600 text-white px-4 py-2 rounded">{loading? 'Generating...' : 'Generate Skills Description'}</button>
      {result && <div className="mt-4 p-3 bg-slate-50/5 rounded"><pre className="whitespace-pre-wrap">{result}</pre></div>}
    </div>
  )
}
