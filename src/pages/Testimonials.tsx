import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";
import { useTranslation } from "react-i18next";
import "../index.css";

import c1 from "../images/c1.webp";
import c2 from "../images/c2.webp";
import c3 from "../images/c3.webp";
import c7 from "../images/c7.webp";
import c9 from "../images/c9.webp";
import c10 from "../images/c10.webp";
import c6 from "../images/c6.webp";
import c4 from "../images/c4.webp";
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

export interface TestimonialsHandle {
  scrollToTestimonials: () => void;
}

const Testimonials = forwardRef<TestimonialsHandle, TestimonialsProps>(
  ({ testimonials = [] }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

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

    return (
      <>
        <section id="testimonials" ref={internalRef} className="py-20">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {/* HEADER + TRUST */}
            <header className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t("testimonials.title")}
              </h2>

              <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-logoBlue/60" />

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                  {t("testimonials.cipGoogRev")}
                </span>

                <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                 {t("testimonials.cipOver500")}
                </span>
              </div>
            </header>

            {/* PROOF WALL */}
            <div
              className="
                flex gap-4 overflow-x-auto pb-4
                snap-x snap-mandatory
                lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible
              "
            >
              {finalTestimonials.map((item) => (
                <article
                  key={item.id}
                  className="
                    snap-start
                    min-w-[260px] sm:min-w-[300px] lg:min-w-0
                    rounded-2xl border border-black/10 bg-white
                    shadow-sm
                  "
                >
                  <div className="aspect-[3/4] bg-slate-50 p-3 rounded-2xl">
                    <img
                      src={item.avatar}
                      alt={item.caption || "Google Review"}
                      loading="lazy"
                      className="h-full w-full object-contain rounded-xl"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TipsAndTricks />
      </>
    );
  }
);

Testimonials.displayName = "Testimonials";
export default Testimonials;
