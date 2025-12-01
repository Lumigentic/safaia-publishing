'use client';

import { useState } from 'react';
import BookCard from '@/components/BookCard';
import { books, categories } from '@/data/books';

export default function Katalog() {
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');

  const filteredBooks = selectedCategory === 'Wszystkie'
    ? books
    : books.filter(book => book.category === selectedCategory);

  return (
    <main className="pt-32 pb-20">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-normal mb-4">Katalog książek</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odkryj naszą kolekcję publikacji o sztuce, kulturze, rzemiosłach i historii.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide transition-colors ${
                selectedCategory === category
                  ? 'bg-safaia-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="gallery-grid">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">Brak książek w tej kategorii.</p>
          </div>
        )}
      </div>
    </main>
  );
}
