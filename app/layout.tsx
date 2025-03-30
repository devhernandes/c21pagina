import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CENTURY 21® | Carreiras no Imobiliário",
  description: "Junte-se à maior rede imobiliária do mundo. A CENTURY 21® oferece oportunidades únicas para profissionais imobiliários, com formação, ferramentas e suporte para o seu sucesso.",
  keywords: "CENTURY 21, carreiras imobiliárias, agente imobiliário, formação imobiliária, oportunidades de trabalho, mercado imobiliário",
  authors: [{ name: "CENTURY 21" }],
  openGraph: {
    title: "CENTURY 21® | Carreiras no Imobiliário",
    description: "Junte-se à maior rede imobiliária do mundo. A CENTURY 21® oferece oportunidades únicas para profissionais imobiliários.",
    type: "website",
    locale: "pt_PT",
    siteName: "CENTURY 21",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CENTURY 21 Carreiras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CENTURY 21® | Carreiras no Imobiliário",
    description: "Junte-se à maior rede imobiliária do mundo. A CENTURY 21® oferece oportunidades únicas para profissionais imobiliários.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "seu-codigo-de-verificacao",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className="font-noyh antialiased">
        {children}
      </body>
    </html>
  )
}