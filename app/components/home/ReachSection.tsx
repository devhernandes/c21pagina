"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useAnimationOnScroll } from "@/app/hooks/useAnimationOnScroll"
import AnimatedCounter from "../AnimatedCounter"

export function ReachSection() {
  const ref = useRef(null)
  const shouldAnimate = useAnimationOnScroll(ref)

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1EFEB]" aria-label="Alcance global e reputação da Century 21">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ 
            duration: 1.2,
            delay: 0.3,
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 100
          }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Alcance e Reputação Inigualáveis</h2>
          <p className="text-gray-700 mb-6">
            Como o nome mais reconhecido e respeitado no mercado imobiliário segundo compradores e vendedores
            <sup>*</sup>, oferecemos-lhe uma oportunidade extraordinária para fazer crescer o seu negócio através de
            referências e leads em todo o mundo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="inline-block border-t border-[#D4AF37] w-[60px] mb-4"></div>
            <p className="text-gray-600 text-sm mb-2">Mais de</p>
            <p className="text-4xl font-bold text-gray-800 mb-2">
              <AnimatedCounter 
                end={11900} 
                suffix="+"
              />
            </p>
            <p className="text-gray-600 text-sm">
              Escritórios em Todo o Mundo<sup>**</sup>
            </p>
          </div>

          <div>
            <div className="inline-block border-t border-[#D4AF37] w-[80px] mb-4"></div>
            <p className="text-gray-600 text-sm mb-2">Abrangendo</p>
            <p className="text-4xl font-bold text-gray-800 mb-2">
              <AnimatedCounter 
                end={84} 
              />
            </p>
            <p className="text-gray-600 text-sm">
              Países e Territórios<sup>**</sup>
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="inline-block border-t border-[#D4AF37] w-[60px] mb-4"></div>
            <p className="text-gray-600 text-sm mb-2">Mais de</p>
            <p className="text-4xl font-bold text-gray-800 mb-2">
              <AnimatedCounter 
                end={135000} 
                suffix="+"
              />
            </p>
            <p className="text-gray-600 text-sm">
              Agentes em Todo o Mundo<sup>**</sup>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 