// import { ContactSection } from "@/components/sections/contact-section"
// import { HeroSection } from "@/sections/hero-section"
// import { ProjectsSection } from "@/sections/projects-section"

import { ToggleMenuButton } from "@/components/nav/toggle-menu-button"

export default function LandingPage(): JSX.Element {
  return (
    <main className="flex size-full min-h-screen flex-col items-end justify-end gap-2 py-[32px] pl-[calc(80px+16px)] pr-[16px]">
      <ToggleMenuButton />
      {/* <HeroSection /> */}
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
    </main>
  )
}
