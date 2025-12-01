# Wydawnictwo Safaia

Premium publishing house website built with Next.js, TypeScript, and Tailwind CSS. Inspired by the elegant design of Faber, Taschen, and Rizzoli.

## Features

- **Premium Editorial Design** — Minimal, elegant interface with generous whitespace
- **Responsive** — Fully responsive design that works on all devices
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML
- **Accessible** — ARIA labels, keyboard navigation, high contrast
- **6 Complete Pages**:
  - Home — Hero, about, featured books, values, CTA
  - Catalog — Filterable book gallery
  - Book Detail — Individual book pages with full information
  - About — Company history, mission, values
  - For Authors — Submission form for new book proposals
  - Contact — Contact form, info, and FAQ

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Cormorant Garamond (display), Inter (body)
- **Icons**: SVG icons
- **Deployment**: Vercel (recommended)

## Color Palette

- **Primary (Sapphire)**: `#334782`
- **Accents**: Indigo, Violet
- **Cream Background**: `#F7F8FB`
- **Neutrals**: Charcoal, Gray scale

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd safaia-publishing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
safaia-publishing/
├── app/
│   ├── layout.tsx           # Root layout with Navigation & Footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles & Tailwind theme
│   ├── katalog/             # Catalog pages
│   │   ├── page.tsx         # Book catalog
│   │   └── [slug]/page.tsx  # Individual book pages
│   ├── o-nas/               # About page
│   ├── dla-autorow/         # For authors page
│   └── kontakt/             # Contact page
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer with newsletter
│   └── BookCard.tsx         # Book card component
├── data/
│   └── books.ts             # Book data (6 sample books)
└── public/                  # Static assets
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Deploy to Other Platforms

The site can also be deployed to:
- **Netlify**: Connect your GitHub repo
- **Railway**: `railway init` and `railway up`
- **Custom server**: Run `npm run build` and `npm start`

## Customization

### Adding New Books

Edit [data/books.ts](data/books.ts):

```typescript
export const books: Book[] = [
  {
    id: '7',
    title: 'Your Book Title',
    author: 'Author Name',
    category: 'Sztuka',
    description: 'Book description...',
    excerpt: 'Extended excerpt...',
    coverGradient: 'from-blue-400 to-indigo-600',
    isbn: '978-83-XXXXX-07-4',
    year: 2024,
    pages: 200,
    authorBio: 'Author biography...',
    featured: true
  },
  // ... existing books
];
```

### Changing Colors

Edit [app/globals.css](app/globals.css) in the `@theme` section:

```css
@theme {
  --color-safaia-700: #334782;  /* Primary color */
  --color-cream: #F7F8FB;        /* Background accent */
  /* ... other colors */
}
```

### Modifying Typography

Edit font imports in [app/globals.css](app/globals.css):

```css
@import url('your-google-fonts-url');

@theme {
  --font-family-display: 'Your Display Font', serif;
  --font-family-body: 'Your Body Font', sans-serif;
}
```

## Forms

The contact form and author submission form currently use client-side validation only. To enable actual email sending:

1. Add a form backend like:
   - [Formspree](https://formspree.io)
   - [EmailJS](https://www.emailjs.com)
   - Next.js API routes with Nodemailer

2. Update the `handleSubmit` functions in:
   - [app/kontakt/page.tsx](app/kontakt/page.tsx)
   - [app/dla-autorow/page.tsx](app/dla-autorow/page.tsx)

## SEO

Each page includes:
- Custom meta titles and descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Polish language attribute (`lang="pl"`)

To improve SEO further:
- Add a `sitemap.xml`
- Add a `robots.txt`
- Implement structured data (JSON-LD)
- Add `alt` tags to all images

## Accessibility

The site includes:
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- High contrast text

To test accessibility:
- Use browser developer tools (Lighthouse)
- Test with screen readers
- Navigate using only keyboard

## License

This project is licensed under the MIT License.

## Support

For questions or issues:
- Email: kontakt@safaia.pl
- GitHub Issues: [Create an issue](<your-repo-url>/issues)

---

Built with ❤️ by Wydawnictwo Safaia
