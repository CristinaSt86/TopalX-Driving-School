// import React, { useRef, useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { useTranslation } from "react-i18next";
// import AboutPage from "./AboutPage";
// import Gallery from "../components/Gallery";
// import ContactPage from "./ContactPage";
// import "../index.css";
// import Button from "../components/Button";

// const HomePage: React.FC = () => {
//   const { t } = useTranslation();
//   const aboutPageRef = useRef<HTMLDivElement>(null);
//   const [animate, setAnimate] = useState(false);

//   const scrollToAboutPage = () => {
//     if (aboutPageRef.current) {
//       aboutPageRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     setAnimate(true);
//   }, [t]);

//   useEffect(() => {
//     const handleTouchMove = (event: TouchEvent) => {
//       if (event.touches.length > 1) {
//         event.preventDefault();
//       }
//     };

//     document.addEventListener("touchmove", handleTouchMove, { passive: false });

//     return () => {
//       document.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, []);

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     additionalType: "http://www.schema.org/DrivingSchool",
//     name: "Scoala de soferi TopalX",
//     description:
//       "Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto.",
//     url: "https://www.topalxscoalaauto.ro",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "Calea Vitan 148A",
//       addressLocality: "București",
//       postalCode: "031301",
//       addressCountry: "RO",
//     },
//     contactPoint: {
//       "@type": "ContactPoint",
//       telephone: "+40736 470 629",
//       contactType: "Customer Service",
//     },
//     sameAs: [
//       "https://www.facebook.com/scoaladesoferitopalx/",
//       "https://www.instagram.com/scoaladesoferitopalx/",
//     ],
//     potentialAction: {
//       "@type": "SearchAction",
//       target: "https://www.topalxscoalaauto.ro/search?q={search_term_string}",
//       "query-input": "required name=search_term_string",
//     },
//     service: {
//       "@type": "Service",
//       serviceType: "Driving Lessons",
//       description:
//         "Professional driving lessons with experienced instructors to help you get your driver's license quickly and efficiently.",
//     },
//   };

//   const breadcrumbData = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Acasa",
//         item: "https://www.topalxscoalaauto.ro",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Prezentare",
//         item: "https://www.topalxscoalaauto.ro/about",
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: "Servicii",
//         item: "https://www.topalxscoalaauto.ro/services",
//       },
//       {
//         "@type": "ListItem",
//         position: 4,
//         name: "Galerie",
//         item: "https://www.topalxscoalaauto.ro/gallery",
//       },
//       {
//         "@type": "ListItem",
//         position: 5,
//         name: "Contact",
//         item: "https://www.topalxscoalaauto.ro/contact",
//       },
//     ],
//   };

//   return (
//     <div className="overflow-x-hidden max-w-full mx-auto">
//       <Helmet>
//         <title>
//           Acasă | sScoala de soferi TopalX | Cea mai bună școală de șoferi din București
//         </title>
//         <meta
//           name="description"
//           content="TopalX | Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
//         />
//         <meta
//           name="keywords"
//           content="școală de șoferi, scoala de soferi in engleza, scoala de soferi cat b pret, scoala de soferi topalx, cursuri de conducere avansate, preturi avantajoase, chestionare auto, scoala rutiera, permis auto, școala de șoferi București,Scoala de soferi TopalX, pregătire examen auto, instructori auto profesioniști, lecții de conducere, școală de șoferi ieftină, școală de șoferi de calitate, școala de șoferi sector 3, școala de șoferi sector 4, mașini moderne"
//         />
//         <meta name="author" content="Scoala de soferi TopalX" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta
//           property="og:title"
//           content="Scoala de soferi TopalX - Cea mai bună școală de șoferi din București"
//         />
//         <meta
//           property="og:description"
//           content="Scoala de soferi TopalX - Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
//         />
//         <meta property="og:url" content="https://www.topalxscoalaauto.ro" />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:image"
//           content="https://www.topalxscoalaauto.ro/images/homepage.jpg"
//         />
//         <meta property="og:locale" content="ro_RO" />
//         <meta property="og:site_name" content="TopalX Scoala Auto" />
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta
//           property="twitter:title"
//           content="Scoala de soferi TopalX - Cea mai bună școală de șoferi din București"
//         />
//         <meta
//           property="twitter:description"
//           content="Scoala de soferi TopalX - Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
//         />
//         <meta
//           property="twitter:image"
//           content="https://www.topalxscoalaauto.ro/images/homepage.jpg"
//         />
//         <meta property="twitter:site" content="@TopalXScoalaAuto" />
//         <meta property="twitter:creator" content="@TopalXScoalaAuto" />
//         <script type="application/ld+json">
//           {JSON.stringify(structuredData)}
//         </script>
//         <script type="application/ld+json">
//           {JSON.stringify(breadcrumbData)}
//         </script>
//       </Helmet>
//       <div
//         className={`flex flex-col items-center justify-center shadow-custom pt-12 sm:pt-16 pb-48 mt-0 bg-custom-home bg-center bg-cover bg-no-repeat text-white px-4 sm:p-16 text-center mb-8 h-auto md:pt-24 md:pb-48 ${
//           window.innerWidth > 850 ? "bg-fixed" : "bg-scroll"
//         }`}
//       >
//         <h1
//           className={`mt-8 text-xl sm:text-4xl font-extrabold mb-4 sm:mb-10 leading-normal backdrop-blur bg-customTextBg w-fit rounded-xl px-2 ${
//             animate ? "slide-in" : ""
//           }`}
//         >
//           {t("home.title2")}{" "}
//           <span className="text-secondary">{t("home.school")}</span> TopalX!
//         </h1>
//         <p
//           className={`text-lg sm:text-2xl md:text-4xl mt-2 sm:mt-4 md:leading-normal -tracking-normal bg-customTextBg w-fit rounded-2xl ${
//             animate ? "slide-in" : ""
//           }`}
//         >
//           {t("home.description")}
//         </p>
//         <Button onClick={scrollToAboutPage} textKey="home.learn_more" />
//       </div>

//       <div ref={aboutPageRef}>
//         <AboutPage />
//         <Gallery />
//         <ContactPage />
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import AboutPage from "./AboutPage";
import Gallery from "../components/Gallery";
import ContactPage from "./ContactPage";
import "../index.css";
import Button from "../components/Button";

type SectionKey = 'home' | 'about' | 'gallery' | 'contact';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<SectionKey>('home');

  useEffect(() => {
    const sections: { key: SectionKey; ref: React.RefObject<HTMLDivElement> }[] = [
      { key: 'about', ref: aboutPageRef },
      { key: 'gallery', ref: galleryRef },
      { key: 'contact', ref: contactPageRef }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(section => section.ref.current === entry.target);
            if (section) {
              setActiveSection(section.key); // `section.key` is correctly typed as `SectionKey`
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold to determine when the section is considered "visible"
    );

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const helmetData: Record<SectionKey, { title: string; description: string }> = {
    home: {
      title: "Acasă | Scoala de soferi TopalX | Cea mai bună școală de șoferi din București",
      description: "TopalX | Școală de șoferi de top în București. Oferim cursuri de conducere avansate, permis auto, și pregătire pentru examen auto."
    },
    about: {
      title: "Prezentare | Scoala de soferi TopalX",
      description: "Prezentarea școlii de șoferi TopalX din București."
    },
    gallery: {
      title: "Galerie | Scoala de soferi TopalX",
      description: "Galerie foto a școlii de șoferi TopalX din București."
    },
    contact: {
      title: "Contact | Scoala de soferi TopalX",
      description: "Contactați școala de șoferi TopalX pentru informații și înscrieri."
    }
  };

  return (
    <div className="overflow-x-hidden max-w-full mx-auto">
      <Helmet>
        <title>{helmetData[activeSection].title}</title>
        <meta name="description" content={helmetData[activeSection].description} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div
        className={`flex flex-col items-center justify-center shadow-custom pt-12 sm:pt-16 pb-48 mt-0 bg-custom-home bg-center bg-cover bg-no-repeat text-white px-4 sm:p-16 text-center mb-8 h-auto md:pt-24 md:pb-48 ${
          window.innerWidth > 850 ? "bg-fixed" : "bg-scroll"
        }`}
      >
        <h1
          className={`mt-8 text-xl sm:text-4xl font-extrabold mb-4 sm:mb-10 leading-normal backdrop-blur bg-customTextBg w-fit rounded-xl px-2`}
        >
          {t("home.title2")}{" "}
          <span className="text-secondary">{t("home.school")}</span> TopalX!
        </h1>
        <p
          className={`text-lg sm:text-2xl md:text-4xl mt-2 sm:mt-4 md:leading-normal -tracking-normal bg-customTextBg w-fit rounded-2xl`}
        >
          {t("home.description")}
        </p>
        <Button onClick={() => aboutPageRef.current?.scrollIntoView({ behavior: 'smooth' })} textKey="home.learn_more" />
      </div>

      <div ref={aboutPageRef}>
        <AboutPage />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <div ref={contactPageRef}>
        <ContactPage />
      </div>
    </div>
  );
};

export default HomePage;
