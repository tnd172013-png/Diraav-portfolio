"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";

const clientLogos = [
  { src: "/portfolio/deluxe-enterprises.png", alt: "Deluxe Enterprises" },
  { src: "/portfolio/ektarva.png", alt: "Ektarva" },
  { src: "/portfolio/gerbera-fuchsia.png", alt: "Gerbera Fuchsia" },
  { src: "/portfolio/ek-prayaas.png", alt: "Ek Prayaas" },
  { src: "/portfolio/thread-trek.png", alt: "Thread Trek" },
  { src: "/portfolio/gulbasta.png", alt: "Gulbasta" },
  { src: "/portfolio/shambus.jpg", alt: "Shambu's" },
];

export default function Clientele() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelector(".slider-track"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="clientele"
      className="py-24 md:py-32 bg-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-14 md:mb-20">
        <TextReveal
          as="h2"
          className="font-heading text-snow text-[clamp(2rem,4vw,3.5rem)] tracking-tight"
        >
          Our Clientele
        </TextReveal>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="slider-track flex animate-marquee-left"
          style={{ opacity: 0, transform: "translateY(30px)", width: "max-content", gap: "3rem" }}
        >
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map(
            (logo, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center h-16 md:h-20 w-36 md:w-44 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
