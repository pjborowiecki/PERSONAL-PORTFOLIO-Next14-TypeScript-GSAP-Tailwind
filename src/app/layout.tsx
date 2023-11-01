import "@/styles/globals.css"

import { type Metadata, type Viewport } from "next"

import { fontGeistMono, fontGeistSans, fontHankenGrotesk } from "@/config/fonts"
import { siteConfig } from "@/config/site"
import { GsapProvider } from "@/providers/gsap-provider"
import { LocomotiveProvider } from "@/providers/locomotive-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/lib/utils"
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
          fontHankenGrotesk.variable,
          fontGeistMono.variable,
          fontGeistSans.variable,
          "min-h-screen bg-background font-geistSans antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <GsapProvider>
            <LocomotiveProvider>
              {/* <Header /> */}
              {children}
              {/* <Footer /> */}
              <TailwindIndicator />
            </LocomotiveProvider>
          </GsapProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
