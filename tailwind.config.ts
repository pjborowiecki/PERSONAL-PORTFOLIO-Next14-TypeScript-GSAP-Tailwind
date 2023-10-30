/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        fontGeistSans: ["var(--font-geist-sans)"],
        hankenGrotesk: ["var(--font-hanken-grotesk)"],
        foundersGroteskCondensed: ["var(--font-founders-grotesk-condensed)"],
      },
      fontSize: {
        clampParagraph: "clamp(1rem, 4vw, 2.25rem)",
      },
      screens: {
        "w-1560": "1560px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        violet: {
          base: "hsl(var(--violet-base))",
          alt: "hsl(var(--violet-alt))",
        },
        yellow: {
          base: "hsl(var(--yellow-base))",
          alt: "hsl(var(--yellow-alt))",
        },
        blue: {
          base: "hsl(var(--blue-base))",
          alt: "hsl(var(--blue-alt))",
        },
        cyan: {
          base: "hsl(var(--cyan-base))",
          alt: "hsl(var(--cyan-alt))",
        },
        green: {
          base: "hsl(var(--green-base))",
          alt: "hsl(var(--green-alt))",
        },
        turquoise: {
          base: "hsl(var(--turquoise-base))",
          alt: "hsl(var(--turquoise-alt))",
        },
        pink: {
          base: "hsl(var(--pink-base))",
          alt: "hsl(var(--pink-alt))",
        },
        dark: {
          base: "hsl(var(--dark-base))",
          alt: "hsl(var(--dark-alt))",
        },
        newDark: {
          base: "hsl(var(--new-dark-base))",
          alt: "hsl(var(--new-dark-alt))",
        },
        newText: {
          base: "hsl(var(--new-text-base))",
          alt: "hsl(var(--new-text-alt))",
        },
        newAccent: {
          base: "hsl(var(--new-accent-base))",
          alt: "hsl(var(--new-accent-alt))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      rotate: {
        135: "135deg",
      },
      transitionDuration: {
        "1000": "1000ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
