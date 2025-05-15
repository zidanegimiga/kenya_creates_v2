"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
            className="hidden md:flex fixed inset-0 z-50 flex-row hero-bg-2 text-white h-3/4"
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
                <a href="#home" onClick={onClose} className="hover:underline">
                  HOME
                </a>
                <a
                  href="#journey"
                  onClick={onClose}
                  className="hover:underline"
                >
                  OUR JOURNEY
                </a>
                <a href="#about" onClick={onClose} className="hover:underline">
                  ABOUT US
                </a>
              </div>

              {/* Join the Movement */}
              <div className="mt-6 flex flex-1 flex-col items-end justify-center pr-8">
                <a
                  href="#movement"
                  onClick={onClose}
                  className="font-satoshi block px-8 py-4 text-4xl text-white transition-colors duration-200 hover:bg-white hover:text-[#3b0055]"
                >
                  JOIN THE MOVEMENT
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Mobile Overlay ── */}
          <motion.div
            key="overlay-mobile"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex md:hidden fixed inset-0 z-50 hero-bg-2 text-white"
          >
            <div className="h-full w-1/6 bg-right-pattern bg-no-repeat bg-cover bg-center" />
            <div className="flex-1">
              <div className="flex flex-col items-end p-4">
                <button
                  onClick={onClose}
                  className="p-2 flex items-center justify-center space-x-2"
                  aria-label="Close menu"
                >
                  <div className="text-[16px] font-satoshi mb-3">Menu</div>
                  <div className="relative h-3 w-3">
                    <span className="absolute inset-0 block h-[2px] w-full bg-white rotate-45" />
                    <span className="absolute inset-0 block h-[2px] w-full bg-white -rotate-45" />
                  </div>
                </button>

                <div className="flex flex-col items-end justify-between">
                  <div className="mt-6 flex flex-1 flex-col items-end justify-end space-y-10 text-3xl pb-4 font-satoshi">
                    <a
                      href="#home"
                      onClick={onClose}
                      className="hover:underline"
                    >
                      HOME
                    </a>
                    <a
                      href="#journey"
                      onClick={onClose}
                      className="hover:underline"
                    >
                      OUR JOURNEY
                    </a>
                    <a
                      href="#about"
                      onClick={onClose}
                      className="hover:underline"
                    >
                      ABOUT US
                    </a>
                  </div>
                </div>

                <div className="flex-auto flex items-center justify-center w-full relative my-8">
                  <div className="w-72 h-72 rounded-full overflow-hidden relative">
                    <Image
                      src="/images/people_circle.png"
                      alt="Kenya Creates"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  
                  <div className="absolute -bottom-16 left-10">
                    <div className="w-[140px] h-[120px] rounded-full relative">
                      <Image
                        src="/images/overlay_arrow.svg"
                        alt="Kenya Creates"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>


                </div>



                <div className="flex items-center justify-center w-full mt-32">
                  <div className="px-4 pb-8">
                    <a
                      href="#movement"
                      onClick={onClose}
                      className="block w-full text-center font-satoshi px-6 py-3 text-4xl transition-colors duration-200 hover:bg-white hover:text-[#3b0055]"
                    >
                      JOIN THE MOVEMENT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
