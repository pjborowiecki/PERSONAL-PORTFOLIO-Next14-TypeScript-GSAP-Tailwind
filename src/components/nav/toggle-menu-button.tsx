"use client"

import { useMenuStore } from "@/hooks/use-menu-store"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ToggleMenuButton(): JSX.Element {
  const { isOpen, toggleMenu } = useMenuStore((state) => ({
    isOpen: state.isOpen,
    toggleMenu: state.toggleMenu,
  }))

  return (
    <Button
      variant="outline"
      className={cn(
        "z-[99] w-fit",
        isOpen
          ? "bg-background text-foreground"
          : "bg-foreground text-background"
      )}
      onClick={toggleMenu}
    >
      toggle menu
    </Button>
  )
}
