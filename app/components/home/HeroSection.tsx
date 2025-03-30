"use client"

import { ArrowRight, Pause } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full" aria-label="Seção principal">
      <video
        src="/videos/c21back-ground.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/video-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="bg-black bg-opacity-70 p-6 md:p-12 max-w-2xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">Eleve a Sua Carreira Imobiliária</h1>
          <p className="text-white text-lg md:text-xl mb-6 md:mb-8">
            Transforme Vidas, Começando pela Sua: Embarque numa Nova Jornada com a marca CENTURY 21<sup>®</sup>.
          </p>
          <button 
            type="button"
            className="bg-[#D8D0B7] text-gray-900 px-6 py-3 flex items-center gap-2 font-medium hover:bg-[#C5BCA3] transition-colors"
            aria-label="Iniciar jornada na Century 21"
          >
            Inicie a Sua Jornada
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <button 
        type="button"
        className="absolute bottom-4 right-4 bg-white bg-opacity-20 p-2 hover:bg-opacity-30 transition-colors"
        aria-label="Pausar vídeo de fundo"
      >
        <Pause className="h-6 w-6 text-white" aria-hidden="true" />
      </button>
    </section>
  )
} 