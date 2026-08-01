import { Navbar } from '@/components/Navbar';
import { CompanyHeroSection } from '@/components/company/CompanyHeroSection';
import { CompanyMissionGrid } from '@/components/company/CompanyMissionGrid';
import { CompanyMilestones } from '@/components/company/CompanyMilestones';
import { CompanyLeadership } from '@/components/company/CompanyLeadership';
import { CompanyGovernance } from '@/components/company/CompanyGovernance';
import { Footer } from '@/components/Footer';

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <CompanyHeroSection />
      <CompanyMissionGrid />
      <CompanyMilestones />
      <CompanyLeadership />
      <CompanyGovernance />
      <Footer />
    </>
  );
}
