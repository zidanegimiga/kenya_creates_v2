// src/app/journey/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { JourneyCard, JourneyCardProps } from '../components/OurJourney';
import { labeledStories } from '@/data/stories';
const TABS = [
  { key: 'All',       label: 'All' },
  { key: 'INTERVIEW', label: 'Director Interviews' },
  { key: 'ARTICLE',   label: 'Articles' },
  { key: 'PODCAST',   label: 'Podcast' },
] as const;
type TabKey = (typeof TABS)[number]['key'];


const CARDS: JourneyCardProps[] = labeledStories.map(s => ({
  type: s.type!.toUpperCase(),                 // 'ARTICLE' | 'PODCAST'
  slug: s.slug, // image file name
  imageSrc: `/stories//${s.slug}`,       // image file path
  name: s.name ?? s.outlet,                     // pill text
  description: s.theme ?? undefined,            // subtitle/excerpt
  href: s.url,                                  // external link
}));

export default function JourneyPage() {
  const [tab, setTab] = useState<TabKey>('All');
  const filtered = CARDS.filter(c => (tab === 'All' ? true : c.type === tab));

  useEffect(() => {
    console.log('Labelled Stories', labeledStories);}, []);

  return (
    <div className="bg-[#EEE3FF] min-h-screen">
      {/* ─── Intro Block ─── */}
      <section className="pt-12 pb-8 text-center px-4">
        <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl text-[#9E005F]">
          Our Journey
        </h1>
        <p className="mt-4 font-satoshi text-lg md:text-xl text-[#63416E] max-w-3xl mx-auto">
          Explore the stories and inspirations driving our filmmakers. You’ll
          find journalistic articles, audio segments, insightful commentary,
          and lively discussions surrounding their releases and impacts.
        </p>
      </section>

      {/* ─── Sticky Tab Bar ─── */}
      <header className="sticky top-16 z-40 w-12/12 px-40 bg-[#EEE2FF] border-b border-gray-200">
        <nav className="sm:px-6 flex space-x-8 relative pt-4 border-b border-[#DFC0E8]">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`font-satoshi text-lg pb-2 ${
                tab === key ? 'text-[#63416E] font-bold' : 'text-[#AC8CB6] font-medium'
              }`}
            >
              <span className="relative">
                {label}
                {tab === key && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-3 h-1 bg-[#9E005F]"
                  />
                )}
              </span>
            </button>
          ))}
        </nav>
      </header>

      {/* ─── Cards Grid ─── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <JourneyCard key={c.href} {...c} />
          ))}
        </div>
      </main>
    </div>
  );
}
