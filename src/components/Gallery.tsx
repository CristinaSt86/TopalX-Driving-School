/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import e1 from "../images/e1.jpg";
import e2 from "../images/e2.jpg";
import e3 from "../images/e3.jpg";
import e4 from "../images/e4.jpg";
import e6 from "../images/e6.jpg";
import e7 from "../images/e7.jpg";
import e8 from "../images/e8.jpg";
import e9 from "../images/e9.jpg";
import e10 from "../images/e10.jpg";
import e11 from "../images/e11.jpg";
import e12 from "../images/e12.jpg";
import e13 from "../images/e13.jpg";
import e14 from "../images/e14.jpg";
import e15 from "../images/e15.jpg";
import e16 from "../images/e16.jpg";
import e17 from "../images/e17.jpg";
import e18 from "../images/e18.jpg";
import e19 from "../images/e19.jpg";
import e20 from "../images/e20.jpg";
import e21 from "../images/e21.jpg";
import e22 from "../images/e22.jpg";
import e23 from "../images/e23.jpg";
import e24 from "../images/e24.jpg";
import e25 from "../images/e25.jpg";
import e26 from "../images/e26.jpg";
import e27 from "../images/e27.jpg";
import e28 from "../images/e28.jpg";
import e29 from "../images/e29.jpg";
import e30 from "../images/e30.jpg";
import e31 from "../images/e31.jpg";

interface ImageType {
  original: string;
  thumbnail: string;
}

const images: ImageType[] = [
  { original: e1, thumbnail: e1 },
  { original: e2, thumbnail: e2 },
  { original: e3, thumbnail: e3 },
  { original: e4, thumbnail: e4 },
  { original: e6, thumbnail: e6 },
  { original: e7, thumbnail: e7 },
  { original: e8, thumbnail: e8 },
  { original: e9, thumbnail: e9 },
  { original: e10, thumbnail: e10 },
  { original: e11, thumbnail: e11 },
  { original: e12, thumbnail: e12 },
  { original: e13, thumbnail: e13 },
  { original: e14, thumbnail: e14 },
  { original: e15, thumbnail: e15 },
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
  { original: e28, thumbnail: e28 },
  { original: e29, thumbnail: e29 },
  { original: e30, thumbnail: e30 },
  { original: e31, thumbnail: e31 },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={` ${animate ? "slide-in" : ""}`}>
      <h2 className="text-center text-3xl font-bold mb-16 mt-16 pl-4 pr-4">
        {t("galleryTitle")}
      </h2>
      <div className=" shadow-custom bg-customBg container mx-auto rounded-2xl p-4 mb-16 mt-10 border-2 border-secondary ">
        <p className="text-center mb-16 font-semibold">{t("galleryDescription")}</p>
        <div className="grid grid-cols-3 gap-4 ">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-48 overflow-hidden">
              <img
                src={image.original}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition-opacity duration-300 rounded-lg"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ImageGallery
            items={images}
            startIndex={photoIndex}
            showThumbnails={false}
            onSlide={(currentIndex) => setPhotoIndex(currentIndex)}
            infinite={true}
            showPlayButton={false}
            showFullscreenButton={true}
            showIndex={false}
            showBullets={false}
            autoPlay={true}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
