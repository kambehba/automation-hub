import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200",
      text: "Debugging PLC Programs, preparing to run test cases",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200",
      text: "24 Ton Crane Control System",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1200",
      text: "Conveyor Belt System with Sorting Mechanism",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200",
      text: "Extruder Machine Automation Setup",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1200",
      text: "Industrial Control Panel Configuration",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092446895-3e3d9fef4623?w=1200",
      text: "Automated Manufacturing Line",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092583537-20d51876f992?w=1200",
      text: "Robotic Assembly Integration",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 py-8">
      {/* Fixed Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center tracking-tight">
        PLC Automation Gallery
      </h1>

      {/* Image Slider Container */}
      <div className="relative w-full max-w-5xl flex-1 flex flex-col">
        {/* Main Image - Flexible container for full image display */}
        <div
          className="relative rounded-2xl shadow-2xl bg-slate-800 flex items-center justify-center overflow-hidden"
          style={{ height: "calc(100vh - 250px)", maxHeight: "800px" }}
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].text}
            className="max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-500"
            key={currentIndex}
          />

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
          <p className="text-xl md:text-3xl font-semibold text-white transition-opacity duration-500">
            {slides[currentIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
}
