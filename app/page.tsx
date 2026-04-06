import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ArchitectureHierarchy from "@/components/ArchitectureHierarchy";
import SystemsSection from "../components/SystemsSection";
import ProjectsSection from "../components/ProjectsSection";
import StackSection from "../components/StackSection";
import AboutPreview from "../components/AboutPreview";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SystemDesignPrinciples from "../components/SystemDesignPrinciples";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
    <Navbar />
    <Hero />
    <ArchitectureHierarchy />
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Why This Architecture Matters
      </h2>
      <p className="mt-8 text-center text-base leading-8 text-white/65">
        This platform is designed to solve real production problems:
      </p>
      <ul className="mx-auto mt-6 max-w-xl list-disc space-y-2 pl-5 text-left text-base leading-8 text-white/65 marker:text-white/35">
        <li>Systems become difficult to reason about as they scale</li>
        <li>AI integration introduces risk without proper boundaries</li>
        <li>Observability is fragmented across services</li>
        <li>Business logic becomes entangled with infrastructure</li>
      </ul>
      <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-8 text-white/65">
        This architecture enforces separation between truth, intelligence, and
        visibility—allowing systems to evolve safely, remain observable, and
        integrate AI without losing control.
      </p>
    </section>
    <SystemsSection />
    <ProjectsSection />
    <SystemDesignPrinciples />
    <StackSection />
    <AboutPreview />
    <ContactSection />
    <Footer />
    </main>
  );
}