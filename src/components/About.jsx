import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            {/* TODO: 填入3-6行好读的自我介绍 */}
            我是一名数据分析和商业智能专业人士，拥有波士顿大学商业分析硕士学位。
            我热衷于将复杂的数据转化为有意义的商业洞察，帮助企业做出更好的决策。
          </p>
          <p>
            目前我专注于数据驱动的解决方案，运用机器学习和统计分析来解决实际业务问题。
            我擅长数据可视化、预测建模和商业智能分析，致力于通过技术创新提升业务价值。
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>目前状态</h3>
            <p>波士顿大学 | 波士顿 | 可立即开始工作</p>
          </div>
          <div className="highlight-card">
            <h3>求职方向</h3>
            <p>Data Analyst / Business Analyst / Data Scientist</p>
          </div>
          <div className="highlight-card">
            <h3>核心优势</h3>
            <ul>
              <li>数据驱动决策能力</li>
              <li>跨领域合作经验</li>
              <li>技术专精与商业洞察结合</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

