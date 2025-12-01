import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wydawnictwo Safaia — Piękno w prostocie",
  description: "Tworzymy książki, które inspirują do odkrywania świata. Łączymy piękno z wiedzą, tradycję ze współczesnością, prostotę z głębią.",
  keywords: "wydawnictwo, książki, sztuka, kultura, rzemiosło, fotografia, moda, historia",
  authors: [{ name: "Wydawnictwo Safaia" }],
  openGraph: {
    title: "Wydawnictwo Safaia — Piękno w prostocie",
    description: "Tworzymy książki, które inspirują do odkrywania świata.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
