"use client";

import React, { useEffect, useRef } from "react";

interface USPItem {
  icon: string;
  title: string;
  desc: string;
  bg: string;
}

const usps: USPItem[] = [
  {
    icon: "📋",
    title: "Regulation-Aligned Curriculum",
    desc: "Aligned to SEBI, CSRD, NGER, TNFD and other evolving global regulations.",
    bg: "#2D5A3F"
  },
  {
    icon: "🎯",
    title: "Real-Time Expert Access",
    desc: "Direct access to subject matter experts from Big 4s, MBBs, and industry leaders.",
    bg: "#3D7A57"
  },
  {
    icon: "🧪",
    title: "Interactive Learning Formats",
    desc: "Case studies, live tool demos, quizzes, and hands-on workshops.",
    bg: "#1A2F25"
  },
  {
    icon: "🏭",
    title: "Sector-Specific Modules",
    desc: "High-impact learning tailored for Manufacturing, Real Estate, BFSI, and more.",
    bg: "#264D36"
  },
  {
    icon: "🏅",
    title: "Certification Upon Completion",
    desc: "Earn recognized certifications that validate your ESG expertise.",
    bg: "#336347"
  },
  {
    icon: "💻",
    title: "LMS-Powered Experience",
    desc: "Easy tracking, engagement analytics, and seamless learning on our platform.",
    bg: "#2B583E"
  },
  {
    icon: "🌐",
    title: "ESG Strategy & Materiality",
    desc: "Deep dive into materiality assessments, double materiality, and stakeholder mapping.",
    bg: "#274D38"
  },
  {
    icon: "🌿",
    title: "GHG Accounting & Net Zero",
    desc: "Master Scope 1, 2, 3 emissions accounting, carbon offsets, and net-zero roadmaps.",
    bg: "#3A7352"
  },
  {
    icon: "👔",
    title: "CXO Executive Masterclasses",
    desc: "Strategic sustainability leadership sessions designed specifically for C-suite leaders.",
    bg: "#1E3B2E"
  },
  {
    icon: "🎓",
    title: "Career & Big 4 Mentorship",
    desc: "One-on-one resume reviews, mock interviews, and career guidance from ESG practitioners.",
    bg: "#2F5F43"
  }
];

export const AcademyWhySection = () => {
  const count = usps.length;
  const cardWidth = 400;
  const cardHeight = 350;
  const pivotDistance = 760; // Wider wheel radius for a gentler, spacious arch curve
  const angleStep = 360 / count; // 36 degrees per card

  const wheelRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const angleRef = useRef<number>(0);
  const velRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  const dragRef = useRef({ active: false, x: 0 });

  // Direct GPU DOM animation for 60fps continuous rotation
  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;

    const apply = () => {
      if (wheel) {
        wheel.style.transform = `rotate(${angleRef.current}deg)`;
      }
    };
    apply();

    const draw = (now: number) => {
      const dt = lastTimeRef.current ? (now - lastTimeRef.current) / 1000 : 0;
      lastTimeRef.current = now;
      const f = Math.min(dt, 0.1);
      const d = dragRef.current;

      if (!d.active) {
        if (Math.abs(velRef.current) > 0.01) {
          angleRef.current += velRef.current * f;
          velRef.current *= 0.94; // inertia decay
        } else if (!isHoveredRef.current) {
          angleRef.current += 9 * f; // continuous smooth spin (9 deg/sec)
        }
      }

      apply();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { active: true, x: e.clientX };
    velRef.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    d.x = e.clientX;
    const speedFactor = 0.22;
    angleRef.current += dx * speedFactor;
    velRef.current = dx * speedFactor * 50;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    dragRef.current.active = false;
  };

  return (
    <section className="section dark-beige" style={{ paddingTop: "5rem", paddingBottom: "3rem", overflow: "hidden" }}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="solutions-heading-wrap" style={{ alignItems: "flex-start" }}>
          <div className="solutions-heading">
            <h2 className="text-140-regular" style={{ fontSize: "clamp(2.5rem, 6vw, 8rem)" }}>
              Why<br />ReGeneva Academy
            </h2>
          </div>
          <div className="_w-510" style={{ textAlign: "right" }}>
            <div className="text-16-regular brown" style={{ marginBottom: "1.5rem", textAlign: "right" }}>
              Our curriculum combines regulatory depth, real-world relevance,<br />and strategic foresight — helping you lead ESG transformation confidently.
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "flex-end" }}>
              <img src="/assets/6738c2f3a5741ddf29be8a84_brown-1.svg" loading="lazy" alt="" className="brown-icon" style={{ display: "block" }} />
              <img src="/assets/6738c316c8e327ef3cd1b687_brown-2.svg" loading="lazy" alt="" className="brown-icon" style={{ display: "block" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Wheel Arch Container */}
      <div
        style={{
          width: "100%",
          height: "520px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "2.5rem",
          cursor: "grab",
          touchAction: "none",
          userSelect: "none",
        }}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* GPU-accelerated rotating wheel element */}
        <div
          ref={wheelRef}
          style={{
            position: "relative",
            width: cardWidth,
            height: cardHeight,
            transformOrigin: `50% ${pivotDistance}px`,
            willChange: "transform",
          }}
        >
          {usps.map((usp, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                transformOrigin: `50% ${pivotDistance}px`,
                transform: `rotate(${i * angleStep}deg)`,
                zIndex: i + 1,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: usp.bg,
                  borderRadius: "36px",
                  padding: "2.5rem 2.2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
                  border: "1.5px solid rgba(84, 191, 68, 0.4)",
                  color: "#FFFFFF",
                }}
              >
                <div style={{ fontSize: "3.2rem", marginBottom: "1rem", lineHeight: 1 }}>{usp.icon}</div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#54BF44",
                      flexShrink: 0,
                      boxShadow: "0 0 8px #54BF44",
                    }}
                  />
                  <div style={{ color: "#FFFFFF", fontSize: "1.3rem", fontWeight: 700, lineHeight: 1.35 }}>
                    {usp.title}
                  </div>
                </div>

                <div style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.98rem", lineHeight: 1.65 }}>
                  {usp.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
