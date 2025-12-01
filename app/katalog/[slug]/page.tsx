import { notFound } from 'next/navigation';
import Link from 'next/link';
import { books } from '@/data/books';
import type { Metadata } from 'next';

interface BookPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find(b => b.id === slug);

  if (!book) {
    return {
      title: 'Książka nie znaleziona',
    };
  }

  return {
    title: `${book.title} — ${book.author} | Wydawnictwo Safaia`,
    description: book.description,
    openGraph: {
      title: `${book.title} — ${book.author}`,
      description: book.description,
      type: 'book',
    },
  };
}

export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.id,
  }));
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = books.find(b => b.id === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="pt-32 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-safaia-700 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/katalog" className="hover:text-safaia-700 transition-colors">
            Katalog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{book.title}</span>
        </nav>

        {/* Book Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Book Cover */}
          <div>
            <div className={`aspect-[3/4] rounded-sm bg-gradient-to-br ${book.coverGradient} shadow-2xl`}>
              <div className="w-full h-full flex items-center justify-center p-12">
                <div className="text-center">
                  <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                    {book.title}
                  </h1>
                  <p className="text-white/90 text-lg tracking-wider">
                    {book.author}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-safaia-100 text-safaia-700 rounded-full text-sm tracking-wide mb-4">
                {book.category}
              </span>
              <h1 className="font-display text-4xl font-medium text-safaia-700 mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{book.author}</p>
            </div>

            <div className="space-y-4 mb-8 text-gray-600">
              <div className="flex gap-8">
                <div>
                  <span className="text-sm text-gray-500">ISBN</span>
                  <p className="font-medium">{book.isbn}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Rok wydania</span>
                  <p className="font-medium">{book.year}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Stron</span>
                  <p className="font-medium">{book.pages}</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg mb-8">
              <p className="text-editorial text-gray-700 leading-relaxed">
                {book.description}
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-3 bg-safaia-700 text-white rounded hover:bg-safaia-800 transition-colors text-sm tracking-wide font-medium">
                KUP KSIĄŻKĘ
              </button>
              <Link
                href="/kontakt"
                className="px-8 py-3 border border-safaia-700 text-safaia-700 rounded hover:bg-safaia-50 transition-colors text-sm tracking-wide font-medium"
              >
                ZAPYTAJ O KSIĄŻKĘ
              </Link>
            </div>
          </div>
        </div>

        <div className="divider-elegant"></div>

        {/* Extended Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-2xl font-medium text-safaia-700 mb-6">O książce</h2>
          <p className="text-editorial text-gray-700 leading-relaxed mb-8">
            {book.excerpt}
          </p>
        </div>

        <div className="divider-elegant"></div>

        {/* Author Bio */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-medium text-safaia-700 mb-6">O autorze</h2>
          <p className="text-editorial text-gray-700 leading-relaxed">
            {book.authorBio}
          </p>
        </div>

        {/* Back to Catalog */}
        <div className="text-center mt-16">
          <Link
            href="/katalog"
            className="inline-block px-8 py-3 border border-safaia-700 text-safaia-700 rounded hover:bg-safaia-50 transition-colors text-sm tracking-wide font-medium"
          >
            WRÓĆ DO KATALOGU
          </Link>
        </div>
      </div>
    </main>
  );
}
