// src/app/components/FooterSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

export default function Footer() {
  return (
<footer className="relative w-full text-white">
      {/* Background + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative px-4 md:px-12 sm:px-4 pt-48 pb-12 lg:px-12 space-y-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-between md:items-center lg:items-center sm:justify-start  ">
          <Image
            src="/images/white_logo.png"
            alt="Kenya Creates"
            width={120}
            height={48}
            priority
          />
          <div className="mt-0 md:mt-0 flex md:flex-row items-center space-x-4 space-y-4 text-sm md:text-[20px] font-satoshi">
            <span className="text-[20px]">Brought to you by:</span>
            <Image
              src="/images/docuboxLogo.png"
              alt="Docubox"
              width={90}
              height={24}
              priority
            />
            <Image
              src="/images/IRIS-LOGO.png"
              alt="IRIS"
              width={90}
              height={24}
              priority
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center space-y-4 md:space-y-0">
          <nav className="flex flex-col md:flex-row w-full  items-start md:items-center space-y-4 md:space-y-3 md:space-x-6 text-[22px] mb-6">
             {/* */}
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about-us" className="hover:underline">Our Journey</Link>
            <Link href="/about-us" className="hover:underline">About Us</Link>
            <Link href="/about-us#collaborate" className="font-semibold hover:underline uppercase">
              Join the Movement
            </Link>
          </nav>
          <div className="flex items-center space-x-4 text-[40px] w-full md:justify-end">
            <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="hover:text-gray-300">
              <FaYoutube />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="X" className="hover:text-gray-300">
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white border" />

        {/* Row 3 */}
        <div className="md:items-center flex md:text-center text-left flex-col md:flex-row justify-start md:justify-between text-[18px] space-y-2 md:space-y-0">
          <p>Copyright © 2025 Docubox. All rights reserved</p>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
