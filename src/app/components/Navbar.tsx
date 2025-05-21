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

  const [menuOpen, setMenuOpen] = useState(false);
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

  // Always transparent on home/about/films; pale lilac on Journey
  const bgClass = isJourney ? 'bg-[#EEE2FF] shadow-md' : 'bg-transparent';
  // Menu text/icon color: lilac on Journey; white elsewhere
  const menuColor = isJourney ? 'text-[#9E005F]' : 'text-white';

  // Logo src for Journey vs. default
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
        {/* Left side: Logo or Back Arrow on film pages */}
        {isFilms ? (
          <button
            onClick={() => router.back()}
            className="p-2 bg-white rounded-full"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="w-6 h-6 text-[#C80096]" />
          </button>
        ) : (
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Kenya Creates Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        )}

        {/* Right side: Menu button (always present) */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`
            flex items-center space-x-2
            ${isFilms ? 'bg-white px-3 py-1 rounded' : ''}
            ${isFilms ? '' : menuColor}
          `}
          aria-label="Open menu"
        >
          <span
            className={`
              font-satoshi text-base md:text-xl
              ${isFilms ? 'text-[#C80096]' : menuColor}
            `}
          >
            Menu
          </span>
          <Bars3Icon
            className={`
              w-6 h-6
              ${isFilms ? 'text-[#C80096]' : menuColor}
            `}
          />
        </button>
      </header>

      <OverlayMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
