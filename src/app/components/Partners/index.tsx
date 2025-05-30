"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Partner {
  id: string;
  name: string;
  logoSrc: string;
  description: string;
  url: string;
}

const partners: Partner[] = [
  {
    id: "iris",
    name: "IRIS",
    logoSrc: "/images/IRIS-LOGO.png",
    description:
      "The International Resource for Impact and Storytelling ( IRIS ) - whose commitment to independent storytelling and community wisdom has been essential in bringing Kenya Creates to life.",
    url: "https://storyforimpact.io/",
  },
  {
    id: "docubox",
    name: "Docubox",
    logoSrc: "/images/docubox_logo.png",
    description:
      "Docubox - is the East African Documentary Film Fund that exists to enable talented, driven, focused and accountable creatives across the East African region to produce unique films that unearth new realities and cross trans-national boundaries.",
    url: "https://mydocubox.org/",
  },
  {
    id: "jhr",
    name: "Journalists for Human Rights (JHR)",
    logoSrc: "/images/jhr_logo.png.svg",
    description:
      "JHR- offered dedicated mentorship to Kenya Creates journalists, fostering robust investigative storytelling that amplifies the voices of Kenya’s youth",
    url: "https://jhr.ca/",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Partners() {
  return (
    <motion.section
      className="bg-[#121214] py-12 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Mobile: headline on top */}
        <motion.div variants={itemVariants} className="md:hidden my-12">
          <p className="font-satoshi text-base text-white mb-2">Our Partners</p>
          <h2 className="font-fraunces text-4xl text-[#F868C1] leading-tight">
            The People who make this possible
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Desktop: sticky left column */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <div className="sticky top-24">
              <p className="font-satoshi text-base text-white mb-2">
                Our Partners
              </p>
              <h2 className="font-fraunces text-6xl text-[#F868C1] leading-tight">
                The People who make this possible
              </h2>
            </div>
          </motion.div>

          {/* Partners list */}
          <div className="space-y-16">
            {partners.map((p) => (
              <motion.div
                key={p.id}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* logo + arrow */}
                <div className="flex items-center justify-between">
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                    aria-label={`Visit ${p.name}`}
                  >
                    <Image
                      src={p.logoSrc}
                      alt={p.name}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </Link>
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-gray-300 hover:border-white hover:text-white transition"
                    aria-label={`Visit ${p.name}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 -rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 7l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* name */}
                <h3 className="font-fraunces text-2xl text-white">{p.name}</h3>

                {/* description */}
                <p className="font-satoshi text-base text-gray-300 max-w-prose">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
