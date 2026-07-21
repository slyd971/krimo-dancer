export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tone: "krimo" | "tempete" | "ldor";
  shape: "wide" | "tall" | "square";
  type?: "image" | "video";
};

export const contact = {
  // TODO: remplacer par l'email de booking dédié quand disponible — actuellement l'email associatif.
  email: "ladanseourien.asso@gmail.com",
  whatsappHref: "https://wa.me/33758420476",
  address: "Paris, France",
  socials: [
    { label: "Instagram KRIMO", href: "https://www.instagram.com/krimo_3006" },
    { label: "Instagram La Tempête", href: "https://www.instagram.com/latempete_4" },
    { label: "Instagram La Danse ou Rien", href: "https://www.instagram.com/ladanseourien" },
    { label: "TikTok @krimo_3006", href: "https://www.tiktok.com/@krimo_3006" }
  ]
};

export const LINKS = {
  instagram: "https://www.instagram.com/ladanseourien",
  linktree: "https://linktr.ee/ladanseourien.association"
};

export const navItems = [
  { label: "KRIMO", href: "#krimo" },
  { label: "LA TEMPÊTE", href: "#la-tempete" },
  { label: "LA DANSE OU RIEN", href: "#la-danse-ou-rien" },
  { label: "CONTACT", href: "#contact" }
];

export const krimoStyles = [
  "Freestyle",
  "Afro",
  "Amapiano",
  "Hip-hop",
  "Dancehall",
  "Funk",
  "Shatta",
  "Latino",
  "Reggaeton",
  "Caribbean vibes"
];

export const tempete = {
  prestations: [
    "Performance et shows",
    "Soirées et événements",
    "Accompagnement de DJ sets",
    "Interventions dans la foule",
    "Ateliers et actions culturelles"
  ],
  price: "400 € HT",
  priceNote: "Tarif fixe",
  facts: ["4 danseurs dont 1 DJ", "Paris", "Shows et animations", "Déplacements hors Paris à prévoir"],
  images: [
    "/images/tempete/gallery-3.webp",
    "/images/tempete/gallery-9.webp",
    "/images/tempete/gallery-8.webp",
    "/images/tempete/gallery-tempete15.webp",
    "/images/tempete/gallery-7.webp",
    "/images/tempete/gallery-11.webp",
    "/images/tempete/gallery-13.webp",
    "/images/tempete/gallery-latempete-1.webp",
    "/images/tempete/gallery-latempete-2.webp",
    "/images/tempete/gallery-latempete-3.webp",
    "/images/tempete/flyer-latempete-1.webp",
    "/images/tempete/flyer-latempete-2.webp",
    "/images/tempete/flyer-latempete-3.webp",
    "/images/tempete/flyer-latempete-4.webp"
  ]
};

export const ldor = {
  actions: [
    "Maraudes dansantes",
    "Ateliers de danse",
    "Rencontres artistiques",
    "Interventions associatives",
    "Actions culturelles ouvertes à tous"
  ],
  facts: [
    "Association créée le 24 juin 2025",
    "Plus de 23 maraudes dansantes",
    "Maraudes les mardis à République",
    "Événements, ateliers et performances"
  ],
  images: [
    "/images/ldor/gallery-ladanseourien1.jpg",
    "/images/ldor/gallery-ladanseourien2.jpg",
    "/images/ldor/flyer-ladanseourien1.jpg"
  ]
};

export const experience = {
  roles: [
    "Danseur freestyle indépendant",
    "Membre et fondateur du collectif La Tempête",
    "Fondateur de La Danse ou Rien",
    "Animateur et intervenant pédagogique",
    "Directeur de collectif artistique"
  ]
};

export const trustedVenues = [
  "La Bellevilloise",
  "Concorde Atlantique",
  "River’s King",
  "Punk Paradise",
  "La Felicità",
  "Le Point Éphémère",
  "La Javelle",
  "Metaxu",
  "F.M.R."
];

export const gallery: GalleryItem[] = [
  {
    src: "/videos/hero-krimo.mp4",
    alt: "KRIMO en solo, extrait de la vidéo hero",
    caption: "Solo, énergie brute, sans filtre.",
    tone: "krimo",
    shape: "tall",
    type: "video"
  },
  {
    src: "/images/krimo/karim-1.jpeg",
    alt: "KRIMO en performance dans un espace scénique",
    caption: "Freestyle, présence, contact direct.",
    tone: "krimo",
    shape: "wide"
  },
  {
    src: "/images/tempete/gallery-1.jpeg",
    alt: "La Tempête en intervention événementielle",
    caption: "La foule comme scène vivante.",
    tone: "tempete",
    shape: "square"
  },
  {
    src: "/images/tempete/gallery-10.jpeg",
    alt: "Danseurs de La Tempête pendant un événement",
    caption: "Énergie collective, format événement.",
    tone: "tempete",
    shape: "wide"
  },
  {
    src: "/images/ldor/gallery-ladanseourien3.jpg",
    alt: "Action solidaire de La Danse ou Rien",
    caption: "Une maraude, un geste, un lien.",
    tone: "ldor",
    shape: "tall"
  },
  {
    src: "/images/ldor/gallery-ladanseourien4.jpg",
    alt: "Atelier ou maraude dansante La Danse ou Rien",
    caption: "Danser pour ouvrir un espace commun.",
    tone: "ldor",
    shape: "square"
  },
  {
    src: "/images/tempete/Gallery-12.jpeg",
    alt: "Portrait vertical d’un danseur de La Tempête",
    caption: "Nightlife, impact, improvisation.",
    tone: "tempete",
    shape: "tall"
  }
];

export const collaborationTargets = [
  "Organisateurs d’événements",
  "Clubs et festivals",
  "Marques et agences",
  "Institutions culturelles et collectivités"
];

export const collaborationOffers = [
  "Performance solo",
  "Show collectif",
  "Accompagnement d’un DJ set",
  "Workshop et intervention pédagogique"
];
