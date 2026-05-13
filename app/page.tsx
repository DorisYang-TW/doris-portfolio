import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <div className="border-t border-border" />
      <ProjectsSection />
    </>
  );
}
