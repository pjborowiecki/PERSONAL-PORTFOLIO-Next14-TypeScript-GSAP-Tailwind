import Link from "next/link"

import { siteConfig } from "@/config/site"
import { mainNavItems } from "@/data/nav-items"

import { cn } from "@/lib/utils"

export function Header(): JSX.Element {
  return (
    <header className="mx-auto mt-12 flex h-12 w-[90vw] items-center justify-between transition-all duration-300 ease-in-out md:w-[70vw]">
      <div className="flex items-center justify-center">
        <Link
          data-replace={siteConfig.name}
          href="/"
          className={cn(
            "whitespace-nowrap text-[20px] font-medium leading-none tracking-tight md:text-[36px]"
          )}
        >
          <span>{siteConfig.name}</span>
        </Link>
      </div>
      <div className="flex items-center gap-24">
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-24">
            {mainNavItems.map((item) => (
              <li key={item.title}>
                <Link
                  data-replace={item.title}
                  href={item.href}
                  className={cn(
                    "nav-link",
                    "text-[32px] font-normal tracking-normal"
                  )}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="group flex size-10 cursor-pointer flex-col items-end justify-center gap-0.5 rounded-full border-2 border-foreground p-2.5 transition-all duration-150 ease-in-out hover:bg-foreground md:size-12">
          <span className="h-0.5 w-full bg-foreground transition-all duration-300 ease-in-out group-hover:bg-background" />
          <span className="h-0.5 w-1/2 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-background" />
        </div>
      </div>
    </header>
  )
}
