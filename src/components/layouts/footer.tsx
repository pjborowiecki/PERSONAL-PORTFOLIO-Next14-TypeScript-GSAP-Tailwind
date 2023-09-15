import { ThemeToggle } from "@/components/theme-toggle"

export function Footer(): JSX.Element {
  return (
    <footer className="flex justify-end">
      <ThemeToggle />
    </footer>
  )
}
