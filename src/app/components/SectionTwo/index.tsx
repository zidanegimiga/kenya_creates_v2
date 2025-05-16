'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './SectionTwo.module.scss'

const slides = [
  {
    imageSrc: '/images/section2_portrait.png',
    headingGradient: true,
    body: `Kenya Creates is here to change that. Our films speak to the heart,
      addressing the real barriers young people face while providing tools
      to navigate life with confidence.`,
  },
  {
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
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const { imageSrc, headingGradient, body } = slides[index]

  return (
    <section className="bg-[#1E1F1D] h-dvh">
      <div className="flex">
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            // src={'/images/section2_portrait.png'}
            alt=""
            className="object-cover object-center"
            priority
            fill
          />
        </div>

        {/* ── Right half: text & loader ── */}
        <div className={styles.textContainer}>
          <h2
            className={`
              font-fraunces 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              leading-tight
              ${headingGradient
                ? 'bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent'
                : 'text-[#F5A4D4]'}
            `}
          >
            For too long, reproductive health has been framed in a way that feels
            impersonal and inaccessible.
          </h2>

          <p className="mt-6 font-satoshi text-lg sm:text-lg md:text-xl text-[#9F8686] max-w-prose leading-relaxed w-8/12">
            {body}
          </p>

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
