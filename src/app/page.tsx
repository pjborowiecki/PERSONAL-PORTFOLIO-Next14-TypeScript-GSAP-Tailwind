import { notFound } from "next/navigation"
import { getProjectsAction } from "@/actions/sanity"

import { AboutSection } from "@/components/sections/about/about-section"
import { ContactSection } from "@/components/sections/contact/contact-section"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { IntroSection } from "@/components/sections/intro/intro-section"
import { ProjectsSection } from "@/components/sections/projects/projects-section"
import { ServicesSection } from "@/components/sections/services/services-section"

// export const revalidate = 60

interface ProjectsSectionProps {
  searchParams: { [key: string]: string | undefined }
}

export default async function HomePage({
  searchParams,
}: ProjectsSectionProps): Promise<JSX.Element> {
  const projects = await getProjectsAction({
    query: "",
    category: searchParams?.category || "web dev",
    page: "1",
  })

  if (!projects) {
    notFound()
  }

  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </div>
  )
}
