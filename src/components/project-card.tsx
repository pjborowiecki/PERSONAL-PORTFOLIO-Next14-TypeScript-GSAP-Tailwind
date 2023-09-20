import Link from "next/link"
import type { Project } from "@/types"

import { Icons } from "@/components/icons"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <Card className="after:ease-[cubic-bezier(0.99,0.01,0.1,0.39)] group relative flex w-full items-center justify-between gap-[190px] border-t border-newText-alt/40 bg-transparent py-12 pl-[60px] pr-[30px] text-newText-alt transition-all duration-300 ease-in-out after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:scale-y-0 after:bg-newDark-alt after:transition-all after:duration-300 after:content-[''] last-of-type:border-b hover:after:scale-y-100">
      <CardHeader className="w-full">
        <CardTitle className="text-[62px] font-medium tracking-wide transition-all duration-200 ease-in-out group-hover:text-white">
          {project.title}
        </CardTitle>
      </CardHeader>
      {/* <CardHeader className="group relative flex w-full justify-center">

        <div className="absolute flex flex-col justify-center gap-4 text-[24px] font-light text-newText-base opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100">
          <p>{project.shortDescription}</p>
          <div className="flex w-full flex-wrap gap-2 whitespace-nowrap text-[14px]">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-newText-alt px-4 py-1 text-newText-alt"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </CardHeader> */}

      <CardDescription className="flex items-center gap-10 whitespace-nowrap transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-center gap-6 text-[22px] font-light">
          <Link
            href={project.repoLink}
            className="underline-offset-8 hover:underline group-hover:text-turquoise-base"
          >
            source code
          </Link>
          <div className="h-2 w-2 rounded-full bg-turquoise-base group-hover:bg-newText-base" />

          {project?.liveDemoLink && (
            <>
              <Link
                href={project.liveDemoLink}
                className="underline-offset-8 hover:underline group-hover:text-turquoise-base"
              >
                live demo
              </Link>
              <div className="h-2 w-2 rounded-full bg-turquoise-base group-hover:bg-newText-base" />
            </>
          )}

          <Link
            href={`/projects/${project.slug.current}`}
            className="underline-offset-8 hover:underline group-hover:text-turquoise-base"
          >
            details
          </Link>
        </div>
        <div className="text-turquoise-base transition-all duration-300 ease-in-out group-hover:text-white">
          <Icons.arrowDownRight className="z-[1] h-24 w-24 transition-all duration-500 ease-in-out group-hover:rotate-[495deg]" />
        </div>
      </CardDescription>
    </Card>
  )
}
