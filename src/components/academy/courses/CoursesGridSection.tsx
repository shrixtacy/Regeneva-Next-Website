"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export interface CourseItem {
  id: string;
  category: 'disclosures' | 'carbon' | 'ratings' | 'workshops';
  title: string;
  badge: string;
  instructor: string;
  rating?: string;
  ratingCount?: string;
  originalPrice: string;
  price: string;
  discount: string;
  shortDesc: string;
  coverGradient: string;
}

export const courseCatalog: CourseItem[] = [
  {
    id: "cdp-advanced",
    category: "disclosures",
    badge: "CDP Practitioner",
    title: "Carbon Disclosure Project (CDP) Advanced - Practitioner Batch",
    instructor: "ReGeneva Academy",
    originalPrice: "₹19,999",
    price: "₹9,999",
    discount: "50% OFF",
    shortDesc: "Master CDP climate change reporting, scoring methodology, and strategic disclosure frameworks.",
    coverGradient: "linear-gradient(135deg, #1E3E2B 0%, #2B573C 100%)"
  },
  {
    id: "ecovadis-advanced",
    category: "ratings",
    badge: "EcoVadis Strategy",
    title: "EcoVadis Assessment Preparation – Advanced",
    instructor: "Gabriela Uberna",
    originalPrice: "₹19,999",
    price: "₹7,999",
    discount: "60% OFF",
    shortDesc: "Detailed strategy on EcoVadis assessment, scorecard optimization, and performance improvement.",
    coverGradient: "linear-gradient(135deg, #1A3524 0%, #1E4D33 100%)"
  },
  {
    id: "ecovadis-templates",
    category: "ratings",
    badge: "Templates Included",
    title: "EcoVadis Assessment Preparation – Advanced (Actionable Templates Included)",
    instructor: "Gabriela Uberna",
    originalPrice: "₹21,999",
    price: "₹9,999",
    discount: "55% OFF",
    shortDesc: "Includes downloadable audit templates, policy kits, and EcoVadis action plan workbooks.",
    coverGradient: "linear-gradient(135deg, #254D35 0%, #15261E 100%)"
  },
  {
    id: "double-materiality",
    category: "disclosures",
    badge: "ESRS & CSRD",
    title: "Double Materiality Assessment (DMA) - Advanced",
    instructor: "Sunny Revankar",
    originalPrice: "₹11,999",
    price: "₹4,999",
    discount: "58% OFF",
    shortDesc: "Practical implementation of impact and financial materiality under ESRS & CSRD guidelines.",
    coverGradient: "linear-gradient(135deg, #1E3E2B 0%, #2B573C 100%)"
  },
  {
    id: "gri-reporting",
    category: "disclosures",
    badge: "GRI Standards",
    title: "GRI Reporting - Advanced: Guide to Drafting ESG Reports",
    instructor: "Naina Agrawal",
    originalPrice: "₹18,999",
    price: "₹8,999",
    discount: "52% OFF",
    shortDesc: "Practical guide to drafting GRI-aligned sustainability and integrated reports with industry benchmarks.",
    coverGradient: "linear-gradient(135deg, #1A3524 0%, #1E4D33 100%)"
  },
  {
    id: "ghg-accounting",
    category: "carbon",
    badge: "Recorded Workshop",
    title: "GHG Inventorization and Accounting (Recorded Workshop)",
    instructor: "Mohit Waghela",
    rating: "5.0",
    ratingCount: "1",
    originalPrice: "₹9,999",
    price: "₹6,999",
    discount: "30% OFF",
    shortDesc: "Complete GHG Protocol workshop on Scope 1, 2 & 3 carbon footprint quantification and data collection.",
    coverGradient: "linear-gradient(135deg, #254D35 0%, #15261E 100%)"
  },
  {
    id: "brsr-deep-dive",
    category: "workshops",
    badge: "BRSR Workshop",
    title: "Deep Dive into Business Responsibility and Sustainability Reporting (BRSR)",
    instructor: "Surya Narayan Kar, Mitanjali Routray",
    originalPrice: "₹13,999",
    price: "₹5,999",
    discount: "57% OFF",
    shortDesc: "Recorded deep-dive workshop on essential and leadership indicators for mandatory BRSR disclosures.",
    coverGradient: "linear-gradient(135deg, #1E3E2B 0%, #2B573C 100%)"
  },
  {
    id: "esg-intro",
    category: "workshops",
    badge: "Introductory Primer",
    title: "Introduction to ESG & Sustainability (Recorded Workshop)",
    instructor: "Surya Narayan Kar, Mitanjali Routray",
    originalPrice: "₹1,998",
    price: "₹999",
    discount: "50% OFF",
    shortDesc: "Essential primer on core ESG metrics, climate risks, regulatory landscape, and career opportunities.",
    coverGradient: "linear-gradient(135deg, #1A3524 0%, #1E4D33 100%)"
  }
];

export const CoursesGridSection = () => {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const cat = searchParams?.get('category');
    if (cat) {
      if (['disclosures', 'ratings', 'carbon', 'workshops'].includes(cat)) {
        setActiveCategory(cat);
      } else {
        setActiveCategory('all');
      }
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const filteredCourses = activeCategory === 'all'
    ? courseCatalog
    : courseCatalog.filter(c => c.category === activeCategory);

  return (
    <section
      style={{
        backgroundColor: '#1A2F25',
        color: '#FFFFFF',
        position: 'relative',
        padding: '2.5rem 1.5rem 6rem'
      }}
    >
      <style>{`
        .courses-catalog-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .filter-tab-clean-dark {
          padding: 0.55rem 1.3rem;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
        }
        .filter-tab-clean-dark.active {
          background: #54BF44;
          color: #1A2F25;
          border-color: #54BF44;
        }
        /* 4-in-a-row Responsive Grid */
        .courses-4col-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.8rem;
        }
        @media (max-width: 1200px) {
          .courses-4col-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 880px) {
          .courses-4col-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .courses-4col-grid {
            grid-template-columns: 1fr;
          }
        }
        .course-card-4col {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .course-card-4col:hover {
          transform: translateY(-5px);
          border-color: rgba(84, 191, 68, 0.5);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
        }
      `}</style>

      <div className="courses-catalog-container">
        {/* Header */}
        <div style={{ maxWidth: '750px', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            color: '#54BF44',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            marginBottom: '0.8rem'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#54BF44' }}></span>
            ReGeneva Academy Directory
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)', fontWeight: '700', lineHeight: '1.15', margin: '0 0 0.8rem 0', color: '#FFFFFF' }}>
            Explore All Programs
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#C7BFAC', lineHeight: '1.6', margin: 0 }}>
            Master ESG reporting, Scope 1-3 carbon accounting, BRSR compliance, and rating preparation with certified practitioners.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button onClick={() => setActiveCategory("all")} className={`filter-tab-clean-dark ${activeCategory === "all" ? "active" : ""}`}>All Courses ({courseCatalog.length})</button>
          <button onClick={() => setActiveCategory("disclosures")} className={`filter-tab-clean-dark ${activeCategory === "disclosures" ? "active" : ""}`}>Reporting & Disclosures</button>
          <button onClick={() => setActiveCategory("ratings")} className={`filter-tab-clean-dark ${activeCategory === "ratings" ? "active" : ""}`}>EcoVadis & Ratings</button>
          <button onClick={() => setActiveCategory("carbon")} className={`filter-tab-clean-dark ${activeCategory === "carbon" ? "active" : ""}`}>Carbon & GHG</button>
          <button onClick={() => setActiveCategory("workshops")} className={`filter-tab-clean-dark ${activeCategory === "workshops" ? "active" : ""}`}>Recorded Workshops</button>
        </div>

        {/* 4-in-a-Row Course Cards Grid */}
        <div className="courses-4col-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card-4col">
              {/* Cover Card Banner */}
              <div style={{
                background: course.coverGradient,
                padding: '1.6rem 1.4rem',
                position: 'relative',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: '700',
                    color: '#54BF44',
                    backgroundColor: 'rgba(84, 191, 68, 0.15)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '100px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {course.badge}
                  </span>

                  {course.rating && (
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#FFD700', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      ★ {course.rating} ({course.ratingCount})
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginTop: '1rem' }}>
                  ReGeneva Certified Track
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.35', marginBottom: '0.6rem', minHeight: '2.7rem' }}>
                    <a href={`/academy/courses/${course.id}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                      {course.title}
                    </a>
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: '#54BF44', fontWeight: '600', marginBottom: '0.8rem' }}>
                    By {course.instructor}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#C7BFAC', lineHeight: '1.55', marginBottom: '1.4rem', minHeight: '3.6rem' }}>
                    {course.shortDesc}
                  </p>
                </div>

                {/* Footer Price & Action */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.9rem' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF' }}>{course.price}</span>
                    <span style={{ fontSize: '0.85rem', color: '#A0AEC0', textDecoration: 'line-through' }}>{course.originalPrice}</span>
                    <span style={{ fontSize: '10px', color: '#54BF44', fontWeight: '700', backgroundColor: 'rgba(84, 191, 68, 0.15)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
                      {course.discount}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                    <a
                      href={`/academy/courses/${course.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.3rem',
                        padding: '0.65rem 0.6rem',
                        borderRadius: '100px',
                        backgroundColor: '#54BF44',
                        color: '#1A2F25',
                        fontSize: '12.5px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        textAlign: 'center'
                      }}
                    >
                      <span>View Details</span>
                      <span>→</span>
                    </a>

                    <a
                      href={`/academy/courses/${course.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.3rem',
                        padding: '0.65rem 0.6rem',
                        borderRadius: '100px',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#FFFFFF',
                        fontSize: '12.5px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        textAlign: 'center'
                      }}
                    >
                      <span>Enroll Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
