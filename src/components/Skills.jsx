import React from 'react'
import './Skills.css'

const Skills = () => {
  // TODO: 填入实际技能数据
  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'SQL', 'R', 'JavaScript']
    },
    {
      category: 'Data',
      skills: ['Pandas', 'Spark', 'dbt', 'ETL']
    },
    {
      category: 'Machine Learning',
      skills: ['XGBoost', 'Scikit-learn', 'TensorFlow', 'PyTorch']
    },
    {
      category: 'BI Tools',
      skills: ['Tableau', 'Power BI', 'Looker']
    },
    {
      category: 'Cloud/Tools',
      skills: ['Git', 'Docker', 'GCP', 'AWS']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

