import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'CTBC Bank (Largest Bank in Taiwan)',
      position: 'Retail Credit Risk Analyst',
      period: 'Jul 2020 – May 2023',
      location: 'Taipei City, Taiwan',
      bullets: [
        'Developed mortgage loss forecasting models with SAS Macros,筛选1.6万特征至10个关键变量，模型判别力(Gini)提升18%。',
        '研究台风洪涝对房贷抵押品的影响，结合气象开放数据与ArcGIS打造台湾专利地理风险模型。',
        '作为Management Associate独立负责3个房贷与信贷风险分析项目，提供数据驱动决策建议。'
      ]
    },
    {
      id: 2,
      company: 'Taipei Fubon Commercial Bank',
      position: 'Institutional Credit Risk Analyst',
      period: 'Jul 2019 – Jun 2020',
      location: 'Taipei City, Taiwan',
      bullets: [
        '进行产业与财报分析，支持8笔企业融资案件，累计授信额度逾2亿美元。'
      ]
    },
    {
      id: 3,
      company: 'E.Sun Commercial Bank',
      position: 'Credit Card Marketing Intern',
      period: 'Jul 2018 – Aug 2018',
      location: 'Taipei City, Taiwan',
      bullets: [
        '使用SQL对400万+客群执行RFM与cohort分析，为精准行销活动提供洞察。'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-position">{exp.position}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

