"use client"

import * as React from "react"
import { notFound } from "next/navigation"

import { GsapContext } from "@/providers/gsap-provider"
import { Magnet } from "@/components/magnet"

interface CircleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function CircleButton({ children, ...attributes }: CircleButtonProps) {
  const { gsap } = React.useContext(GsapContext)
  if (!gsap) notFound()

  const circle = React.useRef(null)
  const timeline = React.useRef<gsap.core.Timeline | null>(null)
  let timeoutId: NodeJS.Timeout | number | null = null

  React.useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      )
  }, [gsap])

  const manageMouseEnter = () => {
    if (timeoutId && timeline.current) {
      clearTimeout(timeoutId)
      timeline.current.tweenFromTo("enter", "exit")
    }
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play()
      }
    }, 300)
  }

  return (
    <Magnet>
      <div
        className="relative flex cursor-pointer items-center justify-center rounded-[3em] border-[1px] border-foreground px-[15px] py-[60px]"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter()
        }}
        onMouseLeave={() => {
          manageMouseLeave()
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          className="absolute top-[100%] h-[150%] w-full rounded-full bg-gradient-to-br from-turquoise-base to-turquoise-alt"
        />
      </div>
    </Magnet>
  )
}
