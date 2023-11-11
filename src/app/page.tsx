import { HeroSection } from "@/components/sections/hero/hero-section"
import { ProjectsSection } from "@/components/sections/projects/projects-section"

export default function HomePage(): JSX.Element {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HeroSection />
      {/* <IntroSection /> */}
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      <ProjectsSection />
      {/* <ContactSection /> */}
    </div>
  )
}
