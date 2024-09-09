import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import Button from "./Button";

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
      className={`bg-primary text-white py-8 px-4 text-center shadow-lg mb-16 ${
        isVisible ? "slide-in" : ""
      }`}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        {t("banner.title")} 
      </h2>
      <p className="mb-4 text-lg">
        {t("banner.description")} 
      </p>
      <Button
        onClick={() => scrollToSection("buy-now-section")}
        textKey="banner.learn_more"
        additionalClasses="border-4 border-secondary my-10"
      />
    </div>
  );
};

export default Banner;
