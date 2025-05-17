// src/app/components/OurFilms.tsx
'use client'

import { useRef } from 'react'
import FilmCard, { Film } from './FilmCard'

const films: Film[] = [
  {
    id: '1',
    title: 'Home',
    author: 'Adelle Onyango',
    description:
      'The title poem “Home” exists as a short film that follows a young Kenyan girl’s relationship with her body, her name is Adhis.',
    bgImage: 'bg-test_bg',
    slug: 'home',
  },
  {
    id: '2',
    title: 'Home',
    author: 'Adelle Onyango',
    description:
      'The title poem “Home” exists as a short film that follows a young Kenyan girl’s relationship with her body, her name is Adhis.',
    bgImage: '/images/adele_home_bg.png',
    slug: 'bg-test_bg',
  },
  // …add your other 3 films here
]

export default function OurFilms() {
  // height of the sticky header
  const HEADER_HEIGHT = 280 // px, corresponds to Tailwind’s h-16

  // reference to the scrollable container so further scrolling propagates once at end
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="w-full">
      {/* Sticky Header */}
      <div
        className="sticky top-0 z-20 h-16 bg-[#000] flex flex-col items-center justify-center space-y-4"
        style={{ height: `${HEADER_HEIGHT}px` }}
      >
        <h2 className="font-fraunces text-4xl md:text-7xl text-white" style={{fontWeight: 400}}>
          OUR FILMS
        </h2>

        <p className="font-satoshi text-lg w-1/2 text-center">Through four captivating short films, we move beyond legales and jargon to embrace a language that's deeply personal, relatable and rooted in our local history</p>
      </div>

      {/* Scroll-snap container */}
      <div
        ref={containerRef}
        className="overflow-y-auto"
        style={{ height: `calc(100dvh - ${HEADER_HEIGHT}px)` }}
      >
        {films.map((film) => (
          <div
            key={film.id}
            // className="snap-start h-[calc(100dvh-64px)]"
            className="snap-start h-full"
          >
            <FilmCard {...film} />
          </div>
        ))}
      </div>
    </section>
  )
}
