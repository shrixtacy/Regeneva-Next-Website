"use client";

import React from "react";

export const WhoIsForSection: React.FC = () => {
  const sectors = [
    {
      num: "001",
      title: "Governments & Municipalities",
      desc: "Saapro helps cities and municipal authorities handle rapidly growing waste disposal needs efficiently, reducing landfill footprint."
    },
    {
      num: "002",
      title: "Real Estate Developers",
      desc: "Enables on-site waste management in residential communities and mega-projects, eliminating construction and community transport costs."
    },
    {
      num: "003",
      title: "Manufacturing & Industrial",
      desc: "Efficiently processes industrial waste streams and converts waste into usable operational energy on-site."
    },
    {
      num: "004",
      title: "Hospitals & Clinics",
      desc: "Processes hazardous medical waste safely on-site with zero harmful atmospheric emissions or toxic ash."
    },
    {
      num: "005",
      title: "Agricultural Sector",
      desc: "Converts farm organic waste and food production waste into clean biofuels, reducing agricultural environmental footprint."
    }
  ];

  return (
    <section id="who-is-for" style={{ padding: "6rem 2rem", background: "#e9e1d1" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "3.5rem", color: "#1a3323", fontWeight: 400 }}>
            Who Saapro is for
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {sectors.map((s) => (
            <div key={s.num} style={{ background: "#f4efe6", padding: "2.5rem", borderRadius: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.875rem", color: "#54BF44", fontWeight: 700 }}>{s.num}</span>
                <h3 style={{ fontSize: "1.75rem", color: "#1a3323", marginTop: "0.75rem", marginBottom: "1rem", fontWeight: 400 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#4a3e35", lineHeight: "1.6" }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
