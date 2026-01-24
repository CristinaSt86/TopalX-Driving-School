import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "../index.css";
import CarCard from "../components/CarCard";
import Team from "../components/Team";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CineSuntemImg from "../components/CineSuntemImg";
import fiat from "../images/fiat3.webp";
import skoda from "../images/sc2.webp";
import mercedes from "../images/mercedes2.webp";
import volvo from "../images/volvo1.webp";
import Button from "../components/Button";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<{ scrollToPackages: () => void }>(null);
  const testimonialsRef = useRef<{ scrollToTestimonials: () => void }>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [animate, setAnimate] = useState(false);

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPackages = () => {
    servicesRef.current?.scrollToPackages();
  };

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollToTestimonials();
  };

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
        name: "About Us",
        item: "https://www.topalxscoalaauto.ro/about",
      },
    ],
  };

  // Organization structured data for the school
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Scoala de soferi TopalX",
    description:
      "Școală de șoferi de top în București, oferim cursuri de conducere defensive și pregătire pentru permis auto.",
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

  const nicknames = t("carCard.nickname", { returnObjects: true }) as string[];

  return (
    <>
      <Helmet>
        <title>
          Despre Noi | Scoala de soferi TopalX | Școala de Șoferi din București
        </title>
        <meta
          name="description"
          content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          name="keywords"
          content="școală de șoferi accesibilă, școală de șoferi București, cursuri de conducere defensive, permis auto, pregătire examen auto, instructori auto profesioniști, mașini moderne, prețuri accesibile"
        />
        <meta name="author" content="Scoala de soferi TopalX" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Despre Noi - Scoala de soferi TopalX - Școala de Șoferi din București"
        />
        <meta
          property="og:description"
          content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          property="og:url"
          content="https://www.topalxscoalaauto.ro/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.topalxscoalaauto.ro/images/about.webp"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="TopalX Scoala Auto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Despre Noi - Scoala de soferi TopalX - Școala de Șoferi din București"
        />
        <meta
          property="twitter:description"
          content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          property="twitter:image"
          content="https://www.topalxscoalaauto.ro/images/about.webp"
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

      <CineSuntemImg />

      {/* PAGE WRAPPER */}
      <div
        id="about"
        className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8"
      >
        {/* TOP GRID: Key info + 2 clickable cards */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {/* 1) Featured card: Mission */}
            <section
              onClick={scrollToTestimonials}
              className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-lg cursor-pointer"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                {t("about.mission.title")}
              </h2>

              {/* Text lung ok aici */}
              <p className="text-base md:text-lg leading-7 font-medium text-gray-800">
                {t("about.mission.description")}
              </p>

              <div className="mt-6 inline-flex items-center text-sm font-semibold text-logoBlue">
                {t("about.mission.seeRev")}
              </div>
            </section>

            {/* 2) Two compact cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-3">
                  {t("about.keyInformation.titleInfo")}
                </h2>
                <ul className="text-base leading-6 list-disc pl-5 font-medium text-gray-800">
                  <li>{t("about.keyInformation.founded")}</li>
                  <li>{t("about.keyInformation.employees")}</li>
                  <li>{t("about.keyInformation.location")}</li>
                </ul>
              </section>

              <section
                onClick={scrollToTeam}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg cursor-pointer"
              >
                <h2 className="text-2xl font-semibold mb-3">
                  {t("about.team.title")}
                </h2>
                <p className="text-base md:text-lg leading-7 font-medium text-gray-800">
                  {t("about.team.description")}
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-semibold text-logoBlue">
                  {t("about.team.meetTeam")}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* COMPANY DESCRIPTION "PAPER CARD" */}
      <section className="mx-auto my-20 w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 bg-yellow-50/70 p-6 sm:p-10 shadow-sm">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">
              {t("about.companyDescription.title")}
            </h1>

            <div className="mx-auto mt-5 h-[2px] w-32 rounded-full bg-gradient-to-r from-logoBlue/20 via-logoBlue to-logoBlue/20" />

            {/* micro-subtitle optional (daca vrei) */}
            {/* <p className="mt-4 text-base text-gray-700">Pasiune, siguranță, rezultate.</p> */}
          </div>

          {/* Text content – modern readability */}
          <div className="mx-auto mt-10 md:mt-16 max-w-[1100px] px-2 sm:px-6">
            <div className="md:columns-2 md:gap-14 text-[16px] md:text-[17px] leading-8 text-gray-900">
              <p className="[break-inside:avoid] mb-6">
                {t("about.companyDescription.paragraph1")}
              </p>
              <p className="[break-inside:avoid] mb-0">
                {t("about.companyDescription.paragraph3")}
              </p>

              <p className="[break-inside:avoid] mb-6">
                {t("about.companyDescription.paragraph2")}
              </p>
            </div>
          </div>

          {/* Cars section */}
          <div className="mt-14">
            <h2 className="text-center text-2xl sm:text-3xl font-bold px-3">
              {t("about.carIntro")}{" "}
              <span className="bounce inline-block">&darr;</span>
            </h2>

            <p className="mt-3 text-center text-lg font-semibold text-gray-800">
              {t("about.categoryB")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
              <CarCard
                name="Mercedes"
                nickname={nicknames[0]}
                image={mercedes}
              />
              <CarCard name="Volvo V40" nickname={nicknames[1]} image={volvo} />
              <CarCard
                name="Skoda Fabia"
                nickname={nicknames[2]}
                image={skoda}
              />
              <CarCard name="Fiat 500" nickname={nicknames[3]} image={fiat} />
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                onClick={scrollToPackages}
                textKey="about.button"
                additionalClasses=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* REST */}
      <div>
        <Team ref={teamRef} />
        <Services ref={servicesRef} />
        <Testimonials ref={testimonialsRef} testimonials={[]} />
      </div>
    </>
  );
};

export default AboutPage;
