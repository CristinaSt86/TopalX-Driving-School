// ./src/App.tsx
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import BackToTopButton from "./components/BackToTopButton";
import { LanguageProvider } from "./LanguageContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import RoutesConfig from "./RoutesConfig";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <Suspense fallback={<Loader />}>
              <Header />
              <RoutesConfig />
              <BackToTopButton />
              <Footer />
            </Suspense>
          </LanguageProvider>
        </I18nextProvider>
      </main>
    </div>
  );
};

export default App;
