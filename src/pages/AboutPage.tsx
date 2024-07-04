import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../index.css";
import CarCard from "../components/CarCard";
import fiat from "../images/FiatGarga.jpg";
import mercedes from "../images/mercedes2.jpg";
import skoda from "../images/SkodaBombo.jpg";
import volvo from "../images/volvo1.jpg";
import s1 from "../images/s1.jpg";
// import s2 from "../images/s2.jpg";
// import s3 from "../images/s3.jpg";
import sisCosti from "../images/sisCostiElev.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import s6 from "../images/s6.jpg";
import cuplu from "../images/cuplu.jpg";
import sis from "../images/sis.jpg";
import sis2 from "../images/sis2.jpg";
import clasa from "../images/clasa.jpg";
import clasa3 from "../images/clasa3.jpg";
import servicii from "../images/servicii.jpg";
import iCan from "../images/canDoIt.jpg";
import Team from "../components/Team";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { PiHandTapLight } from "react-icons/pi";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<{ scrollToPackages: () => void }>(null);
  const testimonialsRef = useRef<{ scrollToTestimonials: () => void }>(null);
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
    <>
      <Helmet>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Helmet>
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
      <div className="mt-4 sm:mt-8 md:mt-12">
        <main className="container mx-auto px-2 flex flex-col flex-wrap md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 md:mx-auto">
          <section className="backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">
              {t("about.keyInformation.title")}
            </h2>
            <ul className="list-disc pl-5 font-bold">
              <li>{t("about.keyInformation.founded")}</li>
              <li>{t("about.keyInformation.employees")}</li>
              <li>{t("about.keyInformation.location")}</li>
            </ul>
          </section>
          <section
            onClick={scrollToTestimonials}
            className="relative backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom ease-in hover:bg-logoBlue hover:text-white transition-transform duration-300 hover:scale-105 md:hover:scale-105 :flex-row cursor-pointer"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4">
              {t("about.mission.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-bold">
              {t("about.mission.description")}
            </p>
            <div className="absolute bottom-4 right-4 text-white animate-bounce">
              <PiHandTapLight size={22} className="text-primary" />
            </div>
          </section>
          <section
            onClick={scrollToTeam}
            className="relative backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom ease-in hover:bg-logoBlue hover:text-white transition-transform duration-300 hover:scale-105 md:hover:scale-105 cursor-pointer"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4">
              {t("about.team.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-bold">
              {t("about.team.description")}
            </p>
            <div className="absolute bottom-4 right-4 text-white animate-bounce">
              <PiHandTapLight size={22} className="text-primary" />
            </div>
          </section>
        </main>
      </div>
      <div className="border-2 rounded-2xl border-solid border-white bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 p-5 container mx-auto mt-8 mb-16">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">
          {t("about.companyDescription.title")}
        </h1>
        <section className="container text-lg text-left mb-5 p-1 mx-auto md:p-6">
          <p>{t("about.companyDescription.paragraph1")}</p>
          <br />
          <p>{t("about.companyDescription.paragraph2")}</p>
          <br />
          <p>{t("about.companyDescription.paragraph3")}</p>
        </section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center mt-8 mb-8">
            {t("about.carIntro")}{" "}
            <span className="bounce inline-block">&darr;</span>
          </h1>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">{t("about.categoryB")}</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <CarCard name="Mercedes" nickname="Topul Mare" image={mercedes} />
            <CarCard name="Volvo V40" nickname="Topul Mic" image={volvo} />
            <CarCard name="Skoda Fabia" nickname="Bombonica" image={skoda} />
            <CarCard name="Fiat 500" nickname="Gargarita" image={fiat} />
          </div>
          <button
            onClick={scrollToPackages}
            className="mt-8 mb-8 bg-white text-textColor py-2 px-6 rounded-full font-semibold hover:bg-secondary transition duration-300 transform hover:scale-150 hover:shadow-lg"
          >
            {t("about.button")}
          </button>
        </div>
      </div>
      <div>
        <Team ref={teamRef} />
      </div>
      <Services ref={servicesRef} />
      <Testimonials ref={testimonialsRef} testimonials={[]} />
    </>
  );
};

export default AboutPage;
