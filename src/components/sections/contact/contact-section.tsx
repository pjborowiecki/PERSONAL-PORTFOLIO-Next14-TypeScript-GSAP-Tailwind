import { ContactForm } from "@/components/forms/contact-form"
import { gradient } from "@/components/primitives"

export function ContactSection() {
  return (
    <section
      id="contact-section"
      aria-label="contact section"
      className="w-full"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-[7.6vw] pb-[24vw] pt-[12vw]">
        <div className="mx-[2rem] hidden md:flex">
          <h2 className="text-[16.2vw] font-black leading-[86%] 2xl:text-[232px]">
            Have some
            <span className="text-[14.8vw] 2xl:text-[232px]">
              {" "}
              great ideas?
            </span>
          </h2>
        </div>

        <div className="mx-[2rem] grid h-auto grid-cols-1 gap-[12.8vw] md:grid-cols-2 md:gap-[4.4vw]">
          <div className="flex w-full flex-col gap-[12.8vw] md:gap-[3.8vw] 2xl:gap-8">
            <div className="flex flex-col gap-[9.6vw]">
              <h2 className="text-[16.8vw] font-black leading-[86%] tracking-tight md:hidden md:text-[8.9vw]">
                Have some
                <span className="text-[15.8vw] md:text-[8.2vw]">
                  {" "}
                  great ideas?
                </span>
              </h2>
              <h3 className="text-[11.9vw] font-semibold leading-[110%] tracking-tight md:text-[6.1vw] 2xl:text-[104px] 2xl:leading-[104%]">
                Let&apos;s
                <span className={gradient()}> bring them to life </span>
                <span className="font-bold underline decoration-turquoise-base/20 underline-offset-8">
                  together
                </span>
              </h3>
            </div>

            <p className="text-[6.8vw] leading-[150%] text-muted-foreground md:text-[3.4vw] md:leading-[120%] 2xl:text-[32px] 2xl:leading-[136%]">
              I am looking for freelance opportunities or a full time job,
              either remotely or in Kraków, where I live.
            </p>
          </div>

          <div className="h-full 2xl:mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
