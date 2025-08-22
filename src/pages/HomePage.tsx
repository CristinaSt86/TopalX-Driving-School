import React, { useRef, useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import AboutPage from "./AboutPage";
import Gallery from "./Gallery";
import ContactPage from "./ContactPage";
import "../index.css";
import Button from "../components/Button";
import Acasa from "../components/Acasa";
import BuyNowPayLater from "./BuyNowPayLater";
//import Snowflakes from "../components/Snowflakes";
//import SnowfallCanvas from "../components/SnowfallCanvas";

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

  return (
    <div id="home" className="overflow-x-hidden max-w-full mx-auto">
      <Helmet>
        <title>
          Acasă | Școala de șoferi TopalX | Școala de șoferi apreciată pentru profesionalism și rezultate excelente în București.
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
          content="Școala de șoferi TopalX | Școala de șoferi apreciată pentru profesionalism și rezultate excelente în București"
        />
        <meta
          property="og:description"
          content="Scoala de soferi TopalX - Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
        />
        <meta property="og:url" content="https://www.topalxscoalaauto.ro" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.topalxscoalaauto.ro/images/bgHome2.webp"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="TopalX Scoala Auto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Școala de șoferi TopalX | Școala de șoferi apreciată pentru profesionalism și rezultate excelente în București"
        />
        <meta
          property="twitter:description"
          content="Scoala de soferi TopalX - Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
        />
        <meta
          property="twitter:image"
          content="https://www.topalxscoalaauto.ro/images/bgHome2.webp"
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
        className={`bg-custom-home bg-cover bg-center bg-fixed flex flex-col items-center justify-center shadow-custom pb-28 mt-0 text-white px-4 sm:p-16 text-center mb-10 h-auto pt-32 md:pt-48 md:pb-48 ${
          window.innerWidth > 850 ? "bg-fixed" : "bg-scroll"
        }`}
      >
        {/* <SnowfallCanvas /> */}
        <h1
          className={`mt-2 text-xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-10 leading-normal bg-black/70 w-fit rounded-md px-2 ${
            animate ? "slide-in" : ""
          }`}
        >
          {t("home.title2")}{" "}
          <span className="text-secondary">{t("home.school")}</span> TopalX!
        </h1>

        <p
          className={`text-lg sm:text-2xl md:text-3xl text-white mt-2 sm:mt-4 md:leading-normal -tracking-normal bg-black/70 w-fit rounded-md ${
            animate ? "slide-in" : ""
          }`}
        >
          {t("home.description")}
        </p>

        <Button
          onClick={scrollToAboutPage}
          textKey="home.learn_more"
          additionalClasses="mt-10 md:mt-14"
        />
      </div>

      <div ref={aboutPageRef}>
        <Suspense fallback={<div className="text-center p-8">Se încarcă prezentarea...</div>}>
          <AboutPage />
        </Suspense>

        <Suspense fallback={<div className="text-center p-8">Se încarcă galeria...</div>}>
          <Gallery />
        </Suspense>

        <Suspense fallback={<div className="text-center p-8">Se încarcă oferta...</div>}>
          <BuyNowPayLater />
        </Suspense>

        <Suspense fallback={<div className="text-center p-8">Se încarcă pagina de contact...</div>}>
          <ContactPage />
        </Suspense>

        <Suspense fallback={<div className="text-center p-8">Se încarcă secțiunea finală...</div>}>
          <Acasa />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import poza1 from "../images/bgHome2.webp";
// import poza2 from "../images/bg3.webp";
// import poza3 from "../images/bg4.webp";
// import "../index.css";

// const HomePage: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const backgroundImages = [
//     {
//       image: poza1,
//       title: "Slide 1 Title",
//       description: "This is the description for Slide 1.",
//       buttonLabel: "Learn More",
//       buttonLink: "#about",
//     },
//     {
//       image: poza2,
//       title: "Slide 2 Title",
//       description: "This is the description for Slide 2.",
//       buttonLabel: "Our Services",
//       buttonLink: "#services",
//     },
//     {
//       image: poza3,
//       title: "Slide 3 Title",
//       description: "This is the description for Slide 3.",
//       buttonLabel: "Contact Us",
//       buttonLink: "#contact",
//     },
//   ];

//   // Update slide every 5 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevIndex) =>
//         prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // 5 seconds per slide

//     return () => clearInterval(intervalId);
//   }, [backgroundImages.length]);

//   return (
//     <div className="relative overflow-hidden h-screen">
//       <div className="flex transition-transform duration-1000 ease-in-out"
//         style={{
//           transform: `translateX(-${currentSlide * 100}%)`,
//         }}
//       >
//         {backgroundImages.map((slide, index) => (
//           <div
//             key={index}
//             className="w-full h-screen flex-shrink-0 flex flex-col items-center justify-center text-center"
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",

//             }}
//           >
//             <h1 className="text-4xl font-bold text-white mb-4">
//               {slide.title}
//             </h1>
//             <p className="text-xl text-white mb-6">{slide.description}</p>
//             <Link
//               to={slide.buttonLink}
//               className="bg-white text-black py-2 px-4 rounded-full"
//             >
//               {slide.buttonLabel}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
