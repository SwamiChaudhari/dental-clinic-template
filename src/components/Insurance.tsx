"use client";

import { useEffect, useRef, useState } from 'react';

const insurancePlans = [
  { name: 'Delta Dental', color: '#0066CC' },
  { name: 'Cigna', color: '#0072CE' },
  { name: 'Aetna', color: '#FF6600' },
  { name: 'MetLife', color: '#00A94F' },
  { name: 'Guardian', color: '#0033A0' },
  { name: 'United Healthcare', color: '#002677' },
  { name: 'Humana', color: '#7B2D8E' },
];

const financingOptions = [
  {
    name: 'CareCredit',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#FF6B35" fillOpacity="0.1" />
        <circle cx="24" cy="20" r="8" stroke="#FF6B35" strokeWidth="2.5" fill="none" />
        <path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    description: 'Healthcare credit card with flexible terms',
  },
  {
    name: 'LendingClub',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#0072CE" fillOpacity="0.1" />
        <path d="M14 28l6-8 5 5 7-9" stroke="#0072CE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="16" r="2" fill="#0072CE" />
      </svg>
    ),
    description: 'Personal loans with competitive rates',
  },
  {
    name: 'Sunbit',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#FFB800" fillOpacity="0.1" />
        <circle cx="24" cy="24" r="8" stroke="#FFB800" strokeWidth="2.5" fill="none" />
        <path d="M24 12v2M24 34v2M12 24h2M34 24h2M15.5 15.5l1.4 1.4M31.1 31.1l1.4 1.4M15.5 32.5l1.4-1.4M31.1 16.9l1.4-1.4" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    description: 'Buy now, pay later for dental care',
  },
  {
    name: 'In-House Plans',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#00A86B" fillOpacity="0.1" />
        <rect x="12" y="16" width="24" height="18" rx="2" stroke="#00A86B" strokeWidth="2.5" fill="none" />
        <path d="M12 22h24" stroke="#00A86B" strokeWidth="2.5" />
        <path d="M18 28h6M18 32h10" stroke="#00A86B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    description: 'Custom payment plans tailored to you',
  },
];

const trustBadges = [
  { label: 'Licensed & Insured', icon: '🛡️' },
  { label: 'HIPAA Compliant', icon: '🔒' },
  { label: '5-Star Rated', icon: '⭐' },
  { label: '10,000+ Patients', icon: '👥' },
];

const paymentTiers = [
  { term: '6 Months', apr: '0%', min: '$150', note: 'No interest' },
  { term: '12 Months', apr: '0%', min: '$2,000', note: 'No interest' },
  { term: '24 Months', apr: '0%', min: '$5,000', note: 'No interest' },
];

const Insurance: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="insurance"
      ref={sectionRef}
      className="relative py-12 sm:py-20 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF6FF 50%, #F0FDFA 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-dental-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-dental-500/10 text-dental-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Payment Options
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Insurance & Financing
          </h2>
          <p className="text-lg sm:text-xl text-navy-500 max-w-2xl mx-auto">
            We Make Dental Care Affordable
          </p>
          <p className="text-navy-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            We accept most major insurance plans and offer flexible financing options to fit your budget.
          </p>
        </div>

        {/* 0% Interest Financing Highlight */}
        <div
          className={`mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-gradient-to-r from-dental-500 to-teal-500 rounded-2xl p-[2px]">
            <div className="bg-white rounded-2xl px-5 py-6 sm:px-8 sm:py-10 md:px-12 md:py-12 flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left gap-6 sm:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-dental-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 40 40" fill="none">
                    <path d="M20 4v32M12 12l8-4 8 4M12 20l8 4 8-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900">
                    0% Interest Financing Available
                  </h3>
                  <p className="text-navy-600 mt-1 text-sm sm:text-base md:text-lg">
                    Qualified patients can enjoy 0% APR for up to 24 months on treatments over $500.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center text-center">
                <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-dental-500 to-teal-500 bg-clip-text text-transparent">
                  0%
                </span>
                <span className="text-navy-500 text-xs sm:text-sm font-medium mt-1">APR for 24 mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Plans */}
        <div
          className={`mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 text-center mb-6 sm:mb-8">
            Accepted Insurance Plans
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {insurancePlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border border-navy-100/50 p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-dental-500/30 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${250 + index * 60}ms` }}
              >
                <div
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${plan.color}15` }}
                >
                  <span
                    className="text-base sm:text-lg font-bold"
                    style={{ color: plan.color }}
                  >
                    {plan.name.charAt(0)}
                  </span>
                </div>
                <span className="text-navy-700 font-semibold text-xs sm:text-sm leading-tight">{plan.name}</span>
                <span className="text-navy-500 text-[10px] sm:text-xs mt-1">Accepted</span>
              </div>
            ))}
            {/* "And More" card */}
            <div
              className={`bg-gradient-to-br from-navy-50 to-dental-50 rounded-2xl border border-navy-100/50 p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '670ms' }}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-dental-500/10 flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-dental-500" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-navy-700 font-semibold text-xs sm:text-sm">And More</span>
              <span className="text-navy-500 text-[10px] sm:text-xs mt-1">Most major plans</span>
            </div>
          </div>
        </div>

        {/* Financing Options */}
        <div
          className={`mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 text-center mb-6 sm:mb-8">
            Financing Options
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {financingOptions.map((option, index) => (
              <div
                key={option.name}
                className={`bg-white rounded-2xl border border-navy-100/50 p-4 sm:p-6 hover:shadow-lg hover:border-teal-500/30 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${400 + index * 80}ms` }}
              >
                <div className="mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
                  {option.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-1 sm:mb-2">{option.name}</h4>
                <p className="text-navy-500 text-xs sm:text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Payment Plans */}
        <div
          className={`mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl border border-navy-100/50 p-5 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 text-center mb-6 sm:mb-8">
              Monthly Payment Plans
            </h3>
            <div className="flex overflow-x-auto pb-2 sm:pb-0 -mx-2 px-2 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 gap-4 sm:gap-6 scrollbar-hide">
              {paymentTiers.map((plan, index) => (
                <div
                  key={plan.term}
                  className={`relative flex-shrink-0 w-[calc(33.333%-8px)] sm:w-auto bg-gradient-to-br from-navy-50 to-teal-50 rounded-xl p-4 sm:p-6 text-center border border-navy-100/30 hover:shadow-md transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-dental-500 mb-1">{plan.apr}</div>
                  <div className="text-navy-500 text-xs sm:text-sm font-medium mb-2 sm:mb-3">APR</div>
                  <div className="text-navy-900 font-bold text-base sm:text-lg">{plan.term}</div>
                  <div className="text-navy-600 text-xs sm:text-sm mt-1">Min. {plan.min}</div>
                  <div className="mt-2 sm:mt-3 inline-block px-3 py-1 bg-teal-500/10 text-teal-600 text-xs font-semibold rounded-full">
                    {plan.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className={`mb-8 sm:mb-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className={`flex items-center gap-2 bg-white rounded-full px-3 py-2 sm:px-5 sm:py-2.5 border border-navy-100/50 shadow-sm transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${550 + index * 60}ms` }}
              >
                <span className="text-base sm:text-lg">{badge.icon}</span>
                <span className="text-navy-700 font-medium text-xs sm:text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-[600ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#appointment"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-gradient-to-r from-dental-500 to-teal-500 text-white font-bold text-base sm:text-lg rounded-full shadow-lg shadow-dental-500/25 hover:shadow-xl hover:shadow-dental-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Check Your Coverage
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path d="M10 4l6 6-6 6M16 10H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-navy-500 text-xs sm:text-sm mt-4">
            Not sure if your plan is accepted? We'll verify your benefits for free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
