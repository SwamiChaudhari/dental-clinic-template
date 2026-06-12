"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const cases = [
  {
    title: "Smile Makeover",
    category: "Cosmetic Dentistry",
    description:
      "Full smile transformation with veneers and teeth whitening for a stunning natural result.",
    beforeColor: "bg-navy-200",
    afterColor: "bg-teal-200",
    improvement: "Veneers + Whitening",
  },
  {
    title: "Invisalign Treatment",
    category: "Orthodontics",
    description:
      "12-month Invisalign treatment to correct crowding and achieve a perfectly aligned smile.",
    beforeColor: "bg-navy-200",
    afterColor: "bg-dental-200",
    improvement: "12 Months",
  },
  {
    title: "Dental Implant",
    category: "Implant Dentistry",
    description:
      "Single tooth implant replacing a missing front tooth with a natural-looking crown.",
    beforeColor: "bg-navy-200",
    afterColor: "bg-gold-200",
    improvement: "Single Implant",
  },
  {
    title: "Teeth Whitening",
    category: "Cosmetic",
    description:
      "Professional in-office whitening achieving 8 shades brighter in just one visit.",
    beforeColor: "bg-navy-200",
    afterColor: "bg-teal-200",
    improvement: "8 Shades Brighter",
  },
];

export default function Gallery() {
  const [inView, setInView] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const absDx = Math.abs(deltaX);
    const absDy = Math.abs(deltaY);

    // Only trigger swipe if horizontal movement dominates and exceeds threshold
    if (absDx > 50 && absDx > absDy * 1.5) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  return (
    <section id="gallery" ref={ref} className="py-12 sm:py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dental-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-14 lg:mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-dental-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Smile Transformations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
            Before & After <span className="text-teal-400">Gallery</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-navy-300 text-base sm:text-lg max-w-3xl mx-auto">
            See the real results our patients have achieved. Every smile tells a
            story of transformation and renewed confidence.
          </p>
        </div>

        {/* Category tabs — scrollable row on mobile */}
        <div
          className={`mb-8 sm:mb-12 ${
            inView ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <div
            className="flex flex-nowrap gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {cases.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActiveCase(i)}
                className={`flex-shrink-0 min-h-[40px] px-5 py-2 rounded-full text-sm font-medium transition-all snap-center whitespace-nowrap ${
                  activeCase === i
                    ? "bg-gradient-to-r from-dental-500 to-teal-500 text-white shadow-lg"
                    : "bg-white/5 text-navy-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Active case display */}
        <div
          className={`max-w-4xl mx-auto ${
            inView ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Before / After — stacked on mobile, side-by-side on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {/* Before */}
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 bg-navy-800/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEFORE
                </div>
                <div
                  className={`w-full aspect-[16/10] md:aspect-[4/3] rounded-2xl ${cases[activeCase].beforeColor} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-navy-400 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-navy-500 text-sm font-medium">
                      Before Treatment
                    </p>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-teal-500 to-dental-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  AFTER
                </div>
                <div
                  className={`w-full aspect-[16/10] md:aspect-[4/3] rounded-2xl ${cases[activeCase].afterColor} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-teal-600 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-teal-700 text-sm font-medium">
                      After Treatment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case info — centered, responsive text */}
            <div className="text-center">
              <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                {cases[activeCase].title}
              </h3>
              <p className="text-navy-300 text-sm sm:text-base mb-3">
                {cases[activeCase].description}
              </p>
              <span className="inline-block bg-gradient-to-r from-dental-500 to-teal-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                {cases[activeCase].improvement}
              </span>
            </div>

            {/* Swipe hint on mobile */}
            <p className="text-center text-navy-500 text-xs mt-4 md:hidden">
              ← Swipe to browse cases →
            </p>
          </div>
        </div>

        {/* Thumbnail row — horizontally scrollable with snap */}
        <div
          className={`mt-6 sm:mt-8 ${
            inView ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <div
            className="flex flex-nowrap gap-3 overflow-x-auto pb-2 snap-x snap-mandatory justify-start sm:justify-center"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {cases.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActiveCase(i)}
                className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 transition-all flex items-center justify-center snap-center ${
                  activeCase === i
                    ? "border-dental-400 scale-110"
                    : "border-white/10 opacity-50 hover:opacity-80"
                } ${c.afterColor}`}
              >
                <span className="text-[10px] sm:text-xs font-bold text-navy-700">
                  {c.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
