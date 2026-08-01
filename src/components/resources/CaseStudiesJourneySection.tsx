"use client";
import React from 'react';

const steps = [
  {
    step: "01",
    title: "Diagnostic Gap Audit",
    desc: "Baseline emission inventory & compliance vulnerability assessment conducted within 14 days."
  },
  {
    step: "02",
    title: "Custom Solution Engineering",
    desc: "Deploying modular waste technology, carbon capture accounting, or ESG disclosure architecture."
  },
  {
    step: "03",
    title: "On-Site Deployment & Training",
    desc: "Mobile units installed with zero downtime while client staff undergo certified ReGeneva training."
  },
  {
    step: "04",
    title: "Assurance & Rating Optimization",
    desc: "Third-party verified audit reports delivered to global ESG rating agencies and financial institutions."
  }
];

export const CaseStudiesJourneySection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            THE IMPLEMENTATION PROCESS
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            How We Deliver Turnkey Impact
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          {steps.map((s, idx) => (
            <div key={idx} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid rgba(0,0,0,0.06)',
              position: 'relative',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#54BF44',
                marginBottom: '1rem'
              }}>
                {s.step}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1A2F25', marginBottom: '0.8rem' }}>
                {s.title}
              </h3>
              <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: '1.6' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
