import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { EffectsSection } from '@/components/EffectsSection';
import { ComparisonSection } from '@/components/ComparisonSection';
import { TeamSection } from '@/components/TeamSection';
import { AwardsSection } from '@/components/AwardsSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <EffectsSection />
      <ComparisonSection />
      <TeamSection />
      <AwardsSection />
      <Footer />
    </>
  );
}