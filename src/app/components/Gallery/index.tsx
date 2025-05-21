// src/app/components/GallerySection.tsx
'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const galleryImages = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
]

export default function GallerySection({ slug }: { slug: string }) {
  const topRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // desktop scroll‐linked animation
  const { scrollYProgress } = useScroll({
    target: topRef,
    offset: ['start end', 'end start'],
  })
  const xTop = useTransform(scrollYProgress, [0, 1], ['-50%', '0%'])
  const xBot = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <section className="relative bg-[#2f0033] py-12 overflow-hidden">
      <h2 className="text-center text-4xl font-fraunces text-white mb-8">
        Gallery
      </h2>

      {/* ───── Desktop: scroll‐linked rows ───── */}
      <div className="hidden lg:block">
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
          {galleryImages.map((src, i) => (
            <div
              key={`top2-${i}`}
              className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 relative"
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

        <motion.div
          ref={botRef}
          style={{ x: xBot }}
          className="flex gap-4 mt-6 whitespace-nowrap overflow-hidden px-8"
        >
          {galleryImages.map((src, i) => (
            <div
              key={`bot-${i}`}
              className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 relative"
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
              className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 relative"
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

      {/* ───── Mobile: scroll‐snap carousel + lightbox ───── */}
      <div className="lg:hidden space-x-4 flex flex-col items-center justify-center space-y-2">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={`/images/${slug}/${src}`}
              alt=""
              height={160}
              width={320}
              className="width-full h-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      {/* ───── Lightbox ───── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            <Image
              src={`/images/${slug}/${galleryImages[lightboxIndex]}`}
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
