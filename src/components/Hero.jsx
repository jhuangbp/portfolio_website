import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    window.open('/JyunRu_Huang_Resume.pdf', '_blank')
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img src="/JyunRu_Huang_Headshot.jpg" alt="JyunRu Huang" className="hero-image" />
          </div>

          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">JyunRu Huang</span>
              <span className="hero-subtitle">Boston University MSBA | Credit Risk Analyst @ CTBC Bank</span>
            </h1>

            <div className="hero-badges">
              <span className="hero-badge">Credit Risk</span>
              <span className="hero-badge">Machine Learning</span>
              <span className="hero-badge">Business Analytics</span>
            </div>

            <div className="hero-description">
  <p>3+ years of banking credit risk modeling experience</p>
  <p>Formal training in analytics, machine learning, and deep learning</p>
  <p>Seeking opportunities in data analytics, business analytics, or risk management</p>
</div>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={downloadCV}>Download CV</button>
              <button className="btn btn-dark" onClick={() => scrollToSection('contact')}>Contact Me</button>
              <a href="https://github.com/jhuangbp" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
              <a href="https://www.linkedin.com/in/jyun-ru-huang-tw/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
