import type { Project } from "@/types"

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
      className="min-h-screen"
    >
      Projects section
    </section>
  )
}
