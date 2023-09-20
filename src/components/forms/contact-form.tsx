"use client"

import * as React from "react"
import { submitContactFormAction } from "@/actions/contact-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { catchError } from "@/lib/utils"
import { contactFormSchema } from "@/lib/validations/contact-form"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type FormInputs = z.infer<typeof contactFormSchema>

export function ContactForm(): JSX.Element {
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<FormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(data: FormInputs) {
    startTransition(async () => {
      try {
        await submitContactFormAction(data)
        toast.success("Thank you! Your message has been sent")
        form.reset()
      } catch (error) {
        catchError(error)
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-[2rem]"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="grid w-full grid-cols-2 gap-[3rem]">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="off"
                    placeholder="John"
                    {...field}
                  />
                </FormControl>
                <FormLabel>name</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="off"
                    placeholder="john@smith.com"
                    {...field}
                  />
                </FormControl>
                <FormLabel>email</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Textarea {...field} placeholder="Hi, I am looking to..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="h-14 rounded-lg bg-gradient-to-br from-turquoise-base to-turquoise-alt text-[1.3rem] font-semibold leading-none ">
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {isPending ? "submitting" : "submit"}
          <span className="sr-only">Submit contact form</span>
        </Button>
      </form>
    </Form>
  )
}
