import { Navbar } from '@/components/Navbar';
import { AcademyHeroSection } from '@/components/academy/AcademyHeroSection';
import { AcademyWhySection } from '@/components/academy/AcademyWhySection';
import { AcademyOfferingsGrid } from '@/components/academy/AcademyOfferingsGrid';
import { AcademyAudienceSection } from '@/components/academy/AcademyAudienceSection';
import { AcademyCoursesSection } from '@/components/academy/AcademyCoursesSection';
import { AcademyStatsSection } from '@/components/academy/AcademyStatsSection';
import { Footer } from '@/components/Footer';

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <AcademyHeroSection />
      <AcademyWhySection />
      <AcademyOfferingsGrid />
      <AcademyAudienceSection />
      <AcademyCoursesSection />
      <AcademyStatsSection />
      <Footer />
    </>
  );
}
