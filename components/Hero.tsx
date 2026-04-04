"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const taglines = ["Structured growth", "Rooted branding", "Calm execution", "Long-term positioning"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !headingRef.current || !taglineRef.current)
        return;

      const tl = gsap.timeline({ delay: 0.3 });

      // Heading words reveal
      const words = headingRef.current.querySelectorAll(".hero-word");
      tl.fromTo(
        words,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      // Subheading fade in
      const sub = sectionRef.current.querySelector(".hero-sub");
      if (sub) {
        tl.fromTo(sub, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
      }

      // Tagline items stagger in
      const items = taglineRef.current.querySelectorAll(".tagline-item");
      tl.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Parallax on background image
      gsap.to(sectionRef.current.querySelector(".hero-bg"), {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const headingText = "Turning Ideas into Dream Projects.";
  const headingWords = headingText.split(" ");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex flex-col justify-end bg-dark overflow-hidden"
    >
      {/* Full background image */}
      <div className="hero-bg absolute inset-0">
        <img
          src="/marquee/diraav-design.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle gradient for text readability */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

      {/* Main heading — bottom left */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 mb-6 md:mb-10 max-w-4xl">
        <h1 ref={headingRef} className="font-heading text-white font-bold leading-[1.05] text-[clamp(2rem,5.5vw,5rem)] mb-4 md:mb-5">
          {headingWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-[0.15em]">
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>
        <p className="hero-sub font-body text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-6 md:mb-8" style={{ opacity: 0 }}>
          Strategic marketing and consulting for founders, creators, and growing brands who are ready to build with clarity, structure, and intention.
        </p>
        <a
          href="https://calendly.com/vinitardkhadka/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-sub inline-flex items-center gap-3 font-body text-snow border border-snow/30 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-snow hover:text-dark transition-all duration-300"
          style={{ opacity: 0 }}
        >
          Book a Free Call
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>

      {/* Bottom tagline row */}
      <div
        ref={taglineRef}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/20 text-sm sm:text-base"
      >
        {taglines.map((tag, i) => (
          <div
            key={i}
            className={`tagline-item px-3 sm:px-6 md:px-10 py-4 md:py-6 ${
              i < taglines.length - 1 ? "border-r border-white/20" : ""
            }`}
          >
            <span className="font-heading text-white text-base md:text-xl font-medium">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
