"use server"

import { env } from "@/env.mjs"
import { resend } from "@/config/email"
import { contactFormSchema, type ContactFormInput } from "@/validations/email"

import { NewEnquiryEmail } from "@/components/emails/new-enquiry-email"

export async function submitContactForm(
  rawInput: ContactFormInput
): Promise<"invalid-input" | "error" | "success"> {
  try {
    const validatedInput = contactFormSchema.safeParse(rawInput)
    if (!validatedInput.success) return "invalid-input"

    const emailSent = await resend.emails.send({
      from: env.RESEND_EMAIL_FROM,
      to: env.RESEND_EMAIL_TO,
      subject: "Exciting news! New enquiry awaits",
      react: NewEnquiryEmail({
        name: validatedInput.data.name,
        email: validatedInput.data.email,
        message: validatedInput.data.message,
      }),
    })

    return emailSent ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error submitting contact form")
  }
}
