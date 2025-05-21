// src/app/components/TheoryOfChangeSection.tsx
'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const images = [
  {
    image: '/images/film_home_bg.png',
    name: 'Home',
    author: 'Adele Onyango',
  },
  {
    image: '/images/bella_is_film.png',
    name: 'Bella Is Dying, Maybe Next Week',
    author: 'Abigail Arunga',
  },
  {
    image: '/images/know_thy_body_films_page.png',
    name: 'Know Thy Body, Know Thyself',
    author: 'TY Ngachira',
  },
  {
    image: '/images/float_film_photo.png',
    name: 'Float',
    author: 'Lydia Matata',
  },
]

// Parent container variant to stagger cards
const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Each card flies & pops in
const card: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
}

export default function TheoryOfChangeSection() {
  return (
    <section className="bg-[#39002A] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading animation */}
        <motion.h2
          className="text-center font-fraunces text-3xl md:text-4xl lg:text-5xl text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Theory of Change: The Power of Storytelling
          <br className="hidden md:inline" /> Shapes Culture
        </motion.h2>

        <motion.p
          className="mt-4 max-w-3xl mx-auto text-center font-satoshi text-base md:text-lg text-white leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          We believe in the transformative power of stories. Stories bring
          people together, spark dialogue, and inspire change. By centering
          young people’s voices, Kenya Creates is building a bridge between
          what’s unsaid and what needs to be shared.
        </motion.p>

        {/* Grid of cards */}
        <motion.div
          className="mt-8 grid grid-cols-1 grid-rows-4 gap-0 md:grid-cols-2 md:grid-rows-2"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden h-48 sm:h-64 md:h-80 rounded-lg shadow-lg"
              variants={card}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* full-bleed image */}
              <Image
                src={src.image}
                alt={src.name}
                fill
                className="object-cover object-center"
                priority={idx < 2}
              />

              {/* “shine” overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* tinted overlay with text */}
              <div
                className="
                  absolute inset-0
                  bg-[#531550]/60
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  ease-in-out
                  flex flex-col justify-center items-center
                  text-center px-4
                "
              >
                <h3 className="font-fraunces text-2xl sm:text-3xl md:text-4xl text-white">
                  {src.name}
                </h3>
                <p className="mt-2 font-satoshi text-sm sm:text-base text-white">
                  By {src.author}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
