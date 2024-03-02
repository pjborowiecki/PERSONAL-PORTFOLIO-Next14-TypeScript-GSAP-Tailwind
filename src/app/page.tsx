import { HeroSection } from "@/sections/hero-section"

// import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage(): JSX.Element {
  return (
    <main className="grid w-full grid-cols-1 items-center justify-center">
      {/* <ThemeToggle /> */}
      <HeroSection />
    </main>
  )
}
