import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";
import LanguageButton from "./LanguageButton";
import "../index.css";

const Header: React.FC = () => {
  const logo = "/images/logo.webp"; 
  return (
    <>
      <TopHeader />
      <header className="bg-secondary flex items-center justify-between mt-0 p-4 shadow-custom z-40 custom:mt-12">
        <Link to="/" className="flex flex-col items-center justify-center">
          <div className="aspect-w-1 aspect-h-1 w-16 h-16 rounded-full overflow-hidden">
            <img
              src={logo}
              alt="logo"
              className="object-cover border-2 border-logo rounded-full"
            />
          </div>
        </Link>
        <Navigation />
        <LanguageButton />
      </header>
    </>
  );
};

export default Header;
