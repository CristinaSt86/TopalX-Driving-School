import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation"
import TopHeader from "./TopHeader";
import "../index.css";
import logo from "../images/logo.webp";

const Header: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Logic to handle iPads differently
      const isIpadMini = width === 768; // iPad Mini portrait mode
      const isIpadAir = width === 820;  // iPad Air portrait mode

      if (width <= 768 && !isIpadMini && !isIpadAir) {
        setIsMobileView(true);  // Mobile view for phones
      } else {
        setIsMobileView(false); // Treat iPads and larger screens as desktop
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!isScrolled && <TopHeader />}
      <header
        className={`flex items-center justify-between p-4 absolute top-0 left-0 z-1050 scroll w-full transition-all duration-300 ${
          isScrolled || isMobileView ? "mt-0" : "custom1:mt-12"
        }`}
      >
        <Link to="/" className="flex flex-col items-center justify-center" onClick={handleLogoClick}>
          <div className="aspect-w-1 aspect-h-1 w-16 h-16 rounded-full overflow-hidden">
            <img
              src={logo}
              alt="logo"
              className="object-cover border-2 border-logo rounded-full"
            />
          </div>
        </Link>
        <Navigation isMobileView={isMobileView} />
      </header>
      <div className={`${isMobileView || isScrolled ?  "bg-transparent" : "bg-transparent"}`}>
        <main className="container mx-auto ">
          {/* main content goes here */}
        </main>
      </div>
    </>
  );
};

export default Header;
