// ./src/App.tsx
import React, { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import BackToTopButton from "./components/BackToTopButton";
import { LanguageProvider } from "./LanguageContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import RoutesConfig from "./RoutesConfig";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  console.error = (() => {
    const error = console.error;
    return (...args) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("UNSAFE_componentWillMount")
      ) {
        return;
      }
      error(...args);
    };
  })();

  
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <Suspense fallback={<Loader />}>
              <Layout>
                <ScrollToTop />
                <Header />
                <RoutesConfig />
                <BackToTopButton />
                <Footer />
              </Layout>
            </Suspense>
          </LanguageProvider>
        </I18nextProvider>
      </main>
    </div>
  );
};

export default App;
