import React, { useEffect, useState } from "react";
import s1 from "../images/s1.webp";
import sisCosti from "../images/sisCostiElev.webp";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.webp";
import s6 from "../images/s6.webp";
import cuplu from "../images/cuplu.webp";
import sis from "../images/sis.jpg";
import sis2 from "../images/sis2.jpg";
import clasa from "../images/clasa.webp";
import clasa3 from "../images/clasa3.webp";
import servicii from "../images/servicii.webp";
import iCan from "../images/canDoIt.webp";
import { useTranslation } from "react-i18next";

const CineSuntemImg = () => {
  const [animate, setAnimate] = useState(false);

  const {t} = useTranslation()
  const images = [
    cuplu,
    s1,
    clasa3,
    sisCosti,
    sis,
    iCan,
    clasa,
    s4,
    servicii,
    s5,
    sis2,
    s6,
  ];
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
              className="w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full object-cover m-1 sm:m-2 border-4 sm:border-6 md:border-8 border-solid border-white"
            />
          ))}
        </div>
        <header className="text-center py-4 text-textColor mx-auto px-2 sm:px-4 mt-8 sm:mt-12 md:mt-10 md:mb-10 container">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6 text-white text-shadow-outline">
            {t("about.headerTitle")}
          </h1>
        </header>
        <div className="mb-10 flex flex-wrap justify-center items-center md:mb-8">
          {images.slice(Math.ceil(images.length / 2)).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full object-cover m-1 sm:m-2 border-4 sm:border-6 md:border-8 border-solid border-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CineSuntemImg;
