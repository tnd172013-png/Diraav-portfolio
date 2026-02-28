"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { blogPosts } from "@/data/journal";

export default function JournalContent() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Hero entrance
  useGSAP(
    () => {
      if (!heroRef.current) return;
      const tl = gsap.timeline({ delay: 0.3 });
      const label = heroRef.current.querySelector(".hero-label");
      const h = heroRef.current.querySelector(".hero-h");
      const line = heroRef.current.querySelector(".hero-line");
      const p = heroRef.current.querySelector(".hero-p");

      if (label)
        tl.fromTo(
          label,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      if (h)
        tl.fromTo(
          h,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.2"
        );
      if (line)
        tl.fromTo(
          line,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
          "-=0.4"
        );
      if (p)
        tl.fromTo(
          p,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
    },
    { scope: heroRef }
  );

  // Card stagger
  useGSAP(
    () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll(".journal-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: gridRef }
  );

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative bg-dark pt-32 md:pt-40 pb-12 md:pb-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p
            className="hero-label font-body text-snow text-xs tracking-[0.2em] uppercase mb-6"
            style={{ opacity: 0 }}
          >
            The Journal
          </p>
          <h1
            className="hero-h font-heading text-snow text-[clamp(2.2rem,7vw,5.5rem)] tracking-tight leading-[0.95] mb-6 md:mb-8"
            style={{ opacity: 0 }}
          >
            Insights &amp; Ideas
          </h1>
          <div
            className="hero-line h-px bg-snow/20 origin-left max-w-xl mb-6"
            style={{ transform: "scaleX(0)" }}
          />
          <p
            className="hero-p font-body text-mist text-base md:text-lg leading-relaxed max-w-xl"
            style={{ opacity: 0 }}
          >
            Thoughts, strategy, and practical resources for purpose-driven
            brands navigating growth in 2025.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            ref={gridRef}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="journal-card group rounded-2xl overflow-hidden border border-snow/10 bg-snow/5 hover:border-teal/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal/5"
                style={{ opacity: 0, transform: "translateY(30px)" }}
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-teal font-body text-xs tracking-[0.15em] uppercase font-medium">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-snow/20" />
                    <span className="text-mist font-body text-xs">
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-snow/20" />
                    <span className="text-mist font-body text-xs">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-snow text-base sm:text-lg md:text-xl leading-snug mb-3 group-hover:text-teal transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-mist font-body text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  <span className="text-teal font-body text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
