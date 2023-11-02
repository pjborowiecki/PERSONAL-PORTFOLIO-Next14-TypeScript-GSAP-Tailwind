import { ContactForm } from "@/components/forms/contact-form"
import { gradient } from "@/components/primitives"

export function ContactSection() {
  return (
    <section
      id="contact-section"
      aria-label="contact section"
      className="mx-auto w-full max-w-[2560px] pb-[24vw] pt-[12vw]"
    >
      <div className="mx-[2rem] grid h-auto grid-cols-1 gap-[12.8vw]">
        <div className="flex flex-col gap-[12.8vw]">
          <div className="flex flex-col gap-[9.6vw]">
            <h2 className="text-[16.8vw] font-black leading-[86%] tracking-tight">
              Have some
              <span className="text-[15.8vw]"> great ideas?</span>
            </h2>
            <h3 className="text-[11.9vw] font-semibold leading-[110%] tracking-tight">
              Let&apos;s
              <span className={gradient()}> bring them to life </span>
              <span className="font-bold underline decoration-turquoise-base/20 underline-offset-8">
                together
              </span>
            </h3>
          </div>

          <p className="text-[6.8vw] leading-[150%] text-muted-foreground">
            I am looking for freelance opportunities or a full time job, either
            remotely or in Kraków, where I live.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
