"use client"

import * as React from "react"
import type { Project } from "@/types"

import { ProjectCard } from "@/components/project-card"
import { ProjectPreviewModal } from "@/components/project-preview-modal"

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  const [previewModal, setPreviewModal] = React.useState({
    modalVisible: false,
    index: 0,
  })

  return (
    <div className="flex w-full flex-col">
      {projects?.length > 0 ? (
        projects.map((project, index) => (
          <div key={project._id} className="">
            <ProjectCard
              index={index}
              setPreviewModal={setPreviewModal}
              project={project}
            />
            <ProjectPreviewModal
              projects={projects}
              previewModal={previewModal}
            />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center px-8 py-16">
          <p className="text-center text-[24px] text-newText-base/60">
            Nothing here yet. Please check back soon
          </p>
        </div>
      )}
    </div>
  )
}
