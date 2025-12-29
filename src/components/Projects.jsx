import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Humana-Mays Healthcare Analytics Case Competition (Top 50)',
      description: '识别未进行预防性PCP就诊的“未参与”会员并提出提升就诊率策略，范围涵盖200+支队伍。',
      role: '在14个数据集上进行复杂特征工程，使用Grid Search优化XGBoost并完成模型解释。',
      impact: 'AUC 0.75，排名前10%，通过SHAP分析发现年龄与医疗消费行为是影响PCP就诊的核心因素，并转化为三项可执行策略。',
      tech: ['Python', 'XGBoost', 'Feature Engineering', 'Grid Search', 'SHAP'],
      links: {
        github: '#',
        demo: '#',
        report: '#'
      }
    },
    {
      id: 2,
      name: 'Estimating Calories from Food Images and Descriptions',
      description: '以多模态AI估算家常菜肴热量，降低无营养标示场景下的估算误差。',
      role: '在BA865课程中使用TensorFlow训练融合食物照片与食谱描述的模型，构建可扩展的数据处理流程。',
      impact: '将2.5万笔样本预处理时间压缩至10分钟，获得A-课程成绩。',
      tech: ['TensorFlow', 'Python', 'Computer Vision', 'NLP', 'Data Pipeline'],
      links: {
        github: '#',
        demo: '#',
        report: '#'
      }
    },
    {
      id: 3,
      name: 'Mortgage Loss Forecasting & Flood Risk Modeling',
      description: '构建房贷损失预测与地理风险量化框架，支持风险定价与资产质量监控。',
      role: '使用SAS Macros筛选16,000+预测因子并训练模型；结合气象开放数据与ArcGIS评估台风洪涝风险。',
      impact: '模型判别力提升18%，并形成台湾专利的地理风险模型用于抵押品评估。',
      tech: ['SAS', 'Python', 'Feature Selection', 'ArcGIS', 'Risk Modeling'],
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
              {project.links.presentation && (
                <a href={project.links.presentation} target="_blank" rel="noopener noreferrer" className="project-link">
                  📄 View Presentation
                </a>
              )}
              {project.links.github && project.links.github !== '#' && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              )}
              {project.links.demo && project.links.demo !== '#' && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  Demo
                </a>
              )}
              {project.links.report && project.links.report !== '#' && (
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
