import { Navbar } from '@/components/Navbar';
import { AboutHeroSection } from '@/components/company/AboutHeroSection';
import { AboutCoreMissionSection } from '@/components/company/about/AboutCoreMissionSection';
import { AboutValuesMatrixSection } from '@/components/company/about/AboutValuesMatrixSection';
import { AboutEcosystemTrilogySection } from '@/components/company/about/AboutEcosystemTrilogySection';
import { AboutImpactMetricsSection } from '@/components/company/about/AboutImpactMetricsSection';
import { AboutFAQAccordionSection } from '@/components/company/about/AboutFAQAccordionSection';
import { AboutCommunityCTASection } from '@/components/company/about/AboutCommunityCTASection';
import { Footer } from '@/components/Footer';

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <AboutCoreMissionSection />
      <AboutValuesMatrixSection />
      <AboutEcosystemTrilogySection />
      <AboutImpactMetricsSection />
      <AboutFAQAccordionSection />
      <AboutCommunityCTASection />
      <Footer />
    </>
  );
}
