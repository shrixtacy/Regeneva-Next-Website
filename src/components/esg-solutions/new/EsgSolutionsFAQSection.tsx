"use client";

import React, { useState } from 'react';

const esgFaqList = [
  {
    q: "1. What ESG Solutions does ReGeneva provide?",
    a: "ReGeneva offers end-to-end ESG and Sustainability solutions that include regulatory-aligned reporting (BRSR, GRI, CSRD-ESRS, SASB, TCFD, TNFD etc.), GHG Inventorization and Accounting (Scope 1, 2, and 3), ESG Assurance/Assessment, Materiality & Double Materiality Assessment, Supply Chain/Value Chain ESG Assessment, ESG Rating Support (CDP, DJSI, EcoVadis), Climate Risk Assessment, Policy Gap and Peer Benchmarking, and last-mile project implementation."
  },
  {
    q: "2. Does ReGeneva offer ESG and Sustainability Strategy and Roadmap development?",
    a: "Yes. ReGeneva designs actionable Net-Zero transition pathways, double materiality frameworks, climate risk governance structures, and executive-level strategic roadmaps tailored to help corporates and institutions navigate evolving regional and global mandates."
  },
  {
    q: "3. How does ReGeneva ensure audit-readiness for reporting standards like BRSR and CSRD?",
    a: "Our team validates data collection protocols, verifies emission factors, and structures disclosures in complete alignment with regulatory frameworks so that your sustainability reports easily pass third-party audit and regulatory review."
  },
  {
    q: "4. Can ReGeneva support Scope 3 supply chain carbon accounting?",
    a: "Absolutely. We map upstream and downstream value chain activities, conduct vendor ESG assessments, and implement standardized data gathering mechanisms to measure and reduce complex Scope 3 carbon footprints."
  },
  {
    q: "5. What is the process for engaging ReGeneva for an ESG project?",
    a: "We start with a comprehensive diagnostic phase to evaluate your regulatory exposure and sustainability maturity, followed by tailored proposal formulation, strategic roadmap design, and on-site implementation."
  }
];

export const EsgSolutionsFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
        .esg-faq-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .esg-faq-split-open {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 4.5rem;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .esg-faq-split-open {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .esg-faq-row-line {
          border-bottom: 1px solid rgba(26, 47, 37, 0.15);
          padding: 1.4rem 0;
          transition: border-color 0.25s ease;
        }
        .esg-faq-row-line:first-child {
          border-top: 1px solid rgba(26, 47, 37, 0.15);
        }
        .esg-faq-row-line:hover {
          border-bottom-color: #29573B;
        }
        .esg-faq-row-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: none;
          border: none;
          color: #1A2F25;
          text-align: left;
          cursor: pointer;
          padding: 0;
        }
      `}</style>

      <div className="esg-faq-container-open">
        <div className="esg-faq-split-open">
          {/* Left Column Header */}
          <div>
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
              Solutions FAQ & Answers
            </div>

            <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1.2rem 0', color: '#1A2F25' }}>
              Frequently Asked<br />
              <span style={{ color: '#29573B' }}>Questions</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5A6578', lineHeight: '1.65', marginBottom: '2.5rem' }}>
              Get detailed answers regarding our technical advisory, BRSR/CSRD disclosures, GHG carbon accounting, and strategic roadmaps.
            </p>

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
                fontSize: '14px',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'background 0.2s ease'
              }}
            >
              <span>Speak With an ESG Advisory Expert</span>
              <span style={{ color: '#54BF44' }}>→</span>
            </a>
          </div>

          {/* Right Column: Clean Line Accordions (No Card Boxes!) */}
          <div>
            {esgFaqList.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="esg-faq-row-line">
                  <button onClick={() => toggleIndex(idx)} className="esg-faq-row-btn">
                    <span style={{ fontSize: '1.08rem', fontWeight: '700', color: '#1A2F25', lineHeight: '1.35' }}>
                      {item.q}
                    </span>
                    <span style={{
                      fontSize: '1.3rem',
                      fontWeight: '400',
                      color: isOpen ? '#29573B' : '#A0AEC0',
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      flexShrink: 0
                    }}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      marginTop: '1rem',
                      fontSize: '0.98rem',
                      color: '#5A6578',
                      lineHeight: '1.7'
                    }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
