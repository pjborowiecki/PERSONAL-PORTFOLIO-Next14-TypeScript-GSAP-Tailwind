"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "peer-placeholder-show:cursor-text absolute -top-8 left-0 px-2 text-base font-light leading-none tracking-wide text-turquoise-base/70 transition-all transition-all duration-150 ease-in-out peer-placeholder-shown:-top-2 peer-placeholder-shown:text-[1.5rem] peer-placeholder-shown:text-primary/90 peer-focus:-top-8 peer-focus:text-base peer-focus:tracking-wide peer-focus:text-gray-600 peer-focus:text-turquoise-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
