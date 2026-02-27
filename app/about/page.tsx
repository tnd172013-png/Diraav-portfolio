import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutContent from "@/components/about/AboutContent";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About Us | Diraav",
  description:
    "Rooted in strategy, built with intention. Diraav is a strategic consulting partner for brands that want to grow intentionally, not chaotically.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
        <Contact />
      </main>
    </>
  );
}
