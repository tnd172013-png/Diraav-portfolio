"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";

const philosophy = [
  "Structured growth",
  "Rooted branding",
  "Calm execution",
  "Long-term positioning",
];

const approach = [
  {
    step: "01",
    title: "Deep Understanding",
    desc: "We start by understanding your brand, your audience, and your goals at the deepest level.",
  },
  {
    step: "02",
    title: "Strategic Mapping",
    desc: "Every step is mapped with intention — no random tactics, only aligned direction.",
  },
  {
    step: "03",
    title: "Structured Execution",
    desc: "We execute with precision. No chaos, no random posting, no vanity growth.",
  },
  {
    step: "04",
    title: "Sustainable Scaling",
    desc: "Growth that lasts. We build systems that scale without losing alignment.",
  },
];

export default function About() {
  const philosophyRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!philosophyRef.current) return;

      const items = philosophyRef.current.querySelectorAll(".philosophy-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: philosophyRef }
  );

  useGSAP(
    () => {
      if (!approachRef.current) return;

      const cards = approachRef.current.querySelectorAll(".approach-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: approachRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: approachRef }
  );

  return (
    <section id="about" className="pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-14 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section: Heading + About Text */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 mb-16 md:mb-28">
          <div>
            <TextReveal
              as="h2"
              className="font-heading text-snow text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight"
            >
              The Diraav Philosophy
            </TextReveal>
          </div>
          <div className="flex items-end">
            <FadeIn delay={0.2}>
              <p className="text-mist font-body text-base md:text-lg leading-relaxed">
                Most brands don&apos;t fail because they lack ideas. They fail because they lack clarity. At Diraav, we don&apos;t just &ldquo;do marketing.&rdquo; We build aligned foundations, strategic systems, and digital presence that actually convert. This is strategy with depth and marketing with intention.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Philosophy */}
        <div ref={philosophyRef} className="mb-16 md:mb-28">
          <FadeIn>
            <p className="text-snow font-body text-sm tracking-[0.2em] uppercase mb-8">
              Our Philosophy
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {philosophy.map((item, i) => (
              <div
                key={i}
                className="philosophy-item border-l-2 border-teal/40 pl-5 py-2"
              >
                <p className="font-heading text-snow text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div ref={approachRef}>
          <FadeIn>
            <p className="text-snow font-body text-sm tracking-[0.2em] uppercase mb-8">
              Our Approach
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {approach.map((item) => (
              <div
                key={item.step}
                className="approach-card group"
              >
                <span className="text-snow font-heading text-3xl md:text-5xl font-semibold block mb-4">
                  {item.step}
                </span>
                <h3 className="font-heading text-snow text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-mist font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
