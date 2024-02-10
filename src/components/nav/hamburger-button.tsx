"use client"

import { useMenuStore } from "@/hooks/use-menu-store"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function HamburgerButton(): JSX.Element {
  const { isOpen, toggleMenu } = useMenuStore((state) => ({
    isOpen: state.isOpen,
    toggleMenu: state.toggleMenu,
  }))

  return (
    <div
      id="menu-button-wrapper"
      className={cn("menu-button-wrapper", isOpen && "open")}
    >
      <Button
        variant="ghost"
        className="menu-button hover:bg-transparent"
        onClick={toggleMenu}
      >
        <span className="" />
      </Button>
    </div>
  )
}
