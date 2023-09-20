"use client"

import * as React from "react"
import { GsapProvider } from "@/providers/gsap-provider"
import { LocomotiveScrollProvider } from "@/providers/locomotive-scroll-provider"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <LocomotiveScrollProvider>
        <GsapProvider>{children}</GsapProvider>
      </LocomotiveScrollProvider>
    </NextThemesProvider>
  )
}
