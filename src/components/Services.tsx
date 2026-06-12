"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacement that looks, feels, and functions like natural teeth. Restore your smile with titanium implants.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
    color: "from-dental-500 to-dental-600",
    bg: "bg-dental-50",
    text: "text-dental-600",
  },
  {
    title: "Invisalign",
    description:
      "Straighten your teeth discreetly with clear aligners. No metal wires, no restrictions — just a confident smile.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50",
    text: "text-teal-600",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments that deliver results up to 8 shades brighter in a single visit.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    ),
    color: "from-gold-400 to-gold-500",
    bg: "bg-gold-50",
    text: "text-gold-600",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, bonding, and full smile makeovers tailored to your facial features.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
    color: "from-navy-600 to-navy-700",
    bg: "bg-navy-50",
    text: "text-navy-700",
  },
  {
    title: "Family Dentistry",
    description:
      "Comprehensive dental care for patients of all ages. From first checkups to routine cleanings for the whole family.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
    color: "from-dental-500 to-teal-500",
    bg: "bg-dental-50",
    text: "text-dental-600",
  },
  {
    title: "Emergency Dentistry",
    description:
      "Same-day emergency appointments for severe tooth pain, broken teeth, and urgent dental issues.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    color: "from-red-500 to-red-600",
    bg: "bg-red-50",
    text: "text-red-600",
  },
  {
    title: "Crowns & Bridges",
    description:
      "Custom-crafted crowns and bridges to restore damaged teeth and fill gaps with natural-looking results.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    color: "from-teal-500 to-dental-500",
    bg: "bg-teal-50",
    text: "text-teal-600",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Gentle, painless root canal treatments using advanced technology to save infected teeth.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
    color: "from-navy-500 to-navy-600",
    bg: "bg-navy-50",
    text: "text-navy-600",
  },
];

export default function Services() {
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
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-dental-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Comprehensive <span className="gradient-text">Dental Care</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-navy-600 text-lg max-w-3xl mx-auto">
            From routine cleanings to advanced smile transformations, we offer a
            full range of dental services to keep your smile healthy and
            beautiful.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card-hover bg-white rounded-2xl p-6 border border-navy-100/50 shadow-sm group cursor-pointer ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <svg
                  className={`w-7 h-7 ${service.text}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-dental-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="#appointment"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.text} group-hover:gap-2.5 transition-all`}
              >
                Learn More
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
          ))}
        </div>
      </div>
    </section>
  );
}
