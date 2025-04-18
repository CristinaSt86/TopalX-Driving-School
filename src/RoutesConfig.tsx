import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrB";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Services = lazy(() => import("./pages/Services"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Gallery = lazy(() => import("./pages/Gallery"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./components/TermsAndConditions")
);
const FAQ = lazy(() => import("./components/FAQ"));
const BuyNowPayLater = lazy(() => import("./pages/BuyNowPayLater"));

const RoutesConfig: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/testimonials"
            element={<Testimonials testimonials={[]} />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/buy-now-pay-later" element={<BuyNowPayLater />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default RoutesConfig;
