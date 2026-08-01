import { Navbar } from '@/components/Navbar';
import { BlogsHeroSection } from '@/components/resources/BlogsHeroSection';
import { BlogsFeaturedSection } from '@/components/resources/BlogsFeaturedSection';
import { BlogsCategoriesSection } from '@/components/resources/BlogsCategoriesSection';
import { BlogsGridSection } from '@/components/resources/BlogsGridSection';
import { BlogsSubscribeSection } from '@/components/resources/BlogsSubscribeSection';
import { Footer } from '@/components/Footer';

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <BlogsHeroSection />
      <BlogsFeaturedSection />
      <BlogsCategoriesSection />
      <BlogsGridSection />
      <BlogsSubscribeSection />
      <Footer />
    </>
  );
}
