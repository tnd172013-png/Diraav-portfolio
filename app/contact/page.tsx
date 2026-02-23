import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Diraav",
  description:
    "Ready to build something meaningful? Get in touch with Diraav — we're here to help your brand grow with purpose.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
    </>
  );
}
