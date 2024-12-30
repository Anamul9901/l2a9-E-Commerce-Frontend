"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import homeImage from "../../../public/home-image.png";
import Image from "next/image";

const slides = [
  {
    image: homeImage,
    cupon: "summer30",
    header: "UP to 30% off",
    title: "Summer Collection",
    desc: "Explore our summer collection!",
    colorCode: "#eb4034",
    bgColorCode: "#FFE4E1", // Soft coral pink
  },
  {
    image: homeImage,
    cupon: "winter40",
    header: "UP to 40% off",
    title: "Winter Sale",
    desc: "For a limited time only!",
    colorCode: "#fc8a3d",
    bgColorCode: "#FFF4E1", // Soft peach
  },
  {
    image: homeImage,
    cupon: "New25",
    header: "UP to 25% off",
    title: "New Arrivals",
    desc: "Check out the latest trends!",
    colorCode: "#df3dfc",
    bgColorCode: "#F1E1FF", // Soft lavender
  },
];

export default function HeroSection({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div
      className="flex justify-center items-center w-full h-full pt-12 px-4"
      style={{ backgroundColor: slides[curr].bgColorCode }}
    >
      <div className="relative w-full max-w-screen-lg h-full overflow-hidden">
        {/* Slides Container */}
        <div
          className="flex transition-transform ease-out duration-500 w-full"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="min-w-full h-full items-center text-center md:flex justify-between w-full"
            >
              <div className="mt-4 space-y-2">
                <p
                  className="text-md uppercase"
                  style={{ color: item.colorCode }}
                >
                  {item.cupon}
                </p>
                <h2
                  className="text-6xl uppercase font-extrabold"
                  style={{ color: item.colorCode }}
                >
                  {item.header}
                </h2>
                <h3 className="text-4xl uppercase font-bold">{item.title}</h3>
                <p className="text-default-500 text-xl">{item.desc}</p>
              </div>
              {/* Slide Content */}
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="md:w-[400px] object-cover pt-8"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* <div className="absolute inset-0 flex items-center justify-between px-4 w-full">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white/20 text-gray-800 hover:bg-white/60"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-white/20 text-gray-800 hover:bg-white/60"
          >
            <ChevronRight size={30} />
          </button>
        </div> */}

        {/* Indicators */}
        <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                curr === i ? "bg-white p-1" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
