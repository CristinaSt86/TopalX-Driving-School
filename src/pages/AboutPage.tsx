import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "../index.css";
import CarCard from "../components/CarCard";
import Team from "../components/Team";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { PiArrowDownLight } from "react-icons/pi";
import CineSuntemImg from "../components/CineSuntemImg";
import fiat from "../images/f3.jpg";
import skoda from "../images/sc2.webp";
import mercedes from "../images/mercedes2.jpg";
import volvo from "../images/volvo1.jpg";
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
          content="https://www.topalxscoalaauto.ro/images/about.jpg"
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
          content="Află mai multe despre  Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          property="twitter:image"
          content="https://www.topalxscoalaauto.ro/images/about.jpg"
        />
        <meta property="twitter:site" content="@TopalXScoalaAuto" />
        <meta property="twitter:creator" content="@TopalXScoalaAuto" />
      </Helmet>
      <CineSuntemImg />
      <div id="about" className="mt-4 sm:mt-8 md:mt-12">
        <main className="container mx-auto px-2 flex flex-col flex-wrap md:flex-row items-center justify-center gap-10 md:gap-16 md:mx-auto mb-10">
          <section className="rounded-2xl mb-4 p-4 sm:p-6 shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-2 font-semibold">
              {t("about.keyInformation.titleInfo")}
            </h2>
            <ul className="text-base leading-6 list-disc pl-5 font-medium">
              <li>{t("about.keyInformation.founded")}</li>
              <li>{t("about.keyInformation.employees")}</li>
              <li>{t("about.keyInformation.location")}</li>
            </ul>
          </section>
          <div className="flex flex-col md:flex-col lg:flex-row gap-4 md:gap-8 items-center">
            <section
              onClick={scrollToTestimonials}
              className="flex-1 h-fit max-h-fit-content overflow-hidden rounded-2xl mb-4 p-4 sm:p-6 shadow-2xl ease-in hover:bg-primary hover:text-white transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-semibold">
                {t("about.mission.title")}
              </h2>
              <p className="relative text-base leading-6 sm:text-base md:text-lg font-medium hover:text-white">
                {t("about.mission.description")}
                <PiArrowDownLight className="absolute bottom-0 right-0 mb-1 mr-1 bounce-effect  " />
              </p>
            </section>

            <section
              onClick={scrollToTeam}
              className="flex-1 h-fit max-h-fit-content overflow-hidden rounded-2xl mb-4 p-4 sm:p-6 shadow-2xl ease-in hover:bg-primary hover:text-white transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-semibold">
                {t("about.team.title")}
              </h2>
              <p className="relative text-base leading-6 sm:text-base md:text-lg font-medium hover:text-white ">
                {t("about.team.description")}
                <PiArrowDownLight className="absolute bottom-0 right-0 mb-1 mr-1 bounce-effect  " />
              </p>
            </section>
          </div>
        </main>
      </div>
      <div className="shadow-2xl rounded-2xl bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 p-3 container mx-auto my-10">
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
          <h1 className="text-3xl font-bold text-center mt-8 mb-8 pr-3 pl-3">
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
            <CarCard name="Fiat 500" nickname="Gărgărița" image={fiat} />
          </div>
          <Button
            onClick={scrollToPackages}
            textKey="about.button"
            additionalClasses="mt-8 mb-8"
          />
        </div>
      </div>
      <div>
        
        <Team ref={teamRef} />
        <Services ref={servicesRef} />
        <Testimonials ref={testimonialsRef} testimonials={[]} />
      </div>
    </>
  );
};

export default AboutPage;

// import React, { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Helmet } from "react-helmet";
// import "../index.css";
// import CarCard from "../components/CarCard";
// import Team from "../components/Team";
// import Services from "./Services";
// import Testimonials from "./Testimonials";
// import { PiArrowDownLight } from "react-icons/pi";
// import CineSuntemImg from "../components/CineSuntemImg";
// import fiat from "../images/f3.jpg";
// import skoda from "../images/sc2.webp";
// import mercedes from "../images/mercedes2.jpg";
// import volvo from "../images/volvo1.jpg";
// import Button from "../components/Button";

// const AboutPage: React.FC = () => {
//   const { t } = useTranslation();
//   const teamRef = useRef<HTMLDivElement>(null);
//   const servicesRef = useRef<{ scrollToPackages: () => void }>(null);
//   const testimonialsRef = useRef<{ scrollToTestimonials: () => void }>(null);
//   const [animate, setAnimate] = useState(false);

//   const scrollToTeam = () => {
//     teamRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const scrollToPackages = () => {
//     servicesRef.current?.scrollToPackages();
//   };

//   const scrollToTestimonials = () => {
//     testimonialsRef.current?.scrollToTestimonials();
//   };

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>
//           Despre Noi | Scoala de soferi TopalX | Școala de Șoferi din București
//         </title>
//         <meta
//           name="description"
//           content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
//         />
//         <meta
//           name="keywords"
//           content="școală de șoferi accesibilă, școală de șoferi București, cursuri de conducere defensive, permis auto, pregătire examen auto, instructori auto profesioniști, mașini moderne, prețuri accesibile"
//         />
//         <meta name="author" content="Scoala de soferi TopalX" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta
//           property="og:title"
//           content="Despre Noi - Scoala de soferi TopalX - Școala de Șoferi din București"
//         />
//         <meta
//           property="og:description"
//           content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
//         />
//         <meta
//           property="og:url"
//           content="https://www.topalxscoalaauto.ro/about"
//         />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:image"
//           content="https://www.topalxscoalaauto.ro/images/about.jpg"
//         />
//         <meta property="og:locale" content="ro_RO" />
//         <meta property="og:site_name" content="TopalX Scoala Auto" />
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta
//           property="twitter:title"
//           content="Despre Noi - Scoala de soferi TopalX - Școala de Șoferi din București"
//         />
//         <meta
//           property="twitter:description"
//           content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
//         />
//         <meta
//           property="twitter:image"
//           content="https://www.topalxscoalaauto.ro/images/about.jpg"
//         />
//         <meta property="twitter:site" content="@TopalXScoalaAuto" />
//         <meta property="twitter:creator" content="@TopalXScoalaAuto" />
//       </Helmet>
//       <CineSuntemImg />
//       <div id="about" className="mt-4 sm:mt-8 md:mt-12">
//         <main className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col flex-wrap md:flex-row gap-10 md:gap-16 items-center justify-center">
//           <section className="backdrop-blur-sm rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-2xl">
//             <h2 className="text-xl sm:text-2xl md:text-3xl mb-2 font-semibold">
//               {t("about.keyInformation.titleInfo")}
//             </h2>
//             <ul className="text-base leading-6 list-disc pl-5 font-medium">
//               <li>{t("about.keyInformation.founded")}</li>
//               <li>{t("about.keyInformation.employees")}</li>
//               <li>{t("about.keyInformation.location")}</li>
//             </ul>
//           </section>

//           <section
//             onClick={scrollToTestimonials}
//             className="group relative bg-logoBlue text-white p-6 rounded-lg flex flex-col justify-between cursor-pointer overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-blue-800"
//           >
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
//               {t("about.mission.title")}
//             </h2>
//             <p className="text-lg leading-7 mb-6 transition-opacity duration-300">
//               {t("about.mission.description")}
//             </p>
//             <div className="absolute bottom-4 right-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
//               <PiArrowDownLight className="animate-bounce" />
//             </div>
//           </section>

//           <section
//             onClick={scrollToTeam}
//             className="group relative bg-logoBlue text-white p-6 rounded-lg flex flex-col justify-between cursor-pointer overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-blue-800"
//           >
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
//               {t("about.team.title")}
//             </h2>
//             <p className="text-lg leading-7 mb-6 transition-opacity duration-300">
//               {t("about.team.description")}
//             </p>
//             <div className="absolute bottom-4 right-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
//               <PiArrowDownLight className="animate-bounce" />
//             </div>
//           </section>
//         </main>
//       </div>

//       <div className="shadow-2xl border-2 rounded-2xl border-solid border-white bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 p-3 container mx-auto mt-16 mb-16">
//         <h1 className="text-4xl font-bold text-center mb-8 mt-8">
//           {t("about.companyDescription.title")}
//         </h1>
//         <section className="container text-lg text-left mb-5 p-1 mx-auto md:p-6">
//           <p>{t("about.companyDescription.paragraph1")}</p>
//           <br />
//           <p>{t("about.companyDescription.paragraph2")}</p>
//           <br />
//           <p>{t("about.companyDescription.paragraph3")}</p>
//         </section>
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-3xl font-bold text-center mt-8 mb-8 pr-3 pl-3">
//             {t("about.carIntro")}{" "}
//             <span className="bounce inline-block">&darr;</span>
//           </h1>
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-semibold">{t("about.categoryB")}</h2>
//           </div>
//           <div className="flex flex-wrap justify-center items-center">
//             <CarCard name="Mercedes" nickname="Topul Mare" image={mercedes} />
//             <CarCard name="Volvo V40" nickname="Topul Mic" image={volvo} />
//             <CarCard name="Skoda Fabia" nickname="Bombonica" image={skoda} />
//             <CarCard name="Fiat 500" nickname="Gărgărița" image={fiat} />
//           </div>
//           <Button
//             onClick={scrollToPackages}
//             textKey="about.button"
//             additionalClasses="mt-8 mb-8"
//           />
//         </div>
//       </div>

//       <div>
//         <Team ref={teamRef} />
//         <Services ref={servicesRef} />
//         <Testimonials ref={testimonialsRef} testimonials={[]} />
//       </div>
//     </>
//   );
// };

// export default AboutPage;
