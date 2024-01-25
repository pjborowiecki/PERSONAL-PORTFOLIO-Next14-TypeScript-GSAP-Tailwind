// import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"

export default function LandingPage(): JSX.Element {
  return (
    <main className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HeroSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </main>
  )
}
