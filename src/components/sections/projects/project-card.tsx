import Link from "next/link"
import { type Project } from "@/types"
import Balancer from "react-wrap-balancer"

import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <div className="group relative flex w-full flex-col justify-between gap-4 border-b border-muted-foreground bg-transparent py-6 align-baseline duration-300 ease-out after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:scale-y-0 after:bg-foreground after:transition-all after:duration-300 after:ease-out after:content-[''] hover:text-background hover:after:scale-y-100 lg:flex-row lg:gap-0">
      <div className="space-y-2 pl-4">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold uppercase leading-6 tracking-tight sm:text-3xl md:text-4xl">
            <Balancer>{project.title}</Balancer>
          </h3>
          <h4 className="text-lg font-medium tracking-wide text-muted-foreground md:max-w-xl md:text-xl">
            <Balancer>{project.description}</Balancer>
          </h4>
        </div>

        <div className="flex max-w-[240px] flex-wrap gap-x-1 gap-y-1.5 whitespace-nowrap sm:max-w-full">
          {project.stack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-2 py-1 text-xs leading-none tracking-wide group-hover:border-muted-foreground group-hover:text-muted-foreground md:px-3 xl:text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8 pr-6">
        <div className="flex h-full items-end gap-6">
          {project.links
            ? Object.entries(project.links).map(([key, value], index) =>
                value !== null ? (
                  <Link
                    key={index}
                    href={value as string}
                    className="text-sm underline underline-offset-8 md:text-lg"
                  >
                    {key.replace(/_/g, " ")}
                  </Link>
                ) : null
              )
            : null}
        </div>
        <div className="flex h-full items-end">
          <Icons.arrowUpRight className="z-[1] hidden h-16 w-16 transition-all duration-500 ease-in-out group-hover:rotate-[585deg] lg:block" />
        </div>
      </div>
    </div>
  )
}
