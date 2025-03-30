"use client"

import Navbar from "./components/Navbar"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/home/HeroSection"
import { AnimatedSection } from "./components/home/AnimatedSection"
import { DiscoverSection } from "./components/home/DiscoverSection"
import { AgentsSection } from "./components/home/AgentsSection"
import { ReachSection } from "./components/home/ReachSection"
import { SupportSection } from "./components/home/SupportSection"
import "./globals.css"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Container 1: Hero Section */}
      <div className="container-hero relative">
        <HeroSection />
      </div>

      {/* Container 2: Informações e Estatísticas */}
      <div className="container-info bg-white">
        <AnimatedSection />
        <DiscoverSection />
        <AgentsSection />
        <ReachSection />
      </div>

      {/* Container 3: Suporte e Rodapé */}
      <div className="container-support bg-gray-50">
        <SupportSection />
        <Footer />
      </div>
    </div>
  )
}

