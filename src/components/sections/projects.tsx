import { cn } from "@/lib/utils"
import { gradient, title } from "@/components/primitives"

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center"
    >
      <h3 className={cn(title(), gradient())}>Projects Section</h3>
    </section>
  )
}
