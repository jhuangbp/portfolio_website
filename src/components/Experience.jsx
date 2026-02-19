import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'CTBC Bank (a leading private commercial bank in Taiwan)',
      logo: '/logo/ctbc_bank.png',
      logoAlt: 'CTBC Bank logo',
      position: 'Retail Credit Risk Analyst',
      period: 'Jul 2020 – May 2023',
      location: 'Taipei City, Taiwan',
      bullets: [
        'Developed Loss Given Default (LGD) forecasting models for mortgage loans using SAS and SQL, streamlining the process by narrowing 16,000 predictors to 10 key variables through feature engineering, improving model discrimination by 18% (Gini coefficient).',
        'Led research and modeling of typhoon flood impact on mortgage collateral by analyzing meteorological open data with ArcGIS (geographic information analysis software), resulting in a patented geographic risk model in Taiwan.',
        'Led three risk analysis projects across mortgage, personal loans, and credit cards; one project resulted in a proactive credit card account closure policy that was successfully implemented.'
      ]
    },
    {
      id: 2,
      company: 'Taipei Fubon Commercial Bank',
      logo: '/logo/fubon-bank.jpg',
      logoAlt: 'Taipei Fubon Commercial Bank logo',
      position: 'Institutional Credit Risk Analyst',
      period: 'Jul 2019 – Jun 2020',
      location: 'Taipei City, Taiwan',
      bullets: [
        'Conducted credit risk analysis on 8+ large corporate borrowers with USD 10M+ exposure per case, evaluating financial metrics and conducting macroeconomic stress testing to support credit approval decisions.',
        'Managed end-to-end credit assessment processes including internal credit rating evaluations, risk case documentation, and credit approval workflow coordination.',
        'Enhanced Excel VBA financial forecasting models to expand applicability across companies of various sizes and industries, improving credit analysis efficiency.'
      ]
    },
    {
      id: 3,
      company: 'E.Sun Commercial Bank',
      logo: '/logo/E-Sun-logo.jpg.png',
      logoAlt: 'E.Sun Commercial Bank logo',
      position: 'Credit Card Marketing Intern',
      period: 'Jul 2018 – Aug 2018',
      location: 'Taipei City, Taiwan',
      bullets: [
        'Supported bank-wide customer marketing list query requests using SQL to inform marketing campaign strategies.',
        'Conducted credit card marketing research using Tableau dashboards.',
        'Designed and proposed a new credit card dashboard UI layout for the mobile banking app, which was officially adopted and implemented by the design team after my internship.'
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
                <img className="experience-logo" src={exp.logo} alt={exp.logoAlt} />
                <div className="experience-header-text">
                  <h3 className="experience-position">{exp.position}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
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
