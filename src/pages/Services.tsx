import React, { useRef, useImperativeHandle, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CarPackages from "../components/CarPackages";
import { Helmet } from "react-helmet-async";
import "../index.css";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import Banner from "../components/Banner";

export interface ServicesRef {
  scrollToPackages: () => void;
}

type Service = {
  name: string;
  description: string;
  available: string;
};

const Services = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const carPackagesRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const scrollToPackages = () => {
    carPackagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useImperativeHandle(ref, () => ({
    scrollToPackages,
  }));

  const services = t("services.serviceList", {
    returnObjects: true,
  }) as Service[];

  useEffect(() => {
    setAnimate(true);
  }, []);


  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.topalxscoalaauto.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.topalxscoalaauto.ro/services",
      },
    ],
  };

  // Organization structured data for the school
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Scoala de soferi TopalX",
    description:
      "Oferim servicii de calitate pentru permis auto și cursuri de conducere defensive la Scoala de soferi TopalX din București.",
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
  };

  return (
    <>
      <div id="services" className={` ${animate ? "slide-in" : ""} `}>
      <Helmet>
          <title>
            Servicii | Scoala de soferi TopalX | Școala de Șoferi din București
          </title>
          <meta
            name="description"
            content="Descoperiți serviciile oferite de Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim diverse pachete pentru permis auto și cursuri de conducere defensive."
          />
          <meta
            name="keywords"
            content="școală de șoferi București, servicii școală de șoferi, pachete permis auto, cursuri de conducere defensive, instructori auto profesioniști, mașini moderne, prețuri accesibile"
          />
          <meta name="author" content="Scoala de soferi TopalX" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            property="og:title"
            content="Servicii - Scoala de soferi TopalX - Școala de Șoferi din București"
          />
          <meta
            property="og:description"
            content="Descoperiți serviciile oferite de Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim diverse pachete pentru permis auto și cursuri de conducere defensive."
          />
          <meta
            property="og:url"
            content="https://www.topalxscoalaauto.ro/services"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.topalxscoalaauto.ro/images/servicii.webp"
          />
          <meta property="og:locale" content="ro_RO" />
          <meta property="og:site_name" content="Scoala de Soferi | TopalX Scoala Auto " />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Servicii - Scoala de soferi TopalX - Școala de Șoferi din București"
          />
          <meta
            property="twitter:description"
            content="Descoperiți serviciile oferite de Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim diverse pachete pentru permis auto și cursuri de conducere defensive."
          />
          <meta
            property="twitter:image"
            content="https://www.topalxscoalaauto.ro/images/servicii.webp"
          />
          <meta property="twitter:site" content="@TopalXScoalaAuto" />
          <meta property="twitter:creator" content="@TopalXScoalaAuto" />
          {/* Structured data scripts for breadcrumbs and organization */}
          <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
          <script type="application/ld+json">{JSON.stringify(organizationData)}</script>
        </Helmet>

        <div
          className={`bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 p-2 mx-auto md:p-6 mb-16 shadow-lg ${
            window.innerWidth > 850 ? "bg-fixed" : "bg-scroll"
          }`}
        >
          <h1 className="text-3xl font-bold text-center mt-16 pl-3 pr-3">
            {t("services.title")}
          </h1>
          <div className="w-16 h-[2px] bg-primary mx-auto my-8"></div>
          <div className="container mx-auto p-4 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
            {services.map((service, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="flex flex-col items-center justify-center h-full">
                      <h2 className="text-xl font-semibold mb-2">
                        {service.name}
                      </h2>
                      <span className="text-green-500 text-center mb-4">
                        {service.available}
                      </span>
                      <div className="flip-icon-container">
                        <PiArrowLeftLight className="flip-arrow" />
                        <PiArrowRightLight className="flip-arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back overflow-y-auto pt-6">
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Banner />
        <CarPackages ref={carPackagesRef} />
      </div>
    </>
  );
});

export default Services;
