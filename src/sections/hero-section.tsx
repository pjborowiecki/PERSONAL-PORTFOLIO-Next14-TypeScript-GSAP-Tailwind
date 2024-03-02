import Balancer from "react-wrap-balancer"

export function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="h-screen pt-16"
    >
      <div className="mx-auto flex h-[80vh] max-h-[900px] w-[80vw] flex-col items-center justify-center">
        <div className="grid size-full grid-cols-2 gap-4">
          <div className="h-full"></div>

          <div className="flex h-full flex-col justify-center gap-14 px-2">
            <h2 className="text-[28px] leading-[36px] tracking-tight">
              <Balancer>
                Full-stack software developer for ambitious projects.
              </Balancer>
            </h2>
            <p className="text-[20px] underline underline-offset-8">
              See my work
            </p>
          </div>
        </div>

        <div>
          <div></div>
          <div className="flex w-full items-center justify-between gap-4 border-t-2 border-dotted py-4">
            <div className="w-1/2 px-2">
              <p className="text-sm leading-[18px] tracking-normal">
                Technological systems for managing enterprise processes and
                reducing energy consumption through software optimization as a
                new direction in dashboard design. Implementations to the
                telecommunications.
              </p>
            </div>

            <div className="flex w-1/2 flex-col items-end px-2 text-sm font-normal uppercase leading-tight tracking-tighter">
              <p>Full-Stack Software Developer</p>
              <p>Based in Kraków, Poland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
