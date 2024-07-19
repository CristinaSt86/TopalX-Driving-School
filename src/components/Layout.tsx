import React, { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();


  return (
    <HelmetProvider>
      <Helmet>
        <title>{t("default.title")}</title>
        <meta name="description" content={t("default.description")} />
        <meta name="keywords" content={t("default.keywords")} />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default Layout;
