"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section 
      className="relative h-screen"
      aria-label="Menu"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="Imagem de fundo do hero"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Transforme sua Carreira no Mercado Imobiliário
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Junte-se à maior rede imobiliária do mundo e descubra o seu potencial
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto"
          >
            Comece Agora
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  )
} 