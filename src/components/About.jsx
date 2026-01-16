import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I am Jyun-Ru (Jin). I recently completed an M.S. in Business Analytics at Boston University’s Questrom School of Business. Previously, I spent nearly three years at CTBC Bank, Taiwan’s largest bank, as a Retail Credit Risk Analyst, where I developed internal loss forecasting models for mortgage and personal loans using SAS and SQL. Notably, I led a geospatial risk research project that integrated meteorological open data with internal mortgage data to quantify typhoon flood impacts on collateral, resulting in a patented geographic risk model in Taiwan.
          </p>
          <p>
            During my graduate studies, I developed a multimodal deep learning model in TensorFlow to estimate calories from food images and textual descriptions. This project integrated Python, SQL, and Google Cloud virtual machines. It represents the culmination of my graduate training in analytics and machine learning.
          </p>
          <p>
            I am enthusiastic about applying my analytical skills and banking industry experience to drive data-driven innovation in business analytics and risk management.
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

