"use client";

import React, { useState } from 'react';

const practiceAreas = [
  {
    id: "disclosures",
    title: "Reporting & Frameworks",
    tagline: "BRSR, GRI, CSRD-ESRS, SASB, TCFD & TNFD",
    description: "End-to-end assistance in drafting, aligning, and publishing audit-ready ESG disclosures aligned with global and regional regulatory standards.",
    points: [
      "BRSR & Mandatory Regional Disclosure Compliance",
      "CSRD (ESRS) European Regulatory Alignment",
      "GRI & SASB Sector-Specific Indicator Mapping",
      "TCFD & TNFD Climate / Nature Disclosure Integration"
    ]
  },
  {
    id: "carbon",
    title: "GHG & Net-Zero Accounting",
    tagline: "Scope 1, 2 & 3 Carbon Footprint Quantification",
    description: "Rigorous greenhouse gas inventorization and Net-Zero strategy formulation compliant with GHG Protocol standards.",
    points: [
      "Direct Scope 1 & Energy Scope 2 Accounting",
      "Value Chain Scope 3 Emissions Quantification",
      "SBTi Aligned Decarbonization Target Setting",
      "Carbon Offset & Insetting Project Verification"
    ]
  },
  {
    id: "risk",
    title: "Risk, Assurance & Rating",
    tagline: "Double Materiality, Supply Chain & Ratings Support",
    description: "Proactive ESG risk identification, double materiality assessments, and rating improvement support for CDP, EcoVadis, and DJSI.",
    points: [
      "Impact & Financial Double Materiality Assessments",
      "Supply Chain / Vendor ESG Audits & Risk Profiling",
      "CDP, EcoVadis & S&P DJSI Rating Performance Support",
      "On-Site Last-Mile Project Implementation & Assurance"
    ]
  }
];

export const EsgScopeOverviewSection = () => {
  const [activeTab, setActiveTab] = useState("disclosures");
  const currentArea = practiceAreas.find(p => p.id === activeTab) || practiceAreas[0];

  return (
    <section
      style={{
        backgroundColor: '#FAF8F5',
        color: '#1A2F25',
        position: 'relative',
        padding: '7rem 1.5rem 6rem'
      }}
    >
      <style>{`
        .esg-scope-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .esg-scope-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4.5rem;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .esg-scope-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .scope-tab-clean {
          padding: 0.6rem 1.4rem;
          border-radius: 100px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(26, 47, 37, 0.2);
          background: transparent;
          color: #1A2F25;
        }
        .scope-tab-clean.active {
          background: #1A2F25;
          color: #FFFFFF;
          border-color: #1A2F25;
        }
        .scope-point-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(26, 47, 37, 0.1);
        }
      `}</style>

      <div className="esg-scope-container">
        <div className="esg-scope-grid">
          {/* Left Column: Typographic Focus */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: '#29573B',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.2rem'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
              ESG Technical Advisory & Solutions
            </div>

            <h2 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              lineHeight: '1.1',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              marginBottom: '1.8rem',
              color: '#1A2F25'
            }}>
              Comprehensive ESG &<br />
              <span style={{ color: '#29573B' }}>Sustainability Solutions</span>
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#1A2F25', marginBottom: '2rem' }}>
              Simplify ESG with our data tools, assurance and consulting solutions — from ESG reporting, GHG accounting, risk analysis, last-mile project implementation and many more.
            </p>

            {/* Tab Pill Selectors */}
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {practiceAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`scope-tab-clean ${activeTab === area.id ? 'active' : ''}`}
                >
                  {area.title}
                </button>
              ))}
            </div>

            <div style={{ borderLeft: '3px solid #54BF44', paddingLeft: '1.4rem' }}>
              <div style={{ fontSize: '11px', color: '#29573B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.3rem' }}>
                Practice Focus
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1A2F25', marginBottom: '0.4rem' }}>
                {currentArea.tagline}
              </div>
              <p style={{ fontSize: '0.98rem', color: '#5A6578', lineHeight: '1.6', margin: 0 }}>
                {currentArea.description}
              </p>
            </div>
          </div>

          {/* Right Column: Open Capability Checklist (No Box Container!) */}
          <div style={{ paddingTop: '1rem' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#29573B', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '1.2rem' }}>
              Key Solution Deliverables
            </div>

            {currentArea.points.map((pt, idx) => (
              <div key={idx} className="scope-point-row">
                <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1.1rem', lineHeight: '1.3' }}>✓</span>
                <span style={{ fontSize: '1.02rem', color: '#1A2F25', fontWeight: '500', lineHeight: '1.5' }}>
                  {pt}
                </span>
              </div>
            ))}

            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="/company/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.8rem',
                  borderRadius: '100px',
                  backgroundColor: '#1A2F25',
                  color: '#FFFFFF',
                  fontSize: '14.5px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                <span>Request Custom Proposal</span>
                <span style={{ color: '#54BF44' }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
