import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Diraav",
  description:
    "From brand strategy to website development, Diraav helps purpose-led brands grow with intention. Explore our full range of marketing and consulting services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesContent />
      </main>
    </>
  );
}
