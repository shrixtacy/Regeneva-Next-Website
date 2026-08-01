"use client";
import React from 'react';

const blogPosts = [
  {
    title: "Understanding Scope 3 Abatement: Vendor Engagement Playbooks",
    excerpt: "How leading retail and manufacturing giants incentivize suppliers to submit verified carbon reduction targets.",
    author: "Elena Rostova",
    role: "Senior Sustainability Strategist",
    date: "July 20, 2026",
    readTime: "6 min read",
    tag: "Climate Action & Net-Zero",
    icon: "🌾"
  },
  {
    title: "The Shift from Voluntary Disclosures to Mandatory Assurance",
    excerpt: "Why CFOs and audit committees are integrating carbon accounting directly into ERP and financial reporting tools.",
    author: "Tariq Al-Mansoor",
    role: "Head of ESG Advisory",
    date: "July 15, 2026",
    readTime: "7 min read",
    tag: "ESG Reporting & Disclosures",
    icon: "📜"
  },
  {
    title: "Circular Economy in Urban Infrastructure & Real Estate",
    excerpt: "Case study on zero-waste construction practices saving 40% material costs while gaining LEED Platinum certification.",
    author: "Sarah Jenkins",
    role: "Green Building Specialist",
    date: "July 10, 2026",
    readTime: "5 min read",
    tag: "Circular Economy & Waste",
    icon: "🏙️"
  },
  {
    title: "Navigating Green Bonds & Sustainability-Linked Loans in 2026",
    excerpt: "A corporate treasurer's roadmap to securing lower interest rates by tying debt financing to ambitious KPI milestones.",
    author: "Vikram Mehta",
    role: "Sustainable Finance Director",
    date: "July 05, 2026",
    readTime: "9 min read",
    tag: "Sustainable Finance & Taxonomies",
    icon: "💰"
  },
  {
    title: "Double Materiality 101: Aligning Financial & Impact Assessment",
    excerpt: "Practical steps to satisfy both investor financial expectations and European/Global impact transparency rules.",
    author: "Dr. Rashid Al-Maktoum",
    role: "Head of Climate AI",
    date: "June 28, 2026",
    readTime: "8 min read",
    tag: "ESG Reporting & Disclosures",
    icon: "⚖️"
  },
  {
    title: "Boardroom Decarbonization Governance: Setting Up ESG Committees",
    excerpt: "Best practices for aligning executive compensation with long-term climate targets and regulatory accountability.",
    author: "Amira Al-Farsi",
    role: "Corporate Governance Lead",
    date: "June 22, 2026",
    readTime: "6 min read",
    tag: "Governance & Ethics",
    icon: "🏛️"
  }
];

export const BlogsGridSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '3rem 2rem 6rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {blogPosts.map((post, idx) => (
            <article key={idx} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '12px',
                    backgroundColor: '#E8F5E9',
                    color: '#1A2F25'
                  }}>
                    {post.tag}
                  </span>
                  <span style={{ fontSize: '2rem' }}>{post.icon}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1A2F25', lineHeight: '1.35', marginBottom: '1rem' }}>
                  {post.title}
                </h3>

                <p style={{ color: '#4A5568', fontSize: '15px', lineHeight: '1.6', marginBottom: '2rem' }}>
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.2rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#718096' }}>
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                <a href={`#blog-${idx}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '700',
                  color: '#54BF44',
                  textDecoration: 'none',
                  fontSize: '15px'
                }}>
                  Read Full Article &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
