import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceMarquee from "@/components/ServiceMarquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Clientele from "@/components/Clientele";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceMarquee />
        <Services />
        <Portfolio />
        <Clientele />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
