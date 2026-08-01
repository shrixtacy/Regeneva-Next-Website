"use client";

import React, { useState } from 'react';

export const AboutCoreMissionSection = () => {
  const [activeTab, setActiveTab] = useState<'purpose' | 'mission'>('purpose');

  return (
    <section
      style={{
        backgroundColor: '#FAF8F5',
        color: '#1A2F25',
        position: 'relative',
        padding: '7rem 1.5rem 6rem'
      }}
    >
      <style>{`
        .core-mission-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .core-mission-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4.5rem;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .core-mission-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .timeline-step {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid rgba(26, 47, 37, 0.15);
          transition: border-color 0.3s ease;
        }
        .timeline-step:hover {
          border-left-color: #54BF44;
        }
        .timeline-dot {
          position: absolute;
          left: -7px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #FAF8F5;
          border: 2px solid #29573B;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .timeline-step:hover .timeline-dot {
          background-color: #54BF44;
          border-color: #54BF44;
        }
        .toggle-btn-clean {
          padding: 0.6rem 1.4rem;
          border-radius: 100px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(26, 47, 37, 0.2);
          background: transparent;
          color: #1A2F25;
        }
        .toggle-btn-clean.active {
          background: #1A2F25;
          color: #FFFFFF;
          border-color: #1A2F25;
        }
      `}</style>

      <div className="core-mission-container">
        <div className="core-mission-grid">
          {/* Left Column: Typographic Focus */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: '#29573B',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.2rem'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
              About ReGeneva
            </div>

            <h2 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              lineHeight: '1.1',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              marginBottom: '2rem',
              color: '#1A2F25'
            }}>
              Empowering Purpose.<br />
              <span style={{ color: '#29573B' }}>Scaling Sustainable Action.</span>
            </h2>

            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.2rem' }}>
              <button
                onClick={() => setActiveTab('purpose')}
                className={`toggle-btn-clean ${activeTab === 'purpose' ? 'active' : ''}`}
              >
                Our Purpose
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`toggle-btn-clean ${activeTab === 'mission' ? 'active' : ''}`}
              >
                Our Mission
              </button>
            </div>

            {activeTab === 'purpose' ? (
              <div style={{ display: 'grid', gap: '1.4rem' }}>
                <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: '#1A2F25', margin: 0, fontWeight: '400' }}>
                  At <strong style={{ color: '#29573B', fontWeight: '700' }}>ReGeneva</strong>, we are committed to accelerating ESG transformation by equipping individuals, businesses, and institutions with the knowledge, tools, and networks to lead responsibly in a rapidly changing world.
                </p>
                <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: '#5A6578', margin: 0 }}>
                  We believe meaningful change begins with informed action — and we're here to make ESG more accessible, actionable, and scalable through learning, expert solutions, and collaborative ecosystems.
                </p>
              </div>
            ) : (
              <div style={{ borderLeft: '3px solid #54BF44', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '11px', color: '#29573B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
                  Core Mission
                </div>
                <p style={{ fontSize: '1.35rem', lineHeight: '1.55', color: '#1A2F25', fontWeight: '600', margin: 0 }}>
                  "To bridge the global ESG knowledge–action gap by enabling people and organizations to upskill, comply, and implement impactful sustainability practices at scale."
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Open Laser-Line Blueprint Steps (No Box!) */}
          <div style={{ display: 'grid', gap: '2.2rem', paddingTop: '1rem' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#29573B', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '0.5rem' }}>
              Strategic Pillars
            </div>

            <div className="timeline-step">
              <div className="timeline-dot" />
              <div style={{ fontSize: '11px', color: '#29573B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>01 / KNOWLEDGE</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1A2F25', margin: '0 0 0.3rem 0' }}>Democratize ESG Learning</h3>
              <p style={{ fontSize: '0.94rem', color: '#5A6578', margin: 0, lineHeight: '1.55' }}>
                Delivering CXO masterclasses, certified academy paths, and practical training for corporate managers and institutions.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-dot" />
              <div style={{ fontSize: '11px', color: '#29573B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>02 / COMPLIANCE</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1A2F25', margin: '0 0 0.3rem 0' }}>Actionable Technical Advisory</h3>
              <p style={{ fontSize: '0.94rem', color: '#5A6578', margin: 0, lineHeight: '1.55' }}>
                Executing Scope 1, 2 & 3 GHG accounting, BRSR/CSRD disclosures, double materiality, and climate risk assessments.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-dot" />
              <div style={{ fontSize: '11px', color: '#29573B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>03 / ECOSYSTEM</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1A2F25', margin: '0 0 0.3rem 0' }}>Marketplace & Talent Matchmaking</h3>
              <p style={{ fontSize: '0.94rem', color: '#5A6578', margin: 0, lineHeight: '1.55' }}>
                Connecting organizations with verified ESG talent, vetted sustainability technologies, and transparent project bidding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
