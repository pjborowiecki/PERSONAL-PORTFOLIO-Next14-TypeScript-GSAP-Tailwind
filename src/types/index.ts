export interface Project {
  _id: string
  title: string
  slug: {
    current: string
    _type: string
  }
  category: string
  tech: string[]
  shortDescription: string
  description: string
  repoLink: string
  liveDemoLink: string
  mainImage: string
  images: string[]
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
