import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import poza1 from "../images/bgHome2.webp";
import poza2 from "../images/c4.jpg";
import poza3 from "../images/clasa3.webp";

const slides = [
  {
    image: { poza1 },
    title: "Slide 1 Title",
    description: "This is the description for Slide 1.",
  },
  {
    image: { poza2 },
    title: "Slide 2 Title",
    description: "This is the description for Slide 2.",
  },
  {
    image: { poza3 },
    title: "Slide 3 Title",
    description: "This is the description for Slide 3.",
  },
];

const BackgroundSlider: React.FC = () => {
  const settings = {
    dots: false, // You can enable dots if needed
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true, // Fade transition between slides
    arrows: false, // Hide arrows for a cleaner look
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-xl mt-2">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundSlider;
