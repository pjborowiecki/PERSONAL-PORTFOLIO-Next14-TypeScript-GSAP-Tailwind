"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { projectCategories } from "@/data/constants"
import { cn, formUrlQuery } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ProjectCategoryFilters() {
  const [active, setActive] = React.useState("web dev")
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilter = (link: string) => {
    let newUrl = ""

    if (active === link) {
      setActive("web dev")

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      })
    } else {
      setActive(link)

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      })
    }

    router.push(newUrl, { scroll: false })
  }

  return (
    <ul className="flex flex-wrap items-center gap-x-2 gap-y-3 md:justify-end md:gap-4">
      {projectCategories.map((category) => {
        const Icon = Icons[category.icon as keyof typeof Icons]

        return (
          <li
            key={category.title}
            className="flex h-full items-center justify-center"
          >
            <Button
              onClick={() => handleFilter(category.title)}
              variant="categoryTab"
              size="tab"
              className={cn(
                active === category.title && "border-white text-white",
                category.title === "all" && "hidden sm:flex"
              )}
            >
              <Icon className="h-[6.1vw] w-[6.1vw]" aria-hidden="true" />
              <span>{category.title}</span>
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
