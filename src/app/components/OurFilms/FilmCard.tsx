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
    <div className="">
      <div>
        <Image
          src={`/images/${bgImage.split("/")[2]}`}
          // src={`/images/${bgImage.split("/")[2]}`}
          alt={`${title} background`}
          width={1000}
          height={560}
          className="w-full object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>


      <div className={`relative w-full h-[60dvh] bg-cover bg-center bg-no-repeat bg-${bgImage.split("/")[2].split(".")[0]}`}>
        <div
          className={`relative z-10 flex h-full flex-col justify-between items-center text-center px-6 py-20 bg-[#1E1F1D]/90`}
        >
          <div>
            <h3 className="font-fraunces text-4xl md:text-5xl">{title}</h3>
            <p className="mt-2 font-satoshi text-lg">
              By {author?.name}
            </p>
          </div>

          <Link href={`/films/${slug}`}>
            <div
              className="my-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-500/50 hover:bg-gray-500/75 transition -rotate-45"
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
            {description.slice(0, 250)}...
          </p>
        </div>
      </div>
    </div>
  );
}
