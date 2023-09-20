import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "peer h-10 w-full rounded-none border-b-2 border-b-turquoise-base/60 bg-transparent px-3 py-1 text-[1.6rem] transition-colors duration-150 ease-in-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus:border-b-4 focus:border-turquoise-base focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
