"use client";
import React from 'react';

const pillars = [
  {
    title: "ESG Consulting & Advisory",
    bgClass: "beige",
    textColor: "#1A2F25", // Dark Green text
    colSpan: "1 / -1", // Full width
    items: [
      "ESG Strategy & Roadmap",
      "ESG360 – Managed ESG Services",
      "ESG Due Diligence & Gap Assessment",
      "Supply Chain / Value Chain ESG Assessment",
      "Green Building Advisory",
      "Extended Producer Responsibility (EPR)",
      "Waste & Circular Economy Advisory"
    ]
  },
  {
    title: "Carbon, Climate & Net Zero",
    bgClass: "green", // Light green
    textColor: "#FFFFFF",
    colSpan: "span 1", // Half width
    items: [
      "GHG Inventory & Carbon Accounting",
      "Carbon Footprint (Scope 1, 2, 3)",
      "Carbon Project Advisory",
      "Net Zero Strategy & Decarbonization",
      "Carbon Credit Advisory"
    ]
  },
  {
    title: "ESG Reporting & Disclosure",
    bgClass: "dark-beige",
    textColor: "#1A2F25",
    colSpan: "span 1", // Half width
    items: [
      "BRSR Reporting",
      "GRI Reporting",
      "CSRD / ESRS Reporting",
      "Integrated Reporting",
      "Sustainability Report Design",
      "Double Materiality"
    ]
  },
  {
    title: "ESG Assurance & Compliance",
    bgClass: "dark-green", // Custom dark green inline
    bgColor: "#1A2F25",
    textColor: "#FFFFFF",
    colSpan: "1 / -1", // Full width
    items: [
      "ESG Assurance",
      "BRSR Core Assurance Readiness",
      "ESG Compliance Management",
      "ESG Ratings Support"
    ]
  }
];

export const EsgPillarsBentoGrid = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header for the section */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '4rem', lineHeight: '1.2' }}>Our Comprehensive Solutions</h2>
          <div className="text-16-regular" style={{ maxWidth: '600px', margin: '1rem auto', color: '#1A2F25' }}>
            We provide end-to-end expertise across the entire sustainability spectrum to help you create long-term, measurable value.
          </div>
        </div>

        {/* Bento Grid Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          width: '100%'
        }}>
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`section ${pillar.bgClass}`}
              style={{
                backgroundColor: pillar.bgColor || undefined,
                borderRadius: '40px',
                padding: '4rem',
                gridColumn: pillar.colSpan, // Dynamic spanning for bento effect
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: pillar.textColor
              }}
            >
              <h3 className="text-63-regular" style={{ marginBottom: '3rem', color: pillar.textColor }}>
                {pillar.title}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: pillar.colSpan === '1 / -1' ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr', gap: '2rem' }}>
                {pillar.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: pillar.textColor === '#FFFFFF' ? '#54BF44' : '#54BF44', flexShrink: 0 }}></div>
                    <div className="text-16-regular" style={{ color: pillar.textColor }}>{item}</div>
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: '4rem' }}>
                <a href="#Contacts" className={`contact-btn ${pillar.textColor === '#FFFFFF' ? 'white' : ''} w-inline-block`} style={{ display: 'inline-flex' }}>
                    <div className="dot-contact-btn"></div>
                    <div style={{ color: pillar.textColor === '#FFFFFF' ? '#1A2F25' : '#FFFFFF' }}>Book a Free Consultation</div>
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
