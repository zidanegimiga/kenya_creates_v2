"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import OverlayMenu from "./OverlayMenu";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#161220] text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
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

      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white">
        <div>
          <Image
            src="/images/white_logo.png"
            alt="Kenya Creates Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-satoshi">Menu</span>
          <button
            onClick={() => {setMenuOpen(true); console.log("Menu Opened")}}
            className="h-4 w-6 flex flex-col justify-between items-center"
          >
            <span className="h-[2px] w-full bg-white" />
            <span className="h-[2px] w-full bg-white" />
          </button>
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.8, ease: "easeOut" }}
          className="font-fraunces mt-32 font-normal leading-[1.2] text-white md:text-[200px] lg:text-[300px] xl:text-[180px]"
        >
          KENYA CREATES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl text-[1.375rem] md:text-[1.75rem] leading-[2.4rem] md:leading-[2.75rem] px-6 text-white text-center"
        >
          <span className="font-pangaia italic">Kenya Creates</span>{" "}
          <span className="font-satoshi">
            is a storytelling initiative dedicated to reimagining how Kenyan
            youth talk about their bodies and health.
          </span>
        </motion.p>
      </div>

      <OverlayMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
