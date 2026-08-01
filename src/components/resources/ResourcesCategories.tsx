"use client";
import React from 'react';
import Link from 'next/link';

const categories = [
  {
    title: "Blogs & Articles",
    desc: "In-depth articles covering the latest global ESG regulations, carbon accounting strategies, and corporate sustainability trends.",
    href: "/resources/blogs",
    badge: "Updated Weekly",
    count: "45+ Articles",
    color: "#1A2F25",
    bg: "#F8F6F0"
  },
  {
    title: "Market Insights",
    desc: "Data-driven research reports, industry benchmarks, and strategic analysis for executives and sustainability leaders.",
    href: "/resources/insights",
    badge: "Quarterly Intelligence",
    count: "18 Reports",
    color: "#FFFFFF",
    bg: "#1A2F25"
  },
  {
    title: "Case Studies",
    desc: "Real-world transformation stories detailing how companies achieved measurable decarbonization and regulatory compliance.",
    href: "/resources/case-studies",
    badge: "Proven Impact",
    count: "32 Case Studies",
    color: "#1A2F25",
    bg: "#E8F5E9"
  },
  {
    title: "Tools & Frameworks",
    desc: "Interactive calculators, double materiality checklists, and BRSR readiness templates to streamline your workflow.",
    href: "#tools",
    badge: "Interactive Tools",
    count: "12 Utilities",
    color: "#1A2F25",
    bg: "#F0EDE4"
  }
];

export const ResourcesCategories = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1.2rem',
            borderRadius: '20px',
            backgroundColor: 'rgba(84, 191, 68, 0.15)',
            color: '#1A2F25',
            fontWeight: '600',
            fontSize: '14px',
            marginBottom: '1rem'
          }}>
            KNOWLEDGE BASE
          </div>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.5rem', lineHeight: '1.2' }}>
            Explore Our Knowledge Hub
          </h2>
          <p className="text-16-regular" style={{ maxWidth: '650px', margin: '1rem auto', color: '#4A5568' }}>
            Discover curated research, actionable frameworks, and case studies designed to give your business a competitive sustainability edge.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((cat, i) => (
            <div key={i} style={{
              backgroundColor: cat.bg,
              borderRadius: '30px',
              padding: '2.5rem',
              color: cat.color,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '12px',
                    backgroundColor: cat.color === '#FFFFFF' ? 'rgba(84, 191, 68, 0.3)' : 'rgba(26, 47, 37, 0.08)',
                    color: cat.color === '#FFFFFF' ? '#54BF44' : '#1A2F25'
                  }}>
                    {cat.badge}
                  </span>
                  <span style={{ fontSize: '13px', opacity: 0.8 }}>{cat.count}</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: cat.color }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', opacity: 0.85, marginBottom: '2rem' }}>
                  {cat.desc}
                </p>
              </div>

              <Link href={cat.href} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '700',
                fontSize: '15px',
                color: cat.color === '#FFFFFF' ? '#54BF44' : '#1A2F25',
                textDecoration: 'none'
              }}>
                Explore {cat.title} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
