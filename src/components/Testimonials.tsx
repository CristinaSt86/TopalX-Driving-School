import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
import c5 from "../images/c5.jpg";
import c6 from "../images/c6.jpg";
import c7 from "../images/c7.jpg";
import c8 from "../images/c8.jpg";
import c9 from "../images/c9.jpg";
import c10 from "../images/c10.jpg";
import "../index.css";

export type Testimonial = {
  id: number;
  avatar: string;
  caption?: string;
};

interface TestimonialsProps {
  testimonials: Testimonial[];
}

interface TestimonialsHandle {
  scrollToTestimonials: () => void;
}

const Testimonials = forwardRef<TestimonialsHandle, TestimonialsProps>(
  ({ testimonials }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();
    const [animate, setAnimate] = useState(false);

    useImperativeHandle(ref, () => ({
      scrollToTestimonials: () => {
        internalRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    const localTestimonials: Testimonial[] = [
      { id: 1, avatar: c1, caption: t("testimonials.0.caption") },
      { id: 2, avatar: c2, caption: t("testimonials.1.caption") },
      { id: 3, avatar: c3, caption: t("testimonials.2.caption") },
      { id: 7, avatar: c7, caption: t("testimonials.6.caption") },
      { id: 9, avatar: c9, caption: t("testimonials.8.caption") },
      { id: 10, avatar: c10, caption: t("testimonials.9.caption") },
      // { id: 5, avatar: c5, caption: t("testimonials.4.caption") },
      { id: 6, avatar: c6, caption: t("testimonials.5.caption") },
      { id: 4, avatar: c4, caption: t("testimonials.3.caption") },
      { id: 8, avatar: c8, caption: t("testimonials.7.caption") },
    ];

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
      <div className={` ${animate ? "slide-in" : ""}`}>
        <h2 className="text-3xl font-bold text-center mt-16">{t("title")}</h2>
        <div
          ref={internalRef}
          className="bg-gray-100 p-8 mb-16 mt-16 shadow-custom  ellipse-img"
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center items-center">
              {localTestimonials.map(({ id, avatar, caption }, index) => (
                <div
                  key={id}
                  className={`p-10 max-w-sm shadow-custom overflow-hidden m-4 ellipse-img ${
                    animate
                      ? index < localTestimonials.length / 2
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
                      <p className="text-gray-700 text-base">{caption}</p>
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
