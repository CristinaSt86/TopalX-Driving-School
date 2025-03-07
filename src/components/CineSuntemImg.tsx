import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clasa3 from "../images/clasa3.webp";
import sis from "../images/sis.webp";
import clasa from "../images/top1.webp";
import servicii from "../images/servicii.webp";
import sisCostiElev from "../images/sisCostiElev.webp";
import sis2 from "../images/sis2.webp";

const CineSuntemImg: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const { t } = useTranslation();

  const images: string[] = [sisCostiElev, servicii, sis2, clasa, sis, clasa3];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <div
        className={`flex flex-col items-center justify-center ${
          animate ? "slide-in" : ""
        }`}
      >
        <div className="mt-8 sm:mt-16 flex flex-wrap justify-center items-center">
          {images.slice(0, Math.ceil(images.length / 2)).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="shadow-custom w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full object-cover m-1 sm:m-2 border-4 sm:border-6 md:border-8 border-solid border-white"
            />
          ))}
        </div>
        <header className="text-center py-4 text-textColor mx-auto px-2 sm:px-4 sm:mt-12 md:mt-10 md:mb-10 container">
          <h1 className="text-4xl font-bold text-center mb-8 mt-8">
            {t("about.headerTitle")}
          </h1>
        </header>
        <div className="mb-10 flex flex-wrap justify-center items-center md:mb-8">
          {images.slice(Math.ceil(images.length / 2)).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="shadow-custom w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full object-cover m-1 sm:m-2 border-4 sm:border-6 md:border-8 border-solid border-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CineSuntemImg;
