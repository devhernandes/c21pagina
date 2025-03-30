"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import "../globals.css"

export default function ContatosPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipCode: "",
    hasLicense: "no",
    comments: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, hasLicense: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aqui seria implementada a lógica de envio do formulário
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-[80%] h-[1px] bg-gray-200" role="separator" aria-label="Linha divisória"></div>
      </div>
      {/* Container Principal: Formulário de Contato */}
      <div className="container-main bg-white flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h1 className="text-4xl font-medium text-[#6b6149] mb-6">Vamos Falar de Imobiliária</h1>
              <p className="text-gray-700">
                Estamos entusiasmados por estar a explorar uma oportunidade de negócio com a marca CENTURY 21. Por favor,
                preencha o formulário de contacto abaixo e será contactado por uma franquia local de propriedade e operação
                independente.
              </p>
            </div>
            <div>
              <Image
                src="/c21pagina/images/contatos-falar.jpg"
                alt="Profissional imobiliário a trabalhar"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl font-medium">Pronto para começar? Estamos ansiosos para ouvir de si.</h2>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="firstName" className="mb-2 block">
                  Nome Próprio <span className="text-sm text-gray-500">(obrigatório)</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="mb-2 block">
                  Apelido <span className="text-sm text-gray-500">(obrigatório)</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="phone" className="mb-2 block">
                  Telefone <span className="text-sm text-gray-500">(obrigatório)</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Email <span className="text-sm text-gray-500">(obrigatório)</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="zipCode" className="mb-2 block">
                  Código Postal <span className="text-sm text-gray-500">(obrigatório)</span>
                </Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div>
                <Label className="mb-2 block">
                  Tem uma licença de mediação imobiliária? <span className="text-sm text-gray-500">(obrigatório)</span>
                </Label>
                <RadioGroup value={formData.hasLicense} onValueChange={handleRadioChange} className="flex gap-4">
                  <div className="flex items-center border border-gray-300 px-4 py-2">
                    <RadioGroupItem value="no" id="no" className="mr-2" />
                    <Label htmlFor="no">Não</Label>
                  </div>
                  <div className="flex items-center border border-gray-300 px-4 py-2">
                    <RadioGroupItem value="yes" id="yes" className="mr-2" />
                    <Label htmlFor="yes">Sim</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="comments" className="mb-2 block">
                Perguntas/Comentários
              </Label>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full h-32"
              />
            </div>

            <div className="text-sm text-gray-600 mb-6">
              <p className="mb-2">
                Ao clicar em Enviar Mensagem, concordo que uma franquia CENTURY 21 de propriedade e operação independente ou
                Century 21 Real Estate LLC pode contactar-me por telefone ou mensagem de texto, incluindo por meios
                automatizados e através do uso de mensagens de voz pré-gravadas ou automatizadas sobre potencial afiliação
                como contratante independente com uma franquia CENTURY 21 e outros fins relacionados. Reconheço que li e
                concordo com os{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Termos de Utilização
                </a>{" "}
                e{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Política de Privacidade
                </a>
                .
              </p>
              <p>
                Este site é protegido pelo reCAPTCHA Enterprise e pela Google{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Política de Privacidade
                </a>{" "}
                e{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Termos de Serviço
                </a>{" "}
                aplicam-se.
              </p>
            </div>

            <Button type="submit" className="bg-[#d8d0b8] hover:bg-[#c5bdaa] text-black font-medium py-3 px-6 w-48">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>

      {/* Container do Rodapé */}
      <div className="container-footer bg-gray-50">
        <Footer />
      </div>
    </div>
  )
}

