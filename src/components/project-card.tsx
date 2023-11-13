import Link from "next/link"
import { type Project } from "@/types"
import Balancer from "react-wrap-balancer"

import { Badge } from "@/components/ui/badge"
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
      className="group relative flex w-full flex-col justify-between gap-4 border-b border-muted-foreground bg-transparent py-6 align-baseline duration-300 ease-out after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:scale-y-0 after:bg-foreground after:transition-all after:duration-300 after:ease-out after:content-[''] md:hover:text-background md:hover:after:scale-y-100 lg:flex-row lg:gap-0"
    >
      <div className="space-y-2 md:pl-4">
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
              className="px-2 py-1 text-xs leading-none tracking-wide md:px-3 md:group-hover:border-muted-foreground md:group-hover:text-muted-foreground xl:text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8 md:pr-6">
        <div className="flex h-full items-end gap-3 md:gap-6 md:pl-4">
          {project.links
            ? Object.entries(project.links).map(([key, value], index) =>
                value !== null ? (
                  <Link
                    key={index}
                    href={value as string}
                    className="flex items-center gap-3 whitespace-nowrap text-sm font-medium underline-offset-8 after:inline-flex after:h-1 after:w-1 after:rounded-full after:bg-foreground after:content-[''] last-of-type:after:hidden sm:after:h-2 sm:after:w-2 md:gap-6 md:text-base md:hover:underline md:group-hover:text-background md:group-hover:after:bg-background"
                  >
                    {key.replace(/_/g, " ")}
                  </Link>
                ) : null
              )
            : null}
        </div>
        <div className="flex h-full items-end">
          <Icons.arrowUpRight className="z-[1] hidden h-16 w-16 transition-all duration-500 ease-out md:group-hover:rotate-[585deg] md:group-hover:text-background lg:block" />
        </div>
      </div>
    </div>
  )
}
