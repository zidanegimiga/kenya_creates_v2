// src/app/components/FooterSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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
      <div className="relative px-4 md:px-12 sm:px-4 pt-48 pb-12 lg:px-12 space-y-8 w-full">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row w-full justify-between items-start space-y-4 sm:space-y-0">
          <Image
            src="/images/white_logo.png"
            alt="Kenya Creates"
            width={100}
            height={40}
            priority
            className="w-[clamp(80px,15vw,100px)] h-auto"
          />

          <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 text-[clamp(12px,2.5vw,14px)] md:text-[clamp(16px,2.5vw,14px)] font-satoshi">
            <div className="flex items-center h-full align-middle">
              Brought to you by:
            </div>
            <Image
              src="/images/docuboxLogo.png"
              alt="Docubox"
              width={70}
              height={18}
              priority
              className="w-[clamp(60px,12vw,70px)] h-auto"
            />
            <Image
              src="/images/IRIS-LOGO.png"
              alt="IRIS"
              width={70}
              height={18}
              priority
              className="w-[clamp(60px,12vw,70px)] h-auto"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row w-full items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 text-[clamp(12px,2.5vw,14px)] md:text-[clamp(14px,2.5vw,14px)] mb-6">
            <Link href="/" className="hover:underline inline-block">
              Home
            </Link>
            <Link href="/about-us" className="hover:underline inline-block">
              Our Journey
            </Link>
            <Link href="/about-us" className="hover:underline inline-block">
              About Us
            </Link>
            <Link
              href="/about-us#collaborate"
              className="uppercase inline-block font-semibold hover:underline"
            >
              Join the Movement
            </Link>
          </div>

          <div className="flex items-start space-x-4 text-[clamp(20px,3vw,24px)] sm:text-[clamp(24px,3vw,28px)] w-full sm:justify-end">
            <Link
              href="https://youtube.com/@docubox-eadff?si=r9qq07I1akrRwLLH"
              target="_blank"
              aria-label="YouTube"
              className="hover:text-gray-300"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://www.facebook.com/share/197iLUFzn7/?mibextid=wwXIfr"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-gray-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/mydocubox?igsh=MWF0NjVvcXIwNDBxeg=="
              target="_blank"
              aria-label="Instagram"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://x.com/docuboxfilmfund?s=21"
              target="_blank"
              aria-label="X"
              className="hover:text-gray-300"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white border" />

        {/* Row 3 */}
        <div className="md:items-center flex md:text-center text-left flex-col md:flex-row justify-start md:justify-between text-[12px] space-y-2 md:space-y-0">
          <p>Copyright © 2025 Docubox. All rights reserved</p>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
