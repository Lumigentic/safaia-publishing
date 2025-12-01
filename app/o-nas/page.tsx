import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nas — Wydawnictwo Safaia',
  description: 'Poznaj historię, misję i zespół Wydawnictwa Safaia. Tworzymy książki, które łączą wiedzę z pięknem.',
};

export default function ONas() {
  return (
    <main className="pt-32 pb-20">
      <div className="container">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-display font-normal mb-6">O wydawnictwie</h1>
          <p className="text-editorial text-gray-600">
            Historia, misja i ludzie, którzy tworzą Wydawnictwo Safaia
          </p>
        </div>

        {/* Nasza historia */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl font-medium text-safaia-700 mb-8">Nasza historia</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              Wydawnictwo Safaia powstało w 2020 roku z pasji do pięknych książek i przekonania,
              że treść i forma są równie ważne. Nazwa „Safaia" pochodzi od szafiru — kamienia
              symbolizującego mądrość, prawdę i głębię. To wartości, które przyświecają nam każdego dnia.
            </p>
            <p>
              Zaczęliśmy od jednej książki o historii ceramiki japońskiej. Dziś publikujemy tytuły
              z różnych dziedzin — od sztuki i rzemiosła, przez fotografię, po historię kulinarną.
              Łączy je jedno: dbałość o detal, szacunek dla autora i czytelnika oraz przekonanie,
              że książka to nie tylko medium, ale forma sztuki.
            </p>
            <p>
              Każdą publikację traktujemy jak osobny projekt artystyczny. Pracujemy z najlepszymi
              redaktorami, korektorami, graficzkami i drukarniami. Wybieramy papier, krój pisma,
              oprawnę — wszystko po to, by książka była spójna, piękna i trwała.
            </p>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* Nasza misja */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl font-medium text-safaia-700 mb-8">Nasza misja</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              Wierzymy, że książka może zmienić sposób, w jaki widzimy świat. Może otworzyć nas
              na nowe perspektywy, nauczyć cierpliwości, pokazać piękno w detalu. Dlatego publikujemy
              tytuły, które:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Inspirują do odkrywania świata — jego kultur, tradycji, rzemiosł</li>
              <li>Łączą wiedzę z estetyką — są rzetelne merytorycznie i piękne wizualnie</li>
              <li>Szanują czytelnika — są przemyślane, staranne, dopracowane w każdym detalu</li>
              <li>Promują slow living — uczą doceniania czasu, kontemplacji, uważności</li>
            </ul>
            <p>
              Nie gonimą za ilością. Wybieramy projekty, w które naprawdę wierzymy. Każda książka
              Safaia to efekt miesięcy pracy — od pierwszej rozmowy z autorem, przez redakcję i projekt,
              po wybór drukarni i papieru.
            </p>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* Dla kogo tworzymy */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl font-medium text-safaia-700 mb-8">Dla kogo tworzymy</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              Nasze książki są dla ludzi ciekawych świata. Dla tych, którzy nie lubią pośpiechu.
              Dla miłośników sztuki, designu, fotografii. Dla kolekcjonerów pięknych wydań.
              Dla tych, którzy wierzą, że książka to nie tylko tekst, ale doświadczenie zmysłowe.
            </p>
            <p>
              Jeśli lubisz spędzać czas w księgarniach, przeglądając strony i dotykając papieru.
              Jeśli doceniasz przemyślany design i typografię. Jeśli wierzysz, że forma ma znaczenie —
              to nasze książki są dla Ciebie.
            </p>
          </div>
        </section>

        <div className="divider-elegant"></div>

        {/* CTA */}
        <section className="text-center bg-cream py-16 rounded-lg">
          <h2 className="font-display text-2xl font-medium text-safaia-700 mb-4">
            Dołącz do naszej społeczności
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Śledź nas w social mediach i bądź na bieżąco z nowościami, kulisami wydawniczymi
            i inspiracjami ze świata sztuki i designu.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-3 bg-safaia-700 text-white rounded hover:bg-safaia-800 transition-colors text-sm tracking-wide font-medium"
            >
              SKONTAKTUJ SIĘ
            </Link>
            <Link
              href="/katalog"
              className="px-8 py-3 border border-safaia-700 text-safaia-700 rounded hover:bg-safaia-50 transition-colors text-sm tracking-wide font-medium"
            >
              PRZEGLĄDAJ KATALOG
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
