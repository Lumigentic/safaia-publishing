'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Safaia Publishing House"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-display text-safaia-700 group-hover:text-safaia-600 transition-colors" style={{ fontWeight: 400, letterSpacing: '-0.025em' }}>
              Safaia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/o-nas" className="text-sm tracking-wide text-charcoal hover:text-safaia-700 transition-colors">
              O NAS
            </Link>
            <Link href="/katalog" className="text-sm tracking-wide text-charcoal hover:text-safaia-700 transition-colors">
              KATALOG
            </Link>
            <Link href="/dla-autorow" className="text-sm tracking-wide text-charcoal hover:text-safaia-700 transition-colors">
              DLA AUTORÓW
            </Link>
            <Link href="/kontakt" className="text-sm tracking-wide text-charcoal hover:text-safaia-700 transition-colors">
              KONTAKT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/o-nas" className="text-sm tracking-wide text-charcoal hover:text-safaia-700 transition-colors" onClick={() => setIsOpen(false)}>
                O NAS
              </Link>
              <Link href="/katalog" className="text-sm tracking-wide text-charcoal hover:text-safaia-700 transition-colors" onClick={() => setIsOpen(false)}>
                KATALOG
              </Link>
              <Link href="/dla-autorow" className="text-sm tracking-wide text-charcoal hover:text-safaia-700 transition-colors" onClick={() => setIsOpen(false)}>
                DLA AUTORÓW
              </Link>
              <Link href="/kontakt" className="text-sm tracking-wide text-charcoal hover:text-safaia-700 transition-colors" onClick={() => setIsOpen(false)}>
                KONTAKT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
