"use client"

import * as React from "react"
import Image from "next/image"
import { scalePreviewImageAnimation } from "@/animations/projects-section"
import type { Project } from "@/types"
import { motion } from "framer-motion"

import { gsap, ScrollTrigger } from "@/config/gsap"
import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect"

interface ProjectPreviewProps {
  projects: Project[]
  previewModal: {
    modalVisible: boolean
    index: number
  }
}

export function ProjectPreview({
  previewModal,
  projects,
}: ProjectPreviewProps): JSX.Element {
  const { modalVisible, index } = previewModal
  const modalContainer = React.useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (!gsap || !ScrollTrigger || !modalContainer.current) return

    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      })

      const yTo = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      })

      window.addEventListener("mousemove", (e) => {
        const { pageX, pageY } = e
        xTo(pageX)
        yTo(pageY - 200)
      })
    }, [modalContainer.current])

    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      ref={modalContainer}
      variants={scalePreviewImageAnimation}
      initial="initial"
      animate={modalVisible ? "enter" : "leave"}
      className="pointer-events-none absolute z-[99] flex h-[300px] w-[400px] items-center justify-center overflow-hidden bg-transparent"
    >
      <div style={{ top: index * -100 + "%" }} className="absolute size-full">
        {projects.map((project, index) => (
          <div
            className="flex size-full items-center justify-center"
            key={`modal_${index}`}
          >
            <Image src={project.image} width={400} height={300} alt="image" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
