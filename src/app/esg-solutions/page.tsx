import { Navbar } from '@/components/Navbar';
import { EsgHeroSection } from '@/components/esg-solutions/EsgHeroSection';
import { EsgScopeOverviewSection } from '@/components/esg-solutions/new/EsgScopeOverviewSection';
import { EsgWhyStrategySection } from '@/components/esg-solutions/new/EsgWhyStrategySection';
import { EsgSolutionsMatrixSection } from '@/components/esg-solutions/new/EsgSolutionsMatrixSection';
import { EsgImpactStatsSection } from '@/components/esg-solutions/new/EsgImpactStatsSection';
import { EsgSolutionsFAQSection } from '@/components/esg-solutions/new/EsgSolutionsFAQSection';
import { EsgAdvisoryCTASection } from '@/components/esg-solutions/new/EsgAdvisoryCTASection';
import { Footer } from '@/components/Footer';

export default function EsgSolutionsPage() {
  return (
    <>
      <Navbar />
      <EsgHeroSection />
      <EsgScopeOverviewSection />
      <EsgWhyStrategySection />
      <EsgSolutionsMatrixSection />
      <EsgImpactStatsSection />
      <EsgSolutionsFAQSection />
      <EsgAdvisoryCTASection />
      <Footer />
    </>
  );
}
