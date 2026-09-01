"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const services = [
  {
    title: "Marketing Strategy",
    tagline: "Clarity Before Growth.",
    description:
      "Before campaigns, content, or scaling, there needs to be a clear path. Our marketing strategy isn't just planning; it's about building a structured system for how your brand attracts, converts, and grows. We focus on aligning your business model, audience behavior, and positioning to create a strategy that is intentional, scalable, and easy to execute. No scattered efforts — just a clear direction that guides every decision moving forward.",
    offerings: [
      "End-to-end growth mapping aligned with your business goals",
      "Customer journey design focused on conversion and retention",
      "Funnel architecture built for consistency and scalability",
      "Lead generation strategy tailored to your audience and offer",
      "Content and distribution direction for long-term visibility",
    ],
    images: [
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    title: "Brand Positioning & Strategy",
    tagline: "Defined Positioning. Clear Perception. Intentional Growth.",
    description:
      "Positioning shapes how your brand is seen, understood, and remembered. Without it, marketing feels scattered and inconsistent. With it, every decision becomes sharper and more aligned. We help you define a distinct space in the market — one that reflects your value, connects with the right audience, and differentiates you with clarity. The goal isn't just to stand out, but to stand for something specific and recognizable.",
    offerings: [
      "Core positioning framework aligned with your vision and market",
      "Messaging architecture that brings consistency across all touchpoints",
      "Brand narrative development that builds connection and recall",
      "Competitive differentiation to clearly define your unique space",
      "Audience clarity to ensure your communication resonates with the right people",
    ],
    images: [
      "/services/brand-positioning/casa-studio.png",
      "/services/brand-positioning/daniel-saint-law-firm.png",
      "/services/brand-positioning/the-quiet-oven.png",
    ],
  },
  {
    title: "Consulting",
    tagline: "Strategic Clarity for Founders & Teams.",
    description:
      "For brands that don't need full execution, but need the right direction. Our consulting is designed for founders and teams who want structured thinking, sharper decisions, and a clear path forward — while keeping execution in-house. This isn't casual advice. It's focused, high-impact guidance built around your business, your challenges, and your growth stage.",
    offerings: [
      "In-depth business model analysis to identify gaps and opportunities",
      "Growth recalibration sessions to realign direction and priorities",
      "Marketing and system audits for clarity on what's working (and what's not)",
      "Ongoing advisory retainers for consistent strategic support",
      "Decision-making frameworks to help you move faster with confidence",
    ],
    images: [
      "/services/consulting/untitled-design-16.png",
      "/services/consulting/untitled-design-17.png",
      "/services/consulting/untitled-design-18.png",
    ],
  },
  {
    title: "Market Research",
    tagline: "Insight Before Action. Precision Before Scale.",
    description:
      "Strong decisions come from a clear understanding — not assumptions. Our research goes beyond surface-level data to uncover real insights about your market, audience, and competitive space. Whether you're building from the ground up or scaling an existing brand, we focus on bringing clarity to where you stand, where the opportunities lie, and how to move forward with confidence.",
    offerings: [
      "Industry landscape analysis to map trends, gaps, and opportunities",
      "Competitor benchmarking to understand positioning and market dynamics",
      "Customer behavior insights to align with real needs and expectations",
      "Market demand validation to reduce risk before scaling",
      "Strategic insights translated into actionable direction",
    ],
    images: [
      "/services/market-research/untitled-design-19.png",
      "/services/market-research/untitled-design-20.png",
      "/services/market-research/untitled-design-21.png",
    ],
  },
  {
    title: "Website Development",
    tagline: "Built as Infrastructure. Designed for Growth.",
    description:
      "Your website is more than a visual asset — it's the foundation of your digital presence. We build websites as structured systems that support your brand, guide your audience, and drive consistent results. Every element is designed with intention — from how users navigate to how they convert. The focus isn't just aesthetics, but clarity, performance, and long-term scalability.",
    offerings: [
      "Strategic site architecture aligned with your business goals",
      "UX-focused layouts designed for clarity and ease of navigation",
      "Conversion pathway design to guide users toward action",
      "SEO-ready structure to support visibility from the ground up",
      "Scalable systems that grow with your business",
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    title: "SaaS Strategy & Platform Development",
    tagline: "From Idea to Structured Product. Built for Market Readiness.",
    description:
      "Building a SaaS product goes beyond development — it requires clarity in positioning, user flow, and how the product fits into the market. We bridge product thinking with strategic direction to help you build platforms that are not just functional, but scalable and aligned. We focus on turning ideas into structured products with a clear path to adoption, retention, and growth.",
    offerings: [
      "Product positioning to define your place in the market",
      "User journey structuring for seamless onboarding and engagement",
      "Go-to-market strategy aligned with your target audience and launch goals",
      "Growth funnel design to support acquisition, activation, and retention",
      "Strategic alignment between product, marketing, and business goals",
    ],
    images: [
      "/services/saas/untitled-design-11.png",
      "/services/saas/untitled-design-12.png",
      "/services/saas/untitled-design-13.png",
    ],
  },
];

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const blockRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate images every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % service.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [service.images.length]);

  useGSAP(
    () => {
      if (!blockRef.current) return;

      const num = blockRef.current.querySelector(".service-num");
      const title = blockRef.current.querySelector(".service-title");
      const tagline = blockRef.current.querySelector(".service-tagline");
      const desc = blockRef.current.querySelector(".service-desc");
      const offerings = blockRef.current.querySelectorAll(".service-offering");
      const img = blockRef.current.querySelector(".service-img");
      const imgInner = blockRef.current.querySelector(".service-img-inner");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (num) tl.fromTo(num, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
      if (title) tl.fromTo(title, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4");
      if (tagline) tl.fromTo(tagline, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3");
      if (desc) tl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");

      // Image reveal — clip from bottom
      if (img) {
        tl.fromTo(
          img,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "power3.inOut" },
          "-=0.6"
        );
      }
      if (imgInner) {
        tl.fromTo(imgInner, { scale: 1.2 }, { scale: 1, duration: 1.2, ease: "power2.out" }, "-=1");
      }

      if (offerings.length) {
        tl.fromTo(
          offerings,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
          "-=0.6"
        );
      }

      // Subtle parallax on the image
      if (imgInner) {
        gsap.to(imgInner, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: blockRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    },
    { scope: blockRef }
  );

  const isEven = index % 2 === 0;

  return (
    <div ref={blockRef} className="py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-8 md:gap-8 items-start">
        {/* Number */}
        <div className={`md:col-span-1 ${isEven ? "md:order-1" : "md:order-1"}`}>
          <span
            className="service-num font-heading text-[clamp(3rem,6vw,5rem)] leading-none text-snow/8 block"
            style={{ opacity: 0 }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Image Carousel */}
        <div className={`md:col-span-4 ${isEven ? "md:order-2" : "md:order-3"}`}>
          <div
            className="service-img relative aspect-[3/4] rounded-2xl overflow-hidden"
            style={{ clipPath: "inset(100% 0 0 0)" }}
          >
            <div className="service-img-inner absolute inset-0">
              {service.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${service.title} ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
                  loading="lazy"
                />
              ))}
            </div>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {service.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-teal w-4" : "bg-snow/40"}`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content + Offerings */}
        <div className={`md:col-span-7 ${isEven ? "md:order-3" : "md:order-2"} md:pl-4`} style={{ direction: "ltr" }}>
          <div className="md:pt-8">
            <h2
              className="service-title font-heading text-snow text-[clamp(2rem,4.5vw,3.5rem)] tracking-tight leading-[1.1] mb-4"
              style={{ opacity: 0 }}
            >
              {service.title}
            </h2>
            <p
              className="service-tagline font-heading text-white text-lg md:text-xl italic mb-6"
              style={{ opacity: 0 }}
            >
              {service.tagline}
            </p>
            <p
              className="service-desc font-body text-mist text-sm md:text-base leading-relaxed max-w-lg mb-10"
              style={{ opacity: 0 }}
            >
              {service.description}
            </p>

            {/* Offerings */}
            <div>
              <p className="font-body text-snow text-xs tracking-[0.15em] uppercase mb-5">
                What we deliver
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {service.offerings.map((item, i) => (
                  <div
                    key={i}
                    className="service-offering flex items-center gap-3 group"
                    style={{ opacity: 0 }}
                  >
                    <span className="w-6 h-px bg-snow/20 group-hover:w-10 group-hover:bg-teal transition-all duration-300 shrink-0" />
                    <span className="font-body text-mist text-sm group-hover:text-snow transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Floating decorative shapes that drift slowly */
function FloatingShape({ className }: { className: string }) {
  const shapeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!shapeRef.current) return;
    gsap.to(shapeRef.current, {
      y: -30,
      x: 10,
      rotation: 15,
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div
      ref={shapeRef}
      className={`absolute rounded-full border border-snow/5 pointer-events-none ${className}`}
    />
  );
}

export default function ServicesContent() {
  const heroRef = useRef<HTMLElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      const heading = heroRef.current.querySelector(".hero-heading");
      const sub = heroRef.current.querySelector(".hero-sub");
      const line = heroRef.current.querySelector(".hero-line");
      const heroImg = heroRef.current.querySelector(".hero-img");
      const heroImgInner = heroRef.current.querySelector(".hero-img-inner");
      const stats = heroRef.current.querySelectorAll(".hero-stat");

      const tl = gsap.timeline({ delay: 0.3 });

      if (heading) tl.fromTo(heading, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
      if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.4");
      if (sub) tl.fromTo(sub, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
      if (heroImg) tl.fromTo(heroImg, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power3.inOut" }, "-=0.5");
      if (heroImgInner) tl.fromTo(heroImgInner, { scale: 1.3 }, { scale: 1, duration: 1.4, ease: "power2.out" }, "-=1.2");
      if (stats.length) tl.fromTo(stats, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.5");
    },
    { scope: heroRef }
  );

  // Help section animations
  useGSAP(
    () => {
      if (!helpRef.current) return;

      const items = helpRef.current.querySelectorAll(".help-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: helpRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: helpRef }
  );


  return (
    <>
      {/* Hero with image */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-dark pt-32 md:pt-40 pb-12 md:pb-24 overflow-hidden">
        {/* Floating decorative shapes */}
        <FloatingShape className="w-64 h-64 top-32 -right-20 opacity-30" />
        <FloatingShape className="w-40 h-40 top-60 left-10 opacity-20" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left — Text */}
            <div className="md:col-span-7">
              <h1
                className="hero-heading font-heading text-snow text-[clamp(2rem,5vw,3rem)] tracking-tight leading-[1.1] mb-6 md:mb-8"
                style={{ opacity: 0 }}
              >
                Strategic Thinking. Thoughtful Execution.<br />Built for Sustainable Growth.
              </h1>
              <div
                className="hero-line h-px bg-snow/20 origin-left mb-6"
                style={{ transform: "scaleX(0)" }}
              />
              <p
                className="hero-sub font-body text-mist text-base md:text-lg max-w-xl leading-relaxed mb-10"
                style={{ opacity: 0 }}
              >
                At Diraav, every service starts with clarity and intention. We don&apos;t believe in isolated
                execution &mdash; we build interconnected systems where strategy, positioning, research, and
                digital infrastructure work together seamlessly. Our approach is simple: align the foundation
                first, then scale with direction. This ensures every brand we work with grows with consistency,
                not confusion.
              </p>

              {/* Quick stats */}
              <div className="flex gap-6 md:gap-10 lg:gap-16">
                {[
                  { num: "6+", label: "Years of Experience" },
                  { num: "20+", label: "Projects Delivered" },
                  { num: "100%", label: "Client Retention" },
                ].map((stat, i) => (
                  <div key={i} className="hero-stat" style={{ opacity: 0 }}>
                    <span className="font-heading text-white text-2xl md:text-3xl block">{stat.num}</span>
                    <span className="font-body text-white text-xs tracking-[0.1em] uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="md:col-span-5">
              <div
                className="hero-img relative aspect-[4/5] rounded-2xl overflow-hidden"
                style={{ clipPath: "inset(0 0 100% 0)" }}
              >
                <div className="hero-img-inner absolute inset-0">
                  <img
                    src="/main/services-stats.png"
                    alt="Diraav team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, i) => (
            <ServiceBlock key={i} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* How we help — with image strip */}
      <section className="py-24 md:py-32 bg-dark border-t border-snow/10 relative overflow-hidden">
        {/* Background decorative shape */}
        <FloatingShape className="w-96 h-96 -bottom-40 -right-40 opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="font-heading text-snow text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight mb-10 md:mb-16">
            How We Can Help You
          </h2>

          <div ref={helpRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-8 md:gap-y-12">
            {[
              {
                num: "01",
                title: "Build Brands That Feel Like You",
                desc: "From name to visuals, we craft brands that tell your story. Every element is rooted in strategy and soul.",
              },
              {
                num: "02",
                title: "Turn Ideas Into Action",
                desc: "Got scattered thoughts? We shape them into clear, focused strategies that actually move forward.",
              },
              {
                num: "03",
                title: "Design Websites That Convert",
                desc: "We don't just make them pretty. We build websites that work, sell, and scale with your business.",
              },
              {
                num: "04",
                title: "Create Impactful Marketing",
                desc: "Reels, posts, or campaigns — we make sure it speaks. And more importantly, we make sure it performs.",
              },
              {
                num: "05",
                title: "Know Your Audience Deeply",
                desc: "We decode what your audience wants. Then, we help your brand say it in the right way.",
              },
              {
                num: "06",
                title: "Support That Sticks Around",
                desc: "We don't vanish after deliverables are done. We stay for strategy, tweaks, and fresh ideas.",
              },
            ].map((item, i) => (
              <div key={i} className="help-item group" style={{ opacity: 0 }}>
                <span className="font-body text-snow text-xs tracking-[0.15em] uppercase mb-3 block">
                  {item.num}
                </span>
                <h3 className="font-heading text-snow text-lg md:text-2xl mb-3 group-hover:text-teal transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-mist text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=800&fit=crop&q=80"
            alt="Creative workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="font-heading text-white text-[clamp(1.5rem,4vw,2.5rem)] text-center italic max-w-2xl px-6">
            &ldquo;Growth without structure creates noise. We build with intention.&rdquo;
          </p>
        </div>
      </section>

    </>
  );
}
