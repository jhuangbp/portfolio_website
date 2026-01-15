import React from 'react'
import './Education.css'

const Education = () => {
  const education = [
    {
      id: 1,
      school: 'Boston University, Questrom School of Business',
      degree: 'M.S. in Business Analytics',
      period: 'Aug 2024 ~ Jan 2026',
      gpa: 'GPA: 3.58 / 4.00',
      courses: [
        'Advanced Analytics Topics (Neural Network)',
        'Unsupervised Machine Learning',
        'Supervised Machine Learning',
        'Machine Learning in Healthcare',
        'Introduction to Data Analytics (Python)',
        'Business Analytics Toolbox (SQL + Tableau)',
        'Big Data Analytics (PySpark)'
      ],
    },
    {
      id: 2,
      school: 'National Taiwan University',
      degree: 'B.A. in Economics, Minor in Political Science',
      period: 'Aug 2014 ~ Jan 2019',
      gpa: '',
      courses: []
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
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
      </div>
    </section>
  )
}

export default Education
