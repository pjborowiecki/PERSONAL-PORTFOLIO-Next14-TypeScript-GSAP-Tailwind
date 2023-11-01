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
      className="group relative flex w-full flex-col gap-2 border-b border-newText-alt/40 bg-transparent px-[2rem] py-[8.53vw] text-newText-alt transition-all duration-300 ease-in-out after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:scale-y-0 after:bg-newDark-alt after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-y-100"
    >
      <div className="grid w-full grid-cols-1 gap-1.5">
        <h3 className="text-[7.9vw] font-bold uppercase leading-none tracking-normal text-white transition-all duration-200 ease-in-out">
          {project.title}
        </h3>

        <h4 className="text-[4.45vw] capitalize tracking-wide text-muted-foreground">
          {project.shortDescription}
        </h4>
      </div>

      <div className="mb-2 mt-1 flex flex-wrap items-center gap-[5px]">
        {project.tech.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center border border-newText-alt px-3 py-[5px] text-[3vw] capitalize"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="">
        <div className="flex items-center gap-4">
          {project.links
            ? Object.entries(project.links).map(([key, value], index) =>
                value !== null ? (
                  <Link
                    key={index}
                    href={value}
                    className=" text-[4vw] text-turquoise-base underline-offset-[6px]"
                  >
                    {key.replace(/_/g, " ")}
                  </Link>
                ) : null
              )
            : null}
        </div>

        <div className="hidden md:visible">
          <Icons.arrowDownRight className="" />
        </div>
      </div>
    </div>
  )
}
