export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  icon?: string
}

export interface NavItemFooter {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export interface BlogPostParamsProps {
  params: {
    slug: string[]
  }
}

export interface Category {
  title: string
  icon: string
}

export interface ProjectLinks {
  source_code?: string
  live_demo?: string
  details?: string
}

export interface Project {
  title: string
  description: string
  categories: string[]
  image: string
  stack: string[]
  links: ProjectLinks
  priority: number
}
