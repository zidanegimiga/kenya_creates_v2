// src/app/components/SectionTwo.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './SectionTwo.module.scss'

const slides = [
  {
    key: 'one',
    imageSrc: '/images/section2_portrait.png',
    headingGradient: true,
    body: `Kenya Creates is here to change that. Our films speak to the heart,
      addressing the real barriers young people face while providing tools
      to navigate life with confidence.`,
  },
  {
    key: 'two',
    imageSrc: '/images/section2_ii.png',
    headingGradient: false,
    body: `It’s not about dictating choices; it’s about recognizing what’s real
      and centering it to spark conversations that feel natural and empowering.`,
  },
]

export default function SectionTwo() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const { key, imageSrc, headingGradient, body } = slides[index]

  return (
    <section className="bg-[#1E1F1D] h-dvh overflow-hidden">
      <div className="flex h-full items-center justify-center">
        {/* ── IMAGE (hidden on mobile) ── */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={key}
            className={`${styles.imageContainer} hidden md:block`}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
              exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover object-center rounded-lg"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* ── TEXT + LOADER ── */}
        <div
          className={`
            ${styles.textContainer}
            w-full md:w-1/2
            px-6 sm:px-8 md:px-12
            flex flex-col items-center md:items-start
          `}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.h2
              key={key}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`
                font-fraunces
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                leading-tight
                ${headingGradient
                  ? 'bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent'
                  : 'text-[#F5A4D4]'}
                text-center md:text-left
              `}
            >
              For too long, reproductive health has been framed in a way that feels
              impersonal and inaccessible.
            </motion.h2>

            <motion.p
              key={key + '-body'}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
                },
                exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="
                mt-6
                font-satoshi
                text-base sm:text-lg md:text-xl
                text-[#9F8686]
                leading-relaxed
                text-center md:text-left
              "
            >
              {body}
            </motion.p>
          </AnimatePresence>

          {/* loader bar */}
          <div className="mt-8 h-1 w-24 bg-gray-700 rounded overflow-hidden">
            <motion.div
              key={index}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-pink-400 via-pink-500 to-orange-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
