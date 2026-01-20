import React, { useRef, useState, useEffect, useMemo } from "react";
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
  { src: e1, alt: "TopalX – elevi și instructori" },
  { src: e2, alt: "TopalX – lecții de conducere" },
  { src: e3, alt: "TopalX – pregătire practică" },
  { src: e6, alt: "TopalX – moment din curs" },
  { src: e7, alt: "TopalX – cursanți" },
  { src: e9, alt: "TopalX – instructori" },
  { src: e10, alt: "TopalX – atmosferă în clasă" },
  { src: e11, alt: "TopalX – pregătire examen" },
  { src: e12, alt: "TopalX – curs de conducere" },
  { src: e13, alt: "TopalX – elevi" },
  { src: e14, alt: "TopalX – echipa" },
  { src: e16, alt: "TopalX – practică" },
  { src: e17, alt: "TopalX – cursanți" },
  { src: e18, alt: "TopalX – training" },
  { src: e19, alt: "TopalX – lecții" },
  { src: e20, alt: "TopalX – curs" },
  { src: e21, alt: "TopalX – elevi și instructori" },
  { src: e22, alt: "TopalX – ședință practică" },
  { src: e23, alt: "TopalX – școală auto" },
  { src: e24, alt: "TopalX – cursanți" },
  { src: e25, alt: "TopalX – pregătire" },
  { src: e26, alt: "TopalX – echipă" },
  { src: e27, alt: "TopalX – practică" },
  { src: e29, alt: "TopalX – elevi" },
  { src: e30, alt: "TopalX – școală de șoferi" },
  { src: e31, alt: "TopalX – București" },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = useMemo(
    () => (activeIndex === null ? null : items[activeIndex]),
    [activeIndex]
  );

  const open = (index: number) => {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const prev = () => {
    setActiveIndex((i) => {
      if (i === null) return 0;
      return (i - 1 + items.length) % items.length;
    });
  };

  const next = () => {
    setActiveIndex((i) => {
      if (i === null) return 0;
      return (i + 1) % items.length;
    });
  };

  // Keyboard navigation when dialog is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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

      <section className="py-16">
        {/* MAX WIDTH WRAPPER */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <header className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t("gallery.galleryTitle")}
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-logoBlue/60" />
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              {t("gallery.galleryDescription")}
            </p>
          </header>

          {/* GRID (cu 2 tile-uri featured pentru “premium rhythm”) */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {items.map((it, i) => {
              const isFeatured = i === 0 || i === 5; // poți schimba ușor
              return (
                <button
                  key={i}
                  onClick={() => open(i)}
                  className={`
                    group relative overflow-hidden rounded-2xl bg-slate-100
                    border border-black/10 shadow-sm transition
                    hover:-translate-y-0.5 hover:shadow-lg
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-logoBlue/40
                    ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}
                  `}
                  aria-label={`Deschide imaginea ${i + 1}`}
                >
                  <div className={`${isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"} w-full`}>
                    <img
                      src={it.src}
                      alt={it.alt ?? "galerie TopalX"}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* index badge discret (nu text redundant) */}
               
                </button>
              );
            })}
          </div>

          {/* Lightbox dialog */}
          <dialog
            ref={dialogRef}
            className="backdrop:bg-black/70 rounded-2xl p-0 outline-none"
            onClose={() => setActiveIndex(null)}
            onClick={(e) => {
              // click pe backdrop inchide (premium UX)
              if (e.currentTarget === e.target) close();
            }}
          >
            <div className="relative">
              {/* close */}
              <button
                onClick={close}
                className="absolute right-3 top-3 z-20 rounded-full bg-black/60 px-3 py-1 text-white text-sm"
                aria-label="Închide"
              >
                ✕
              </button>

              {/* prev/next */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white"
                aria-label="Următor"
              >
                ›
              </button>

              {active && (
                <div className="bg-black">
                  <img
                    src={active.src}
                    alt={active.alt ?? "galerie"}
                    className="max-h-[85vh] w-auto object-contain rounded-2xl"
                  />
                </div>
              )}
            </div>
          </dialog>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
