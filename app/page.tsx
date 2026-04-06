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