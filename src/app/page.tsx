"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ContactOverlay } from "@/components/ContactOverlay";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { CapacitySection } from "@/components/CapacitySection";
import { EffectsSection } from "@/components/EffectsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhoIsForSection } from "@/components/WhoIsForSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CapacitySection />
      <EffectsSection onOpenContact={() => setIsContactOpen(true)} />
      <HowItWorksSection />
      <WhoIsForSection />
      <ComparisonSection />
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactOverlay 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </main>
  );
}
