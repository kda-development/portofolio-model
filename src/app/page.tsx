import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import { portfolioData } from './data/portfolio-data'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Portfolio data={portfolioData.portfolio} />
      <Services data={portfolioData.services} />
      <Contact data={portfolioData.contact} />
    </main>
  )
}
