import { cn } from "@/lib/utils"
import { gradient, subtitle, title } from "@/components/primitives"

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <h2 className={cn(title(), gradient())}>This is a title example</h2>

      <h3 className={subtitle()}>This is a subtitle example</h3>
    </main>
  )
}
