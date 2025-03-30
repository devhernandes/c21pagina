"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import AnimatedCounter from "./AnimatedCounter"

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Números que Inspiram
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          A CENTURY 21 é a maior rede imobiliária do mundo, com presença global e uma história de sucesso que inspira
          milhares de profissionais todos os dias.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <p className="text-4xl font-bold text-gray-800 mb-2">
              {isInView && <AnimatedCounter end={11900} suffix="+" />}
            </p>
            <p className="text-gray-600">Escritórios em Todo o Mundo</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <p className="text-4xl font-bold text-gray-800 mb-2">
              {isInView && <AnimatedCounter end={84} />}
            </p>
            <p className="text-gray-600">Países e Territórios</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <p className="text-4xl font-bold text-gray-800 mb-2">
              {isInView && <AnimatedCounter end={135000} suffix="+" />}
            </p>
            <p className="text-gray-600">Agentes em Todo o Mundo</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}