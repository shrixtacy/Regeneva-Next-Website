"use client";

import React from "react";

export const SolutionSection: React.FC = () => {
  return (
    <section id="Our-Solution" style={{ padding: "6rem 2rem", background: "#e9e1d1" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Solution Header */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "5rem", color: "#1a3323", fontWeight: 400, lineHeight: 1, marginBottom: "1.5rem" }}>
            The solution
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#4a3e35", maxWidth: "600px", lineHeight: "1.6" }}>
            Confronted with the devastating impact of waste, we knew something had to change. That’s why we launched our mobile waste processing plants, delivering an innovative solution that can go wherever it&#39;s needed.
          </p>
        </div>

        {/* Main Plant Visual */}
        <div style={{ marginBottom: "5rem", textAlign: "center" }}>
          <img 
            src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/6738e950d57d477447a62624_main-kv-min.webp" 
            alt="Saapro Mobile Waste Processing Plant" 
            style={{ width: "100%", maxHeight: "550px", objectFit: "cover", borderRadius: "2rem", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          />
        </div>

        {/* Why Saapro Section */}
        <div id="why-saapro" style={{ paddingTop: "2rem" }}>
          <div style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#54BF44", fontWeight: 600, marginBottom: "1rem" }}>
            Why Saapro
          </div>
          <h2 style={{ fontSize: "3rem", color: "#1a3323", fontWeight: 400, marginBottom: "3rem" }}>
            Revolutionary Mobile Waste Management Solution
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {/* 001 Efficient */}
            <div style={{ background: "#f4efe6", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "0.875rem", color: "#a39b8c", fontWeight: 600 }}>001</span>
              <h3 style={{ fontSize: "2rem", color: "#1a3323", marginTop: "0.5rem", marginBottom: "1.5rem" }}>Efficient</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", color: "#3d342d", fontSize: "0.95rem" }}>
                <li>✓ No waste pre-treatment required</li>
                <li>✓ Rapidly deployed to any location</li>
                <li>✓ Total waste disposal of all waste types</li>
                <li>✓ Accepts organic, paper, plastic, metal, glass, medical waste & rubber</li>
                <li>✓ Processes waste with up to 80% moisture</li>
              </ul>
            </div>

            {/* 002 Eco-friendly */}
            <div style={{ background: "#f4efe6", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "0.875rem", color: "#a39b8c", fontWeight: 600 }}>002</span>
              <h3 style={{ fontSize: "2rem", color: "#1a3323", marginTop: "0.5rem", marginBottom: "1.5rem" }}>Eco-friendly</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", color: "#3d342d", fontSize: "0.95rem" }}>
                <li>✓ Destruction rather than incineration of MSW</li>
                <li>✓ Avoids handling toxic ash residue</li>
                <li>✓ Reduces disease risk & CO2 emissions</li>
                <li>✓ Zero pollution and ash-free</li>
                <li>✓ Closed lifecycle with no emissions to air or water</li>
              </ul>
            </div>

            {/* 003 Economical */}
            <div style={{ background: "#f4efe6", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "0.875rem", color: "#a39b8c", fontWeight: 600 }}>003</span>
              <h3 style={{ fontSize: "2rem", color: "#1a3323", marginTop: "0.5rem", marginBottom: "1.5rem" }}>Economical</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", color: "#3d342d", fontSize: "0.95rem" }}>
                <li>✓ Short construction & setup time (~3 months)</li>
                <li>✓ Reduced labor and upkeep costs</li>
                <li>✓ Generates operational energy independently</li>
                <li>✓ Unlimited processing capacity</li>
                <li>✓ &gt;30% MSW weight converted into biofuel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
