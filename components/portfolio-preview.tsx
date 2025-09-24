'use client'
import { useState, useEffect } from 'react'

export default function PortfolioPreview(){
  const [bio, setBio] = useState('')
  const [project, setProject] = useState('')
  const [skills, setSkills] = useState('')

  useEffect(()=>{
    const t = setInterval(()=>{
      setBio(localStorage.getItem('generated_bio')||'')
      setProject(localStorage.getItem('generated_project')||'')
      setSkills(localStorage.getItem('generated_skills')||'')
    },500)
    return ()=> clearInterval(t)
  },[])

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Portfolio Preview</h2>
      <section className="mb-4">
        <h3 className="font-medium">Bio</h3>
        <p className="mt-2">{bio || 'Your generated bio will appear here'}</p>
      </section>
      <section className="mb-4">
        <h3 className="font-medium">Project</h3>
        <p className="mt-2">{project || 'Your generated project description will appear here'}</p>
      </section>
      <section>
        <h3 className="font-medium">Skills</h3>
        <p className="mt-2">{skills || 'Your generated skills paragraph will appear here'}</p>
      </section>
    </div>
  )
}
