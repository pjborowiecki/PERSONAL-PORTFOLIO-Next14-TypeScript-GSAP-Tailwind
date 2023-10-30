"use client"

import Link from "next/link"

export function Header(): JSX.Element {
  return (
    <header className="fixed top-0 mx-auto w-full max-w-[2560px] bg-transparent py-[2rem] text-newDark-base">
      <nav className="mx-[8rem] flex items-center justify-between">
        <div>
          <Link href="/">Piotr J Borowiecki</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/">About</Link>
          <Link href="/">Services</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
