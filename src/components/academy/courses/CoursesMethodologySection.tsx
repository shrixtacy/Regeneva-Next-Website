"use client";

import React from 'react';

const pillars = [
  {
    num: "01",
    tagline: "EXPERT FACULTY",
    title: "Big 4 & MBB Senior Partners",
    desc: "Learn directly from active ESG practitioners who design sustainability roadmaps for Fortune 500s and regional conglomerates.",
    items: ["Real-world regulatory insights", "Hands-on audit experience", "Direct practitioner networking"]
  },
  {
    num: "02",
    tagline: "PRACTICAL TOOLKITS",
    title: "Audit-Ready Templates",
    desc: "Gain access to downloadable GHG accounting workbooks, Scope 3 calculation models, and BRSR/CSRD disclosure templates.",
    items: ["GHG Protocol calculation spreadsheets", "Double materiality assessment matrices", "Board reporting decks"]
  },
  {
    num: "03",
    tagline: "CAREER ACCELERATION",
    title: "1-on-1 Mentorship",
    desc: "Receive personalized career guidance, resume reviews, mock interviews, and direct introductions to hiring managers.",
    items: ["1-on-1 monthly coaching calls", "Tailored ESG career roadmap", "Verified digital certificate badges"]
  }
];

export const CoursesMethodologySection = () => {
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
        .methodology-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .methodology-grid-open {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
          margin-top: 4rem;
        }
        @media (max-width: 991px) {
          .methodology-grid-open {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .methodology-col-open {
          position: relative;
          padding-right: 1.5rem;
        }
        .methodology-col-open:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(26, 47, 37, 0.12);
        }
        @media (max-width: 991px) {
          .methodology-col-open:not(:last-child)::after {
            display: none;
          }
          .methodology-col-open {
            padding-right: 0;
            border-bottom: 1px solid rgba(26, 47, 37, 0.1);
            padding-bottom: 2.5rem;
          }
        }
      `}</style>

      <div className="methodology-container-open">
        {/* Header */}
        <div style={{ maxWidth: '720px' }}>
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
            Learning Methodology
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1rem 0', color: '#1A2F25' }}>
            Built by ESG Practitioners for<br />
            <span style={{ color: '#29573B' }}>Real-World Impact</span>
          </h2>

          <p style={{ fontSize: '1.08rem', color: '#5A6578', lineHeight: '1.65', margin: 0 }}>
            Our academy bridges the gap between theoretical frameworks and high-assurance implementation.
          </p>
        </div>

        {/* 3 Open Columns */}
        <div className="methodology-grid-open">
          {pillars.map((p, idx) => (
            <div key={idx} className="methodology-col-open">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{
                  fontSize: '2.8rem',
                  fontWeight: '800',
                  color: '#29573B',
                  fontFamily: 'monospace',
                  lineHeight: '1'
                }}>
                  {p.num}
                </span>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#29573B', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  / {p.tagline}
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1A2F25', marginBottom: '1rem' }}>
                {p.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#5A6578', lineHeight: '1.65', marginBottom: '1.8rem' }}>
                {p.desc}
              </p>

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {p.items.map((item, iIdx) => (
                  <div key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ color: '#54BF44', fontWeight: '700', fontSize: '0.9rem', lineHeight: '1.4' }}>✓</span>
                    <span style={{ fontSize: '0.9rem', color: '#1A2F25', lineHeight: '1.5' }}>{item}</span>
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
