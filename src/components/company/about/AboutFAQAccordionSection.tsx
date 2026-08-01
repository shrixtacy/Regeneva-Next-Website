"use client";

import React, { useState } from 'react';

const faqList = [
  {
    q: "1. What ESG Solutions does ReGeneva provide?",
    a: "ReGeneva offers end-to-end ESG and Sustainability solutions that include regulatory-aligned reporting (BRSR, GRI, CSRD-ESRS, SASB, TCFD, TNFD etc.), GHG Inventorization and Accounting (Scope 1, 2, and 3), ESG Assurance/Assessment, Materiality & Double Materiality Assessment, Supply Chain/Value Chain ESG Assessment, ESG Rating Support (CDP, DJSI, EcoVadis), Climate Risk Assessment, Policy Gap and Peer Benchmarking, and last-mile project implementation."
  },
  {
    q: "2. Does ReGeneva offer ESG and Sustainability Strategy and Roadmap development?",
    a: "Yes. ReGeneva designs actionable Net-Zero transition pathways, double materiality frameworks, climate risk governance structures, and executive-level strategic roadmaps tailored to help corporates and institutions navigate evolving regional and global mandates."
  },
  {
    q: "3. Who are the courses designed for?",
    a: "Our learning programs are designed for corporate sustainability leads, EHS directors, finance and procurement teams, ESG consultants, career switchers, and executives looking to gain in-demand practical skills and regulatory mastery."
  },
  {
    q: "4. Are your courses self-paced or live?",
    a: "We provide flexible learning models including self-paced certified courses, interactive live instructor-led cohorts, CXO masterclasses, and hands-on 1-on-1 mentorship with senior ESG experts from Big 4 and MBB consulting firms."
  }
];

export const AboutFAQAccordionSection = () => {
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
        .faq-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .faq-split-open {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 4.5rem;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .faq-split-open {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .faq-row-line {
          border-bottom: 1px solid rgba(26, 47, 37, 0.15);
          padding: 1.4rem 0;
          transition: border-color 0.25s ease;
        }
        .faq-row-line:first-child {
          border-top: 1px solid rgba(26, 47, 37, 0.15);
        }
        .faq-row-line:hover {
          border-bottom-color: #29573B;
        }
        .faq-row-btn {
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

      <div className="faq-container-open">
        <div className="faq-split-open">
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
              Knowledge Base & FAQ
            </div>

            <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1.2rem 0', color: '#1A2F25' }}>
              Have Any<br />
              <span style={{ color: '#29573B' }}>Questions?</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5A6578', lineHeight: '1.65', marginBottom: '2.5rem' }}>
              Everything you need to know about our ESG Solutions, Academy courses, strategy roadmaps, and marketplace ecosystem.
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
              <span>Contact Our Senior Advisors</span>
              <span style={{ color: '#54BF44' }}>→</span>
            </a>
          </div>

          {/* Right Column: Clean Line Accordions (No Card Boxes!) */}
          <div>
            {faqList.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="faq-row-line">
                  <button onClick={() => toggleIndex(idx)} className="faq-row-btn">
                    <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A2F25', lineHeight: '1.35' }}>
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
