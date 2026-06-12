"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutDentist() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const credentials = [
    "DMD, Harvard School of Dental Medicine",
    "Fellow, American Academy of Cosmetic Dentistry",
    "Diplomate, American Board of Oral Implantology",
    "Member, American Dental Association",
    "Invisalign Top 1% Provider",
    "Fellow, International Congress of Oral Implantologists",
  ];

  return (
    <section id="about" ref={ref} className="py-12 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-10 sm:mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-dental-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Meet Your Dentist
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            About <span className="gradient-text">Dr. Sarah Mitchell</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-navy-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Dedicated to providing exceptional dental care with a gentle touch
            and cutting-edge technology
          </p>
        </div>

        {/* Mobile-first: stack vertical on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative w-full max-w-sm mx-auto lg:max-w-none ${
              inView ? "animate-slide-left delay-200" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-navy-100 to-navy-200 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-dental-400 to-teal-400 flex items-center justify-center mb-4 shadow-xl">
                      <svg
                        className="w-14 h-14 sm:w-20 sm:h-20 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-navy-700 font-bold text-lg sm:text-xl">
                      Dr. Sarah Mitchell
                    </p>
                    <p className="text-navy-500 text-xs sm:text-sm">
                      DMD, FACD, DABOI
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience badge - repositioned for mobile */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-3 sm:p-5 border border-navy-100">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">15+</div>
                <div className="text-xs sm:text-sm text-navy-600 font-medium">
                  Years of Excellence
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dental-200 to-teal-200 rounded-3xl blur-2xl opacity-40 scale-105" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`${
              inView ? "animate-slide-right delay-300" : "opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4">
              A Passion for Creating Beautiful, Healthy Smiles
            </h3>
            <p className="text-navy-600 text-base leading-relaxed mb-6">
              Dr. Sarah Mitchell has been transforming smiles for over 15 years.
              A graduate of Harvard School of Dental Medicine, she combines
              advanced clinical expertise with a genuine passion for patient
              care. Her commitment to continuing education ensures she stays at
              the forefront of modern dentistry.
            </p>
            <p className="text-navy-600 text-base leading-relaxed mb-8">
              Known for her gentle approach and attention to detail, Dr. Mitchell
              takes time to understand each patient&apos;s unique needs,
              creating personalized treatment plans that deliver exceptional
              results. Her work in cosmetic dentistry and dental implants has
              earned her recognition as one of the top providers in the region.
            </p>

            {/* Credentials */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">
                Credentials & Memberships
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {credentials.map((cred) => (
                  <div key={cred} className="flex items-start gap-2 min-h-[44px] py-1">
                    <svg
                      className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-navy-700">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#appointment"
              className="btn-primary text-white w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 min-h-[48px] text-center"
            >
              Schedule With Dr. Mitchell
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
