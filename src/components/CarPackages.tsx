import React, { ForwardedRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import mer from "../images/mer.webp";
import vol from "../images/vol.webp";
import f3 from "../images/f3.webp";
import sk1 from "../images/sk1.webp";
import Offer from "./Offer";

interface CarPackage {
  name: string;
  price: string;
  transmission: string;
  fuelType: string;
  features: string[];
  note: string;
  image: string;
}

const CarPackages = React.forwardRef<HTMLDivElement>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { t } = useTranslation();
    // const navigate = useNavigate();

    const carPackages: CarPackage[] = [
      {
        name: t("carPackages.packages.0.name"),
        price: t("carPackages.packages.0.price"),
        transmission: t("carPackages.packages.0.transmission"),
        fuelType: t("carPackages.packages.0.fuelType"),
        features: [
          t("carPackages.packages.0.features.0"),
          t("carPackages.packages.0.features.1"),
          t("carPackages.packages.0.features.2"),
          t("carPackages.packages.0.features.3"),
          t("carPackages.packages.0.features.4"),
        ],
        note: t("carPackages.packages.0.note"),
        image: mer,
      },
      {
        name: t("carPackages.packages.1.name"),
        price: t("carPackages.packages.1.price"),
        transmission: t("carPackages.packages.1.transmission"),
        fuelType: t("carPackages.packages.1.fuelType"),
        features: [
          t("carPackages.packages.1.features.0"),
          t("carPackages.packages.1.features.1"),
          t("carPackages.packages.1.features.2"),
          t("carPackages.packages.1.features.3"),
          t("carPackages.packages.1.features.4"),
        ],
        note: t("carPackages.packages.1.note"),
        image: vol,
      },
      {
        name: t("carPackages.packages.2.name"),
        price: t("carPackages.packages.2.price"),
        transmission: t("carPackages.packages.2.transmission"),
        fuelType: t("carPackages.packages.2.fuelType"),
        features: [
          t("carPackages.packages.2.features.0"),
          t("carPackages.packages.2.features.1"),
          t("carPackages.packages.2.features.2"),
          t("carPackages.packages.2.features.3"),
          t("carPackages.packages.2.features.4"),
        ],
        note: t("carPackages.packages.2.note"),
        image: f3,
      },
      {
        name: t("carPackages.packages.3.name"),
        price: t("carPackages.packages.3.price"),
        transmission: t("carPackages.packages.3.transmission"),
        fuelType: t("carPackages.packages.3.fuelType"),
        features: [
          t("carPackages.packages.3.features.0"),
          t("carPackages.packages.3.features.1"),
          t("carPackages.packages.3.features.2"),
          t("carPackages.packages.3.features.3"),
          t("carPackages.packages.3.features.4"),
        ],
        note: t("carPackages.packages.3.note"),
        image: sk1,
      },
    ];

    // const goToContactPage = () => {
    //   navigate("/contact");
    // };

   

    return (
      <div ref={ref}>
        <Helmet>
          <title>
            Pachete Auto | Scoala de soferi TopalX | Școala de Șoferi din
            București
          </title>
          <meta
            name="description"
            content="Descoperă pachetele auto oferite de Scoala de soferi TopalX - școală de șoferi din București. Alege dintre mașini moderne și instrucție profesională pentru a obține permisul auto."
          />
          <meta
            name="keywords"
            content="pachete auto, școală de șoferi, Scoala de soferi TopalX, cursuri de conducere, permis auto, mașini moderne, școală de șoferi București, instructori profesioniști, transmisie manuală, transmisie automată"
          />
          <meta name="author" content="Scoala de soferi TopalX" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="Pachete Auto - Scoala de soferi TopalX - Școala de Șoferi din București"
          />
          <meta
            property="og:description"
            content="Descoperă pachetele auto oferite de Scoala de soferi TopalX - școală de șoferi din București. Alege dintre mașini moderne și instrucție profesională pentru a obține permisul auto."
          />
          <meta
            property="og:url"
            content="https://www.topalxscoalaauto.ro/car-packages"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.topalxscoalaauto.ro/images/car-packages.jpg"
          />
          <meta property="og:locale" content="ro_RO" />
          <meta property="og:site_name" content="TopalX Scoala Auto" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Pachete Auto - Scoala de soferi TopalX - Școala de Șoferi din București"
          />
          <meta
            property="twitter:description"
            content="Descoperă pachetele auto oferite de Scoala de soferi TopalX - școală de șoferi din București. Alege dintre mașini moderne și instrucție profesională pentru a obține permisul auto."
          />
          <meta
            property="twitter:image"
            content="https://www.topalxscoalaauto.ro/images/car-packages.jpg"
          />
          <meta property="twitter:site" content="@TopalXScoalaAuto" />
          <meta property="twitter:creator" content="@TopalXScoalaAuto" />
        </Helmet>
        <h1 className="text-3xl font-bold text-center mb-16 md:mb-28 md:mt-28 pl-3 pr-3 textShadow-mt">
          {t("carPackages.title")}
        </h1>
        {carPackages.map((pkg, index) => (
          <section
            key={index}
            className={`container p-4 mx-auto md:mx-auto flex flex-col  items-center justify-around mb-16 md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="p-6 rounded-xl shadow-custom mb-4 mt-4 ml-2 mr-2 bg-white md:w-1/3">
              <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
              <p>
                <strong>{t("carPackages.price")}:</strong>
                <span className="font-bold text-xl"> {pkg.price}</span>
              </p>
              <p>
                <strong>{t("carPackages.transmission")}:</strong>{" "}
                {pkg.transmission}
              </p>
              <p>
                <strong>{t("carPackages.fuelType")}:</strong> {pkg.fuelType}
              </p>
              <ul className="list-disc list-inside">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature} &#10003;</li>
                ))}
              </ul>
              <p className="text-red-500">{pkg.note}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center shadow-2xl backdrop-blur-sm border-black border-y-2">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="rounded-xl w-full h-full max-w-lg md:max-w-lg object-cover pr-20 pl-20 md:mx-auto"
              />
            </div>
          </section>
        ))}
        <Offer />
        
      </div>
    );
  }
);

export default CarPackages;
