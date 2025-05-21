// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import OverlayMenu from './OverlayMenu';
import { ArrowLeftIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isHome    = pathname === '/';
  const isAbout   = pathname === '/about-us';
  const isJourney = pathname === '/our-journey';
  const isFilms   = /^\/films(\/|$)/.test(pathname);

  // overlay menu open state
  const [menuOpen, setMenuOpen] = useState(false);
  // hide/show on scroll
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let prevY = window.scrollY;
    const onScroll = () => {
      const currY = window.scrollY;
      if (currY < 50) {
        setShowHeader(true);
      } else if (currY > prevY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      prevY = currY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Background class per route
  let bgClass: string;
  if (isJourney) {
    bgClass = 'bg-[#EEE2FF] shadow-md';
  } else {
    // Home, About, Films → always transparent
    bgClass = 'bg-transparent';
  }

  // Menu text/icon color per route
  let menuColor: string;
  if (isJourney) {
    menuColor = 'text-[#9E005F]';
  } else {
    // Home, About, Films → white
    menuColor = 'text-white';
  }

  // Logo per route
  const logoSrc = isJourney
    ? '/images/kenya_creates_red_logo.png'
    : '/images/white_logo.png';

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-40
          flex items-center justify-between
          px-4 py-3 md:px-6 md:py-4
          transition-transform duration-300
          ${showHeader ? 'translate-y-0' : '-translate-y-full'}
          ${bgClass}
        `}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Kenya Creates Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {isFilms ? (
          // ─── Films pages: back arrow + primary links ───
          <nav className="flex items-center space-x-3">
            <button
              onClick={() => router.back()}
              className="p-2 bg-white rounded-full"
              aria-label="Go back"
            >
              <ArrowLeftIcon className="w-6 h-6 text-[#C80096]" />
            </button>
            <Link
              href="/"
              className="px-3 py-1 bg-white rounded font-satoshi text-[#C80096] hover:underline"
            >
              Home
            </Link>
            <Link
              href="/our-journey"
              className="px-3 py-1 bg-white rounded font-satoshi text-[#C80096] hover:underline"
            >
              Our Journey
            </Link>
            <Link
              href="/about-us"
              className="px-3 py-1 bg-white rounded font-satoshi text-[#C80096] hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/about-us#form"
              className="px-3 py-1 bg-white rounded font-satoshi text-[#C80096] hover:underline"
            >
              Join The Movement
            </Link>
          </nav>
        ) : (
          <button
            onClick={() => setMenuOpen(true)}
            className={`flex items-center space-x-2 ${menuColor}`}
            aria-label="Open menu"
          >
            <span className={`font-satoshi text-base md:text-xl ${menuColor}`}>
              Menu
            </span>
            <Bars3Icon className={`w-6 h-6 ${menuColor}`} />
          </button>
        )}
      </header>

      <OverlayMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
