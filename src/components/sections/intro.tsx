import { cn } from "@/lib/utils"
import { gradient } from "@/components/primitives"

export function IntroSection() {
  return (
    <section
      id="intro-section"
      className="mx-auto flex min-h-screen w-full max-w-[2560px] items-center justify-center bg-newDark-base"
    >
      <div className="mx-[4rem] w-full">
        <p className="max-w-[1640px] px-[8rem] font-hankenGrotesk text-[94.5px] font-bold leading-[130%] tracking-tight text-newText-base">
          I help businesses and individuals turn great ideas into{" "}
          <span className="text-newDark-alt underline underline-offset-8">
            <span className={cn(gradient(), "font-semibold")}>
              high-quality
            </span>
          </span>{" "}
          software, sharing my skills as <br /> a modern{" "}
          <span className="text-newDark-alt underline underline-offset-8">
            <span className={cn(gradient(), "font-semibold")}>
              full-stack developer
            </span>
          </span>
          .
        </p>
      </div>
    </section>
  )
}
