import React, { useRef, useImperativeHandle, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CarPackages from "../components/CarPackages";
import { Helmet } from "react-helmet-async";
import "../index.css";
import Banner from "../components/Banner";
import { Icon } from "@iconify/react";

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
          <meta
            property="og:site_name"
            content="Scoala de Soferi | TopalX Scoala Auto "
          />
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
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbData)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(organizationData)}
          </script>
        </Helmet>

        <div className="bg-yellow-50/70 py-14 sm:py-16 shadow-sm">
  {/* WRAPPER max width */}
  <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
    <header className="text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        {t("services.title")}
      </h1>
      <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-logoBlue/60" />
      <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
         {t("services.subtitluServ")}
      </p>
    </header>

    {/* GRID – max-width se aplică prin wrapper */}
    <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {services.map((service, index) => (
        <article
          key={index}
          className="
            group rounded-2xl border border-black/10 bg-white p-6
            shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg
          "
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {service.name}
            </h2>

            {/* status badge */}
            <span className="shrink-0 inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200">
              {service.available}
            </span>
          </div>

          {/* Description – clamp pentru premium UI (optional) */}
          <p className="mt-4 text-sm sm:text-base leading-6 text-gray-700 line-clamp-4">
            {service.description}
          </p>

          {/* micro CTA */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-logoBlue">
    
          </div>
        </article>
      ))}
    </div>
  </div>
</div>


        <Banner />
        <CarPackages ref={carPackagesRef} />
      </div>
    </>
  );
});

export default Services;
