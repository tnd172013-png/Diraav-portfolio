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

function LogoItem({ logo }: { logo: (typeof clientLogos)[number] }) {
  return (
    <div className="shrink-0 flex items-center justify-center h-20 md:h-24 w-44 md:w-56 mx-6 md:mx-10">
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-h-full max-w-full object-contain client-logo opacity-60 hover:opacity-100 transition-all duration-300 rounded-lg"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

export default function Clientele() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".marquee-row"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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

      {/* Row 1 — scrolls left */}
      <div
        className="marquee-row relative flex mb-10 md:mb-14"
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        <div className="flex animate-marquee-left">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <LogoItem key={`r1-${i}`} logo={logo} />
          ))}
        </div>
        <div className="flex animate-marquee-left" aria-hidden>
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <LogoItem key={`r1d-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="marquee-row relative flex"
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        <div className="flex animate-marquee-right">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <LogoItem key={`r2-${i}`} logo={logo} />
          ))}
        </div>
        <div className="flex animate-marquee-right" aria-hidden>
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <LogoItem key={`r2d-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
