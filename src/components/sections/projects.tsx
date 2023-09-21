import type { Project } from "@/types"

import { ProjectCategoryFilters } from "@/components/project-category-filters"
import { ProjectList } from "@/components/project-list"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({
  projects,
}: ProjectsSectionProps): JSX.Element {
  return (
    <section
      id="services"
      className="mx-auto min-h-screen w-full max-w-[2560px]"
    >
      <div className="mx-[4rem] overflow-visible">
        <div className="flex items-end justify-center gap-[4rem] py-[120px]">
          <div className="flex w-3/5 flex-col gap-[28px]">
            <h2 className="whitespace-nowrap text-[112px] font-black uppercase leading-[110%] tracking-tight text-newText-base">
              Recent projects
            </h2>
            <p className="font-hankenGrotesk text-[30px] font-light leading-[150%] tracking-wide text-newText-alt">
              Explore my portfolio to see what I have been working on lately.
              From web and mobile development to the intricacies of deep
              learning and beyond, each project represents a unique chapter in
              my journey.
            </p>
          </div>
          <div className="flex w-2/5 justify-end">
            <ProjectCategoryFilters />
          </div>
        </div>

        <ProjectList projects={projects} />
      </div>
    </section>
  )
}
