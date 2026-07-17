import type { Metadata } from "next";
import { Anton, Archivo, Newsreader } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap"
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krimo.press";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KRIMO — Danseur, performer et créateur de lien social",
  description:
    "Découvrez KRIMO, danseur freestyle et performer à Paris, fondateur du collectif La Tempête et de l’association La Danse ou Rien.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "KRIMO — Danseur, performer et créateur de lien social",
    description:
      "Press kit immersif de KRIMO, danseur freestyle à Paris, fondateur de La Tempête et La Danse ou Rien.",
    url: "/",
    siteName: "KRIMO",
    images: [
      {
        url: "/images/krimo/karim-1.jpeg",
        width: 1200,
        height: 800,
        alt: "KRIMO en mouvement"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "KRIMO — Danseur, performer et créateur de lien social",
    description:
      "L’univers de KRIMO : performance, énergie collective et engagement humain.",
    images: ["/images/krimo/karim-1.jpeg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "KRIMO",
      alternateName: "Karim Traoré",
      jobTitle: "Danseur freestyle, performer et créateur de lien social",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR"
      },
      email: "ladanseourien.asso@gmail.com",
      telephone: "+33758420476",
      sameAs: [
        "https://www.instagram.com/krimo_3006",
        "https://www.instagram.com/latempete_4",
        "https://www.instagram.com/ladanseourien"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "PerformingGroup",
      name: "La Tempête",
      genre: ["Hip-hop", "Afro", "House", "Techno", "Jazz", "Contemporain"],
      sameAs: "https://www.instagram.com/latempete_4"
    }
  ];

  return (
    <html lang="fr">
      <body className={`${anton.variable} ${archivo.variable} ${newsreader.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
