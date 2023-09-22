import { Button } from "@/components/ui/button"

export function HeroSection() {
  const marqueeItems = [
    "react",
    "type script",
    "next.js",
    "MERN",
    "GraphQL",
    "deep learning",
    "pyTorch",
    "java script",
    "python",
    "mySQL",
    "drizzle ORM",
    "Prisma",
    "mongo DB",
    "node.js",
    "express",
    "tailwind CSS",
    "postgreSQL",
    "full-stack",
    "front-end",
    "back-end",
    "web development",
    "mobile development",
    "software development",
    "software engineering",
    "machine learning",
    "artificial intelligence",
  ]
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen w-full max-w-[2560px] flex-col bg-gradient-to-br from-turquoise-base to-turquoise-alt"
    >
      <div className="mx-[4rem] text-newDark-base">
        <div className="flex items-center justify-between border-b py-8">
          <div>
            <p>Piotr J Borowiecki</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <ul className="flex gap-4">
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Blog</li>
            </ul>
            <Button>Let's Talk</Button>
          </div>
        </div>

        <div className="mx-[4rem] flex flex-col gap-4 py-[70px]">
          <h1 className=" max-w-[1200px] font-hankenGrotesk text-[186px] font-black uppercase leading-[100%] tracking-tight text-newDark-base">
            Reliable Software Developer
          </h1>
          <p className="text-[32px] leading-[100%]">for Ambitious Projects</p>
          <h2 className="">Delivering quality, one line at a time</h2>
        </div>
      </div>

      <ul className="absolute bottom-[-70px] left-0 flex h-[160px] w-full rotate-[-2deg] items-center justify-center gap-4 whitespace-nowrap bg-white">
        {marqueeItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-4 text-[48px] font-bold capitalize text-black after:inline-flex after:h-3 after:w-3 after:rounded-full after:bg-newDark-alt after:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
      <ul className="absolute bottom-0 flex h-[160px] w-full rotate-[3deg] items-center justify-center gap-4 whitespace-nowrap bg-white">
        {marqueeItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-4 text-[48px] font-bold capitalize text-black after:inline-flex after:h-3 after:w-3 after:rounded-full after:bg-newDark-alt after:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
      {/* className="flex items-center gap-4 capitalize underline-offset-8
      after:inline-flex after:h-2 after:w-2 after:rounded-full
      after:bg-turquoise-base after:text-turquoise-base after:content-['']
      last-of-type:after:hidden hover:underline group-hover:text-turquoise-base
      group-hover:after:bg-newText-base" */}
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
