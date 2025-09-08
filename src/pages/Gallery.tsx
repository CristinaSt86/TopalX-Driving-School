import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import e1 from "../images/e1.webp";
import e2 from "../images/e2.webp";
import e3 from "../images/e3.webp";
import e6 from "../images/e6.webp";
import e7 from "../images/e7.webp";
import e9 from "../images/e9.webp";
import e10 from "../images/e10.webp";
import e11 from "../images/e11.webp";
import e12 from "../images/e12.webp";
import e13 from "../images/e13.webp";
import e14 from "../images/e14.webp";
import e16 from "../images/e16.webp";
import e17 from "../images/e17.webp";
import e18 from "../images/e18.webp";
import e19 from "../images/e19.webp";
import e20 from "../images/e20.webp";
import e21 from "../images/e21.webp";
import e22 from "../images/e22.webp";
import e23 from "../images/e23.webp";
import e24 from "../images/e24.webp";
import e25 from "../images/e25.webp";
import e26 from "../images/e26.webp";
import e27 from "../images/e27.webp";
import e29 from "../images/e29.webp";
import e30 from "../images/e30.webp";
import e31 from "../images/e31.webp";

type ImgItem = { src: string; alt?: string };

const items: ImgItem[] = [
  { src: e1, alt: "Elevi și instructori" },
  { src: e2, alt: "Elevi și instructori" },
  { src: e3, alt: "Elevi și instructori" },
  { src: e6, alt: "Elevi și instructori" },
  { src: e7, alt: "Elevi și instructori" },
  { src: e9, alt: "Elevi și instructori" },
  { src: e10, alt: "Elevi și instructori" },
  { src: e11, alt: "Elevi și instructori" },
  { src: e12, alt: "Elevi și instructori" },
  { src: e13, alt: "Elevi și instructori" },
  { src: e14, alt: "Elevi și instructori" },
  { src: e16, alt: "Elevi și instructori" },
  { src: e17, alt: "Elevi și instructori" },
  { src: e18, alt: "Elevi și instructori" },
  { src: e19, alt: "Elevi și instructori" },
  { src: e20, alt: "Elevi și instructori" },
  { src: e21, alt: "Elevi și instructori" },
  { src: e22, alt: "Elevi și instructori" },
  { src: e23, alt: "Elevi și instructori" },
  { src: e24, alt: "Elevi și instructori" },
  { src: e25, alt: "Elevi și instructori" },
  { src: e26, alt: "Elevi și instructori" },
  { src: e27, alt: "Elevi și instructori" },
  { src: e29, alt: "Elevi și instructori" },
  { src: e30, alt: "Elevi și instructori" },
  { src: e31, alt: "Elevi și instructori" }
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ImgItem | null>(null);

  const open = (item: ImgItem) => {
    setActive(item);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <div id="gallery" className="fade-in">
      <Helmet>
        <title>
          Galerie Foto | Scoala de soferi TopalX | Școala de Șoferi din București
        </title>
        <meta
          name="description"
          content="Explorează galeria foto a Scoala de soferi TopalX - școala de șoferi din București. Vezi imagini cu instructorii noștri profesioniști, mașinile moderne și cursurile de conducere defensive."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold">
          {t("gallery.galleryTitle")}
        </h2>
        <div className="w-24 h-[2px] bg-slate-300 mx-auto my-6" />
        <p className="text-center text-slate-600 mb-10">
          {t("gallery.galleryDescription")}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => open(it)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100"
              aria-label={`Deschide imaginea ${i + 1}`}
            >
              <img
                src={it.src}
                alt={it.alt ?? "galerie"}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 m-2 rounded-md bg-black/40 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                {it.alt ?? "TopalX"}
              </span>
            </button>
          ))}
        </div>

        {/* Lightbox dialog */}
        <dialog
          ref={dialogRef}
          className="backdrop:bg-black/70 rounded-xl p-0 outline-none"
          onClose={() => setActive(null)}
        >
          <div className="relative">
            <button
              onClick={close}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-white text-sm"
              aria-label="Închide"
            >
              ✕
            </button>
            {active && (
              <img
                src={active.src}
                alt={active.alt ?? "galerie"}
                className="max-h-[85vh] w-auto object-contain rounded-xl"
              />
            )}
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Gallery;
