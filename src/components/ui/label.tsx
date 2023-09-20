"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "px-2 peer-placeholder-show:cursor-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 absolute leading-none font-light tracking-wide left-0 -top-8 text-turquoise-base/70 text-base transition-all peer-placeholder-shown:text-[1.5rem] peer-placeholder-shown:text-primary/90 peer-placeholder-shown:-top-2 peer-focus:-top-8 peer-focus:text-gray-600 peer-focus:text-base transition-all duration-150 ease-in-out peer-focus:text-turquoise-base peer-focus:tracking-wide"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
