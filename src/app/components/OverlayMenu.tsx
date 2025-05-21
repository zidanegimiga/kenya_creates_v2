// src/components/OverlayMenu.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface OverlayMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function OverlayMenu({ open, onClose }: OverlayMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay-desktop"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="hidden md:flex fixed inset-0 z-50 hero-bg-2 text-white h-3/4"
          >
            <div className="h-full flex items-center w-1/2">
              <div className="flex-none w-1/6 h-full bg-overlay-pattern" />

              <div className="flex-auto h-full flex flex-col items-center justify-center px-4">
                <div className="relative w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src="/images/people_circle.png"
                    alt="Kenya Creates"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-6 max-w-xs text-lg leading-snug text-center font-satoshi">
                  Kenya Creates is reshaping how Kenyan youth see themselves and
                  their futures through powerful storytelling. Join the
                  conversation online using #Kenyacreatesfilms,
                  #reelstoriesofself, and #SRHRJawareness.
                </p>
              </div>

              <div className="flex-none w-1/6 h-full bg-overlay-pattern" />
            </div>

            <div className="flex flex-col items-end justify-between w-1/2 h-full py-4 pb-16 px-4">
              {/* Close/Menu Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={onClose}
                  className="flex items-center justify-center space-x-3 px-4 py-2"
                  aria-label="Close menu"
                >
                  <div className="text-[24px] font-satoshi mb-6">Menu</div>
                  <div className="relative h-6 w-6">
                    <span className="absolute inset-0 block h-[2px] w-full bg-white rotate-45" />
                    <span className="absolute inset-0 block h-[2px] w-full bg-white -rotate-45" />
                  </div>
                </button>
              </div>

              {/* Menu Items */}
              <div className="mt-6 flex flex-1 flex-col items-end justify-end space-y-10 text-4xl pr-8 pb-4 font-satoshi">
                <Link href="/" onClick={onClose} className="hover:underline">
                  HOME
                </Link>
                <Link
                  href="/our-journey"
                  onClick={onClose}
                  className="hover:underline"
                >
                  OUR JOURNEY
                </Link>
                <Link
                  href="/about-us"
                  onClick={onClose}
                  className="hover:underline"
                >
                  ABOUT US
                </Link>
              </div>

              {/* Join the Movement */}
              <div className="mt-6 flex flex-1 flex-col items-end justify-center pr-8">
                <Link
                  href="/about-us#form"
                  onClick={onClose}
                  className="font-satoshi block px-8 py-4 text-4xl text-white transition-colors duration-200 hover:bg-white hover:text-[#3b0055]"
                >
                  JOIN THE MOVEMENT
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── Mobile ── */}
          <motion.div
            key="overlay-mobile"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex md:hidden fixed inset-0 z-50 hero-bg-2 text-white"
          >
            {/* left pattern strip */}
            <div className="h-full w-1/6 bg-right-pattern bg-no-repeat bg-cover bg-center" />

            {/* content */}
            <div className="flex-1 flex flex-col">
              {/* close/menu */}
              <div className="flex justify-end p-4">
                <button
                  onClick={onClose}
                  className="flex items-center space-x-2 p-2"
                  aria-label="Close menu"
                >
                  <div className="text-[16px] font-satoshi mb-3">Menu</div>
                  <div className="relative h-3 w-3">
                    <span className="absolute inset-0 block h-[2px] w-full bg-white rotate-45" />
                    <span className="absolute inset-0 block h-[2px] w-full bg-white -rotate-45" />
                  </div>
                </button>
              </div>

              {/* links */}
              <div className="flex flex-col items-end space-y-6 px-4 font-satoshi text-2xl">
                <Link href="/" onClick={onClose} className="hover:underline">
                  HOME
                </Link>
                <Link
                  href="/our-journey"
                  onClick={onClose}
                  className="hover:underline"
                >
                  OUR JOURNEY
                </Link>
                <Link
                  href="/about-us"
                  onClick={onClose}
                  className="hover:underline"
                >
                  ABOUT US
                </Link>
              </div>

              {/* image + arrow */}
              <div className="flex-auto flex items-center justify-center relative my-4">
                <div className="w-48 h-48 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/people_circle.png"
                    alt="Kenya Creates"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-16 left-10 w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/images/overlay_arrow.svg"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* join button */}
              <div className="px-4 pb-8">
                <Link
                  href="/about-us#form"
                  onClick={onClose}
                  className="block w-full text-center font-satoshi px-6 py-3 text-2xl transition-colors duration-200 hover:bg-white hover:text-[#3b0055]"
                >
                  JOIN THE MOVEMENT
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
