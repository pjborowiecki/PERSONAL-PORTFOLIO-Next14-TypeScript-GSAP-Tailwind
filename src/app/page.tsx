import { AboutSection } from "@/sections/about-section"
import { ContactSection } from "@/sections/contact-section"
import { HeroSection } from "@/sections/hero-section"
import { ProjectsSection } from "@/sections/projects-section"
import { ServicesSection } from "@/sections/services-section"

export default function LandingPage(): JSX.Element {
  return (
    <main className="size-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
