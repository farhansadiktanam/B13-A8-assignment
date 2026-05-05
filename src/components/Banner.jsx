"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Upgrade Your Skills Today 🚀",
    subtitle: "Learn from industry experts and build real-world projects.",
    bg: "/banner1.jpg",
  },
  {
    title: "Master Modern Technologies 💻",
    subtitle: "React, Next.js, AI & more — all in one place.",
    bg: "/banner2.jpg",
  },
  {
    title: "Build Real Projects 🔥",
    subtitle: "Create portfolio-ready applications.",
    bg: "/banner3.jpg",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
          }}
        >
          {/* Overlay */}
          <div className="w-full h-full bg-black/60 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>

              <div className="flex justify-center gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold">
                  Get Started
                </button>
                <button className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black">
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
