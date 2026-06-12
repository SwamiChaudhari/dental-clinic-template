"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [inView, setInView] = useState(false);
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
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-dental-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dental-600/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm text-navy-200 font-medium">
                #1 Rated Dental Clinic in the City
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 ${
                inView ? "animate-fade-in-up delay-100" : "opacity-0"
              }`}
            >
              Transform Your{" "}
              <span className="gradient-text bg-gradient-to-r from-dental-300 via-teal-300 to-teal-400 bg-clip-text text-transparent">
                Smile
              </span>{" "}
              With Expert Care
            </h1>

            <p
              className={`text-lg sm:text-xl text-navy-200 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed ${
                inView ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              Providing advanced dental care, cosmetic dentistry, Invisalign,
              and dental implant solutions using modern technology and
              personalized treatment plans for the whole family.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 ${
                inView ? "animate-fade-in-up delay-300" : "opacity-0"
              }`}
            >
              <a
                href="#appointment"
                className="btn-primary text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl shadow-dental-500/20 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Appointment
              </a>
              <a
                href="tel:+155****4567"
                className="btn-gold text-navy-900 px-8 py-4 rounded-full text-base font-semibold shadow-xl flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>

            {/* Trust badges row */}
            <div
              className={`flex flex-wrap items-center gap-6 justify-center lg:justify-start ${
                inView ? "animate-fade-in-up delay-400" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {["bg-dental-400", "bg-teal-400", "bg-gold-400", "bg-navy-400"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 ${bg} rounded-full border-2 border-navy-900 flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {["J", "S", "M", "K"][i]}
                      </div>
                    )
                  )}
                </div>
                <div className="text-sm text-navy-300">
                  <span className="text-white font-semibold">2,500+</span>{" "}
                  Happy Patients
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-navy-300 font-medium">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>

          {/* Right - Image composition */}
          <div
            className={`relative hidden lg:block ${
              inView ? "animate-slide-right delay-300" : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-navy-950/50 border border-white/10">
                <div className="aspect-[4/5] bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center relative">
                  {/* Stylized dentist illustration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dental-500/10 to-transparent" />
                  <div className="text-center relative z-10 p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-dental-400 to-teal-400 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-white"
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
                    <p className="text-white/80 text-lg font-medium">
                      Expert Dental Care
                    </p>
                    <p className="text-navy-300 text-sm mt-1">
                      Professional & Compassionate
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card - top right */}
              <div className="absolute -top-6 -right-6 z-20 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-teal-600"
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
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900">
                      Same-Day
                    </p>
                    <p className="text-xs text-navy-500">
                      Emergency Care
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card - bottom left */}
              <div
                className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl shadow-xl p-4 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-dental-50 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-dental-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900">
                      $0 Down
                    </p>
                    <p className="text-xs text-navy-500">
                      Financing Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Glow behind */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dental-500/20 to-teal-500/20 rounded-3xl blur-2xl scale-105" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in delay-800">
          <span className="text-xs text-navy-400 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-navy-400/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-dental-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
