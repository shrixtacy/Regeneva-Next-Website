"use client";

import React from 'react';

const valuesData = [
  {
    num: "01",
    title: "Empower",
    tagline: "Unlocking Potential",
    description: "We democratize access to ESG knowledge, tools, and networks to unlock individual and institutional potential.",
    items: [
      "Open access to ESG frameworks & tools",
      "Democratizing sustainability for MSMEs & Corporates",
      "Mentorship networks for aspiring ESG leaders"
    ]
  },
  {
    num: "02",
    title: "Evolve",
    tagline: "Continuous Innovation",
    description: "We foster continuous learning and innovation to stay ahead of global sustainability demands.",
    items: [
      "Real-time regulatory updates (BRSR, CSRD, GRI)",
      "Adaptive learning paths & CXO masterclasses",
      "Dynamic data-driven carbon accounting technology"
    ]
  },
  {
    num: "03",
    title: "Excel",
    tagline: "Measurable Impact",
    description: "We strive for excellence and measurable impact in everything we deliver — from education to implementation.",
    items: [
      "Rigorous compliance & assurance standards",
      "End-to-end Scope 1, 2 & 3 verification",
      "Tangible decarbonization outcomes across sectors"
    ]
  }
];

export const AboutValuesMatrixSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#1A2F25',
        color: '#FFFFFF',
        position: 'relative',
        padding: '7rem 1.5rem 6.5rem'
      }}
    >
      <style>{`
        .values-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .values-grid-open {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
          margin-top: 4rem;
        }
        @media (max-width: 991px) {
          .values-grid-open {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .value-col {
          position: relative;
          padding-right: 1.5rem;
        }
        .value-col:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(255, 255, 255, 0.12);
        }
        @media (max-width: 991px) {
          .value-col:not(:last-child)::after {
            display: none;
          }
          .value-col {
            padding-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 2.5rem;
          }
        }
      `}</style>

      <div className="values-container-open">
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
            Our Guiding Philosophy
          </div>

          <h2 style={{
            fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
            fontWeight: '700',
            lineHeight: '1.15',
            margin: '0 0 1rem 0',
            color: '#FFFFFF'
          }}>
            Empower. Evolve. Excel.
          </h2>

          <p style={{ fontSize: '1.08rem', color: '#C7BFAC', lineHeight: '1.65', margin: 0 }}>
            Our values shape every advisory engagement, learning course, and marketplace connection we facilitate.
          </p>
        </div>

        {/* 3 Open Columns (No Box Containers!) */}
        <div className="values-grid-open">
          {valuesData.map((val, idx) => (
            <div key={idx} className="value-col">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{
                  fontSize: '2.8rem',
                  fontWeight: '800',
                  color: '#54BF44',
                  fontFamily: 'monospace',
                  lineHeight: '1'
                }}>
                  {val.num}
                </span>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  / {val.tagline}
                </span>
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1rem' }}>
                {val.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#E2E8F0', lineHeight: '1.65', marginBottom: '1.8rem' }}>
                {val.description}
              </p>

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {val.items.map((item, iIdx) => (
                  <div key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ color: '#54BF44', fontWeight: '700', fontSize: '0.9rem', lineHeight: '1.4' }}>✓</span>
                    <span style={{ fontSize: '0.9rem', color: '#C7BFAC', lineHeight: '1.5' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
