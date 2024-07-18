import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import "../index.css";

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
      { id: 1, avatar: "/images/c1.jpg", caption: t("testimonials.items.0.caption") },
      { id: 2, avatar: "/images/c2.jpg", caption: t("testimonials.items.1.caption") },
      { id: 3, avatar: "/images/c3.jpg", caption: t("testimonials.items.2.caption") },
      { id: 7, avatar: "/images/c7.webp", caption: t("testimonials.items.6.caption") },
      { id: 9, avatar: "/images/c9.webp", caption: t("testimonials.items.8.caption") },
      { id: 10, avatar: "/images/c10.webp", caption: t("testimonials.items.9.caption") },
      { id: 6, avatar: "/images/c6.jpg", caption: t("testimonials.items.5.caption") },
      { id: 4, avatar: "/images/c4.jpg", caption: t("testimonials.items.3.caption") },
      { id: 8, avatar: "/images/c8.webp", caption: t("testimonials.items.7.caption") },
    ];

    const finalTestimonials = testimonials.length
      ? testimonials
      : localTestimonials;

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
      <div ref={internalRef} className={` ${animate ? "slide-in" : ""}`}>
        <h2 className="text-3xl font-bold text-center mt-16">
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
