import React, { ForwardedRef } from "react";
import skoda from "../images/sk1.webp";
import fiat from "../images/f3.webp";
import mercedes from "../images/mer.webp";
import volvo from "../images/vol.webp";
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
        image: mercedes,
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
        image: volvo,
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
        image: fiat,
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
        image: skoda,
      },
    ];

    return (
      <div ref={ref}>
        <h1 className="text-3xl font-bold text-center mb-16 mt16">
          {t("carPackages.title")}
        </h1>
        {carPackages.map((pkg, index) => (
          <section
            key={index}
            className={`shadow-custom mx-auto md:mx-auto flex flex-col backdrop-blur border-black border-y-2 items-center justify-around mb-16 md:flex-row ${
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
            <div className="w-full md:w-1/2 flex justify-center">
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

// import React, { ForwardedRef } from "react";
// import skoda from "../images/sk1.webp";
// import fiat from "../images/f3.webp";
// import mercedes from "../images/mer.webp";
// import volvo from "../images/vol.webp";
// import { useTranslation } from "react-i18next";

// interface CarPackage {
//   name: string;
//   price: string;
//   transmission: string;
//   fuelType: string;
//   features: string[];
//   note: string;
//   image: string;
// }

// const CarPackages = React.forwardRef<HTMLDivElement>(
//   (props, ref: ForwardedRef<HTMLDivElement>) => {
//     const { t } = useTranslation();

//     const carPackages: CarPackage[] = [
//       {
//         name: t("carPackages.packages.0.name"),
//         price: t("carPackages.packages.0.price"),
//         transmission: t("carPackages.packages.0.transmission"),
//         fuelType: t("carPackages.packages.0.fuelType"),
//         features: [
//           t("carPackages.packages.0.features.0"),
//           t("carPackages.packages.0.features.1"),
//           t("carPackages.packages.0.features.2"),
//           t("carPackages.packages.0.features.3"),
//           t("carPackages.packages.0.features.4"),
//         ],
//         note: t("carPackages.packages.0.note"),
//         image: mercedes,
//       },
//       {
//         name: t("carPackages.packages.1.name"),
//         price: t("carPackages.packages.1.price"),
//         transmission: t("carPackages.packages.1.transmission"),
//         fuelType: t("carPackages.packages.1.fuelType"),
//         features: [
//           t("carPackages.packages.1.features.0"),
//           t("carPackages.packages.1.features.1"),
//           t("carPackages.packages.1.features.2"),
//           t("carPackages.packages.1.features.3"),
//           t("carPackages.packages.1.features.4"),
//         ],
//         note: t("carPackages.packages.1.note"),
//         image: volvo,
//       },
//       {
//         name: t("carPackages.packages.2.name"),
//         price: t("carPackages.packages.2.price"),
//         transmission: t("carPackages.packages.2.transmission"),
//         fuelType: t("carPackages.packages.2.fuelType"),
//         features: [
//           t("carPackages.packages.2.features.0"),
//           t("carPackages.packages.2.features.1"),
//           t("carPackages.packages.2.features.2"),
//           t("carPackages.packages.2.features.3"),
//           t("carPackages.packages.2.features.4"),
//         ],
//         note: t("carPackages.packages.2.note"),
//         image: fiat,
//       },
//       {
//         name: t("carPackages.packages.3.name"),
//         price: t("carPackages.packages.3.price"),
//         transmission: t("carPackages.packages.3.transmission"),
//         fuelType: t("carPackages.packages.3.fuelType"),
//         features: [
//           t("carPackages.packages.3.features.0"),
//           t("carPackages.packages.3.features.1"),
//           t("carPackages.packages.3.features.2"),
//           t("carPackages.packages.3.features.3"),
//           t("carPackages.packages.3.features.4"),
//         ],
//         note: t("carPackages.packages.3.note"),
//         image: skoda,
//       },
//     ];

//     return (
//       <div ref={ref}>
//         <h1 className="text-3xl font-bold text-center mb-16 mt16">
//           {t("carPackages.title")}
//         </h1>
//         {carPackages.map((pkg, index) => (
//           <section
//             key={index}
//             className={`shadow-custom mx-auto md:mx-auto flex flex-col backdrop-blur border-black border-y-2 items-center justify-around mb-16 md:flex-row ${
//               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//             }`}
//           >
//             <div className="p-6 rounded-xl shadow-custom mb-4 mt-4 ml-2 mr-2 bg-white md:w-1/3">
//               <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
//               <p>
//                 <strong>{t("carPackages.price")}:</strong> {pkg.price}
//               </p>
//               <p>
//                 <strong>{t("carPackages.transmission")}:</strong> {pkg.transmission}
//               </p>
//               <p>
//                 <strong>{t("carPackages.fuelType")}:</strong> {pkg.fuelType}
//               </p>
//               <ul className="list-disc list-inside">
//                 {pkg.features.map((feature, idx) => (
//                   <li key={idx}>
//                     {feature} &#10003;
//                   </li>
//                 ))}
//               </ul>
//               <p className="text-red-500">{pkg.note}</p>
//             </div>
//             <div className="w-full md:w-1/2 flex justify-center">
//               <div className="h-60 w-full flex justify-center items-center bg-yellow-500 rounded-xl">
//                 <img
//                   src={pkg.image}
//                   alt={pkg.name}
//                   className="object-cover h-full"
//                 />
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//     );
//   }
// );

// export default CarPackages;
