"use server"

import { env } from "@/env.mjs"
import type { z } from "zod"

import { resend } from "@/config/resend"
import type { contactFormSchema } from "@/lib/validations/contact-form"
import { NewEnquiryEmail } from "@/components/emails/new-enquiry-email"

export async function submitContactFormAction(
  input: z.infer<typeof contactFormSchema>
) {
  await resend.emails.send({
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
}

export async function sendConfirmationEmailAction() {}
