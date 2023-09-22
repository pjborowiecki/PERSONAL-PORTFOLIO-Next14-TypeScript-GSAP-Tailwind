import Image from "next/image"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section
      id="about-section"
      className="mx-auto flex min-h-screen w-full max-w-[2560px] items-center justify-center"
    >
      <div className="mx-[4rem] grid h-full w-full grid-cols-2">
        {/* Image */}
        <div className="flex w-full items-center justify-center">
          <Image
            src="/images/profile.jpeg"
            alt="My profile picture"
            width={500}
            height={500}
          />
        </div>
        {/* About me */}
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex max-w-[580px] flex-col gap-8 font-hankenGrotesk text-[30px] font-normal leading-[150%] tracking-wide text-newText-alt">
            <p> Hello, I&apos;m Piotr.</p>
            <p>
              A recent Computer Science graduate from Durham University, with a
              passion for building modern, reliable software.
            </p>
            <p>
              Whether you are a startup looking <br /> to establish an online
              presence, an organization seeking a skilled developer, or an
              individual with a unique project idea, I&apos;m here to help.
            </p>

            <p>
              Have a look around, and if you like what you see, just drop me a
              line or two. Let&apos;s build something great together
            </p>

            <div className="flex justify-end">
              <Button className="w-fit bg-transparent text-[24px] text-white underline underline-offset-8">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
