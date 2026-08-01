"use client";
import React from 'react';

export const CompanyGovernance = () => {
  return (
    <section className="section" style={{ backgroundColor: '#1A2F25', padding: '6rem 2rem', color: '#FFFFFF' }}>
      <div className="container w-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '36px',
          padding: '4rem 3rem',
          textAlign: 'center',
          border: '1px solid rgba(84, 191, 68, 0.3)'
        }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            CORPORATE SUSTAINABILITY PLEDGE
          </span>
          <h2 className="text-140-regular" style={{ color: '#FFFFFF', fontSize: '3.2rem', margin: '0.8rem 0 1.2rem' }}>
            Committed to Net-Zero in Our Own Operations by 2028
          </h2>
          <p style={{ color: '#C7BFAC', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            We practice what we advocate. ReGeneva measures 100% of our Scope 1, 2, and 3 emissions, operates zero-landfill offices, and publishes annual audited sustainability reports.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/resources/insights" className="contact-btn white w-inline-block" style={{ display: 'inline-flex' }}>
              <div className="dot-contact-btn green"></div>
              <div style={{ color: '#1A2F25' }}>Download Sustainability Pledge</div>
            </a>
            <a href="/company/contact" style={{
              padding: '0.9rem 2rem',
              borderRadius: '30px',
              border: '1.5px solid #FFFFFF',
              color: '#FFFFFF',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center'
            }}>
              Contact Corporate Governance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
