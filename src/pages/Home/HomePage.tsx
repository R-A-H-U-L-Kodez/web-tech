import * as React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from './sections/HeroSection';
import FullStackSection from './sections/FullStackSection';
import ProcessSection from './sections/ProcessSection';
import WorksSection from './sections/WorksSection';
import ImpactSection from './sections/ImpactSection';
import ContactSection from './sections/ContactSection';
import FAQSection from './sections/FAQSection';

const HomePage: React.FC = () => (
  <>
    <Header />
    <main className="relative z-10">
      <HeroSection />
      <FullStackSection />
      <ProcessSection />
      <WorksSection />
      <ImpactSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  </>
);

export default HomePage;
