import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CineSuntemImg: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  const { t } = useTranslation();

  // Use absolute paths for images in the public directory
  const images: string[] = [
    "/images/cuplu.webp",
    "/images/s1.webp",
    "/images/clasa3.webp",
    "/images/sisCostiElev.webp",
    "/images/sis.jpg",
    "/images/canDoIt.webp",
    "/images/clasa.webp",
    "/images/s4.jpg",
    "/images/servicii.webp",
    "/images/s5.webp",
    "/images/sis2.jpg",
    "/images/s6.webp",
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
