import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Diraav",
  description:
    "At Diraav, we believe that every brand holds a soul. We're your thought partner, creative sounding board, and your brand's quiet strength.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
