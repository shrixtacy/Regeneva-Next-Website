"use client";

import React, { useState } from 'react';

const fullSolutions = [
  {
    category: "reporting",
    title: "BRSR & Regulatory Disclosures",
    scope: "Reporting & Frameworks",
    desc: "Drafting, alignment, and assurance for Business Responsibility & Sustainability Reporting (BRSR), CSRD (ESRS), GRI, and SASB standards."
  },
  {
    category: "carbon",
    title: "GHG Accounting (Scope 1, 2 & 3)",
    scope: "Carbon & Net-Zero",
    desc: "Comprehensive greenhouse gas inventory setup, Scope 3 supply chain mapping, and SBTi-aligned decarbonization target setting."
  },
  {
    category: "risk",
    title: "Double Materiality Assessment",
    scope: "Strategy & Governance",
    desc: "Rigorous impact materiality and financial materiality matrix development in compliance with European CSRD and global guidelines."
  },
  {
    category: "assurance",
    title: "Supply Chain & Value Chain ESG Audits",
    scope: "Assurance & Supply Chain",
    desc: "Vendor ESG risk assessments, human rights due diligence, and supplier sustainability scorecard deployment."
  },
  {
    category: "rating",
    title: "CDP, EcoVadis & DJSI Rating Support",
    scope: "Ratings & Benchmarking",
    desc: "Gap analysis, questionnaire submission optimization, and strategic performance improvement for global ESG rating platforms."
  },
  {
    category: "climate",
    title: "Climate Risk & TCFD/TNFD Analysis",
    scope: "Climate & Nature Risk",
    desc: "Physical and transition climate scenario modeling, TNFD nature-related dependency assessments, and board governance design."
  },
  {
    category: "execution",
    title: "Last-Mile On-Site Project Implementation",
    scope: "Implementation & Tech",
    desc: "Turnkey deployment of waste processing technologies, energy efficiency optimizations, and site-level carbon reduction projects."
  }
];

export const EsgSolutionsMatrixSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredSolutions = filter === "all"
    ? fullSolutions
    : fullSolutions.filter(s => s.category === filter || s.scope.toLowerCase().includes(filter));

  return (
    <section
      style={{
        backgroundColor: '#FAF8F5',
        color: '#1A2F25',
        position: 'relative',
        padding: '7rem 1.5rem 6.5rem'
      }}
    >
      <style>{`
        .matrix-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .filter-pill-btn {
          padding: 0.55rem 1.3rem;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(26, 47, 37, 0.2);
          background: transparent;
          color: #1A2F25;
        }
        .filter-pill-btn.active {
          background: #1A2F25;
          color: #FFFFFF;
          border-color: #1A2F25;
        }
        .solution-row-line {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1.5fr;
          gap: 2rem;
          align-items: center;
          padding: 1.6rem 0;
          border-bottom: 1px solid rgba(26, 47, 37, 0.12);
          transition: background-color 0.25s ease;
        }
        .solution-row-line:first-of-type {
          border-top: 1px solid rgba(26, 47, 37, 0.12);
        }
        .solution-row-line:hover {
          background-color: rgba(26, 47, 37, 0.02);
        }
        @media (max-width: 991px) {
          .solution-row-line {
            grid-template-columns: 1fr;
            gap: 0.6rem;
          }
        }
      `}</style>

      <div className="matrix-container-open">
        {/* Header */}
        <div style={{ maxWidth: '750px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            color: '#29573B',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
            Service Portfolio
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1rem 0', color: '#1A2F25' }}>
            Our Full Suite of ESG Services
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#5A6578', lineHeight: '1.65', margin: 0 }}>
            Discover how ReGeneva supports every stage of your organization's sustainability lifecycle.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginTop: '2.5rem', marginBottom: '3.5rem' }}>
          <button onClick={() => setFilter("all")} className={`filter-pill-btn ${filter === "all" ? "active" : ""}`}>All Solutions</button>
          <button onClick={() => setFilter("reporting")} className={`filter-pill-btn ${filter === "reporting" ? "active" : ""}`}>Reporting & Disclosures</button>
          <button onClick={() => setFilter("carbon")} className={`filter-pill-btn ${filter === "carbon" ? "active" : ""}`}>Carbon & Net-Zero</button>
          <button onClick={() => setFilter("assurance")} className={`filter-pill-btn ${filter === "assurance" ? "active" : ""}`}>Assurance & Supply Chain</button>
          <button onClick={() => setFilter("execution")} className={`filter-pill-btn ${filter === "execution" ? "active" : ""}`}>Implementation</button>
        </div>

        {/* Open Border-Line Matrix (No Box Cards!) */}
        <div>
          {filteredSolutions.map((sol, idx) => (
            <div key={idx} className="solution-row-line">
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1A2F25', margin: 0 }}>
                {sol.title}
              </h3>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#29573B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                {sol.scope}
              </div>
              <p style={{ fontSize: '0.96rem', color: '#5A6578', margin: 0, lineHeight: '1.55' }}>
                {sol.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
