'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  'Brilliance',
  'Empathy',
  'Courage',
  'Connection',
  // ← add or remove whatever words you like
]

export default function RotatingWords() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 1500) // swap every 1 second
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-black text-white py-12 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Lead-in text */}
        <p className="font-satoshi text-lg md:text-xl">
          Our Films help you understand every body with a dash of
        </p>

        {/* Rotator viewport */}
        <div className="relative h-[3.5rem] overflow-hidden mt-8">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              className="font-fraunces text-4xl md:text-6xl leading-tight"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {words[index]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
