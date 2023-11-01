"use server"

import { revalidatePath } from "next/cache"
import { readClient } from "@/sanity/lib/client"
import type { Project } from "@/types"
import { groq } from "next-sanity"

import { buildQuery } from "@/lib/utils"

interface GetProjectsActionParams {
  query: string
  category: string
  page: string
}

export const getProjectsAction = async (params: GetProjectsActionParams) => {
  const { query, category, page } = params

  try {
    const projects = await readClient.fetch<Project[]>(
      groq`${buildQuery({
        type: "project",
        query,
        category,
        page: parseInt(page),
      })}{
        _id,
        title,
        slug,
        shortDescription,
        description,
        category,
        tech,
        links,
        "mainImage": mainImage.asset->url,
        "images": images[].asset->url,
        }`
    )

    return projects
    revalidatePath("/")
  } catch (error) {
    console.log(error)
  }
}
