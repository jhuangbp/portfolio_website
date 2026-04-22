import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Predicting Movie Ratings from Multimodal Data',
      description:
        'Consolidated 4,800+ films across nearly 40 years from three film databases and built a multi-page interactive Tableau dashboard with dimensional filters, trend lines, and distribution analysis.',
      role:
        'Extended EDA findings on studio release strategies in seasonality, budget allocation, and runtime positioning into a multimodal deep learning framework built in PyTorch and trained on NVIDIA A100 GPU.',
      impact:
        'Achieved an average prediction error within ±0.6 IMDb rating points (0–10 scale) on the validation set, denoting a 30% reduction compared to traditional ML baselines that use only structured features (budget, genre, runtime), and demonstrating the effectiveness of deep learning for pre-release rating prediction without audience feedback.',
      tech: ['Python', 'PyTorch', 'Deep Learning', 'Convolutional neural network', 'Autoencoder (VAE)','Transformer'],
      links: {
        article:
          'https://medium.com/@jhuangbp/predicting-movie-rating-from-multimodal-data-a-deep-learning-method-a35f8e85f0e5',
        tableau:
          'https://public.tableau.com/app/profile/jyun.ru.huang/viz/Movie_Tableau_17705931201140/Story1?publish=yes',
        github: '#',
        rawData: '#'
      }
    },
    {
      id: 2,
      name: 'Real-Time Intensive Care Unit Demand Forecasting for Hospital Capacity Planning',
      description:
        'Designed a comprehensive Intensive Care Unit (ICU) bed demand forecasting framework using MIMIC-IV data to support hospital ICU capacity and resource planning.',
      role:
        'Developed two independent XGBoost-based predictive models to estimate ICU inflow from the emergency department within 12 hours and ICU outflow via 72-hour readmission risk after ICU discharge.',
      impact:
        'Achieved predictive performance with AUCs of 0.96 for ICU inflow model and 0.72 for ICU outflow model, outperforming comparable models reported in prior literature.',
      tech: ['Healthcare Analytics', 'Python', 'Scikit-Learn', 'XGBoost', 'NumPy', 'Pandas', 'MIMIC-IV'],
      links: {
        presentation: '/HealthcareProject_Final%20Presentation.pdf',
        report: '/HealthcareProject_Final%20Report.pdf',
        github: '#',
        rawData: 'https://physionet.org/content/mimiciv/3.1/'
      }
    },
    {
      id: 3,
      name: 'U.S. Military Base Slot Machine Revenue Explorer',
      description: 'The U.S. military has publicly released data on internal slot machine revenue, locations, and related metrics for the past five fiscal years. We supported MuckRock, a nonprofit investigative journalism organization, by cleaning and analyzing these datasets.',
      role: 'Built a layout-aware, rule-based data extraction pipeline in Python to parse borderless, irregular PDF tables into clean, analysis-ready datasets.',
      impact: 'The pipeline processed a 203-page PDF in under 3 minutes, reducing manual data processing time from days to minutes. Parsed results were deployed to a SQLite-backed interactive web dashboard, enabling users to explore analytics anytime, anywhere.',
      tech: ['Python', 'SQL', 'Data Visualization', 'Website Deployment', 'PDF Data Extraction'],
      links: {
        datasette: 'https://ds-701-muckrock-data-liberation-project.onrender.com',
        github: 'https://github.com/jhuangbp/muckrock-liberation',
        report: '/Muckrock%20Final%20Report.pdf',
        rawData: 'https://www.data-liberation-project.org/datasets/dod-army-slot-machines/'
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
              <strong>Achievement: </strong>
              {project.impact}
            </div>

            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.links.presentation && (
                <a
                  href={project.links.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Presentation Slide
                </a>
              )}

              {project.links.article && (
                <a
                  href={project.links.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Medium Article
                </a>
              )}

              {project.links.tableau && project.links.tableau !== '#' && (
                <a
                  href={project.links.tableau}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Tableau EDA Dashboard
                </a>
              )}

              {project.links.github && project.links.github !== '#' && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              )}

              {project.links.rawData && project.links.rawData !== '#' && (
                <a
                  href={project.links.rawData}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Raw Data
                </a>
              )}

              {project.links.report && project.links.report !== '#' && (
                <a
                  href={project.links.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Report
                </a>
              )}

              {project.links.datasette && project.links.datasette !== '#' && (
                <a
                  href={project.links.datasette}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Interactive Web Visualization
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
