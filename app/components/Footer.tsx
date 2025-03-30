"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-white relative" role="contentinfo">
  {/* Seção do Logo Principal */}
  <section className="relative flex justify-center py-16 md:py-20 lg:py-24 border-b border-gray-100">
    <div className="footer-logo-container absolute left-1/2 bottom-[-130px] transform -translate-x-1/2 w-[220px] h-[260px] z-10">
      <Image
        src="/c21pagina/images/logoc21.png"
        alt="CENTURY 21 Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  </section>

  {/* Seção Principal do Footer */}
  <section className="w-full bg-[#F4F4F6] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-8 md:pb-12 lg:pb-16">
    {/* Container Principal */}
    <div className="footer-main-container w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Grid de Links */}
      <div className="footer-grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* Coluna 1 - Logo e Link do Site */}
        <div className="footer-brand-column text-center sm:text-left">
          <div className="footer-brand-logo w-[15vw] h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-[10vw] lg:h-[10vw] relative">
            <Image
              src="/c21pagina/images/century21logo.svg"
              alt="CENTURY 21 Logo"
              fill
              className="object-contain"
            />
          </div>
          <a 
            href="#" 
            className="footer-brand-link inline-flex items-center justify-center sm:justify-start text-gray-600 hover:text-gray-800 transition-all duration-300 mt-2 group"
            aria-label="Visitar century21.com.pt"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-300">century21.com.pt</span>
          </a>
        </div>

        {/* Coluna 2 - Links de Privacidade */}
        <nav className="footer-privacy-column text-center sm:text-left" aria-label="Links de privacidade">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Privacidade</h3>
          <div className="footer-privacy-links space-y-3">
            <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Lei da Habitação Justa
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Não Vender ou Partilhar os Meus Dados Pessoais
            </a>
          </div>
        </nav>

        {/* Coluna 3 - Links de Termos */}
        <nav className="footer-terms-column text-center sm:text-left" aria-label="Links de termos">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Termos</h3>
          <div className="footer-terms-links space-y-3">
            <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Termos e Condições
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Preferências de Cookies
            </a>
          </div>
        </nav>

        {/* Coluna 4 - Links de Acessibilidade */}
        <nav className="footer-accessibility-column text-center sm:text-left" aria-label="Links de acessibilidade">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Acessibilidade</h3>
          <div className="footer-accessibility-links space-y-3">
            <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Declaração de Acessibilidade
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Acomodações Razoáveis
            </a>
          </div>
        </nav>
      </div>

      {/* Seção de Copyright */}
      <div className="footer-copyright-container text-center text-sm text-gray-600 mt-12 md:mt-16 border-t border-gray-200 pt-8 md:pt-12">
        <p className="footer-copyright-text mb-2">©2025 Century 21 Real Estate LLC. Todos os direitos reservados.</p>
        <p className="footer-legal-text max-w-4xl mx-auto leading-tight">
          CENTURY 21<sup>®</sup>, o logótipo CENTURY 21 e C21<sup>®</sup> são marcas de serviço de propriedade da Century 21 Real Estate LLC. A Century 21 Real Estate LLC apoia totalmente os princípios da Lei da Habitação Justa e da Lei da Igualdade de Oportunidades. Cada escritório é de propriedade e operação independentes. As informações de listagem são consideradas confiáveis, mas não são garantidas como precisas.
        </p>
      </div>
    </div>
  </section>
</footer>
  )
} 
