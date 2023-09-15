import { cn } from "@/lib/utils"
import { gradient, title } from "@/components/primitives"

export function ServicesSection() {
  return (
    <section
      id="services"
      className="flex min-h-screen items-center justify-center"
    >
      <h3 className={cn(title(), gradient())}>Services Section</h3>
    </section>
  )
}
