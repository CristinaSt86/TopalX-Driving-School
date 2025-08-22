import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import ErrorBoundary from "../ErrB";
import SidebarIcons from "../SidebarIcons";

interface NavigationProps {
  isMobileView: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isMobileView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (sectionId: string, route: string = "/") => {
    if (window.location.pathname !== route) {
      navigate(route);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const closeMenu = useCallback(() => setIsOpen(false), []);
  useEffect(() => setIsOpen(false), [isMobileView]);

  return (
    <ErrorBoundary>
      <SidebarIcons />
      <nav className="p-3 md:py-2 font-semibold text-white md:backdrop-blur-md md:bg-black/70 md:rounded-2xl md:shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {isMobileView && (
            <HamburgerButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          {isMobileView ? (
            <MobileMenu isOpen={isOpen} handleMenuClick={handleMenuClick} />
          ) : (
            <DesktopMenu handleMenuClick={handleMenuClick} />
          )}
        </div>
      </nav>
    </ErrorBoundary>
  );
};

export default Navigation;
