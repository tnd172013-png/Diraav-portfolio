"use client";

import { useRef, useCallback } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";

const portfolioItems = [
  {
    title: "Deluxe Enterprises",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=900&fit=crop",
  },
  {
    title: "Fiesta Hospitality",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1636955816868-fcb881e57954?w=600&h=900&fit=crop",
  },
  {
    title: "Ek Prayaas",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=900&fit=crop",
  },
  {
    title: "Growth Analytics",
    category: "Market Research",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=900&fit=crop",
  },
  {
    title: "Habot Connect",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=900&fit=crop",
  },
  {
    title: "Brand Elevation",
    category: "Brand Strategy",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=900&fit=crop",
  },
  {
    title: "Urban Insights",
    category: "Market Research",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=900&fit=crop",
  },
  {
    title: "Digital Presence",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=900&fit=crop",
  },
];

function PortfolioCard({
  item,
}: {
  item: (typeof portfolioItems)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Timeline | null>(null);

  const handleEnter = useCallback(() => {
    if (!cardRef.current || !infoRef.current || !overlayRef.current) return;

    // Kill any running animation
    if (tweenRef.current) tweenRef.current.kill();

    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      flexGrow: 2.5,
      borderRadius: "24px",
      duration: 0.5,
      ease: "power2.inOut",
    });

    tl.to(
      overlayRef.current,
      { opacity: 0.85, duration: 0.3, ease: "power2.out" },
      0
    );

    tl.fromTo(
      infoRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
      0.15
    );

    tweenRef.current = tl;
  }, []);

  const handleLeave = useCallback(() => {
    if (!cardRef.current || !infoRef.current || !overlayRef.current) return;

    if (tweenRef.current) tweenRef.current.kill();

    const tl = gsap.timeline();

    tl.to(infoRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });

    tl.to(
      cardRef.current,
      {
        flexGrow: 1,
        borderRadius: "80px 80px 24px 24px",
        duration: 0.5,
        ease: "power2.inOut",
      },
      0.05
    );

    tl.to(
      overlayRef.current,
      { opacity: 0.5, duration: 0.3, ease: "power2.out" },
      0.05
    );

    tweenRef.current = tl;
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="portfolio-card shrink-0 relative cursor-pointer overflow-hidden h-[280px] sm:h-[380px] md:h-[480px] will-change-[flex-grow,border-radius]"
      style={{
        flexGrow: 1,
        flexBasis: 0,
        minWidth: "100px",
        borderRadius: "80px 80px 24px 24px",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      {/* Card info */}
      <div
        ref={infoRef}
        className="absolute bottom-0 left-0 right-0 p-5 md:p-6 pointer-events-none"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        <span className="text-white/60 font-body text-xs tracking-[0.15em] uppercase block mb-2">
          {item.category}
        </span>
        <h4 className="font-heading text-white text-lg md:text-xl leading-tight">
          {item.title}
        </h4>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !galleryRef.current) return;

      const cards = galleryRef.current.querySelectorAll(".portfolio-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="portfolio" className="py-16 md:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 md:mb-16">
        <TextReveal
          as="h2"
          className="font-heading text-snow text-[clamp(2rem,5vw,3.5rem)] tracking-tight mb-4"
        >
          Featured Projects
        </TextReveal>
        <p className="text-mist font-body text-base md:text-lg max-w-xl">
          Here&apos;s what aligned execution looks like.
        </p>
      </div>

      {/* Horizontal Gallery */}
      <div
        ref={galleryRef}
        className="flex overflow-hidden gap-2 sm:gap-3 md:gap-4 px-3 sm:px-6 md:px-10"
      >
        {portfolioItems.map((item, i) => (
          <PortfolioCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
