"use client"

import * as React from "react"
import Link from "next/link"
import type { Project } from "@/types"

import { Icons } from "@/components/icons"

interface ProjectCardProps {
  index: number
  project: Project
  setPreviewModal: React.Dispatch<
    React.SetStateAction<{
      modalVisible: boolean
      index: number
    }>
  >
}

export function ProjectCard({
  project,
  index,
  setPreviewModal,
}: ProjectCardProps): JSX.Element {
  return (
    <div
      onMouseEnter={() => {
        setPreviewModal({ modalVisible: true, index })
      }}
      onMouseLeave={() => {
        setPreviewModal({ modalVisible: false, index })
      }}
      className="group relative flex w-full items-center justify-between gap-[190px] border-b border-newText-alt/40 bg-transparent py-12 pl-[60px] pr-[30px] text-newText-alt transition-all duration-300 ease-in-out after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:scale-y-0 after:bg-newDark-alt after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-y-100"
    >
      <div className="w-full">
        <h3 className="text-[62px] font-medium tracking-wide text-white transition-all duration-200 ease-in-out group-hover:text-white">
          {project.title}
        </h3>
      </div>

      <div className="flex items-center gap-10 whitespace-nowrap transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-center gap-4 text-[22px] font-light">
          {project.links
            ? Object.entries(project.links).map(([key, value], index) =>
                value !== null ? (
                  <Link
                    key={index}
                    href={value}
                    className="flex items-center gap-4 capitalize underline-offset-8 after:inline-flex after:h-2 after:w-2 after:rounded-full after:bg-turquoise-base after:text-turquoise-base after:content-[''] last-of-type:after:hidden hover:underline group-hover:text-turquoise-base group-hover:after:bg-newText-base"
                  >
                    {key.replace(/_/g, " ")}
                  </Link>
                ) : null
              )
            : null}
        </div>
        <div className="text-turquoise-base transition-all duration-300 ease-in-out group-hover:text-white">
          <Icons.arrowDownRight className="z-[1] h-24 w-24 transition-all duration-500 ease-in-out group-hover:rotate-[495deg]" />
        </div>
      </div>
    </div>
  )
}
