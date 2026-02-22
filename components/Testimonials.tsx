"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";

const testimonials = [
  {
    name: "Deluxe Enterprises",
    quote:
      "Working with Diraav was a game-changer for Deluxe Enterprises. They built our website from scratch, showcasing our importing and exporting products with an aesthetic flair that perfectly matches our brand.",
  },
  {
    name: "Fiesta Hospitality Services",
    quote:
      "Diraav crafted a professional and compelling company profile for Fiesta Hospitality that left a lasting impression on our investors. Thank you for your outstanding work!",
  },
  {
    name: "Shreya",
    quote:
      "Vinita has been a fantastic collaborator and one that I hope to continue working with across all my professional endeavours. She helped thoughtfully, effectively and patiently as we designed a website for our manufacturing unit.",
  },
  {
    name: "Habot",
    quote:
      "Vinita has been an invaluable asset to our market research team. She completed our research ahead of time, providing us with detailed information about the Dubai market. Highly recommended!",
  },
  {
    name: "Ek Prayaas",
    quote:
      "We want to thank you for the redesign of our school website. The site is clean, modern, and easy to navigate. You really understood our vision and brought it to life.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-teal"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;

      const cards = trackRef.current.querySelectorAll(".testimonial-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 md:py-32 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <TextReveal
          as="h2"
          className="font-heading text-snow text-[clamp(2rem,4vw,3.5rem)] tracking-tight mb-4"
        >
          What Our Clients Say
        </TextReveal>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-6 pb-4 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Spacer for left padding on large screens */}
        <div className="hidden lg:block min-w-[calc((100vw-80rem)/2)] shrink-0" />

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card min-w-[320px] md:min-w-[400px] max-w-[400px] shrink-0 snap-start rounded-2xl p-8 border border-snow/10 bg-snow/5"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <Stars />
            <blockquote className="text-snow/70 font-body text-sm leading-relaxed mb-6">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="font-heading text-snow text-base font-medium">
              {t.name}
            </p>
          </div>
        ))}

        {/* Spacer for right padding */}
        <div className="min-w-6 shrink-0" />
      </div>
    </section>
  );
}
