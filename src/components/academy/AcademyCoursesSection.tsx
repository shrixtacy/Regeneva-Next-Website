"use client";
import React, { useState, useRef, useEffect } from 'react';

const courses = [
  {
    title: "Carbon Disclosure Project (CDP) Advanced - Practitioner Batch",
    instructor: "ReGeneva Academy",
    originalPrice: "₹19,999",
    price: "₹9,999",
    gradient: "linear-gradient(135deg, #1A2F25 0%, #2D5A3F 50%, #54BF44 100%)",
    tag: "Bestseller"
  },
  {
    title: "LIVE FREE MASTERCLASS: CDP 2026 - Improve Your Score & Avoid Mistakes",
    instructor: "Surya Narayan Kar",
    originalPrice: null,
    price: "Free",
    gradient: "linear-gradient(135deg, #54BF44 0%, #3D9B30 50%, #1A2F25 100%)",
    tag: "Free"
  },
  {
    title: "EcoVadis Assessment Preparation – Advanced Strategy on Performance Improvement",
    instructor: "Gabriela Uberna",
    originalPrice: "₹19,999",
    price: "₹7,999",
    gradient: "linear-gradient(135deg, #2D5A3F 0%, #1A2F25 60%, #0D1910 100%)",
    tag: null
  },
  {
    title: "EcoVadis Assessment Preparation – Advanced (Actionable Templates Included)",
    instructor: "Gabriela Uberna",
    originalPrice: "₹21,999",
    price: "₹9,999",
    gradient: "linear-gradient(135deg, #3a7a2a 0%, #1A2F25 50%, #54BF44 100%)",
    tag: "Templates"
  },
  {
    title: "Double Materiality Assessment (DMA) - Advanced under ESRS & CSRD",
    instructor: "Sunny Revankar",
    originalPrice: "₹11,999",
    price: "₹4,999",
    gradient: "linear-gradient(135deg, #0D1910 0%, #2D5A3F 50%, #54BF44 100%)",
    tag: null
  },
  {
    title: "GRI Reporting - Advanced: Practical Guide to ESG/Sustainability Reports",
    instructor: "Naina Agrawal",
    originalPrice: "₹18,999",
    price: "₹8,999",
    gradient: "linear-gradient(135deg, #1A2F25 0%, #54BF44 50%, #2D5A3F 100%)",
    tag: "Popular"
  },
  {
    title: "GHG Inventorization and Accounting (Recorded Workshop)",
    instructor: "Mohit Waghela",
    originalPrice: "₹9,999",
    price: "₹6,999",
    rating: 5.0,
    ratingCount: 1,
    gradient: "linear-gradient(135deg, #2D5A3F 0%, #54BF44 40%, #1A2F25 100%)",
    tag: null
  },
  {
    title: "Deep Dive into BRSR - Business Responsibility & Sustainability Reporting",
    instructor: "Surya Narayan Kar, Mitanjali Routray",
    originalPrice: "₹13,999",
    price: "₹5,999",
    gradient: "linear-gradient(135deg, #0D1910 0%, #1A2F25 40%, #3a7a2a 100%)",
    tag: null
  },
  {
    title: "Introduction to ESG & Sustainability (Recorded Workshop)",
    instructor: "Surya Narayan Kar, Mitanjali Routray",
    originalPrice: "₹1,998",
    price: "₹999",
    gradient: "linear-gradient(135deg, #54BF44 0%, #2D5A3F 50%, #1A2F25 100%)",
    tag: "Starter"
  }
];

const webinars = [
  {
    title: "LIVE FREE MASTERCLASS: CDP 2026 - Improve Your Score & Avoid Mistakes",
    instructor: "Surya Narayan Kar",
    originalPrice: null,
    price: "Free",
    gradient: "linear-gradient(135deg, #54BF44 0%, #3D9B30 50%, #1A2F25 100%)",
    tag: "Free"
  },
  {
    title: "ESG Masterclass: Navigating CSRD & ESRS for Global Compliance",
    instructor: "ReGeneva Academy",
    originalPrice: null,
    price: "Free",
    gradient: "linear-gradient(135deg, #1A2F25 0%, #2D5A3F 50%, #54BF44 100%)",
    tag: "Free"
  },
  {
    title: "Net Zero Strategy Workshop: Building Your Decarbonization Roadmap",
    instructor: "ReGeneva Academy",
    originalPrice: null,
    price: "Free",
    gradient: "linear-gradient(135deg, #2D5A3F 0%, #1A2F25 60%, #0D1910 100%)",
    tag: "Free"
  }
];

interface Course {
  title: string;
  instructor: string;
  originalPrice: string | null;
  price: string;
  gradient: string;
  tag: string | null;
  rating?: number;
  ratingCount?: number;
}

export const AcademyCoursesSection = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'webinars'>('courses');
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const displayData = activeTab === 'courses' ? courses : webinars;

  // Reset index when tab changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeTab]);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(displayData.length - 1, index));
    setActiveIndex(clamped);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      goTo(activeIndex + (diff > 0 ? 1 : -1));
    }
  };

  const getSlideStyle = (index: number): React.CSSProperties => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);
    const isCenter = offset === 0;

    // Focus slider: center card is large, side cards are smaller and rotated
    const translateX = offset * 300;
    const rotateY = offset * -15;
    const scale = isCenter ? 1 : 0.78;
    const zIndex = 10 - absOffset;
    const opacity = absOffset > 2 ? 0 : absOffset > 1 ? 0.4 : 1;
    const blur = isCenter ? 0 : 2;

    return {
      position: 'absolute' as const,
      left: '50%',
      top: '50%',
      width: '360px',
      transform: `translate(-50%, -50%) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      opacity,
      filter: `blur(${blur}px)`,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: (absOffset > 1 ? 'none' : 'auto') as React.CSSProperties['pointerEvents'],
    };
  };

  const renderCard = (course: Course, index: number) => {
    const offset = index - activeIndex;
    const isCenter = offset === 0;

    return (
      <div
        key={`${activeTab}-${index}`}
        style={getSlideStyle(index)}
        onClick={() => {
          if (!isCenter) goTo(index);
        }}
      >
        <div style={{
          borderRadius: '28px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          boxShadow: isCenter
            ? '0 20px 60px rgba(0,0,0,0.15)'
            : '0 8px 30px rgba(0,0,0,0.08)',
          cursor: isCenter ? 'default' : 'pointer',
          transition: 'box-shadow 0.5s ease',
        }}>
          {/* Cover */}
          <div style={{
            background: course.gradient,
            height: '200px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
            {/* Decorative shapes */}
            <div style={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.15)',
              top: '-30px',
              right: '-20px',
            }} />
            <div style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.1)',
              bottom: '-20px',
              left: '20px',
            }} />
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50% 0 50% 0',
              backgroundColor: 'rgba(255,255,255,0.12)',
              transform: 'rotate(45deg)',
            }} />
            {course.tag && (
              <div style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                backgroundColor: course.tag === 'Free' ? '#54BF44' : 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>{course.tag}</div>
            )}
          </div>

          {/* Body */}
          <div style={{ padding: '1.5rem' }}>
            <div style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#1A2F25',
              lineHeight: 1.4,
              marginBottom: '0.6rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '2.8em',
            }}>{course.title}</div>

            <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.6rem' }}>{course.instructor}</div>

            {course.rating && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.6rem' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#FFB800', fontSize: '0.8rem' }}>★</span>
                ))}
                <span style={{ color: '#888', fontSize: '0.75rem', marginLeft: '0.2rem' }}>{course.rating}</span>
              </div>
            )}

            {/* Pricing */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              {course.originalPrice && (
                <span style={{ color: '#aaa', fontSize: '0.9rem', textDecoration: 'line-through' }}>{course.originalPrice}</span>
              )}
              <span style={{
                color: course.price === 'Free' ? '#54BF44' : '#1A2F25',
                fontSize: '1.25rem',
                fontWeight: 700,
              }}>{course.price}</span>
            </div>

            {/* CTA */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#1A2F25',
                color: '#FFFFFF',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#54BF44'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1A2F25'; }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#54BF44', transition: 'background-color 0.3s ease' }} />
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section" style={{ backgroundColor: '#f5f0e8', padding: '6rem 2rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ color: '#54BF44', marginBottom: '0.5rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Choose Your Path</div>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: 'clamp(2rem, 4vw, 4rem)', lineHeight: '1.2' }}>Explore Our Courses</h2>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <button
            onClick={() => setActiveTab('courses')}
            style={{
              padding: '0.85rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: activeTab === 'courses' ? '#1A2F25' : 'transparent',
              color: activeTab === 'courses' ? '#FFFFFF' : '#1A2F25',
              border: activeTab === 'courses' ? '2px solid #1A2F25' : '2px solid rgba(26,47,37,0.2)',
            }}
          >Courses</button>
          <button
            onClick={() => setActiveTab('webinars')}
            style={{
              padding: '0.85rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: activeTab === 'webinars' ? '#1A2F25' : 'transparent',
              color: activeTab === 'webinars' ? '#FFFFFF' : '#1A2F25',
              border: activeTab === 'webinars' ? '2px solid #1A2F25' : '2px solid rgba(26,47,37,0.2)',
            }}
          >Webinars</button>
        </div>

        {/* Focus Slider */}
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={() => { isDragging.current = false; }}
          style={{
            position: 'relative',
            height: '520px',
            perspective: '1200px',
            touchAction: 'pan-y',
            userSelect: 'none',
          }}
        >
          {displayData.map((course, index) => renderCard(course, index))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '1rem' }}>
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '2px solid #1A2F25',
              backgroundColor: 'transparent',
              cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: activeIndex === 0 ? 0.3 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: '#1A2F25',
              transition: 'all 0.3s ease',
            }}
          >←</button>

          <div style={{ display: 'flex', gap: '6px' }}>
            {displayData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === activeIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '8px',
                  backgroundColor: i === activeIndex ? '#54BF44' : '#C7BFAC',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === displayData.length - 1}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '2px solid #1A2F25',
              backgroundColor: 'transparent',
              cursor: activeIndex === displayData.length - 1 ? 'not-allowed' : 'pointer',
              opacity: activeIndex === displayData.length - 1 ? 0.3 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: '#1A2F25',
              transition: 'all 0.3s ease',
            }}
          >→</button>
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#54BF44',
              color: '#FFFFFF',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 20px rgba(84,191,68,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(84,191,68,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(84,191,68,0.3)';
            }}
          >View All Courses →</a>
        </div>
      </div>
    </section>
  );
};
