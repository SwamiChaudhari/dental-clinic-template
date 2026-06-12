"use client";

import { useEffect, useRef, useState } from "react";

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

  return (
    <section id="gallery" ref={ref} className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dental-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-dental-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Smile Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Before & After <span className="text-teal-400">Gallery</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-navy-300 text-lg max-w-3xl mx-auto">
            See the real results our patients have achieved. Every smile tells a
            story of transformation and renewed confidence.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 ${
            inView ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          {cases.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setActiveCase(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCase === i
                  ? "bg-gradient-to-r from-dental-500 to-teal-500 text-white shadow-lg"
                  : "bg-white/5 text-navy-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* Active case display */}
        <div
          className={`max-w-4xl mx-auto ${
            inView ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Before */}
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 bg-navy-800/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEFORE
                </div>
                <div
                  className={`aspect-[4/3] rounded-2xl ${cases[activeCase].beforeColor} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto text-navy-400 mb-2"
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
                  className={`aspect-[4/3] rounded-2xl ${cases[activeCase].afterColor} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto text-teal-600 mb-2"
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

            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {cases[activeCase].title}
              </h3>
              <p className="text-navy-300 mb-3">
                {cases[activeCase].description}
              </p>
              <span className="inline-block bg-gradient-to-r from-dental-500 to-teal-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                {cases[activeCase].improvement}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail row */}
        <div
          className={`flex justify-center gap-3 mt-8 ${
            inView ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          {cases.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setActiveCase(i)}
              className={`w-16 h-16 rounded-xl border-2 transition-all flex items-center justify-center ${
                activeCase === i
                  ? "border-dental-400 scale-110"
                  : "border-white/10 opacity-50 hover:opacity-80"
              } ${c.afterColor}`}
            >
              <span className="text-xs font-bold text-navy-700">
                {c.title.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
