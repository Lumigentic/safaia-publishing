'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-safaia-700 text-white">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-display font-medium mb-4 text-white">Newsletter</h3>
            <p className="text-safaia-100 mb-6 text-sm leading-relaxed">
              Bądź na bieżąco z nowościami wydawniczymi, wydarzeniami literackimi i ekskluzywnimi ofertami.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres e-mail"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-safaia-200 focus:outline-none focus:border-white/40 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-safaia-700 rounded font-medium hover:bg-safaia-50 transition-colors"
              >
                Zapisz się
              </button>
            </form>
            {status === 'success' && (
              <p className="text-sm text-safaia-100 mt-2">Dziękujemy za zapis!</p>
            )}
          </div>

          {/* Links & Social */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm tracking-wide font-medium mb-4 text-white">NAWIGACJA</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/o-nas" className="text-safaia-100 hover:text-white transition-colors">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link href="/katalog" className="text-safaia-100 hover:text-white transition-colors">
                    Katalog
                  </Link>
                </li>
                <li>
                  <Link href="/dla-autorow" className="text-safaia-100 hover:text-white transition-colors">
                    Dla autorów
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-safaia-100 hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-wide font-medium mb-4 text-white">SOCIAL MEDIA</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-safaia-100 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-safaia-100 hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-safaia-100 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-safaia-100 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider-elegant opacity-20"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-safaia-100">
            © {new Date().getFullYear()} Wydawnictwo Safaia. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm text-safaia-100">
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-white transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
