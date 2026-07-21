import { RevealText } from "@/components/ui/RevealText";
import { references } from "@/data/references";
import { experience, trustedVenues } from "@/data/site-content";

function formatReference({ lieu, evenement, annee }: (typeof references)[number]) {
  if (!evenement) return lieu;
  return annee ? `${lieu} — ${evenement} (${annee})` : `${lieu} — ${evenement}`;
}

export function Experience() {
  return (
    <section className="experience section-pad">
      <RevealText>
        <p className="chapter">06 / Expérience</p>
        <h2>Sur le terrain, dans la foule, sur scène.</h2>
      </RevealText>
      <div className="experience__poster">
        <div>
          <p>Références</p>
          <ul>
            {references.map((reference) => (
              <li key={reference.lieu}>{formatReference(reference)}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Rôles</p>
          <ul>
            {experience.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="trusted-label">Ils nous ont fait confiance</p>
      <div className="style-marquee" aria-label={trustedVenues.join(", ")}>
        <div aria-hidden="true">
          {[...trustedVenues, ...trustedVenues].map((venue, index) => (
            <span key={`${venue}-${index}`}>{venue}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
