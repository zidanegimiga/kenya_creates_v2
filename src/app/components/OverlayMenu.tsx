'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface OverlayMenuProps {
  open: boolean
  onClose: () => void
}

export default function OverlayMenu({ open, onClose }: OverlayMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-20 flex flex-col bg-[#3b0055] text-white"
        >
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button onClick={onClose} className="text-2xl font-bold">
              ×
            </button>
          </div>

          {/* Menu Items */}
          <nav className="mt-12 flex flex-1 flex-col items-center justify-center space-y-8 text-2xl">
            <a href="#home" onClick={onClose}>HOME</a>
            <a href="#journey" onClick={onClose}>OUR JOURNEY</a>
            <a href="#about" onClick={onClose}>ABOUT US</a>
            <a href="#movement" onClick={onClose} className="mt-8 text-3xl font-semibold">
              JOIN THE MOVEMENT
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
