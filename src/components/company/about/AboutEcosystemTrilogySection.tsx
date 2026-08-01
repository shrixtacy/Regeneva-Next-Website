"use client";

import React, { useState } from 'react';

const ecosystemPillars = [
  {
    id: "solutions",
    badge: "Advisory & Data",
    title: "ESG Solutions",
    tagline: "End-to-End Technical Compliance & Implementation",
    description: "Simplify ESG with our data tools, assurance and consulting solutions — from ESG reporting, GHG accounting, risk analysis, last-mile project implementation and many more.",
    icon: "📊",
    highlights: [
      "Regulatory Reporting (BRSR, GRI, CSRD-ESRS, SASB, TCFD, TNFD)",
      "Scope 1, 2 & 3 GHG Inventorization and Carbon Accounting",
      "Materiality & Double Materiality Assessments",
      "Supply Chain & Value Chain ESG Risk Audits",
      "Climate Risk Analysis & Peer Benchmarking",
      "Last-Mile On-Site Project Implementation & Assurance"
    ],
    ctaText: "Explore ESG Solutions",
    ctaHref: "/esg-solutions"
  },
  {
    id: "academy",
    badge: "Education & Upskilling",
    title: "Academy",
    tagline: "Build In-Demand Sustainability Capabilities",
    description: "Build in-demand ESG skills through live and self-paced courses, corporate training, and mentorship — designed by experts to prepare individuals and teams for a sustainable future.",
    icon: "🎓",
    highlights: [
      "Live & Self-Paced Masterclass Courses",
      "1-on-1 Career Mentorship with Big 4 & MBB Practitioners",
      "Custom Corporate & CXO Enterprise Workshops",
      "Functional ESG Training (Finance, HR, EHS, Procurement)",
      "ESG Audit & Disclosure Awareness Programs",
      "Certified Badges & Professional Network Access"
    ],
    ctaText: "Explore Academy Programs",
    ctaHref: "/academy"
  },
  {
    id: "marketplace",
    badge: "Integrated Network",
    title: "Marketplace",
    tagline: "Curated ESG Ecosystem & Talent Hub",
    description: "Access a curated network of ESG talent, verified consultants, products, and solutions. Post, connect, or bid transparently — all in one integrated sustainability platform.",
    icon: "🌐",
    highlights: [
      "Verified Network of ESG Consultants & Advisory Firms",
      "Transparent Project Bidding & Request for Proposals (RFPs)",
      "Vetted Clean Technologies & Waste Solutions",
      "Dedicated Sustainability Talent Hiring Board",
      "Peer-to-Peer Enterprise Collaboration",
      "Seamless Integrated Procurement Workflow"
    ],
    ctaText: "Join Marketplace",
    ctaHref: "/company/contact"
  }
];

export const AboutEcosystemTrilogySection = () => {
  const [activeId, setActiveId] = useState<string>("solutions");

  const currentPillar = ecosystemPillars.find(p => p.id === activeId) || ecosystemPillars[0];

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
        .trilogy-container-open {
          max-width: 1200px;
          margin: 0 auto;
        }
        .trilogy-tabs-bar-open {
          display: flex;
          gap: 1.5rem;
          margin-top: 2.5rem;
          margin-bottom: 4rem;
          border-bottom: 2px solid rgba(26, 47, 37, 0.1);
          padding-bottom: 1rem;
          flex-wrap: wrap;
        }
        .trilogy-tab-clean {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: none;
          border: none;
          color: rgba(26, 47, 37, 0.5);
          font-size: 1.15rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.25s ease;
        }
        .trilogy-tab-clean.active {
          color: #1A2F25;
        }
        .trilogy-tab-clean.active::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #54BF44;
          border-radius: 10px;
        }
        .trilogy-stage-open {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .trilogy-stage-open {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .capability-row-clean {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(26, 47, 37, 0.08);
        }
      `}</style>

      <div className="trilogy-container-open">
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
            Integrated Platform & Services
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1rem 0', color: '#1A2F25' }}>
            Our Integrated ESG Ecosystem
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#5A6578', lineHeight: '1.65', margin: 0 }}>
            Discover how ReGeneva helps you build capability, ensure regulatory compliance, and scale measurable impact.
          </p>
        </div>

        {/* Clean Open Tabs (No Box Wrapper!) */}
        <div className="trilogy-tabs-bar-open">
          {ecosystemPillars.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`trilogy-tab-clean ${activeId === p.id ? 'active' : ''}`}
            >
              <span>{p.icon}</span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>

        {/* Open Stage Layout */}
        <div className="trilogy-stage-open">
          {/* Left Narrative Column */}
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.2rem 0.7rem',
              borderRadius: '100px',
              backgroundColor: 'rgba(84, 191, 68, 0.15)',
              color: '#29573B',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '1.2rem'
            }}>
              {currentPillar.badge}
            </div>

            <h3 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: '700', color: '#1A2F25', marginBottom: '0.5rem', lineHeight: '1.15' }}>
              {currentPillar.title}
            </h3>

            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#29573B', marginBottom: '1.4rem' }}>
              {currentPillar.tagline}
            </div>

            <p style={{ fontSize: '1.05rem', color: '#5A6578', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              {currentPillar.description}
            </p>

            <a
              href={currentPillar.ctaHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1.8rem',
                borderRadius: '100px',
                backgroundColor: '#1A2F25',
                color: '#FFFFFF',
                fontSize: '14.5px',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, backgroundColor 0.2s ease'
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
              <span>{currentPillar.ctaText}</span>
              <span style={{ color: '#54BF44' }}>→</span>
            </a>
          </div>

          {/* Right Open Feature Rows */}
          <div>
            <div style={{ fontSize: '12px', color: '#29573B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              Key Capabilities & Deliverables
            </div>

            {currentPillar.highlights.map((hItem, hIdx) => (
              <div key={hIdx} className="capability-row-clean">
                <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1.1rem', lineHeight: '1.4' }}>✓</span>
                <span style={{ fontSize: '1rem', color: '#1A2F25', lineHeight: '1.5', fontWeight: '500' }}>
                  {hItem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
