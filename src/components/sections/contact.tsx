import { cn } from "@/lib/utils"
import { gradient, title } from "@/components/primitives"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center"
    >
      <h3 className={cn(title(), gradient())}>Contact Section</h3>
    </section>
  )
}
