import Link from "next/link"
import { marqueeItems } from "@/data/constants"
import { cn } from "tailwind-variants"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="container mt-[3.5rem] w-[96vw] rounded-t-[32px] rounded-bl-[32px] bg-newDark-alt2 py-[2.5rem]">
        <nav className="flex w-full justify-end font-medium">
          <ul className="flex gap-6 leading-[100%]">
            {siteConfig.navItems.map((item) => (
              <Link key={item.label} href={item.href} className="">
                {item.label}
              </Link>
            ))}
            <Link href="#contact" className="">
              Contact
            </Link>
          </ul>
        </nav>

        {/* hero__text */}
        <div className="">
          {/* sub__header */}
          <div className="">
            {/* circle */}
            <div className="" />
            <h4>Quality code, one line at a time</h4>
          </div>
          <h1 className="text-[9vw] font-black leading-[96%] tracking-tight">
            Reliable <br /> Software <br /> Developer
          </h1>
          <p>Crafting quality code, one line at a time</p>
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
        <div className="">
          {/* left */}
          <div className=""></div>
          {/* right */}
          <div className=""></div>
          {/* inner */}
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>JavaScrip</span>
            <span>SQL</span>
            <span>Drizzle ORM</span>
            <span>Prisma</span>
            <span>Postgres</span>
            <span>MySQL</span>
          </div>
        </div>
        {/* bottom div */}
        <div>
          {/* left */}
          <div>
            {/* curve */}
            <div></div>
            {/* cover */}
            <div></div>
          </div>

          {/* right */}
          <div>
            {/* services  */}
            <div>
              <h5>services</h5>
            </div>
          </div>
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
