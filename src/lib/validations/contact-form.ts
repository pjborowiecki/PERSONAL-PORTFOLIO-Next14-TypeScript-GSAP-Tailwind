import * as z from "zod"

export const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
      invalid_type_error: "Incorrect data type",
    })
    .max(64, "Name must be less than 64 characters"),
  email: z
    .string({
      required_error: "Please enter your email address",
      invalid_type_error: "Incorrect data type",
    })
    .email()
    .max(64, "Email address must be less than 255 characters"),
  message: z
    .string({
      required_error: "Please enter a message",
      invalid_type_error: "Incorrect data type",
    })
    .max(10000, "Message must be less than 10000 characters"),
})
