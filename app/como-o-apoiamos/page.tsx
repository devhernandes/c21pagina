"use client"

import React from 'react'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PREMIOS, FERRAMENTAS } from '../constants/premios'
import { containerVariants, imageVariants, listItemVariants } from '../animations/variants'

export default function ComoOApoiamosPage() {
  const cardsRef = useRef(null)
  const premiosRef = useRef(null)
  
  const isInView = useInView(cardsRef, { once: false, margin: "-100px" })
  const isPremiosInView = useInView(premiosRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-[80%] h-[1px] bg-gray-200" role="separator" aria-label="Linha divisória"></div>
      </div>
      
      <header className="w-full bg-white" aria-label="Cabeçalho">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#74654A] leading-tight">
              Quando o Seu Negócio Prospera A Sua Carreira Também
            </h1>
            <p className="text-gray-700 text-base">
              Quando se torna afiliado da marca CENTURY 21<sup>®</sup>, ganha acesso a algumas das mentes mais brilhantes
              e às ferramentas mais avançadas do setor para o ajudar a alcançar os seus objetivos.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/foto1.jpg"
              alt="Profissionais imobiliários da Century 21 em reunião de colaboração"
              width={650}
              height={400}
              className="rounded-md"
              priority
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Seção de plataforma */}
        <section className="w-full bg-[#F1EFEC]" aria-label="Plataforma 21Online">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Div da imagem */}
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/foto2.png"
                  alt="21Online.com platform screenshot"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-md"
                />
              </div>
              
              {/* Div do texto */}
              <div className="w-full md:w-1/2 space-y-6 flex flex-col items-center justify-center text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">21Online.com</h2>
                <p className="text-gray-700 text-sm md:text-base max-w-md">
                  21Online.com é muito mais do que uma intranet de marca. É uma plataforma de produtividade adaptável e
                  personalizada que o ajuda a percorrer as etapas e ações fundamentais do processo imobiliário com um design
                  eficiente e responsivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de cards */}
        <section className="w-full bg-white" aria-label="Ferramentas e recursos">
          <div className="container mx-auto px-4 py-16">
            <motion.div 
              ref={cardsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "exit"}
              style={{
                opacity,
                scale
              }}
              role="grid"
              aria-label="Ferramentas e recursos disponíveis"
            >
              {FERRAMENTAS.map((ferramenta) => (
                <Card
                  key={ferramenta.title}
                  {...ferramenta}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Seção de desenvolvimento */}
        <section className="w-full">
          {/* Banner principal com texto sobreposto */}
          <div className="relative w-full h-[400px]">
            <Image src="/images/carreiras-pagina2.jpg" alt="Desenvolvimento de liderança" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-8 max-w-2xl mx-auto text-center rounded-md shadow-md">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  Eleve as Suas Competências com a C21 University®
                </h2>
                <p className="text-gray-700 text-base">
                  Na C21 University®, acreditamos que trabalha arduamente e merece um negócio forte e
                  bem-sucedido. Quer tenha dois anos de experiência ou vinte, a C21 University® oferece múltiplos
                  níveis de educação e certificações para ajudar a levar o seu negócio a novos patamares.
                </p>
              </div>
            </div>
          </div>

          {/* Seção de Dedicação */}
          <div className="bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Seja Recompensado pela Sua Dedicação</h2>
              <p className="text-gray-600 text-base mb-8 text-justify leading-relaxed">
                O seu esforço excecional leva a recompensas excecionais. Garantimos que o seu trabalho árduo é reconhecido,
                por isso organizamos eventos exclusivos como o Top Agent Retreat e a One21® Experience para agentes de
                excelência. O nosso programa de prémios é também uma ótima forma de celebrar as suas conquistas e criar
                confiança junto dos clientes, com reconhecimento baseado no desempenho ao nível individual, da equipa e do
                escritório, que pode adicionar aos seus materiais de marketing e credibilidade.
              </p>
            </div>
          </div>

          {/* Seção de Prémios */}
          <div className="bg-[#f5f5f2] py-16" ref={premiosRef}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  className="md:w-1/2"
                  variants={imageVariants}
                  initial="hidden"
                  animate={isPremiosInView ? "visible" : "hidden"}
                >
                  <Image
                    src="/images/carreiras-reconpensas.jpg"
                    alt="Troféus e prémios CENTURY 21"
                    width={600}
                    height={400}
                    className="rounded-md shadow-lg"
                  />
                </motion.div>
                <motion.div 
                  className="md:w-1/2 space-y-6"
                  initial="hidden"
                  animate={isPremiosInView ? "visible" : "hidden"}
                >
                  <motion.h2 
                    className="text-2xl md:text-3xl font-semibold text-gray-800"
                    variants={listItemVariants}
                    custom={0}
                  >
                    Reconhecimento, Prémios e Experiências de Elite
                  </motion.h2>
                  <motion.ul className="space-y-4">
                    {PREMIOS.map((premio, index) => (
                      <motion.li 
                        key={premio}
                        className="flex items-center"
                        variants={listItemVariants}
                        custom={index + 1}
                      >
                        <div className="w-2 h-2 bg-[#D8D0B7] rounded-full mr-3"></div>
                        <span className="text-base text-gray-700">
                          {premio}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div 
                    className="pt-4"
                    variants={listItemVariants}
                    custom={6}
                  >
                    <button className="bg-[#D8D0B7] hover:bg-[#C5BCA3] text-gray-900 font-medium py-2 px-6 rounded-md transition-colors">
                      Saiba Mais Sobre os Nossos Prémios
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 