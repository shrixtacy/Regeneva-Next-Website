"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { detailedCoursesData } from '@/data/coursesData';

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const resolvedParams = use(params);
  const courseId = resolvedParams.id;

  const course = detailedCoursesData[courseId] || detailedCoursesData["cdp-advanced"];
  const [openSyllabusIdx, setOpenSyllabusIdx] = useState<number | null>(0);

  const toggleSyllabus = (idx: number) => {
    setOpenSyllabusIdx(openSyllabusIdx === idx ? null : idx);
  };

  return (
    <>
      <Navbar />

      {/* Main Container Container with top padding */}
      <div style={{ paddingTop: '80px', backgroundColor: '#FAF8F5' }}>

        {/* Top-Left Back Button Header Bar */}
        <div style={{
          backgroundColor: '#FAF8F5',
          borderBottom: '1px solid rgba(26, 47, 37, 0.08)',
          padding: '1.2rem 1.5rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Link
              href="/academy/courses"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '14px',
                fontWeight: '700',
                color: '#1A2F25',
                textDecoration: 'none',
                padding: '0.4rem 0.9rem',
                borderRadius: '100px',
                backgroundColor: 'rgba(26, 47, 37, 0.06)',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ color: '#29573B', fontSize: '1.1rem' }}>←</span>
              <span>Back to All Courses</span>
            </Link>
          </div>
        </div>

        {/* HERO SECTION - Beige Background (#FAF8F5) */}
        <section style={{ padding: '3.5rem 1.5rem 4.5rem', backgroundColor: '#FAF8F5', color: '#1A2F25' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'flex-start' }}>

              {/* Left Hero Details */}
              <div>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#54BF44',
                    backgroundColor: '#1A2F25',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '100px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px'
                  }}>
                    {course.badge}
                  </span>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#1A2F25',
                    backgroundColor: 'rgba(84, 191, 68, 0.2)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '100px',
                    textTransform: 'uppercase'
                  }}>
                    Promo Code: {course.promoCode} ({course.promoDiscount})
                  </span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                  lineHeight: '1.18',
                  fontWeight: '800',
                  color: '#1A2F25',
                  marginBottom: '1rem'
                }}>
                  {course.title}
                </h1>

                <p style={{ fontSize: '1.15rem', color: '#5A6578', lineHeight: '1.6', marginBottom: '1.8rem' }}>
                  {course.subtitle}
                </p>

                <div style={{ display: 'flex', gap: '1.8rem', borderTop: '1px solid rgba(26, 47, 37, 0.12)', paddingTop: '1.2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: '#29573B', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Instructor</span>
                    <strong style={{ fontSize: '1rem', color: '#1A2F25' }}>{course.instructor}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: '#29573B', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Language</span>
                    <strong style={{ fontSize: '1rem', color: '#1A2F25' }}>{course.language}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: '#29573B', fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Format</span>
                    <strong style={{ fontSize: '1rem', color: '#1A2F25' }}>{course.format}</strong>
                  </div>
                </div>

                {/* Highlights List */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                  {course.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1rem' }}>✓</span>
                      <span style={{ fontSize: '0.94rem', color: '#1A2F25', fontWeight: '500' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Hero Pricing Box (Dark ReGeneva Container) */}
              <div style={{
                backgroundColor: '#1A2F25',
                color: '#FFFFFF',
                borderRadius: '28px',
                padding: '2.5rem',
                boxShadow: '0 20px 45px rgba(26, 47, 37, 0.2)',
                border: '1px solid rgba(84, 191, 68, 0.3)',
                position: 'sticky',
                top: '100px'
              }}>
                <div style={{ fontSize: '12px', color: '#54BF44', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  Special Early Bird Offer
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.2rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FFFFFF' }}>{course.price}</span>
                  <span style={{ fontSize: '1.1rem', color: '#A0AEC0', textDecoration: 'line-through' }}>{course.originalPrice}</span>
                  <span style={{ fontSize: '11px', color: '#54BF44', fontWeight: '700', backgroundColor: 'rgba(84, 191, 68, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    {course.discount}
                  </span>
                </div>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px border-dashed rgba(84, 191, 68, 0.4)',
                  borderRadius: '12px',
                  padding: '0.9rem',
                  fontSize: '0.88rem',
                  color: '#C7BFAC',
                  marginBottom: '1.5rem'
                }}>
                  Use promo code <strong style={{ color: '#54BF44' }}>{course.promoCode}</strong> at checkout to claim {course.promoDiscount}.
                </div>

                <a
                  href="/company/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '100px',
                    backgroundColor: '#54BF44',
                    color: '#1A2F25',
                    fontSize: '16px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    boxShadow: '0 8px 25px rgba(84, 191, 68, 0.3)',
                    marginBottom: '1.2rem'
                  }}
                >
                  <span>Enroll in Course</span>
                  <span>→</span>
                </a>

                <div style={{ textAlign: 'center', fontSize: '0.82rem', color: '#A0AEC0' }}>
                  🔒 30-Day Money Back Guarantee • Lifetime Access
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT & TARGET AUDIENCE - ReGeneva Dark Green (#1A2F25) */}
        <section style={{ backgroundColor: '#1A2F25', color: '#FFFFFF', padding: '6.5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4.5rem', alignItems: 'flex-start' }}>

              {/* About Narrative */}
              <div>
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
                  Course Overview
                </div>

                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '700', lineHeight: '1.18', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  About the Course
                </h2>

                <p style={{ fontSize: '1.08rem', color: '#E2E8F0', lineHeight: '1.7', marginBottom: '2rem' }}>
                  {course.aboutText}
                </p>

                <div style={{ borderLeft: '3px solid #54BF44', paddingLeft: '1.5rem', marginTop: '2rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#54BF44', marginBottom: '0.5rem' }}>
                    Why Join This Program?
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: '#C7BFAC', lineHeight: '1.65', margin: 0 }}>
                    {course.whyJoinText}
                  </p>
                </div>
              </div>

              {/* Who Should Attend */}
              <div>
                <div style={{ fontSize: '12px', color: '#54BF44', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '1rem' }}>
                  Target Audience
                </div>

                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Who Should Attend?
                </h3>

                <div style={{ display: 'grid', gap: '1rem' }}>
                  {course.whoShouldAttend.map((target, tIdx) => (
                    <div key={tIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '1rem 1.2rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
                    }}>
                      <span style={{ color: '#54BF44', fontWeight: '800', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ fontSize: '1.02rem', color: '#FFFFFF', fontWeight: '500' }}>{target}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: SYLLABUS ACCORDION - Beige Background (#FAF8F5) */}
        <section style={{ backgroundColor: '#FAF8F5', color: '#1A2F25', padding: '6.5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
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
                Curriculum Breakdown
              </div>

              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1rem 0', color: '#1A2F25' }}>
                Course Curriculum & Modules
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#5A6578', lineHeight: '1.65', margin: 0 }}>
                {course.syllabus.length} Modules • Comprehensive Practitioner Modules & Hands-on Exercises
              </p>
            </div>

            {/* Syllabus Rows */}
            <div style={{ maxWidth: '900px' }}>
              {course.syllabus.map((module, idx) => {
                const isOpen = openSyllabusIdx === idx;
                return (
                  <div key={idx} style={{
                    borderBottom: '1px solid rgba(26, 47, 37, 0.15)',
                    padding: '1.4rem 0'
                  }}>
                    <button
                      onClick={() => toggleSyllabus(idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        background: 'none',
                        border: 'none',
                        color: '#1A2F25',
                        textAlign: 'left',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <div>
                        <span style={{
                          fontSize: '1.08rem',
                          fontWeight: '700',
                          color: module.bonus ? '#29573B' : '#1A2F25',
                          lineHeight: '1.35',
                          display: 'block'
                        }}>
                          {module.title}
                        </span>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.3rem', fontSize: '0.84rem', color: '#5A6578' }}>
                          {module.sessions && <span>📁 {module.sessions}</span>}
                          {module.time && <span>⏱️ {module.time}</span>}
                          {module.attachments && <span>📎 {module.attachments}</span>}
                        </div>
                      </div>

                      <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '400',
                        color: isOpen ? '#29573B' : '#A0AEC0',
                        transition: 'transform 0.25s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        flexShrink: 0
                      }}>
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{
                        marginTop: '1rem',
                        fontSize: '0.94rem',
                        color: '#5A6578',
                        lineHeight: '1.65',
                        paddingLeft: '1rem',
                        borderLeft: '2px solid #54BF44'
                      }}>
                        Includes practical exercises, working template walk-throughs, and real business scenario discussions.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: REGENEVA ACADEMY FEATURES - ReGeneva Dark Green (#1A2F25) */}
        <section style={{ backgroundColor: '#1A2F25', color: '#FFFFFF', padding: '6.5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ maxWidth: '750px', marginBottom: '4rem' }}>
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
                The ReGeneva Advantage
              </div>

              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 1rem 0', color: '#FFFFFF' }}>
                What We Offer
              </h2>
              <p style={{ fontSize: '1.08rem', color: '#C7BFAC', lineHeight: '1.65', margin: 0 }}>
                Designed by experts to make sure you get the best learning experience and job-ready capabilities.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
              <div style={{ borderLeft: '2px solid rgba(84, 191, 68, 0.4)', paddingLeft: '1.4rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>Live & Self-Paced Learning</h3>
                <p style={{ fontSize: '0.94rem', color: '#C7BFAC', lineHeight: '1.6', margin: 0 }}>Learn live with top educators, chat with instructors, and get doubts cleared in real-time.</p>
              </div>

              <div style={{ borderLeft: '2px solid rgba(84, 191, 68, 0.4)', paddingLeft: '1.4rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>Structured Curriculum</h3>
                <p style={{ fontSize: '0.94rem', color: '#C7BFAC', lineHeight: '1.6', margin: 0 }}>Master frameworks such as GRI, BRSR, CSRD, GHG Protocol, EcoVadis, and CDP through structured modules.</p>
              </div>

              <div style={{ borderLeft: '2px solid rgba(84, 191, 68, 0.4)', paddingLeft: '1.4rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>Community & Networking</h3>
                <p style={{ fontSize: '0.94rem', color: '#C7BFAC', lineHeight: '1.6', margin: 0 }}>Interact and network with ESG practitioners, sustainability leads, and recruiters in exclusive groups.</p>
              </div>

              <div style={{ borderLeft: '2px solid rgba(84, 191, 68, 0.4)', paddingLeft: '1.4rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>Learn with the Best</h3>
                <p style={{ fontSize: '0.94rem', color: '#C7BFAC', lineHeight: '1.6', margin: 0 }}>Discuss case studies and real project scenarios with Big 4 & MBB senior partners.</p>
              </div>

              <div style={{ borderLeft: '2px solid rgba(84, 191, 68, 0.4)', paddingLeft: '1.4rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>Practice Tests & Quizzes</h3>
                <p style={{ fontSize: '0.94rem', color: '#C7BFAC', lineHeight: '1.6', margin: 0 }}>Track performance through knowledge checks, quizzes, and capstone assignments.</p>
              </div>

              <div style={{ borderLeft: '2px solid rgba(84, 191, 68, 0.4)', paddingLeft: '1.4rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>Industry-Recognized Certification</h3>
                <p style={{ fontSize: '0.94rem', color: '#C7BFAC', lineHeight: '1.6', margin: 0 }}>Earn a verified certificate upon completion and showcase your skills on LinkedIn.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
