"use client"

import * as React from "react"
import LocomotiveScroll from "locomotive-scroll"

export const LocomotiveScrollContext = React.createContext(null)

interface LocomotiveScrollProviderPops {
  children: React.ReactNode
}

export const LocomotiveScrollProvider: React.FC<
  LocomotiveScrollProviderPops
> = ({ children }: LocomotiveScrollProviderPops) => {
  const [isReady, setIsReady] = React.useState(false)
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

  useIsomorphicLayoutEffect(() => {
    try {
      const locomotiveScroll = new LocomotiveScroll()
      if (locomotiveScroll) setIsReady(true)
    } catch (error) {
      console.error(
        "An error occurred while initializing LocomotiveScroll: ",
        error
      )
    }
  }, [])
  return (
    <LocomotiveScrollContext.Provider value={null}>
      {isReady ? children : null}
    </LocomotiveScrollContext.Provider>
  )
}
