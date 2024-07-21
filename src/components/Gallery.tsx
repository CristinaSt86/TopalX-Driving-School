// import React, { useEffect, useState } from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { useTranslation } from "react-i18next";
// import Modal from "./Modal";

// interface ImageType {
//   original: string;
//   thumbnail: string;
// }

// const images: ImageType[] = [
//   { original: "/images/e1.jpg", thumbnail: "/images/e1.jpg" },
//   { original: "/images/e2.webp", thumbnail: "/images/e2.webp" },
//   { original: "/images/e3.webp", thumbnail: "/images/e3.webp" },
//   { original: "/images/e4.webp", thumbnail: "/images/e4.webp" },
//   { original: "/images/e6.webp", thumbnail: "/images/e6.webp" },
//   { original: "/images/e7.webp", thumbnail: "/images/e7.webp" },
//   { original: "/images/e8.webp", thumbnail: "/images/e8.webp" },
//   { original: "/images/e9.webp", thumbnail: "/images/e9.webp" },
//   { original: "/images/e10.webp", thumbnail: "/images/e10.webp" },
//   { original: "/images/e11.webp", thumbnail: "/images/e11.webp" },
//   { original: "/images/e12.webp", thumbnail: "/images/e12.webp" },
//   { original: "/images/e13.webp", thumbnail: "/images/e13.webp" },
//   { original: "/images/e14.webp", thumbnail: "/images/e14.webp" },
//   { original: "/images/e15.jpg", thumbnail: "/images/e15.jpg" },
//   { original: "/images/e16.webp", thumbnail: "/images/e16.webp" },
//   { original: "/images/e17.webp", thumbnail: "/images/e17.webp" },
//   { original: "/images/e18.webp", thumbnail: "/images/e18.webp" },
//   { original: "/images/e19.webp", thumbnail: "/images/e19.webp" },
//   { original: "/images/e20.jpg", thumbnail: "/images/e20.jpg" },
//   { original: "/images/e21.webp", thumbnail: "/images/e21.webp" },
//   { original: "/images/e22.webp", thumbnail: "/images/e22.webp" },
//   { original: "/images/e23.webp", thumbnail: "/images/e23.webp" },
//   { original: "/images/e24.jpg", thumbnail: "/images/e24.jpg" },
//   { original: "/images/e25.webp", thumbnail: "/images/e25.webp" },
//   { original: "/images/e26.webp", thumbnail: "/images/e26.webp" },
//   { original: "/images/e27.webp", thumbnail: "/images/e27.webp" },
//   { original: "/images/e28.webp", thumbnail: "/images/e28.webp" },
//   { original: "/images/e29.webp", thumbnail: "/images/e29.webp" },
//   { original: "/images/e30.webp", thumbnail: "/images/e30.webp" },
//   { original: "/images/e31.jpg", thumbnail: "/images/e31.jpg" },
// ];

// const Gallery: React.FC = () => {
//   const { t } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);
//   const [animate, setAnimate] = useState(false);

//   const handleImageClick = (index: number) => {
//     setPhotoIndex(index);
//     setIsOpen(true);
//   };

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   return (
//     <div className={` ${animate ? "slide-in" : ""}`}>
//       <h2 className="text-center text-3xl font-bold mb-16 mt-16 pl-4 pr-4">
//         {t("gallery.galleryTitle")}
//       </h2>
//       <div className="shadow-custom bg-customBg container mx-auto rounded-2xl p-4 mb-16 mt-10 border-2 border-secondary">
//         <p className="text-center mb-16 font-semibold">
//           {t("gallery.galleryDescription")}
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {images.map((image, index) => (
//             <div key={index} className="relative w-full h-48 overflow-hidden">
//               <img
//                 src={image.original}
//                 alt={`Gallery Item ${index + 1}`}
//                 className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition-opacity duration-300 rounded-lg"
//                 onClick={() => handleImageClick(index)}
//               />
//             </div>
//           ))}
//         </div>

//         <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//           <ImageGallery
//             items={images}
//             startIndex={photoIndex}
//             showThumbnails={false}
//             onSlide={(currentIndex) => setPhotoIndex(currentIndex)}
//             infinite={true}
//             showPlayButton={false}
//             showFullscreenButton={true}
//             showIndex={false}
//             showBullets={false}
//             autoPlay={true}
//           />
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";

interface ImageType {
  original: string;
  thumbnail: string;
}

const images: ImageType[] = [
  { original: "/images/e1.jpg", thumbnail: "/images/e1.jpg" },
  { original: "/images/e2.webp", thumbnail: "/images/e2.webp" },
  { original: "/images/e3.webp", thumbnail: "/images/e3.webp" },
  { original: "/images/e4.webp", thumbnail: "/images/e4.webp" },
  { original: "/images/e6.webp", thumbnail: "/images/e6.webp" },
  { original: "/images/e7.webp", thumbnail: "/images/e7.webp" },
  { original: "/images/e8.webp", thumbnail: "/images/e8.webp" },
  { original: "/images/e9.webp", thumbnail: "/images/e9.webp" },
  { original: "/images/e10.webp", thumbnail: "/images/e10.webp" },
  { original: "/images/e11.webp", thumbnail: "/images/e11.webp" },
  { original: "/images/e12.webp", thumbnail: "/images/e12.webp" },
  { original: "/images/e13.webp", thumbnail: "/images/e13.webp" },
  { original: "/images/e14.webp", thumbnail: "/images/e14.webp" },
  { original: "/images/e15.jpg", thumbnail: "/images/e15.jpg" },
  { original: "/images/e16.webp", thumbnail: "/images/e16.webp" },
  { original: "/images/e17.webp", thumbnail: "/images/e17.webp" },
  { original: "/images/e18.webp", thumbnail: "/images/e18.webp" },
  { original: "/images/e19.webp", thumbnail: "/images/e19.webp" },
  { original: "/images/e20.jpg", thumbnail: "/images/e20.jpg" },
  { original: "/images/e21.webp", thumbnail: "/images/e21.webp" },
  { original: "/images/e22.webp", thumbnail: "/images/e22.webp" },
  { original: "/images/e23.webp", thumbnail: "/images/e23.webp" },
  { original: "/images/e24.jpg", thumbnail: "/images/e24.jpg" },
  { original: "/images/e25.webp", thumbnail: "/images/e25.webp" },
  { original: "/images/e26.webp", thumbnail: "/images/e26.webp" },
  { original: "/images/e27.webp", thumbnail: "/images/e27.webp" },
  { original: "/images/e28.webp", thumbnail: "/images/e28.webp" },
  { original: "/images/e29.webp", thumbnail: "/images/e29.webp" },
  { original: "/images/e30.webp", thumbnail: "/images/e30.webp" },
  { original: "/images/e31.jpg", thumbnail: "/images/e31.jpg" },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [modalTop, setModalTop] = useState(0); // New state for modal top position

  const handleImageClick = (index: number, event: React.MouseEvent) => {
    setPhotoIndex(index);
    setIsOpen(true);
    const topPosition = event.currentTarget.getBoundingClientRect().top + window.scrollY;
    setModalTop(topPosition); // Capture the top position of the clicked image
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={` ${animate ? "slide-in" : ""}`}>
      <h2 className="text-center text-3xl font-bold mb-16 mt-16 pl-4 pr-4">
        {t("gallery.galleryTitle")}
      </h2>
      <div className="shadow-custom bg-customBg container mx-auto rounded-2xl p-4 mb-16 mt-10 border-2 border-secondary">
        <p className="text-center mb-16 font-semibold">
          {t("gallery.galleryDescription")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-48 overflow-hidden">
              <img
                src={image.original}
                alt={`Gallery Item ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition-opacity duration-300 rounded-lg"
                onClick={(event) => handleImageClick(index, event)}
              />
            </div>
          ))}
        </div>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} top={modalTop}>
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
