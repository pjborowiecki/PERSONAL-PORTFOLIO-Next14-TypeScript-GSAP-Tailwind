import { tv } from "tailwind-variants"

export const gradient = tv({
  variants: {
    color: {
      violet: "from-violet-base to-violet-alt",
      yellow: "from-yallow-base to-yellow-alt",
      blue: "from-blue-base to-blue-alt",
      cyan: "from-cyan-base to-cyan-alt",
      green: "from-green-base to-green-alt",
      turquoise: "from-turquoise-base to-turquoise-alt",
      pink: "from-pink-base to-pink-alt",
      dark: "from-dark-base to-dark-alt",
    },
    direction: {
      toT: "bg-gradient-to-t",
      toB: "bg-gradient-to-b",
      toL: "bg-gradient-to-l",
      toR: "bg-gradient-to-r",
    },
  },
  defaultVariants: {
    color: "violet",
    direction: "toB",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "turquoise",
        "pink",
        "dark",
      ],
      direction: "toB",
      class: "bg-clip-text text-transparent",
    },
  ],
})

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.5rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
      xl: "text-[200px]",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
})
