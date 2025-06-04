// src/app/components/OurFilms.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import FilmCard from "./FilmCard";
import { all_films } from "@/data/films";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OurFilms() {
  const HEADER_HEIGHT = 240;
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        setScrollY(scrollTop);
        console.log("scrollY:", scrollTop); // Debug scroll position
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Calculate opacity (1 to 0 over 100px scroll)
  const opacity = Math.max(0, 1 - scrollY / 100);
  // Calculate height (20vh to 10vh mobile, 24vh to 12vh md)

  return (
    <section className="w-full" ref={containerRef}>
      <div
        className="
          bg-black
          flex flex-col justify-evenly items-center
          h-[30vh]      /* mobile: occupy half the viewport height */
          md:h-auto     /* md+ revert to auto height */
          py-4 md:py-8  /* smaller vertical padding on mobile */
        "
      >
        <h2
          className="font-fraunces text-3xl md:text-4xl text-white mb-4"
          style={{ fontWeight: 400 }}
        >
          OUR FILMS
        </h2>
        <p className="font-satoshi text-[12px] md:text-base w-11/12 md:w-1/2 text-center" style={{ opacity }}>
          Through four captivating short films, we move beyond legalese and
          jargon to embrace a language that’s deeply personal, relatable, and
          rooted in our local history.
        </p>
      </div>

      <div className="overflow-y-auto">
        {all_films.map((film) => (
          <div key={film.id} className="snap-start h-full">
            <div
            onClick={()=> { router.push(`/films/${film.slug}`) }}
            >
              <FilmCard {...film} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
