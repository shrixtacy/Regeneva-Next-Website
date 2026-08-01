"use client";
import React, { useEffect, useState } from 'react';

export const ContactHeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'ESG Advisory & Strategy',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const img = document.getElementById('hero-earth-globe-img');
      if (img) {
        const x = (window.innerWidth / 2 - e.clientX) * 0.015;
        const y = (window.innerHeight / 2 - e.clientY) * 0.015;
        img.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      style={{
        backgroundColor: '#1A2F25',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 76px)',
        padding: '1.5rem 1.5rem 3.5rem',
        marginBottom: '-2px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Soft ambient background green glows */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(84, 191, 68, 0.18) 0%, rgba(26, 47, 37, 0) 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        right: '-10%',
        width: '650px',
        height: '650px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(84, 191, 68, 0.15) 0%, rgba(26, 47, 37, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <style>{`
        .contact-master-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        .contact-master-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 3rem;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .contact-master-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .liquid-glass-hero-card-dark {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 2rem;
        }
        .liquid-glass-field-dark {
          width: 100%;
          padding: 0.7rem 0.95rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          outline: none;
          font-size: 14px;
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          transition: all 0.2s ease;
        }
        .liquid-glass-field-dark::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }
        .liquid-glass-field-dark option {
          background-color: #1A2F25;
          color: #FFFFFF;
        }
        .liquid-glass-field-dark:focus {
          background: rgba(255, 255, 255, 0.14);
          border-color: #54BF44;
          box-shadow: 0 0 0 3px rgba(84, 191, 68, 0.25);
        }
        .contact-info-pill-dark {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          padding: 0.65rem 1rem;
          border-radius: 16px;
          transition: transform 0.2s ease;
        }
        .contact-info-pill-dark:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="contact-master-container">
        
        {/* Left Aligned Top Header */}
        <div style={{ textAlign: 'left', marginBottom: '2.2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '100px',
            backgroundColor: 'rgba(84, 191, 68, 0.15)',
            border: '1px solid rgba(84, 191, 68, 0.3)',
            color: '#54BF44',
            fontSize: '11.5px',
            fontWeight: '700',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
            Get in Touch
          </div>
          <h1 className="h1 _w-808" style={{ color: '#FFFFFF', fontSize: '3rem', lineHeight: '1.15', fontWeight: 700, margin: 0 }}>
            Let's connect !
          </h1>
          <p style={{ color: '#C7BFAC', fontSize: '0.88rem', lineHeight: '1.6', margin: '0.5rem 0 0 0', maxWidth: '55ch', textAlign: 'left' }}>
            We are here to support your sustainability goals. Reach out to schedule a consultation, request technical proposals, or join our learning programs.
          </p>
        </div>

        {/* 2-Column Main Layout: Earth on Left, Form on Right */}
        <div className="contact-master-grid">
          
          {/* Left Column: Earth PNG & Quick Contact Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', paddingTop: '1.5rem' }}>
            
            {/* Earth Sphere */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-4.5rem', marginBottom: '1.5rem' }}>
              <div style={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(84, 191, 68, 0.25) 0%, rgba(26, 47, 37, 0) 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }} />

              <img
                id="hero-earth-globe-img"
                src="/assets/673897439e0da7d6b5f585c6_world-full-min%20(1).webp"
                srcSet="/assets/673897439e0da7d6b5f585c6_world-full-min%20(1)-p-500.webp 500w, /assets/673897439e0da7d6b5f585c6_world-full-min%20(1)-p-800.webp 800w, /assets/673897439e0da7d6b5f585c6_world-full-min%20(1)-p-1080.webp 1080w, /assets/673897439e0da7d6b5f585c6_world-full-min%20(1)-p-1600.webp 1600w, /assets/673897439e0da7d6b5f585c6_world-full-min%20(1)-p-2000.webp 2000w, /assets/673897439e0da7d6b5f585c6_world-full-min%20(1).webp 2178w"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 440px"
                alt="ReGeneva World Sphere"
                style={{
                  width: '100%',
                  maxWidth: '430px',
                  height: 'auto',
                  objectFit: 'contain',
                  transform: 'scale(1.02)',
                  transition: 'transform 0.12s ease-out',
                  filter: 'drop-shadow(0 25px 45px rgba(0, 0, 0, 0.4))'
                }}
              />
            </div>

            {/* Quick Contact Badges below Earth */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.8rem', width: '100%', maxWidth: '500px' }}>
              <div className="contact-info-pill-dark">
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(84, 191, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0, color: '#54BF44' }}>
                  📧
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '9px', color: '#A0AEC0', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>General Inquiries</div>
                  <a href="mailto:hello@regeneva.co" style={{ fontSize: '0.82rem', fontWeight: '700', color: '#FFFFFF', textDecoration: 'none', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    hello@regeneva.co
                  </a>
                </div>
              </div>

              <div className="contact-info-pill-dark">
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(84, 191, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0, color: '#54BF44' }}>
                  📞
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '9px', color: '#A0AEC0', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone Hotline</div>
                  <a href="tel:+919114328561" style={{ fontSize: '0.82rem', fontWeight: '700', color: '#FFFFFF', textDecoration: 'none', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    +91 9114 328561
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Liquid Glass Contact Form */}
          <div style={{ marginTop: '-7rem' }}>
            <div className="liquid-glass-hero-card-dark">
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1.1rem' }}>
                Send an Advisory Request
              </h3>

              {submitted ? (
                <div style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(84, 191, 68, 0.15)',
                  border: '1px solid rgba(84, 191, 68, 0.3)',
                  color: '#FFFFFF',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.3rem' }}>🎉</div>
                  <h4 style={{ fontSize: '1.2rem', color: '#54BF44', fontWeight: '700', marginBottom: '0.3rem' }}>Message Received!</h4>
                  <p style={{ color: '#C7BFAC', fontSize: '13px', margin: 0 }}>
                    Thank you for reaching out. A Senior ReGeneva ESG Advisor will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.8rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '10.5px', fontWeight: '700', color: '#E2E8F0', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Al-Ameri"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="liquid-glass-field-dark"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '10.5px', fontWeight: '700', color: '#E2E8F0', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="s.ameri@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="liquid-glass-field-dark"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '10.5px', fontWeight: '700', color: '#E2E8F0', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="liquid-glass-field-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '10.5px', fontWeight: '700', color: '#E2E8F0', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="liquid-glass-field-dark"
                    >
                      <option value="ESG Advisory & Strategy">ESG Advisory & Strategy</option>
                      <option value="Carbon Accounting & Net-Zero">Carbon Accounting & Net-Zero</option>
                      <option value="Mobile Waste Technology">Mobile Waste Technology Deployment</option>
                      <option value="ReGeneva Academy Courses">ReGeneva Academy Courses</option>
                      <option value="BRSR & Regulatory Disclosures">BRSR & Regulatory Disclosures</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '10.5px', fontWeight: '700', color: '#E2E8F0', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Message / Project Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your organization's sustainability targets or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="liquid-glass-field-dark"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: '12px',
                      border: 'none',
                      backgroundColor: '#54BF44',
                      color: '#1A2F25',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginTop: '0.3rem',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                  >
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1A2F25' }}></div>
                    <div>Submit Advisory Request</div>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
