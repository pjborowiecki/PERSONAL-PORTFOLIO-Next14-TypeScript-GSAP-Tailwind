import { cn } from "@/lib/utils"
import { gradient, title } from "@/components/primitives"

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center"
    >
      <h3 className={cn(title(), gradient())}>About Section</h3>
    </section>
  )
}
