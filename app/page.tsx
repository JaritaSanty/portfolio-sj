import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Services } from "@/components/Services";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Recognitions } from "@/components/Recognitions";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="relative">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Services />
        <Education />
        <Certifications />
        <Recognitions />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
