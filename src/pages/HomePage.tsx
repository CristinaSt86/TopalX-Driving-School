import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import AboutPage from "./AboutPage";
import Gallery from "./Gallery";
import ContactPage from "./ContactPage";
import "../index.css";
import Button from "../components/Button";
import Acasa from "../components/Acasa";
import BuyNowPayLater from "./BuyNowPayLater";
import poza1 from "../images/bgHome2.webp";
import poza2 from "../images/bg3.webp";
import poza3 from "../images/bg4.webp";

const backgroundImages = [
  {
    image: poza1,
    title: "Slide 1 Title",
    description: "This is the description for Slide 1.",
  },
  {
    image: poza2,
    title: "Slide 2 Title",
    description: "This is the description for Slide 2.",
  },
  {
    image: poza3,
    title: "Slide 3 Title",
    description: "This is the description for Slide 3.",
  },
];

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
    additionalType: "http://www.schema.org/DrivingSchool",
    name: "Scoala de soferi TopalX",
    description:
      "Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto.",
    url: "https://www.topalxscoalaauto.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calea Vitan 148A",
      addressLocality: "București",
      postalCode: "031301",
      addressCountry: "RO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40736 470 629",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://www.facebook.com/scoaladesoferitopalx/",
      "https://www.instagram.com/scoaladesoferitopalx/",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.topalxscoalaauto.ro/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    service: {
      "@type": "Service",
      serviceType: "Driving Lessons",
      description:
        "Professional driving lessons with experienced instructors to help you get your driver's license quickly and efficiently.",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasa",
        item: "https://www.topalxscoalaauto.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prezentare",
        item: "https://www.topalxscoalaauto.ro/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Servicii",
        item: "https://www.topalxscoalaauto.ro/services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Galerie",
        item: "https://www.topalxscoalaauto.ro/gallery",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://www.topalxscoalaauto.ro/contact",
      },
    ],
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div id="home" className="overflow-x-hidden max-w-full mx-auto">
      <Helmet>
        <title>
          Acasă | Scoala de soferi TopalX | Cea mai bună școală de șoferi din
          București
        </title>
        <meta
          name="description"
          content="TopalX | Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
        />
        <meta
          name="keywords"
          content="școală de șoferi, scoala de soferi in engleza, scoala de soferi cat b pret, scoala de soferi topalx, cursuri de conducere avansate, preturi avantajoase, chestionare auto, scoala rutiera, permis auto, școala de șoferi București,Scoala de soferi TopalX, pregătire examen auto, instructori auto profesioniști, lecții de conducere, școală de șoferi ieftină, școală de șoferi de calitate, școala de șoferi sector 3, școala de șoferi sector 4, mașini moderne"
        />
        <meta name="author" content="Scoala de soferi TopalX" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Scoala de soferi TopalX - Cea mai bună școală de șoferi din București"
        />
        <meta
          property="og:description"
          content="Scoala de soferi TopalX - Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
        />
        <meta property="og:url" content="https://www.topalxscoalaauto.ro" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.topalxscoalaauto.ro/images/homepage.jpg"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="TopalX Scoala Auto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Scoala de soferi TopalX - Cea mai bună școală de șoferi din București"
        />
        <meta
          property="twitter:description"
          content="Scoala de soferi TopalX - Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
        />
        <meta
          property="twitter:image"
          content="https://www.topalxscoalaauto.ro/images/homepage.jpg"
        />
        <meta property="twitter:site" content="@TopalXScoalaAuto" />
        <meta property="twitter:creator" content="@TopalXScoalaAuto" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>
      <div
        className={`flex flex-col items-center justify-center shadow-custom  pb-48 mt-0 text-white px-4 sm:p-16 text-center mb-10 h-auto pt-32 md:pt-48 md:pb-48 ${
          window.innerWidth > 850 ? "bg-fixed" : "bg-scroll"
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out", // Smooth transition effect
        }}
      >
        <h1
          className={`mt-2 text-xl sm:text-4xl font-extrabold mb-4 sm:mb-10 leading-normal bg-customTextBg w-fit rounded-md px-2 ${
            animate ? "slide-in" : ""
          }`}
        >
          {t("home.title2")}{" "}
          <span className="text-secondary">{t("home.school")}</span> TopalX!
        </h1>

        <p
          className={`text-lg sm:text-2xl md:text-4xl mt-2 sm:mt-4 md:leading-normal -tracking-normal bg-customTextBg w-fit rounded-md ${
            animate ? "slide-in" : ""
          }`}
        >
          {t("home.description")}
        </p>

        <Button
          onClick={scrollToAboutPage}
          textKey="home.learn_more"
          additionalClasses="mt-16"
        />
      </div>

      <div ref={aboutPageRef}>
        <AboutPage />
        <Gallery />
        <BuyNowPayLater />
        <ContactPage />
        <Acasa />
      </div>
    </div>
  );
};

export default HomePage;
