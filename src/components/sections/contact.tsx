import { cn } from "@/lib/utils"
import { ContactForm } from "@/components/forms/contact-form"
import { gradient } from "@/components/primitives"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-[1560px] flex-col gap-[4.4rem] px-[3rem] py-[9rem] "
      aria-label="contact section"
    >
      <h3 className="text-center text-[72px] font-black tracking-tight">
        Let&apos;s Get in Touch
      </h3>
      <div className="flex flex-col items-center justify-center gap-[4.4rem] lg:flex-row">
        <div className="flex w-full flex-col items-center gap-[2.2rem]">
          <h4 className="relative text-[64px] font-semibold leading-[1.1] tracking-tight">
            Have a geat idea? Let&apos;s
            <br />
            <span className={gradient()}>bring it to life </span>
            <span className="underline decoration-turquoise-base/20 underline-offset-8">
              together
            </span>
            .
          </h4>
          <p className="text-[2rem] leading-[1.35] text-primary/80">
            <span className="tracking-[0.025rem]">
              I am looking for freelance opportunities or
            </span>
            <br />
            <span className="tracking-[0.0005rem]">
              a full time job, either remotely or in Kraków.
            </span>
          </p>
        </div>
        <div className="w-full max-w-[634px]">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
