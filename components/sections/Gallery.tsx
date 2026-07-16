"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { gallery } from "@/data/site-content";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : gallery[activeIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((activeIndex + 1) % gallery.length);
      if (event.key === "ArrowLeft") setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section className="gallery-section section-pad" aria-labelledby="gallery-title">
      <SectionTitle
        eyebrow="07 / Galerie"
        title="Fragments de scène, de rue et de lien."
        intro="Une galerie éditoriale qui traverse les trois dimensions de l’univers KRIMO."
      />
      <div className="editorial-gallery">
        {gallery.map((item, index) => (
          <button
            type="button"
            className={`gallery-tile gallery-tile--${item.shape} gallery-tile--${item.tone}`}
            key={item.src}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1400}
              height={1600}
              sizes="(max-width: 768px) 92vw, 32vw"
            />
            <span>{item.caption}</span>
          </button>
        ))}
      </div>
      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActiveIndex(null)}
        >
          <button className="lightbox__close" type="button" onClick={() => setActiveIndex(null)}>
            Fermer
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex! - 1 + gallery.length) % gallery.length);
            }}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <Image src={active.src} alt={active.alt} width={1600} height={1800} sizes="92vw" />
            <figcaption>{active.caption}</figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex! + 1) % gallery.length);
            }}
            aria-label="Image suivante"
          >
            ›
          </button>
        </div>
      ) : null}
    </section>
  );
}
