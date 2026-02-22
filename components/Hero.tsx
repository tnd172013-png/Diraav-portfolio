"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const taglines = ["We listen.", "We strategize.", "We create.", "We grow."];

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
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1200&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle gradient for text readability */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

      {/* Main heading — bottom left */}
      <div className="relative z-10 px-6 md:px-10 mb-8 md:mb-10 max-w-4xl">
        <h1 ref={headingRef} className="font-heading text-white font-bold leading-[1.05] text-[clamp(2.5rem,6vw,5rem)]">
          {headingWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom tagline row */}
      <div
        ref={taglineRef}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/20"
      >
        {taglines.map((tag, i) => (
          <div
            key={i}
            className={`tagline-item px-6 md:px-10 py-5 md:py-6 ${
              i < taglines.length - 1 ? "border-r border-white/20" : ""
            }`}
          >
            <span className="font-heading text-white text-lg md:text-xl font-medium">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
