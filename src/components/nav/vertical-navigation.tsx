"use client"

import Link from "next/link"

import { externalNavItems, internalNavItems } from "@/data/nav-items"
import { useMenuStore } from "@/hooks/use-menu-store"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function VerticalNavigation(): JSX.Element {
  const { isOpen, toggleMenu } = useMenuStore((state) => ({
    isOpen: state.isOpen,
    toggleMenu: state.toggleMenu,
  }))

  return (
    // fixed left-0 top-0 w-[76px] flex items-center border-r border-foreground/50
    <div id="navigation-wrapper" className="">
      {/* Menu Button */}
      <div
        id="menu-button-wrapper"
        className={cn(
          "ease-[menuToggle] fixed left-3 top-24 z-[99] transition-transform duration-800 will-change-transform",
          isOpen && "open translate-x-20 delay-200"
        )}
      >
        <Button
          variant="ghost"
          className={cn(
            "ease-[menuToggle] size-12 cursor-pointer transition-transform duration-800 will-change-transform hover:bg-transparent",
            isOpen && "rotate-90"
          )}
          onClick={toggleMenu}
        >
          <span
            className={cn(
              "after:ease-[menuToggle] before:absolute before:left-[50%] before:top-[50%] before:block before:h-12 before:w-[2px] before:translate-x-[-5px] before:translate-y-[-50%] before:rotate-180 before:scale-y-[0.7] before:bg-foreground before:will-change-transform before:content-[''] after:transition-all after:duration-1000",
              "before:ease-[menuToggle] before:transition-all before:duration-1000 after:absolute after:left-[50%] after:top-[50%] after:block after:h-12 after:w-[2px] after:translate-x-[5px] after:translate-y-[-50%] after:rotate-0 after:scale-y-[0.7] after:bg-foreground after:will-change-transform after:content-['']",
              isOpen &&
                "before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-315 before:bg-background",
              isOpen &&
                "after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:bg-background"
            )}
          />
        </Button>
      </div>

      {/* Menu Content */}
      <div id="menu-content-wrapper" className="">
        <div
          id="menu-content"
          className={cn(
            "ease-[menuContentSlide] fixed z-[98] h-[100vh] w-[100vw] translate-x-[-100%] bg-foreground text-background transition-transform duration-1000 will-change-transform",
            isOpen && "open translate-x-0"
          )}
        >
          <div
            id="nav-items-container"
            className="relative left-52 top-24 w-[calc(90vw-260px)] overflow-hidden"
          >
            <ul id="internal-nav-items" className="flex flex-col gap-5">
              {internalNavItems.map((item, index) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="ease-[cubic-bezier(0.55,0.055,0.675,0.19)] translate-x-[-100%] text-[clamp(32px,4vw,52px)] font-medium leading-[1.1em] transition-transform duration-300 will-change-transform hover:cursor-pointer hover:font-black"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul id="external-nav-items" className="mt-24 flex flex-wrap gap-7">
              {externalNavItems.map((item) => {
                const Icon = Icons[item.icon as keyof typeof Icons]
                return (
                  <li key={item.title}>
                    <Link href={item.href} className="">
                      <Icon className="size-7" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
