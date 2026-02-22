"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-snow/5">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Diraav"
          width={140}
          height={50}
          className="h-10 w-auto brightness-0 invert"
        />
        <p className="text-snow/20 font-body text-xs">
          &copy; 2026 Diraav
        </p>
      </div>
    </footer>
  );
}
