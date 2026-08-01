"use client";
import React, { useState } from 'react';

const categories = [
  "All Posts",
  "Climate Action & Net-Zero",
  "ESG Reporting & Disclosures",
  "Circular Economy & Waste",
  "Sustainable Finance & Taxonomies",
  "Governance & Ethics"
];

export const BlogsCategoriesSection = ({ onSelectCategory }: { onSelectCategory?: (cat: string) => void }) => {
  const [selected, setSelected] = useState("All Posts");

  const handleClick = (cat: string) => {
    setSelected(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '3rem 2rem 1rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(cat)}
              style={{
                padding: '0.7rem 1.5rem',
                borderRadius: '30px',
                border: selected === cat ? 'none' : '1px solid rgba(26, 47, 37, 0.2)',
                backgroundColor: selected === cat ? '#1A2F25' : '#FFFFFF',
                color: selected === cat ? '#FFFFFF' : '#1A2F25',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                boxShadow: selected === cat ? '0 4px 14px rgba(26,47,37,0.2)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
