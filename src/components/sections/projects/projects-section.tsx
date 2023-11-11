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
      className="mx-auto w-full max-w-[2560px] pb-[12vw] pt-[24vw]"
    >
      <div className="grid h-auto grid-cols-1 gap-[4.6vw]">
        <div className="mx-[2rem] flex flex-col gap-[8.53vw] 2xl:flex-row 2xl:justify-center 2xl:gap-[4rem]">
          <div className="flex w-full flex-col gap-[12.8vw] 2xl:w-3/5 2xl:gap-[28px]">
            <h2 className="text-[22.6vw] font-black leading-[86%] tracking-tight 2xl:text-[114px] 2xl:leading-[110%]">
              <span className="text-[26vw] 2xl:text-[114px]">Recent</span>{" "}
              projects
            </h2>
            <p className="text-[6.1vw] leading-[150%] text-muted-foreground">
              Explore my portfolio to see what I have been working on lately.
              From web and mobile development to the intricacies of deep
              learning and beyond, each project represents a unique chapter in
              my journey.
            </p>
          </div>
          <div className="w-full md:max-w-[700px] 2xl:w-2/5 2xl:justify-end">
            <ProjectCategoryFilters />
          </div>
        </div>

        <ProjectList projects={projects} />
      </div>
    </section>
  )
}
