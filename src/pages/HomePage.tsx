import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutPage from "./AboutPage";
import Gallery from "../components/Gallery";
import ContactPage from "./ContactPage";
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

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="overflow-x-hidden max-w-full mx-auto">
      <div
        className={`flex flex-col items-center justify-center shadow-custom pt-12 sm:pt-16 pb-48 mt-0 bg-custom-home bg-center bg-cover bg-no-repeat text-white px-4 sm:p-16 text-center mb-8 h-auto md:pt-24 md:pb-48 ${
          window.innerWidth > 850 ? "bg-fixed" : "bg-scroll"
        }`}
      >
        <h1
          className={`mt-8 text-xl sm:text-4xl font-extrabold mb-4 sm:mb-10 leading-normal backdrop-blur bg-customTextBg w-fit rounded-xl px-2 ${
            animate ? "slide-in" : ""
          }`}
        >
          {t("home.title2")}{" "}
          <span className="text-secondary">{t("home.school")}</span> TopalX!
        </h1>
        <p
          className={`text-lg sm:text-2xl md:text-4xl mt-2 sm:mt-4 md:leading-normal -tracking-normal bg-customTextBg w-fit rounded-2xl ${
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
