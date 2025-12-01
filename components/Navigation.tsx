'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
              className="md:hidden text-charcoal z-[60]"
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
        </div>
      </nav>

      {/* Mobile Menu - Premium Full Screen */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-safaia-700 z-[55] overflow-y-auto">
          <div className="container-wide py-8">
            <div className="grid grid-cols-1 gap-4">
              <Link
                href="/o-nas"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-white" style={{ fontWeight: 400 }}>O nas</span>
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm mt-2">Poznaj historię wydawnictwa</p>
              </Link>

              <Link
                href="/katalog"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-white" style={{ fontWeight: 400 }}>Katalog</span>
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm mt-2">Przeglądaj nasze książki</p>
              </Link>

              <Link
                href="/dla-autorow"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-white" style={{ fontWeight: 400 }}>Dla autorów</span>
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm mt-2">Zgłoś swoją propozycję</p>
              </Link>

              <Link
                href="/kontakt"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-white" style={{ fontWeight: 400 }}>Kontakt</span>
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm mt-2">Skontaktuj się z nami</p>
              </Link>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <p className="text-white/70 text-sm mb-4">Śledź nas</p>
                <div className="flex justify-center gap-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm">
                    Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm">
                    Facebook
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
