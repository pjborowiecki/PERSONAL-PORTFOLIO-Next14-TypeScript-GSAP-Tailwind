import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Navigation } from "@/components/nav/navigation"
import { NavigationMobile } from "@/components/nav/navigation-mobile"

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 flex h-20 w-full bg-transparent">
      <div className="container flex items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center justify-center">
          <Navigation navItems={siteConfig.navItems} />
          <Link
            aria-label="Get started"
            href="/signup"
            className={buttonVariants({ size: "sm" })}
          >
            Let&apos;s talk
            <span className="sr-only">Get Started</span>
          </Link>
          <NavigationMobile navItems={siteConfig.navItems} />
        </div>
      </div>
    </header>
  )
}
