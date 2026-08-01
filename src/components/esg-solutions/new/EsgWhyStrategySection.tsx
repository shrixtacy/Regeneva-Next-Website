"use client";

import React from 'react';

const valuePillars = [
  {
    num: "01",
    tagline: "REGULATORY COMPLIANCE",
    title: "Audit-Ready Reporting",
    description: "Stay ahead of mandatory UAE, GCC, and global disclosures (BRSR, CSRD, GRI) with rigorous data validation and audit assurance.",
    deliverables: [
      "BRSR & Mandatory Disclosure Alignment",
      "CSRD & Double Materiality Audits",
      "Verification Ready Data Collection"
    ]
  },
  {
    num: "02",
    tagline: "RISK MITIGATION",
    title: "Value Chain Resilience",
    description: "Identify climate vulnerabilities, Scope 3 supply chain risks, and regulatory exposure before they impact enterprise valuation.",
    deliverables: [
      "Scope 3 Value Chain Risk Audits",
      "Climate Scenario Analysis (TCFD/TNFD)",
      "Policy Gap & Peer Benchmarking"
    ]
  },
  {
    num: "03",
    tagline: "VALUE CREATION",
    title: "Strategic Advantage",
    description: "Convert sustainability requirements into green financing access, investor confidence, and tangible operational cost savings.",
    deliverables: [
      "Net-Zero Transition Strategy & Roadmaps",
      "CDP, EcoVadis & DJSI Rating Support",
      "Last-Mile Project Implementation"
    ]
  }
];

export const EsgWhyStrategySection = () => {
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
        .esg-why-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .esg-why-grid-open {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
          margin-top: 4rem;
        }
        @media (max-width: 991px) {
          .esg-why-grid-open {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .esg-why-col-open {
          position: relative;
          padding-right: 1.5rem;
        }
        .esg-why-col-open:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(255, 255, 255, 0.12);
        }
        @media (max-width: 991px) {
          .esg-why-col-open:not(:last-child)::after {
            display: none;
          }
          .esg-why-col-open {
            padding-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 2.5rem;
          }
        }
      `}</style>

      <div className="esg-why-container-open">
        {/* Section Header */}
        <div style={{ maxWidth: '720px' }}>
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
            Strategic Value Drivers
          </div>

          <h2 style={{
            fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
            fontWeight: '700',
            lineHeight: '1.15',
            margin: '0 0 1rem 0',
            color: '#FFFFFF'
          }}>
            Transforming Compliance Into<br />
            <span style={{ color: '#54BF44' }}>Competitive Advantage</span>
          </h2>

          <p style={{ fontSize: '1.08rem', color: '#C7BFAC', lineHeight: '1.65', margin: 0 }}>
            Our technical ESG solutions empower organizations to turn mandatory disclosures into long-term enterprise value and investor trust.
          </p>
        </div>

        {/* 3 Open Columns (No Box Containers!) */}
        <div className="esg-why-grid-open">
          {valuePillars.map((pillar, idx) => (
            <div key={idx} className="esg-why-col-open">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{
                  fontSize: '2.8rem',
                  fontWeight: '800',
                  color: '#54BF44',
                  fontFamily: 'monospace',
                  lineHeight: '1'
                }}>
                  {pillar.num}
                </span>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  / {pillar.tagline}
                </span>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1rem' }}>
                {pillar.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#E2E8F0', lineHeight: '1.65', marginBottom: '1.8rem' }}>
                {pillar.description}
              </p>

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {pillar.deliverables.map((item, dIdx) => (
                  <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
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
