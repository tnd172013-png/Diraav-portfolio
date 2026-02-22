"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";

const philosophy = [
  "Less clutter, more meaning",
  "Purpose-led design",
  "Strategy before aesthetics",
  "Growth with integrity",
];

const approach = [
  {
    step: "01",
    title: "Listen Deeply",
    desc: "We begin with conversations, not assumptions.",
  },
  {
    step: "02",
    title: "Build Strategically",
    desc: "Every step is rooted in brand purpose and growth clarity.",
  },
  {
    step: "03",
    title: "Create Thoughtfully",
    desc: "From messaging to visuals, everything we craft is minimal, aligned, and built to last.",
  },
  {
    step: "04",
    title: "Grow with You",
    desc: "Our role doesn't end at launch. We offer ongoing consulting and collaboration as your brand evolves.",
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
    <section id="about" className="py-24 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Heading + About Text */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-28">
          <div>
            <TextReveal
              as="h2"
              className="font-heading text-snow text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight"
            >
              Grounded in Purpose, Built for Visionaries
            </TextReveal>
          </div>
          <div className="flex items-end">
            <FadeIn delay={0.2}>
              <p className="text-snow/70 font-body text-lg leading-relaxed">
                At Diraav, we&apos;re more than a marketing and consulting
                agency&mdash;we&apos;re a creative partner for purpose-led
                brands. Rooted in strategy and driven by vision, we help
                founders, creators, and startups turn their ideas into
                thoughtful, impactful projects.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Philosophy */}
        <div ref={philosophyRef} className="mb-20 md:mb-28">
          <FadeIn>
            <p className="text-sage font-body text-sm tracking-[0.2em] uppercase mb-8">
              Our Philosophy
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <p className="text-sage font-body text-sm tracking-[0.2em] uppercase mb-8">
              Our Approach
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item) => (
              <div
                key={item.step}
                className="approach-card group"
              >
                <span className="text-teal/40 font-heading text-5xl font-semibold block mb-4">
                  {item.step}
                </span>
                <h3 className="font-heading text-snow text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-snow/50 font-body text-sm leading-relaxed">
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
