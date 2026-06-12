"use client";

import { useEffect, useRef, useState } from 'react';

const SERVICES = [
  'Dental Implants',
  'Invisalign',
  'Teeth Whitening',
  'Cosmetic Dentistry',
  'Family Dentistry',
  'Emergency Dentistry',
  'Crowns & Bridges',
  'Root Canal',
  'Other',
];

export default function Appointment() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="appointment"
      ref={sectionRef}
      className="relative py-12 sm:py-20 lg:py-28 bg-gradient-to-br from-dental-50 to-teal-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-dental-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-dental-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Schedule a Visit
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-navy-600 text-base leading-relaxed">
            Take the first step towards a healthier, brighter smile. Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Form panel — stacks on top on mobile */}
          <div
            className={`lg:col-span-3 order-1 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-2xl border border-navy-100/50 shadow-sm p-5 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">Appointment Request Sent!</h3>
                  <p className="text-navy-600 text-sm sm:text-base max-w-md mx-auto">
                    Thank you, {form.name}. We have received your appointment request and will contact you within 24 hours to confirm.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', service: '', date: '', message: '' });
                    }}
                    className="mt-6 text-dental-500 hover:text-dental-600 font-medium text-sm underline underline-offset-2"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-base font-medium text-navy-700 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-navy-200 bg-navy-50/50 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-dental-500/40 focus:border-dental-500 transition-colors text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-base font-medium text-navy-700 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-navy-200 bg-navy-50/50 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-dental-500/40 focus:border-dental-500 transition-colors text-base"
                      />
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-base font-medium text-navy-700 mb-2">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-navy-200 bg-navy-50/50 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-dental-500/40 focus:border-dental-500 transition-colors text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-base font-medium text-navy-700 mb-2">
                        Service <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full min-h-[48px] px-4 rounded-xl border border-navy-200 bg-navy-50/50 text-navy-900 focus:outline-none focus:ring-2 focus:ring-dental-500/40 focus:border-dental-500 transition-colors text-base appearance-none"
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-base font-medium text-navy-700 mb-2">
                      Preferred Date <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full min-h-[48px] px-4 rounded-xl border border-navy-200 bg-navy-50/50 text-navy-900 focus:outline-none focus:ring-2 focus:ring-dental-500/40 focus:border-dental-500 transition-colors text-base"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-navy-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dental needs, preferred time of day, insurance info, etc."
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-navy-50/50 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-dental-500/40 focus:border-dental-500 transition-colors text-base resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full min-h-[52px] btn-primary px-8 rounded-xl text-white font-semibold text-base shadow-lg shadow-dental-500/25 hover:shadow-dental-500/40 transition-shadow"
                  >
                    Book Appointment
                  </button>

                  <p className="text-xs text-navy-500 mt-2">
                    By submitting this form, you agree to our privacy policy. We will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info panel — stacks below form on mobile, below form order-2 */}
          <div
            className={`lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-2 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Google Calendar card */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-navy-100/50 shadow-sm p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-dental-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-dental-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 text-base sm:text-lg">Online Scheduling</h3>
              </div>
              <p className="text-navy-600 text-sm leading-relaxed">
                Prefer to pick a time directly? Use our Google Calendar integration to select an appointment slot that works best for you.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-navy-100/50 shadow-sm p-4 sm:p-6 space-y-4 sm:space-y-5">
              <h3 className="font-semibold text-navy-900 text-base sm:text-lg">Why Patients Trust Us</h3>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-navy-700 text-sm">Secure & Private</p>
                  <p className="text-navy-500 text-xs mt-0.5">Your information is encrypted and never shared.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-dental-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-dental-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-navy-700 text-sm">HIPAA Compliant</p>
                  <p className="text-navy-500 text-xs mt-0.5">We follow strict healthcare privacy standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-navy-700 text-sm">Free Consultation</p>
                  <p className="text-navy-500 text-xs mt-0.5">New patients receive a complimentary initial consultation.</p>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-navy-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h3 className="font-semibold text-base sm:text-lg">Dental Emergency?</h3>
              </div>
              <p className="text-navy-200 text-sm leading-relaxed mb-4">
                If you are experiencing severe pain, swelling, or trauma, please call us immediately for an urgent appointment.
              </p>
              <a
                href="tel:+155****4567"
                className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold text-base px-5 py-3.5 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
