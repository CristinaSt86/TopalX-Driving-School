import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
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
import TipsAndTricks from "../components/TipsAndTricks";

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
      <div
        id="testimonials"
        ref={internalRef}
        className={` ${animate ? "slide-in" : ""}`}
      >
        <Helmet>
          <title>
            Testimoniale | Scoala de soferi TopalX | Școala de Șoferi din
            București
          </title>
          <meta
            name="description"
            content="Citiți mărturiile studenților noștri despre experiența lor cu Scoala de soferi TopalX - școală de șoferi de încredere din București. Află de ce suntem alegerea potrivită pentru obținerea permisului auto."
          />
          <meta
            name="keywords"
            content="testimoniale școală de șoferi, mărturii studenți Scoala de soferi TopalX, experiențe școală de șoferi București, TopalX București, permis auto, cursuri de conducere defensive"
          />
          <meta name="author" content="Scoala de soferi TopalX" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            property="og:title"
            content="Testimoniale - Scoala de soferi TopalX - Școala de Șoferi din București"
          />
          <meta
            property="og:description"
            content="Citiți mărturiile studenților noștri despre experiența lor cu Scoala de soferi TopalX - școală de șoferi de încredere din București. Află de ce suntem alegerea potrivită pentru obținerea permisului auto."
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
            content="Testimoniale - Scoala de soferi TopalX - Școala de Șoferi din București"
          />
          <meta
            property="twitter:description"
            content="Citiți mărturiile studenților noștri despre experiența lor cu Scoala de soferi TopalX - școală de șoferi de încredere din București. Află de ce suntem alegerea potrivită pentru obținerea permisului auto."
          />
          <meta
            property="twitter:image"
            content="https://www.topalxscoalaauto.ro/images/testimonials.jpg"
          />
          <meta property="twitter:site" content="@TopalXScoalaAuto" />
          <meta property="twitter:creator" content="@TopalXScoalaAuto" />
        </Helmet>

        <div className=" mx-auto p-4 mb-8 md:mb-16">
          <h2 className="text-3xl font-bold text-center mt-8 mb-16 pl-3 pr-3">
            {t("testimonials.title")}
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto my-8"></div>
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 items-center ellipse-img">
              {finalTestimonials.map(({ id, avatar, caption }, index) => (
                <div
                  key={id}
                  className={`p-10 max-w-sm shadow-2xl overflow-hidden m-2 ellipse-img ${
                    animate
                      ? index < finalTestimonials.length / 2
                        ? "slide-in-left"
                        : "slide-in-right"
                      : ""
                  }`}
                >
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={avatar}
                    alt={`Testimonial ${id}`}
                    loading="lazy"
                  
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <TipsAndTricks />
      </div>
    );
  }
);

export default Testimonials;
