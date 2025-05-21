// src/app/components/OurFilms.tsx
'use client'

import { useRef } from 'react'
import FilmCard from './FilmCard'
import { all_films } from '@/data/films'


export default function OurFilms() {
  const HEADER_HEIGHT = 240

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="w-full">
      <div
        className="sticky top-0 z-20 py-8 bg-[#000] flex flex-col items-center justify-center space-y-6"
        // style={{ height: `${HEADER_HEIGHT}px` }}
      >
        <h2 className="font-fraunces text-4xl md:text-7xl text-white" style={{fontWeight: 400}}>
          OUR FILMS
        </h2>

        <p className="font-satoshi text-lg w-1/2 text-center">Through four captivating short films, we move beyond legales and jargon to embrace a language that's deeply personal, relatable and rooted in our local history</p>
      </div>

      <div
        ref={containerRef}
        className="overflow-y-auto"
        // style={{ height: `calc(100dvh - ${HEADER_HEIGHT}px)` }}
      >
        {all_films.map((film) => (
          <div
            key={film.id}
            className="snap-start h-full"
          >
            <FilmCard {...film} />
          </div>
        ))}
      </div>
    </section>
  )
}
