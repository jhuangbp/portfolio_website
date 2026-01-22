import React from 'react'
import './CaseCompetition.css'

const CaseCompetition = () => {
  return (
    <section id="case-competition" className="case-competition">
      <h2 className="section-title">Humana-Mays 2024 Healthcare Analytics Case Competition</h2>
      <div className="case-competition-card">
        <div className="case-competition-body">
          <div className="case-competition-logos">
            <div className="case-competition-logo-slot">
              <img
                className="case-competition-logo"
                src="/logo/Texas_A&M_University_seal.svg"
                alt="Texas A&M University logo"
              />
            </div>
            <div className="case-competition-logo-slot">
              <img className="case-competition-logo" src="/logo/humana_logo.svg" alt="Humana logo" />
            </div>
          </div>
          <div className="case-competition-content">
            <div className="case-competition-header">
              <h3>Case Competition</h3>
              <span className="case-competition-period">Sep 2024 – Nov 2024</span>
            </div>
            <p className="case-competition-highlight">
              Placed in the Top 50 (Round 2) and AUC scored in the Top 10 among 200+ teams
            </p>
            <ul className="case-competition-bullets">
              <li>
                Identified “unengaged” Humana members (those lacking a preventive PCP visit) and proposed
                data-driven strategies to increase visit rates.
              </li>
              <li>
                Engineered and selected features across 14 datasets (500+ variables), building an optimized
                XGBoost model.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseCompetition
