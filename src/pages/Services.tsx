import React, { useRef, useImperativeHandle, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CarPackages from "../components/CarPackages"
import { Helmet } from "react-helmet";
import "../index.css";

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

  return (
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
        <ul className="bg-customBg rounded-2xl p-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="w-fit bg-white rounded-r-xl shadow-md p-2 mb-4"
            >
              <h2 className="text-xl font-semibold underline">
                {service.name}
              </h2>
              <p>{service.description}</p>
              <span className="text-green-500">{service.available}</span>
            </li>
          ))}
        </ul>
      </div>
      <CarPackages ref={carPackagesRef} />
    </div>
  );
});

export default Services;
