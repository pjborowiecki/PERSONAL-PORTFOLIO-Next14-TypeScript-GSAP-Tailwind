import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"

export function HeroSection(): JSX.Element {
  return (
    <section id="hero-section" aria-label="Hero section">
      <div className="mx-auto flex size-full min-h-screen max-w-[1480px] flex-col justify-between px-8 pt-20 md:px-16">
        <div className="flex flex-1 items-center justify-end pr-[8vw]">
          <div className="w-[460px] space-y-6 md:space-y-10 lg:w-[500px]">
            <h2 className="text-[24px] font-medium leading-normal tracking-tight sm:text-[30px] md:text-[36px] lg:text-[40px]">
              <Balancer>
                Reliable{" "}
                <span className="underline decoration-red-300 underline-offset-8">
                  software developer{" "}
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
                  "w-fit text-[18px] underline underline-offset-8 sm:text-[20px] md:text-[22px]"
                )}
              >
                <span className="relative text-red-300">See my work</span>
              </Link>
              <span className="h-0.5 w-7 bg-muted-foreground transition-all duration-300 ease-in-out group-hover:opacity-0" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-y-2 whitespace-nowrap py-3">
            <div className="flex items-center gap-2">
              <p className="text-[16px] font-medium uppercase leading-none tracking-wide text-red-300 md:text-[15px]">
                Currently taking bookings
              </p>
              <span className="size-1.5 animate-ping rounded-full bg-red-300" />
            </div>

            <p className="hidden text-[15px] font-medium leading-none tracking-wide text-red-300 md:flex">
              hello @ pjborowiecki . com
            </p>
          </div>

          <div className="flex items-center justify-between border-y-2 border-dotted py-4">
            <p className="w-full max-w-[460px] text-[15px] leading-[24px] tracking-normal">
              <Balancer>
                With nearly 5 years of practical experience and a CompSci degree
                from one of the top UK universities, I feel confident in my
                ability to meet your high expectations and deliver value from
                day one.
              </Balancer>
            </p>

            <div className="hidden flex-col items-end whitespace-nowrap text-[15px] font-normal uppercase leading-[24px] tracking-tight text-muted-foreground lg:flex">
              <p>Full-Stack Software Developer</p>
              <p>Based in Kraków, Poland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
