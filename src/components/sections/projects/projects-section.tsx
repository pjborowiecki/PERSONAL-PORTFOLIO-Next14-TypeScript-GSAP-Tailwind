import type { Project } from "@/types"

import { ProjectCategoryFilters } from "./project-category-filters"
import { ProjectList } from "./project-list"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({
  projects,
}: ProjectsSectionProps): JSX.Element {
  return (
    <section
      id="projects-section"
      aria-label="projects-section"
      className="mx-auto w-full max-w-[2560px]"
    >
      <div className="grid h-auto grid-cols-1 gap-[4.6vw] py-[24vw]">
        <div className="mx-[2rem] grid grid-cols-1 gap-[8.53vw]">
          <div className="grid grid-cols-1 gap-[12.8vw]">
            <h2 className="text-[22.6vw] font-black leading-[86%] tracking-tight">
              <span className="text-[26vw]">Recent</span> projects
            </h2>
            <p className="text-[6.1vw] leading-[150%] text-muted-foreground">
              Explore my portfolio to see what I have been working on lately.
              From web and mobile development to the intricacies of deep
              learning and beyond, each project represents a unique chapter in
              my journey.
            </p>
          </div>
          <div className="w-full md:max-w-[700px]">
            <ProjectCategoryFilters />
          </div>
        </div>

        <ProjectList projects={projects} />
      </div>
    </section>
  )
}
