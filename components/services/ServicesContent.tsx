"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const services = [
  {
    title: "Brand Strategy",
    tagline: "The foundation of everything that follows.",
    description:
      "We help you define who you are, who you serve, and how to show up. From name to visuals, we craft brands that tell your story. Every element is rooted in strategy and soul.",
    offerings: [
      "Brand Positioning & Identity",
      "Visual Language Development",
      "Brand Voice & Messaging",
      "Competitive Analysis",
    ],
    images: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    title: "Brand Consultancy",
    tagline: "A strategic partnership to guide your growth.",
    description:
      "Whether you're launching or scaling, we bring clarity to your vision. Got scattered thoughts? We shape them into clear, focused strategies that actually move forward.",
    offerings: [
      "Growth Strategy",
      "Business Consulting",
      "Brand Audits",
      "Creative Direction",
    ],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    title: "Marketing Consultancy",
    tagline: "Purposeful growth begins with the right direction.",
    description:
      "Reels, posts, or campaigns — we make sure it speaks. And more importantly, we make sure it performs. We design marketing strategies tailored to your goals, values, and audience.",
    offerings: [
      "Content Strategy",
      "Social Media Campaigns",
      "Performance Marketing",
      "Reels & Video Content",
    ],
    images: [
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    title: "SaaS",
    tagline: "From concept to product — we build what scales.",
    description:
      "We design, develop, and launch SaaS products that solve real problems. From ideation and UX to full-stack development, we turn your software vision into a market-ready product.",
    offerings: [
      "Product Strategy & Roadmap",
      "UI/UX Design",
      "Full-Stack Development",
      "Launch & Growth Support",
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    title: "Website Development",
    tagline: "Your brand's digital home — designed with intention.",
    description:
      "We don't just make them pretty. We build minimal, elegant websites that communicate and convert. Custom designs, optimized coding, and a minimalist touch that works, sells, and scales with your business.",
    offerings: [
      "Custom Web Design",
      "Responsive Development",
      "Shopify & E-commerce",
      "SEO Integration",
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    title: "SEO",
    tagline: "Helping your brand show up in all the right places.",
    description:
      "We don't vanish after deliverables are done. We stay for strategy, tweaks, and fresh ideas. We align your digital presence to support visibility and organic growth.",
    offerings: [
      "On-page Optimization",
      "Technical SEO Audits",
      "Keyword Strategy",
      "Analytics & Reporting",
    ],
    images: [
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=1000&fit=crop&q=80",
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

      const line = blockRef.current.querySelector(".service-line");
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

      if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" });
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
      {/* Top line */}
      <div
        className="service-line h-px bg-snow/10 origin-left mb-12 md:mb-16"
        style={{ transform: "scaleX(0)" }}
      />

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
              className="service-tagline font-heading text-teal text-lg md:text-xl italic mb-6"
              style={{ opacity: 0 }}
            >
              {service.tagline}
            </p>
            <p
              className="service-desc font-body text-snow/60 text-sm md:text-base leading-relaxed max-w-lg mb-10"
              style={{ opacity: 0 }}
            >
              {service.description}
            </p>

            {/* Offerings */}
            <div>
              <p className="font-body text-snow/30 text-xs tracking-[0.15em] uppercase mb-5">
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
                    <span className="font-body text-snow/70 text-sm group-hover:text-snow transition-colors duration-300">
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
  const ctaRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
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

  // Philosophy section animations
  useGSAP(
    () => {
      if (!philosophyRef.current) return;

      const items = philosophyRef.current.querySelectorAll(".philosophy-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
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

  useGSAP(
    () => {
      if (!ctaRef.current) return;

      gsap.fromTo(
        ctaRef.current.querySelectorAll(".cta-el"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: ctaRef }
  );

  return (
    <>
      {/* Hero with image */}
      <section ref={heroRef} className="relative min-h-screen flex items-end bg-dark pt-40 pb-16 md:pb-24 overflow-hidden">
        {/* Floating decorative shapes */}
        <FloatingShape className="w-64 h-64 top-32 -right-20 opacity-30" />
        <FloatingShape className="w-40 h-40 top-60 left-10 opacity-20" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            {/* Left — Text */}
            <div className="md:col-span-7">
              <h1
                className="hero-heading font-heading text-snow text-[clamp(3rem,9vw,6.5rem)] tracking-tight leading-[0.95] mb-8"
                style={{ opacity: 0 }}
              >
                Our<br />Services
              </h1>
              <div
                className="hero-line h-px bg-snow/20 origin-left mb-6"
                style={{ transform: "scaleX(0)" }}
              />
              <p
                className="hero-sub font-body text-snow/50 text-base md:text-lg max-w-xl leading-relaxed mb-10"
                style={{ opacity: 0 }}
              >
                We blend strategy, storytelling, and soulful design to help brands grow with purpose.
                Every service is rooted in clarity, creativity, and deep collaboration.
              </p>

              {/* Quick stats */}
              <div className="flex gap-10 md:gap-16">
                {[
                  { num: "6+", label: "Services" },
                  { num: "20+", label: "Projects Delivered" },
                  { num: "100%", label: "Client Retention" },
                ].map((stat, i) => (
                  <div key={i} className="hero-stat" style={{ opacity: 0 }}>
                    <span className="font-heading text-snow text-2xl md:text-3xl block">{stat.num}</span>
                    <span className="font-body text-snow/40 text-xs tracking-[0.1em] uppercase">{stat.label}</span>
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
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop&q=80"
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

      {/* Philosophy strip */}
      <section className="py-16 md:py-20 bg-dark border-y border-snow/10">
        <div ref={philosophyRef} className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {[
              { icon: "01", text: "Less clutter, more meaning" },
              { icon: "02", text: "Purpose-led design" },
              { icon: "03", text: "Strategy before aesthetics" },
            ].map((item, i) => (
              <div
                key={i}
                className="philosophy-item flex items-start gap-4"
                style={{ opacity: 0 }}
              >
                <span className="font-body text-teal/60 text-xs tracking-wider mt-1 shrink-0">
                  {item.icon}
                </span>
                <p className="font-heading text-snow/80 text-lg md:text-xl italic">
                  {item.text}
                </p>
              </div>
            ))}
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
          <h2 className="font-heading text-snow text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight mb-16">
            How Diraav Can Help You
          </h2>

          <div ref={helpRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
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
                <span className="font-body text-teal text-xs tracking-[0.15em] uppercase mb-3 block">
                  {item.num}
                </span>
                <h3 className="font-heading text-snow text-xl md:text-2xl mb-3 group-hover:text-teal transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-snow/50 text-sm leading-relaxed">
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
          <p className="font-heading text-white text-[clamp(1.5rem,3vw,2.5rem)] text-center italic max-w-2xl px-6">
            &ldquo;We don&apos;t just build brands. We build experiences that people remember.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-24 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="cta-el font-body text-snow/40 text-xs tracking-[0.2em] uppercase mb-6"
            style={{ opacity: 0 }}
          >
            Ready to start?
          </p>
          <h2
            className="cta-el font-heading text-snow text-[clamp(2rem,5vw,4rem)] tracking-tight mb-8"
            style={{ opacity: 0 }}
          >
            Let&apos;s build something<br />
            meaningful together.
          </h2>
          <a
            href="/contact"
            className="cta-el inline-flex items-center gap-3 font-body text-snow border border-snow/20 px-8 py-4 rounded-full hover:bg-snow hover:text-dark transition-all duration-300"
            style={{ opacity: 0 }}
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
