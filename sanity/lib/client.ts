import { apiVersion, dataset, projectId, token, useCdn } from "@/sanity/env"
import { createClient } from "next-sanity"

export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
})

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})
