"use client"

import * as React from "react"
import Balancer from "react-wrap-balancer"

import { categories } from "@/data/categories"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/sections/projects/project-card"

export function ProjectsSection(): JSX.Element {
  const [activeCategory, setActiveCategory] = React.useState<string>("web dev")

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory)
  )

  return (
    <section className="w-full pb-64 pt-16 md:pt-24 lg:pt-32">
      <div className="container">
        <div className="flex flex-col space-y-6">
          <h2 className="ml-[-4px] text-4xl font-black leading-none tracking-tighter sm:text-5xl xl:text-6xl 2xl:text-7xl">
            Recent Projects
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

            <div className="flex h-fit max-w-sm flex-wrap gap-2 lg:justify-end">
              {categories.map((category) => (
                <Badge
                  key={category.title}
                  variant="outline"
                  className={cn(
                    "h-fit w-fit cursor-pointer rounded-full border-foreground px-6 py-2 text-sm font-medium tracking-wide hover:border-border hover:bg-foreground hover:text-background xl:text-base",
                    category.title === activeCategory &&
                      "cursor-default bg-foreground text-background",
                    category.title === "all" && "hidden xl:inline-flex"
                  )}
                  onClick={() => setActiveCategory(category.title)}
                >
                  {category.title}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 w-full lg:mt-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
