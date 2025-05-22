'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function GetInvolved() {
  // Container variant to stagger the two child animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        when: 'beforeChildren', 
        staggerChildren: 0.3,
        ease: 'easeOut'
      },
    },
  }

  // Child variant: fade + slide up
  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  }

  return (
    <motion.section
      className="relative w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
    >
      {/* ── Image block ── */}
      <motion.div variants={child} className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] relative">
        <Image
          src="/images/group_banner_photo.png"
          alt="Kenya Creates people"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* ── Overlay content ── */}
      <motion.div
        variants={child}
        className={`
          relative 
          bg-[#B4009E] text-white 
          rounded-bl-[3rem] rounded-r-[3rem]
          -mt-12 sm:-mt-16 md:-mt-20
          pt-16 sm:pt-20 md:pt-24
          pb-12 sm:pb-16 md:pb-20
          px-6 sm:px-8 md:px-12
          z-20
        `}
      >
        <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl text-center">
          Get Involved
        </h2>
        <p className="mt-4 max-w-3xl mx-auto font-satoshi text-base sm:text-lg md:text-xl text-center leading-relaxed">
          Kenya Creates is more than a project—it's a movement. Young people deserve to be heard, and their stories deserve to be seen. Join us today!
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/about-us#collaborate"
            className="inline-block bg-white text-[#B4009E] font-satoshi font-medium
                       px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            JOIN THE MOVEMENT
          </Link>
        </div>
      </motion.div>
    </motion.section>
  )
}
