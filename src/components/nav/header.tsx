import Link from "next/link"

import { siteConfig } from "@/config/site"
import { mainNavItems } from "@/data/nav-items"

export function Header(): JSX.Element {
  return (
    <header className="sticky top-16 mx-auto flex h-12 w-[80vw] items-center justify-between px-2">
      <div className="flex items-center justify-center">
        <h3 className="text-[32px] font-semibold leading-none tracking-tight">
          {siteConfig.name}
        </h3>
      </div>
      <div className="flex items-center gap-14">
        <nav>
          <ul className="flex items-center gap-14">
            {mainNavItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-[24px] font-normal tracking-tight text-muted-foreground transition-all duration-150 ease-in-out hover:text-foreground"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="group flex size-11 cursor-pointer flex-col items-end justify-center gap-0.5 rounded-full border-2 border-foreground p-2.5 transition-all duration-150 ease-in-out hover:bg-foreground">
          <span className="h-0.5 w-full bg-foreground transition-all duration-300 ease-in-out group-hover:bg-background" />
          <span className="h-0.5 w-1/2 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-background" />
        </div>
        {/* <div>pl/en</div> */}
      </div>
    </header>
  )
}
