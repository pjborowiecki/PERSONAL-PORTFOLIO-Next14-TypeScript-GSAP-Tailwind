import Balancer from "react-wrap-balancer"

export function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="mt-16 w-full md:mt-48"
    >
      <div className="container flex flex-col items-center gap-6 text-center">
        <h1 className="animate-fade-up font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <Balancer>Reliable Software Developer</Balancer>
        </h1>

        <h3 className="max-w-[42rem] animate-fade-up text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            This site is currently under construction. Please check back soon.
          </Balancer>
        </h3>
      </div>
    </section>
  )
}
