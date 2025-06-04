// src/app/components/OurJourney.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { labeledStories } from '@/data/stories'

// ─── JourneyCard (unchanged) ───
export interface JourneyCardProps {
  type: string
  imageSrc: string
  name: string
  description?: string
  title?: string
  href: string
  slug?: string
}

export function JourneyCard({
  type,
  imageSrc,
  name,
  description,
  title,
  href,
  slug,
}: JourneyCardProps) {
  const initials = useMemo(() => {
    if (!name) return ''
    return name
      .trim()
      .split(/\s+/)
      .map(w => w[0].toUpperCase())
      .slice(0, 2)
      .join('')
  }, [name])
  const hasImage = Boolean(slug && slug.trim())
  useEffect(() => {
    console.log('JourneyCard', { type, imageSrc, name, description, title, href, slug })
  }, [])

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { borderRadius: '1rem', backgroundColor: 'rgba(223,192,232,0)' },
        hover: { borderRadius: '1rem', backgroundColor: '#DFC0E8' },
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer border-3"
    >
      <div className="relative w-full h-40 sm:h-64 md:h-56">
        {hasImage ? (
          <Image
            src={`/stories/${slug}`}
            alt={title ?? name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-lg"
            priority
          />
        ) : (
          // <div className="absolute inset-0 bg-gray-300 flex items-center justify-center rounded-lg">
          //   <span className="text-3xl sm:text-4xl font-semibold text-gray-700">
          //     {initials}
          //   </span>
          // </div>
          <Image
            src={`/stories/not-found.png`}
            alt={title ?? name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-lg"
            priority
          />
        )}
        <span className="absolute top-2 left-2 z-10 px-3 py-1 rounded-full bg-[#FCE3F2] text-xs font-spacemono font-semibold text-[#63416E] transition-colors duration-200">
          {type}
        </span>
        <Link
          href={href}
          aria-label={`Learn more about ${title ?? name}`}
          className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/0 opacity-0 transition-all duration-200 group-hover:bg-white/30 group-hover:opacity-100"
        >
          <ArrowRightIcon className="w-5 h-5 -rotate-45 text-white" />
        </Link>
      </div>
      <div className="p-4 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DFC0E8] transition-colors duration-200 group-hover:bg-[#ceafff]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F6F0FF]">
            <UserIcon className="w-4 h-4 text-[#63416E]" />
          </span>
          <span className="font-satoshi text-sm">{name}</span>
        </div>
        {type === 'ARTICLE' && title ? (
          <Link
            href={href}
            className="block font-satoshi text-base text-[#63416E] group-hover:text-[#63416E] hover:underline"
          >
            {title}
          </Link>
        ) : (
          description && (
            <p className="font-satoshi text-base text-[#63416E]">{description}</p>
          )
        )}
      </div>
    </motion.div>
  )
}

// ─── Data Prep ───
const CARDS: JourneyCardProps[] = labeledStories.map(s => ({
  type: s.type!.toUpperCase(),
  slug: s.slug,
  imageSrc: `/stories/${s.slug}`,
  name: s.name ?? s.outlet,
  description: s.theme ?? undefined,
  href: s.url,
}))

// ─── Animation Variants ───
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.15, ease: 'easeOut' },
  },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// ─── OurJourney Component ───
export default function OurJourney() {
  const filtered = CARDS.slice(0, 6)

  return (
    <motion.section
      className="bg-[#EEE3FF] py-12 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div variants={itemVariants} className="relative mb-8">
          <h2 className="font-fraunces text-3xl md:text-4xl text-[#9E005F]">Our Journey</h2>
          <p className="mt-2 font-satoshi text-[#63416E] max-w-2xl">
            Explore the stories and inspirations driving our filmmakers. You’ll
            find journalistic articles, audio segments, insightful commentary,
            and lively discussions surrounding their releases and impacts.
          </p>
          <Link
            href="/our-journey"
            className="absolute top-0 right-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 hover:border-gray-600 transition"
            aria-label="Learn more about our Journey"
          >
            <ArrowRightIcon className="w-5 h-5 -rotate-45 text-gray-600" />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.filter(item => item.type === 'ARTICLE').map(item => (
            <motion.div key={item.href} variants={itemVariants}>
              <JourneyCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Link
            href="/our-journey"
            className="inline-block bg-white text-[#7F3D7F] font-satoshi font-semibold px-8 py-3 rounded-full shadow transition hover:bg-[#63416E] hover:text-white"
          >
            Learn more about our Journey
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
