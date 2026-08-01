"use client";
import React from 'react';

export const InsightsCTASection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#1A2F25',
          borderRadius: '32px',
          padding: '4rem 3rem',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <span style={{ color: '#54BF44', fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
              CUSTOM ADVISORY RESEARCH
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginTop: '0.5rem', marginBottom: '1rem', color: '#FFFFFF' }}>
              Need Tailored Market Intelligence or Industry Benchmarking?
            </h2>
            <p style={{ color: '#C7BFAC', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Our dedicated research team produces custom peer benchmarking, regulatory exposure models, and supply chain carbon studies for enterprise clients.
            </p>
          </div>

          <a href="/company/contact" className="contact-btn white w-inline-block" style={{ display: 'inline-flex', flexShrink: 0 }}>
            <div className="dot-contact-btn green"></div>
            <div style={{ color: '#1A2F25' }}>Commission Research</div>
          </a>
        </div>
      </div>
    </section>
  );
};
