"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { all_films, type FilmInterface } from "@/data/films";

/**
 * Pass in the `currentSlug` so we can compute “about-us”, “next”, and
 * the two “you might also like” films automatically.
 */
interface NextFilmsSectionProps {
  currentSlug: string;
}

export default function NextFilmsSection({
  currentSlug,
}: NextFilmsSectionProps) {
  // find the index of the current film
  const idx = all_films.findIndex((f) => f.slug === currentSlug);
  // about-us is always that specific slug
  const aboutUs = all_films.find((f) => f.slug === "about-us")!;
  // next film in the list (wraps around)
  const next = all_films[(idx + 1) % all_films.length];
  // then the following two
  const alsoLike: FilmInterface[] = [
    all_films[(idx + 2) % all_films.length],
    all_films[(idx + 3) % all_films.length],
  ];

  return (
    <section className="bg-[#F5E6F0] px-4 py-12 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-[1fr_3fr_1fr]">
        <Link
          href={`/about-us`}
          className="relative overflow-hidden h-96 lg:h-96"
        >
          <Image
            src={"/images/about_us.png"}
            alt={"About Us"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <button
            className="absolute top-4 right-4 bg-gray-600/60 hover:bg-gray-600/80 rounded-full p-2 -rotate-45"
            aria-label="Go to About Us"
          >
            <HiArrowRight className="text-white w-5 h-5" />
          </button>
          <span className="absolute bottom-4 left-4 text-white font-satoshi text-lg">
            About Us
          </span>
        </Link>

        <div className="grid grid-cols-2 gap-0">
          {/*  ─ pink panel ─ */}
          <div className="bg-[#9E005F] p-8 flex flex-col justify-between">
            <span className="text-lg text-white font-satoshi">Next</span>
            <div className="flex flex-col justify-center">
              <h2 className="mt-2 font-fraunces text-3xl text-white leading-snug">
                {next.title}
              </h2>
              <p className="mt-1 font-satoshi text-white">
                By {next.author.name}
              </p>
            </div>
          </div>

          {/*  ─ hero image ─ */}
          <Link
            href={`/films/${next.slug}`}
            className="relative overflow-hidden h-64 lg:h-auto"
          >
            <Image
              src={next.bgImage}
              alt={next.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <button
              className="absolute top-4 right-4 bg-gray-600/60 hover:bg-gray-600/80 rounded-full p-2 -rotate-45"
              aria-label={`Watch ${next.title}`}
            >
              <HiArrowRight className="text-white w-5 h-5" />
            </button>
          </Link>
        </div>

        <div className="grid grid-rows-2 gap-4">
          {alsoLike.map((film) => (
            <Link
              key={film.slug}
              href={`/films/${film.slug}`}
              className="relative rounded-lg overflow-hidden h-32 lg:h-auto "
            >
              <Image
                src={film.bgImage}
                alt={film.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-fraunces text-xl text-center px-2">
                  {film.title}
                </h3>
              </div>
              <button
                className="absolute top-2 right-2 bg-gray-600/60 hover:bg-gray-600/80 rounded-full p-1.5 -rotate-45"
                aria-label={`Watch ${film.title}`}
              >
                <HiArrowRight className="text-white w-4 h-4" />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
