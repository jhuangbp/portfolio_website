import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'ICU Demand & Readmission Risk Forecasting',
      description: '使用MIMIC数据预测ICU需求和72小时再入院风险，帮助医院进行资源规划和及时干预',
      role: '开发了XGBoost模型预测12小时内ICU入院需求（AUC 0.96）和72小时再入院风险（AUC 0.72），整合了ED分流数据、用药特征工程和ICU停留时间分析',
      impact: '成果：ICU入院预测模型AUC达0.96（召回率93%），再入院预测模型AUC 0.72，构建了完整的ICU床位需求预测框架',
      tech: ['Python', 'XGBoost', 'Machine Learning', 'MIMIC-IV', 'Feature Engineering', 'SHAP'],
      links: {
        presentation: '/docs/HealthcareProject_Final%20Presentation.pdf',
        github: '#',
        demo: '#'
      }
    },
    {
      id: 2,
      name: 'Predicting Movie Ratings from Multimodal Data',
      description: '构建端到端多模态深度学习系统预测IMDb电影评分（1-10分），整合结构化元数据、文本摘要和海报图像，超越传统单一模态预测方法',
      role: '开发多模态深度学习管道，整合TMDB、IMDb和BoxOfficeMojo数据源，设计并实现Residual MLP、FT-Transformer等多种架构，使用MPNet、ConvNeXt V2和DINOv2提取文本和图像特征',
      impact: '成果：最佳模型（Residual MLP）验证RMSE达0.77，平均预测误差在±0.6 IMDb评分点内，深度学习模型显著超越XGBoost基线，多模态数据提升预测准确性',
      tech: ['Python', 'PyTorch', 'XGBoost', 'Deep Learning', 'MPNet', 'ConvNeXt V2', 'DINOv2', 'Autoencoders', 'BeautifulSoup'],
      links: {
        article: 'https://medium.com/@jhuangbp/predicting-movie-rating-from-multimodal-data-a-deep-learning-method-a35f8e85f0e5',
        github: '#',
        demo: '#'
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
              {project.links.presentation && (
                <a href={project.links.presentation} target="_blank" rel="noopener noreferrer" className="project-link">
                  📄 View Presentation
                </a>
              )}
              {project.links.article && (
                <a href={project.links.article} target="_blank" rel="noopener noreferrer" className="project-link">
                  📝 Read Article
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
