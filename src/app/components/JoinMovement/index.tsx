// src/app/components/JoinMovementSection.tsx
'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import {
  FilmIcon,
  MegaphoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    title: "Let's talk",
    description:
      'Want to host a screening, collaborate, or bring these stories to new spaces? Fill out the form below and let’s make it happen.',
    icon: <FilmIcon className="w-8 h-8 text-[#380022]" />,
  },
  {
    title: 'Impact Screening',
    description:
      'Films spark change. If you’d like to organize a screening for your school, community, or organization, reach out.',
    icon: <MegaphoneIcon className="w-8 h-8 text-[#380022]" />,
  },
  {
    title: 'Amplify the Stories',
    description:
      'Share, discuss, and push the conversation forward. Every voice matters.',
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-[#380022]" />
    ),
  },
]

const sectionVariant: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
}

const headingVariant: Variants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const subheadingVariant: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 25, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
}

export default function JoinMovementSection() {
  return (
    <motion.section
      id="form"
      className="bg-black text-white py-24 px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
      style={{ perspective: 1000 }}
    >
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Heading */}
        <motion.div
          className="text-center space-y-2"
          variants={headingVariant}
        >
          <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl">
            Join the movement
          </h2>
        </motion.div>

        <motion.p
          className="font-satoshi text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          variants={subheadingVariant}
        >
          Kenya Creates is more than a project&nbsp;– it’s a movement. Young
          people deserve to be heard, and their stories deserve to be seen.
          Here’s how you can be part of it:
        </motion.p>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariant}
        >
          {actions.map(({ title, description, icon }, idx) => (
            <motion.div
              key={idx}
              className="
                relative
                bg-[#15000C]
                rounded-2xl
                pt-12 pb-8 px-6
                text-center
                cursor-pointer
                will-change-transform
                hover:bg-[#51314A]
              "
              variants={cardVariant}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Icon circle */}
              <motion.div
                className="absolute -top-8 left-[43%] transform -translate-x-1/2"
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: idx * 0.2 + 0.6, type: 'spring', stiffness: 200 }}
              >
                <div className="bg-gray-200 rounded-full p-4 shadow-lg group-hover:shadow-2xl group-hover:bg-white transition-colors duration-300">
                  {icon}
                </div>
              </motion.div>

              {/* Content */}
              <motion.h3
                className="mt-4 font-fraunces text-4xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 + 0.8, duration: 0.6 }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="font-satoshi text-base leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.9, duration: 0.6 }}
              >
                {description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
