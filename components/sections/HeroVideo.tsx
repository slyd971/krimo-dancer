"use client";

import { useEffect, useState } from "react";
import { MagneticLink } from "@/components/ui/MagneticLink";

export function HeroVideo() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mediaQuery.matches);
    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return (
    <section id="top" className="hero-video" aria-label="KRIMO">
      {!reduceMotion ? (
        <video
          className="hero-video__media"
          src="/videos/hero-krimo.mp4"
          poster="/images/krimo/krimo-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Vidéo de KRIMO en mouvement"
        />
      ) : (
        <div
          className="hero-video__poster"
          role="img"
          aria-label="KRIMO en mouvement"
        />
      )}
      <div className="hero-video__shade" />
      <div className="grain" aria-hidden="true" />
      <div className="hero-video__content">
        <p className="hero-video__kicker">Danseur freestyle / Performer / Créateur de lien social</p>
        <h1>KRIMO</h1>
        <p className="hero-video__baseline">Danser pour rassembler.</p>
        <div className="hero-video__actions">
          <MagneticLink href="#krimo" variant="light">
            Découvrir son univers
          </MagneticLink>
          <MagneticLink href="#contact" variant="yellow">
            Proposer une collaboration
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
