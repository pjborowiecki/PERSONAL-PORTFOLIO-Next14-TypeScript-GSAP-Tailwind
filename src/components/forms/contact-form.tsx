"use client"

import * as React from "react"
import { submitContactForm } from "@/actions/contact-form"
import { contactFormSchema } from "@/validations/contact-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { useToast } from "@/hooks/use-toast"
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
import { Icons } from "@/components/icons"

type ContactFormInputs = z.infer<typeof contactFormSchema>

export function ContactForm(): JSX.Element {
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(formData: ContactFormInputs) {
    startTransition(async () => {
      try {
        const message = await submitContactForm(formData)

        switch (message) {
          case "success":
            toast({
              title: "Thank you!",
              description: "Your message has been sent",
            })
            form.reset()
            break
          default:
            toast({
              title: "Something went wrong",
              description: "Please try again",
              variant: "destructive",
            })
        }
        form.reset()
      } catch (error) {
        toast({
          description: "Something went wrong. Please try again",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid h-full w-full grid-cols-1 gap-[2rem]"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="grid w-full grid-cols-1 gap-[12.8vw] md:grid-cols-2 md:gap-[3rem]">
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

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative 2xl:mt-[28px]">
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
          {isPending ? "Sending..." : "Send"}
          <span className="sr-only">Submit contact form</span>
        </Button>
      </form>
    </Form>
  )
}
