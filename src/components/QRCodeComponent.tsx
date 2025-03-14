import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { useTranslation } from "react-i18next";

interface QRCodeProps {
  title?: React.ReactNode; // Adaugă title ca o proprietate opțională
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ title }) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const websiteUrl = "https://topalxscoalaauto.ro";
  const { t } = useTranslation();

  const downloadQRCode = () => {
    if (qrRef.current) {
      toPng(qrRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "qr-code.png";
          link.click();
        })
        .catch((err) => {
          console.error("Failed to download QR code image: ", err);
        });
    }
  };

  return (
    <div>
      {title && <h2 className="text-center text-lg font-semibold">{title}</h2>} {/* Adaugă titlul dacă există */}
      <div ref={qrRef} className="flex flex-col items-center justify-center">
        <QRCode value={websiteUrl} size={42} className="mt-4 md:mt-2" />
        <p className="text-center mt-4 text-gray-400">
          {t("qrcode.instruction")}
        </p>
        <button
          onClick={downloadQRCode}
          className="mt-2 text-white hover:text-gray-400"
        >
          {t("qrcode.downloadButton")}
        </button>
      </div>
    </div>
  );
};

export default QRCodeComponent;
