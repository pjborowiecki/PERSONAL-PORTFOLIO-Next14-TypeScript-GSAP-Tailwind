import { tv } from "tailwind-variants"

export const gradient = tv({
  variants: {
    color: {
      violet: "from-violet-base to-violet-alt",
      yellow: "from-yellow-base to-yellow-alt",
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
      toBr: "bg-gradient-to-br",
      toBl: "bg-gradient-to-bl",
      toL: "bg-gradient-to-l",
      toR: "bg-gradient-to-r",
    },
  },
  defaultVariants: {
    color: "turquoise",
    direction: "toBr",
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
      direction: "toBr",
      class: "bg-clip-text text-transparent",
    },
  ],
})

export const title = tv({
  base: "tracking-tight inline font-semibold font-hankenGrotesk",
  variants: {
    size: {
      sm: "text-4xl lg:text-5xl",
      md: "text-[3rem] lg:text-6xl leading-9",
      lg: "text-5xl lg:text-7xl",
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
