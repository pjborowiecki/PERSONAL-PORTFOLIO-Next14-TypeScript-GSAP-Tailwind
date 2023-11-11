import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
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
          {siteConfig.nameShort}
        </Link>
        <div className="flex items-center justify-center md:gap-6">
          <Navigation navItems={siteConfig.navItems} />
          <Link
            aria-label="Get started"
            href="#contact-section"
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "rounded-full font-semibold"
            )}
          >
            Let&apos;s talk
            <span className="sr-only">Let&apos;s talk</span>
          </Link>
          <div className="ml-2 flex h-10 w-10 items-center justify-center">
            <NavigationMobile navItems={siteConfig.navItems} />
          </div>
        </div>
      </div>
    </header>
  )
}
