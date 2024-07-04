import React from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import logo from "../images/logo.jpg";
import "../index.css";
import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";
import LanguageButton from "./LanguageButton";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <TopHeader />
      <header className="bg-secondary flex items-center justify-between mt-0 p-4 shadow-2xl z-40 custom:mt-12">
        <Link to="/" className="flex flex-col items-center justify-center">
        <div className="aspect-w-1 aspect-h-1 w-16 h-16 rounded-full overflow-hidden">
            <img
              src={logo}
              alt="logo"
              className="object-cover border-2 border-logo rounded-full"
            />
          </div>
          {/* <p className="tracking-widest font-extrabold">{t('header.tagline')}</p> */}
        </Link>
        <Navigation />
        <LanguageButton />
      </header>
    </>
  );
};

export default Header;
