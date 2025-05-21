// src/app/components/FilmMakers.tsx
'use client'

import { motion } from 'framer-motion'
import FilmMakerCard from '../FilmMakerCard'

const makers = [
  {
    id: 'adelle',
    name: 'Adelle Onyango',
    imageSrc: '/images/adele_filmmaker_card.png',
    socialUrl: 'https://www.instagram.com/adelleonyango/?hl=en',
    bgColor: 'bg-[#7F3DFF]',
    pattern: '/images/section_three_bg.svg',
  },
  {
    id: 'anthony',
    name: `Anthony 'Ty' Ngachira`,
    imageSrc: '/images/anthony_filmmaker_card.png',
    socialUrl: 'https://www.instagram.com/anto_ty/?hl=en',
    bgColor: 'bg-[#D81B60]',
    pattern: '/images/section_three_bg.svg',
  },
  {
    id: 'abigael',
    name: 'Abigael Arunga',
    imageSrc: '/images/abigael_filmmaker_card.png',
    socialUrl: 'https://www.instagram.com/abigailarunga/?hl=en',
    bgColor: 'bg-[#FF9800]',
    pattern: '/images/section_three_bg.svg',
  },
  {
    id: 'lydia',
    name: 'Lydia Matata',
    imageSrc: '/images/lydia_filmmaker_card.png',
    socialUrl: 'https://www.instagram.com/lydiamatata/?hl=en',
    bgColor: 'bg-[#009688]',
    pattern: '/images/section_three_bg.svg',
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.15, ease: 'easeOut' },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function FilmMakers() {
  return (
    <motion.section
      className="px-4 sm:px-6 md:px-0 py-8 bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {makers.map((m) => (
            <motion.div key={m.id} variants={cardVariants}>
              <FilmMakerCard {...m} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
