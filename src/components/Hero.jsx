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
    window.open('/docs/JyunRu_Huang_Resume.pdf', '_blank')
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src="/docs/JyunRu_Huang_Headshot.jpg" 
              alt="JyunRu Huang" 
              className="hero-image"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">JyunRu Huang</span>
              <span className="hero-subtitle">MSBA @ BU | Data Analyst | ML / BI</span>
            </h1>
            
            <p className="hero-description">
              {/* TODO: 填入2-3句超短摘要 */}
              我在数据分析和机器学习领域有丰富经验，专注于通过数据驱动的方法解决业务问题。
              擅长数据可视化、预测建模和商业智能分析。
              正在寻找数据分析和商业分析相关的职位机会。
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={downloadCV}>
                Download CV
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
              <a 
                href="https://github.com/jhuangbp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/jyunru-huang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

