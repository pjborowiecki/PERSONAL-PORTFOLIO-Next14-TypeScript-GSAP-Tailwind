"use client"

import * as React from "react"
import { notFound } from "next/navigation"

import { GsapContext } from "@/providers/gsap-provider"

interface MagnetProps {
  children: React.ReactElement
}

export function Magnet({ children }: MagnetProps) {
  const { gsap } = React.useContext(GsapContext)
  if (!gsap) notFound()

  const magnetic = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (magnetic.current) {
      const magneticElement = magnetic.current
      const xTo = gsap.quickTo(magneticElement, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      })
      const yTo = gsap.quickTo(magneticElement, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      })

      magneticElement.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e
        const { height, width, left, top } =
          magneticElement.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        xTo(x * 0.35)
        yTo(y * 0.35)
      })

      magneticElement.addEventListener("mouseleave", () => {
        xTo(0)
        yTo(0)
      })
    }
  }, [gsap])

  return React.cloneElement(children, { ref: magnetic })
}
