import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="h-screen w-screen"
    >
      <div className="mx-auto flex h-[calc(100%-96px)]  max-h-[900px] w-[90vw] flex-col items-center justify-center md:w-[70vw]">
        <div className="grid size-full grid-cols-1 gap-4 md:grid-cols-2 ">
          <div className="hidden h-full md:flex"></div>

          <div className="flex flex-col justify-center gap-6 px-2 pl-[10vw] md:gap-12 md:pl-0 md:pr-20">
            <h2 className="text-[22px] font-medium leading-normal tracking-tight md:text-[36px]">
              <Balancer>
                Reliable{" "}
                <span className="underline decoration-red-300 underline-offset-8">
                  software developer
                </span>{" "}
                for ambitious projects. Most of my experience is in modern
                full-stack web development, data science, and AI.
              </Balancer>
            </h2>

            <div className="group flex items-center gap-1.5">
              <Link
                href="#projects-section"
                data-replace="See my work"
                className={cn(
                  "nav-link",
                  "w-fit text-[18px] underline underline-offset-8 md:text-[20px]"
                )}
              >
                <span className="relative text-red-300">See my work</span>
              </Link>
              <span className="h-0.5 w-7 bg-muted-foreground transition-all duration-300 ease-in-out group-hover:opacity-0" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between px-2 py-4">
            <div className="flex items-center justify-center gap-2">
              <p className="text-[16px] font-medium uppercase leading-none tracking-wide text-red-300 md:text-[15px]">
                Currently taking bookins
              </p>
              <span className="size-1.5 animate-ping rounded-full bg-red-300" />
            </div>

            <p className="hidden text-[15px] font-medium leading-none tracking-wide text-red-300 md:flex">
              hello @ pjborowiecki . com
            </p>
          </div>

          <div className="grid w-full grid-cols-1 items-center justify-between gap-4 border-y-2 border-dotted py-4 md:grid-cols-2">
            <div className="px-2">
              <p className="w-full text-[16px] leading-[24px] tracking-normal md:pr-16 md:text-[15px]">
                <Balancer>
                  With nearly 5 years of practical experience and a CompSci
                  degree from one of the top UK universities, I feel confident
                  in my ability to meet your high expectations and deliver value
                  from day one.
                </Balancer>
              </p>
            </div>

            <div className="hidden flex-col px-2 text-[15px] font-normal uppercase leading-[24px] tracking-tight text-muted-foreground md:flex md:items-end">
              <p>Full-Stack Software Developer</p>
              <p>Based in Kraków, Poland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
