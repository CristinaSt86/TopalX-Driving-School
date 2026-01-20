import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import ErrorBoundary from "../ErrB";
import SidebarIcons from "../SidebarIcons";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

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
      closeMenu();
    }
  };

  return (
    <ErrorBoundary>
      <SidebarIcons />

      <nav className="p-3 lg:py-2 font-semibold text-white lg:bg-black/50 lg:backdrop-blur-sm lg:rounded-lg lg:shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Mobile/Tablet: hamburger (incl. iPad) */}
          <div className="lg:hidden">
            <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>

          {/* Desktop: menu */}
          <div className="hidden lg:block">
            <DesktopMenu handleMenuClick={handleMenuClick} />
          </div>
        </div>

        {/* Mobile dropdown panel */}
        <div className="lg:hidden">
          <MobileMenu isOpen={isOpen} handleMenuClick={handleMenuClick} />
        </div>
      </nav>
    </ErrorBoundary>
  );
};

export default Navigation;
