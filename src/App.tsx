
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FullStackSection from './components/FullStackSection';
import ProcessSection from './components/ProcessSection';
import ImpactSection from './components/ImpactSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import ClickSpark from './components/ClickSpark';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load route-based components to reduce initial bundle
const AboutPage = React.lazy(() => import('./components/AboutPage'));
const ResourcesPage = React.lazy(() => import('./components/ResourcesPage'));
const CareersPage = React.lazy(() => import('./components/CareersPage'));
const PrivacyPolicyPage = React.lazy(() => import('./components/PrivacyPolicyPage'));
const TermsOfServicePage = React.lazy(() => import('./components/TermsOfServicePage'));

// Fallback component for lazy loading
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-slate-600 dark:text-slate-400">Loading...</div>
  </div>
);

// Home page component
const HomePage = () => (
  <>
    <Header />
    <main className="relative z-10">
      <HeroSection />
      <FullStackSection />
      <ProcessSection />
      <ImpactSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  </>
);

// Layout wrapper for other pages
const PageLayout: React.FC<{ children: React.ReactNode; isPrivacyPage?: boolean }> = ({ children, isPrivacyPage = false }) => (
  <>
    <Header isPrivacyPage={isPrivacyPage} />
    <div className="relative z-10">
      {children}
      <Footer />
    </div>
  </>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <AuroraBackground />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<PageLayout><Suspense fallback={<LoadingFallback />}><AboutPage /></Suspense></PageLayout>} />
            <Route path="/resources" element={<PageLayout><Suspense fallback={<LoadingFallback />}><ResourcesPage /></Suspense></PageLayout>} />
            <Route path="/careers" element={<PageLayout><Suspense fallback={<LoadingFallback />}><CareersPage /></Suspense></PageLayout>} />
            <Route path="/privacy" element={<PageLayout isPrivacyPage={true}><Suspense fallback={<LoadingFallback />}><PrivacyPolicyPage /></Suspense></PageLayout>} />
            <Route path="/terms" element={<PageLayout isPrivacyPage={true}><Suspense fallback={<LoadingFallback />}><TermsOfServicePage /></Suspense></PageLayout>} />
          </Routes>
        </ClickSpark>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
