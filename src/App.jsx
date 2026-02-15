import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import CaseCompetition from './components/CaseCompetition'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const datasetteUrl = 'https://ds-701-muckrock-data-liberation-project.onrender.com'
    const controller = new AbortController()

    fetch(datasetteUrl, {
      mode: 'no-cors',
      cache: 'no-store',
      signal: controller.signal
    }).catch(() => {})

    const handleScroll = () => setShowBackToTop(window.scrollY > 420)
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      controller.abort()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <CaseCompetition />
      <Skills />
      <Certificates />
      <Contact />
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}

export default App
