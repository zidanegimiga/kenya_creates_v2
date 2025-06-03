// src/app/components/HeroSection.tsx
"use client";

import Image from "next/image";
import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./HeroSection.module.scss";

const heading = "KENYA CREATES";

export default function HeroSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // split heading into letters
  const letters = useMemo(() => heading.split(""), []);

  // per-letter variants
  const letterVariants = {
    initial: { opacity: 0, y: -50, rotateX: 90 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-dvh w-full overflow-hidden bg-[#161220] text-white"
    >
      {/* background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero_background_image.png"
          alt="Kenya Creates"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center overflow-x-auto">
        {/* heading letters */}
        <motion.h1
          className="flex justify-center overflow-hidden"
          style={{ whiteSpace: "nowrap" }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="inline-block font-fraunces text-[clamp(2.5rem,8vw,3.5rem)] sm:text-[clamp(3rem,9vw,4rem)] md:text-[clamp(4rem,10vw,5rem)] lg:text-[clamp(5rem,12vw,6rem)] leading-none"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* subheading */}
        <motion.p
          initial={{ opacity: 0, y: 110, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 60, scale: 1 } : {}}
          transition={{ delay: 1.4, duration: 1.2, ease: "backOut" }}
          className="mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed font-satoshi text-white"
        >
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
