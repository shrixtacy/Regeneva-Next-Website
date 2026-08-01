import { Navbar } from '@/components/Navbar';
import { CaseStudiesHeroSection } from '@/components/resources/CaseStudiesHeroSection';
import { CaseStudiesMetricsSection } from '@/components/resources/CaseStudiesMetricsSection';
import { CaseStudiesGridSection } from '@/components/resources/CaseStudiesGridSection';
import { CaseStudiesJourneySection } from '@/components/resources/CaseStudiesJourneySection';
import { CaseStudiesCTASection } from '@/components/resources/CaseStudiesCTASection';
import { Footer } from '@/components/Footer';

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <CaseStudiesHeroSection />
      <CaseStudiesMetricsSection />
      <CaseStudiesGridSection />
      <CaseStudiesJourneySection />
      <CaseStudiesCTASection />
      <Footer />
    </>
  );
}
