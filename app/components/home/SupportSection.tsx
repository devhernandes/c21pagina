"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { useAnimationOnScroll } from "@/app/hooks/useAnimationOnScroll"

export function SupportSection() {
  const ref = useRef(null)
  const shouldAnimate = useAnimationOnScroll(ref)

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" aria-label="Suporte e recursos para agentes Century 21">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="aspect-video w-full max-w-4xl mx-auto mb-16 bg-gray-200"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 1.2,
            delay: 0.3,
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 100
          }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tk5plw_gOko"
            title="Vídeo Century 21"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 1.2,
            delay: 0.5,
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 100
          }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            A Century 21<sup>®</sup> Proporciona o Apoio Que Merece
          </h2>
          <p className="text-gray-700 mb-8">
            As nossas ferramentas, formação e apoio comprovados ajudam os agentes a prosperar. Estamos comprometidos
            com o seu crescimento e sucesso em cada etapa do percurso.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button 
              className="border-2 border-gray-900 px-6 py-3 text-gray-900 font-medium flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Veja como o apoiamos
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button 
              className="bg-[#D8D0B7] text-gray-900 px-6 py-3 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comece agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 