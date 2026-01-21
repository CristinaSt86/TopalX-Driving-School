import React, { useState, useEffect } from "react";
import { HiChevronUp } from "react-icons/hi";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-2 z-[10000]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
    p-2.5
    rounded-full
    bg-black/40 backdrop-blur-md
    text-white
    shadow-lg
    transition-all duration-200 ease-out
    hover:bg-black/60 hover:scale-105
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
  "
        >
          <HiChevronUp size={18} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
