import React, { ReactNode } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  // Debugging
  console.log('Title:', t('default.title'));
  console.log('Description:', t('default.description'));
  console.log('Keywords:', t('default.keywords'));

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('default.title')}</title>
        <meta name="description" content={t('default.description')} />
        <meta name="keywords" content={t('default.keywords')} />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default Layout;
