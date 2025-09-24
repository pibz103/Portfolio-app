import Header from '../components/header'
import BioGenerator from '../components/bio-generator'
import ProjectGenerator from '../components/project-generator'
import SkillsFormatter from '../components/skills-formatter'
import PortfolioPreview from '../components/portfolio-preview'

export default function Page() {
  return (
    <main className="min-h-screen py-12 flex flex-col items-center">
      <div className="container px-6">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-6">
            <div className="card"><BioGenerator /></div>
            <div className="card"><ProjectGenerator /></div>
            <div className="card"><SkillsFormatter /></div>
          </div>
          <div className="card">
            <PortfolioPreview />
          </div>
        </div>
        <footer className="text-center text-sm text-muted mt-8">© AI Portfolio Builder</footer>
      </div>
    </main>
  )
}
