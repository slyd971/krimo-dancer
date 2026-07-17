export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tone: "krimo" | "tempete" | "ldor";
  shape: "wide" | "tall" | "square";
};

export const contact = {
  // TODO: remplacer par l'email de booking dédié quand disponible — actuellement l'email associatif.
  email: "ladanseourien.asso@gmail.com",
  phone: "+33 7 58 42 04 76",
  phoneHref: "tel:+33758420476",
  address: "Paris, France",
  socials: [
    { label: "Instagram KRIMO", href: "https://www.instagram.com/krimo_3006" },
    { label: "Instagram La Tempête", href: "https://www.instagram.com/latempete_4" },
    { label: "Instagram La Danse ou Rien", href: "https://www.instagram.com/ladanseourien" },
    { label: "TikTok @krimo_3006", href: "https://www.tiktok.com/@krimo_3006" }
  ]
};

// Liens externes à finaliser côté association. Un seul endroit à modifier
// quand les pages HelloAsso existeront.
export const LINKS = {
  don: "[URL_HELLOASSO_DON]",
  adhesion: "[URL_HELLOASSO_ADHESION]",
  // temporaire : pas de page dédiée aujourd'hui, cf. audit
  maraude: "https://www.instagram.com/ladanseourien"
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
  facts: ["4 danseurs", "Paris", "Shows et animations", "Déplacements hors Paris à prévoir"],
  images: [
    "/images/tempete/gallery-3.jpeg",
    "/images/tempete/gallery-9.jpeg",
    "/images/tempete/gallery-8.jpeg",
    "/images/tempete/flyer-latempete-1.jpg"
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
  places: [
    "Concorde Atlantique — Paris",
    "La Bellevilloise — Paris",
    "River’s King — Paris",
    "Punk Paradise — Paris",
    "La Felicità — Paris",
    "Le Point Éphémère — Paris",
    "Autres événements et soirées à Paris et en Île-de-France"
  ],
  roles: [
    "Danseur freestyle indépendant",
    "Membre et fondateur du collectif La Tempête",
    "Fondateur de La Danse ou Rien",
    "Animateur et intervenant pédagogique",
    "Directeur de collectif artistique"
  ]
};

export const gallery: GalleryItem[] = [
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
    caption: "Créer du lien par le mouvement.",
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
  "Marques",
  "Agences",
  "Médias",
  "Institutions culturelles",
  "Associations",
  "Collectivités",
  "Lieux sociaux et culturels"
];

export const collaborationOffers = [
  "Performance solo",
  "Show collectif",
  "Animation de soirée",
  "Accompagnement d’un DJ set",
  "Workshop",
  "Intervention pédagogique",
  "Projet culturel ou solidaire",
  "Collaboration de marque"
];
