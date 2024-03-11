"use client"

import * as React from "react"
import Link from "next/link"

import { gsap, useGSAP } from "@/config/gsap"
import { siteConfig } from "@/config/site"
import { mainNavItems } from "@/data/nav-items"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Header(): JSX.Element {
  const header = React.useRef<HTMLDivElement>(null)
  const timeline = React.useRef<gsap.core.Timeline | null>(null)

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 })
    },
    { scope: header }
  )

  const toggleMenu = contextSafe(() => {
    if (!timeline.current) {
      timeline.current = gsap
        .timeline({ paused: true })
        .to("#menu-overlay", {
          duration: 1.1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        })

      timeline.current.play()
    } else {
      timeline.current.reversed()
      timeline.current.reversed(!timeline.current.reversed())
    }
  })

  return (
    <header ref={header} className="w-full">
      <div className="fixed inset-x-0 top-0 z-[99] mx-auto flex h-24 w-full max-w-[1480px] items-center justify-between px-8">
        <Link
          id="site-title"
          href="/"
          className="whitespace-nowrap text-[24px] font-medium leading-none tracking-tight md:text-[28px] lg:text-[32px] xl:text-[36px]"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center justify-center gap-12 lg:gap-16 2xl:gap-20">
          <nav id="nav-links-desktop" className="hidden md:flex">
            <ul className="flex items-center gap-12 lg:gap-16 2xl:gap-20">
              {mainNavItems.map((item) => (
                <li key={item.title}>
                  <Link
                    data-replace={item.title}
                    href={item.href}
                    className={cn(
                      "nav-link",
                      "text-[24px] font-normal tracking-normal lg:text-[28px] 2xl:text-[32px]"
                    )}
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            variant="ghost"
            id="menu-toggle-button"
            className="group flex size-10 cursor-pointer flex-col items-end justify-center gap-0.5 rounded-full border-2 border-foreground p-2.5 transition-all duration-150 ease-in-out hover:bg-foreground md:size-12"
            onClick={toggleMenu}
          >
            <span
              id="top-menu-bar"
              className="h-0.5 w-full bg-foreground transition-all duration-300 ease-in-out group-hover:bg-background"
            />
            <span
              id="bottom-menu-bar"
              className="h-0.5 w-1/2 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-background"
            />
          </Button>
        </div>
      </div>

      <div
        id="menu-overlay"
        className={cn(
          "overlay-clip-path",
          "fixed left-0 top-0 z-[98] flex h-screen w-screen items-center justify-between bg-gradient-to-br from-red-500 to-red-300 p-[2em]"
        )}
      >
        overlay
      </div>
    </header>
  )
}
