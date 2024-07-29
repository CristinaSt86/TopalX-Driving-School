import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Team = lazy(() => import("./components/Team"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Services = lazy(() => import("./components/Services"));
const CarPackages = lazy(() => import("./components/CarPackages"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Gallery = lazy(() => import("./components/Gallery"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./components/TermsAndConditions")
);

const RoutesConfig: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<CarPackages />} />
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
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default RoutesConfig;
