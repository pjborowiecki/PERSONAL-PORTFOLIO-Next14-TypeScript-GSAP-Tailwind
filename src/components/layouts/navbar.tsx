import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar(): JSX.Element {
  return (
    <header className="flex items-center justify-end gap-8">
      <nav>
        <ul className="flex gap-4">
          <li>Something</li>
          <li>Something</li>
        </ul>
      </nav>
      <div>
        <ThemeToggle />
      </div>
    </header>
  )
}
