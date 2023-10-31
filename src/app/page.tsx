import { notFound } from "next/navigation"
import { getProjectsAction } from "@/actions/sanity"

import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"
import { HeroSection } from "@/components/sections/hero"
import { IntroSection } from "@/components/sections/intro"
import { ProjectsSection } from "@/components/sections/projects"
import { ServicesSection } from "@/components/sections/services"

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

  // console.log(projects)

  if (!projects) {
    notFound()
  }

  return (
    <main>
      <HeroSection />
      {/* <IntroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <ContactSection /> */}
    </main>
  )
}
