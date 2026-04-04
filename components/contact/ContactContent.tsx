"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const contactInfo = [
  {
    label: "Address",
    value: "Valvan, Lonavala,\nPune — 410403",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 7823082963",
    href: "tel:+917823082963",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "diraav.com@gmail.com",
    href: "mailto:diraav.com@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/diraav_com" },
  { label: "LinkedIn", href: "https://linkedin.com/company/diraav" },
  { label: "Behance", href: "https://behance.net/diraav" },
];

function AnimatedImage({
  src,
  alt,
  className,
  aspect = "aspect-[4/5]",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
      }
    );
  }, { scope: ref });

  return (
    <div ref={ref} className={`relative ${aspect} rounded-2xl overflow-hidden ${className || ""}`} style={{ opacity: 0 }}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
    </div>
  );
}

export default function ContactContent() {
  const heroRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  // Hero entrance
  useGSAP(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline({ delay: 0.3 });
    const h = heroRef.current.querySelector(".hero-h");
    const line = heroRef.current.querySelector(".hero-line");
    const p1 = heroRef.current.querySelector(".hero-p1");

    if (h) tl.fromTo(h, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.4");
    if (p1) tl.fromTo(p1, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
  }, { scope: heroRef });

  // Contact info stagger
  useGSAP(() => {
    if (!infoRef.current) return;
    gsap.fromTo(infoRef.current.querySelectorAll(".info-card"), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
      scrollTrigger: { trigger: infoRef.current, start: "top 85%", toggleActions: "play none none none" },
    });
  }, { scope: infoRef });

  // Form entrance
  useGSAP(() => {
    if (!formRef.current) return;
    gsap.fromTo(formRef.current.querySelectorAll(".form-el"), { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
      scrollTrigger: { trigger: formRef.current, start: "top 85%", toggleActions: "play none none none" },
    });
  }, { scope: formRef });

  // Socials entrance
  useGSAP(() => {
    if (!socialsRef.current) return;
    gsap.fromTo(socialsRef.current.querySelectorAll(".social-link"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: socialsRef.current, start: "top 90%", toggleActions: "play none none none" },
    });
  }, { scope: socialsRef });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center bg-dark pt-32 md:pt-40 pb-12 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="md:col-span-7">
              <h1 className="hero-h font-heading text-snow text-[clamp(2rem,5vw,3rem)] tracking-tight leading-[1.1] mb-6 md:mb-8" style={{ opacity: 0 }}>
                Insights &amp; Ideas Rooted in Strategy.<br />Built With Intention.
              </h1>
              <div className="hero-line h-px bg-snow/20 origin-left mb-6" style={{ transform: "scaleX(0)" }} />
              <p className="hero-p1 font-body text-mist text-base md:text-lg leading-relaxed max-w-xl mb-6 md:mb-8" style={{ opacity: 0 }}>
                If you&apos;re ready to build with clarity and structure, we&apos;d love to hear from you.
              </p>
              <a
                href="https://calendly.com/vinitardkhadka/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-p1 inline-flex items-center gap-3 font-body text-dark bg-snow px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-teal hover:text-snow transition-all duration-300"
                style={{ opacity: 0 }}
              >
                Book a Free Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>

            <div className="md:col-span-5 relative">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&q=80"
                alt="Creative workspace"
                aspect="aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-16 md:py-24 lg:py-32 bg-dark border-t border-snow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20">
            {/* Left — Info & Socials */}
            <div className="lg:col-span-5">
              <p className="font-body text-snow text-xs tracking-[0.2em] uppercase mb-6">Contact Details</p>
              <h2 className="font-heading text-snow text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight mb-8 md:mb-12">
                Reach out anytime
              </h2>

              <div ref={infoRef} className="space-y-6 md:space-y-8 mb-10 md:mb-16">
                {contactInfo.map((item, i) => {
                  const content = (
                    <div className="info-card group flex items-start gap-5" style={{ opacity: 0 }}>
                      <div className="w-12 h-12 rounded-full border border-snow/10 bg-snow/[0.03] flex items-center justify-center text-teal shrink-0 group-hover:border-teal/30 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <span className="font-body text-snow text-xs tracking-[0.15em] uppercase block mb-1">{item.label}</span>
                        <span className="font-body text-snow/80 text-base whitespace-pre-line group-hover:text-snow transition-colors duration-300">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={i} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* Social links */}
              <div ref={socialsRef}>
                <p className="font-body text-snow text-xs tracking-[0.15em] uppercase mb-5">Follow Us</p>
                <div className="flex flex-col gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link group flex items-center justify-between py-3 border-b border-snow/10 hover:border-teal/30 transition-colors duration-300"
                      style={{ opacity: 0 }}
                    >
                      <span className="font-body text-mist text-sm group-hover:text-snow transition-colors duration-300">
                        {s.label}
                      </span>
                      <svg
                        className="w-4 h-4 text-mist group-hover:text-teal transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right — Form */}
            <div className="lg:col-span-7">
              <form ref={formRef} className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="form-el" style={{ opacity: 0 }}>
                  <label className="font-body text-snow text-xs tracking-[0.15em] uppercase block mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-snow/15 pb-4 text-snow font-body text-base placeholder:text-mist focus:outline-none focus:border-teal/50 transition-colors duration-300"
                  />
                </div>

                <div className="form-el" style={{ opacity: 0 }}>
                  <label className="font-body text-snow text-xs tracking-[0.15em] uppercase block mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-snow/15 pb-4 text-snow font-body text-base placeholder:text-mist focus:outline-none focus:border-teal/50 transition-colors duration-300"
                  />
                </div>

                <div className="form-el" style={{ opacity: 0 }}>
                  <label className="font-body text-snow text-xs tracking-[0.15em] uppercase block mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full bg-transparent border-b border-snow/15 pb-4 text-snow font-body text-base placeholder:text-mist focus:outline-none focus:border-teal/50 transition-colors duration-300"
                  />
                </div>

                <div className="form-el" style={{ opacity: 0 }}>
                  <label className="font-body text-snow text-xs tracking-[0.15em] uppercase block mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project, your vision, or just say hello..."
                    className="w-full bg-transparent border-b border-snow/15 pb-4 text-snow font-body text-base placeholder:text-mist focus:outline-none focus:border-teal/50 transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="form-el pt-4" style={{ opacity: 0 }}>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 font-body text-snow border border-snow/20 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-snow hover:text-dark transition-all duration-300"
                  >
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="font-heading text-white text-[clamp(1.5rem,4vw,2.5rem)] text-center italic max-w-2xl px-6">
            &ldquo;Every great brand starts with a conversation.&rdquo;
          </p>
        </div>
      </section>

      {/* Map / Location note */}
      <section className="py-16 md:py-24 lg:py-32 bg-dark border-t border-snow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-body text-snow text-xs tracking-[0.2em] uppercase mb-6">Based in</p>
          <h2 className="font-heading text-snow text-[clamp(2rem,5vw,4rem)] tracking-tight mb-6">
            Lonavala, India
          </h2>
          <p className="font-body text-mist text-base max-w-lg mx-auto leading-relaxed mb-2">
            Nestled in the hills, working with brands everywhere.
          </p>
          <p className="font-body text-mist text-sm">
            Lonavala, Pune &middot; India
          </p>
        </div>
      </section>
    </>
  );
}
