import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto min-h-screen w-full max-w-[1920px] bg-newAccent-base"
    >
      <div className="mx-[4rem] overflow-hidden">
        {/* Marquee */}
        <div></div>
      </div>

      <div></div>
    </section>
    // <section id="hero" className="flex min-h-screen flex-col p-[3rem]">
    //   <h5
    //     className={cn("text-[1.85rem]", gradient({ color: "violet" }))}
    //     data-scroll
    //     data-scroll-speed="1.05"
    //   >
    //     Nothing is impossible for a
    //   </h5>
    //   <h3
    //     className="mb-[3rem] mt-[1rem] max-w-[1000px] text-[9vw] leading-[1.1]"
    //     data-scroll
    //     data-scroll-speed="1.2"
    //   >
    //     full-stack developer
    //   </h3>
    //   <p
    //     className="max-w-[1000px] text-clampParagraph leading-[1.4] text-primary/80"
    //     data-scroll
    //     data-scroll-speed="1.1"
    //   >
    //     The human world is exploding at the seams. Human creativity and the
    //     implementation of human inventions and technology is now at an
    //     accelerated fever pitch like nothing ever before seen in the history of
    //     the world. Well, where is it leading, and how does one integrate this
    //     stuff into one&apos;s own life?
    //   </p>
    // </section>
  )
}
