"use client";
import React from 'react';

export const AboutCultureSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#F8F6F0',
          borderRadius: '32px',
          padding: '4rem 3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          border: '1px solid rgba(0,0,0,0.06)'
        }}>
          <div>
            <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
              JOIN OUR MISSION
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1A2F25', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Want to Help Shape the Future of ESG?
            </h2>
            <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: '1.6' }}>
              We are constantly seeking ambitious environmental engineers, sustainability advisors, and software creators to join our growing global team.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/company/contact" className="contact-btn w-inline-block" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <div className="dot-contact-btn"></div>
              <div>View Career Opportunities</div>
            </a>
            <div style={{ fontSize: '13px', color: '#718096' }}>
              Or email your CV to <a href="mailto:careers@regeneva.com" style={{ color: '#54BF44', fontWeight: '700', textDecoration: 'none' }}>careers@regeneva.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
