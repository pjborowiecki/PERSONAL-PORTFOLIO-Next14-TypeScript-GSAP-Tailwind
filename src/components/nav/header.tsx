"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function Header(): JSX.Element {
  return (
    <header className="fixed top-0 z-[1] mx-auto w-full max-w-[2560px] bg-transparent py-[2rem] text-newDark-base dark:text-newText-alt">
      <nav className="mx-[8rem] flex items-center justify-between">
        <Link
          href="/"
          className="font-extrabold tracking-wide text-turquoise-base"
        >
          {siteConfig.nameShort}
        </Link>
        <div className="flex items-center justify-center gap-4">
          {siteConfig.navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full"
            )}
          >
            Let&apos;s talk
          </Link>
        </div>
      </nav>
    </header>
  )
}
