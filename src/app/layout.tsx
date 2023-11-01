import "@/styles/globals.css"

import { type Metadata, type Viewport } from "next"
import { GsapProvider } from "@/providers/gsap-provider"
import { ThemeProvider } from "@/providers/theme-provider"

import {
  fontFoundersGroteskCondensed,
  fontHankenGrotesk,
  fontInter,
} from "@/config/fonts"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/nav/footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.nameLong,
    template: `%s - ${siteConfig.nameLong}`,
  },
  description: siteConfig.description,
  creator: siteConfig.author,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.github,
    },
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
          "min-h-screen bg-gradient-to-br from-turquoise-base to-turquoise-alt font-hankenGrotesk antialiased",
          fontFoundersGroteskCondensed.variable,
          fontHankenGrotesk.variable,
          fontInter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <GsapProvider>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
            <TailwindIndicator />
          </GsapProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
