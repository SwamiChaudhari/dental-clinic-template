"use client";

import { useEffect, useRef, useState } from "react";

const contactMethods = [
  {
    title: "Phone",
    detail: "(555) 123-4567",
    subtext: "Call us anytime during business hours",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    color: "bg-dental-500",
    lightBg: "bg-dental-50",
    textColor: "text-dental-600",
  },
  {
    title: "Email",
    detail: "info@brightsmiledental.com",
    subtext: "We'll respond within 24 hours",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    color: "bg-teal-500",
    lightBg: "bg-teal-50",
    textColor: "text-teal-600",
  },
  {
    title: "Location",
    detail: "123 Smile Avenue, Suite 200",
    subtext: "New York, NY 10001",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
    ),
    color: "bg-navy-700",
    lightBg: "bg-navy-50",
    textColor: "text-navy-700",
  },
  {
    title: "Hours",
    detail: "Mon–Fri: 8:00 AM – 6:00 PM",
    subtext: "Sat: 9:00 AM – 2:00 PM · Sun: Closed",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    color: "bg-dental-500",
    lightBg: "bg-dental-50",
    textColor: "text-dental-600",
  },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-12 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-dental-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Get In Touch
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-navy-600 text-base sm:text-lg max-w-3xl mx-auto">
            We&apos;re here to help you achieve your best smile. Reach out to us
            through any of the methods below.
          </p>
        </div>

        {/* Contact method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {contactMethods.map((method, i) => (
            <div
              key={method.title}
              className={`card-hover bg-white rounded-2xl p-5 sm:p-6 border border-navy-100/50 shadow-sm text-center group min-h-[80px] flex flex-col justify-center ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 ${method.lightBg} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
              >
                <svg
                  className={`w-6 h-6 sm:w-7 sm:h-7 ${method.textColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {method.icon}
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">
                {method.title}
              </h3>
              <p className={`text-sm font-semibold ${method.textColor} mb-1`}>
                {method.detail}
              </p>
              <p className="text-xs text-navy-500">{method.subtext}</p>
            </div>
          ))}
        </div>

        {/* Map + Emergency info row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Google Maps placeholder */}
          <div
            className={`rounded-2xl overflow-hidden border border-navy-100 shadow-sm ${
              inView ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <div className="aspect-[16/9] sm:aspect-[4/3] bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="text-center relative z-10 p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-dental-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-dental-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <p className="text-navy-700 font-semibold text-base sm:text-lg">Our Location</p>
                <p className="text-navy-500 text-sm mt-1">123 Smile Avenue, Suite 200</p>
                <p className="text-navy-500 text-sm">New York, NY 10001</p>
                <a
                  href="https://maps.google.com/?q=123+Smile+Avenue+Suite+200+New+York+NY+10001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 sm:mt-4 text-sm font-semibold text-dental-600 hover:text-dental-700 transition-colors"
                >
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Emergency contact info */}
          <div
            className={`rounded-2xl bg-gradient-to-br from-dental-500 to-teal-500 p-6 sm:p-8 text-white flex flex-col justify-center ${
              inView ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Emergency Dental Care</h3>
            </div>
            <p className="text-white/90 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Dental emergencies don&apos;t wait for business hours. If you&apos;re
              experiencing severe tooth pain, a broken tooth, or any urgent
              dental issue, we&apos;re here to help.
            </p>
            <div className="space-y-3 mb-5 sm:mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold text-sm sm:text-base">(555) 123-4567</span>
                <span className="text-white/70 text-xs sm:text-sm">— Press 1 for emergencies</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-sm sm:text-base">24/7 Emergency Line Available</span>
              </div>
            </div>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 bg-white text-dental-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto min-h-[48px]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Emergency Line
            </a>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <a
            href="#appointment"
            className="btn-primary inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl shadow-dental-500/20 w-full sm:w-auto min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
