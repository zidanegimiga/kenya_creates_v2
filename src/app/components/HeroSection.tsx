"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#161220] text-white">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute inset-0 z-10"
      >
        <Image
          src="/images/hero_background_image.png"
          alt="Kenya Creates"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <div
        className="relative z-20 flex h-full w-full flex-col items-center justify-between
                      px-4 sm:px-6 lg:px-8
                      text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.8, ease: "easeOut" }}
          className="mt-24 sm:mt-32 font-fraunces font-normal leading-[1.1] text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[10rem]"
        >
          KENYA CREATES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: -30 }}
          transition={{ delay: 2.4, duration: 1.6, ease: "easeOut" }}
          className="mb-8 sm:mb-10 max-w-xl sm:max-w-2xl text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] leading-snug sm:leading-snug md:leading-tight px-2 sm:px-4 md:px-6  text-white text-center">
          <span className="font-pangaia italic">Kenya Creates</span>{" "}
          <span className="font-satoshi">
            is a storytelling initiative dedicated to reimagining how Kenyan
            youth talk about their bodies and health.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
