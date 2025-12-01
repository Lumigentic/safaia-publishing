export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  excerpt: string;
  coverGradient: string;
  isbn: string;
  year: number;
  pages: number;
  authorBio: string;
  featured: boolean;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'Japońska sztuka ikebany',
    author: 'Anna Kowalska',
    category: 'Sztuka',
    description: 'Odkryj filozofię i techniki tradycyjnego japońskiego aranżowania kwiatów. Ta bogato ilustrowana publikacja to podróż przez historię ikebany, od jej początków w świątyniach zen po współczesne interpretacje.',
    excerpt: 'Ikebana to nie tylko układanie kwiatów — to forma medytacji, sposób na kontemplację przemijania i piękna. W tej książce poznasz podstawowe szkoły ikebany, ich filozofię oraz praktyczne techniki, które pozwolą ci samodzielnie tworzyć harmonijne kompozycje.',
    coverGradient: 'from-emerald-400 to-teal-600',
    isbn: '978-83-XXXXX-01-2',
    year: 2024,
    pages: 256,
    authorBio: 'Anna Kowalska to historyczka sztuki i praktykantka ikebany z 15-letnim doświadczeniem. Studiowała w Tokio pod okiem mistrzów szkoły Sogetsu.',
    featured: true
  },
  {
    id: '2',
    title: 'Historia polskiego haftu',
    author: 'Maria Nowak',
    category: 'Sztuka ludowa',
    description: 'Fascynująca podróż przez wieki tradycji hafciarskiej w Polsce. Od średniowiecznych paramentów liturgicznych po współczesne interpretacje ludowych wzorów.',
    excerpt: 'Polski haft to żywa tradycja, która przetrwała stulecia. W każdym ściegu kryje się historia — od kolorowych wzorów łowickich, przez delikatne hafty kaszubskie, po geometryczne motywy górali. Ta książka to hołd dla rzemieślniczek, które przez pokolenia przekazywały swoją wiedzę i umiejętności.',
    coverGradient: 'from-rose-400 to-pink-600',
    isbn: '978-83-XXXXX-02-9',
    year: 2023,
    pages: 312,
    authorBio: 'Maria Nowak jest etnografką i konserwatorką zabytków. Od lat dokumentuje tradycyjne techniki hafciarskie w Polsce.',
    featured: true
  },
  {
    id: '3',
    title: 'Fotografie zapomnianych miejsc',
    author: 'Piotr Wiśniewski',
    category: 'Fotografia',
    description: 'Album fotograficzny przedstawiający opuszczone budynki i zapomniane zakątki Europy. Stare fabryki, pałace, kina i szpitale — każde z nich kryje historię ludzi, którzy tam żyli.',
    excerpt: 'Opuszczone miejsca mają w sobie coś hipnotyzującego. Ta fotografia urbexu to nie tylko dokumentacja zniszczenia, ale przede wszystkim próba zachowania pamięci. Każde zdjęcie w tym albumie opowiada historię — o ludziach, marzeniach i przemijaniu.',
    coverGradient: 'from-slate-400 to-gray-700',
    isbn: '978-83-XXXXX-03-6',
    year: 2024,
    pages: 180,
    authorBio: 'Piotr Wiśniewski to fotograf dokumentalista specjalizujący się w architekturze i przestrzeniach opuszczonych.',
    featured: true
  },
  {
    id: '4',
    title: 'Moda lat 20. XX wieku',
    author: 'Ewa Zielińska',
    category: 'Moda',
    description: 'Lata dwudzieste zmieniły świat mody na zawsze. Kobiety skróciły włosy i suknie, zaczęły nosić spodnie i prowadzić samochody. Historia modowej rewolucji opowiedziana przez pryzmat projektantów, ikon stylu i zmian społecznych.',
    excerpt: 'Flapper dress, kapelusz cloche, perły Coco Chanel — lata 20. to dekada, która wyzwoliła kobiecą modę z krynolin i gorsetów. To czas Josephine Baker, Zeldy Fitzgerald i pierwszych modelek. Ta książka pokazuje, jak moda stała się wyrazem wolności i emancypacji.',
    coverGradient: 'from-amber-400 to-orange-600',
    isbn: '978-83-XXXXX-04-3',
    year: 2023,
    pages: 280,
    authorBio: 'Ewa Zielińska jest historykiem mody i kuratorką wystaw. Specjalizuje się w modzie XX wieku.',
    featured: true
  },
  {
    id: '5',
    title: 'Bauhaus: Forma i funkcja',
    author: 'Katarzyna Majewska',
    category: 'Sztuka',
    description: 'Rewolucja w myśleniu o designie. Historia niemieckiej szkoły sztuki, jej najważniejszych przedstawicieli oraz wpływ, jaki wywiera na współczesny świat.',
    excerpt: 'Bauhaus to nie tylko styl architektoniczny — to filozofia, która zmieniła sposób, w jaki projektujemy świat. Od mebli Marcela Breuera, przez typografię Herberta Bayera, po architekturę Waltera Gropiusa — wpływ Bauhausu jest wszechobecny, choć często nieświadomy.',
    coverGradient: 'from-blue-400 to-indigo-600',
    isbn: '978-83-XXXXX-05-0',
    year: 2024,
    pages: 224,
    authorBio: 'Katarzyna Majewska jest wykładowczynią historii sztuki i projektowania. Badaczka wpływu Bauhausu na współczesny design.',
    featured: true
  },
  {
    id: '6',
    title: 'Kulinarna historia Polski',
    author: 'Tomasz Lewandowski',
    category: 'Historia kulinariów',
    description: 'Od średniowiecznych uczt po współczesną kuchnię molekularną. Jak jadano na dworach królewskich? Skąd wzięły się nasze tradycyjne potrawy?',
    excerpt: 'Polska kuchnia to mozaika wpływów — włoskich, francuskich, żydowskich, tatarskich. W tej książce znajdziesz nie tylko przepisy, ale przede wszystkim historie: o tym, jak rosół stał się narodowym lekarstwem, dlaczego bigos jest królem polskiego stołu, i jak pierogi podbiły świat.',
    coverGradient: 'from-lime-400 to-green-600',
    isbn: '978-83-XXXXX-06-7',
    year: 2023,
    pages: 344,
    authorBio: 'Tomasz Lewandowski to kulinarny historyk i autor książek kulinarnych. Prowadzi badania nad historią polskiej kuchni.',
    featured: true
  }
];

export const categories = [
  'Wszystkie',
  'Sztuka',
  'Moda',
  'Fotografia',
  'Sztuka ludowa',
  'Historia kulinariów'
];
