"use client"

import * as React from "react"
import Link from "next/link"
import { submitContactForm } from "@/actions/email"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { contactFormSchema, type ContactFormInput } from "@/validations/email"

import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

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

export function ContactForm(): JSX.Element {
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit(formData: ContactFormInput) {
    startTransition(async () => {
      try {
        const message = await submitContactForm({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })

        switch (message) {
          case "success":
            toast({
              title: "Thank you!",
              description: "We'll be in touch as soon as possible",
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
      } catch (error) {
        console.error(error)
        toast({
          title: "Something went wrong",
          description: "Please try again",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-8"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-4">
              <FormLabel className="whitespace-nowrap text-3xl">
                Hi, I&apos;m
              </FormLabel>

              <FormControl className="h-12">
                <Input
                  type="text"
                  placeholder="What's your name?"
                  className=""
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-4">
              <FormLabel className="whitespace-nowrap text-3xl">
                You can reach me at:
              </FormLabel>
              <FormControl className="h-12">
                <Input
                  type="email"
                  placeholder="What is your email address?"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="whitespace-nowrap text-3xl">
                I&apos;d like to share more about my project:
              </FormLabel>
              <FormControl className="min-h-[180px] md:min-h-[240px]">
                <Textarea
                  {...field}
                  placeholder="Tell me about your project (optional)"
                  className="text-base"
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <p>
            By submitting this form, you agree to my{" "}
            <Link
              data-replace="privacy policy"
              href="/privacy"
              className={cn("nav-link", "text-red-300")}
            >
              <span>privacy policy</span>
            </Link>
            .
          </p>
          <Button
            variant="outline"
            className="h-14 w-fit rounded-full border px-8 hover:opacity-70"
          >
            {isPending && (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            {isPending ? "Sending..." : "Make it happen"}
            <span className="sr-only">Submit contact form</span>
          </Button>
        </div>
      </form>
    </Form>
  )
}
