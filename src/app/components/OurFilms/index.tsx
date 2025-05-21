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
        className="
          sticky top-0 z-20
          bg-black
          flex flex-col justify-evenly items-center
          h-[30vh]      /* mobile: occupy half the viewport height */
          md:h-auto     /* md+ revert to auto height */
          py-4 md:py-8  /* smaller vertical padding on mobile */
        "
      >
        <h2
          className="font-fraunces text-4xl md:text-7xl text-white"
          style={{ fontWeight: 400 }}
        >
          OUR FILMS
        </h2>
        <p className="font-satoshi text-base md:text-lg w-11/12 md:w-1/2 text-center">
          Through four captivating short films, we move beyond legalese and jargon to embrace a language that’s deeply personal, relatable, and rooted in our local history.
        </p>
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
