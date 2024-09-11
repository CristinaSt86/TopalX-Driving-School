import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setShowBanner(false);
    localStorage.setItem("cookieAccepted", "true");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 flex justify-between items-center">
      <div className="text-sm">
        This website uses cookies to ensure you get the best experience.{" "}
        <a
          href="/privacy-policy"
          className="underline text-secondary hover:text-yellow-500"
        >
          Learn more
        </a>
      </div>
      <button
        onClick={handleAcceptCookies}
        className="bg-secondary text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
      >
        Got it!
      </button>
    </div>
  );
};

export default CookieConsent;
