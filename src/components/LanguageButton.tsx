import React from 'react';
import { useLanguage } from '../LanguageContext';

const LanguageButton: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="w-10 h-10 bg-blue-500 text-primary rounded-full border-2 border-primary flex items-center justify-center hover:bg-blue-700 transition duration-300"
    >
      {language === 'ro' ? 'EN' : 'RO'}
    </button>
  );
};

export default LanguageButton;
