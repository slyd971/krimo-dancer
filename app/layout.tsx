import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Newsreader } from "next/font/google";
import { contact } from "@/data/site-content";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krimo-dancer.presskit.fr";

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
        url: "/images/og/krimo-og.jpg",
        width: 1200,
        height: 630,
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
    images: ["/images/og/krimo-og.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#050505"
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
      url: siteUrl,
      image: `${siteUrl}/images/og/krimo-og.jpg`,
      jobTitle: "Danseur freestyle, performer et créateur de lien social",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR"
      },
      email: contact.email,
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
      url: `${siteUrl}/#la-tempete`,
      genre: ["Hip-hop", "Afro", "House", "Techno", "Jazz", "Contemporain"],
      sameAs: "https://www.instagram.com/latempete_4"
    },
    {
      "@context": "https://schema.org",
      "@type": "NGO",
      name: "La Danse ou Rien",
      url: `${siteUrl}/#la-danse-ou-rien`,
      description:
        "Association artistique et solidaire fondée par Karim Traoré, qui utilise la danse comme outil de lien social auprès des personnes sans-abri, réfugiées et publics fragiles.",
      email: contact.email,
      foundingDate: "2025-06-24",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR"
      },
      sameAs: "https://www.instagram.com/ladanseourien"
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
