"use client";

import Image from "next/image";
import { useState } from "react";
import { RevealText } from "@/components/ui/RevealText";
import { SectionTitle } from "@/components/ui/SectionTitle";

const nodes = [
  {
    id: "krimo",
    title: "KRIMO",
    subtitle: "L’artiste",
    description: "Présence freestyle, improvisation et interaction directe avec le public.",
    image: "/images/krimo/karim-3.jpeg",
    alt: "KRIMO en portrait artistique"
  },
  {
    id: "tempete",
    title: "LA TEMPÊTE",
    subtitle: "L’énergie collective",
    description: "Un collectif pour clubs, festivals, événements privés et espaces culturels.",
    image: "/images/tempete/gallery-3.jpeg",
    alt: "La Tempête en performance"
  },
  {
    id: "ldor",
    title: "LA DANSE OU RIEN",
    subtitle: "L’impact humain",
    description: "Une association qui utilise la danse comme outil de lien social.",
    image: "/images/ldor/gallery-ladanseourien1.jpg",
    alt: "La Danse ou Rien en action"
  }
];

export function KrimoUniverse() {
  const [active, setActive] = useState(nodes[0]);

  return (
    <section className="universe section-pad" aria-labelledby="universe-title">
      <RevealText>
        <SectionTitle eyebrow="03 / Architecture" title="Un artiste. Deux projets. Une seule vision." />
      </RevealText>
      <div className="universe__stage">
        <div className="universe__links" role="list">
          {nodes.map((node, index) => (
            <button
              key={node.id}
              type="button"
              className={active.id === node.id ? "is-active" : ""}
              onMouseEnter={() => setActive(node)}
              onFocus={() => setActive(node)}
              onClick={() => setActive(node)}
              role="listitem"
            >
              <span>0{index + 1}</span>
              <strong>{node.title}</strong>
              <em>{node.subtitle}</em>
            </button>
          ))}
        </div>
        <div className="universe__image">
          <Image
            key={active.image}
            src={active.image}
            alt={active.alt}
            width={1100}
            height={1400}
            sizes="(max-width: 768px) 92vw, 38vw"
          />
        </div>
        <p className="universe__description">{active.description}</p>
      </div>
    </section>
  );
}
