"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useGSAP(
    () => {
      if (!overlayRef.current || !linksRef.current || !imageRef.current) return;

      if (menuOpen) {
        const tl = gsap.timeline();

        tl.fromTo(
          overlayRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power3.inOut" }
        );

        const links = linksRef.current.querySelectorAll(".nav-link-item");
        tl.fromTo(
          links,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        );

        tl.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );
      } else {
        gsap.to(overlayRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [menuOpen] }
  );

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For page links (like /services), let the browser navigate
    if (!href.startsWith("/#") && !href.startsWith("#")) {
      setMenuOpen(false);
      return;
    }

    e.preventDefault();
    setMenuOpen(false);

    const hash = href.startsWith("/#") ? href.slice(1) : href;

    // If we're on a different page, navigate to homepage + hash
    if (window.location.pathname !== "/") {
      window.location.href = href;
      return;
    }

    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  // Logo: white when dark theme or at top (over hero); dark when light theme + scrolled
  const logoWhite = theme === "dark" || !scrolled;

  return (
    <>
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 lg:px-10 py-5 flex items-center justify-between pointer-events-none">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              setMenuOpen(false);
            }
          }}
          className="pointer-events-auto relative z-[60]"
        >
          <Image
            src="/logo.png"
            alt="Diraav"
            width={400}
            height={200}
            className={`h-14 sm:h-20 md:h-24 w-auto transition-[filter] duration-500 ${
              logoWhite ? "brightness-0 invert" : "brightness-0"
            }`}
            priority
          />
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-3 pointer-events-auto relative z-[60]">
          <ThemeToggle />

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500 ${
              menuOpen
                ? "bg-navy text-snow border-navy/20"
                : "bg-snow/10 backdrop-blur-sm text-snow border-snow/20"
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-center">
              <span
                className={`absolute w-5 h-[1.5px] transition-all duration-500 ${
                  menuOpen
                    ? "rotate-45 top-1/2 -translate-y-1/2 bg-snow"
                    : "top-0.5 bg-snow"
                }`}
              />
              <span
                className={`absolute w-5 h-[1.5px] transition-all duration-500 ${
                  menuOpen
                    ? "opacity-0"
                    : "top-1/2 -translate-y-1/2 bg-snow"
                }`}
              />
              <span
                className={`absolute w-5 h-[1.5px] transition-all duration-500 ${
                  menuOpen
                    ? "-rotate-45 top-1/2 -translate-y-1/2 bg-snow"
                    : "bottom-0.5 bg-snow"
                }`}
              />
            </div>
            <span className="text-sm font-body font-medium tracking-wide">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 transition-all duration-700 ${
          menuOpen
            ? "pointer-events-auto"
            : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="flex h-full">
          {/* Left Side — Navigation Links */}
          <div className="w-full lg:w-1/2 bg-dark flex flex-col justify-between px-6 md:px-10 lg:px-16 py-24 md:py-28">
            <div ref={linksRef} className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="nav-link-item group flex items-center justify-between py-4 border-b border-snow/10 hover:border-teal/40 transition-colors"
                >
                  <span className="font-heading text-snow text-[clamp(1.8rem,4vw,2.5rem)] group-hover:text-teal transition-colors duration-300">
                    {link.label}
                  </span>
                  <svg
                    className="w-5 h-5 text-mist group-hover:text-teal transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Book a Call + Contact Info */}
            <div className="mt-auto pt-10">
              <a
                href="https://calendly.com/vinitardkhadka/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-item inline-flex items-center gap-3 font-body text-dark bg-snow px-6 py-3 rounded-full hover:bg-teal hover:text-snow transition-all duration-300 mb-6"
              >
                Book a Free Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <p className="font-body text-snow font-medium text-lg mb-1">
                diraav.com@gmail.com
              </p>
              <p className="font-body text-mist text-sm">
                Lonavala, Pune &middot; India
              </p>
            </div>
          </div>

          {/* Right Side — Image (hidden on mobile) */}
          <div ref={imageRef} className="hidden lg:block w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=1200&fit=crop&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/10" />
          </div>
        </div>
      </div>
    </>
  );
}
