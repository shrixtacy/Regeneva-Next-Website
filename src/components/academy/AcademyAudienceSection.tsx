"use client";
import React, { useEffect, useRef, useState } from 'react';

const audiences = [
  {
    num: "01",
    title: "Students & Graduates",
    color: "beige", // beige
    items: [
      "Looking to enter the ESG field",
      "Build a strong foundation in sustainability concepts",
      "Get certified and gain a competitive edge in the job market",
      "Access mentorship from industry professionals"
    ]
  },
  {
    num: "02",
    title: "Working Professionals",
    color: "green", // green
    items: [
      "Upskilling for ESG and sustainability roles",
      "Transition from adjacent domains like finance, HR, EHS",
      "Stay ahead with the latest frameworks and regulations",
      "Earn advanced certifications"
    ]
  },
  {
    num: "03",
    title: "CXOs & Senior Management",
    color: "beige", // beige
    items: [
      "Building strategic ESG acumen at the leadership level",
      "Understanding ESG impact on business value and investor relations",
      "Executive masterclasses on emerging regulations",
      "Driving organization-wide sustainability culture"
    ]
  },
  {
    num: "04",
    title: "Domain Professionals Switching to ESG",
    color: "green", // green
    items: [
      "CSR, EHS, Compliance, and Finance professionals",
      "Seeking a structured transition into ESG roles",
      "Building cross-domain ESG expertise",
      "Career path guidance and mentorship support"
    ]
  }
];

export const AcademyAudienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const viewportHeight = window.innerHeight;

      // Calculate progress through the sticky section
      // The section is tall enough to scroll through all cards
      const scrollableHeight = sectionRef.current.offsetHeight - viewportHeight;
      const scrolled = -sectionTop;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      // Determine which card should be active based on scroll progress
      const cardIndex = Math.min(audiences.length - 1, Math.floor(progress * audiences.length));
      setActiveIndex(cardIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardColors = (colorScheme: string) => {
    if (colorScheme === 'green') {
      return {
        bg: '#2D5A3F',
        text: '#FFFFFF',
        subtext: 'rgba(255,255,255,0.75)',
        num: 'rgba(255,255,255,0.3)',
        dot: '#54BF44',
      };
    }
    return {
      bg: '#f5f0e8',
      text: '#1A2F25',
      subtext: '#5a5a5a',
      num: 'rgba(26,47,37,0.15)',
      dot: '#54BF44',
    };
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        height: `${audiences.length * 100 + 100}vh`, // enough scroll space
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Sticky container */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px' }}>
          <div style={{ color: '#54BF44', marginBottom: '0.5rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Who Is This For?</div>
          <h2 style={{ color: '#1A2F25', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 400, lineHeight: 1.2 }}>
            Whether You&apos;re Starting Out or<br />Leading the Change
          </h2>
        </div>

        {/* Stacked cards */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '700px',
          height: '380px',
        }}>
          {audiences.map((audience, index) => {
            const colors = getCardColors(audience.color);
            const isActive = index <= activeIndex;
            const stackOffset = isActive ? (activeIndex - index) * 8 : 0;
            const scaleVal = isActive ? 1 - (activeIndex - index) * 0.03 : 1;

            return (
              <div
                key={index}
                ref={el => { cardRefs.current[index] = el; }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  borderRadius: '32px',
                  padding: '3rem',
                  backgroundColor: colors.bg,
                  color: colors.text,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isActive
                    ? `translateY(${stackOffset}px) scale(${scaleVal})`
                    : `translateY(400px) scale(0.95)`,
                  opacity: isActive ? 1 : 0,
                  zIndex: index + 1,
                  overflow: 'hidden',
                }}
              >
                {/* Card number watermark */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '20px',
                  fontSize: '10rem',
                  fontWeight: 800,
                  color: colors.num,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>{audience.num}</div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: colors.dot,
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 14px',
                    borderRadius: '20px',
                    marginBottom: '1rem',
                  }}>STEP {audience.num}</div>

                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 600,
                    marginBottom: '1.5rem',
                    color: colors.text,
                  }}>{audience.title}</h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {audience.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: colors.dot,
                          flexShrink: 0,
                          marginTop: '6px',
                        }}></div>
                        <div style={{ color: colors.subtext, fontSize: '1rem', lineHeight: 1.5 }}>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '2rem' }}>
          {audiences.map((_, i) => (
            <div key={i} style={{
              width: '40px',
              height: '4px',
              borderRadius: '4px',
              backgroundColor: i <= activeIndex ? '#54BF44' : '#e0d9cc',
              transition: 'all 0.4s ease',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
};
