import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "cookieAccepted";

const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookie.ariaLabel")}
      className="fixed inset-x-0 bottom-0 z-[10000] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4"
    >
      <div className="mx-auto max-w-[1200px] rounded-2xl bg-white/80 md:py-4 backdrop-blur-md border border-black/10 shadow-lg flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Text */}
        <p className="text-sm text-slate-700 px-4 pt-4 md:pt-0">
          {t("cookie.message")}
          <a
            href="/privacy-policy"
            className="ml-1 underline text-logoBlue hover:opacity-80"
          >
            {t("cookie.learnMore")}
          </a>
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 px-4 pb-4 md:pb-0">
          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-xl bg-secondary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
