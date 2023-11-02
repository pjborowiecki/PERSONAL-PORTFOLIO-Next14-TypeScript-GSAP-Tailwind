"use client"

import * as React from "react"
import type { Project } from "@/types"

import { ProjectCard } from "@/components/sections/projects/project-card"
import { ProjectPreviewModal } from "@/components/sections/projects/project-preview-modal"

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  const [previewModal, setPreviewModal] = React.useState({
    modalVisible: false,
    index: 0,
  })

  return (
    <div className="w-full">
      {projects?.length > 0 ? (
        projects.map((project, index) => (
          <div key={project._id} className="">
            <ProjectCard
              index={index}
              setPreviewModal={setPreviewModal}
              project={project}
            />
          </div>
        ))
      ) : (
        <div className="w-full px-[2rem] py-[8.53vw]">
          <p className="text-[5.2vw] leading-[150%] text-muted-foreground/50 md:text-[24px]">
            Nothing here at the moment. <br /> Please check back soon.
          </p>
        </div>
      )}
      <ProjectPreviewModal projects={projects} previewModal={previewModal} />
    </div>
  )
}
