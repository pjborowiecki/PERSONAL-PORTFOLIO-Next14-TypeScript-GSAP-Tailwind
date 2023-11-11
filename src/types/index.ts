export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface NavItemFooter {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}
