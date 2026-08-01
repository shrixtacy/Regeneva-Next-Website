"use client";
import React, { useState } from 'react';

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'ESG Advisory & Strategy',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Direct Info */}
          <div>
            <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
              DIRECT INQUIRIES
            </span>
            <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3rem', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>
              We're Here to Help You Navigate ESG
            </h2>
            <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              Whether you need urgent BRSR audit readiness, Scope 3 carbon telemetry, or mobile zero-landfill deployment, our regional teams respond within 24 business hours.
            </p>

            <div style={{ display: 'grid', gap: '2rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  📧
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: '#718096', fontWeight: '600' }}>General & Executive Email</div>
                  <a href="mailto:hello@regeneva.co" style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A2F25', textDecoration: 'none' }}>
                    hello@regeneva.co
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  📞
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: '#718096', fontWeight: '600' }}>Phone Hotline</div>
                  <a href="tel:+919114328561" style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A2F25', textDecoration: 'none' }}>
                    +91 9114 328561
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  📍
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: '#718096', fontWeight: '600' }}>Headquarters Location</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1A2F25' }}>
                    ReGeneva Solutions Pvt Ltd<br />Mundhwa Road, Pune, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={{
            background: 'rgba(248, 246, 240, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '32px',
            padding: '3rem',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1A2F25', marginBottom: '1.5rem' }}>
              Send an Advisory Request
            </h3>

            {submitted ? (
              <div style={{
                padding: '2rem',
                borderRadius: '20px',
                backgroundColor: '#1A2F25',
                color: '#FFFFFF',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h4 style={{ fontSize: '1.5rem', color: '#54BF44', fontWeight: '700', marginBottom: '0.5rem' }}>Message Received!</h4>
                <p style={{ color: '#C7BFAC', fontSize: '14px' }}>
                  Thank you for reaching out. A Senior ReGeneva ESG Advisor will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1A2F25', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Al-Ameri"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: '16px',
                      border: '1px solid #CBD5E0',
                      outline: 'none',
                      fontSize: '14px',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1A2F25', marginBottom: '0.4rem' }}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.ameri@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.2rem',
                        borderRadius: '16px',
                        border: '1px solid #CBD5E0',
                        outline: 'none',
                        fontSize: '14px',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1A2F25', marginBottom: '0.4rem' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.2rem',
                        borderRadius: '16px',
                        border: '1px solid #CBD5E0',
                        outline: 'none',
                        fontSize: '14px',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1A2F25', marginBottom: '0.4rem' }}>
                    Area of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: '16px',
                      border: '1px solid #CBD5E0',
                      outline: 'none',
                      fontSize: '14px',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option value="ESG Advisory & Strategy">ESG Advisory & Strategy</option>
                    <option value="Carbon Accounting & Net-Zero">Carbon Accounting & Net-Zero</option>
                    <option value="Mobile Waste Technology">Mobile Waste Technology Deployment</option>
                    <option value="ReGeneva Academy Courses">ReGeneva Academy Courses</option>
                    <option value="BRSR & Regulatory Disclosures">BRSR & Regulatory Disclosures</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1A2F25', marginBottom: '0.4rem' }}>
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your organization's sustainability targets or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: '16px',
                      border: '1px solid #CBD5E0',
                      outline: 'none',
                      fontSize: '14px',
                      backgroundColor: '#FFFFFF',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-btn w-inline-block"
                  style={{ width: '100%', border: 'none', cursor: 'pointer', justifyContent: 'center', marginTop: '0.5rem' }}
                >
                  <div className="dot-contact-btn"></div>
                  <div>Submit Inquiry</div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
