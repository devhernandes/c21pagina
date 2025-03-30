import { motion } from 'framer-motion'
import Image from 'next/image'
import { cardVariants } from '../animations/variants'

interface CardProps {
  title: string
  description: string
  image: string
  alt: string
}

export const Card = ({ title, description, image, alt }: CardProps) => (
  <motion.div 
    className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 p-4 flex flex-col items-center group relative overflow-hidden"
    variants={cardVariants}
    role="article"
    aria-label={title}
  >
    <div 
      className="w-full h-full absolute inset-0 bg-[#F8F7F3]/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center p-3 z-10"
      aria-hidden="true"
    >
      <p className="text-gray-900 text-center font-medium">
        {description}
      </p>
    </div>
    <h3 className="text-lg font-medium text-gray-800 mb-3 relative z-20">
      {title}
    </h3>
    <div className="w-full h-48 relative overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
    </div>
  </motion.div>
) 