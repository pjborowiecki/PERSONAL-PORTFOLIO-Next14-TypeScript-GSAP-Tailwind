"use client"

import * as React from "react"
import Balancer from "react-wrap-balancer"

import { categories } from "@/data/categories"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"
import { ProjectPreview } from "@/components/project-preview"

export function ProjectsSection(): JSX.Element {
  const [activeCategory, setActiveCategory] = React.useState<string>("web dev")
  const [previewModal, setPreviewModal] = React.useState({
    modalVisible: false,
    index: 0,
  })

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory)
  )

  return (
    <section
      id="projects-section"
      aria-label="Projects section"
      className="w-full pb-64 pt-16 md:pt-24 lg:pt-32"
    >
      <div className="container overflow-visible">
        <div className="flex flex-col space-y-6">
          <h2 className="ml-[-4px] text-4xl font-black leading-none tracking-tighter sm:text-5xl xl:text-6xl 2xl:text-7xl">
            Selected Projects
          </h2>
          <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-0">
            <h3 className="text-lg font-medium leading-8 text-muted-foreground md:max-w-3xl md:text-xl lg:max-w-2xl lg:text-2xl">
              <Balancer>
                Explore my portfolio to see what I have been working on lately.{" "}
                <br className="hidden lg:inline-flex" />
                From web and mobile development to the intricacies of deep
                learning and beyond, each project represents a unique chapter in
                my journey.
              </Balancer>
            </h3>

            <div className="flex h-fit max-w-sm flex-wrap gap-x-2 gap-y-4 lg:justify-end">
              {categories.map((category) => {
                const Icon = Icons[category.icon as keyof typeof Icons]

                return (
                  <Badge
                    key={category.title}
                    variant="outline"
                    className={cn(
                      "flex size-fit cursor-pointer items-center justify-center gap-1.5 rounded-full border-foreground px-5 py-2 text-sm font-medium tracking-wide md:hover:border-border md:hover:bg-foreground md:hover:text-background xl:text-base",
                      category.title === activeCategory &&
                        "cursor-default bg-foreground text-background",
                      category.title === "all" && "hidden xl:flex"
                    )}
                    onClick={() => setActiveCategory(category.title)}
                  >
                    <Icon className="size-4 md:size-5" aria-hidden="true" />

                    {category.title}
                  </Badge>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col lg:mt-12">
          {filteredProjects?.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                setPreviewModal={setPreviewModal}
              />
            ))
          ) : (
            <div className="flex items-center justify-center px-8 py-6">
              <p className="text-xl font-medium">
                Nothing here yet. Please check back soon
              </p>
            </div>
          )}
          <ProjectPreview
            projects={filteredProjects}
            previewModal={previewModal}
          />
        </div>
      </div>
    </section>
  )
}
