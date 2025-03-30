"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { useSequentialLoad } from "@/app/hooks/useSequentialLoad"

const listItems = [
  "Reconhecimento Imediato da Marca",
  "Formação e Desenvolvimento Profissional",
  "Força em Marketing",
  "Ferramentas Tecnológicas",
  "Comunidade de Apoio"
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export function AnimatedSection() {
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const isContentLoaded = useSequentialLoad(contentRef, 0)
  const isImageLoaded = useSequentialLoad(imageRef, 400)

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" aria-label="menu">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isContentLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 100
          }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Destaque-se no Mercado Imobiliário</h2>
          <p className="text-gray-700 mb-6">
            A marca CENTURY 21<sup>®</sup> foi criada com um propósito em mente: desenvolver melhores formas para
            que empreendedores como você possam prosperar. O poder incomparável da marca e os recursos abrangentes
            podem ajudar os agentes afiliados a lançar um negócio próspero.
          </p>
          <motion.ul 
            className="space-y-2"
            variants={container}
            initial="hidden"
            animate={isContentLoaded ? "show" : "hidden"}
          >
            {listItems.map((text, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                variants={item}
              >
                <span className="text-gray-800 mr-2">•</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div 
          ref={imageRef}
          className="relative h-[400px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isImageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            damping: 15
          }}
        >
          <Image
            src="/c21pagina/images/careers-stand-out.jpg"
            alt="Profissionais imobiliários a trabalhar"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
} 
