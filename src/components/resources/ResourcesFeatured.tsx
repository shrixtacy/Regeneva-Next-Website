"use client";
import React, { useState } from 'react';

const featuredItems = [
  {
    category: "Whitepaper",
    title: "Navigating Scope 3 Emissions in GCC Supply Chains",
    readTime: "12 min read",
    date: "July 2026",
    summary: "A practical step-by-step framework for corporate procurement teams to audit, measure, and abate upstream Scope 3 carbon footprints.",
    downloadCount: "2.4k downloads",
    tags: ["Scope 3", "Supply Chain", "GCC"]
  },
  {
    category: "Regulatory Guide",
    title: "The Ultimate Guide to BRSR Core & ESG Assurance",
    readTime: "15 min read",
    date: "June 2026",
    summary: "Everything enterprise boards need to know about upcoming mandatory ESG disclosures, third-party assurance audit trails, and data governance.",
    downloadCount: "3.1k downloads",
    tags: ["BRSR", "Compliance", "Assurance"]
  },
  {
    category: "Market Report",
    title: "Middle East Net-Zero Progress & Decarbonization Trends 2026",
    readTime: "20 min read",
    date: "May 2026",
    summary: "Comprehensive market benchmark evaluating renewable adoption, circular economy models, and carbon credit trading across top GCC industries.",
    downloadCount: "4.8k downloads",
    tags: ["Net-Zero", "Market Intelligence", "Decarbonization"]
  }
];

export const ResourcesFeatured = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
              FEATURED RESEARCH
            </span>
            <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3rem', marginTop: '0.5rem' }}>
              Must-Read Sustainability Publications
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            {featuredItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: activeTab === idx ? '#1A2F25' : '#FFFFFF',
                  color: activeTab === idx ? '#FFFFFF' : '#1A2F25',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '32px',
          padding: '3.5rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          border: '1px solid rgba(84, 191, 68, 0.2)'
        }}>
          <div>
            <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {featuredItems[activeTab].tags.map((tag, tIdx) => (
                <span key={tIdx} style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  backgroundColor: '#E8F5E9',
                  color: '#1A2F25',
                  fontSize: '13px',
                  fontWeight: '600'
                }}>
                  #{tag}
                </span>
              ))}
            </div>

            <h3 style={{ fontSize: '2.2rem', color: '#1A2F25', fontWeight: '700', lineHeight: '1.3', marginBottom: '1.2rem' }}>
              {featuredItems[activeTab].title}
            </h3>

            <p style={{ color: '#4A5568', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {featuredItems[activeTab].summary}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem', opacity: 0.8, fontSize: '14px' }}>
              <span>📅 {featuredItems[activeTab].date}</span>
              <span>⏱️ {featuredItems[activeTab].readTime}</span>
              <span>📥 {featuredItems[activeTab].downloadCount}</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#download" className="contact-btn w-inline-block" style={{ display: 'inline-flex' }}>
                <div className="dot-contact-btn"></div>
                <div>Download Report PDF</div>
              </a>
              <a href="#preview" style={{
                padding: '0.9rem 1.8rem',
                borderRadius: '30px',
                border: '1.5px solid #1A2F25',
                color: '#1A2F25',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center'
              }}>
                Read Executive Summary
              </a>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1A2F25',
            borderRadius: '24px',
            padding: '3rem',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: 'rgba(84, 191, 68, 0.2)'
            }}></div>
            
            <span style={{ color: '#54BF44', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Key Takeaway Highlight
            </span>

            <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', margin: '1.5rem 0', lineHeight: '1.6', borderLeft: '3px solid #54BF44', paddingLeft: '1rem' }}>
              "Companies that proactively map Scope 3 emissions achieve up to 30% greater operational resilience and secure preferential capital access from ESG-focused institutional investors."
            </blockquote>

            <div style={{ marginTop: '2rem', fontSize: '14px', opacity: 0.85 }}>
              — ReGeneva Research Institute, 2026 Edition
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
