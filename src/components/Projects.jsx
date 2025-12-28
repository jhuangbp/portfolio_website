import React from 'react'
import './Projects.css'

const Projects = () => {
  // TODO: 填入实际项目数据
  const projects = [
    {
      id: 1,
      name: '项目名称 1',
      description: '一句话描述：这个项目解决了什么问题/为什么重要',
      role: '我在这个项目中负责了数据分析和模型构建工作',
      impact: '成果：提升效率XX%、准确率XX%、节省XX小时',
      tech: ['Python', 'SQL', 'Machine Learning', 'Tableau'],
      links: {
        github: '#',
        demo: '#',
        report: '#'
      }
    },
    {
      id: 2,
      name: '项目名称 2',
      description: '一句话描述：这个项目解决了什么问题/为什么重要',
      role: '我在这个项目中负责了数据分析和模型构建工作',
      impact: '成果：提升效率XX%、准确率XX%、节省XX小时',
      tech: ['Python', 'SQL', 'Machine Learning', 'Tableau'],
      links: {
        github: '#',
        demo: '#',
        report: '#'
      }
    },
    {
      id: 3,
      name: '项目名称 3',
      description: '一句话描述：这个项目解决了什么问题/为什么重要',
      role: '我在这个项目中负责了数据分析和模型构建工作',
      impact: '成果：提升效率XX%、准确率XX%、节省XX小时',
      tech: ['Python', 'SQL', 'Machine Learning', 'Tableau'],
      links: {
        github: '#',
        demo: '#',
        report: '#'
      }
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-role">{project.role}</p>
            <div className="project-impact">
              <strong>成果：</strong>{project.impact}
            </div>
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.links.github !== '#' && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              )}
              {project.links.demo !== '#' && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  Demo
                </a>
              )}
              {project.links.report !== '#' && (
                <a href={project.links.report} target="_blank" rel="noopener noreferrer" className="project-link">
                  Report
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

