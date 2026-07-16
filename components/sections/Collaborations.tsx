import { MagneticLink } from "@/components/ui/MagneticLink";
import { RevealText } from "@/components/ui/RevealText";
import { collaborationOffers, collaborationTargets } from "@/data/site-content";

export function Collaborations() {
  return (
    <section className="collaborations section-pad">
      <RevealText>
        <p className="chapter">08 / Collaborations</p>
        <h2>Faisons bouger votre projet.</h2>
      </RevealText>
      <div className="collaborations__columns">
        <div>
          <p>Cibles</p>
          <ul>
            {collaborationTargets.map((target) => (
              <li key={target}>{target}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Formats</p>
          <ul>
            {collaborationOffers.map((offer) => (
              <li key={offer}>{offer}</li>
            ))}
          </ul>
        </div>
      </div>
      <MagneticLink href="#contact" variant="dark">
        Parler du projet
      </MagneticLink>
    </section>
  );
}
