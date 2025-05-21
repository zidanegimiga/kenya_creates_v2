"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

interface DirectorSectionProps {
  directorName: string;
  directorImage: string;
  synopsis: string;
  bio: string;
}

export default function DirectorSection({
  directorName,
  directorImage,
  synopsis,
  bio,
}: DirectorSectionProps) {
  const [openPanel, setOpenPanel] = useState<"synopsis" | "bio" | null>(
    "synopsis"
  );

  const toggle = (panel: "synopsis" | "bio") =>
    setOpenPanel(openPanel === panel ? null : panel);

  return (
    <section className="my-16">
      <div
        className="
          grid grid-cols-1 
          lg:[grid-template-columns:30%_70%]
          gap-8
        "
      >
        <div className="relative overflow-hidden rounded-xl h-[500px] w-full">
            
          <Image
            src={`/images/${directorImage}.png`}
            alt={directorName}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#9E005F] to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[20px] font-satoshi uppercase tracking-wider opacity-80">
              Director
            </p>
            <h3 className="mt-1 text-4xl font-fraunces font-light">{directorName}</h3> 
          </div>
          {/* <hr className="border-2 border-gray-400 w-full"/> */}
        </div>
        

        <div className="space-y-4">
          {/* Synopsis */}
          <div className="overflow-hidden">
            <button
              onClick={() => toggle("synopsis")}
              className="w-full flex justify-between items-center py-3"
            >
              <span className="font-satoshi text-[24px] font-medium text-[#9E005F]" style={{ color: openPanel === 'synopsis' ? "#9E005F" : "#786C6C" }}>
                Synopsis
              </span>
              {openPanel === "synopsis" ? (
                <HiChevronUp className="h-12 w-6 text-pink-500" />
              ) : (
                <HiChevronDown className="h-6 w-6 text-[#786C6C]" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {openPanel === "synopsis" && (
                <motion.div
                  key="synopsis"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=" pt-2 pb-4 text-[#786C6C] font-satoshi text-base leading-loose"
                >
                  {synopsis}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <hr className="border-1 border-gray-400 w-full"/>

          {/* About Director */}
          <div className="overflow-hidden">
            <button
              onClick={() => toggle("bio")}
              className="w-full flex justify-between items-center py-3"
            >
              <span className="font-satoshi text-[24px] font-medium text-[#9E005F]" style={{ color: openPanel === 'bio' ? "#9E005F" : "#786C6C" }}>
                About Director
              </span>
              {openPanel === "bio" ? (
                <HiChevronUp className="h-6 w-6 text-pink-500" />
              ) : (
                <HiChevronDown className="h-6 w-6 text-[#786C6C]" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {openPanel === "bio" && (
                <motion.div
                  key="bio"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pt-2 pb-4 text-[#786C6C] text-base leading-loose font-satoshi"
                >
                  {bio}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
