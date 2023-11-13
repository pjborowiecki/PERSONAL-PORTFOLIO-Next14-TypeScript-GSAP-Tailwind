"use client"

import * as React from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { scalePreviewImageAnimation } from "@/animations/projects-section"
import type { Project } from "@/types"
import { motion } from "framer-motion"

import { GsapContext } from "@/providers/gsap-provider"

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
}: ProjectPreviewProps) {
  const { gsap } = React.useContext(GsapContext)
  if (!gsap) {
    console.error("GSAP not initialized")
    notFound()
  }

  const { modalVisible, index } = previewModal
  const modalContainer = React.useRef(null)

  React.useLayoutEffect(() => {
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
  }, [gsap])

  return (
    <motion.div
      ref={modalContainer}
      variants={scalePreviewImageAnimation}
      initial="initial"
      animate={modalVisible ? "enter" : "leave"}
      className="pointer-events-none absolute z-[99] flex h-[300px] w-[400px] items-center justify-center overflow-hidden bg-transparent"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="absolute h-full w-full"
      >
        {projects.map((project, index) => (
          <div
            className="flex h-full w-full items-center justify-center"
            key={`modal_${index}`}
          >
            <Image
              src={project.image}
              width={400}
              height={300}
              alt="image"
              cn
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
