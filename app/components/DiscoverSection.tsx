"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function DiscoverSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1EFEB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="order-2 md:order-1 relative h-[400px] md:h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/c21pagina/images/discover.jpg"
            alt="Agentes imobiliários a mostrar propriedades"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div 
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Descubra a Sua Vocação</h2>
          <p className="text-gray-700 mb-6">
            Tem o que é preciso para prosperar no mercado imobiliário? O nosso Simulador de Personalidade para o
            Mercado Imobiliário de 10 minutos revelará os seus pontos fortes e potencial adequação.
          </p>
          <motion.button 
            className="border-2 border-gray-900 px-6 py-3 text-gray-900 font-medium flex items-center gap-2 hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Faça a Avaliação
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 
