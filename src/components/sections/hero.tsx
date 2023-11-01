import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section id="hero" className="grid w-full items-center justify-center">
      <div className="container flex h-[3.2rem] w-full items-center justify-between text-newDark-alt">
        <div className="flex items-center justify-start gap-[0.6rem]">
          <div className="h-[1rem] w-[1rem] rounded-full bg-dark-alt" />
          <p className="text-[0.875rem] font-extrabold text-newDark-alt2">
            Open to work opportunities and taking bookings. Let&apos;s talk!
          </p>
        </div>
      </div>

      <div className="container w-[96vw] rounded-t-[32px] rounded-bl-[32px] bg-newDark-alt2 py-[2.5rem] shadow-xl lg:px-[4rem] xl:px-[5rem] xl:py-[3rem] 2xl:px-[6rem] 2xl:py-[3.5rem]">
        <nav className="flex w-full justify-end">
          <ul className="flex items-center justify-center gap-3 sm:gap-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium leading-[100%] opacity-90 hover:text-turquoise-base hover:opacity-100 sm:text-[1.1rem]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full border border-turquoise-base px-[1.5rem] py-[0.5rem] font-bold text-turquoise-base"
            >
              let&apos;s talk
            </Link>
          </ul>
        </nav>

        <div className="grid gap-[0.3rem] pb-[12rem] pt-[6rem]">
          <Badge
            variant="heroBadge"
            className="w-fit gap-[0.6rem] text-muted-foreground"
          >
            <span className="h-[0.5rem] w-[0.5rem] animate-pulse rounded-full bg-gradient-to-br from-turquoise-base to-turquoise-alt" />
            <span>Quality code, one line at a time</span>
          </Badge>

          <div className="grid w-full grid-cols-12">
            <div className="col-start-1 col-end-6 row-span-full grid h-full w-full gap-[2rem]">
              <h1 className="text-[9vw] font-black leading-[90%] tracking-tight">
                Reliable <br /> Software <br /> Developer
              </h1>
              {/* <p className="text-[1.7rem] font-medium text-muted-foreground">
                Modern programming solutions for ambitious projects.
              </p> */}
            </div>

            {/* <div className="clip-path relative col-start-5 col-end-12 row-span-full w-full">
              <Image
                src="/images/hero_image_6.jpeg"
                alt="hero image"
                fill
                className="ml-[60px] w-full rounded-[32px]"
              />
            </div> */}

            <div className="col-start-11 col-end-13 row-span-full h-full w-full">
              <p className="text-[1.6rem]">test</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
