"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white p-4" role="navigation" aria-label="Navegação principal">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="relative w-48 h-12">
          <Link href="/" aria-label="Página inicial">
            <Image
              src="/c21pagina/images/century21logo.svg"
              alt="CENTURY 21 Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`text-gray-800 font-medium relative pb-1 hover:text-gray-600 transition-colors ${
              pathname === "/" 
                ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black" 
                : ""
            }`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Carreiras no Imobiliário
          </Link>
          <Link 
            href="/como-o-apoiamos" 
            className={`text-gray-800 font-medium relative pb-1 hover:text-gray-600 transition-colors ${
              pathname === "/como-o-apoiamos" 
                ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black" 
                : ""
            }`}
            aria-current={pathname === "/como-o-apoiamos" ? "page" : undefined}
          >
            Como o Apoiamos
          </Link>
          <Link 
            href="/contatos" 
            className="border-2 border-gray-800 px-6 py-2 text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-colors"
          >
            Pronto para Conversar?
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      <div 
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === "/" 
                ? "bg-gray-100 text-gray-900" 
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            }`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Carreiras no Imobiliário
          </Link>
          <Link 
            href="/como-o-apoiamos" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === "/como-o-apoiamos" 
                ? "bg-gray-100 text-gray-900" 
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            }`}
            aria-current={pathname === "/como-o-apoiamos" ? "page" : undefined}
          >
            Como o Apoiamos
          </Link>
          <Link 
            href="#" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Pronto para Conversar?
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 
