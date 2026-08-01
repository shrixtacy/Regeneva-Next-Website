"use client";

import React from 'react';

export const CoursesCorporateSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#1A2F25',
        color: '#FFFFFF',
        position: 'relative',
        padding: '7rem 1.5rem 6.5rem'
      }}
    >
      <style>{`
        .corp-courses-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .corp-courses-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: center;
        }
        @media (max-width: 991px) {
          .corp-courses-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .corp-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }
      `}</style>

      <div className="corp-courses-container">
        <div className="corp-courses-grid">
          {/* Left Column Narrative */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: '#54BF44',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
              Custom Enterprise Upskilling
            </div>

            <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1.2rem 0', color: '#FFFFFF' }}>
              Customized Corporate Training &<br />
              <span style={{ color: '#54BF44' }}>Executive Masterclasses</span>
            </h2>

            <p style={{ fontSize: '1.08rem', color: '#C7BFAC', lineHeight: '1.65', marginBottom: '2.5rem' }}>
              Equip your board members, executive team, and functional departments with the specific ESG knowledge required for regulatory compliance and Scope 1-3 decarbonization.
            </p>

            <a
              href="/company/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 2.2rem',
                borderRadius: '100px',
                backgroundColor: '#54BF44',
                color: '#1A2F25',
                fontSize: '15px',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(84, 191, 68, 0.3)'
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1A2F25' }}></span>
              <span>Request Corporate Proposal</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Column Open Feature Rows */}
          <div>
            <div style={{ fontSize: '12px', color: '#54BF44', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.2rem' }}>
              Enterprise Upskilling Modules
            </div>

            <div className="corp-feature-row">
              <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1.1rem' }}>✓</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>CXO & Board Sustainability Masterclasses</h4>
                <p style={{ fontSize: '0.9rem', color: '#C7BFAC', margin: '0.2rem 0 0 0' }}>Strategic alignment on BRSR, CSRD, and climate governance.</p>
              </div>
            </div>

            <div className="corp-feature-row">
              <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1.1rem' }}>✓</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>Functional Department Training</h4>
                <p style={{ fontSize: '0.9rem', color: '#C7BFAC', margin: '0.2rem 0 0 0' }}>Tailored tracks for Finance, HR, EHS, Procurement & Legal teams.</p>
              </div>
            </div>

            <div className="corp-feature-row">
              <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1.1rem' }}>✓</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>BRSR & Mandatory Disclosure Workshops</h4>
                <p style={{ fontSize: '0.9rem', color: '#C7BFAC', margin: '0.2rem 0 0 0' }}>Hands-on data collection and indicator drafting practice.</p>
              </div>
            </div>

            <div className="corp-feature-row">
              <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1.1rem' }}>✓</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>ESG Audit & Assurance Awareness</h4>
                <p style={{ fontSize: '0.9rem', color: '#C7BFAC', margin: '0.2rem 0 0 0' }}>Preparing internal teams for third-party verification audits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
