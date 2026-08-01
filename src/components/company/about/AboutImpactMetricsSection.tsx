"use client";

import React from 'react';

const impactStats = [
  {
    num: "7+",
    label: "Sectors Covered",
    sub: "Manufacturing, Real Estate, BFSI, Tech, Healthcare & Energy"
  },
  {
    num: "1,000+",
    label: "Community Members",
    sub: "Sustainability Leaders, CXOs, ESG Auditors & Practitioners"
  },
  {
    num: "20+",
    label: "Projects Completed",
    sub: "End-to-End Enterprise ESG Advisory & Net-Zero Implementations"
  },
  {
    num: "6+",
    label: "Frameworks Supported",
    sub: "BRSR, GRI, CSRD-ESRS, SASB, TCFD & TNFD Disclosures"
  }
];

export const AboutImpactMetricsSection = () => {
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
        .metrics-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .metrics-grid-open {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          margin-top: 4rem;
        }
        @media (max-width: 991px) {
          .metrics-grid-open {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }
        @media (max-width: 576px) {
          .metrics-grid-open {
            grid-template-columns: 1fr;
          }
        }
        .metric-col-open {
          border-left: 2px solid rgba(84, 191, 68, 0.4);
          padding-left: 1.5rem;
          transition: border-color 0.25s ease;
        }
        .metric-col-open:hover {
          border-left-color: #54BF44;
        }
      `}</style>

      <div className="metrics-container-open">
        {/* Section Title */}
        <div style={{ maxWidth: '680px' }}>
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
            Measurable Proof & Scale
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1rem 0', color: '#FFFFFF' }}>
            Our Impact in Numbers
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#C7BFAC', lineHeight: '1.65', margin: 0 }}>
            Proven track record in delivering high-assurance ESG solutions, corporate training, and regional decarbonization.
          </p>
        </div>

        {/* 4 Open Metric Columns (No Box Containers!) */}
        <div className="metrics-grid-open">
          {impactStats.map((stat, idx) => (
            <div key={idx} className="metric-col-open">
              <div style={{
                fontSize: 'clamp(3rem, 4.5vw, 4.2rem)',
                fontWeight: '800',
                color: '#54BF44',
                lineHeight: '1',
                letterSpacing: '-0.03em',
                marginBottom: '0.6rem',
                fontFamily: 'monospace'
              }}>
                {stat.num}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.5rem' }}>
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
