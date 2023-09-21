type ProjectLinks = {
  source_code?: string
  live_demo?: string
  details?: string
}

type Slug = {
  current: string
  _type: string
}

export interface Project {
  _id: string
  title: string
  slug: Slug
  links: ProjectLinks
  category: string
  tech: string[]
  shortDescription: string
  description: string
  mainImage: string
  images?: string[]
}

export interface UrlQueryParams {
  params: string
  key?: string
  value?: string | null
  keysToRemove?: string[]
}

export interface BuildQueryParams {
  type: string
  query: string
  category: string
  page: number
  perPage?: number
}
