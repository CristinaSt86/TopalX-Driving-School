import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Gallery = lazy(() => import("./components/Gallery"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./components/TermsAndConditions")
);
const FAQ = lazy(() => import("./components/FAQ"));

const RoutesConfig: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/services" element={<Services />} />
        {/* <Route path="/packages" element={<CarPackages />} /> */}
        <Route
          path="/testimonials"
          element={<Testimonials testimonials={[]} />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
