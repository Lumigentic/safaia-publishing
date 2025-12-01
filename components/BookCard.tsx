import Link from 'next/link';
import { Book } from '@/data/books';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/katalog/${book.id}`} className="group block">
      <article className="h-full">
        {/* Book Cover */}
        <div className={`book-cover aspect-[3/4] rounded-sm mb-4 bg-gradient-to-br ${book.coverGradient}`}>
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3 leading-tight">
                {book.title}
              </h3>
              <p className="text-white/90 text-sm tracking-wider">
                {book.author}
              </p>
            </div>
          </div>
        </div>

        {/* Book Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs tracking-wide text-gray-500">
            <span>{book.category}</span>
            <span>{book.year}</span>
          </div>
          <h4 className="font-display text-lg font-medium text-safaia-700 group-hover:text-safaia-600 transition-colors">
            {book.title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-2">
            {book.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
