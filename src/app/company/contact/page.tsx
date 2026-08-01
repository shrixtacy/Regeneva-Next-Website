import { Navbar } from '@/components/Navbar';
import { ContactHeroSection } from '@/components/company/ContactHeroSection';
import { ContactFAQSection } from '@/components/company/ContactFAQSection';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHeroSection />
      <ContactFAQSection />
      <Footer />
    </>
  );
}
