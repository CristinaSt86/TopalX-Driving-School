import React, { useRef, useEffect, useState } from "react";

import AboutPage from "./AboutPage";
import Gallery from "../components/Gallery";
import ContactPage from "./ContactPage";
import { useTranslation } from "react-i18next";
import "../index.css";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const scrollToAboutPage = () => {
    if (aboutPageRef.current) {
      aboutPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setAnimate(true);
  }, [t]);

  return (
    <div>
      <div
        className={`shadow-custom pt-12 sm:pt-16 pb-48 mt-0 bg-custom-home bg-center bg-cover bg-fixed text-white px-4 sm:p-16 text-center mb-8 h-auto md:pt-24 md:pb-48`}
      >
        <h1
          className={`mt-8 text-xl sm:text-4xl font-extrabold mb-4 sm:mb-10 leading-normal backdrop-blur ${
            animate ? "slide-in" : ""
          }`}
        >
          {t("home.title2")}{" "}
          <span className="text-secondary">{t("home.school")}</span> TopalX!
        </h1>
        <p
          className={`text-lg sm:text-2xl md:text-4xl mt-2 sm:mt-4 leading-normal -tracking-wide ${
            animate ? "slide-in" : ""
          }`}
        >
          {t("home.description")}
        </p>
        <button
          onClick={scrollToAboutPage}
          className="mt-10 sm:mt-16 bg-white text-textColor py-2 px-4 sm:px-6 rounded-full font-semibold hover:bg-secondary transition duration-300 transform hover:scale-110 sm:hover:scale-150 hover:shadow-lg"
        >
          {t("home.learn_more")}{" "}
          <span className="bounce inline-block">&darr;</span>
        </button>
      </div>

      <div ref={aboutPageRef}>
        <AboutPage />
        <Gallery />
        <ContactPage />
      </div>
    </div>
  );
};

export default HomePage;
