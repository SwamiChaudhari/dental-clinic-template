"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major PPO dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and more. Contact us to verify your specific coverage.",
  },
  {
    question: "How much does Invisalign cost?",
    answer:
      "Invisalign treatment typically ranges from $3,000-$7,000 depending on complexity. We offer flexible financing options and free consultations.",
  },
  {
    question: "Do you offer emergency dental appointments?",
    answer:
      "Yes! We reserve same-day emergency slots. Call our office at (555) 123-4567 for urgent dental issues.",
  },
  {
    question: "How long do dental implants last?",
    answer:
      "With proper care, dental implants can last a lifetime. The crown may need replacement after 10-15 years.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We accept CareCredit, LendingClub, Sunbit, and offer in-house payment plans with 0% interest for qualified patients.",
  },
  {
    question: "Do I need a referral for a consultation?",
    answer:
      "No referral needed! Simply call or book online for a free consultation with Dr. Mitchell.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional whitening is safe and effective. We use ADA-approved treatments for optimal results.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-dental-600 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about your visit
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border border-navy-100/60 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow ${
                  inView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-navy-900 group-hover:text-dental-600 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-dental-50 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-dental-100" : ""
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 text-dental-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-navy-100 mb-4" />
                    <p className="text-navy-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 ${
            inView ? "animate-fade-in-up delay-500" : "opacity-0"
          }`}
        >
          <p className="text-navy-600 text-lg mb-4">Have More Questions?</p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Contact Us
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
    </section>
  );
}
