import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SystemsSection from "../components/SystemsSection";
import ProjectsSection from "../components/ProjectsSection";
import PrinciplesSection from "../components/PrinciplesSection";
import StackSection from "../components/StackSection";
import AboutPreview from "../components/AboutPreview";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
    <Navbar />
    <Hero />
    <SystemsSection />
    <ProjectsSection />
    <PrinciplesSection />
    <StackSection />
    <AboutPreview />
    <ContactSection />
    <Footer />
    </main>
  );
}