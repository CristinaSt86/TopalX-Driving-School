import React, { ForwardedRef } from "react";
import { useTranslation } from "react-i18next";

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
        image: "/images/mer.webp", // Use absolute paths for images
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
        image: "/images/vol.webp",
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
        image: "/images/f3.webp",
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
        image: "/images/sk1.webp",
      },
    ];

    return (
      <div ref={ref}>
        <h1 className="text-3xl font-bold text-center mb-16 mt-16 pl-3 pr-3 textShadow-mt">
          {t("carPackages.title")}
        </h1>
        {carPackages.map((pkg, index) => (
          <section
            key={index}
            className={` mx-auto md:mx-auto flex flex-col  items-center justify-around mb-16 md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="p-6 rounded-xl shadow-custom mb-4 mt-4 ml-2 mr-2 bg-white md:w-1/3">
              <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
              <p>
                <strong>{t("carPackages.price")}:</strong> {pkg.price}
              </p>
              <p>
                <strong>{t("carPackages.transmission")}:</strong> {pkg.transmission}
              </p>
              <p>
                <strong>{t("carPackages.fuelType")}:</strong> {pkg.fuelType}
              </p>
              <ul className="list-disc list-inside">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    {feature} &#10003;
                  </li>
                ))}
              </ul>
              <p className="text-red-500">{pkg.note}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center shadow-custom backdrop-blur-sm border-black border-y-2">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="rounded-xl w-full h-full max-w-lg md:max-w-lg object-cover pr-20 pl-20 md:mx-auto"
              />
            </div>
          </section>
        ))}
      </div>
    );
  }
);

export default CarPackages;
