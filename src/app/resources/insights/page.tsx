import { Navbar } from '@/components/Navbar';
import { InsightsHeroSection } from '@/components/resources/InsightsHeroSection';
import { InsightsBentoSection } from '@/components/resources/InsightsBentoSection';
import { InsightsTrendsSection } from '@/components/resources/InsightsTrendsSection';
import { InsightsReportsSection } from '@/components/resources/InsightsReportsSection';
import { InsightsCTASection } from '@/components/resources/InsightsCTASection';
import { Footer } from '@/components/Footer';

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <InsightsHeroSection />
      <InsightsBentoSection />
      <InsightsTrendsSection />
      <InsightsReportsSection />
      <InsightsCTASection />
      <Footer />
    </>
  );
}
