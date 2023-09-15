"use client"

import * as React from "react"

import { initializeLocomotiveScroll } from "@/lib/utils"
import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"
import { HeroSection } from "@/components/sections/hero"
import { ProjectsSection } from "@/components/sections/projects"
import { ServicesSection } from "@/components/sections/services"

export default function HomePage() {
  React.useEffect(() => {
    void initializeLocomotiveScroll()
  }, [])

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
