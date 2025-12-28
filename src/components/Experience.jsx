import React from 'react'
import './Experience.css'

const Experience = () => {
  // TODO: 填入实际经历数据
  const experiences = [
    {
      id: 1,
      company: '公司名称',
      position: '职位名称',
      period: '2023年 - 2024年',
      location: '地点',
      bullets: [
        'Built / Improved / Automated... 使用XX工具/方法，产出了XX影响',
        'Analyzed... 使用XX工具/方法，产出了XX影响',
        'Developed... 使用XX工具/方法，产出了XX影响'
      ]
    },
    {
      id: 2,
      company: '公司名称',
      position: '职位名称',
      period: '2022年 - 2023年',
      location: '地点',
      bullets: [
        'Built / Improved / Automated... 使用XX工具/方法，产出了XX影响',
        'Analyzed... 使用XX工具/方法，产出了XX影响'
      ]
    },
    {
      id: 3,
      company: '公司名称',
      position: '职位名称',
      period: '2021年 - 2022年',
      location: '地点',
      bullets: [
        'Built / Improved / Automated... 使用XX工具/方法，产出了XX影响',
        'Analyzed... 使用XX工具/方法，产出了XX影响'
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

