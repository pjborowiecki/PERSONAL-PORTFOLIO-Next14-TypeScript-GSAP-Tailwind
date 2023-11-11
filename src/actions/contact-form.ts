"use server"

import { env } from "@/env.mjs"
import type { contactFormSchema } from "@/validations/contact-form"
import type { z } from "zod"

import { resend } from "@/config/resend"
import { NewEnquiryEmail } from "@/components/emails/new-enquiry-email"

export async function submitContactForm(
  input: z.infer<typeof contactFormSchema>
) {
  try {
    const emailSent = await resend.emails.send({
      from: env.RESEND_EMAIL_FROM_ADDRESS,
      to: env.RESEND_EMAIL_TO_ADDRESS,
      reply_to: input.email,
      subject: "Exciting news! New enquiry awaits",
      react: NewEnquiryEmail({
        name: input.name,
        email: input.email,
        message: input.message,
      }),
    })

    return emailSent ? "success" : null
  } catch (error) {
    console.error(error)
    throw new Error("Something went wrong. Please try again")
  }
}
