'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

export default function DlaAutorow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookTitle: '',
    category: '',
    description: '',
    manuscript: '',
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
        phone: '',
        bookTitle: '',
        category: '',
        description: '',
        manuscript: '',
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
          <h1 className="font-display font-normal mb-6">Dla autorów</h1>
          <p className="text-editorial text-gray-600">
            Szukamy autorów, którzy mają coś ważnego do powiedzenia o sztuce, kulturze,
            rzemiosłach i historii. Jeśli Twój projekt pasuje do naszej filozofii — daj nam znać.
          </p>
        </div>

        {/* Co oferujemy */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-medium text-safaia-700 mb-8 text-center">
            Co oferujemy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-lg">
              <h3 className="font-display text-xl font-medium text-safaia-700 mb-4">
                Profesjonalna redakcja
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Współpracujemy z doświadczonymi redaktorami, którzy pomogą Ci dopracować tekst
                pod kątem merytorycznym, językowym i strukturalnym.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg">
              <h3 className="font-display text-xl font-medium text-safaia-700 mb-4">
                Przemyślany design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Każda książka to osobny projekt graficzny. Dobieramy typografię, layout i oprawę
                tak, by forma wspierała treść.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg">
              <h3 className="font-display text-xl font-medium text-safaia-700 mb-4">
                Jakość druku
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pracujemy z najlepszymi drukarniami. Wybieramy wysokiej jakości papier, druk offsetowy
                i trwałe oprawy.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg">
              <h3 className="font-display text-xl font-medium text-safaia-700 mb-4">
                Promocja i dystrybucja
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dbamy o to, by Twoja książka dotarła do czytelników — od social mediów,
                przez księgarnie, po wydarzenia promocyjne.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* Czego szukamy */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-medium text-safaia-700 mb-8 text-center">
            Czego szukamy
          </h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              Interesują nas projekty z dziedziny sztuki, designu, fotografii, rzemiosła, mody
              i historii kultury. Szukamy autorów, którzy:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Mają oryginalne, dobrze przemyślane pomysły na książkę</li>
              <li>Znają temat i potrafią o nim pisać przystępnie i interesująco</li>
              <li>Doceniają formę — rozumieją, że książka to nie tylko tekst, ale obiekt</li>
              <li>Szanują czas i proces — rozumieją, że dobra książka wymaga pracy</li>
              <li>Dzielą nasze wartości: ciekawość świata, otwartość, piękno w prostocie</li>
            </ul>
            <p>
              Nie ważne, czy jesteś doświadczonym autorem, czy piszesz swoją pierwszą książkę.
              Jeśli masz dobry pomysł i pasję — chcemy Cię poznać.
            </p>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* Formularz */}
        <section className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-safaia-700 mb-8 text-center">
            Wyślij propozycję
          </h2>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
              <h3 className="font-display text-xl font-medium mb-2">Dziękujemy za zgłoszenie!</h3>
              <p>Skontaktujemy się z Tobą w ciągu 2 tygodni.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Tytuł roboczy książki *
                </label>
                <input
                  type="text"
                  id="bookTitle"
                  name="bookTitle"
                  value={formData.bookTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Kategoria *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                >
                  <option value="">Wybierz kategorię</option>
                  <option value="Sztuka">Sztuka</option>
                  <option value="Moda">Moda</option>
                  <option value="Fotografia">Fotografia</option>
                  <option value="Sztuka ludowa">Sztuka ludowa</option>
                  <option value="Historia kulinariów">Historia kulinariów</option>
                  <option value="Design">Design</option>
                  <option value="Rzemiosło">Rzemiosło</option>
                  <option value="Inne">Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Opis projektu (2-3 akapity) *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                  placeholder="Opisz pokrótce, o czym będzie książka, dla kogo, co ją wyróżnia..."
                />
              </div>

              <div>
                <label htmlFor="manuscript" className="block text-sm font-medium text-gray-700 mb-2">
                  Stan prac nad manuskryptem *
                </label>
                <select
                  id="manuscript"
                  name="manuscript"
                  value={formData.manuscript}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                >
                  <option value="">Wybierz...</option>
                  <option value="pomysł">Mam tylko pomysł</option>
                  <option value="w-trakcie">Piszę (30-70%)</option>
                  <option value="prawie-gotowe">Prawie gotowe (70%+)</option>
                  <option value="gotowe">Gotowy manuskrypt</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Dodatkowe informacje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-safaia-700 focus:border-transparent"
                  placeholder="Wszystko, co chcesz nam jeszcze powiedzieć..."
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-12 py-4 bg-safaia-700 text-white rounded hover:bg-safaia-800 transition-colors text-sm tracking-wide font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'WYSYŁANIE...' : 'WYŚLIJ PROPOZYCJĘ'}
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                * Pola wymagane. Odpowiemy w ciągu 2 tygodni.
              </p>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
