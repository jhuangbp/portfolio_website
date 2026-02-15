import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const downloadCV = () => {
    window.open('/JyunRu_Huang_Resume.pdf', '_blank')
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span>JyunRu Huang</span>
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('education')}>Education</li>
          <li onClick={() => scrollToSection('case-competition')}>Case Competition</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('certificates')}>Certificates</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>

        <button className="navbar-cv-btn" onClick={downloadCV}>
          Download CV
        </button>

        <button className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
