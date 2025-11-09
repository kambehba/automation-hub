import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import i1 from "../assets/images/i30.jpg";
import i2 from "../assets/images/i28.jpg";
import i3 from "../assets/images/i25.jpg";
import i4 from "../assets/images/i27.jpg";
import i5 from "../assets/images/i34.jpg";
import i6 from "../assets/images/i35.jpg";
import i7 from "../assets/images/i36.jpg";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: i1,
      text: "Debugging PLC Programs , prepearing to run test cases",
    },
    {
      image: i2,
      text: "24 Ton Crane Control System",
    },
    {
      image: i3,
      text: "Conveyor Belt System with Sorting Mechanism",
    },
    {
      image: i4,
      text: "Extruder Machine Automation Setup",
    },
    {
      image: i5,
      text: "Extruder Machine Automation Setup",
    },
    {
      image: i6,
      text: "Extruder Machine Automation Setup",
    },
    {
      image: i7,
      text: "Extruder Machine Automation Setup",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  //   useEffect(() => {
  //     const interval = setInterval(nextSlide, 10000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      {/* Fixed Header */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 md:mb-12 text-center tracking-tight">
        PLC Automation Gallery
      </h1>

      {/* Image Slider Container */}
      <div className="relative w-full max-w-6xl">
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-800">
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].text}
            className="w-full h-auto object-contain transition-opacity duration-500"
            key={currentIndex}
            priority
          />

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text Below Image */}
        <div className="mt-6 text-center">
          <p className="text-2xl md:text-4xl font-semibold text-white transition-opacity duration-500">
            {slides[currentIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
}
