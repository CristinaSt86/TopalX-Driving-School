// import React, { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import "../index.css";
// import CarCard from "../components/CarCard";
// import Team from "../components/Team";
// import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
// import { PiHandTapLight } from "react-icons/pi";
// import CineSuntemImg from "../components/CineSuntemImg";

// // Images referenced from the public directory
// const fiat = "/images/f3.jpg";
// const mercedes = "/images/mercedes2.jpg";
// const skoda = "/images/sc2.webp";
// const volvo = "/images/volvo1.jpg";

// const AboutPage: React.FC = () => {
//   const { t } = useTranslation();
//   const teamRef = useRef<HTMLDivElement>(null);
//   const servicesRef = useRef<{ scrollToPackages: () => void }>(null);
//   const testimonialsRef = useRef<{ scrollToTestimonials: () => void }>(null);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
//       <CineSuntemImg />
//       <div className="mt-4 sm:mt-8 md:mt-12">
//         <main className="container mx-auto px-2 flex flex-col flex-wrap md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 md:mx-auto">
//           <section className="backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom">
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
//             className="relative backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom ease-in hover:bg-logoBlue hover:text-white transition-transform duration-300 hover:scale-105 md:hover:scale-105 cursor-pointer"
//           >
//             <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-semibold">
//               {t("about.mission.title")}
//             </h2>
//             <p className="text-base leading-6 sm:text-base md:text-lg font-medium">
//               {t("about.mission.description")}
//             </p>
//             <div className="absolute bottom-4 right-4 text-white animate-bounce">
//               <PiHandTapLight size={22} className="text-primary" />
//             </div>
//           </section>
//           <section
//             onClick={scrollToTeam}
//             className="relative backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom ease-in hover:bg-logoBlue hover:text-white transition-transform duration-300 hover:scale-105 md:hover:scale-105 cursor-pointer"
//           >
//             <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-semibold">
//               {t("about.team.title")}
//             </h2>
//             <p className="text-base leading-6 sm:text-base md:text-lg font-medium">
//               {t("about.team.description")}
//             </p>
//             <div className="absolute bottom-4 right-4 text-white animate-bounce">
//               <PiHandTapLight size={22} className="text-primary" />
//             </div>
//           </section>
//         </main>
//       </div>
//       <div className="shadow-2xl border-2 rounded-2xl border-solid border-white bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 p-3 container mx-auto mt-8 mb-16">
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
//           <h1 className="text-3xl font-bold text-center mt-8 mb-8">
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
//             <CarCard name="Fiat 500" nickname="Gargarita" image={fiat} />
//           </div>
//           <button
//             onClick={scrollToPackages}
//             className="mt-8 mb-8 bg-white text-textColor py-2 px-6 rounded-full font-semibold hover:bg-secondary transition duration-300 transform hover:scale-150 hover:shadow-lg"
//           >
//             {t("about.button")}
//           </button>
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
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import CarCard from "../components/CarCard";
import Team from "../components/Team";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { PiHandTapLight } from "react-icons/pi";
import CineSuntemImg from "../components/CineSuntemImg";

// Images referenced from the public directory
const fiat = "/images/f3.jpg";
const mercedes = "/images/mercedes2.jpg";
const skoda = "/images/sc2.webp";
const volvo = "/images/volvo1.jpg";

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
      <CineSuntemImg />
      <div className="mt-4 sm:mt-8 md:mt-12">
        <main className="container mx-auto px-2 flex flex-col flex-wrap md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 md:mx-auto">
          <section className="backdrop-blur-sm rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-2 font-semibold">
              {t("about.keyInformation.titleInfo")}
            </h2>
            <ul className="text-base leading-6 list-disc pl-5 font-medium">
              <li>{t("about.keyInformation.founded")}</li>
              <li>{t("about.keyInformation.employees")}</li>
              <li>{t("about.keyInformation.location")}</li>
            </ul>
          </section>
          <section
            onClick={scrollToTestimonials}
            className="relative backdrop-blur-sm rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom ease-in hover:bg-logoBlue hover:text-white transition-transform duration-300 hover:scale-105 md:hover:scale-105 cursor-pointer"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-semibold">
              {t("about.mission.title")}
            </h2>
            <p className="text-base leading-6 sm:text-base md:text-lg font-medium">
              {t("about.mission.description")}
            </p>
            <div className="absolute bottom-4 right-4 text-white animate-bounce">
              <PiHandTapLight size={22} className="text-primary" />
            </div>
          </section>
          <section
            onClick={scrollToTeam}
            className="relative backdrop-blur-sm rounded-2xl mb-4 border-l border-r border-b border-2 border-secondary p-4 sm:p-6 shadow-custom ease-in hover:bg-logoBlue hover:text-white transition-transform duration-300 hover:scale-105 md:hover:scale-105 cursor-pointer"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-semibold">
              {t("about.team.title")}
            </h2>
            <p className="text-base leading-6 sm:text-base md:text-lg font-medium">
              {t("about.team.description")}
            </p>
            <div className="absolute bottom-4 right-4 text-white animate-bounce">
              <PiHandTapLight size={22} className="text-primary" />
            </div>
          </section>
        </main>
      </div>
      <div className="shadow-2xl border-2 rounded-2xl border-solid border-white bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 p-3 container mx-auto mt-8 mb-16">
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
        <Services ref={servicesRef} />
        <Testimonials ref={testimonialsRef} testimonials={[]} />
      </div>
    </>
  );
};

export default AboutPage;
