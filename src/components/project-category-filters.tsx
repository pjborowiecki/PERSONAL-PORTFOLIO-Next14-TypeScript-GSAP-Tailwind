"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { projectCategories } from "@/data/constants"

import { cn, formUrlQuery } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

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
    <ul className="flex max-w-[700px] flex-wrap items-center justify-end gap-4">
      {projectCategories.map((category) => {
        const Icon = Icons[(category.icon as keyof typeof Icons) || "code"]

        return (
          <li key={category.title}>
            <Button
              onClick={() => handleFilter(category.title)}
              className={cn(
                "flex items-center justify-center gap-4 whitespace-nowrap rounded-full border-2 border-newText-alt bg-transparent p-8 text-[26px] font-light capitalize text-newText-alt hover:border-newText-base hover:bg-newDark-alt hover:text-newText-base",
                active === category.title && "border-white text-white"
              )}
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
              {category.title}
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
