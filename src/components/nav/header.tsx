import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Navigation } from "@/components/nav/navigation"
import { NavigationMobile } from "@/components/nav/navigation-mobile"

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full bg-background">
      <div className="container flex items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center justify-center gap-2 md:gap-6">
          <Navigation navItems={siteConfig.navItems} />
          <Link
            aria-label="Get started"
            href="mailto:hello@pjborowiecki.com"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group gap-2 rounded-full border-foreground px-6 py-4 text-base font-semibold leading-none tracking-wide hover:bg-foreground hover:text-background"
            )}
          >
            let&apos;s talk
            <span className="sr-only">Let&apos;s talk</span>
            <Icons.arrowUpRight className="h-2 w-2 transition-all duration-100 ease-out group-hover:rotate-45" />
          </Link>
          <NavigationMobile navItems={siteConfig.navItems} />
        </div>
      </div>
    </header>
  )
}
