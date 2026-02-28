"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import FadeIn from "@/components/ui/FadeIn";
import { blogPosts, type BlogPost } from "@/data/journal";

interface Props {
  post: BlogPost;
}

export default function JournalPostContent({ post }: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug);

  // Hero entrance
  useGSAP(
    () => {
      if (!heroRef.current) return;
      const tl = gsap.timeline({ delay: 0.3 });
      const back = heroRef.current.querySelector(".hero-back");
      const cat = heroRef.current.querySelector(".hero-cat");
      const h = heroRef.current.querySelector(".hero-h");
      const meta = heroRef.current.querySelector(".hero-meta");
      const img = heroRef.current.querySelector(".hero-img");

      if (back)
        tl.fromTo(
          back,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
      if (cat)
        tl.fromTo(
          cat,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
      if (h)
        tl.fromTo(
          h,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.3"
        );
      if (meta)
        tl.fromTo(
          meta,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
      if (img)
        tl.fromTo(
          img,
          { opacity: 0, y: 40, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
          "-=0.4"
        );
    },
    { scope: heroRef }
  );

  // Related cards
  useGSAP(
    () => {
      if (!relatedRef.current) return;
      const cards = relatedRef.current.querySelectorAll(".related-card");
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
            trigger: relatedRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: relatedRef }
  );

  return (
    <>
      {/* Hero / Header */}
      <section
        ref={heroRef}
        className="relative bg-dark pt-28 pb-10 sm:pt-36 sm:pb-12 md:pt-40 md:pb-16 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/journal"
            className="hero-back inline-flex items-center gap-2 text-mist hover:text-teal font-body text-sm mb-8 md:mb-10 transition-colors duration-300"
            style={{ opacity: 0 }}
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Journal
          </Link>

          {/* Category */}
          <span
            className="hero-cat text-teal font-body text-xs tracking-[0.15em] uppercase font-medium block mb-5"
            style={{ opacity: 0 }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="hero-h font-heading text-snow text-[clamp(1.8rem,5vw,3.5rem)] tracking-tight leading-[1.1] mb-5 md:mb-6"
            style={{ opacity: 0 }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div
            className="hero-meta flex items-center gap-3 mb-8 md:mb-10"
            style={{ opacity: 0 }}
          >
            <span className="text-mist font-body text-sm">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-snow/20" />
            <span className="text-mist font-body text-sm">
              {post.readTime}
            </span>
          </div>

          {/* Cover image */}
          <div
            className="hero-img relative aspect-[16/9] rounded-2xl overflow-hidden"
            style={{ opacity: 0 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-10 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <article className="space-y-8 md:space-y-10">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-heading text-snow text-xl md:text-2xl tracking-tight mb-4">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.body.split("\n\n").map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-mist font-body text-base leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </article>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="h-px bg-snow/10" />
      </div>

      {/* Related Posts */}
      <section className="py-12 md:py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-body text-snow text-xs tracking-[0.2em] uppercase mb-4">
            Keep Reading
          </p>
          <h2 className="font-heading text-snow text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight mb-8 md:mb-12">
            More from the Journal
          </h2>

          <div
            ref={relatedRef}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/journal/${related.slug}`}
                className="related-card group rounded-2xl overflow-hidden border border-snow/10 bg-snow/5 hover:border-teal/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal/5"
                style={{ opacity: 0, transform: "translateY(30px)" }}
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="text-teal font-body text-xs tracking-[0.15em] uppercase font-medium">
                    {related.category}
                  </span>
                  <h3 className="font-heading text-snow text-base sm:text-lg mt-3 mb-3 leading-snug group-hover:text-teal transition-colors duration-300">
                    {related.title}
                  </h3>
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
