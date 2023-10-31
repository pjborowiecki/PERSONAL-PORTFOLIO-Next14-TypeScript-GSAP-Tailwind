import Link from "next/link"
import { marqueeItems } from "@/data/constants"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex w-full flex-col items-center justify-center pb-[12rem]"
    >
      <div className="container flex h-[3.3rem] w-full items-center justify-between text-newDark-alt">
        <div className="flex items-center justify-start gap-[0.6rem]">
          <div className="h-[1rem] w-[1rem] rounded-full bg-dark-alt" />
          <p className="font-extrabold text-newDark-alt2">
            Open to work opportunities and taking bookings. Let&apos;s talk!
          </p>
        </div>
      </div>

      <div className="container w-[96vw] rounded-t-[32px] rounded-bl-[32px] bg-newDark-alt2 py-[2.5rem] lg:px-[4rem] xl:px-[5rem] xl:py-[3rem] 2xl:px-[6rem] 2xl:py-[3.5rem]">
        <nav className="flex w-full justify-end">
          <ul className="flex items-center justify-center gap-3 sm:gap-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-semibold leading-[100%] opacity-90 hover:text-turquoise-base hover:opacity-100 sm:text-[1.1rem]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              // className="rounded-full bg-gradient-to-r from-turquoise-base to-turquoise-alt px-[3rem] py-[1rem] font-bold text-newDark-alt3"
              className="rounded-full border border-turquoise-base px-[2rem] py-[0.6rem] font-bold text-turquoise-base"
            >
              let&apos;s talk
            </Link>
          </ul>
        </nav>

        <div className="grid w-full grid-cols-12 pt-[6rem]">
          <div className="col-span-12 mb-[1rem] flex items-center gap-[0.8rem]">
            <Badge
              variant="heroBadge"
              className="gap-[0.6rem] text-muted-foreground"
            >
              <span className="h-[0.5rem] w-[0.5rem] animate-pulse rounded-full bg-gradient-to-br from-turquoise-base to-turquoise-alt" />
              Quality code, one line at a time
            </Badge>
          </div>
          <h1 className="col-span-12 mb-[2.5rem] text-[9vw] font-black leading-[94%] tracking-tight">
            Reliable <br /> Software <br /> Developer
          </h1>
          <p className="col-span-6 text-[1.7rem] font-medium text-muted-foreground">
            Modern programming solutions for ambitious projects.
          </p>
        </div>
        {/* image__container */}
        <div>
          <svg width="100%" height="100%" viewBox="0 0 100 40">
            <clipPath id="border">
              <path id="main__image__path" d=""></path>
            </clipPath>
            <image
              width="100%"
              height="100%"
              clipPath="url(#border)"
              xlinkHref="./images/hero_image_7.jpeg"
            />
          </svg>
        </div>

        {/* marquee (carousel) */}
        <div className="relative w-full overflow-hidden">
          <div className="marqueeGradient absolute left-0 top-0 z-[2] h-full w-1/3" />
          <div className="marqueeGradient absolute right-0 top-0 z-[2] h-full w-1/3"></div>
          <div className="relative flex w-[300%] animate-marquee items-center justify-center gap-4 whitespace-nowrap text-[1.6rem] text-muted-foreground">
            {marqueeItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-4"
              >
                <span key={item}>{item}</span>
                <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-gradient-to-br from-turquoise-base to-turquoise-alt" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-[56px] w-full max-w-[96vw]">
        <div className="relative flex h-full w-1/2 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            className="absolute right-0 top-0 h-[32px] w-[32px] antialiased"
          >
            <path d="M0,0 A32,32 0 0 1 32,32 L32,0 Z" fill="#141414" />
          </svg>
        </div>
        <div className="flex w-1/2 items-center gap-[0.6rem] rounded-b-[32px] bg-newDark-alt2 px-[1.5rem]">
          <span className="h-[0.5rem] w-[0.5rem] animate-pulse rounded-full bg-gradient-to-br from-turquoise-base to-turquoise-alt" />
          <span className="text-[1.1rem] font-medium text-muted-foreground">
            Open to work opportunities and currently taking bookings
          </span>
        </div>
      </div>
    </section>

    // <section
    //   id="hero"
    //   className="mx-auto flex min-h-[120vh] w-full max-w-[2560px] flex-col bg-gradient-to-br from-turquoise-base to-turquoise-alt"
    // >
    //   <div className="relative min-h-[120vh]">
    //     <div className="mx-[4rem] flex h-full min-h-screen flex-1 flex-col justify-center text-newDark-base">
    //       <div className="mx-[4rem] flex flex-col gap-4 py-[70px]">
    //         <h1 className="max-w-[1200px] font-hankenGrotesk text-[186px] font-black uppercase leading-[100%] tracking-tight text-newDark-base">
    //           Reliable Software Developer
    //         </h1>
    //         <p className="text-[32px] leading-[100%]">for Ambitious Projects</p>
    //         <h2 className="">Delivering quality, one line at a time</h2>
    //       </div>
    //     </div>

    //     <div>
    //       <ul className="absolute bottom-[-70px] left-0 flex h-[160px] w-full rotate-[-2deg] items-center justify-center gap-4 whitespace-nowrap bg-white">
    //         {marqueeItems.map((item, index) => (
    //           <li
    //             key={index}
    //             className="flex items-center justify-center gap-4 text-[48px] font-bold capitalize text-black after:inline-flex after:h-3 after:w-3 after:rounded-full after:bg-newDark-alt after:content-['']"
    //           >
    //             {item}
    //           </li>
    //         ))}
    //       </ul>
    //       <ul className="absolute bottom-0 flex h-[160px] w-full rotate-[3deg] items-center justify-center gap-4 whitespace-nowrap bg-white">
    //         {marqueeItems.map((item, index) => (
    //           <li
    //             key={index}
    //             className="flex items-center justify-center gap-4 text-[48px] font-bold capitalize text-black after:inline-flex after:h-3 after:w-3 after:rounded-full after:bg-newDark-alt after:content-['']"
    //           >
    //             {item}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //   {/* className="flex items-center gap-4 capitalize underline-offset-8
    //   after:inline-flex after:h-2 after:w-2 after:rounded-full
    //   after:bg-turquoise-base after:text-turquoise-base after:content-['']
    //   last-of-type:after:hidden hover:underline group-hover:text-turquoise-base
    //   group-hover:after:bg-newText-base" */}
    // </section>
    // // <section id="hero" className="flex min-h-screen flex-col p-[3rem]">
    // //   <h5
    // //     className={cn("text-[1.85rem]", gradient({ color: "violet" }))}
    // //     data-scroll
    // //     data-scroll-speed="1.05"
    // //   >
    // //     Nothing is impossible for a
    // //   </h5>
    // //   <h3
    // //     className="mb-[3rem] mt-[1rem] max-w-[1000px] text-[9vw] leading-[1.1]"
    // //     data-scroll
    // //     data-scroll-speed="1.2"
    // //   >
    // //     full-stack developer
    // //   </h3>
    // //   <p
    // //     className="max-w-[1000px] text-clampParagraph leading-[1.4] text-primary/80"
    // //     data-scroll
    // //     data-scroll-speed="1.1"
    // //   >
    // //     The human world is exploding at the seams. Human creativity and the
    // //     implementation of human inventions and technology is now at an
    // //     accelerated fever pitch like nothing ever before seen in the history of
    // //     the world. Well, where is it leading, and how does one integrate this
    // //     stuff into one&apos;s own life?
    // //   </p>
    // // </section>
  )
}
