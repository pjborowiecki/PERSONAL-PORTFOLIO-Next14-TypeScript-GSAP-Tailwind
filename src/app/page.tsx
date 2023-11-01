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

      {/* Move this to a separate section */}
      <section className="mx-auto w-[96vw] bg-transparent text-newDark-alt2">
        <div className="flex">
          <div className="relative flex w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              className="absolute right-0 top-0 h-[32px] w-[32px] antialiased"
            >
              <path d="M0,0 A32,32 0 0 1 32,32 L32,0 Z" fill="#141414" />
            </svg>
          </div>
          <div className="flex min-h-[32px] w-full bg-newDark-alt2" />
        </div>

        <div className="flex w-full">
          <div className="w-1/2 px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem]">
            test. this is for the section heading only.
          </div>
          {/* Adjust the height, based on the heading */}
          <div className="w-1/2 rounded-b-[32px] bg-newDark-alt2"></div>
        </div>

        {/* Add some content here. Maybe Markqee? Maybe services? */}
        <div className="h-[16rem]">another div. This is a place for the actual content</div>
      </section>

      <IntroSection />
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      {/* <ProjectsSection projects={projects} /> */}
      {/* <ContactSection /> */}
    </main>
  )
}
