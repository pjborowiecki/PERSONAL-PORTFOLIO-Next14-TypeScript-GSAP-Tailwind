import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "peer h-[4.4rem] w-full resize-none rounded-none border-b-2 border-b-turquoise-base/70 bg-transparent px-2 pt-6 text-[1.4rem] transition-colors duration-150 ease-in-out placeholder:text-[1.4rem] placeholder:text-primary/90 focus:border-b-4 focus:border-turquoise-base focus:outline-none focus:placeholder:opacity-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
