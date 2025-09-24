'use client'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold">AI Portfolio Builder</h1>
      <div className="flex items-center gap-4">
        <a className="text-sm underline" href="https://vercel.com" target="_blank" rel="noreferrer">Deploy</a>
        <ThemeToggle />
      </div>
    </header>
  )
}
