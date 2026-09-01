"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "@/components/ui/TextReveal";

const categories = [
  "Featured",
  "Social Media",
  "Market Research",
  "Branding",
] as const;

type Category = (typeof categories)[number];

type PortfolioItem = {
  title: string;
  category: Category;
  url?: string;
  image?: string;
  /** "contain" for logo-like images shown on a gradient backdrop; omit for full-bleed brand posts */
  fit?: "contain";
};

const portfolioItems: PortfolioItem[] = [
  // Featured
  {
    title: "Deluxe Enterprises",
    category: "Featured",
    url: "https://deluxeenterprises.in/",
    image: "/portfolio/deluxe-enterprises.png",
    fit: "contain",
  },
  {
    title: "Ek Prayaas",
    category: "Featured",
    url: "https://ekprayaas.co/",
    image: "/clients/ek-prayaas.png",
    fit: "contain",
  },
  {
    title: "Vaayura",
    category: "Featured",
    url: "https://vaayura.com/",
    image: "/clients/brand-kit-for-vaayura-1.png",
  },
  // Social Media
  {
    title: "Powerful Intention",
    category: "Social Media",
    url: "https://www.instagram.com/powerfulintention/",
    image: "/clients/poweful-intention.png",
    fit: "contain",
  },
  {
    title: "Ektrava",
    category: "Social Media",
    url: "https://www.instagram.com/ektarvaa/",
    // TODO: add image when available
  },
  // Market Research
  {
    title: "Habot",
    category: "Market Research",
    url: "https://www.habot.io/",
    // TODO: add image when available
  },
  {
    title: "Keld",
    category: "Market Research",
    url: "https://www.keldindia.com/",
    // TODO: add image when available
  },
  // Branding
  {
    title: "Ektarva",
    category: "Branding",
    image: "/clients/ektarva-brand-kit-2.png",
  },
  {
    title: "Hustle Den",
    category: "Branding",
    // TODO: add logo when available
  },
  {
    title: "HHC",
    category: "Branding",
    image: "/gallery/hhc-brandkit.png",
  },
  {
    title: "Samadhan",
    category: "Branding",
    // TODO: add logo when available
  },
  {
    title: "The Petal Twist",
    category: "Branding",
    image: "/clients/the-petal-twist-brandkit.png",
  },
];

function PortfolioCard({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="portfolio-card group relative rounded-2xl border border-white/10 bg-snow/[0.02] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-lavender/40 hover:shadow-xl hover:shadow-lavender/5">
      {/* Media area */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-navy/70 via-dark to-dark">
        {item.image ? (
          <>
            {/* Ghost index number */}
            <span className="absolute top-4 right-5 z-[1] font-heading text-5xl md:text-6xl leading-none text-snow/[0.07] select-none pointer-events-none">
              {num}
            </span>
            {item.fit === "contain" ? (
              <div
                className="absolute inset-0 flex items-center justify-center p-8 md:p-10"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(209,219,235,0.08), transparent 70%)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
            )}
          </>
        ) : (
          /* No image yet — typographic treatment with a large ghost number */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="font-heading text-[clamp(5rem,12vw,8rem)] leading-none text-snow/[0.08] select-none transition-transform duration-700 ease-out group-hover:scale-[1.05]">
              {num}
            </span>
            <span className="font-body text-mist/60 text-[10px] tracking-[0.3em] uppercase">
              Diraav
            </span>
          </div>
        )}

        {/* Sheen sweep on hover */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-transparent via-lavender/[0.07] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      </div>

      {/* Card footer */}
      <div className="flex items-end justify-between gap-3 p-5 md:p-6 border-t border-white/5">
        <div className="min-w-0">
          <span className="block font-body text-mist text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2">
            {item.category}
          </span>
          <h4 className="font-heading text-snow text-lg md:text-xl leading-tight group-hover:text-lavender transition-colors duration-300">
            {item.title}
          </h4>
          <span className="block h-px w-8 bg-lavender/30 mt-3 group-hover:w-14 group-hover:bg-lavender/60 transition-all duration-500" />
        </div>
        {item.url && (
          <svg
            className="w-5 h-5 mb-1 shrink-0 text-lavender opacity-0 translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        )}
      </div>

      {/* Stretched link */}
      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${item.title}`}
          className="absolute inset-0 z-10"
        />
      )}
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("Featured");

  const visibleItems = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

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
    { scope: sectionRef, dependencies: [activeCategory] }
  );

  return (
    <section ref={sectionRef} id="portfolio" className="pt-10 md:pt-14 pb-10 md:pb-14 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 md:mb-16">
        <TextReveal
          as="h2"
          className="font-heading text-snow text-[clamp(2rem,5vw,3.5rem)] tracking-tight mb-4"
        >
          Featured Projects
        </TextReveal>
        <p className="text-mist font-body text-base md:text-lg max-w-xl mb-8">
          Here&apos;s what aligned execution looks like.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs md:text-sm tracking-[0.1em] uppercase px-4 md:px-5 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-snow/60 text-snow bg-snow/10"
                  : "border-snow/15 text-mist hover:border-snow/40 hover:text-snow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Unified card grid — same treatment across all categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {visibleItems.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
