"use client";

import Image from "next/image";
import Link from "next/link";
import { FilmInterface } from "@/data/films";

export default function FilmCard({
  title,
  author,
  description,
  bgImage,
  slug,
}: FilmInterface) {
  const HEADER_HEIGHT = 200;
  const ig = bgImage.split("/")[2].split(".")[0];

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <Image
          src={`/images/${bgImage.split("/")[2]}`}
          alt={`${title} background`}
          width={1200}
          height={600}
          className="w-full h-full"
          // sizes="(max-width: 1200px) 100vw 100, (max-width: 768px) 80vw, 50vw"
        />
      </div>

      {/* Card */}
      <div className="relative w-full h-full">
        <div
          className="relative z-10 flex h-full flex-col justify-between items-center text-center px-4 py-6 sm:px-6 sm:py-10 bg-[#1E1F1D]/90"
        >
          <div className="space-y-3 sm:space-y-4">
            {/* Title */}
            <h3 className="font-fraunces text-[clamp(1.5rem,5vw,2.25rem)] sm:text-[clamp(2rem,6vw,3rem)] md:text-[clamp(2.5rem,7vw,3rem)]">
              {title}
            </h3>
            {/* Director */}
            <p className="font-satoshi text-[clamp(0.75rem,2.5vw,0.875rem)] sm:text-[clamp(0.875rem,2.5vw,1rem)]">
              By {author?.name}
            </p>
          </div>

          <Link href={`/films/${slug}`}>
            <div
              className="my-6 sm:my-8 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-500/50 hover:bg-gray-500/75 transition -rotate-45"
              aria-label={`Watch ${title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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

          {/* Description */}
          <p className="max-w-[90%] sm:max-w-lg font-satoshi text-[clamp(0.75rem,2.5vw,0.875rem)] sm:text-[clamp(0.875rem,2.5vw,1rem)]">
            {description.slice(0, 200)}...{" "}
            <Link href={`/films/${slug}`}>
              <span className="underline hover:font-bold cursor-pointer">More</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}