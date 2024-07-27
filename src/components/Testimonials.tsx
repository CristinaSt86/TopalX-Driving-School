import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "../index.css";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c7 from "../images/c7.webp";
import c9 from "../images/c9.webp";
import c10 from "../images/c10.webp";
import c6 from "../images/c6.jpg";
import c4 from "../images/c4.jpg";
import c8 from "../images/c8.webp";

export type Testimonial = {
  id: number;
  avatar: string;
  caption?: string;
};

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

interface TestimonialsHandle {
  scrollToTestimonials: () => void;
}

const Testimonials = forwardRef<TestimonialsHandle, TestimonialsProps>(
  ({ testimonials = [] }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();
    const [animate, setAnimate] = useState(false);

    useImperativeHandle(ref, () => ({
      scrollToTestimonials: () => {
        internalRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    const localTestimonials: Testimonial[] = [
      { id: 1, avatar: c1, caption: t("testimonials.items.0.caption") },
      { id: 2, avatar: c2, caption: t("testimonials.items.1.caption") },
      { id: 3, avatar: c3, caption: t("testimonials.items.2.caption") },
      { id: 7, avatar: c7, caption: t("testimonials.items.6.caption") },
      { id: 9, avatar: c9, caption: t("testimonials.items.8.caption") },
      { id: 10, avatar: c10, caption: t("testimonials.items.9.caption") },
      { id: 6, avatar: c6, caption: t("testimonials.items.5.caption") },
      { id: 4, avatar: c4, caption: t("testimonials.items.3.caption") },
      { id: 8, avatar: c8, caption: t("testimonials.items.7.caption") },
    ];

    const finalTestimonials = testimonials.length
      ? testimonials
      : localTestimonials;

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
      <div ref={internalRef} className={` ${animate ? "slide-in" : ""}`}>
        <Helmet>
          <title>Testimoniale - TopalX - Școala de Șoferi din București</title>
          <meta
            name="description"
            content="Citiți mărturiile studenților noștri despre experiența lor cu TopalX - școală de șoferi de încredere din București. Află de ce suntem alegerea potrivită pentru obținerea permisului auto."
          />
          <meta
            name="keywords"
            content="testimoniale școală de șoferi, mărturii studenți TopalX, experiențe școală de șoferi București, TopalX București, permis auto, cursuri de conducere defensive"
          />
          <meta name="author" content="TopalX" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            property="og:title"
            content="Testimoniale - TopalX - Școala de Șoferi din București"
          />
          <meta
            property="og:description"
            content="Citiți mărturiile studenților noștri despre experiența lor cu TopalX - școală de șoferi de încredere din București. Află de ce suntem alegerea potrivită pentru obținerea permisului auto."
          />
          <meta
            property="og:url"
            content="https://www.topalxscoalaauto.ro/testimonials"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.topalxscoalaauto.ro/images/testimonials.jpg"
          />
          <meta property="og:locale" content="ro_RO" />
          <meta property="og:site_name" content="TopalX Scoala Auto" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Testimoniale - TopalX - Școala de Șoferi din București"
          />
          <meta
            property="twitter:description"
            content="Citiți mărturiile studenților noștri despre experiența lor cu TopalX - școală de șoferi de încredere din București. Află de ce suntem alegerea potrivită pentru obținerea permisului auto."
          />
          <meta
            property="twitter:image"
            content="https://www.topalxscoalaauto.ro/images/testimonials.jpg"
          />
          <meta property="twitter:site" content="@TopalXScoalaAuto" />
          <meta property="twitter:creator" content="@TopalXScoalaAuto" />
        </Helmet>
        <h2 className="text-3xl font-bold text-center mt-16 pl-3 pr-3">
          {t("testimonials.title")}
        </h2>
        <div className="bg-gray-100 p-8 mb-16 mt-16 shadow-custom ellipse-img">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center items-center">
              {finalTestimonials.map(({ id, avatar, caption }, index) => (
                <div
                  key={id}
                  className={`p-10 max-w-sm shadow-custom overflow-hidden m-4 ellipse-img ${
                    animate
                      ? index < finalTestimonials.length / 2
                        ? "slide-in-left"
                        : "slide-in-right"
                      : ""
                  }`}
                >
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={avatar}
                    alt={`Testimonial ${id}`}
                  />
                  {caption && (
                    <div className="px-6 py-4 hover:scale-125 transition-transform duration-300">
                      <p className="text-gray-700 text-base pt-3">{caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Testimonials;
