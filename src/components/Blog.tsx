"use client";

import { useEffect, useRef, useState } from "react";

const blogPosts = [
  {
    title: "The Complete Guide to Dental Implants in 2026",
    excerpt:
      "Learn everything about dental implants, from candidacy to recovery.",
    category: "Implants",
    readTime: "8 min read",
    gradient: "from-dental-500 to-dental-600",
    badgeColor: "bg-dental-50 text-dental-600",
  },
  {
    title: "Invisalign vs Braces: Which Is Right for You?",
    excerpt:
      "Comparing clear aligners vs traditional braces for all ages.",
    category: "Orthodontics",
    readTime: "5 min read",
    gradient: "from-teal-500 to-teal-600",
    badgeColor: "bg-teal-50 text-teal-600",
  },
  {
    title: "5 Foods That Naturally Whiten Your Teeth",
    excerpt:
      "Discover foods that help maintain a brighter smile.",
    category: "Oral Health",
    readTime: "4 min read",
    gradient: "from-gold-400 to-gold-500",
    badgeColor: "bg-gold-50 text-gold-600",
  },
  {
    title: "When to See an Emergency Dentist: A Complete Guide",
    excerpt:
      "Know the signs that require immediate dental attention.",
    category: "Emergency Care",
    readTime: "6 min read",
    gradient: "from-navy-600 to-navy-700",
    badgeColor: "bg-navy-50 text-navy-700",
  },
];

export default function Blog() {
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
    <section id="blog" ref={ref} className="py-20 lg:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-dental-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Dental Health <span className="gradient-text">Blog</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-navy-600 text-lg max-w-3xl mx-auto">
            Expert tips and insights for a healthier smile
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, i) => (
            <article
              key={post.title}
              className={`card-hover bg-white rounded-2xl overflow-hidden border border-navy-100/50 shadow-sm group cursor-pointer ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image placeholder */}
              <div
                className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20" />
                  <div className="absolute bottom-2 left-4 w-14 h-14 rounded-full bg-white/15" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10" />
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${post.badgeColor}`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-navy-400"
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
                  <span className="text-navy-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2 leading-snug group-hover:text-dental-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-dental-600 group-hover:gap-2.5 transition-all">
                  Read Article
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
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#blog"
            className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full"
          >
            View All Articles
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
