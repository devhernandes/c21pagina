"use client"

import { motion } from "framer-motion"
import Image from "next/image"

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative h-[300px]"
  >
    <Image
      src="/images/agent-1.jpg"
      alt="Agente imobiliário em frente a uma casa"
      fill
      className="object-cover rounded-lg"
      priority
      sizes="(max-width: 768px) 100vw, 33vw"
      quality={90}
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="relative h-[300px]"
  >
    <Image
      src="/images/agent-2.jpg" 
      alt="Agente imobiliário em frente a uma casa"
      fill
      className="object-cover rounded-lg"
      priority
      sizes="(max-width: 768px) 100vw, 33vw"
      quality={90}
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="relative h-[300px]"
  >
    <Image
      src="/images/agent-3.jpg"
      alt="Agente imobiliário em frente a uma casa" 
      fill
      className="object-cover rounded-lg"
      priority
      sizes="(max-width: 768px) 100vw, 33vw"
      quality={90}
    />
  </motion.div>
</div>