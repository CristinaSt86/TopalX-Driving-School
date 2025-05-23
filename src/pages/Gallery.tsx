import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../index.css";
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

const images: ReactImageGalleryItem[] = [
  { original: e1, thumbnail: e1 },
  { original: e2, thumbnail: e2 },
  { original: e3, thumbnail: e3 },
  { original: e6, thumbnail: e6 },
  { original: e7, thumbnail: e7 },
  { original: e9, thumbnail: e9 },
  { original: e10, thumbnail: e10 },
  { original: e11, thumbnail: e11 },
  { original: e12, thumbnail: e12 },
  { original: e13, thumbnail: e13 },
  { original: e14, thumbnail: e14 },
  { original: e16, thumbnail: e16 },
  { original: e17, thumbnail: e17 },
  { original: e18, thumbnail: e18 },
  { original: e19, thumbnail: e19 },
  { original: e20, thumbnail: e20 },
  { original: e21, thumbnail: e21 },
  { original: e22, thumbnail: e22 },
  { original: e23, thumbnail: e23 },
  { original: e24, thumbnail: e24 },
  { original: e25, thumbnail: e25 },
  { original: e26, thumbnail: e26 },
  { original: e27, thumbnail: e27 },
  { original: e29, thumbnail: e29 },
  { original: e30, thumbnail: e30 },
  { original: e31, thumbnail: e31 },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const renderItem = (item: ReactImageGalleryItem) => (
    <img
      src={item.original}
      alt="Fotografii cu elevi si instructori"
      loading="lazy"
      className="w-full max-h-[100vh] object-contain mx-auto"
    />
  );
  return (
    <div id="gallery" className={`${animate ? "slide-in" : ""}`}>
      <Helmet>
        <title>
          Galerie Foto | Scoala de soferi TopalX | Școala de Șoferi din
          București
        </title>
        <meta
          name="description"
          content="Explorează galeria foto a Scoala de soferi TopalX - școala de șoferi din București. Vezi imagini cu instructorii noștri profesioniști, mașinile moderne și cursurile de conducere defensive."
        />
        <meta
          name="keywords"
          content="galerie foto școală de șoferi, imagini școală de șoferi, instructori profesioniști, mașini moderne, cursuri de conducere defensive, permis auto, TopalX București"
        />
        <meta name="author" content="Scoala de soferi TopalX" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Galerie Foto - Scoala de soferi TopalX - Școala de Șoferi din București"
        />
        <meta
          property="og:description"
          content="Explorează galeria foto a Scoala de soferi TopalX - școala de șoferi din București. Vezi imagini cu instructorii noștri profesioniști, mașinile moderne și cursurile de conducere defensive."
        />
        <meta
          property="og:url"
          content="https://www.topalxscoalaauto.ro/gallery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.topalxscoalaauto.ro/images/e2.webp"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="TopalX Scoala Auto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Galerie Foto - Scoala de soferi TopalX - Școala de Șoferi din București"
        />
        <meta
          property="twitter:description"
          content="Explorează galeria foto a Scoala de soferi TopalX - școala de șoferi din București. Vezi imagini cu instructorii noștri profesioniști, mașinile moderne și cursurile de conducere defensive."
        />
        <meta
          property="twitter:image"
          content="https://www.topalxscoalaauto.ro/images/e19.webp"
        />
        <meta property="twitter:site" content="@TopalXScoalaAuto" />
        <meta property="twitter:creator" content="@TopalXScoalaAuto" />
      </Helmet>

      <div className="shadow-xl container mx-auto rounded-md p-4 my-24 border-2 border-secondary">
        <h2 className="text-center text-3xl font-bold  mt-16 pl-4 pr-4">
          {t("gallery.galleryTitle")}
        </h2>
        <div className="w-16 h-[2px] bg-primary mx-auto my-8"></div>
        <p className="text-center mt-16 mb-16">
          {t("gallery.galleryDescription")}
        </p>
        <div className="gallery-wrapper">
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={true}
            showFullscreenButton={true}
            showIndex={true}
            autoPlay={false}
            slideDuration={300}
            slideInterval={2000}
            renderItem={renderItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
