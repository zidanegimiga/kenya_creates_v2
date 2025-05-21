// src/app/components/CollaborateSection.tsx
'use client'

import Image from 'next/image'
import { useState, useEffect, FormEvent } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
}

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function CollaborateSection() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [showToast, setShowToast] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // TODO: send to API…
    setName('')
    setContact('')
    setMessage('')
    setShowToast(true)
  }

  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 2500)
      return () => clearTimeout(t)
    }
  }, [showToast])

  return (
    <motion.section
      className="bg-black text-white py-16 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* IMAGE - hidden on mobile */}
        <motion.div
          className="hidden md:block md:w-1/2 relative h-64 md:h-auto"
          variants={fadeInLeft}
        >
          <Image
            src="/images/form.png"
            alt="Collaboration"
            fill
            className="object-cover object-center rounded-l-xl"
            priority
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          className="w-full md:w-1/2 px-6 md:px-12 flex items-center"
          variants={fadeInRight}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6"
            noValidate
          >
            <motion.h2
              className="text-3xl font-fraunces mb-4"
              custom={0}
              variants={fieldVariants}
            >
              To get in touch with us, fill in the form below:
            </motion.h2>

            {[
              { label: 'Name',        value: name,    onChange: setName,    type: 'text' },
              { label: 'Email or Phone', value: contact, onChange: setContact, type: 'text' },
            ].map((fld, i) => (
              <motion.div key={fld.label} custom={i + 1} variants={fieldVariants}>
                <label className="block mb-2 font-satoshi text-base">
                  {fld.label}
                </label>
                <input
                  type={fld.type}
                  className="w-full bg-[#15000C] rounded px-4 py-3 text-white focus:outline-none"
                  value={fld.value}
                  onChange={e => fld.onChange(e.target.value)}
                  required
                />
              </motion.div>
            ))}

            <motion.div custom={3} variants={fieldVariants}>
              <label className="block mb-2 font-satoshi text-base">
                Short message on how we can collaborate
              </label>
              <textarea
                className="w-full bg-[#15000C] rounded px-4 py-3 text-white h-32 resize-none focus:outline-none"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </motion.div>

            <motion.div custom={4} variants={fieldVariants}>
              <button
                type="submit"
                className="
                  w-full bg-[#C80096]
                  rounded-full py-3
                  font-satoshi text-lg
                  hover:bg-pink-600
                  transition
                  duration-200
                "
              >
                SUBMIT
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>

      {/* TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="
              fixed bottom-6 right-6
              bg-white text-black
              px-6 py-3 rounded-lg shadow-2xl
              font-satoshi
            "
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            🎉 Message sent!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
