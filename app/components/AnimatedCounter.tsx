"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  suffix?: string
}

export default function AnimatedCounter({ end, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const timerRef = useRef<NodeJS.Timeout>()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    // Só inicia a animação quando o elemento estiver visível
    if (!isInView) {
      setCount(0)
      return
    }

    // Validação do valor final
    if (end <= 0) {
      setCount(end)
      return
    }

    const duration = 2000 // 2 segundos
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    timerRef.current = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment
        if (nextCount >= end) {
          if (timerRef.current) {
            clearInterval(timerRef.current)
          }
          return end
        }
        return nextCount
      })
    }, stepDuration)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [end, isInView])

  return (
    <span ref={ref}>
      {Math.round(count).toLocaleString()}
      {suffix}
    </span>
  )
} 