"use client";
import React, { useState } from 'react';

const offerings = [
  {
    id: "courses",
    num: "01",
    badge: "Flexible Learning",
    title: "Live & Recorded Courses",
    tagline: "Learn at your pace or in real time with certified ESG courses",
    description: "Comprehensive curriculum designed for practitioners and executives seeking practical, regulatory-aligned ESG capabilities.",
    items: [
      "All about ESG Fundamentals & Regulatory Context",
      "ESG Reporting (BRSR, GRI, CSRD-ESRS, SASB, TCFD)",
      "GHG Inventorization and Scope 1, 2 & 3 Carbon Accounting",
      "Double Materiality & Strategic ESG Integration",
      "Supply Chain Due Diligence & Human Rights Audits",
      "Sector-Specific ESG (Manufacturing, Real Estate, BFSI & Energy)"
    ],
    ctaText: "Explore Certified Courses",
    ctaHref: "#Contacts"
  },
  {
    id: "mentorship",
    num: "02",
    badge: "1-on-1 Guidance",
    title: "Career Mentorship",
    tagline: "Personalized guidance from Big 4 & MBB Senior ESG Partners",
    description: "One-on-one mentorship sessions with seasoned ESG professionals from top tier consulting firms, rating agencies, and global enterprise leaders.",
    items: [
      "Build clarity on high-growth ESG career pathways",
      "Comprehensive Resume & LinkedIn profile optimization",
      "Mock technical interviews & case study preparation",
      "Direct networking with regional and global industry experts"
    ],
    ctaText: "Book Mentorship Session",
    ctaHref: "#Contacts"
  },
  {
    id: "corporate",
    num: "03",
    badge: "Enterprise Capability",
    title: "Corporate Training",
    tagline: "Customized ESG workshops for Corporates & MSMEs",
    description: "Customized ESG and sustainability learning programs tailored for corporate boards, executive leadership, and functional department teams.",
    items: [
      "CXO Masterclasses on ESG Strategy & Net-Zero Transition",
      "Hands-on Training on BRSR & CSRD Disclosure Mandates",
      "Functional ESG Training (Finance, HR, EHS, Procurement)",
      "Interactive ESG Compliance & Regulatory Workshops",
      "ESG Audit & Assurance Awareness Modules"
    ],
    ctaText: "Request Enterprise Training",
    ctaHref: "#Contacts"
  },
  {
    id: "community",
    num: "04",
    badge: "Exclusive Ecosystem",
    title: "Community & Memberships",
    tagline: "Connect with over 1,000+ sustainability leaders",
    description: "Join an exclusive members-only community of ESG professionals. Access structured courses, peer networking, resources, and live roundtables.",
    items: [
      "Exclusive member-only webinars & executive roundtables",
      "Early access to new specialized course releases",
      "Peer-to-peer networking & strategic collaboration",
      "Curated ESG resource, framework & template library"
    ],
    ctaText: "Join Exclusive Community",
    ctaHref: "#Contacts"
  }
];

export const AcademyOfferingsGrid = () => {
  const [activeTab, setActiveTab] = useState("courses");

  const currentProgram = offerings.find(o => o.id === activeTab) || offerings[0];

  return (
    <section
      className="section"
      style={{
        backgroundColor: '#1A2F25',
        color: '#FFFFFF',
        position: 'relative',
        padding: '7rem 1.5rem 6.5rem'
      }}
    >
      <style>{`
        .academy-offerings-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        .academy-tabs-line-dark {
          display: flex;
          gap: 1.8rem;
          margin-top: 2.5rem;
          margin-bottom: 4rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.12);
          padding-bottom: 1rem;
          flex-wrap: wrap;
        }
        .academy-tab-clean-dark {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.55);
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.25s ease;
        }
        .academy-tab-clean-dark.active {
          color: #FFFFFF;
        }
        .academy-tab-clean-dark.active::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #54BF44;
          border-radius: 10px;
        }
        .academy-stage-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 4.5rem;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .academy-stage-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .academy-item-row-dark {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.9rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }
      `}</style>

      <div className="academy-offerings-container">
        {/* Header */}
        <div style={{ maxWidth: '720px' }}>
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
            What We Offer
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1rem 0', color: '#FFFFFF' }}>
            Programs Designed for Impact
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#C7BFAC', lineHeight: '1.65', margin: 0 }}>
            From self-paced courses to hands-on corporate training, we offer learning paths that match every stage of your ESG journey.
          </p>
        </div>

        {/* Clean Open Dark Program Tabs */}
        <div className="academy-tabs-line-dark">
          {offerings.map((offering) => (
            <button
              key={offering.id}
              onClick={() => setActiveTab(offering.id)}
              className={`academy-tab-clean-dark ${activeTab === offering.id ? 'active' : ''}`}
            >
              <span style={{ fontSize: '0.85rem', color: '#54BF44', fontFamily: 'monospace' }}>{offering.num}</span>
              <span>{offering.title}</span>
            </button>
          ))}
        </div>

        {/* Open Stage Grid */}
        <div className="academy-stage-grid">
          {/* Left Column Narrative */}
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.2rem 0.75rem',
              borderRadius: '100px',
              backgroundColor: 'rgba(84, 191, 68, 0.18)',
              color: '#54BF44',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '1.2rem'
            }}>
              {currentProgram.badge}
            </div>

            <h3 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: '1.15' }}>
              {currentProgram.title}
            </h3>

            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#54BF44', marginBottom: '1.4rem' }}>
              {currentProgram.tagline}
            </div>

            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              {currentProgram.description}
            </p>

            <a
              href={currentProgram.ctaHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1.8rem',
                borderRadius: '100px',
                backgroundColor: '#54BF44',
                color: '#1A2F25',
                fontSize: '14.5px',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(84, 191, 68, 0.3)',
                transition: 'transform 0.2s ease, backgroundColor 0.2s ease'
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1A2F25' }}></span>
              <span>{currentProgram.ctaText}</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Column Open Curriculum Items */}
          <div>
            <div style={{ fontSize: '12px', color: '#54BF44', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              Curriculum & Program Deliverables
            </div>

            {currentProgram.items.map((item, i) => (
              <div key={i} className="academy-item-row-dark">
                <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1.1rem', lineHeight: '1.4' }}>✓</span>
                <span style={{ fontSize: '1rem', color: '#FFFFFF', lineHeight: '1.5', fontWeight: '500' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
