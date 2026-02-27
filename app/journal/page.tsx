import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import JournalContent from "@/components/journal/JournalContent";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Journal | Diraav",
  description:
    "Thoughts, insights, and resources for purpose-driven brands. Read the latest from Diraav.",
};

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main>
        <JournalContent />
        <Contact />
      </main>
    </>
  );
}
