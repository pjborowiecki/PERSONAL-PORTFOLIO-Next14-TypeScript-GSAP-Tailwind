"use client"

import Link from "next/link"

export function Header(): JSX.Element {
  return (
    <header className="px-[3rem] py-[2rem]">
      <nav className="flex items-center justify-between">
        <div></div>
        <div className="flex gap-4">
          <Link href="/"></Link>
          <Link href="/">Projects</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="cursor-pointer lg:hidden">Menu</div>
      </nav>
    </header>
  )
}
