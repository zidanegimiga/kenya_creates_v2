'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import JourneyCard, { JourneyCardProps } from '@/app/components/OurJourney'

const TAB_LABELS = ['All', 'Director Interviews', 'Articles', 'Podcast'] as const
type Tab = typeof TAB_LABELS[number]

type CardType = 'INTERVIEW' | 'ARTICLE' | 'PODCAST'

export interface Card extends Omit<JourneyCardProps, 'type'> {
  id: string
  type: CardType
}

interface OurJourneySectionProps {
  cards: Card[]
}

export default function OurJourneySection({ cards }: OurJourneySectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>('All')
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  // whenever activeTab changes, move the indicator
  useEffect(() => {
    const idx = TAB_LABELS.indexOf(activeTab)
    const btn = tabsRef.current[idx]
    if (btn) {
      setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth })
    }
  }, [activeTab])

  // filter cards by activeTab
  const visible = cards.filter((c) => {
    if (activeTab === 'All') return true
    if (activeTab === 'Director Interviews') return c.type === 'INTERVIEW'
    if (activeTab === 'Articles') return c.type === 'ARTICLE'
    if (activeTab === 'Podcast') return c.type === 'PODCAST'
    return false
  })

  return (
    <section>
      {/* ─── Sticky header ─── */}
      <div className=" bg-[#F1EBFF] z-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-3xl font-fraunces text-[#531550]">Our Journey</h2>
          <p className="mt-2 font-satoshi text-gray-600">
            Explore the stories and inspirations driving our filmmakers. You’ll find  
            journalistic articles, audio segments, insightful commentary, and lively  
            discussions surrounding their releases and impacts.
          </p>

          {/* tabs */}
          <div className="relative mt-6">
            <div className="flex space-x-8">
              {TAB_LABELS.map((label, i) => (
                <button
                  key={label}
                  ref={(el) => { tabsRef.current[i] = el }}
                  onClick={() => setActiveTab(label)}
                  className={`pb-2 font-satoshi text-lg transition-colors ${
                    activeTab === label
                      ? 'text-[#531550]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <motion.div
              className="h-1 bg-[#531550] rounded"
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
            />
          </div>
        </div>
      </div>

      {/* ─── Cards grid ─── */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {visible.length === 0 ? (
          <p className="text-center text-gray-500">No items in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((card) => (
              <JourneyCard
                key={card.id}
                {...card}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}