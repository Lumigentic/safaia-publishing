'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="pt-32 pb-20">
      <div className="container">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display font-normal mb-6">Kontakt</h1>
          <p className="text-editorial text-gray-600">
            Masz pytania? Chcesz nawiązać współpracę? A może szukasz konkretnej książki?
            Napisz do nas — odpowiemy tak szybko, jak to możliwe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl font-medium text-safaia-700 mb-8">
              Dane kontaktowe
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">EMAIL</h3>
                <a href="mailto:kontakt@safaia.pl" className="text-lg text-safaia-700 hover:text-safaia-800 transition-colors">
                  kontakt@safaia.pl
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">TELEFON</h3>
                <a href="tel:+48123456789" className="text-lg text-safaia-700 hover:text-safaia-800 transition-colors">
                  +48 123 456 789
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">ADRES</h3>
                <address className="text-gray-700 not-italic">
                  Wydawnictwo Safaia<br />
                  ul. Przykładowa 12/34<br />
                  00-000 Warszawa<br />
                  Polska
                </address>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">GODZINY PRACY</h3>
                <p className="text-gray-700">
                  Poniedziałek - Piątek: 9:00 - 17:00<br />
                  Weekend: Zamknięte
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-medium text-gray-500 mb-4">SOCIAL MEDIA</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-safaia-700 hover:text-safaia-800 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-safaia-700 hover:text-safaia-800 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-safaia-700 hover:text-safaia-800 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl font-medium text-safaia-700 mb-8">
              Wyślij wiadomość
            </h2>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
                <h3 className="font-display text-xl font-medium mb-2">Dziękujemy!</h3>
                <p>Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Temat *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="pytanie-o-ksiazke">Pytanie o książkę</option>
                    <option value="zamowienie">Zamówienie</option>
                    <option value="wspolpraca">Współpraca</option>
                    <option value="media">Media i PR</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                    placeholder="Twoja wiadomość..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 bg-safaia-700 text-white rounded hover:bg-safaia-800 transition-colors text-sm tracking-wide font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'WYSYŁANIE...' : 'WYŚLIJ WIADOMOŚĆ'}
                  </button>
                </div>

                <p className="text-sm text-gray-500">
                  * Pola wymagane
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24">
          <h2 className="font-display text-3xl font-medium text-safaia-700 mb-8 text-center">
            Najczęściej zadawane pytania
          </h2>

          <div className="space-y-6">
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="font-display text-lg font-medium text-safaia-700 mb-3">
                Czy mogę zamówić książkę bezpośrednio od was?
              </h3>
              <p className="text-gray-600">
                Tak! Napisz do nas na kontakt@safaia.pl z tytułem książki, a my prześlemy szczegóły zamówienia.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <h3 className="font-display text-lg font-medium text-safaia-700 mb-3">
                Czy prowadzicie hurtową sprzedaż dla księgarni?
              </h3>
              <p className="text-gray-600">
                Tak. Prosimy o kontakt mailowy z danymi księgarni, a my przygotujemy ofertę hurtową.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <h3 className="font-display text-lg font-medium text-safaia-700 mb-3">
                Jak mogę zgłosić propozycję książki?
              </h3>
              <p className="text-gray-600">
                Odwiedź stronę{' '}
                <a href="/dla-autorow" className="text-safaia-700 hover:text-safaia-800 underline">
                  Dla autorów
                </a>
                {' '}i wypełnij formularz zgłoszeniowy.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <h3 className="font-display text-lg font-medium text-safaia-700 mb-3">
                Czy organizujecie wydarzenia promocyjne?
              </h3>
              <p className="text-gray-600">
                Tak! Regularnie organizujemy spotkania autorskie, warsztaty i wystawy. Śledź nasze social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
