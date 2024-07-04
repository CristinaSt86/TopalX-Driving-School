import React, { useRef, useImperativeHandle, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CarPackages from "./CarPackages";
import { t } from "i18next";

type Service = {
  name: string;
  description: string;
  available: string;
};

const services: Service[] = [
  {
    name: "services.serviceList[0].name",
    description: "services.serviceList[0].description",
    available: t("services.serviceList[0].available"),
  },
  {
    name: "services.serviceList[1].name",
    description: "services.serviceList[1].description",
    available: t("services.serviceList[1].available"),
  },
  {
    name: "services.serviceList[2].name",
    description: "services.serviceList[2].description",
    available: t("services.serviceList[2].available"),
  },
  {
    name: "services.serviceList[3].name",
    description: "services.serviceList[3].description",
    available: t("services.serviceList[3].available"),
  },
  {
    name: "services.serviceList[4].name",
    description: "services.serviceList[4].description",
    available: t("services.serviceList[4].available"),
  },
  {
    name: "services.serviceList[5].name",
    description: "services.serviceList[5].description",
    available: t("services.serviceList[5].available"),
  },
  {
    name: "services.serviceList[6].name",
    description: "services.serviceList[6].description",
    available: t("services.serviceList[6].available"),
  },
  {
    name: "services.serviceList[7].name",
    description: "services.serviceList[7].description",
    available: t("services.serviceList[7].available"),
  },
  {
    name: "services.serviceList[8].name",
    description: "services.serviceList[8].description",
    available: t("services.serviceList[8].available"),
  },
];

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

  const services = t("services.serviceList", { returnObjects: true }) as Array<{
    name: string;
    description: string;
    available: string;
    unavailable: string;
  }>;

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={` ${animate ? "slide-in" : ""}`}>
      <h1 className="text-3xl font-bold text-center mt-16">
        {t("services.title")}
      </h1>
      <div className="p-2 mx-auto md:p-6  border-2 border-solid border-white mt-16 mb-16 bg-custom-services bg-fixed bg-center bg-cover">
        <ul className="bg-customBg rounded-2xl p-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="w-fit bg-white rounded-r-full shadow-md p-4 mb-4"
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
