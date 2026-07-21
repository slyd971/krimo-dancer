import Image from "next/image";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { RevealText } from "@/components/ui/RevealText";
import { tempete, trustedVenues } from "@/data/site-content";

export function LaTempete() {
  return (
    <section id="la-tempete" className="tempete section-pad">
      <RevealText>
        <p className="chapter chapter--yellow">04 / Projet événementiel</p>
        <h2>La Tempête</h2>
        <p className="tempete__baseline">Danser pour vibrer, rassembler, exister.</p>
      </RevealText>
      <div className="tempete__grid">
        <RevealText className="tempete__copy">
          <p>
            La Tempête est un collectif de quatre danseurs réunis par une même envie : transformer
            la danse en moment de joie, de liberté et de partage.
          </p>
          <p>
            Le collectif intervient dans les soirées, clubs, festivals, événements privés et espaces
            culturels avec des shows, happenings freestyle, performances chorégraphiées et
            animations dans la foule.
          </p>
          <ul className="editorial-list">
            {tempete.prestations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="tempete__price">
            <span className="tempete__price-amount">{tempete.price}</span>
            <span className="tempete__price-note">{tempete.priceNote}</span>
          </div>
          <MagneticLink href="#contact" variant="yellow">
            Réserver La Tempête
          </MagneticLink>
        </RevealText>
        <div className="tempete__facts">
          {tempete.facts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </div>
      <p className="trusted-label trusted-label--invert">Ils nous ont fait confiance</p>
      <div className="style-marquee style-marquee--invert" aria-label={trustedVenues.join(", ")}>
        <div aria-hidden="true">
          {[...trustedVenues, ...trustedVenues].map((venue, index) => (
            <span key={`${venue}-${index}`}>{venue}</span>
          ))}
        </div>
      </div>
      <div className="tempete__gallery" aria-label="Galerie La Tempête">
        {tempete.images.map((src, index) => (
          <figure key={src}>
            <Image
              src={src}
              alt={`La Tempête image ${index + 1}`}
              width={1400}
              height={1000}
              sizes="(max-width: 768px) 82vw, 34vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
