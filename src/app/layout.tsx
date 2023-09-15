import "@/styles/globals.css"

import type { Metadata } from "next"

import { fontSans } from "@/config/fonts"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/layouts/navbar"
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
