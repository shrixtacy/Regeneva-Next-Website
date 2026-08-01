"use client";
import React from 'react';

export const CaseStudiesCTASection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#1A2F25', padding: '6rem 2rem', color: '#FFFFFF' }}>
      <div className="container w-container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '36px',
          padding: '4rem 2rem',
          border: '1px solid rgba(84, 191, 68, 0.3)'
        }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            YOUR TRANSFORMATION AWAITS
          </span>
          <h2 className="text-140-regular" style={{ color: '#FFFFFF', fontSize: '3.2rem', margin: '0.8rem 0 1rem' }}>
            Ready to Write Your Success Story?
          </h2>
          <p style={{ color: '#C7BFAC', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            Schedule an executive briefing with our ESG technical team to evaluate your facility's waste and emission reduction potential.
          </p>
          <a href="/company/contact" className="contact-btn white w-inline-block" style={{ display: 'inline-flex' }}>
            <div className="dot-contact-btn green"></div>
            <div style={{ color: '#1A2F25' }}>Book Feasibility Assessment</div>
          </a>
        </div>
      </div>
    </section>
  );
};
