import { Navbar } from '@/components/Navbar';
import { ClientsHeroSection } from '@/components/company/ClientsHeroSection';
import { ClientsLogoWall } from '@/components/company/ClientsLogoWall';
import { ClientsTestimonials } from '@/components/company/ClientsTestimonials';
import { ClientsProjects } from '@/components/company/ClientsProjects';
import { ClientsCTA } from '@/components/company/ClientsCTA';
import { Footer } from '@/components/Footer';

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <ClientsHeroSection />
      <ClientsLogoWall />
      <ClientsTestimonials />
      <ClientsProjects />
      <ClientsCTA />
      <Footer />
    </>
  );
}
