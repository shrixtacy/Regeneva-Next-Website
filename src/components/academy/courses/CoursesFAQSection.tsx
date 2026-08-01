"use client";

import React, { useState } from 'react';

const academyFaqList = [
  {
    q: "1. Who are the courses designed for?",
    a: "Our courses are designed for corporate sustainability managers, EHS directors, finance and procurement teams, ESG consultants, career switchers, and executives looking to gain in-demand practical skills and regulatory mastery."
  },
  {
    q: "2. Are your courses self-paced or live?",
    a: "We provide flexible learning models including self-paced certified courses, interactive live instructor-led cohorts, CXO masterclasses, and hands-on 1-on-1 mentorship with senior ESG experts from Big 4 and MBB consulting firms."
  },
  {
    q: "3. Do I receive a verified certificate upon completion?",
    a: "Yes. All graduates receive a verified ReGeneva Academy Digital Certificate and badging that can be added to LinkedIn and shared with employers."
  },
  {
    q: "4. How does 1-on-1 career mentorship work?",
    a: "Learners enrolled in professional certification tracks get access to dedicated 1-on-1 coaching sessions with senior ESG practitioners for resume optimization, mock interviews, and direct networking."
  },
  {
    q: "5. Can corporate training be customized for our industry?",
    a: "Yes. Our enterprise team builds bespoke training modules tailored to your specific sector regulations (Manufacturing, Real Estate, BFSI, Healthcare, Energy) and internal data workflows."
  }
];

export const CoursesFAQSection = () => {
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
        .courses-faq-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .courses-faq-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 4.5rem;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .courses-faq-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .courses-faq-row {
          border-bottom: 1px solid rgba(26, 47, 37, 0.15);
          padding: 1.4rem 0;
          transition: border-color 0.25s ease;
        }
        .courses-faq-row:first-child {
          border-top: 1px solid rgba(26, 47, 37, 0.15);
        }
        .courses-faq-row:hover {
          border-bottom-color: #29573B;
        }
        .courses-faq-btn {
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

      <div className="courses-faq-container">
        <div className="courses-faq-grid">
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
              Course Directory FAQ
            </div>

            <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1.2rem 0', color: '#1A2F25' }}>
              Academy<br />
              <span style={{ color: '#29573B' }}>Questions & Answers</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5A6578', lineHeight: '1.65', marginBottom: '2.5rem' }}>
              Everything you need to know about course formats, certified badges, mentorship, and enterprise workshops.
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
                textDecoration: 'none'
              }}
            >
              <span>Speak With an Academy Advisor</span>
              <span style={{ color: '#54BF44' }}>→</span>
            </a>
          </div>

          {/* Right Column Accordion */}
          <div>
            {academyFaqList.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="courses-faq-row">
                  <button onClick={() => toggleIndex(idx)} className="courses-faq-btn">
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
