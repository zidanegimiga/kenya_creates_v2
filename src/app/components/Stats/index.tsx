'use client'

import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: [1.1, 0.95, 1], // quick “pop”
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

interface Stat {
  label: string
  value: string
}

const stats: Stat[] = [
  { label: 'Films', value: '4' },
  { label: 'Founded', value: '2023' },
  { label: 'Screenings', value: '21' },
  { label: 'Viewers', value: '21K' },
]

export default function WhoWeAreSection() {
  return (
    <motion.main
      className="bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <motion.h1
              variants={fadeInUp}
              className="font-fraunces text-3xl leading-tight md:text-4xl lg:text-5xl"
            >
              Kenya Creates: Who We Are and
              <br /> Why We Matter
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-satoshi text-base md:text-lg leading-relaxed text-gray-200 max-w-prose"
            >
              Our films speak to the heart, addressing the real barriers young
              people face while providing tools to navigate life with
              confidence. It’s not about dictating choices; it’s about
              recognizing what’s real and centering it to spark conversations
              that feel natural and empowering.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.dl
            className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 lg:gap-x-12"
            variants={container}
          >
            {stats.map(({ label, value }) => (
              <motion.div
                key={label}
                className="text-center"
                variants={pop}
              >
                <dt className="font-satoshi text-sm uppercase tracking-wide text-gray-400">
                  {label}
                </dt>
                <dd className="mt-2 font-fraunces text-3xl md:text-4xl lg:text-4xl">
                  {value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </motion.main>
  )
}
