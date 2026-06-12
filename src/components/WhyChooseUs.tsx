"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "Advanced Technology",
    description:
      "Digital X-rays, 3D imaging, laser dentistry, and CAD/CAM same-day crowns for precise, comfortable care.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Experienced Team",
    description:
      "Led by Dr. Sarah Mitchell with 15+ years of expertise in cosmetic, restorative, and implant dentistry.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    title: "Comfortable Environment",
    description:
      "Relaxing office with noise-canceling headphones, blankets, sedation options, and a caring staff.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "Flexible Financing",
    description:
      "0% interest financing, payment plans, and we accept most major insurance plans to make care affordable.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Emergency Care",
    description:
      "Same-day emergency appointments available. Call our 24/7 emergency hotline for urgent dental needs.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a11 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    title: "Personalized Treatment",
    description:
      "Every treatment plan is customized to your unique dental needs, goals, and budget.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    ),
  },
];

export default function WhyChooseUs() {
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
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image composition */}
          <div
            className={`relative ${
              inView ? "animate-slide-left delay-200" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-dental-100 to-dental-200 flex items-center justify-center shadow-lg">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto bg-dental-500 rounded-full flex items-center justify-center mb-2">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <p className="text-navy-700 font-semibold text-sm">
                      Modern Equipment
                    </p>
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center shadow-lg">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto bg-teal-500 rounded-full flex items-center justify-center mb-2">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-navy-700 font-semibold text-sm">
                      Expert Team
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center shadow-lg">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto bg-navy-600 rounded-full flex items-center justify-center mb-2">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-navy-700 font-semibold text-sm">
                      Same-Day Care
                    </p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center shadow-lg">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto bg-gold-500 rounded-full flex items-center justify-center mb-2">
                      <svg
                        className="w-8 h-8 text-white"
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
                    <p className="text-navy-700 font-semibold text-sm">
                      Easy Financing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`${
              inView ? "animate-slide-right delay-300" : "opacity-0"
            }`}
          >
            <span className="inline-block text-dental-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Why Patients{" "}
              <span className="gradient-text">Trust Us</span> With Their Smiles
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-navy-600 text-lg mb-10">
              At Bright Smile Dental, we go above and beyond to ensure every
              patient receives exceptional care in a comfortable, welcoming
              environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className={`flex gap-4 ${
                    inView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${400 + i * 100}ms` }}
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-dental-50 to-teal-50 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-dental-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {reason.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
