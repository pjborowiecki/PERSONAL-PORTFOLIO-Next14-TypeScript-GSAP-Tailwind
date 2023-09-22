import "@/styles/globals.css"

import type { Metadata } from "next"
import { Providers } from "@/providers/providers"

import {
  fontFoundersGroteskCondensed,
  fontHankenGrotesk,
  fontInter,
} from "@/config/fonts"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/layouts/footer"
import { Header } from "@/components/layouts/header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  creator: "pjborowiecki",
  authors: [
    {
      name: "Piotr Borowiecki (@pjborowiecki)",
      url: "https://github.com/pjborowiecki",
    },
  ],
  keywords: [
    "Software developer",
    "Programmer",
    "Web developer",
    "Full stack developer",
    "Frontend developer",
    "Backend developer",
    "React developer",
    "AI engineer",
    "Machine learning engineer",
    "Data scientist",
    "Data engineer",
    "Python developer",
    "JavaScript developer",
    "TypeScript developer",
    "Node.js developer",
    "Blockchain developer",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-newDark-base font-hankenGrotesk antialiased",
          fontInter.variable,
          fontHankenGrotesk.variable,
          fontFoundersGroteskCondensed.variable
        )}
      >
        <Providers attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
