import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/Home/HomePage';

const AboutPage = React.lazy(() => import('@/pages/About/AboutPage'));
const ResourcesPage = React.lazy(() => import('@/pages/Resources/ResourcesPage'));
const CareersPage = React.lazy(() => import('@/pages/Careers/CareersPage'));
const PrivacyPolicyPage = React.lazy(() => import('@/pages/Legal/PrivacyPolicyPage'));
const TermsOfServicePage = React.lazy(() => import('@/pages/Legal/TermsOfServicePage'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-slate-600 dark:text-slate-400">Loading...</div>
  </div>
);

const PageLayout: React.FC<{ children: React.ReactNode; isPrivacyPage?: boolean }> = ({ children, isPrivacyPage = false }) => (
  <>
    <Header isPrivacyPage={isPrivacyPage} />
    <div className="relative z-10">
      {children}
      <Footer />
    </div>
  </>
);

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route
      path="/about"
      element={(
        <PageLayout>
          <React.Suspense fallback={<LoadingFallback />}>
            <AboutPage />
          </React.Suspense>
        </PageLayout>
      )}
    />
    <Route
      path="/resources"
      element={(
        <PageLayout>
          <React.Suspense fallback={<LoadingFallback />}>
            <ResourcesPage />
          </React.Suspense>
        </PageLayout>
      )}
    />
    <Route
      path="/careers"
      element={(
        <PageLayout>
          <React.Suspense fallback={<LoadingFallback />}>
            <CareersPage />
          </React.Suspense>
        </PageLayout>
      )}
    />
    <Route
      path="/privacy"
      element={(
        <PageLayout isPrivacyPage={true}>
          <React.Suspense fallback={<LoadingFallback />}>
            <PrivacyPolicyPage />
          </React.Suspense>
        </PageLayout>
      )}
    />
    <Route
      path="/terms"
      element={(
        <PageLayout isPrivacyPage={true}>
          <React.Suspense fallback={<LoadingFallback />}>
            <TermsOfServicePage />
          </React.Suspense>
        </PageLayout>
      )}
    />
  </Routes>
);

export default AppRoutes;
