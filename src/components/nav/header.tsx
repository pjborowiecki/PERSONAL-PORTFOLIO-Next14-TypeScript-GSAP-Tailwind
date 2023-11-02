"use client"

import * as React from "react"
import Link from "next/link"
import { notFound, usePathname } from "next/navigation"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { siteConfig } from "@/config/site"
import { GsapContext } from "@/providers/gsap-provider"
import { cn } from "@/lib/utils"
import { CircleButton } from "@/components/circle-button"
import { Button } from "@/components/ui/button"

export function Header() {
  const { gsap } = React.useContext(GsapContext)
  if (!gsap) notFound()

  const pathname = usePathname()

  const header = React.useRef<HTMLHeadElement | null>(null)
  const menuButton = React.useRef<HTMLDivElement | null>(null)

  const [active, setActive] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (active) setActive(false)
  }, [pathname, active])

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(menuButton.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(menuButton.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          })
        },
        onEnterBack: () => {
          gsap.to(menuButton.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          })
        },
      },
    })
  }, [gsap])

  return (
    <header
      ref={header}
      className="mx-auto max-w-[1600px] whitespace-nowrap px-5 py-6 transition-all duration-500 ease-in-out md:px-6 md:py-8 lg:px-7 lg:py-9"
    >
      <nav className="flex w-full items-center justify-between">
        {/* LHS (Logo) */}
        <div className="flex items-center justify-center pr-[4px] text-[1.9vw] transition-all duration-100 ease-in-out hover:rotate-[-2deg] hover:scale-110 lg:text-[1.7vw] xl:text-[18px]">
          <Link
            href="/"
            className="text-lg font-bold uppercase tracking-wider text-secondary hover:text-primary"
          >
            {siteConfig?.nameShort}
          </Link>
        </div>

        {/* RHS (NavLinks and Contact Button) */}
        <div className="flex flex-1 items-center justify-end">
          {/* NavLinks */}
          <ul className="hidden items-center justify-center space-x-[2.4vw] sm:flex lg:space-x-[1.6vw] 2xl:space-x-[42px]">
            {siteConfig?.navItems?.map((navItem) => (
              <li
                key={navItem.label}
                className="group relative inline-block cursor-pointer text-[1.9vw] font-normal tracking-wider text-secondary hover:scale-110 hover:text-primary lg:text-[1.7vw] xl:text-[18px]"
              >
                <Link href={navItem.href}>{navItem.label}</Link>
                <div className="absolute left-[50%] top-[3.4vw] h-[6px] w-[6px] translate-x-[-50%] scale-0 rounded-full bg-secondary transition-all duration-200 ease-in-out group-hover:scale-100 lg:top-[3.2vw] xl:top-[36px]" />
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <Button
            variant="secondary"
            className="ml-[2.4vw] hidden sm:block lg:ml-[1.6vw] 2xl:ml-[42px]"
          >
            Let&apos;s talk!
          </Button>
        </div>
      </nav>

      {/* "Hamburger" Button */}
      <div ref={menuButton} className="fixed right-[2%] top-[2%] scale-0">
        <CircleButton
          onClick={() => setActive((value) => !value)}
          className="relative m-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-secondary"
        >
          <div
            className={cn(
              "relative z-[1] w-full before:relative before:top-[6px] before:m-auto before:block before:h-[1px] before:w-[40%] before:bg-secondary-foreground before:transition-transform before:duration-300 before:content-[''] after:relative after:top-[-6px] after:m-auto after:block after:h-[1px] after:w-[40%] after:bg-secondary-foreground after:transition-transform after:duration-300 after:content-['']",
              active && ""
            )}
          ></div>
        </CircleButton>
      </div>

      {/* "Hamburger Menu" */}
      {active && <div>menu open</div>}
    </header>
  )
}
