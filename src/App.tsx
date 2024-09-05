import React, { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import BackToTopButton from "./components/BackToTopButton";
import { LanguageProvider } from "./LanguageContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { HelmetProvider } from "react-helmet-async";
import RoutesConfig from "./RoutesConfig";
import CookieConsent from "./components/CookieConsent";


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <Suspense fallback={<Loader />}>
              {/* <ScrollToTop /> */}
              <Header />
              <HelmetProvider>
                <RoutesConfig />
              </HelmetProvider>
              <BackToTopButton />
              <Footer />
              <CookieConsent />
            </Suspense>
          </LanguageProvider>
        </I18nextProvider>
      </main>
    </div>
  );
};

export default App;
