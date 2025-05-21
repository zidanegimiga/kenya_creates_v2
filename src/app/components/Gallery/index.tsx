// src/app/components/GallerySection.tsx
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const galleryImages = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png'
]

export default function GallerySection({slug}: {slug: string}) {
  // we need two refs so we can drive top and bottom row separately
  const topRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)

  // useScroll can track scroll progress of an element
  const { scrollYProgress } = useScroll({
    target: topRef,
    offset: ['start end', 'end start']
  })

  // top row moves left as you scroll down
  const xTop = useTransform(scrollYProgress, [0, 1], ['-50%', '0%'])
  // bottom row moves right as you scroll down
  const xBot = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <section className="relative bg-[#2f0033] py-12 overflow-hidden">
      <h2 className="text-center text-4xl font-fraunces text-white mb-8">
        Gallery
      </h2>

      {/* ───── Desktop scroll-linked rows ───── */}
      <div className="hidden lg:block">
        {/* top row */}
        <motion.div
          ref={topRef}
          style={{ x: xTop }}
          className="flex gap-4 whitespace-nowrap"
        >
          {galleryImages.map((src, i) => (
            <div
              key={`top-${i}`}
              className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 relative rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/${slug}/${src}`}
                alt=""
                fill
                className="object-cover"
                priority={i < 3}
              />
            </div>
          ))}
          {/* duplicate so we never run out of images when scrolling */}
          {galleryImages.map((src, i) => (
            <div
              key={`top2-${i}`}
              className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 relative rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/${slug}/${src}`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* bottom row */}
        <motion.div
          ref={botRef}
          style={{ x: xBot }}
          className="flex gap-4 mt-6 whitespace-nowrap"
        >
          {galleryImages.map((src, i) => (
            <div
              key={`bot-${i}`}
              className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 relative rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/${slug}/${src}`}
                alt=""
                fill
                className="object-cover"
                priority={i < 3}
              />
            </div>
          ))}
          {galleryImages.map((src, i) => (
            <div
              key={`bot2-${i}`}
              className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 relative rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/${slug}/${src}`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ───── Mobile: draggable, snap-to-grid ───── */}
      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory space-x-4 px-4 py-2">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-64 h-40 md:w-72 md:h-48 relative rounded-lg overflow-hidden"
          >
            <Image
              src={`/images/${slug}/${src}`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
