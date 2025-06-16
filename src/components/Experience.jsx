import React, { useState } from 'react';
import Jsw from './Jsw';
import Matrimony from './Matrimony';

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const components = [<Jsw />, <Matrimony />];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? components.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === components.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative py-12 px-4 sm:px-6 md:px-24 min-h-screen bg-[#0e1116] overflow-hidden">
      <h1 className="text-[#C9D1D9] font-bold text-[32px] sm:text-[40px] md:text-[60px] mb-12 text-center">
        Experiences and Achievements
      </h1>

      {/* Gradient Backgrounds */}
      <div className="absolute -left-60 -bottom-60 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>
      <div className="absolute -right-60 -top-60 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-lg transition-all duration-700 ease-in-out">
          <div>{components[currentSlide]}</div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2 z-30 relative">
          {components.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:-left-12 z-30 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full"
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:-right-12 z-30 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full"
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Experience;
