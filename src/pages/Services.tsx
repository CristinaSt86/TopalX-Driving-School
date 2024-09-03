import React, { useRef, useImperativeHandle, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CarPackages from "../components/CarPackages";
import { Helmet } from "react-helmet-async";
import "../index.css";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import Button from "../components/Button";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            content="https://www.topalxscoalaauto.ro/images/services.jpg"
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
            content="https://www.topalxscoalaauto.ro/images/services.jpg"
          />
          <meta property="twitter:site" content="@TopalXScoalaAuto" />
          <meta property="twitter:creator" content="@TopalXScoalaAuto" />
        </Helmet>

        <div
          className={`bg-custom-services bg-center bg-cover bg-no-repeat p-2 mx-auto md:p-6 border-2 border-solid border-white mt-8 mb-16 ${
            window.innerWidth > 850 ? "bg-fixed" : "bg-scroll"
          }`}
        >
          <h1 className="text-3xl font-bold text-center text-white mt-16 mb-16 pl-3 pr-3">
            {t("services.title")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
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

        <div
          className="bg-primary text-white py-8 px-4 text-center shadow-lg alternating-banner"
          style={{ marginBottom: "2rem" }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Cumperi acum, plătești mai târziu!
          </h2>
          <p className="mb-4 text-lg">
            Profitați de oferta noastră specială: 4 rate fără dobândă pentru
            cumpărături de până în 2.000 lei. Aprobarea pe loc, direct în
            magazin!
          </p>
          <Button
            onClick={() => scrollToSection("buy-now-section")}
            textKey="home.learn_more"
            additionalClasses=" border-4 border-secondary "
          />
        </div>

        <CarPackages ref={carPackagesRef} />
      </div>
    </>
  );
});

export default Services;
