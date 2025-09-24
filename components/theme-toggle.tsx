'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(()=> typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <button onClick={()=> setTheme(t=> t==='dark'?'light':'dark')} className="px-3 py-1 rounded border">
      {theme==='dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
