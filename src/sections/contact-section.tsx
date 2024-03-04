import { ContactForm } from "@/components/forms/contact-form"

export function ContactSection(): JSX.Element {
  return (
    <section
      id="contact-section"
      aria-label="contact section"
      className="h-screen"
    >
      <div className="mx-auto w-[70vw]">
        <div className="py-16">
          <h2 className="text-[52px] font-semibold">Let&apos;s get in touch</h2>
        </div>
        <div className="flex w-full">
          <div className="w-2/5">
            <p>hello @ pjborowiecki . com</p>
            <p>some other text</p>
          </div>
          <div className="flex w-3/5 items-center justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
