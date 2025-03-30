"use client"

import { useState, useEffect } from "react"
import { useInView, useScroll } from "framer-motion"

export const useAnimationOnScroll = (ref: React.RefObject<HTMLElement>) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [shouldReset, setShouldReset] = useState(false)

  useEffect(() => {
    const currentScrollY = scrollY.get()
    
    // Detecta se está no topo da página
    if (currentScrollY < 10) {
      setIsAtTop(true)
      setHasAnimated(false)
      setShouldReset(true)
    } else {
      setIsAtTop(false)
    }
    
    // Detecta se está rolando para cima
    const scrollingUp = currentScrollY < lastScrollY
    
    // Se estiver rolando para cima e estiver próximo ao topo
    if (scrollingUp && currentScrollY < 100) {
      setHasAnimated(false)
      setIsScrollingUp(true)
      setShouldReset(true)
    }
    
    // Se estiver rolando para baixo e a seção estiver visível
    if (!scrollingUp && isInView && !hasAnimated) {
      setHasAnimated(true)
      setIsScrollingUp(false)
      setShouldReset(false)
    }
    
    setLastScrollY(currentScrollY)
  }, [scrollY, isInView, hasAnimated, lastScrollY])

  // Se estiver no topo ou rolando para cima, retorna false para resetar a animação
  if (isAtTop || isScrollingUp || shouldReset) {
    return false
  }

  // Se a seção já foi animada, retorna true para manter o conteúdo visível
  if (hasAnimated) {
    return true
  }

  // Se a seção está visível e ainda não foi animada, retorna false para iniciar a animação
  return isInView
} 