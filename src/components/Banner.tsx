import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import TPI from "../images/TPI.webp";

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bannerElement = bannerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (bannerElement) observer.observe(bannerElement);
    return () => {
      if (bannerElement) observer.unobserve(bannerElement);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={bannerRef}
      className={`relative mb-16 mt-16 md:mb-32 md:mt-32 max-w-[90vw] md:max-w-[1000px] mx-auto overflow-hidden 
                 rounded-2xl shadow-2xl ${isVisible ? "slide-in" : ""}`}
    >
      {/* Imagine cu efect de zoom la hover */}
      <img
        src={TPI}
        alt="TPI OFFER"
        className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out hover:scale-105"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Conținut centrat */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <Button
          onClick={() => scrollToSection("buy-now-section")}
          textKey="banner.learn_more"
          additionalClasses="text-xs md:text-sm bg-logoBlue"
        />
      </div>
    </div>
  );
};

export default Banner;
