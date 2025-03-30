"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { useAnimationOnScroll } from "@/app/hooks/useAnimationOnScroll"
import { useSequentialLoad } from "@/app/hooks/useSequentialLoad"

export function AgentsSection() {
  const ref = useRef(null)
  const shouldAnimate = useAnimationOnScroll(ref)
  const imageRefs = [useRef(null), useRef(null), useRef(null)]
  const imageLoadStates = imageRefs.map((ref, index) => useSequentialLoad(ref, index * 200))

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-center" aria-label="Benefícios para agentes afiliados da Century 21">
      <div className="max-w-7xl mx-auto">
        <motion.div
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Agentes Afiliados CENTURY 21<sup>®</sup> Não Se Contentam com Menos
          </h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            A marca CENTURY 21 é movida pelo objetivo de melhorar o mercado imobiliário. Acreditamos que existe sempre
            uma forma mais inteligente e eficiente de fazer negócios. Este espírito de evolução constante capacita os
            agentes C21.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            ref={imageRefs[0]}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={imageLoadStates[0] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[250px] w-full mb-4">
              <Image
                src="/images/careers-leader.jpg"
                alt="Equipe de agentes imobiliários da Century 21 em frente a uma casa de luxo"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <span className="text-amber-700 font-semibold text-sm">21</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Nome Mais Reconhecido no Mercado Imobiliário<sup>*</sup>
            </h3>
          </motion.div>

          <motion.div 
            ref={imageRefs[1]}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={imageLoadStates[1] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[250px] w-full mb-4">
              <Image
                src="/images/careers-most-recog.jpg"
                alt="Agentes imobiliários apresentando uma cozinha moderna durante uma visita"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <span className="text-amber-700 font-semibold text-sm">21</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Líder em Reconhecimento de Marca desde 1999<sup>*</sup>
            </h3>
          </motion.div>

          <motion.div 
            ref={imageRefs[2]}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={imageLoadStates[2] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[250px] w-full mb-4">
              <Image
                src="/images/careers-most-resp.jpg"
                alt="Agentes imobiliários recebendo suporte e treinamento"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <span className="text-amber-700 font-semibold text-sm">21</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Suporte e Treinamento Contínuo<sup>*</sup>
            </h3>
          </motion.div>
        </div>

        <motion.button 
          type="button"
          className="mt-12 bg-[#D8D0B7] text-gray-900 px-8 py-3 flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Juntar-se à Century 21"
        >
          Junte-se a Nós Hoje
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      </div>
    </section>
  )
} 