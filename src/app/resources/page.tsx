import { Navbar } from '@/components/Navbar';
import { ResourcesHeroSection } from '@/components/resources/ResourcesHeroSection';
import { ResourcesCategories } from '@/components/resources/ResourcesCategories';
import { ResourcesFeatured } from '@/components/resources/ResourcesFeatured';
import { ResourcesTools } from '@/components/resources/ResourcesTools';
import { ResourcesCTA } from '@/components/resources/ResourcesCTA';
import { Footer } from '@/components/Footer';

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <ResourcesHeroSection />
      <ResourcesCategories />
      <ResourcesFeatured />
      <ResourcesTools />
      <ResourcesCTA />
      <Footer />
    </>
  );
}
