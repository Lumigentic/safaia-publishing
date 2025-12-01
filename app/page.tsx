import Link from 'next/link';
import BookCard from '@/components/BookCard';
import { books } from '@/data/books';

export default function Home() {
  const featuredBooks = books.filter(book => book.featured);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display font-normal mb-6">
              Wydawnictwo Safaia
            </h1>
            <p className="text-editorial text-gray-600 mb-8">
              Tworzymy książki, które inspirują do odkrywania świata. Łączymy piękno z wiedzą, tradycję ze współczesnością, prostotę z głębią.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/katalog"
                className="px-8 py-3 bg-safaia-700 text-white rounded hover:bg-safaia-800 transition-colors text-sm tracking-wide font-medium"
              >
                PRZEGLĄDAJ KATALOG
              </Link>
              <Link
                href="/o-nas"
                className="px-8 py-3 border border-safaia-700 text-safaia-700 rounded hover:bg-safaia-50 transition-colors text-sm tracking-wide font-medium"
              >
                POZNAJ NAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O nas Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-medium mb-8 text-center">O nas</h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                Wydawnictwo Safaia powstało z fascynacji pięknem świata — sztuki, rzemiosła, historii i kultury.
                Wierzymy, że książka to nie tylko zbiór słów, ale forma sztuki, która łączy treść z formą,
                wiedzę z estetyką, myśl z doświadczeniem zmysłowym.
              </p>
              <p>
                Nasze publikacje to starannie wyselekcjonowane tytuły, które zapraszają do refleksji,
                uczą cierpliwości i doceniania detalu. Od historii japońskiej ikebany, przez tradycyjny polski haft,
                po fotografie zapomnianych miejsc — każda książka to zaproszenie w podróż.
              </p>
              <p>
                Inspirujemy się estetyką minimalizmu, filozofią slow living i przekonaniem, że prawdziwe piękno
                kryje się w prostocie. Nasze książki powstają z szacunkiem dla czytelnika, autora i samej sztuki wydawniczej.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-elegant"></div>

      {/* Wyróżnione tytuły */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display font-medium mb-4">Wyróżnione tytuły</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Odkryj naszą kolekcję starannie wyselekcjonowanych publikacji, które łączą wiedzę z estetyką.
            </p>
          </div>

          <div className="gallery-grid">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/katalog"
              className="inline-block px-8 py-3 border border-safaia-700 text-safaia-700 rounded hover:bg-safaia-50 transition-colors text-sm tracking-wide font-medium"
            >
              ZOBACZ WSZYSTKIE TYTUŁY
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-elegant"></div>

      {/* Wartości */}
      <section className="section-padding">
        <div className="container">
          <h2 className="font-display font-medium mb-12 text-center">Nasze wartości</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            <div>
              <h3 className="font-display text-xl font-medium text-safaia-700 mb-3">Otwartość</h3>
              <p className="text-gray-600 leading-relaxed">
                Wierzymy w moc różnorodności perspektyw. Publikujemy książki, które otwierają umysły,
                zachęcają do dialogu i pokazują świat w całym jego bogactwie kulturowym.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-safaia-700 mb-3">Wiedza</h3>
              <p className="text-gray-600 leading-relaxed">
                Każda nasza publikacja to starannie przygotowana podróż przez wiedzę — historyczną,
                kulturową, artystyczną. Dbamy o rzetelność, głębię i kontekst.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-safaia-700 mb-3">Ciekawość świata</h3>
              <p className="text-gray-600 leading-relaxed">
                Inspirują nas ludzie, miejsca i zjawiska z całego świata. Od tradycyjnych rzemiosł
                po współczesną sztukę — pokazujemy piękno w jego najróżniejszych formach.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-safaia-700 mb-3">Piękno w prostocie</h3>
              <p className="text-gray-600 leading-relaxed">
                Wierzymy, że prawdziwa elegancja kryje się w prostocie. Nasze książki są minimalistyczne
                w formie, ale bogate w treść — każdy element ma swoje znaczenie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-elegant"></div>

      {/* Dla autorów CTA */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-medium mb-6">Dla autorów</h2>
            <p className="text-editorial text-gray-600 mb-8">
              Masz pomysł na książkę o sztuce, kulturze, rzemiosle lub historii?
              Szukamy autorów, którzy jak my, wierzą w moc dobrego storytellingu i piękna edytorskiego.
            </p>
            <p className="text-gray-600 mb-8">
              Oferujemy profesjonalną redakcję, staranną korektę, przemyślany projekt graficzny
              i wsparcie na każdym etapie tworzenia książki.
            </p>
            <Link
              href="/dla-autorow"
              className="inline-block px-8 py-3 bg-safaia-700 text-white rounded hover:bg-safaia-800 transition-colors text-sm tracking-wide font-medium"
            >
              WYŚLIJ PROPOZYCJĘ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
