"use client";

import Image from "next/image";
import Link from "next/link";

export interface Film {
  id: string;
  title: string;
  author: string;
  description: string;
  bgImage: string;
  slug: string;
}

export default function FilmCard({
  title,
  author,
  description,
  bgImage,
  slug,
}: Film) {
    const HEADER_HEIGHT = 280 
  return (
    <div className={`relative w-full h-full ${bgImage} bg-cover bg-center bg-no-repeat`}>
      {/* Content */}
      <div className={`relative z-10 flex h-full flex-col justify-between items-center text-center px-6 py-12 bg-[#1E1F1D]/90`}>
        <div>
          <h3 className="font-fraunces text-4xl md:text-5xl">{title}</h3>
          <p className="mt-2 font-satoshi text-lg">By {author}</p>
        </div>

        <Link href={`/films/${slug}`}>
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-500/50 hover:bg-gray-500/75 transition -rotate-45"
            aria-label={`Watch ${title}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>

        <p className="max-w-lg font-satoshi text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
