"use client"

import { useState, useEffect } from "react"
import { useInView } from "framer-motion"

export const useSequentialLoad = (ref: React.RefObject<HTMLElement>, delay: number = 0) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, delay])

  return isLoaded
} 