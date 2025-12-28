import React from 'react'
import './Education.css'

const Education = () => {
  // TODO: 填入实际教育背景数据
  const education = [
    {
      id: 1,
      school: '波士顿大学',
      degree: '商业分析硕士 (MSBA)',
      period: '2022年 - 2024年',
      gpa: 'GPA: 3.8/4.0',
      courses: [
        'Data Mining and Machine Learning',
        'Business Intelligence',
        'Advanced Analytics',
        'Database Management',
        'Statistical Methods'
      ],
      certificates: []
    }
  ]

  const certificates = [
    // TODO: 填入实际证照数据
    'AWS Certified Data Analytics',
    'Google Data Analytics Certificate',
    'SAS Certified Advanced Analytics Professional'
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education & Certificates</h2>
      <div className="education-container">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <h3 className="education-degree">{edu.degree}</h3>
            <div className="education-school">{edu.school}</div>
            <div className="education-meta">
              <span>{edu.period}</span>
              {edu.gpa && <span>{edu.gpa}</span>}
            </div>
            {edu.courses.length > 0 && (
              <div className="education-courses">
                <h4>重点课程：</h4>
                <ul>
                  {edu.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        
        {certificates.length > 0 && (
          <div className="certificates-section">
            <h3 className="certificates-title">Certificates</h3>
            <div className="certificates-list">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-item">
                  <span className="certificate-icon">✓</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education

