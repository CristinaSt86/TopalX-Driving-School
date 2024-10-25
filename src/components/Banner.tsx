import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import Button from "./Button";
import TPI from "../images/TPI.webp";

const Banner: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation
  const [isVisible, setIsVisible] = useState(false); // To track when the banner is in the viewport
  const bannerRef = useRef<HTMLDivElement>(null); // Reference to the banner element

  useEffect(() => {
    const bannerElement = bannerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when the banner comes into the viewport
          } else {
            setIsVisible(false); // Optionally remove animation when the banner leaves the viewport
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the banner is visible
    );

    if (bannerElement) {
      observer.observe(bannerElement);
    }

    return () => {
      if (bannerElement) {
        observer.unobserve(bannerElement); // Clean up observer when component unmounts
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={bannerRef}
      className={` text-white text-center shadow-lg mb-16 ${
        isVisible ? "slide-in" : ""
      }`}
    >
      <img src={TPI} alt="TPI OFFER" className="w-full h-auto" />

      <Button
        onClick={() => scrollToSection("buy-now-section")}
        textKey="banner.learn_more"
        additionalClasses="border-4 border-secondary my-4 text-sm md:text-lg"
      />
    </div>
  );
};

export default Banner;
