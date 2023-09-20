import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const GsapContext = React.createContext<{
  gsap: typeof gsap | null
  ScrollTrigger: typeof ScrollTrigger | null
}>({
  gsap: null,
  ScrollTrigger: null,
})

interface GsapProviderProps {
  children: React.ReactNode
}

export const GsapProvider: React.FC<GsapProviderProps> = ({
  children,
}: GsapProviderProps) => {
  const [isReady, setIsReady] = React.useState(false)

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

  useIsomorphicLayoutEffect(() => {
    try {
      gsap.registerPlugin(ScrollTrigger)
      if (gsap) setIsReady(true)
    } catch (error) {
      console.error("An error occurred while initializing gsap: ", error)
    }
  }, [])

  return (
    <GsapContext.Provider value={{ gsap, ScrollTrigger }}>
      {isReady ? children : null}
    </GsapContext.Provider>
  )
}
