import AboutSection from "@/components/HomePageSections/AboutSection";
import ContactSection from "@/components/HomePageSections/ContactSection";
import HeroSection from "@/components/HomePageSections/HeroSection";
import ProjectsSection from "@/components/HomePageSections/ProjectsSection";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
