"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const testimonials = [
  {
    name: "Jennifer R.",
    rating: 5,
    text: "Dr. Mitchell completely transformed my smile! The veneers look so natural and I finally feel confident smiling in photos. The entire team was incredibly professional and caring.",
    treatment: "Smile Makeover",
    initials: "JR",
    color: "bg-dental-500",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "I was terrified of getting dental implants, but Dr. Mitchell made the entire process painless. The results are amazing — you can't even tell I have an implant. Best dental experience ever!",
    treatment: "Dental Implants",
    initials: "MT",
    color: "bg-teal-500",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "My Invisalign treatment was a game-changer. Dr. Mitchell's plan was perfect and I finished ahead of schedule. My teeth have never looked better. Highly recommend Bright Smile Dental!",
    treatment: "Invisalign",
    initials: "SK",
    color: "bg-navy-600",
  },
  {
    name: "David L.",
    rating: 5,
    text: "The emergency care here is outstanding. I had a severe toothache on a Saturday and they got me in immediately. Dr. Mitchell saved my tooth with a root canal. Forever grateful!",
    treatment: "Emergency Care",
    initials: "DL",
    color: "bg-gold-500",
  },
  {
    name: "Amanda P.",
    rating: 5,
    text: "Both my kids love coming to Bright Smile Dental! The staff is so patient and gentle with children. The teeth whitening I got there was the best I've ever had. 10/10!",
    treatment: "Family Dentistry",
    initials: "AP",
    color: "bg-dental-400",
  },
  {
    name: "Robert H.",
    rating: 5,
    text: "After years of avoiding the dentist, I finally found a practice I trust. Dr. Mitchell explained everything clearly and the financing option made my treatment affordable. Life-changing!",
    treatment: "Full Restoration",
    initials: "RH",
    color: "bg-teal-600",
  },
];

export default function Testimonials() {
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16; // card width + gap
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, testimonials.length - 1));
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-12 sm:py-20 lg:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-dental-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Patient Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900 mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-navy-600 text-base sm:text-lg max-w-3xl mx-auto">
            Don&apos;t just take our word for it — hear from real patients who
            have experienced the Bright Smile difference.
          </p>
          {/* Google rating */}
          <div className="inline-flex items-center gap-2 sm:gap-3 mt-6 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-navy-100 w-full sm:w-auto justify-center">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-navy-500">
                4.9 out of 5 based on 320+ reviews
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-card
                className={`card-hover bg-white rounded-2xl p-5 border border-navy-100/50 shadow-sm w-[85vw] shrink-0 snap-start ${
                  inView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-gold-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-navy-700 text-base leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Treatment tag */}
                <span className="inline-block text-xs font-semibold text-dental-600 bg-dental-50 px-3 py-1 rounded-full mb-4">
                  {t.treatment}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                  <div
                    className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-navy-500">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-dental-500 w-6"
                    : "bg-navy-200 hover:bg-navy-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet: 2-col grid */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-hover bg-white rounded-2xl p-6 border border-navy-100/50 shadow-sm ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-navy-700 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Treatment tag */}
              <span className="inline-block text-xs font-semibold text-dental-600 bg-dental-50 px-3 py-1 rounded-full mb-4">
                {t.treatment}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-navy-500">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-hover bg-white rounded-2xl p-6 border border-navy-100/50 shadow-sm ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-navy-700 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Treatment tag */}
              <span className="inline-block text-xs font-semibold text-dental-600 bg-dental-50 px-3 py-1 rounded-full mb-4">
                {t.treatment}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-navy-500">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
