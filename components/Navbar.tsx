"use client";

import { useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/pvm-logo.png"
            alt="PVM Sports Hub Logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-base sm:text-lg font-bold text-gray-900">
            PVM Sports Hub
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-sky-500 transition">Home</Link>
          <Link href="/shop" className="hover:text-sky-500 transition">Shop</Link>
          <Link href="/about" className="hover:text-sky-500 transition">About</Link>
        </nav>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-5 h-5 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-4 flex flex-col gap-3 text-sm text-gray-700">
            <Link onClick={() => setOpen(false)} href="/" className="hover:text-sky-500">Home</Link>
            <Link onClick={() => setOpen(false)} href="/shop" className="hover:text-sky-500">Shop</Link>
            <Link onClick={() => setOpen(false)} href="/about" className="hover:text-sky-500">About</Link>
          </nav>
        </div>
      )}
    </header>
  );
}