import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import i18n from './i18n'; // import your i18n instance

// Define the shape of the context state
interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

// Create the context with an undefined initial value
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Custom hook to use the language context
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// LanguageProvider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem('appLanguage') || 'en');

  useEffect(() => {
    i18n.changeLanguage(language); // sync i18n language with state
    localStorage.setItem('appLanguage', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ro' ? 'en' : 'ro'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
