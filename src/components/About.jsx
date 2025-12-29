import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            我是一名专注于信用风险与商业分析的MSBA学生，目前就读于波士顿大学，预计2026年1月毕业。
            过往在台湾最大银行兆丰国际商业银行负责零售信用风险建模，擅长用统计建模与机器学习提升风控成效。
          </p>
          <p>
            我热衷将复杂数据转化为可行动洞察，曾以开源气象数据与ArcGIS打造获专利的地理风险模型，并在医疗分析竞赛中优化XGBoost模型进入前50名。
            期待在数据分析、商业智能或风控领域发挥价值。
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>目前状态</h3>
            <p>波士顿大学 MSBA | 预计2026年1月毕业 | 可立即开始工作</p>
          </div>
          <div className="highlight-card">
            <h3>求职方向</h3>
            <p>Data Analyst / Business Analyst / Risk Analyst</p>
          </div>
          <div className="highlight-card">
            <h3>核心优势</h3>
            <ul>
              <li>信用风险建模与特征筛选经验</li>
              <li>跨职能协作推动数据驱动决策</li>
              <li>结合统计、GIS与机器学习的技术专长</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

