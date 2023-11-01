import { cn } from "@/lib/utils"
import { gradient } from "@/components/primitives"

export function IntroSection() {
  return (
    <section
      id="intro-section"
      className="grid w-full items-center justify-center"
    >
      <div className="container w-[96vw] rounded-[32px] bg-newDark-alt2 py-[16rem]">
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
      </div>
    </section>
  )
}
