import { ThemeToggle } from "@/components/theme-toggle"

export function Footer(): JSX.Element {
  return (
    <footer className="flex h-[300px] justify-end bg-gradient-to-br from-turquoise-base to-turquoise-alt">
      <ThemeToggle />
    </footer>
  )
}
