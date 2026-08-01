"use client";

import React from 'react';

const statsData = [
  {
    num: "100%",
    label: "Audit-Ready Assurance",
    sub: "Full compliance with mandatory BRSR & regional disclosure frameworks"
  },
  {
    num: "Scope 1-3",
    label: "Complete GHG Coverage",
    sub: "GHG Protocol compliant carbon inventorization across operations & supply chain"
  },
  {
    num: "20+",
    label: "Enterprise Implementations",
    sub: "End-to-end ESG advisory and Net-Zero projects across GCC & global markets"
  },
  {
    num: "6+",
    label: "Global Frameworks",
    sub: "Supported disclosure standards including BRSR, GRI, CSRD, SASB, TCFD & TNFD"
  }
];

export const EsgImpactStatsSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#1A2F25',
        color: '#FFFFFF',
        position: 'relative',
        padding: '6.5rem 1.5rem'
      }}
    >
      <style>{`
        .esg-stats-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .esg-stats-grid-open {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          margin-top: 4rem;
        }
        @media (max-width: 991px) {
          .esg-stats-grid-open {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }
        @media (max-width: 576px) {
          .esg-stats-grid-open {
            grid-template-columns: 1fr;
          }
        }
        .esg-stat-col-open {
          border-left: 2px solid rgba(84, 191, 68, 0.4);
          padding-left: 1.5rem;
          transition: border-color 0.25s ease;
        }
        .esg-stat-col-open:hover {
          border-left-color: #54BF44;
        }
      `}</style>

      <div className="esg-stats-container-open">
        {/* Section Header */}
        <div style={{ maxWidth: '700px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            color: '#54BF44',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
            Proven Track Record
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1rem 0', color: '#FFFFFF' }}>
            Proven Technical Excellence
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#C7BFAC', lineHeight: '1.65', margin: 0 }}>
            Delivering high-assurance sustainability solutions for corporates, financial institutions, and public sector entities.
          </p>
        </div>

        {/* 4 Open Metric Columns (No Box Containers!) */}
        <div className="esg-stats-grid-open">
          {statsData.map((stat, idx) => (
            <div key={idx} className="esg-stat-col-open">
              <div style={{
                fontSize: 'clamp(2.5rem, 3.8vw, 3.6rem)',
                fontWeight: '800',
                color: '#54BF44',
                lineHeight: '1',
                letterSpacing: '-0.03em',
                marginBottom: '0.6rem',
                fontFamily: 'monospace'
              }}>
                {stat.num}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                {stat.label}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#C7BFAC', lineHeight: '1.5', margin: 0 }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
