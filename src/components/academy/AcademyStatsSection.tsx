"use client";
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: "50+", label: "Hours of Content" },
  { number: "20+", label: "Expert Instructors" },
  { number: "1000+", label: "Learners Enrolled" },
  { number: "10+", label: "Certifications" }
];

export const AcademyStatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#1A2F25',
        padding: '3rem 2rem',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                textAlign: 'center',
                padding: '1rem 1.5rem',
                transition: 'all 0.6s ease',
                transitionDelay: `${index * 0.15}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                flex: '1 1 auto',
                minWidth: '140px',
              }}
            >
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#54BF44',
                lineHeight: 1,
                marginBottom: '0.3rem',
                letterSpacing: '-0.02em',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 400,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {stat.label}
              </div>
            </div>
            {/* Divider line between stats, not after last */}
            {index < stats.length - 1 && (
              <div style={{
                width: '1px',
                height: '50px',
                backgroundColor: 'rgba(255,255,255,0.12)',
                flexShrink: 0,
              }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
