import React, { useEffect, useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";

// Import images from src/images directory
import e1 from "../images/e1.jpg";
import e2 from "../images/e2.webp";
import e3 from "../images/e3.webp";
import e4 from "../images/e4.webp";
import e6 from "../images/e6.webp";
import e7 from "../images/e7.webp";
import e8 from "../images/e8.webp";
import e9 from "../images/e9.webp";
import e10 from "../images/e10.webp";
import e11 from "../images/e11.webp";
import e12 from "../images/e12.webp";
import e13 from "../images/e13.webp";
import e14 from "../images/e14.webp";
import e15 from "../images/e15.jpg";
import e16 from "../images/e16.webp";
import e17 from "../images/e17.webp";
import e18 from "../images/e18.webp";
import e19 from "../images/e19.webp";
import e20 from "../images/e20.jpg";
import e21 from "../images/e21.webp";
import e22 from "../images/e22.webp";
import e23 from "../images/e23.webp";
import e24 from "../images/e24.jpg";
import e25 from "../images/e25.webp";
import e26 from "../images/e26.webp";
import e27 from "../images/e27.webp";
import e28 from "../images/e28.webp";
import e29 from "../images/e29.webp";
import e30 from "../images/e30.webp";
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
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const currentImageRef = imageRefs.current[photoIndex];
        if (currentImageRef) {
          currentImageRef.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (modalRef.current) {
          modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 0);
    }
  }, [isOpen, photoIndex]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`${animate ? "slide-in" : ""}`}>
      <h2 className="text-center text-3xl font-bold mb-16 mt-16 pl-4 pr-4">
        {t("gallery.galleryTitle")}
      </h2>
      <div className="shadow-custom bg-customBg container mx-auto rounded-2xl p-4 mb-16 mt-10 border-2 border-secondary">
        <p className="text-center mb-16 font-semibold">
          {t("gallery.galleryDescription")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-48 overflow-hidden"
              ref={(el) => (imageRefs.current[index] = el)}
            >
              <img
                src={image.original}
                alt={`Gallery Item ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition-opacity duration-300 rounded-lg"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="w-full h-full flex justify-center items-center" ref={modalRef}>
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
              autoPlay={false}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
