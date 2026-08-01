import { Navbar } from '@/components/Navbar';
import { CoursesGridSection } from '@/components/academy/courses/CoursesGridSection';
import { CoursesMethodologySection } from '@/components/academy/courses/CoursesMethodologySection';
import { CoursesCorporateSection } from '@/components/academy/courses/CoursesCorporateSection';
import { CoursesFAQSection } from '@/components/academy/courses/CoursesFAQSection';
import { CoursesCTASection } from '@/components/academy/courses/CoursesCTASection';
import { Footer } from '@/components/Footer';
import { Suspense } from 'react';

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '30px', backgroundColor: '#1A2F25' }}>
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center', color: '#FFFFFF' }}>Loading Courses Directory...</div>}>
          <CoursesGridSection />
        </Suspense>
      </div>
      <CoursesMethodologySection />
      <CoursesCorporateSection />
      <CoursesFAQSection />
      <CoursesCTASection />
      <Footer />
    </>
  );
}
