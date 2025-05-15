"use client";

import { useState } from "react";
import Image from "next/image";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-transparent">
        <Image
          src="/images/white_logo.png"
          alt="Kenya Creates Logo"
          width={100}
          height={32}
          className="md:w-[120px] md:h-[40px]"
        />

        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center space-x-4"
          aria-label="Open menu"
        >
          <span className="text-base md:text-xl font-satoshi">Menu</span>
          <div className="flex h-4 w-6 flex-col justify-between">
            <span className="h-[2px] bg-white w-full" />
            <span className="h-[2px] bg-white w-full" />
          </div>
        </button>
      </header>

      <OverlayMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
