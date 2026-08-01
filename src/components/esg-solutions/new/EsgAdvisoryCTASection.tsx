"use client";

import React from 'react';

export const EsgAdvisoryCTASection = () => {
  return (
    <section
      style={{
        backgroundColor: '#1A2F25',
        color: '#FFFFFF',
        position: 'relative',
        padding: '7.5rem 1.5rem',
        textAlign: 'center'
      }}
    >
      <style>{`
        .esg-cta-container-open {
          max-width: 1000px;
          margin: 0 auto;
        }
        .esg-cta-btn-main {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 1rem 2.4rem;
          border-radius: 100px;
          background: #54BF44;
          color: #1A2F25;
          font-size: 15.5px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(84, 191, 68, 0.3);
          transition: transform 0.25s ease, background-color 0.25s ease;
        }
        .esg-cta-btn-main:hover {
          transform: translateY(-3px);
          background: #62cf51;
        }
        .esg-cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 1rem 2.4rem;
          border-radius: 100px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
          font-size: 15.5px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .esg-cta-btn-ghost:hover {
          transform: translateY(-3px);
          border-color: #54BF44;
        }
      `}</style>

      <div className="esg-cta-container-open">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          color: '#54BF44',
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          marginBottom: '1.5rem'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
          Start Your ESG Journey
        </div>

        <h2 style={{
          fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
          fontWeight: '800',
          color: '#FFFFFF',
          lineHeight: '1.12',
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem'
        }}>
          Ready to Elevate Your Organization's ESG Strategy?
        </h2>

        <p style={{
          fontSize: '1.18rem',
          color: '#C7BFAC',
          lineHeight: '1.65',
          maxWidth: '750px',
          margin: '0 auto 3rem'
        }}>
          Schedule a consultation with our senior ESG advisors to discuss your regulatory reporting, Scope 1-3 carbon accounting, or supply chain auditing needs.
        </p>

        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/company/contact" className="esg-cta-btn-main">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1A2F25' }}></span>
            <span>Request a Technical Proposal</span>
          </a>

          <a href="/company/contact" className="esg-cta-btn-ghost">
            <span>Schedule Advisory Call</span>
            <span style={{ color: '#54BF44' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
