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
            <img 
              src="/JyunRu_Huang_Headshot.jpg" 
              alt="JyunRu Huang" 
              className="hero-image"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">JyunRu Huang</span>
              <span className="hero-subtitle">MSBA @ BU | Data & Risk Analytics</span>
            </h1>

            <p className="hero-description">
              3+ 年银行信用风险建模经验，擅长用Python/SAS筛选关键特征并提升模型判别力。
              近期在医疗分析竞赛中以XGBoost和SHAP进入Top 50，持续深化机器学习与商业洞察结合。
              寻找数据分析、商业分析或风控相关机会。
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
