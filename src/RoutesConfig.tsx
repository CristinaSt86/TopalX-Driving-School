// ./src/RoutesConfig.tsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import PageTransition from "./components/PageTransition";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Gallery = lazy(() => import("./components/Gallery"));

const RoutesConfig: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition duration={1000}>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition duration={1000}>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition duration={1000}>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/testimonials"
          element={
            <PageTransition duration={1000}>
              <Testimonials testimonials={[]} />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition duration={1000}>
              <Gallery />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition duration={1000}>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
