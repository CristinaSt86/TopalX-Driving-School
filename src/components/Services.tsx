import React, { useRef, useImperativeHandle, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CarPackages from "./CarPackages";
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
    <div className={` ${animate ? "slide-in" : ""} `}>
      <h1 className="text-3xl font-bold text-center mt-16 pl-3 pr-3">
        {t("services.title")}
      </h1>
      <div
        className={`bg-custom-services bg-center bg-cover bg-no-repeat p-2 mx-auto md:p-6 border-2 border-solid border-white mt-16 mb-16 ${
          window.innerWidth > 850 ? "bg-fixed" : "bg-scroll"
        }`}
      >
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
