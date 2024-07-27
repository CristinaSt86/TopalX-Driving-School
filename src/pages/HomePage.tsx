import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "http://www.schema.org/DrivingSchool",
    "name": "Scoala de soferi TopalX",
    "description": "Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto.",
    "url": "https://www.topalxscoalaauto.ro",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calea Vitan 148A",
      "addressLocality": "București",
      "postalCode": "031301",
      "addressCountry": "RO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+40736 470 629",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.facebook.com/scoaladesoferitopalx/",
      "https://www.instagram.com/scoaladesoferitopalx/"
    ]
  };

  return (
    <div className="overflow-x-hidden max-w-full mx-auto">
      <Helmet>
        <title>Scoala de soferi TopalX | Cea mai bună școală de șoferi din București</title>
        <meta
          name="description"
          content="TopalX  Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
        />
        <meta
          name="keywords"
          content="școală de șoferi, cursuri de conducere avansate, permis auto, școala de șoferi București,Scoala de soferi TopalX, pregătire examen auto, instructori auto profesioniști, lecții de conducere, școală de șoferi ieftină, școală de șoferi de calitate, școala de șoferi sector 3, școala de șoferi sector 4, mașini moderne"
        />
        <meta name="author" content="Scoala de soferi TopalX" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Scoala de soferi TopalX - Cea mai bună școală de șoferi din București" />
        <meta property="og:description" content="Scoala de soferi TopalX - Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto." />
        <meta property="og:url" content="https://www.topalxscoalaauto.ro" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.topalxscoalaauto.ro/images/homepage.jpg" />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="TopalX Scoala Auto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Scoala de soferi TopalX - Cea mai bună școală de șoferi din București" />
        <meta property="twitter:description" content="Scoala de soferi TopalX - Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto." />
        <meta property="twitter:image" content="https://www.topalxscoalaauto.ro/images/homepage.jpg" />
        <meta property="twitter:site" content="@TopalXScoalaAuto" />
        <meta property="twitter:creator" content="@TopalXScoalaAuto" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
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
