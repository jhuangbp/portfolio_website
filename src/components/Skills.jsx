import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming & Data',
      skills: ['Python', 'SQL', 'PySpark', 'Excel VBA']
    },
    {
      category: 'Analytics & Modeling',
      skills: ['XGBoost', 'Feature Engineering', 'Model Validation', 'SHAP Analysis']
    },
    {
      category: 'Visualization & GIS',
      skills: ['Tableau', 'Esri ArcGIS']
    },
    {
      category: 'Tools & Cloud',
      skills: ['SAS', 'Google Cloud Platform', 'Git']
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

